// Catálogo Canônico Unificado de Carreiras, Editais e Aulas Oficiais

export const CAREERS_CATALOG = {
  // ============================================================
  // 1. MARINHA DO BRASIL — PRAÇAS RM2 / SMV (MILITAR-NAVAL)
  // ============================================================
  'marinha_rm2': {
    id: 'marinha_rm2',
    name: '⚓ Marinha do Brasil (Praças RM2 / SMV)',
    shortName: 'Marinha RM2',
    role: 'Cabo / Terceiro-Sargento Temporário',
    totalQuestions: 50,
    bancas: [
      { id: 'DEnsM', name: 'DEnsM / Marinha do Brasil (Oficial)', default: true },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' },
      { id: 'FGV', name: 'FGV (Fundação Getulio Vargas)' }
    ],
    subjects: [
      {
        subject: 'Língua Portuguesa',
        wave: 1,
        questions: 25,
        percentage: '50%',
        description: 'Gramática aplicada, Sintaxe do Período Composto e Interpretação de Textos DEnsM'
      },
      {
        subject: 'Formação Militar-Naval',
        wave: 1,
        questions: 25,
        percentage: '50%',
        description: 'Estatuto dos Militares (Lei 6.880), RDM, LESTA, Tradições, História Naval e Liderança'
      }
    ],
    official_lessons: [
      // Língua Portuguesa (10 Aulas)
      { subject: 'Língua Portuguesa', lessonNumber: 1, title: 'Compreensão e Interpretação de Textos, Coesão e Coerência', keyTopics: 'Tipologia textual, gêneros, coerência e mecanismos de coesão referencial/sequencial' },
      { subject: 'Língua Portuguesa', lessonNumber: 2, title: 'Ortografia Oficial e Acentuação Gráfica (Novo Acordo)', keyTopics: 'Regras de acentuação, proparoxítonas, paroxítonas, oxítonas, monossílabos e hífen' },
      { subject: 'Língua Portuguesa', lessonNumber: 3, title: 'Morfologia I — Substantivo, Adjetivo, Numeral e Pronomes', keyTopics: 'Flexão nominal, emprego de pronomes relativos, demonstrativos e tratamento' },
      { subject: 'Língua Portuguesa', lessonNumber: 4, title: 'Morfologia II — Verbos, Tempos, Modos e Vozes Verbais', keyTopics: 'Conjugação irregular, correlação verbal, vozes ativa, passiva e reflexiva' },
      { subject: 'Língua Portuguesa', lessonNumber: 5, title: 'Sintaxe da Oração — Termos Essenciais, Integrantes e Acessórios', keyTopics: 'Sujeito, predicado, complementos verbais, adjuntos, aposto e vocativo' },
      { subject: 'Língua Portuguesa', lessonNumber: 6, title: 'Sintaxe do Período Composto — Coordenação e Subordinação', keyTopics: 'Orações coordenadas, subordinadas substantivas, adjetivas e adverbiais' },
      { subject: 'Língua Portuguesa', lessonNumber: 7, title: 'Concordância Nominal e Concordância Verbal', keyTopics: 'Casos especiais de concordância com sujeito composto, partitivos e verbos impessoais' },
      { subject: 'Língua Portuguesa', lessonNumber: 8, title: 'Regência Nominal, Regência Verbal e Emprego da Crase', keyTopics: 'Verbos transitivos diretos/indiretos clássicos e casos proibidos/obrigatórios de crase' },
      { subject: 'Língua Portuguesa', lessonNumber: 9, title: 'Pontuação e Colocação Pronominal', keyTopics: 'Emprego de vírgula, ponto e vírgula, próclise, ênclise e mesóclise' },
      { subject: 'Língua Portuguesa', lessonNumber: 10, title: 'Semântica, Figuras de Linguagem e Reescrita de Frases', keyTopics: 'Sinonímia, antonímia, conotação/denotação, metáfora, metonímia e reescritura' },

      // Formação Militar-Naval (10 Aulas)
      { subject: 'Formação Militar-Naval', lessonNumber: 1, title: 'Estatuto dos Militares (Lei 6.880/80) — Hierarquia, Disciplina e Postos/Graduações', keyTopics: 'Hierarquia, disciplina naval, oficiais vs praças, antiguidade e precedência' },
      { subject: 'Formação Militar-Naval', lessonNumber: 2, title: 'Estatuto dos Militares (Lei 6.880/80) — Deveres, Ética, Direitos e Prerrogativas', keyTopics: 'Compromisso militar, ética, valor militar, agregação, reforma e reserva' },
      { subject: 'Formação Militar-Naval', lessonNumber: 3, title: 'Regulamento Disciplinar para a Marinha (RDM - Dec. 88.545/83)', keyTopics: 'Faltas e contravenções disciplinares (leves, médias, graves), penas disciplinares e recursos' },
      { subject: 'Formação Militar-Naval', lessonNumber: 4, title: 'Lei do Serviço Militar (Lei 4.375/64) e Organização da Marinha do Brasil', keyTopics: 'SMV, recrutamento, Comando da Marinha, Estado-Maior da Armada e Distritos Navais (1º ao 9º DN)' },
      { subject: 'Formação Militar-Naval', lessonNumber: 5, title: 'Segurança do Tráfego Aquaviário (LESTA - Lei 9.537/97 e RLESTA)', keyTopics: 'Autoridade Marítima, Capitanias dos Portos, segurança da navegação e salvaguarda da vida no mar' },
      { subject: 'Formação Militar-Naval', lessonNumber: 6, title: 'Tradições e Costumes Navais — Cerimonial à Bandeira e Honras de Bordo', keyTopics: 'Cerimonial às 08:00h e ao pôr do sol, saudações, continência, toques de corneta e apito marinheiro' },
      { subject: 'Formação Militar-Naval', lessonNumber: 7, title: 'Vocabulário Náutico e Organização de Bordo', keyTopics: 'Terminologia marinheira (bombordo, boreste, proa, popa, calado, costado), divisões de quarto e rancho' },
      { subject: 'Formação Militar-Naval', lessonNumber: 8, title: 'História Naval Brasileira I — Período Colonial, Império e Batalha do Riachuelo (1865)', keyTopics: 'Independência, Guerra da Cisplatina, Guerra da Tríplice Aliança e a epopeia de 11 de junho de 1865' },
      { subject: 'Formação Militar-Naval', lessonNumber: 9, title: 'História Naval Brasileira II — República, Guerras Mundiais e Grandes Vultos', keyTopics: 'DNOG na 1ª Guerra, Força Naval na 2ª Guerra, Marquês de Tamandaré e Almirante Barroso' },
      { subject: 'Formação Militar-Naval', lessonNumber: 10, title: 'Doutrina de Liderança na Marinha do Brasil', keyTopics: 'Conceitos de chefia e liderança, estilos (autocrático, participativo, delegativo), fatores e liderança moral' }
    ]
  },

  // ============================================================
  // 2. RECEITA FEDERAL DO BRASIL — ANALISTA TRIBUTÁRIO (ATRFB)
  // ============================================================
  'atrfb': {
    id: 'atrfb',
    name: '🏛️ Receita Federal do Brasil (ATRFB)',
    shortName: 'Receita Federal',
    role: 'Analista-Tributário da Receita Federal',
    totalQuestions: 140,
    bancas: [
      { id: 'FGV', name: 'FGV (Fundação Getulio Vargas)', default: true },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' },
      { id: 'ESAF', name: 'ESAF (Histórica)' },
      { id: 'FCC', name: 'FCC (Fundação Carlos Chagas)' }
    ],
    subjects: [
      { subject: 'Direito Tributário', wave: 1, questions: 16, percentage: '11.4%', description: 'CTN, Teoria Pentapartida, Limitações e Espécies' },
      { subject: 'Direito Previdenciário', wave: 1, questions: 16, percentage: '11.4%', description: 'Seguridade Social, Custeio e Benefícios RGPS' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 15, percentage: '10.7%', description: 'Gramática aplicada, Sintaxe e Interpretação FGV' },
      { subject: 'Fluência em Dados', wave: 1, questions: 15, percentage: '10.7%', description: 'Modelagem, SQL, Análise e Governança de Dados' },
      { subject: 'Direito Constitucional', wave: 1, questions: 14, percentage: '10.0%', description: 'Direitos Fundamentais, Organização do Estado e Poderes' },
      { subject: 'Legislação Tributária', wave: 1, questions: 14, percentage: '10.0%', description: 'IRPJ, IPI, PIS/COFINS, IOF e Tributação Federal' },
      { subject: 'Legislação Aduaneira', wave: 1, questions: 14, percentage: '10.0%', description: 'Regulamento Aduaneiro, Importação, Exportação e SISCOMEX' },
      { subject: 'Direito Administrativo', wave: 2, questions: 12, percentage: '8.5%', description: 'Atos, Processo Administrativo, Licitações e Agentes' },
      { subject: 'Raciocínio Lógico-Matemático', wave: 2, questions: 10, percentage: '7.1%', description: 'Lógica Proposicional, Análise Combinatória e Quantificadores' },
      { subject: 'Contabilidade Geral', wave: 2, questions: 10, percentage: '7.1%', description: 'CPC, Balanço Patrimonial e DRE' },
      { subject: 'Estatística', wave: 2, questions: 10, percentage: '7.1%', description: 'Estatística Descritiva, Inferencial e Probabilidade' },
      { subject: 'Administração Geral e Pública', wave: 2, questions: 10, percentage: '7.1%', description: 'Planejamento, Gestão por Processos e Governança' },
      { subject: 'Língua Inglesa', wave: 2, questions: 10, percentage: '7.1%', description: 'Interpretação de Textos e Vocabulário Técnico' }
    ],
    official_lessons: [
      { subject: 'Direito Tributário', lessonNumber: 1, title: 'Conceito de Tributo e Espécies Tributárias (CTN art. 3º e 5º)', keyTopics: 'Impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais' },
      { subject: 'Direito Tributário', lessonNumber: 2, title: 'Competência Tributária e Limitações Constitucionais ao Poder de Tributar', keyTopics: 'Legalidade, anterioridade, irretroatividade, não confisco e imunidades tributárias' },
      { subject: 'Direito Previdenciário', lessonNumber: 1, title: 'Princípios Constitucionais da Seguridade Social (Art. 194 e 195)', keyTopics: 'Universalidade, uniformidade, seletividade, distributividade e diversidade da base' },
      { subject: 'Língua Portuguesa', lessonNumber: 1, title: 'Interpretação Textual e Semântica Estilo FGV', keyTopics: 'Pressupostos, subentendidos, ironia, tipos de discurso e ambiguidade' },
      { subject: 'Fluência de Dados', lessonNumber: 1, title: 'Bancos de Dados Relacionais, Modelo Entidade-Relacionamento e SQL', keyTopics: 'SELECT, JOIN, GROUP BY, HAVING, subqueries, índices e normalização' },
      { subject: 'Direito Constitucional', lessonNumber: 1, title: 'Direitos e Garantias Fundamentais (Art. 5º da CF/88)', keyTopics: 'Remédios constitucionais, direitos individuais e coletivos, tratados internacionais' },
      { subject: 'Legislação Tributária', lessonNumber: 1, title: 'Tributos Federais — IRPJ, CSLL e Tributação pelo Lucro Real/Presumido', keyTopics: 'Fato gerador, base de cálculo, alíquotas e deduções' },
      { subject: 'Legislação Aduaneira', lessonNumber: 1, title: 'Regulamento Aduaneiro (Decreto 6.759/09) — Território e Jurisdição Aduaneira', keyTopics: 'Zona primária, zona secundária, portos secos e controle aduaneiro' }
    ]
  },

  // ============================================================
  // 3. SAÚDE PÚBLICA — SES-RJ / IASERJ 2026 (IBDO PROJETOS)
  // ============================================================
  'ses_rj': {
    id: 'ses_rj',
    name: '🏥 SES-RJ / IASERJ 2026 (IBDO Projetos)',
    shortName: 'Saúde SES-RJ',
    role: 'Técnico de Enfermagem / Assistente Administrativo',
    totalQuestions: 70,
    optionCount: 4, // Padrão A, B, C, D da banca IBDO
    bancas: [
      { id: 'IBDO', name: 'Instituto IBDO Projetos (Banca Oficial SES-RJ 2026)', default: true },
      { id: 'IDECAN', name: 'IDECAN (Saúde RJ)' },
      { id: 'FGV', name: 'FGV (Fundação Saúde RJ)' },
      { id: 'IBFC', name: 'IBFC (Rede Hospitalar)' }
    ],
    roles: [
      { id: 'tecnico_enfermagem', name: 'Técnico de Enfermagem (20 vagas)' },
      { id: 'assistente_adm', name: 'Assistente Administrativo de Saúde (40 vagas)' }
    ],
    subjects: [
      { subject: 'Língua Portuguesa', wave: 1, questions: 15, percentage: '21.4%', description: 'Gramática normativa tradicional, concordância, crase, regência e interpretação IBDO' },
      { subject: 'Legislação do SUS & Saúde Pública', wave: 1, questions: 15, percentage: '21.4%', description: 'CF/88 arts. 196-200, Leis 8.080/90 e 8.142/90, Dec. 7.508/11, LC 141/12 e PNAB' },
      { subject: 'Noções de Informática', wave: 1, questions: 10, percentage: '14.3%', description: 'Windows, pacote Office/LibreOffice, segurança e prontuário eletrônico no SUS' },
      { subject: 'Enfermagem e Cuidados Clínicos', wave: 2, questions: 30, percentage: '42.9%', description: 'SAE, PNI (Vacinação), Farmacologia/Cálculos, Sinais Vitais, Urgência/Emergência e Biossegurança' },
      { subject: 'Administração Pública e Protocolo', wave: 2, questions: 30, percentage: '42.9%', description: 'Gestão de Documentos, Protocolo Hospitalar, Estatuto RJ (Dec.-Lei 220/75), LAI/LGPD e Redação Oficial' }
    ],
    official_lessons: [
      // Módulo Comum — SUS & Português (Aulas 1 a 6)
      { subject: 'Legislação do SUS & Saúde Pública', lessonNumber: 1, title: 'Constituição Federal (Arts. 196 a 200) e Princípios Doutrinários/Organizativos do SUS', keyTopics: 'Direito à saúde, universalidade, integralidade, equidade, descentralização e regionalização' },
      { subject: 'Legislação do SUS & Saúde Pública', lessonNumber: 2, title: 'Lei Orgânica da Saúde (Lei nº 8.080/90) — Competências das Esferas de Gestão', keyTopics: 'Atribuições da direção nacional, estadual e municipal, vigilância em saúde e saúde indígena' },
      { subject: 'Legislação do SUS & Saúde Pública', lessonNumber: 3, title: 'Participação da Comunidade e Financiamento do SUS (Lei nº 8.142/90 e LC 141/12)', keyTopics: 'Conselhos e Conferências de Saúde, repasses fundo a fundo e percentuais mínimos obrigatórios' },
      { subject: 'Legislação do SUS & Saúde Pública', lessonNumber: 4, title: 'Decreto nº 7.508/2011 — Regiões de Saúde, Contrato Organizativo (COAP) e Portas de Entrada', keyTopics: 'Mapa da Saúde, Serviços Especiais de Acesso Aberto e RENAME/RENASES' },
      { subject: 'Língua Portuguesa', lessonNumber: 1, title: 'Gramática Normativa IBDO — Acentuação, Ortografia e Emprego do Sinal Indicativo de Crase', keyTopics: 'Regras da nova ortografia, acentuação de proparoxítonas/oxítonas e casos proibidos/obrigatórios de crase' },
      { subject: 'Língua Portuguesa', lessonNumber: 2, title: 'Sintaxe e Concordância Verbal/Nominal com foco na literalidade da banca', keyTopics: 'Casos especiais de concordância com sujeito composto, verbos impessoais e regência nominal/verbal' },

      // Específicas — Técnico de Enfermagem (Aulas 7 a 13)
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 1, title: 'Fundamentos de Enfermagem, Sinais Vitais, Higiene e Conforto do Paciente', keyTopics: 'Pressão arterial, pulso, temperatura, respiração, oximetria de pulso e escalas de dor' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 2, title: 'Farmacologia Aplicada, Cálculos de Medicamentos e Vias de Administração', keyTopics: 'Regra de três para diluição, cálculo de gotas/microgotas por minuto e vias IM, EV, SC e ID' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 3, title: 'Programa Nacional de Imunizações (PNI) & Calendário de Vacinação Oficial Atualizado', keyTopics: 'Esquema vacinal da criança, gestante, adulto e idoso, conservação e rede de frio' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 4, title: 'Biossegurança, Controle de Infecção Hospitalar (CCIH), NR-32 e Precauções Padrão', keyTopics: 'Higienização das mãos, uso de EPIs, precaução de contato, gotículas e aerossóis' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 5, title: 'Urgência e Emergência — Suporte Básico de Vida (SBV) e Classificação de Manchester', keyTopics: 'Ressuscitação cardiopulmonar (RCP/AHA), conduta em parada cardiorrespiratória e triagem' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 6, title: 'Saúde da Mulher e da Criança na Rede Pública de Saúde do RJ', keyTopics: 'Pré-natal, puerpério, aleitamento materno e teste do pezinho' },
      { subject: 'Enfermagem e Cuidados Clínicos', lessonNumber: 7, title: 'Ética Profissional e Código de Deontologia de Enfermagem (Resolução COFEN)', keyTopics: 'Deveres, proibições, penalidades disciplinares e sigilo profissional' },

      // Específicas — Assistente Administrativo de Saúde (Aulas 14 a 20)
      { subject: 'Administração Pública e Protocolo', lessonNumber: 1, title: 'Estrutura e Organização da SES-RJ e IASERJ no Estado do Rio de Janeiro', keyTopics: 'Competências dos órgãos de saúde estaduais e atendimento aos servidores do IASERJ' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 2, title: 'Regime Jurídico dos Servidores Civis do RJ (Decreto-Lei nº 220/75 e Decreto nº 2.479/79)', keyTopics: 'Provimento, posse, exercício, estabilidade, licenças, direitos, deveres e processo disciplinar' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 3, title: 'Gestão de Documentos, Protocolo, Tramitação Processual e Prontuários no SUS', keyTopics: 'Classificação, arquivamento, guarda temporal e sigilo de prontuários médicos' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 4, title: 'Atendimento Humanizado ao Cidadão e Acolhimento nos Serviços Públicos de Saúde', keyTopics: 'Comunicação assertiva, ética pública, atendimento prioritário e gestão de conflitos' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 5, title: 'Redação Oficial no Padrão do Serviço Público (Manual de Redação da Presidência)', keyTopics: 'Ofício, memorando, circular, despacho e impessoalidade na comunicação pública' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 6, title: 'Noções de Licitações e Contratos na Saúde (Lei Federal nº 14.133/2021)', keyTopics: 'Modalidades licitatórias, dispensa e inexigibilidade para compra de insumos hospitalares' },
      { subject: 'Administração Pública e Protocolo', lessonNumber: 7, title: 'Lei de Acesso à Informação (LAI - Lei 12.527/11) e LGPD (Lei 13.709/18) na Saúde', keyTopics: 'Transparência ativa/passiva, dados pessoais sensíveis em saúde e segurança da informação' }
    ]
  },

  // ============================================================
  // 4. ÁREA ADMINISTRATIVA / TRIBUNAIS (TJ, TRF, TRT)
  // ============================================================
  'adm_tribunais': {
    id: 'adm_tribunais',
    name: '⚖️ Tribunais e Área Administrativa',
    shortName: 'Tribunais',
    role: 'Técnico / Analista Judiciário',
    totalQuestions: 70,
    bancas: [
      { id: 'FGV', name: 'FGV (Fundação Getulio Vargas)', default: true },
      { id: 'FCC', name: 'FCC (Fundação Carlos Chagas)' },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' }
    ],
    subjects: [
      { subject: 'Direito Administrativo', wave: 1, questions: 18, percentage: '25.7%', description: 'Regime Jurídico, Lei 8.112/90, Nova Lei de Licitações (Lei 14.133/21)' },
      { subject: 'Direito Constitucional', wave: 1, questions: 16, percentage: '22.8%', description: 'Poder Judiciário, Funções Essenciais à Justiça, Direitos Fundamentais' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 15, percentage: '21.4%', description: 'Interpretação e Gramática avançada de bancas de Tribunais' },
      { subject: 'Administração Geral e Pública', wave: 2, questions: 12, percentage: '17.1%', description: 'Gestão por Resultados, Planejamento Estratégico e Governança' },
      { subject: 'Raciocínio Lógico Matemático', wave: 2, questions: 9, percentage: '12.8%', description: 'Lógica Proposicional, Diagramas Lógicos e Probabilidade' }
    ],
    official_lessons: [
      { subject: 'Direito Administrativo', lessonNumber: 1, title: 'Regime Jurídico dos Servidores Públicos Civis (Lei 8.112/90)', keyTopics: 'Provimento, vacância, direitos, deveres, proibições e processo disciplinar (PAD)' },
      { subject: 'Direito Constitucional', lessonNumber: 1, title: 'Organização do Poder Judiciário (Arts. 92 a 126 da CF/88)', keyTopics: 'STF, CNJ, STJ, TRFs, TJs e garantias da magistratura' }
    ]
  },

  // ============================================================
  // 5. BANCO DO BRASIL — AGENTE COMERCIAL (CESGRANRIO)
  // ============================================================
  'bb_comercial': {
    id: 'bb_comercial',
    name: '🏦 Banco do Brasil (Agente Comercial • Cesgranrio)',
    shortName: 'BB Comercial',
    role: 'Escriturário / Agente Comercial',
    totalQuestions: 70,
    bancas: [
      { id: 'CESGRANRIO', name: 'Fundação Cesgranrio (Banca Oficial do Banco do Brasil)', default: true },
      { id: 'FGV', name: 'FGV (Bancos Públicos)' },
      { id: 'FCC', name: 'FCC (Fundação Carlos Chagas)' },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' }
    ],
    subjects: [
      { subject: 'Vendas e Negociação', wave: 1, questions: 15, percentage: '22.5%', description: 'Técnicas de Vendas, SPIN Selling, Gatilhos, Gestão de Objeções, Código de Defesa do Consumidor e Ouvidoria' },
      { subject: 'Conhecimentos de Informática', wave: 1, questions: 15, percentage: '22.5%', description: 'Windows 10/11, Pacote Office/Microsoft 365, Redes, Navegadores, Nuvem e Segurança da Informação' },
      { subject: 'Conhecimentos Bancários', wave: 1, questions: 10, percentage: '15.0%', description: 'Estrutura do SFN (CMN, BACEN, CVM), Produtos Bancários, PIX, Open Finance, Moedas Digitais e Câmbio' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 10, percentage: '15.0%', description: 'Compreensão de Textos, Tipologia, Sintaxe da Oração/Período, Regência, Crase e Pontuação Cesgranrio' },
      { subject: 'Matemática Financeira', wave: 2, questions: 5, percentage: '7.5%', description: 'Juros Simples e Compostos, Taxas Equivalentes, Descontos, Sistemas de Amortização (SAC e Price)' },
      { subject: 'Matemática', wave: 2, questions: 5, percentage: '7.5%', description: 'Conjuntos, Funções, Razões/Proporções, Regra de Três, Porcentagem, Progressões (PA/PG) e Matrizes' },
      { subject: 'Atualidades do Mercado Financeiro', wave: 2, questions: 5, percentage: '5.0%', description: 'Fintechs, Startups, Bancos Digitais, Moedas Digitais, ESG e Sistema de Pagamentos Brasileiro (SPB)' },
      { subject: 'Língua Inglesa', wave: 2, questions: 5, percentage: '5.0%', description: 'Compreensão de Textos e Vocabulário de Negócios e Mercado Financeiro' }
    ],
    official_lessons: [
      { subject: 'Conhecimentos Bancários', lessonNumber: 1, title: 'Estrutura do Sistema Financeiro Nacional (SFN) — Órgãos Normativos, Supervisores e Operadores', keyTopics: 'CMN, BACEN, CVM, SUSEP, PREVIC, Bancos Comerciais, Múltiplos e Cooperativas de Crédito' },
      { subject: 'Conhecimentos Bancários', lessonNumber: 2, title: 'Produtos e Serviços Bancários — Captação, Crédito, Investimentos e Garantias do FGC', keyTopics: 'Depósito à vista/prazo, CDB, RDB, LCI, LCA, Fundos de Investimento, Cartões e Fundo Garantidor de Créditos' },
      { subject: 'Conhecimentos Bancários', lessonNumber: 3, title: 'Mercado de Câmbio, PIX, Open Finance, Moedas Digitais e Inovações Tecnológicas do BACEN', keyTopics: 'Operações de câmbio, taxas de câmbio, liquidação em tempo real, APIs de Open Finance e Drex' },
      { subject: 'Conhecimentos Bancários', lessonNumber: 4, title: 'Prevenção à Lavagem de Dinheiro (Lei 9.613/98 e Circulares BACEN) e Sigilo Bancário (LC 105/01)', keyTopics: 'Fases da lavagem (Colocação, Ocultação, Integração), COAF, identificação de clientes (KYC) e operações suspeitas' },
      { subject: 'Vendas e Negociação', lessonNumber: 1, title: 'Técnicas de Vendas no Setor Bancário — Sondagem, SPIN Selling e Abordagem Consultiva', keyTopics: 'Identificação de necessidades, perguntas de situação/problema/implicação/necessidade e proposta de valor' },
      { subject: 'Vendas e Negociação', lessonNumber: 2, title: 'Manejo de Objeções, Fechamento de Vendas e Pós-Venda em Produtos Financeiros', keyTopics: 'Gatilhos mentais de reciprocidade e autoridade, técnicas de fechamento e retenção de clientes' },
      { subject: 'Vendas e Negociação', lessonNumber: 3, title: 'Código de Defesa do Consumidor (Lei 8.078/90) e Resolução CMN de Ouvidoria Bancária', keyTopics: 'Direitos básicos do consumidor, publicidade enganosa/abusiva, contratos de adesão e prazos de resposta' },
      { subject: 'Conhecimentos de Informática', lessonNumber: 1, title: 'Segurança da Informação Bancária, Criptografia, Phishing, Malware e LGPD (Lei 13.709/18)', keyTopics: 'Engenharia social, autenticação multifator (MFA), princípios da LGPD e bases legais de tratamento' },
      { subject: 'Matemática Financeira', lessonNumber: 1, title: 'Juros Compostos, Taxas Proporcionais/Equivalentes e Desconto Racional/Comercial', keyTopics: 'Fórmulas de montante composto, cálculo de juros acumulados, taxa nominal vs taxa efetiva' },
      { subject: 'Matemática Financeira', lessonNumber: 2, title: 'Sistemas de Amortização de Empréstimos e Financiamentos — Tabela Price e Sistema SAC', keyTopics: 'Cálculo de parcelas constantes (Price), amortização constante (SAC), juros decrescentes e saldo devedor' }
    ]
  },

  // ============================================================
  // 6. BANCO DO BRASIL — AGENTE DE TECNOLOGIA / TI (CESGRANRIO)
  // ============================================================
  'bb_ti': {
    id: 'bb_ti',
    name: '💻 Banco do Brasil (Agente de Tecnologia • TI • Cesgranrio)',
    shortName: 'BB Tecnologia (TI)',
    role: 'Escriturário / Agente de Tecnologia (TI)',
    totalQuestions: 70,
    bancas: [
      { id: 'CESGRANRIO', name: 'Fundação Cesgranrio (Banca Oficial BB Tecnologia)', default: true },
      { id: 'FGV', name: 'FGV (Tecnologia Bancária)' },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' },
      { id: 'FCC', name: 'FCC (Área de TI)' }
    ],
    subjects: [
      { subject: 'Tecnologia da Informação', wave: 1, questions: 35, percentage: '52.5%', description: 'Bancos de Dados SQL/NoSQL, Python, Java, APIs REST, Microsserviços, DevOps, Docker, Segurança, Cloud e Machine Learning' },
      { subject: 'Probabilidade e Estatística', wave: 1, questions: 5, percentage: '7.5%', description: 'Estatística Descritiva, Probabilidade, Teorema de Bayes, Distribuição Binomial e Normal' },
      { subject: 'Conhecimentos Bancários', wave: 1, questions: 5, percentage: '7.5%', description: 'SFN, BACEN, PIX, Open Finance, Moedas Digitais e Lei de Prevenção à Lavagem de Dinheiro' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 10, percentage: '15.0%', description: 'Compreensão de Textos, Tipologia, Sintaxe, Regência, Crase e Pontuação Cesgranrio' },
      { subject: 'Matemática', wave: 2, questions: 5, percentage: '7.5%', description: 'Funções, Matrizes, Análise Combinatória, Razão/Proporção e Sequências' },
      { subject: 'Atualidades do Mercado Financeiro', wave: 2, questions: 5, percentage: '5.0%', description: 'Fintechs, Big Techs financeiras, ESG, Drex e Sistema de Pagamentos Instantâneos' },
      { subject: 'Língua Inglesa', wave: 2, questions: 5, percentage: '5.0%', description: 'Interpretação de Textos Técnicos em Tecnologia, Arquitetura e Engenharia de Software' }
    ],
    official_lessons: [
      { subject: 'Tecnologia da Informação', lessonNumber: 1, title: 'Bancos de Dados Relacionais — Modelagem E-R, Normalização e Linguagem SQL Avançada', keyTopics: 'DDL, DML, DQL (SELECT, JOINs, GROUP BY, HAVING, subqueries correlacionadas, window functions e índices)' },
      { subject: 'Tecnologia da Informação', lessonNumber: 2, title: 'Bancos de Dados Não Relacionais (NoSQL) — Modelos Documento, Chave-Valor, Família de Colunas e Grafos', keyTopics: 'MongoDB, Cassandra, Redis, Neo4j, Teorema CAP e consistência eventual vs ACID' },
      { subject: 'Tecnologia da Informação', lessonNumber: 3, title: 'Linguagem Python para Análise de Dados e Engenharia — Sintaxe, List Comprehensions e Pandas/NumPy', keyTopics: 'Estruturas de dados (list, dict, set, tuple), manipulação de DataFrames, Series, slicing e funções lambda' },
      { subject: 'Tecnologia da Informação', lessonNumber: 4, title: 'Linguagem Java e TypeScript — POO, Herança, Interfaces, Polimorfismo e Tratamento de Exceções', keyTopics: 'Generics, Collections Framework, Streams API, Tipagem estática em TypeScript e interfaces assíncronas' },
      { subject: 'Tecnologia da Informação', lessonNumber: 5, title: 'Arquitetura de Software Moderna — Microsserviços, APIs RESTful, JSON e Mensageria', keyTopics: 'Princípios REST (GET, POST, PUT, DELETE, PATCH, status codes HTTP), Swagger/OpenAPI, Kafka e RabbitMQ' },
      { subject: 'Tecnologia da Informação', lessonNumber: 6, title: 'DevOps, Conteinerização e CI/CD — Docker, Kubernetes e Pipelines Automatizados', keyTopics: 'Dockerfile, imagens, contêineres, volumes, orquestração com pods/deployments e Git/GitHub Actions' },
      { subject: 'Tecnologia da Informação', lessonNumber: 7, title: 'Segurança da Informação e Criptografia — OWASP Top 10, Criptografia Simétrica/Assimétrica e OAuth2', keyTopics: 'SQL Injection, XSS, CSRF, chaves públicas/privadas (RSA/AES), certificados digitais TLS/SSL e tokens JWT' },
      { subject: 'Tecnologia da Informação', lessonNumber: 8, title: 'Aprendizado de Máquina (Machine Learning) & Inteligência Artificial no Setor Bancário', keyTopics: 'Algoritmos supervisionados (Árvores de Decisão, Random Forest, Regressão Logística, SVM) e métricas (Acurácia, Precisão, Recall, F1-Score, ROC-AUC)' },
      { subject: 'Probabilidade e Estatística', lessonNumber: 1, title: 'Estatística Descritiva — Medidas de Posição Central e Medidas de Dispersão', keyTopics: 'Média aritmética simples e ponderada, mediana, moda, variância, desvio-padrão e coeficiente de variação' },
      { subject: 'Probabilidade e Estatística', lessonNumber: 2, title: 'Teoria das Probabilidades — Probabilidade Condicional, Teorema de Bayes e Distribuições', keyTopics: 'Eventos independentes/mutuamente exclusivos, probabilidade condicional, distribuição Binomial e Normal' }
    ]
  },

  // ============================================================
  // 7. TRANSPETRO — TÉCNICO DE ADMINISTRAÇÃO E CONTROLE JÚNIOR (CESGRANRIO)
  // ============================================================
  'transpetro_adm': {
    id: 'transpetro_adm',
    name: '🚢 Transpetro • Técnico de Administração e Controle Jr (Cesgranrio)',
    shortName: 'Transpetro Adm',
    role: 'Técnico de Administração e Controle Júnior',
    totalQuestions: 70,
    bancas: [
      { id: 'CESGRANRIO', name: 'Fundação Cesgranrio (Banca Oficial Transpetro)', default: true },
      { id: 'FGV', name: 'FGV' },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' }
    ],
    subjects: [
      { subject: 'Noções de Administração', wave: 1, questions: 20, percentage: '28.5%', description: 'Planejamento, Organização, Direção e Controle (PODC), Gestão por Processos, Qualidade e Atendimento' },
      { subject: 'Legislação e Licitações para Estatais (Lei 13.303/16)', wave: 1, questions: 15, percentage: '21.5%', description: 'Lei das Estatais nº 13.303/2016, Regulamento de Licitações da Transpetro, Dispensa, Inexigibilidade e Contratos' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 10, percentage: '14.3%', description: 'Compreensão de Textos, Tipologia, Sintaxe, Regência, Crase e Pontuação Cesgranrio' },
      { subject: 'Matemática', wave: 1, questions: 10, percentage: '14.3%', description: 'Conjuntos, Porcentagem, Razão e Proporção, Regra de Três, Funções e Matemática Básica' },
      { subject: 'Técnicas de Arquivo e Documentação', wave: 2, questions: 8, percentage: '11.4%', description: 'Gestão de Documentos, Teoria das Três Idades, Classificação, Tabela de Temporalidade e Protocolo' },
      { subject: 'Ética e Conduta no Setor Público', wave: 2, questions: 7, percentage: '10.0%', description: 'Ética Pública, Código de Conduta da Transpetro e Petrobras, Transparência e Lei Anticorrupção' }
    ],
    official_lessons: [
      { subject: 'Noções de Administração', lessonNumber: 1, title: 'Funções da Administração Geral — Planejamento, Organização, Direção e Controle (PODC)', keyTopics: 'Níveis de planejamento (estratégico, tático, operacional), departamentalização, centralização vs descentralização e tipos de controle' },
      { subject: 'Noções de Administração', lessonNumber: 2, title: 'Gestão por Processos e Ferramentas da Qualidade (PDCA, Diagrama de Ishikawa e 5W2H)', keyTopics: 'Mapeamento de processos, melhoria contínua, Ciclo PDCA, Matriz GUT e indicadores de desempenho' },
      { subject: 'Legislação e Licitações para Estatais (Lei 13.303/16)', lessonNumber: 1, title: 'Regime Societário e Governança das Empresas Estatais (Lei nº 13.303/2016)', keyTopics: 'Sociedades de economia mista, empresas públicas, conselho de administração, comitê de auditoria e transparência' },
      { subject: 'Legislação e Licitações para Estatais (Lei 13.303/16)', lessonNumber: 2, title: 'Procedimento Licitatório em Estatais — Modalidades, Critérios de Julgamento e Hipóteses de Dispensa/Inexigibilidade', keyTopics: 'Pregão, pregão eletrônico, inversão de fases, limites de dispensa de valor e inviabilidade de competição' },
      { subject: 'Técnicas de Arquivo e Documentação', lessonNumber: 1, title: 'Teoria das Três Idades Documentais (Arquivo Corrente, Intermediário e Permanente)', keyTopics: 'Ciclo vital dos documentos, valor primário e secundário, métodos de arquivamento (alfabético, numérico, geográfico, temático)' },
      { subject: 'Técnicas de Arquivo e Documentação', lessonNumber: 2, title: 'Tabela de Temporalidade, Avaliação Documental e Protocolo', keyTopics: 'Prazos de guarda, eliminação, recolhimento, rotinas de protocolo (recebimento, registro, autuação, tramitação e expedição)' },
      { subject: 'Ética e Conduta no Setor Público', lessonNumber: 1, title: 'Código de Conduta Ética do Sistema Petrobras e Transpetro', keyTopics: 'Princípios éticos, conflito de interesses, prevenção ao assédio moral e sexual, canais de denúncia e conformidade (Compliance)' },
      { subject: 'Ética e Conduta no Setor Público', lessonNumber: 2, title: 'Lei Anticorrupção (Lei 12.846/2013) e Integridade Corporativa', keyTopics: 'Responsabilização objetiva administrativa e civil de pessoas jurídicas, acordos de leniência e programas de integridade' }
    ]
  },

  // ============================================================
  // 8. TRANSPETRO — TÉCNICO DE SUPRIMENTO E LOGÍSTICA JÚNIOR (CESGRANRIO)
  // ============================================================
  'transpetro_log': {
    id: 'transpetro_log',
    name: '📦 Transpetro • Técnico de Suprimento e Logística Jr (Cesgranrio)',
    shortName: 'Transpetro Logística',
    role: 'Técnico de Suprimento de Bens e Serviços Júnior (Logística)',
    totalQuestions: 70,
    bancas: [
      { id: 'CESGRANRIO', name: 'Fundação Cesgranrio (Banca Oficial Transpetro)', default: true },
      { id: 'FGV', name: 'FGV' },
      { id: 'CEBRASPE', name: 'CEBRASPE / CESPE' }
    ],
    subjects: [
      { subject: 'Gestão de Estoques e Almoxarifado', wave: 1, questions: 20, percentage: '28.5%', description: 'Classificação ABC, Ponto de Pedido, Estoque de Segurança, Giro, Lote Econômico e Inventários' },
      { subject: 'Transporte, Movimentação e Modais Logísticos', wave: 1, questions: 15, percentage: '21.5%', description: 'Dutoviário, Marítimo/Cabotagem, Rodoviário, Ferroviário, Armazenagem e Embalagens' },
      { subject: 'Língua Portuguesa', wave: 1, questions: 10, percentage: '14.3%', description: 'Compreensão de Textos, Tipologia, Sintaxe, Regência, Crase e Pontuação Cesgranrio' },
      { subject: 'Matemática', wave: 1, questions: 10, percentage: '14.3%', description: 'Razão, Proporção, Porcentagem, Médias Ponderadas e Raciocínio Numérico' },
      { subject: 'Gestão de Compras e Fornecedores', wave: 2, questions: 8, percentage: '11.4%', description: 'Ciclo de Aquisição, Negociação, Qualificação de Fornecedores e Supply Chain Management' },
      { subject: 'Legislação de Contratações em Estatais (Lei 13.303/16)', wave: 2, questions: 7, percentage: '10.0%', description: 'Regimes de Licitação para Aquisição de Bens e Serviços e Contratos da Transpetro' }
    ],
    official_lessons: [
      { subject: 'Gestão de Estoques e Almoxarifado', lessonNumber: 1, title: 'Classificação de Materiais e Curva ABC (Princípio de Pareto em Estoques)', keyTopics: 'Itens classe A, B e C, criticidade de materiais (Classificação XYZ), perecibilidade e codificação de materiais' },
      { subject: 'Gestão de Estoques e Almoxarifado', lessonNumber: 2, title: 'Dimensionamento de Estoques — Ponto de Pedido, Estoque Mínimo, Tempo de Reposição e LEC', keyTopics: 'Fórmula do Ponto de Pedido (PP = C x TR + EM), cálculo de estoque de segurança, custos de armazenagem vs custo de pedido' },
      { subject: 'Gestão de Estoques e Almoxarifado', lessonNumber: 3, title: 'Inventário Físico e Acurácia de Estoque (Inventário Rotativo vs Periódico)', keyTopics: 'Métodos de contagem física, causas de divergência de inventário, conciliação contábil e índice de acurácia de registros' },
      { subject: 'Transporte, Movimentação e Modais Logísticos', lessonNumber: 1, title: 'Modais de Transporte de Cargas — Dutoviário, Marítimo, Rodoviário e Ferroviário', keyTopics: 'Transporte dutoviário de óleo e gás (oleodutos e gasodutos), cabotagem marítima, custos comparativos e capacidade de carga' },
      { subject: 'Transporte, Movimentação e Modais Logísticos', lessonNumber: 2, title: 'Operações de Armazenagem, Layout de Almoxarifado e Movimentação de Cargas', keyTopics: 'Endereçamento de materiais, paletização, equipamentos de movimentação (empilhadeiras, pontes rolantes), segurança no almoxarifado' },
      { subject: 'Gestão de Compras e Fornecedores', lessonNumber: 1, title: 'Ciclo de Compras e Gestão da Cadeia de Suprimentos (Supply Chain Management - SCM)', keyTopics: 'Requisição de compras, cotação, seleção e homologação de fornecedores, avaliação de desempenho (SLA, OTIF) e compras estratégicas' },
      { subject: 'Legislação de Contratações em Estatais (Lei 13.303/16)', lessonNumber: 1, title: 'Contratação de Bens e Serviços em Estatais — Procedimentos e Sanções', keyTopics: 'Regras da Lei 13.303/16 para compras e fornecimento, edital, impugnação, recursos administrativos e fiscalização de contratos' }
    ]
  }
};

// Helper: Retorna configuração da carreira com fallback seguro
export function getCareerConfig(careerId = 'atrfb') {
  return CAREERS_CATALOG[careerId] || CAREERS_CATALOG['atrfb'];
}
