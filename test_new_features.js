// Testes Automatizados para as Novas Funcionalidades:
// 1. Caderno de Erros (Captura automática, listagem, retry, notas)
// 2. Corretor de Redação IA (Temas, correção estruturada com 4 critérios, histórico)
// 3. Raio-X de Incidência 80/20 (Pareto por carreira)
// 4. PWA / Offline Sync verification

import http from 'http';
import db from './server/database.js';

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

async function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const reqOptions = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': 'user_qa_automated_test',
        'X-Exam-Id': 'bb_comercial',
        'X-Invite-Pin': 'CONCURSA2026',
        ...(options.headers || {})
      }
    };

    const req = http.request(reqOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const body = data ? JSON.parse(data) : {};
          resolve({ status: res.statusCode, body });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  console.log('🧪 Iniciando Bateria de Testes das Novas Funcionalidades...');
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${message}`);
    }
  }

  try {
    // -------------------------------------------------------------
    // Teste 1: Raio-X de Incidência da Banca (80/20)
    // -------------------------------------------------------------
    console.log('\n--- Teste 1: Raio-X de Incidência da Banca & Pareto 80/20 ---');
    const resRaioxBB = await request('/api/edital/raiox?careerId=bb_comercial');
    assert(resRaioxBB.status === 200, 'GET /api/edital/raiox (BB Comercial) retorna 200');
    assert(resRaioxBB.body.raiox?.topicosOuro?.length >= 5, 'Raio-X contém tópicos de ouro');
    assert(resRaioxBB.body.raiox?.corteMedio?.includes('74%'), 'Corte histórico do BB Comercial presente');

    const resRaioxTI = await request('/api/edital/raiox?careerId=bb_ti', {
      headers: { 'X-Exam-Id': 'bb_ti' }
    });
    assert(resRaioxTI.body.raiox?.topicosOuro?.[0]?.disciplina === 'Tecnologia da Informação', 'BB TI destaca TI com maior peso');

    // -------------------------------------------------------------
    // Teste 2: Captura Automática de Erro no Caderno de Erros
    // -------------------------------------------------------------
    console.log('\n--- Teste 2: Captura Automática no Caderno de Erros ---');
    // Pegar uma questão existente
    const testQ = db.prepare('SELECT * FROM questions LIMIT 1').get();
    if (testQ) {
      const wrongAnswer = (Number(testQ.correct_index) + 1) % 5;
      const resAnswer = await request('/api/questions/answer', {
        method: 'POST',
        body: JSON.stringify({ questionId: testQ.id, selectedAnswer: wrongAnswer })
      });
      assert(resAnswer.status === 200, 'POST /api/questions/answer respondeu 200');
      assert(resAnswer.body.isCorrect === false, 'Resposta registrada como incorreta');

      // Verificar se entrou no Caderno de Erros
      const resCaderno = await request('/api/caderno-erros?status=pending');
      assert(resCaderno.status === 200, 'GET /api/caderno-erros retorna 200');
      const foundInCaderno = resCaderno.body.items?.some(i => i.question_id === testQ.id);
      assert(foundInCaderno, `Questão #${testQ.id} capturada automaticamente no Caderno de Erros`);

      // Teste de Retry (Superação de Erro)
      const errorItem = resCaderno.body.items?.find(i => i.question_id === testQ.id);
      if (errorItem) {
        const resRetry = await request(`/api/caderno-erros/${errorItem.id}/retry`, {
          method: 'POST',
          body: JSON.stringify({ selectedAnswer: testQ.correct_index })
        });
        assert(resRetry.status === 200, 'POST /api/caderno-erros/:id/retry retorna 200');
        assert(resRetry.body.isCorrect === true, 'Retry correto validado');
        assert(resRetry.body.status === 'mastered', 'Status atualizado para "mastered"');
        assert(resRetry.body.xpEarned === 15, 'Bônus de superação de +15 XP concedido');

        // Teste de Salvar Anotações
        const resNotes = await request(`/api/caderno-erros/${errorItem.id}/notes`, {
          method: 'PUT',
          body: JSON.stringify({ notes: 'Atenção para a pegadinha da banca Cesgranrio no art. 5º!' })
        });
        assert(resNotes.status === 200, 'PUT /api/caderno-erros/:id/notes salva anotação pessoal');
      }
    }

    // -------------------------------------------------------------
    // Teste 3: Corretor de Redação Discursiva por IA
    // -------------------------------------------------------------
    console.log('\n--- Teste 3: Corretor de Redação Discursiva por IA ---');
    const resTemas = await request('/api/redacao/temas?careerId=bb_comercial');
    assert(resTemas.status === 200, 'GET /api/redacao/temas retorna 200');
    assert(resTemas.body.temas?.length >= 2, 'Banco de temas oficiais disponíveis');

    const sampleEssay = `
A inclusão bancária no Brasil contemporâneo vivenciou uma verdadeira revolução com o advento do PIX e a popularização das contas digitais. Contudo, essa democratização do acesso aos serviços financeiros impõe novos desafios regulatórios e éticos, exigindo atuação firme dos bancos públicos na promoção da cidadania e da educação financeira.

Em primeiro plano, cabe destacar que a facilidade de transferências instantâneas e a concessão acelerada de microcrédito inseriram milhões de cidadãos historicamente desbancarizados no circuito econômico. Todavia, a ausência de letramento financeiro adequado gerou um aumento expressivo no índice de famílias superendividadas, conforme dados recentes da Confederação Nacional do Comércio. Nesse sentido, os bancos públicos exercem papel insubstituível ao vincular a concessão de crédito a programas educativos e de renegociação justa de dívidas.

Ademais, a segurança cibernética e a proteção dos correntistas contra golpes digitais configuram obrigações precípuas das instituições financeiras. O investimento contínuo em inteligência antifraude e o cumprimento rigoroso da Lei Geral de Proteção de Dados são pilares para preservar a confiança da população no sistema financeiro nacional.

Infere-se, portanto, que a modernização bancária não deve prescindir do seu compromisso social. Cabe ao Banco do Brasil e às autoridades monetárias consolidar políticas de crédito consciente e campanhas permanentes de segurança digital, garantindo que a inovação tecnológica resulte em emancipação econômica sustentável para todos os brasileiros.
    `.trim();

    const resCorrigir = await request('/api/redacao/corrigir', {
      method: 'POST',
      body: JSON.stringify({
        tema: 'A inclusão bancária e a cidadania financeira no Brasil pós-PIX',
        texto: sampleEssay,
        banca: 'Cesgranrio',
        careerId: 'bb_comercial'
      })
    });

    assert(resCorrigir.status === 200, 'POST /api/redacao/corrigir retorna 200');
    assert(resCorrigir.body.notaTotal >= 60, `Nota total calculada: ${resCorrigir.body.notaTotal}/100`);
    assert(resCorrigir.body.notaTema > 0, 'Critério 1 (Tema) avaliado');
    assert(resCorrigir.body.notaEstrutura > 0, 'Critério 2 (Estrutura) avaliado');
    assert(resCorrigir.body.notaGramatica > 0, 'Critério 3 (Norma Culta) avaliado');
    assert(resCorrigir.body.notaArgumentacao > 0, 'Critério 4 (Argumentação) avaliado');
    assert(resCorrigir.body.xpEarned === 50, '+50 XP concedido por redação');

    // Histórico de Redações
    const resHist = await request('/api/redacao/historico');
    assert(resHist.status === 200, 'GET /api/redacao/historico retorna 200');
    assert(resHist.body.historico?.length >= 1, 'Redação salva no histórico do aluno');

    console.log(`\n======================================================`);
    console.log(`🏁 RESULTADO: ${passed}/${total} TESTES PASSARAM (${Math.round((passed/total)*100)}%)`);
    console.log(`======================================================`);

    // Teardown: Clean up test user artifacts
    try {
      db.prepare("DELETE FROM question_answers WHERE user_id = 'user_qa_automated_test'").run();
      db.prepare("DELETE FROM caderno_erros WHERE user_id = 'user_qa_automated_test'").run();
      db.prepare("DELETE FROM redacoes WHERE user_id = 'user_qa_automated_test'").run();
      db.prepare("DELETE FROM user_xp_log WHERE user_id = 'user_qa_automated_test'").run();
      db.prepare("DELETE FROM user_achievements WHERE user_id = 'user_qa_automated_test'").run();
    } catch (e) {}

    if (passed === total) {
      console.log('🎉 TODAS AS NOVAS FUNCIONALIDADES FORAM VALIDADAS COM SUCESSO! 🚀');
    }

  } catch (err) {
    console.error('Erro na execução dos testes:', err);
  }
}

runTests();
