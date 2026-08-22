import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { runUniversalPdfTests } from './unit/universal_pdf.test.js';
import { runAuthAndIsolationTests } from './integration/auth_and_isolation.test.js';
import { runStudyRoomCadenceTests } from './integration/study_room_cadence.test.js';
import { runSecurityTests } from './security/pentest_and_ai.test.js';
import { runLeiSecaAndAproveitamentoTests } from './integration/leiseca_and_aproveitamento.test.js';
import { runCommunityAndCadernoErrosTests } from './integration/community_and_caderno_erros.test.js';
import { runV35FixesTests } from './integration/v3_5_fixes.test.js';
import { runStudyCyclesTests } from './integration/study_cycles.test.js';
import { runRagKnowledgeTests } from './integration/rag_knowledge.test.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function isServerHealthy() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);
    const res = await fetch('http://127.0.0.1:3000/api/health', { signal: controller.signal });
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
    if (!(await isServerHealthy())) {
      console.log('📡 Servidor não detectado na porta 3000. Inicializando instância de testes...');
      spawnedServer = spawn(process.execPath, [path.join(__dirname, '../server/index.js')], {
        stdio: 'ignore',
        env: { ...process.env, PORT: '3000', NODE_ENV: 'test' }
      });

      let ready = false;
      for (let i = 0; i < 30; i++) {
        await new Promise(r => setTimeout(r, 400));
        if (await isServerHealthy()) {
          ready = true;
          break;
        }
      }

      if (!ready) {
        throw new Error('Falha ao inicializar o servidor de testes na porta 3000.');
      }
      console.log('✅ Servidor de testes pronto e operacional!\n');
    }

    await runUniversalPdfTests();
    await runAuthAndIsolationTests();
    await runStudyRoomCadenceTests();
    await runSecurityTests();
    await runLeiSecaAndAproveitamentoTests();
    await runCommunityAndCadernoErrosTests();
    await runV35FixesTests();
    await runStudyCyclesTests();
    await runRagKnowledgeTests();

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
