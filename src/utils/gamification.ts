// Motor de Gamificação & Ranks Oficiais do Concurseiro

export interface ConcurseiroRank {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  color: string;
  description: string;
}

export const CONCURSEIRO_RANKS: ConcurseiroRank[] = [
  {
    level: 1,
    title: 'Concurseiro Aspirante',
    minXp: 0,
    maxXp: 500,
    color: '#64748B',
    description: 'Início da jornada de fixação teórica e resolução inicial de itens.'
  },
  {
    level: 2,
    title: 'Estudante Focado',
    minXp: 500,
    maxXp: 1000,
    color: '#3B82F6',
    description: 'Consistência diária estabelecida e superação de falhas no caderno.'
  },
  {
    level: 3,
    title: 'Candidato Competitivo',
    minXp: 1000,
    maxXp: 2000,
    color: '#10B981',
    description: 'Alto volume de simulados e domínio dos tópicos de ouro do edital.'
  },
  {
    level: 4,
    title: 'Especialista em Edital',
    minXp: 2000,
    maxXp: 3500,
    color: '#F59E0B',
    description: 'Taxa de acerto acima de 80% nas matérias de maior peso da banca.'
  },
  {
    level: 5,
    title: 'Elite dos Aprovados',
    minXp: 3500,
    maxXp: 10000,
    color: '#8B5CF6',
    description: 'Prontidão total para o dia da prova com nota de corte superada.'
  }
];

export function getConcurseiroRank(xp: number = 0): ConcurseiroRank {
  if (xp >= 3500) return CONCURSEIRO_RANKS[4];
  if (xp >= 2000) return CONCURSEIRO_RANKS[3];
  if (xp >= 1000) return CONCURSEIRO_RANKS[2];
  if (xp >= 500) return CONCURSEIRO_RANKS[1];
  return CONCURSEIRO_RANKS[0];
}

export interface SubjectStats {
  name: string;
  totalQuestions: number;
  correctPercentage: number;
  status: 'homologado' | 'em_revisao' | 'vulneravel' | 'pendente';
  statusLabel: string;
  weight: string;
}

export function getSubjectsForCareer(careerId: string): SubjectStats[] {
  if (careerId.includes('bb_ti')) {
    return [
      { name: 'Tecnologia da Informação & Banco de Dados', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '35%' },
      { name: 'Conhecimentos Bancários', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' },
      { name: 'Matemática & Probabilidade', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' },
      { name: 'Língua Inglesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' }
    ];
  }

  if (careerId.includes('bb')) {
    return [
      { name: 'Conhecimentos Bancários', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '25%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Matemática Financeira', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' },
      { name: 'Atendimento & Vendas', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' },
      { name: 'Informática Básica', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' }
    ];
  }

  if (careerId.includes('atrfb') || careerId.includes('afrfb')) {
    return [
      { name: 'Direito Tributário', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' },
      { name: 'Legislação Tributária e Aduaneira', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Direito Constitucional', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Direito Administrativo', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Contabilidade Geral', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Raciocínio Lógico-Matemático e Estatística', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Administração Geral e Pública', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10%' },
      { name: 'Língua Inglesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '5%' }
    ];
  }

  if (careerId.includes('marinha')) {
    return [
      { name: 'Organização Básica da Marinha', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '25%' },
      { name: 'História e Tradições Navais', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Legislação Militar & RDM', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' }
    ];
  }

  if (careerId.includes('transpetro_adm')) {
    return [
      { name: 'Noções de Administração', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '28.5%' },
      { name: 'Legislação e Licitações para Estatais (Lei 13.303/16)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '21.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Matemática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Técnicas de Arquivo e Documentação', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '11.4%' },
      { name: 'Ética e Conduta no Setor Público', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' }
    ];
  }

  if (careerId.includes('transpetro_log')) {
    return [
      { name: 'Gestão de Estoques e Almoxarifado', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '28.5%' },
      { name: 'Transporte, Movimentação e Modais Logísticos', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '21.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Matemática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Gestão de Compras e Fornecedores', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '11.4%' },
      { name: 'Legislação de Contratações em Estatais (Lei 13.303/16)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' }
    ];
  }

  if (careerId.includes('ses_rj') || careerId.includes('saude')) {
    return [
      { name: 'Legislação do SUS (Leis 8.080 e 8.142)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '30%' },
      { name: 'Políticas Públicas de Saúde', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '25%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20%' },
      { name: 'Noções de Administração Pública', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15%' }
    ];
  }

  // Default seguro para carreiras genéricas
  return [
    { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '30%' },
    { name: 'Direito Administrativo', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '35%' },
    { name: 'Direito Constitucional', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '35%' }
  ];
}
