// ConcursaBot — Comprehensive QA & E2E Functional Test Suite
// Tests all key REST API endpoints, HTTP methods, career isolation, error cases and boundaries.

import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';

const testResults = [];

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const start = performance.now();
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    const latency = Math.round(performance.now() - start);
    let body = null;
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      try {
        body = await res.json();
      } catch (e) {
        body = await res.text();
      }
    } else {
      body = await res.text();
    }
    return {
      status: res.status,
      ok: res.ok,
      latency,
      headers: Object.fromEntries(res.headers.entries()),
      body
    };
  } catch (err) {
    const latency = Math.round(performance.now() - start);
    return {
      status: 0,
      ok: false,
      latency,
      error: err.message,
      body: null
    };
  }
}

function recordResult(category, testName, expectedStatus, actualResult, validationFn) {
  let passed = true;
  let validationMessage = 'OK';

  if (Array.isArray(expectedStatus)) {
    if (!expectedStatus.includes(actualResult.status)) {
      passed = false;
      validationMessage = `Status esperado: ${expectedStatus.join(' ou ')}, obtido: ${actualResult.status}`;
    }
  } else if (actualResult.status !== expectedStatus) {
    passed = false;
    validationMessage = `Status esperado: ${expectedStatus}, obtido: ${actualResult.status}`;
  }

  if (passed && validationFn) {
    try {
      const customCheck = validationFn(actualResult.body, actualResult);
      if (customCheck !== true) {
        passed = false;
        validationMessage = customCheck || 'Falha na validação do payload';
      }
    } catch (e) {
      passed = false;
      validationMessage = `Exceção na validação: ${e.message}`;
    }
  }

  const record = {
    category,
    testName,
    status: actualResult.status,
    latency: `${actualResult.latency}ms`,
    passed,
    validationMessage,
    payloadSnippet: typeof actualResult.body === 'object' 
      ? JSON.stringify(actualResult.body).substring(0, 160) 
      : String(actualResult.body).substring(0, 160)
  };

  testResults.push(record);
  console.log(`[${passed ? 'PASS' : 'FAIL'}] [${category}] ${testName} -> HTTP ${actualResult.status} (${actualResult.latency}ms): ${validationMessage}`);
  return record;
}

async function runAllTests() {
  console.log('================================================================');
  console.log('🧪 CONCURSABOT — QA & E2E FUNCTIONAL TESTING SUITE');
  console.log(`Target: ${BASE_URL} | Time: ${new Date().toISOString()}`);
  console.log('================================================================\n');

  // ==========================================================================
  // SECTION 1: KEY BACKEND REST APIS (GET & POST TESTS)
  // ==========================================================================

  console.log('--- SECTION 1: Key Backend REST APIs (GET & POST) ---');

  // 1.1 /api/dashboard/stats
  const resDashGet = await request('/api/dashboard/stats', { method: 'GET' });
  recordResult('Dashboard', 'GET /api/dashboard/stats', 200, resDashGet, (body) => {
    return ('answered' in body && 'accuracy' in body && 'questions' in body && 'flashcards' in body)
      ? true : 'Estrutura do dashboard incorreta';
  });

  const resDashPost = await request('/api/dashboard/stats', { method: 'POST', body: JSON.stringify({}) });
  recordResult('Dashboard', 'POST /api/dashboard/stats (Unregistered method)', 404, resDashPost);

  // 1.2 /api/study-room/materials
  const resMatGet = await request('/api/study-room/materials', { method: 'GET' });
  recordResult('Study Room', 'GET /api/study-room/materials', 200, resMatGet, (body) => {
    return Array.isArray(body.materials) ? true : 'Array materials não retornado';
  });

  const resMatPost = await request('/api/study-room/materials', { method: 'POST', body: JSON.stringify({}) });
  recordResult('Study Room', 'POST /api/study-room/materials (Unregistered direct POST)', 404, resMatPost);

  // 1.3 /api/questions/generate & /api/questions/answer
  // Test AI questions generate (with count clamp)
  const resQGen = await request('/api/questions/generate', {
    method: 'POST',
    body: JSON.stringify({
      subject: 'Língua Portuguesa',
      topic: 'Crase e Regência',
      banca: 'IBDO',
      type: 'multiple_choice',
      count: 2
    })
  });
  let sampleQuestionId = null;
  recordResult('Questions', 'POST /api/questions/generate (count=2)', 200, resQGen, (body) => {
    if (body.success && Array.isArray(body.questions) && body.questions.length > 0) {
      sampleQuestionId = body.questions[0].id;
      return true;
    }
    return 'Array questions não retornado ou vazio';
  });

  const resQGenGet = await request('/api/questions/generate', { method: 'GET' });
  recordResult('Questions', 'GET /api/questions/generate (Method Not Allowed / 404)', 404, resQGenGet);

  // If question generation didn't return an id, pick an existing one from db via stats/search
  if (!sampleQuestionId) {
    const resSearch = await request('/api/questions/search?q=a', { method: 'GET' });
    if (Array.isArray(resSearch.body) && resSearch.body.length > 0) {
      sampleQuestionId = resSearch.body[0].id;
    } else {
      sampleQuestionId = 1;
    }
  }

  // Answer question
  const resQAns = await request('/api/questions/answer', {
    method: 'POST',
    body: JSON.stringify({
      questionId: sampleQuestionId,
      selectedAnswer: 0
    })
  });
  recordResult('Questions', 'POST /api/questions/answer (valid)', 200, resQAns, (body) => {
    return ('isCorrect' in body && 'correctIndex' in body) ? true : 'Payload de resposta inválido';
  });

  const resQAnsGet = await request('/api/questions/answer', { method: 'GET' });
  recordResult('Questions', 'GET /api/questions/answer (404 Not Found)', 404, resQAnsGet);

  // 1.4 /api/simulados/generate vs /api/simulados/create
  const resSimGen = await request('/api/simulados/generate', {
    method: 'POST',
    body: JSON.stringify({
      banca: 'IBDO',
      subjects: ['Língua Portuguesa'],
      questionCount: 2
    })
  });
  recordResult('Simulados', 'POST /api/simulados/generate (Route alias check)', [200, 404], resSimGen);

  const resSimCreate = await request('/api/simulados/create', {
    method: 'POST',
    body: JSON.stringify({
      banca: 'IBDO',
      subjects: ['Língua Portuguesa'],
      questionCount: 2,
      timeLimitMinutes: 15
    })
  });
  let createdSimuladoId = null;
  recordResult('Simulados', 'POST /api/simulados/create (Canonical Route)', 200, resSimCreate, (body) => {
    if (body.success && body.simuladoId) {
      createdSimuladoId = body.simuladoId;
      return true;
    }
    return 'simuladoId não gerado';
  });

  const resSimList = await request('/api/simulados', { method: 'GET' });
  recordResult('Simulados', 'GET /api/simulados', 200, resSimList, (body) => {
    return Array.isArray(body) ? true : 'Array de simulados não retornado';
  });

  // 1.5 /api/schedule/today and /api/schedule/generate
  const resSchedToday = await request('/api/schedule/today', { method: 'GET' });
  recordResult('Schedule', 'GET /api/schedule/today', 200, resSchedToday, (body) => {
    return (body.success && 'careerId' in body && 'currentDayName' in body && Array.isArray(body.tasks))
      ? true : 'Pauta do dia com formato inválido';
  });

  const resSchedTodayPost = await request('/api/schedule/today', { method: 'POST', body: JSON.stringify({}) });
  recordResult('Schedule', 'POST /api/schedule/today (404 Not Found)', 404, resSchedTodayPost);

  const resSchedGen = await request('/api/schedule/generate', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Cronograma E2E QA Test',
      subjects: ['Língua Portuguesa', 'Legislação do SUS & Saúde Pública'],
      hoursPerDay: 3,
      daysPerWeek: 6,
      careerId: 'ses_rj'
    })
  });
  recordResult('Schedule', 'POST /api/schedule/generate (Smart Schedule AI)', 200, resSchedGen, (body) => {
    return (body.success && body.scheduleId) ? true : 'Falha na geração do cronograma';
  });

  const resSchedGenGet = await request('/api/schedule/generate', { method: 'GET' });
  recordResult('Schedule', 'GET /api/schedule/generate (404 Not Found)', 404, resSchedGenGet);

  // 1.6 /api/flashcards/decks
  const resDecksGet = await request('/api/flashcards/decks', { method: 'GET' });
  recordResult('Flashcards', 'GET /api/flashcards/decks', 200, resDecksGet, (body) => {
    return Array.isArray(body) ? true : 'Array de decks não retornado';
  });

  const resDecksPost = await request('/api/flashcards/decks', { method: 'POST', body: JSON.stringify({}) });
  recordResult('Flashcards', 'POST /api/flashcards/decks (404 / use /generate)', 404, resDecksPost);

  const resDeckGen = await request('/api/flashcards/generate', {
    method: 'POST',
    body: JSON.stringify({
      topic: 'Princípios do SUS (Universalidade e Integralidade)',
      subject: 'Legislação do SUS',
      count: 2
    })
  });
  recordResult('Flashcards', 'POST /api/flashcards/generate', 200, resDeckGen, (body) => {
    return body.success === true ? true : 'Falha ao criar deck de flashcards';
  });

  // 1.7 /api/users/profiles vs /api/users
  const resUsersProfilesGet = await request('/api/users/profiles', { method: 'GET' });
  recordResult('Users', 'GET /api/users/profiles (Route alias check)', [200, 404], resUsersProfilesGet);

  const resUsersGet = await request('/api/users', { method: 'GET' });
  recordResult('Users', 'GET /api/users (Canonical Profile List)', 200, resUsersGet, (body) => {
    return (Array.isArray(body) && body.length >= 3) ? true : 'Lista de perfis incompleta';
  });

  let createdUserId = null;
  const resUserCreate = await request('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      name: 'QA Test Agent User',
      avatar_emoji: '🧪',
      active_career_id: 'ses_rj',
      color_theme: 'success',
      target_role: 'Técnico de Enfermagem',
      target_banca: 'IBDO',
      experience_level: 'intermediario',
      daily_hours: 4
    })
  });
  recordResult('Users', 'POST /api/users (Create User Profile)', 201, resUserCreate, (body) => {
    if (body.id && body.name === 'QA Test Agent User') {
      createdUserId = body.id;
      return true;
    }
    return 'Perfil não foi criado corretamente';
  });

  // 1.8 /api/system/logs
  const resLogsGet = await request('/api/system/logs?limit=50', { method: 'GET' });
  recordResult('System Logs', 'GET /api/system/logs', 200, resLogsGet, (body) => {
    return (body.success && Array.isArray(body.logs)) ? true : 'Logs inválidos';
  });

  const resLogsDownload = await request('/api/system/logs/download', { method: 'GET' });
  recordResult('System Logs', 'GET /api/system/logs/download', 200, resLogsDownload, (_, fullRes) => {
    return fullRes.headers['content-type']?.includes('text/plain') ? true : 'Content-type não é text/plain';
  });

  const resLogsPost = await request('/api/system/logs', { method: 'POST', body: JSON.stringify({}) });
  recordResult('System Logs', 'POST /api/system/logs (Unregistered method)', 404, resLogsPost);

  // 1.9 /api/verify-pin
  const resPinOpen = await request('/api/verify-pin', {
    method: 'POST',
    body: JSON.stringify({ pin: '1234' })
  });
  recordResult('Auth PIN', 'POST /api/verify-pin (No PIN required in local dev)', 200, resPinOpen, (body) => {
    return ('valid' in body) ? true : 'Formato de validação de PIN inválido';
  });

  const resPinGet = await request('/api/verify-pin', { method: 'GET' });
  recordResult('Auth PIN', 'GET /api/verify-pin (404 Not Found)', 404, resPinGet);

  console.log('\n================================================================');
  console.log('--- SECTION 2: CAREER ISOLATION TESTING (3 ACTIVE CAREERS) ---');
  console.log('================================================================\n');

  // Career 1: SES-RJ / IASERJ 2026
  const resCatalogSES = await request('/api/study-room/catalog', {
    method: 'GET',
    headers: { 'X-Exam-ID': 'ses_rj' }
  });
  recordResult('Career Isolation', 'Catalog Context: ses_rj (SES-RJ / IASERJ 2026)', 200, resCatalogSES, (body) => {
    const isSES = body.careerId === 'ses_rj';
    const hasSUS = body.catalog.some(c => c.subject.includes('SUS') || c.subject.includes('Enfermagem'));
    return (isSES && hasSUS) ? true : 'Catálogo SES-RJ não contém matérias de Saúde/SUS';
  });

  const resSchedSES = await request('/api/schedule/today?careerId=ses_rj', { method: 'GET' });
  recordResult('Career Isolation', 'Schedule Context: ses_rj', 200, resSchedSES, (body) => {
    return body.careerId === 'ses_rj' && body.careerName.includes('SES-RJ') ? true : 'Contexto de cronograma errado para SES-RJ';
  });

  const resBenchSES = await request('/api/benchmarks/ses_rj', { method: 'GET' });
  recordResult('Career Isolation', 'Benchmarks Context: ses_rj', 200, resBenchSES, (body) => {
    return body.careerId === 'ses_rj' && Array.isArray(body.editions) && body.editions.length > 0 ? true : 'Benchmarks errados para ses_rj';
  });

  // Career 2: Marinha RM2
  const resCatalogRM2 = await request('/api/study-room/catalog', {
    method: 'GET',
    headers: { 'X-Exam-ID': 'marinha_rm2' }
  });
  recordResult('Career Isolation', 'Catalog Context: marinha_rm2 (Marinha RM2 / SMV)', 200, resCatalogRM2, (body) => {
    const isRM2 = body.careerId === 'marinha_rm2';
    const hasNaval = body.catalog.some(c => c.subject.includes('Naval') || c.subject.includes('Militar'));
    return (isRM2 && hasNaval) ? true : 'Catálogo RM2 não contém Formação Militar-Naval';
  });

  const resSchedRM2 = await request('/api/schedule/today?careerId=marinha_rm2', { method: 'GET' });
  recordResult('Career Isolation', 'Schedule Context: marinha_rm2', 200, resSchedRM2, (body) => {
    return body.careerId === 'marinha_rm2' && body.careerName.includes('Marinha') ? true : 'Contexto de cronograma errado para Marinha RM2';
  });

  const resBenchRM2 = await request('/api/benchmarks/marinha_rm2', { method: 'GET' });
  recordResult('Career Isolation', 'Benchmarks Context: marinha_rm2', 200, resBenchRM2, (body) => {
    return body.careerId === 'marinha_rm2' && Array.isArray(body.editions) && body.editions.length > 0 ? true : 'Benchmarks errados para marinha_rm2';
  });

  // Career 3: Receita Federal ATRFB
  const resCatalogATRFB = await request('/api/study-room/catalog', {
    method: 'GET',
    headers: { 'X-Exam-ID': 'atrfb' }
  });
  recordResult('Career Isolation', 'Catalog Context: atrfb (Receita Federal ATRFB)', 200, resCatalogATRFB, (body) => {
    const isATRFB = body.careerId === 'atrfb';
    const hasTrib = body.catalog.some(c => c.subject.includes('Tributário') || c.subject.includes('Aduaneira'));
    return (isATRFB && hasTrib) ? true : 'Catálogo ATRFB não contém Direito Tributário / Aduaneiro';
  });

  const resSchedATRFB = await request('/api/schedule/today?careerId=atrfb', { method: 'GET' });
  recordResult('Career Isolation', 'Schedule Context: atrfb', 200, resSchedATRFB, (body) => {
    return body.careerId === 'atrfb' && body.careerName.includes('Receita') ? true : 'Contexto de cronograma errado para ATRFB';
  });

  const resBenchATRFB = await request('/api/benchmarks/atrfb', { method: 'GET' });
  recordResult('Career Isolation', 'Benchmarks Context: atrfb', 200, resBenchATRFB, (body) => {
    return body.careerId === 'atrfb' && Array.isArray(body.editions) && body.editions.length > 0 ? true : 'Benchmarks errados para atrfb';
  });

  console.log('\n================================================================');
  console.log('--- SECTION 3: ERROR CASES & BOUNDARY TESTING ---');
  console.log('================================================================\n');

  // Error Case 1: POST /api/questions/generate without subject
  const resErrQGen = await request('/api/questions/generate', {
    method: 'POST',
    body: JSON.stringify({ topic: 'Some topic without subject', count: 5 })
  });
  recordResult('Error Handling', 'POST /api/questions/generate (Missing Subject)', 400, resErrQGen, (body) => {
    return body.error === 'Subject is required' ? true : 'Mensagem de erro inesperada';
  });

  // Boundary Case 2: safeCount clamping on /api/questions/generate
  // count = -10 (should clamp to 1)
  const resSafeMin = await request('/api/questions/generate', {
    method: 'POST',
    body: JSON.stringify({ subject: 'Língua Portuguesa', count: -10 })
  });
  recordResult('Boundary/SafeCount', 'POST /api/questions/generate (count=-10 -> clamp to 1)', 200, resSafeMin, (body) => {
    return (body.success && Array.isArray(body.questions) && body.questions.length === 1) ? true : `Esperado 1 questão gerada, recebido: ${body.questions?.length}`;
  });

  // Error Case 3: POST /api/questions/answer with missing parameters
  const resErrQAnsMissing = await request('/api/questions/answer', {
    method: 'POST',
    body: JSON.stringify({})
  });
  recordResult('Error Handling', 'POST /api/questions/answer (Empty Body)', 400, resErrQAnsMissing, (body) => {
    return body.error === 'Missing parameters' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 4: POST /api/questions/answer with non-existent questionId
  const resErrQAnsNotFound = await request('/api/questions/answer', {
    method: 'POST',
    body: JSON.stringify({ questionId: 9999999, selectedAnswer: 1 })
  });
  recordResult('Error Handling', 'POST /api/questions/answer (Non-existent ID)', 404, resErrQAnsNotFound, (body) => {
    return body.error === 'Question not found' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 5: POST /api/simulados/create with empty subjects
  const resErrSimSubjects = await request('/api/simulados/create', {
    method: 'POST',
    body: JSON.stringify({ subjects: [] })
  });
  recordResult('Error Handling', 'POST /api/simulados/create (Empty subjects array)', 400, resErrSimSubjects, (body) => {
    return body.error === 'Subjects array is required' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 6: POST /api/schedule/generate without subjects
  const resErrSchedSubjects = await request('/api/schedule/generate', {
    method: 'POST',
    body: JSON.stringify({ title: 'Invalid Schedule' })
  });
  recordResult('Error Handling', 'POST /api/schedule/generate (Missing subjects)', 400, resErrSchedSubjects, (body) => {
    return body.error.includes('Disciplinas obrigatórias') ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 7: POST /api/flashcards/generate without topic
  const resErrFlashTopic = await request('/api/flashcards/generate', {
    method: 'POST',
    body: JSON.stringify({ subject: 'Língua Portuguesa' })
  });
  recordResult('Error Handling', 'POST /api/flashcards/generate (Missing topic)', 400, resErrFlashTopic, (body) => {
    return body.error === 'Topic is required' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 8: POST /api/flashcards/review with out of bounds rating (e.g. 5 or 0)
  const resErrFlashRatingHigh = await request('/api/flashcards/review', {
    method: 'POST',
    body: JSON.stringify({ cardId: 1, rating: 5 })
  });
  recordResult('Error Handling', 'POST /api/flashcards/review (rating=5 out of bounds)', 400, resErrFlashRatingHigh, (body) => {
    return body.error.includes('Invalid cardId or rating') ? true : 'Mensagem de erro inesperada';
  });

  const resErrFlashRatingZero = await request('/api/flashcards/review', {
    method: 'POST',
    body: JSON.stringify({ cardId: 1, rating: 0 })
  });
  recordResult('Error Handling', 'POST /api/flashcards/review (rating=0 out of bounds)', 400, resErrFlashRatingZero, (body) => {
    return body.error.includes('Invalid cardId or rating') ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 9: POST /api/users without name
  const resErrUserName = await request('/api/users', {
    method: 'POST',
    body: JSON.stringify({ avatar_emoji: '👨‍🎓' })
  });
  recordResult('Error Handling', 'POST /api/users (Missing name)', 400, resErrUserName, (body) => {
    return body.error === 'Nome do estudante é obrigatório.' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 10: GET /api/users/non_existent_id
  const resErrUserNotFound = await request('/api/users/user_non_existent_999', { method: 'GET' });
  recordResult('Error Handling', 'GET /api/users/:id (Non-existent user ID)', 404, resErrUserNotFound, (body) => {
    return body.error === 'Perfil não encontrado.' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 11: DELETE default user 'user_joao' (Should be blocked)
  const resErrDeleteDefaultUser = await request('/api/users/user_joao', { method: 'DELETE' });
  recordResult('Error Handling', 'DELETE /api/users/user_joao (Block deleting default user)', 400, resErrDeleteDefaultUser, (body) => {
    return body.error.includes('perfil padrão titular não pode ser removido') ? true : 'Mensagem de erro inesperada';
  });

  // Cleanup created test user if created
  if (createdUserId) {
    const resDelCreated = await request(`/api/users/${createdUserId}`, { method: 'DELETE' });
    recordResult('Cleanup', `DELETE /api/users/${createdUserId} (Cascade cleanup)`, 200, resDelCreated, (body) => {
      return body.success === true ? true : 'Falha ao deletar usuário de teste';
    });
  }

  // Error Case 12: GET non-existent study material
  const resErrMaterialNotFound = await request('/api/study-room/materials/999999', { method: 'GET' });
  recordResult('Error Handling', 'GET /api/study-room/materials/999999 (Non-existent ID)', 404, resErrMaterialNotFound, (body) => {
    return body.error === 'Material não encontrado.' ? true : 'Mensagem de erro inesperada';
  });

  // Error Case 13: GET non-existent simulado
  const resErrSimNotFound = await request('/api/simulados/999999', { method: 'GET' });
  recordResult('Error Handling', 'GET /api/simulados/999999 (Non-existent ID)', 404, resErrSimNotFound, (body) => {
    return body.error === 'Not found' ? true : 'Mensagem de erro inesperada';
  });

  console.log('\n================================================================');
  console.log('🏁 TEST EXECUTION SUMMARY');
  console.log('================================================================');

  const total = testResults.length;
  const passed = testResults.filter(r => r.passed).length;
  const failed = total - passed;

  console.log(`Total Tests Executed: ${total}`);
  console.log(`Passed: ${passed} ✅`);
  console.log(`Failed: ${failed} ❌`);
  console.log(`Pass Rate: ${((passed / total) * 100).toFixed(1)}%`);

  // Output full JSON for report generator
  fs.writeFileSync(path.join(process.cwd(), 'tests_summary.json'), JSON.stringify({
    timestamp: new Date().toISOString(),
    total,
    passed,
    failed,
    passRate: `${((passed / total) * 100).toFixed(1)}%`,
    results: testResults
  }, null, 2));

  console.log('\nResults saved to tests_summary.json');
}

runAllTests().catch(console.error);
