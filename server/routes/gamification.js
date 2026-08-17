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
    res.json(status);
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

export default router;
