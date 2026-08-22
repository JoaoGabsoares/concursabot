import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedATRFBQuestions(db) {
  try {
    const jsonPath = path.join(__dirname, '../data/questions/atrfb_fgv_questions.json');
    if (!fs.existsSync(jsonPath)) return;

    const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (!Array.isArray(questions) || questions.length === 0) return;

    const insertQStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const checkQStmt = db.prepare("SELECT id FROM questions WHERE question_text = ?");

    const insertCqbStmt = db.prepare(`
      INSERT INTO career_question_bank (career_id, subject, topic, year_reference, banca, difficulty, question_text, options_json, correct_answer, explanation, is_pegadinha)
      VALUES ('atrfb', ?, ?, 2023, 'FGV', 'alta', ?, ?, ?, ?, 1)
    `);

    const checkCqbStmt = db.prepare("SELECT id FROM career_question_bank WHERE career_id = 'atrfb' AND question_text = ?");

    let count = 0;
    db.transaction(() => {
      for (const q of questions) {
        // 1. Central questions table
        const existsQ = checkQStmt.get(q.question_text);
        const optionsJson = typeof q.options === 'string' ? q.options : JSON.stringify(q.options);
        const optionsArr = typeof q.options === 'string' ? JSON.parse(q.options) : q.options;
        const letterAnswer = String.fromCharCode(65 + (q.correct_index || 0));

        if (!existsQ) {
          insertQStmt.run(
            q.subject,
            q.topic || 'Conhecimentos ATRFB FGV',
            q.banca || 'FGV',
            q.type || 'multiple_choice',
            q.question_text,
            optionsJson,
            q.correct_index !== undefined ? q.correct_index : 0,
            q.explanation
          );
        }

        // 2. Career Question Bank table
        const existsCqb = checkCqbStmt.get(q.question_text);
        if (!existsCqb) {
          insertCqbStmt.run(
            q.subject,
            q.topic || 'Conhecimentos ATRFB FGV',
            q.question_text,
            optionsJson,
            letterAnswer,
            q.explanation
          );
          count++;
        }
      }
    })();

    console.log(`[DB Seed] ✅ Questões oficiais FGV para Receita Federal (ATRFB) sincronizadas! (${count} novas)`);
  } catch (err) {
    console.error('[DB Seed] Erro ao semear questões da Receita Federal FGV:', err.message);
  }
}
