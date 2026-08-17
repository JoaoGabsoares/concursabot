import assert from 'node:assert';

export async function runCommunityAndCadernoErrosTests(baseUrl = 'http://localhost:3000') {
    console.log('\n💬 [TEST SUITE: Comunidade em Tempo Real & Caderno de Erros]');

    // 0. Registrar e Autenticar Usuário de Teste
    const username = `user_comm_${Date.now()}`;
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
        body: JSON.stringify({ name: 'Aluno Comunidade', active_career_id: 'atrfb' })
    }).then(r => r.json());

    // 1. Teste de canais da comunidade
    const channelsRes = await fetch(`${baseUrl}/api/community/channels?careerId=atrfb`, { headers: authHeaders });
    assert.strictEqual(channelsRes.status, 200, 'Deve responder status 200 para canais');
    const channelsData = await channelsRes.json();
    assert.strictEqual(channelsData.success, true);
    assert(Array.isArray(channelsData.channels), 'Canais devem ser um array');
    assert(channelsData.channels.length >= 1, 'Deve possuir ao menos 1 canal configurado');
    const targetChannel = channelsData.channels[0];
    console.log(`  ✅ 1. Canais da Comunidade (${channelsData.channels.length} canais ativos): PASSOU`);

    // 2. Teste de envio de mensagem na comunidade
    const sendRes = await fetch(`${baseUrl}/api/community/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': prof.id, ...authHeaders },
        body: JSON.stringify({
            channelId: targetChannel.id,
            messageText: 'Mensagem de teste automatizado sobre o edital!',
            userName: 'Aluno Teste',
            userAvatar: '👨‍🎓',
            careerBadge: 'ATRFB',
            careerId: 'atrfb'
        })
    });
    assert.strictEqual(sendRes.status, 200, 'Envio de mensagem deve responder 200');
    const sendData = await sendRes.json();
    assert.strictEqual(sendData.success, true);
    assert(sendData.message && sendData.message.id, 'Deve retornar mensagem com ID');
    const createdMsgId = sendData.message.id;
    console.log(`  ✅ 2. Envio de Mensagem no Canal #${targetChannel.id}: PASSOU`);

    // 3. Teste de listagem de mensagens do canal
    const msgsRes = await fetch(`${baseUrl}/api/community/messages/${targetChannel.id}`, { headers: authHeaders });
    assert.strictEqual(msgsRes.status, 200);
    const msgsData = await msgsRes.json();
    assert.strictEqual(msgsData.success, true);
    assert(Array.isArray(msgsData.messages), 'Mensagens devem ser um array');
    const foundMsg = msgsData.messages.find(m => m.id === createdMsgId);
    assert(foundMsg, 'A mensagem recém-criada deve constar no histórico');
    console.log(`  ✅ 3. Recuperação de Histórico de Mensagens: PASSOU`);

    // 4. Teste de reação emoji na mensagem
    const reactRes = await fetch(`${baseUrl}/api/community/messages/${createdMsgId}/react`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': prof.id, ...authHeaders },
        body: JSON.stringify({
            emoji: '💡',
            channelId: targetChannel.id
        })
    });
    assert.strictEqual(reactRes.status, 200);
    const reactData = await reactRes.json();
    assert.strictEqual(reactData.success, true);
    assert.strictEqual(reactData.action, 'added');
    const bulbReaction = reactData.reactions.find(r => r.emoji === '💡');
    assert(bulbReaction && bulbReaction.count >= 1, 'Reação de lâmpada deve ter contagem >= 1');
    console.log('  ✅ 4. Reações Emoji em Mensagens com Broadcast: PASSOU');

    // 5. Teste de Caderno de Erros - Listagem
    const errosRes = await fetch(`${baseUrl}/api/caderno-erros?career_id=atrfb`, {
        headers: { 'x-user-id': prof.id, ...authHeaders }
    });
    assert.strictEqual(errosRes.status, 200);
    const errosData = await errosRes.json();
    assert.strictEqual(errosData.success, true);
    assert(errosData.stats, 'Deve retornar objeto de estatísticas');
    console.log(`  ✅ 5. Consulta e Filtros do Caderno de Erros: PASSOU`);
}
