import express from 'express';
import db, { logActivity } from '../database.js';
import { generateJSON } from '../gemini.js';
import { getQuestionsSystemInstruction, questionsPromptTemplate, questionsSchema } from '../prompts/questions.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// POST /create - Generate a full mock exam with parallel subject question generation (Promise.all)
router.post('/create', async (req, res) => {
    const { banca = 'FGV', subjects, questionCount = 10, timeLimitMinutes = 60 } = req.body;
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';

    if (!subjects || !Array.isArray(subjects) || subjects.length === 0) {
        return res.status(400).json({ error: 'Subjects array is required' });
    }

    try {
        const isCebraspe = banca.toUpperCase().includes('CEBRASPE') || banca.toUpperCase().includes('CESPE');
        const questionType = isCebraspe ? 'certo_errado' : 'multiple_choice';

        // Create simulado record first with user_id and career_id
        const simStmt = db.prepare(`
            INSERT INTO simulados (banca, subjects, question_count, time_limit_minutes, user_id, career_id) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        const simInfo = simStmt.run(banca, JSON.stringify(subjects), questionCount, timeLimitMinutes, userId, careerId);
        const simuladoId = simInfo.lastInsertRowid;

        // Generate questions per subject in PARALLEL via Promise.all()
        const questionsPerSubject = Math.max(1, Math.floor(questionCount / subjects.length));
        const systemInstruction = getQuestionsSystemInstruction(careerId);
        
        const subjectBatches = await Promise.all(
            subjects.map(async (subject) => {
                const prompt = questionsPromptTemplate(subject, 'Tópicos mais cobrados em prova', banca, questionType, questionsPerSubject);
                const generatedData = await generateJSON(prompt, systemInstruction, questionsSchema);
                return { subject, data: generatedData };
            })
        );

        // Atomic insertion of all generated questions in a single SQLite transaction
        db.transaction(() => {
            const insertQ = db.prepare(`
                INSERT INTO questions (subject, banca, type, question_text, options, correct_index, explanation)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);
            const insertSq = db.prepare('INSERT INTO simulado_questions (simulado_id, question_id) VALUES (?, ?)');

            for (const batch of subjectBatches) {
                const questionsArray = Array.isArray(batch.data) ? batch.data : (batch.data?.questions || []);
                for (const q of questionsArray) {
                    const info = insertQ.run(
                        batch.subject,
                        banca,
                        questionType,
                        q.question_text,
                        JSON.stringify(q.options),
                        q.correct_index,
                        q.explanation
                    );
                    insertSq.run(simuladoId, info.lastInsertRowid);
                }
            }
        })();

        res.json({ success: true, simuladoId, banca, questionType });
    } catch (error) {
        console.error("Create simulado error:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET /studied-scope - Reconhecimento inteligente e segmentado do que o aluno já estudou (PDFs vs Elaborações IA vs Lançamentos)
router.get('/studied-scope', (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || 'atrfb';

        // 1. Materiais PDF próprios do aluno (Uploads de PDF)
        const pdfMaterials = db.prepare(`
            SELECT DISTINCT id, subject, lesson_number, title, summary, current_page, total_pages, studied_at
            FROM study_materials
            WHERE user_id = ? AND (is_native_lesson = 0 OR is_native_lesson IS NULL)
              AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
        `).all(userId);

        // 2. Elaborações da IA / Módulos Nativos / Cadernos Enxutos
        const aiMaterials = db.prepare(`
            SELECT DISTINCT id, subject, lesson_number, title, summary, current_page, total_pages, studied_at
            FROM study_materials
            WHERE user_id = ? AND is_native_lesson = 1
              AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
        `).all(userId);

        // 3. Blocos de ciclo concluídos
        const cycleBlocks = db.prepare(`
            SELECT DISTINCT scb.subject, scb.topic
            FROM study_cycle_blocks scb
            JOIN study_cycles sc ON scb.cycle_id = sc.id
            WHERE sc.user_id = ? AND sc.career_id = ? AND scb.status = 'completed'
        `).all(userId, careerId);

        // 4. Sessões e Lançamentos Retroativos
        const pastSessions = db.prepare(`
            SELECT ss.id, ss.duration_minutes, ss.started_at, ss.scope_note,
                   COALESCE(sm.subject, 'Estudo Geral') as subject,
                   COALESCE(sm.title, '') as title,
                   COALESCE(sm.is_native_lesson, 0) as is_native
            FROM study_sessions ss
            LEFT JOIN study_materials sm ON ss.material_id = sm.id
            WHERE ss.user_id = ? AND ss.status = 'completed'
              AND (ss.career_id = ? OR ? IS NULL OR ss.career_id IS NULL)
        `).all(userId, careerId, careerId);

        const pdfSubjectsSet = new Set();
        const aiSubjectsSet = new Set();
        const manualSubjectsSet = new Set();
        const allSubjectsSet = new Set();

        const topicsBySubject = {};

        const registerTopic = (subj, topic, source) => {
            if (!subj) return;
            const normSubj = subj.trim();
            if (!topicsBySubject[normSubj]) {
                topicsBySubject[normSubj] = { pdf: [], ai: [], manual: [], all: [] };
            }
            if (topic && topic.trim()) {
                const normTop = topic.trim();
                if (!topicsBySubject[normSubj][source].includes(normTop)) {
                    topicsBySubject[normSubj][source].push(normTop);
                }
                if (!topicsBySubject[normSubj].all.includes(normTop)) {
                    topicsBySubject[normSubj].all.push(normTop);
                }
            }
        };

        pdfMaterials.forEach(m => {
            if (m.subject) {
                pdfSubjectsSet.add(m.subject);
                allSubjectsSet.add(m.subject);
                registerTopic(m.subject, m.title || `Aula ${m.lesson_number || 1}`, 'pdf');
            }
        });

        aiMaterials.forEach(m => {
            if (m.subject) {
                aiSubjectsSet.add(m.subject);
                allSubjectsSet.add(m.subject);
                registerTopic(m.subject, m.title || `Módulo IA ${m.lesson_number || 1}`, 'ai');
            }
        });

        cycleBlocks.forEach(b => {
            if (b.subject) {
                aiSubjectsSet.add(b.subject);
                allSubjectsSet.add(b.subject);
                registerTopic(b.subject, b.topic, 'ai');
            }
        });

        pastSessions.forEach(s => {
            if (s.subject) {
                manualSubjectsSet.add(s.subject);
                allSubjectsSet.add(s.subject);
                registerTopic(s.subject, s.scope_note || 'Estudo Retroativo', 'manual');
            }
        });

        res.json({
            careerId,
            studiedSubjects: Array.from(allSubjectsSet),
            pdfSubjects: Array.from(pdfSubjectsSet),
            aiSubjects: Array.from(aiSubjectsSet),
            manualSubjects: Array.from(manualSubjectsSet),
            topicsBySubject,
            counts: {
                pdfCount: pdfMaterials.length,
                aiCount: aiMaterials.length + cycleBlocks.length,
                manualCount: pastSessions.length,
                total: allSubjectsSet.size
            },
            studiedMaterialsCount: pdfMaterials.length + aiMaterials.length
        });
    } catch (error) {
        console.error("Studied scope error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /create-by-subject - Cria simulado específico de uma disciplina (20 a 50 questões) com seleção de fonte de estudo
router.post('/create-by-subject', async (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
        const {
            subject,
            questionCount = 20,
            banca = 'FGV',
            scopeMode = 'studied_only', // 'studied_only' | 'full_edital' | 'errors_only'
            studySource = 'all',        // 'all' | 'ai_only' | 'pdf_only' | 'full_edital' | 'errors_only'
            timeLimitMinutes = null
        } = req.body;

        if (!subject) {
            return res.status(400).json({ error: 'Disciplina (subject) é obrigatória.' });
        }

        // Mapeia modo de escopo consolidado
        const effectiveSource = (scopeMode === 'errors_only' || studySource === 'errors_only')
            ? 'errors_only'
            : (scopeMode === 'full_edital' || studySource === 'full_edital')
            ? 'full_edital'
            : (studySource || 'all');

        const count = Math.min(Math.max(parseInt(questionCount, 10) || 20, 5), 100);
        const timeLimit = timeLimitMinutes ? parseInt(timeLimitMinutes, 10) : Math.max(15, count * 2);

        let candidateQuestionIds = [];
        let specificTopics = [];

        // 1. Extração contextual dos tópicos estudados conforme a fonte selecionada
        if (effectiveSource === 'pdf_only') {
            const pdfRows = db.prepare(`
                SELECT title, summary FROM study_materials
                WHERE user_id = ? AND (is_native_lesson = 0 OR is_native_lesson IS NULL)
                  AND LOWER(subject) LIKE LOWER(?) AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
            `).all(userId, `%${subject}%`);
            specificTopics = pdfRows.map(r => r.title || r.summary?.substring(0, 50)).filter(Boolean);
        } else if (effectiveSource === 'ai_only') {
            const aiRows = db.prepare(`
                SELECT title, summary FROM study_materials
                WHERE user_id = ? AND is_native_lesson = 1
                  AND LOWER(subject) LIKE LOWER(?) AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
            `).all(userId, `%${subject}%`);
            const cycleRows = db.prepare(`
                SELECT scb.topic FROM study_cycle_blocks scb
                JOIN study_cycles sc ON scb.cycle_id = sc.id
                WHERE sc.user_id = ? AND LOWER(scb.subject) LIKE LOWER(?) AND scb.status = 'completed'
            `).all(userId, `%${subject}%`);
            specificTopics = [
                ...aiRows.map(r => r.title),
                ...cycleRows.map(r => r.topic)
            ].filter(Boolean);
        } else if (effectiveSource === 'all') {
            const allRows = db.prepare(`
                SELECT title FROM study_materials
                WHERE user_id = ? AND LOWER(subject) LIKE LOWER(?)
                  AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
            `).all(userId, `%${subject}%`);
            const sessionRows = db.prepare(`
                SELECT scope_note FROM study_sessions
                WHERE user_id = ? AND LOWER(career_id) = LOWER(?) AND status = 'completed'
            `).all(userId, careerId);
            specificTopics = [
                ...allRows.map(r => r.title),
                ...sessionRows.map(r => r.scope_note)
            ].filter(Boolean);
        }

        if (effectiveSource === 'errors_only') {
            const errorQuestions = db.prepare(`
                SELECT DISTINCT q.id
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ? AND qa.is_correct = 0 AND LOWER(q.subject) LIKE LOWER(?)
                ORDER BY qa.answered_at DESC
                LIMIT ?
            `).all(userId, `%${subject}%`, count);

            candidateQuestionIds = errorQuestions.map(r => r.id);
        } else {
            // 2. Busca nas questões da banca informada ou cadastradas
            const existing = db.prepare(`
                SELECT id FROM questions 
                WHERE LOWER(subject) LIKE LOWER(?) AND (banca = ? OR banca LIKE ? OR ? = 'todas' OR banca = 'FGV' OR banca = 'DEnsM' OR banca = 'Cesgranrio')
                ORDER BY (CASE WHEN banca = ? THEN 0 ELSE 1 END), RANDOM()
                LIMIT ?
            `).all(`%${subject}%`, banca, `%${banca}%`, banca, banca, count);

            candidateQuestionIds = existing.map(r => r.id);

            // 3. Se faltar, busca no career_question_bank sincronizado
            if (candidateQuestionIds.length < count && careerId) {
                const cqbQuestions = db.prepare(`
                    SELECT q.id
                    FROM career_question_bank cqb
                    JOIN questions q ON cqb.question_text = q.question_text
                    WHERE cqb.career_id = ? AND LOWER(cqb.subject) LIKE LOWER(?)
                    ORDER BY RANDOM()
                    LIMIT ?
                `).all(careerId, `%${subject}%`, count - candidateQuestionIds.length);

                for (const cq of cqbQuestions) {
                    if (!candidateQuestionIds.includes(cq.id)) {
                        candidateQuestionIds.push(cq.id);
                    }
                }
            }
        }

        // 4. Se o banco tiver menos questões que o solicitado, gerar com IA as restantes calibradas pela fonte selecionada
        if (candidateQuestionIds.length < count && effectiveSource !== 'errors_only') {
            const needed = count - candidateQuestionIds.length;
            try {
                const systemInstruction = getQuestionsSystemInstruction(careerId);
                
                let topicDirective = `Tópicos mais cobrados em prova da banca ${banca}`;
                if (specificTopics.length > 0) {
                    const sampleTopics = specificTopics.slice(0, 4).join(', ');
                    if (effectiveSource === 'pdf_only') {
                        topicDirective = `Tópicos estudados nos PDFs do aluno: [${sampleTopics}] (Padrão ${banca} com casos práticos e pegadinhas)`;
                    } else if (effectiveSource === 'ai_only') {
                        topicDirective = `Tópicos teóricos dos módulos de IA estudados: [${sampleTopics}] (Padrão ${banca} com jurisprudência e análise)`;
                    } else {
                        topicDirective = `Tópicos estudados pelo aluno: [${sampleTopics}] (Padrão ${banca})`;
                    }
                }

                const prompt = questionsPromptTemplate(
                    subject, 
                    topicDirective, 
                    banca, 
                    'multiple_choice', 
                    needed
                );
                const generatedData = await generateJSON(prompt, systemInstruction, questionsSchema);
                const questionsArray = Array.isArray(generatedData) ? generatedData : (generatedData?.questions || []);

                const insertQ = db.prepare(`
                    INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
                    VALUES (?, ?, ?, 'multiple_choice', ?, ?, ?, ?)
                `);

                db.transaction(() => {
                    for (const q of questionsArray) {
                        const info = insertQ.run(
                            subject,
                            q.topic || (specificTopics[0] || 'Conhecimentos Específicos'),
                            banca,
                            q.question_text,
                            typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
                            q.correct_index !== undefined ? q.correct_index : 0,
                            q.explanation || 'Gabarito fundamentado na legislação e jurisprudência.'
                        );
                        candidateQuestionIds.push(info.lastInsertRowid);
                    }
                })();
            } catch (aiErr) {
                console.warn('Geração complementar de questões via IA:', aiErr.message);
            }
        }

        if (candidateQuestionIds.length === 0) {
            return res.status(404).json({ 
                error: `Nenhuma questão encontrada para ${subject} no modo selecionado (${effectiveSource}).` 
            });
        }

        // Criar o registro do Simulado
        const simInfo = db.prepare(`
            INSERT INTO simulados (banca, subjects, question_count, time_limit_minutes, user_id, career_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(`${banca} • ${subject}`, JSON.stringify([subject]), candidateQuestionIds.length, timeLimit, userId, careerId);

        const simuladoId = simInfo.lastInsertRowid;
        const insertSq = db.prepare('INSERT INTO simulado_questions (simulado_id, question_id) VALUES (?, ?)');

        db.transaction(() => {
            for (const qId of candidateQuestionIds) {
                insertSq.run(simuladoId, qId);
            }
        })();

        logActivity('simulado_create', `Iniciou Simulado de ${subject} (${candidateQuestionIds.length} questões • ${banca} • Fonte: ${effectiveSource})`, userId, careerId);

        res.json({
            success: true,
            simuladoId,
            subject,
            banca,
            questionCount: candidateQuestionIds.length,
            timeLimitMinutes: timeLimit,
            scopeMode
        });
    } catch (error) {
        console.error("Create by subject error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /create-from-errors - Build an instant mock exam from error notebook
router.post('/create-from-errors', (req, res) => {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
    const limit = Math.min(parseInt(req.body.limit, 10) || 10, 30);

    try {
        const errorRows = db.prepare(`
            SELECT q.id, q.subject, q.banca 
            FROM question_answers qa
            JOIN questions q ON qa.question_id = q.id
            WHERE qa.user_id = ? AND qa.is_correct = 0
            GROUP BY q.id
            ORDER BY qa.answered_at DESC
            LIMIT ?
        `).all(userId, limit);

        if (!errorRows || errorRows.length === 0) {
            return res.status(400).json({ error: 'Nenhum erro registrado para gerar simulado.' });
        }

        const subjects = [...new Set(errorRows.map(r => r.subject))];
        const banca = errorRows[0]?.banca || 'Re-treino';
        const questionCount = errorRows.length;
        const timeLimit = Math.max(10, questionCount * 3);

        const simInfo = db.prepare(`
            INSERT INTO simulados (banca, subjects, question_count, time_limit_minutes, user_id, career_id) 
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(`Re-treino (${banca})`, JSON.stringify(subjects), questionCount, timeLimit, userId, careerId);

        const simuladoId = simInfo.lastInsertRowid;
        const insertSq = db.prepare('INSERT INTO simulado_questions (simulado_id, question_id) VALUES (?, ?)');

        db.transaction(() => {
            for (const row of errorRows) {
                insertSq.run(simuladoId, row.id);
            }
        })();

        logActivity('simulado', `Simulado de Re-treino gerado com ${questionCount} questões`);
        res.json({ success: true, simuladoId, count: questionCount });
    } catch (error) {
        console.error("Create from errors error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /:id/finish - Submit answers with support for Cebraspe negative penalty
router.post('/:id/finish', (req, res) => {
    const simuladoId = req.params.id;
    const userId = getAuthenticatedUserId(req);
    const { answers = {}, timeSpentSeconds = 0 } = req.body; // answers = { question_id: selected_index | -1 }

    try {
        const sim = db.prepare('SELECT * FROM simulados WHERE id = ? AND user_id = ?').get(simuladoId, userId);
        if (!sim) return res.status(404).json({ error: 'Simulado não encontrado' });

        const isCebraspe = sim.banca && (sim.banca.toUpperCase().includes('CEBRASPE') || sim.banca.toUpperCase().includes('CESPE'));

        const getQuestions = db.prepare('SELECT sq.id, sq.question_id, q.correct_index FROM simulado_questions sq JOIN questions q ON sq.question_id = q.id WHERE sq.simulado_id = ?');
        const sqs = getQuestions.all(simuladoId);

        let acertos = 0;
        let erros = 0;
        let emBranco = 0;
        
        const updateSq = db.prepare('UPDATE simulado_questions SET selected_answer = ?, is_correct = ? WHERE id = ?');
        
        db.transaction(() => {
            for (const sq of sqs) {
                const selected = answers[sq.question_id];
                if (selected === undefined || selected === null || selected === -1) {
                    emBranco++;
                    updateSq.run(null, null, sq.id);
                } else {
                    const isCorrect = Number(selected) === Number(sq.correct_index);
                    if (isCorrect) {
                        acertos++;
                    } else {
                        erros++;
                    }
                    updateSq.run(selected, isCorrect ? 1 : 0, sq.id);
                }
            }
            
            // Se Cebraspe: nota líquida = acertos - erros. Caso contrário: acertos.
            const liquidScore = isCebraspe ? Math.max(0, acertos - erros) : acertos;
            const finalScore = liquidScore;

            const updateSim = db.prepare('UPDATE simulados SET score = ?, time_spent_seconds = ?, status = ?, completed_at = CURRENT_TIMESTAMP WHERE id = ?');
            updateSim.run(finalScore, timeSpentSeconds || 0, 'completed', simuladoId);
        })();

        // Record answers in central question_answers table
        const fullSqs = db.prepare('SELECT question_id, selected_answer, is_correct FROM simulado_questions WHERE simulado_id = ?').all(simuladoId);
        const insertQa = db.prepare(`
            INSERT INTO question_answers (question_id, selected_answer, is_correct, user_id, career_id) 
            VALUES (?, ?, ?, ?, ?)
        `);

        for (const fsq of fullSqs) {
            if (fsq.selected_answer !== null && fsq.selected_answer !== undefined) {
                insertQa.run(fsq.question_id, fsq.selected_answer, fsq.is_correct, userId, sim.career_id || 'atrfb');
            }
        }

        const careerId = sim.career_id || 'atrfb';
        logActivity('simulado_complete', `Completou simulado (${acertos}/${sqs.length} acertos)`, userId, careerId);

        res.json({
            success: true,
            isCebraspe,
            total: sqs.length,
            acertos,
            erros,
            emBranco,
            notaLiquida: acertos - erros,
            score: isCebraspe ? Math.max(0, acertos - erros) : acertos,
            accuracyPct: sqs.length > 0 ? Math.round((acertos / sqs.length) * 100) : 0
        });
    } catch (error) {
        console.error("Finish simulado error:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET / and /history - List simulados for user
const listSimulados = (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;

        let rows = [];
        if (careerId) {
            rows = db.prepare('SELECT * FROM simulados WHERE user_id = ? AND career_id = ? ORDER BY created_at DESC').all(userId, careerId);
        } else {
            rows = db.prepare('SELECT * FROM simulados WHERE user_id = ? ORDER BY created_at DESC').all(userId);
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

router.get('/', listSimulados);
router.get('/history', listSimulados);

// GET /:id - Get full simulado
router.get('/:id', (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const sim = db.prepare('SELECT * FROM simulados WHERE id = ? AND user_id = ?').get(req.params.id, userId);
        if (!sim) return res.status(404).json({ error: 'Simulado não encontrado' });

        const qs = db.prepare(`
            SELECT sq.id as sq_id, sq.selected_answer, sq.is_correct, q.* 
            FROM simulado_questions sq 
            JOIN questions q ON sq.question_id = q.id 
            WHERE sq.simulado_id = ?
        `).all(req.params.id);

        res.json({ ...sim, questions: qs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
