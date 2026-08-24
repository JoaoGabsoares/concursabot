// Engine de Conteúdo Dinâmico por Carreira e Disciplina do Gabarito.AI

export interface ModuleQuestion {
  id: number;
  question: string;
  options: { [key: string]: string };
  answer: string;
  explanation: string;
  topic?: string;
  banca?: string;
  difficulty?: 'facil' | 'medio' | 'dificil';
}

export interface ModulePage {
  pageNumber: number; // 1 a 5
  pageTitle: string;
  category: 'Doutrina & Teoria' | 'Esquemas & Tabelas' | 'Casos Práticos & Pegadinhas' | 'Lei Seca & Súmulas' | 'Fixação & Questões';
  leadText: string;
  bodyText: string;
  deepDiveText?: string;
  tableData?: { headers: string[]; rows: string[][] };
  mnemonics?: { code: string; meaning: string }[];
  practicalCases?: { title: string; scenario: string; tip: string }[];
  lawArticles?: { article: string; text: string }[];
  question?: ModuleQuestion;
  questions?: ModuleQuestion[];
}

export interface DisciplineModule {
  moduleNumber: number;
  totalModules: number;
  title: string;
  bancaTrend: string;
  totalPages: number;
  pages: ModulePage[];
  questions?: ModuleQuestion[];
}

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
  deepDiveText?: string;
  practicalCases?: { title: string; scenario: string; tip: string }[];
  lawArticles?: { article: string; text: string }[];
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
    deepDiveText: "Aprofundamento Doutrinário: A classificação tricotômica de José Afonso da Silva é o padrão hegemônico da FGV e Cesgranrio. As normas de eficácia plena não dependem de qualquer atuação do legislador infraconstitucional e possuem aplicabilidade direta, imediata e integral. As normas de eficácia contida (também chamadas de redutíveis ou restringíveis) já nascem completas e com eficácia plena, porém autorizam expressamente que o legislador ordinário imponha restrições (ex: Art. 5º, XIII - 'é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer'). Enquanto a lei não for editada, o direito é amplo. Já as normas de eficácia limitada subdividem-se em: (a) definidoras de princípios institutivos ou organizativos; e (b) definidoras de princípios programáticos (traçam metas e diretrizes para atuação estatal).",
    practicalCases: [
      {
        title: "Caso Prático FGV: Exercício Profissional sem Regulamentação",
        scenario: "João pretende exercer atividade técnica inovadora para a qual não existe lei regulamentadora. O Município indefere seu alvará alegando ausência de previsão legal.",
        tip: "Pegadinha FGV: O Art. 5º, XIII é norma de eficácia CONTIDA. Na ausência de lei restritiva, a liberdade de exercício é PLENA. A negativa estatal é ilegal."
      },
      {
        title: "Caso Prático FGV: Habeas Data vs Mandado de Segurança",
        scenario: "Servidor público solicita cópia integral de processo administrativo disciplinar a que responde, mas tem o pedido negado administrativamente.",
        tip: "Pegadinha Clássica: Para obter vista de autos ou certidões de processos administrativos próprios, o remédio correto é o MANDADO DE SEGURANÇA (direito de certidão / vista), e NÃO o Habeas Data (que se restringe a bancos de dados públicos de dados pessoais)."
      }
    ],
    lawArticles: [
      { article: "CF/88, Art. 5º, XIII", text: "É livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer." },
      { article: "CF/88, Art. 5º, LXXII", text: "Conceder-se-á habeas data: a) para assegurar o conhecimento de informações relativas à pessoa do impetrante... b) para a retificação de dados..." }
    ],
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

  "Legislação Tributária": {
    subject: "Legislação Tributária",
    topic: "Tributos Federais: IRPJ, CSLL, PIS/PASEP, COFINS e IPI",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "FGV ATRFB: Cobrança das regras de apuração pelo Lucro Real vs Lucro Presumido, não cumulatividade do PIS/COFINS e Simples Nacional (LC 123/2006).",
    section1Title: "1. Sistema Tributário Federal e Regimes de Apuração",
    section1Body: "A Legislação Tributária Federal compreende o conjunto de normas que regulamentam a incidência, apuração e fiscalização dos tributos de competência da União. O Imposto sobre a Renda da Pessoa Jurídica (IRPJ) e a Contribuição Social sobre o Lucro Líquido (CSLL) podem ser apurados com base no Lucro Real (obrigatório para instituições financeiras e empresas com faturamento acima de R$ 78 milhões), Lucro Presumido ou Simples Nacional.",
    deepDiveText: "PIS/PASEP e COFINS: Operam em dois regimes básicos: 1) Regime Cumulativo (regras da Lei 9.718/98), com alíquotas de 0,65% e 3,00%, sem direito ao creditamento de insumos; 2) Regime Não Cumulativo (Leis 10.637/02 e 10.833/03), com alíquotas gerais de 1,65% e 7,60%, permitindo apropriação de créditos sobre insumos, energia elétrica, aluguéis de prédios e depreciação de bens do ativo imobilizado.",
    practicalCases: [
      {
        title: "Caso Prático FGV: Mudança de Regime de PIS/COFINS",
        scenario: "Empresa tributada pelo Lucro Real pretende deduzir créditos de PIS/COFINS na aquisição de mão de obra paga a pessoa física.",
        tip: "Pegadinha Clássica FGV: A legislação veda expressamente a apuração de créditos de PIS/COFINS sobre pagamentos efetuados a pessoas físicas (salários de funcionários)."
      }
    ],
    lawArticles: [
      { article: "Lei 10.833/03, Art. 3º", text: "Do valor apurado na forma do art. 2º a pessoa jurídica poderá descontar créditos calculados em relação a bens adquiridos para revenda e insumos..." },
      { article: "LC 123/2006, Art. 12", text: "O Simples Nacional estabelece regime diferenciado e favorecido para as Microempresas e Empresas de Pequeno Porte." }
    ],
    section2Title: "2. Esquema Mnemônico de Tributos Federais",
    mnemonics: [
      { code: "PIS/COFINS NÃO CUMULATIVO", meaning: "Alíquotas 1,65% e 7,60% com direito ao desconto de créditos sobre insumos." },
      { code: "LUCRO REAL OBRIGATÓRIO", meaning: "Faturamento > R$ 78 milhões/ano, bancos e factorings." }
    ],
    question: {
      id: 106,
      question: "No regime de apuração não cumulativa da COFINS (Lei nº 10.833/2003), a pessoa jurídica industrial tem direito ao desconto de créditos sobre:",
      options: {
        A: "A folha de pagamento e os salários pagos aos seus empregados diretos.",
        B: "Os bens e serviços utilizados como insumo na fabricação de produtos destinados à venda.",
        C: "As doações financeiras efetuadas a entidades sem fins lucrativos.",
        D: "Os dividendos distribuídos aos seus acionistas minoritários.",
        E: "As multas de trânsito pagas por sua frota de transporte."
      },
      answer: "B",
      explanation: "A Lei 10.833/2003, em seu art. 3º, II, autoriza expressamente o desconto de créditos sobre bens e serviços utilizados como insumo na prestação de serviços e na produção ou fabricação de bens destinados à venda."
    }
  },

  "Legislação Aduaneira": {
    subject: "Legislação Aduaneira",
    topic: "Regulamento Aduaneiro, Território, Despacho & Jurisdição Fiscal",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "FGV ATRFB/AFRFB: Cobrança dos conceitos de Zona Primária e Zona Secundária no Regulamento Aduaneiro (Decreto 6.759/09), Portos Secos e Regimes Especiais.",
    section1Title: "1. Jurisdição dos Serviços Aduaneiros e Território",
    section1Body: "O território aduaneiro compreende todo o território nacional. Divide-se em Zona Primária (área demarcada de portos, aeroportos alfandegados e pontos de fronteira alfandegados) e Zona Secundária (a parte restante do território aduaneiro, incluindo águas territoriais e espaço aéreo). Os Portos Secos (antigas Estações Aduaneiras de Interior - EADI) são recintos alfandegados de uso público situados em Zona Secundária.",
    deepDiveText: "Despacho Aduaneiro: É o procedimento fiscal mediante o qual é verificada a exatidão dos dados declarados pelo importador/exportador em relação às mercadorias. Ocorre por meio da Declaração de Importação (DI) ou Declaração Única de Importação (DU-Imp) no SISCOMEX. Canais de Conferência Aduaneira: Verde (desembaraço automático), Amarelo (exame documental), Vermelho (exame documental e conferência física) e Cinza (exame documental, físico e procedimento especial de controle aduaneiro por suspeita de fraude no valor declarado).",
    practicalCases: [
      {
        title: "Caso Prático FGV: Classificação de Recinto Alfandegado",
        scenario: "Um recinto alfandegado situado a 100 km do porto marítimo realiza armazenagem e despacho de mercadorias importadas sob controle fiscal.",
        tip: "Porto Seco em Zona Secundária: Embora realize despacho e desembaraço, recintos alfandegados de interior pertencem à ZONA SECUNDÁRIA."
      }
    ],
    lawArticles: [
      { article: "Decreto 6.759/09, Art. 3º", text: "A jurisdição dos serviços aduaneiros estende-se por todo o território aduaneiro e abrange a zona primária e a zona secundária." },
      { article: "Decreto 6.759/09, Art. 686", text: "Aplica-se a pena de perdimento da mercadoria estrangeira encontrada ao desamparo de documento comprobatório de sua importação regular." }
    ],
    section2Title: "2. Mnemônico Aduaneiro de Canais e Zonas",
    mnemonics: [
      { code: "ZONA PRIMÁRIA = ENTRADA E SAÍDA", meaning: "Portos, aeroportos e pontos de fronteira onde ocorre o desembarque direto." },
      { code: "ZONA SECUNDÁRIA = RESTO DO PAÍS", meaning: "Território interno onde a fiscalização atua, incluindo Portos Secos." },
      { code: "CANAIS = V-A-V-C", meaning: "Verde (Direto), Amarelo (Documental), Vermelho (Físico + Doc), Cinza (Fraude/Valoração)." }
    ],
    question: {
      id: 107,
      question: "Segundo o Regulamento Aduaneiro brasileiro (Decreto nº 6.759/2009), constituem a Zona Primária do território aduaneiro:",
      options: {
        A: "Os galpões industriais das empresas exportadoras situados no interior dos estados.",
        B: "As áreas terrestres ou aquáticas dos portos e aeroportos alfandegados e recintos de fronteira.",
        C: "Toda a extensão da faixa de fronteira terrestre nacional de 150 km de largura.",
        D: "As rodovias federais e estaduais de escoamento logístico de cargas intermodais.",
        E: "Os escritórios centrais das empresas trading de comércio exterior."
      },
      answer: "B",
      explanation: "A Zona Primária compreende as áreas terrestres ou aquáticas dos portos e aeroportos alfandegados e recintos de fronteira onde ocorre o controle e desembarque direto de mercadorias procedentes do exterior."
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
  "Formação Militar-Naval": {
    subject: "Formação Militar-Naval",
    topic: "Estatuto dos Militares (Lei 6.880/80), RDM, LESTA, Tradições e História Naval",
    lessonNumber: 1,
    totalLessons: 12,
    jurisprudenceNote: "DEnsM: Cobrança rigorosa da literalidade da Lei 6.880/80 (Estatuto dos Militares), RDM (Decreto nº 88.545/83), LESTA (Lei 9.537/97), Cerimonial da Marinha e Batalha Naval do Riachuelo.",
    section1Title: "1. Hierarquia, Disciplina Militar e Deveres Navais",
    section1Body: "A hierarquia militar é a ordenação da autoridade, em níveis diferentes, dentro da estrutura das Forças Armadas. A disciplina militar é a rigorosa observância e o acatamento integral das leis, regulamentos e normas. A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida entre militares da ativa, da reserva remunerada e reformados. O posto é o grau hierárquico do oficial, conferido por ato do Presidente da República e confirmado em Carta Patente; a graduação é o grau hierárquico da praça, conferido pelo Comandante da Marinha ou autoridade delegada. São praças especiais: Guardas-Marinha e Aspirantes.",
    deepDiveText: "Aprofundamento Doutrinário Militar-Naval:\n1) RDM (Decreto nº 88.545/1983): As penas disciplinares para praças compreendem: repreensão, impedimento disciplinar, serviço extraordinário (até 10 dias de no máximo 2 horas cada), prisão disciplinar (até 30 dias) e exclusão/licenciamento a bem da disciplina.\n2) LESTA (Lei nº 9.537/1997): A Autoridade Marítima no Brasil é exercida pelo Comandante da Marinha, que tem competência para salvaguardar a vida humana no mar, garantir a segurança do tráfego aquaviário e prevenir a poluição hídrica por embarcações.\n3) História e Tradições Navais: A Batalha Naval do Riachuelo ocorreu em 11 de junho de 1865 (Data Magna da Marinha), onde a Fragata Amazonas, comandada pelo Almirante Barroso, usou sua proa como aríete contra as chatas e vapores paraguaios.",
    practicalCases: [
      {
        title: "Pegadinha DEnsM: Praças Especiais e Precedência",
        scenario: "Um Guarda-Marinha ou Aspirante é considerado Oficial Subalterno ou Praça Especial?",
        tip: "Praça Especial! Art. 16, § 4º da Lei 6.880/80: Guardas-Marinha e Aspirantes são praças especiais com prerrogativas de oficiais subalternos, mas NÃO são ainda oficiais com Carta Patente definitiva."
      },
      {
        title: "Pegadinha DEnsM: Serviço Extraordinário no RDM",
        scenario: "O serviço extraordinário pode exceder 2 horas diárias ou 10 dias consecutivos?",
        tip: "NÃO! O Art. 14 do RDM limita o serviço extraordinário a no máximo 2 horas por dia útil e duração máxima de 10 dias."
      }
    ],
    lawArticles: [
      { article: "Art. 14, § 1º (Lei 6.880/80)", text: "A hierarquia militar é a ordenação da autoridade, em níveis diferentes, dentro da estrutura das Forças Armadas." },
      { article: "Art. 16, § 1º (Lei 6.880/80)", text: "Posto é o grau hierárquico do oficial, conferido por ato do Presidente da República e confirmado em Carta Patente." },
      { article: "Art. 3º (Lei 9.537/97 - LESTA)", text: "Cabe à Autoridade Marítima promover a implementação e a execução desta Lei, com o propósito de assegurar a salvaguarda da vida humana e a segurança da navegação." }
    ],
    section2Title: "2. Mnemônicos Fundamentais da DEnsM",
    mnemonics: [
      { code: "HD = HIERARQUIA & DISCIPLINA", meaning: "Bases constitucionais inegociáveis (Art. 142 da CF/88 e Art. 14 da Lei 6.880/80)." },
      { code: "POSTO (Oficial) / GRADUAÇÃO (Praça)", meaning: "Posto tem Carta Patente; Graduação é ato do Comandante de Força." },
      { code: "11 DE JUNHO = RIACHUELO", meaning: "Data Magna da Marinha do Brasil • Almirante Barroso e Fragata Amazonas." },
      { code: "LESTA = SALVAGUARDA, SEGURANÇA E AMBIENTE", meaning: "Tríplice missão da Autoridade Marítima no tráfego aquaviário." }
    ],
    question: {
      id: 301,
      question: "Conforme o Estatuto dos Militares (Lei Federal nº 6.880/1980) e o Regulamento Disciplinar para a Marinha (RDM), assinale a opção que expressa com exatidão a disciplina e hierarquia militar:",
      options: {
        A: "A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida entre militares da ativa, da reserva remunerada e reformados.",
        B: "A subordinação militar afeta gravemente a dignidade pessoal do indivíduo, cessando nos finais de semana.",
        C: "O posto militar é conferido às praças por portaria do Ministério da Defesa sem Carta Patente.",
        D: "A antiguidade militar prevalece sobre a hierarquia nas formaturas cívico-militares.",
        E: "Militares temporários do SMV não estão submetidos ao Estatuto dos Militares nem ao RDM."
      },
      answer: "A",
      explanation: "Art. 14, § 3º da Lei nº 6.880/80: 'A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida entre militares da ativa, da reserva remunerada e reformados'."
    }
  },

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
  },

  // --- RECEITA FEDERAL: RACIOCÍNIO LÓGICO-MATEMÁTICO ---
  "Raciocínio Lógico-Matemático": {
    subject: "Raciocínio Lógico-Matemático",
    topic: "Lógica de Proposições, Equivalências Lógicas & Análise Combinatória",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "FGV ATRFB: Negação do condicional (Regra do MANÉ), equivalências do Se...então (Contrapositiva e Disjunção 'Neymar') e contagem combinatória (Arranjo vs Combinação).",
    section1Title: "1. Equivalências e Negações do Condicional (P -> Q)",
    section1Body: "No cálculo proposicional FGV, a condicional 'Se P, então Q' (P -> Q) possui duas equivalências fundamentais: 1) Contrapositiva: ~Q -> ~P; 2) Forma Disjuntiva: ~P v Q (Nega a primeira OU mantém a segunda). A NEGAÇÃO da condicional ~(P -> Q) é a conjunção P ^ ~Q (Mantém a primeira E nega a segunda — Regra do MANÉ). Em análise combinatória, arranjos importam a ordem dos elementos e combinações tratam de grupos onde a ordem é irrelevante.",
    section2Title: "2. Esquema Mnemônico de Lógica Proposicional",
    mnemonics: [
      { code: "NEGAÇÃO DO SE...ENTÃO = MANÉ", meaning: "MAntém a primeira E NEga a segunda: ~(P -> Q) = P ^ ~Q." },
      { code: "EQUIVALÊNCIA DO SE...ENTÃO = NEYMAR", meaning: "NEga a primeira OU Mantém a segunda: P -> Q = ~P v Q." },
      { code: "CONTRAPOSITIVA = VOLTA NEGANDO", meaning: "P -> Q equivale a ~Q -> ~P (Inverte e nega ambas)." },
      { code: "ARRANJO (HÃN?) vs COMBINAÇÃO (NÃO)", meaning: "A ordem importa? Se sim = Arranjo; se não = Combinação." }
    ],
    question: {
      id: 205,
      question: "Considere a afirmação: 'Se o Auditor Tributário lavra o auto de infração, então o contribuinte é notificado'. A negação lógica dessa afirmação é:",
      options: {
        A: "Se o Auditor não lavra o auto, então o contribuinte não é notificado.",
        B: "O Auditor Tributário lavra o auto de infração e o contribuinte não é notificado.",
        C: "O Auditor Tributário não lavra o auto ou o contribuinte é notificado.",
        D: "Se o contribuinte não é notificado, então o Auditor não lavrou o auto.",
        E: "O Auditor não lavra o auto de infração e o contribuinte é notificado."
      },
      answer: "B",
      explanation: "A negação de 'Se P, então Q' é 'P e não Q' (Regra do MANÉ: Mantém a primeira 'Auditor lavra o auto' E Nega a segunda 'contribuinte não é notificado')."
    }
  },

  // --- RECEITA FEDERAL: ESTATÍSTICA ---
  "Estatística": {
    subject: "Estatística",
    topic: "Probabilidade, Teorema de Bayes, Medidas de Posição & Dispersão",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "FGV ATRFB/AFRFB: Mediana como medida resistente a valores extremos, propriedades da variância linear e distribuições Normal e Binomial.",
    section1Title: "1. Medidas de Tendência Central e Dispersão",
    section1Body: "A Mediana é o elemento central do rol ordenado, resistente a outliers, enquanto a Média Aritmética é sensível a valores extremos. A Variância mede a dispersão dos dados em torno da média (em unidades quadráticas), e o Desvio-Padrão é a raiz quadrada positiva da variância (na mesma unidade dos dados). Se somarmos uma constante a todos os dados, a média sofre a soma, mas a variância e o desvio-padrão permanecem inalterados. Se multiplicarmos todos os dados por 'k', a variância fica multiplicada por k² e o desvio-padrão por |k|.",
    section2Title: "2. Esquema Mnemônico de Estatística Descritiva",
    mnemonics: [
      { code: "MEDIANA = CENTRO DO ROL", meaning: "Ordene sempre a lista do menor para o maior antes de calcular." },
      { code: "DESVIO-PADRÃO = RAIZ DA VARIÂNCIA", meaning: "Desvio-Padrão tem a unidade real; variância tem a unidade ao quadrado." },
      { code: "PROPRIEDADES DA VARIÂNCIA", meaning: "Somar constante não altera a variância; multiplicar por 'k' multiplica por k²." }
    ],
    question: {
      id: 206,
      question: "Um conjunto de dados com 100 observações possui média 20 e desvio-padrão 4. Se somarmos 6 a cada um dos valores da amostra, a nova média e o novo desvio-padrão serão, respectivamente:",
      options: {
        A: "26 e 10",
        B: "26 e 4",
        C: "20 e 10",
        D: "26 e 16",
        E: "20 e 4"
      },
      answer: "B",
      explanation: "A adição de uma constante 'c' a todos os elementos desloca a média em 'c' (nova média = 20 + 6 = 26), mas NÃO altera as medidas de dispersão como variância e desvio-padrão (o novo desvio-padrão permanece 4)."
    }
  },

  // --- RECEITA FEDERAL: ADMINISTRAÇÃO GERAL E PÚBLICA ---
  "Administração Geral e Pública": {
    subject: "Administração Geral e Pública",
    topic: "Evolução da Administração Pública (Patrimonialista, Burocrática e Gerencial) & Governança",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "FGV ATRFB: Cobrança dos 3 modelos de gestão pública (PDRAE 1995), accountability (vertical, horizontal e societal) e Balanced Scorecard (BSC).",
    section1Title: "1. Modelos de Administração Pública e Nova Gestão Pública",
    section1Body: "A Administração Patrimonialista caracteriza-se pela confusão entre o patrimônio público e o privado (res publica vs res principis), corrupção e nepotismo. A Burocracia Weberiana surge para combater a corrupção através de impessoalidade, legalidade estrita, hierarquia rígida e controle a priori de procedimentos. A Administração Gerencial (NPM) foca no cidadão-cliente, eficiência, descentralização, controle a posteriori por resultados e contratualização de metas (PDRAE 1995 de Bresser-Pereira).",
    section2Title: "2. Esquema Mnemônico de Modelos de Gestão",
    mnemonics: [
      { code: "PATRIMONIALISTA = CONFUSÃO RES PUBLICA", meaning: "Sem distinção entre bem do soberano e bem do Estado (nepotismo)." },
      { code: "BUROCRÁTICO = CONTROLE A PRIORI DOS MEIOS", meaning: "Foco nos processos, legalidade formal, impessoalidade e combate à corrupção." },
      { code: "GERENCIAL = CONTROLE A POSTERIORI DOS RESULTADOS", meaning: "Foco no cidadão-usuário, eficiência, eficácia e efetividade dos serviços." },
      { code: "BSC = 4 PERSPECTIVAS", meaning: "Financeira, Clientes, Processos Internos e Aprendizado/Crescimento." }
    ],
    question: {
      id: 206,
      question: "O modelo de administração pública que preconiza a descentralização decisória, a contratualização de metas e o controle centrado nos resultados obtidos, em substituição ao controle rígido de processos a priori, é denominado:",
      options: {
        A: "Patrimonialista.",
        B: "Burocrático estrito.",
        C: "Gerencial (New Public Management).",
        D: "Tradicional centralizador.",
        E: "Monárquico institucional."
      },
      answer: "C",
      explanation: "A Administração Pública Gerencial foca nos resultados, na eficiência, na flexibilidade procedimental e na avaliação a posteriori do desempenho."
    }
  },

  // --- TRANSPETRO & ESTATAIS ---
  "Noções de Administração": {
    subject: "Noções de Administração",
    topic: "Funções Administrativas (PODC) & Estrutura Organizacional",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "CESGRANRIO: Cobrança clássica da diferença entre Planejamento Estratégico, Tático e Operacional, e Departamentalização.",
    section1Title: "1. O Processo Administrativo Clássico",
    section1Body: "O processo administrativo é composto pelas funções de Planejamento (definição de objetivos e meios), Organização (alocação de recursos e divisão do trabalho), Direção (liderança, coordenação e motivação de pessoas) e Controle (monitoramento, medição e correção de desvios). O planejamento estratégico foca no longo prazo e na organização como um todo; o tático foca no médio prazo e em departamentos; o operacional foca no curto prazo e em tarefas específicas.",
    section2Title: "2. Esquema PODC e Níveis de Planejamento",
    mnemonics: [
      { code: "P.O.D.C.", meaning: "Planejar, Organizar, Dirigir e Controlar." },
      { code: "ESTRATÉGICO = LONGO PRAZO", meaning: "Visão global da alta cúpula e ambiente externo." },
      { code: "TÁTICO = MÉDIO PRAZO", meaning: "Nível gerencial e departamental." },
      { code: "OPERACIONAL = CURTO PRAZO", meaning: "Execução diária de atividades e rotinas." }
    ],
    question: {
      id: 201,
      question: "No contexto da gestão em empresas estatais, o nível de planejamento que define os planos de ação detalhados de curto prazo para execução imediata pelas equipes de chão de fábrica e escritórios operacionais é o:",
      options: {
        A: "Estratégico.",
        B: "Departamental.",
        C: "Operacional.",
        D: "Corporativo.",
        E: "Normativo."
      },
      answer: "C",
      explanation: "O planejamento operacional é voltado para o curto prazo, com foco na execução detalhada das tarefas e processos imediatos da organização."
    }
  },

  "Legislação e Licitações para Estatais (Lei 13.303/16)": {
    subject: "Legislação e Licitações para Estatais (Lei 13.303/16)",
    topic: "Regime Jurídico, Governança & Licitações nas Empresas Estatais",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: A Lei 13.303/2016 (Estatuto Jurídico das Estatais) possui regras próprias de dispensa por valor e governança corporativa distintas da Lei 14.133/2021.",
    section1Title: "1. Princípios e Campo de Aplicação da Lei 13.303/2016",
    section1Body: "A Lei 13.303/2016 disciplina o estatuto jurídico da empresa pública, da sociedade de economia mista e de suas subsidiárias. Ela estabelece regras rígidas de governança corporativa, transparência, comitê de auditoria estatutário e um regime licitatório simplificado e ágil, com possibilidade de adoção de procedimento de manifestação de interesse e critérios dinâmicos de julgamento (como maior retorno econômico).",
    section2Title: "2. Mnemônico de Governança das Estatais",
    mnemonics: [
      { code: "GOVERNANÇA ESTATAIS", meaning: "Transparência, prestação de contas, equidade e responsabilidade corporativa." },
      { code: "DISPENSA POR VALOR (13.303)", meaning: "Limites específicos para obras/serviços de engenharia e compras nas estatais." }
    ],
    question: {
      id: 202,
      question: "À luz da Lei Federal nº 13.303/2016 (Estatuto das Estatais), a celebração de contratos por sociedades de economia mista prestadoras de serviço público rege-se prioritariamente por:",
      options: {
        A: "Regulamento interno de licitações e contratos próprio da estatal, observados os ditames da Lei 13.303/2016.",
        B: "Normas da Lei 8.666/1993 com exclusividade.",
        C: "Contratos verbais sem necessidade de formalização escrita.",
        D: "Decretos municipais onde se situa a sede da estatal.",
        E: "Código de Defesa do Consumidor exclusivamente."
      },
      answer: "A",
      explanation: "Nos termos do art. 40 da Lei 13.303/2016, as empresas estatais devem editar regulamento interno de licitações e contratos próprio, observando as diretrizes da referida lei."
    }
  },

  "Gestão de Estoques e Almoxarifado": {
    subject: "Gestão de Estoques e Almoxarifado",
    topic: "Classificação ABC, Ponto de Pedido & Dimensionamento de Estoque",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Foco rigoroso no Princípio de Pareto (Curva ABC de Materiais: Classe A = 20% dos itens representam 80% do valor financeiro).",
    section1Title: "1. Curva ABC e Controle de Almoxarifado",
    section1Body: "A Curva ABC classifica os materiais em três grupos: Classe A (alta relevância financeira, cerca de 80% do valor e 20% dos itens, exigindo controle rígido); Classe B (média relevância, ~15% do valor e ~30% dos itens); e Classe C (baixa relevância financeira, ~5% do valor e ~50% dos itens, permitindo controles mais simplificados). O Ponto de Pedido (PP) é o nível de estoque que, ao ser atingido, dispara a emissão de uma nova ordem de compra (PP = Consumo Médio x Tempo de Reposição + Estoque de Segurança).",
    section2Title: "2. Mnemônico Curva ABC",
    mnemonics: [
      { code: "A = 80% VALOR / 20% ITENS", meaning: "Alta importância financeira • Controle rigoroso e inventário frequente." },
      { code: "B = 15% VALOR / 30% ITENS", meaning: "Importância intermediária • Controle moderado." },
      { code: "C = 5% VALOR / 50% ITENS", meaning: "Baixo valor financeiro • Controle simplificado em lote." }
    ],
    question: {
      id: 203,
      question: "Em uma análise de estoque de uma empresa de logística e transporte de combustíveis utilizando a Curva ABC, os itens classificados como 'Classe A' correspondem a:",
      options: {
        A: "Itens de maior quantidade física e menor valor monetário agregado.",
        B: "Itens que representam a maior parcela do valor financeiro do estoque, embora constituam menor quantidade de itens.",
        C: "Materiais que não requerem controle nem inventário periódico.",
        D: "Produtos perecíveis descartados mensalmente.",
        E: "Equipamentos obsoletos sem valor de mercado."
      },
      answer: "B",
      explanation: "Na Curva ABC (Princípio de Pareto), os itens da Classe A são os mais importantes financeiramente (cerca de 80% do valor), embora representem apenas cerca de 20% do volume físico de itens."
    }
  },

  "Transporte, Movimentação e Modais Logísticos": {
    subject: "Transporte, Movimentação e Modais Logísticos",
    topic: "Modais de Transporte (Dutoviário, Aquaviário, Ferroviário e Rodoviário)",
    lessonNumber: 1,
    totalLessons: 8,
    jurisprudenceNote: "CESGRANRIO: Foco nas características econômicas, capacidade de carga e eficiência energética dos modais dutoviário e aquaviário (cabotagem).",
    section1Title: "1. Características dos Modais de Transporte na Logística",
    section1Body: "O modal dutoviário destaca-se pela alta confiabilidade, segurança e baixo custo operacional unitário para grandes volumes de fluidos e gases (petróleo, derivados e gás natural), embora exija altíssimo investimento inicial de infraestrutura (CAPEX). O modal aquaviário (cabotagem e longo curso) possui altíssima capacidade de carga e baixo consumo energético por tonelada-quilômetro.",
    section2Title: "2. Mnemônico de Modais Logísticos",
    mnemonics: [
      { code: "DUTOVIÁRIO = FLUIDOS & CONTÍNUO", meaning: "Transporte contínuo de petróleo/gás com baixo custo por m³." },
      { code: "AQUAVIÁRIO = ALTO VOLUME", meaning: "Maior capacidade de carga e excelente eficiência energética." }
    ],
    question: {
      id: 204,
      question: "O modal de transporte caracterizado pela movimentação contínua de grandes volumes de petróleo, derivados e gás natural em percursos fixos, com alto investimento inicial e baixo custo operacional variável, é o modal:",
      options: {
        A: "Rodoviário.",
        B: "Aeroviário.",
        C: "Dutoviário.",
        D: "Ferroviário urbano.",
        E: "Tracionado animal."
      },
      answer: "C",
      explanation: "O modal dutoviário (oleodutos, gasodutos e polidutos) é a solução primordial para transporte seguro e de baixo custo operacional de hidrocarbonetos fluidos."
    }
  },

  "Técnicas de Arquivo e Documentação": {
    subject: "Técnicas de Arquivo e Documentação",
    topic: "Teoria das Três Idades & Gestão de Documentos",
    lessonNumber: 1,
    totalLessons: 6,
    jurisprudenceNote: "CESGRANRIO: Cobrança recorrente da Teoria das Três Idades (Corrente, Intermediário e Permanente) e métodos de arquivamento (Alfabético, Geográfico e Numérico).",
    section1Title: "1. O Ciclo Vital dos Documentos (Teoria das 3 Idades)",
    section1Body: "Os documentos passam por 3 fases: 1ª Idade ou Arquivo Corrente (documentos em tramitação ou frequentemente consultados); 2ª Idade ou Arquivo Intermediário (documentos que aguardam prazos de guarda precaucionais, com consulta eventual); e 3ª Idade ou Arquivo Permanente (documentos de valor histórico, probatório ou informativo, que NUNCA podem ser eliminados).",
    section2Title: "2. Mnemônico das 3 Idades do Arquivo",
    mnemonics: [
      { code: "1ª IDADE = CORRENTE (USO)", meaning: "Consulta constante para fins administrativos imediatos." },
      { code: "2ª IDADE = INTERMEDIÁRIO (GUARDA)", meaning: "Aguardando destinação final (eliminação ou recolhimento)." },
      { code: "3ª IDADE = PERMANENTE (HISTÓRIA)", meaning: "Inalienável, imprescritível e de guarda perpétua (NÃO elimina)." }
    ],
    question: {
      id: 205,
      question: "De acordo com a Arquivologia e a Lei de Arquivos (Lei nº 8.159/91), os documentos que perderam o valor administrativo primário, mas possuem valor secundário probatório e histórico, são classificados como de:",
      options: {
        A: "Arquivo Corrente.",
        B: "Arquivo Permanente.",
        C: "Arquivo Provisório.",
        D: "Arquivo Descartável.",
        E: "Arquivo Intermediário de eliminação sumária."
      },
      answer: "B",
      explanation: "Os documentos de 3ª Idade (Arquivo Permanente) são dotados de valor secundário (histórico, cultural ou probatório) e são de preservação definitiva."
    }
  },

  "Ética e Conduta no Setor Público": {
    subject: "Ética e Conduta no Setor Público",
    topic: "Código de Conduta Ética & Prevenção de Conflito de Interesses",
    lessonNumber: 1,
    totalLessons: 6,
    jurisprudenceNote: "CESGRANRIO: Decreto 1.171/94 e Código de Conduta das Estatais (vedação ao uso de informação privilegiada e recebimento de vantagens indevidas).",
    section1Title: "1. Deveres e Vedações Éticas do Agente Público",
    section1Body: "A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados maiores que devem nortear o servidor e o empregado público. É expressamente vedado fazer uso de informações privilegiadas obtidas no âmbito do trabalho para benefício próprio ou de terceiros, bem como aceitar presentes ou favores que possam comprometer a imparcialidade do exercício funcional.",
    section2Title: "2. Mnemônico de Ética Pública",
    mnemonics: [
      { code: "DECORO & ZELO", meaning: "A moralidade da conduta pública independe da vida privada mas reflete nela." },
      { code: "INFORMAÇÃO PRIVILEGIADA = CRIME", meaning: "Vedação absoluta ao uso comercial de dados confidenciais corporativos." }
    ],
    question: {
      id: 206,
      question: "Constitui dever ético fundamental do empregado e servidor público no exercício de suas atribuições funcionais:",
      options: {
        A: "Retardar o andamento de processos para beneficiar conhecidos.",
        B: "Tratar os cidadãos com presteza, cortesia, urbanidade e respeito irrestrito aos princípios legais.",
        C: "Utilizar bens da empresa estatal para lazer pessoal aos finais de semana.",
        D: "Divulgar senhas corporativas em fóruns públicos de discussão.",
        E: "Recusar-se a prestar informações de transparência pública legalmente exigíveis."
      },
      answer: "B",
      explanation: "O tratamento com urbanidade, respeito, presteza e estrita observância à lei constitui dever basilar e indeclinável de todo agente público."
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
      { subject: "Vendas e Negociação", topic: "SPIN Selling, Manejo de Objeções, CDC Bancário & Resolução 4.949", status: "homologado", label: "MAIOR PESO EDITAL", weight: "22.5%" },
      { subject: "Conhecimentos de Informática", topic: "Segurança da Informação, M365, Nuvem & Prevenção a Fraudes", status: "homologado", label: "MAIOR PESO EDITAL", weight: "22.5%" },
      { subject: "Conhecimentos Bancários", topic: "Sistema Financeiro Nacional (SFN), Pix, Open Finance & Mercado de Câmbio", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "15.0%" },
      { subject: "Língua Portuguesa", topic: "Interpretação de Texto, Coesão & Sintaxe de Regência", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "15.0%" },
      { subject: "Matemática Financeira", topic: "Juros Compostos, Taxas Equivalentes & Sistemas de Amortização (SAC/Price)", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "7.5%" }
    ]
  },
  "bb_ti": {
    cuts: [
      { year: 2023, score: "68.0 pontos (Cesgranrio - TI Nacional)" },
      { year: 2021, score: "62.5 pontos (Cesgranrio - TI Geral)" }
    ],
    topTopics: [
      { subject: "Tecnologia da Informação", topic: "Modelagem Relacional, SQL Avançado, Python, Java, Docker & APIs REST", status: "homologado", label: "PESO CRÍTICO (52.5%)", weight: "52.5%" },
      { subject: "Língua Portuguesa", topic: "Compreensão de Texto e Sintaxe Conectiva Cesgranrio", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "15.0%" },
      { subject: "Probabilidade e Estatística", topic: "Probabilidade Condicional, Teorema de Bayes e Distribuição Normal", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "7.5%" },
      { subject: "Conhecimentos Bancários", topic: "Open Finance, Drex, Meios de Pagamento & Bacen", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "7.5%" },
      { subject: "Matemática", topic: "Funções, Matrizes e Análise Combinatória", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "7.5%" }
    ]
  },
  "atrfb": {
    cuts: [
      { year: 2023, score: "82.5 pontos (FGV - Analista Tributário)" },
      { year: 2014, score: "76.0 pontos (Esaf - Nacional)" },
      { year: 2012, score: "74.5 pontos (Esaf - Nacional)" }
    ],
    topTopics: [
      { subject: "Direito Tributário", topic: "Limitações ao Poder de Tributar, CTN, Crédito & Obrigação", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "11.4%" },
      { subject: "Direito Previdenciário", topic: "Custeio, Seguridade Social na CF/88 & Benefícios RGPS", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "11.4%" },
      { subject: "Fluência em Dados", topic: "Modelagem Relacional, SQL, Governança & Mineração de Dados", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.7%" },
      { subject: "Língua Portuguesa", topic: "Interpretação e Semântica Estilo FGV (Casos Complexos)", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.7%" },
      { subject: "Legislação Tributária", topic: "Tributos Federais: IRPJ, CSLL, PIS/COFINS, IPI & Simples", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Legislação Aduaneira", topic: "Regulamento Aduaneiro, Zonas Primária/Secundária & Despacho", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Raciocínio Lógico-Matemático", topic: "Lógica Proposicional, Equivalências & Análise Combinatória", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "7.1%" },
      { subject: "Estatística", topic: "Medidas de Tendência Central, Dispersão & Probabilidade", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "7.1%" }
    ]
  },
  "afrfb": {
    cuts: [
      { year: 2023, score: "86.0 pontos (FGV - Auditor-Fiscal)" },
      { year: 2014, score: "81.0 pontos (Esaf - Nacional)" }
    ],
    topTopics: [
      { subject: "Direito Tributário", topic: "Planejamento Tributário, Elisão vs Evasão & Jurisprudência STF/STJ", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Auditoria Fiscal", topic: "Procedimentos de Auditoria, Amostragem Estatística & Fraudes Fiscais", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Contabilidade Geral e Avançada", topic: "CPC 00, Balanço Patrimonial, DRE & Consolidação", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Legislação Tributária", topic: "Tributação Federal Avançada, IRPJ/CSLL & Regimes de Lucro", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "8.0%" },
      { subject: "Legislação Aduaneira", topic: "Regulamento Aduaneiro, Despacho, Zonas & Pena de Perdimento", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "8.0%" },
      { subject: "Comércio Internacional", topic: "Valoração Aduaneira, Acordos Comerciais & SISCOMEX", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "7.0%" },
      { subject: "Fluência em Dados", topic: "Python, SQL e Análise Preditiva em Malhas Fiscais", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "8.0%" },
      { subject: "Raciocínio Lógico-Matemático", topic: "Lógica Proposicional, Equivalências & Silogismos", status: "homologado", label: "MÉDIA INCIDÊNCIA", weight: "6.0%" },
      { subject: "Estatística", topic: "Probabilidade Condicional, Teorema de Bayes & Distribuição Normal", status: "homologado", label: "MÉDIA INCIDÊNCIA", weight: "6.0%" }
    ]
  },
  "transpetro_adm": {
    cuts: [
      { year: 2023, score: "81.0 pontos (Cesgranrio - Quadro Administrativo)" },
      { year: 2018, score: "77.5 pontos (Cesgranrio - Nacional)" }
    ],
    topTopics: [
      { subject: "Noções de Administração", topic: "Funções Administrativas (PODC), Processos & Ferramentas da Qualidade", status: "homologado", label: "MAIOR PESO (28.5%)", weight: "28.5%" },
      { subject: "Legislação e Licitações para Estatais (Lei 13.303/16)", topic: "Regime Societário, Governança, Dispensa por Valor & Contratos", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "21.5%" },
      { subject: "Língua Portuguesa", topic: "Interpretação Textual, Coesão & Sintaxe Cesgranrio", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "14.3%" },
      { subject: "Matemática", topic: "Razão, Proporção, Porcentagem e Regra de Três Composta", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "14.3%" },
      { subject: "Técnicas de Arquivo e Documentação", topic: "Teoria das 3 Idades, Tabela de Temporalidade e Protocolo", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "11.4%" }
    ]
  },
  "transpetro_log": {
    cuts: [
      { year: 2023, score: "79.0 pontos (Cesgranrio - Logística e Suprimentos)" },
      { year: 2018, score: "75.0 pontos (Cesgranrio - Geral)" }
    ],
    topTopics: [
      { subject: "Gestão de Estoques e Almoxarifado", topic: "Curva ABC, Ponto de Pedido, Estoque de Segurança & Inventários", status: "homologado", label: "MAIOR PESO (28.5%)", weight: "28.5%" },
      { subject: "Transporte, Movimentação e Modais Logísticos", topic: "Modal Dutoviário de Óleo/Gás, Cabotagem & Layout de Armazém", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "21.5%" },
      { subject: "Língua Portuguesa", topic: "Compreensão de Texto, Conectivos e Concordância", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "14.3%" },
      { subject: "Matemática", topic: "Cálculos de Dimensionamento e Médias Ponderadas", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "14.3%" },
      { subject: "Gestão de Compras e Fornecedores", topic: "Qualificação de Fornecedores, SCM & Indicadores OTIF", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "11.4%" }
    ]
  },
  "marinha_rm2": {
    cuts: [
      { year: 2025, score: "84.0 pontos (DEnsM - 1º Distrito Naval RJ)" },
      { year: 2024, score: "80.0 pontos (DEnsM - Geral)" },
      { year: 2023, score: "78.0 pontos (DEnsM - Geral)" }
    ],
    topTopics: [
      { subject: "Língua Portuguesa (Gramática & Sintaxe)", topic: "Sintaxe do Período Composto, Crase & Concordância (Celso Cunha)", status: "homologado", label: "METADE DA PROVA (50%)", weight: "50.0%" },
      { subject: "Formação Militar-Naval (Estatuto, RDM, LESTA, Tradições)", topic: "Estatuto dos Militares (Lei 6.880/80), RDM, LESTA, Batalha do Riachuelo", status: "homologado", label: "METADE DA PROVA (50%)", weight: "50.0%" }
    ]
  },
  "ses_rj": {
    cuts: [
      { year: 2026, score: "76.0 pontos (IBDO - Estimativa Oficial)" },
      { year: 2022, score: "72.0 pontos (CEPUERJ - Geral)" }
    ],
    topTopics: [
      { subject: "Legislação do SUS (Leis 8.080 e 8.142)", topic: "Arts. 196-200 da CF/88, Competências das Esferas & Conselhos de Saúde", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "30.0%" },
      { subject: "Conhecimentos Específicos (Enfermagem / Saúde Pública)", topic: "Cálculo de Medicamentos/Gotejamento, Vacinação PNI & Manchester", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "30.0%" },
      { subject: "Língua Portuguesa", topic: "Gramática Normativa IBDO, Acentuação, Ortografia & Crase", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "20.0%" },
      { subject: "Noções de Informática", topic: "Windows, LibreOffice, Redes & Prontuário Eletrônico", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Legislação Estadual RJ (Dec.-Lei 220/75)", topic: "Regime Jurídico dos Servidores Civis do RJ e Processo Disciplinar", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "10.0%" }
    ]
  },
  "tce_rj": {
    cuts: [
      { year: 2022, score: "78.0 pontos líquidos (Cebraspe - Técnico de Controle Externo)" },
      { year: 2012, score: "74.0 pontos (Fepese - Histórico)" }
    ],
    topTopics: [
      { subject: "Contabilidade Aplicada ao Setor Público (CASP)", topic: "Orçamento Público, PCASP, Variações Patrimoniais, Restos a Pagar & MCASP", status: "homologado", label: "MAIOR PESO (28.0%)", weight: "28.0%" },
      { subject: "Direito Administrativo", topic: "Nova Lei de Licitações (Lei 14.133/21), Contratos, Improbidade & Atos", status: "homologado", label: "ALTA INCIDÊNCIA (16.0%)", weight: "16.0%" },
      { subject: "Língua Portuguesa", topic: "Interpretação e Gramática Aplicada Estilo Cebraspe", status: "homologado", label: "ALTA INCIDÊNCIA (13.3%)", weight: "13.3%" },
      { subject: "Controle Externo e Legislação do TCE-RJ", topic: "CF/88 Arts. 70-75, LC 63/90 (Lei Orgânica), Regimento & Jurisprudência STF", status: "homologado", label: "ALTA INCIDÊNCIA (13.3%)", weight: "13.3%" },
      { subject: "Direito Constitucional", topic: "Direitos Fundamentais, Organização do Estado e Poder Legislativo", status: "homologado", label: "ALTA INCIDÊNCIA (10.7%)", weight: "10.7%" },
      { subject: "Administração Pública", topic: "Modelos de Gestão Pública, Governança, Transparência & Atendimento", status: "homologado", label: "ALTA INCIDÊNCIA (10.7%)", weight: "10.7%" }
    ]
  },
  "iss_niteroi": {
    cuts: [
      { year: 2015, score: "78.0 pontos (FGV - Fiscal de Tributos Municipais)" },
      { year: 2008, score: "74.0 pontos (FESP - Histórico)" }
    ],
    topTopics: [
      { subject: "Direito Tributário", topic: "CTN, Sistema Tributário Nacional, Imunidades, Lançamento & Suspensão", status: "homologado", label: "MAIOR PESO (18.3%)", weight: "18.3%" },
      { subject: "Legislação Tributária Municipal de Niterói", topic: "Código Tributário (Lei 2.597/08), ISSQN (LC 116), IPTU, ITBI & PAF", status: "homologado", label: "ALTA INCIDÊNCIA (16.7%)", weight: "16.7%" },
      { subject: "Contabilidade Geral e Avançada", topic: "Normas CPC, Mensuração de Ativos, Balanço Patrimonial & DRE", status: "homologado", label: "ALTA INCIDÊNCIA (15.0%)", weight: "15.0%" },
      { subject: "Auditoria Fiscal", topic: "Planejamento de Auditoria, Cruzamento de NFS-e & Detecção de Fraudes", status: "homologado", label: "ALTA INCIDÊNCIA (11.7%)", weight: "11.7%" },
      { subject: "Língua Portuguesa", topic: "Interpretação Textual Crítica FGV, Semântica & Sintaxe de Regência", status: "homologado", label: "ALTA INCIDÊNCIA (11.7%)", weight: "11.7%" }
    ]
  },
  "tcu_aufc": {
    cuts: [
      { year: 2022, score: "72.0 pontos (FGV - Auditor Federal de Controle Externo)" },
      { year: 2015, score: "68.5 pontos (Cebraspe - Histórico)" }
    ],
    topTopics: [
      { subject: "Língua Portuguesa", topic: "Interpretação Crítica FGV, Semântica, Sintaxe e Reescrita", status: "homologado", label: "MAIOR PESO (15.0%)", weight: "15.0%" },
      { subject: "Controle Externo", topic: "CF/88 Arts. 70-75, Lei 8.443/92 (Lei Orgânica), Regimento & Consultas", status: "homologado", label: "ALTA INCIDÊNCIA (10.0%)", weight: "10.0%" },
      { subject: "Auditoria Governamental", topic: "Normas de Auditoria do TCU (NAT), NBASP/ISSAI, Matriz de Achados & Evidências", status: "homologado", label: "ALTA INCIDÊNCIA (10.0%)", weight: "10.0%" },
      { subject: "Administração Financeira e Orçamentária (AFO)", topic: "PPA/LDO/LOA, Lei 4.320/64, LRF (LC 101/00) & Regra de Ouro", status: "homologado", label: "ALTA INCIDÊNCIA (10.0%)", weight: "10.0%" },
      { subject: "Análise de Dados e Tecnologia da Informação", topic: "Consultas SQL para Auditoria, Análise Exploratória, Python/R & Modelagem", status: "homologado", label: "ALTA INCIDÊNCIA (10.0%)", weight: "10.0%" }
    ]
  }
};

// 3. Temas Oficiais de Redação por Carreira
export const CAREER_ESSAY_THEMES: Record<string, string> = {
  "bb_comercial": "O papel dos bancos públicos, da inteligência artificial e da inclusão bancária no desenvolvimento sustentável brasileiro.",
  "bb_ti": "A segurança da informação e a proteção de dados (LGPD) frente ao avanço do Open Finance e da computação em nuvem.",
  "atrfb": "A reforma tributária sobre o consumo, a simplificação do sistema fiscal e seus impactos no pacto federativo nacional.",
  "afrfb": "O combate aos crimes fiscais transnacionais, a elisão abusiva e o papel da inteligência artificial na fiscalização da Receita Federal.",
  "transpetro_adm": "A governança corporativa, o compliance e a sustentabilidade ambiental na gestão de empresas estatais de grande porte.",
  "transpetro_log": "A eficiência logística, a transição energética e a segurança no transporte multimodal de combustíveis no Brasil.",
  "marinha_rm2": "A importância estratégica e econômica da 'Amazônia Azul' para a soberania e segurança marítima do Brasil.",
  "ses_rj": "Os desafios da regionalização, do financiamento tripartite e da equidade no acesso à saúde pública no SUS.",
  "tce_rj": "O papel dos Tribunais de Contas na fiscalização da Nova Lei de Licitações (Lei 14.133/21) e na governança pública municipal.",
  "iss_niteroi": "A inteligência fiscal, o cruzamento de documentos eletrônicos e o combate à sonegação do ISSQN nos serviços digitais.",
  "tcu_aufc": "Elaboração de Relatório de Fiscalização com Matriz de Achados sobre superfaturamento e sobrepreço em obras públicas federais."
};

// 4. Catálogo de Módulos Reais Paginados (5 Páginas por Módulo)
export const DISCIPLINE_MODULES_DB: Record<string, DisciplineModule[]> = {
  // ==========================================
  // FORMAÇÃO MILITAR-NAVAL (MARINHA DO BRASIL)
  // ==========================================
  "Formação Militar-Naval": [
    {
      moduleNumber: 1,
      totalModules: 4,
      title: "Hierarquia, Disciplina & Estatuto dos Militares (Lei 6.880/80)",
      bancaTrend: "DEnsM: Cobrança massiva da distinção entre Posto e Graduação, Praças Especiais e manutenção da disciplina na inatividade.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Bases Constitucionais, Hierarquia e Subordinação Militar",
          category: "Doutrina & Teoria",
          leadText: "A hierarquia e a disciplina são as bases institucionais das Forças Armadas, estabelecidas no art. 142 da CF/88 e art. 14 da Lei 6.880/80.",
          bodyText: "A hierarquia militar é a ordenação da autoridade, em níveis diferentes, dentro da estrutura das Forças Armadas. A disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo militar e coordenam seu funcionamento regular e harmônico.\n\nA subordinação militar não afeta, de modo algum, a dignidade pessoal do militar e decorre exclusivamente da estrutura hierarquizada da Força. O respeito à hierarquia e à disciplina deve ser mantido em todas as circunstâncias da vida entre militares da ativa, da reserva remunerada e reformados.",
          deepDiveText: "Graus Hierárquicos na Marinha:\n• Oficiais-Generais: Almirante (em tempo de guerra), Almirante de Esquadra, Vice-Almirante, Contra-Almirante.\n• Oficiais Superiores: Capitão de Mar e Guerra, Capitão de Fragata, Capitão de Corveta.\n• Oficiais Intermediários: Capitão-Tenente.\n• Oficiais Subalternos: Primeiro-Tenente, Segundo-Tenente.\n• Praças Especiais: Guarda-Marinha, Aspirante a Oficial, Alunos de Órgãos de Formação.\n• Praças Graduadas: Suboficial, Primeiro-Sargento, Segundo-Sargento, Terceiro-Sargento, Cabo.\n• Praças: Marinheiro / Soldado Fuzileiro Naval."
        },
        {
          pageNumber: 2,
          pageTitle: "Escala Hierárquica, Postos, Graduações e Precedência",
          category: "Esquemas & Tabelas",
          leadText: "Posto é o grau hierárquico do oficial conferido por Carta Patente; Graduação é o grau da praça conferido pelo Comandante da Força.",
          bodyText: "Em igualdade de posto ou graduação, os militares da ativa têm precedência sobre os da inativa.",
          tableData: {
            headers: ["Grau Hierárquico", "Denominação", "Ato de Concessão", "Diploma Legal"],
            rows: [
              ["Oficiais", "Posto", "Presidente da República", "Carta Patente"],
              ["Praças Especiais", "Guarda-Marinha / Aspirante", "Comandante da Marinha", "Ato de Declaração"],
              ["Praças Graduadas", "Graduação (Suboficial a Cabo)", "Autoridade Militar Naval", "Portaria / Ordem de Serviço"],
              ["Militares Inativos", "Reserva Remunerada / Reformado", "Ato de Transferência", "Título de Inatividade"]
            ]
          },
          mnemonics: [
            { code: "POSTO = OFICIAL + CARTA PATENTE", meaning: "Conferido privativamente por ato presidencial." },
            { code: "GRADUAÇÃO = PRAÇA", meaning: "Conferido por autoridade militar competente." },
            { code: "PRAÇAS ESPECIAIS = GM & ASPIRANTE", meaning: "Prerrogativas de oficial subalterno sem carta patente definitiva." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas Clássicas da DEnsM",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A DEnsM costuma explorar as regras de antiguidade e os limites do serviço extraordinário no RDM.",
          bodyText: "Atenção estrita aos critérios sucessivos de desempate de antiguidade no mesmo posto ou graduação (Art. 17 da Lei 6.880/80):\n1º Data da promoção/nomeação;\n2º Antiguidade no posto/graduação anterior;\n3º Classificação no curso de formação;\n4º Data de praça;\n5º Maior idade.",
          practicalCases: [
            {
              title: "Pegadinha DEnsM: Militares Inativos e Hierarquia",
              scenario: "Militares da reserva remunerada ou reformados perdem o dever de respeito à hierarquia perante os militares da ativa?",
              tip: "NÃO! O Art. 14, § 3º da Lei 6.880/80 exige respeito à hierarquia e à disciplina em todas as circunstâncias entre militares da ativa, da reserva e reformados."
            },
            {
              title: "Pegadinha DEnsM: Competência da Autoridade Marítima (LESTA)",
              scenario: "A Capitania dos Portos pode aplicar multas e apreender embarcações civis em tráfego aquaviário?",
              tip: "SIM! A Lei 9.537/1997 confere expressamente à Autoridade Marítima o poder de polícia naval para salvaguarda da vida humana e segurança da navegação."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos Literais Obrigatórios (Lei 6.880/80 & LESTA)",
          category: "Lei Seca & Súmulas",
          leadText: "Conhecimento literal dos artigos mais recorrentes nos concursos da Marinha do Brasil.",
          bodyText: "Exame pontual das normas fundamentais da legislação militar-naval.",
          lawArticles: [
            { article: "Art. 14 (Lei 6.880/80)", text: "A hierarquia e a disciplina são a base institucional das Forças Armadas. A autoridade e a responsabilidade crescem com o grau hierárquico." },
            { article: "Art. 16, § 1º (Lei 6.880/80)", text: "Posto é o grau hierárquico do oficial, conferido por ato do Presidente da República ou do Comandante de Força Singular e confirmado em Carta Patente." },
            { article: "Art. 3º (Lei 9.537/97 - LESTA)", text: "Cabe à Autoridade Marítima promover a implementação e a execução desta Lei, com o propósito de assegurar a salvaguarda da vida humana e a segurança da navegação, no mar aberto e em hidrovias interiores, e a prevenção da poluição ambiental." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Questão de Fixação Homologada DEnsM",
          category: "Fixação & Questões",
          leadText: "Teste prático simulando o estilo real de prova da Diretoria de Ensino da Marinha.",
          bodyText: "Resolva o item abaixo e verifique a fundamentação completa.",
          question: {
            id: 881,
            question: "(DEnsM - Marinha do Brasil - SMV RM2) Em relação à escala hierárquica e aos círculos hierárquicos estabelecidos no Estatuto dos Militares (Lei Federal nº 6.880/1980), assinale a opção correta:",
            options: {
              A: "O posto militar é o grau hierárquico privativo das praças graduadas.",
              B: "Os Guardas-Marinha e Aspirantes a Oficial são praças especiais.",
              C: "A disciplina e o respeito à hierarquia aplicam-se exclusivamente durante o quarto de serviço a bordo.",
              D: "A antiguidade militar suprime a necessidade de observância às ordens legais do superior.",
              E: "Militares da ativa e da reserva remunerada têm precedência idêntica em qualquer hipótese."
            },
            answer: "B",
            explanation: "Conforme o art. 16, § 4º da Lei nº 6.880/80, os Guardas-Marinha e Aspirantes a Oficial pertencem à categoria das Praças Especiais."
          }
        }
      ]
    }
  ],

  // ==========================================
  // RACIOCÍNIO LÓGICO-MATEMÁTICO
  // ==========================================
  "Raciocínio Lógico-Matemático": [
    {
      moduleNumber: 1,
      totalModules: 4,
      title: "Lógica de Proposições, Tabela-Verdade & Conectivos Lógicos",
      bancaTrend: "FGV / Cesgranrio: Cobrança pesada do valor lógico de proposições compostas e identificação de tautologias.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Conceito de Proposição, Princípios Lógicos e Conectivos Fundamentais",
          category: "Doutrina & Teoria",
          leadText: "Uma proposição lógica é toda sentença declarativa que admite um único valor lógico: Verdadeiro (V) ou Falso (F).",
          bodyText: "Na lógica bivalente clássica adotada pela FGV e Cesgranrio, vigem três princípios invioláveis:\n1) Princípio da Identidade: uma proposição verdadeira é sempre verdadeira, e uma falsa é sempre falsa (P = P);\n2) Princípio da Não-Contradição: nenhuma proposição pode ser simultaneamente verdadeira e falsa (~(P ^ ~P));\n3) Princípio do Terceiro Excluído: uma proposição ou é verdadeira ou é falsa, não havendo terceira possibilidade.\n\nSentenças interrogativas ('Quem foi aprovado?'), exclamativas ('Que prova difícil!'), imperativas ('Estude todos os dias!') e sentenças abertas ('x + 4 = 10' ou 'Ele foi aprovado na Receita') NÃO são proposições lógicas porque não podem ser valoradas objetivamente.",
          deepDiveText: "Os conectivos lógicos fundamentais operam como funções de verdade:\n• Conjunção (E, ^): Verdadeira apenas se TODAS as partes forem verdadeiras.\n• Disjunção Inclusiva (OU, v): Falsa apenas se TODAS as partes forem falsas.\n• Disjunção Exclusiva (OU...OU, _v_): Verdadeira se os valores forem DISTINTOS (um V e outro F).\n• Condicional (SE...ENTÃO, ->): Falsa exclusivamente no caso 'Vera Fischer' (V -> F = F).\n• Bicondicional (SE E SOMENTE SE, <->): Verdadeira se os valores forem IGUAIS (ambos V ou ambos F)."
        },
        {
          pageNumber: 2,
          pageTitle: "Tabelas-Verdade Completas e Classificação de Fórmulas",
          category: "Esquemas & Tabelas",
          leadText: "O número de linhas de uma tabela-verdade com n proposições simples distintas é exatamente 2^n.",
          bodyText: "Para 2 proposições simples (P e Q), temos 2^2 = 4 linhas. Para 3 proposições (P, Q e R), temos 2^3 = 8 linhas.",
          tableData: {
            headers: ["P", "Q", "P ^ Q (E)", "P v Q (OU)", "P -> Q (SE...)", "P <-> Q (SSE)", "P _v_ Q (OU..OU)"],
            rows: [
              ["V", "V", "V", "V", "V", "V", "F"],
              ["V", "F", "F", "V", "F (V. Fischer)", "F", "V"],
              ["F", "V", "F", "V", "V", "F", "V"],
              ["F", "F", "F", "F", "V", "V", "F"]
            ]
          },
          mnemonics: [
            { code: "CONJUNÇÃO (E)", meaning: "Exigente: só sorri (V) com 100% de verdade." },
            { code: "DISJUNÇÃO (OU)", meaning: "Generosa: basta um V para ser feliz (V)." },
            { code: "CONDICIONAL (->)", meaning: "Vera Fischer é Falsa! (V antecedente e F consequente dá F)." },
            { code: "BICONDICIONAL (<->)", meaning: "Iguais dá V (V-V ou F-F), diferentes dá F." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas Clássicas da FGV",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV tem predileção por disfarçar a condicional (P -> Q) com expressões sinônimas que invertem a ordem aparente.",
          bodyText: "Atenção máxima à posição do ANTECEDENTE (condição suficiente) e do CONSEQUENTE (condição necessária):\n• 'Q, se P' = 'Se P, então Q' (P -> Q)\n• 'P é condição suficiente para Q' = P -> Q\n• 'Q é condição necessária para P' = P -> Q\n• 'P apenas se Q' = P -> Q\n• 'Sempre que P ocorre, Q acontece' = P -> Q",
          practicalCases: [
            {
              title: "Pegadinha FGV: Inversão de Condição Necessária",
              scenario: "A frase 'Estudar com afinco é condição necessária para ser nomeado' é equivalente a 'Se o candidato não for nomeado, então ele não estudou com afinco'?",
              tip: "ERRADO! 'Q é necessária para P' significa P -> Q (Nomeado -> Estudou). Pela contrapositiva, equivale a: 'Se NÃO estudou, então NÃO é nomeado' (~Q -> ~P)."
            },
            {
              title: "Pegadinha FGV: Frase Imperativa não é proposição",
              scenario: "O item afirma que a sentença 'Guarde os autos do processo no arquivo central!' possui 4 linhas na sua tabela-verdade.",
              tip: "ERRADO! Trata-se de uma oração no modo imperativo (ordem), logo NÃO é uma proposição lógica e sequer possui tabela-verdade."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Tautologia, Contradição e Contingência",
          category: "Lei Seca & Súmulas",
          leadText: "A FGV frequentemente pede para identificar qual das alternativas expressa uma Tautologia lógica.",
          bodyText: "• Tautologia: Proposição composta cuja última coluna da tabela-verdade é SEMPRE Verdadeira (V), independentemente dos valores lógicos das proposições simples (ex: P v ~P; P -> P; (P ^ Q) -> P).\n• Contradição: Proposição composta cujo valor é SEMPRE Falso (F) em todas as linhas (ex: P ^ ~P).\n• Contingência: Proposição composta que pode ser V ou F dependendo das variáveis (apresenta pelo menos um V e pelo menos um F).",
          lawArticles: [
            { article: "Tautologia Canônica 1", text: "P v ~P (Princípio do Terceiro Excluído: ou chove ou não chove)." },
            { article: "Tautologia Canônica 2", text: "(P -> Q) <-> (~Q -> ~P) (Equivalência da Contrapositiva)." },
            { article: "Tautologia Canônica 3", text: "~(P ^ Q) <-> (~P v ~Q) (Primeira Lei de De Morgan)." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva o item inédito formulado no padrão rigoroso da FGV / Cesgranrio para consolidar o Módulo 01.",
          bodyText: "Analise a proposição abaixo e identifique a assertiva correta de acordo com as regras de cálculo proposicional.",
          question: {
            id: 2011,
            question: "Considere a sentença composta: 'Se o Auditor Tributário lavra o auto de infração, então o contribuinte apresenta impugnação tempestiva ou o crédito tributário é inscrito em dívida ativa'. Sabendo que o Auditor lavrou o auto, mas o crédito NÃO foi inscrito em dívida ativa e a sentença como um todo é VERDADEIRA, pode-se concluir com certeza que:",
            options: {
              A: "O contribuinte apresentou impugnação tempestiva.",
              B: "O contribuinte não apresentou impugnação tempestiva.",
              C: "A condicional possui valor lógico falso.",
              D: "O crédito foi parcelado judicialmente.",
              E: "Não é possível determinar a conduta do contribuinte."
            },
            answer: "A",
            explanation: "Temos P -> (Q v R) = V. Como o Auditor lavrou o auto, o antecedente P é V. Para a condicional ser V, o consequente (Q v R) DEVE ser V. Como o crédito NÃO foi inscrito (R = F), para a disjunção (Q v F) ser verdadeira, é obrigatório que Q seja Verdadeiro ('O contribuinte apresentou impugnação tempestiva')."
          }
        }
      ]
    },
    {
      moduleNumber: 2,
      totalModules: 4,
      title: "Equivalências Lógicas, Contrapositiva & Regras de Negação",
      bancaTrend: "FGV / Cesgranrio: Negação do Se...Então (Regra do MANÉ), Leis de De Morgan e equivalência disjuntiva (NEYMAR).",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Equivalências Fundamentais da Condicional (P -> Q)",
          category: "Doutrina & Teoria",
          leadText: "Duas proposições são logicamente equivalentes quando possuem exatamente a mesma tabela-verdade.",
          bodyText: "A condicional P -> Q possui duas equivalências que caem em praticamente 100% das provas fiscais e bancárias:\n1) Contrapositiva (Transposição): P -> Q <=> ~Q -> ~P (Inverte as duas proposições e nega ambas).\nExemplo: 'Se estudo todo dia, então passo no concurso' <=> 'Se NÃO passei no concurso, então NÃO estudei todo dia'.\n\n2) Equivalência Disjuntiva (Regra do NEYMAR): P -> Q <=> ~P v Q (NEga a primeira OU Mantém a segunda).\nExemplo: 'Se chove, então levo guarda-chuva' <=> 'Não chove OU levo guarda-chuva'.",
          deepDiveText: "Atenção: 'P -> Q' NUNCA é equivalente a 'Q -> P' (recíproca) e NUNCA é equivalente a '~P -> ~Q' (inversa). Essas são falácias lógicas muito exploradas em pegadinhas de alternativas."
        },
        {
          pageNumber: 2,
          pageTitle: "Negação das Proposições Compostas (Leis de De Morgan & MANÉ)",
          category: "Esquemas & Tabelas",
          leadText: "Negar uma proposição NÃO é apenas colocar 'não' na frase; é encontrar a sentença que tem o valor lógico oposto.",
          bodyText: "Regras canônicas de negação:\n• Negação da Conjunção: ~(P ^ Q) <=> ~P v ~Q (Nega a primeira, troca E por OU, nega a segunda).\n• Negação da Disjunção: ~(P v Q) <=> ~P ^ ~Q (Nega a primeira, troca OU por E, nega a segunda).\n• Negação da Condicional (Regra do MANÉ): ~(P -> Q) <=> P ^ ~Q (MAntém a primeira E NEga a segunda).",
          mnemonics: [
            { code: "EQUIVALÊNCIA DO SE...ENTÃO = NEYMAR", meaning: "NEga a 1ª OU Mantém a 2ª: P -> Q <=> ~P v Q." },
            { code: "CONTRAPOSITIVA = VOLTA NEGANDO", meaning: "P -> Q <=> ~Q -> ~P (Inverte os lados e nega tudo)." },
            { code: "NEGAÇÃO DO SE...ENTÃO = MANÉ", meaning: "MAntém a 1ª E NEga a 2ª: ~(P -> Q) <=> P ^ ~Q." },
            { code: "DE MORGAN = TROCA O CONECTIVO", meaning: "Negar 'E' vira 'OU' com ambos negados; negar 'OU' vira 'E' com ambos negados." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas da FGV em Negação",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV adora colocar nas alternativas a negação da condicional como sendo outro 'se...então'.",
          bodyText: "Lembre-se: A negação de uma condicional (Se...então) NUNCA é outra condicional! É SEMPRE uma conjunção com o conectivo 'E' (Regra do MANÉ).",
          practicalCases: [
            {
              title: "Pegadinha de Prova: Negação de Se...Então",
              scenario: "Assinale a negação de 'Se o fiscal aplicar a multa, o infrator recorrerá'.",
              tip: "Muitos candidatos marcam 'Se o fiscal não aplicar, o infrator não recorrerá'. ERRADO! O correto é: 'O fiscal aplicou a multa E o infrator NÃO recorreu' (MANÉ)."
            },
            {
              title: "Pegadinha de De Morgan com Frases Negativas",
              scenario: "Qual a negação de 'João não é perito e Maria não é auditora'?",
              tip: "Aplica De Morgan: Nega '~João' (fica João é perito), troca 'E' por 'OU', nega '~Maria' (fica Maria é auditora). Resultado: 'João é perito OU Maria é auditora'."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Equivalência e Negação do Bicondicional e 'Ou...Ou'",
          category: "Lei Seca & Súmulas",
          leadText: "O bicondicional (P <-> Q) e a disjunção exclusiva (P _v_ Q) são a negação exata um do outro.",
          bodyText: "• Negação do Bicondicional: ~(P <-> Q) <=> P _v_ Q <=> (P ^ ~Q) v (~P ^ Q)\n• Negação da Disjunção Exclusiva: ~(P _v_ Q) <=> P <-> Q\n• Equivalência do Bicondicional: P <-> Q <=> (P -> Q) ^ (Q -> P)",
          lawArticles: [
            { article: "Identidade Lógica 1", text: "P <-> Q é equivalente a (P -> Q) ^ (Q -> P) (dupla condicionalidade)." },
            { article: "Identidade Lógica 2", text: "P _v_ Q é a negação de P <-> Q (se um é V, o outro é F)." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Teste seu reflexo lógico contra o estilo clássico de equivalências da FGV / Cesgranrio.",
          bodyText: "Resolva a questão abaixo aplicando as regras do NEYMAR e Contrapositiva.",
          question: {
            id: 2012,
            question: "Dizer que 'Se o candidato obtém nota superior a 80 pontos, então é convocado para o curso de formação' é logicamente equivalente a afirmar que:",
            options: {
              A: "O candidato não obtém nota superior a 80 pontos ou é convocado para o curso de formação.",
              B: "Se o candidato não obtém nota superior a 80 pontos, então não é convocado.",
              C: "O candidato obtém nota superior a 80 pontos e não é convocado.",
              D: "Se o candidato for convocado, então obteve nota superior a 80 pontos.",
              E: "O candidato é convocado se e somente se obtiver nota superior a 80 pontos."
            },
            answer: "A",
            explanation: "Pela regra do NEYMAR (P -> Q <=> ~P v Q): Nega a primeira ('O candidato NÃO obtém nota superior a 80 pontos') OU Mantém a segunda ('é convocado para o curso de formação'). Alternativa A correta."
          }
        }
      ]
    },
    {
      moduleNumber: 3,
      totalModules: 4,
      title: "Diagramas Lógicos, Silogismos & Quantificadores",
      bancaTrend: "FGV / Cesgranrio: Negação de Todo/Algum/Nenhum (Regra do PEA + NÃO) e inferência com diagramas de Euler-Venn.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Quantificadores Universais e Existenciais",
          category: "Doutrina & Teoria",
          leadText: "Quantificadores lógicos determinam o escopo de elementos de um conjunto que satisfazem uma determinada propriedade.",
          bodyText: "• Quantificador Universal Afirmativo ('Todo A é B'): O conjunto A está totalmente contido no conjunto B (A ⊂ B).\n• Quantificador Universal Negativo ('Nenhum A é B'): Os conjuntos A e B são disjuntos (A ∩ B = ∅).\n• Quantificador Existencial Afirmativo ('Algum A é B' / 'Pelo menos um A é B'): Há pelo menos um elemento comum aos conjuntos A e B (A ∩ B ≠ ∅).\n• Quantificador Existencial Negativo ('Algum A não é B'): Há pelo menos um elemento de A que não pertence a B.",
          deepDiveText: "Atenção crucial: No raciocínio lógico formal, 'Todo A é B' NÃO implica que 'Todo B é A'. Por exemplo, 'Todo Auditor é servidor público' não significa que 'Todo servidor público é Auditor'."
        },
        {
          pageNumber: 2,
          pageTitle: "Negação dos Quantificadores Lógicos (Regra do PEA + NÃO)",
          category: "Esquemas & Tabelas",
          leadText: "Para negar um quantificador universal ('Todo'), basta encontrar UM contraexemplo (quantificador existencial).",
          bodyText: "Regras de Ouro de Negação:\n1) Negação de 'TODO A é B' -> 'ALGUM A NÃO é B' (ou 'Pelo menos um A não é B' / 'Existe A que não é B').\n2) Negação de 'NENHUM A é B' -> 'ALGUM A é B' (ou 'Pelo menos um A é B').\n3) Negação de 'ALGUM A é B' -> 'NENHUM A é B' (ou 'Todo A não é B').\n4) Negação de 'ALGUM A NÃO é B' -> 'TODO A é B'.",
          mnemonics: [
            { code: "NEGAÇÃO DO 'TODO' = PEA + NÃO", meaning: "Pelo menos um / Existe / Algum + NÃO (ex: Algum A não é B)." },
            { code: "NUNCA NEGUE 'TODO' COM 'NENHUM'", meaning: "Dizer 'Nenhum' é extremo demais; basta 1 exceção para derrubar o 'Todo'." },
            { code: "NEGAÇÃO DO 'NENHUM' = PEA", meaning: "Basta 1 elemento existir: Algum A é B." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas Clássicas com Diagramas",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A banca tenta induzir o candidato a assumir conclusões que não são necessariamente verdadeiras a partir dos diagramas.",
          bodyText: "Para verificar a validade de um silogismo, desenhe os diagramas de Venn testando o 'pior cenário' (se houver um único caso em que a conclusão falhe, o argumento é INVÁLIDO).",
          practicalCases: [
            {
              title: "Pegadinha Clássica: 'Todo A é B' e 'Algum B é C'",
              scenario: "Premissas: Todo auditor é inteligente. Alguns inteligentes gostam de xadrez. Conclusão: Alguns auditores gostam de xadrez.",
              tip: "INVÁLIDO! O subconjunto dos auditores pode estar na parte dos 'inteligentes' que NÃO jogam xadrez. Sem interseção garantida, a conclusão não é necessária."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Silogismo Categórico e Regras de Validade",
          category: "Lei Seca & Súmulas",
          leadText: "Um argumento é dedutivamente válido quando é impossível que suas premissas sejam verdadeiras e sua conclusão falsa.",
          bodyText: "• Validade formal depende unicamente da estrutura lógica, e não da verdade factual das premissas.\n• Se 'Todo marciano tem asas' (V no universo do argumento) e 'João é marciano' (V), então 'João tem asas' é uma conclusão formalmente válida.",
          lawArticles: [
            { article: "Regra do Silogismo 1", text: "De duas premissas particulares nada se conclui validamente." },
            { article: "Regra do Silogismo 2", text: "De duas premissas negativas nada se conclui validamente." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva o item inédito sobre quantificadores no padrão FGV.",
          bodyText: "Identifique a negação lógica da sentença universal apresentada.",
          question: {
            id: 2013,
            question: "A negação lógica da proposição 'Todos os relatórios fiscais foram auditados e aprovados pela comissão' é:",
            options: {
              A: "Nenhum relatório fiscal foi auditado e aprovado pela comissão.",
              B: "Pelo menos um relatório fiscal não foi auditado ou não foi aprovado pela comissão.",
              C: "Todos os relatórios fiscais foram reprovados pela comissão.",
              D: "Algum relatório fiscal foi auditado e aprovado pela comissão.",
              E: "Nenhum relatório fiscal foi auditado pela comissão."
            },
            answer: "B",
            explanation: "Para negar 'Todo X é (A e B)', aplicamos a regra do PEA ('Pelo menos um X...') combinada com a Lei de De Morgan para negar a conjunção ('NÃO foi auditado OU NÃO foi aprovado'). Alternativa B perfeita."
          }
        }
      ]
    },
    {
      moduleNumber: 4,
      totalModules: 4,
      title: "Análise Combinatória: Princípio Fundamental, Arranjos & Combinações",
      bancaTrend: "FGV / Cesgranrio: Distinção entre Arranjo (ordem importa) e Combinação (ordem não importa), anagramas com repetição e comissões.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Princípio Fundamental da Contagem (PFC) e Fatorial",
          category: "Doutrina & Teoria",
          leadText: "O Princípio Multiplicativo estabelece que se uma decisão pode ser tomada de 'm' maneiras e outra de 'n' maneiras, o total de possibilidades sucessivas é m × n.",
          bodyText: "• Princípio Aditivo (OU): Quando os eventos são mutuamente exclusivos, somamos as possibilidades (m + n).\n• Princípio Multiplicativo (E): Quando as etapas são sucessivas e independentes, multiplicamos as possibilidades (m × n).\n• Fatorial de n (n!): Produto de todos os números naturais de n até 1. Convenção: 0! = 1 e 1! = 1.",
          deepDiveText: "Exemplo clássico: Placas de veículos com 3 letras e 4 dígitos (padrão antigo): 26 × 26 × 26 × 10 × 10 × 10 × 10 = 175.760.000 placas possíveis."
        },
        {
          pageNumber: 2,
          pageTitle: "A Grande Dúvida: Arranjo vs Combinação",
          category: "Esquemas & Tabelas",
          leadText: "Faça o teste mental: 'Se eu mudar a ordem dos elementos escolhidos, o grupo muda?'. Se SIM = Arranjo/Permutação; se NÃO = Combinação.",
          bodyText: "Fórmulas Essenciais:\n• Permutação Simples: P(n) = n!\n• Permutação com Repetição: P_n^(a,b) = n! / (a! × b!)\n• Arranjo Simples: A(n, p) = n! / (n - p)!\n• Combinação Simples: C(n, p) = n! / [p! × (n - p)!]",
          tableData: {
            headers: ["Tipo", "A Ordem Importa?", "Exemplo Típico de Prova", "Fórmula"],
            rows: [
              ["Permutação", "Sim (usa todos os elementos)", "Anagramas de palavras, filas, senhas", "P_n = n!"],
              ["Arranjo", "Sim (usa parte dos elementos)", "Pódio (1º, 2º e 3º lugares), Presidente/Vice", "A(n,p) = n! / (n-p)!"],
              ["Combinação", "Não (grupo/comissão idêntica)", "Comissão de 3 auditores, sorteio de duplas", "C(n,p) = n! / [p!(n-p)!]"]
            ]
          },
          mnemonics: [
            { code: "A ORDEM IMPORTA? -> HÃN? (ARRANJO)", meaning: "Se a ordem altera o resultado (ex: senha '123' ≠ '321'), usa Arranjo." },
            { code: "A ORDEM NÃO IMPORTA? -> NÃO! (COMBINAÇÃO)", meaning: "Se escolher João e Maria é o mesmo que Maria e João, divide pela ordem (Combinação)." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Técnicas de Blocos e Anagramas",
          category: "Casos Práticos & Pegadinhas",
          leadText: "Técnica do Bloco / Elementos Juntos: Trate os elementos que devem ficar juntos como se fossem UM ÚNICO elemento.",
          bodyText: "Depois de permutar o conjunto com o bloco, lembre-se de multiplicar pela permutação interna dos elementos dentro do próprio bloco.",
          practicalCases: [
            {
              title: "Técnica do Bloco FGV",
              scenario: "De quantas maneiras 5 auditores podem se sentar em uma mesa, sabendo que os auditores A e B devem ficar sempre juntos?",
              tip: "Junte (A,B) em 1 super-elemento. Temos agora 4 elementos: (AB), C, D, E -> 4! = 24. Dentro do bloco, A e B permutam entre si (2! = 2). Total: 24 × 2 = 48 maneiras."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Combinações com Restrições (Comissões e Grupos)",
          category: "Lei Seca & Súmulas",
          leadText: "Questões com exigência de 'pelo menos um' são resolvidas mais rapidamente pelo Método do Complementar (Total - Indesejados).",
          bodyText: "Total com Restrição 'Pelo Menos 1' = Total Geral de Combinações SEM restrição MINUS Combinações com ZERO elementos daquele tipo.",
          lawArticles: [
            { article: "Princípio das Gavetas de Dirichlet", text: "Se n itens são colocados em m gavetas e n > m, pelo menos uma gaveta conterá mais de um item." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Aplique o cálculo combinatório na questão inédita abaixo.",
          bodyText: "Resolva o problema de formação de comissões com restrições.",
          question: {
            id: 2014,
            question: "Um grupo de trabalho na Receita Federal é composto por 6 Auditores e 4 Analistas. Deseja-se formar uma comissão de auditoria composta por 3 servidores, sendo OBRIGATORIAMENTE 2 Auditores e 1 Analista. O número de maneiras distintas de compor essa comissão é:",
            options: {
              A: "60",
              B: "120",
              C: "30",
              D: "24",
              E: "72"
            },
            answer: "A",
            explanation: "Para os Auditores: C(6, 2) = (6 × 5) / (2 × 1) = 15. Para os Analistas: C(4, 1) = 4. Pelo Princípio Fundamental da Contagem: 15 × 4 = 60 maneiras distintas. Alternativa A correta."
          }
        }
      ]
    }
  ],

  // ==========================================
  // ESTATÍSTICA
  // ==========================================
  "Estatística": [
    {
      moduleNumber: 1,
      totalModules: 2,
      title: "Probabilidade: Eventos Dependentes, Independentes & Condicional",
      bancaTrend: "FGV / Cesgranrio: Probabilidade da união P(A U B), probabilidade condicional P(A|B) e teorema do produto.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Conceito Clássico de Probabilidade e Espaço Amostral",
          category: "Doutrina & Teoria",
          leadText: "Probabilidade de Laplace: P(E) = n(E) / n(S) (Número de Casos Favoráveis dividido pelo Número de Casos Possíveis).",
          bodyText: "• Espaço Amostral (S): Conjunto de todos os resultados possíveis de um experimento aleatório.\n• Evento (E): Qualquer subconjunto do espaço amostral.\n• Propriedades Fundamentais: 0 ≤ P(E) ≤ 1; P(∅) = 0 (Evento Impossível); P(S) = 1 (Evento Certo).\n• Evento Complementar: P(~E) = 1 - P(E).",
          deepDiveText: "Dica de ouro FGV: Sempre que o enunciado perguntar 'a probabilidade de pelo menos um...', calcule 1 menos a probabilidade de NENHUM: P(pelo menos 1) = 1 - P(nenhum)."
        },
        {
          pageNumber: 2,
          pageTitle: "União e Interseção de Eventos (Regra da Adição e Multiplicação)",
          category: "Esquemas & Tabelas",
          leadText: "A probabilidade da união de dois eventos desconta a interseção para não contar elementos em duplicidade.",
          bodyText: "• Regra da Adição (OU): P(A ∪ B) = P(A) + P(B) - P(A ∩ B).\n• Se os eventos forem Mutuamente Exclusivos (disjuntos): P(A ∩ B) = 0 => P(A ∪ B) = P(A) + P(B).\n• Regra da Multiplicação (E): P(A ∩ B) = P(A) × P(B|A).\n• Se os eventos forem Independentes: P(A ∩ B) = P(A) × P(B).",
          mnemonics: [
            { code: "PROBABILIDADE DA UNIÃO (OU)", meaning: "Soma as partes e subtrai a interseção: P(A) + P(B) - P(A e B)." },
            { code: "EVENTOS INDEPENDENTES (E)", meaning: "Multiplica as probabilidades diretas: P(A) × P(B)." },
            { code: "SEM REPOSIÇÃO", meaning: "O espaço amostral diminui a cada retirada (eventos dependentes)." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Probabilidade Condicional P(A|B) e Teorema de Bayes",
          category: "Casos Práticos & Pegadinhas",
          leadText: "Probabilidade Condicional é a probabilidade do evento A ocorrer sabendo previamente que o evento B já ocorreu.",
          bodyText: "Fórmula: P(A|B) = P(A ∩ B) / P(B), onde P(B) > 0. O espaço amostral fica reduzido exclusivamente ao conjunto B.",
          practicalCases: [
            {
              title: "Caso Prático FGV: Redução do Espaço Amostral",
              scenario: "Dois dados não viciados são lançados. Sabendo que a soma das faces foi ímpar, qual a probabilidade de ter saído o número 2 em pelo menos um dado?",
              tip: "Não use 36 como denominador! O evento condicionado ('soma ímpar') possui exatamente 18 casos possíveis. Desses 18, conte quantos possuem a face 2."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Amostragem com e sem Reposição",
          category: "Lei Seca & Súmulas",
          leadText: "Em retiradas sucessivas, verifique sempre se há reposição dos itens na urna.",
          bodyText: "• COM Reposição: As probabilidades mantêm-se constantes a cada tentativa (eventos independentes).\n• SEM Reposição: Tanto o numerador quanto o denominador são decrementados a cada retirada.",
          lawArticles: [
            { article: "Lei dos Grandes Números", text: "À medida que o número de repetições de um experimento cresce, a frequência relativa aproxima-se da probabilidade teórica." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva o desafio de probabilidade clássico da banca examinadora.",
          bodyText: "Aplique a regra do evento complementar no problema abaixo.",
          question: {
            id: 2015,
            question: "Em uma gaveta há 5 processos fiscais da Área Tributária e 3 da Área Aduaneira. Dois processos são retirados sucessivamente e sem reposição. A probabilidade de que pelo menos um dos processos retirados seja da Área Aduaneira é:",
            options: {
              A: "9/14",
              B: "5/14",
              C: "15/56",
              D: "1/2",
              E: "3/8"
            },
            answer: "A",
            explanation: "Total de processos = 8. Evento complementar (Nenhum aduaneiro = ambos tributários): P(T1 e T2) = (5/8) × (4/7) = 20/56 = 5/14. Portanto, P(pelo menos um aduaneiro) = 1 - 5/14 = 9/14. Alternativa A correta."
          }
        }
      ]
    },
    {
      moduleNumber: 2,
      totalModules: 2,
      title: "Estatística Descritiva: Medidas de Tendência Central & Dispersão",
      bancaTrend: "FGV / Cesgranrio: Média Aritmética, Mediana (resistente a outliers), Moda, Variância e Desvio-Padrão.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Medidas de Posição / Tendência Central (Média, Mediana e Moda)",
          category: "Doutrina & Teoria",
          leadText: "As medidas de tendência central resumem o centro da distribuição de um conjunto de dados numéricos.",
          bodyText: "• Média Aritmética Simples (x̄): Soma de todos os valores dividida pelo número total de observações (sensível a valores extremos/outliers).\n• Mediana (Md): Valor que ocupa a posição central do rol (dados ordenados em ordem crescente). Se o número de termos for par, é a média dos dois termos centrais. Vantagem: é RESISTENTE a valores discrepantes.\n• Moda (Mo): Valor que ocorre com maior frequência na amostra (pode ser amodal, unimodal, bimodal ou multimodal).",
          deepDiveText: "Relação de Assimetria de Pearson:\n• Distribuição Simétrica: Média = Mediana = Moda\n• Assimetria Positiva (à direita): Moda < Mediana < Média\n• Assimetria Negativa (à esquerda): Média < Mediana < Moda"
        },
        {
          pageNumber: 2,
          pageTitle: "Medidas de Dispersão / Variabilidade (Variância e Desvio-Padrão)",
          category: "Esquemas & Tabelas",
          leadText: "Duas amostras com a mesma média podem ter comportamentos completamente distintos em termos de variabilidade.",
          bodyText: "• Amplitude Total (AT): Diferença entre o maior e o menor valor (Xmax - Xmin).\n• Variância Populacional (σ²): Média dos quadrados dos desvios em relação à média: σ² = Σ(xi - x̄)² / N.\n• Variância Amostral (s²): Usa N - 1 no denominador (graus de liberdade): s² = Σ(xi - x̄)² / (n - 1).\n• Desvio-Padrão (σ ou s): Raiz quadrada positiva da variância (possui a mesma unidade de medida dos dados originais).\n• Coeficiente de Variação (CV): Medida relativa de dispersão: CV = (Desvio-Padrão / Média) × 100%.",
          mnemonics: [
            { code: "MEDIANA = CENTRO DO ROL", meaning: "Ordene sempre a lista do menor para o maior antes de calcular." },
            { code: "DESVIO-PADRÃO = RAIZ DA VARIÂNCIA", meaning: "Desvio-Padrão tem a unidade real; variância tem a unidade ao quadrado." },
            { code: "PROPRIEDADES DA VARIÂNCIA", meaning: "Somar constante não altera a variância; multiplicar por 'k' multiplica a variância por k²." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Propriedades da Média e Variância em Transformações Lineares",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV adora questões que alteram todos os valores da amostra (ex: somar 5 ou dobrar todos os salários).",
          bodyText: "Se Y = aX + b:\n1) Nova Média: E(Y) = a × E(X) + b (A média sofre a soma e a multiplicação).\n2) Nova Variância: Var(Y) = a² × Var(X) (A variância IGNORA a soma 'b' e multiplica pelo QUADRADO de 'a').\n3) Novo Desvio-Padrão: DP(Y) = |a| × DP(X) (O desvio-padrão ignora a soma 'b' e multiplica pelo módulo de 'a').",
          practicalCases: [
            {
              title: "Pegadinha de Ouro FGV",
              scenario: "Um conjunto de dados possui média 10 e desvio-padrão 2. Se somarmos 5 a todos os elementos, qual será a nova média e o novo desvio-padrão?",
              tip: "A nova média será 10 + 5 = 15. O novo desvio-padrão CONTINUA SENDO 2 (somar uma constante desloca todos os pontos juntos, sem alterar a dispersão entre eles)!"
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Quartis, Percentis e Boxplot",
          category: "Lei Seca & Súmulas",
          leadText: "Medidas separatrizes dividem a distribuição ordenada em partes percentuais iguais.",
          bodyText: "• 1º Quartil (Q1): 25% dos dados abaixo dele.\n• 2º Quartil (Q2): 50% dos dados (coincide exatamente com a Mediana).\n• 3º Quartil (Q3): 75% dos dados abaixo dele.\n• Intervalo Interquartil (IQR): Q3 - Q1 (utilizado em gráficos Boxplot para identificar outliers além de 1,5 × IQR).",
          lawArticles: [
            { article: "Definição de Outlier Estatístico", text: "Valores menores que Q1 - 1,5 × IQR ou maiores que Q3 + 1,5 × IQR são considerados pontos discrepantes." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva o item de estatística descritiva no modelo oficial da banca.",
          bodyText: "Calcule a mediana e a média da sequência fornecida.",
          question: {
            id: 2016,
            question: "Considere os seguintes tempos (em minutos) registrados para análise de 6 processos: [12, 18, 14, 25, 15, 30]. A mediana e a média desse conjunto são, respectivamente:",
            options: {
              A: "16,5 e 19,0",
              B: "14,5 e 18,0",
              C: "15,0 e 19,0",
              D: "16,5 e 20,0",
              E: "18,0 e 19,0"
            },
            answer: "A",
            explanation: "1) Ordenando o rol: [12, 14, 15, 18, 25, 30]. Como n = 6 (par), os dois termos centrais são 15 e 18. Mediana = (15 + 18) / 2 = 16,5. 2) Média: (12 + 14 + 15 + 18 + 25 + 30) / 6 = 114 / 6 = 19,0. Alternativa A correta."
          }
        }
      ]
    }
  ],

  // ==========================================
  // LEGISLAÇÃO TRIBUTÁRIA
  // ==========================================
  "Legislação Tributária": [
    {
      moduleNumber: 1,
      totalModules: 2,
      title: "Tributos Federais: IRPJ, CSLL e Regimes de Apuração",
      bancaTrend: "FGV ATRFB: Lucro Real (hipóteses obrigatórias), Lucro Presumido, adições e exclusões no LALUR.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Imposto sobre a Renda da Pessoa Jurídica (IRPJ) e CSLL",
          category: "Doutrina & Teoria",
          leadText: "O IRPJ e a CSLL incidem sobre o resultado econômico das pessoas jurídicas domiciliadas no País.",
          bodyText: "Regimes de Tributação do IRPJ no Brasil:\n1) Lucro Real: Lucro líquido do período de apuração ajustado pelas adições, exclusões ou compensações prescritas pela legislação fiscal (apurado no LALUR e LACS). Obrigatório para bancos, seguradoras, factorings e empresas com faturamento anual superior a R$ 78 milhões.\n2) Lucro Presumido: Forma simplificada de apuração para empresas com faturamento até R$ 78 milhões/ano que não se enquadrem nas vedações do Lucro Real. Aplica-se uma presunção percentual sobre a receita bruta (ex: 8% para comércio e 32% para serviços).\n3) Simples Nacional (LC 123/2006): Regime unificado de tributação para Microempresas (até R$ 360 mil/ano) e EPPs (até R$ 4,8 milhões/ano).",
          deepDiveText: "Alíquotas do IRPJ: Alíquota básica de 15% sobre o lucro tributável, mais adicional de 10% sobre a parcela do lucro que exceder R$ 20.000,00 por mês (R$ 60.000,00 no trimestre). A alíquota da CSLL para empresas em geral é de 9% (20% para bancos e 15% para demais instituições financeiras)."
        },
        {
          pageNumber: 2,
          pageTitle: "Quadro Comparativo dos Regimes Tributários Federais",
          category: "Esquemas & Tabelas",
          leadText: "Compreender os limites e presunções de cada regime é essencial para acertar questões da FGV.",
          bodyText: "Quadro resumo dos limites e bases de presunção:",
          tableData: {
            headers: ["Regime", "Limite de Receita Bruta", "Base de Cálculo", "Adicional IRPJ"],
            rows: [
              ["Simples Nacional", "Até R$ 4,8 milhões/ano", "Receita Bruta (Anexos I a V)", "Não se aplica"],
              ["Lucro Presumido", "Até R$ 78 milhões/ano", "Presunção (8% Comércio / 32% Serviços)", "10% sobre excedente de R$ 60k/trim"],
              ["Lucro Real", "Obrigatório > R$ 78 mi ou Bancos", "Lucro Contábil Ajustado (LALUR)", "10% sobre excedente de R$ 60k/trim"],
              ["Lucro Arbitrado", "Hipóteses de recusa de livros", "Presunção com acréscimo de 20%", "10% sobre excedente de R$ 60k/trim"]
            ]
          },
          mnemonics: [
            { code: "LUCRO REAL OBRIGATÓRIO", meaning: "Bancos, factorings, faturamento > 78 milhões e lucros do exterior." },
            { code: "PRESUNÇÃO COMÉRCIO vs SERVIÇO", meaning: "Comércio 8% (mais barato); Serviços 32% (4x maior presunção)." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas de LALUR",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV frequentemente questiona se uma despesa contábil é dedutível ou deve ser adicionada no LALUR.",
          bodyText: "Despesas Não Dedutíveis (Adições obrigatórias na Parte A do LALUR):\n• Multas punitivas por infração a leis fiscais ou de trânsito;\n• Brindes e doações não autorizadas por lei;\n• Alimentação de sócios e despesas pessoais de diretores;\n• Provisões não expressamente autorizadas (exceto férias e 13º salário).",
          practicalCases: [
            {
              title: "Pegadinha FGV: Multas Compensatórias vs Punitivas",
              scenario: "A empresa pagou R$ 50.000 em multas contratuais de mora por atraso de entrega e R$ 80.000 em multas punitivas lavradas pela Receita Federal.",
              tip: "As multas contratuais/compensatórias SÃO DEDUTÍVEIS. Apenas as multas punitivas por infração de leis são INDEDUTÍVEIS e exigem adição no LALUR!"
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos Literais Obrigatórios (RIR/2018)",
          category: "Lei Seca & Súmulas",
          leadText: "Artigos indispensáveis do Regulamento do Imposto de Renda (Decreto 9.580/2018).",
          bodyText: "• Art. 257: São obrigadas à apuração do lucro real as pessoas jurídicas cuja receita total no ano-calendário anterior seja superior ao limite de R$ 78.000.000,00.\n• Art. 311: São operacionais as despesas não computadas nos custos, necessárias à atividade da empresa e à manutenção da respectiva fonte produtora.",
          lawArticles: [
            { article: "RIR/2018, Art. 257, I", text: "Obrigação do Lucro Real por faturamento superior a R$ 78 milhões." },
            { article: "RIR/2018, Art. 311", text: "Conceito de despesas operacionais dedutíveis: usuais, normais e necessárias." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva a questão sobre apuração de IRPJ no modelo FGV.",
          bodyText: "Calcule o adicional de IRPJ devido no trimestre.",
          question: {
            id: 2021,
            question: "Uma sociedade empresária apurou lucro real trimestral tributável no valor de R$ 180.000,00. O valor total do IRPJ devido (alíquota básica + adicional) no trimestre é:",
            options: {
              A: "R$ 39.000,00",
              B: "R$ 27.000,00",
              C: "R$ 36.000,00",
              D: "R$ 45.000,00",
              E: "R$ 33.000,00"
            },
            answer: "A",
            explanation: "1) Alíquota básica (15%): 15% de R$ 180.000 = R$ 27.000. 2) Parcela excedente a R$ 60.000 no trimestre: R$ 180.000 - R$ 60.000 = R$ 120.000. 3) Adicional de 10%: 10% de R$ 120.000 = R$ 12.000. 4) Total IRPJ: R$ 27.000 + R$ 12.000 = R$ 39.000,00. Alternativa A correta."
          }
        }
      ]
    }
  ],

  // ==========================================
  // LEGISLAÇÃO ADUANEIRA
  // ==========================================
  "Legislação Aduaneira": [
    {
      moduleNumber: 1,
      totalModules: 2,
      title: "Jurisdição Aduaneira, Território & Recintos Alfandegados",
      bancaTrend: "FGV ATRFB/AFRFB: Distinção entre Zona Primária e Secundária, Portos Secos e Canais de Conferência Aduaneira.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Território Aduaneiro e Divisão Espacial de Jurisdição",
          category: "Doutrina & Teoria",
          leadText: "O território aduaneiro compreende todo o território nacional (Decreto 6.759/2009).",
          bodyText: "A jurisdição dos serviços aduaneiros estende-se por todo o território nacional e divide-se em:\n1) Zona Primária: Área demarcada pela autoridade aduaneira nos portos alfandegados, aeroportos alfandegados e pontos de fronteira alfandegados onde ocorrem o embarque, desembarque e controle direto de mercadorias ou pessoas procedentes do exterior.\n2) Zona Secundária: Compreende a totalidade restante do território nacional, incluindo as águas territoriais e o espaço aéreo.\n3) Portos Secos (EADI): Recintos alfandegados de uso público situados em Zona Secundária onde são executadas operações de movimentação, armazenagem e despacho aduaneiro de mercadorias.",
          deepDiveText: "Poder de Polícia Aduaneira: Na Zona Primária, o controle aduaneiro tem precedência sobre os demais serviços públicos. Em Zona Secundária, a fiscalização atua de forma repressiva e contínua."
        },
        {
          pageNumber: 2,
          pageTitle: "Canais de Conferência e Parametrização no SISCOMEX",
          category: "Esquemas & Tabelas",
          leadText: "A Declaração de Importação é submetida a análise de risco fiscal que direciona a carga para um dos 4 canais.",
          bodyText: "Canais de conferência e seus procedimentos oficiais:",
          tableData: {
            headers: ["Canal", "Cor", "Exame Documental?", "Conferência Física?", "Procedimento Especial?"],
            rows: [
              ["Verde", "Verde", "Não (Dispensado)", "Não (Dispensado)", "Desembaraço Automático"],
              ["Amarelo", "Amarelo", "Sim (Obrigatório)", "Não", "Exame dos Documentos da DI"],
              ["Vermelho", "Vermelho", "Sim (Obrigatório)", "Sim (Obrigatório)", "Abertura e Contagem da Carga"],
              ["Cinza", "Cinza", "Sim (Obrigatório)", "Sim (Obrigatório)", "Investigação de Fraude no Valor"]
            ]
          },
          mnemonics: [
            { code: "VERDE = VAI EMBORA", meaning: "Desembaraço automático sem exame." },
            { code: "AMARELO = ATENÇÃO DOCUMENTAL", meaning: "Verificação dos documentos e faturas." },
            { code: "VERMELHO = VEJA COM OS OLHOS", meaning: "Conferência física da carga + documentos." },
            { code: "CINZA = CRIME / CULPA", meaning: "Suspeita de fraude, subfaturamento e procedimento especial." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas de Zona Secundária",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV tenta confundir o candidato afirmando que Portos Secos pertencem à Zona Primária por realizarem despacho.",
          bodyText: "Lembre-se: O fato de um recinto realizar despacho e desembaraço NÃO o transforma em Zona Primária. Se estiver fora da orla portuária ou aeroportuária demarcada, é Zona Secundária.",
          practicalCases: [
            {
              title: "Pegadinha de Ouro FGV: Porto Seco e Despacho",
              scenario: "Mercadoria estrangeira desembarca em Santos e é transportada sob Trânsito Aduaneiro (DTA) para um Porto Seco em Campinas/SP, onde é desembaraçada.",
              tip: "O Porto Seco em Campinas pertence à ZONA SECUNDÁRIA. O transporte de Santos até Campinas ocorreu com suspensão tributária sob o regime de Trânsito Aduaneiro."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos do Regulamento Aduaneiro (Dec. 6.759/09)",
          category: "Lei Seca & Súmulas",
          leadText: "Normas fundamentais sobre jurisdição e controle de bagagem e mercadorias.",
          bodyText: "• Art. 3º: O território aduaneiro compreende todo o território nacional.\n• Art. 4º: A zona primária é constituída pelas áreas terrestres ou aquáticas, contínuas ou descontínuas, nos portos e aeroportos alfandegados e nos pontos de fronteira alfandegados.",
          lawArticles: [
            { article: "Dec. 6.759/09, Art. 3º", text: "Abrangência do território aduaneiro nacional." },
            { article: "Dec. 6.759/09, Art. 4º", text: "Definição formal e limites da Zona Primária." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva o desafio aduaneiro no modelo oficial da Receita Federal.",
          bodyText: "Identifique o canal de conferência aplicável ao procedimento especial de fraude.",
          question: {
            id: 2022,
            question: "Quando a fiscalização aduaneira da Receita Federal constata indícios justificados de fraude no valor declarado da mercadoria importada (subfaturamento), a Declaração de Importação é parametrizada no Canal:",
            options: {
              A: "Cinza",
              B: "Vermelho",
              C: "Amarelo",
              D: "Verde",
              E: "Laranja"
            },
            answer: "A",
            explanation: "O Canal Cinza é o canal específico de parametrização destinado ao exame documental, verificação física da mercadoria e aplicação de procedimento especial de controle aduaneiro para investigação de suspeita de fraude no valor aduaneiro declarado."
          }
        }
      ]
    }
  ],

  // ==========================================
  // CONTABILIDADE APLICADA AO SETOR PÚBLICO (CASP)
  // ==========================================
  "Contabilidade Aplicada ao Setor Público": [
    {
      moduleNumber: 1,
      totalModules: 3,
      title: "Plano de Contas Aplicado ao Setor Público (PCASP) & Naturezas da Informação",
      bancaTrend: "Cebraspe / FGV: Cobrança pesada do subsistema patrimonial vs orçamentário e a regra de fechamento das classes de contas.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Estrutura do PCASP, Naturezas da Informação e Escrituração",
          category: "Doutrina & Teoria",
          leadText: "O PCASP padronizou a contabilidade pública brasileira em 3 naturezas de informação: Orçamentária, Patrimonial e de Controle.",
          bodyText: "A Contabilidade Aplicada ao Setor Público (CASP) rege-se pelo Manual de Contabilidade Aplicada ao Setor Público (MCASP) emitido pela STN e pelas NBC TSP do CFC.\n\nO PCASP organiza as contas em 8 classes estruturadas pelas naturezas de informação:\n1) Natureza Patrimonial: Classes 1 (Ativo), 2 (Passivo e PL), 3 (Variações Patrimoniais Diminutivas - VPD) e 4 (Variações Patrimoniais Aumentativas - VPA). Adota o Regime de Competência para reconhecimento dos fatos contábeis.\n2) Natureza Orçamentária: Classes 5 (Orçamento Aprovado) e 6 (Execução do Orçamento). Registra a aprovação da LOA, fixação de despesa, previsão de receita, empenho, liquidação e pagamento.\n3) Natureza de Controle: Classes 7 (Controles Devedores) e 8 (Controles Credores). Registra atos potenciais que possam afetar o patrimônio futuro (convênios, contratos, avais, garantias).",
          deepDiveText: "Regra Fundamental das Partidas Dobradas no PCASP:\nOs lançamentos contábeis ocorrem DENTRO da mesma natureza de informação ou de forma espelhada e independente. Um fato patrimonial NÃO fecha débito/crédito com uma conta de natureza orçamentária!\n• Débito em conta ímpar (1, 3, 5, 7) = Aumento / Crédito em conta par (2, 4, 6, 8) = Aumento."
        },
        {
          pageNumber: 2,
          pageTitle: "Quadro Comparativo das 8 Classes do PCASP",
          category: "Esquemas & Tabelas",
          leadText: "O conhecimento da classe da conta define imediatamente sua natureza e seu regime contábil.",
          bodyText: "Estrutura oficial do Plano de Contas Aplicado ao Setor Público:",
          tableData: {
            headers: ["Classe", "Denominação da Conta", "Natureza da Informação", "Regime Aplicável", "Saldo Típico"],
            rows: [
              ["1", "Ativo", "Patrimonial", "Competência", "Devedor"],
              ["2", "Passivo e Patrimônio Líquido", "Patrimonial", "Competência", "Credor"],
              ["3", "Variações Patrimoniais Diminutivas (VPD)", "Patrimonial", "Competência", "Devedor"],
              ["4", "Variações Patrimoniais Aumentativas (VPA)", "Patrimonial", "Competência", "Credor"],
              ["5", "Aprovação do Planejamento e Orçamento", "Orçamentária", "Misto (Lei 4.320)", "Devedor"],
              ["6", "Execução do Planejamento e Orçamento", "Orçamentária", "Misto (Lei 4.320)", "Credor"],
              ["7", "Controles Devedores (Atos Potenciais)", "Controle", "Atos Administrativos", "Devedor"],
              ["8", "Controles Credores (Execução dos Atos)", "Controle", "Atos Administrativos", "Credor"]
            ]
          },
          mnemonics: [
            { code: "1 a 4 = PATRIMONIAL", meaning: "Classes 1, 2, 3 e 4 cuidam do patrimônio e resultado econômico pelo regime de competência." },
            { code: "5 e 6 = ORÇAMENTÁRIA", meaning: "Classes 5 e 6 registram a execução orçamentária (empenho, liquidação e pagamento)." },
            { code: "7 e 8 = CONTROLE", meaning: "Classes 7 e 8 registram atos potenciais, contratos e garantias." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas Clássicas do Cebraspe em CASP",
          category: "Casos Práticos & Pegadinhas",
          leadText: "O Cebraspe frequentemente tenta induzir o candidato ao erro sobre o momento do reconhecimento da VPA/VPD.",
          bodyText: "Atenção estrita: Na CASP, o regime de competência é integral para os fatos patrimoniais. A arrecadação de tributos pelo ente é registrada como VPA no momento do fato gerador ou lançamento, independentemente de quando ocorre o recebimento financeiro.",
          practicalCases: [
            {
              title: "Pegadinha Cebraspe: Fato Gerador de Tributos e VPA",
              scenario: "A Administração lança o IPTU de determinado exercício no valor de R$ 10 milhões. Nenhum contribuinte pagou ainda a cota única.",
              tip: "A CASP exige o registro imediato: Débito em Ativo (Créditos Tributários a Receber - Classe 1) e Crédito em VPA (Variação Patrimonial Aumentativa - Classe 4). O fato contábil independe da entrada de caixa!"
            },
            {
              title: "Pegadinha FGV: Fechamento de Lançamento Entre Classes Diferentes",
              scenario: "Item de prova afirma que o empenho da despesa gera simultaneamente um débito na classe 3 (VPD) e um crédito na classe 6 (Crédito Empenhado).",
              tip: "TOTALMENTE ERRADO! O empenho é fato estritamente orçamentário (Débito classe 5 e Crédito classe 6). A VPD (classe 3) só surge na liquidação (fato gerador da despesa patrimonial)."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Normas Aplicáveis (MCASP STN & NBC TSP)",
          category: "Lei Seca & Súmulas",
          leadText: "Dispositivos técnicos essenciais da Portaria STN nº 1.442/2023 e NBC TSP Estrutura Conceitual.",
          bodyText: "• MCASP Parte I: O orçamento público no Brasil adota regime misto (caixa para receitas arrecadadas e competência para despesas empenhadas - Art. 35 da Lei 4.320/64).\n• MCASP Parte II: O patrimônio público deve ser mensurado e evidenciado pelo regime de competência em sua totalidade.",
          lawArticles: [
            { article: "Lei 4.320/64, Art. 35", text: "Pertencem ao exercício financeiro: I - as receitas nele arrecadadas; II - as despesas nele legalmente empenhadas." },
            { article: "NBC TSP Estrutura Conceitual, Item 1.3", text: "A informação contábil deve permitir a avaliação da sustentabilidade dos serviços públicos e a prestação de contas (accountability)." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva a questão formulada no padrão Cebraspe para o TCE-RJ / TCU.",
          bodyText: "Julgue o item contábil com base no MCASP e no PCASP.",
          question: {
            id: 3001,
            question: "(Cebraspe - Tribunal de Contas) No âmbito do Plano de Contas Aplicado ao Setor Público (PCASP), a assinatura de um contrato de prestação de serviços de engenharia com fornecedor particular, antes de qualquer execução física ou empenho, acarreta registros contábeis exclusivamente nas contas de natureza:",
            options: {
              A: "De Controle (Classes 7 e 8).",
              B: "Patrimonial (Classes 1 e 2).",
              C: "Orçamentária (Classes 5 e 6).",
              D: "Mista (Classes 1 e 6).",
              E: "Resultado Econômico (Classes 3 e 4)."
            },
            answer: "A",
            explanation: "A assinatura do contrato representa um ato administrativo potencial que não afeta imediatamente o patrimônio nem executa o orçamento. Portanto, deve ser registrado exclusivamente nas contas de natureza de Controle (Classes 7 - Controles Devedores e 8 - Controles Credores)."
          }
        }
      ]
    }
  ],

  // ==========================================
  // CONTROLE EXTERNO & LEGISLAÇÃO DO TCE-RJ
  // ==========================================
  "Controle Externo": [
    {
      moduleNumber: 1,
      totalModules: 3,
      title: "Fiscalização Contábil, Financeira, Orçamentária e Operacional (Art. 70 e 71 CF/88)",
      bancaTrend: "Cebraspe / FGV: Julgamento de contas vs Parecer prévio do Chefe do Executivo, competência para julgar prefeitos (Tema 835 STF) e medidas cautelares.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Bases Constitucionais do Controle Externo e Jurisdição das Cortes de Contas",
          category: "Doutrina & Teoria",
          leadText: "O controle externo da Administração Pública é exercido pelo Poder Legislativo com o auxílio técnico dos Tribunais de Contas.",
          bodyText: "O art. 70 da CF/88 estabelece que a fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União e dos entes federados, quanto à legalidade, legitimidade, economicidade, aplicação das subvenções e renúncia de receitas, será exercida pelo Congresso Nacional (ou Assembleia/Câmara Municipal), mediante controle externo, e pelo sistema de controle interno de cada Poder.\n\nPrestará contas qualquer pessoa física ou jurídica, pública ou privada, que utilize, arrecade, guarde, gerencie ou administre dinheiros, bens e valores públicos ou pelos quais a Administração responda, ou que, em nome desta, assuma obrigações de natureza pecuniária (parágrafo único do art. 70).",
          deepDiveText: "Dualidade de Atuação dos Tribunais de Contas:\n1) Julgamento de Contas dos Administradores e Ordenadores de Despesa: O Tribunal de Contas profere decisão com força de título executivo judicial (Art. 71, § 3º da CF/88).\n2) Apreciação das Contas do Chefe do Poder Executivo (Presidente, Governador, Prefeito): O Tribunal emite PARECER PRÉVIO no prazo constitucional, cabendo o julgamento definitivo exclusivamente ao respectivo Poder Legislativo por quórum qualificado de 2/3."
        },
        {
          pageNumber: 2,
          pageTitle: "Quadro Comparativo: Julgamento Técnico vs Parecer Prévio",
          category: "Esquemas & Tabelas",
          leadText: "Distinção crítica cobrada reiteradamente em provas de Controle Externo.",
          bodyText: "Comparativo entre as funções decisórias e opinativas dos Tribunais de Contas:",
          tableData: {
            headers: ["Aspecto", "Contas de Governo (Chefe do Executivo)", "Contas de Gestão (Ordenadores de Despesa)", "Entes com Repasse (Convênios)"],
            rows: [
              ["Autoridade", "Presidente / Governador / Prefeito", "Secretários, Diretores, Gestores", "Particulares e ONGs conveniadas"],
              ["Ato do Tribunal", "Parecer Prévio (Opinativo)", "Acórdão de Julgamento (Decisório)", "Acórdão de Tomada de Contas Especial"],
              ["Julgamento Final", "Poder Legislativo (Congresso/ALERJ/Câmara)", "O próprio Tribunal de Contas", "O próprio Tribunal de Contas"],
              ["Quórum para Rejeição", "2/3 dos membros do Legislativo", "Maioria simples no Plenário do TC", "Maioria simples no Plenário do TC"],
              ["Eficácia Executiva", "Não é título executivo direto", "Sim, tem força de Título Executivo", "Sim, tem força de Título Executivo"]
            ]
          },
          mnemonics: [
            { code: "GOVERNO = PARECER PRÉVIO", meaning: "Chefe do Executivo recebe parecer do TC e julgamento da Casa Legislativa." },
            { code: "GESTÃO = JULGAMENTO DIRETO", meaning: "Ordenadores de despesa são julgados em definitivo pelo próprio Tribunal de Contas." },
            { code: "TÍTULO EXECUTIVO = ART. 71, § 3º", meaning: "Condenação em débito ou multa não precisa de ação de cobrança prévia na Justiça." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Teses do STF sobre Controle Externo",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A jurisprudência do STF sobre competência das Cortes de Contas é fonte obrigatória de questões.",
          bodyText: "Principais precedentes que fundamentam o gabarito das bancas:",
          practicalCases: [
            {
              title: "Tema 835 do STF: Julgamento de Prefeito Ordenador de Despesas",
              scenario: "Prefeito municipal atuou pessoalmente como ordenador de despesas pagando contrato superfaturado. O Tribunal de Contas julgou suas contas irregulares e o declarou inelegível.",
              tip: "Tese Vinculante STF: Para fins de inelegibilidade (Lei da Ficha Limpa), a competência para julgar TODAS as contas de Prefeito (sejam de governo ou de gestão) é EXCLUSIVA da Câmara Municipal. O parecer do TC é meramente opinativo."
            },
            {
              title: "Súmula Vinculante 3 do STF: Apreciação de Aposentadorias e Pensões",
              scenario: "O Tribunal de Contas recusa o registro inicial de aposentadoria de servidor público após 3 anos da concessão sem abrir contraditório.",
              tip: "VÁLIDO! Nos processos perante o TC relativos à apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão, NÃO se assegura o contraditório e ampla defesa se apreciados dentro do prazo de 5 anos (Súmula Vinculante 3 e Tema 445/STF)."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos Literais da CF/88 e Lei Complementar 63/90 (TCE-RJ)",
          category: "Lei Seca & Súmulas",
          leadText: "Artigos da Constituição Federal e da Lei Orgânica do TCE-RJ.",
          bodyText: "• Art. 71, II da CF/88: Julgar as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos.\n• Art. 71, VIII da CF/88: Aplicar aos responsáveis as sanções previstas em lei, que estabelecerá, entre outras cominações, multa proporcional ao dano causado ao erário.",
          lawArticles: [
            { article: "CF/88, Art. 71, § 3º", text: "As decisões do Tribunal de que resulte imputação de débito ou multa terão eficácia de título executivo." },
            { article: "Súmula Vinculante nº 3 STF", text: "Nos processos perante o TCU relativos à apreciação da legalidade da concessão inicial de aposentadoria, reforma e pensão, não se asseguram ampla defesa e contraditório." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva a questão comentada com base na jurisprudência do STF e CF/88.",
          bodyText: "Analise o item sobre a eficácia executiva dos acórdãos condenatórios do Tribunal de Contas.",
          question: {
            id: 3002,
            question: "(TCE-RJ / TCU - Controle Externo) As decisões condenatórias do Tribunal de Contas que imputem débito ou apliquem multa aos gestores públicos:",
            options: {
              A: "Possuem eficácia imediata de título executivo extrajudicial, prescindindo de homologação pelo Poder Judiciário.",
              B: "Necessitam de ratificação expressa da Assembleia Legislativa ou do Congresso Nacional.",
              C: "São meramente informativas e exigem ajuizamento de ação de conhecimento pelo Ministério Público.",
              D: "Dependem de trânsito em julgado perante a Justiça Federal para serem cobradas.",
              E: "Não podem alcançar entidades privadas conveniadas com o poder público."
            },
            answer: "A",
            explanation: "Conforme o art. 71, § 3º da CF/88, as decisões do Tribunal de Contas de que resulte imputação de débito ou cominação de multa possuem eficácia de título executivo (extrajudicial), cabendo ao ente público ou à Fazenda competente a sua execução direta perante o Judiciário sem necessidade de nova fase de conhecimento."
          }
        }
      ]
    }
  ],

  // ==========================================
  // DIREITO TRIBUTÁRIO
  // ==========================================
  "Direito Tributário": [
    {
      moduleNumber: 1,
      totalModules: 3,
      title: "Conceito de Tributo, Teoria Pentapartida & Limitações ao Poder de Tributar",
      bancaTrend: "FGV / Cebraspe: Art. 3º do CTN (prestação pecuniária compulsória), Teoria Pentapartida do STF e Imunidades Tributárias (Art. 150, VI CF/88).",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "Conceito Legal de Tributo e Espécies Tributárias",
          category: "Doutrina & Teoria",
          leadText: "Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada (Art. 3º do CTN).",
          bodyText: "Da definição do Art. 3º do CTN derivam os elementos nucleares da disciplina:\n1) Prestação pecuniária compulsória: O pagamento decorre da força cogente da lei, inexistindo voluntariedade.\n2) Não constitui sanção de ato ilícito: Tributo NÃO é multa! A multa sanciona a ilicitude; o tributo decorre de fato lícito.\n3) Princípio do Não-Confisco (Art. 150, IV da CF/88): É vedado utilizar tributo com efeito de confisco.\n4) Cobrada mediante atividade plenamente vinculada: A autoridade fiscal não possui discricionariedade na cobrança.\n\nTeoria Pentapartida (STF): O Supremo Tribunal Federal consolidou que existem 5 espécies tributárias autônomas no Brasil:\n1. Impostos (não vinculados a atuação estatal direta);\n2. Taxas (vinculadas ao exercício do poder de polícia ou serviço público específico e divisível);\n3. Contribuições de Melhoria (decorrentes de valorização imobiliária por obra pública);\n4. Empréstimos Compulsórios (calamidade pública, guerra externa ou investimento urgente de relevante interesse nacional);\n5. Contribuições Especiais (sociais, de intervenção no domínio econômico e de interesse das categorias profissionais).",
          deepDiveText: "Princípio do Pecunia Non Olet ('o dinheiro não tem cheiro'): A tributação incide sobre os rendimentos auferidos, independentemente da licitude civil ou penal da atividade subjacente (Art. 118 do CTN). Portanto, o lucro de jogo clandestino ou atividade ilícita é tributável pelo Imposto de Renda, sem que isso confunda tributo com sanção."
        },
        {
          pageNumber: 2,
          pageTitle: "Quadro Comparativo das 5 Espécies Tributárias",
          category: "Esquemas & Tabelas",
          leadText: "Estrutura esquemática da Teoria Pentapartida consagrada pelo STF.",
          bodyText: "Diferenciação dos tributos quanto ao fato gerador e vinculação da receita:",
          tableData: {
            headers: ["Espécie Tributária", "Fato Gerador Vinculado?", "Receita Vinculada?", "Instrumento de Instituição", "Competência"],
            rows: [
              ["Impostos", "Não (Capacidade Contributiva)", "Em regra Não (Art. 167, IV)", "Lei Ordinária", "União, Estados, DF e Municípios"],
              ["Taxas", "Sim (Poder de Polícia / Serviço)", "Sim (Custeio da atividade)", "Lei Ordinária", "Competência Comum"],
              ["Contribuições de Melhoria", "Sim (Valorização Imobiliária)", "Sim (Limite do custo da obra)", "Lei Ordinária", "Competência Comum"],
              ["Empréstimos Compulsórios", "Não (Situações Extraordinárias)", "Sim (Despesa que fundamentou)", "Lei Complementar", "Exclusiva da União"],
              ["Contribuições Especiais", "Variado (Finalidade Específica)", "Sim (Destinação constitucional)", "Lei Ordinária / Complementar", "Em regra União (exceção RPPS)"]
            ]
          },
          mnemonics: [
            { code: "TRIBUTO NÃO É SANÇÃO", meaning: "Diferença basilar: multa pune ilícito; tributo incide sobre fato gerador lícito." },
            { code: "TAXA EXIGE ESPECIFICIDADE & DIVISIBILIDADE", meaning: "Serviço público 'uti singuli' (mensurável por usuário). Segurança e iluminação pública não podem ser cobradas por taxa." },
            { code: "EMPRÉSTIMO COMPULSÓRIO = LEI COMPLEMENTAR", meaning: "Privativo da União e exigência obrigatória de LC." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Súmulas Vinculantes em Tributário",
          category: "Casos Práticos & Pegadinhas",
          leadText: "A FGV e o Cebraspe cobram a distinção estrita entre Taxa e Tarifa (Preço Público) e as Imunidades.",
          bodyText: "Precedentes pacificadores do STF:",
          practicalCases: [
            {
              title: "Súmula Vinculante 41 STF: Serviço de Iluminação Pública",
              scenario: "Município institui taxa municipal para custear o serviço de iluminação pública das avenidas da cidade.",
              tip: "INCONSTITUCIONAL! O serviço de iluminação pública não pode ser remunerado mediante TAXA porque é serviço indivisível ('uti universi'). A cobrança só é válida sob a forma de Contribuição de Iluminação Pública (COSIP - Art. 149-A da CF/88)."
            },
            {
              title: "Súmula Vinculante 57 STF: Imunidade Tributária de Livros Eletrônicos (E-books)",
              scenario: "Fiscalização autua empresa que comercializa livros digitais (e-readers e e-books) cobrando impostos estaduais/municipais.",
              tip: "INDEVIDO! A imunidade tributária constante do art. 150, VI, 'd', da CF/88 (imunidade de imprensa) APLICA-SE aos livros eletrônicos (e-books) e aos suportes físicos exclusivamente utilizados para fixá-los (como e-readers dedicados)."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos Literais do CTN e CF/88",
          category: "Lei Seca & Súmulas",
          leadText: "Artigos obrigatórios para qualquer concurso fiscal e de controle.",
          bodyText: "• Art. 3º do CTN: Definição formal de tributo.\n• Art. 150, VI da CF/88: Imunidades tributárias (recíproca, templos, partidos/sindicatos/educação e livros/jornais).",
          lawArticles: [
            { article: "CTN, Art. 3º", text: "Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada." },
            { article: "CTN, Art. 118, I", text: "A definição legal do fato gerador é interpretada abstraindo-se da validade jurídica dos atos efetivamente praticados pelos contribuintes (Princípio do Pecunia Non Olet)." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva a questão modelo FGV para concursos fiscais (ISS Niterói / ATRFB).",
          bodyText: "Identifique a assertiva em consonância com a Teoria Geral do Direito Tributário.",
          question: {
            id: 3003,
            question: "(FGV - Auditor Fiscal) No tocante à definição de tributo e às limitações constitucionais ao poder de tributar, assinale a opção correta:",
            options: {
              A: "O princípio da anterioridade nonagesimal (noventena) aplica-se a todas as espécies tributárias sem qualquer exceção na Constituição.",
              B: "A capacidade tributária passiva depende da capacidade civil das pessoas naturais.",
              C: "A imunidade recíproca impede a instituição de impostos sobre patrimônio, renda ou serviços entre os entes federados (União, Estados, DF e Municípios).",
              D: "Os empréstimos compulsórios podem ser instituídos por medida provisória em casos de relevância e urgência.",
              E: "A taxa pode ter base de cálculo própria e idêntica à de qualquer imposto."
            },
            answer: "C",
            explanation: "A alternativa C está correta com base no art. 150, VI, 'a' da CF/88 (Imunidade Recíproca). As demais estão incorretas: A (há exceções expressas à anterioridade nonagesimal, como II, IE, IOF, IPI na anual); B (art. 126 do CTN prevê que a capacidade tributária independe da capacidade civil); D (exige Lei Complementar, vedada MP); E (art. 145, § 2º veda taxa com base de cálculo própria de impostos)."
          }
        }
      ]
    }
  ],

  // ==========================================
  // ADMINISTRAÇÃO FINANCEIRA E ORÇAMENTÁRIA (AFO)
  // ==========================================
  "Administração Financeira e Orçamentária": [
    {
      moduleNumber: 1,
      totalModules: 3,
      title: "Instrumentos de Planejamento (PPA, LDO, LOA) & Princípios Orçamentários",
      bancaTrend: "FGV / Cebraspe: Distinção entre o papel da LDO (anexo de metas e riscos fiscais) e da LOA, e os princípios da Exclusividade, Universalidade e Não-Afetação.",
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: "O Sistema Tripartite de Orçamento Público (PPA, LDO e LOA)",
          category: "Doutrina & Teoria",
          leadText: "O planejamento orçamentário no Brasil é estruturado em três leis ordinárias de iniciativa privativa do Poder Executivo (Art. 165 da CF/88).",
          bodyText: "1) Plano Plurianual (PPA): Estabelece de forma regionalizada as diretrizes, objetivos e metas da administração pública para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada. Possui vigência de 4 anos, iniciando no segundo ano de mandato do governante e terminando no primeiro ano do mandato subsequente.\n\n2) Lei de Diretrizes Orçamentárias (LDO): Estabelece as metas e prioridades da administração pública, orienta a elaboração da LOA, dispõe sobre alterações na legislação tributária e estabelece a política de aplicação das agências financeiras oficiais de fomento. Pela LRF (Lei Complementar 101/2000), a LDO deve conter obrigatoriamente o Anexo de Metas Fiscais e o Anexo de Riscos Fiscais.\n\n3) Lei Orçamentária Anual (LOA): Compreende o Orçamento Fiscal, o Orçamento de Investimento das estatais não dependentes e o Orçamento da Seguridade Social (Orçamento Tripartido).",
          deepDiveText: "Princípios Orçamentários Clássicos e Contemporâneos:\n• Princípio da Universalidade: O orçamento deve conter TODAS as receitas e TODAS as despesas de todos os poderes e órgãos (Art. 2º da Lei 4.320/64).\n• Princípio da Exclusividade: A LOA não conterá dispositivo estranho à previsão da receita e à fixação da despesa (não pode ter 'caudas orçamentárias'), ressalvadas a autorização para abertura de créditos suplementares e a contratação de operações de crédito (Art. 165, § 8º da CF/88).\n• Princípio da Não-Afetação da Receita de Impostos: É vedada a vinculação de receita de impostos a órgão, fundo ou despesa, ressalvadas as exceções expressas do Art. 167, IV (saúde, educação, administração tributária e garantias)."
        },
        {
          pageNumber: 2,
          pageTitle: "Quadro Comparativo: PPA vs LDO vs LOA",
          category: "Esquemas & Tabelas",
          leadText: "Quadro mnemônico dos três diplomas de planejamento orçamentário.",
          bodyText: "Síntese dos prazos, conteúdos e finalidades de cada diploma legal:",
          tableData: {
            headers: ["Instrumento", "Vigência", "Função Primária", "Conteúdo Obrigatório LRF", "Iniciativa"],
            rows: [
              ["PPA", "4 anos (médio prazo)", "Diretrizes, Objetivos e Metas (DOM)", "Despesas de capital e programas continuados", "Privativa do Executivo"],
              ["LDO", "1 ano (ponte PPA-LOA)", "Metas e prioridades anuais", "Anexo de Metas e Anexo de Riscos Fiscais", "Privativa do Executivo"],
              ["LOA", "1 ano (exercício financeiro)", "Estimar receita e fixar despesa", "Orçamento Fiscal, Investimento e Seguridade", "Privativa do Executivo"]
            ]
          },
          mnemonics: [
            { code: "PPA = DOM", meaning: "Diretrizes, Objetivos e Metas para despesas de capital e duração continuada." },
            { code: "LDO = ELO & RISCOS", meaning: "Liga o PPA à LOA e traz o Anexo de Riscos Fiscais e Metas Fiscais." },
            { code: "LOA = FIS", meaning: "Fiscal, Investimento das estatais e Seguridade Social." }
          ]
        },
        {
          pageNumber: 3,
          pageTitle: "Casos Práticos & Pegadinhas da FGV / Cebraspe em AFO",
          category: "Casos Práticos & Pegadinhas",
          leadText: "As bancas cobram as exceções ao Princípio da Exclusividade e as hipóteses de Créditos Adicionais.",
          bodyText: "Análise de itens práticos de prova:",
          practicalCases: [
            {
              title: "Pegadinha de Ouro: Exceções à Exclusividade na LOA",
              scenario: "A LOA inclui artigo autorizando o Poder Executivo a alterar o Código Tributário e conceder reajuste geral de servidores.",
              tip: "INCONSTITUCIONAL! Viola o Princípio da Exclusividade. As ÚNICAS DUAS exceções que a LOA pode conter fora de previsão de receita e fixação de despesa são: 1) Autorização para créditos suplementares; 2) Autorização para operações de crédito (ainda que por antecipação de receita)."
            },
            {
              title: "Pegadinha: Diferença entre Créditos Especiais e Extraordinários",
              scenario: "O governo decreta crédito especial por medida provisória para atender a despesas imprevistas e urgentes decorrentes de calamidade pública.",
              tip: "ERRADO! O crédito para calamidade pública, guerra ou comoção interna é o CRÉDITO EXTRAORDINÁRIO (aberto por Medida Provisória/Decreto). O Crédito Especial destina-se a programas novos sem dotação orçamentária prévia e depende de Lei prévia."
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: "Dispositivos Literais da CF/88 e LRF (LC 101/2000)",
          category: "Lei Seca & Súmulas",
          leadText: "Normas fundamentais de Direito Financeiro e Responsabilidade Fiscal.",
          bodyText: "• Art. 165 da CF/88: Sistema orçamentário brasileiro.\n• Art. 4º da LRF: O Anexo de Riscos Fiscais onde serão avaliados os passivos contingentes e outros riscos capazes de afetar as contas públicas.",
          lawArticles: [
            { article: "CF/88, Art. 165, § 8º", text: "A lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa, não se incluindo na proibição a autorização para abertura de créditos suplementares e contratação de operações de crédito." },
            { article: "LRF, Art. 4º, § 3º", text: "A lei de diretrizes orçamentárias conterá Anexo de Riscos Fiscais, onde serão avaliados os passivos contingentes e outros riscos capazes de afetar as contas públicas." }
          ]
        },
        {
          pageNumber: 5,
          pageTitle: "Treino de Fixação & Gabarito Comentado",
          category: "Fixação & Questões",
          leadText: "Resolva a questão no modelo Cebraspe / FGV para o TCU / TCE-RJ.",
          bodyText: "Julgue o item sobre técnicas e princípios orçamentários.",
          question: {
            id: 3004,
            question: "(FGV / Cebraspe - Tribunal de Contas) A respeito dos princípios orçamentários e dos instrumentos de planejamento governamental, assinale a opção correta:",
            options: {
              A: "O princípio da não-afetação proíbe terminantemente qualquer tipo de vinculação da receita de taxas e contribuições de melhoria.",
              B: "O Anexo de Riscos Fiscais, que avalia os passivos contingentes capazes de afetar o equilíbrio financeiro do ente, integra formalmente a Lei Orçamentária Anual (LOA).",
              C: "A vigência do Plano Plurianual (PPA) coincide exatamente com os quatro anos do mandato do Presidente da República.",
              D: "O princípio da universalidade preceitua que todas as receitas e despesas orçamentárias devem estar incluídas na lei orçamentária anual.",
              E: "Créditos extraordinários destinam-se a reforço de dotações orçamentárias já existentes na LOA."
            },
            answer: "D",
            explanation: "A alternativa D está correta (Art. 2º da Lei 4.320/64 - Princípio da Universalidade). Erros das demais: A (não-afetação aplica-se apenas a IMPOSTOS, art. 167, IV); B (o Anexo de Riscos integra a LDO, não a LOA); C (o PPA vigora do 2º ano do mandato até o 1º ano do mandato seguinte); E (créditos suplementares são os destinados a reforço de dotação)."
          }
        }
      ]
    }
  ]
};

// Helper universal para obter todos os módulos de uma disciplina
export function getModulesForSubject(subjectName: string): DisciplineModule[] {
  // 1. Match direto
  if (DISCIPLINE_MODULES_DB[subjectName]) {
    return DISCIPLINE_MODULES_DB[subjectName];
  }

  // 2. Match parcial
  const normalized = subjectName.toLowerCase();
  for (const [key, modules] of Object.entries(DISCIPLINE_MODULES_DB)) {
    if (normalized.includes(key.toLowerCase()) || key.toLowerCase().includes(normalized)) {
      return modules;
    }
  }

  // 3. Gerador dinâmico de 5 módulos aprofundados com 5 páginas distintas para qualquer matéria
  const lesson = getLessonContent(subjectName);
  const total = 5;
  const generated: DisciplineModule[] = [];

  const moduleConfigs = [
    {
      mNum: 1,
      title: `${lesson.topic} • Fundamentos, Princípios Dogmáticos & Conceitos Iniciais`,
      p1Title: `Fundamentos & Conceituação Primária de ${subjectName}`,
      p1Lead: `Bases doutrinárias e premissas introdutórias indispensáveis para compreensão da disciplina.`,
      p1Body: lesson.section1Body,
      p1Deep: lesson.deepDiveText || `A compreensão dos princípios reitores da matéria de ${subjectName} constitui a base de sustentação para a resolução dos itens mais complexos formulados pelas bancas examinadoras.`,
      table: {
        headers: ["Conceito / Princípio", "Definição Doutrinária", "Aplicação Prática", "Incidência em Prova"],
        rows: [
          ["Regra Primária", `Estrutura basilar aplicável a ${subjectName}`, "Incide na maioria dos casos práticos", "Alta (>80%)"],
          ["Exceção Normativa", "Hipótese de afastamento da regra geral", "Exige previsão legal expressa", "Média (Pegadinha)"],
          ["Princípio Reitor", "Norma fundamental orientadora da hermenêutica", "Resolve conflito aparente de regras", "Constante"]
        ]
      },
      mnemonics: lesson.mnemonics || [{ code: "BASE & CONCEITO", meaning: "Domine a definição literal antes de avançar para exceções." }],
      caseTitle: `Caso Prático 01 • Aplicação da Regra Geral em ${subjectName}`,
      caseScenario: `O candidato depara-se com enunciado que questiona se a regra geral de ${subjectName} admite interpretação extensiva pelo administrador.`,
      caseTip: `Dica de Ouro: Verifique se a norma é taxativa (numerus clausus) ou exemplificativa (numerus apertus).`,
      lawArt: lesson.lawArticles?.[0] || { article: "Norma Fundamental", text: `Dispositivo reitor aplicável à matéria de ${subjectName}.` },
      question: lesson.question
    },
    {
      mNum: 2,
      title: `Estrutura Normativa, Procedimentos Centrais & Classificações Dogmáticas`,
      p1Title: `Classificações Dogmáticas & Procedimentos Especiais de ${subjectName}`,
      p1Lead: `Categorização sistemática dos institutos e suas repercussões nos atos administrativos e práticos.`,
      p1Body: `O estudo analítico de ${subjectName} requer a memorização das classificações formuladas pela doutrina majoritária e consagradas pelas bancas examinadoras.\n\nIdentifique os critérios distintivos entre as espécies de atos, procedimentos vinculados e discricionários, e as formalidades essenciais que condicionam a validade de cada operação.`,
      p1Deep: `A doutrina costuma divergir em pontos periféricos, contudo as bancas examinadoras adotam majoritariamente as posições consolidadas nos manuais clássicos e nos precedentes sumulados dos tribunais superiores.`,
      table: {
        headers: ["Espécie / Categoria", "Critério de Distinção", "Formalidade Essencial", "Repercussão Prática"],
        rows: [
          ["Categoria Vinculada", "Sem margem de escolha pelo agente", "Motivação obrigatória estrita", "Nulidade absoluta se descumprida"],
          ["Categoria Discricionária", "Margem de conveniência e oportunidade", "Dentro dos limites legais", "Controle judicial de legalidade"],
          ["Procedimento Especial", "Rito sumário ou diferenciado", "Previsão expressa em edital/lei", "Prevalece sobre o rito comum"]
        ]
      },
      mnemonics: [
        { code: "VINCULADO = SEM ESCOLHA", meaning: "A lei determina exatamente como o ato deve ser praticado." },
        { code: "DISCRICIONÁRIO = DENTRO DA LEI", meaning: "Margem de liberdade delimitada pelo texto legal e princípios." }
      ],
      caseTitle: `Caso Prático 02 • Desvio de Finalidade vs Excesso de Poder`,
      caseScenario: `Autoridade competente pratica ato com motivação diversa daquela declarada oficialmente no processo administrativo.`,
      caseTip: `Dica da Banca: A divergência entre o motivo real e o motivo alegado contamina o ato com vício de motivo ou finalidade, gerando nulidade ex tunc.`,
      lawArt: { article: "Regramento Específico", text: `Os atos praticados com vício de competência ou desvio de finalidade são nulos de pleno direito.` },
      question: {
        id: 4002,
        question: `No que tange às formalidades essenciais e à validade dos atos na disciplina de ${subjectName}, assinale a opção correta:`,
        options: {
          A: "A ausência de motivação em ato para o qual a lei exige justificativa formal enseja a sua nulidade.",
          B: "Os atos discricionários estão totalmente imunes ao controle de legalidade pelo Poder Judiciário.",
          C: "A competência legal pode ser delegada integralmente a particular sem previsão normativa.",
          D: "A forma prescrita em lei pode ser dispensada pela autoridade a seu exclusivo critério.",
          E: "Não cabe anulação de ato que contenha vício insanável de finalidade."
        },
        answer: "A",
        explanation: "A motivação é elemento integrativo de validade dos atos vinculados e daqueles que restrinjam direitos, ensejando nulidade do ato em caso de omissão ou falsidade do motivo alegado."
      }
    },
    {
      mNum: 3,
      title: `Tópicos Avançados, Hipóteses de Exceção & Controvérsias da Banca`,
      p1Title: `Hipóteses de Exceção & Pontos Críticos em ${subjectName}`,
      p1Lead: `Exame minucioso dos detalhes e exceções que constituem o núcleo dos itens eliminatórios.`,
      p1Body: `Nos concursos de alto rendimento, o diferencial dos primeiros colocados reside no domínio das exceções às regras gerais e nos casos limítrofes.\n\nEm ${subjectName}, as exceções mais cobradas envolvem prazos decadenciais/prescrecionais diferenciados, regras de competência exclusiva indelegáveis e ressalvas expressas a princípios constitucionais.`,
      p1Deep: `Atenção especial às vedações expressas em diplomas legais recentes e alterações legislativas introduzidas nos últimos 24 meses, que possuem altíssima taxa de conversão em questões inéditas de prova.`,
      table: {
        headers: ["Ponto Crítico", "Regra Geral", "Exceção Cobrada pela Banca", "Fundamentação"],
        rows: [
          ["Prazos de Recurso", "Prazo comum legal", "Prazo diferenciado para entes públicos", "Norma processual específica"],
          ["Delegação de Atos", "Permitida em regra", "Indelegável: atos normativos e recursos", "Vedação legal expressa"],
          ["Controle de Legalidade", "Não se convalida ato nulo", "Convalidação de atos com vícios sanáveis", "Princípio da Segurança Jurídica"]
        ]
      },
      mnemonics: [
        { code: "NÃO DELEGA = CE-NO-RA", meaning: "Competência Exclusiva, atos Normativos e decisão de Recursos Administrativos." },
        { code: "CONVALIDAÇÃO = FO-CO", meaning: "Apenas vícios sanáveis de FORMA e COMPETÊNCIA (não exclusiva) admitem convalidação." }
      ],
      caseTitle: `Caso Prático 03 • Pegadinha de Competência Indelegável`,
      caseScenario: `Dirigente de autarquia delega a servidor subordinado a competência para julgar recurso administrativo hierárquico.`,
      caseTip: `Pegadinha Clássica: A decisão de recursos administrativos é INDELEGÁVEL por expressa disposição legal. O ato praticado pelo delegado é nulo por vício de competência.`,
      lawArt: { article: "Regra de Indelegabilidade", text: "Não podem ser objeto de delegação: a edição de atos de caráter normativo; a decisão de recursos administrativos; as matérias de competência exclusiva." },
      question: {
        id: 4003,
        question: `Em relação às matérias que NÃO admitem delegação de competência administrativa no ordenamento jurídico, assinale a opção correta:`,
        options: {
          A: "A decisão de recursos administrativos e a edição de atos normativos são indelegáveis.",
          B: "Qualquer ato de gestão orçamentária pode ser livremente delegado a terceiro privado.",
          C: "A homologação de licitações é privativa do Presidente da República.",
          D: "A delegação de competência implica renúncia permanente à titularidade originária do poder.",
          E: "Não é permitida a revogação do ato de delegação pela autoridade delegante."
        },
        answer: "A",
        explanation: "São indelegáveis: 1) A edição de atos de caráter normativo; 2) A decisão de recursos administrativos; 3) As matérias de competência exclusiva do órgão ou autoridade."
      }
    },
    {
      mNum: 4,
      title: `Jurisprudência Atualizada dos Tribunais Superiores & Súmulas Vinculantes`,
      p1Title: `Jurisprudência Dominante do STF/STJ & Súmulas Aplicáveis a ${subjectName}`,
      p1Lead: `Precedentes de observância obrigatória e teses de repercussão geral mais exigidas.`,
      p1Body: `As bancas modernas como FGV, Cebraspe e Cesgranrio exigem não apenas a lei seca, mas a interpretação dada pelos tribunais superiores (STF, STJ e Tribunais de Contas).\n\nNeste módulo, analisamos as teses firmadas em sede de repercussão geral, súmulas vinculantes e informativos recentes que impactam a matéria de ${subjectName}.`,
      p1Deep: `A jurisprudência sumulada tem força pacificadora nas provas. Quando a banca formula uma assertiva com a expressão 'conforme jurisprudência pacificada do STF', a resposta correta reproduz fielmente a tese sumulada.`,
      table: {
        headers: ["Enunciado / Súmula", "Tribunal", "Tese Consolidada", "Implicação para a Prova"],
        rows: [
          ["Súmula Vinculante", "STF", "Efeito vinculante para toda a Administração", "A banca considera item correto a literalidade da tese"],
          ["Tema de Repercussão Geral", "STF", "Fixa tese jurídica obrigatória", "Muda o entendimento de leis anteriores"],
          ["Súmula Dominante", "STJ", "Uniformiza interpretação da lei federal", "Cobrada nas questões dissertativas e objetivas"]
        ]
      },
      mnemonics: [
        { code: "SÚMULA VINCULANTE = VINCULA TODOS", meaning: "Obriga os órgãos do Poder Judiciário e a Administração Pública direta e indireta." },
        { code: "LEI VS SÚMULA", meaning: "Se houver conflito, o entendimento firmado pelo STF em repercussão geral prevalece." }
      ],
      caseTitle: `Caso Prático 04 • Aplicação de Precedente Vinculante`,
      caseScenario: `Órgão público recusa-se a cumprir tese firmada pelo STF em repercussão geral alegando que a lei ordinária ainda não foi formalmente alterada.`,
      caseTip: `Dica de Ouro: A decisão do STF em controle concentrado ou repercussão geral produz eficácia contra todos (erga omnes) e efeito vinculante imediato para a Administração.`,
      lawArt: { article: "CF/88, Art. 103-A", text: "O STF poderá, de ofício ou por provocação, mediante decisão de 2/3 dos seus membros, aprovar súmula que terá efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta." },
      question: {
        id: 4004,
        question: `Quanto aos efeitos e à obrigatoriedade das súmulas vinculantes editadas pelo Supremo Tribunal Federal, assinale a afirmativa correta:`,
        options: {
          A: "A súmula vinculante obriga todos os órgãos do Poder Judiciário e a administração pública direta e indireta nas esferas federal, estadual e municipal.",
          B: "As súmulas vinculantes possuem eficácia meramente persuasiva perante o Poder Executivo.",
          C: "O Governador de Estado não está vinculado ao teor de súmula vinculante aprovada pelo STF.",
          D: "O quórum para aprovação de súmula vinculante é de maioria simples dos ministros do STF.",
          E: "Não cabe reclamação constitucional ao STF contra ato que descumpra súmula vinculante."
        },
        answer: "A",
        explanation: "Conforme o art. 103-A da CF/88, a súmula vinculante tem eficácia imediata e vincula todos os órgãos do Poder Judiciário e a administração pública direta e indireta nas esferas federal, estadual e municipal."
      }
    },
    {
      mNum: 5,
      title: `Revisão Reta Final, Síntese Estratégica & Fixação Extrema`,
      p1Title: `Síntese de Reta Final & Mapeamento de Pontos Críticos em ${subjectName}`,
      p1Lead: `Consolidação dos tópicos de maior taxa de acerto e eliminação de dúvidas residuais.`,
      p1Body: `Na fase de reta final, o estudo deve priorizar a revisão ativa, a recapitulação de mnemônicos e o treino intensivo de questões comentadas.\n\nRevise a matriz de conceitos fundamentais de ${subjectName}, repasse os quadros comparativos e resolva a bateria de questões de fixação para sedimentar o conhecimento na memória de longo prazo.`,
      p1Deep: `A técnica de repetição espaçada combinada com a resolução de itens simulados é o método com maior comprovação empírica de elevação da nota de corte nos certames públicos de alta concorrência.`,
      table: {
        headers: ["Tópico Central", "Regra de Ouro", "Pegadinha Frequente", "Gatilho de Memória"],
        rows: [
          ["Conceito e Princípios", "Interpretação sistemática", "Inversão de regra por exceção", "Foco no comando do item"],
          ["Procedimentos e Atos", "Observância estrita da forma", "Delegação indevida", "COFIFOMOB"],
          ["Precedentes e Súmulas", "Eficácia vinculante", "Jurisprudência superada", "Teses fixadas pelo STF"]
        ]
      },
      mnemonics: [
        { code: "LEITURA + REVISÃO + QUESTÕES", meaning: "O tripé da aprovação em concursos públicos de alto rendimento." }
      ],
      caseTitle: `Caso Prático 05 • Diagnóstico Rápido de Questão de Prova`,
      caseScenario: `Candidato depara-se com assertiva extensa e complexa com termos absolutos ('nunca', 'sempre', 'em qualquer hipótese').`,
      caseTip: `Gatilho de Prova: Termos generalizantes e absolutos possuem probabilidade superior a 85% de tornarem a assertiva INCORRETA nas provas da FGV e Cebraspe.`,
      lawArt: { article: "Diretriz de Revisão", text: "A consistência diária nos blocos de estudo é o fator determinante para a retenção do conteúdo programático do edital." },
      question: {
        id: 4005,
        question: `Durante a resolução de prova de concurso para o cargo pretendido, o candidato deve adotar qual das seguintes posturas metodológicas:`,
        options: {
          A: "Priorizar a análise atenta ao comando da questão e à literalidade dos dispositivos constitucionais e legais aplicáveis.",
          B: "Assinalar a alternativa com base em intuição pessoal sem leitura atenta do enunciado.",
          C: "Ignorar as exceções expressas na norma por considerá-las irrelevantes.",
          D: "Desconsiderar o posicionamento sumulado da banca examinadora.",
          E: "Deixar de revisar as questões antes de assinalar o cartão de respostas."
        },
        answer: "A",
        explanation: "A leitura atenta do comando e o confronto com a literalidade dos dispositivos normativos e precedentes pacificadores constituem a melhor prática para obtenção de alto índice de acertos."
      }
    }
  ];

  for (const cfg of moduleConfigs) {
    generated.push({
      moduleNumber: cfg.mNum,
      totalModules: total,
      title: cfg.title,
      bancaTrend: lesson.jurisprudenceNote,
      totalPages: 5,
      pages: [
        {
          pageNumber: 1,
          pageTitle: cfg.p1Title,
          category: 'Doutrina & Teoria',
          leadText: cfg.p1Lead,
          bodyText: cfg.p1Body,
          deepDiveText: cfg.p1Deep
        },
        {
          pageNumber: 2,
          pageTitle: `Esquemas Estruturais & Quadro Sinótico (Módulo 0${cfg.mNum})`,
          category: 'Esquemas & Tabelas',
          leadText: `Síntese visual dos critérios e mnemônicos de rápida retenção para ${subjectName}.`,
          bodyText: `Utilize o quadro comparativo estruturado para fixar as distinções cobradas pela banca examinadora.`,
          tableData: cfg.table,
          mnemonics: cfg.mnemonics
        },
        {
          pageNumber: 3,
          pageTitle: `Casos Concretos & Análise de Armadilhas da Banca (Módulo 0${cfg.mNum})`,
          category: 'Casos Práticos & Pegadinhas',
          leadText: `Como os examinadores formulam as questões e onde os candidatos mais erram.`,
          bodyText: `Analise o caso prático abaixo com base nos padrões recorrentes de formulação de enunciados.`,
          practicalCases: [
            {
              title: cfg.caseTitle,
              scenario: cfg.caseScenario,
              tip: cfg.caseTip
            }
          ]
        },
        {
          pageNumber: 4,
          pageTitle: `Dispositivos Literais & Súmulas Obrigatórias (Módulo 0${cfg.mNum})`,
          category: 'Lei Seca & Súmulas',
          leadText: `Artigos de ouro e jurisprudência vinculante para a matéria de ${subjectName}.`,
          bodyText: `A literalidade da norma jurídica e o entendimento pacificado dos tribunais.`,
          lawArticles: [cfg.lawArt]
        },
        {
          pageNumber: 5,
          pageTitle: `Treino de Fixação & Gabarito Comentado (Módulo 0${cfg.mNum})`,
          category: 'Fixação & Questões',
          leadText: `Item comentado no padrão da banca para testar a assimilação deste módulo.`,
          bodyText: `Resolva a questão e leia atentamente a justificativa do gabarito.`,
          question: cfg.question
        }
      ]
    });
  }

  return generated;
}

// Helper para obter página específica de um módulo
export function getModulePage(subjectName: string, moduleNumber: number, pageNumber: number): ModulePage {
  const modules = getModulesForSubject(subjectName);
  const targetModule = modules.find(m => m.moduleNumber === moduleNumber) || modules[0];
  const targetPage = targetModule.pages.find(p => p.pageNumber === pageNumber) || targetModule.pages[0];
  return targetPage;
}

// Helper para obter bateria completa de questões de fixação do módulo (5 a 10 questões)
export function getModuleQuestionBatch(subjectName: string, moduleNumber: number): ModuleQuestion[] {
  const modules = getModulesForSubject(subjectName);
  const targetModule = modules.find(m => m.moduleNumber === moduleNumber) || modules[0];
  const lesson = getLessonContent(subjectName);

  const baseQuestions: ModuleQuestion[] = [];

  // Questão 1: Ponto focal do módulo
  if (targetModule.pages[4]?.question) {
    const q = targetModule.pages[4].question;
    baseQuestions.push({
      id: q.id,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
      topic: targetModule.title,
      banca: 'FGV / Cebraspe'
    });
  } else {
    baseQuestions.push({
      id: (moduleNumber * 100) + 1,
      question: lesson.question.question,
      options: lesson.question.options,
      answer: lesson.question.answer,
      explanation: lesson.question.explanation,
      topic: targetModule.title,
      banca: 'FGV / Cebraspe'
    });
  }

  // Questão 2: Doutrina & Fundamentos Dogmáticos
  baseQuestions.push({
    id: (moduleNumber * 100) + 2,
    question: `(Gabarito.AI / Fixação Doutrinária) No que tange aos aspectos dogmáticos e regras gerais de "${targetModule.title}", assinale a alternativa juridicamente/tecnicamente escorreita:`,
    options: {
      A: "A regra geral exige observância estrita dos princípios informadores, admitindo flexibilização apenas mediante expressa previsão legal ou constitucional.",
      B: "É vedada a aplicação de princípios gerais de direito público sob qualquer pretexto.",
      C: "Os entendimentos administrativos unilaterais prevalecem sobre os precedentes qualificados dos Tribunais Superiores.",
      D: "A mera discricionariedade do agente público afasta o controle de legitimidade e economicidade.",
      E: "A literalidade da norma afasta qualquer ponderação de proporcionalidade ou razoabilidade."
    },
    answer: "A",
    explanation: "Correta a alternativa A. No âmbito dos certames de alto nível, os princípios estruturantes vinculam toda a atividade administrativa, sendo que qualquer exceção demanda previsão legal expressa.",
    topic: targetModule.title,
    banca: 'FGV / Cebraspe'
  });

  // Questão 3: Análise de Pegadinhas & Casos Práticos
  baseQuestions.push({
    id: (moduleNumber * 100) + 3,
    question: `(Banca Examinadora / Caso Prático) Em situação hipotética envolvendo controvérsia sobre "${targetModule.title}", o candidato deve assinalar a diretriz prevalente:`,
    options: {
      A: "O entendimento sumulado pelos Tribunais Superiores e a literalidade dos preceitos do edital orientam a resposta técnica esperada.",
      B: "Não há responsabilidade civil ou funcional do gestor público quando houver parecer jurídico favorável.",
      C: "A prescrição da pretensão punitiva não se aplica às decisões administrativas de controle.",
      D: "O contraditório e a ampla defesa são dispensáveis na fase instrutória dos processos de fiscalização.",
      E: "A retroatividade de norma mais gravosa é admitida em favor do erário."
    },
    answer: "A",
    explanation: "Correta a letra A. A jurisprudência consolidada dos Tribunais Superiores (STF/STJ) orienta as questões de ponta das bancas examinadoras contemporâneas.",
    topic: targetModule.title,
    banca: 'FGV / Cebraspe'
  });

  // Questão 4: Dispositivos Normativos & Prazos
  baseQuestions.push({
    id: (moduleNumber * 100) + 4,
    question: `(Letra da Lei & Normativos) Acerca dos prazos e requisitos legais aplicáveis a "${targetModule.title}", assinale a opção correta:`,
    options: {
      A: "Os prazos decadenciais e prescricionais previstos na legislação de regência possuem natureza cogente e visam conferir estabilidade às relações jurídicas.",
      B: "A Administração Pública pode anular seus próprios atos a qualquer tempo, mesmo após o decurso do prazo quinquenal, independentemente de má-fé.",
      C: "A decadência pode ser suspensa ou interrompida reiteradas vezes pela simples via recursal administrativa.",
      D: "A motivação dos atos administrativos vinculados é expressamente facultativa.",
      E: "A delegação de competência engloba a edição de atos de caráter normativo geral."
    },
    answer: "A",
    explanation: "Correta a alternativa A. Os prazos no regime jurídico de direito público são taxativos e a decadência busca resguardar o princípio da segurança jurídica e da confiança legítima.",
    topic: targetModule.title,
    banca: 'FGV / Cebraspe'
  });

  // Questão 5: Desafio Reta Final & Fixação Extrema
  baseQuestions.push({
    id: (moduleNumber * 100) + 5,
    question: `(Reta Final & Desafio de Fixação) Sobre as distinções dogmáticas pertinentes a "${targetModule.title}", assinale o item escorreito:`,
    options: {
      A: "A corrente ampliativa e majoritária privilegia a máxima efetividade dos preceitos constitucionais e a conformidade da gestão orçamentária e financeira.",
      B: "Todo ato administrativo nulo gera direitos adquiridos perpétuos se houver lapso temporal superior a 1 ano.",
      C: "A competência tributária e a capacidade tributária ativa são termos rigorosamente sinônimos e indelegáveis.",
      D: "O controle externo não alcança a conformidade contábil e orçamentária dos órgãos autônomos.",
      E: "A responsabilidade fiscal permite o aumento indefinido de despesas correntes se houver superávit transitório."
    },
    answer: "A",
    explanation: "Correta a letra A. O princípio da máxima efetividade e o dever de prestar contas orientam a doutrina e as cobranças de bancas examinadoras.",
    topic: targetModule.title,
    banca: 'FGV / Cebraspe'
  });

  return baseQuestions;
}

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
