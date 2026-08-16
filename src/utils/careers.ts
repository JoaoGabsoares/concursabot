import { Career } from '../types';

export const CAREERS_LIST: Career[] = [
  {
    id: 'bb_comercial',
    name: 'Banco do Brasil — Agente Comercial',
    banca: 'Fundação Cesgranrio',
    description: 'Atendimento bancário, vendas, produtos financeiros, CDC e investimentos.',
    tags: ['Nível Médio', 'Bancária', 'Carreira de Entrada']
  },
  {
    id: 'bb_ti',
    name: 'Banco do Brasil — Agente de TI',
    banca: 'Fundação Cesgranrio',
    description: 'Engenharia de software, microsserviços, cloud, Python, SQL e arquitetura de dados.',
    tags: ['Nível Médio/Técnico', 'Tecnologia', 'Alta Demanda']
  },
  {
    id: 'atrfb',
    name: 'Receita Federal — Analista-Tributário (ATRFB)',
    banca: 'Fundação Getulio Vargas (FGV)',
    description: 'Direito Tributário, Legislação Tributária e Aduaneira, Contabilidade e Direito Público.',
    tags: ['Nível Superior', 'Fiscal de Elite', 'Fronteira & Portos']
  },
  {
    id: 'afrfb',
    name: 'Receita Federal — Auditor-Fiscal (AFRFB)',
    banca: 'Fundação Getulio Vargas (FGV)',
    description: 'Auditoria fiscal, Tributário avançado, Contabilidade societária, Comércio Internacional e TI fiscal.',
    tags: ['Nível Superior', 'Topo de Carreira', 'Maior Remuneração']
  },
  {
    id: 'ses_rj',
    name: 'Saúde RJ — SES-RJ / IASERJ 2026',
    banca: 'Instituto IBDO',
    description: 'Legislação do SUS, Enfermagem Geral, Urgência & Emergência e Administração Pública Estadual.',
    tags: ['Nível Médio/Superior', 'Saúde Pública', 'Concurso Iminente']
  },
  {
    id: 'marinha_rm2',
    name: 'Marinha do Brasil — SMV RM2 Praças',
    banca: 'DEnsM / Comando do 1º Distrito Naval',
    description: 'Tradições Navais, Legislação Militar-Naval, Organização Básica da Marinha e Língua Portuguesa.',
    tags: ['Nível Médio/Técnico', 'Militar', 'Oficial Temporário']
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
  }
];

export function getCareerById(id: string): Career {
  return CAREERS_LIST.find(c => c.id === id) || CAREERS_LIST[0];
}
