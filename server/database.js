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

// Backward compatibility helper for transactions (IMMEDIATE avoids deadlocks in WAL mode)
db.transaction = function(fn) {
    return function(...args) {
        db.exec('BEGIN IMMEDIATE;');
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

// Enable WAL mode and high performance PRAGMAs for concurrency
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');
db.pragma('foreign_keys = ON');
db.pragma('busy_timeout = 5000');
db.pragma('cache_size = -64000');
db.pragma('temp_store = MEMORY');
db.pragma('mmap_size = 268435456');

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
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
            question_id INTEGER NOT NULL,
            selected_answer INTEGER NOT NULL,
            is_correct BOOLEAN NOT NULL,
            answered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (question_id) REFERENCES questions(id)
        );

        -- Simulados (mock exams)
        CREATE TABLE IF NOT EXISTS simulados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
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
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
            topic TEXT NOT NULL,
            subject TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS flashcards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            deck_id INTEGER NOT NULL,
            user_id TEXT DEFAULT 'user_joao',
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
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
            title TEXT,
            config TEXT NOT NULL, -- JSON (subjects, hoursPerDay, etc.)
            schedule_data TEXT NOT NULL, -- JSON (the generated schedule)
            exam_date TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS schedule_tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            schedule_id INTEGER NOT NULL,
            user_id TEXT DEFAULT 'user_joao',
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
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
            type TEXT NOT NULL, -- 'question', 'flashcard', 'simulado', 'summary', 'study', 'material'
            detail TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Study Room: uploaded PDF materials
        CREATE TABLE IF NOT EXISTS study_materials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
            filename TEXT NOT NULL,
            filepath TEXT NOT NULL,
            subject TEXT,
            lesson_number INTEGER DEFAULT NULL,
            title TEXT,
            summary TEXT,
            content_text TEXT,       -- Full extracted text for contextual chat
            analysis_json TEXT,      -- JSON analysis from Gemini
            caderno_enxuto TEXT DEFAULT NULL,
            is_native_lesson BOOLEAN DEFAULT 0,
            current_page INTEGER DEFAULT 1,
            total_pages INTEGER DEFAULT NULL,
            theory_pages INTEGER DEFAULT NULL,
            exercise_pages INTEGER DEFAULT NULL,
            has_exercises BOOLEAN DEFAULT 1,
            table_of_contents_json TEXT DEFAULT NULL,
            reading_metrics_json TEXT DEFAULT NULL,
            notes TEXT DEFAULT NULL,
            studied_at DATE DEFAULT NULL,
            theory_completed BOOLEAN DEFAULT 0,
            questions_completed BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- Study Room: study sessions with timer
        CREATE TABLE IF NOT EXISTS study_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            material_id INTEGER DEFAULT NULL,
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
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
            career_id TEXT DEFAULT 'atrfb',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            resolved_at DATETIME
        );

        -- Spaced Repetition Reviews (D+1, D+7, D+30)
        CREATE TABLE IF NOT EXISTS study_reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            material_id INTEGER NOT NULL,
            user_id TEXT DEFAULT 'user_joao',
            career_id TEXT DEFAULT 'atrfb',
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
            user_id TEXT DEFAULT 'user_joao',
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

        -- Base de Conhecimento Estruturada ATRFB (3.543 Documentos Markdown)
        CREATE TABLE IF NOT EXISTS atrfb_rag_documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            file_path TEXT UNIQUE NOT NULL,
            subject TEXT NOT NULL,
            module_type TEXT NOT NULL,
            lesson_number TEXT,
            title TEXT NOT NULL,
            tags_json TEXT,
            articles_cited_json TEXT,
            sumulas_cited_json TEXT,
            content_markdown TEXT NOT NULL,
            char_count INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_atrfb_rag_subject ON atrfb_rag_documents(subject);
        CREATE INDEX IF NOT EXISTS idx_atrfb_rag_type ON atrfb_rag_documents(module_type);
        CREATE INDEX IF NOT EXISTS idx_atrfb_rag_lesson ON atrfb_rag_documents(lesson_number);

        CREATE VIRTUAL TABLE IF NOT EXISTS atrfb_rag_fts USING fts5(
            title,
            subject,
            module_type,
            lesson_number,
            tags_json,
            articles_cited_json,
            sumulas_cited_json,
            content_markdown,
            content='atrfb_rag_documents',
            content_rowid='id',
            tokenize='unicode61'
        );

        CREATE TRIGGER IF NOT EXISTS atrfb_rag_ai AFTER INSERT ON atrfb_rag_documents BEGIN
          INSERT INTO atrfb_rag_fts(rowid, title, subject, module_type, lesson_number, tags_json, articles_cited_json, sumulas_cited_json, content_markdown)
          VALUES (new.id, new.title, new.subject, new.module_type, new.lesson_number, new.tags_json, new.articles_cited_json, new.sumulas_cited_json, new.content_markdown);
        END;
        CREATE TRIGGER IF NOT EXISTS atrfb_rag_ad AFTER DELETE ON atrfb_rag_documents BEGIN
          INSERT INTO atrfb_rag_fts(atrfb_rag_fts, rowid, title, subject, module_type, lesson_number, tags_json, articles_cited_json, sumulas_cited_json, content_markdown)
          VALUES('delete', old.id, old.title, old.subject, old.module_type, old.lesson_number, old.tags_json, old.articles_cited_json, old.sumulas_cited_json, old.content_markdown);
        END;
        CREATE TRIGGER IF NOT EXISTS atrfb_rag_au AFTER UPDATE ON atrfb_rag_documents BEGIN
          INSERT INTO atrfb_rag_fts(atrfb_rag_fts, rowid, title, subject, module_type, lesson_number, tags_json, articles_cited_json, sumulas_cited_json, content_markdown)
          VALUES('delete', old.id, old.title, old.subject, old.module_type, old.lesson_number, old.tags_json, old.articles_cited_json, old.sumulas_cited_json, old.content_markdown);
          INSERT INTO atrfb_rag_fts(rowid, title, subject, module_type, lesson_number, tags_json, articles_cited_json, sumulas_cited_json, content_markdown)
          VALUES (new.id, new.title, new.subject, new.module_type, new.lesson_number, new.tags_json, new.articles_cited_json, new.sumulas_cited_json, new.content_markdown);
        END;

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
        CREATE INDEX IF NOT EXISTS idx_schedule_tasks_day ON schedule_tasks(schedule_id, day_of_week);
        CREATE INDEX IF NOT EXISTS idx_activity_log_user_created ON activity_log(user_id, created_at DESC);
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
                failed_attempts INTEGER DEFAULT 0,
                locked_until DATETIME DEFAULT NULL,
                google_id TEXT DEFAULT NULL,
                avatar_url TEXT DEFAULT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_login_at DATETIME
            );
            CREATE INDEX IF NOT EXISTS idx_accounts_username ON accounts(username);
            CREATE UNIQUE INDEX IF NOT EXISTS idx_accounts_email_unique ON accounts(email) WHERE email IS NOT NULL;

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

        if (!userCols.includes('cadence_reading_min')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN cadence_reading_min INTEGER DEFAULT 60;');
        }
        if (!userCols.includes('cadence_questions_min')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN cadence_questions_min INTEGER DEFAULT 30;');
        }
        if (!userCols.includes('cadence_mode')) {
            db.exec('ALTER TABLE user_profiles ADD COLUMN cadence_mode TEXT DEFAULT "60_30";');
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
        if (!matCols.includes('theory_pages')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN theory_pages INTEGER DEFAULT NULL;');
        }
        if (!matCols.includes('exercise_pages')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN exercise_pages INTEGER DEFAULT NULL;');
        }
        if (!matCols.includes('has_exercises')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN has_exercises BOOLEAN DEFAULT 1;');
        }
        if (!matCols.includes('table_of_contents_json')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN table_of_contents_json TEXT DEFAULT NULL;');
        }
        if (!matCols.includes('reading_metrics_json')) {
            db.exec('ALTER TABLE study_materials ADD COLUMN reading_metrics_json TEXT DEFAULT NULL;');
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

            -- Community Chat Schema (Real-time SSE + SQLite)
            CREATE TABLE IF NOT EXISTS community_channels (
                id TEXT PRIMARY KEY,
                career_id TEXT NOT NULL,
                name TEXT NOT NULL,
                description TEXT,
                icon TEXT DEFAULT '💬',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_community_channels_career ON community_channels(career_id);

            CREATE TABLE IF NOT EXISTS community_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                channel_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                user_name TEXT NOT NULL,
                user_avatar TEXT DEFAULT '👨‍🎓',
                career_badge TEXT,
                message_text TEXT NOT NULL,
                attachment_type TEXT,
                attachment_id INTEGER,
                is_ai_response INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (channel_id) REFERENCES community_channels(id) ON DELETE CASCADE
            );
            CREATE INDEX IF NOT EXISTS idx_community_messages_channel ON community_messages(channel_id, created_at ASC);

            CREATE TABLE IF NOT EXISTS message_reactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                message_id INTEGER NOT NULL,
                user_id TEXT NOT NULL,
                reaction_emoji TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(message_id, user_id, reaction_emoji),
                FOREIGN KEY (message_id) REFERENCES community_messages(id) ON DELETE CASCADE
            );
            CREATE INDEX IF NOT EXISTS idx_reactions_message ON message_reactions(message_id);
        `);

        // Seed default community channels if empty
        try {
            const channelCount = db.prepare('SELECT COUNT(*) as c FROM community_channels').get()?.c || 0;
            if (channelCount === 0) {
                const defaultCareers = ['atrfb', 'transpetro_adm', 'transpetro_log', 'bb_comercial', 'bb_ti', 'ses_rj', 'marinha_rm2'];
                const channelTemplates = [
                    { suffix: 'geral', name: 'Geral & Estratégia de Edital', icon: '🏛️', desc: 'Canal de discussões gerais, cronogramas e notícias do certame.' },
                    { suffix: 'duvidas', name: 'Dúvidas & Resoluções', icon: '💡', desc: 'Tire dúvidas conceituais e marque @GabaritoAI para explicações com IA.' },
                    { suffix: 'leiseca', name: 'Lei Seca & Pegadinhas', icon: '⚖️', desc: 'Troca de artigos de ouro e alertas de pegadinhas das bancas.' },
                    { suffix: 'redacao', name: 'Discursivas & Redação', icon: '✍️', desc: 'Estruturação de argumentos e temas oficiais de concurso.' }
                ];

                for (const career of defaultCareers) {
                    for (const tpl of channelTemplates) {
                        const channelId = `${career}_${tpl.suffix}`;
                        db.prepare(`
                            INSERT OR IGNORE INTO community_channels (id, career_id, name, description, icon)
                            VALUES (?, ?, ?, ?, ?)
                        `).run(channelId, career, tpl.name, tpl.desc, tpl.icon);
                    }
                }
            }
        } catch (seedChErr) {
            console.warn('Community seed note:', seedChErr.message);
        }

        // Popular e sincronizar FTS5
        try {
            db.exec(`INSERT INTO questions_fts(questions_fts) VALUES('rebuild')`);
        } catch (ftsErr) {
            console.warn('FTS5 sync note:', ftsErr.message);
        }

        // Migrações de segurança para Accounts (Anti-Brute Force Lockout)
        try {
            db.exec("ALTER TABLE accounts ADD COLUMN failed_attempts INTEGER DEFAULT 0;");
        } catch (e) {}
        try {
            db.exec("ALTER TABLE accounts ADD COLUMN locked_until DATETIME DEFAULT NULL;");
        } catch (e) {}
        try {
            db.exec("CREATE UNIQUE INDEX IF NOT EXISTS idx_accounts_email_unique ON accounts(email) WHERE email IS NOT NULL;");
        } catch (e) {}
        try {
            db.exec("ALTER TABLE accounts ADD COLUMN google_id TEXT DEFAULT NULL;");
        } catch (e) {}
        try {
            db.exec("ALTER TABLE accounts ADD COLUMN avatar_url TEXT DEFAULT NULL;");
        } catch (e) {}
        try {
            db.exec("CREATE INDEX IF NOT EXISTS idx_accounts_google_id ON accounts(google_id);");
        } catch (e) {}

        // Migração para relaxar NOT NULL em study_sessions.material_id
        try {
            const tableInfo = db.prepare("PRAGMA table_info(study_sessions)").all();
            const matCol = tableInfo.find(c => c.name === 'material_id');
            if (matCol && matCol.notnull === 1) {
                db.exec(`
                    CREATE TABLE IF NOT EXISTS study_sessions_new (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        material_id INTEGER DEFAULT NULL,
                        user_id TEXT DEFAULT 'user_joao',
                        career_id TEXT DEFAULT 'atrfb',
                        duration_minutes INTEGER NOT NULL,
                        actual_duration_seconds INTEGER,
                        status TEXT DEFAULT 'active' CHECK(status IN ('active', 'completed', 'paused')),
                        scope_note TEXT,
                        started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                        completed_at DATETIME,
                        FOREIGN KEY (material_id) REFERENCES study_materials(id) ON DELETE CASCADE
                    );
                    INSERT INTO study_sessions_new (id, material_id, user_id, career_id, duration_minutes, actual_duration_seconds, status, scope_note, started_at, completed_at)
                    SELECT id, material_id, user_id, career_id, duration_minutes, actual_duration_seconds, status, scope_note, started_at, completed_at FROM study_sessions;
                    DROP TABLE study_sessions;
                    ALTER TABLE study_sessions_new RENAME TO study_sessions;
                    CREATE INDEX IF NOT EXISTS idx_study_sessions_material ON study_sessions(material_id);
                    CREATE INDEX IF NOT EXISTS idx_study_sessions_material_started ON study_sessions(material_id, started_at DESC);
                `);
            }
        } catch (e) {
            console.warn('Migration study_sessions note:', e.message);
        }
        // Study Cycles: Engine de Ciclos de Estudo Inteligentes
        try {
            db.exec(`
                CREATE TABLE IF NOT EXISTS study_cycles (
                    id TEXT PRIMARY KEY,
                    user_id TEXT NOT NULL,
                    career_id TEXT NOT NULL,
                    name TEXT NOT NULL,
                    model_type TEXT NOT NULL, -- 'adaptativo', 'pareto_80_20', 'pre_edital', 'data_prova', 'micro_sprints'
                    weekly_hours REAL NOT NULL DEFAULT 20.0,
                    block_duration_minutes INTEGER NOT NULL DEFAULT 60,
                    exam_date DATE DEFAULT NULL,
                    total_cycle_minutes INTEGER NOT NULL DEFAULT 0,
                    current_block_index INTEGER NOT NULL DEFAULT 0,
                    completed_cycles_count INTEGER NOT NULL DEFAULT 0,
                    is_active BOOLEAN NOT NULL DEFAULT 1,
                    settings_json TEXT DEFAULT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
                CREATE INDEX IF NOT EXISTS idx_study_cycles_user_career ON study_cycles(user_id, career_id, is_active);

                CREATE TABLE IF NOT EXISTS study_cycle_blocks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cycle_id TEXT NOT NULL,
                    subject TEXT NOT NULL,
                    order_index INTEGER NOT NULL,
                    duration_minutes INTEGER NOT NULL DEFAULT 60,
                    cognitive_group TEXT NOT NULL, -- 'exatas_dados', 'juridico', 'humanas_linguagens'
                    weight_score REAL DEFAULT 1.0,
                    difficulty_level INTEGER DEFAULT 2, -- 1=Facil, 2=Medio, 3=Dificil, 4=Critico
                    status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'in_progress', 'completed')),
                    completed_count INTEGER NOT NULL DEFAULT 0,
                    last_completed_at DATETIME DEFAULT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (cycle_id) REFERENCES study_cycles(id) ON DELETE CASCADE
                );
                CREATE INDEX IF NOT EXISTS idx_cycle_blocks_cycle_order ON study_cycle_blocks(cycle_id, order_index);
            `);
        } catch (e) {
            console.warn('Study cycles table init note:', e.message);
        }
    } catch (e) {
        console.warn('Migration note:', e.message);
    }
}

initDB();

// ============================================================
// STUDY CYCLES REPOSITORY METHODS
// ============================================================

export function getActiveStudyCycle(userId = 'user_joao', careerId = 'atrfb') {
    try {
        const cycle = db.prepare(`
            SELECT * FROM study_cycles 
            WHERE user_id = ? AND career_id = ? AND is_active = 1 
            ORDER BY created_at DESC LIMIT 1
        `).get(userId, careerId);

        if (!cycle) return null;

        const blocks = db.prepare(`
            SELECT * FROM study_cycle_blocks 
            WHERE cycle_id = ? 
            ORDER BY order_index ASC
        `).all(cycle.id);

        let settings = {};
        if (cycle.settings_json) {
            try { settings = JSON.parse(cycle.settings_json); } catch (e) {}
        }

        return {
            ...cycle,
            settings,
            blocks: blocks || []
        };
    } catch (err) {
        console.error('Error fetching active study cycle:', err);
        return null;
    }
}

export function saveStudyCycle(cycleData, blocks = []) {
    try {
        return db.transaction(() => {
            // Desativa ciclos anteriores desta carreira para o usuário
            db.prepare(`
                UPDATE study_cycles 
                SET is_active = 0, updated_at = CURRENT_TIMESTAMP 
                WHERE user_id = ? AND career_id = ?
            `).run(cycleData.user_id, cycleData.career_id);

            const cycleId = cycleData.id || `cycle_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
            const settingsJson = JSON.stringify(cycleData.settings || {});

            db.prepare(`
                INSERT INTO study_cycles (
                    id, user_id, career_id, name, model_type, weekly_hours, 
                    block_duration_minutes, exam_date, total_cycle_minutes, 
                    current_block_index, completed_cycles_count, is_active, settings_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
            `).run(
                cycleId,
                cycleData.user_id,
                cycleData.career_id,
                cycleData.name || 'Meu Ciclo de Estudos',
                cycleData.model_type || 'adaptativo',
                cycleData.weekly_hours || 20.0,
                cycleData.block_duration_minutes || 60,
                cycleData.exam_date || null,
                cycleData.total_cycle_minutes || 0,
                0,
                0,
                settingsJson
            );

            // Inserir blocos do ciclo
            const insertBlockStmt = db.prepare(`
                INSERT INTO study_cycle_blocks (
                    cycle_id, subject, order_index, duration_minutes, 
                    cognitive_group, weight_score, difficulty_level, status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);

            blocks.forEach((b, idx) => {
                insertBlockStmt.run(
                    cycleId,
                    b.subject,
                    idx,
                    b.duration_minutes || 60,
                    b.cognitive_group || 'humanas_linguagens',
                    b.weight_score || 1.0,
                    b.difficulty_level || 2,
                    idx === 0 ? 'in_progress' : 'pending'
                );
            });

            return getActiveStudyCycle(cycleData.user_id, cycleData.career_id);
        })();
    } catch (err) {
        console.error('Error saving study cycle:', err);
        throw err;
    }
}

export function advanceStudyCycleBlock(cycleId, blockId, userId = 'user_joao', careerId = 'atrfb') {
    try {
        return db.transaction(() => {
            const cycle = db.prepare('SELECT * FROM study_cycles WHERE id = ?').get(cycleId);
            if (!cycle) throw new Error('Ciclo de estudos não encontrado.');

            const blocks = db.prepare('SELECT * FROM study_cycle_blocks WHERE cycle_id = ? ORDER BY order_index ASC').all(cycleId);
            if (!blocks || blocks.length === 0) throw new Error('Nenhum bloco encontrado neste ciclo.');

            // Atualiza bloco concluído
            db.prepare(`
                UPDATE study_cycle_blocks 
                SET status = 'completed', completed_count = completed_count + 1, last_completed_at = CURRENT_TIMESTAMP 
                WHERE id = ? AND cycle_id = ?
            `).run(blockId, cycleId);

            const nextIndex = cycle.current_block_index + 1;

            if (nextIndex >= blocks.length) {
                // Completou a volta inteira do ciclo! Reinicia status para nova volta
                db.prepare(`
                    UPDATE study_cycle_blocks 
                    SET status = CASE WHEN order_index = 0 THEN 'in_progress' ELSE 'pending' END 
                    WHERE cycle_id = ?
                `).run(cycleId);

                db.prepare(`
                    UPDATE study_cycles 
                    SET current_block_index = 0, completed_cycles_count = completed_cycles_count + 1, updated_at = CURRENT_TIMESTAMP 
                    WHERE id = ?
                `).run(cycleId);

                logActivity('cycle_completed', `Completou a volta #${cycle.completed_cycles_count + 1} do ciclo de estudos!`, userId, careerId);
            } else {
                // Avança para o próximo bloco da esteira
                db.prepare(`
                    UPDATE study_cycle_blocks 
                    SET status = 'in_progress' 
                    WHERE cycle_id = ? AND order_index = ?
                `).run(cycleId, nextIndex);

                db.prepare(`
                    UPDATE study_cycles 
                    SET current_block_index = ?, updated_at = CURRENT_TIMESTAMP 
                    WHERE id = ?
                `).run(nextIndex, cycleId);

                const currentBlock = blocks[cycle.current_block_index];
                logActivity('cycle_block', `Concluiu bloco de ${currentBlock?.subject || 'estudo'} no ciclo (+20 XP)`, userId, careerId);
            }

            return getActiveStudyCycle(userId, careerId);
        })();
    } catch (err) {
        console.error('Error advancing study cycle block:', err);
        throw err;
    }
}

export function updateStudyCycleBlock(blockId, updateData = {}) {
    try {
        const fields = [];
        const params = [];

        if (typeof updateData.duration_minutes === 'number') {
            fields.push('duration_minutes = ?');
            params.push(updateData.duration_minutes);
        }
        if (typeof updateData.difficulty_level === 'number') {
            fields.push('difficulty_level = ?');
            params.push(updateData.difficulty_level);
        }
        if (typeof updateData.order_index === 'number') {
            fields.push('order_index = ?');
            params.push(updateData.order_index);
        }
        if (updateData.status) {
            fields.push('status = ?');
            params.push(updateData.status);
        }

        if (fields.length === 0) return null;

        params.push(blockId);
        db.prepare(`UPDATE study_cycle_blocks SET ${fields.join(', ')} WHERE id = ?`).run(...params);
        return db.prepare('SELECT * FROM study_cycle_blocks WHERE id = ?').get(blockId);
    } catch (err) {
        console.error('Error updating study cycle block:', err);
        throw err;
    }
}

export function deleteStudyCycle(cycleId, userId = 'user_joao', careerId = 'atrfb') {
    try {
        db.prepare('DELETE FROM study_cycles WHERE id = ? AND user_id = ?').run(cycleId, userId);
        return { success: true, message: 'Ciclo excluído com sucesso.' };
    } catch (err) {
        console.error('Error deleting study cycle:', err);
        throw err;
    }
}

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
