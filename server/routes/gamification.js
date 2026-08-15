import express from 'express';
import { getGamificationStatus, RANKS, ACHIEVEMENTS_CATALOG } from '../gamification.js';
import db from '../database.js';

const router = express.Router();

// GET /api/gamification/status - Get full gamification status for current user
router.get('/status', (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
    const status = getGamificationStatus(userId, careerId);
    res.json(status);
  } catch (err) {
    console.error('Error fetching gamification status:', err);
    res.status(500).json({ error: 'Erro ao carregar dados de gamificação.' });
  }
});

// GET /api/gamification/catalog - List all available achievements and ranks
router.get('/catalog', (req, res) => {
  res.json({
    ranks: RANKS,
    achievements: ACHIEVEMENTS_CATALOG
  });
});

// POST /api/gamification/claim-daily - Claim daily check-in bonus XP
router.post('/claim-daily', (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || req.body.user_id || 'user_joao';
    const todayStr = new Date().toISOString().substring(0, 10);

    const alreadyClaimed = db.prepare(`
      SELECT id FROM user_xp_log 
      WHERE user_id = ? AND reason LIKE 'Bônus Diário%' AND substr(created_at, 1, 10) = ?
    `).get(userId, todayStr);

    if (alreadyClaimed) {
      return res.status(400).json({ error: 'Bônus diário já resgatado hoje!' });
    }

    const bonusXP = 50;
    db.prepare(`
      INSERT INTO user_xp_log (user_id, amount, reason, created_at)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `).run(userId, bonusXP, `Bônus Diário de Check-in (${todayStr})`);

    const updated = getGamificationStatus(userId);
    res.json({ success: true, bonusXP, status: updated });
  } catch (err) {
    console.error('Error claiming daily bonus:', err);
    res.status(500).json({ error: 'Erro ao resgatar bônus diário.' });
  }
});

export default router;
