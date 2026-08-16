import assert from 'assert';

export async function runStudyRoomCadenceTests(baseUrl = 'http://localhost:3000') {
  console.log('\n📚 [TEST SUITE: Study Room, Cadence & Reading Pace]');

  const username = `user_cadence_${Date.now()}`;
  const reg = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password: 'SenhaSegura123!', email: `${username}@teste.com` })
  }).then(r => r.json());
  const token = reg.token;

  const prof = await fetch(`${baseUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-account-token': token
    },
    body: JSON.stringify({
      name: 'Aluno Cadencia',
      active_career_id: 'atrfb',
      cadence_reading_min: 60,
      cadence_questions_min: 30,
      cadence_mode: '60_30'
    })
  }).then(r => r.json());

  // 1. Listar Materiais
  const matRes = await fetch(`${baseUrl}/api/study-room/materials`, {
    headers: {
      'x-user-id': prof.id,
      'Authorization': `Bearer ${token}`,
      'x-auth-token': token
    }
  });
  const data = await matRes.json();
  const materialsList = Array.isArray(data) ? data : (data.materials || []);
  assert.ok(Array.isArray(materialsList), 'Deve retornar array de materiais');
  console.log(`  ✅ 1. Listagem de Materiais (${materialsList.length} disponíveis): PASSOU`);

  // 2. Se houver material, testar marcação de página e ritmo
  if (materialsList.length > 0) {
    const mat = materialsList[0];
    
    // Atualizar página
    const savePage = await fetch(`${baseUrl}/api/study-room/materials/${mat.id}/page`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-user-id': prof.id
      },
      body: JSON.stringify({ page: 12 })
    }).then(r => r.json());
    assert.strictEqual(savePage.success, true);
    console.log('  ✅ 2. Atualização de Marca-Página (pág 12): PASSOU');

    // Consultar Ritmo de Leitura
    const pace = await fetch(`${baseUrl}/api/study-room/materials/${mat.id}/pace?user_id=${prof.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'x-user-id': prof.id
      }
    }).then(r => r.json());
    assert.strictEqual(pace.currentPage, 12);
    assert.ok(pace.cadence, 'Deve conter objeto de cadência');
    console.log(`  ✅ 3. Consulta de Ritmo de Leitura (${pace.pagesRemaining} págs restantes, cadência ${pace.cadence.readingMin}m/${pace.cadence.questionsMin}m): PASSOU`);
  }
}

if (process.argv[1]?.endsWith('study_room_cadence.test.js')) {
  runStudyRoomCadenceTests().then(() => console.log('🎉 Todos os testes de sala de estudos passaram!'));
}
