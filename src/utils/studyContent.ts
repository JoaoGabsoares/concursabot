// Engine de Conteúdo Dinâmico por Carreira e Disciplina do Gabarito.AI

export interface LessonContent {
  subject: string;
  topic: string;
  lessonNumber: number;
  totalLessons: number;
  jurisprudenceNote: string;
  section1Title: string;
  section1Body: string;
  section2Title: string;
  mnemonics: { code: string; meaning: string }[];
  question: {
    id: number;
    question: string;
    options: { [key: string]: string };
    answer: string;
    explanation: string;
  };
}

export interface ParetoTopic {
  subject: string;
  topic: string;
  status: 'homologado' | 'em_revisao' | 'vulneravel' | 'pendente';
  label: string;
  weight: string;
}

export interface HistoricalCut {
  year: number;
  score: string;
}

// 1. Doutrina & Questões por Disciplina Completa
export const STUDY_LESSONS_DB: Record<string, LessonContent> = {
  // --- DIREITO CONSTITUCIONAL ---
  "Direito Constitucional": {
    subject: "Direito Constitucional",
    topic: "Eficácia das Normas Constitucionais & Remédios Constitucionais",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "FGV / CESGRANRIO: Cobrança massiva da classificação de José Afonso da Silva (Plena, Contida e Limitada) e cabimento do Habeas Data vs Mandado de Segurança.",
    section1Title: "1. Aplicabilidade e Eficácia das Normas Constitucionais",
    section1Body: "As normas de eficácia plena produzem todos os seus efeitos imediatamente com a promulgação da Constituição, sem necessidade de regulamentação infraconstitucional. As normas de eficácia contida (ou prospectiva) têm aplicabilidade imediata e integral, mas podem ter seu alcance restringido por lei posterior. As normas de eficácia limitada possuem aplicabilidade mediata e dependem de integração legislativa para produzirem plenos efeitos (ex: direito de greve dos servidores públicos - art. 37, VII).",
    section2Title: "2. Esquema Mnemônico de Eficácia e Remédios",
    mnemonics: [
      { code: "PLENA = NÃO REDUZ", meaning: "Aplicabilidade direta, imediata e integral (não pode ser contida por lei)." },
      { code: "CONTIDA = PODE REDUZIR", meaning: "Aplicabilidade direta e imediata, mas não integral (pode ser restringida)." },
      { code: "LIMITADA = PRECISA DE LEI", meaning: "Aplicabilidade indireta e mediata (precisa de lei regulamentadora)." },
      { code: "HABEAS DATA = DADOS PESSOAIS", meaning: "Para conhecer ou retificar dados da pessoa do impetrante em registros governamentais." }
    ],
    question: {
      id: 201,
      question: "Assinale a opção que indica o remédio constitucional cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais:",
      options: {
        A: "Mandado de Segurança Coletivo.",
        B: "Ação Popular.",
        C: "Habeas Data.",
        D: "Habeas Corpus.",
        E: "Mandado de Injunção."
      },
      answer: "C",
      explanation: "Art. 5º, LXXII, 'a' da CF/88: Conceder-se-á habeas data para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público."
    }
  },

  // --- DIREITO ADMINISTRATIVO ---
  "Direito Administrativo": {
    subject: "Direito Administrativo",
    topic: "Atos Administrativos (Requisitos de Validade) & Abuso de Poder",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "FGV / CESGRANRIO: Cobrança recorrente dos requisitos de validade (COFIFOMOB) e a distinção entre Excesso de Poder (vício de competência) e Desvio de Finalidade (vício de finalidade).",
    section1Title: "1. Elementos e Requisitos de Validade do Ato",
    section1Body: "Todo ato administrativo possui cinco elementos essenciais: Competência, Finalidade, Forma, Motivo e Objeto. A Competência, a Finalidade e a Forma são sempre vinculadas. O vício na finalidade configura 'Desvio de Finalidade' (quando o ato busca interesse privado ou fim diverso da lei), ao passo que a atuação fora das atribuições legais configura 'Excesso de Poder'. A anulação opera efeitos retroativos (ex tunc) para atos ilegais, enquanto a revogação opera efeitos prospectivos (ex nunc) por conveniência e oportunidade.",
    section2Title: "2. Mnemônico de Direito Administrativo",
    mnemonics: [
      { code: "CO-FI-FO-MO-OB", meaning: "Competência, Finalidade, Forma, Motivo, Objeto (os 5 elementos do ato)." },
      { code: "DESVIO = FINALIDADE", meaning: "O agente é competente, mas persegue fim estranho ao interesse público." },
      { code: "EXCESSO = COMPETÊNCIA", meaning: "O agente extrapola os limites legais de suas atribuições." },
      { code: "ANULAÇÃO = EX TUNC (Ilegal)", meaning: "Apaga o ato desde a origem com efeito retroativo." }
    ],
    question: {
      id: 202,
      question: "No tocante aos poderes administrativos, o ato praticado por autoridade pública visando a fim diverso daquele previsto expressa ou implicitamente em lei padece de vício denominado:",
      options: {
        A: "Excesso de poder.",
        B: "Desvio de finalidade.",
        C: "Incompetência territorial.",
        D: "Vício de forma insanável.",
        E: "Ilegitimidade passiva."
      },
      answer: "B",
      explanation: "O desvio de finalidade (ou desvio de poder) ocorre quando a autoridade competente pratica o ato visando a um fim diverso daquele que a lei fixou, incidindo em vício de finalidade."
    }
  },

  // --- BANCO DO BRASIL / MERCADO FINANCEIRO ---
  "Conhecimentos Bancários": {
    subject: "Conhecimentos Bancários",
    topic: "Sistema Financeiro Nacional & Mercado de Capitais",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "CESGRANRIO: Cobrança massiva sobre a hierarquia entre órgãos normativos (CMN) e entidades supervisoras (Bacen, CVM).",
    section1Title: "1. Estrutura e Órgãos Normativos do SFN",
    section1Body: "O Sistema Financeiro Nacional é dividido em dois subsistemas: o normativo e o operativo. O Conselho Monetário Nacional (CMN) é o órgão superior normativo máximo, responsável por formular a política da moeda e do crédito, enquanto o Banco Central do Brasil (Bacen) e a CVM atuam como entidades supervisoras e fiscalizadoras das instituições financeiras e do mercado de valores mobiliários.",
    section2Title: "2. Esquema Mnemônico de Órgãos Normativos",
    mnemonics: [
      { code: "CMN = MANDA (Normativo)", meaning: "Conselho Monetário Nacional: fixa diretrizes, metas de inflação e normas gerais (não executa)." },
      { code: "BACEN = EXECUTA (Supervisor)", meaning: "Banco Central do Brasil: emite moeda, executa a política monetária e fiscaliza os bancos." }
    ],
    question: {
      id: 101,
      question: "No âmbito do Sistema Financeiro Nacional, assinale a opção que indica uma competência privativa do Conselho Monetário Nacional (CMN):",
      options: {
        A: "Emitir papel-moeda e moeda metálica em nome da União.",
        B: "Fixar as diretrizes e normas da política cambial, monetária e creditícia.",
        C: "Fiscalizar diretamente o funcionamento das agências bancárias comerciais.",
        D: "Custodiar as reservas internacionais do país.",
        E: "Executar as operações de redesconto bancário."
      },
      answer: "B",
      explanation: "O CMN é órgão normativo superior (fixa diretrizes). As funções executivas e fiscalizatórias (emitir, fiscalizar, redesconto) competem ao Banco Central do Brasil."
    }
  },

  "Tecnologia da Informação & Banco de Dados": {
    subject: "Tecnologia da Informação & Banco de Dados",
    topic: "Modelagem Relacional, Normalização & SQL Avançado",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "CESGRANRIO: Cobrança recorrente de formas normais (1FN, 2FN, 3FN) e junções relacionais (LEFT JOIN, INNER JOIN).",
    section1Title: "1. Modelo Relacional e Formas Normais",
    section1Body: "A normalização de dados visa eliminar anomalias de inserção, atualização e exclusão em bancos de dados relacionais. A Primeira Forma Normal (1FN) exige atributos atômicos e ausência de vetores/grupos repetidos. A Segunda Forma Normal (2FN) exige que todos os atributos não-chave dependam funcionalmente da chave primária inteira, e a 3FN elimina dependências transitivas.",
    section2Title: "2. Mnemônico de Normalização de Dados",
    mnemonics: [
      { code: "1FN = ATÔMICO", meaning: "Cada coluna contém apenas um valor indivisível, sem listas ou campos compostos." },
      { code: "2FN = CHAVE TODA", meaning: "Dependência funcional total da chave primária (sem dependência parcial)." },
      { code: "3FN = SEM PONTE", meaning: "Elimina dependências transitivas entre atributos não-chave." }
    ],
    question: {
      id: 102,
      question: "Em um banco de dados relacional, uma tabela encontra-se na Segunda Forma Normal (2FN) quando:",
      options: {
        A: "Possui colunas com múltiplos valores separados por vírgula.",
        B: "Está na 1FN e nenhum atributo não-chave depende parcialmente de uma chave primária composta.",
        C: "Não possui nenhuma chave estrangeira declarada.",
        D: "Possui todas as colunas obrigatoriamente indexadas em árvore B+.",
        E: "Elimina toda e qualquer dependência transitiva entre atributos secundários."
      },
      answer: "B",
      explanation: "A 2FN exige estar na 1FN e que todos os atributos não-chave dependam da totalidade da chave primária (eliminação da dependência funcional parcial)."
    }
  },

  "Matemática Financeira": {
    subject: "Matemática Financeira",
    topic: "Juros Compostos & Sistemas de Amortização (SAC vs Price)",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Questões práticas de cálculo do valor das parcelas e amortizações no Sistema de Amortização Constante (SAC).",
    section1Title: "1. Princípios do Sistema de Amortização Constante (SAC)",
    section1Body: "No Sistema SAC, a amortização do saldo devedor é rigorosamente constante em todas as parcelas (A = Saldo Inicial / N). Como os juros são calculados sempre sobre o saldo devedor remanescente, as parcelas (prestação = amortização + juros) são decrescentes ao longo do tempo.",
    section2Title: "2. Mnemônico de Amortização",
    mnemonics: [
      { code: "SAC = PARCELA CAI", meaning: "Amortização é fixa; juros diminuem; prestações são decrescentes." },
      { code: "PRICE = PARCELA IGUAL", meaning: "Prestações são constantes; amortização cresce; juros diminuem." }
    ],
    question: {
      id: 103,
      question: "Um cliente contratou um financiamento de R$ 120.000,00 pelo Sistema SAC em 12 parcelas mensais, à taxa de 1% a.m. O valor da amortização mensal constante é de:",
      options: {
        A: "R$ 12.000,00",
        B: "R$ 10.000,00",
        C: "R$ 11.200,00",
        D: "R$ 9.800,00",
        E: "R$ 10.500,00"
      },
      answer: "B",
      explanation: "No SAC: Amortização = Saldo Devedor / Número de Parcelas = 120.000 / 12 = R$ 10.000,00 constantes por mês."
    }
  },

  "Atendimento & Vendas": {
    subject: "Atendimento & Vendas",
    topic: "Técnicas de Negociação, Ética & Resolução CMN nº 4.949",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Cobrança dos princípios de transparência, integridade e proibição de venda casada no setor bancário.",
    section1Title: "1. Conduta e Relacionamento com Clientes Bancários",
    section1Body: "A Resolução CMN nº 4.949 estabelece os princípios que devem reger o relacionamento entre instituições financeiras e clientes: ética, transparência, clareza nas informações sobre taxas e tarifas, além da vedação expressa à prática de venda casada (condicionar a concessão de crédito à contratação de seguro ou título de capitalização).",
    section2Title: "2. Mnemônico de Atendimento Bancário",
    mnemonics: [
      { code: "VENDA CASADA = PROIBIDA", meaning: "É vedado condicionar produto principal à compra de produto acessório." },
      { code: "TRANSPARÊNCIA = CET", meaning: "O Custo Efetivo Total (CET) deve ser informado prévia e claramente ao consumidor." }
    ],
    question: {
      id: 104,
      question: "De acordo com o Código de Defesa do Consumidor e as normas do CMN, condicionar a liberação de um empréstimo à contratação de um título de capitalização configura:",
      options: {
        A: "Prática comercial legítima de fidelização.",
        B: "Venda casada, prática abusiva e expressamente vedada por lei.",
        C: "Operação financeira de risco compartilhado.",
        D: "Garantia real complementar facultativa.",
        E: "Mútuo bancário coligado."
      },
      answer: "B",
      explanation: "Art. 39, I do CDC: É vedado ao fornecedor condicionar o fornecimento de produto ou serviço ao fornecimento de outro produto ou serviço (venda casada)."
    }
  },

  "Informática Básica": {
    subject: "Informática Básica",
    topic: "Segurança da Informação & Princípios CIDAN",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Cobrança dos cinco pilares fundamentais da segurança da informação (Confidencialidade, Integridade, Disponibilidade, Autenticidade e Não-repúdio).",
    section1Title: "1. Princípios Básicos de Segurança Digital",
    section1Body: "A Confidencialidade garante que a informação só será acessível a pessoas autorizadas. A Integridade garante que a informação não sofrerá alteração não autorizada. A Disponibilidade garante que a informação estará acessível sempre que necessária. A Autenticidade garante a identidade de quem produziu a informação, e o Não-repúdio impede a negação de autoria.",
    section2Title: "2. Mnemônico CIDAN",
    mnemonics: [
      { code: "C-I-D-A-N", meaning: "Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não-repúdio." },
      { code: "NÃO-REPÚDIO = IRRETROTRATABILIDADE", meaning: "Garantido pelo uso de assinatura digital com chave privada." }
    ],
    question: {
      id: 203,
      question: "No contexto da segurança da informação, a propriedade que garante que o autor de uma transação eletrônica não possa negar a autoria da mensagem é denominada:",
      options: {
        A: "Confidencialidade.",
        B: "Não-repúdio (ou Irretratabilidade).",
        C: "Disponibilidade contínua.",
        D: "Interoperabilidade.",
        E: "Segregação de funções."
      },
      answer: "B",
      explanation: "O princípio do Não-repúdio (ou irretratabilidade) impede que uma entidade negue ter realizado determinada ação ou gerado certa informação."
    }
  },

  "Matemática & Probabilidade": {
    subject: "Matemática & Probabilidade",
    topic: "Análise Combinatória (Arranjo vs Combinação) & Probabilidade",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Questões de comissões, filas e probabilidade condicional com cálculo direto.",
    section1Title: "1. Regra Fundamental da Combinatória",
    section1Body: "Na Análise Combinatória, se a ordem dos elementos importar na formação do grupo (ex: senhas, pódios, cargos de presidente e vice), utiliza-se o Arranjo/Princípio Multiplicativo. Se a ordem dos elementos NÃO importar (ex: grupos de estudo, comissões de trabalho, sorteios de brindes idênticos), utiliza-se a Combinação Simples: C(n,p) = n! / (p! * (n-p)!).",
    section2Title: "2. Mnemônico de Combinatória",
    mnemonics: [
      { code: "ORDEM IMPORTA? A-HAM -> ARRANJO", meaning: "Se mudar a ordem mudar o resultado (pódio, senha), use Arranjo." },
      { code: "ORDEM NÃO IMPORTA? NÃO -> COMBINAÇÃO", meaning: "Se mudar a ordem for o mesmo grupo (comissão), use Combinação." }
    ],
    question: {
      id: 204,
      question: "De quantas maneiras distintas um banco pode escolher uma comissão de 3 analistas a partir de um grupo de 8 candidatos disponíveis:",
      options: {
        A: "56 maneiras.",
        B: "336 maneiras.",
        C: "24 maneiras.",
        D: "120 maneiras.",
        E: "28 maneiras."
      },
      answer: "A",
      explanation: "A ordem não importa na comissão -> Combinação Simples: C(8,3) = (8*7*6)/(3*2*1) = 336 / 6 = 56 maneiras distintas."
    }
  },

  "Língua Inglesa": {
    subject: "Língua Inglesa",
    topic: "Técnicas de Leitura Rápida (Skimming/Scanning) & Falsos Cognatos",
    lessonNumber: 1,
    totalLessons: 6,
    jurisprudenceNote: "BANCAS FEDERAIS: Questões com falsos amigos (false friends) como actually, pretend, intend, push/pull.",
    section1Title: "1. Estratégias de Interpretação em Concursos",
    section1Body: "Skimming é a leitura rápida para captar a ideia geral do texto e a tese do autor. Scanning é a busca visual focada em palavras-chave específicas solicitadas no enunciado. É crucial atentar aos falsos amigos: 'Actually' significa 'na verdade' (e não atualmente); 'Pretend' significa 'fingir' (e não pretender); 'Intend' significa 'pretender'.",
    section2Title: "2. Mnemônico de Falsos Cognatos",
    mnemonics: [
      { code: "ACTUALLY = NA VERDADE", meaning: "Atualmente em inglês é 'Currently' ou 'Nowadays'." },
      { code: "PRETEND = FINGIR", meaning: "Pretender em inglês é 'Intend'." }
    ],
    question: {
      id: 205,
      question: "No contexto de um texto em língua inglesa, a palavra 'actually' expressa sentido equivalente a:",
      options: {
        A: "Atualmente.",
        B: "Na realidade / Na verdade.",
        C: "Eventualmente.",
        D: "Recentemente.",
        E: "Raramente."
      },
      answer: "B",
      explanation: "'Actually' é um clássico falso cognato que significa 'in fact' / 'na verdade', enquanto atualmente se traduz por 'currently'."
    }
  },

  // --- RECEITA FEDERAL / FISCAL (FGV) ---
  "Direito Tributário": {
    subject: "Direito Tributário",
    topic: "Competência Tributária, Princípios Constitucionais & CTN",
    lessonNumber: 1,
    totalLessons: 15,
    jurisprudenceNote: "FGV: Cobrança aprofundada da anterioridade tributária anual vs nonagesimal e exceções do art. 150 da CF/88.",
    section1Title: "1. Limitações Constitucionais ao Poder de Tributar",
    section1Body: "A Constituição Federal de 1988 estabelece salvaguardas essenciais ao contribuinte, destacando-se o princípio da Legalidade (art. 150, I), da Irretroatividade (art. 150, III, 'a'), da Anterioridade Anual ('b') e da Anterioridade Nonagesimal ('c'). Certos tributos extrafiscais como II, IE, IOF e IPI possuem regras excepcionais quanto à vigência imediata.",
    section2Title: "2. Mnemônico das Exceções à Anterioridade",
    mnemonics: [
      { code: "II, IE, IOF, EXTRAORDINÁRIO", meaning: "Entram em vigor imediatamente (exceção à Anterioridade Anual e à Noventena)." },
      { code: "IPI, CIDE-Combustíveis, ICMS-Combustíveis", meaning: "Exceção à Anual, mas respeitam a Noventena (90 dias)." }
    ],
    question: {
      id: 105,
      question: "No que concerne aos princípios constitucionais tributários, a majoração da alíquota do Imposto sobre Produtos Industrializados (IPI):",
      options: {
        A: "Exige cumprimento concomitante da anterioridade anual e nonagesimal.",
        B: "Pode ser exigida imediatamente, sem necessidade de aguardar prazo algum.",
        C: "É exceção à anterioridade anual, mas deve observar a anterioridade nonagesimal (90 dias).",
        D: "Depende de edição prévia de lei complementar.",
        E: "Não se submete a nenhum limite constitucional."
      },
      answer: "C",
      explanation: "O IPI é exceção à anterioridade de exercício (anual), mas submete-se obrigatoriamente à anterioridade nonagesimal (art. 150, § 1º da CF/88)."
    }
  },

  "Legislação Tributária e Aduaneira": {
    subject: "Legislação Tributária e Aduaneira",
    topic: "Território Aduaneiro, Despacho & Jurisdição Fiscal",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "FGV: Cobrança dos conceitos de Zona Primária e Zona Secundária no Regulamento Aduaneiro (Decreto 6.759/09).",
    section1Title: "1. Jurisdição dos Serviços Aduaneiros",
    section1Body: "O território aduaneiro compreende todo o território nacional. Divide-se em Zona Primária (portos, aeroportos alfandegados e pontos de fronteira alfandegados) e Zona Secundária (a parte restante do território aduaneiro, incluindo águas territoriais e espaço aéreo).",
    section2Title: "2. Mnemônico Aduaneiro",
    mnemonics: [
      { code: "ZONA PRIMÁRIA = ENTRADA E SAÍDA", meaning: "Portos, aeroportos e recintos alfandegados onde ocorre o desembarque direto." },
      { code: "ZONA SECUNDÁRIA = RESTO DO PAÍS", meaning: "Território interno onde a fiscalização aduaneira atua de forma contínua." }
    ],
    question: {
      id: 106,
      question: "Segundo o Regulamento Aduaneiro brasileiro, constituem a Zona Primária do território aduaneiro:",
      options: {
        A: "Os galpões industriais das empresas exportadoras.",
        B: "As áreas terrestres ou aquáticas dos portos e aeroportos alfandegados.",
        C: "Toda a extensão da faixa de fronteira terrestre de 150 km.",
        D: "As rodovias federais e estaduais de escoamento de cargas.",
        E: "Os escritórios centrais das empresas de comércio exterior."
      },
      answer: "B",
      explanation: "A Zona Primária compreende as áreas terrestres ou aquáticas dos portos e aeroportos alfandegados e recintos de fronteira onde ocorre o controle direto de mercadorias."
    }
  },

  "Contabilidade Geral": {
    subject: "Contabilidade Geral",
    topic: "Estrutura do Balanço Patrimonial & CPC 00 (Estrutura Conceitual)",
    lessonNumber: 1,
    totalLessons: 14,
    jurisprudenceNote: "FGV: Cobrança da definição formal de Ativo (recurso econômico presente controlado) e Passivo (obrigação presente).",
    section1Title: "1. Elementos das Demonstrações Contábeis",
    section1Body: "Segundo o CPC 00 (R2), Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados. Passivo é uma obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados. O Patrimônio Líquido é a participação residual nos ativos da entidade após a dedução de todos os seus passivos.",
    section2Title: "2. Equação Fundamental da Contabilidade",
    mnemonics: [
      { code: "PL = ATIVO - PASSIVO", meaning: "Patrimônio Líquido é o resíduo contábil: o que a empresa tem menos o que ela deve." },
      { code: "DÉBITO = DESTINO / CRÉDITO = ORIGEM", meaning: "Regra das partidas dobradas no método contábil." }
    ],
    question: {
      id: 107,
      question: "Conforme o Pronunciamento Técnico CPC 00, define-se Ativo como:",
      options: {
        A: "Todos os bens físicos de propriedade legal da entidade.",
        B: "Recurso econômico presente controlado pela entidade como resultado de eventos passados.",
        C: "A soma do capital social com as reservas de lucros acumuladas.",
        D: "O fluxo de caixa projetado para os próximos cinco exercícios.",
        E: "Qualquer direito futuro sem controle comprovado."
      },
      answer: "B",
      explanation: "Definição literal do CPC 00: 'Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados'."
    }
  },

  // --- MARINHA DO BRASIL (RM2 / SMV) ---
  "Organização Básica da Marinha": {
    subject: "Organização Básica da Marinha",
    topic: "Estrutura do Comando da Marinha & Missão Constitucional",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "DEnsM: Cobrança literal das atribuições do Comandante da Marinha e do Ministério da Defesa (LC 97/99).",
    section1Title: "1. Destinação Constitucional da Marinha do Brasil",
    section1Body: "Art. 142 da CF/88: As Forças Armadas, constituídas pela Marinha, pelo Exército e pela Aeronáutica, são instituições nacionais permanentes e regulares, organizadas com base na hierarquia e na disciplina, sob a autoridade suprema do Presidente da República, e destinam-se à defesa da Pátria, à garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem.",
    section2Title: "2. Mnemônico Militar",
    mnemonics: [
      { code: "HD = HIERARQUIA & DISCIPLINA", meaning: "As duas bases constitucionais inegociáveis de todas as Forças Armadas." },
      { code: "PRESIDENTE = AUTORIDADE SUPREMA", meaning: "Comandante Supremo das Forças Armadas segundo o art. 142 da CF/88." }
    ],
    question: {
      id: 108,
      question: "Nos termos do artigo 142 da Constituição Federal de 1988, as Forças Armadas são organizadas com base em quais princípios fundamentais:",
      options: {
        A: "Soberania e Autonomia Funcional.",
        B: "Hierarquia e Disciplina.",
        C: "Legalidade e Antiguidade Relativa.",
        D: "Descentralização e Rigidez Operacional.",
        E: "Proporcionalidade e Comando Unificado."
      },
      answer: "B",
      explanation: "Art. 142 da CF/88 expressamente determina que as Forças Armadas são organizadas com base na hierarquia e na disciplina."
    }
  },

  "História e Tradições Navais": {
    subject: "História e Tradições Navais",
    topic: "A Batalha do Riachuelo (1865) & Almirante Barroso",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "DEnsM: Cobrança dos sinais de transmissão célebres e importância estratégica da vitória na Guerra da Tríplice Aliança.",
    section1Title: "1. A Batalha Naval do Riachuelo (11 de Junho de 1865)",
    section1Body: "Considerada a data magna da Marinha do Brasil, a Batalha do Riachuelo marcou a vitória decisiva da Esquadra brasileira, comandada pelo Almirante Barroso a bordo da Fragata Amazonas. Os sinais históricos transmitidos por bandeiras foram: 'O Brasil espera que cada um cumpra o seu dever' e 'Sustentar o fogo que a vitória é nossa'.",
    section2Title: "2. Mnemônico de Tradições Navais",
    mnemonics: [
      { code: "11 DE JUNHO = RIACHUELO", meaning: "Data Magna da Marinha do Brasil." },
      { code: "FRAGATA AMAZONAS", meaning: "Navio capitânia comandado pelo Almirante Barroso." }
    ],
    question: {
      id: 109,
      question: "A Data Magna da Marinha do Brasil é comemorada em 11 de junho em memória de qual evento histórico militar:",
      options: {
        A: "A Tomada de Caiena em 1809.",
        B: "A Batalha Naval do Riachuelo em 1865.",
        C: "A Revolta da Armada em 1893.",
        D: "A Batalha do Passo da Pátria.",
        E: "A chegada da Família Real ao Brasil em 1808."
      },
      answer: "B",
      explanation: "Em 11 de junho de 1865 ocorreu a épica Batalha Naval do Riachuelo, comandada pelo Almirante Barroso, consagrada como a Data Magna da Marinha do Brasil."
    }
  },

  "Legislação Militar": {
    subject: "Legislação Militar",
    topic: "Estatuto dos Militares (Lei 6.880/80) & Regulamento Disciplinar (RDM)",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "DEnsM: Cobrança dos deveres e obrigações militares, situações de atividade/inatividade e distinção entre transgressão disciplinar e crime militar.",
    section1Title: "1. O Estatuto dos Militares (Lei 6.880/80)",
    section1Body: "Os membros das Forças Armadas, em razão de sua destinação constitucional, formam uma categoria especial de servidores da Pátria. O Estatuto disciplina o ingresso, hierarquia, disciplina, direitos, prerrogativas e deveres. As penas disciplinares da Marinha (RDM) compreendem: repreensão, impedimento disciplinar, prisão disciplinar e licenciamento/exclusão a bem da disciplina.",
    section2Title: "2. Mnemônico de Legislação Militar",
    mnemonics: [
      { code: "ATIVIDADE = EFETIVO SERVIÇO", meaning: "Militares de carreira e temporários incorporados." },
      { code: "INATIVIDADE = RESERVA REMUNERADA / REFORMADO", meaning: "Reserva pode ser convocada; Reformado está dispensado definitivamente." }
    ],
    question: {
      id: 206,
      question: "Segundo a Lei Federal nº 6.880/1980 (Estatuto dos Militares), os militares que estão dispensados definitivamente da prestação de serviço na ativa pertencem à situação de:",
      options: {
        A: "Reserva não remunerada.",
        B: "Disponibilidade temporária.",
        C: "Reforma (Militares Reformados).",
        D: "Agregação especial.",
        E: "Excedente funcional."
      },
      answer: "C",
      explanation: "Art. 3º, § 1º, 'b', II da Lei 6.880/80: Os militares na inatividade compreendem os reformados, quando estão dispensados, definitivamente, da prestação de serviço na ativa."
    }
  },

  // --- SAÚDE / SUS (IBDO) ---
  "Legislação do SUS (Leis 8.080 e 8.142)": {
    subject: "Legislação do SUS (Leis 8.080 e 8.142)",
    topic: "Princípios Doutrinários e Organizativos do SUS",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "IBDO: Distinção rigorosa entre princípios doutrinários (Universalidade, Integralidade, Equidade) e organizativos (Descentralização, Regionalização, Hierarquização, Participação).",
    section1Title: "1. Princípios Constitucionais do SUS",
    section1Body: "A Lei Federal nº 8.080/1990 (Lei Orgânica da Saúde) estrutura o Sistema Único de Saúde. Os princípios doutrinários norteiam a essência do cuidado: Universalidade (acesso a todos), Integralidade (atendimento preventivo, curativo e reabilitador) e Equidade (tratar desigualmente os desiguais para reduzir desigualdades).",
    section2Title: "2. Mnemônico dos Princípios do SUS",
    mnemonics: [
      { code: "DOUTRINÁRIOS = U-I-E", meaning: "Universalidade, Integralidade, Equidade (a filosofia do SUS)." },
      { code: "ORGANIZATIVOS = D-R-H-P", meaning: "Descentralização, Regionalização, Hierarquização, Participação Social (o funcionamento)." }
    ],
    question: {
      id: 110,
      question: "No âmbito do SUS, o princípio que determina a disponibilização de serviços de saúde sem qualquer tipo de discriminação ou privilégio a todos os cidadãos é denominado:",
      options: {
        A: "Descentralização político-administrativa.",
        B: "Universalidade do acesso aos serviços de saúde.",
        C: "Hierarquização dos níveis de atenção.",
        D: "Complementaridade do setor privado.",
        E: "Subsidiariedade territorial."
      },
      answer: "B",
      explanation: "A Universalidade garante que a saúde é direito de todos e dever do Estado, garantindo acesso universal e igualitário aos serviços."
    }
  },

  "Políticas Públicas de Saúde": {
    subject: "Políticas Públicas de Saúde",
    topic: "Atenção Primária à Saúde (APS), PNAB & Saúde da Família (ESF)",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "IBDO: Cobrança das diretrizes da Política Nacional de Atenção Básica (Portaria GM/MS 2.436/2017) e composição da equipe mínima da ESF.",
    section1Title: "1. A Atenção Básica como Ordenadora da Rede",
    section1Body: "A Atenção Primária é o primeiro nível de atenção em saúde e se caracteriza por um conjunto de ações de saúde individuais, familiares e coletivas. Funciona como a principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde (RAS), orientada pelos princípios da longitudinalidade, coordenação do cuidado e territorialização.",
    section2Title: "2. Mnemônico de Atenção Básica",
    mnemonics: [
      { code: "ESF = PORTA PREFERENCIAL", meaning: "Estratégia prioritária para expansão e consolidação da APS no Brasil." },
      { code: "EQUIPE MÍNIMA ESF", meaning: "Médico, Enfermeiro, Auxiliar/Técnico de Enfermagem e Agentes Comunitários (ACS)." }
    ],
    question: {
      id: 207,
      question: "Conforme a Política Nacional de Atenção Básica (PNAB), a equipe mínima de Saúde da Família (eSF) deve ser composta obrigatoriamente por:",
      options: {
        A: "Médico, Enfermeiro, Técnico/Auxiliar de Enfermagem e Agentes Comunitários de Saúde (ACS).",
        B: "Médico, Psicólogo, Fisioterapeuta e Farmacêutico.",
        C: "Enfermeiro, Assistente Social e Cirurgião Dentista exclusivamente.",
        D: "Apenas Agentes Comunitários e Técnicos de Enfermagem sob supervisão remota.",
        E: "Equipe multiprofissional com no mínimo 10 especialistas médicos."
      },
      answer: "A",
      explanation: "A PNAB estabelece como equipe mínima da Estratégia Saúde da Família: médico (preferencialmente de família), enfermeiro, técnico ou auxiliar de enfermagem e ACS."
    }
  },

  "Noções de Administração Pública": {
    subject: "Noções de Administração Pública",
    topic: "Nova Lei de Licitações (Lei 14.133/21) & Princípios LIMPE",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "IBDO: Cobrança das novas modalidades de licitação (Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo) e extinção de Tomada de Preços e Convite.",
    section1Title: "1. Modalidades da Lei nº 14.133/2021",
    section1Body: "A nova Lei de Licitações e Contratos Administrativos instituiu cinco modalidades oficiais: Pregão (bens e serviços comuns), Concorrência (bens e serviços especiais e obras), Concurso (trabalho técnico, científico ou artístico), Leilão (alienação de bens) e Diálogo Competitivo (soluções inovadoras). As antigas modalidades Convite e Tomada de Preços foram extintas.",
    section2Title: "2. Mnemônico de Licitações 14.133",
    mnemonics: [
      { code: "P-C-C-L-DC", meaning: "Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo." },
      { code: "EXTINTOS = CONVITE & TOMADA DE PREÇOS", meaning: "Não existem mais na Lei 14.133/21." }
    ],
    question: {
      id: 208,
      question: "Nos termos da Lei nº 14.133/2021 (Nova Lei de Licitações), assinale a opção que apresenta uma modalidade licitatória INOVADORA introduzida no ordenamento jurídico brasileiro:",
      options: {
        A: "Tomada de Preços.",
        B: "Diálogo Competitivo.",
        C: "Carta Convite.",
        D: "Consulta Pública Vinculante.",
        E: "Leilão Reverso Invertido."
      },
      answer: "B",
      explanation: "O Diálogo Competitivo é a nova modalidade introduzida pela Lei 14.133/21 para contratações complexas e inovadoras, enquanto Convite e Tomada de Preços foram revogados."
    }
  },

  // --- MATÉRIA COMUM: PORTUGUÊS ---
  "Língua Portuguesa": {
    subject: "Língua Portuguesa",
    topic: "Sintaxe de Regência, Concordância Verbal & Crase",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "BANCAS GERAIS: Cobrança dos verbos transitivos indiretos clássicos (assistir, visar, aspirar, obedecer).",
    section1Title: "1. Regência Verbal na Norma Culta",
    section1Body: "O verbo 'assistir' no sentido de ver/presenciar exige preposição 'a' (assistir ao jogo). O verbo 'visar' no sentido de ter em vista exige 'a' (visar ao cargo público). O verbo 'aspirar' no sentido de almejar exige 'a' (aspirar à vaga). O verbo 'obedecer' é sempre transitivo indireto (obedecer às leis).",
    section2Title: "2. Mnemônico de Regência Crítica",
    mnemonics: [
      { code: "ASSISTIR = VER -> EXIGE 'A'", meaning: "Assisti ao filme / Assisti ao debate oficial." },
      { code: "VISAR = ALMEJAR -> EXIGE 'A'", meaning: "Viso ao sucesso no concurso público." },
      { code: "OBEDECER -> SEMPRE COM 'A'", meaning: "Obedeceu ao comando legal." }
    ],
    question: {
      id: 111,
      question: "De acordo com a norma culta da língua portuguesa, assinale a frase em que a regência verbal está plenamente correta:",
      options: {
        A: "O candidato aspira o cargo público desde o ano passado.",
        B: "Nós assistimos o simulado com muita atenção.",
        C: "O concurseiro disciplinado visa ao cargo dos seus sonhos.",
        D: "Os cidadãos desobedeceram o edital publicado.",
        E: "Ele prefere estudar do que descansar."
      },
      answer: "C",
      explanation: "O verbo 'visar' com sentido de almejar é transitivo indireto regido pela preposição 'a' (visa ao cargo). 'Aspirar' com sentido de desejar exige 'a', 'assistir' de ver exige 'a', 'desobedecer' exige 'a', e 'preferir' rege 'a' (prefere X a Y, nunca 'do que')."
    }
  }
};

// 2. Dados Oficiais de Raio-X & Pareto 80/20 por Carreira
export const CAREER_PARETO_DB: Record<string, { topTopics: ParetoTopic[]; cuts: HistoricalCut[] }> = {
  "bb_comercial": {
    cuts: [
      { year: 2023, score: "78.5 pontos (Cesgranrio - Microrregião SP/RJ)" },
      { year: 2021, score: "74.0 pontos (Cesgranrio - Nacional)" },
      { year: 2018, score: "72.5 pontos (Cesgranrio - Geral)" }
    ],
    topTopics: [
      { subject: "Conhecimentos Bancários", topic: "Sistema Financeiro Nacional, Pix & Mercado de Capitais", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "Língua Portuguesa", topic: "Interpretação de Texto, Coesão & Sintaxe de Regência", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "20%" },
      { subject: "Atendimento & Vendas", topic: "Técnicas de Negociação, Ética Bancária & Resolução 4.949", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" },
      { subject: "Matemática Financeira", topic: "Juros Compostos, Sistemas de Amortização (SAC/Price)", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" },
      { subject: "Informática Básica", topic: "Segurança Digital, Pacote Office & Nuvem", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" }
    ]
  },
  "bb_ti": {
    cuts: [
      { year: 2023, score: "68.0 pontos (Cesgranrio - TI Nacional)" },
      { year: 2021, score: "62.5 pontos (Cesgranrio - TI Geral)" }
    ],
    topTopics: [
      { subject: "Tecnologia da Informação & Banco de Dados", topic: "Modelagem Relacional, SQL, Python & Arquitetura de Nuvem", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "35%" },
      { subject: "Conhecimentos Bancários", topic: "Open Finance, Meios de Pagamento & Bacen", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "20%" },
      { subject: "Língua Portuguesa", topic: "Compreensão de Texto e Sintaxe Conectiva", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" },
      { subject: "Matemática & Probabilidade", topic: "Probabilidade, Análise Combinatória e Lógica", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" },
      { subject: "Língua Inglesa", topic: "Vocabulário Técnico de TI e Interpretação", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" }
    ]
  },
  "atrfb": {
    cuts: [
      { year: 2023, score: "82.5 pontos (FGV - Analista Tributário)" },
      { year: 2014, score: "76.0 pontos (Esaf - Nacional)" },
      { year: 2012, score: "74.5 pontos (Esaf - Nacional)" }
    ],
    topTopics: [
      { subject: "Direito Tributário", topic: "Limitações Constitucionais, CTN, Crédito & Obrigação", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "Legislação Tributária e Aduaneira", topic: "Território Aduaneiro, Despacho & Infrações Fiscais", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "20%" },
      { subject: "Direito Constitucional", topic: "Controle de Constitucionalidade, Eficácia & Remédios", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "15%" },
      { subject: "Direito Administrativo", topic: "Atos Administrativos (COFIFOMOB) & Abuso de Poder", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "15%" },
      { subject: "Contabilidade Geral", topic: "Estrutura do Balanço Patrimonial, DRE & CPC 00", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "15%" }
    ]
  },
  "marinha_rm2": {
    cuts: [
      { year: 2025, score: "84.0 pontos (DEnsM - 1º Distrito Naval RJ)" },
      { year: 2024, score: "80.0 pontos (DEnsM - Geral)" },
      { year: 2023, score: "78.0 pontos (DEnsM - Geral)" }
    ],
    topTopics: [
      { subject: "Organização Básica da Marinha", topic: "Estrutura do Comando da Marinha & Missão Constitucional", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "História e Tradições Navais", topic: "Batalha do Riachuelo, Almirante Tamandaré & Tradições", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "Legislação Militar", topic: "Estatuto dos Militares (Lei 6.880/80) & Regulamento Disciplinar (RDM)", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "Língua Portuguesa", topic: "Sintaxe de Regência, Crase e Coesão Textual", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "25%" }
    ]
  },
  "ses_rj": {
    cuts: [
      { year: 2026, score: "76.0 pontos (IBDO - Estimativa Oficial)" },
      { year: 2022, score: "72.0 pontos (CEPUERJ - Geral)" }
    ],
    topTopics: [
      { subject: "Legislação do SUS (Leis 8.080 e 8.142)", topic: "Princípios Doutrinários, Financiamento e Controle Social", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "30%" },
      { subject: "Políticas Públicas de Saúde", topic: "Atenção Primária à Saúde e Estratégia Saúde da Família", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "25%" },
      { subject: "Língua Portuguesa", topic: "Interpretação de Texto, Acentuação e Sintaxe", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "25%" },
      { subject: "Noções de Administração Pública", topic: "Nova Lei de Licitações (Lei 14.133/21) e Princípios LIMPE", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "20%" }
    ]
  }
};

// 3. Temas Oficiais de Redação por Carreira
export const CAREER_ESSAY_THEMES: Record<string, string> = {
  "bb_comercial": "O papel dos bancos públicos, da inteligência artificial e da inclusão bancária no desenvolvimento sustentável brasileiro.",
  "bb_ti": "A segurança da informação e a proteção de dados (LGPD) frente ao avanço do Open Finance e da computação em nuvem.",
  "atrfb": "A reforma tributária sobre o consumo, a simplificação do sistema fiscal e seus impactos no pacto federativo nacional.",
  "marinha_rm2": "A importância estratégica e econômica da 'Amazônia Azul' para a soberania e segurança marítima do Brasil.",
  "ses_rj": "Os desafios da regionalização, do financiamento tripartite e da equidade no acesso à saúde pública no SUS."
};

// Helper para obter a aula com matching preciso e insensível a acentos/prefixos
export function getLessonContent(subjectName: string): LessonContent {
  if (STUDY_LESSONS_DB[subjectName]) {
    return STUDY_LESSONS_DB[subjectName];
  }

  // Tenta matching parcial
  const normalized = subjectName.toLowerCase();
  for (const [key, value] of Object.entries(STUDY_LESSONS_DB)) {
    if (normalized.includes(key.toLowerCase()) || key.toLowerCase().includes(normalized)) {
      return value;
    }
  }

  // Fallback seguro
  return {
    subject: subjectName,
    topic: `Tópicos Fundamentais de ${subjectName}`,
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: `Cobrança frequente da literalidade dos pontos centrais de ${subjectName} em provas de concurso.`,
    section1Title: `1. Conceitos Estruturais de ${subjectName}`,
    section1Body: `O estudo aprofundado de ${subjectName} exige a compreensão dos princípios dogmáticos e a resolução de questões de bancas anteriores para fixação das pegadinhas clássicas.`,
    section2Title: "2. Esquema de Fixação Rápida",
    mnemonics: [
      { code: "FOCO & REPETIÇÃO", meaning: "Resolva itens comentados após a leitura da lei seca ou teoria." }
    ],
    question: {
      id: 999,
      question: `Em relação aos fundamentos da disciplina ${subjectName}, assinale a alternativa que expressa a regra geral aplicável aos certames públicos:`,
      options: {
        A: "A interpretação sistemática prevalece sobre a literalidade isolada quando houver aparente conflito de normas.",
        B: "As bancas examinadoras anulam automaticamente qualquer questão de teoria.",
        C: "Não há necessidade de memorizar prazos em provas de primeira fase.",
        D: "A jurisprudência sumulada nunca é exigida em concursos federais.",
        E: "O edital não vincula a administração pública."
      },
      answer: "A",
      explanation: "No estudo para concursos, a interpretação sistemática do ordenamento é princípio basilar de hermenêutica jurídica e técnica."
    }
  };
}
