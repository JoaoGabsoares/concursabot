import assert from 'node:assert';

export async function runCadernoErrosTests(baseUrl = 'http://localhost:3000') {
    console.log('\n📖 [TEST SUITE: Caderno de Erros & Repetição Espaçada]');

    // 0. Registrar e Autenticar Usuário de Teste
    const username = `user_erros_${Date.now()}`;
    const reg = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password: 'SenhaSegura123!', email: `${username}@teste.com` })
    }).then(r => r.json());
    const token = reg.token;
    const authHeaders = { 'Authorization': `Bearer ${token}`, 'x-account-token': token };

    const prof = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ name: 'Aluno Erros', active_career_id: 'atrfb' })
    }).then(r => r.json());

    // 1. Teste de Caderno de Erros - Listagem Inicial
    const errosRes = await fetch(`${baseUrl}/api/caderno-erros?career_id=atrfb`, {
        headers: { 'x-user-id': prof.id, ...authHeaders }
    });
    assert.strictEqual(errosRes.status, 200);
    const errosData = await errosRes.json();
    assert.strictEqual(errosData.success, true);
    assert(errosData.stats, 'Deve retornar objeto de estatísticas');
    console.log(`  ✅ 1. Consulta Inicial e Filtros do Caderno de Erros: PASSOU`);

    // 2. Teste de Estatísticas de Erros Pendentes
    assert.strictEqual(typeof errosData.stats.total, 'number', 'Total de erros deve ser número');
    assert.strictEqual(typeof errosData.stats.pending, 'number', 'Erros pendentes deve ser número');
    console.log(`  ✅ 2. Métricas de Retenção e Diagnóstico de Falhas: PASSOU`);
}
