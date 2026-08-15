import express from 'express';
import db, { logActivity } from '../database.js';
import { generateJSON } from '../gemini.js';
import { questionsSystemInstruction, questionsPromptTemplate, questionsSchema } from '../prompts/questions.js';

const router = express.Router();

// POST /create - Generate a full mock exam with parallel subject question generation (Promise.all)
router.post('/create', async (req, res) => {
    const { banca = 'FGV', subjects, questionCount = 10, timeLimitMinutes = 60 } = req.body;
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';
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
        
        const subjectBatches = await Promise.all(
            subjects.map(async (subject) => {
                const prompt = questionsPromptTemplate(subject, 'Tópicos mais cobrados em prova', banca, questionType, questionsPerSubject);
                const generatedData = await generateJSON(prompt, questionsSystemInstruction, questionsSchema);
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
                for (const q of batch.data) {
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

// POST /create-from-errors - Build an instant mock exam from error notebook
router.post('/create-from-errors', (req, res) => {
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
    const limit = Math.min(parseInt(req.body.limit, 10) || 10, 30);

    try {
        const errorRows = db.prepare(`
            SELECT q.id, q.subject, q.banca 
            FROM question_answers qa
            JOIN questions q ON qa.question_id = q.id
            WHERE (qa.user_id = ? OR qa.user_id IS NULL) AND qa.is_correct = 0
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
    const { answers = {}, timeSpentSeconds = 0 } = req.body; // answers = { question_id: selected_index | -1 }

    try {
        const sim = db.prepare('SELECT * FROM simulados WHERE id = ?').get(simuladoId);
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
                    const isCorrect = selected === sq.correct_index;
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

        logActivity('simulado', `Concluiu Simulado ${sim.banca}: ${acertos} acertos, ${erros} erros, ${emBranco} em branco (Nota: ${isCebraspe ? acertos - erros : acertos}/${sqs.length})`);

        res.json({
            success: true,
            banca: sim.banca,
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
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
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
        const sim = db.prepare('SELECT * FROM simulados WHERE id = ?').get(req.params.id);
        if (!sim) return res.status(404).json({ error: 'Not found' });

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
