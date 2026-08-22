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
  },

  // --- RECEITA FEDERAL: RLM E ESTATÍSTICA ---
  "Raciocínio Lógico-Matemático e Estatística": {
    subject: "Raciocínio Lógico-Matemático e Estatística",
    topic: "Lógica de Proposições, Equivalências Lógicas & Medidas de Tendência Central",
    lessonNumber: 1,
    totalLessons: 10,
    jurisprudenceNote: "FGV ATRFB: Negação do condicional (Regra do MANÉ) e equivalências de Se...então (Contrapositiva e Disjunção 'Neymar'). Em estatística, foco em média, mediana e variância.",
    section1Title: "1. Equivalências e Negações do Condicional (P -> Q)",
    section1Body: "No cálculo proposicional FGV, a condicional 'Se P, então Q' (P -> Q) possui duas equivalências fundamentais: 1) Contrapositiva: ~Q -> ~P; 2) Forma Disjuntiva: ~P v Q (Nega a primeira OU mantém a segunda). A NEGAÇÃO da condicional ~(P -> Q) é a conjunção P ^ ~Q (Mantém a primeira E nega a segunda — Regra do MANÉ). Nas medidas estatísticas, a Mediana é o elemento central do rol ordenado, resistente a outliers, enquanto a Média é sensível a valores extremos.",
    section2Title: "2. Esquema Mnemônico de Lógica FGV",
    mnemonics: [
      { code: "NEGAÇÃO DO SE...ENTÃO = MANÉ", meaning: "MAntém a primeira E NEga a segunda: ~(P -> Q) = P ^ ~Q." },
      { code: "EQUIVALÊNCIA DO SE...ENTÃO = NEYMAR", meaning: "NEga a primeira OU Mantém a segunda: P -> Q = ~P v Q." },
      { code: "CONTRAPOSITIVA = VOLTA NEGANDO", meaning: "P -> Q equivale a ~Q -> ~P (Inverte e nega ambas)." },
      { code: "MEDIANA = CENTRO DO ROL", meaning: "Elemento do meio após ordenar a sequência em ordem crescente." }
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
      { subject: "Legislação Tributária e Aduaneira", topic: "Regulamento Aduaneiro, Território, Portos Secos & Tributos Federais", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" }
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
      { subject: "Comércio Internacional e Legislação Aduaneira", topic: "Valoração Aduaneira, Regimes Aduaneiros Especiais & SISCOMEX", status: "homologado", label: "ALTA INCIDÊNCIA", weight: "10.0%" },
      { subject: "Fluência em Dados", topic: "Python, SQL e Análise Preditiva em Malhas Fiscais", status: "em_revisao", label: "MÉDIA INCIDÊNCIA", weight: "8.0%" }
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
