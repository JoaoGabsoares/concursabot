/**
 * GamificationService.js
 * 
 * Serviço Orientado a Objetos para gestão do motor de gamificação, cálculo de XP,
 * streaks, níveis (Ranks) e troféus desbloqueáveis por carreira.
 * 
 * Padrões: Single Responsibility (SOLID), Clean Code e Legibilidade.
 */

import db from '../database.js';
import { 
  RANKS, 
  ACHIEVEMENTS_CATALOG, 
  CAREER_SUBJECTS, 
  getGamificationStatus,
  calculateUserStreak,
  evaluateAndUnlockAchievements 
} from '../gamification.js';

export class GamificationService {
  /**
   * Obtém o catálogo de ranks e conquistas.
   */
  getCatalog() {
    return {
      ranks: RANKS,
      achievements: ACHIEVEMENTS_CATALOG
    };
  }

  /**
   * Obtém o estado completo de gamificação do estudante.
   * @param {string} userId 
   * @param {string} careerId 
   */
  getStatus(userId, careerId = null) {
    return getGamificationStatus(userId, careerId);
  }

  /**
   * Calcula o streak de dias consecutivos de estudo ativo.
   * @param {string} userId 
   * @param {string} careerId 
   */
  getStreak(userId, careerId = null) {
    return calculateUserStreak(userId, careerId);
  }

  /**
   * Concede XP para o usuário com log histórico.
   * @param {string} userId 
   * @param {number} amount 
   * @param {string} reason 
   * @param {string} careerId 
   */
  awardXP(userId, amount, reason, careerId = null) {
    db.prepare(`
      INSERT INTO user_xp_log (user_id, amount, reason, created_at, career_id)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)
    `).run(userId, amount, reason, careerId || 'atrfb');

    return this.getStatus(userId, careerId);
  }

  /**
   * Resgata o bônus diário de check-in (+50 XP).
   * @param {string} userId 
   */
  claimDailyCheckin(userId) {
    const todayStr = new Date().toISOString().substring(0, 10);

    const alreadyClaimed = db.prepare(`
      SELECT id FROM user_xp_log 
      WHERE user_id = ? AND reason LIKE 'Bônus Diário%' AND substr(created_at, 1, 10) = ?
    `).get(userId, todayStr);

    if (alreadyClaimed) {
      throw new Error('Bônus diário já resgatado hoje!');
    }

    const bonusXP = 50;
    db.prepare(`
      INSERT INTO user_xp_log (user_id, amount, reason, created_at)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `).run(userId, bonusXP, `Bônus Diário de Check-in (${todayStr})`);

    const updated = this.getStatus(userId);
    return { success: true, bonusXP, status: updated };
  }
}

export const gamificationService = new GamificationService();
