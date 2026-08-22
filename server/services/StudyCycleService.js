import { CAREERS_CATALOG } from '../careers.js';

// Mapeamento Canônico de Grupos Cognitivos para Interleaving Anti-Fadiga
const COGNITIVE_GROUP_MAP = {
  // 1. Exatas, Lógica, Tecnologia e Dados (Processamento Lógico-Matemático)
  'raciocínio lógico-matemático': 'exatas_dados',
  'raciocinio logico-matematico': 'exatas_dados',
  'raciocínio lógico matemático': 'exatas_dados',
  'raciocinio logico matematico': 'exatas_dados',
  'raciocínio lógico': 'exatas_dados',
  'raciocinio logico': 'exatas_dados',
  'rlm': 'exatas_dados',
  'estatística': 'exatas_dados',
  'estatistica': 'exatas_dados',
  'fluência de dados': 'exatas_dados',
  'fluencia de dados': 'exatas_dados',
  'fluência em dados': 'exatas_dados',
  'fluencia em dados': 'exatas_dados',
  'contabilidade geral': 'exatas_dados',
  'contabilidade': 'exatas_dados',
  'matemática': 'exatas_dados',
  'matematica': 'exatas_dados',
  'matemática financeira': 'exatas_dados',
  'tecnologia da informação': 'exatas_dados',
  'engenharia de software': 'exatas_dados',
  'gestão de estoques': 'exatas_dados',
  'gestão de estoques e almoxarifado': 'exatas_dados',

  // 2. Jurídico, Normas, Regulamentos e Leis (Memória Declarativa & Hermenêutica)
  'direito tributário': 'juridico',
  'direito tributario': 'juridico',
  'direito constitucional': 'juridico',
  'direito administrativo': 'juridico',
  'direito previdenciário': 'juridico',
  'direito previdenciario': 'juridico',
  'legislação tributária': 'juridico',
  'legislacao tributaria': 'juridico',
  'legislação aduaneira': 'juridico',
  'legislacao aduaneira': 'juridico',
  'legislação do sus': 'juridico',
  'legislacao do sus': 'juridico',
  'formação militar-naval': 'juridico',
  'formacao militar-naval': 'juridico',
  'lei das estatais (lei 13.303/16)': 'juridico',
  'lei das estatais': 'juridico',
  'auditoria fiscal': 'juridico',
  'comércio internacional': 'juridico',
  'comercio internacional': 'juridico',

  // 3. Humanas, Linguagens, Gestão e Redação (Processamento Verbal & Síntese Conceitual)
  'língua portuguesa': 'humanas_linguagens',
  'lingua portuguesa': 'humanas_linguagens',
  'português': 'humanas_linguagens',
  'portugues': 'humanas_linguagens',
  'língua inglesa': 'humanas_linguagens',
  'lingua inglesa': 'humanas_linguagens',
  'inglês': 'humanas_linguagens',
  'ingles': 'humanas_linguagens',
  'administração geral e pública': 'humanas_linguagens',
  'administracao geral e publica': 'humanas_linguagens',
  'administração geral (podc)': 'humanas_linguagens',
  'administração pública': 'humanas_linguagens',
  'técnicas de arquivo': 'humanas_linguagens',
  'tecnicas de arquivo': 'humanas_linguagens',
  'atendimento bancário': 'humanas_linguagens',
  'vendas e negociação': 'humanas_linguagens',
  'conhecimentos bancários': 'humanas_linguagens',
  'ética e integridade pública': 'humanas_linguagens',
  'ética': 'humanas_linguagens',
  'redação discursiva': 'humanas_linguagens',
  'redação': 'humanas_linguagens',
  'modais de transporte': 'humanas_linguagens'
};

export function getCognitiveGroup(subjectName = '') {
  const norm = (subjectName || '').toLowerCase().trim();
  for (const [key, group] of Object.entries(COGNITIVE_GROUP_MAP)) {
    if (norm.includes(key) || key.includes(norm)) {
      return group;
    }
  }
  if (norm.includes('direito') || norm.includes('lei') || norm.includes('estatuto') || norm.includes('código')) {
    return 'juridico';
  }
  if (norm.includes('matemática') || norm.includes('lógica') || norm.includes('dados') || norm.includes('sql') || norm.includes('cálculo')) {
    return 'exatas_dados';
  }
  return 'humanas_linguagens';
}

export class StudyCycleService {

  /**
   * Catálogo Oficial de Modelos de Ciclo de Estudos
   */
  static getCycleModels() {
    return [
      {
        id: 'adaptativo',
        name: 'Ciclo Adaptativo Inteligente (Recomendado)',
        tag: 'Balanceamento Dinâmico',
        description: 'Cruza a pontuação do edital oficial com seu nível de dificuldade pessoal em cada matéria, calculando a proporção ideal de blocos para maximizar sua nota.',
        idealFor: 'Estudantes que querem um cronograma equilibrado que se adapta ao seu ritmo real de aprendizado.',
        recommendedBlockMin: 60
      },
      {
        id: 'pareto_80_20',
        name: 'Ciclo Pareto 80/20 (Reta Final & Alto Rendimento)',
        tag: 'Foco no Núcleo Duro',
        description: 'Concentra 75% a 80% do tempo nas matérias vitais que decidem 70%+ dos pontos da prova e da discursiva, deixando blocos ágeis para manutenção das demais.',
        idealFor: 'Reta final pós-edital ou concurseiros que precisam priorizar matérias de peso eliminatório.',
        recommendedBlockMin: 75
      },
      {
        id: 'pre_edital',
        name: 'Ciclo Base Pré-Edital (Construção por Ondas)',
        tag: 'Fundação Estrutural',
        description: 'Prioriza a Onda 1 (disciplinas estruturais de maior curva de absorção) antes de diluir a carga horária nas disciplinas periféricas.',
        idealFor: 'Fase pré-edital de médio/longo prazo para dominar a espinha dorsal do concurso.',
        recommendedBlockMin: 60
      },
      {
        id: 'data_prova',
        name: 'Ciclo Sprint com Data da Prova (Contagem Regressiva)',
        tag: 'Projeção Temporal Exata',
        description: 'Calcula matematicamente quantas voltas completas no ciclo você dará até o domingo da prova e programa checkpoints periódicos de simulados e cadernos de erros.',
        idealFor: 'Concursos com edital publicado e data de prova definida.',
        recommendedBlockMin: 60
      },
      {
        id: 'micro_sprints',
        name: 'Ciclo Micro-Sprints (Disponibilidade Reduzida: 1h-2h/dia)',
        tag: 'Alta Densidade',
        description: 'Blocos ágeis de 40 a 45 minutos com foco total em resolução ativa de questões e teoria enxuta para concurseiros que trabalham em período integral.',
        idealFor: 'Concurseiros com rotina pesada (1h a 2h30min disponíveis por dia).',
        recommendedBlockMin: 45
      }
    ];
  }

  /**
   * Obtém lista de disciplinas canônicas para uma carreira
   */
  static getCareerSubjects(careerId) {
    const catalog = CAREERS_CATALOG[careerId] || CAREERS_CATALOG['atrfb'];
    if (!catalog || !catalog.subjects) return [];

    return catalog.subjects.map(s => {
      const questionsCount = s.questions || 10;
      const totalQuestions = catalog.totalQuestions || 100;
      const weightPercentage = totalQuestions > 0 ? (questionsCount / totalQuestions) * 100 : 10;

      return {
        subject: s.subject,
        wave: s.wave || 1,
        questions: questionsCount,
        weightPercentage: Number(weightPercentage.toFixed(1)),
        cognitiveGroup: getCognitiveGroup(s.subject),
        description: s.description || ''
      };
    });
  }

  /**
   * Gera um ciclo de estudos ponderado e com interleaving anti-fadiga
   */
  static generateCycle(params) {
    const {
      userId = 'user_joao',
      careerId = 'atrfb',
      modelType = 'adaptativo',
      weeklyHours = 20,
      blockDurationMinutes = 60,
      examDate = null,
      customDifficulties = {},
      cycleName = null
    } = params;

    const subjects = this.getCareerSubjects(careerId);
    if (!subjects || subjects.length === 0) {
      throw new Error(`Nenhuma disciplina encontrada para a carreira ${careerId}`);
    }

    const totalWeeklyMinutes = Math.max(300, Math.min(3600, weeklyHours * 60)); // 5h a 60h semanais
    const blockMin = Math.max(30, Math.min(120, blockDurationMinutes));

    // 1. Calcular Pontuação Ponderada de Cada Matéria
    const weightedSubjects = subjects.map(s => {
      let difficultyMultiplier = 1.0;
      const diffLevel = customDifficulties[s.subject] !== undefined ? customDifficulties[s.subject] : 2;

      // Escala de Dificuldade: 1 (Fácil: x0.75) -> 2 (Médio: x1.0) -> 3 (Difícil: x1.35) -> 4 (Crítico/Zero: x1.7)
      if (diffLevel === 1) difficultyMultiplier = 0.75;
      else if (diffLevel === 2) difficultyMultiplier = 1.0;
      else if (diffLevel === 3) difficultyMultiplier = 1.35;
      else if (diffLevel === 4) difficultyMultiplier = 1.7;

      let modelMultiplier = 1.0;

      if (modelType === 'pareto_80_20') {
        modelMultiplier = s.weightPercentage >= 9.0 ? 1.8 : 0.5;
      } else if (modelType === 'pre_edital') {
        modelMultiplier = s.wave === 1 ? 1.6 : 0.7;
      } else if (modelType === 'micro_sprints') {
        modelMultiplier = 1.0;
      }

      const compositeScore = s.weightPercentage * difficultyMultiplier * modelMultiplier;

      return {
        ...s,
        difficultyLevel: diffLevel,
        compositeScore: Math.max(1, compositeScore)
      };
    });

    const totalScoreSum = weightedSubjects.reduce((acc, curr) => acc + curr.compositeScore, 0);

    // 2. Distribuir Minutos e Calcular Quantidade de Blocos por Matéria
    let rawBlocks = [];

    weightedSubjects.forEach(s => {
      const subjectMinutes = (s.compositeScore / totalScoreSum) * totalWeeklyMinutes;
      let blocksCount = Math.max(1, Math.round(subjectMinutes / blockMin));

      if (modelType === 'pareto_80_20' && s.weightPercentage < 7.0 && blocksCount > 1) {
        blocksCount = 1;
      }

      for (let i = 0; i < blocksCount; i++) {
        rawBlocks.push({
          subject: s.subject,
          duration_minutes: blockMin,
          cognitive_group: s.cognitiveGroup,
          weight_score: Number(s.compositeScore.toFixed(2)),
          difficulty_level: s.difficultyLevel,
          status: 'pending'
        });
      }
    });

    // 3. Algoritmo de Interleaving Anti-Fadiga Cognitiva (Ordenação Alternada)
    const interleavedBlocks = this.interleaveBlocks(rawBlocks);

    const totalCycleMinutes = interleavedBlocks.reduce((sum, b) => sum + b.duration_minutes, 0);

    // 4. Projeção e Simulação até a Prova
    const simulation = this.calculateSimulation({
      weeklyHours,
      totalCycleMinutes,
      examDate
    });

    const generatedCycleData = {
      user_id: userId,
      career_id: careerId,
      name: cycleName || `Ciclo ${this.getModelLabel(modelType)} (${interleavedBlocks.length} Blocos • ${(totalCycleMinutes / 60).toFixed(1)}h)`,
      model_type: modelType,
      weekly_hours: weeklyHours,
      block_duration_minutes: blockMin,
      exam_date: examDate || null,
      total_cycle_minutes: totalCycleMinutes,
      settings: {
        customDifficulties,
        simulation,
        generatedAt: new Date().toISOString()
      }
    };

    return {
      cycleData: generatedCycleData,
      blocks: interleavedBlocks,
      simulation
    };
  }

  /**
   * Algoritmo de Intercalação Anti-Fadiga:
   * Evita colocar matérias do mesmo grupo cognitivo ou a mesma disciplina em sequência contínua
   */
  static interleaveBlocks(blocks = []) {
    if (blocks.length <= 2) return blocks;

    let remaining = [...blocks];
    const result = [];
    let lastGroup = null;
    let lastSubject = null;

    while (remaining.length > 0) {
      // 1. Melhor cenário: Grupo diferente E Matéria diferente
      let candidateIndex = remaining.findIndex(b => b.cognitive_group !== lastGroup && b.subject !== lastSubject);

      // 2. Segundo melhor: Matéria diferente (mesmo grupo)
      if (candidateIndex === -1) {
        candidateIndex = remaining.findIndex(b => b.subject !== lastSubject);
      }

      // 3. Fallback: Grupo diferente (se só restou a mesma matéria)
      if (candidateIndex === -1) {
        candidateIndex = remaining.findIndex(b => b.cognitive_group !== lastGroup);
      }

      // 4. Último caso: Qualquer bloco restante
      if (candidateIndex === -1) {
        candidateIndex = 0;
      }

      const [chosenBlock] = remaining.splice(candidateIndex, 1);
      result.push({
        ...chosenBlock,
        order_index: result.length
      });

      lastGroup = chosenBlock.cognitive_group;
      lastSubject = chosenBlock.subject;
    }

    return result;
  }

  /**
   * Calcula projeções temporais e de probabilidade até o dia do exame
   */
  static calculateSimulation({ weeklyHours = 20, totalCycleMinutes = 1200, examDate = null }) {
    const cycleHours = totalCycleMinutes / 60;
    const daysPerLap = weeklyHours > 0 ? (cycleHours / (weeklyHours / 7)) : 7;

    let daysUntilExam = null;
    let weeksUntilExam = null;
    let totalLapsUntilExam = null;
    let projectedQuestions = null;
    let projectedTotalStudyHours = null;

    if (examDate) {
      const now = new Date();
      const exam = new Date(examDate);
      const diffMs = exam.getTime() - now.getTime();
      if (diffMs > 0) {
        daysUntilExam = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        weeksUntilExam = Number((daysUntilExam / 7).toFixed(1));
        totalLapsUntilExam = Number((daysUntilExam / daysPerLap).toFixed(1));
        projectedTotalStudyHours = Math.round((daysUntilExam / 7) * weeklyHours);
        projectedQuestions = Math.round(projectedTotalStudyHours * 16);
      }
    }

    return {
      cycleTotalHours: Number(cycleHours.toFixed(1)),
      daysPerLap: Number(daysPerLap.toFixed(1)),
      weeklyHours,
      daysUntilExam,
      weeksUntilExam,
      totalLapsUntilExam,
      projectedTotalStudyHours,
      projectedQuestions
    };
  }

  static getModelLabel(modelType) {
    const map = {
      adaptativo: 'Adaptativo Inteligente',
      pareto_80_20: 'Pareto 80/20 (Reta Final)',
      pre_edital: 'Base Pré-Edital',
      data_prova: 'Sprint Data da Prova',
      micro_sprints: 'Micro-Sprints Ágeis'
    };
    return map[modelType] || 'Personalizado';
  }
}
