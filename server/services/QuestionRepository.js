/**
 * QuestionRepository.js
 * 
 * Repositório Orientado a Objetos para gestão de questões, respostas, estatísticas de acerto,
 * simulados e o Caderno de Erros com repetição espaçada.
 * 
 * Padrões: Repository Pattern, Single Responsibility (SOLID) e Clean Code.
 */

import db from '../database.js';
import { CAREER_SUBJECTS } from '../gamification.js';

export class QuestionRepository {
  /**
   * Obtém questões filtradas por matéria ou carreira.
   * @param {string} subject 
   * @param {string} careerId 
   * @param {number} limit 
   */
  getQuestions({ subject = null, careerId = null, limit = 10, offset = 0 } = {}) {
    let sql = 'SELECT * FROM questions WHERE 1=1';
    const params = [];

    if (subject) {
      sql += ' AND subject = ?';
      params.push(subject);
    }

    if (careerId && CAREER_SUBJECTS[careerId]) {
      const subjects = CAREER_SUBJECTS[careerId];
      const placeholders = subjects.map(() => '?').join(',');
      sql += ` AND subject IN (${placeholders})`;
      params.push(...subjects);
    }

    sql += ' ORDER BY RANDOM() LIMIT ? OFFSET ?';
    params.push(limit, offset);

    return db.prepare(sql).all(...params);
  }

  /**
   * Registra a resposta de uma questão para o estudante.
   * @param {string} userId 
   * @param {string} questionId 
   * @param {string} selectedOption 
   * @param {boolean} isCorrect 
   * @param {string} careerId 
   */
  recordAnswer(userId, questionId, selectedOption, isCorrect, careerId = 'atrfb') {
    const id = 'ans_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    db.prepare(`
      INSERT INTO question_answers (id, user_id, question_id, selected_option, is_correct, answered_at, career_id)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)
    `).run(id, userId, questionId, selectedOption, isCorrect ? 1 : 0, careerId);

    // Se errou, insere ou atualiza no Caderno de Erros
    if (!isCorrect) {
      const existingError = db.prepare('SELECT id, error_count FROM error_notebook WHERE user_id = ? AND question_id = ?').get(userId, questionId);
      if (existingError) {
        db.prepare(`
          UPDATE error_notebook 
          SET error_count = error_count + 1, last_reviewed_at = CURRENT_TIMESTAMP, status = 'learning'
          WHERE id = ?
        `).run(existingError.id);
      } else {
        const errorId = 'err_' + Date.now();
        db.prepare(`
          INSERT INTO error_notebook (id, user_id, question_id, error_count, status, created_at, last_reviewed_at, career_id)
          VALUES (?, ?, ?, 1, 'learning', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?)
        `).run(errorId, userId, questionId, careerId);
      }
    }

    return { id, isCorrect };
  }

  /**
   * Obtém as pendências do Caderno de Erros para o estudante.
   * @param {string} userId 
   * @param {string} careerId 
   */
  getErrorNotebook(userId, careerId = null) {
    let sql = `
      SELECT en.id as notebook_id, en.error_count, en.status, en.user_notes, en.created_at as added_at,
             q.id as question_id, q.subject, q.topic, q.banca, q.year, q.statement, q.options_json, q.correct_option, q.explanation
      FROM error_notebook en
      JOIN questions q ON en.question_id = q.id
      WHERE en.user_id = ?
    `;
    const params = [userId];

    if (careerId) {
      sql += ' AND (en.career_id = ? OR en.career_id IS NULL)';
      params.push(careerId);
    }

    sql += ' ORDER BY en.last_reviewed_at ASC';

    const rows = db.prepare(sql).all(...params);
    return rows.map(r => ({
      ...r,
      options: typeof r.options_json === 'string' ? JSON.parse(r.options_json) : r.options_json
    }));
  }
}

export const questionRepository = new QuestionRepository();
