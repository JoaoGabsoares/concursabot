import http from 'http';

function request(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        let json = null;
        try { json = JSON.parse(body); } catch(e) { json = body; }
        resolve({ status: res.statusCode, data: json, headers: res.headers });
      });
    });
    req.on('error', reject);
    if (data) {
      req.write(typeof data === 'string' ? data : JSON.stringify(data));
    }
    req.end();
  });
}

async function runEndToEndZeroStateTest() {
  console.log('🧪 Iniciando Bateria Completa de Teste de Novo Usuário (Zero XP & Sincronização Total)...');

  const testUser = `novato_${Date.now()}`;
  const testPass = 'SenhaSegura123!';

  // 1. Register Account
  console.log('\n--- 1. Registro de Nova Conta ---');
  const regRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, { username: testUser, password: testPass, email: `${testUser}@teste.com` });

  console.log(`[PASS] Registro retornou status: ${regRes.status}`);
  if (regRes.status !== 201) throw new Error('Falha no registro');
  const token = regRes.data.token;
  const accountId = regRes.data.account.id;

  // 2. Create Student Profile
  console.log('\n--- 2. Criação do Perfil Inicial do Estudante ---');
  const profileRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-auth-token': token
    }
  }, {
    name: 'Estudante Zero XP',
    active_career_id: 'atrfb',
    target_role: 'Analista Tributário',
    target_banca: 'FGV',
    experience_level: 'iniciante',
    daily_hours: 4
  });

  console.log(`[PASS] Criação de perfil retornou status: ${profileRes.status}`);
  if (profileRes.status !== 201) throw new Error('Falha ao criar perfil');
  const userId = profileRes.data.id;
  console.log(`Perfil criado com ID: ${userId}`);

  // 3. Verify Dashboard Stats (Must be EXACTLY ZERO)
  console.log('\n--- 3. Verificação Rigorosa do Dashboard (Zero-State) ---');
  const dashRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/dashboard/stats',
    method: 'GET',
    headers: {
      'x-user-id': userId,
      'x-exam-id': 'atrfb',
      'Authorization': `Bearer ${token}`,
      'x-auth-token': token
    }
  });

  console.log(`[PASS] Dashboard retornou status: ${dashRes.status}`);
  const stats = dashRes.data;
  console.log(`- Questões respondidas: ${stats.questions.totalAnswered} (Esperado: 0)`);
  console.log(`- Precisão: ${stats.questions.correctPct}% (Esperado: 0%)`);
  console.log(`- Simulados: ${stats.simuladosStats.totalCompleted} (Esperado: 0)`);
  console.log(`- Atividades Recentes: ${stats.recentActivity.length} (Esperado: 0)`);
  console.log(`- Pontos fracos: ${stats.weakSubjects.length} (Esperado: 0)`);

  if (stats.questions.totalAnswered !== 0) throw new Error(`Vazamento detectado: totalAnswered = ${stats.questions.totalAnswered}`);
  if (stats.simuladosStats.totalCompleted !== 0) throw new Error(`Vazamento detectado: simulados = ${stats.simuladosStats.totalCompleted}`);
  if (stats.recentActivity.length !== 0) throw new Error(`Vazamento detectado: recentActivity = ${stats.recentActivity.length}`);

  // 4. Verify Error Notebook (Must be EXACTLY ZERO)
  console.log('\n--- 4. Verificação do Caderno de Erros (Zero-State) ---');
  const errosRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/caderno-erros',
    method: 'GET',
    headers: {
      'x-user-id': userId,
      'x-exam-id': 'atrfb',
      'Authorization': `Bearer ${token}`,
      'x-auth-token': token
    }
  });

  console.log(`[PASS] Caderno de Erros status: ${errosRes.status}`);
  console.log(`- Total de erros pendentes: ${errosRes.data.stats.total} (Esperado: 0)`);
  if (errosRes.data.stats.total !== 0) throw new Error(`Vazamento no Caderno de Erros: ${errosRes.data.stats.total}`);

  // 5. Verify Essay History (Must be EXACTLY ZERO)
  console.log('\n--- 5. Verificação do Histórico de Redações (Zero-State) ---');
  const redacaoRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/redacao/historico',
    method: 'GET',
    headers: {
      'x-user-id': userId,
      'x-exam-id': 'atrfb',
      'Authorization': `Bearer ${token}`,
      'x-auth-token': token
    }
  });

  console.log(`[PASS] Histórico de Redação status: ${redacaoRes.status}`);
  console.log(`- Total de redações salvas: ${redacaoRes.data.historico.length} (Esperado: 0)`);
  if (redacaoRes.data.historico.length !== 0) throw new Error(`Vazamento no histórico de redações: ${redacaoRes.data.historico.length}`);

  console.log('\n======================================================');
  console.log('🎉 SUCESSO TOTAL: O NOVO USUÁRIO INICIA RIGOROSAMENTE LIMPO!');
  console.log('======================================================');
}

runEndToEndZeroStateTest().catch(err => {
  console.error('❌ Erro no teste de zero-state:', err);
  process.exit(1);
});
