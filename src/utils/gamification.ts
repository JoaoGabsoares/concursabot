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
      { name: 'Tecnologia da Informação & Banco de Dados', totalQuestions: 65, correctPercentage: 78, status: 'homologado', statusLabel: 'DOMINADO', weight: '35%' },
      { name: 'Conhecimentos Bancários', totalQuestions: 40, correctPercentage: 70, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '20%' },
      { name: 'Língua Portuguesa', totalQuestions: 35, correctPercentage: 65, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '15%' },
      { name: 'Matemática & Probabilidade', totalQuestions: 28, correctPercentage: 54, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '15%' },
      { name: 'Língua Inglesa', totalQuestions: 20, correctPercentage: 85, status: 'homologado', statusLabel: 'DOMINADO', weight: '15%' }
    ];
  }

  if (careerId.includes('bb')) {
    return [
      { name: 'Conhecimentos Bancários', totalQuestions: 55, correctPercentage: 82, status: 'homologado', statusLabel: 'DOMINADO', weight: '25%' },
      { name: 'Língua Portuguesa', totalQuestions: 45, correctPercentage: 72, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '20%' },
      { name: 'Matemática Financeira', totalQuestions: 30, correctPercentage: 58, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '15%' },
      { name: 'Atendimento & Vendas', totalQuestions: 40, correctPercentage: 80, status: 'homologado', statusLabel: 'DOMINADO', weight: '15%' },
      { name: 'Informática Básica', totalQuestions: 25, correctPercentage: 68, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '15%' }
    ];
  }

  if (careerId.includes('atrfb') || careerId.includes('afrfb')) {
    return [
      { name: 'Direito Tributário', totalQuestions: 60, correctPercentage: 76, status: 'homologado', statusLabel: 'DOMINADO', weight: '20%' },
      { name: 'Legislação Tributária e Aduaneira', totalQuestions: 35, correctPercentage: 62, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '10%' },
      { name: 'Direito Constitucional', totalQuestions: 40, correctPercentage: 84, status: 'homologado', statusLabel: 'DOMINADO', weight: '10%' },
      { name: 'Direito Administrativo', totalQuestions: 38, correctPercentage: 71, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '10%' },
      { name: 'Contabilidade Geral', totalQuestions: 30, correctPercentage: 52, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '10%' },
      { name: 'Língua Portuguesa', totalQuestions: 45, correctPercentage: 80, status: 'homologado', statusLabel: 'DOMINADO', weight: '15%' },
      { name: 'Língua Inglesa', totalQuestions: 20, correctPercentage: 75, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '5%' },
      { name: 'Raciocínio Lógico-Matemático e Estatística', totalQuestions: 35, correctPercentage: 58, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '10%' },
      { name: 'Administração Geral e Pública', totalQuestions: 30, correctPercentage: 68, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '10%' }
    ];
  }

  if (careerId.includes('marinha')) {
    return [
      { name: 'Organização Básica da Marinha', totalQuestions: 45, correctPercentage: 80, status: 'homologado', statusLabel: 'DOMINADO', weight: '25%' },
      { name: 'História e Tradições Navais', totalQuestions: 30, correctPercentage: 75, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '20%' },
      { name: 'Legislação Militar & RDM', totalQuestions: 25, correctPercentage: 60, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '20%' },
      { name: 'Língua Portuguesa', totalQuestions: 35, correctPercentage: 78, status: 'homologado', statusLabel: 'DOMINADO', weight: '20%' }
    ];
  }

  if (careerId.includes('transpetro_adm')) {
    return [
      { name: 'Noções de Administração', totalQuestions: 50, correctPercentage: 80, status: 'homologado', statusLabel: 'DOMINADO', weight: '28.5%' },
      { name: 'Legislação e Licitações para Estatais (Lei 13.303/16)', totalQuestions: 40, correctPercentage: 72, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '21.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 35, correctPercentage: 75, status: 'homologado', statusLabel: 'DOMINADO', weight: '14.3%' },
      { name: 'Matemática', totalQuestions: 30, correctPercentage: 60, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '14.3%' },
      { name: 'Técnicas de Arquivo e Documentação', totalQuestions: 25, correctPercentage: 84, status: 'homologado', statusLabel: 'DOMINADO', weight: '11.4%' },
      { name: 'Ética e Conduta no Setor Público', totalQuestions: 20, correctPercentage: 78, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '10.0%' }
    ];
  }

  if (careerId.includes('transpetro_log')) {
    return [
      { name: 'Gestão de Estoques e Almoxarifado', totalQuestions: 50, correctPercentage: 82, status: 'homologado', statusLabel: 'DOMINADO', weight: '28.5%' },
      { name: 'Transporte, Movimentação e Modais Logísticos', totalQuestions: 40, correctPercentage: 74, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '21.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 35, correctPercentage: 75, status: 'homologado', statusLabel: 'DOMINADO', weight: '14.3%' },
      { name: 'Matemática', totalQuestions: 30, correctPercentage: 60, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '14.3%' },
      { name: 'Gestão de Compras e Fornecedores', totalQuestions: 25, correctPercentage: 70, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '11.4%' },
      { name: 'Legislação de Contratações em Estatais (Lei 13.303/16)', totalQuestions: 20, correctPercentage: 68, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '10.0%' }
    ];
  }

  if (careerId.includes('ses_rj') || careerId.includes('saude')) {
    return [
      { name: 'Legislação do SUS (Leis 8.080 e 8.142)', totalQuestions: 50, correctPercentage: 82, status: 'homologado', statusLabel: 'DOMINADO', weight: '30%' },
      { name: 'Políticas Públicas de Saúde', totalQuestions: 35, correctPercentage: 70, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '25%' },
      { name: 'Língua Portuguesa', totalQuestions: 30, correctPercentage: 75, status: 'homologado', statusLabel: 'DOMINADO', weight: '20%' },
      { name: 'Noções de Administração Pública', totalQuestions: 20, correctPercentage: 55, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '15%' }
    ];
  }

  // Default seguro para carreiras genéricas
  return [
    { name: 'Língua Portuguesa', totalQuestions: 35, correctPercentage: 78, status: 'homologado', statusLabel: 'DOMINADO', weight: '30%' },
    { name: 'Direito Administrativo', totalQuestions: 30, correctPercentage: 70, status: 'em_revisao', statusLabel: 'EM ESTUDO', weight: '35%' },
    { name: 'Direito Constitucional', totalQuestions: 25, correctPercentage: 65, status: 'vulneravel', statusLabel: 'VULNERÁVEL', weight: '35%' }
  ];
}
