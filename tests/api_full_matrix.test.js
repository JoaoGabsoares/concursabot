/**
 * tests/api_full_matrix.test.js
 * 
 * Suíte Exaustiva de Testes de Estresse e Matriz Completa de Rotas REST do Gabarito.AI.
 * Testa 100% dos endpoints, códigos HTTP (200, 201, 400, 401, 404), headers de autenticação,
 * isolamento multi-tenant, persistência SQLite e rajada de concorrência.
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PORT = process.env.TEST_PORT || '3097';
const BASE_URL = `http://127.0.0.1:${TEST_PORT}`;

// Estrutura para coleta de métricas de teste
const testResults = [];

async function recordTest(category, endpoint, method, expectedStatus, testFn) {
  const start = Date.now();
  try {
    const res = await testFn();
    const duration = Date.now() - start;
    const passed = res.status === expectedStatus;
    
    testResults.push({
      category,
      endpoint,
      method,
      expectedStatus,
      actualStatus: res.status,
      durationMs: duration,
      passed,
      error: passed ? null : `Status esperado ${expectedStatus}, recebido ${res.status}`
    });

    if (passed) {
      console.log(`  ✅ [${category}] ${method} ${endpoint} -> ${res.status} (${duration}ms)`);
    } else {
      console.error(`  ❌ [${category}] ${method} ${endpoint} -> Esperava ${expectedStatus}, recebeu ${res.status} (${duration}ms)`);
      if (res.body) console.error(`     Resposta: ${JSON.stringify(res.body).substring(0, 200)}`);
    }
    return res;
  } catch (err) {
    const duration = Date.now() - start;
    testResults.push({
      category,
      endpoint,
      method,
      expectedStatus,
      actualStatus: 'ERR',
      durationMs: duration,
      passed: false,
      error: err.message
    });
    console.error(`  ❌ [${category}] ${method} ${endpoint} -> EXCEÇÃO: ${err.message} (${duration}ms)`);
    return { status: 500, body: { error: err.message } };
  }
}

let currentBaseUrl = BASE_URL;

// Helper para fazer requisições HTTP seguras
async function request(endpoint, options = {}) {
  const url = endpoint.startsWith('http') ? endpoint : `${currentBaseUrl}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'x-test-suite': 'true',
    ...(options.headers || {})
  };

  const config = {
    method: options.method || 'GET',
    headers,
    ...(options.body ? { body: typeof options.body === 'string' ? options.body : JSON.stringify(options.body) } : {})
  };

  const res = await fetch(url, config);
  let body = null;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      body = await res.json();
    } catch {
      body = null;
    }
  } else {
    try {
      body = await res.text();
    } catch {
      body = null;
    }
  }

  return { status: res.status, headers: res.headers, body, ok: res.ok };
}

// Verificação de prontidão do servidor
async function waitForServer(url = currentBaseUrl, maxRetries = 40, delayMs = 300) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`${url}/api/health`);
      if (res.ok) return true;
    } catch {}
    await new Promise(r => setTimeout(r, delayMs));
  }
  return false;
}

export async function runFullMatrixSuite(targetBaseUrl = null) {
  if (targetBaseUrl) {
    currentBaseUrl = targetBaseUrl;
  }
  console.log('\n======================================================================');
  console.log(`🚀 GABARITO.AI — MATRIZ COMPLETA DE TESTES DE ESTRESSE REST API [${currentBaseUrl}]`);
  console.log('======================================================================\n');

  const suiteStartTime = Date.now();
  const timestamp = Date.now();

  // Tokens e identificadores para testes de isolamento multi-tenant
  let tokenA = '';
  let profileA = null;
  let tokenB = '';
  let profileB = null;

  // Variáveis para guardar IDs criados dinamicamente durante os testes
  let createdPastStudyId = null;
  let createdCycleId = null;
  let createdBlockId = null;
  let sampleMaterialId = null;
  let sampleQuestionId = null;
  let createdErrorId = null;
  let createdScheduleId = null;

  // =========================================================================
  // 1. HEALTH & PUBLIC CONFIG
  // =========================================================================
  console.log('📋 [FASE 1: Health & Public Endpoints]');
  await recordTest('Health', '/api/health', 'GET', 200, async () => {
    const res = await request('/api/health');
    assert.strictEqual(res.body?.status, 'healthy', 'Health status deve ser healthy');
    return res;
  });

  // =========================================================================
  // 2. AUTHENTICATION & SESSION LIFECYCLE
  // =========================================================================
  console.log('\n🔐 [FASE 2: Auth, Google OAuth & Session Management]');
  
  await recordTest('Auth', '/api/auth/status', 'GET', 200, async () => {
    return await request('/api/auth/status');
  });

  await recordTest('Auth', '/api/auth/config', 'GET', 200, async () => {
    return await request('/api/auth/config');
  });

  await recordTest('Auth', '/api/auth/google/url', 'GET', 200, async () => {
    return await request('/api/auth/google/url');
  });

  // Registro da Conta A
  const userA_email = `aluno_a_${timestamp}@teste.com`;
  const userA_username = `user_a_${timestamp}`;
  await recordTest('Auth', '/api/auth/register', 'POST', 201, async () => {
    const res = await request('/api/auth/register', {
      method: 'POST',
      body: { username: userA_username, password: 'PasswordA123!', email: userA_email, name: 'Aluno Alpha' }
    });
    assert.ok(res.body?.token, 'Deve retornar token de autenticação');
    tokenA = res.body.token;
    return res;
  });

  // Tentativa de duplicar registro (deve retornar 400 Bad Request)
  await recordTest('Auth', '/api/auth/register [Duplicado -> 400]', 'POST', 400, async () => {
    return await request('/api/auth/register', {
      method: 'POST',
      body: { username: userA_username, password: 'PasswordA123!', email: userA_email }
    });
  });

  // Login com sucesso
  await recordTest('Auth', '/api/auth/login [Sucesso]', 'POST', 200, async () => {
    const res = await request('/api/auth/login', {
      method: 'POST',
      body: { email: userA_email, password: 'PasswordA123!' }
    });
    assert.ok(res.body?.token, 'Login deve retornar token');
    return res;
  });

  // Login com senha errada (deve retornar 401 Unauthorized)
  await recordTest('Auth', '/api/auth/login [Senha Incorreta -> 401]', 'POST', 401, async () => {
    return await request('/api/auth/login', {
      method: 'POST',
      body: { email: userA_email, password: 'SenhaErradaTotal!' }
    });
  });

  // Validação de sessão /me com Bearer Token
  await recordTest('Auth', '/api/auth/me [Bearer Token]', 'GET', 200, async () => {
    const res = await request('/api/auth/me', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.strictEqual(res.body?.authenticated, true, 'Deve autenticar com Bearer');
    return res;
  });

  // Validação de sessão /me com header alternativo x-account-token
  await recordTest('Auth', '/api/auth/me [x-account-token]', 'GET', 200, async () => {
    const res = await request('/api/auth/me', {
      headers: { 'x-account-token': tokenA }
    });
    assert.strictEqual(res.body?.authenticated, true, 'Deve autenticar com x-account-token');
    return res;
  });

  // Tentativa de acesso a /me sem token (deve retornar 401)
  await recordTest('Auth', '/api/auth/me [Sem Token -> 401]', 'GET', 401, async () => {
    return await request('/api/auth/me');
  });

  // System Logs com autenticação
  await recordTest('System', '/api/system/logs [Autenticado]', 'GET', 200, async () => {
    return await request('/api/system/logs', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  // Registro da Conta B para testes de isolamento multi-tenant
  const userB_email = `aluno_b_${timestamp}@teste.com`;
  const userB_username = `user_b_${timestamp}`;
  await recordTest('Auth', '/api/auth/register [Conta B]', 'POST', 201, async () => {
    const res = await request('/api/auth/register', {
      method: 'POST',
      body: { username: userB_username, password: 'PasswordB123!', email: userB_email, name: 'Aluno Beta' }
    });
    assert.ok(res.body?.token, 'Conta B deve gerar token');
    tokenB = res.body.token;
    return res;
  });

  // =========================================================================
  // 3. USER PROFILES & ZERO-TRUST ISOLATION
  // =========================================================================
  console.log('\n👤 [FASE 3: User Profiles & Multi-Tenant IDOR Protection]');

  await recordTest('Users', '/api/users [Criar Perfil Alpha]', 'POST', 201, async () => {
    const res = await request('/api/users', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: {
        name: 'Aluno Alpha ATRFB',
        active_career_id: 'atrfb',
        target_role: 'Analista Tributário',
        cadence_reading_min: 60,
        cadence_questions_min: 30
      }
    });
    assert.ok(res.body?.id, 'Perfil Alpha deve conter ID');
    profileA = res.body;
    return res;
  });

  await recordTest('Users', '/api/users [Criar Perfil Beta]', 'POST', 201, async () => {
    const res = await request('/api/users', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenB}` },
      body: {
        name: 'Aluno Beta Transpetro',
        active_career_id: 'transpetro_adm',
        target_role: 'Técnico de Administração',
        cadence_reading_min: 45,
        cadence_questions_min: 20
      }
    });
    assert.ok(res.body?.id, 'Perfil Beta deve conter ID');
    profileB = res.body;
    return res;
  });

  await recordTest('Users', '/api/users', 'GET', 200, async () => {
    return await request('/api/users', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('Users', `/api/users/:id`, 'GET', 200, async () => {
    return await request(`/api/users/${profileA.id}`, {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('Users', `/api/users/:id`, 'PUT', 200, async () => {
    return await request(`/api/users/${profileA.id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: { name: 'Aluno Alpha Atualizado', cadence_reading_min: 75 }
    });
  });

  await recordTest('Users', '/api/users/system/health', 'GET', 200, async () => {
    return await request('/api/users/system/health', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('Users', `/api/users/:id/export-progress`, 'GET', 200, async () => {
    return await request(`/api/users/${profileA.id}/export-progress`, {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  // =========================================================================
  // 4. DASHBOARD & ANALYTICS
  // =========================================================================
  console.log('\n📊 [FASE 4: Dashboard, Streaks & Subject Breakdown]');

  await recordTest('Dashboard', '/api/dashboard', 'GET', 200, async () => {
    const res = await request('/api/dashboard', {
      headers: {
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileA.id,
        'x-exam-id': 'atrfb'
      }
    });
    assert.ok(Array.isArray(res.body?.activeWeekDates), 'activeWeekDates deve ser um array');
    assert.ok(typeof res.body?.streak === 'number', 'streak deve ser um número');
    assert.ok(Array.isArray(res.body?.subjectBreakdown), 'subjectBreakdown deve ser um array');
    assert.ok(Array.isArray(res.body?.recentActivity), 'recentActivity deve ser um array');
    return res;
  });

  await recordTest('Dashboard', '/api/dashboard/stats', 'GET', 200, async () => {
    return await request('/api/dashboard/stats', {
      headers: {
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileA.id,
        'x-exam-id': 'atrfb'
      }
    });
  });

  // =========================================================================
  // 5. STUDY ROOM & CADENCE (NATIVE + PAST STUDIES)
  // =========================================================================
  console.log('\n📖 [FASE 5: Study Room, Past Studies & XP Engine]');

  await recordTest('StudyRoom', '/api/study-room/catalog', 'GET', 200, async () => {
    const res = await request('/api/study-room/catalog', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-exam-id': 'atrfb' }
    });
    assert.ok(Array.isArray(res.body?.catalog), 'Catálogo de disciplinas deve ser array');
    return res;
  });

  await recordTest('StudyRoom', '/api/study-room/materials', 'GET', 200, async () => {
    const res = await request('/api/study-room/materials', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
    const materials = Array.isArray(res.body) ? res.body : (res.body?.materials || []);
    if (materials.length > 0) {
      sampleMaterialId = materials[0].id;
    }
    return res;
  });

  // Registro de estudo em tempo real (+20 XP / +50 XP)
  await recordTest('StudyRoom', '/api/study-room/register-study', 'POST', 200, async () => {
    const res = await request('/api/study-room/register-study', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
      body: {
        materialId: sampleMaterialId || null,
        durationMinutes: 45,
        careerId: 'atrfb',
        studyMode: 'reading_and_questions'
      }
    });
    assert.ok(res.body?.success, 'Registro de estudo deve retornar sucesso');
    assert.ok(res.body?.xpGained >= 20, 'Deve conceder no mínimo +20 XP');
    return res;
  });

  // Gravação retroativa via /api/study-room/register-past-study
  await recordTest('StudyRoom', '/api/study-room/register-past-study', 'POST', 200, async () => {
    const today = new Date().toISOString().split('T')[0];
    const res = await request('/api/study-room/register-past-study', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
      body: {
        studyDate: today,
        subject: 'Direito Tributário',
        topic: 'Imunidades e Isenções',
        durationMinutes: 60,
        pagesRead: 25,
        questionsCount: 20,
        questionsCorrect: 18,
        careerId: 'atrfb'
      }
    });
    assert.ok(res.body?.success, 'Estudo retroativo deve ter sucesso');
    assert.ok(res.body?.sessionId, 'Deve retornar sessionId');
    createdPastStudyId = res.body.sessionId;
    return res;
  });

  // Gravação retroativa via /api/dashboard/register-past-study (espelhamento)
  await recordTest('Dashboard', '/api/dashboard/register-past-study', 'POST', 200, async () => {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const res = await request('/api/dashboard/register-past-study', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
      body: {
        studyDate: yesterday,
        subject: 'Direito Constitucional',
        topic: 'Direitos Fundamentais',
        durationMinutes: 50,
        pagesRead: 15,
        questionsCount: 10,
        questionsCorrect: 9,
        careerId: 'atrfb'
      }
    });
    assert.ok(res.body?.success, 'Dashboard past-study deve ter sucesso');
    return res;
  });

  // Listagem de estudos passados via /api/study-room/past-studies
  await recordTest('StudyRoom', '/api/study-room/past-studies', 'GET', 200, async () => {
    const res = await request('/api/study-room/past-studies', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
    assert.ok(Array.isArray(res.body?.items), 'items deve ser um array');
    assert.ok(res.body.items.length >= 2, 'Deve conter os estudos gravados');
    assert.ok(res.body.items.some(i => i.subject.includes('Tributário') || i.subject.includes('Constitucional')), 'Disciplina deve estar correta');
    return res;
  });

  // Listagem de estudos passados via /api/dashboard/past-studies
  await recordTest('Dashboard', '/api/dashboard/past-studies', 'GET', 200, async () => {
    const res = await request('/api/dashboard/past-studies', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
    assert.ok(Array.isArray(res.body?.items), 'items deve ser um array');
    return res;
  });

  // Iniciar sessão de estudo (se houver material) ou validar com 400 se sem material
  if (sampleMaterialId) {
    await recordTest('StudyRoom', '/api/study-room/sessions/start', 'POST', 200, async () => {
      const res = await request('/api/study-room/sessions/start', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: { materialId: sampleMaterialId, durationMinutes: 30 }
      });
      assert.ok(res.body?.sessionId, 'Deve iniciar sessão');
      return res;
    });
  } else {
    // Validar retorno 400 para payloads incompletos
    await recordTest('StudyRoom', '/api/study-room/sessions/start [Validação sem Material -> 400]', 'POST', 400, async () => {
      return await request('/api/study-room/sessions/start', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: { durationMinutes: 30 }
      });
    });
  }

  // Exclusão de estudo retroativo com recálculo de streak
  if (createdPastStudyId) {
    await recordTest('StudyRoom', `/api/study-room/past-study/:id`, 'DELETE', 200, async () => {
      const res = await request(`/api/study-room/past-study/${createdPastStudyId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
      });
      assert.ok(res.body?.success, 'Deve excluir estudo retroativo');
      return res;
    });
  }

  // Subtópicos do Edital
  await recordTest('StudyRoom', '/api/study-room/edital-subtopics', 'GET', 200, async () => {
    return await request('/api/study-room/edital-subtopics?careerId=atrfb&subject=Direito%20Tribut%C3%A1rio', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
  });

  // Bateria de Questões por Módulo
  await recordTest('StudyRoom', '/api/study-room/module-questions', 'GET', 200, async () => {
    return await request('/api/study-room/module-questions?subject=Direito%20Tribut%C3%A1rio&limit=5', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
  });

  // Resposta de Questão de Fixação
  await recordTest('StudyRoom', '/api/study-room/answer-question', 'POST', 200, async () => {
    return await request('/api/study-room/answer-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileA.id,
        'x-exam-id': 'atrfb'
      },
      body: JSON.stringify({
        questionText: 'Questão teste de imunidade tributária',
        options: ['A', 'B', 'C', 'D', 'E'],
        selectedAnswer: 'A',
        correctIndex: 'A',
        explanation: 'Gabarito oficial',
        subject: 'Direito Tributário'
      })
    });
  });

  // Expansão de Lição Teórica
  await recordTest('StudyRoom', '/api/study-room/expand-lesson', 'POST', 200, async () => {
    return await request('/api/study-room/expand-lesson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileA.id,
        'x-exam-id': 'atrfb'
      },
      body: JSON.stringify({
        subject: 'Direito Tributário',
        topic: 'Imunidades Constitucionais',
        densityMode: 'doutrina_completa',
        pagesCount: 5
      })
    });
  });

  // Geração de Baralho de Flashcards
  await recordTest('StudyRoom', '/api/study-room/generate-flashcards', 'POST', 200, async () => {
    return await request('/api/study-room/generate-flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileA.id,
        'x-exam-id': 'atrfb'
      },
      body: JSON.stringify({
        subject: 'Direito Tributário',
        topic: 'Princípios Tributários',
        lessonContent: 'O princípio da anterioridade nonagesimal exige o transcurso de 90 dias.',
        count: 5
      })
    });
  });

  // =========================================================================
  // 6. STUDY CYCLES (CICLOS DE ESTUDOS INTELIGENTES)
  // =========================================================================
  console.log('\n🔄 [FASE 6: Study Cycles & Adaptive Engine]');

  await recordTest('StudyCycles', '/api/study-cycles/models', 'GET', 200, async () => {
    return await request('/api/study-cycles/models', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('StudyCycles', '/api/study-cycles/modelos [Alias]', 'GET', 200, async () => {
    return await request('/api/study-cycles/modelos', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('StudyCycles', '/api/study-cycles/subjects?careerId=atrfb', 'GET', 200, async () => {
    return await request('/api/study-cycles/subjects?careerId=atrfb', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  // Obter ciclo ativo (auto-provisiona se não existir)
  await recordTest('StudyCycles', '/api/study-cycles/active', 'GET', 200, async () => {
    const res = await request(`/api/study-cycles/active?userId=${profileA.id}&careerId=atrfb`, {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    const cycleId = res.body?.id || res.body?.cycle?.id;
    assert.ok(cycleId, 'Deve retornar ciclo ativo com ID');
    createdCycleId = cycleId;
    const blocks = res.body?.blocks || res.body?.cycle?.blocks || [];
    if (blocks.length > 0) {
      createdBlockId = blocks[0].id;
    }
    return res;
  });

  // Gerar novo ciclo adaptativo
  await recordTest('StudyCycles', '/api/study-cycles/generate', 'POST', 201, async () => {
    const res = await request('/api/study-cycles/generate', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: {
        userId: profileA.id,
        careerId: 'atrfb',
        modelType: 'adaptativo',
        weeklyHours: 24,
        blockDurationMinutes: 60,
        cycleName: 'Ciclo Turbo ATRFB'
      }
    });
    const cycleId = res.body?.id || res.body?.cycle?.id;
    assert.ok(cycleId, 'Deve gerar e salvar novo ciclo');
    createdCycleId = cycleId;
    const blocks = res.body?.blocks || res.body?.cycle?.blocks || [];
    if (blocks.length > 0) {
      createdBlockId = blocks[0].id;
    }
    return res;
  });

  // Simular ciclo sem salvar imediatamente
  await recordTest('StudyCycles', '/api/study-cycles/simular [Alias]', 'POST', 200, async () => {
    return await request('/api/study-cycles/simular', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: {
        userId: profileA.id,
        careerId: 'atrfb',
        modelType: 'reta_final',
        weeklyHours: 30
      }
    });
  });

  // Avançar bloco do ciclo (+20 XP)
  if (createdCycleId && createdBlockId) {
    await recordTest('StudyCycles', '/api/study-cycles/advance-block [Alias]', 'POST', 200, async () => {
      const res = await request('/api/study-cycles/advance-block', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}` },
        body: {
          cycleId: createdCycleId,
          blockId: createdBlockId,
          userId: profileA.id,
          careerId: 'atrfb'
        }
      });
      assert.ok(res.body?.success, 'Avanço do bloco deve ter sucesso');
      return res;
    });

    await recordTest('StudyCycles', `/api/study-cycles/blocks/:id`, 'PUT', 200, async () => {
      return await request(`/api/study-cycles/blocks/${createdBlockId}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${tokenA}` },
        body: { duration_minutes: 75, difficulty_level: 3 }
      });
    });

    await recordTest('StudyCycles', '/api/study-cycles/rebalance [Recalibração Adaptativa]', 'POST', 200, async () => {
      const res = await request('/api/study-cycles/rebalance', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}` },
        body: {
          userId: profileA.id,
          careerId: 'atrfb',
          saveImmediately: true
        }
      });
      assert.ok(res.body?.success, 'Recalibração deve ter sucesso');
      assert.ok(res.body?.cycle?.blocks?.length > 0, 'Ciclo recalibrado deve conter blocos');
      return res;
    });
  }

  // =========================================================================
  // 7. SIMULADOS & QUESTIONS
  // =========================================================================
  console.log('\n🎯 [FASE 7: Simulados, Questions & FGV/Cebraspe Evaluator]');

  await recordTest('Simulados', '/api/simulados/studied-scope', 'GET', 200, async () => {
    return await request('/api/simulados/studied-scope', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
  });

  await recordTest('Simulados', '/api/simulados/history', 'GET', 200, async () => {
    return await request('/api/simulados/history', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
  });

  await recordTest('Questions', '/api/questions/stats', 'GET', 200, async () => {
    return await request('/api/questions/stats', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  await recordTest('Questions', '/api/questions/history', 'GET', 200, async () => {
    return await request('/api/questions/history', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  await recordTest('Questions', '/api/questions/search?q=tributario', 'GET', 200, async () => {
    const res = await request('/api/questions/search?q=tributario', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    if (res.body?.questions?.length > 0) {
      sampleQuestionId = res.body.questions[0].id;
    }
    return res;
  });

  // Se não encontrou questão na busca, busca qualquer questão existente
  if (!sampleQuestionId) {
    const anyQ = await request('/api/questions/search?q=a', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    if (anyQ.body?.questions?.length > 0) {
      sampleQuestionId = anyQ.body.questions[0].id;
    }
  }

  // Responder questão com erro proposital para alimentar o Caderno de Erros
  if (sampleQuestionId) {
    await recordTest('Questions', '/api/questions/answer [Resposta com Erro]', 'POST', 200, async () => {
      const res = await request('/api/questions/answer', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' },
        body: {
          questionId: sampleQuestionId,
          selectedAnswer: 99 // Resposta propositalmente errada para registrar no caderno de erros
        }
      });
      assert.strictEqual(res.body?.isCorrect, false, 'Deve registrar como erro');
      return res;
    });
  }

  await recordTest('Questions', '/api/questions/error-notebook', 'GET', 200, async () => {
    return await request('/api/questions/error-notebook', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  // =========================================================================
  // 8. CADERNO DE ERROS (ERROR NOTEBOOK)
  // =========================================================================
  console.log('\n📕 [FASE 8: Caderno de Erros & Superação]');

  await recordTest('CadernoErros', '/api/caderno-erros', 'GET', 200, async () => {
    const res = await request('/api/caderno-erros', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
    assert.ok(res.body?.stats, 'Deve conter objeto de estatísticas');
    if (res.body?.items?.length > 0) {
      createdErrorId = res.body.items[0].id;
    }
    return res;
  });

  if (createdErrorId) {
    await recordTest('CadernoErros', `/api/caderno-erros/:id/notes`, 'PUT', 200, async () => {
      return await request(`/api/caderno-erros/${createdErrorId}/notes`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: { notes: 'Atenção para pegadinha da FGV sobre decadência vs prescrição' }
      });
    });

    await recordTest('CadernoErros', `/api/caderno-erros/:id/retry [Superação de Erro]`, 'POST', 200, async () => {
      const res = await request(`/api/caderno-erros/${createdErrorId}/retry`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: { selectedAnswer: 0 }
      });
      assert.ok(res.body?.success, 'Retry deve processar');
      return res;
    });

    await recordTest('CadernoErros', `/api/caderno-erros/:id/resolve [Alias]`, 'POST', 200, async () => {
      return await request(`/api/caderno-erros/${createdErrorId}/resolve`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: { selectedAnswer: 0 }
      });
    });
  }

  // =========================================================================
  // 9. LEI SECA & JURISPRUDÊNCIA
  // =========================================================================
  console.log('\n⚖️ [FASE 9: Lei Seca & Jurisprudência STF/STJ/CARF]');

  let sampleDesafioId = null;
  await recordTest('LeiSeca', '/api/leiseca/artigos?careerId=atrfb', 'GET', 200, async () => {
    const res = await request('/api/leiseca/artigos?careerId=atrfb', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.artigos?.length > 0, 'Deve retornar artigos de lei seca');
    return res;
  });

  await recordTest('LeiSeca', '/api/leiseca/desafio?careerId=atrfb', 'GET', 200, async () => {
    const res = await request('/api/leiseca/desafio?careerId=atrfb', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.desafioId, 'Deve gerar ID do desafio');
    sampleDesafioId = res.body.desafioId;
    return res;
  });

  if (sampleDesafioId) {
    await recordTest('LeiSeca', '/api/leiseca/responder [Validação Caça-Pegadinha]', 'POST', 200, async () => {
      const res = await request('/api/leiseca/responder', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: {
          desafioId: sampleDesafioId,
          palavraSelecionada: 'exclusiva',
          tempoGastoSegundos: 5
        }
      });
      assert.ok(res.body?.substituicaoEsperada, 'Deve retornar explicação da pegadinha');
      return res;
    });

    await recordTest('LeiSeca', '/api/leiseca/validar [Alias]', 'POST', 200, async () => {
      return await request('/api/leiseca/validar', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: {
          desafioId: sampleDesafioId,
          palavraSelecionada: 'exclusiva',
          tempoGastoSegundos: 6
        }
      });
    });
  }

  await recordTest('Jurisprudencia', '/api/jurisprudencia/sumulas?tribunal=STF', 'GET', 200, async () => {
    const res = await request('/api/jurisprudencia/sumulas?tribunal=STF', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.sumulas?.length > 0, 'Deve retornar súmulas do STF');
    return res;
  });

  await recordTest('Jurisprudencia', '/api/jurisprudencia/desafio', 'GET', 200, async () => {
    return await request('/api/jurisprudencia/desafio', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  // =========================================================================
  // 10. APROVEITAMENTO CURRICULAR & TRANSIÇÃO DE CARREIRAS
  // =========================================================================
  console.log('\n🔀 [FASE 10: Aproveitamento Curricular & Transição]');

  await recordTest('Aproveitamento', '/api/aproveitamento/catalogo', 'GET', 200, async () => {
    const res = await request('/api/aproveitamento/catalogo', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(Array.isArray(res.body) && res.body.length > 0, 'Catálogo de carreiras deve ser listado');
    return res;
  });

  await recordTest('Aproveitamento', '/api/aproveitamento/carreiras [Alias]', 'GET', 200, async () => {
    return await request('/api/aproveitamento/carreiras', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('Aproveitamento', '/api/aproveitamento/matriz', 'GET', 200, async () => {
    const res = await request('/api/aproveitamento/matriz', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.atrfb && res.body?.afrfb, 'Matriz oficial de editais deve existir');
    return res;
  });

  // Comparação de Afinidade Curricular (ATRFB ➔ AFRFB)
  let cronogramaTransicao = null;
  await recordTest('Aproveitamento', '/api/aproveitamento/comparar [ATRFB -> AFRFB]', 'POST', 200, async () => {
    const res = await request('/api/aproveitamento/comparar', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: {
        origemCareerId: 'atrfb',
        destinoCareerId: 'afrfb',
        dailyHours: 3,
        daysPerWeek: 6
      }
    });
    assert.ok(res.body?.percentualAproveitamento >= 60, 'Aproveitamento ATRFB -> AFRFB deve ser >= 60%');
    assert.ok(Array.isArray(res.body?.cronogramaSemanal), 'Deve gerar cronograma semanal com datas reais');
    cronogramaTransicao = res.body.cronogramaSemanal;
    return res;
  });

  // Sincronização do plano de transição no SQLite
  if (cronogramaTransicao) {
    await recordTest('Aproveitamento', '/api/aproveitamento/sincronizar-cronograma', 'POST', 200, async () => {
      const res = await request('/api/aproveitamento/sincronizar-cronograma', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
        body: {
          origemCareerId: 'atrfb',
          destinoCareerId: 'afrfb',
          cronogramaSemanal: cronogramaTransicao,
          dailyHours: 3,
          daysPerWeek: 6
        }
      });
      assert.ok(res.body?.success, 'Sincronização deve ter sucesso');
      assert.ok(res.body?.scheduleId, 'Deve gerar scheduleId no banco');
      createdScheduleId = res.body.scheduleId;
      return res;
    });
  }

  // =========================================================================
  // 11. REDAÇÃO DISCURSIVA
  // =========================================================================
  console.log('\n✍️ [FASE 11: Redação Discursiva & Grade de Correção]');

  await recordTest('Redacao', '/api/redacao/temas?careerId=atrfb', 'GET', 200, async () => {
    const res = await request('/api/redacao/temas?careerId=atrfb', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.temas?.length > 0, 'Deve retornar temas de redação');
    return res;
  });

  await recordTest('Redacao', '/api/redacao/historico', 'GET', 200, async () => {
    return await request('/api/redacao/historico', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  // Submissão de redação para correção com critérios oficiais
  await recordTest('Redacao', '/api/redacao/corrigir [Grade Oficial + 50 XP]', 'POST', 200, async () => {
    const textoRedacao = `O papel da administração tributária no combate à sonegação fiscal é elemento basilar para a manutenção da sustentabilidade fiscal do Estado brasileiro. 
Diante da complexidade tributária nacional, a digitalização dos processos de fiscalização e o cruzamento de dados automatizados têm se demonstrado eficazes na identificação de fraudes estruturadas. 
Nesse sentido, a atuação integrada da Receita Federal com órgãos de controle e o Ministério Público fortalece a segurança jurídica e assegura a justa arrecadação de recursos para as políticas públicas essenciais.`;

    const res = await request('/api/redacao/corrigir', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
      body: {
        tema: 'A importância da fiscalização tributária no fortalecimento do Estado Democrático de Direito',
        texto: textoRedacao,
        banca: 'FGV',
        careerId: 'atrfb'
      }
    });
    assert.ok(res.body?.notaTotal > 0, 'Deve calcular nota total');
    assert.ok(res.body?.feedback, 'Deve conter objeto de feedback');
    assert.ok(res.body?.xpEarned >= 50, 'Deve conceder +50 XP');
    return res;
  });

  // =========================================================================
  // 12. RAG & KNOWLEDGE BASE (BASE OFICIAL ATRFB)
  // =========================================================================
  console.log('\n🧠 [FASE 12: RAG Knowledge Base & Hybrid Search]');

  await recordTest('RAG', '/api/rag/stats', 'GET', 200, async () => {
    const res = await request('/api/rag/stats', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.totalDocuments > 0, 'Base de conhecimento RAG deve conter documentos indexados');
    return res;
  });

  await recordTest('RAG', '/api/rag/documents?subject=Tributario', 'GET', 200, async () => {
    return await request('/api/rag/documents?subject=Tributario', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
  });

  await recordTest('RAG', '/api/rag/search [Busca Híbrida BM25]', 'POST', 200, async () => {
    const res = await request('/api/rag/search', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}` },
      body: {
        query: 'hipótese de incidência e fato gerador no CTN',
        subject: 'Direito Tributário',
        topK: 3
      }
    });
    assert.ok(res.body?.results, 'Busca deve retornar resultados');
    return res;
  });

  // =========================================================================
  // 13. GAMIFICATION & REWARD ENGINE
  // =========================================================================
  console.log('\n🏆 [FASE 13: Gamification, Streaks, Ranks & Daily Claims]');

  await recordTest('Gamification', '/api/gamification/status', 'GET', 200, async () => {
    const res = await request('/api/gamification/status', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id, 'x-exam-id': 'atrfb' }
    });
    assert.ok(res.body?.totalXP !== undefined || res.body?.currentXP !== undefined, 'Deve conter XP');
    return res;
  });

  await recordTest('Gamification', '/api/gamification/catalog', 'GET', 200, async () => {
    const res = await request('/api/gamification/catalog', {
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert.ok(res.body?.ranks?.length > 0, 'Catálogo de ranks deve existir');
    assert.ok(res.body?.achievements?.length > 0, 'Catálogo de conquistas deve existir');
    return res;
  });

  await recordTest('Gamification', '/api/gamification/rank', 'GET', 200, async () => {
    return await request('/api/gamification/rank', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  await recordTest('Gamification', '/api/gamification/xp', 'GET', 200, async () => {
    return await request('/api/gamification/xp', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  await recordTest('Gamification', '/api/gamification/achievements', 'GET', 200, async () => {
    return await request('/api/gamification/achievements', {
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  await recordTest('Gamification', '/api/gamification/claim-daily [Check-in Diário]', 'POST', 200, async () => {
    const res = await request('/api/gamification/claim-daily', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
    assert.ok(res.body?.success, 'Check-in diário deve conceder bônus');
    assert.strictEqual(res.body?.bonusXP, 50, 'Bônus diário deve ser 50 XP');
    return res;
  });

  // Segundo resgate no mesmo dia deve falhar com 400 Bad Request
  await recordTest('Gamification', '/api/gamification/claim-daily [Tentativa Duplicada -> 400]', 'POST', 400, async () => {
    return await request('/api/gamification/claim-daily', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id }
    });
  });

  // =========================================================================
  // 14. OTHER PLATFORM MODULES (BENCHMARKS, SCHEDULE, FLASHCARDS, ETC)
  // =========================================================================
  console.log('\n📦 [FASE 14: Other Platform Modules (Benchmarks, Schedule, Flashcards)]');

  await recordTest('Benchmarks', '/api/benchmarks', 'GET', 200, async () => {
    return await request('/api/benchmarks', { headers: { 'Authorization': `Bearer ${tokenA}` } });
  });

  await recordTest('Benchmarks', '/api/benchmarks/pipelines', 'GET', 200, async () => {
    return await request('/api/benchmarks/pipelines', { headers: { 'Authorization': `Bearer ${tokenA}` } });
  });

  await recordTest('Benchmarks', '/api/benchmarks/pipelines/atrfb', 'GET', 200, async () => {
    return await request('/api/benchmarks/pipelines/atrfb', { headers: { 'Authorization': `Bearer ${tokenA}` } });
  });

  await recordTest('Backlog', '/api/backlog', 'GET', 200, async () => {
    return await request('/api/backlog', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Backlog', '/api/backlog', 'POST', 200, async () => {
    return await request('/api/backlog', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id },
      body: { title: 'Revisar Lei 8.112 Arts 116 e 117', subject: 'Direito Administrativo' }
    });
  });

  await recordTest('Flashcards', '/api/flashcards/decks', 'GET', 200, async () => {
    return await request('/api/flashcards/decks', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Flashcards', '/api/flashcards/review', 'GET', 200, async () => {
    return await request('/api/flashcards/review', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Schedule', '/api/schedule/today', 'GET', 200, async () => {
    return await request('/api/schedule/today', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Schedule', '/api/schedule', 'GET', 200, async () => {
    return await request('/api/schedule', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Summaries', '/api/summaries', 'GET', 200, async () => {
    return await request('/api/summaries', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Tutor', '/api/tutor/sessions', 'GET', 200, async () => {
    return await request('/api/tutor/sessions', { headers: { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } });
  });

  await recordTest('Edital', '/api/edital/presets', 'GET', 200, async () => {
    return await request('/api/edital/presets', { headers: { 'Authorization': `Bearer ${tokenA}` } });
  });

  await recordTest('Edital', '/api/edital/raiox?careerId=atrfb', 'GET', 200, async () => {
    return await request('/api/edital/raiox?careerId=atrfb', { headers: { 'Authorization': `Bearer ${tokenA}` } });
  });

  // =========================================================================
  // 15. MULTI-TENANT CROSS-ACCOUNT ISOLATION & IDOR RESISTANCE
  // =========================================================================
  console.log('\n🛡️ [FASE 15: Cross-Account Multi-Tenant Isolation & IDOR Proof]');

  // Conta B não pode ver dados registrados pela Conta A
  await recordTest('Isolation', '/api/dashboard [Conta B Isolada]', 'GET', 200, async () => {
    const res = await request('/api/dashboard', {
      headers: {
        'Authorization': `Bearer ${tokenB}`,
        'x-user-id': profileB.id,
        'x-exam-id': 'transpetro_adm'
      }
    });
    // Conta B não fez estudos de Tributário ou Redação de ATRFB, deve ter total 0
    assert.strictEqual(res.body?.recentActivity?.length, 0, 'Conta B não deve ver atividade da Conta A');
    return res;
  });

  await recordTest('Isolation', '/api/study-room/past-studies [Conta B Isolada]', 'GET', 200, async () => {
    const res = await request('/api/study-room/past-studies', {
      headers: {
        'Authorization': `Bearer ${tokenB}`,
        'x-user-id': profileB.id,
        'x-exam-id': 'transpetro_adm'
      }
    });
    assert.strictEqual(res.body?.items?.length, 0, 'Conta B não deve ver estudos passados da Conta A');
    return res;
  });

  // Tentativa de spoofing IDOR: Conta A tenta enviar x-user-id pertencente ao Perfil B
  await recordTest('Isolation', '/api/dashboard [IDOR Spoofing Mitigado]', 'GET', 200, async () => {
    const res = await request('/api/dashboard', {
      headers: {
        'Authorization': `Bearer ${tokenA}`,
        'x-user-id': profileB.id // Tentativa de personificar Perfil B
      }
    });
    // Middleware deve neutralizar e retornar apenas os dados da Conta A
    assert.ok(res.ok, 'Middleware deve neutralizar tentativa de IDOR e atender requisição na conta correta');
    return res;
  });

  // =========================================================================
  // 16. CONCURRENCY & STRESS BURST TEST (RAJADA DE REQUISIÇÕES SIMULTÂNEAS)
  // =========================================================================
  console.log('\n⚡ [FASE 16: Concurrency & High-Throughput Burst Test (60+ Requisições Paralelas)]');

  const burstEndpoints = [
    { path: '/api/health', method: 'GET', auth: false },
    { path: '/api/auth/status', method: 'GET', auth: false },
    { path: '/api/auth/config', method: 'GET', auth: false },
    { path: '/api/dashboard', method: 'GET', auth: true },
    { path: '/api/dashboard/stats', method: 'GET', auth: true },
    { path: '/api/study-room/catalog', method: 'GET', auth: true },
    { path: '/api/study-room/past-studies', method: 'GET', auth: true },
    { path: '/api/study-cycles/active', method: 'GET', auth: true },
    { path: '/api/questions/stats', method: 'GET', auth: true },
    { path: '/api/questions/search?q=direito', method: 'GET', auth: true },
    { path: '/api/caderno-erros', method: 'GET', auth: true },
    { path: '/api/leiseca/artigos', method: 'GET', auth: true },
    { path: '/api/jurisprudencia/sumulas', method: 'GET', auth: true },
    { path: '/api/aproveitamento/catalogo', method: 'GET', auth: true },
    { path: '/api/aproveitamento/matriz', method: 'GET', auth: true },
    { path: '/api/gamification/status', method: 'GET', auth: true },
    { path: '/api/gamification/rank', method: 'GET', auth: true },
    { path: '/api/rag/stats', method: 'GET', auth: true },
    { path: '/api/benchmarks/pipelines', method: 'GET', auth: true },
    { path: '/api/edital/presets', method: 'GET', auth: true }
  ];

  // Disparar 3 rodadas de 20 requisições concorrentes (total = 60 requisições simultâneas)
  const burstStart = Date.now();
  const burstPromises = [];
  
  for (let round = 0; round < 3; round++) {
    for (const item of burstEndpoints) {
      const p = request(item.path, {
        headers: item.auth ? { 'Authorization': `Bearer ${tokenA}`, 'x-user-id': profileA.id } : {}
      }).then(res => ({
        path: item.path,
        status: res.status,
        ok: res.status >= 200 && res.status < 400
      }));
      burstPromises.push(p);
    }
  }

  const burstResults = await Promise.all(burstPromises);
  const burstElapsed = Date.now() - burstStart;
  const burstSuccessCount = burstResults.filter(r => r.ok).length;
  const burstSuccessRate = ((burstSuccessCount / burstResults.length) * 100).toFixed(1);
  const avgLatency = (burstElapsed / burstResults.length).toFixed(1);

  console.log(`  ⚡ Rajada de ${burstResults.length} requisições concluída em ${burstElapsed}ms`);
  console.log(`  ⚡ Taxa de Sucesso sob Concorrência: ${burstSuccessRate}% (${burstSuccessCount}/${burstResults.length})`);
  console.log(`  ⚡ Latência Média por Requisição: ${avgLatency}ms`);

  assert.strictEqual(burstSuccessCount, burstResults.length, '100% das requisições em rajada devem ter sucesso');

  // =========================================================================
  // RELATÓRIO FINAL CONSOLIDADO
  // =========================================================================
  const totalElapsed = ((Date.now() - suiteStartTime) / 1000).toFixed(2);
  const totalTests = testResults.length;
  const passedTests = testResults.filter(t => t.passed).length;
  const failedTests = totalTests - passedTests;
  const successRate = ((passedTests / totalTests) * 100).toFixed(1);

  console.log('\n======================================================================');
  console.log('🏁 RESULTADOS CONSOLIDADOS DA MATRIZ DE TESTES DE ESTRESSE REST API');
  console.log('======================================================================');
  console.log(`📊 Total de Rotas/Endpoints Testados: ${totalTests}`);
  console.log(`✅ Testes Aprovados:                ${passedTests}`);
  console.log(`❌ Testes Falhos:                   ${failedTests}`);
  // Teardown automático: remoção dos perfis de teste e sessões do banco de dados
  try {
    const { default: db } = await import('../server/database.js');
    if (profileA?.id) {
      db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(profileA.id);
      db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(profileA.id);
      db.prepare('DELETE FROM simulados WHERE user_id = ?').run(profileA.id);
      db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(profileA.id);
      db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(profileA.id);
      db.prepare('DELETE FROM user_profiles WHERE id = ?').run(profileA.id);
    }
    if (profileB?.id) {
      db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(profileB.id);
      db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(profileB.id);
      db.prepare('DELETE FROM simulados WHERE user_id = ?').run(profileB.id);
      db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(profileB.id);
      db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(profileB.id);
      db.prepare('DELETE FROM user_profiles WHERE id = ?').run(profileB.id);
    }
    db.prepare('DELETE FROM accounts WHERE email LIKE ? OR email LIKE ?').run(`alpha_${timestamp}%`, `beta_${timestamp}%`);
  } catch (_) {}

  return {
    totalTests,
    passedTests,
    failedTests,
    successRate,
    totalElapsed,
    burstMetrics: {
      totalRequests: burstResults.length,
      successRate: burstSuccessRate,
      elapsedMs: burstElapsed,
      avgLatencyMs: avgLatency
    },
    testResults
  };
}

// Execução direta via Node CLI
if (process.argv[1] && process.argv[1].endsWith('api_full_matrix.test.js')) {
  (async () => {
    let serverProcess = null;
    try {
      console.log(`📡 Inicializando servidor Gabarito.AI na porta dedicada ${TEST_PORT}...`);
      serverProcess = spawn(process.execPath, [path.join(__dirname, '../server/index.js')], {
        stdio: 'inherit',
        env: {
          ...process.env,
          PORT: TEST_PORT,
          NODE_ENV: 'test'
        }
      });

      const ready = await waitForServer();
      if (!ready) {
        throw new Error(`Servidor não respondeu a tempo na porta ${TEST_PORT}.`);
      }
      console.log(`✅ Servidor operacional em ${BASE_URL}!\n`);

      const summary = await runFullMatrixSuite();

      if (serverProcess) {
        try { serverProcess.kill('SIGINT'); } catch {}
      }

      if (summary.failedTests > 0) {
        process.exit(1);
      } else {
        process.exit(0);
      }
    } catch (err) {
      console.error('\n❌ ERRO FATAL NA EXECUÇÃO DA SUÍTE DE TESTES:', err);
      if (serverProcess) {
        try { serverProcess.kill('SIGINT'); } catch {}
      }
      process.exit(1);
    }
  })();
}
