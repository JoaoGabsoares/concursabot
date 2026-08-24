import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedISSNiteroiQuestions(db) {
  try {
    const jsonPath = path.join(__dirname, '../data/questions/iss_niteroi_questions.json');
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
            q.topic || 'Fiscal de Tributos Niterói',
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

    console.log(`[DB Seed] ✅ Questões oficiais do ISS Niterói (FGV) sincronizadas!`);
  } catch (err) {
    console.error('[DB Seed] Erro ao semear questões do ISS Niterói:', err.message);
  }
}
