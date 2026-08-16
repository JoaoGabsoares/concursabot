import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize native built-in database (Zero compilation / No C++ addon needed)
const dbPath = path.join(__dirname, '../concursabot.db');
const db = new DatabaseSync(dbPath);

// Backward compatibility wrapper for prepare to handle undefined -> null gracefully
const originalPrepare = db.prepare.bind(db);
db.prepare = function(sql) {
    const stmt = originalPrepare(sql);
    const wrapArgs = (args) => args.map(arg => arg === undefined ? null : arg);
    return {
        run(...args) {
            return stmt.run(...wrapArgs(args));
        },
        get(...args) {
            return stmt.get(...wrapArgs(args));
        },
        all(...args) {
            return stmt.all(...wrapArgs(args));
        }
    };
};

// Backward compatibility helper for pragma
db.pragma = function(str) {
    if (str.includes('=')) {
        db.exec(`PRAGMA ${str};`);
        return;
    }
    return db.prepare(`PRAGMA ${str};`).all();
};

// Backward compatibility helper for transactions
db.transaction = function(fn) {
    return function(...args) {
        db.exec('BEGIN TRANSACTION;');
        try {
            const result = fn(...args);
            db.exec('COMMIT;');
            return result;
        } catch (err) {
            db.exec('ROLLBACK;');
            throw err;
        }
    };
};

// Enable WAL mode for better concurrency and performance
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');
db.pragma('foreign_keys = ON');

// Initialize database schema
function initDB() {
    db.exec(`
        -- Chat sessions and messages
        CREATE TABLE IF NOT EXISTS chat_sessions (
            id TEXT PRIMARY KEY,
            subject TEXT NOT NULL,
            title TEXT,
            career_id TEXT DEFAULT 'atrfb',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL CHECK(role IN ('user', 'model')),
            text TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE
        );

        -- Questions and answers tracking
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            topic TEXT,
            banca TEXT,
            type TEXT DEFAULT 'multiple_choice',
            question_text TEXT NOT NULL,
            options TEXT NOT NULL, -- JSON array
            correct_index INTEGER NOT NULL,
            explanation TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_questions_banca_subject ON questions(banca, subject);

        CREATE TABLE IF NOT EXISTS question_answers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question_id INTEGER NOT NULL,
            selected_answer INTEGER NOT NULL,
            is_correct BOOLEAN NOT NULL,
            answered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (question_id) REFERENCES questions(id)
        );

        -- Simulados (mock exams)
        CREATE TABLE IF NOT EXISTS simulados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            banca TEXT,
            subjects TEXT NOT NULL, -- JSON array
            question_count INTEGER NOT NULL,
            time_limit_minutes INTEGER,
            time_spent_seconds INTEGER,
            score INTEGER DEFAULT 0,
            status TEXT DEFAULT 'in_progress' CHECK(status IN ('in_progress', 'completed')),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            completed_at DATETIME
        );

        CREATE TABLE IF NOT EXISTS simulado_questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            simulado_id INTEGER NOT NULL,
            question_id INTEGER NOT NULL,
            selected_answer INTEGER,
            is_correct BOOLEAN,
            FOREIGN KEY (simulado_id) REFERENCES simulados(id) ON DELETE CASCADE,
            FOREIGN KEY (question_id) REFERENCES questions(id)
        );

        -- Summaries
        CREATE TABLE IF NOT EXISTS summaries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            original_text TEXT NOT NULL,
            summary TEXT NOT NULL,
            type TEXT DEFAULT 'strategic',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Edital analyses
        CREATE TABLE IF NOT EXISTS edital_analyses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cargo TEXT,
            edital_text TEXT NOT NULL,
            analysis TEXT NOT NULL, -- JSON
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Flashcard decks and cards
        CREATE TABLE IF NOT EXISTS flashcard_decks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            topic TEXT NOT NULL,
            subject TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS flashcards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            deck_id INTEGER NOT NULL,
            front TEXT NOT NULL,
            back TEXT NOT NULL,
            ease_factor REAL DEFAULT 2.5,
            interval_days INTEGER DEFAULT 0,
            repetitions INTEGER DEFAULT 0,
            next_review DATETIME DEFAULT CURRENT_TIMESTAMP,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (deck_id) REFERENCES flashcard_decks(id) ON DELETE CASCADE
        );

        -- Study schedules
        CREATE TABLE IF NOT EXISTS schedules (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            config TEXT NOT NULL, -- JSON (subjects, hoursPerDay, etc.)
            schedule_data TEXT NOT NULL, -- JSON (the generated schedule)
            exam_date TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS schedule_tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            schedule_id INTEGER NOT NULL,
            day_of_week INTEGER,
            week_number INTEGER,
            subject TEXT NOT NULL,
            topic TEXT,
            duration_minutes INTEGER,
            completed BOOLEAN DEFAULT 0,
            completed_at DATETIME,
            FOREIGN KEY (schedule_id) REFERENCES schedules(id) ON DELETE CASCADE
        );

        -- Daily activity log for dashboard
        CREATE TABLE IF NOT EXISTS activity_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL, -- 'question', 'flashcard', 'simulado', 'summary', 'study', 'material'
            detail TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Study Room: uploaded PDF materials
        CREATE TABLE IF NOT EXISTS study_materials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            filepath TEXT NOT NULL,
            subject TEXT,
            lesson_number INTEGER,
            title TEXT,
            summary TEXT,
            content_text TEXT,       -- Full extracted text for contextual chat
            analysis_json TEXT,      -- JSON analysis from Gemini
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Study Room: study sessions with timer
        CREATE TABLE IF NOT EXISTS study_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            material_id INTEGER NOT NULL,
            duration_minutes INTEGER NOT NULL,
            actual_duration_seconds INTEGER,
            status TEXT DEFAULT 'active' CHECK(status IN ('active', 'completed', 'paused')),
            scope_note TEXT, -- até onde o aluno marcou que chegou nesta sessão (escopo das questões de fixação)
            started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            completed_at DATETIME,
            FOREIGN KEY (material_id) REFERENCES study_materials(id) ON DELETE CASCADE
        );

        -- Study Room: fixation questions generated after session
        CREATE TABLE IF NOT EXISTS session_questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id INTEGER NOT NULL,
            material_id INTEGER NOT NULL,
            question_text TEXT NOT NULL,
            options TEXT NOT NULL,       -- JSON array
            correct_index INTEGER NOT NULL,
            explanation TEXT,
            difficulty TEXT DEFAULT 'medio',
            topic TEXT,
            selected_answer INTEGER,
            is_correct BOOLEAN,
            answered_at DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES study_sessions(id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES study_materials(id)
        );

        -- Study Room: contextual chat during study session
        CREATE TABLE IF NOT EXISTS session_chat (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id INTEGER NOT NULL,
            role TEXT NOT NULL CHECK(role IN ('user', 'model')),
            text TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES study_sessions(id) ON DELETE CASCADE
        );

        -- Missed Sessions / Backlog / Reposição de Matérias
        CREATE TABLE IF NOT EXISTS missed_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            lesson_number INTEGER,
            title TEXT,
            reason TEXT,
            target_slot TEXT DEFAULT 'Hoje à noite',
            status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'completed')),
            user_id TEXT DEFAULT 'user_joao',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            resolved_at DATETIME
        );

        -- Spaced Repetition Reviews (D+1, D+7, D+30)
        CREATE TABLE IF NOT EXISTS study_reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            material_id INTEGER NOT NULL,
            subject TEXT NOT NULL,
            lesson_number INTEGER,
            review_type TEXT NOT NULL CHECK(review_type IN ('d1', 'd7', 'd30')),
            scheduled_date DATE NOT NULL,
            status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'completed', 'skipped')),
            completed_at DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (material_id) REFERENCES study_materials(id) ON DELETE CASCADE
        );

        CREATE INDEX IF NOT EXISTS idx_reviews_date_status ON study_reviews(scheduled_date, status);

        -- RAG Knowledge Base: Documents and vector chunks
        CREATE TABLE IF NOT EXISTS rag_documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            filepath TEXT NOT NULL UNIQUE,
            subject TEXT DEFAULT 'Geral',
            total_chunks INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS rag_chunks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            document_id INTEGER NOT NULL,
            chunk_index INTEGER NOT NULL,
            content TEXT NOT NULL,
            embedding TEXT NOT NULL, -- JSON array of floats (768 dimensions)
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (document_id) REFERENCES rag_documents(id) ON DELETE CASCADE
        );

        -- Caderno de Erros Automatizado (Smart Error Bank)
        CREATE TABLE IF NOT EXISTS caderno_erros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            career_id TEXT,
            question_id INTEGER NOT NULL,
            wrong_answer_index INTEGER,
            status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'reviewing', 'mastered')),
            review_count INTEGER DEFAULT 0,
            notes TEXT,
            last_reviewed_at DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
        );
        CREATE INDEX IF NOT EXISTS idx_caderno_user_status ON caderno_erros(user_id, status);
        CREATE INDEX IF NOT EXISTS idx_caderno_question ON caderno_erros(question_id);

        -- Corretor de Redação Discursiva IA
        CREATE TABLE IF NOT EXISTS redacoes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            career_id TEXT,
            banca TEXT,
            tema TEXT NOT NULL,
            texto TEXT NOT NULL,
            word_count INTEGER,
            line_count INTEGER,
            nota_total REAL,
            nota_tema REAL,
            nota_estrutura REAL,
            nota_gramatica REAL,
            nota_argumentacao REAL,
            feedback_json TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_redacoes_user ON redacoes(user_id, created_at DESC);

        CREATE INDEX IF NOT EXISTS idx_rag_chunks_doc ON rag_chunks(document_id);
        CREATE INDEX IF NOT EXISTS idx_flashcards_deck ON flashcards(deck_id);
        CREATE INDEX IF NOT EXISTS idx_flashcards_next_review ON flashcards(next_review);
        CREATE INDEX IF NOT EXISTS idx_question_answers_qid ON question_answers(question_id);
        CREATE INDEX IF NOT EXISTS idx_simulado_questions_sid ON simulado_questions(simulado_id);
        CREATE INDEX IF NOT EXISTS idx_chat_messages_session ON chat_messages(session_id);
        CREATE INDEX IF NOT EXISTS idx_chat_messages_session_time ON chat_messages(session_id, created_at ASC);
        CREATE INDEX IF NOT EXISTS idx_session_chat_session ON session_chat(session_id);
        CREATE INDEX IF NOT EXISTS idx_session_chat_session_time ON session_chat(session_id, created_at ASC);
        CREATE INDEX IF NOT EXISTS idx_session_questions_material ON session_questions(material_id);
        CREATE INDEX IF NOT EXISTS idx_session_questions_session ON session_questions(session_id);
        CREATE INDEX IF NOT EXISTS idx_study_sessions_material ON study_sessions(material_id);
        CREATE INDEX IF NOT EXISTS idx_study_sessions_material_started ON study_sessions(material_id, started_at DESC);
        CREATE INDEX IF NOT EXISTS idx_schedule_tasks_sched ON schedule_tasks(schedule_id);
        CREATE INDEX IF NOT EXISTS idx_missed_sessions_pending ON missed_sessions(status, created_at DESC);
        CREATE INDEX IF NOT EXISTS idx_study_materials_filepath ON study_materials(filepath);
    `);

    // Safe migration for existing databases
    try {
        const columns = db.pragma('table_info(study_materials)');
        const colNames = columns.map(c => c.name);
        
        if (!colNames.includes('lesson_number')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN lesson_number INTEGER DEFAULT NULL;');
        }
        if (!colNames.includes('studied_at')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN studied_at DATE DEFAULT NULL;');
        }
        if (!colNames.includes('theory_completed')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN theory_completed BOOLEAN DEFAULT 0;');
        }
        if (!colNames.includes('questions_completed')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN questions_completed BOOLEAN DEFAULT 0;');
        }
        if (!colNames.includes('caderno_enxuto')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN caderno_enxuto TEXT DEFAULT NULL;');
        }
        
        db.exec('CREATE INDEX IF NOT EXISTS idx_materials_subject_lesson ON study_materials(subject, lesson_number);');

        // Table for 3 Last Official Exams Benchmarks
        db.exec(`
            CREATE TABLE IF NOT EXISTS exam_benchmarks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                career_id TEXT NOT NULL,
                edition_year INTEGER NOT NULL,
                banca TEXT NOT NULL,
                role TEXT NOT NULL,
                corte_historico TEXT,
                vagas_total INTEGER,
                edital_summary_json TEXT,
                provas_gabaritos_json TEXT,
                pegadinhas_historicas_json TEXT,
                temas_discursivas_json TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_benchmarks_career ON exam_benchmarks(career_id, edition_year);

            -- Table for Accounts (Zero Cost Multi-Tenant Auth)
            CREATE TABLE IF NOT EXISTS accounts (
                id TEXT PRIMARY KEY,
                username TEXT UNIQUE NOT NULL,
                email TEXT,
                password_hash TEXT NOT NULL,
                salt TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_login_at DATETIME
            );
            CREATE INDEX IF NOT EXISTS idx_accounts_username ON accounts(username);

            CREATE TABLE IF NOT EXISTS auth_sessions (
                token TEXT PRIMARY KEY,
                account_id TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                expires_at DATETIME NOT NULL,
                FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
            );
            CREATE INDEX IF NOT EXISTS idx_sessions_account ON auth_sessions(account_id);

            -- Table for User Profiles (Multi-User Switcher, linked to account)
            CREATE TABLE IF NOT EXISTS user_profiles (
                id TEXT PRIMARY KEY,
                account_id TEXT DEFAULT NULL,
                name TEXT NOT NULL,
                avatar_emoji TEXT DEFAULT '👨‍💼',
                active_career_id TEXT DEFAULT 'atrfb',
                color_theme TEXT DEFAULT 'blue',
                is_default BOOLEAN DEFAULT 0,
                target_role TEXT DEFAULT 'Analista Tributário',
                target_banca TEXT DEFAULT 'FGV',
                experience_level TEXT DEFAULT 'iniciante',
                daily_hours INTEGER DEFAULT 4,
                study_shifts TEXT DEFAULT '["manha", "noite"]',
                preferred_material TEXT DEFAULT 'enxuto',
                custom_exam_title TEXT DEFAULT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_active_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_user_profiles_last_active ON user_profiles(last_active_at DESC);
        `);

        // Migration for existing user_profiles columns
        const userCols = db.pragma('table_info(user_profiles)').map(c => c.name);
        if (!userCols.includes('account_id')) {
            try {
                db.exec('ALTER TABLE user_profiles ADD COLUMN account_id TEXT DEFAULT NULL;');
            } catch (e) {
                // Column might already exist
            }
        }
        try {
            db.exec('CREATE INDEX IF NOT EXISTS idx_user_profiles_account ON user_profiles(account_id);');
        } catch (e) {}
        if (!userCols.includes('target_role')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN target_role TEXT DEFAULT "Analista Tributário";');
        }
        if (!userCols.includes('target_banca')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN target_banca TEXT DEFAULT "FGV";');
        }
        if (!userCols.includes('experience_level')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN experience_level TEXT DEFAULT "iniciante";');
        }
        if (!userCols.includes('daily_hours')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN daily_hours INTEGER DEFAULT 4;');
        }
        if (!userCols.includes('study_shifts')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN study_shifts TEXT DEFAULT \'["manha", "noite"]\';');
        }
        if (!userCols.includes('preferred_material')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN preferred_material TEXT DEFAULT "enxuto";');
        }
        if (!userCols.includes('custom_exam_title')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN custom_exam_title TEXT DEFAULT NULL;');
        }
        if (!userCols.includes('google_calendar_enabled')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN google_calendar_enabled INTEGER DEFAULT 0;');
        }
        if (!userCols.includes('google_calendar_url')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN google_calendar_url TEXT DEFAULT NULL;');
        }
        if (!userCols.includes('tutor_style')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN tutor_style TEXT DEFAULT "pratico";');
        }
        if (!userCols.includes('sound_effects_enabled')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN sound_effects_enabled INTEGER DEFAULT 1;');
        }

        // Migration for study_materials columns
        const matCols = db.pragma('table_info(study_materials)').map(c => c.name);
        if (!matCols.includes('caderno_enxuto')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN caderno_enxuto TEXT DEFAULT NULL;');
        }
        if (!matCols.includes('is_native_lesson')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN is_native_lesson BOOLEAN DEFAULT 0;');
        }
        if (!matCols.includes('current_page')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN current_page INTEGER DEFAULT 1;');
        }
        if (!matCols.includes('total_pages')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN total_pages INTEGER DEFAULT NULL;');
        }
        if (!matCols.includes('notes')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN notes TEXT DEFAULT NULL;');
        }

        // Migration for user_id on operational tables
        const tablesWithUser = [
            'schedules',
            'study_sessions',
            'question_answers',
            'simulados',
            'activity_log',
            'schedule_tasks',
            'study_reviews',
            'missed_sessions',
            'flashcard_decks',
            'flashcards',
            'study_materials',
            'rag_documents'
        ];

        for (const table of tablesWithUser) {
            try {
                const cols = db.pragma(`table_info(${table})`).map(c => c.name);
                if (cols.length > 0 && !cols.includes('user_id')) {
                    db.exec(`ALTER TABLE ${table} ADD COLUMN user_id TEXT DEFAULT 'user_joao';`);
                    db.exec(`CREATE INDEX IF NOT EXISTS idx_${table}_user ON ${table}(user_id);`);
                }
            } catch (errTable) {
                console.warn(`Migration notice on table ${table}:`, errTable.message);
            }
        }

        // Migration for career_id on operational tables
        const tablesWithCareer = [
            'schedules',
            'study_materials',
            'chat_sessions',
            'simulados',
            'study_reviews',
            'missed_sessions',
            'flashcard_decks',
            'study_sessions',
            'question_answers',
            'activity_log',
            'user_achievements',
            'user_xp_log'
        ];

        for (const table of tablesWithCareer) {
            try {
                const cols = db.pragma(`table_info(${table})`).map(c => c.name);
                if (cols.length > 0 && !cols.includes('career_id')) {
                    db.exec(`ALTER TABLE ${table} ADD COLUMN career_id TEXT DEFAULT 'atrfb';`);
                    db.exec(`CREATE INDEX IF NOT EXISTS idx_${table}_career ON ${table}(career_id);`);
                }
            } catch (errCareer) {
                console.warn(`Migration notice on career_id on table ${table}:`, errCareer.message);
            }
        }
        // Gamification Tables
        db.exec(`
            CREATE TABLE IF NOT EXISTS user_achievements (
                id TEXT PRIMARY KEY,
                user_id TEXT NOT NULL,
                achievement_key TEXT NOT NULL,
                unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                xp_awarded INTEGER DEFAULT 0
            );
            CREATE INDEX IF NOT EXISTS idx_user_achievements_user ON user_achievements(user_id);

            CREATE TABLE IF NOT EXISTS user_xp_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT NOT NULL,
                amount INTEGER NOT NULL,
                reason TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_user_xp_log_user ON user_xp_log(user_id);
        `);

        // Career Question Bank (sample questions per career)
        db.exec(`
            CREATE TABLE IF NOT EXISTS career_question_bank (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                career_id TEXT NOT NULL,
                subject TEXT NOT NULL,
                topic TEXT NOT NULL,
                year_reference INTEGER,
                banca TEXT,
                difficulty TEXT DEFAULT 'media',
                question_text TEXT NOT NULL,
                options_json TEXT NOT NULL,
                correct_answer TEXT NOT NULL,
                explanation TEXT,
                legal_reference TEXT,
                is_pegadinha INTEGER DEFAULT 0,
                pegadinha_type TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_cqb_career ON career_question_bank(career_id);
            CREATE INDEX IF NOT EXISTS idx_cqb_subject ON career_question_bank(career_id, subject);

            -- Cache de Aulas Nativas do Edital (20ms response time)
            CREATE TABLE IF NOT EXISTS native_lessons_cache (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                career_id TEXT NOT NULL,
                subject TEXT NOT NULL,
                lesson_number INTEGER NOT NULL,
                topic TEXT,
                lesson_title TEXT,
                content_markdown TEXT NOT NULL,
                fixation_questions_json TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE UNIQUE INDEX IF NOT EXISTS idx_native_lessons_cache ON native_lessons_cache(career_id, subject, lesson_number);

            -- Tabela Virtual FTS5 para Busca Textual Instantânea
            CREATE VIRTUAL TABLE IF NOT EXISTS questions_fts USING fts5(
                question_text,
                explanation,
                subject,
                topic,
                banca,
                content='questions',
                content_rowid='id'
            );

            -- Triggers para Sincronização Automática em Tempo Real do FTS5
            CREATE TRIGGER IF NOT EXISTS questions_ai AFTER INSERT ON questions BEGIN
              INSERT INTO questions_fts(rowid, question_text, explanation, subject, topic, banca)
              VALUES (new.id, new.question_text, new.explanation, new.subject, new.topic, new.banca);
            END;

            CREATE TRIGGER IF NOT EXISTS questions_ad AFTER DELETE ON questions BEGIN
              INSERT INTO questions_fts(questions_fts, rowid, question_text, explanation, subject, topic, banca)
              VALUES('delete', old.id, old.question_text, old.explanation, old.subject, old.topic, old.banca);
            END;

            CREATE TRIGGER IF NOT EXISTS questions_au AFTER UPDATE ON questions BEGIN
              INSERT INTO questions_fts(questions_fts, rowid, question_text, explanation, subject, topic, banca)
              VALUES('delete', old.id, old.question_text, old.explanation, old.subject, old.topic, old.banca);
              INSERT INTO questions_fts(rowid, question_text, explanation, subject, topic, banca)
              VALUES (new.id, new.question_text, new.explanation, new.subject, new.topic, new.banca);
            END;
        `);

        // Popular e sincronizar FTS5
        try {
            db.exec(`INSERT INTO questions_fts(questions_fts) VALUES('rebuild')`);
        } catch (ftsErr) {
            console.warn('FTS5 sync note:', ftsErr.message);
        }
    } catch (e) {
        console.warn('Migration note:', e.message);
    }
}

initDB();

// Log activity wrapper with multi-user and career context
export function logActivity(type, detail, userId = 'user_joao', careerId = 'atrfb') {
    try {
        const stmt = db.prepare('INSERT INTO activity_log (type, detail, user_id, career_id) VALUES (?, ?, ?, ?)');
        stmt.run(type, detail, userId, careerId);
    } catch (err) {
        console.error('Failed to log activity:', err);
    }
}

// Record question error in Caderno de Erros (Smart Error Bank)
export function recordQuestionError(userId = 'user_joao', careerId = 'atrfb', questionId, wrongAnswerIndex = null) {
    try {
        if (!questionId) return;
        const existing = db.prepare('SELECT id, status, review_count FROM caderno_erros WHERE user_id = ? AND question_id = ?').get(userId, questionId);
        if (existing) {
            db.prepare("UPDATE caderno_erros SET wrong_answer_index = ?, status = 'pending', review_count = review_count + 1, last_reviewed_at = CURRENT_TIMESTAMP WHERE id = ?")
              .run(wrongAnswerIndex, existing.id);
        } else {
            db.prepare("INSERT INTO caderno_erros (user_id, career_id, question_id, wrong_answer_index, status, review_count) VALUES (?, ?, ?, ?, 'pending', 1)")
              .run(userId, careerId, questionId, wrongAnswerIndex);
        }
    } catch (err) {
        console.warn('Error saving to Caderno de Erros:', err.message);
    }
}

export default db;
