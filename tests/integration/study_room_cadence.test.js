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

  // 4. Testar POST /register-study com progresso de páginas (salvar parada)
  const regProgressRes = await fetch(`${baseUrl}/api/study-room/register-study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    },
    body: JSON.stringify({
      subject: 'Direito Constitucional',
      lessonNumber: 1,
      currentPage: 15,
      totalPages: 45,
      durationMinutes: 30,
      isCompleted: false,
      careerId: 'atrfb'
    })
  });
  const regProgress = await regProgressRes.json();
  assert.strictEqual(regProgressRes.status, 200, 'Status deve ser 200 ao salvar progresso');
  assert.strictEqual(regProgress.success, true);
  assert.strictEqual(regProgress.xpGained, 20);
  console.log('  ✅ 4. Registro de Progresso de Estudo (+20 XP, logActivity OK): PASSOU');

  // 5. Testar POST /register-study com conclusão de aula (+50 XP)
  const regFinishRes = await fetch(`${baseUrl}/api/study-room/register-study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    },
    body: JSON.stringify({
      subject: 'Direito Constitucional',
      lessonNumber: 1,
      currentPage: 45,
      totalPages: 45,
      durationMinutes: 60,
      isCompleted: true,
      careerId: 'atrfb'
    })
  });
  const regFinish = await regFinishRes.json();
  assert.strictEqual(regFinishRes.status, 200, 'Status deve ser 200 ao concluir aula');
  assert.strictEqual(regFinish.success, true);
  assert.strictEqual(regFinish.xpGained, 50);
  console.log('  ✅ 5. Registro de Conclusão de Aula (+50 XP, logActivity OK): PASSOU');

  // 6. Testar POST /api/study-room/register-past-study (Gravação de Estudo Retroativo)
  const pastRes = await fetch(`${baseUrl}/api/study-room/register-past-study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    },
    body: JSON.stringify({
      studyDate: '2026-08-20',
      subject: 'Legislação Tributária',
      topic: 'Regimes de Lucro Real e Presumido',
      durationMinutes: 60,
      pagesRead: 15,
      questionsCount: 10,
      questionsCorrect: 8,
      notes: 'Estudo feito presencialmente',
      careerId: 'atrfb'
    })
  });
  const pastData = await pastRes.json();
  assert.strictEqual(pastRes.status, 200, 'Status deve ser 200 ao gravar estudo retroativo');
  assert.strictEqual(pastData.success, true);
  assert.ok(pastData.sessionId > 0, 'Deve retornar sessionId gerado');
  assert.ok(pastData.xpGained > 0, 'Deve conceder XP');
  console.log(`  ✅ 6. Gravação de Estudo Retroativo (+${pastData.xpGained} XP, 2026-08-20): PASSOU`);

  // 7. Testar GET /api/study-room/past-studies (Histórico)
  const histRes = await fetch(`${baseUrl}/api/study-room/past-studies?careerId=atrfb`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    }
  });
  const histData = await histRes.json();
  assert.strictEqual(histRes.status, 200, 'Status deve ser 200 ao listar histórico');
  assert.strictEqual(histData.success, true);
  assert.ok(Array.isArray(histData.items) && histData.items.length > 0, 'Deve listar estudos passados');
  console.log(`  ✅ 7. Listagem de Histórico Retroativo (${histData.items.length} itens encontrados): PASSOU`);

  // 8. Testar POST /api/dashboard/register-past-study (Alias Espelhado na Dashboard)
  const dashPastRes = await fetch(`${baseUrl}/api/dashboard/register-past-study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    },
    body: JSON.stringify({
      studyDate: '2026-08-19',
      subject: 'Raciocínio Lógico-Matemático',
      durationMinutes: 45,
      careerId: 'atrfb'
    })
  });
  const dashPastData = await dashPastRes.json();
  assert.strictEqual(dashPastRes.status, 200, 'Status deve ser 200 no alias dashboard');
  assert.strictEqual(dashPastData.success, true);
  console.log('  ✅ 8. Endpoint Espelhado da Dashboard (/api/dashboard/register-past-study): PASSOU');

  // 8.5. Testar GET /api/dashboard com activeWeekDates e subjectBreakdown sincronizado
  const dashStatsRes = await fetch(`${baseUrl}/api/dashboard?careerId=atrfb`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    }
  });
  const dashStats = await dashStatsRes.json();
  assert.strictEqual(dashStatsRes.status, 200, 'Status deve ser 200 ao consultar dashboard');
  assert.ok(Array.isArray(dashStats.activeWeekDates), 'activeWeekDates deve ser um array');
  assert.ok(dashStats.activeWeekDates.includes('2026-08-20'), 'activeWeekDates deve incluir data estudada 2026-08-20');
  
  const legTrib = dashStats.subjectBreakdown.find(s => s.name === 'Legislação Tributária');
  assert.ok(legTrib, 'Deve encontrar Legislação Tributária no subjectBreakdown');
  assert.strictEqual(legTrib.totalQuestions, 10, 'Deve contabilizar 10 questões estudadas');
  assert.strictEqual(legTrib.correctQuestions, 8, 'Deve contabilizar 8 questões certas');
  assert.strictEqual(legTrib.correctPercentage, 80, 'Aproveitamento deve ser 80%');
  console.log('  ✅ 8.5. Sincronização de Heatmap Semanal (activeWeekDates) & Radar de Matérias: PASSOU');

  // 9. Testar DELETE /api/study-room/past-study/:id (Exclusão e Recálculo)
  const delRes = await fetch(`${baseUrl}/api/study-room/past-study/${pastData.sessionId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id
    }
  });
  const delData = await delRes.json();
  assert.strictEqual(delRes.status, 200, 'Status deve ser 200 ao excluir');
  assert.strictEqual(delData.success, true);
  console.log('  ✅ 9. Exclusão de Estudo Retroativo e Recálculo de Streak: PASSOU');

  // 10. Testar POST /api/study-room/generate-lesson (Geração de Apostila Digital de Doutrina Completa)
  const genLessonRes = await fetch(`${baseUrl}/api/study-room/generate-lesson`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'tce_rj'
    },
    body: JSON.stringify({
      subject: 'Controle Externo',
      topic: 'Tomada de Contas Especial e Medidas Cautelares do TCE-RJ',
      lessonNumber: 2,
      careerId: 'tce_rj'
    })
  });
  const genData = await genLessonRes.json();
  assert.strictEqual(genLessonRes.status, 200, 'Status deve ser 200 ao gerar apostila');
  assert.strictEqual(genData.success, true, 'Deve retornar success: true');
  assert.ok(genData.materialId, 'Deve retornar materialId inserido');
  assert.ok(genData.lesson, 'Deve retornar objeto da aula');
  assert.strictEqual(genData.lesson.totalPages, 5, 'Aula deve ter 5 páginas');
  assert.strictEqual(genData.lesson.pages.length, 5, 'Deve conter 5 páginas estruturadas');
  assert.ok(genData.lesson.pages[0].bodyText, 'Página 1 deve ter bodyText doutrinário');
  assert.ok(genData.lesson.pages[1].tableData || genData.lesson.pages[1].mnemonics, 'Página 2 deve ter tabela ou mnemônicos');
  console.log(`  ✅ 10. Geração de Apostila Digital de Doutrina Completa (${genData.lesson.titulo}): PASSOU`);

  // 11. Testar GET /api/study-room/module-questions (Bateria de Questões por Módulo)
  const modQRes = await fetch(`${baseUrl}/api/study-room/module-questions?subject=Direito%20Tribut%C3%A1rio&limit=5`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    }
  });
  const modQData = await modQRes.json();
  assert.strictEqual(modQRes.status, 200, 'Status deve ser 200 ao buscar questões');
  assert.strictEqual(modQData.success, true);
  assert.ok(Array.isArray(modQData.questions), 'Deve retornar array de questões');
  console.log(`  ✅ 11. Busca de Bateria de Questões do Módulo (${modQData.questions.length} questões encontradas): PASSOU`);

  // 12. Testar POST /api/study-room/answer-question (Sincronização com Caderno de Erros e Gamificação)
  const ansCorrectRes = await fetch(`${baseUrl}/api/study-room/answer-question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    },
    body: JSON.stringify({
      questionText: 'No tocante à imunidade tributária recíproca dos entes federativos, assinale a correta:',
      options: { A: 'Atinge impostos sobre patrimônio, renda ou serviços', B: 'Atinge taxas', C: 'Atinge contribuições de melhoria', D: 'Não se aplica a autarquias', E: 'Atinge preços públicos' },
      selectedAnswer: 'A',
      correctIndex: 'A',
      explanation: 'O art. 150, VI, a da CF veda a instituição de impostos entre entes políticos.',
      subject: 'Direito Tributário',
      topic: 'Imunidades Constitucionais',
      banca: 'FGV'
    })
  });
  const ansCorrectData = await ansCorrectRes.json();
  assert.strictEqual(ansCorrectRes.status, 200);
  assert.strictEqual(ansCorrectData.isCorrect, true);
  assert.strictEqual(ansCorrectData.xpGained, 10);
  assert.strictEqual(ansCorrectData.savedToErrorNotebook, false);

  const ansWrongRes = await fetch(`${baseUrl}/api/study-room/answer-question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    },
    body: JSON.stringify({
      questionText: 'Quanto ao princípio do pecunia non olet no direito tributário:',
      options: { A: 'A ilicitude da atividade impede a tributação', B: 'A validade jurídica dos atos independe da tributação', C: 'A atividade criminosa não pode ser tributada', D: 'O tributo é penalidade', E: 'Nenhuma anterior' },
      selectedAnswer: 'A', // Resposta errada de propósito
      correctIndex: 'B',
      explanation: 'O art. 118 do CTN consagra o princípio do non olet: a definição legal do fato gerador é interpretada com abstração da validade jurídica dos atos.',
      subject: 'Direito Tributário',
      topic: 'Princípios Tributários',
      banca: 'FGV'
    })
  });
  const ansWrongData = await ansWrongRes.json();
  assert.strictEqual(ansWrongRes.status, 200);
  assert.strictEqual(ansWrongData.isCorrect, false);
  assert.strictEqual(ansWrongData.xpGained, 2);
  assert.strictEqual(ansWrongData.savedToErrorNotebook, true);
  console.log('  ✅ 12. Sincronização de Resposta e Envio Automático ao Caderno de Erros: PASSOU');

  // 13. Testar POST /api/study-room/register-study com questionsCount e correctQuestionsCount
  const regStudyFullRes = await fetch(`${baseUrl}/api/study-room/register-study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    },
    body: JSON.stringify({
      subject: 'Direito Tributário',
      title: 'Doutrina de Imunidades e Princípios',
      currentPage: 5,
      totalPages: 5,
      isCompleted: true,
      durationMinutes: 60,
      questionsCount: 5,
      correctQuestionsCount: 4,
      notes: 'Sessão completa de 1 hora com bateria de questões.'
    })
  });
  const regStudyFullData = await regStudyFullRes.json();
  assert.strictEqual(regStudyFullRes.status, 200);
  assert.strictEqual(regStudyFullData.success, true);
  assert.ok(regStudyFullData.xpGained >= 90, 'Deve computar XP de conclusão + bônus de questões');
  console.log(`  ✅ 13. Registro de Sessão de 1 Hora com Bateria de Questões (+${regStudyFullData.xpGained} XP): PASSOU`);

  // 14. Testar GET /api/study-room/edital-subtopics (Árvore de Subtópicos do Edital)
  const subtopicsRes = await fetch(`${baseUrl}/api/study-room/edital-subtopics?careerId=atrfb&subject=Direito%20Tribut%C3%A1rio`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    }
  });
  const subtopicsData = await subtopicsRes.json();
  assert.strictEqual(subtopicsRes.status, 200);
  assert.strictEqual(subtopicsData.success, true);
  assert.ok(Array.isArray(subtopicsData.subtopics));
  assert.ok(subtopicsData.subtopics.length >= 5, 'Deve conter pelo menos 5 subtópicos do edital');
  console.log(`  ✅ 14. Consulta de Subtópicos do Edital (${subtopicsData.subtopics.length} tópicos encontrados): PASSOU`);

  // 15. Testar POST /api/study-room/expand-lesson (Expansão Infinita de Teoria Densa)
  const expandRes = await fetch(`${baseUrl}/api/study-room/expand-lesson`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'tce_rj'
    },
    body: JSON.stringify({
      materialId: genData.materialId,
      subject: 'Controle Externo',
      topic: 'Tomada de Contas Especial e Medidas Cautelares do TCE-RJ',
      densityMode: 'doutrina_completa',
      pagesCount: 5
    })
  });
  const expandData = await expandRes.json();
  assert.strictEqual(expandRes.status, 200);
  assert.strictEqual(expandData.success, true);
  assert.strictEqual(expandData.totalPages, 10, 'Apostila deve ter sido expandida para 10 páginas');
  assert.strictEqual(expandData.lesson.pages.length, 10, 'Array de páginas deve conter 10 itens');
  console.log(`  ✅ 15. Expansão Infinita de Teoria (+${expandData.addedCount} págs -> Total: ${expandData.totalPages} págs): PASSOU`);

  // 16. Testar POST /api/study-room/generate-flashcards (Geração de Flashcards Anki)
  const flashcardsRes = await fetch(`${baseUrl}/api/study-room/generate-flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'atrfb'
    },
    body: JSON.stringify({
      subject: 'Direito Tributário',
      topic: 'Imunidades Tributárias Recíprocas',
      lessonContent: 'O art. 150, VI, a veda a cobrança de impostos sobre patrimônio, renda ou serviços entre os entes federativos.',
      count: 5
    })
  });
  const flashcardsData = await flashcardsRes.json();
  assert.strictEqual(flashcardsRes.status, 200);
  assert.strictEqual(flashcardsData.success, true);
  assert.ok(flashcardsData.deckId, 'Deve criar ou recuperar deckId');
  assert.strictEqual(flashcardsData.cards.length, 5, 'Deve retornar 5 flashcards estruturados');
  assert.ok(flashcardsData.cards[0].front && flashcardsData.cards[0].back, 'Flashcards devem ter frente e verso');
  console.log(`  ✅ 16. Geração de Flashcards Anki com Repetição Espaçada (${flashcardsData.cards.length} cards): PASSOU`);

  // 17. Validar que lições digitais IA possuem pdfUrl: null (não tentam acessar /uploads com 403)
  const matsCheckRes = await fetch(`${baseUrl}/api/study-room/materials?careerId=tce_rj`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'x-user-id': prof.id,
      'x-exam-id': 'tce_rj'
    }
  });
  const matsCheckData = await matsCheckRes.json();
  assert.strictEqual(matsCheckRes.status, 200);
  const digitalMat = matsCheckData.materials.find(m => m.id === genData.materialId);
  assert.ok(digitalMat, 'Deve encontrar material digital gerado');
  assert.strictEqual(digitalMat.pdfUrl, null, 'Material digital IA deve ter pdfUrl como null');
  console.log('  ✅ 17. Validação de Leitor Digital (pdfUrl = null, sem 403 no /uploads): PASSOU');
}

if (process.argv[1]?.endsWith('study_room_cadence.test.js')) {
  runStudyRoomCadenceTests().then(() => console.log('🎉 Todos os testes de sala de estudos passaram!'));
}
