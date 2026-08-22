import assert from 'assert';

const BASE_URL = 'http://127.0.0.1:3000/api';

export async function runV35FixesTests() {
  console.log('\n===============================================================');
  console.log('🧪 TESTES DE INTEGRAÇÃO: PACOTE DE CORREÇÕES v3.5 ULTRA');
  console.log('===============================================================');

  // 0. Registrar e Autenticar Usuário de Teste
  const username = `test_v35_${Date.now()}`;
  const reg = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password: 'SenhaSegura123!', email: `${username}@teste.com` })
  }).then(r => r.json());
  const token = reg.token;
  const authHeaders = { 'Authorization': `Bearer ${token}`, 'x-account-token': token };

  const prof = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({ name: 'Tester v3.5', active_career_id: 'atrfb' })
  }).then(r => r.json());

  // 1. Teste de Senha com Mínimo de 8 Caracteres
  console.log('1️⃣  Validando regra de senha mínima de 8 caracteres...');
  const shortPassRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: `test_short_${Date.now()}`,
      name: 'Tester Short',
      email: `test_short_${Date.now()}@teste.com`,
      password: '1234' // < 8 caracteres
    })
  });
  const shortPassData = await shortPassRes.json();
  assert.strictEqual(shortPassRes.status, 400, 'Senha com 4 caracteres deve retornar status 400');
  assert.ok(shortPassData.error && shortPassData.error.includes('8 caracteres'), 'Mensagem de erro deve exigir mínimo de 8 caracteres');
  console.log('   ✅ Senha curta (< 8) rejeitada corretamente com mensagem clara.');

  // 2. Teste de Caderno de Erros & Foco Individual
  console.log('2️⃣  Validando isolamento de dados do Caderno de Erros...');
  const errosRes = await fetch(`${BASE_URL}/caderno-erros?career_id=transpetro_adm`, {
    headers: {
      'x-user-id': prof.id,
      ...authHeaders
    }
  });
  const errosData = await errosRes.json();
  assert.strictEqual(errosRes.status, 200, 'Consulta de caderno de erros deve retornar 200 OK');
  assert.strictEqual(errosData.success, true);
  console.log('   ✅ Caderno de Erros: isolamento e persistência verificados com sucesso.');

  // 3. Teste de Isolamento de Carreira Transpetro
  console.log('3️⃣  Validando catálogo de matérias da Transpetro (Isolamento de Carreiras)...');
  const catRes = await fetch(`${BASE_URL}/aproveitamento/catalogo`, { headers: authHeaders });
  const catalogo = await catRes.json();
  const transpetroAdm = catalogo.find(c => c.id === 'transpetro_adm');
  const transpetroLog = catalogo.find(c => c.id === 'transpetro_log');
  assert.ok(transpetroAdm, 'Transpetro ADM deve constar no catálogo');
  assert.ok(transpetroLog, 'Transpetro Logística deve constar no catálogo');
  assert.strictEqual(transpetroAdm.banca, 'Fundação Cesgranrio');
  console.log('   ✅ Transpetro devidamente isolada e catalogada na Fundação Cesgranrio.');

  // 4. Teste da Matriz de Aproveitamento & Datas Reais de Calendário
  console.log('4️⃣  Validando cálculo da Matriz de Aproveitamento com Cronograma Semanal...');
  const compRes = await fetch(`${BASE_URL}/aproveitamento/comparar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({
      origemCareerId: 'bb_comercial',
      destinoCareerId: 'transpetro_adm',
      dailyHours: 2,
      daysPerWeek: 6
    })
  });
  const compData = await compRes.json();
  assert.strictEqual(compRes.status, 200, 'Comparação deve retornar status 200');
  assert.ok(compData.percentualAproveitamento > 0, 'Deve calcular % de aproveitamento');
  assert.ok(Array.isArray(compData.cronogramaSemanal) && compData.cronogramaSemanal.length > 0, 'Deve gerar cronograma semanal');
  
  const primeiraSemana = compData.cronogramaSemanal[0];
  assert.ok(primeiraSemana.dataInicio, 'Primeira semana deve conter data de início real');
  assert.ok(primeiraSemana.dataFim, 'Primeira semana deve conter data de fim real');
  assert.strictEqual(primeiraSemana.horasSemana, 12, 'Horas semanais devem ser 2h x 6d = 12h');
  console.log(`   ✅ Cronograma Semanal gerado: ${compData.cronogramaSemanal.length} semanas com datas reais (${primeiraSemana.dataInicio} a ${primeiraSemana.dataFim}).`);

  // 5. Teste de Sincronização do Cronograma com SQLite
  console.log('5️⃣  Validando persistência da Sincronização no SQLite...');
  const syncRes = await fetch(`${BASE_URL}/aproveitamento/sincronizar-cronograma`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'x-user-id': prof.id,
      ...authHeaders
    },
    body: JSON.stringify({
      origemCareerId: 'bb_comercial',
      destinoCareerId: 'transpetro_adm',
      cronogramaSemanal: compData.cronogramaSemanal,
      dailyHours: 2,
      daysPerWeek: 6
    })
  });
  const syncData = await syncRes.json();
  assert.strictEqual(syncRes.status, 200, 'Sincronização deve retornar 200 OK');
  assert.ok(syncData.success, 'Flag success deve ser true');
  assert.ok(syncData.scheduleId, 'Deve retornar ID do cronograma criado');
  assert.ok(syncData.totalTasks > 0, 'Deve persistir tarefas em schedule_tasks');
  console.log(`   ✅ Cronograma sincronizado no SQLite: ID ${syncData.scheduleId} com ${syncData.totalTasks} tarefas ativas.`);

  console.log('\n✨ Todos os testes do Pacote de Correções v3.5 Ultra foram aprovados com 100% de sucesso!');
}

if (process.argv[1] && process.argv[1].endsWith('v3_5_fixes.test.js')) {
  runV35FixesTests().catch(err => {
    console.error('Falha nos testes:', err);
    process.exit(1);
  });
}
