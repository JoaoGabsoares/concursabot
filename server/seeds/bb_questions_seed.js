import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedBBQuestions(db) {
  try {
    const existing = db.prepare("SELECT COUNT(*) as count FROM questions WHERE banca LIKE '%Cesgranrio%'").get();
    if (existing && existing.count >= 10) {
      return;
    }

    const comercialPath = path.join(__dirname, '../data/questions/bb_comercial_questions.json');
    const tiPath = path.join(__dirname, '../data/questions/bb_ti_questions.json');

    let allQuestions = [];

    if (fs.existsSync(comercialPath)) {
      const qCom = JSON.parse(fs.readFileSync(comercialPath, 'utf8'));
      allQuestions = allQuestions.concat(qCom);
    }
    if (fs.existsSync(tiPath)) {
      const qTi = JSON.parse(fs.readFileSync(tiPath, 'utf8'));
      allQuestions = allQuestions.concat(qTi);
    }

    if (allQuestions.length === 0) return;

    console.log(`[DB Seed] Sincronizando ${allQuestions.length} questões oficiais da Fundação Cesgranrio (Banco do Brasil)...`);

    const insertStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    db.transaction(() => {
      db.prepare("DELETE FROM questions WHERE banca LIKE '%Cesgranrio%'").run();
      for (const q of allQuestions) {
        insertStmt.run(
          q.subject,
          q.topic || 'Conhecimentos Oficiais',
          q.banca || 'Fundação Cesgranrio',
          q.type || 'multiple_choice',
          q.question_text,
          typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
          q.correct_option !== undefined ? q.correct_option : q.correct_index,
          q.explanation
        );
      }
    })();

    console.log(`[DB Seed] ✅ ${allQuestions.length} questões do Banco do Brasil sincronizadas com sucesso!`);
  } catch (err) {
    console.error('[DB Seed] Erro ao semear questões do Banco do Brasil:', err.message);
  }
}
