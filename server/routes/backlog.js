import express from 'express';
import db, { logActivity } from '../database.js';
import { getCareerConfig } from '../careers.js';

const router = express.Router();

function getSubjectWeight(subject = '', careerCfg) {
    const raw = (subject || '').toLowerCase().trim();
    if (careerCfg && Array.isArray(careerCfg.subjects)) {
        for (const s of careerCfg.subjects) {
            const sName = s.subject.toLowerCase().trim();
            if (raw === sName || raw.includes(sName) || sName.includes(raw)) {
                return {
                    wave: s.wave || 1,
                    questions: s.questions || 10,
                    priority: s.wave === 1 ? 'Alta' : 'Média'
                };
            }
        }
    }
    return { wave: 2, questions: 10, priority: 'Média' };
}

function matchesCareerSubject(subject = '', careerCfg) {
    if (!subject) return false;
    const raw = subject.toLowerCase().trim();
    if (careerCfg && Array.isArray(careerCfg.subjects)) {
        return careerCfg.subjects.some(s => {
            const sName = s.subject.toLowerCase().trim();
            return raw === sName || raw.includes(sName) || sName.includes(raw);
        });
    }
    return true;
}

// GET /api/backlog — Get all pending missed sessions, spaced reviews & automatic backlog
router.get('/', (req, res) => {
    try {
        const todayStr = new Date().toISOString().split('T')[0];
        const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
        const careerCfg = getCareerConfig(careerId);

        let manualBacklog = db.prepare(`
            SELECT * FROM missed_sessions 
            WHERE status = 'pending' 
            ORDER BY created_at DESC
        `).all()
        .filter(item => matchesCareerSubject(item.subject, careerCfg))
        .map(item => ({
            ...item,
            weight: getSubjectWeight(item.subject, careerCfg)
        }));

        // Sort manual backlog by exam questions count descending (Tendência da Banca)
        manualBacklog.sort((a, b) => b.weight.questions - a.weight.questions);

        // Get pending spaced reviews (D+1, D+7, D+30)
        let spacedReviews = db.prepare(`
            SELECT 
                sr.id, sr.material_id, sr.subject, sr.lesson_number, sr.review_type, 
                sr.scheduled_date, sr.status, sr.created_at,
                sm.title as material_title, sm.studied_at,
                CASE 
                    WHEN sr.scheduled_date < ? THEN 'overdue'
                    WHEN sr.scheduled_date = ? THEN 'today'
                    ELSE 'upcoming'
                END as timeline_status
            FROM study_reviews sr
            JOIN study_materials sm ON sr.material_id = sm.id
            WHERE sr.status = 'pending'
            ORDER BY sr.scheduled_date ASC
        `).all(todayStr, todayStr)
        .filter(item => matchesCareerSubject(item.subject, careerCfg))
        .map(item => ({
            ...item,
            weight: getSubjectWeight(item.subject, careerCfg)
        }));

        // Check study materials that need attention (e.g. studied without completed questions)
        let unreviewedMaterials = db.prepare(`
            SELECT 
                sm.id as material_id, sm.subject, sm.lesson_number, sm.title, sm.studied_at,
                COUNT(DISTINCT ss.id) as session_count,
                SUM(CASE WHEN ss.status = 'completed' THEN 1 ELSE 0 END) as completed_sessions,
                COUNT(sq.id) as total_questions
            FROM study_materials sm
            LEFT JOIN study_sessions ss ON sm.id = ss.material_id
            LEFT JOIN session_questions sq ON ss.id = sq.session_id
            GROUP BY sm.id
            HAVING (sm.theory_completed = 1 AND sm.questions_completed = 0) OR (session_count > 0 AND total_questions = 0)
        `).all()
        .filter(item => matchesCareerSubject(item.subject, careerCfg))
        .map(item => ({
            ...item,
            weight: getSubjectWeight(item.subject, careerCfg)
        }));

        unreviewedMaterials.sort((a, b) => b.weight.questions - a.weight.questions);

        const overdueReviewsCount = spacedReviews.filter(r => r.timeline_status === 'overdue').length;
        const todayReviewsCount = spacedReviews.filter(r => r.timeline_status === 'today').length;

        res.json({
            success: true,
            pendingCount: manualBacklog.length + unreviewedMaterials.length + overdueReviewsCount,
            overdueReviewsCount,
            todayReviewsCount,
            manualBacklog,
            spacedReviews,
            unreviewedMaterials
        });
    } catch (error) {
        console.error('Error fetching backlog:', error);
        res.status(500).json({ error: error.message });
    }
});

// POST /api/backlog — Register a missed session / subject to catch up
router.post('/', (req, res) => {
    try {
        const { subject, lessonNumber, title, reason, targetSlot } = req.body;

        if (!subject || !subject.trim()) {
            return res.status(400).json({ error: 'Disciplina é obrigatória' });
        }

        const stmt = db.prepare(`
            INSERT INTO missed_sessions (subject, lesson_number, title, reason, target_slot, status)
            VALUES (?, ?, ?, ?, ?, 'pending')
        `);

        const result = stmt.run(
            subject.trim(),
            lessonNumber || null,
            title || `Aula ${lessonNumber || 'Pendente'}`,
            reason || 'Matéria pendente / adiada',
            targetSlot || 'Hoje à noite'
        );

        logActivity('study', `Registrou reposição pendente: ${subject} (${reason || 'Atraso'})`);

        res.json({
            success: true,
            id: result.lastInsertRowid,
            message: 'Matéria adicionada à fila de reposição!'
        });
    } catch (error) {
        console.error('Error creating backlog item:', error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/backlog/:id/resolve — Mark backlog item as resolved / completed
router.put('/:id/resolve', (req, res) => {
    try {
        const stmt = db.prepare(`
            UPDATE missed_sessions 
            SET status = 'completed', resolved_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);
        stmt.run(req.params.id);

        res.json({ success: true, message: 'Reposição concluída com sucesso! 🎯' });
    } catch (error) {
        console.error('Error resolving backlog item:', error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/backlog/reviews/:id/complete — Mark spaced review as completed
router.put('/reviews/:id/complete', (req, res) => {
    try {
        const stmt = db.prepare(`
            UPDATE study_reviews 
            SET status = 'completed', completed_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);
        stmt.run(req.params.id);

        logActivity('study', `Concluiu revisão espaçada #${req.params.id}`);

        res.json({ success: true, message: 'Revisão concluída! 🎉' });
    } catch (error) {
        console.error('Error completing review:', error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/backlog/:id — Remove backlog item
router.delete('/:id', (req, res) => {
    try {
        db.prepare('DELETE FROM missed_sessions WHERE id = ?').run(req.params.id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting backlog item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
