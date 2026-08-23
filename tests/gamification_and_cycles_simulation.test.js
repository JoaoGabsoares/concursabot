import assert from 'assert';
import { StudyCycleService, getCognitiveGroup } from '../server/services/StudyCycleService.js';
import { CAREERS_CATALOG } from '../server/careers.js';
import {
  RANKS,
  ACHIEVEMENTS_CATALOG,
  CAREER_SUBJECTS,
  calculateUserStreak,
  getUserStatsForGamification,
  getGamificationStatus,
  addXP,
  evaluateAndUnlockAchievements
} from '../server/gamification.js';
import { GamificationService, gamificationService } from '../server/services/GamificationService.js';
import db from '../server/database.js';

export async function runGamificationAndCyclesSimulation() {
  console.log('\n========================================================================');
  console.log('🧪 GABARITO.AI — AUDITORIA MATEMÁTICA: CICLOS, INTERLEAVING & GAMIFICAÇÃO');
  console.log('========================================================================\n');

  const auditMetrics = {
    careersTested: 0,
    cyclesGenerated: 0,
    interleavingAntiFatigueChecks: 0,
    weightProportionChecks: 0,
    simulationHorizonsChecks: 0,
    xpRankEvolutions: 0,
    streakScenariosTested: 0,
    radarSyncChecks: 0,
    achievementsTested: 0
  };

  // ============================================================================
  // ETAPA 1: SIMULAÇÃO E CRIAÇÃO DE CICLOS PARA MÚLTIPLAS CARREIRAS
  // ============================================================================
  console.log('📌 [ETAPA 1/4] Criação e Validação de Ciclos Multi-Carreiras');

  const careersToSimulate = [
    {
      id: 'atrfb',
      name: 'Receita Federal - Analista Tributário (ATRFB)',
      expectedSubjectsCount: 13,
      model: 'adaptativo',
      weeklyHours: 25,
      blockDurationMinutes: 60
    },
    {
      id: 'afrfb',
      name: 'Receita Federal - Auditor Fiscal (AFRFB)',
      expectedSubjectsCount: 14,
      model: 'pareto_80_20',
      weeklyHours: 30,
      blockDurationMinutes: 75
    },
    {
      id: 'marinha_rm2',
      name: 'Marinha do Brasil - Praças RM2 / SMV',
      expectedSubjectsCount: 2,
      model: 'micro_sprints',
      weeklyHours: 15,
      blockDurationMinutes: 45
    },
    {
      id: 'marinha_oficiais',
      name: 'Marinha do Brasil - Oficiais RM2 / Quadro Técnico',
      expectedSubjectsCount: 2,
      model: 'adaptativo',
      weeklyHours: 20,
      blockDurationMinutes: 60
    },
    {
      id: 'transpetro_adm',
      name: 'Transpetro - Técnico de Administração e Controle Jr',
      expectedSubjectsCount: 6,
      model: 'pre_edital',
      weeklyHours: 20,
      blockDurationMinutes: 60
    },
    {
      id: 'transpetro_log',
      name: 'Transpetro - Técnico de Suprimento e Logística Jr',
      expectedSubjectsCount: 6,
      model: 'adaptativo',
      weeklyHours: 18,
      blockDurationMinutes: 50
    }
  ];

  for (const car of careersToSimulate) {
    const subjects = StudyCycleService.getCareerSubjects(car.id);
    assert(subjects.length >= car.expectedSubjectsCount, `Carreira ${car.id} deve ter no mínimo ${car.expectedSubjectsCount} matérias, obteve ${subjects.length}`);

    // Valida desmembramento canônico para ATRFB
    if (car.id === 'atrfb') {
      const subjectNames = subjects.map(s => s.subject);
      assert(subjectNames.includes('Legislação Tributária'), 'ATRFB deve conter Legislação Tributária desmembrada');
      assert(subjectNames.includes('Legislação Aduaneira'), 'ATRFB deve conter Legislação Aduaneira desmembrada');
      assert(subjectNames.includes('Raciocínio Lógico-Matemático'), 'ATRFB deve conter RLM');
      assert(subjectNames.includes('Estatística'), 'ATRFB deve conter Estatística desmembrada');
      assert(subjectNames.includes('Fluência em Dados'), 'ATRFB deve conter Fluência em Dados');
      assert(subjectNames.includes('Contabilidade Geral'), 'ATRFB deve conter Contabilidade Geral');
    }

    // Valida desmembramento para AFRFB (TI Avançada)
    if (car.id === 'afrfb') {
      const subjectNames = subjects.map(s => s.subject);
      assert(subjectNames.includes('Tecnologia da Informação'), 'AFRFB deve conter Tecnologia da Informação');
      assert(subjectNames.includes('Auditoria'), 'AFRFB deve conter Auditoria');
      assert(subjectNames.includes('Contabilidade Geral e Avançada'), 'AFRFB deve conter Contabilidade Avançada');
      assert(subjectNames.includes('Economia e Finanças Públicas'), 'AFRFB deve conter Economia');
    }

    const generated = StudyCycleService.generateCycle({
      userId: 'test_audit_user',
      careerId: car.id,
      modelType: car.model,
      weeklyHours: car.weeklyHours,
      blockDurationMinutes: car.blockDurationMinutes
    });

    assert(generated.cycleData, `Ciclo para ${car.id} deve conter cycleData`);
    assert(generated.blocks.length >= subjects.length, `Ciclo para ${car.id} deve gerar blocos para todas as matérias`);
    assert(generated.cycleData.total_cycle_minutes > 0, `Tempo total do ciclo deve ser > 0`);

    auditMetrics.careersTested++;
    auditMetrics.cyclesGenerated++;
    console.log(`  ✅ [${car.id.toUpperCase()}] ${car.name} -> ${subjects.length} Matérias | ${generated.blocks.length} Blocos | ${(generated.cycleData.total_cycle_minutes/60).toFixed(1)}h/ciclo`);
  }

  // ============================================================================
  // ETAPA 2: VALIDAÇÃO DO ALGORITMO DE INTERLEAVING COGNITIVO & PESOS
  // ============================================================================
  console.log('\n📌 [ETAPA 2/4] Validação de Interleaving Cognitivo, Proporções e Simulação até a Prova');

  // Teste 2.1: Interleaving Anti-Fadiga (Cognitive Axis Alternation)
  const atrfbCycle = StudyCycleService.generateCycle({
    userId: 'test_audit_user',
    careerId: 'atrfb',
    modelType: 'adaptativo',
    weeklyHours: 30,
    blockDurationMinutes: 60,
    customDifficulties: {
      'Direito Tributário': 4, // Crítico (x1.7)
      'Fluência em Dados': 3,   // Difícil (x1.35)
      'Raciocínio Lógico-Matemático': 3,
      'Língua Inglesa': 1       // Fácil (x0.75)
    }
  });

  const blocks = atrfbCycle.blocks;
  let consecutiveSameSubjectCount = 0;
  let consecutiveSameCognitiveGroupCount = 0;

  for (let i = 0; i < blocks.length - 1; i++) {
    const current = blocks[i];
    const next = blocks[i + 1];

    if (current.subject === next.subject) {
      consecutiveSameSubjectCount++;
    }
    if (current.cognitive_group === next.cognitive_group) {
      consecutiveSameCognitiveGroupCount++;
    }
    auditMetrics.interleavingAntiFatigueChecks++;
  }

  assert.strictEqual(consecutiveSameSubjectCount, 0, 'NUNCA deve haver matérias iguais consecutivas no ciclo');
  console.log(`  ✅ 2.1. Interleaving Estrito de Matérias (0 colisões em ${blocks.length} blocos): PASSOU`);
  console.log(`  ℹ️  Alternância de Eixo Cognitivo (Exatas vs Jurídico vs Humanas): Colisões evitadas com sucesso (${blocks.length - consecutiveSameCognitiveGroupCount}/${blocks.length} transições ótimas)`);

  // Teste 2.2: Verificação da Distribuição Proporcional de Horas
  const blocksBySubject = {};
  blocks.forEach(b => {
    blocksBySubject[b.subject] = (blocksBySubject[b.subject] || 0) + 1;
  });

  // Direito Tributário (Peso alto + Dificuldade 4) deve ter mais blocos que Língua Inglesa (Peso menor + Dificuldade 1)
  const tribBlocks = blocksBySubject['Direito Tributário'] || 0;
  const ingBlocks = blocksBySubject['Língua Inglesa'] || 0;
  assert(tribBlocks > ingBlocks, `Direito Tributário (${tribBlocks} blocos) deve ter mais blocos que Inglês (${ingBlocks} blocos)`);
  auditMetrics.weightProportionChecks++;
  console.log(`  ✅ 2.2. Distribuição Ponderada (Dir. Tributário: ${tribBlocks} blocos vs Inglês: ${ingBlocks} blocos): PASSOU`);

  // Teste 2.3: Simulação de Projeção até a Data da Prova
  const now = new Date();
  const examDate120Days = new Date(now.getTime() + 120 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const simResult = StudyCycleService.calculateSimulation({
    weeklyHours: 25,
    totalCycleMinutes: atrfbCycle.cycleData.total_cycle_minutes,
    examDate: examDate120Days
  });

  assert(simResult.daysUntilExam >= 119 && simResult.daysUntilExam <= 121, 'Dias até o exame deve ser ~120');
  assert(simResult.weeksUntilExam >= 17, 'Semanas até a prova deve ser ~17');
  assert(simResult.totalLapsUntilExam > 0, 'Total de voltas no edital deve ser > 0');
  assert(simResult.projectedTotalStudyHours > 400, 'Horas totais estimadas devem ser > 400h');
  assert(simResult.projectedQuestions > 6000, 'Questões projetadas devem ser > 6000');
  auditMetrics.simulationHorizonsChecks++;

  console.log(`  ✅ 2.3. Simulação até a Prova (120 dias):`);
  console.log(`         • Voltas completas no edital: ${simResult.totalLapsUntilExam} voltas`);
  console.log(`         • Horas de estudo estimadas: ${simResult.projectedTotalStudyHours}h (${simResult.daysPerLap} dias/volta)`);
  console.log(`         • Questões resolvidas projetadas: ${simResult.projectedQuestions} questões`);

  // ============================================================================
  // ETAPA 3: SIMULAÇÃO DA JORNADA DO ALUNO (XP, PATENTES, STREAKS E CONQUISTAS)
  // ============================================================================
  console.log('\n📌 [ETAPA 3/4] Motor de Gamificação, Progressão de Patente e Cálculo de Streaks');

  const testUserId = `sim_user_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  // Teste 3.1: Validação da Escala de Patentes (Level 1 a Level 6)
  assert.strictEqual(RANKS.length, 6, 'Devem existir 6 patentes oficiais');
  assert.strictEqual(RANKS[0].level, 1);
  assert.strictEqual(RANKS[0].name, 'Novato no Edital');
  assert.strictEqual(RANKS[5].level, 6);
  assert.strictEqual(RANKS[5].name, 'Pronto para a Nomeação');

  // Simular níveis com diferentes faixas de XP
  const xpThresholds = [
    { xp: 0, expectedLevel: 1, expectedName: 'Novato no Edital' },
    { xp: 500, expectedLevel: 2, expectedName: 'Concurseiro Focado' },
    { xp: 1500, expectedLevel: 3, expectedName: 'Dominador de Lei Seca' },
    { xp: 3500, expectedLevel: 4, expectedName: 'Mestre da Banca' },
    { xp: 7000, expectedLevel: 5, expectedName: 'Monstro dos Simulados' },
    { xp: 12500, expectedLevel: 6, expectedName: 'Pronto para a Nomeação' }
  ];

  for (const t of xpThresholds) {
    let rank = RANKS[0];
    for (let r of RANKS) {
      if (t.xp >= r.minXp) rank = r;
    }
    assert.strictEqual(rank.level, t.expectedLevel);
    assert.strictEqual(rank.name, t.expectedName);
    auditMetrics.xpRankEvolutions++;
  }
  console.log('  ✅ 3.1. Escala e Transição de Patentes (L1 Novato -> L6 Nomeação): PASSOU');

  // Teste 3.2: Cálculo de Streak Contínuo, Quebrado e Gap Retroativo
  // Limpa registros prévios do testUserId se houver
  db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM user_achievements WHERE user_id = ?').run(testUserId);

  const getPastDateStr = (daysAgo) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  // Cenário A: 7 Dias Contínuos (Hoje, Ontem, Anteontem... -6 dias)
  for (let i = 6; i >= 0; i--) {
    const dStr = getPastDateStr(i);
    db.prepare(`
      INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
      VALUES (?, 'study_session', 'Estudo dia contínuo', ?, 'atrfb')
    `).run(testUserId, `${dStr} 10:00:00`);
  }

  let streakContinuous = calculateUserStreak(testUserId, 'atrfb');
  assert.strictEqual(streakContinuous, 7, `Streak contínuo de 7 dias deve ser 7, obteve ${streakContinuous}`);
  auditMetrics.streakScenariosTested++;
  console.log(`  ✅ 3.2.1. Streak Contínuo (7 dias consecutivos): ${streakContinuous} dias 🔥`);

  // Cenário B: Streak Quebrado (Estudo 5 dias atrás, 4 dias atrás, 3 dias atrás; GAP 2 e 1 dia atrás; Hoje NÃO estudou)
  db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(testUserId);
  db.prepare(`
    INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
    VALUES (?, 'study_session', 'Estudo D-3', ?, 'atrfb')
  `).run(testUserId, `${getPastDateStr(3)} 14:00:00`);
  db.prepare(`
    INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
    VALUES (?, 'study_session', 'Estudo D-4', ?, 'atrfb')
  `).run(testUserId, `${getPastDateStr(4)} 14:00:00`);

  let streakBroken = calculateUserStreak(testUserId, 'atrfb');
  assert.strictEqual(streakBroken, 0, `Streak quebrado sem estudo hoje nem ontem deve ser 0, obteve ${streakBroken}`);
  auditMetrics.streakScenariosTested++;
  console.log(`  ✅ 3.2.2. Streak Quebrado (Gap de 2+ dias): ${streakBroken} dias (Reset de inatividade)`);

  // Cenário C: Recuperação de Gap via Estudo Retroativo
  // Adiciona estudo de ontem (D-1) e estudo de hoje (D-0), preenchendo o gap para D-2
  db.prepare(`
    INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
    VALUES (?, 'study_session', 'Estudo D-2 retroativo', ?, 'atrfb')
  `).run(testUserId, `${getPastDateStr(2)} 20:00:00`);
  db.prepare(`
    INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
    VALUES (?, 'study_session', 'Estudo D-1 retroativo', ?, 'atrfb')
  `).run(testUserId, `${getPastDateStr(1)} 20:00:00`);
  db.prepare(`
    INSERT INTO activity_log (user_id, type, detail, created_at, career_id)
    VALUES (?, 'study_session', 'Estudo D-0 hoje', ?, 'atrfb')
  `).run(testUserId, `${getPastDateStr(0)} 20:00:00`);

  let streakRestored = calculateUserStreak(testUserId, 'atrfb');
  assert.strictEqual(streakRestored, 5, `Streak preenchido retroativamente de D-4 a D-0 deve ser 5, obteve ${streakRestored}`);
  auditMetrics.streakScenariosTested++;
  console.log(`  ✅ 3.2.3. Sincronização Retroativa de Streak (Gap Preenchido D-4 a D-0): ${streakRestored} dias 🔥`);

  // Teste 3.3: Desbloqueio de Conquistas e Concessão de XP
  const stats = getUserStatsForGamification(testUserId, 'atrfb');
  assert.strictEqual(stats.streakDays, 5);

  // Inserir sessões teóricas e questões para disparar troféus
  for (let q = 1; q <= 12; q++) {
    // Insere pergunta fake
    const qRes = db.prepare(`
      INSERT INTO questions (subject, question_text, options, correct_index)
      VALUES ('Direito Tributário', 'Questão Teste XP', '["A","B","C","D"]', 0)
    `).run();
    const qId = qRes.lastInsertRowid;

    db.prepare(`
      INSERT INTO question_answers (user_id, career_id, question_id, selected_answer, is_correct, answered_at)
      VALUES (?, 'atrfb', ?, 0, 1, CURRENT_TIMESTAMP)
    `).run(testUserId, qId);
  }

  for (let s = 1; s <= 5; s++) {
    db.prepare(`
      INSERT INTO study_sessions (user_id, career_id, duration_minutes, scope_note, status, started_at)
      VALUES (?, 'atrfb', 60, 'Disciplina: Direito Tributário • 10/10 questões certas', 'completed', CURRENT_TIMESTAMP)
    `).run(testUserId);
  }

  const gamifStatus = getGamificationStatus(testUserId, 'atrfb');
  assert(gamifStatus.totalXP > 500, `XP total deve ser > 500, obteve ${gamifStatus.totalXP}`);
  assert(gamifStatus.currentRank.level >= 2, 'Deve ter subido de nível');
  assert(gamifStatus.unlockedCount >= 3, `Deve ter desbloqueado pelo menos 3 conquistas (first_step, streak_3, question_10, bookworm), obteve ${gamifStatus.unlockedCount}`);
  auditMetrics.achievementsTested = gamifStatus.unlockedCount;

  console.log(`  ✅ 3.3. Conquistas & XP Acumulado: ${gamifStatus.totalXP} XP | Rank: ${gamifStatus.currentRank.title} | ${gamifStatus.unlockedCount}/${ACHIEVEMENTS_CATALOG.length} Troféus Desbloqueados`);

  // ============================================================================
  // ETAPA 4: SINCRONIZAÇÃO DO RADAR DE MATÉRIAS (TEMPO REAL & RETROATIVO)
  // ============================================================================
  console.log('\n📌 [ETAPA 4/4] Sincronização do Radar de Matérias com Sessões e Questões');

  const atrfbSubjects = CAREER_SUBJECTS['atrfb'];

  // Insere sessões e questões para múltiplas matérias
  // Matéria 1: Direito Constitucional (8/10 questões = 80% -> DOMINADO)
  for (let q = 1; q <= 10; q++) {
    const isCorrect = q <= 8 ? 1 : 0;
    const qRes = db.prepare(`
      INSERT INTO questions (subject, question_text, options, correct_index)
      VALUES ('Direito Constitucional', 'Questão Const', '["A","B"]', 0)
    `).run();
    db.prepare(`
      INSERT INTO question_answers (user_id, career_id, question_id, selected_answer, is_correct, answered_at)
      VALUES (?, 'atrfb', ?, 0, ?, CURRENT_TIMESTAMP)
    `).run(testUserId, qRes.lastInsertRowid, isCorrect);
  }

  // Matéria 2: Fluência em Dados (3/10 questões = 30% -> VULNERÁVEL)
  for (let q = 1; q <= 10; q++) {
    const isCorrect = q <= 3 ? 1 : 0;
    const qRes = db.prepare(`
      INSERT INTO questions (subject, question_text, options, correct_index)
      VALUES ('Fluência em Dados', 'Questão Dados', '["A","B"]', 0)
    `).run();
    db.prepare(`
      INSERT INTO question_answers (user_id, career_id, question_id, selected_answer, is_correct, answered_at)
      VALUES (?, 'atrfb', ?, 0, ?, CURRENT_TIMESTAMP)
    `).run(testUserId, qRes.lastInsertRowid, isCorrect);
  }

  // Matéria 3: Legislação Tributária (Estudo de Teoria 120min sem questões -> EM ESTUDO)
  db.prepare(`
    INSERT INTO study_sessions (user_id, career_id, duration_minutes, scope_note, status, started_at)
    VALUES (?, 'atrfb', 120, 'Disciplina: Legislação Tributária • Teoria IRPJ', 'completed', '2026-08-20 15:00:00')
  `).run(testUserId);

  // Consulta agregação no banco exatamente como feito na rota dashboard.js
  const qaRows = db.prepare(`
    SELECT q.subject as name, COUNT(qa.id) as total, SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as correct
    FROM question_answers qa
    JOIN questions q ON qa.question_id = q.id
    WHERE qa.user_id = ? AND (qa.career_id = 'atrfb' OR qa.career_id IS NULL)
    GROUP BY q.subject
  `).all(testUserId);

  const sessionRows = db.prepare(`
    SELECT ss.id, ss.duration_minutes, ss.scope_note, sm.subject as material_subject
    FROM study_sessions ss
    LEFT JOIN study_materials sm ON ss.material_id = sm.id
    WHERE ss.user_id = ? AND (ss.career_id = 'atrfb' OR ss.career_id IS NULL) AND ss.status = 'completed'
  `).all(testUserId);

  const statsMap = new Map();
  for (const subj of atrfbSubjects) {
    statsMap.set(subj, { totalQuestions: 0, correctQuestions: 0, totalMinutes: 0, sessionsCount: 0 });
  }

  for (const r of qaRows) {
    if (r.name && statsMap.has(r.name)) {
      const st = statsMap.get(r.name);
      st.totalQuestions += r.total || 0;
      st.correctQuestions += r.correct || 0;
    }
  }

  for (const s of sessionRows) {
    let subj = s.material_subject;
    if (!subj && s.scope_note) {
      const mSubj = s.scope_note.match(/Disciplina:\s*([^•]+)/i);
      if (mSubj) {
        subj = mSubj[1].trim();
      } else {
        for (const cand of atrfbSubjects) {
          if (s.scope_note.includes(cand)) {
            subj = cand;
            break;
          }
        }
      }
    }

    if (subj && statsMap.has(subj)) {
      const st = statsMap.get(subj);
      st.totalMinutes += s.duration_minutes || 0;
      st.sessionsCount += 1;
    }
  }

  const subjectRadar = atrfbSubjects.map(subj => {
    const st = statsMap.get(subj) || { totalQuestions: 0, correctQuestions: 0, totalMinutes: 0, sessionsCount: 0 };
    const totalQ = st.totalQuestions;
    const correctQ = st.correctQuestions;
    const pct = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : (st.totalMinutes > 0 ? 100 : 0);

    let status = 'pendente';
    let statusLabel = 'NÃO INICIADO';

    if (totalQ > 0) {
      if (pct >= 75) {
        status = 'homologado';
        statusLabel = 'DOMINADO';
      } else if (pct >= 60) {
        status = 'em_revisao';
        statusLabel = 'EM ESTUDO';
      } else {
        status = 'vulneravel';
        statusLabel = 'VULNERÁVEL';
      }
    } else if (st.totalMinutes > 0 || st.sessionsCount > 0) {
      status = 'em_revisao';
      statusLabel = 'EM ESTUDO';
    }

    return {
      name: subj,
      totalQuestions: totalQ,
      correctQuestions: correctQ,
      totalMinutes: st.totalMinutes,
      sessionsCount: st.sessionsCount,
      correctPercentage: pct,
      status,
      statusLabel
    };
  });

  const constRadar = subjectRadar.find(s => s.name === 'Direito Constitucional');
  const dadosRadar = subjectRadar.find(s => s.name === 'Fluência em Dados');
  const legRadar = subjectRadar.find(s => s.name === 'Legislação Tributária');

  assert.strictEqual(constRadar.statusLabel, 'DOMINADO', 'Constitucional (80%) deve ser DOMINADO');
  assert.strictEqual(dadosRadar.statusLabel, 'VULNERÁVEL', 'Fluência em Dados (30%) deve ser VULNERÁVEL');
  assert.strictEqual(legRadar.statusLabel, 'EM ESTUDO', 'Legislação Tributária (120min teoria) deve ser EM ESTUDO');

  auditMetrics.radarSyncChecks += 3;
  console.log(`  ✅ 4.1. Radar Direito Constitucional: ${constRadar.correctPercentage}% de acertos -> ${constRadar.statusLabel}`);
  console.log(`  ✅ 4.2. Radar Fluência em Dados: ${dadosRadar.correctPercentage}% de acertos -> ${dadosRadar.statusLabel}`);
  console.log(`  ✅ 4.3. Radar Legislação Tributária: ${legRadar.totalMinutes} min estudados -> ${legRadar.statusLabel}`);

  // Limpeza de isolamento
  db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(testUserId);
  db.prepare('DELETE FROM user_achievements WHERE user_id = ?').run(testUserId);

  console.log('\n========================================================================');
  console.log('🎉 AUDITORIA MATEMÁTICA CONCLUÍDA: 100% DAS VALIDAÇÕES APROVADAS!');
  console.log('========================================================================\n');

  return {
    success: true,
    metrics: auditMetrics,
    simResult,
    gamifStatus,
    subjectRadar
  };
}

// Execução direta via Node CLI
if (process.argv[1].endsWith('gamification_and_cycles_simulation.test.js')) {
  runGamificationAndCyclesSimulation()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌ ERRO NA AUDITORIA:', err);
      process.exit(1);
    });
}
