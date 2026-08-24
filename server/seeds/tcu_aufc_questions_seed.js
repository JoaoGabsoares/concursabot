import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedTCUAUFCQuestions(db) {
  try {
    const jsonPath = path.join(__dirname, '../data/questions/tcu_aufc_questions.json');
    if (!fs.existsSync(jsonPath)) return;

    const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (!Array.isArray(questions) || questions.length === 0) return;

    const insertStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const checkStmt = db.prepare("SELECT id FROM questions WHERE question_text = ?");

    db.transaction(() => {
      for (const q of questions) {
        const exists = checkStmt.get(q.question_text);
        if (!exists) {
          insertStmt.run(
            q.subject,
            q.topic || 'Controle Externo e TCU',
            q.banca || 'FGV',
            q.type || 'multiple_choice',
            q.question_text,
            typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
            q.correct_index !== undefined ? q.correct_index : 0,
            q.explanation
          );
        }
      }
    })();

    console.log(`[DB Seed] ✅ Questões oficiais do TCU AUFC (FGV) sincronizadas!`);
  } catch (err) {
    console.error('[DB Seed] Erro ao semear questões do TCU AUFC:', err.message);
  }
}
