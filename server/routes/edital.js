import express from 'express';
import db from '../database.js';
import { generateJSON } from '../gemini.js';
import logger from '../logger.js';
import { editalSystemInstruction, editalPromptTemplate, editalSchema } from '../prompts/edital.js';

const router = express.Router();

// Presets pré-configurados dos 4 pilares de concursos do ConcursaBot
const PRESETS = [
    {
        id: 'receita-atrfb-fgv',
        cargo: 'Analista Tributário da Receita Federal (ATRFB)',
        banca: 'FGV',
        descricao: 'Edital oficial mais recente com 140 questões (Wave 1: Tributário, Previdenciário, Português, Fluência de Dados, Constitucional, Leg. Tributária, Leg. Aduaneira).',
        editalText: `
CONHECIMENTOS BÁSICOS E ESPECÍFICOS - ANALISTA TRIBUTÁRIO DA RECEITA FEDERAL (ATRFB):

1. DIREITO TRIBUTÁRIO (16 questões - FGV):
Conceito e classificação dos tributos. Competência tributária. Limitações constitucionais ao poder de tributar (Princípios e Imunidades). Súmulas Vinculantes do STF e jurisprudência pacificada. Legislação tributária: vigência, aplicação, interpretação e integração. Fato gerador e obrigação tributária principal e acessória. Responsabilidade tributária (sucessão, terceiros e responsabilidade pessoal art. 135 do CTN). Crédito tributário: constituição, lançamento e modalidades. Suspensão da exigibilidade do crédito tributário (art. 151 CTN). Extinção do crédito tributário (art. 156 CTN, decadência e prescrição). Exclusão do crédito tributário (isenção e anistia). Garantias e privilégios do crédito tributário. Administração tributária: fiscalização, dívida ativa e certidões negativas. Reforma Tributária (EC 132/2023, IBS, CBS e Imposto Seletivo).

2. DIREITO PREVIDENCIÁRIO (16 questões - FGV):
Seguridade Social na CF/88: Saúde, Previdência e Assistência Social. Princípios e diretrizes constitucionais. Regime Geral de Previdência Social (RGPS - Lei 8.212/91 e Lei 8.213/91). Segurados obrigatórios e facultativos. Financiamento da Seguridade Social: contribuições dos segurados, empresas, empregadores domésticos e outras fontes. Salário de contribuição e base de cálculo. Arrecadação e recolhimento das contribuições. Isenções e imunidades para entidades beneficentes. Benefícios do RGPS: aposentadorias, auxílios, pensões e salário-maternidade. Manutenção e perda da qualidade de segurado (período de graça).

3. LÍNGUA PORTUGUESA (15 questões - FGV):
Compreensão e interpretação de textos de gêneros variados. Reconhecimento de tipos e gêneros textuais. Domínio da ortografia oficial e acentuação gráfica. Emprego do sinal indicativo de crase. Mecanismos de coesão textual e referenciação. Relações de coordenação e subordinação entre orações. Sintaxe da oração e do período. Concordância verbal e nominal (casos clássicos da FGV). Regência verbal e nominal. Emprego e colocação dos pronomes átonos. Pontuação e efeitos de sentido. Reescritura de frases e paráfrase. Variação linguística e adequação vocabular.

4. FLUÊNCIA EM DADOS (15 questões - FGV):
Conceitos fundamentais de banco de dados e modelagem relacional. Modelo Entidade-Relacionamento (MER) e normalização (1FN, 2FN, 3FN). Linguagem SQL (DDL, DML, DQL: SELECT, JOINs, GROUP BY, HAVING, subqueries e window functions). Noções de Data Warehouse, Data Lake, ETL e OLAP. Conceitos de Big Data (Volume, Variedade, Velocidade, Veracidade e Valor). Governança de Dados (DAMA-DMBOK) e Lei Geral de Proteção de Dados (LGPD). Visualização de dados e conceitos básicos de aprendizado de máquina.

5. DIREITO CONSTITUCIONAL (14 questões - FGV):
Princípios fundamentais da CF/88. Direitos e garantias fundamentais: direitos e deveres individuais e coletivos (art. 5º), direitos sociais, nacionalidade e direitos políticos. Remédios constitucionais (Habeas Corpus, Mandado de Segurança, Mandado de Injunção, Habeas Data e Ação Popular). Organização do Estado: União, Estados, DF e Municípios. Repartição de competências legislativas e materiais. Administração Pública (arts. 37 a 41). Organização dos Poderes: Poder Legislativo (processo legislativo), Poder Executivo e Poder Judiciário (STF, STJ e Tribunais Federais). Funções essenciais à Justiça. Controle de Constitucionalidade (difuso e concentrado - ADI, ADC, ADO, ADPF).

6. LEGISLAÇÃO TRIBUTÁRIA FEDERAL (14 questões - FGV):
Imposto sobre a Renda e Proventos de Qualquer Natureza (IRPF e IRPJ): fato gerador, contribuintes, responsáveis, base de cálculo e regimes de apuração (Lucro Real, Presumido e Arbitrado). Imposto sobre Produtos Industrializados (IPI): fato gerador, base de cálculo, não cumulatividade e incentivos fiscais. Contribuição para o PIS/PASEP e COFINS (regimes cumulativo e não cumulativo). Imposto sobre Operações Financeiras (IOF). Imposto sobre a Propriedade Territorial Rural (ITR). Simples Nacional (LC 123/2006).

7. LEGISLAÇÃO ADUANEIRA (14 questões - FGV):
Jurisdição e controle aduaneiro. Território aduaneiro (zona primária e secundária). Administração Aduaneira. Imposto de Importação (II) e Imposto de Exportação (IE): fato gerador, base de cálculo, regimes e contribuintes. Procedimento de importação e exportação (Despacho Aduaneiro, declaração e conferência aduaneira). Regimes Aduaneiros Especiais (Trânsito Aduaneiro, Admissão Temporária, Drawback, Entreposto Aduaneiro e Recof). Infrações e penalidades aduaneiras (Pena de Perdimento de bens, veículos e moeda). Sistema Integrado de Comércio Exterior (SISCOMEX) e Portal Único Siscomex.
        `
    },
    {
        id: 'ses-rj-saude',
        cargo: 'SES-RJ / IASERJ 2026 (Téc. Enfermagem & Assist. Administrativo)',
        banca: 'IBDO',
        descricao: 'Edital oficial de 2026 da Secretaria de Estado de Saúde do RJ com 70 questões objetivas (4 opções A-D) e Redação, com ênfase em SUS (Leis 8.080/8.142), Português e Específicas.',
        editalText: `
SECRETARIA DE ESTADO DE SAÚDE DO RIO DE JANEIRO (SES-RJ / IASERJ 2026 - BANCA IBDO):

1. LEGISLAÇÃO DO SUS & SAÚDE PÚBLICA (15 questões - IBDO):
Evolução histórica do SUS e Reforma Sanitária. Princípios doutrinários e organizativos (CF/88, Arts. 196 a 200). Lei Orgânica da Saúde (Lei Federal nº 8.080/1990 e suas atualizações). Participação social e transferências intergovernamentais de recursos (Lei Federal nº 8.142/1990). Organização e planejamento da rede de atenção (Decreto nº 7.508/2011: Região de Saúde, COAP, RENAME, RENASES, Portas de Entrada). Financiamento da Saúde e LC 141/2012. Política Nacional de Atenção Básica (PNAB). Política Nacional de Humanização (PNH). Vigilância em Saúde no Estado do RJ e notificação compulsória.

2. LÍNGUA PORTUGUESA (15 questões - IBDO):
Compreensão e interpretação de textos informativos e dissertativos. Ortografia oficial e acentuação gráfica (Novo Acordo). Classes de palavras: substantivo, adjetivo, pronomes, verbos (conjugação e vozes) e conectivos. Sintaxe da oração e do período: termos essenciais e orações coordenadas/subordinadas. Concordância nominal e verbal estrita. Regência nominal, verbal e emprego do sinal indicativo de crase. Pontuação expressiva e gramatical.

3. CONHECIMENTOS ESPECÍFICOS — TÉCNICO DE ENFERMAGEM (20 questões):
Fundamentos de enfermagem, sinais vitais e higiene do paciente. Farmacologia aplicada, cálculo de dosagens e vias de administração. Programa Nacional de Imunizações (PNI) e cadeia de frio. Biossegurança, precauções padrão e controle de infecção hospitalar (CCIH). Urgência e emergência: suporte básico de vida (SBV/AHA) e classificação de Manchester. Saúde da mulher, da criança e do idoso. Ética e Código de Deontologia de Enfermagem (COFEN).

4. CONHECIMENTOS ESPECÍFICOS — ASSISTENTE ADMINISTRATIVO (20 questões):
Estrutura organizacional da SES-RJ e IASERJ. Regime Jurídico dos Servidores Públicos Civis do RJ (Decreto-Lei nº 220/1975 e Decreto nº 2.479/1979). Gestão de documentos, protocolo, tramitação processual e prontuários médicos. Atendimento ao cidadão e ética no serviço público. Redação oficial de documentos públicos. Noções de licitações e contratos na saúde (Lei Federal nº 14.133/2021). LAI (Lei 12.527/11) e LGPD (Lei 13.709/18).
        `
    },
    {
        id: 'marinha-rm2-pracas',
        cargo: 'Cabo / Sargento RM2 (Marinha do Brasil - SMV)',
        banca: 'DEnsM',
        descricao: 'Edital oficial do Serviço Militar Voluntário da Marinha do Brasil (50 questões: 25 Português + 25 Formação Militar-Naval).',
        editalText: `
SERVIÇO MILITAR VOLUNTÁRIO DE PRAÇAS (SMV-PRAÇAS / RM2) - MARINHA DO BRASIL:

1. LÍNGUA PORTUGUESA (25 questões):
Compreensão e interpretação de textos de gêneros variados. Denotação e conotação. Figuras de linguagem. Ortografia oficial e acentuação gráfica. Emprego do sinal indicativo de crase. Morfologia: estrutura e formação de palavras, classes de palavras e seus empregos. Sintaxe da oração e do período (coordenação e subordinação). Concordância nominal e verbal. Regência nominal e verbal. Pontuação. Colocação pronominal (próclise, mesóclise e ênclise). Reescrita de frases.

2. FORMAÇÃO MILITAR-NAVAL (25 questões):
ORGANIZAÇÃO BÁSICA DA MARINHA (OBM): Missão e tarefas da Marinha do Brasil. Estrutura organizacional e cadeia de comando.
ESTATUTO DOS MILITARES (Lei nº 6.880/1980): Hierarquia militar e disciplina. Postos e graduações. Valor, ética e deveres militares. Violação das obrigações e dos deveres. Direitos e prerrogativas dos militares.
REGULAMENTO DISCIPLINAR PARA A MARINHA (RDM): Generalidades, esfera de ação e competência para aplicação. Classificação das contravenções disciplinares (Leves, Médias e Graves). Penas disciplinares e recursos.
TRADIÇÕES NAVAIS: O Navio: características, divisões principais e partes da embarcação (Proa, Popa, Boreste, Bombordo). Cerimonial a bordo (saudação ao Pavilhão Nacional às 08:00h e pôr do sol). Uniformes, toques e sinais. Expressões e costumes marinheiros.
HISTÓRIA MARÍTIMA DO BRASIL: A Batalha Naval do Riachuelo (11 de junho de 1865). Vultos históricos da Marinha (Almirante Barroso, Almirante Tamandaré).
RELAÇÕES HUMANAS E LIDERANÇA (EMA-137): Doutrina de liderança da Marinha. Aspectos fundamentais da liderança (Chefia vs Liderança). Estilos de liderança (Autocrática, Democrática, Liberal, Situacional e Transformacional). Fatores da liderança.
        `
    },
    {
        id: 'adm-tribunais-fgv',
        cargo: 'Analista / Técnico Administrativo (Tribunais & Órgãos Federais)',
        banca: 'FGV',
        descricao: 'Tronco comum administrativo para TJs, TRFs, TRTs e MPU com foco na Nova Lei de Licitações (14.133) e Improbidade (14.230).',
        editalText: `
CARREIRAS ADMINISTRATIVAS & TRIBUNAIS (TRF / TJ / MPU):

1. DIREITO ADMINISTRATIVO:
Estado, governo e administração pública. Princípios constitucionais expressos (LIMPE) e implícitos. Organização administrativa (Administração direta e indireta: autarquias, fundações, empresas públicas e SEM). Atos administrativos: conceitos, requisitos/elementos, atributos, espécies, anulação e revogação. Poderes administrativos (vinculado, discricionário, hierárquico, disciplinar, regulamentar e de polícia). Nova Lei de Licitações e Contratos Administrativos (Lei Federal nº 14.133/2021): modalidades (pregão, concorrência, concurso, leilão e diálogo competitivo), critérios de julgamento, dispensa e inexigibilidade, execução e rescisão contratual. Nova Lei de Improbidade Administrativa (Lei Federal nº 8.429/1992 com alterações da Lei nº 14.230/2021: dolo específico, espécies de atos). Processo Administrativo Federal (Lei nº 9.784/1999). Regime Jurídico Único dos Servidores Civis da União (Lei nº 8.112/1990). Responsabilidade civil do Estado (Art. 37, § 6º da CF/88).

2. DIREITO CONSTITUCIONAL:
Direitos e garantias fundamentais: direitos individuais e coletivos (Art. 5º), direitos sociais, nacionalidade e direitos políticos. Remédios constitucionais. Organização do Estado e repartição de competências. Administração Pública (Arts. 37 a 41). Organização dos Poderes: Poder Legislativo, Poder Executivo e Poder Judiciário (Estrutura dos Tribunais Superiores, Federais e Estaduais). Funções essenciais à Justiça (MPU, Defensoria e Advocacia Pública).

3. ADMINISTRAÇÃO GERAL E PÚBLICA:
Funções da administração: planejamento, organização, direção e controle. Planejamento estratégico (Missão, Visão, Valores, Análise SWOT e Balanced Scorecard - BSC). Gestão por processos e gestão de projetos (PMBOK). Gestão de pessoas (Avaliação de desempenho, gestão por competências e liderança). Evolução da administração pública: Patrimonialismo, Burocracia e Gerencialismo (Nova Gestão Pública). Transparência, Lei de Acesso à Informação (LAI - Lei nº 12.527/2011) e Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        `
    },
    {
        id: 'bb-comercial-cesgranrio',
        cargo: 'Escriturário • Agente Comercial (Banco do Brasil)',
        banca: 'CESGRANRIO',
        descricao: 'Edital oficial do Banco do Brasil com 70 questões: Vendas e Negociação (15q), Informática (15q), Conhecimentos Bancários (10q), Matemática Financeira e Redação.',
        editalText: `
BANCO DO BRASIL - ESCRITURÁRIO / AGENTE COMERCIAL (BANCA CESGRANRIO):

1. CONHECIMENTOS BANCÁRIOS (10 questões - Peso 1.5):
Estrutura do Sistema Financeiro Nacional (SFN): Conselho Monetário Nacional (CMN), Banco Central do Brasil (BACEN), Comissão de Valores Mobiliários (CVM) e Conselho de Recursos do SFN. Instituições do SFN: Bancos múltiplos, comerciais, de investimento, cooperativas de crédito e corretoras/distribuidoras (CTVM/DTVM). Operações bancárias de captação (Depósito à vista, depósitos a prazo CDB/RDB, Poupança, LCI e LCA) e de aplicação (crédito pessoal, consignado, cheque especial, capital de giro). Fundo Garantidor de Créditos (FGC): regras, limites e produtos cobertos. Mercado de Câmbio: taxas de câmbio, operações e regulamentação do BACEN. Inovações no SFN: PIX, Open Finance, Moedas Digitais (Drex), Fintechs e Bancos Digitais. Prevenção à Lavagem de Dinheiro (Lei nº 9.613/1998, COAF, fases de colocação, ocultação e integração). Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e Sigilo Bancário (Lei Complementar nº 105/2001).

2. VENDAS E NEGOCIAÇÃO (15 questões - Peso 1.5):
Técnicas de vendas e abordagem consultiva no setor bancário. Metodologia SPIN Selling (Situação, Problema, Implicação e Necessidade de Solução). Prospecção de clientes, qualificação de leads e gestão de relacionamento (CRM). Manejo de objeções e técnicas de fechamento de contratos bancários. Comportamento do consumidor e fatores de decisão de compra. Gatilhos mentais aplicados à persuasão e vendas éticas. Código de Defesa do Consumidor (Lei nº 8.078/1990 e Súmula 297/STJ sobre instituições financeiras). Resolução CMN de Ouvidoria Bancária e Canais de Atendimento.

3. CONHECIMENTOS DE INFORMÁTICA (15 questões - Peso 1.5):
Sistemas operacionais Windows 10/11 e Linux (conceitos básicos). Ferramentas de escritório: Pacote Microsoft Office (Word, Excel com fórmulas/gráficos, PowerPoint) e Microsoft 365. Conceitos de redes de computadores, Internet, Intranet e navegadores web (Edge, Chrome). Armazenamento em nuvem (OneDrive, Google Drive). Segurança da Informação: princípios básicos (Confidencialidade, Integridade, Disponibilidade, Autenticidade), ameaças (Vírus, Worms, Trojan, Ransomware, Phishing, Engenharia Social) e mecanismos de proteção (Firewall, Antivírus, Autenticação de dois fatores - 2FA).

4. MATEMÁTICA FINANCEIRA (5 questões - Peso 1.5):
Conceitos fundamentais: juros simples e compostos. Taxas de juros: nominal, efetiva, proporcional e equivalente. Descontos: simples e composto (comercial e racional). Sistemas de Amortização de Empréstimos: Sistema de Amortização Constante (SAC) e Sistema Francês de Amortização (Tabela Price).

5. LÍNGUA PORTUGUESA (10 questões - Peso 1.5):
Compreensão e interpretação de textos informativos e dissertativos. Reconhecimento de tipos e gêneros textuais. Domínio da ortografia oficial e acentuação gráfica. Emprego do sinal indicativo de crase. Sintaxe da oração e do período (coordenação e subordinação). Concordância nominal e verbal no padrão Cesgranrio. Regência nominal e verbal. Pontuação. Emprego dos pronomes e colocação pronominal.

6. ATUALIDADES DO MERCADO FINANCEIRO & INGLÊS (10 questões - Peso 1.0):
Ecossistema de Fintechs, Open Finance, Meios de Pagamento Eletrônicos, Moedas Digitais e Criptoativos, Sistema de Pagamentos Brasileiro (SPB). Sustentabilidade e práticas ESG nas instituições financeiras. Compreensão de textos em Língua Inglesa com vocabulário de negócios e finanças.
        `
    },
    {
        id: 'bb-ti-cesgranrio',
        cargo: 'Escriturário • Agente de Tecnologia (TI - Banco do Brasil)',
        banca: 'CESGRANRIO',
        descricao: 'Edital de TI do Banco do Brasil com 70 questões: Tecnologia da Informação (35q - 52.5% da prova), Probabilidade/Estatística (5q), Português e Bancários.',
        editalText: `
BANCO DO BRASIL - ESCRITURÁRIO / AGENTE DE TECNOLOGIA (TI - BANCA CESGRANRIO):

1. TECNOLOGIA DA INFORMAÇÃO (35 questões - Peso 1.5 = 52.5 pontos):
BANCO DE DADOS: Modelagem relacional e conceitual (MER), normalização (1FN, 2FN, 3FN). Linguagem SQL avançada (DDL, DML, DQL: SELECT, JOINs, GROUP BY, HAVING, subqueries, CTEs, Window Functions e índices). Bancos de Dados NoSQL: conceitos, Teorema CAP, modelos chave-valor (Redis), colunar (Cassandra), documentos (MongoDB) e grafos (Neo4j).
LINGUAGENS DE PROGRAMAÇÃO E FRAMEWORKS: Linguagem Python para análise de dados e backend: tipos de dados, estruturas de controle, funções, List Comprehensions, bibliotecas Pandas e NumPy. Linguagem Java e TypeScript/JavaScript: Programação Orientada a Objetos (POO: classes, objetos, encapsulamento, herança, polimorfismo, interfaces), tratamento de exceções, Generics e Streams API.
ARQUITETURA DE SOFTWARE E WEB: Arquitetura de microsserviços vs monólito. APIs RESTful: princípios arquiteturais, verbos HTTP (GET, POST, PUT, PATCH, DELETE), códigos de status HTTP (200, 201, 400, 401, 403, 404, 500), formato JSON e documentação Swagger/OpenAPI. Mensageria assíncrona: conceitos de mensageria com Apache Kafka e RabbitMQ.
DEVOPS E INFRAESTRUTURA: Conteinerização com Docker (Dockerfile, imagens, contêineres, volumes, redes e Compose). Orquestração básica com Kubernetes. Controle de versão com Git e GitFlow. Conceitos de integração e entrega contínua (CI/CD pipelines). Computação em Nuvem (Cloud Computing: IaaS, PaaS, SaaS, nuvem pública, privada e híbrida).
SEGURANÇA DA INFORMAÇÃO E LGPD: OWASP Top 10 vulnerabilidades web (SQL Injection, XSS, CSRF, quebra de controle de acesso). Criptografia simétrica (AES) e assimétrica (RSA, ECC), funções hash (SHA-256) e assinaturas digitais. Autenticação e Autorização: OAuth 2.0, OpenID Connect e JSON Web Tokens (JWT). Diretrizes de privacidade da LGPD aplicadas a sistemas de TI.
CIÊNCIA DE DADOS E APRENDIZADO DE MÁQUINA (ML): Conceitos fundamentais de aprendizado supervisionado (Regressão Linear, Regressão Logística, Árvores de Decisão, Random Forest) e não supervisionado (K-Means). Métricas de avaliação de modelos: Acurácia, Precisão, Recall, F1-Score, Matriz de Confusão e Curva ROC-AUC.

2. PROBABILIDADE E ESTATÍSTICA (5 questões - Peso 1.5):
Estatística Descritiva: média, mediana, moda, variância, desvio-padrão e coeficiente de variação. Teoria da Probabilidade: eventos mutuamente exclusivos, eventos independentes, probabilidade condicional e Teorema de Bayes. Distribuições de probabilidade discretas (Binomial e Poisson) e contínuas (Distribuição Normal).

3. CONHECIMENTOS BANCÁRIOS (5 questões - Peso 1.5):
Estrutura do SFN (CMN, BACEN, CVM). PIX, Open Finance, Moedas Digitais do BACEN (Drex). Prevenção à Lavagem de Dinheiro (Lei nº 9.613/1998 e COAF).

4. LÍNGUA PORTUGUESA & MATEMÁTICA GERAL (15 questões - Peso 1.5):
Interpretação e compreensão de textos. Gramática, regência, concordância e pontuação padrão Cesgranrio. Matemática básica e raciocínio lógico: funções, porcentagem, análise combinatória e matrizes.

5. ATUALIDADES DO MERCADO FINANCEIRO & INGLÊS TÉCNICO (10 questões - Peso 1.0):
Inovações do mercado financeiro e fintechs. Compreensão de textos técnicos de TI e computação em Língua Inglesa.
        `
    }
];

// GET /presets - Get available official presets
router.get('/presets', (req, res) => {
    res.json({ presets: PRESETS.map(p => ({ id: p.id, cargo: p.cargo, banca: p.banca, descricao: p.descricao })) });
});

// GET /presets/:id - Get specific preset
router.get('/presets/:id', (req, res) => {
    const preset = PRESETS.find(p => p.id === req.params.id);
    if (!preset) return res.status(404).json({ error: 'Preset não encontrado' });
    res.json(preset);
});

// POST /analyze - Analyze edital with AI Predictor (Tendência de Banca)
router.post('/analyze', async (req, res) => {
    let { cargo, banca, editalText, presetId } = req.body;

    if (presetId && !editalText) {
        const preset = PRESETS.find(p => p.id === presetId);
        if (preset) {
            cargo = preset.cargo;
            banca = preset.banca;
            editalText = preset.editalText;
        }
    }

    if (!editalText || !editalText.trim()) {
        return res.status(400).json({ error: 'Texto do edital ou conteúdo programático é obrigatório.' });
    }

    const targetCargo = cargo || 'Analista Tributário da Receita Federal (ATRFB)';
    const targetBanca = banca || 'FGV';

    try {
        const prompt = editalPromptTemplate(targetCargo, targetBanca, editalText);
        const analysisData = await generateJSON(prompt, editalSystemInstruction, editalSchema);

        const stmt = db.prepare('INSERT INTO edital_analyses (cargo, edital_text, analysis) VALUES (?, ?, ?)');
        const info = stmt.run(`${targetCargo} [${targetBanca}]`, editalText, JSON.stringify(analysisData));

        res.json({
            success: true,
            id: info.lastInsertRowid,
            cargo: targetCargo,
            banca: targetBanca,
            analysis: analysisData
        });
    } catch (error) {
        logger.error('EDITAL', `Erro ao analisar edital (${targetCargo} [${targetBanca}]): ${error.message}`, error.stack);
        res.status(500).json({ error: 'Falha ao analisar edital: ' + error.message });
    }
});

// GET / - List saved analyses
router.get('/', (req, res) => {
    try {
        const stmt = db.prepare('SELECT id, cargo, created_at FROM edital_analyses ORDER BY created_at DESC');
        res.json(stmt.all());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Matriz Estratégica 80/20 (Raio-X de Incidência da Banca)
const RAIOX_DATA = {
    bb_comercial: {
        cargo: 'Banco do Brasil • Escriturário (Agente Comercial)',
        banca: 'Cesgranrio',
        corteMedio: '74% a 82.5%',
        topicosOuro: [
            { disciplina: 'Conhecimentos Bancários', peso: 28, questoes: 15, incidencia: 'Altíssima', dica: 'SFN, Resoluções CMN, Copom, Taxa Selic, PIX, Lavagem de Dinheiro (Lei 9.613).' },
            { disciplina: 'Vendas e Negociação', peso: 28, questoes: 15, incidencia: 'Altíssima', dica: 'Técnicas de vendas, Ética e Conduta, CDC (Lei 8.078), Ouvidoria e Atendimento inclusivo.' },
            { disciplina: 'Língua Portuguesa', peso: 15, questoes: 10, incidencia: 'Alta', dica: 'Interpretação textual, Concordância verbal/nominal, Crase e Regência da Cesgranrio.' },
            { disciplina: 'Matemática Financeira', peso: 10, questoes: 5, incidencia: 'Média/Alta', dica: 'Juros simples e compostos, Taxas proporcionais/equivalentes, Sistemas de Amortização (SAC e Price).' },
            { disciplina: 'Conhecimentos de Informática', peso: 10, questoes: 15, incidencia: 'Média/Alta', dica: 'Segurança da informação (Phishing/Ransomware), Nuvem, Excel/Calc e Atalhos do Windows.' },
            { disciplina: 'Atualidades do Mercado Financeiro', peso: 5, questoes: 5, incidencia: 'Média', dica: 'Open Finance, Fintechs, Moedas digitais (Drex) e Meios de pagamento modernos.' },
            { disciplina: 'Matemática Básica', peso: 4, questoes: 5, incidencia: 'Média', dica: 'Regra de três, Porcentagem, Probabilidade e Funções.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Apenas 2 disciplinas (Conhecimentos Bancários e Vendas & Negociação) concentram 56% de TODA a pontuação da prova objetiva!'
    },
    bb_ti: {
        cargo: 'Banco do Brasil • Escriturário (Agente de Tecnologia)',
        banca: 'Cesgranrio',
        corteMedio: '62% a 70%',
        topicosOuro: [
            { disciplina: 'Tecnologia da Informação', peso: 50, questoes: 35, incidencia: 'Crítica / Decisiva', dica: 'Bancos de Dados SQL/NoSQL, Python 3.10+, Java, REST APIs, Git, DevOps, Docker, Teorema CAP e Microsserviços.' },
            { disciplina: 'Conhecimentos Bancários', peso: 10, questoes: 10, incidencia: 'Alta', dica: 'Estrutura do SFN, Bacen, CVM, Garantias bancárias e Open Banking.' },
            { disciplina: 'Língua Portuguesa', peso: 10, questoes: 10, incidencia: 'Média/Alta', dica: 'Compreensão de texto, Coesão e Pontuação Cesgranrio.' },
            { disciplina: 'Probabilidade e Estatística', peso: 10, questoes: 5, incidencia: 'Alta', dica: 'Medidas de dispersão, Distribuição Normal, Regressão linear e Métricas de ML (Acurácia/F1-Score).' },
            { disciplina: 'Matemática', peso: 10, questoes: 5, incidencia: 'Média', dica: 'Matrizes, Análise combinatória e Probabilidade.' },
            { disciplina: 'Língua Inglesa', peso: 10, questoes: 5, incidencia: 'Média', dica: 'Vocabulário técnico de computação e leitura rápida de documentação.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): A prova de Tecnologia da Informação vale metade (50%) dos pontos da prova. Dominar SQL, Python e Arquitetura garante sua vaga!'
    },
    atrfb: {
        cargo: 'Receita Federal • Analista Tributário (ATRFB)',
        banca: 'FGV',
        corteMedio: '65% a 75%',
        topicosOuro: [
            { disciplina: 'Direito Tributário', peso: 18, questoes: 16, incidencia: 'Altíssima', dica: 'CTN arts. 135/151/156, Imunidades, Reforma Tributária (IBS/CBS) e Decadência/Prescrição.' },
            { disciplina: 'Legislação Tributária Federal', peso: 16, questoes: 14, incidencia: 'Altíssima', dica: 'IRPF/IRPJ (Lucro Real/Presumido), PIS/COFINS e Simples Nacional.' },
            { disciplina: 'Legislação Aduaneira', peso: 16, questoes: 14, incidencia: 'Altíssima', dica: 'Regimes Especiais (Drawback/Entreposto), Despacho Aduaneiro e Pena de Perdimento.' },
            { disciplina: 'Direito Previdenciário', peso: 14, questoes: 16, incidencia: 'Alta', dica: 'Financiamento da Seguridade, Salário de Contribuição e Benefícios RGPS.' },
            { disciplina: 'Fluência em Dados', peso: 14, questoes: 15, incidencia: 'Alta', dica: 'SQL avançado (JOINs/Window functions), ETL, Data Warehouse e LGPD.' },
            { disciplina: 'Língua Portuguesa', peso: 12, questoes: 15, incidencia: 'Decisiva', dica: 'Interpretação e estilo semântico da FGV, reescritura e paralelismo.' },
            { disciplina: 'Direito Constitucional & Adm.', peso: 10, questoes: 14, incidencia: 'Média', dica: 'Art. 5º, Processo Legislativo, Art. 37 da CF e Lei 8.112/90.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Tributário + Legislação Tributária + Aduaneira somam 50% da prova e definem a classificação para a 2ª fase.'
    },
    ses_rj: {
        cargo: 'SES-RJ / IASERJ 2026 • Saúde & Administrativo',
        banca: 'IBDO',
        corteMedio: '68% a 76%',
        topicosOuro: [
            { disciplina: 'Legislação do SUS & Saúde Pública', peso: 40, questoes: 15, incidencia: 'Altíssima', dica: 'Lei 8.080/90, Lei 8.142/90, Decreto 7.508/11, PNAB, Financiamento e Humanização.' },
            { disciplina: 'Conhecimentos Específicos do Cargo', peso: 40, questoes: 20, incidencia: 'Altíssima', dica: 'Técnico de Enfermagem (Imunizações/SBV/Biossegurança) ou Assistente Adm (Regime Jurídico RJ e Lei 14.133).' },
            { disciplina: 'Língua Portuguesa', peso: 20, questoes: 15, incidencia: 'Alta', dica: 'Gramática normativa direta, Concordância, Regência e Crase da banca IBDO.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Dominar os 10 artigos-chave da Lei 8.080 e os conceitos do Decreto 7.508 garante praticamente toda a prova de SUS!'
    },
    marinha_rm2: {
        cargo: 'Marinha do Brasil • Oficial e Praça RM2 (SMV)',
        banca: 'DEnsM',
        corteMedio: '76% a 88%',
        topicosOuro: [
            { disciplina: 'Língua Portuguesa', peso: 50, questoes: 25, incidencia: 'Crítica (50% da Prova)', dica: 'Interpretação textual, Tipologia, Crase, Regência, Sintaxe do Período e Pontuação.' },
            { disciplina: 'Legislação Militar-Naval', peso: 30, questoes: 15, incidencia: 'Altíssima', dica: 'Estatuto dos Militares (Lei 6.880/80), Lei do Serviço Militar (Lei 4.375) e Hierarquia/Disciplina.' },
            { disciplina: 'História e Tradições Navais', peso: 20, questoes: 10, incidencia: 'Média/Alta', dica: 'Batalha do Riachuelo, Almirante Tamandaré, Segunda Guerra Mundial e Poder Marítimo.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Em RM2, Português decide 50% dos pontos da prova. Gabaritar as 25 questões de Português coloca você no topo dos aprovados.'
    },
    transpetro_adm: {
        cargo: 'Transpetro • Técnico de Administração e Controle Jr',
        banca: 'Cesgranrio',
        corteMedio: '72% a 80%',
        topicosOuro: [
            { disciplina: 'Noções de Administração', peso: 30, questoes: 20, incidencia: 'Altíssima', dica: 'Funções da Administração (PODC), Gestão por Processos, Ciclo PDCA, Ferramentas da Qualidade e Atendimento.' },
            { disciplina: 'Legislação e Licitações para Estatais (Lei 13.303/16)', peso: 25, questoes: 15, incidencia: 'Altíssima', dica: 'Lei das Estatais nº 13.303/16, Regulamento Interno Transpetro, Dispensa, Inexigibilidade e Contratos.' },
            { disciplina: 'Língua Portuguesa', peso: 15, questoes: 10, incidencia: 'Alta', dica: 'Interpretação de textos, Sintaxe, Concordância, Regência e Crase da Fundação Cesgranrio.' },
            { disciplina: 'Matemática', peso: 12, questoes: 10, incidencia: 'Média/Alta', dica: 'Porcentagem, Razão/Proporção, Regra de Três, Médias e Raciocínio Lógico-Matemático.' },
            { disciplina: 'Técnicas de Arquivo e Documentação', peso: 10, questoes: 8, incidencia: 'Média', dica: 'Teoria das Três Idades, Métodos de arquivamento, Tabela de Temporalidade e Rotinas de Protocolo.' },
            { disciplina: 'Ética e Conduta no Setor Público', peso: 8, questoes: 7, incidencia: 'Média', dica: 'Código de Conduta Ética Petrobras/Transpetro, Conflito de Interesses e Lei Anticorrupção (Lei 12.846).' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Administração Geral + Lei das Estatais (13.303/16) concentram mais de 55% de toda a prova de Técnico de Administração!'
    },
    transpetro_log: {
        cargo: 'Transpetro • Técnico de Suprimento e Logística Jr',
        banca: 'Cesgranrio',
        corteMedio: '70% a 78%',
        topicosOuro: [
            { disciplina: 'Gestão de Estoques e Almoxarifado', peso: 30, questoes: 20, incidencia: 'Altíssima', dica: 'Curva ABC, Ponto de Pedido (PP = C x TR + EM), Estoque de Segurança, Lote Econômico de Compras (LEC) e Inventários.' },
            { disciplina: 'Transporte, Movimentação e Modais Logísticos', peso: 25, questoes: 15, incidencia: 'Altíssima', dica: 'Transporte dutoviário de petróleo e gás, cabotagem marítima, modais rodoviário/ferroviário e armazenagem.' },
            { disciplina: 'Língua Portuguesa', peso: 15, questoes: 10, incidencia: 'Alta', dica: 'Interpretação textual e gramática normativa padrão Cesgranrio.' },
            { disciplina: 'Matemática', peso: 12, questoes: 10, incidencia: 'Média/Alta', dica: 'Cálculos de dimensionamento, proporções, taxas percentuais e médias ponderadas.' },
            { disciplina: 'Gestão de Compras e Fornecedores', peso: 10, questoes: 8, incidencia: 'Média', dica: 'Ciclo de compras, qualificação/homologação de fornecedores, SLA e Supply Chain Management (SCM).' },
            { disciplina: 'Legislação de Contratações em Estatais (Lei 13.303/16)', peso: 8, questoes: 7, incidencia: 'Média', dica: 'Regras da Lei 13.303/16 para aquisição de bens, materiais e prestação de serviços na Transpetro.' }
        ],
        paretoInsight: '🎯 Regra de Ouro (80/20): Gestão de Estoques e Modais de Transporte/Armazenagem respondem por mais de 55% da pontuação total!'
    }
};

// GET /raiox - Retorna análise de incidência e Pareto 80/20 por carreira
router.get('/raiox', (req, res) => {
    const careerId = req.query.careerId || req.headers['x-exam-id'] || 'bb_comercial';
    const data = RAIOX_DATA[careerId] || RAIOX_DATA.bb_comercial;
    res.json({
        success: true,
        careerId,
        raiox: data
    });
});

// GET /:id - Get specific analysis
router.get('/:id', (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM edital_analyses WHERE id = ?');
        const analysis = stmt.get(req.params.id);
        if (!analysis) return res.status(404).json({ error: 'Análise não encontrada' });
        
        analysis.analysis = JSON.parse(analysis.analysis);
        res.json(analysis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
