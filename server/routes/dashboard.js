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
        let subjectBreakdown = [];

        // Calcular semana corrente de Segunda a Domingo no fuso local seguro
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Dom, 1 = Seg, ..., 6 = Sab
        const distToMonday = currentDay === 0 ? -6 : 1 - currentDay;
        
        const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + distToMonday);
        const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);

        const pad = (n) => String(n).padStart(2, '0');
        const getLocalDateStr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

        const mondayStr = getLocalDateStr(monday);
        const sundayStr = getLocalDateStr(sunday);

        // Datas ativas da semana corrente (Segunda a Domingo)
        // Consultar estritamente sessões de estudo concluídas, questões respondidas e simulados concluídos
        const weekDatesRows = db.prepare(`
          SELECT DISTINCT substr(study_time, 1, 10) as study_date
          FROM (
            SELECT started_at as study_time FROM study_sessions WHERE user_id = ? AND status = 'completed'
            UNION
            SELECT completed_at as study_time FROM study_sessions WHERE user_id = ? AND status = 'completed'
            UNION
            SELECT answered_at as study_time FROM question_answers WHERE user_id = ?
            UNION
            SELECT completed_at as study_time FROM simulados WHERE user_id = ? AND status = 'completed'
          )
          WHERE study_date >= ? AND study_date <= ?
        `).all(userId, userId, userId, userId, mondayStr, sundayStr);

        const activeWeekDates = weekDatesRows.map(r => r.study_date);
        const streak = calculateUserStreak(userId, careerId);

        if (careerId && subjects) {
            const placeholders = subjects.map(() => '?').join(',');

            // Questões respondidas nesta carreira (simulados/quizzes)
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

            // 1. Agregação de question_answers por matéria
            const qaRows = db.prepare(`
                SELECT 
                    q.subject as name,
                    COUNT(qa.id) as total,
                    SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as correct
                FROM question_answers qa
                JOIN questions q ON qa.question_id = q.id
                WHERE qa.user_id = ? AND (qa.career_id = ? OR qa.career_id IS NULL)
                GROUP BY q.subject
            `).all(userId, careerId);

            // 2. Agregação de study_sessions (estudos nativos e retroativos)
            const sessionRows = db.prepare(`
                SELECT 
                    ss.id,
                    ss.duration_minutes,
                    ss.scope_note,
                    sm.subject as material_subject
                FROM study_sessions ss
                LEFT JOIN study_materials sm ON ss.material_id = sm.id
                WHERE ss.user_id = ? AND (ss.career_id = ? OR ss.career_id IS NULL) AND ss.status = 'completed'
            `).all(userId, careerId);

            // Mapeamento por disciplina
            const statsMap = new Map();
            for (const subj of subjects) {
                statsMap.set(subj, { totalQuestions: 0, correctQuestions: 0, totalMinutes: 0, sessionsCount: 0 });
            }

            for (const r of qaRows) {
                if (r.name && statsMap.has(r.name)) {
                    const st = statsMap.get(r.name);
                    st.totalQuestions += r.total || 0;
                    st.correctQuestions += r.correct || 0;
                }
            }

            for (const s of sessionRows) {
                let subj = s.material_subject;
                if (!subj && s.scope_note) {
                    const mSubj = s.scope_note.match(/Disciplina:\s*([^•]+)/i);
                    if (mSubj) {
                        subj = mSubj[1].trim();
                    } else {
                        for (const cand of subjects) {
                            if (s.scope_note.includes(cand)) {
                                subj = cand;
                                break;
                            }
                        }
                    }
                }

                if (subj && statsMap.has(subj)) {
                    const st = statsMap.get(subj);
                    st.totalMinutes += s.duration_minutes || 0;
                    st.sessionsCount += 1;

                    if (s.scope_note) {
                        const mQ = s.scope_note.match(/(\d+)\/(\d+)\s+questões certas/i);
                        if (mQ) {
                            const correctQ = parseInt(mQ[1], 10) || 0;
                            const totalQ = parseInt(mQ[2], 10) || 0;
                            st.correctQuestions += correctQ;
                            st.totalQuestions += totalQ;
                        }
                    }
                }
            }

            // Monta o radar de disciplinas completo e sincronizado
            subjectBreakdown = subjects.map(subj => {
                const st = statsMap.get(subj) || { totalQuestions: 0, correctQuestions: 0, totalMinutes: 0, sessionsCount: 0 };
                const totalQ = st.totalQuestions;
                const correctQ = st.correctQuestions;
                const pct = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : (st.totalMinutes > 0 ? 100 : 0);

                let status = 'pendente';
                let statusLabel = 'NÃO INICIADO';

                if (totalQ > 0) {
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
                } else if (st.totalMinutes > 0 || st.sessionsCount > 0) {
                    status = 'em_revisao';
                    statusLabel = 'EM ESTUDO';
                }

                return {
                    name: subj,
                    totalQuestions: totalQ,
                    correctQuestions: correctQ,
                    totalMinutes: st.totalMinutes,
                    sessionsCount: st.sessionsCount,
                    correctPercentage: pct,
                    status,
                    statusLabel
                };
            });

            // Weakest / Strongest
            subStats = subjectBreakdown
                .filter(s => s.totalQuestions > 0 || s.totalMinutes > 0)
                .map(s => ({
                    subject: s.name,
                    total: s.totalQuestions,
                    correct_pct: s.correctPercentage
                }))
                .sort((a, b) => a.correct_pct - b.correct_pct);

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

        // Somar questões totais (QA + estudos retroativos/sessões)
        let aggregateTotalQuestions = qStats?.total || 0;
        let aggregateCorrectCount = qStats?.correct || 0;

        if (subjectBreakdown && subjectBreakdown.length > 0) {
            const sumQ = subjectBreakdown.reduce((acc, curr) => acc + (curr.totalQuestions || 0), 0);
            const sumC = subjectBreakdown.reduce((acc, curr) => acc + (curr.correctQuestions || 0), 0);
            if (sumQ > aggregateTotalQuestions) {
                aggregateTotalQuestions = sumQ;
                aggregateCorrectCount = sumC;
            }
        }

        const accuracyPct = aggregateTotalQuestions > 0 ? Math.round((aggregateCorrectCount / aggregateTotalQuestions) * 100) : 0;

        res.json({
            answered: aggregateTotalQuestions,
            accuracy: accuracyPct,
            pendingCards: fStats?.due || 0,
            simulados: sStats?.total || 0,
            streak,
            activeWeekDates,
            questions: {
                totalAnswered: aggregateTotalQuestions,
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
            subjectBreakdown,
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
      `Disciplina: ${subject}`,
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
