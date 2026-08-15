// ConcursaBot — Client-side Careers Catalog & Dynamic Helpers

export const CAREERS_CATALOG = {
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
        description: 'Gramática aplicada, Sintaxe do Período Composto e Interpretação DEnsM'
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
      { subject: 'Língua Portuguesa', lessonNumber: 1, title: 'Compreensão e Interpretação de Textos, Coesão e Coerência', keyTopics: 'Tipologia textual, gêneros, coerência e mecanismos de coesão' },
      { subject: 'Língua Portuguesa', lessonNumber: 2, title: 'Ortografia Oficial e Acentuação Gráfica (Novo Acordo)', keyTopics: 'Regras de acentuação, proparoxítonas, paroxítonas, oxítonas e hífen' },
      { subject: 'Língua Portuguesa', lessonNumber: 3, title: 'Morfologia I — Substantivo, Adjetivo, Numeral e Pronomes', keyTopics: 'Flexão nominal, emprego de pronomes relativos e demonstrativos' },
      { subject: 'Língua Portuguesa', lessonNumber: 4, title: 'Morfologia II — Verbos, Tempos, Modos e Vozes Verbais', keyTopics: 'Conjugação irregular, correlação verbal, vozes ativa e passiva' },
      { subject: 'Língua Portuguesa', lessonNumber: 5, title: 'Sintaxe da Oração — Termos Essenciais, Integrantes e Acessórios', keyTopics: 'Sujeito, predicado, complementos verbais, adjuntos e aposto' },
      { subject: 'Língua Portuguesa', lessonNumber: 6, title: 'Sintaxe do Período Composto — Coordenação e Subordinação', keyTopics: 'Orações coordenadas e subordinadas substantivas, adjetivas e adverbiais' },
      { subject: 'Língua Portuguesa', lessonNumber: 7, title: 'Concordância Nominal e Concordância Verbal', keyTopics: 'Casos especiais de concordância com sujeito composto e partitivos' },
      { subject: 'Língua Portuguesa', lessonNumber: 8, title: 'Regência Nominal, Regência Verbal e Emprego da Crase', keyTopics: 'Verbos transitivos diretos/indiretos clássicos e regras de crase' },
      { subject: 'Língua Portuguesa', lessonNumber: 9, title: 'Pontuação e Colocação Pronominal', keyTopics: 'Emprego de vírgula, ponto e vírgula, próclise, ênclise e mesóclise' },
      { subject: 'Língua Portuguesa', lessonNumber: 10, title: 'Semântica, Figuras de Linguagem e Reescrita de Frases', keyTopics: 'Sinonímia, antonímia, conotação/denotação, metáfora e reescritura' },

      { subject: 'Formação Militar-Naval', lessonNumber: 1, title: 'Estatuto dos Militares (Lei 6.880/80) — Hierarquia, Disciplina e Postos/Graduações', keyTopics: 'Hierarquia, disciplina naval, oficiais vs praças, antiguidade e precedência' },
      { subject: 'Formação Militar-Naval', lessonNumber: 2, title: 'Estatuto dos Militares (Lei 6.880/80) — Deveres, Ética, Direitos e Prerrogativas', keyTopics: 'Compromisso militar, ética, valor militar, agregação, reforma e reserva' },
      { subject: 'Formação Militar-Naval', lessonNumber: 3, title: 'Regulamento Disciplinar para a Marinha (RDM - Dec. 88.545/83)', keyTopics: 'Faltas e contravenções disciplinares (leves, médias, graves), penas e recursos' },
      { subject: 'Formação Militar-Naval', lessonNumber: 4, title: 'Lei do Serviço Militar (Lei 4.375/64) e Organização da Marinha do Brasil', keyTopics: 'SMV, recrutamento, Comando da Marinha e Distritos Navais (1º ao 9º DN)' },
      { subject: 'Formação Militar-Naval', lessonNumber: 5, title: 'Segurança do Tráfego Aquaviário (LESTA - Lei 9.537/97 e RLESTA)', keyTopics: 'Autoridade Marítima, Capitanias dos Portos e salvaguarda da vida no mar' },
      { subject: 'Formação Militar-Naval', lessonNumber: 6, title: 'Tradições e Costumes Navais — Cerimonial à Bandeira e Honras de Bordo', keyTopics: 'Cerimonial às 08:00h e ao pôr do sol, saudações, continência e toques' },
      { subject: 'Formação Militar-Naval', lessonNumber: 7, title: 'Vocabulário Náutico e Organização de Bordo', keyTopics: 'Terminologia marinheira (bombordo, boreste, proa, popa) e quartos de bordo' },
      { subject: 'Formação Militar-Naval', lessonNumber: 8, title: 'História Naval Brasileira I — Período Colonial e Batalha do Riachuelo (1865)', keyTopics: 'Independência, Guerra da Cisplatina e a Batalha Naval do Riachuelo' },
      { subject: 'Formação Militar-Naval', lessonNumber: 9, title: 'História Naval Brasileira II — República, Guerras Mundiais e Grandes Vultos', keyTopics: 'DNOG na 1ª Guerra, Força Naval na 2ª Guerra, Marquês de Tamandaré e Barroso' },
      { subject: 'Formação Militar-Naval', lessonNumber: 10, title: 'Doutrina de Liderança na Marinha do Brasil', keyTopics: 'Conceitos de chefia e liderança, estilos (autocrático, participativo) e fatores' }
    ]
  },

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
      { subject: 'Fluência de Dados', wave: 1, questions: 15, percentage: '10.7%', description: 'Modelagem, SQL, Análise e Governança de Dados' },
      { subject: 'Direito Constitucional', wave: 1, questions: 14, percentage: '10.0%', description: 'Direitos Fundamentais, Organização do Estado e Poderes' },
      { subject: 'Legislação Tributária', wave: 1, questions: 14, percentage: '10.0%', description: 'IRPJ, IPI, PIS/COFINS, IOF e Tributação Federal' },
      { subject: 'Legislação Aduaneira', wave: 1, questions: 14, percentage: '10.0%', description: 'Regulamento Aduaneiro, Importação, Exportação e SISCOMEX' },
      { subject: 'Direito Administrativo', wave: 2, questions: 12, percentage: '8.5%', description: 'Atos, Processo Administrativo, Licitações e Agentes' },
      { subject: 'Raciocínio Lógico Matemático', wave: 2, questions: 10, percentage: '7.1%', description: 'Lógica Proposicional, Análise Combinatória e Probabilidade' },
      { subject: 'Contabilidade Geral', wave: 2, questions: 10, percentage: '7.1%', description: 'CPC, Balanço Patrimonial e DRE' },
      { subject: 'Estatística', wave: 2, questions: 10, percentage: '7.1%', description: 'Estatística Descritiva e Inferencial' },
      { subject: 'Administração Geral e Pública', wave: 2, questions: 10, percentage: '7.1%', description: 'Planejamento, Gestão por Processos e Governança' },
      { subject: 'Língua Inglesa', wave: 2, questions: 10, percentage: '7.1%', description: 'Interpretação de Textos e Vocabulário Técnico' }
    ],
    official_lessons: [
      { subject: 'Direito Tributário', lessonNumber: 1, title: 'Conceito de Tributo e Espécies Tributárias (CTN art. 3º e 5º)', keyTopics: 'Impostos, taxas, contribuições de melhoria, empréstimos compulsórios' },
      { subject: 'Direito Tributário', lessonNumber: 2, title: 'Competência Tributária e Limitações Constitucionais ao Poder de Tributar', keyTopics: 'Legalidade, anterioridade, irretroatividade, não confisco e imunidades' },
      { subject: 'Direito Previdenciário', lessonNumber: 1, title: 'Princípios Constitucionais da Seguridade Social (Art. 194 e 195)', keyTopics: 'Universalidade, uniformidade, seletividade, distributividade' },
      { subject: 'Língua Portuguesa', lessonNumber: 1, title: 'Interpretação Textual e Semântica Estilo FGV', keyTopics: 'Pressupostos, subentendidos, ironia, tipos de discurso e ambiguidade' },
      { subject: 'Fluência de Dados', lessonNumber: 1, title: 'Bancos de Dados Relacionais, Modelo Entidade-Relacionamento e SQL', keyTopics: 'SELECT, JOIN, GROUP BY, HAVING, subqueries e normalização' }
    ]
  },

  'ses_rj': {
    id: 'ses_rj',
    name: '🏥 SES-RJ / IASERJ 2026 (IBDO Projetos)',
    shortName: 'Saúde SES-RJ',
    role: 'Técnico de Enfermagem / Assistente Administrativo',
    totalQuestions: 70,
    optionCount: 4,
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
  }
};

export function getActiveCareerId() {
  return localStorage.getItem('concursa_active_exam') || 'atrfb';
}

export function setActiveCareerId(careerId) {
  if (!careerId) return;
  localStorage.setItem('concursa_active_exam', careerId);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('career-changed', { detail: { careerId } }));
  }
}

export function getCareerConfig(careerId = null) {
  const cid = careerId || getActiveCareerId();
  return CAREERS_CATALOG[cid] || CAREERS_CATALOG['atrfb'];
}

export function getCareerSubjects(careerId = null) {
  const cfg = getCareerConfig(careerId);
  return cfg.subjects || [];
}

export function getCareerBancas(careerId = null) {
  const cfg = getCareerConfig(careerId);
  return cfg.bancas || [{ id: 'FGV', name: 'FGV' }];
}

export function getCareerLessons(careerId = null) {
  const cfg = getCareerConfig(careerId);
  return cfg.official_lessons || [];
}

export function getCareerSubjectGrouping(careerCfg) {
  if (!careerCfg) return { wave1: [], wave2: [], group1Title: 'Disciplinas', group2Title: '', priorityButtonText: 'Selecionar', toastText: '' };

  const isAtrfb = careerCfg.id === 'atrfb';
  const isSesRj = careerCfg.id === 'ses_rj';
  const isRm2 = careerCfg.id === 'marinha_rm2';

  const wave1 = (careerCfg.subjects || []).filter(s => s.wave === 1);
  const wave2 = (careerCfg.subjects || []).filter(s => s.wave === 2);

  const wave1Questions = wave1.reduce((acc, s) => acc + (s.questions || 0), 0);
  const wave2Questions = wave2.reduce((acc, s) => acc + (s.questions || 0), 0);

  let group1Title = `🔥 Disciplinas Prioritárias (${careerCfg.name} • ${wave1Questions} questões)`;
  let group2Title = wave2.length > 0 ? `⏳ Disciplinas Complementares (${careerCfg.name} • ${wave2Questions} questões)` : '';
  let priorityButtonText = `⚡ Apenas Prioritárias`;
  let toastText = `Selecionadas as ${wave1.length} disciplinas prioritárias para ${careerCfg.name}`;
  let optgroup1 = `Disciplinas Prioritárias (${careerCfg.name})`;
  let optgroup2 = `Disciplinas Complementares (${careerCfg.name})`;

  if (isAtrfb) {
    group1Title = `🔥 Wave 1 — Disciplinas Prioritárias (${careerCfg.name} • ${wave1Questions} questões)`;
    group2Title = `⏳ Wave 2 — Fila & Complementares (${careerCfg.name} • ${wave2Questions} questões)`;
    priorityButtonText = `⚡ Apenas Wave 1`;
    toastText = `Selecionadas as 7 disciplinas da Wave 1 (Recomendado Receita Federal)`;
    optgroup1 = `Wave 1 — Prioridade (${careerCfg.name})`;
    optgroup2 = `Wave 2 — Fila & Complementares`;
  } else if (isSesRj) {
    group1Title = `🔥 Módulo Comum & Legislação do SUS (${careerCfg.name} • ${wave1Questions} questões)`;
    group2Title = `🏥 Conhecimentos Específicos do Cargo (${careerCfg.name} • ${wave2Questions} questões)`;
    priorityButtonText = `⚡ Apenas Módulo Comum / SUS`;
    toastText = `Selecionadas as disciplinas de Módulo Comum e SUS para ${careerCfg.name}`;
    optgroup1 = `Módulo Comum & SUS (${careerCfg.name})`;
    optgroup2 = `Conhecimentos Específicos do Cargo`;
  } else if (isRm2) {
    group1Title = `⚓ Conteúdo Programático Oficial (${careerCfg.name} • 50% cada)`;
    group2Title = ``;
    priorityButtonText = `⚡ Matérias Oficiais`;
    toastText = `Selecionadas todas as disciplinas oficiais para ${careerCfg.name}`;
    optgroup1 = `Conteúdo Oficial DEnsM (${careerCfg.name})`;
    optgroup2 = ``;
  }

  let defaultExamDate = '2026-12-31';
  if (isSesRj) defaultExamDate = '2026-05-17';
  else if (isRm2) defaultExamDate = '2026-04-12';
  else if (isAtrfb) defaultExamDate = '2026-11-15';

  return {
    wave1,
    wave2,
    wave1Questions,
    wave2Questions,
    group1Title,
    group2Title,
    priorityButtonText,
    toastText,
    optgroup1,
    optgroup2,
    defaultExamDate
  };
}
