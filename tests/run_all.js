import { runUniversalPdfTests } from './unit/universal_pdf.test.js';
import { runAuthAndIsolationTests } from './integration/auth_and_isolation.test.js';
import { runStudyRoomCadenceTests } from './integration/study_room_cadence.test.js';
import { runSecurityTests } from './security/pentest_and_ai.test.js';
import { runLeiSecaAndAproveitamentoTests } from './integration/leiseca_and_aproveitamento.test.js';

async function main() {
  console.log('===============================================================');
  console.log('🚀 GABARITO.AI — EXECUÇÃO OFICIAL DA SUÍTE DE TESTES E2E / QA');
  console.log('===============================================================');

  const startTime = Date.now();

  try {
    await runUniversalPdfTests();
    await runAuthAndIsolationTests();
    await runStudyRoomCadenceTests();
    await runSecurityTests();
    await runLeiSecaAndAproveitamentoTests();

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log('\n===============================================================');
    console.log(`🎉 100% DOS TESTES APROVADOS COM SUCESSO EM ${elapsed}s!`);
    console.log('===============================================================\n');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ ERRO NA SUÍTE DE TESTES:', error);
    process.exit(1);
  }
}

main();
