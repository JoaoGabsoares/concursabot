import express from 'express';
import db, { logActivity, recordQuestionError } from '../database.js';
import { generateJSON } from '../gemini.js';
import { questionsSystemInstruction, getQuestionsSystemInstruction, questionsPromptTemplate, questionsSchema } from '../prompts/questions.js';

const router = express.Router();

// POST /generate - Generate questions using Gemini
router.post('/generate', async (req, res) => {
    const { subject, topic, banca = 'CEBRASPE/CESPE', type = 'multiple_choice', count = 5, careerId = req.headers['x-exam-id'] || 'atrfb' } = req.body;
    const safeCount = Math.min(Math.max(parseInt(count, 10) || 5, 1), 30);

    if (!subject) return res.status(400).json({ error: 'Subject is required' });

    try {
        const prompt = questionsPromptTemplate(subject, topic, banca, type, safeCount);
        const systemInstruction = getQuestionsSystemInstruction(careerId);
        const generatedData = await generateJSON(prompt, systemInstruction, questionsSchema);

        const rawQuestions = Array.isArray(generatedData) ? generatedData : (generatedData.questions || []);
        const savedQuestions = [];
        const insertStmt = db.prepare(`
            INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        db.transaction(() => {
            for (const q of rawQuestions) {
                const info = insertStmt.run(
                    subject,
                    topic,
                    banca,
                    type,
                    q.question_text,
                    JSON.stringify(q.options || []),
                    typeof q.correct_index === 'number' ? q.correct_index : 0,
                    q.explanation || ''
                );
                savedQuestions.push({ id: info.lastInsertRowid, ...q });
            }
        })();

        res.json({ success: true, questions: savedQuestions });
    } catch (error) {
        console.error("Generate questions error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /answer - Record an answer with user_id
router.post('/answer', (req, res) => {
    const { questionId, selectedAnswer } = req.body;
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

    if (!questionId || selectedAnswer === undefined) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    try {
        const qStmt = db.prepare('SELECT * FROM questions WHERE id = ?');
        const question = qStmt.get(questionId);

        if (!question) return res.status(404).json({ error: 'Question not found' });

        const isCorrect = Number(selectedAnswer) === Number(question.correct_index);
        const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
        const ansStmt = db.prepare('INSERT INTO question_answers (question_id, selected_answer, is_correct, user_id, career_id) VALUES (?, ?, ?, ?, ?)');
        ansStmt.run(questionId, Number(selectedAnswer), isCorrect ? 1 : 0, userId, careerId);

        if (!isCorrect) {
            recordQuestionError(userId, careerId, questionId, Number(selectedAnswer));
        }

        logActivity('question', `Questão #${questionId} (${isCorrect ? 'Acerto' : 'Erro'})`, userId, careerId);

        res.json({
            isCorrect,
            correctIndex: question.correct_index,
            explanation: question.explanation
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /stats - Aggregate stats filtered by user
router.get('/stats', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
        const stmt = db.prepare(`
            SELECT 
                q.subject,
                COUNT(qa.id) as total_answered,
                SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as total_correct
            FROM question_answers qa
            JOIN questions q ON qa.question_id = q.id
            WHERE (qa.user_id = ? OR qa.user_id IS NULL)
            GROUP BY q.subject
        `);
        res.json(stmt.all(userId));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /history - Recent answered questions
router.get('/history', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
        const stmt = db.prepare(`
            SELECT qa.*, q.question_text, q.subject, q.topic, q.banca
            FROM question_answers qa
            JOIN questions q ON qa.question_id = q.id
            WHERE (qa.user_id = ? OR qa.user_id IS NULL)
            ORDER BY qa.answered_at DESC LIMIT 50
        `);
        res.json(stmt.all(userId));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar histórico de questões.' });
    }
});

// GET /search — Busca Instantânea de Questões com FTS5 (Full-Text Search)
router.get('/search', (req, res) => {
    try {
        const { q, banca, subject, limit = 20 } = req.query;
        if (!q || q.trim().length === 0) {
            return res.json([]);
        }

        const cleanQuery = q.replace(/['"/*;]/g, '').trim();
        let results = [];

        try {
            // Tenta busca indexada via SQLite FTS5
            let ftsSql = `
                SELECT q.*, fts.rank
                FROM questions_fts fts
                JOIN questions q ON q.id = fts.rowid
                WHERE questions_fts MATCH ?
            `;
            const params = [cleanQuery.includes(' ') ? `"${cleanQuery}"` : `${cleanQuery}*`];

            if (banca) {
                ftsSql += ` AND q.banca = ?`;
                params.push(banca);
            }
            if (subject) {
                ftsSql += ` AND q.subject = ?`;
                params.push(subject);
            }

            ftsSql += ` ORDER BY fts.rank LIMIT ?`;
            params.push(Number(limit));

            results = db.prepare(ftsSql).all(...params);
        } catch (ftsErr) {
            // Fallback para LIKE se FTS5 falhar
            let fallbackSql = `
                SELECT * FROM questions
                WHERE (question_text LIKE ? OR explanation LIKE ? OR topic LIKE ?)
            `;
            const params = [`%${cleanQuery}%`, `%${cleanQuery}%`, `%${cleanQuery}%`];

            if (banca) {
                fallbackSql += ` AND banca = ?`;
                params.push(banca);
            }
            if (subject) {
                fallbackSql += ` AND subject = ?`;
                params.push(subject);
            }

            fallbackSql += ` LIMIT ?`;
            params.push(Number(limit));
            results = db.prepare(fallbackSql).all(...params);
        }

        res.json(results);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Erro ao pesquisar questões.' });
    }
});

// GET /error-notebook — Caderno de Erros Inteligente para Re-treino
router.get('/error-notebook', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
        const { subject, banca } = req.query;

        let sql = `
            SELECT 
                q.id, q.subject, q.topic, q.banca, q.type, q.question_text, q.options, 
                q.correct_index, q.explanation,
                qa.selected_answer, qa.answered_at,
                COUNT(qa.id) as error_count
            FROM question_answers qa
            JOIN questions q ON qa.question_id = q.id
            WHERE (qa.user_id = ? OR qa.user_id IS NULL) AND qa.is_correct = 0
        `;
        const params = [userId];

        if (subject) {
            sql += ` AND q.subject = ?`;
            params.push(subject);
        }
        if (banca) {
            sql += ` AND q.banca = ?`;
            params.push(banca);
        }

        sql += ` GROUP BY q.id ORDER BY qa.answered_at DESC LIMIT 50`;

        const errors = db.prepare(sql).all(...params);
        res.json({
            total_errors: errors.length,
            errors: errors.map(e => ({
                ...e,
                options: typeof e.options === 'string' ? JSON.parse(e.options) : e.options
            }))
        });
    } catch (error) {
        console.error('Error notebook error:', error);
        res.status(500).json({ error: 'Erro ao carregar Caderno de Erros.' });
    }
});

export default router;
