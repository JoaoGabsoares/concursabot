/**
 * StudyCadenceService.js
 * 
 * Serviço Orientado a Objetos para gestão de cadência de estudos personalizada,
 * controle de marcação de página e cálculo dinâmico de ritmo de leitura.
 * 
 * Padrões: Single Responsibility (SOLID), Clean Code e Legibilidade.
 */

import db from '../database.js';

export class StudyCadenceService {
  /**
   * Obtém as configurações de cadência de um estudante.
   * @param {string} userId 
   * @returns {object} { readingMin, questionsMin, mode, label }
   */
  getUserCadence(userId) {
    const user = db.prepare(`
      SELECT cadence_reading_min, cadence_questions_min, cadence_mode 
      FROM user_profiles 
      WHERE id = ?
    `).get(userId);

    const readingMin = user?.cadence_reading_min || 60;
    const questionsMin = user?.cadence_questions_min || 30;
    const mode = user?.cadence_mode || '60_30';

    return {
      readingMin,
      questionsMin,
      mode,
      label: `${readingMin}m Leitura / ${questionsMin}m Questões`
    };
  }

  /**
   * Atualiza a preferência de cadência do usuário.
   * @param {string} userId 
   * @param {number} readingMin 
   * @param {number} questionsMin 
   * @param {string} mode 
   */
  updateUserCadence(userId, readingMin, questionsMin, mode = 'custom') {
    db.prepare(`
      UPDATE user_profiles 
      SET cadence_reading_min = ?, cadence_questions_min = ?, cadence_mode = ?, last_active_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(readingMin, questionsMin, mode, userId);
  }

  /**
   * Atualiza o marca-página de um material de estudo.
   * @param {string} materialId 
   * @param {number} page 
   * @param {string} userId 
   */
  updateBookmark(materialId, page, userId = null) {
    const pageNum = parseInt(page, 10) || 1;
    db.prepare(`
      UPDATE study_materials 
      SET current_page = ?, studied_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `).run(pageNum, materialId);

    return { success: true, materialId, currentPage: pageNum };
  }

  /**
   * Calcula o ritmo de leitura e a estimativa de término do material.
   * @param {string} materialId 
   * @param {string} userId 
   * @returns {object} Métricas de ritmo e recomendação
   */
  calculateReadingPace(materialId, userId) {
    const material = db.prepare(`
      SELECT id, title, subject, current_page, total_pages, theory_pages, exercise_pages, reading_metrics_json 
      FROM study_materials 
      WHERE id = ?
    `).get(materialId);

    if (!material) {
      throw new Error('Material de estudo não encontrado.');
    }

    const cadence = this.getUserCadence(userId);
    const currentPage = material.current_page || 1;
    const totalPages = material.total_pages || 1;
    const theoryPages = material.theory_pages || totalPages;

    const pagesRemaining = Math.max(0, theoryPages - currentPage);
    const progressPct = theoryPages > 0 ? Math.min(100, Math.round((currentPage / theoryPages) * 100)) : 0;

    // Estimativa de páginas lidas por hora com base no histórico ou default de 15 págs/hora
    let pagesPerHour = 15;
    if (material.reading_metrics_json) {
      try {
        const metrics = JSON.parse(material.reading_metrics_json);
        if (metrics.estimatedPagesPerHour) {
          pagesPerHour = metrics.estimatedPagesPerHour;
        }
      } catch (e) {
        // Usa default
      }
    }

    const minutesPerTheoryPage = Math.max(1, Math.round(60 / pagesPerHour));
    const estimatedMinutesRemaining = pagesRemaining * minutesPerTheoryPage;
    const estimatedSessionsRemaining = cadence.readingMin > 0 
      ? Math.ceil(estimatedMinutesRemaining / cadence.readingMin) 
      : 1;

    let resumeRecommendation = 'Inicie a leitura teórica da aula.';
    if (currentPage > 1 && pagesRemaining > 0) {
      resumeRecommendation = `Retome na Página ${currentPage}. Faltam ~${estimatedMinutesRemaining} min (${pagesRemaining} págs) para fechar a teoria.`;
    } else if (pagesRemaining === 0) {
      resumeRecommendation = `Parabéns! Teoria concluída. Prossiga para o bloco de questões (${cadence.questionsMin} min).`;
    }

    return {
      materialId,
      currentPage,
      totalPages,
      theoryPages,
      pagesRemaining,
      progressPct,
      cadence,
      estimatedMinutesRemaining,
      estimatedSessionsRemaining,
      resumeRecommendation
    };
  }
}

export const studyCadenceService = new StudyCadenceService();
