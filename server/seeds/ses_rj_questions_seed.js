import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedSESRJQuestions(db) {
  try {
    const existing = db.prepare("SELECT COUNT(*) as count FROM questions WHERE banca = 'IBDO'").get();
    if (existing && existing.count >= 60) {
      return;
    }

    const dataPath = path.join(__dirname, '../data/questions/ses_rj_ibdo.json');
    if (!fs.existsSync(dataPath)) {
      console.warn('[DB Seed] Arquivo ses_rj_ibdo.json não encontrado.');
      return;
    }

    const questions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`[DB Seed] Sincronizando ${questions.length} questões modelo IBDO Projetos (Saúde RJ)...`);

    const insertStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    db.transaction(() => {
      db.prepare("DELETE FROM questions WHERE banca = 'IBDO'").run();
      for (const q of questions) {
        insertStmt.run(
          q.subject,
          q.topic,
          q.banca,
          q.type || 'multiple_choice',
          q.question_text,
          typeof q.options === 'string' ? q.options : JSON.stringify(q.options),
          q.correct_index,
          q.explanation
        );
      }
    })();

    console.log(`[DB Seed] ✅ ${questions.length} questões IBDO sincronizadas!`);
  } catch (err) {
    console.error('[DB Seed] Erro ao sincronizar questões SES-RJ:', err.message);
  }
}
