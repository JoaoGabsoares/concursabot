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
    title: 'Recruta do Edital',
    minXp: 0,
    maxXp: 500,
    color: '#64748B',
    description: 'Início da jornada de fixação teórica e leitura dos tópicos de ouro.'
  },
  {
    level: 2,
    title: 'Sentinela da Lei Seca',
    minXp: 500,
    maxXp: 1200,
    color: '#3B82F6',
    description: 'Desarmamento sistemático de pegadinhas e retenção literal dos artigos.'
  },
  {
    level: 3,
    title: 'Operador de Questões',
    minXp: 1200,
    maxXp: 2500,
    color: '#06B6D4',
    description: 'Cadência consistente de 60m/30m e domínio dos tópicos de maior peso.'
  },
  {
    level: 4,
    title: 'Guardião da Jurisprudência',
    minXp: 2500,
    maxXp: 4500,
    color: '#10B981',
    description: 'Domínio pacificado das Súmulas Vinculantes do STF, STJ e TST.'
  },
  {
    level: 5,
    title: 'Estrategista de Prova',
    minXp: 4500,
    maxXp: 7500,
    color: '#F59E0B',
    description: 'Gestão tática de tempo de prova e eliminação inteligente de distratores.'
  },
  {
    level: 6,
    title: 'Mestre da Redação',
    minXp: 7500,
    maxXp: 12000,
    color: '#EC4899',
    description: 'Produção discursiva de alto nível com espelho oficial da banca homologado.'
  },
  {
    level: 7,
    title: 'Auditor Aspirante',
    minXp: 12000,
    maxXp: 18000,
    color: '#8B5CF6',
    description: 'Taxa de acertos acima de 85% em simulados completos de 4 horas.'
  },
  {
    level: 8,
    title: 'Inspetor Sênior',
    minXp: 18000,
    maxXp: 26000,
    color: '#6366F1',
    description: 'Caderno de erros zerado com repetição espaçada SM-2 dominante.'
  },
  {
    level: 9,
    title: 'Especialista de Elite',
    minXp: 26000,
    maxXp: 36000,
    color: '#E11D48',
    description: 'Pontuação consistente acima da nota de corte histórica do concurso.'
  },
  {
    level: 10,
    title: 'Titular Homologado',
    minXp: 36000,
    maxXp: 100000,
    color: '#10B981',
    description: 'Nível supremo de prontidão: apto para nomeação no Diário Oficial.'
  }
];

export function getConcurseiroRank(xp: number = 0): ConcurseiroRank {
  for (let i = CONCURSEIRO_RANKS.length - 1; i >= 0; i--) {
    if (xp >= CONCURSEIRO_RANKS[i].minXp) {
      return CONCURSEIRO_RANKS[i];
    }
  }
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
  if (careerId === 'bb_ti') {
    return [
      { name: 'Tecnologia da Informação', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '52.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15.0%' },
      { name: 'Matemática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.5%' },
      { name: 'Probabilidade e Estatística', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.5%' },
      { name: 'Conhecimentos Bancários', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.5%' },
      { name: 'Atualidades do Mercado Financeiro', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '5.0%' },
      { name: 'Língua Inglesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '5.0%' }
    ];
  }

  if (careerId === 'bb_comercial' || careerId.includes('bb')) {
    return [
      { name: 'Vendas e Negociação', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '22.5%' },
      { name: 'Conhecimentos de Informática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '22.5%' },
      { name: 'Conhecimentos Bancários', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15.0%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '15.0%' },
      { name: 'Matemática Financeira', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.5%' },
      { name: 'Matemática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.5%' },
      { name: 'Atualidades do Mercado Financeiro', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '5.0%' },
      { name: 'Língua Inglesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '5.0%' }
    ];
  }

  if (careerId === 'afrfb') {
    return [
      { name: 'Direito Tributário', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Auditoria Fiscal', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Contabilidade Geral e Avançada', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Comércio Internacional e Legislação Aduaneira', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Fluência em Dados', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '8.0%' },
      { name: 'Direito Administrativo', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '8.0%' },
      { name: 'Direito Constitucional', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '8.0%' },
      { name: 'Legislação Tributária Federal', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '8.0%' },
      { name: 'Administração Geral e Pública', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '6.0%' },
      { name: 'Raciocínio Lógico-Matemático e Estatística', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '6.0%' },
      { name: 'Economia e Finanças Públicas', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '6.0%' }
    ];
  }

  if (careerId === 'atrfb' || careerId.includes('receita')) {
    return [
      { name: 'Direito Tributário', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '11.4%' },
      { name: 'Direito Previdenciário', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '11.4%' },
      { name: 'Fluência em Dados', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.7%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.7%' },
      { name: 'Legislação Tributária e Aduaneira', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Direito Constitucional', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Direito Administrativo', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '8.5%' },
      { name: 'Contabilidade Geral', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.1%' },
      { name: 'Raciocínio Lógico-Matemático e Estatística', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.1%' },
      { name: 'Administração Geral e Pública', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.1%' },
      { name: 'Língua Inglesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '7.1%' }
    ];
  }

  if (careerId.includes('marinha')) {
    return [
      { name: 'Língua Portuguesa (Gramática & Sintaxe)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '50.0%' },
      { name: 'Formação Militar-Naval (Estatuto, RDM, LESTA, Tradições)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '50.0%' }
    ];
  }

  if (careerId === 'transpetro_adm') {
    return [
      { name: 'Noções de Administração', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '28.5%' },
      { name: 'Legislação e Licitações para Estatais (Lei 13.303/16)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '21.5%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Matemática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '14.3%' },
      { name: 'Técnicas de Arquivo e Documentação', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '11.4%' },
      { name: 'Ética e Conduta no Setor Público', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' }
    ];
  }

  if (careerId === 'transpetro_log') {
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
      { name: 'Legislação do SUS (Leis 8.080 e 8.142)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '30.0%' },
      { name: 'Conhecimentos Específicos (Enfermagem / Saúde Pública)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '30.0%' },
      { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20.0%' },
      { name: 'Noções de Informática', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' },
      { name: 'Legislação Estadual RJ (Dec.-Lei 220/75)', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '10.0%' }
    ];
  }

  return [
    { name: 'Língua Portuguesa', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '30.0%' },
    { name: 'Direito Administrativo', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '25.0%' },
    { name: 'Direito Constitucional', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '25.0%' },
    { name: 'Raciocínio Lógico', totalQuestions: 0, correctPercentage: 0, status: 'em_revisao', statusLabel: 'NÃO INICIADO', weight: '20.0%' }
  ];
}
