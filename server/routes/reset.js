import express from 'express';
import db from '../database.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// POST / - Reset study progress by scope (day, week, month, all)
router.post('/', (req, res) => {
  try {
    const { scope, confirmation } = req.body;

    if (!scope || !['day', 'week', 'month', 'all'].includes(scope)) {
      return res.status(400).json({ error: 'Escopo de reset inválido. Use "day", "week", "month" ou "all".' });
    }

    if (!confirmation || String(confirmation).trim().toUpperCase() !== 'RESET') {
      return res.status(400).json({ error: 'Confirmação inválida. É necessário digitar "RESET" para autorizar.' });
    }

    let dateFilter = '';
    let scheduleDateFilter = '';
    let desc = '';

    if (scope === 'day') {
      dateFilter = "date(created_at) = date('now') OR date(started_at) = date('now')";
      scheduleDateFilter = "date(completed_at) = date('now')";
      desc = 'do dia de hoje';
    } else if (scope === 'week') {
      dateFilter = "created_at >= datetime('now', '-7 days') OR started_at >= datetime('now', '-7 days')";
      scheduleDateFilter = "completed_at >= datetime('now', '-7 days')";
      desc = 'dos últimos 7 dias (semana)';
    } else if (scope === 'month') {
      dateFilter = "created_at >= datetime('now', '-30 days') OR started_at >= datetime('now', '-30 days')";
      scheduleDateFilter = "completed_at >= datetime('now', '-30 days')";
      desc = 'dos últimos 30 dias (mês)';
    } else if (scope === 'all') {
      dateFilter = '1=1';
      scheduleDateFilter = '1=1';
      desc = 'completo de todo o histórico';
    }

    const userId = getAuthenticatedUserId(req);

    // Execute atomic reset transaction per user
    const resetTransaction = db.transaction(() => {
      let sessionsDeleted = 0;
      let questionsCleared = 0;
      let tasksUncompleted = 0;
      let activitiesCleared = 0;
      let simuladosCleared = 0;

      if (scope === 'all') {
        sessionsDeleted = db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(userId).changes;
        questionsCleared = db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(userId).changes;
        activitiesCleared = db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(userId).changes;
        simuladosCleared = db.prepare('DELETE FROM simulados WHERE user_id = ?').run(userId).changes;
        try { db.prepare('DELETE FROM user_achievements WHERE user_id = ?').run(userId); } catch(e){}
        try { db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(userId); } catch(e){}
        try { db.prepare('DELETE FROM caderno_erros WHERE user_id = ?').run(userId); } catch(e){}
        try { db.prepare('DELETE FROM redacoes WHERE user_id = ?').run(userId); } catch(e){}
        try { db.prepare('DELETE FROM study_reviews WHERE user_id = ?').run(userId); } catch(e){}
        try { db.prepare('DELETE FROM missed_sessions WHERE user_id = ?').run(userId); } catch(e){}
        tasksUncompleted = db.prepare('UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE user_id = ?').run(userId).changes;
        db.prepare('UPDATE study_materials SET studied_at = NULL, theory_completed = 0, questions_completed = 0 WHERE user_id = ?').run(userId);
        db.prepare("UPDATE flashcards SET repetitions = 0, interval_days = 0, next_review = datetime('now') WHERE user_id = ?").run(userId);
      } else if (scope === 'day') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE user_id = ? AND (date(started_at) = date('now') OR date(completed_at) = date('now'))").run(userId).changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE user_id = ? AND date(answered_at) = date('now')").run(userId).changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE user_id = ? AND date(created_at) = date('now')").run(userId).changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE user_id = ? AND date(completed_at) = date('now')").run(userId).changes;
        db.prepare("UPDATE study_materials SET studied_at = NULL, theory_completed = 0, questions_completed = 0 WHERE user_id = ? AND date(studied_at) = date('now')").run(userId);
      } else if (scope === 'week') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE user_id = ? AND started_at >= datetime('now', '-7 days')").run(userId).changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE user_id = ? AND answered_at >= datetime('now', '-7 days')").run(userId).changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE user_id = ? AND created_at >= datetime('now', '-7 days')").run(userId).changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE user_id = ? AND completed_at >= datetime('now', '-7 days')").run(userId).changes;
      } else if (scope === 'month') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE user_id = ? AND started_at >= datetime('now', '-30 days')").run(userId).changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE user_id = ? AND answered_at >= datetime('now', '-30 days')").run(userId).changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE user_id = ? AND created_at >= datetime('now', '-30 days')").run(userId).changes;
        simuladosCleared = db.prepare("DELETE FROM simulados WHERE user_id = ? AND created_at >= datetime('now', '-30 days')").run(userId).changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE user_id = ? AND completed_at >= datetime('now', '-30 days')").run(userId).changes;
      }

      return {
        sessionsDeleted,
        questionsCleared,
        tasksUncompleted,
        activitiesCleared,
        simuladosCleared
      };
    });

    const result = resetTransaction();

    res.json({
      success: true,
      scope,
      message: `Progresso de estudo ${desc} resetado com sucesso!`,
      metrics: result
    });

  } catch (err) {
    console.error('Error executing study reset:', err);
    res.status(500).json({ error: 'Erro ao executar o reset de estudo: ' + err.message });
  }
});

export default router;
