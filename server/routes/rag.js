import { Router } from 'express';
import multer from 'multer';
import db from '../database.js';
import { generateEmbedding, cosineSimilarity, streamChat, generateContent } from '../gemini.js';
import { ragKnowledgeService } from '../services/RagKnowledgeService.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB por arquivo
});

const router = Router();

// GET /stats — Return RAG knowledge base statistics (including 3.600+ ATRFB markdown docs)
router.get('/stats', (req, res) => {
  try {
    const atrfbStats = ragKnowledgeService.getStats();

    // Also get legacy uploaded pdf stats if any
    const legacyDocCount = db.prepare('SELECT COUNT(*) as count FROM rag_documents').get()?.count || 0;
    const legacyChunkCount = db.prepare('SELECT COUNT(*) as count FROM rag_chunks').get()?.count || 0;

    res.json({
      success: true,
      totalDocuments: atrfbStats.totalDocuments + legacyDocCount,
      totalChars: atrfbStats.totalChars,
      atrfb: atrfbStats,
      legacy: {
        documents: legacyDocCount,
        chunks: legacyChunkCount
      }
    });
  } catch (error) {
    console.error('Erro ao buscar stats RAG:', error);
    res.status(500).json({ error: 'Falha ao buscar estatísticas do RAG' });
  }
});

// GET /documents — List indexed documents with filter
router.get('/documents', (req, res) => {
  try {
    const { subject, limit = 50, page = 1 } = req.query;
    const offset = (Math.max(1, parseInt(page, 10)) - 1) * parseInt(limit, 10);

    let sql = `
      SELECT id, file_path, subject, module_type, lesson_number, title, char_count, created_at
      FROM atrfb_rag_documents
    `;
    const params = [];

    if (subject && subject !== 'Todas' && subject !== 'Geral') {
      sql += ' WHERE subject LIKE ?';
      params.push(`%${subject}%`);
    }

    sql += ' ORDER BY subject, lesson_number ASC LIMIT ? OFFSET ?';
    params.push(parseInt(limit, 10), offset);

    const docs = db.prepare(sql).all(...params);
    const total = db.prepare('SELECT COUNT(*) as count FROM atrfb_rag_documents').get()?.count || 0;

    res.json({
      success: true,
      total,
      page: parseInt(page, 10),
      documents: docs
    });
  } catch (error) {
    console.error('Erro ao listar documentos RAG:', error);
    res.status(500).json({ error: 'Falha ao listar documentos' });
  }
});

// POST /search — Fast hybrid search across ATRFB knowledge base
router.post('/search', (req, res) => {
  try {
    const { query, topK = 5, subject, moduleType } = req.body;

    if (!query || typeof query !== 'string' || !query.trim()) {
      return res.status(400).json({ error: 'Query de busca é obrigatória' });
    }

    const results = ragKnowledgeService.search(query, {
      subject,
      moduleType,
      limit: parseInt(topK, 10) || 5
    });

    res.json({ success: true, query, total: results.length, results });
  } catch (error) {
    console.error('Erro na busca semântica RAG:', error);
    res.status(500).json({ error: 'Falha ao realizar busca semântica' });
  }
});

// POST /ask — Full RAG question answering citing official ATRFB lessons
router.post('/ask', async (req, res) => {
  try {
    const { question, subject, careerId = 'atrfb' } = req.body;
    const userId = getAuthenticatedUserId(req);

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: 'Pergunta é obrigatória' });
    }

    let userName = 'Aluno';
    try {
      const userProf = db.prepare('SELECT name FROM user_profiles WHERE id = ?').get(userId);
      if (userProf?.name) userName = userProf.name;
    } catch (e) {}

    const response = await ragKnowledgeService.ask(question, {
      subject,
      careerId,
      userName
    });

    res.json({
      success: true,
      question,
      answer: response.answer,
      sources: response.sources
    });
  } catch (error) {
    console.error('Erro no Q&A RAG:', error);
    res.status(500).json({ error: 'Falha ao processar pergunta no RAG' });
  }
});

export default router;
