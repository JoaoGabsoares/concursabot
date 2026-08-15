import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from '../database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../data/benchmarks/historical_benchmarks.json');
export let HISTORICAL_BENCHMARKS = [];

try {
  if (fs.existsSync(dataPath)) {
    HISTORICAL_BENCHMARKS = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }
} catch (e) {
  console.error('[DB Seed] Erro ao ler historical_benchmarks.json:', e.message);
}

export function seedExamBenchmarks() {
  try {
    if (!HISTORICAL_BENCHMARKS || HISTORICAL_BENCHMARKS.length === 0) {
      console.warn('[DB Seed] Nenhum benchmark encontrado para inserção.');
      return;
    }

    const existingCount = db.prepare('SELECT count(*) as count FROM exam_benchmarks').get().count;
    if (existingCount >= HISTORICAL_BENCHMARKS.length) {
      return;
    }

    console.log(`[DB Seed] Sincronizando ${HISTORICAL_BENCHMARKS.length} registros históricos de editais e bancas...`);
    db.transaction(() => {
      db.prepare('DELETE FROM exam_benchmarks').run();
      const insertStmt = db.prepare(`
        INSERT INTO exam_benchmarks (
          career_id, edition_year, banca, role, corte_historico, vagas_total,
          edital_summary_json, provas_gabaritos_json, pegadinhas_historicas_json, temas_discursivas_json
        ) VALUES (
          @career_id, @edition_year, @banca, @role, @corte_historico, @vagas_total,
          @edital_summary_json, @provas_gabaritos_json, @pegadinhas_historicas_json, @temas_discursivas_json
        )
      `);
      for (const b of HISTORICAL_BENCHMARKS) {
        insertStmt.run(b);
      }
    })();
    console.log(`[DB Seed] ✅ Benchmarks históricos sincronizados com sucesso!`);
  } catch (err) {
    console.error('[DB Seed] Error seeding exam benchmarks:', err.message);
  }
}
