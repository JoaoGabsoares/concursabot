import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './server/database.js';
import { CAREERS_CATALOG, getCareerConfig } from './server/careers.js';
import { seedExamBenchmarks } from './server/seeds/exam_benchmarks_seed.js';
import { seedBBQuestions } from './server/seeds/bb_questions_seed.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runTests() {
  console.log('🧪 Iniciando testes de validação do Banco do Brasil e Dashboard XP...\n');

  // Test 1: Careers Catalog in backend
  console.log('--- Teste 1: Configuração das Carreiras do BB no Backend ---');
  if (!CAREERS_CATALOG['bb_comercial'] || !CAREERS_CATALOG['bb_ti']) {
    throw new Error('Falha: bb_comercial ou bb_ti não encontrados em CAREERS_CATALOG');
  }
  console.log(`✅ BB Comercial: ${CAREERS_CATALOG['bb_comercial'].subjects.length} matérias, ${CAREERS_CATALOG['bb_comercial'].official_lessons.length} aulas oficiais.`);
  console.log(`✅ BB TI: ${CAREERS_CATALOG['bb_ti'].subjects.length} matérias, ${CAREERS_CATALOG['bb_ti'].official_lessons.length} aulas oficiais.`);

  // Test 2: Historical Benchmarks
  console.log('\n--- Teste 2: Sincronização dos 3 Últimos Editais/Provas do BB ---');
  seedExamBenchmarks();
  const bbComercialBenchmarks = db.prepare("SELECT * FROM exam_benchmarks WHERE career_id = 'bb_comercial' ORDER BY edition_year DESC").all();
  const bbTiBenchmarks = db.prepare("SELECT * FROM exam_benchmarks WHERE career_id = 'bb_ti' ORDER BY edition_year DESC").all();

  console.log(`✅ BB Comercial possui ${bbComercialBenchmarks.length} edições históricas salvas no banco:`);
  bbComercialBenchmarks.forEach(b => console.log(`   - ${b.edition_year} (${b.role}) • Corte: ${b.corte_historico}`));

  console.log(`✅ BB TI possui ${bbTiBenchmarks.length} edições históricas salvas no banco:`);
  bbTiBenchmarks.forEach(b => console.log(`   - ${b.edition_year} (${b.role}) • Corte: ${b.corte_historico}`));

  if (bbComercialBenchmarks.length < 3 || bbTiBenchmarks.length < 3) {
    throw new Error('Falha: Não foram encontradas 3 edições históricas completas para BB Comercial e BB TI.');
  }

  // Test 3: Questions Seeding
  console.log('\n--- Teste 3: Semeadura e Soluções das Questões do Banco do Brasil ---');
  seedBBQuestions(db);
  const cesgranrioQuestions = db.prepare("SELECT * FROM questions WHERE banca LIKE '%Cesgranrio%'").all();
  console.log(`✅ Total de questões Cesgranrio cadastradas com resolução: ${cesgranrioQuestions.length}`);
  if (cesgranrioQuestions.length === 0) {
    throw new Error('Falha: Nenhuma questão Cesgranrio cadastrada no banco');
  }
  cesgranrioQuestions.forEach(q => {
    console.log(`   - [${q.subject}] ${q.question_text.slice(0, 60)}...`);
    if (!q.explanation || q.explanation.length < 10) {
      throw new Error(`Questão sem explicação comentada: ID ${q.id}`);
    }
  });

  // Test 4: Frontend Catalog Sync
  console.log('\n--- Teste 4: Verificação de Arquivos Frontend ---');
  const careersJs = fs.readFileSync(path.join(__dirname, 'public/js/careers.js'), 'utf8');
  if (!careersJs.includes('bb_comercial') || !careersJs.includes('bb_ti')) {
    throw new Error('Falha: public/js/careers.js não contém bb_comercial ou bb_ti');
  }
  console.log('✅ public/js/careers.js sincronizado com BB Comercial e BB TI');

  const hubJs = fs.readFileSync(path.join(__dirname, 'public/js/hub.js'), 'utf8');
  if (!hubJs.includes('bb_comercial') || !hubJs.includes('bb_ti') || !hubJs.includes('data-filter="bancario"')) {
    throw new Error('Falha: public/js/hub.js não contém cards de BB ou filtro bancario');
  }
  console.log('✅ public/js/hub.js atualizado com cards e filtro bancário');

  const editalJs = fs.readFileSync(path.join(__dirname, 'public/js/edital.js'), 'utf8');
  if (!editalJs.includes('bb-comercial-cesgranrio') || !editalJs.includes('bb-ti-cesgranrio')) {
    throw new Error('Falha: public/js/edital.js não contém presets do BB');
  }
  console.log('✅ public/js/edital.js atualizado com presets do Banco do Brasil');

  const styleCss = fs.readFileSync(path.join(__dirname, 'public/css/style.css'), 'utf8');
  if (!styleCss.includes('.dash-student-card') || !styleCss.includes('.dash-student-metrics-grid')) {
    throw new Error('Falha: public/css/style.css não contém classes do novo card de XP');
  }
  console.log('✅ public/css/style.css contém estilos do novo card de estudante com espaçamento generoso');

  const dashboardJs = fs.readFileSync(path.join(__dirname, 'public/js/dashboard.js'), 'utf8');
  if (!dashboardJs.includes('dash-student-card') || !dashboardJs.includes('dash-gamer-next-level')) {
    throw new Error('Falha: public/js/dashboard.js não renderiza o novo dash-student-card');
  }
  console.log('✅ public/js/dashboard.js renderiza o novo card com XP, Próximo Nível e Metas');

  console.log('\n🎉 TODOS OS TESTES PASSARAM COM SUCESSO! 🚀');
}

runTests().catch(err => {
  console.error('❌ Erro no teste:', err);
  process.exit(1);
});
