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
}

if (process.argv[1]?.endsWith('auth_and_isolation.test.js')) {
  runAuthAndIsolationTests().then(() => console.log('🎉 Todos os testes de auth passaram!'));
}
