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

// GET /studied-scope - Reconhecimento inteligente do que o aluno já estudou
router.get('/studied-scope', (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || 'atrfb';

        // 1. Matérias e aulas com estudo registrado em study_materials
        const studiedMaterials = db.prepare(`
            SELECT DISTINCT subject, lesson_number, title, current_page, total_pages, theory_completed, questions_completed, studied_at
            FROM study_materials
            WHERE user_id = ? AND (studied_at IS NOT NULL OR theory_completed = 1 OR current_page > 1)
        `).all(userId);

        // 2. Matérias com blocos de ciclo concluídos
        const cycleBlocks = db.prepare(`
            SELECT DISTINCT scb.subject
            FROM study_cycle_blocks scb
            JOIN study_cycles sc ON scb.cycle_id = sc.id
            WHERE sc.user_id = ? AND sc.career_id = ? AND scb.status = 'completed'
        `).all(userId, careerId);

        // 3. Matérias com sessões de estudo registradas
        const sessions = db.prepare(`
            SELECT DISTINCT sm.subject
            FROM study_sessions ss
            JOIN study_materials sm ON ss.material_id = sm.id
            WHERE ss.user_id = ? AND ss.status = 'completed'
        `).all(userId);

        const studiedSubjectsSet = new Set();
        studiedMaterials.forEach(m => { if (m.subject) studiedSubjectsSet.add(m.subject); });
        cycleBlocks.forEach(b => { if (b.subject) studiedSubjectsSet.add(b.subject); });
        sessions.forEach(s => { if (s.subject) studiedSubjectsSet.add(s.subject); });

        const studiedSubjects = Array.from(studiedSubjectsSet);

        res.json({
            careerId,
            studiedSubjects,
            studiedMaterialsCount: studiedMaterials.length,
            details: studiedMaterials
        });
    } catch (error) {
        console.error("Studied scope error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /create-by-subject - Cria simulado específico de uma disciplina (20 a 50 questões)
router.post('/create-by-subject', async (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
        const {
            subject,
            questionCount = 20,
            banca = 'FGV',
            scopeMode = 'studied_only', // 'studied_only' | 'full_edital' | 'errors_only'
            timeLimitMinutes = null
        } = req.body;

        if (!subject) {
            return res.status(400).json({ error: 'Disciplina (subject) é obrigatória.' });
        }

        const count = Math.min(Math.max(parseInt(questionCount, 10) || 20, 5), 100);
        const timeLimit = timeLimitMinutes ? parseInt(timeLimitMinutes, 10) : Math.max(15, count * 2);

        let candidateQuestionIds = [];

        if (scopeMode === 'errors_only') {
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
            const existing = db.prepare(`
                SELECT id FROM questions 
                WHERE LOWER(subject) LIKE LOWER(?) AND (banca = ? OR banca = 'FGV' OR ? = 'todas')
                ORDER BY RANDOM()
                LIMIT ?
            `).all(`%${subject}%`, banca, banca, count);

            candidateQuestionIds = existing.map(r => r.id);
        }

        // Se o banco tiver menos questões que o solicitado, gerar com IA as restantes no padrão FGV
        if (candidateQuestionIds.length < count && scopeMode !== 'errors_only') {
            const needed = count - candidateQuestionIds.length;
            try {
                const systemInstruction = getQuestionsSystemInstruction(careerId);
                const prompt = questionsPromptTemplate(
                    subject, 
                    `Tópicos de alto rendimento da banca ${banca} (Padrão de prova com casos práticos e pegadinhas)`, 
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
                            q.topic || 'Conhecimentos Específicos',
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
                error: `Nenhuma questão encontrada para ${subject} no modo selecionado (${scopeMode}).` 
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

        logActivity('simulado_create', `Iniciou Simulado de ${subject} (${candidateQuestionIds.length} questões • ${banca})`, userId, careerId);

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
