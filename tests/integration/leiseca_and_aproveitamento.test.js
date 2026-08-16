import assert from 'assert';

export async function runLeiSecaAndAproveitamentoTests(baseUrl = 'http://localhost:3000') {
  console.log('\n⚖️ [TEST SUITE: Lei Seca Ativa & Matriz de Aproveitamento]');

  // 1. Artigos de Lei Seca
  const artRes = await fetch(`${baseUrl}/api/leiseca/artigos?careerId=atrfb`);
  const artData = await artRes.json();
  assert.ok(artData.total > 0, 'Deve retornar artigos de lei seca');
  assert.ok(Array.isArray(artData.artigos), 'Artigos deve ser array');
  console.log(`  ✅ 1. Consulta de Artigos de Ouro (${artData.total} artigos): PASSOU`);

  // 2. Desafio Caça-Pegadinhas
  const desRes = await fetch(`${baseUrl}/api/leiseca/desafio?careerId=transpetro_adm`);
  const desData = await desRes.json();
  assert.ok(desData.desafioId, 'Deve conter desafioId');
  assert.ok(desData.textoComErro, 'Deve conter texto com erro');
  assert.strictEqual(desData.tempoLimiteSegundos, 15, 'Tempo limite deve ser 15s');
  console.log('  ✅ 2. Geração Dinâmica de Desafio Caça-Pegadinhas (15s): PASSOU');

  // 3. Resposta de Desafio com Ganho de XP
  const respRes = await fetch(`${baseUrl}/api/leiseca/responder`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-id': 'test_user_audit' },
    body: JSON.stringify({
      desafioId: desData.desafioId,
      palavraSelecionada: 'obrigatoria',
      tempoGastoSegundos: 5
    })
  });
  const respData = await respRes.json();
  assert.ok(respData.hasOwnProperty('acertou'), 'Deve indicar se acertou');
  assert.ok(respData.explicacao, 'Deve conter explicacao da pegadinha');
  console.log('  ✅ 3. Validação de Resposta do Caça-Pegadinhas com Explicação: PASSOU');

  // 4. Catálogo de Aproveitamento Curricular
  const catRes = await fetch(`${baseUrl}/api/aproveitamento/catalogo`);
  const catData = await catRes.json();
  assert.ok(catData.length >= 7, 'Deve conter pelo menos 7 carreiras');
  console.log(`  ✅ 4. Catálogo de Carreiras para Transição (${catData.length} carreiras): PASSOU`);

  // 5. Comparação de Editais (BB Comercial -> Transpetro ADM)
  const compRes = await fetch(`${baseUrl}/api/aproveitamento/comparar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      origemCareerId: 'bb_comercial',
      destinoCareerId: 'transpetro_adm'
    })
  });
  const compData = await compRes.json();
  assert.ok(compData.percentualAproveitamento > 0, 'Deve ter percentual de aproveitamento');
  assert.ok(compData.trilhaTransicao.length > 0, 'Deve gerar trilha de transicao');
  assert.ok(compData.estimativaSemanasTransicao > 0, 'Deve estimar semanas');
  console.log(`  ✅ 5. Matriz de Aproveitamento BB -> Transpetro (${compData.percentualAproveitamento}% base comum): PASSOU`);

  // 6. Súmulas e Jurisprudência dos Tribunais (STF/STJ)
  const sumRes = await fetch(`${baseUrl}/api/jurisprudencia/sumulas?careerId=atrfb`);
  const sumData = await sumRes.json();
  assert.ok(sumData.total > 0, 'Deve retornar sumulas vinculantes');
  assert.ok(Array.isArray(sumData.sumulas), 'Sumulas deve ser array');
  console.log(`  ✅ 6. Consulta de Súmulas Vinculantes & Jurisprudência (${sumData.total} súmulas): PASSOU`);

  // 7. Desafio de Jurisprudência
  const desJurRes = await fetch(`${baseUrl}/api/jurisprudencia/desafio?careerId=transpetro_adm`);
  const desJurData = await desJurRes.json();
  assert.ok(desJurData.numero, 'Deve conter numero da sumula');
  assert.ok(desJurData.pegadinha, 'Deve conter pegadinha da banca examinadora');
  console.log('  ✅ 7. Sorteio de Pegadinha de Jurisprudência com Alerta de Banca: PASSOU');
}
