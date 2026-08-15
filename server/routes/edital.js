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
