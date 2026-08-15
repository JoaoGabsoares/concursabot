import express from 'express';
import db from '../database.js';

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

    // Execute atomic reset transaction
    const resetTransaction = db.transaction(() => {
      let sessionsDeleted = 0;
      let questionsCleared = 0;
      let tasksUncompleted = 0;
      let activitiesCleared = 0;
      let simuladosCleared = 0;

      if (scope === 'all') {
        sessionsDeleted = db.prepare('DELETE FROM study_sessions').run().changes;
        questionsCleared = db.prepare('DELETE FROM question_answers').run().changes;
        activitiesCleared = db.prepare('DELETE FROM activity_log').run().changes;
        simuladosCleared = db.prepare('DELETE FROM simulados').run().changes;
        try { db.prepare('DELETE FROM simulado_questions').run(); } catch(e){}
        try { db.prepare('DELETE FROM user_achievements').run(); } catch(e){}
        try { db.prepare('DELETE FROM user_xp_log').run(); } catch(e){}
        try { db.prepare('DELETE FROM study_reviews').run(); } catch(e){}
        try { db.prepare('DELETE FROM missed_sessions').run(); } catch(e){}
        tasksUncompleted = db.prepare('UPDATE schedule_tasks SET completed = 0, completed_at = NULL').run().changes;
        db.prepare('UPDATE study_materials SET studied_at = NULL, theory_completed = 0, questions_completed = 0').run();
        db.prepare("UPDATE flashcards SET repetitions = 0, interval_days = 0, next_review = datetime('now')").run();
      } else if (scope === 'day') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE date(started_at) = date('now') OR date(completed_at) = date('now')").run().changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE date(answered_at) = date('now')").run().changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE date(created_at) = date('now')").run().changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE date(completed_at) = date('now')").run().changes;
        db.prepare("UPDATE study_materials SET studied_at = NULL, theory_completed = 0, questions_completed = 0 WHERE date(studied_at) = date('now')").run();
      } else if (scope === 'week') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE started_at >= datetime('now', '-7 days')").run().changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE answered_at >= datetime('now', '-7 days')").run().changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE created_at >= datetime('now', '-7 days')").run().changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE completed_at >= datetime('now', '-7 days')").run().changes;
      } else if (scope === 'month') {
        sessionsDeleted = db.prepare("DELETE FROM study_sessions WHERE started_at >= datetime('now', '-30 days')").run().changes;
        questionsCleared = db.prepare("DELETE FROM question_answers WHERE answered_at >= datetime('now', '-30 days')").run().changes;
        activitiesCleared = db.prepare("DELETE FROM activity_log WHERE created_at >= datetime('now', '-30 days')").run().changes;
        simuladosCleared = db.prepare("DELETE FROM simulados WHERE created_at >= datetime('now', '-30 days')").run().changes;
        tasksUncompleted = db.prepare("UPDATE schedule_tasks SET completed = 0, completed_at = NULL WHERE completed_at >= datetime('now', '-30 days')").run().changes;
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
