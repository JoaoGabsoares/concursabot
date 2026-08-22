import express from 'express';
import db from '../database.js';
import { CAREER_SUBJECTS, calculateUserStreak } from '../gamification.js';
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

// POST /register-past-study (Espelhamento para evitar 404 em chamadas originadas da Dashboard)
router.post('/register-past-study', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const {
      studyDate,
      subject,
      topic,
      durationMinutes,
      pagesRead,
      questionsCount,
      questionsCorrect,
      notes,
      materialId
    } = req.body;

    if (!studyDate) {
      return res.status(400).json({ error: 'A data do estudo (studyDate) é obrigatória.' });
    }

    if (!subject) {
      return res.status(400).json({ error: 'A disciplina (subject) é obrigatória.' });
    }

    const minutes = Math.max(parseInt(durationMinutes, 10) || 60, 5);
    const pRead = parseInt(pagesRead, 10) || 0;
    const qCount = parseInt(questionsCount, 10) || 0;
    const qCorrect = parseInt(questionsCorrect, 10) || 0;

    const dateOnly = studyDate.split('T')[0];
    const startedAt = `${dateOnly} 10:00:00`;
    const endMinutes = String(minutes % 60).padStart(2, '0');
    const endHours = String(Math.min(23, 10 + Math.floor(minutes / 60))).padStart(2, '0');
    const completedAt = `${dateOnly} ${endHours}:${endMinutes}:00`;

    const scopeNote = [
      topic ? `Assunto: ${topic}` : null,
      pRead > 0 ? `${pRead} páginas lidas` : null,
      qCount > 0 ? `${qCorrect}/${qCount} questões certas` : null,
      notes ? `Notas: ${notes}` : null
    ].filter(Boolean).join(' • ');

    const sessionResult = db.prepare(`
      INSERT INTO study_sessions (
        material_id, duration_minutes, status, user_id, career_id, started_at, completed_at, actual_duration_seconds, scope_note
      ) VALUES (?, ?, 'completed', ?, ?, ?, ?, ?, ?)
    `).run(
      materialId ? Number(materialId) : null,
      minutes,
      userId,
      careerId,
      startedAt,
      completedAt,
      minutes * 60,
      scopeNote || 'Estudo retroativo registrado'
    );

    const sessionId = sessionResult.lastInsertRowid;
    const xpGained = Math.round((minutes / 30) * 20 + (qCount * 2) + (pRead > 0 ? 10 : 0));

    try {
      db.prepare(`
        UPDATE user_profiles
        SET xp = xp + ?
        WHERE id = ?
      `).run(xpGained, userId);

      db.prepare(`
        INSERT INTO user_xp_log (user_id, amount, reason)
        VALUES (?, ?, ?)
      `).run(userId, xpGained, `Estudo Retroativo (${dateOnly}): ${subject}${topic ? ` - ${topic}` : ''}`);
    } catch (xpErr) {
      console.warn('Aviso ao atualizar XP retroativo:', xpErr.message);
    }

    try {
      db.prepare(`
        INSERT INTO activity_log (user_id, career_id, type, detail, created_at)
        VALUES (?, ?, 'study_session', ?, ?)
      `).run(
        userId,
        careerId,
        `[Estudo Retroativo] ${minutes}min de ${subject}${topic ? ` (${topic})` : ''} em ${dateOnly}`,
        completedAt
      );
    } catch (logErr) {
      console.warn('Aviso ao registrar log retroativo:', logErr.message);
    }

    let newStreak = 0;
    try {
      newStreak = calculateUserStreak(userId, careerId);
      db.prepare(`
        UPDATE user_profiles
        SET streakDays = ?
        WHERE id = ?
      `).run(newStreak, userId);
    } catch (streakErr) {
      console.warn('Aviso ao recalcular streak:', streakErr.message);
    }

    res.json({
      success: true,
      sessionId,
      xpGained,
      newStreak,
      studyDate: dateOnly,
      message: `Estudo de ${dateOnly} registrado com sucesso! +${xpGained} XP concedidos.`
    });
  } catch (err) {
    console.error('Erro ao registrar estudo retroativo:', err);
    res.status(500).json({ error: 'Falha ao registrar estudo retroativo: ' + err.message });
  }
});

// GET /past-studies
router.get('/past-studies', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;

    let query = `
      SELECT 
        id,
        material_id,
        duration_minutes,
        status,
        scope_note,
        started_at,
        completed_at,
        career_id,
        DATE(completed_at) as study_date
      FROM study_sessions
      WHERE user_id = ? AND status = 'completed'
    `;
    const params = [userId];

    if (careerId) {
      query += ` AND career_id = ?`;
      params.push(careerId);
    }

    query += ` ORDER BY completed_at DESC LIMIT 50`;

    const sessions = db.prepare(query).all(...params);

    const items = sessions.map(s => {
      let subject = 'Estudo Geral';
      let scopeNote = s.scope_note || '';

      const matchSubject = scopeNote.match(/Assunto:\s*([^•]+)/i);
      const cleanSubject = matchSubject ? matchSubject[1].trim() : (scopeNote.split('•')[0]?.trim() || 'Estudo Geral');

      return {
        id: s.id,
        subject: cleanSubject,
        duration_minutes: s.duration_minutes,
        started_at: s.started_at,
        completed_at: s.completed_at,
        study_date: s.study_date || s.completed_at?.split(' ')[0] || s.started_at?.split(' ')[0],
        scope_note: s.scope_note
      };
    });

    res.json({
      success: true,
      items
    });
  } catch (err) {
    console.error('Erro ao buscar estudos passados:', err);
    res.status(500).json({ error: 'Falha ao buscar histórico de estudos: ' + err.message });
  }
});

// DELETE /past-study/:id
router.delete('/past-study/:id', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const sessionId = req.params.id;

    const session = db.prepare(`
      SELECT * FROM study_sessions
      WHERE id = ? AND user_id = ?
    `).get(sessionId, userId);

    if (!session) {
      return res.status(404).json({ error: 'Sessão de estudo não encontrada ou não pertence ao usuário.' });
    }

    db.prepare(`
      DELETE FROM study_sessions
      WHERE id = ? AND user_id = ?
    `).run(sessionId, userId);

    let newStreak = 0;
    try {
      newStreak = calculateUserStreak(userId, session.career_id);
      db.prepare(`
        UPDATE user_profiles
        SET streakDays = ?
        WHERE id = ?
      `).run(newStreak, userId);
    } catch (streakErr) {
      console.warn('Aviso ao recalcular streak:', streakErr.message);
    }

    res.json({
      success: true,
      newStreak,
      message: 'Sessão de estudo retroativa removida com sucesso.'
    });
  } catch (err) {
    console.error('Erro ao excluir estudo retroativo:', err);
    res.status(500).json({ error: 'Falha ao excluir estudo retroativo: ' + err.message });
  }
});

export default router;
