import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { runUniversalPdfTests } from './unit/universal_pdf.test.js';
import { runAuthAndIsolationTests } from './integration/auth_and_isolation.test.js';
import { runStudyRoomCadenceTests } from './integration/study_room_cadence.test.js';
import { runSecurityTests } from './security/pentest_and_ai.test.js';
import { runLeiSecaAndAproveitamentoTests } from './integration/leiseca_and_aproveitamento.test.js';
import { runCadernoErrosTests } from './integration/community_and_caderno_erros.test.js';
import { runV35FixesTests } from './integration/v3_5_fixes.test.js';
import { runStudyCyclesTests } from './integration/study_cycles.test.js';
import { runRagKnowledgeTests } from './integration/rag_knowledge.test.js';
import { runGamificationAndCyclesSimulation } from './gamification_and_cycles_simulation.test.js';
import { runMultipagesAndHighlightsTests } from './integration/multipages_and_pdf_highlights.test.js';
import { runFullMatrixSuite } from './api_full_matrix.test.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PORT = process.env.TEST_PORT || '3099';
const TEST_BASE_URL = `http://127.0.0.1:${TEST_PORT}`;

async function isServerHealthy(url = TEST_BASE_URL) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);
    const res = await fetch(`${url}/api/health`, { signal: controller.signal });
    clearTimeout(timeoutId);
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  console.log('===============================================================');
  console.log('🚀 GABARITO.AI — EXECUÇÃO OFICIAL DA SUÍTE DE TESTES E2E / QA');
  console.log('===============================================================');

  const startTime = Date.now();
  let spawnedServer = null;

  try {
    console.log(`📡 Inicializando servidor de testes na porta ${TEST_PORT}...`);
    spawnedServer = spawn(process.execPath, [path.join(__dirname, '../server/index.js')], {
      stdio: 'ignore',
      env: { ...process.env, PORT: TEST_PORT, NODE_ENV: 'test' }
    });

    let ready = false;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 400));
      if (await isServerHealthy(TEST_BASE_URL)) {
        ready = true;
        break;
      }
    }

    if (!ready) {
      throw new Error(`Falha ao inicializar o servidor de testes na porta ${TEST_PORT}.`);
    }
    console.log('✅ Servidor de testes pronto e operacional!\n');

    await runUniversalPdfTests();
    await runAuthAndIsolationTests(TEST_BASE_URL);
    await runStudyRoomCadenceTests(TEST_BASE_URL);
    await runSecurityTests(TEST_BASE_URL);
    await runLeiSecaAndAproveitamentoTests(TEST_BASE_URL);
    await runCadernoErrosTests(TEST_BASE_URL);
    await runV35FixesTests(TEST_BASE_URL);
    await runStudyCyclesTests(TEST_BASE_URL);
    await runRagKnowledgeTests(TEST_BASE_URL);
    await runGamificationAndCyclesSimulation();
    await runMultipagesAndHighlightsTests();
    await runFullMatrixSuite(TEST_BASE_URL);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log('\n===============================================================');
    console.log(`🎉 100% DOS TESTES APROVADOS COM SUCESSO EM ${elapsed}s!`);
    console.log('===============================================================\n');
    
    if (spawnedServer) {
      try { spawnedServer.kill('SIGINT'); } catch {}
    }
    process.exit(0);
  } catch (error) {
    console.error('\n❌ ERRO NA SUÍTE DE TESTES:', error);
    if (spawnedServer) {
      try { spawnedServer.kill('SIGINT'); } catch {}
    }
    process.exit(1);
  }
}

main();
