import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedRM2Questions(db) {
  try {
    const dataPath = path.join(__dirname, '../data/questions/rm2_densm.json');
    if (!fs.existsSync(dataPath)) {
      console.warn('[DB Seed] Arquivo rm2_densm.json não encontrado.');
      return;
    }

    const questions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    if (!Array.isArray(questions) || questions.length === 0) return;

    const insertQStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const checkQStmt = db.prepare("SELECT id FROM questions WHERE question_text = ?");

    const insertCqbStmt = db.prepare(`
      INSERT INTO career_question_bank (career_id, subject, topic, year_reference, banca, difficulty, question_text, options_json, correct_answer, explanation, is_pegadinha)
      VALUES ('marinha_rm2', ?, ?, 2024, 'DEnsM', 'media', ?, ?, ?, ?, 1)
    `);

    const checkCqbStmt = db.prepare("SELECT id FROM career_question_bank WHERE career_id = 'marinha_rm2' AND question_text = ?");

    let count = 0;
    db.transaction(() => {
      for (const q of questions) {
        const optionsJson = typeof q.options === 'string' ? q.options : JSON.stringify(q.options);
        const correctIndex = q.correct_index !== undefined ? q.correct_index : 0;
        const letterAnswer = String.fromCharCode(65 + correctIndex);

        // 1. Central questions table
        const existsQ = checkQStmt.get(q.question_text);
        if (!existsQ) {
          insertQStmt.run(
            q.subject,
            q.topic || 'Formação Militar-Naval',
            q.banca || 'DEnsM',
            q.type || 'multiple_choice',
            q.question_text,
            optionsJson,
            correctIndex,
            q.explanation
          );
        }

        // 2. Career Question Bank table
        const existsCqb = checkCqbStmt.get(q.question_text);
        if (!existsCqb) {
          insertCqbStmt.run(
            q.subject,
            q.topic || 'Formação Militar-Naval',
            q.question_text,
            optionsJson,
            letterAnswer,
            q.explanation
          );
          count++;
        }
      }
    })();

    console.log(`[DB Seed] ✅ Questões oficiais da Marinha do Brasil (DEnsM RM2) sincronizadas! (${count} novas em career_question_bank)`);
  } catch (err) {
    console.error('[DB Seed] Erro ao sincronizar questões RM2:', err.message);
  }
}

