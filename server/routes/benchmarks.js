import express from 'express';
import db from '../database.js';

const router = express.Router();

export const STUDY_PIPELINES = {
  'atrfb': {
    career_id: 'atrfb',
    title: 'Receita Federal do Brasil (ATRFB / AFRFB)',
    method_name: 'Método dos Ciclos em Ondas (Wave 1 & Wave 2) + Casos Práticos FGV',
    author_source: 'Validado por aprovados nos concursos 2012, 2014 e 2023 (Estratégia / Guruja / LS)',
    phases: [
      {
        phase: 1,
        name: 'Fase 1: Construção do Núcleo Duro (Wave 1)',
        duration_weeks: '12 a 16 semanas',
        description: 'Foco exclusivo nas 7 matérias que representam 80% dos pontos da prova (104 questões de 140).',
        daily_routine: '2 blocos de 60 a 90 min por dia + 20 questões de fixação imediatas.',
        core_subjects: ['Direito Tributário (16q)', 'Direito Previdenciário (16q)', 'Língua Portuguesa (15q)', 'Fluência em Dados (15q)', 'Direito Constitucional (14q)', 'Leg. Tributária (14q)', 'Leg. Aduaneira (14q)'],
        action_rules: [
          'Priorize Apostila Grifada e Caderno Enxuto para eliminar a palha introdutória.',
          'Memorize a literalidade do CTN (Art. 3º, 97, 100, 111, 135, 146, 151, 156 e 174).',
          'Sexta à noite: Redação e Discursivas FGV (mínimo de 1 peça técnica por semana).',
          'Sábado pela manhã: Resumo Semanal Integrado e consolidação de mapas mentais.'
        ]
      },
      {
        phase: 2,
        name: 'Fase 2: Acoplamento da Wave 2 & Treino de Pegadinhas',
        duration_weeks: '8 a 10 semanas',
        description: 'Manutenção da Wave 1 via revisões espaçadas (D+1, D+7, D+30) e entrada das matérias de menor peso.',
        daily_routine: '1 bloco de Wave 2 + 1 bloco de revisão/questões da Wave 1.',
        core_subjects: ['Direito Administrativo (12q)', 'RLM & Estatística (20q)', 'Contabilidade Geral (10q)', 'Administração Pública (10q)', 'Inglês (10q)'],
        action_rules: [
          'Revisão contínua das matérias da Wave 1 através do Caderno de Erros e Flashcards.',
          'Resolução massiva de baterias no estilo FGV (mínimo de 50 questões/dia).'
        ]
      },
      {
        phase: 3,
        name: 'Fase 3: Reta Final & Simulação Real de Prova',
        duration_weeks: '4 a 6 semanas pré-edital/pós-edital',
        description: '80% questões e 20% lei seca/jurisprudência pacífica do STF e CARF.',
        daily_routine: 'Simulados cronometrados aos domingos (5 horas de duração com 140 questões + discursiva).',
        core_subjects: ['Todas as 12 disciplinas em modo de ciclo rápido'],
        action_rules: [
          'Simulação de tempo real: média de 2min30s por questão.',
          'Revisão das Súmulas Vinculantes e teses de repercussão geral tributárias.'
        ]
      }
    ]
  },
  'ses_rj': {
    career_id: 'ses_rj',
    title: 'Saúde Pública — SES-RJ (Secretaria Estadual de Saúde RJ)',
    method_name: 'Método do SUS Estruturante + Ciclo de Protocolos Clínicos & Imunização',
    author_source: 'Validado por especialistas e aprovados em Enfermagem e Saúde Pública RJ (EnfConcursos / Gran Saúde)',
    phases: [
      {
        phase: 1,
        name: 'Fase 1: Domínio Vertical da Legislação do SUS',
        duration_weeks: '4 a 6 semanas',
        description: 'Garantir 100% de acerto nas 20 a 30 questões de SUS que definem a nota de corte.',
        daily_routine: 'Leitura esquematizada da lei seca do SUS + 30 questões comentadas por dia.',
        core_subjects: ['Constituição Federal (Arts. 196 a 200)', 'Lei 8.080/90 (Lei Orgânica da Saúde)', 'Lei 8.142/90 (Participação e Financiamento)', 'Decreto 7.508/11 (Região de Saúde & COAP)', 'LC 141/12 (Financiamento)'],
        action_rules: [
          'Diferenciar claramente Princípios Doutrinários vs Organizativos do SUS.',
          'Memorizar as competências da Direção Nacional, Estadual e Municipal (Arts. 16, 17 e 18 da Lei 8.080).',
          'Sábado: Tabela comparativa dos repasses fundo a fundo.'
        ]
      },
      {
        phase: 2,
        name: 'Fase 2: Protocolos Clínicos, Imunização & Saúde Pública RJ',
        duration_weeks: '6 a 8 semanas',
        description: 'Consolidação das políticas públicas, vigilância e programas nacionais de saúde.',
        daily_routine: '1 bloco de Políticas de Saúde + 1 bloco de Específica de Enfermagem/Área.',
        core_subjects: ['PNAB (Atenção Básica)', 'PNH (HumanizaSUS)', 'PNI (Calendário Nacional de Vacinação atualizado)', 'Vigilância Epidemiológica & Notificação Compulsória', 'Biossegurança & Farmacologia'],
        action_rules: [
          'Memorização ativa do calendário vacinal da criança, gestante e idoso (mudanças recentes).',
          'Prazos de notificação compulsória (imediata 24h vs semanal).'
        ]
      },
      {
        phase: 3,
        name: 'Fase 3: Treino Intensivo de Casos Clínicos & Provas Anteriores',
        duration_weeks: '3 a 4 semanas',
        description: 'Baterias de questões situacionais da banca contratada (IBDO / FGV / IBFC).',
        daily_routine: '50 questões/dia com foco em Sistematização da Assistência de Enfermagem (SAE) e Urgência/Emergência.',
        core_subjects: ['SAE, Manchester, Cuidados Críticos e Casos Práticos de Saúde Pública'],
        action_rules: [
          'Resolução de todas as provas anteriores de prefeituras e órgãos estaduais do RJ.',
          'Revisão do Código de Ética dos Profissionais de Enfermagem (Resolução COFEN).'
        ]
      }
    ]
  },
  'marinha_rm2': {
    career_id: 'marinha_rm2',
    title: 'Marinha do Brasil — Praças RM2 / SMV-Praças',
    method_name: 'Método Fechamento das 4 Obras Oficiais DEnsM + Decoreba Literal Militar',
    author_source: 'Validado por aprovados nos Distritos Navais Com1DN, Com2DN, Com5DN (Concurseiro Militar / Engemarinha)',
    phases: [
      {
        phase: 1,
        name: 'Fase 1: Fechamento das 4 Bibliografias Oficiais da DEnsM',
        duration_weeks: '6 a 8 semanas',
        description: 'A prova da Marinha é 100% baseada nas apostilas oficiais disponibilizadas no edital. Não use livros genéricos.',
        daily_routine: '1 hora de Formação Militar-Naval + 1 hora de Língua Portuguesa por dia.',
        core_subjects: ['Estatuto dos Militares (Lei 6.880/80)', 'Regulamento Disciplinar para a Marinha (RDM)', 'Organização Básica da Marinha (OBM)', 'Tradições Navais (Apostila Oficial)', 'Relações Humanas e Liderança (EMA-137)'],
        action_rules: [
          'Faça resumos esquematizados dos postos e graduações, deveres, valores e ética militar.',
          'Memorize a classificação das contravenções disciplinares no RDM (Leves, Médias e Graves).',
          'Aprenda termos náuticos e cerimonial à bandeira (08:00h e pôr do sol).'
        ]
      },
      {
        phase: 2,
        name: 'Fase 2: Gramática Normativa Militar & Sintaxe',
        duration_weeks: '4 a 6 semanas',
        description: 'As 25 questões de Português da Marinha são puramente gramaticais e normativas (alto nível de rigor).',
        daily_routine: '30 questões de Português por dia no estilo militar.',
        core_subjects: ['Sintaxe do Período Composto (Orações Subordinadas Substantivas, Adjetivas e Adverbiais)', 'Regência e Crase', 'Concordância Verbal e Nominal', 'Pontuação e Valores Semânticos das Conjunções'],
        action_rules: [
          'Treinar identificação de orações reduzidas e funções sintáticas do "que" e do "se".',
          'Resolver provas de Português da Marinha (SMV, EAM, FN, Colégio Naval).'
        ]
      },
      {
        phase: 3,
        name: 'Fase 3: Maratona de Provas Anteriores de Todos os Distritos (2016-2025)',
        duration_weeks: '3 a 4 semanas',
        description: 'A banca DEnsM frequentemente repete ou reformula questões aplicadas em anos anteriores nos diversos Distritos Navais.',
        daily_routine: '1 prova completa de 50 questões a cada 2 dias com cronômetro de 3 horas.',
        core_subjects: ['Provas anteriores Com1DN, Com2DN, Com3DN, Com5DN, Com7DN'],
        action_rules: [
          'Meta de rendimento: atingir >85% de acerto nas provas anteriores (43 a 46 acertos).',
          'Desempate na Marinha é Formação Militar-Naval em 1º lugar.'
        ]
      }
    ]
  },
  'adm_tribunais': {
    career_id: 'adm_tribunais',
    title: 'Carreiras Administrativas & Tribunais (TJs, TRFs, MPU)',
    method_name: 'Método Tronco Comum Jurídico + Lei Seca Comentada (Lei 14.133/21 e 8.429/92)',
    author_source: 'Validado por aprovados em Tribunais Federais e Estaduais (Método Ciclos / Guruja)',
    phases: [
      {
        phase: 1,
        name: 'Fase 1: Domínio do Tronco Comum Administrativo & Constitucional',
        duration_weeks: '8 a 12 semanas',
        description: 'Matérias com 100% de aproveitamento em qualquer concurso administrativo ou de tribunal.',
        daily_routine: '2 blocos de 60 min (1 Direito + 1 Português/RLM) + 30 questões diárias.',
        core_subjects: ['Direito Administrativo (Lei 14.133 Licitações, Lei 8.429 Improbidade, Lei 9.784 Processo)', 'Direito Constitucional (Direitos Fundamentais, Poder Judiciário, Funções da Justiça)', 'Língua Portuguesa FGV/FCC', 'Raciocínio Lógico-Matemático'],
        action_rules: [
          'Leitura diária de 30 minutos de Lei Seca anotada (com foco nas alterações legislativas recentes).',
          'Mapeamento de exceções e hipóteses de dispensa e inexigibilidade na Lei 14.133/21.'
        ]
      },
      {
        phase: 2,
        name: 'Fase 2: Administração Pública, Gestão de Pessoas e Contratos',
        duration_weeks: '6 a 8 semanas',
        description: 'Aprofundamento nas matérias conceituais de gestão pública e orçamento.',
        daily_routine: '1 bloco de Administração Pública + 1 bloco de questões jurídicas.',
        core_subjects: ['Administração Geral e Pública (Planejamento, BSC, Gestão de Processos e Projetos)', 'Administração de Recursos Materiais e Patrimônio', 'Administração Financeira e Orçamentária (AFO básica: PPA, LDO, LOA)', 'Regimento Interno e Ética Pública'],
        action_rules: [
          'Esquematização de modelos de gestão: Patrimonialista, Burocrática e Gerencial (Nova Gestão Pública).',
          'Ciclo orçamentário e créditos adicionais em AFO.'
        ]
      },
      {
        phase: 3,
        name: 'Fase 3: Reta Final de Questões por Banca & Discursivas',
        duration_weeks: '4 a 6 semanas',
        description: 'Calibração específica para a banca contratada (FGV, Cebraspe ou FCC).',
        daily_routine: '60 questões diárias por assunto + 2 redações dissertativas por semana.',
        core_subjects: ['Baterias de prova por banca e temas de redação oficial'],
        action_rules: [
          'Treinar discursivas sobre sustentabilidade, governança pública e transparência (LAI e LGPD).',
          'Simulados aos finais de semana com correção minuciosa de cada erro.'
        ]
      }
    ]
  }
};

// GET all pipelines
router.get('/pipelines', (req, res) => {
  res.json(STUDY_PIPELINES);
});

// GET specific pipeline
router.get('/pipelines/:careerId', (req, res) => {
  const pipeline = STUDY_PIPELINES[req.params.careerId] || STUDY_PIPELINES['atrfb'];
  res.json(pipeline);
});

// GET all benchmarks or filter by career
router.get('/', (req, res) => {
  try {
    const careerId = req.query.career;
    let query = 'SELECT * FROM exam_benchmarks';
    let params = [];

    if (careerId) {
      query += ' WHERE career_id = ? ORDER BY edition_year DESC';
      params.push(careerId);
    } else {
      query += ' ORDER BY career_id, edition_year DESC';
    }

    const rows = db.prepare(query).all(...params);
    const parsed = rows.map(r => ({
      ...r,
      edital_summary: r.edital_summary_json ? JSON.parse(r.edital_summary_json) : null,
      provas_gabaritos: r.provas_gabaritos_json ? JSON.parse(r.provas_gabaritos_json) : null,
      pegadinhas_historicas: r.pegadinhas_historicas_json ? JSON.parse(r.pegadinhas_historicas_json) : [],
      temas_discursivas: r.temas_discursivas_json ? JSON.parse(r.temas_discursivas_json) : null
    }));

    res.json(parsed);
  } catch (err) {
    console.error('Error fetching benchmarks:', err);
    res.status(500).json({ error: 'Erro ao buscar dados históricos dos concursos.' });
  }
});

// GET 3 last official benchmarks for a specific career
router.get('/:careerId', (req, res) => {
  try {
    const { careerId } = req.params;
    const rows = db.prepare('SELECT * FROM exam_benchmarks WHERE career_id = ? ORDER BY edition_year DESC LIMIT 3').all(careerId);

    const parsed = rows.map(r => ({
      ...r,
      edital_summary: r.edital_summary_json ? JSON.parse(r.edital_summary_json) : null,
      provas_gabaritos: r.provas_gabaritos_json ? JSON.parse(r.provas_gabaritos_json) : null,
      pegadinhas_historicas: r.pegadinhas_historicas_json ? JSON.parse(r.pegadinhas_historicas_json) : [],
      temas_discursivas: r.temas_discursivas_json ? JSON.parse(r.temas_discursivas_json) : null
    }));

    res.json({
      careerId,
      total_editions: parsed.length,
      editions: parsed
    });
  } catch (err) {
    console.error(`Error fetching benchmarks for ${req.params.careerId}:`, err);
    res.status(500).json({ error: 'Erro ao buscar benchmarks da carreira.' });
  }
});

export default router;
