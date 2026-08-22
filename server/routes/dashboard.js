import express from 'express';
import db from '../database.js';
import { CAREER_SUBJECTS } from '../gamification.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

function getDashboardData(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
        const subjects = careerId && CAREER_SUBJECTS[careerId] ? CAREER_SUBJECTS[careerId] : null;

        let qStats = { total: 0, correct: 0 };
        let fStats = { due: 0 };
        let sStats = { total: 0, avg_score: 0 };
        let subStats = [];
        let recentActivity = [];

        if (careerId && subjects) {
            const placeholders = subjects.map(() => '?').join(',');

            // Questões respondidas nesta carreira
            qStats = db.prepare(`
                SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as correct
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ?
                  AND (qa.career_id = ? OR q.subject IN (${placeholders}))
            `).get(userId, careerId, ...subjects);

            // Flashcards desta carreira
            fStats = db.prepare(`
                SELECT COUNT(*) as due
                FROM flashcards f
                JOIN flashcard_decks fd ON f.deck_id = fd.id
                WHERE (fd.career_id = ? OR fd.subject IN (${placeholders}))
                  AND f.next_review <= datetime('now')
            `).get(careerId, ...subjects);

            // Simulados desta carreira
            sStats = db.prepare(`
                SELECT 
                    COUNT(*) as total,
                    AVG(score) as avg_score
                FROM simulados 
                WHERE status = 'completed' 
                  AND user_id = ?
                  AND career_id = ?
            `).get(userId, careerId);

            // Subject stats (weakest/strongest)
            subStats = db.prepare(`
                SELECT 
                    q.subject,
                    COUNT(qa.id) as total,
                    SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(qa.id) as correct_pct
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ?
                  AND (qa.career_id = ? OR q.subject IN (${placeholders}))
                GROUP BY q.subject
                HAVING total >= 3
                ORDER BY correct_pct ASC
            `).all(userId, careerId, ...subjects);

            // Per-subject breakdown for the career edital radar (O(1) in-memory lookup from single aggregated query)
            const breakdownRows = db.prepare(`
                SELECT 
                    q.subject as name,
                    COUNT(qa.id) as total,
                    SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as correct
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ? AND (qa.career_id = ? OR qa.career_id IS NULL)
                GROUP BY q.subject
            `).all(userId, careerId);

            const statsBySubject = new Map(breakdownRows.map(r => [r.name, r]));

            const subjectBreakdown = subjects.map(subj => {
                const row = statsBySubject.get(subj);
                const total = row?.total || 0;
                const correct = row?.correct || 0;
                const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
                let status = 'em_revisao';
                let statusLabel = 'NÃO INICIADO';

                if (total > 0) {
                    if (pct >= 75) {
                        status = 'homologado';
                        statusLabel = 'DOMINADO';
                    } else if (pct >= 60) {
                        status = 'em_revisao';
                        statusLabel = 'EM ESTUDO';
                    } else {
                        status = 'vulneravel';
                        statusLabel = 'VULNERÁVEL';
                    }
                }

                return {
                    name: subj,
                    totalQuestions: total,
                    correctPercentage: pct,
                    status,
                    statusLabel
                };
            });

            // Recent Activity
            recentActivity = db.prepare(`
                SELECT * FROM activity_log 
                WHERE user_id = ?
                  AND (career_id = ? OR career_id IS NULL)
                ORDER BY created_at DESC 
                LIMIT 10
            `).all(userId, careerId);

        } else {
            // Questões gerais
            qStats = db.prepare(`
                SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct
                FROM question_answers
                WHERE user_id = ?
            `).get(userId);

            // Flashcards
            fStats = db.prepare(`
                SELECT COUNT(*) as due
                FROM flashcards 
                WHERE next_review <= datetime('now')
            `).get();

            // Simulados
            sStats = db.prepare(`
                SELECT 
                    COUNT(*) as total,
                    AVG(score) as avg_score
                FROM simulados 
                WHERE status = 'completed' AND user_id = ?
            `).get(userId);

            // Subject stats
            subStats = db.prepare(`
                SELECT 
                    q.subject,
                    COUNT(qa.id) as total,
                    SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(qa.id) as correct_pct
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ?
                GROUP BY q.subject
                HAVING total >= 5
                ORDER BY correct_pct ASC
            `).all(userId);

            // Recent Activity
            recentActivity = db.prepare(`
                SELECT * FROM activity_log 
                WHERE user_id = ?
                ORDER BY created_at DESC 
                LIMIT 10
            `).all(userId);
        }

        const weakest = (subStats || []).slice(0, 3);
        const strongest = (subStats || []).slice(-3).reverse();

        const totalAnswered = qStats?.total || 0;
        const correctCount = qStats?.correct || 0;
        const accuracyPct = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

        res.json({
            // Legacy / direct keys
            answered: totalAnswered,
            accuracy: accuracyPct,
            pendingCards: fStats?.due || 0,
            simulados: sStats?.total || 0,
            // Nested object keys
            questions: {
                totalAnswered,
                correctPct: accuracyPct
            },
            flashcards: {
                dueCount: fStats?.due || 0
            },
            simuladosStats: {
                totalCompleted: sStats?.total || 0,
                avgScore: sStats?.avg_score || 0
            },
            weakSubjects: weakest,
            strongSubjects: strongest,
            subjectBreakdown: typeof subjectBreakdown !== 'undefined' ? subjectBreakdown : [],
            recentActivity
        });

    } catch (error) {
        console.error('Dashboard stats error:', error);
        res.status(500).json({ error: error.message });
    }
}

router.get('/', getDashboardData);
router.get('/stats', getDashboardData);

export default router;
