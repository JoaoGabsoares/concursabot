/**
 * UNIVERSAL SMART PDF PARSER & HEURISTICS ENGINE
 * Suporta qualquer formato de PDF (Estratégia, Gran Cursos, Direção, Doutrina, Vade Mecum, Livros, Resumos)
 */

// Heurísticas de detecção de Sumário / Índice
const TOC_PATTERNS = [
  /sum[aá]rio/i,
  /[íi]ndice/i,
  /conte[uú]do\s+program[aá]tico/i,
  /plano\s+de\s+estudos/i,
  /table\s+of\s+contents/i,
  /estrutura\s+do\s+curso/i
];

// Heurísticas de fronteira entre Teoria e Questões / Exercícios
const EXERCISE_SECTION_PATTERNS = [
  /(?:^|\n)\s*(?:quest[oõ]es\s+comentadas|quest[oõ]es\s+da\s+banca|exerc[íi]cios\s+de\s+fixa[çc][aã]o|exerc[íi]cios\s+propostos|bateria\s+de\s+quest[oõ]es|quest[oõ]es\s+de\s+provas|gabarito\s+comentado|lista\s+de\s+quest[oõ]es|quest[oõ]es\s+in[ée]ditas)/i,
  /(?:^|\n)\s*(?:quest[aã]o\s*0?1\b|1\.\s*\((?:fgv|cebraspe|cespe|vunesp|fcc|ibfc|cesgranrio|quadrix)\b)/i
];

// Heurísticas de Gabarito Puro
const GABARITO_PATTERNS = [
  /(?:^|\n)\s*(?:gabarito\s+oficial|gabarito\s+sem\s+coment[aá]rios|tabela\s+de\s+respostas|folha\s+de\s+respostas)/i
];

// Padrões de limpeza de ruídos (Headers, Footers, Marcas d'água de compra)
const NOISE_PATTERNS = [
  /o\s+uso\s+deste\s+material\s+[ée]\s+exclusivo\s+de[^\n]+/gi,
  /licenciado\s+para[^\n]+/gi,
  /proibida\s+a\s+reprodu[çc][aã]o[^\n]+/gi,
  /www\.[a-z0-9-]+\.com\.br[^\n]*/gi,
  /p[aá]gina\s+\d+\s+de\s+\d+/gi,
  /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g, // CPF
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g // Email
];

/**
 * Sanitiza o texto bruto do PDF removendo ruídos repetitivos de cabeçalho e rodapé
 */
export function sanitizePdfText(rawText = '') {
  if (!rawText) return '';
  let cleaned = rawText;
  for (const pattern of NOISE_PATTERNS) {
    cleaned = cleaned.replace(pattern, '');
  }
  // Normaliza quebras de linha múltiplas
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  return cleaned.trim();
}

/**
 * Detecta a fronteira exata onde a Teoria termina e os Exercícios começam
 */
export function detectContentBoundaries(rawText = '', totalPages = 1) {
  const sanitized = sanitizePdfText(rawText);
  let splitIndex = -1;
  let detectedPattern = null;

  for (const pattern of EXERCISE_SECTION_PATTERNS) {
    const match = sanitized.match(pattern);
    if (match && match.index !== undefined) {
      if (splitIndex === -1 || match.index < splitIndex) {
        splitIndex = match.index;
        detectedPattern = match[0].trim();
      }
    }
  }

  // Se detectou a transição para questões
  if (splitIndex > 0) {
    const theoryText = sanitized.substring(0, splitIndex).trim();
    const exercisesText = sanitized.substring(splitIndex).trim();
    const theoryRatio = theoryText.length / (sanitized.length || 1);
    const estimatedTheoryPages = Math.max(1, Math.round(totalPages * theoryRatio));
    const estimatedExercisePages = Math.max(0, totalPages - estimatedTheoryPages);

    return {
      hasExercises: true,
      theoryText,
      exercisesText,
      estimatedTheoryPages,
      estimatedExercisePages,
      theoryRatio: Math.round(theoryRatio * 100),
      detectedSeparator: detectedPattern
    };
  }

  // Caso seja um PDF 100% teórico (ex: livro, resumo ou legislação)
  return {
    hasExercises: false,
    theoryText: sanitized,
    exercisesText: '',
    estimatedTheoryPages: totalPages,
    estimatedExercisePages: 0,
    theoryRatio: 100,
    detectedSeparator: null
  };
}

/**
 * Extrai tópicos e estrutura de sumário de qualquer PDF
 */
export function extractTableOfContents(rawText = '') {
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const topics = [];
  let inTocBlock = false;

  for (let i = 0; i < Math.min(lines.length, 300); i++) {
    const line = lines[i];

    if (TOC_PATTERNS.some(p => p.test(line))) {
      inTocBlock = true;
      continue;
    }

    if (inTocBlock) {
      // Fim do bloco de sumário
      if (line.length > 80 || /^(?:aula\s*0?1|introdu[çc][aã]o|cap[íi]tulo\s*1)\b/i.test(line)) {
        if (topics.length >= 2) break;
      }

      // Linha de tópico típica (ex: "1. Conceito de Tributo .... 5" ou "- Espécies Tributárias")
      const topicMatch = line.match(/^(?:(?:\d+[\.\)]|•|-|[A-Z]\))\s*)?(.+?)(?:\.{2,}|\s+)(\d+)?$/);
      if (topicMatch && topicMatch[1] && topicMatch[1].length > 3 && topicMatch[1].length < 100) {
        topics.push({
          title: topicMatch[1].trim(),
          page: topicMatch[2] ? parseInt(topicMatch[2], 10) : null
        });
      }
    }
  }

  return topics;
}

/**
 * Classificador Semântico de Disciplina e Banca
 */
export function classifySubjectAndBanca(text = '', filename = '') {
  const combined = `${filename} ${text.substring(0, 8000)}`.toLowerCase();

  // Mapeamento de disciplinas por termos chave de alta precisão
  const subjectSignatures = [
    { subject: 'Direito Tributário', keywords: ['fato gerador', 'ctn', 'tributo', 'imunidade tributária', 'lançamento tributário', 'crédito tributário', 'isenção tributária', 'art. 150'] },
    { subject: 'Legislação Tributária', keywords: ['irpj', 'csll', 'pis/pasep', 'cofins', 'simples nacional', 'ipi', 'lucro real', 'lucro presumido', 'lalur'] },
    { subject: 'Legislação Aduaneira', keywords: ['regulamento aduaneiro', 'despacho aduaneiro', 'siscomex', 'drawback', 'admissão temporária', 'zona primária', 'pena de perdimento', 'decreto 6.759'] },
    { subject: 'Direito Constitucional', keywords: ['constituição da república', 'art. 5º', 'direitos fundamentais', 'processo legislativo', 'stf', 'controle de constitucionalidade', 'art. 37'] },
    { subject: 'Direito Administrativo', keywords: ['ato administrativo', 'lei 14.133', 'licitações', 'improbidade administrativa', 'lei 8.112', 'poder de polícia', 'responsabilidade civil do estado'] },
    { subject: 'Fluência de Dados', keywords: ['banco de dados', 'sql', 'select', 'join', 'group by', 'big data', 'python', 'lgpd', 'data warehouse', 'etl'] },
    { subject: 'Contabilidade Geral', keywords: ['balanço patrimonial', 'dre', 'cpc 00', 'partidas dobradas', 'ativo circulante', 'passivo', 'patrimônio líquido', 'debito e credito'] },
    { subject: 'Direito Previdenciário', keywords: ['seguridade social', 'rgps', 'inss', 'salário de contribuição', 'benefícios previdenciários', 'aposentadoria', 'lei 8.212', 'lei 8.213'] },
    { subject: 'Língua Portuguesa', keywords: ['concordância verbal', 'regência verbal', 'crase', 'sintaxe', 'orações subordinadas', 'coesão e coerência', 'tipologia textual'] },
    { subject: 'Raciocínio Lógico Matemático', keywords: ['tabela verdade', 'proposição', 'equivalência lógica', 'negação lógica', 'análise combinatória', 'permutação', 'probabilidade'] },
    { subject: 'Estatística', keywords: ['estatística descritiva', 'média', 'mediana', 'variância', 'desvio padrão', 'distribuição normal', 'amostragem', 'regressão linear'] },
    { subject: 'Administração Geral e Pública', keywords: ['planejamento estratégico', 'gestão por processos', 'governança pública', 'swot', 'bsc', 'pdca', 'qualidade total'] }
  ];

  let bestSubject = 'Geral';
  let maxMatches = 0;

  for (const sig of subjectSignatures) {
    let score = 0;
    for (const kw of sig.keywords) {
      if (combined.includes(kw)) score++;
    }
    if (score > maxMatches) {
      maxMatches = score;
      bestSubject = sig.subject;
    }
  }

  // Detecção de Banca
  let detectedBanca = 'FGV';
  if (/cebraspe|cespe/i.test(combined)) detectedBanca = 'Cebraspe';
  else if (/vunesp/i.test(combined)) detectedBanca = 'Vunesp';
  else if (/fcc|carlos\s+chagas/i.test(combined)) detectedBanca = 'FCC';
  else if (/cesgranrio/i.test(combined)) detectedBanca = 'Cesgranrio';

  return {
    subject: bestSubject,
    banca: detectedBanca,
    confidence: maxMatches >= 2 ? 'high' : (maxMatches === 1 ? 'medium' : 'low')
  };
}

/**
 * Calcula métricas inteligentes de velocidade e estimativas de leitura
 */
export function calculateReadingMetrics(text = '', totalPages = 1, userWpm = 180) {
  const words = text.trim().split(/\s+/).length;
  const wordsPerPage = Math.round(words / (totalPages || 1));
  const estimatedReadingMinutesTotal = Math.ceil(words / userWpm);

  return {
    totalWords: words,
    wordsPerPage,
    estimatedReadingMinutesTotal,
    estimatedPagesPerHour: Math.round((userWpm * 60) / (wordsPerPage || 1)) || 15
  };
}

/**
 * Função Universal Principal de Ingestão de PDF
 */
export function processUniversalPdf(rawText = '', totalPages = 1, filename = '') {
  const boundaries = detectContentBoundaries(rawText, totalPages);
  const toc = extractTableOfContents(rawText);
  const classification = classifySubjectAndBanca(rawText, filename);
  const metrics = calculateReadingMetrics(boundaries.theoryText, boundaries.estimatedTheoryPages);

  return {
    filename,
    subject: classification.subject,
    banca: classification.banca,
    classificationConfidence: classification.confidence,
    totalPages,
    theoryPages: boundaries.estimatedTheoryPages,
    exercisePages: boundaries.estimatedExercisePages,
    theoryRatio: boundaries.theoryRatio,
    hasExercises: boundaries.hasExercises,
    tableOfContents: toc,
    readingMetrics: metrics,
    sanitizedTheoryText: boundaries.theoryText,
    sanitizedExercisesText: boundaries.exercisesText
  };
}
