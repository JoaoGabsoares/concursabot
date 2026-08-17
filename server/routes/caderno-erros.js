import express from 'express';
import db, { logActivity } from '../database.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// GET / - List error notebook items with statistics
router.get('/', (req, res) => {
    try {
        const userId = getAuthenticatedUserId(req);
        const { status = 'all', subject, career_id, limit = 50 } = req.query;

        let query = `
            SELECT 
                ce.id,
                ce.user_id,
                ce.career_id,
                ce.question_id,
                ce.wrong_answer_index,
                ce.status,
                ce.review_count,
                ce.notes,
                ce.last_reviewed_at,
                ce.created_at,
                q.subject,
                q.topic,
                q.banca,
                q.question_text,
                q.options,
                q.correct_index,
                q.explanation
            FROM caderno_erros ce
            JOIN questions q ON ce.question_id = q.id
            WHERE ce.user_id = ?
        `;
        const params = [userId];

        if (career_id && career_id !== 'all') {
            query += ` AND (ce.career_id = ? OR ce.career_id IS NULL)`;
            params.push(career_id);
        }

        if (status && status !== 'all') {
            query += ` AND ce.status = ?`;
            params.push(status);
        }

        if (subject && subject !== 'all') {
            query += ` AND q.subject = ?`;
            params.push(subject);
        }

        query += ` ORDER BY ce.status ASC, ce.created_at DESC LIMIT ?`;
        params.push(Number(limit) || 50);

        const items = db.prepare(query).all(...params);

        // Parse options safely
        const formattedItems = items.map(item => {
            let parsedOptions = [];
            try {
                parsedOptions = typeof item.options === 'string' ? JSON.parse(item.options) : item.options;
            } catch (e) {
                parsedOptions = [];
            }
            return {
                ...item,
                options: parsedOptions
            };
        });

        // Compute overall statistics
        const statsStmt = db.prepare(`
            SELECT 
                COUNT(ce.id) as total,
                SUM(CASE WHEN ce.status = 'pending' THEN 1 ELSE 0 END) as pending,
                SUM(CASE WHEN ce.status = 'mastered' THEN 1 ELSE 0 END) as mastered
            FROM caderno_erros ce
            WHERE ce.user_id = ?
        `);
        const stats = statsStmt.get(userId) || { total: 0, pending: 0, mastered: 0 };
        const total = stats.total || 0;
        const mastered = stats.mastered || 0;
        const overcomeRate = total > 0 ? Math.round((mastered / total) * 100) : 0;

        res.json({
            success: true,
            stats: {
                total,
                pending: stats.pending || 0,
                mastered,
                overcomeRate
            },
            items: formattedItems
        });
    } catch (err) {
        console.error('Error fetching Caderno de Erros:', err);
        res.status(500).json({ error: 'Erro ao buscar caderno de erros: ' + err.message });
    }
});

// POST /:id/retry - Retrying an error item
router.post('/:id/retry', (req, res) => {
    try {
        const { id } = req.params;
        const { selectedAnswer } = req.body;
        const userId = getAuthenticatedUserId(req);

        if (selectedAnswer === undefined) {
            return res.status(400).json({ error: 'selectedAnswer é obrigatório.' });
        }

        const errorItem = db.prepare(`
            SELECT ce.*, q.correct_index, q.explanation, q.subject
            FROM caderno_erros ce
            JOIN questions q ON ce.question_id = q.id
            WHERE ce.id = ? AND ce.user_id = ?
        `).get(id, userId);

        if (!errorItem) {
            return res.status(404).json({ error: 'Item do caderno de erros não encontrado.' });
        }

        const isCorrect = Number(selectedAnswer) === Number(errorItem.correct_index);
        const newStatus = isCorrect ? 'mastered' : 'pending';
        const newReviewCount = (errorItem.review_count || 0) + 1;

        db.prepare(`
            UPDATE caderno_erros 
            SET status = ?, review_count = ?, last_reviewed_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `).run(newStatus, newReviewCount, id);

        let xpEarned = 0;
        if (isCorrect) {
            xpEarned = 15; // Re-mastering bonus
            try {
                db.prepare(`
                    INSERT INTO user_xp_log (user_id, amount, reason) 
                    VALUES (?, ?, ?)
                `).run(userId, xpEarned, `Superação de Erro: Questão #${errorItem.question_id}`);
            } catch (e) {}

            logActivity('caderno_superacao', `Superou erro na questão #${errorItem.question_id} (+${xpEarned} XP)`, userId, errorItem.career_id);
        }

        res.json({
            success: true,
            isCorrect,
            correctIndex: errorItem.correct_index,
            explanation: errorItem.explanation,
            status: newStatus,
            reviewCount: newReviewCount,
            xpEarned
        });
    } catch (err) {
        console.error('Error retrying error item:', err);
        res.status(500).json({ error: 'Erro ao processar tentativa: ' + err.message });
    }
});

// PUT /:id/notes - Update student notes
router.put('/:id/notes', (req, res) => {
    try {
        const { id } = req.params;
        const { notes } = req.body;
        const userId = getAuthenticatedUserId(req);

        const result = db.prepare(`
            UPDATE caderno_erros 
            SET notes = ? 
            WHERE id = ? AND user_id = ?
        `).run(notes || '', id, userId);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Item não encontrado.' });
        }

        res.json({ success: true, message: 'Anotações salvas com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao salvar anotações: ' + err.message });
    }
});

// DELETE /:id - Remove from Caderno de Erros
router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const userId = getAuthenticatedUserId(req);

        const result = db.prepare('DELETE FROM caderno_erros WHERE id = ? AND user_id = ?').run(id, userId);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Item não encontrado.' });
        }

        res.json({ success: true, message: 'Questão removida do Caderno de Erros.' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao remover item: ' + err.message });
    }
});

export default router;
