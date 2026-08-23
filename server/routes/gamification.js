import express from 'express';
import { gamificationService } from '../services/GamificationService.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const router = express.Router();

// GET /api/gamification/status - Get full gamification status for current user
router.get('/status', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
    const status = gamificationService.getStatus(userId, careerId);
    res.json({
      ...status,
      currentXP: status?.totalXP || 0,
      rank: status?.currentRank || null
    });
  } catch (err) {
    console.error('Error fetching gamification status:', err);
    res.status(500).json({ error: 'Erro ao carregar dados de gamificação.' });
  }
});

// GET /api/gamification/catalog - List all available achievements and ranks
router.get('/catalog', (req, res) => {
  res.json(gamificationService.getCatalog());
});

// POST /api/gamification/claim-daily - Claim daily check-in bonus XP
router.post('/claim-daily', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const result = gamificationService.claimDailyCheckin(userId);
    res.json(result);
  } catch (err) {
    console.error('Error claiming daily bonus:', err);
    res.status(400).json({ error: err.message || 'Erro ao resgatar bônus diário.' });
  }
});

// GET /api/gamification/rank - Get current user rank and progression
router.get('/rank', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
    const status = gamificationService.getStatus(userId, careerId);
    const catalog = gamificationService.getCatalog();
    res.json({
      success: true,
      currentRank: status.currentRank,
      rank: status.currentRank,
      totalXP: status.totalXP,
      currentXP: status.totalXP,
      nextRank: status.nextRank,
      ranks: catalog.ranks
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter ranking: ' + err.message });
  }
});

// GET /api/gamification/xp - Get XP status and history
router.get('/xp', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
    const status = gamificationService.getStatus(userId, careerId);
    res.json({
      success: true,
      totalXP: status.totalXP,
      currentXP: status.totalXP,
      xpNeededForNext: status.xpNeededForNext,
      progressPct: status.progressPct,
      streakDays: status.streakDays,
      recentXpLog: status.recentXpLog
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter XP: ' + err.message });
  }
});

// GET /api/gamification/achievements - List user achievements
router.get('/achievements', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;
    const status = gamificationService.getStatus(userId, careerId);
    const catalog = gamificationService.getCatalog();
    res.json({
      success: true,
      unlockedCount: status.unlockedCount,
      totalAchievementsCount: status.totalAchievementsCount,
      achievements: status.achievements,
      catalog: catalog.achievements
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter conquistas: ' + err.message });
  }
});

export default router;
