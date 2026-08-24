import { Career } from '../types';

export const CAREERS_LIST: Career[] = [
  {
    id: 'bb_comercial',
    name: 'Banco do Brasil — Agente Comercial',
    banca: 'Fundação Cesgranrio',
    description: 'Atendimento bancário, vendas, produtos financeiros, CDC, investimentos, CDC e previdência.',
    tags: ['Nível Médio', 'Carreira Bancária', 'Concurso Nacional']
  },
  {
    id: 'bb_ti',
    name: 'Banco do Brasil — Agente de TI',
    banca: 'Fundação Cesgranrio',
    description: 'Engenharia de software, microsserviços, cloud, Python, SQL, Java e arquitetura de dados.',
    tags: ['Nível Médio/Técnico', 'Tecnologia da Informação', 'Alta Demanda']
  },
  {
    id: 'atrfb',
    name: 'Receita Federal — Analista-Tributário (ATRFB)',
    banca: 'Fundação Getulio Vargas (FGV)',
    description: 'Direito Tributário, Previdenciário, Legislação Tributária e Aduaneira, Fluência em Dados e Direito Público.',
    tags: ['Nível Superior', 'Fiscal Federal', 'Receita Federal']
  },
  {
    id: 'afrfb',
    name: 'Receita Federal — Auditor-Fiscal (AFRFB)',
    banca: 'Fundação Getulio Vargas (FGV)',
    description: 'Auditoria fiscal, Tributário avançado, Contabilidade societária, Comércio Internacional e Legislação Aduaneira.',
    tags: ['Nível Superior', 'Auditoria Fiscal', 'Topo de Carreira']
  },
  {
    id: 'ses_rj',
    name: 'Saúde RJ — SES-RJ / IASERJ 2026',
    banca: 'Instituto IBDO Projetos',
    description: 'Legislação do SUS (Leis 8.080 e 8.142), Enfermagem e Procedimentos Clínicos e Administração Pública RJ.',
    tags: ['Nível Médio/Superior', 'Saúde Pública RJ', 'Concurso Iminente']
  },
  {
    id: 'marinha_rm2',
    name: 'Marinha do Brasil — SMV RM2 Praças',
    banca: 'DEnsM / Comando do 1º Distrito Naval',
    description: 'Tradições Navais, Estatuto dos Militares (Lei 6.880/80), RDM, LESTA e Língua Portuguesa DEnsM.',
    tags: ['Nível Médio/Técnico', 'Militar Naval', 'Praça Temporária']
  },
  {
    id: 'transpetro_adm',
    name: 'Transpetro — Técnico de Administração e Controle Jr',
    banca: 'Fundação Cesgranrio',
    description: 'Administração Geral (PODC), Gestão por Processos, Lei das Estatais (Lei 13.303/16), Arquivo e Português.',
    tags: ['Nível Médio', 'Petrobras / Transpetro', 'Quadro de Terra']
  },
  {
    id: 'transpetro_log',
    name: 'Transpetro — Técnico de Suprimento e Logística Jr',
    banca: 'Fundação Cesgranrio',
    description: 'Gestão de Estoques (Curva ABC, Ponto de Pedido), Armazenagem, Modais de Transporte, Compras e Lei 13.303/16.',
    tags: ['Nível Médio', 'Petrobras / Transpetro', 'Logística de Entrada']
  },
  {
    id: 'tce_rj',
    name: 'TCE-RJ — Técnico de Controle Externo',
    banca: 'CEBRASPE (CESPE)',
    description: 'Contabilidade Pública (CASP), Direito Administrativo, Língua Portuguesa, Controle Externo, Constitucional e Administração.',
    tags: ['Sem Exigência de Experiência', 'Nível Médio/Superior', 'Tribunal de Contas']
  },
  {
    id: 'iss_niteroi',
    name: 'ISS Niterói/RJ — Fiscal de Tributos Municipais',
    banca: 'Fundação Getulio Vargas (FGV)',
    description: 'Direito Tributário, Legislação Tributária de Niterói, Contabilidade Geral/Avançada, Auditoria Fiscal e Português.',
    tags: ['Nível Superior', 'Fisco Municipal', 'Alta Remuneração']
  },
  {
    id: 'tcu_aufc',
    name: 'TCU — Auditor Federal de Controle Externo (AUFC)',
    banca: 'FGV / Cebraspe',
    description: 'Controle Externo, Auditoria Governamental, Análise de Dados, AFO, CASP, Direito Público e Português.',
    tags: ['Nível Superior Qualquer Área', 'Controle Externo Federal', 'Top Tier Salarial']
  }
];

export const CAREERS_MAP: Record<string, Career> = Object.fromEntries(
  CAREERS_LIST.map(c => [c.id, c])
);

export function getCareerById(id: string): Career {
  return CAREERS_MAP[id] || CAREERS_LIST[0];
}
