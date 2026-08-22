import db from '../database.js';
import { generateContent } from '../gemini.js';
import { getCareerConfig } from '../careers.js';

export class RagKnowledgeService {
  /**
   * Sanitiza a query do usuário para evitar erros de sintaxe no FTS5
   */
  static sanitizeFtsQuery(rawQuery) {
    if (!rawQuery || typeof rawQuery !== 'string') return '';
    // Remove operadores reservados do FTS5 (*, ", ^, :, NEAR, AND, OR, NOT) se desbalanceados
    return rawQuery
      .replace(/[*"':^]/g, ' ')
      .replace(/\b(AND|OR|NOT|NEAR)\b/gi, ' ')
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 1)
      .map(word => `"${word}"`)
      .join(' ');
  }

  /**
   * Busca híbrida no acervo ATRFB com FTS5 e ranqueamento
   */
  static search(query, options = {}) {
    const { subject, moduleType, limit = 5 } = options;

    if (!query || typeof query !== 'string' || !query.trim()) {
      return [];
    }

    const cleanQuery = this.sanitizeFtsQuery(query);
    if (!cleanQuery) return [];

    try {
      let ftsSql = `
        SELECT 
          d.id, d.file_path, d.subject, d.module_type, d.lesson_number, d.title,
          d.tags_json, d.articles_cited_json, d.sumulas_cited_json,
          snippet(atrfb_rag_fts, 7, '<b>', '</b>', '...', 40) as snippet,
          bm25(atrfb_rag_fts) as rank_score
        FROM atrfb_rag_fts f
        JOIN atrfb_rag_documents d ON f.rowid = d.id
        WHERE atrfb_rag_fts MATCH ?
      `;

      const params = [cleanQuery];

      if (subject && subject !== 'Todas' && subject !== 'Geral') {
        ftsSql += ` AND d.subject LIKE ?`;
        params.push(`%${subject}%`);
      }

      if (moduleType) {
        ftsSql += ` AND d.module_type = ?`;
        params.push(moduleType);
      }

      ftsSql += ` ORDER BY rank_score ASC LIMIT ?`;
      params.push(Math.min(limit, 20));

      const rows = db.prepare(ftsSql).all(...params);

      return rows.map(r => {
        let tags = [];
        let articles = [];
        let sumulas = [];

        try { tags = JSON.parse(r.tags_json || '[]'); } catch (e) {}
        try { articles = JSON.parse(r.articles_cited_json || '[]'); } catch (e) {}
        try { sumulas = JSON.parse(r.sumulas_cited_json || '[]'); } catch (e) {}

        return {
          id: r.id,
          filePath: r.file_path,
          subject: r.subject,
          moduleType: r.module_type,
          lessonNumber: r.lesson_number,
          title: r.title,
          tags,
          articlesCited: articles,
          sumulasCited: sumulas,
          snippet: r.snippet ? r.snippet.replace(/<\/?b>/g, '**') : '',
          rankScore: r.rank_score
        };
      });

    } catch (err) {
      console.warn('Fallback FTS5 para busca LIKE tradicional:', err.message);
      // Fallback gracioso com LIKE se o FTS5 falhar
      let likeSql = `
        SELECT id, file_path, subject, module_type, lesson_number, title,
               tags_json, articles_cited_json, sumulas_cited_json,
               substr(content_markdown, 1, 400) as snippet
        FROM atrfb_rag_documents
        WHERE (title LIKE ? OR content_markdown LIKE ?)
      `;
      const term = `%${query.trim()}%`;
      const likeParams = [term, term];

      if (subject && subject !== 'Todas' && subject !== 'Geral') {
        likeSql += ` AND subject LIKE ?`;
        likeParams.push(`%${subject}%`);
      }

      likeSql += ` LIMIT ?`;
      likeParams.push(limit);

      const fallbackRows = db.prepare(likeSql).all(...likeParams);
      return fallbackRows.map(r => ({
        id: r.id,
        filePath: r.file_path,
        subject: r.subject,
        moduleType: r.module_type,
        lessonNumber: r.lesson_number,
        title: r.title,
        tags: JSON.parse(r.tags_json || '[]'),
        articlesCited: JSON.parse(r.articles_cited_json || '[]'),
        sumulasCited: JSON.parse(r.sumulas_cited_json || '[]'),
        snippet: (r.snippet || '').substring(0, 300) + '...',
        rankScore: 0
      }));
    }
  }

  /**
   * Retorna estatísticas completas do acervo RAG
   */
  static getStats() {
    try {
      const totalDocs = db.prepare('SELECT COUNT(*) as count FROM atrfb_rag_documents').get()?.count || 0;
      const totalChars = db.prepare('SELECT SUM(char_count) as total FROM atrfb_rag_documents').get()?.total || 0;

      const subjects = db.prepare(`
        SELECT subject, COUNT(*) as count, SUM(char_count) as total_chars
        FROM atrfb_rag_documents
        GROUP BY subject
        ORDER BY count DESC
      `).all();

      const moduleTypes = db.prepare(`
        SELECT module_type, COUNT(*) as count
        FROM atrfb_rag_documents
        GROUP BY module_type
        ORDER BY count DESC
      `).all();

      return {
        careerId: 'atrfb',
        careerName: 'Receita Federal • Analista-Tributário (ATRFB)',
        banca: 'FGV',
        totalDocuments: totalDocs,
        totalChars: totalChars,
        subjects: subjects,
        moduleTypes: moduleTypes
      };
    } catch (e) {
      console.error('Erro ao obter estatísticas RAG:', e);
      return { totalDocuments: 0, totalChars: 0, subjects: [], moduleTypes: [] };
    }
  }

  /**
   * Constrói o bloco de contexto enriquecido com citações de aulas para o LLM
   */
  static buildAugmentedContext(query, options = {}) {
    const { subject, limit = 4 } = options;
    const searchResults = this.search(query, { subject, limit });

    if (!searchResults || searchResults.length === 0) {
      return {
        contextBlock: '',
        sources: []
      };
    }

    const sources = searchResults.map(r => ({
      title: r.title,
      subject: r.subject,
      lessonNumber: r.lessonNumber,
      moduleType: r.moduleType,
      articlesCited: r.articlesCited.slice(0, 5),
      sumulasCited: r.sumulasCited.slice(0, 3),
      filePath: r.filePath
    }));

    const contextSnippets = searchResults.map((r, i) => {
      const artList = r.articlesCited.length > 0 ? `\n- Artigos Legais Citados: ${r.articlesCited.slice(0, 6).join(', ')}` : '';
      const sumList = r.sumulasCited.length > 0 ? `\n- Súmulas Citadas: ${r.sumulasCited.slice(0, 4).join(', ')}` : '';

      return `[FONTE ${i + 1}: ${r.title} • ${r.subject} (Aula ${r.lessonNumber} - ${r.moduleType})]${artList}${sumList}
Trecho relevante do material:
${r.snippet}
`;
    }).join('\n---\n');

    return {
      contextBlock: `\n=== ACERVO OFICIAL DE ESTUDO (RAG ATRFB / FGV) ===\n${contextSnippets}\n==================================================\n`,
      sources
    };
  }

  /**
   * Responde à dúvida do concurseiro citando expressamente as fontes do acervo
   */
  static async ask(question, options = {}) {
    const { subject, careerId = 'atrfb', userName = 'Aluno' } = options;
    const careerCfg = getCareerConfig(careerId);
    const { contextBlock, sources } = this.buildAugmentedContext(question, { subject });

    const systemPrompt = `Você é o Tutor IA Especialista em Concursos do Gabarito.AI, com acesso integral ao acervo oficial de estudo da Receita Federal (ATRFB / FGV).
Sua missão é responder com máxima precisão técnica, fundamentação jurídica, menção direta de artigos de lei e citação explícita das aulas do material oficial.`;

    const prompt = `DÚVIDA DO CONCURSEIRO (${userName}):
"${question}"

${contextBlock}

DIRETRIZES DA RESPOSTA:
1. Responda diretamente e com rigor conceitual no padrão exigido pela banca ${careerCfg.bancas?.[0]?.name || 'FGV'}.
2. Cite explicitamente as fontes encontradas (ex: "Conforme a Aula 04 de Direito Tributário..." ou "De acordo com o Art. 150 da CF...").
3. Se houver pegadinha clássica da banca sobre o tema, aponte em um parágrafo de alerta final.
4. Mantenha a resposta clara, didática e estruturada em tópicos curtos.`;

    const answer = await generateContent(prompt, systemPrompt);

    return {
      answer: answer || 'Não foi possível gerar a resposta no momento. Tente reformular a pergunta.',
      sources
    };
  }
}

export const ragKnowledgeService = RagKnowledgeService;
