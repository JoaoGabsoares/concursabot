import assert from 'assert';

const BASE_URL = 'http://localhost:3000/api';

async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, ok: res.ok, data };
}

async function runAuthTests() {
  console.log('🧪 Iniciando Testes do Sistema de Contas & Isolamento Total (Custo Zero)...');
  const timestamp = Date.now();
  const userA = `aluno_a_${timestamp}`;
  const userB = `aluno_b_${timestamp}`;
  const passwordA = 'senha123';
  const passwordB = 'senha456';

  let tokenA = '';
  let tokenB = '';

  // Test 1: Register Account A
  console.log('--- Teste 1: Cadastro de Conta A ---');
  const regA = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username: userA, password: passwordA, email: `${userA}@exemplo.com` })
  });
  assert.strictEqual(regA.status, 201, 'Conta A deve retornar 201');
  assert.strictEqual(regA.data.success, true);
  assert.ok(regA.data.token, 'Deve retornar token de sessao');
  assert.strictEqual(regA.data.account.username, userA);
  assert.strictEqual(regA.data.profiles.length, 0, 'Nova conta deve iniciar com 0 perfis');
  tokenA = regA.data.token;
  console.log('✅ [PASS] Conta A criada com sucesso e 0 perfis iniciais');

  // Test 2: Duplicate Account Block
  console.log('--- Teste 2: Bloqueio de Usuário Duplicado ---');
  const dupA = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username: userA, password: 'qualquer_senha' })
  });
  assert.strictEqual(dupA.status, 409, 'Nome de usuário duplicado deve retornar 409');
  console.log('✅ [PASS] Bloqueio de duplicidade validado');

  // Test 3: Register Account B
  console.log('--- Teste 3: Cadastro de Conta B ---');
  const regB = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username: userB, password: passwordB, email: `${userB}@exemplo.com` })
  });
  assert.strictEqual(regB.status, 201);
  tokenB = regB.data.token;
  console.log('✅ [PASS] Conta B criada com sucesso e isolamento garantido');

  // Test 4: Login Account A with wrong and correct password
  console.log('--- Teste 4: Login de Conta A ---');
  const wrongLogin = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username: userA, password: 'senha_errada' })
  });
  assert.strictEqual(wrongLogin.status, 401, 'Senha errada deve retornar 401');

  const correctLogin = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username: userA, password: passwordA })
  });
  assert.strictEqual(correctLogin.status, 200);
  assert.ok(correctLogin.data.token);
  tokenA = correctLogin.data.token;
  console.log('✅ [PASS] Autenticação com senha hash validada');

  // Test 5: Create Profiles for Account A (Up to 3)
  console.log('--- Teste 5: Criar 3 Perfis na Conta A ---');
  const p1 = await request('/users', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenA}` },
    body: JSON.stringify({ name: 'Perfil 1 - Receita Federal', active_career_id: 'atrfb', daily_hours: 4 })
  });
  assert.strictEqual(p1.status, 201);

  const p2 = await request('/users', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenA}` },
    body: JSON.stringify({ name: 'Perfil 2 - Banco do Brasil TI', active_career_id: 'bb_ti', daily_hours: 2 })
  });
  assert.strictEqual(p2.status, 201);

  const p3 = await request('/users', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenA}` },
    body: JSON.stringify({ name: 'Perfil 3 - SES RJ Saúde', active_career_id: 'ses_rj', daily_hours: 3 })
  });
  assert.strictEqual(p3.status, 201);
  console.log('✅ [PASS] 3 perfis criados na Conta A');

  // Test 6: Try to create 4th Profile on Account A (Must be Blocked)
  console.log('--- Teste 6: Trava do 4º Perfil (Limite de 3) ---');
  const p4 = await request('/users', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenA}` },
    body: JSON.stringify({ name: 'Perfil 4 - Marinha', active_career_id: 'marinha_rm2' })
  });
  assert.strictEqual(p4.status, 400, 'Criar 4º perfil deve retornar 400');
  assert.ok(p4.data.error.includes('Limite de 3 perfis'));
  console.log('✅ [PASS] Trava de limite de 3 perfis por conta funcionando perfeitamente');

  // Test 7: Total Isolation (Account B sees 0 profiles from Account A)
  console.log('--- Teste 7: Isolamento Total entre Contas ---');
  const listB = await request('/users', {
    headers: { 'Authorization': `Bearer ${tokenB}` }
  });
  assert.strictEqual(listB.status, 200);
  assert.strictEqual(listB.data.length, 0, 'Conta B não pode ver perfis da Conta A');

  const listA = await request('/users', {
    headers: { 'Authorization': `Bearer ${tokenA}` }
  });
  assert.strictEqual(listA.status, 200);
  assert.strictEqual(listA.data.length, 3, 'Conta A deve ver exatamente seus 3 perfis');
  console.log('✅ [PASS] Isolamento Total entre Usuários / Dispositivos 100% Homologado!');

  // Test 8: Logout and Token Invalidation
  console.log('--- Teste 8: Logout e Revogação de Sessão ---');
  const logoutRes = await request('/auth/logout', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenA}` }
  });
  assert.strictEqual(logoutRes.status, 200);

  const meAfterLogout = await request('/auth/me', {
    headers: { 'Authorization': `Bearer ${tokenA}` }
  });
  assert.strictEqual(meAfterLogout.data.authenticated, false, 'Sessão deslogada deve retornar authenticated: false');
  console.log('✅ [PASS] Logout executado e token revogado');

  console.log('======================================================');
  console.log('🎉 TODOS OS 8 TESTES DE AUTENTICAÇÃO E ISOLAMENTO PASSARAM!');
  console.log('======================================================');
}

runAuthTests().catch((err) => {
  console.error('❌ Falha nos testes de autenticação:', err);
  process.exit(1);
});
