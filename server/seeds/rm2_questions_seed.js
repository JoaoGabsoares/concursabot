import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function seedRM2Questions(db) {
  try {
    const existing = db.prepare("SELECT COUNT(*) as count FROM questions WHERE banca = 'DEnsM'").get();
    if (existing && existing.count >= 60) {
      return;
    }

    const dataPath = path.join(__dirname, '../data/questions/rm2_densm.json');
    if (!fs.existsSync(dataPath)) {
      console.warn('[DB Seed] Arquivo rm2_densm.json não encontrado.');
      return;
    }

    const questions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`[DB Seed] Sincronizando ${questions.length} questões modelo DEnsM (Marinha RM2)...`);

    const insertStmt = db.prepare(`
      INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    db.transaction(() => {
      db.prepare("DELETE FROM questions WHERE banca = 'DEnsM'").run();
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

    console.log(`[DB Seed] ✅ ${questions.length} questões DEnsM sincronizadas!`);
  } catch (err) {
    console.error('[DB Seed] Erro ao sincronizar questões RM2:', err.message);
  }
}
