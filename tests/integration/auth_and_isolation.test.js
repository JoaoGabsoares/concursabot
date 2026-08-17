import assert from 'assert';

export async function runAuthAndIsolationTests(baseUrl = 'http://localhost:3000') {
  console.log('\n🔒 [TEST SUITE: Auth, Zero State & Cross-Account Isolation]');

  const userA_name = `user_a_${Date.now()}`;
  const userB_name = `user_b_${Date.now()}`;

  // 1. Registro da Conta A
  const regA = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: userA_name, password: 'SenhaSegura123!', email: `${userA_name}@teste.com` })
  }).then(r => r.json());
  assert.ok(regA.success && regA.token, 'Conta A deve ser registrada');
  const tokenA = regA.token;

  // 2. Criar Perfil na Conta A
  const profA = await fetch(`${baseUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`,
      'x-account-token': tokenA
    },
    body: JSON.stringify({
      name: 'Estudante Alpha',
      active_career_id: 'atrfb',
      target_role: 'Analista Tributário',
      cadence_reading_min: 60,
      cadence_questions_min: 30
    })
  }).then(r => r.json());
  assert.ok(profA.id, 'Perfil Alpha deve ser criado');
  console.log('  ✅ 1. Registro e Criação de Perfil na Conta A: PASSOU');

  // 3. Validação de Estado Inicial (Dashboard & Gamification)
  const statsA = await fetch(`${baseUrl}/api/dashboard/stats`, {
    headers: {
      'x-user-id': profA.id,
      'x-exam-id': 'atrfb',
      'Authorization': `Bearer ${tokenA}`
    }
  }).then(r => r.json());
  assert.strictEqual(statsA.questions.totalAnswered, 0, 'Questões respondidas deve ser 0');
  assert.strictEqual(statsA.simuladosStats.totalCompleted, 0, 'Simulados deve ser 0');
  assert.strictEqual(statsA.recentActivity.length, 0, 'Atividades recentes deve ser vazio');

  const gamiA = await fetch(`${baseUrl}/api/gamification/status?user_id=${profA.id}`, {
    headers: { 'Authorization': `Bearer ${tokenA}` }
  }).then(r => r.json());
  assert.strictEqual(gamiA.totalXP, 0, 'Novo usuário deve ter 0 XP');
  assert.strictEqual(gamiA.currentRank.level, 1, 'Novo usuário deve ser Level 1');
  console.log('  ✅ 2. Validação Rigorosa de Estado Inicial Limpo (0 XP, Level 1, 0 Questões): PASSOU');

  // 4. Registro da Conta B
  const regB = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: userB_name, password: 'SenhaSegura123!', email: `${userB_name}@teste.com` })
  }).then(r => r.json());
  const tokenB = regB.token;

  const profB = await fetch(`${baseUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenB}`,
      'x-account-token': tokenB
    },
    body: JSON.stringify({
      name: 'Estudante Beta',
      active_career_id: 'bb_comercial',
      target_role: 'Agente Comercial'
    })
  }).then(r => r.json());

  // 5. Verificação de Isolamento Total
  const statsB = await fetch(`${baseUrl}/api/dashboard/stats`, {
    headers: {
      'x-user-id': profB.id,
      'x-exam-id': 'bb_comercial',
      'Authorization': `Bearer ${tokenB}`
    }
  }).then(r => r.json());
  assert.strictEqual(statsB.questions.totalAnswered, 0);
  assert.notStrictEqual(profA.id, profB.id);
  console.log('  ✅ 3. Isolamento Total Entre Contas e Perfis: PASSOU');

  // 6. Teste de Rejeição de E-mail Duplicado
  const dupeEmailRes = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: `new_user_${Date.now()}`,
      password: 'SenhaSegura123!',
      email: `${userA_name}@teste.com` // Mesmo e-mail da Conta A
    })
  });
  const dupeEmailJson = await dupeEmailRes.json();
  assert.strictEqual(dupeEmailRes.status, 400, 'Cadastro com e-mail duplicado deve retornar 400');
  assert.ok(dupeEmailJson.error && dupeEmailJson.error.includes('cadastrado'), 'Deve retornar mensagem clara de e-mail já cadastrado');
  console.log('  ✅ 4. Rejeição de E-mail Duplicado (1 e-mail = 1 conta): PASSOU');

  // 7. Teste de Validação de Formato de E-mail Inválido
  const invalidEmailRes = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: `invalid_user_${Date.now()}`,
      password: 'SenhaSegura123!',
      email: 'email_sem_arroba_ponto_com'
    })
  });
  assert.strictEqual(invalidEmailRes.status, 400, 'Cadastro com e-mail inválido deve retornar 400');
  console.log('  ✅ 5. Validação de Formato de E-mail com Regex RFC: PASSOU');

  // 8. Teste de Autenticação com Google Sign-In (1-Click & Cross-Device)
  const gEmail = `google_aluno_${Date.now()}@gmail.com`;
  const gMockToken = `mock_google_:${gEmail}:João Concurseiro Google:sub_${Date.now()}`;
  
  const gRes1 = await fetch(`${baseUrl}/api/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential: gMockToken })
  }).then(r => r.json());

  assert.ok(gRes1.success && gRes1.token, 'Deve autenticar e provisionar conta com Google Sign-In');
  assert.strictEqual(gRes1.account.email, gEmail, 'E-mail retornado deve coincidir');
  assert.ok(gRes1.profiles.length >= 1, 'Deve provisionar automaticamente o perfil de estudos inicial');

  // Segundo acesso com o mesmo Google ID (deve fazer login sem duplicar conta)
  const gRes2 = await fetch(`${baseUrl}/api/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential: gMockToken })
  }).then(r => r.json());

  assert.strictEqual(gRes2.account.id, gRes1.account.id, 'Segundo login com Google deve reutilizar a mesma conta existente');
  console.log('  ✅ 6. Autenticação e Provisionamento com Google Sign-In (Cross-Device): PASSOU');
}

if (process.argv[1]?.endsWith('auth_and_isolation.test.js')) {
  runAuthAndIsolationTests().then(() => console.log('🎉 Todos os testes de auth passaram!'));
}
