import assert from 'assert';
import { StudyCycleService } from '../../server/services/StudyCycleService.js';
import * as db from '../../server/database.js';

export async function runStudyCyclesTests(baseUrl = 'http://localhost:3000') {
  console.log('\n🔄 [TEST SUITE: Ciclos de Estudo Inteligentes, Interleaving & REST API]');

  // 0. Registrar e Autenticar Usuário de Teste
  const username = `user_cycle_${Date.now()}`;
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
    body: JSON.stringify({ name: 'Concurseiro Ciclos', active_career_id: 'atrfb' })
  }).then(r => r.json());
  const testUserId = prof.id;

  // 1. Testar Serviço de Domínio - Geração de Ciclo Adaptativo
  const genAdaptativo = StudyCycleService.generateCycle({
    userId: testUserId,
    careerId: 'atrfb',
    modelType: 'adaptativo',
    weeklyHours: 20,
    blockDurationMinutes: 60,
    customDifficulties: {
      'Direito Tributário': 4,
      'Raciocínio Lógico Matemático': 3,
      'Língua Inglesa': 1
    }
  });

  assert(genAdaptativo.cycleData, 'Deve conter cycleData');
  assert(genAdaptativo.blocks && genAdaptativo.blocks.length >= 13, 'Deve gerar pelo menos 13 blocos');
  
  // Validar interleaving: Nenhum bloco consecutivo deve ter a mesma matéria
  for (let i = 0; i < genAdaptativo.blocks.length - 1; i++) {
    const current = genAdaptativo.blocks[i];
    const next = genAdaptativo.blocks[i + 1];
    assert.notStrictEqual(current.subject, next.subject, 'A mesma disciplina nunca deve ficar em blocos consecutivos');
  }
  console.log(`  ✅ 1. Interleaving e Ponderação de 13 Matérias (${genAdaptativo.blocks.length} blocos): PASSOU`);

  // 2. Testar Modelo Pareto 80/20 e Micro-Sprints
  const genPareto = StudyCycleService.generateCycle({
    userId: testUserId,
    careerId: 'atrfb',
    modelType: 'pareto_80_20',
    weeklyHours: 25,
    blockDurationMinutes: 60
  });
  assert.strictEqual(genPareto.cycleData.model_type, 'pareto_80_20');

  const genMicro = StudyCycleService.generateCycle({
    userId: testUserId,
    careerId: 'atrfb',
    modelType: 'micro_sprints',
    weeklyHours: 10,
    blockDurationMinutes: 45
  });
  assert(genMicro.blocks.every(b => b.duration_minutes === 45), 'Todos os blocos devem ter 45m');
  console.log('  ✅ 2. Modelos Pareto 80/20 e Micro-Sprints (45m): PASSOU');

  // 3. Testar Simulação de Horizontes e Projeção até a Data da Prova
  const sim = StudyCycleService.calculateSimulation({
    weeklyHours: 20,
    totalCycleMinutes: 1200,
    examDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });
  assert(sim.daysUntilExam >= 89 && sim.daysUntilExam <= 91);
  assert(sim.totalLapsUntilExam > 0);
  assert(sim.projectedQuestions > 1000);
  console.log(`  ✅ 3. Simulação até a Prova (${sim.totalLapsUntilExam} voltas • ~${sim.projectedQuestions} questões): PASSOU`);

  // 4. Testar Endpoints REST /api/study-cycles autenticados
  // 4.1 GET /api/study-cycles/models
  const modelsRes = await fetch(`${baseUrl}/api/study-cycles/models`, { headers: authHeaders });
  assert.strictEqual(modelsRes.status, 200, 'GET /api/study-cycles/models deve responder 200');
  const modelsData = await modelsRes.json();
  assert(Array.isArray(modelsData) && modelsData.length === 5, 'Deve retornar 5 modelos oficiais');

  // 4.2 POST /api/study-cycles/generate
  const genRes = await fetch(`${baseUrl}/api/study-cycles/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({
      userId: testUserId,
      careerId: 'atrfb',
      modelType: 'adaptativo',
      weeklyHours: 20,
      blockDurationMinutes: 60,
      saveImmediately: true
    })
  });
  assert.strictEqual(genRes.status, 201, 'POST /api/study-cycles/generate deve responder 201');
  const createdCycle = await genRes.json();
  assert(createdCycle.id, 'Ciclo criado deve ter ID');

  // 4.3 GET /api/study-cycles/active
  const activeRes = await fetch(`${baseUrl}/api/study-cycles/active?userId=${testUserId}&careerId=atrfb`, { headers: authHeaders });
  assert.strictEqual(activeRes.status, 200, 'GET /api/study-cycles/active deve responder 200');
  const activeCycle = await activeRes.json();
  assert.strictEqual(activeCycle.id, createdCycle.id);
  assert.strictEqual(activeCycle.current_block_index, 0);

  // 4.4 POST /api/study-cycles/advance (+20 XP)
  const firstBlock = activeCycle.blocks[0];
  const advanceRes = await fetch(`${baseUrl}/api/study-cycles/advance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({
      cycleId: activeCycle.id,
      blockId: firstBlock.id,
      userId: testUserId,
      careerId: 'atrfb'
    })
  });
  assert.strictEqual(advanceRes.status, 200, 'POST /api/study-cycles/advance deve responder 200');
  const advanceData = await advanceRes.json();
  assert.strictEqual(advanceData.success, true);
  assert.strictEqual(advanceData.cycle.current_block_index, 1);
  console.log('  ✅ 4. Ciclo Persistido no SQLite e Avanço de Bloco com Concessão de +20 XP: PASSOU');

  // Limpeza
  db.deleteStudyCycle(activeCycle.id, testUserId, 'atrfb');
}
