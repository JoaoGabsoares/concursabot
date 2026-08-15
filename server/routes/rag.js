import { Router } from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import db from '../database.js';
import { generateEmbedding, cosineSimilarity, streamChat, generateContent } from '../gemini.js';
import { guessSubject } from '../subject-guesser.js';
import { chunkText } from '../ingest.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB por arquivo
});

const router = Router();

// GET /stats — Return RAG knowledge base statistics
router.get('/stats', (req, res) => {
  try {
    const docCount = db.prepare('SELECT COUNT(*) as count FROM rag_documents').get().count;
    const chunkCount = db.prepare('SELECT COUNT(*) as count FROM rag_chunks').get().count;
    const subjects = db.prepare(`
      SELECT subject, COUNT(*) as count, SUM(total_chunks) as chunks 
      FROM rag_documents 
      GROUP BY subject
    `).all();

    res.json({
      totalDocuments: docCount,
      totalChunks: chunkCount,
      subjects: subjects
    });
  } catch (error) {
    console.error('Erro ao buscar stats RAG:', error);
    res.status(500).json({ error: 'Falha ao buscar estatísticas do RAG' });
  }
});

// GET /documents — List all indexed documents
router.get('/documents', (req, res) => {
  try {
    const docs = db.prepare(`
      SELECT id, filename, filepath, subject, total_chunks, created_at
      FROM rag_documents
      ORDER BY created_at DESC
    `).all();

    res.json({ documents: docs });
  } catch (error) {
    console.error('Erro ao listar documentos RAG:', error);
    res.status(500).json({ error: 'Falha ao listar documentos' });
  }
});

// Helper function: Semantic vector search across all chunks
async function performVectorSearch(query, topK = 5, subjectFilter = null) {
  const queryEmbedding = await generateEmbedding(query);

  let querySql = `
    SELECT rc.id, rc.document_id, rc.chunk_index, rc.content, rc.embedding,
           rd.filename, rd.subject
    FROM rag_chunks rc
    JOIN rag_documents rd ON rc.document_id = rd.id
  `;
  const params = [];

  if (subjectFilter && subjectFilter !== 'Todas') {
    querySql += ' WHERE rd.subject = ?';
    params.push(subjectFilter);
  }

  const allChunks = db.prepare(querySql).all(...params);

  // Compute similarity scores
  const scoredChunks = allChunks.map(chunk => {
    let emb;
    try {
      emb = JSON.parse(chunk.embedding);
    } catch (e) {
      emb = [];
    }

    const similarity = cosineSimilarity(queryEmbedding, emb);
    return {
      id: chunk.id,
      documentId: chunk.document_id,
      filename: chunk.filename,
      subject: chunk.subject,
      chunkIndex: chunk.chunk_index,
      content: chunk.content,
      score: similarity
    };
  });

  // Sort descending and take top K
  scoredChunks.sort((a, b) => b.score - a.score);
  return scoredChunks.slice(0, topK);
}

// POST /search — Semantic similarity search across indexed PDFs
router.post('/search', async (req, res) => {
  try {
    const { query, topK = 5, subject } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query de busca é obrigatória' });
    }

    const results = await performVectorSearch(query, topK, subject);
    res.json({ query, results });
  } catch (error) {
    console.error('Erro na busca semântica RAG:', error);
    res.status(500).json({ error: 'Falha ao realizar busca semântica' });
  }
});

// POST /ask — Full RAG question answering citing multiple PDF sources
router.post('/ask', async (req, res) => {
  try {
    const { question, subject, stream = false } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Pergunta é obrigatória' });
    }

    // 1. Retrieve top 5 most relevant snippets from the entire 1000 PDF library
    const topSnippets = await performVectorSearch(question, 5, subject);

    if (topSnippets.length === 0) {
      return res.json({
        answer: 'Nenhum documento indexado na base de conhecimento RAG ainda. Execute a ingestão de PDFs primeiro.',
        sources: []
      });
    }

    // 2. Format context with source citations
    const contextText = topSnippets.map((s, idx) => `
[FONTE ${idx + 1}]: Arquivo "${s.filename}" (${s.subject})
${s.content}
`).join('\n---\n');

    // 3. Construct Augmented Prompt
    const ragPrompt = `Você é o Tutor IA Especialista do ConcursaBot com acesso à base completa de conhecimento (RAG) de PDFs do aluno.

Responda à dúvida do aluno fundamentando sua resposta nos trechos fornecidos abaixo.
Sempre cite de quais arquivos/fontes você extraiu as informações (ex: Conforme o material "Aula02_Tributario.pdf"...).
Se os trechos não responderem completamente, use seu conhecimento geral para complementar de forma clara.

DÚVIDA DO ALUNO:
${question}

TRECHOS RELEVANTES RECUPERADOS DOS PDFS:
${contextText}
`;

    if (stream) {
      // Stream response via SSE
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      // Send sources first
      res.write(`data: ${JSON.stringify({ sources: topSnippets.map(s => ({ filename: s.filename, subject: s.subject, score: Math.round(s.score * 100) })) })}\n\n`);

      try {
        for await (const chunk of streamChat([], ragPrompt, 'Você é um professor de concursos especialista com suporte a RAG.')) {
          if (chunk) {
            res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
          }
        }
      } catch (streamErr) {
        console.error('Erro no streaming RAG:', streamErr);
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } else {
      const answer = await generateContent(ragPrompt, 'Você é um professor de concursos especialista com suporte a RAG.');
      res.json({
        answer,
        sources: topSnippets.map(s => ({
          filename: s.filename,
          subject: s.subject,
          score: Math.round(s.score * 100),
          snippet: s.content.substring(0, 150) + '...'
        }))
      });
    }

  } catch (error) {
    console.error('Erro no RAG Q&A:', error);
    res.status(500).json({ error: 'Falha ao processar pergunta com RAG' });
  }
});

// POST /upload — Ingest one or more PDFs uploaded directly through UI
router.post('/upload', upload.array('pdfs', 50), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'Nenhum arquivo PDF enviado.' });
    }

    const results = [];
    let totalChunksIndexed = 0;

    for (const file of files) {
      try {
        const filename = file.originalname;
        const pdfData = await pdfParse(file.buffer);
        const text = pdfData.text || '';

        if (!text.trim() || text.length < 50) {
          results.push({ filename, status: 'skipped', reason: 'PDF sem texto legível ou escaneado sem OCR' });
          continue;
        }

        const subject = req.body.subject && req.body.subject !== 'Auto'
          ? req.body.subject
          : guessSubject(filename, text);

        const chunks = chunkText(text, 1000, 200);
        if (chunks.length === 0) {
          results.push({ filename, status: 'skipped', reason: 'Texto insuficiente para gerar trechos' });
          continue;
        }

        // Save document record
        const insertDoc = db.prepare(`
          INSERT OR REPLACE INTO rag_documents (filename, filepath, subject, total_chunks)
          VALUES (?, ?, ?, ?)
        `);
        const docResult = insertDoc.run(filename, `upload://${filename}`, subject, chunks.length);
        const docId = docResult.lastInsertRowid;

        // Clean previous chunks if any
        db.prepare('DELETE FROM rag_chunks WHERE document_id = ?').run(docId);

        const insertChunk = db.prepare(`
          INSERT INTO rag_chunks (document_id, chunk_index, content, embedding)
          VALUES (?, ?, ?, ?)
        `);

        for (let i = 0; i < chunks.length; i++) {
          const content = chunks[i];
          let embArray = [];
          try {
            embArray = await generateEmbedding(content);
          } catch (embErr) {
            console.warn(`Erro ao gerar embedding chunk ${i} de ${filename}:`, embErr.message);
          }
          insertChunk.run(docId, i, content, JSON.stringify(embArray));
          totalChunksIndexed++;
        }

        results.push({ filename, subject, chunksCount: chunks.length, status: 'success' });

      } catch (err) {
        console.error(`Erro ao processar PDF ${file.originalname}:`, err);
        results.push({ filename: file.originalname, status: 'error', error: err.message });
      }
    }

    res.json({
      success: true,
      processed: results.length,
      totalChunksIndexed,
      results
    });

  } catch (error) {
    console.error('Erro no upload de PDFs RAG:', error);
    res.status(500).json({ error: 'Falha no processamento dos PDFs' });
  }
});

// DELETE /documents/:id — Delete a document and its vector chunks
router.delete('/documents/:id', (req, res) => {
  try {
    const docId = parseInt(req.params.id, 10);
    if (isNaN(docId) || docId <= 0) {
      return res.status(400).json({ error: 'ID de documento inválido.' });
    }
    db.prepare('DELETE FROM rag_chunks WHERE document_id = ?').run(docId);
    db.prepare('DELETE FROM rag_documents WHERE id = ?').run(docId);
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao deletar documento RAG:', error);
    res.status(500).json({ error: 'Falha ao deletar documento' });
  }
});

export default router;
