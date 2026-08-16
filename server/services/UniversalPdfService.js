/**
 * UniversalPdfService.js
 * 
 * Serviço Orientado a Objetos para ingestão, sanitização, análise estrutural
 * e extração semântica de qualquer formato de PDF para concursos públicos.
 * 
 * Padrões: Single Responsibility (SOLID), Clean Code e Legibilidade.
 */

export class UniversalPdfService {
  /**
   * Remove ruídos repetitivos de páginas (CPFs de compradores, e-mails, marcas d'água, rodapés de direitos autorais).
   * @param {string} rawText 
   * @returns {string} Texto limpo e sanitizado
   */
  sanitizeText(rawText) {
    if (!rawText || typeof rawText !== 'string') return '';

    return rawText
      // Remove padrões de CPF: 000.000.000-00 ou 00000000000
      .replace(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, '')
      // Remove e-mails
      .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '')
      // Remove carimbos comuns de cursos (Estratégia, Gran, Direção)
      .replace(/Licenciado para .*? -/gi, '')
      .replace(/O uso deste material é exclusivo de .*/gi, '')
      .replace(/www\.[a-z0-9-]+\.com(\.br)?/gi, '')
      .replace(/Página \d+ de \d+/gi, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  /**
   * Detecta onde termina a teoria pura e onde começam os exercícios comentados/gabaritados.
   * @param {string} fullText 
   * @param {number} totalPages 
   * @returns {object} { hasExercises, estimatedTheoryPages, estimatedExercisePages, detectedSeparator }
   */
  detectBoundaries(fullText, totalPages = 1) {
    const exercisePatterns = [
      /QUESTÕES\s+COMENTADAS/i,
      /EXERCÍCIOS\s+COMENTADOS/i,
      /QUESTÕES\s+DA\s+BANCA/i,
      /QUESTÕES\s+DE\s+FIXAÇÃO/i,
      /QUESTÕES\s+INÉDITAS/i,
      /LISTA\s+DE\s+QUESTÕES/i,
      /GABARITO\s+COMENTADO/i,
      /EXERCÍCIOS\s+DE\s+PROVAS\s+ANTERIORES/i
    ];

    let boundaryIndex = -1;
    let detectedSeparator = null;

    for (const pattern of exercisePatterns) {
      const match = fullText.search(pattern);
      if (match !== -1) {
        if (boundaryIndex === -1 || match < boundaryIndex) {
          boundaryIndex = match;
          detectedSeparator = pattern.source.replace(/\\s\+/g, ' ').replace(/\\/g, '');
        }
      }
    }

    if (boundaryIndex !== -1 && fullText.length > 0) {
      const theoryRatio = Math.max(0.1, Math.min(0.95, boundaryIndex / fullText.length));
      const estimatedTheoryPages = Math.max(1, Math.round(totalPages * theoryRatio));
      const estimatedExercisePages = Math.max(0, totalPages - estimatedTheoryPages);

      return {
        hasExercises: true,
        estimatedTheoryPages,
        estimatedExercisePages,
        detectedSeparator,
        theoryRatio: Math.round(theoryRatio * 100)
      };
    }

    return {
      hasExercises: false,
      estimatedTheoryPages: totalPages,
      estimatedExercisePages: 0,
      detectedSeparator: null,
      theoryRatio: 100
    };
  }

  /**
   * Extrai tópicos do sumário ou índice estruturado.
   * @param {string} text 
   * @returns {Array<{ title: string, page: number }>}
   */
  extractTOC(text) {
    const tocItems = [];
    const lines = text.split('\n');
    let insideToc = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      if (/^SUMÁRIO|^ÍNDICE|^CONTEÚDO PROGRAMÁTICO/i.test(trimmed)) {
        insideToc = true;
        continue;
      }

      if (insideToc) {
        if (/^AULA\s+\d+|^CAPÍTULO\s+1|^INTRODUÇÃO/i.test(trimmed) && tocItems.length > 1) {
          break;
        }

        const tocPattern = /^([\d.\-A-Za-zÀ-ÿ\s,;:()]+?)[\s.·…_-]+(\d{1,4})$/;
        const match = trimmed.match(tocPattern);
        if (match) {
          const title = match[1].trim();
          const page = parseInt(match[2], 10);
          if (title.length > 3 && page > 0 && page < 2000) {
            tocItems.push({ title, page });
          }
        }
      }
    }

    return tocItems;
  }

  /**
   * Classifica a disciplina e a banca examinadora por assinaturas conceituais.
   * @param {string} text 
   * @param {string} filename 
   * @returns {object} { subject, banca, confidence }
   */
  classifySubjectAndBanca(text, filename = '') {
    const lowerText = (filename + ' ' + text.slice(0, 5000)).toLowerCase();

    const subjectSignatures = [
      { subject: 'Direito Tributário', terms: ['tributário', 'ctn', 'fato gerador', 'crédito tributário', 'isenção', 'lançamento tributário', 'imunidade tributária', 'icms', 'iss'] },
      { subject: 'Legislação Aduaneira', terms: ['aduaneira', 'aduaneiro', 'regulamento aduaneiro', 'despacho aduaneiro', 'siscomex', 'drawback', 'admissão temporária', 'perdimento', 'decreto 6.759'] },
      { subject: 'Legislação Tributária', terms: ['legislação tributária', 'ipi', 'pis/pasep', 'cofins', 'iof', 'irpj', 'csll', 'lalur', 'simples nacional'] },
      { subject: 'Direito Constitucional', terms: ['constitucional', 'cf/88', 'direitos fundamentais', 'remédios constitucionais', 'controle de constitucionalidade', 'art. 5º', 'poder judiciário'] },
      { subject: 'Direito Administrativo', terms: ['administrativo', 'lei 8.112', 'lei 14.133', 'licitação', 'ato administrativo', 'improbidade', 'lei 8.429', 'poder de polícia'] },
      { subject: 'Fluência em Dados', terms: ['banco de dados', 'sql', 'python', 'big data', 'select * from', 'data warehouse', 'machine learning', 'segurança da informação'] },
      { subject: 'Contabilidade Geral', terms: ['contabilidade', 'balanço patrimonial', 'dre', 'partidas dobradas', 'cpc', 'patrimônio líquido', 'depreciação', 'ativo circulante'] },
      { subject: 'Língua Portuguesa', terms: ['portuguesa', 'sintaxe', 'crase', 'regência', 'concordância', 'coesão', 'interpretação de texto', 'pontuação', 'morfologia'] },
      { subject: 'Raciocínio Lógico Matemático', terms: ['raciocínio lógico', 'tabela verdade', 'proposição', 'conectivos', 'equivalência lógica', 'análise combinatória', 'probabilidade'] },
      { subject: 'Estatística', terms: ['estatística', 'desvio padrão', 'variância', 'distribuição normal', 'inferência', 'hipótese', 'regressão linear', 'qui-quadrado'] },
      { subject: 'Administração Geral e Pública', terms: ['administração geral', 'administração pública', 'gestão de pessoas', 'planejamento estratégico', 'governabilidade', 'swot', 'afo', 'ldo', 'loa'] }
    ];

    let bestSubject = 'Geral';
    let maxSubjectMatches = 0;

    for (const item of subjectSignatures) {
      let matches = 0;
      for (const term of item.terms) {
        if (lowerText.includes(term)) matches++;
      }
      if (matches > maxSubjectMatches) {
        maxSubjectMatches = matches;
        bestSubject = item.subject;
      }
    }

    const bancaSignatures = [
      { banca: 'FGV', terms: ['fgv', 'fundação getulio vargas', 'getúlio vargas'] },
      { banca: 'Cebraspe', terms: ['cebraspe', 'cespe', 'unb'] },
      { banca: 'Cesgranrio', terms: ['cesgranrio', 'banco do brasil'] },
      { banca: 'Vunesp', terms: ['vunesp'] },
      { banca: 'FCC', terms: ['fcc', 'fundação carlos chagas'] }
    ];

    let detectedBanca = 'FGV';
    let maxBancaMatches = 0;

    for (const b of bancaSignatures) {
      let matches = 0;
      for (const term of b.terms) {
        if (lowerText.includes(term)) matches++;
      }
      if (matches > maxBancaMatches) {
        maxBancaMatches = matches;
        detectedBanca = b.banca;
      }
    }

    return {
      subject: bestSubject,
      banca: detectedBanca,
      confidence: maxSubjectMatches >= 2 ? 'high' : (maxSubjectMatches === 1 ? 'medium' : 'low')
    };
  }

  /**
   * Computa métricas quantitativas de leitura.
   * @param {string} text 
   * @param {number} pages 
   * @param {number} wordsPerMinute 
   * @returns {object} Métricas de tempo e velocidade
   */
  calculateMetrics(text, pages = 1, wordsPerMinute = 160) {
    const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
    const estimatedReadingMinutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    const avgWordsPerPage = pages > 0 ? Math.round(words / pages) : words;
    const pagesPerHour = Math.max(1, Math.round((wordsPerMinute * 60) / Math.max(1, avgWordsPerPage)));

    return {
      totalWords: words,
      estimatedReadingMinutesTotal: estimatedReadingMinutes,
      avgWordsPerPage,
      estimatedPagesPerHour: pagesPerHour
    };
  }

  /**
   * Pipeline completo de processamento universal de PDF.
   * @param {string} rawText 
   * @param {number} totalPages 
   * @param {string} filename 
   * @returns {object} Metadados universais estruturados
   */
  processPdf(rawText, totalPages = 1, filename = '') {
    const sanitizedText = this.sanitizeText(rawText);
    const boundaries = this.detectBoundaries(sanitizedText, totalPages);
    const toc = this.extractTOC(sanitizedText);
    const classification = this.classifySubjectAndBanca(sanitizedText, filename);
    const metrics = this.calculateMetrics(sanitizedText, boundaries.estimatedTheoryPages);

    return {
      filename,
      subject: classification.subject,
      banca: classification.banca,
      classificationConfidence: classification.confidence,
      totalPages,
      theoryPages: boundaries.estimatedTheoryPages,
      exercisePages: boundaries.estimatedExercisePages,
      hasExercises: boundaries.hasExercises,
      tableOfContents: toc,
      metrics,
      sanitizedSample: sanitizedText.slice(0, 1000)
    };
  }
}

export const universalPdfService = new UniversalPdfService();
