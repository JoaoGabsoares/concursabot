import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';
import db, { logActivity, recordQuestionError } from '../database.js';
import { generateJSON, generateContent, streamChat } from '../gemini.js';
import logger from '../logger.js';
import {
  MATERIAL_ANALYSIS_PROMPT,
  getMaterialAnalysisPrompt,
  MATERIAL_ANALYSIS_SCHEMA,
  buildCadernoEnxutoPrompt,
  buildFixationQuestionsPrompt,
  FIXATION_QUESTIONS_SCHEMA,
  buildContextualChatPrompt,
  STUDY_ROOM_SYSTEM_PROMPT,
  LESSON_GENERATOR_SYSTEM_INSTRUCTION,
  getLessonGeneratorPrompt,
  getLessonExpansionPrompt,
  getLessonFlashcardsPrompt,
  FLASHCARDS_GENERATOR_SCHEMA
} from '../prompts/study-room.js';
import { CAREERS_CATALOG, getCareerConfig } from '../careers.js';
import { calculateUserStreak } from '../gamification.js';
import { universalPdfService } from '../services/UniversalPdfService.js';
import { studyCadenceService } from '../services/StudyCadenceService.js';
import { processUniversalPdf, sanitizePdfText, calculateReadingMetrics } from '../utils/universal-pdf-parser.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Matérias Oficiais da Receita Federal (ATRFB) com Wave e pesos
const ATRFB_SUBJECTS_CATALOG = [
  { subject: 'Direito Tributário', wave: 1, questions: 16, description: 'CTN, Teoria Pentapartida, Limitações e Espécies' },
  { subject: 'Direito Previdenciário', wave: 1, questions: 16, description: 'Seguridade Social, Custeio e Benefícios RGPS' },
  { subject: 'Língua Portuguesa', wave: 1, questions: 15, description: 'Gramática aplicada, Sintaxe e Interpretação FGV' },
  { subject: 'Fluência de Dados', wave: 1, questions: 15, description: 'Modelagem, SQL, Análise e Governança de Dados' },
  { subject: 'Direito Constitucional', wave: 1, questions: 14, description: 'Direitos Fundamentais, Organização do Estado e Poderes' },
  { subject: 'Legislação Tributária', wave: 1, questions: 14, description: 'IRPJ, IPI, PIS/COFINS, IOF e Tributação Federal' },
  { subject: 'Legislação Aduaneira', wave: 1, questions: 14, description: 'Regulamento Aduaneiro, Importação, Exportação e SISCOMEX' },
  { subject: 'Direito Administrativo', wave: 2, questions: 12, description: 'Atos, Processo Administrativo, Licitações e Agentes' },
  { subject: 'Raciocínio Lógico Matemático', wave: 2, questions: 10, description: 'Lógica Proposicional, Análise Combinatória e Probabilidade' },
  { subject: 'Contabilidade Geral', wave: 2, questions: 10, description: 'CPC, Balanço Patrimonial e DRE' },
  { subject: 'Estatística', wave: 2, questions: 10, description: 'Estatística Descritiva e Inferencial' },
  { subject: 'Administração Geral e Pública', wave: 2, questions: 10, description: 'Planejamento, Gestão por Processos e Governança' },
  { subject: 'Língua Inglesa', wave: 2, questions: 10, description: 'Interpretação de Textos e Vocabulário Técnico' }
];

// Converte o caminho absoluto em disco na URL pública servida por express.static em /uploads
function toPdfUrl(filepath) {
  if (!filepath || typeof filepath !== 'string') return null;
  const clean = filepath.trim();
  if (clean.startsWith('caderno_digital://') || !clean.toLowerCase().endsWith('.pdf')) {
    return null;
  }
  return `/uploads/${path.basename(clean)}`;
}

// Extrai o número da aula a partir do nome do arquivo ou do texto
export function extractLessonNumber(filename = '', text = '') {
  const fileMatch = filename.match(/(?:aula|lesson|m[oó]dulo)[_\s-]*0*(\d+)/i);
  if (fileMatch) return parseInt(fileMatch[1], 10);

  const textMatch = text.substring(0, 2000).match(/(?:aula|lesson|m[oó]dulo)[_\s-]*0*(\d+)/i);
  if (textMatch) return parseInt(textMatch[1], 10);

  return null;
}

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ============================================================
// PDF UPLOAD & ANALYSIS WITH UNIVERSAL HEURISTICS
// ============================================================

// Agendador automático de Revisões Espaçadas (Curva do Esquecimento: D+1, D+7, D+30)
export function scheduleSpacedReviews(materialId, subject, lessonNumber, baseDateStr, userId = null, careerId = 'atrfb') {
  try {
    const base = new Date(baseDateStr + 'T12:00:00');
    
    const d1 = new Date(base);
    d1.setDate(d1.getDate() + 1);
    const d1Str = d1.toISOString().split('T')[0];

    const d7 = new Date(base);
    d7.setDate(d7.getDate() + 7);
    const d7Str = d7.toISOString().split('T')[0];

    const d30 = new Date(base);
    d30.setDate(d30.getDate() + 30);
    const d30Str = d30.toISOString().split('T')[0];

    // Remove pending reviews for this material if updating
    db.prepare("DELETE FROM study_reviews WHERE material_id = ? AND status = 'pending' AND user_id = ?").run(materialId, userId);

    const insertReview = db.prepare(`
      INSERT INTO study_reviews (material_id, subject, lesson_number, review_type, scheduled_date, status, user_id, career_id)
      VALUES (?, ?, ?, ?, ?, 'pending', ?, ?)
    `);

    insertReview.run(materialId, subject, lessonNumber, 'd1', d1Str, userId, careerId);
    insertReview.run(materialId, subject, lessonNumber, 'd7', d7Str, userId, careerId);
    insertReview.run(materialId, subject, lessonNumber, 'd30', d30Str, userId, careerId);
  } catch (e) {
    console.error('Erro ao agendar revisões espaçadas:', e);
  }
}

// POST /upload — Upload any PDF format and analyze with Universal Heuristics & Gemini AI
router.post('/upload', async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado. Envie um PDF.' });
    }

    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
    const { originalname, filename, path: filepath, size } = req.file;
    const requestedSubject = req.body.subject || 'Geral';
    const studiedAt = req.body.studiedAt || null; // 'YYYY-MM-DD'
    const studyStatus = req.body.studyStatus || 'unread'; // 'full' | 'theory_only' | 'unread'

    // Extração de texto local via pdf-parse de forma assíncrona
    const pdfBuffer = await fs.promises.readFile(filepath);
    const pdfData = await pdfParse(pdfBuffer);
    const textContent = pdfData.text || '';
    const totalPagesDetected = pdfData.numpages || 1;

    if (textContent.trim().length < 100) {
      return res.status(422).json({
        error: 'Não foi possível extrair texto deste PDF (provavelmente é um PDF escaneado/imagem). Tente um PDF com texto selecionável.'
      });
    }

    // Processamento Heurístico Universal (Qualquer Formato)
    const universalMeta = processUniversalPdf(textContent, totalPagesDetected, originalname);
    const detectedLessonNumber = extractLessonNumber(originalname, textContent);

    // Análise estruturada via Gemini com fallback local resiliente
    let analysisResponse;
    try {
      const dynamicPrompt = getMaterialAnalysisPrompt(careerId);
      analysisResponse = await generateJSON(
        `${dynamicPrompt}\n\nCONTEÚDO DO PDF:\n${textContent.substring(0, 100000)}`,
        'Você é um especialista em análise de materiais de estudo para concursos públicos.',
        MATERIAL_ANALYSIS_SCHEMA
      );
    } catch (aiErr) {
      console.warn('Gemini AI analysis fallback ativado:', aiErr.message);
      const cleanTitle = originalname.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
      analysisResponse = {
        titulo: cleanTitle,
        materia: requestedSubject !== 'Geral' ? requestedSubject : universalMeta.subject,
        numeroAula: detectedLessonNumber || 1,
        resumoEstrategico: (universalMeta.sanitizedSample || universalMeta.sanitizedTheoryText || textContent || '').substring(0, 350).replace(/\s+/g, ' ') + '...',
        topicosChave: (universalMeta.tableOfContents && universalMeta.tableOfContents.length > 0)
          ? universalMeta.tableOfContents.slice(0, 5).map(t => t.title)
          : [universalMeta.subject || 'Conceitos Chave', 'Legislação e Doutrina'],
        jurisprudenciaRelevante: 'Doutrina e jurisprudência aplicável ao edital.',
        artigosChave: [],
        dicasBanca: `Atenção aos detalhes literais da banca ${universalMeta.banca} e pegadinhas recorrentes.`,
        pontosCriticos: ['Revisão sistemática dos tópicos extraídos do PDF.']
      };
    }

    const cleanTitle = originalname.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
    const requestedTitle = (req.body.customTitle || req.body.title || '').trim();
    const requestedLessonNumber = req.body.lessonNumber || req.body.lesson_number;

    const parsedLessonNum = requestedLessonNumber ? parseInt(requestedLessonNumber, 10) : null;
    const finalLessonNumber = (!isNaN(parsedLessonNum) && parsedLessonNum !== null)
      ? parsedLessonNum
      : (detectedLessonNumber !== null 
          ? detectedLessonNumber 
          : (analysisResponse.numeroAula !== undefined && analysisResponse.numeroAula !== null ? analysisResponse.numeroAula : null));

    const finalTitle = requestedTitle || analysisResponse.titulo || cleanTitle;

    const finalSubject = (requestedSubject && requestedSubject !== 'Geral' && requestedSubject !== 'Outra')
      ? requestedSubject
      : (analysisResponse.materia || universalMeta.subject || 'Geral');

    const theoryCompleted = (studyStatus === 'full' || studyStatus === 'theory_only') ? 1 : 0;
    const questionsCompleted = (studyStatus === 'full') ? 1 : 0;
    const finalStudiedDate = studiedAt || (studyStatus !== 'unread' ? new Date().toISOString().split('T')[0] : null);

    // Save to database with complete universal metrics
    const stmt = db.prepare(`
      INSERT INTO study_materials (
        filename, filepath, subject, lesson_number, title, summary, content_text, analysis_json, 
        studied_at, theory_completed, questions_completed, current_page, total_pages,
        theory_pages, exercise_pages, has_exercises, table_of_contents_json, reading_metrics_json,
        user_id, career_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      originalname,
      filepath,
      finalSubject,
      finalLessonNumber,
      finalTitle,
      analysisResponse.resumoEstrategico,
      textContent,
      JSON.stringify({ ...analysisResponse, titulo: finalTitle }),
      finalStudiedDate,
      theoryCompleted,
      questionsCompleted,
      totalPagesDetected,
      universalMeta.theoryPages,
      universalMeta.exercisePages,
      universalMeta.hasExercises ? 1 : 0,
      JSON.stringify(universalMeta.tableOfContents),
      JSON.stringify(universalMeta.readingMetrics),
      userId,
      careerId
    );

    const materialId = result.lastInsertRowid;

    // Se o estudo foi registrado em data específica, agenda o ciclo de revisões (D+1, D+7, D+30)
    if (studyStatus !== 'unread' && finalStudiedDate) {
      scheduleSpacedReviews(materialId, finalSubject, finalLessonNumber, finalStudiedDate, userId, careerId);

      // Se leu apenas a teoria, insere pendência de questões/revisão na Fila de Reposição
      if (studyStatus === 'theory_only') {
        db.prepare(`
          INSERT INTO missed_sessions (subject, lesson_number, title, reason, target_slot, status, user_id, career_id)
          VALUES (?, ?, ?, ?, 'Hoje à noite', 'pending', ?, ?)
        `).run(finalSubject, finalLessonNumber, analysisResponse.titulo || `Aula ${finalLessonNumber}`, `Revisão e Questões pendentes do estudo de ${finalStudiedDate}`, userId, careerId);
      }
    }

    // Log activity
    db.prepare('INSERT INTO activity_log (type, detail, user_id, career_id) VALUES (?, ?, ?, ?)')
      .run('material', `Enviou material: ${finalSubject} - Aula ${finalLessonNumber || 1} (${analysisResponse.titulo})`, userId, careerId);

    res.json({
      materialId,
      filename: originalname,
      pdfUrl: toPdfUrl(filepath),
      subject: finalSubject,
      lessonNumber: finalLessonNumber,
      title: analysisResponse.titulo,
      summary: analysisResponse.resumoEstrategico,
      totalPages: totalPagesDetected,
      theoryPages: universalMeta.theoryPages,
      exercisePages: universalMeta.exercisePages,
      hasExercises: universalMeta.hasExercises,
      tableOfContents: universalMeta.tableOfContents,
      readingMetrics: universalMeta.readingMetrics,
      analysis: analysisResponse,
      studied_at: finalStudiedDate,
      theory_completed: theoryCompleted,
      questions_completed: questionsCompleted,
      message: 'Material processado com parâmetros universais e inteligência de leitura!'
    });

  } catch (error) {
    console.error('Erro no upload do material:', error);
    res.status(500).json({ error: 'Falha ao processar o material. Tente novamente.' });
  }
});

// PUT /materials/:id/study-status — Update study date and status retroactively
router.put('/materials/:id/study-status', (req, res) => {
  try {
    const { id } = req.params;
    const { studiedAt, studyStatus } = req.body;

    const mat = db.prepare('SELECT * FROM study_materials WHERE id = ?').get(id);
    if (!mat) return res.status(404).json({ error: 'Material não encontrado.' });

    const theoryCompleted = (studyStatus === 'full' || studyStatus === 'theory_only') ? 1 : 0;
    const questionsCompleted = (studyStatus === 'full') ? 1 : 0;
    const finalDate = studiedAt || (studyStatus !== 'unread' ? new Date().toISOString().split('T')[0] : null);

    db.prepare(`
      UPDATE study_materials 
      SET studied_at = ?, theory_completed = ?, questions_completed = ?
      WHERE id = ?
    `).run(finalDate, theoryCompleted, questionsCompleted, id);

    if (studyStatus !== 'unread' && finalDate) {
      scheduleSpacedReviews(id, mat.subject, mat.lesson_number, finalDate);

      if (studyStatus === 'theory_only') {
        db.prepare(`
          INSERT INTO missed_sessions (subject, lesson_number, title, reason, target_slot, status)
          VALUES (?, ?, ?, ?, 'Hoje à noite', 'pending')
        `).run(mat.subject, mat.lesson_number, mat.title || `Aula ${mat.lesson_number}`, `Revisão e Questões pendentes do estudo de ${finalDate}`);
      }
    }

    res.json({ success: true, studied_at: finalDate, theory_completed: theoryCompleted, questions_completed: questionsCompleted });
  } catch (error) {
    console.error('Erro ao atualizar status do estudo:', error);
    res.status(500).json({ error: 'Falha ao atualizar status.' });
  }
});

// PUT /materials/:id/page — Atualiza a página do marca-página diretamente
router.put('/materials/:id/page', (req, res) => {
  try {
    const { id } = req.params;
    const { page } = req.body;
    const pageNum = parseInt(page, 10) || 1;
    const userId = getAuthenticatedUserId(req);

    db.prepare(`
      UPDATE study_materials
      SET current_page = ?,
          studied_at = COALESCE(studied_at, DATE('now'))
      WHERE id = ? AND (user_id = ? OR user_id = 'user_joao')
    `).run(pageNum, id, userId);

    res.json({ success: true, page: pageNum });
  } catch (error) {
    console.error('Erro ao atualizar marca-página:', error);
    res.status(500).json({ error: 'Falha ao atualizar marca-página.' });
  }
});

// POST /register-study — Registra estudo (conclusão ou progresso de páginas) com XP e estatísticas em tempo real
router.post('/register-study', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const { 
      materialId, 
      subject, 
      lessonNumber, 
      title, 
      currentPage, 
      totalPages, 
      isCompleted, 
      durationMinutes,
      questionsCount = 0,
      correctQuestionsCount = 0,
      notes 
    } = req.body;

    const minutes = parseInt(durationMinutes, 10) || 30;
    const qCount = parseInt(questionsCount, 10) || 0;
    const qCorrect = parseInt(correctQuestionsCount, 10) || 0;
    const isFinished = Boolean(isCompleted);
    const now = new Date().toISOString().split('T')[0];
    const pageNum = parseInt(currentPage, 10) || 1;
    const totalNum = parseInt(totalPages, 10) || null;

    // 1. Registra a sessão de estudo
    try {
      db.prepare(`
        INSERT INTO study_sessions (
          material_id, duration_minutes, status, user_id, career_id, completed_at, actual_duration_seconds, scope_note
        ) VALUES (?, ?, 'completed', ?, ?, CURRENT_TIMESTAMP, ?, ?)
      `).run(
        materialId ? Number(materialId) : null, 
        minutes, 
        userId, 
        careerId, 
        minutes * 60, 
        notes || (qCount > 0 ? `Sessão com ${qCount} questões (${qCorrect} acertos)` : null)
      );
    } catch (sessionErr) {
      try {
        db.prepare(`
          INSERT INTO study_sessions (
            material_id, duration_minutes, status, user_id, completed_at, actual_duration_seconds
          ) VALUES (?, ?, 'completed', ?, CURRENT_TIMESTAMP, ?)
        `).run(materialId ? Number(materialId) : null, minutes, userId, minutes * 60);
      } catch (e) {
        console.warn('Aviso ao registrar study_sessions:', e.message);
      }
    }

    // 2. Se houver materialId, atualiza o progresso em study_materials
    if (materialId) {
      try {
        db.prepare(`
          UPDATE study_materials 
          SET studied_at = ?,
              theory_completed = ?,
              questions_completed = ?,
              current_page = ?,
              total_pages = CASE 
                WHEN ? IS NOT NULL AND ? > COALESCE(total_pages, 0) THEN ? 
                ELSE COALESCE(total_pages, ?) 
              END,
              notes = COALESCE(?, notes)
          WHERE id = ?
        `).run(
          now, 
          isFinished ? 1 : 0, 
          isFinished ? 1 : 0, 
          pageNum, 
          totalNum, 
          totalNum, 
          totalNum, 
          totalNum, 
          notes || null, 
          Number(materialId)
        );
      } catch (matErr) {
        console.warn('Aviso ao atualizar study_materials:', matErr.message);
      }
    }

    // 3. Conceder Gamificação e XP (incluindo bônus de questões resolvidas)
    const baseXP = isFinished ? 50 : 20;
    const questionsXP = (qCorrect * 10) + ((qCount - qCorrect) * 2);
    const xpGained = baseXP + questionsXP;

    // 3. Concessão de XP
    try {
      db.prepare(`
        UPDATE user_profiles
        SET xp = COALESCE(xp, 0) + ?,
            todayMinutes = COALESCE(todayMinutes, 0) + ?
        WHERE id = ?
      `).run(xpGained, minutes, userId);
    } catch (xpProfErr) {
      try {
        db.prepare(`UPDATE user_profiles SET xp = COALESCE(xp, 0) + ? WHERE id = ?`).run(xpGained, userId);
      } catch (e) {}
    }

    try {
      db.prepare(`
        INSERT INTO user_xp_log (user_id, amount, reason) 
        VALUES (?, ?, ?)
      `).run(
        userId, 
        xpGained, 
        isFinished 
          ? `Conclusão de Aula: ${subject || 'Estudo'}${qCount > 0 ? ` (+${qCount} questões)` : ''}` 
          : `Leitura de Páginas: ${subject || 'Estudo'}${qCount > 0 ? ` (+${qCount} questões)` : ''}`
      );
    } catch (xpLogErr) {
      // Compatibilidade se user_xp_log falhar
    }

    // 4. Log de Atividade
    try {
      logActivity(
        'study_session', 
        isFinished 
          ? `Concluiu estudo de ${subject || 'Geral'}${lessonNumber !== undefined ? ` (Aula ${lessonNumber})` : ''}${qCount > 0 ? ` e ${qCount} questões (${qCorrect} acertos)` : ''}`
          : `Estudou ${minutes}min de ${subject || 'Geral'} (pág. ${pageNum}/${totalNum || '?'})${qCount > 0 ? ` com ${qCount} questões` : ''}`,
        userId,
        careerId
      );
    } catch (logErr) {
      console.warn('Aviso ao registrar logActivity:', logErr.message);
    }

    res.json({
      success: true,
      xpGained,
      questionsXP,
      isFinished,
      message: isFinished 
        ? `Parabéns! Aula de ${subject || 'Estudo'} concluída com sucesso! +${xpGained} XP concedidos.`
        : `Progresso salvo: Página ${pageNum} de ${totalNum || '?'}. Continue assim! +${xpGained} XP concedidos.`
    });
  } catch (err) {
    console.error('Erro ao registrar estudo:', err);
    res.status(500).json({ error: 'Falha ao registrar estudo: ' + err.message });
  }
});

// GET /module-questions — Retorna bateria de questões de fixação do edital para o tópico
router.get('/module-questions', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
    const { subject, topic, limit = 5 } = req.query;

    if (!subject) {
      return res.status(400).json({ error: 'Disciplina (subject) é obrigatória.' });
    }

    // Busca questões no banco de dados para essa disciplina
    let query = `
      SELECT id, subject, topic, banca, type, question_text, options, correct_index, explanation
      FROM questions
      WHERE subject LIKE ?
    `;
    const params = [`%${subject}%`];

    if (topic && topic !== 'all') {
      query += ` AND (topic LIKE ? OR question_text LIKE ?)`;
      params.push(`%${topic}%`, `%${topic}%`);
    }

    query += ` ORDER BY RANDOM() LIMIT ?`;
    params.push(Math.max(1, Math.min(Number(limit) || 5, 20)));

    const rows = db.prepare(query).all(...params);

    const questions = rows.map(r => {
      let opts = r.options;
      try {
        if (typeof opts === 'string') opts = JSON.parse(opts);
      } catch {}
      return {
        id: r.id,
        subject: r.subject,
        topic: r.topic,
        banca: r.banca,
        question: r.question_text,
        options: opts,
        correctIndex: r.correct_index,
        explanation: r.explanation
      };
    });

    res.json({
      success: true,
      subject,
      topic,
      total: questions.length,
      questions
    });
  } catch (err) {
    logger.error('STUDY_ROOM', 'Erro ao buscar questões do módulo:', err);
    res.status(500).json({ error: 'Falha ao buscar questões do módulo: ' + err.message });
  }
});

// POST /answer-question — Registra resposta de fixação, sincroniza Caderno de Erros, Dashboard e XP
router.post('/answer-question', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const {
      questionId,
      questionText,
      options,
      selectedAnswer,
      correctIndex,
      explanation,
      subject = 'Geral',
      topic = 'Fixação',
      banca = 'Oficial'
    } = req.body;

    if (selectedAnswer === undefined || selectedAnswer === null) {
      return res.status(400).json({ error: 'selectedAnswer é obrigatório.' });
    }

    const toIndex = (val) => {
      if (typeof val === 'number') return val;
      const idx = ['A', 'B', 'C', 'D', 'E'].indexOf(String(val).trim().toUpperCase());
      return idx >= 0 ? idx : 0;
    };

    const selIdx = toIndex(selectedAnswer);
    const corrIdx = toIndex(correctIndex);
    const isCorrect = selIdx === corrIdx;

    let qId = questionId ? Number(questionId) : null;

    // Se o questionId não existir ou não estiver na tabela questions, garante a inserção
    if (qId) {
      const exists = db.prepare('SELECT id FROM questions WHERE id = ?').get(qId);
      if (!exists && questionText) {
        let optStr = '[]';
        if (Array.isArray(options)) {
          optStr = JSON.stringify(options);
        } else if (typeof options === 'object' && options !== null) {
          optStr = JSON.stringify(Object.values(options));
        }
        const ins = db.prepare(`
          INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
          VALUES (?, ?, ?, 'multiple_choice', ?, ?, ?, ?)
        `).run(
          subject,
          topic || 'Fixação',
          banca || 'Oficial',
          questionText,
          optStr,
          corrIdx,
          explanation || 'Gabarito Oficial fundamentado.'
        );
        qId = ins.lastInsertRowid;
      }
    } else if (questionText) {
      let optStr = '[]';
      if (Array.isArray(options)) {
        optStr = JSON.stringify(options);
      } else if (typeof options === 'object' && options !== null) {
        optStr = JSON.stringify(Object.values(options));
      }
      const ins = db.prepare(`
        INSERT INTO questions (subject, topic, banca, type, question_text, options, correct_index, explanation)
        VALUES (?, ?, ?, 'multiple_choice', ?, ?, ?, ?)
      `).run(
        subject,
        topic || 'Fixação',
        banca || 'Oficial',
        questionText,
        optStr,
        corrIdx,
        explanation || 'Gabarito Oficial fundamentado.'
      );
      qId = ins.lastInsertRowid;
    }

    // 1. Grava em question_answers (alimenta Dashboard e histórico)
    if (qId) {
      db.prepare(`
        INSERT INTO question_answers (question_id, selected_answer, is_correct, user_id, career_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(qId, selIdx, isCorrect ? 1 : 0, userId, careerId);
    }

    // 2. Se errou, registra automaticamente no Caderno de Erros
    if (!isCorrect && qId) {
      recordQuestionError(userId, careerId, qId, selIdx);
    }

    // 3. Concede XP: +10 XP por acerto, +2 XP por tentativa
    const xpToAdd = isCorrect ? 10 : 2;
    try {
      db.prepare(`UPDATE user_profiles SET xp = xp + ? WHERE id = ?`).run(xpToAdd, userId);
      db.prepare(`INSERT INTO user_xp_log (user_id, amount, reason) VALUES (?, ?, ?)`).run(
        userId,
        xpToAdd,
        `Questão de Fixação (${subject}): ${isCorrect ? 'Acerto (+10 XP)' : 'Tentativa (+2 XP)'}`
      );
    } catch (xpErr) {
      // fallback gracioso se tabela não tiver coluna xp
    }

    // 4. Log de Atividade
    logActivity('question', `Questão de ${subject} (${isCorrect ? 'Acerto' : 'Erro'})`, userId, careerId);

    res.json({
      success: true,
      questionId: qId,
      isCorrect,
      correctIndex: typeof correctIndex === 'number' ? ['A', 'B', 'C', 'D', 'E'][corrIdx] : correctIndex,
      explanation: explanation || 'Gabarito Oficial fundamentado.',
      xpGained: xpToAdd,
      savedToErrorNotebook: !isCorrect
    });
  } catch (err) {
    logger.error('STUDY_ROOM', 'Erro ao responder questão de fixação:', err);
    res.status(500).json({ error: 'Falha ao processar resposta: ' + err.message });
  }
});

// POST /register-past-study — Grava estudo retroativo (dias anteriores) com cálculo de XP e recálculo de streak
router.post('/register-past-study', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const {
      studyDate,
      subject,
      topic,
      durationMinutes,
      pagesRead,
      questionsCount,
      questionsCorrect,
      notes,
      materialId
    } = req.body;

    if (!studyDate) {
      return res.status(400).json({ error: 'A data do estudo (studyDate) é obrigatória.' });
    }

    if (!subject) {
      return res.status(400).json({ error: 'A disciplina (subject) é obrigatória.' });
    }

    const minutes = Math.max(parseInt(durationMinutes, 10) || 60, 5);
    const pRead = parseInt(pagesRead, 10) || 0;
    const qCount = parseInt(questionsCount, 10) || 0;
    const qCorrect = parseInt(questionsCorrect, 10) || 0;

    // Formata os timestamps com a data retroativa
    const dateOnly = studyDate.split('T')[0];
    const startedAt = `${dateOnly} 10:00:00`;
    const endMinutes = String(minutes % 60).padStart(2, '0');
    const endHours = String(Math.min(23, 10 + Math.floor(minutes / 60))).padStart(2, '0');
    const completedAt = `${dateOnly} ${endHours}:${endMinutes}:00`;

    // 1. Grava a sessão em study_sessions com a data passada
    const scopeNote = [
      `Disciplina: ${subject}`,
      topic ? `Assunto: ${topic}` : null,
      pRead > 0 ? `${pRead} páginas lidas` : null,
      qCount > 0 ? `${qCorrect}/${qCount} questões certas` : null,
      notes ? `Notas: ${notes}` : null
    ].filter(Boolean).join(' • ');

    const sessionResult = db.prepare(`
      INSERT INTO study_sessions (
        material_id, duration_minutes, status, user_id, career_id, started_at, completed_at, actual_duration_seconds, scope_note
      ) VALUES (?, ?, 'completed', ?, ?, ?, ?, ?, ?)
    `).run(
      materialId ? Number(materialId) : null,
      minutes,
      userId,
      careerId,
      startedAt,
      completedAt,
      minutes * 60,
      scopeNote || 'Estudo retroativo registrado'
    );

    const sessionId = sessionResult.lastInsertRowid;

    // 2. Calcula XP concedido: 20 XP por bloco de 30m + 2 XP por questão feita
    const xpGained = Math.round((minutes / 30) * 20 + (qCount * 2) + (pRead > 0 ? 10 : 0));

    // 3. Atualiza perfil do usuário (XP e histórico)
    try {
      db.prepare(`
        UPDATE user_profiles
        SET xp = xp + ?
        WHERE id = ?
      `).run(xpGained, userId);

      db.prepare(`
        INSERT INTO user_xp_log (user_id, amount, reason)
        VALUES (?, ?, ?)
      `).run(userId, xpGained, `Estudo Retroativo (${dateOnly}): ${subject}${topic ? ` - ${topic}` : ''}`);
    } catch (xpErr) {
      console.warn('Aviso ao atualizar XP retroativo:', xpErr.message);
    }

    // 4. Registra no log de atividade com a data do estudo
    try {
      db.prepare(`
        INSERT INTO activity_log (user_id, career_id, type, detail, created_at)
        VALUES (?, ?, 'study_session', ?, ?)
      `).run(
        userId,
        careerId,
        `[Estudo Retroativo] ${minutes}min de ${subject}${topic ? ` (${topic})` : ''} em ${dateOnly}`,
        completedAt
      );
    } catch (logErr) {
      console.warn('Aviso ao registrar log retroativo:', logErr.message);
    }

    // 5. Recalcula o streak do usuário considerando a nova data inserida
    let newStreak = 0;
    try {
      newStreak = calculateUserStreak(userId, careerId);
      db.prepare(`
        UPDATE user_profiles
        SET streakDays = ?
        WHERE id = ?
      `).run(newStreak, userId);
    } catch (streakErr) {
      console.warn('Aviso ao recalcular streak:', streakErr.message);
    }

    res.json({
      success: true,
      sessionId,
      xpGained,
      newStreak,
      studyDate: dateOnly,
      message: `Estudo de ${dateOnly} registrado com sucesso! +${xpGained} XP concedidos.`
    });
  } catch (err) {
    console.error('Erro ao registrar estudo retroativo:', err);
    res.status(500).json({ error: 'Falha ao registrar estudo retroativo: ' + err.message });
  }
});

function getEditalSubtopicsForSubject(careerId, subject) {
  const career = CAREERS_CATALOG[careerId] || CAREERS_CATALOG['atrfb'];
  if (!career) return [];

  const subtopics = [];
  const officialLessons = career.official_lessons || [];

  for (const l of officialLessons) {
    if (!subject || l.subject?.toLowerCase() === subject?.toLowerCase() || subject === 'all') {
      subtopics.push({
        lessonNumber: l.lessonNumber,
        subject: l.subject,
        title: l.title,
        keyTopics: l.keyTopics || '',
        careerId
      });
    }
  }

  // Se houver menos de 5 subtópicos mapeados para a matéria específica, complementa com a árvore granular do edital
  if (subject && subject !== 'all' && subtopics.length < 5) {
    const existingCount = subtopics.length;
    const additionalTemplates = [
      { title: `Jurisprudência dos Tribunais Superiores (STF/STJ) em ${subject}`, keyTopics: 'Súmulas vinculantes, teses de repercussão geral e precedentes qualificados' },
      { title: `Casos Práticos, Fiscalização e Pegadinhas da Banca em ${subject}`, keyTopics: 'Armadilhas conceituais, prazos e inversão de regra vs exceção' },
      { title: `Reta Final, Síntese Normativa e Fixação Estratégica de ${subject}`, keyTopics: 'Pontos de maior incidência e revisão ativa no padrão da banca' },
      { title: `Controle de Legalidade e Regime Sancionador em ${subject}`, keyTopics: 'Infrações, penalidades e processo administrativo de apuração' },
      { title: `Desafios de Alta Complexidade e Questões Inéditas em ${subject}`, keyTopics: 'Análise de itens de prova discursiva e pontos de corte' }
    ];

    let tIndex = 0;
    while (subtopics.length < 5 && tIndex < additionalTemplates.length) {
      const curNum = subtopics.length + 1;
      subtopics.push({
        lessonNumber: curNum,
        subject,
        title: `${curNum}. ${additionalTemplates[tIndex].title}`,
        keyTopics: additionalTemplates[tIndex].keyTopics,
        careerId
      });
      tIndex++;
    }
  }

  return subtopics;
}

// GET /edital-subtopics — Retorna árvore de subtópicos do edital da carreira e matéria
router.get('/edital-subtopics', (req, res) => {
  try {
    const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
    const { subject } = req.query;

    const subtopics = getEditalSubtopicsForSubject(careerId, subject);

    res.json({
      success: true,
      careerId,
      subject: subject || 'all',
      total: subtopics.length,
      subtopics
    });
  } catch (err) {
    res.status(500).json({ error: 'Falha ao buscar subtópicos do edital: ' + err.message });
  }
});

// POST /generate-lesson — Gera Apostila Digital Completa / Caderno de Doutrina Paginado via IA
router.post('/generate-lesson', async (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const { subject, topic, lessonNumber = 1, densityMode = 'doutrina_completa' } = req.body;

    if (!subject) {
      return res.status(400).json({ error: 'A disciplina (subject) é obrigatória.' });
    }

    const career = getCareerConfig(careerId);
    const numAula = parseInt(lessonNumber, 10) || 1;
    const prompt = getLessonGeneratorPrompt({
      subject,
      topic,
      lessonNumber: numAula,
      densityMode,
      careerId
    });

    let lessonData = null;
    try {
      lessonData = await generateJSON(prompt, LESSON_GENERATOR_SYSTEM_INSTRUCTION);
    } catch (aiErr) {
      logger.warn('STUDY_ROOM', `Falha ao gerar JSON de aula com IA: ${aiErr.message}. Usando fallback estruturado.`);
      lessonData = {
        titulo: topic || `Doutrina Completa de ${subject} • Aula 0${numAula}`,
        materia: subject,
        numeroAula: numAula,
        bancaTrend: `Cobrança frequente de regras gerais e pegadinhas em ${subject} pela banca ${career.bancas?.[0]?.name || 'oficial'}.`,
        resumoEstrategico: `Estudo sistemático dos institutos de ${subject} voltado para o edital do ${career.name}.`,
        totalPages: 5,
        pages: [
          {
            pageNumber: 1,
            pageTitle: '1. Doutrina Aprofundada & Fundamentos Dogmáticos',
            category: 'Doutrina & Teoria',
            leadText: `Compreensão conceitual dos pontos essenciais exigidos no edital para ${subject}.`,
            bodyText: `O estudo da matéria de ${subject} envolve a análise aprofundada das normas de regência, princípios constitucionais aplicáveis e correntes doutrinárias consolidadas pelos tribunais superiores.\n\nÉ indispensável que o candidato domine a distinção entre a regra geral e as hipóteses de exceção, que constituem o núcleo dos itens elaborados pela banca.`,
            deepDiveText: `A jurisprudência dominante reforça que o cumprimento estrito dos requisitos legais e a conformidade formal são elementos indispensáveis de validação dos atos relacionados a ${subject}.`
          },
          {
            pageNumber: 2,
            pageTitle: '2. Esquemas Estruturais, Tabelas & Mnemônicos',
            category: 'Esquemas & Tabelas',
            leadText: 'Quadro comparativo dos principais critérios para rápida fixação visual.',
            bodyText: 'Utilize os parâmetros comparativos para não confundir institutos correlatos na hora da prova.',
            tableData: {
              headers: ['Instituto / Regra', 'Conceito Central', 'Ponto Crítico na Prova', 'Exceção'],
              rows: [
                ['Regra Geral', `Aplicação prioritária em ${subject}`, 'Cai com alta frequência literal', 'Exige previsão expressa'],
                ['Procedimento Especial', 'Casos com rito diferenciado', 'A banca tenta aplicar a regra geral', 'Hipóteses taxativas'],
                ['Precedente Obrigatório', 'Entendimento pacificado', 'Cobrança do teor de súmula', 'Divergência minoritária']
              ]
            },
            mnemonics: [
              { code: 'LEITURA + FIXAÇÃO', meaning: 'Combine estudo de texto com resolução de questões comentadas.' },
              { code: 'ATENÇÃO ÀS EXCEÇÕES', meaning: 'Palavras restritivas (sempre, nunca) frequentemente indicam assertiva incorreta.' }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: '3. Casos Concretos & Análise de Pegadinhas da Banca',
            category: 'Casos Práticos & Pegadinhas',
            leadText: 'Análise de situações hipotéticas práticas simulando enunciados reais de concurso.',
            bodyText: 'Fique atento à inversão de papéis e à troca de conceitos semelhantes.',
            practicalCases: [
              {
                title: `Pegadinha Clássica da Banca em ${subject}`,
                scenario: `O examinador apresenta uma situação fática alegando que a regra geral deve ser aplicada sem qualquer ressalva.`,
                tip: `Dica de Ouro: Identifique se o caso se enquadra em uma das exceções legais expressas antes de assinalar.`
              }
            ]
          },
          {
            pageNumber: 4,
            pageTitle: '4. Legislação Litigiosa, Artigos de Ouro & Jurisprudência',
            category: 'Lei Seca & Súmulas',
            leadText: 'Dispositivos normativos e súmulas de leitura obrigatória para o concurso.',
            bodyText: 'Texto literal com ênfase nas palavras-chave mais cobradas.',
            lawArticles: [
              { article: 'Norma de Regência', text: `Dispositivo legal e princípios reitores aplicáveis à disciplina de ${subject}.` }
            ]
          },
          {
            pageNumber: 5,
            pageTitle: '5. Fixação de Alto Rendimento & Questão Comentada',
            category: 'Fixação & Questões',
            leadText: 'Treino prático com assertiva comentada no modelo oficial da banca.',
            bodyText: 'Analise o comando e resolva o item de fixação.',
            question: {
              id: Date.now(),
              question: `Em relação aos fundamentos da disciplina ${subject}, assinale a alternativa que expressa o entendimento consolidado nas provas de concurso público:`,
              options: {
                A: "A interpretação sistemática e a observância aos princípios constitucionais norteiam a aplicação das regras do edital.",
                B: "As bancas examinadoras anulam automaticamente qualquer questão que envolva jurisprudência recente.",
                C: "A literalidade da lei afasta a necessidade de compreensão doutrinária.",
                D: "Os prazos fixados em norma regulamentar possuem natureza meramente sugestiva.",
                E: "Não é cabível controle de legalidade nos atos vinculados."
              },
              answer: "A",
              explanation: "A alternativa A está correta porque a interpretação harmônica e o respeito à ordem constitucional regem a aplicação do direito nos certames."
            }
          }
        ]
      };
    }

    // Salva o caderno no banco de dados do usuário como material de estudo digital permanente
    const finalTitle = lessonData.titulo || `${subject} - Aula ${numAula}`;
    const cleanContentMarkdown = (lessonData.pages || []).map(p => `## ${p.pageTitle}\n\n${p.leadText}\n\n${p.bodyText}${p.deepDiveText ? `\n\n### Aprofundamento\n${p.deepDiveText}` : ''}`).join('\n\n---\n\n');

    const toc = (lessonData.pages || []).map(p => ({ title: p.pageTitle, page: p.pageNumber }));
    const readingMetrics = {
      totalWords: cleanContentMarkdown.split(/\s+/).length,
      wordsPerPage: Math.round(cleanContentMarkdown.split(/\s+/).length / (lessonData.totalPages || 5)),
      estimatedReadingMinutesTotal: 15,
      estimatedPagesPerHour: 20
    };

    const insertStmt = db.prepare(`
      INSERT INTO study_materials (
        filename, filepath, subject, lesson_number, title, summary, content_text, analysis_json,
        caderno_enxuto, is_native_lesson, current_page, total_pages, theory_pages, exercise_pages, has_exercises,
        table_of_contents_json, reading_metrics_json, user_id, career_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, 5, 5, 1, 1, ?, ?, ?, ?)
    `);

    const result = insertStmt.run(
      `[Caderno IA] ${finalTitle}.md`,
      `caderno_digital://${Date.now()}`,
      subject,
      numAula,
      finalTitle,
      lessonData.resumoEstrategico || `Apostila Digital Completa de ${subject}`,
      cleanContentMarkdown,
      JSON.stringify(lessonData),
      JSON.stringify(lessonData),
      JSON.stringify(toc),
      JSON.stringify(readingMetrics),
      userId,
      careerId
    );

    res.json({
      success: true,
      materialId: result.lastInsertRowid,
      lesson: lessonData
    });
  } catch (err) {
    logger.error('STUDY_ROOM', 'Erro ao gerar aula com IA:', err);
    res.status(500).json({ error: 'Falha ao gerar apostila digital com IA: ' + err.message });
  }
});

// POST /expand-lesson — Expande a apostila teórica gerando novas páginas temáticas aprofundadas
router.post('/expand-lesson', async (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const { materialId, subject, topic, densityMode = 'doutrina_completa', pagesCount = 5 } = req.body;

    if (!materialId && !subject) {
      return res.status(400).json({ error: 'materialId ou subject é obrigatório.' });
    }

    let existingMaterial = null;
    if (materialId) {
      existingMaterial = db.prepare('SELECT * FROM study_materials WHERE id = ?').get(materialId);
    }

    const career = getCareerConfig(careerId);
    let parsedLesson = null;
    if (existingMaterial?.caderno_enxuto || existingMaterial?.analysis_json) {
      try {
        const rawJson = existingMaterial.caderno_enxuto || existingMaterial.analysis_json;
        parsedLesson = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
      } catch {}
    }

    const currentPages = (parsedLesson?.pages && Array.isArray(parsedLesson.pages)) ? parsedLesson.pages : [];
    const startPage = currentPages.length + 1;
    const existingTitles = currentPages.map(p => p.pageTitle);
    const targetSubject = subject || existingMaterial?.subject || 'Geral';
    const targetTopic = topic || parsedLesson?.titulo || existingMaterial?.title || targetSubject;

    const prompt = getLessonExpansionPrompt({
      subject: targetSubject,
      topic: targetTopic,
      existingTitles,
      startPageNumber: startPage,
      pagesToGenerate: pagesCount,
      densityMode,
      careerId
    });

    let newPagesData = null;
    try {
      newPagesData = await generateJSON(prompt, LESSON_GENERATOR_SYSTEM_INSTRUCTION);
    } catch (aiErr) {
      logger.warn('STUDY_ROOM', `Falha ao expandir páginas com IA: ${aiErr.message}. Usando fallback denso.`);
      newPagesData = {
        pages: [
          {
            pageNumber: startPage,
            pageTitle: `${startPage}. Tópicos Dogmáticos Avançados & Desdobramentos`,
            category: 'Doutrina & Teoria',
            leadText: `Aprofundamento dogmático sobre os aspectos de alta complexidade de ${targetTopic}.`,
            bodyText: `A doutrina especializada aprofunda as divergências conceituais e os reflexos operacionais de ${targetTopic}, destacando a responsabilidade dos agentes públicos e o regime de controle da administração.\n\nNas provas da banca ${career.bancas?.[0]?.name || 'examinadora'}, a cobrança desse ponto exige a articulação entre os princípios gerais e a regra de hermenêutica específica.`,
            deepDiveText: `O controle de legalidade abrange a verificação dos motivos determinantes e o atendimento da finalidade pública estabelecida em lei.`
          },
          {
            pageNumber: startPage + 1,
            pageTitle: `${startPage + 1}. Jurisprudência do STF/STJ & Precedentes Vinculantes`,
            category: 'Lei Seca & Súmulas',
            leadText: `Teses de repercussão geral e enunciados sumulares aplicáveis a ${targetTopic}.`,
            bodyText: `Os Tribunais Superiores firmaram entendimento vinculante sobre a matéria, pacificando as controvérsias entre a literalidade estrita e a interpretação teleológica.`,
            lawArticles: [
              { article: 'Tese STF / STJ', text: `Precedente qualificado com incidência direta nas provas objetivas e discursivas de ${career.name}.` }
            ]
          },
          {
            pageNumber: startPage + 2,
            pageTitle: `${startPage + 2}. Tabela Comparativa de Exceções & Peculiaridades`,
            category: 'Esquemas & Tabelas',
            leadText: `Quadro analítico para diferenciar hipóteses de incidência e vedações legais.`,
            bodyText: `Fixe as hipóteses de exceção através da correlação entre o texto normativo e o caso prático.`,
            tableData: {
              headers: ['Hipótese', 'Regra Geral', 'Exceção / Vedação', 'Jurisprudência'],
              rows: [
                ['Caso A', 'Aplicação plena', 'Ressalva expressa em lei', 'Tema Vinculante'],
                ['Caso B', 'Competência privativa', 'Delegação restrita', 'Súmula do STF/STJ'],
                ['Caso C', 'Prazo ordinário', 'Interrupção legal', 'Precedente pacificado']
              ]
            }
          },
          {
            pageNumber: startPage + 3,
            pageTitle: `${startPage + 3}. Casos Concretos & Fiscalização na Prática`,
            category: 'Casos Práticos & Pegadinhas',
            leadText: `Simulação de situações de auditoria, fiscalização e julgamento de processos.`,
            bodyText: `Análise minuciosa de como as questões de concurso formulam enunciados contextualizados.`,
            practicalCases: [
              {
                title: 'Estudo de Caso Prático Avançado',
                scenario: `Situação hipotética de análise documental e conformidade jurídica em matéria de ${targetTopic}...`,
                tip: 'Atenção aos prazos preclusivos e ao dever de fundamentação expressa.'
              }
            ]
          },
          {
            pageNumber: startPage + 4,
            pageTitle: `${startPage + 4}. Questão Inédita Comentada de Alta Complexidade`,
            category: 'Fixação & Questões',
            leadText: `Questão inédita formulada no perfil da banca ${career.bancas?.[0]?.name || 'oficial'}.`,
            bodyText: `Resolva o item e confira a fundamentação técnica completa.`,
            question: {
              id: (startPage + 4) * 10,
              question: `Em relação aos desdobramentos aprofundados de "${targetTopic}", assinale a alternativa escorreita:`,
              options: {
                A: "A interpretação sistemática aliada ao princípio da supremacia do interesse público orienta a aplicação do instituto.",
                B: "A discricionariedade administrativa afasta o controle judicial de legalidade e moralidade.",
                C: "Os precedentes em controle concentrado de constitucionalidade possuem efeitos meramente persuasivos.",
                D: "A responsabilidade civil do Estado depende de dolo em todas as condutas comissivas.",
                E: "A presunção de legitimidade dos atos públicos é absoluta e impede a impugnação probatória."
              },
              answer: "A",
              explanation: "Correta a alternativa A. A hermenêutica moderna e a jurisprudência fixam a supremacia do interesse público como vetor interpretativo cogente."
            }
          }
        ]
      };
    }

    const addedPages = Array.isArray(newPagesData?.pages) ? newPagesData.pages : [];
    const mergedPages = [...currentPages, ...addedPages];
    const totalPagesCount = mergedPages.length;

    const updatedLesson = {
      ...(parsedLesson || {}),
      titulo: targetTopic,
      materia: targetSubject,
      totalPages: totalPagesCount,
      pages: mergedPages
    };

    if (materialId) {
      db.prepare(`
        UPDATE study_materials
        SET caderno_enxuto = ?,
            analysis_json = ?,
            total_pages = ?,
            theory_pages = ?
        WHERE id = ?
      `).run(
        JSON.stringify(updatedLesson),
        JSON.stringify(updatedLesson),
        totalPagesCount,
        totalPagesCount,
        materialId
      );
    }

    logActivity('study', `Expandiu apostila teórica de ${targetSubject} (+${addedPages.length} páginas • Total: ${totalPagesCount} págs)`, userId, careerId);

    res.json({
      success: true,
      materialId,
      addedCount: addedPages.length,
      totalPages: totalPagesCount,
      lesson: updatedLesson
    });

  } catch (err) {
    logger.error('STUDY_ROOM', 'Erro ao expandir apostila:', err);
    res.status(500).json({ error: 'Falha ao expandir apostila teórica: ' + err.message });
  }
});

// POST /generate-flashcards — Gera baralho de flashcards Anki a partir da teoria lida
router.post('/generate-flashcards', async (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'atrfb';
    const { subject, topic, lessonContent, count = 5 } = req.body;

    if (!subject) {
      return res.status(400).json({ error: 'Disciplina (subject) é obrigatória.' });
    }

    const targetTopic = topic || `Estudo de ${subject}`;
    const prompt = getLessonFlashcardsPrompt({
      subject,
      topic: targetTopic,
      lessonContent,
      count
    });

    let flashcardData = null;
    try {
      flashcardData = await generateJSON(prompt, 'Você é especialista em mnemotécnica e repetição espaçada (Anki) para concursos.');
    } catch (aiErr) {
      flashcardData = {
        deckTitle: `Baralho: ${targetTopic}`,
        subject,
        cards: [
          {
            front: `Qual é o princípio fundamental e regra de ouro em ${targetTopic}?`,
            back: `A observância estrita da legalidade e da conformidade com o edital do certame.`,
            topic: targetTopic
          },
          {
            front: `Qual é a distinção dogmática essencial cobrada em ${targetTopic}?`,
            back: `A regra geral vincula a administração; exceções demandam previsão legal e autorização formal.`,
            topic: targetTopic
          },
          {
            front: `Qual o prazo prescricional / decadencial típico aplicável ao tema?`,
            back: `Prazo quinquenal (5 anos), ressalvadas as ações de ressarcimento por atos de improbidade dolosos (Tema 897/STF).`,
            topic: targetTopic
          },
          {
            front: `Como a banca examinadora formula pegadinhas sobre ${targetTopic}?`,
            back: `Invertendo termos correlatos ou trocando 'ato discricionário' por 'ato vinculado'.`,
            topic: targetTopic
          },
          {
            front: `Qual jurisprudência do STF/STJ é de conhecimento obrigatório neste ponto?`,
            back: `O entendimento fixado em tese de repercussão geral com eficácia contra todos.`,
            topic: targetTopic
          }
        ]
      };
    }

    const cards = Array.isArray(flashcardData?.cards) ? flashcardData.cards : [];
    const savedCards = [];

    // Cria ou recupera o deck correspondente
    let deck = db.prepare('SELECT id FROM flashcard_decks WHERE user_id = ? AND career_id = ? AND subject = ? AND topic = ?').get(userId, careerId, subject, targetTopic);
    if (!deck) {
      const insDeck = db.prepare('INSERT INTO flashcard_decks (user_id, career_id, topic, subject) VALUES (?, ?, ?, ?)').run(userId, careerId, targetTopic, subject);
      deck = { id: insDeck.lastInsertRowid };
    }

    const insCard = db.prepare(`
      INSERT INTO flashcards (deck_id, user_id, front, back, next_review)
      VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    `);

    db.transaction(() => {
      for (const c of cards) {
        const info = insCard.run(deck.id, userId, c.front, c.back);
        savedCards.push({ id: info.lastInsertRowid, deckId: deck.id, ...c });
      }
    })();

    // XP por criar baralho
    try {
      db.prepare(`UPDATE user_profiles SET xp = xp + 15 WHERE id = ?`).run(userId);
      db.prepare(`INSERT INTO user_xp_log (user_id, amount, reason) VALUES (?, 15, ?)`).run(userId, `Geração de Flashcards (${subject})`);
    } catch {}

    logActivity('flashcard', `Gerou baralho com ${savedCards.length} flashcards de ${subject}`, userId, careerId);

    res.json({
      success: true,
      deckId: deck.id,
      deckTitle: flashcardData.deckTitle || `Baralho: ${targetTopic}`,
      count: savedCards.length,
      cards: savedCards
    });

  } catch (err) {
    logger.error('STUDY_ROOM', 'Erro ao gerar flashcards:', err);
    res.status(500).json({ error: 'Falha ao gerar flashcards: ' + err.message });
  }
});

// GET /past-studies — Lista histórico de sessões de estudo retroativas
router.get('/past-studies', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || null;

    const rows = db.prepare(`
      SELECT 
        ss.id,
        ss.material_id,
        ss.duration_minutes,
        ss.started_at,
        ss.completed_at,
        ss.scope_note,
        COALESCE(sm.subject, 'Estudo Geral') as subject,
        COALESCE(sm.title, '') as title,
        substr(ss.started_at, 1, 10) as study_date
      FROM study_sessions ss
      LEFT JOIN study_materials sm ON ss.material_id = sm.id
      WHERE ss.user_id = ? AND ss.status = 'completed'
        AND (ss.career_id = ? OR ? IS NULL OR ss.career_id IS NULL)
      ORDER BY ss.started_at DESC
      LIMIT 50
    `).all(userId, careerId, careerId);

    const items = rows.map(r => {
      let subj = r.subject;
      if ((!subj || subj === 'Estudo Geral') && r.scope_note) {
        const mSubj = r.scope_note.match(/Disciplina:\s*([^•]+)/i);
        if (mSubj) subj = mSubj[1].trim();
      }
      return {
        ...r,
        subject: subj || 'Estudo Geral'
      };
    });

    res.json({
      success: true,
      items
    });
  } catch (err) {
    console.error('Erro ao buscar estudos passados:', err);
    res.status(500).json({ error: 'Falha ao buscar histórico de estudos: ' + err.message });
  }
});

// DELETE /past-study/:id — Remove um lançamento de estudo retroativo
router.delete('/past-study/:id', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const sessionId = parseInt(req.params.id, 10);

    const session = db.prepare(`
      SELECT id, career_id FROM study_sessions WHERE id = ? AND user_id = ?
    `).get(sessionId, userId);

    if (!session) {
      return res.status(404).json({ error: 'Sessão de estudo não encontrada.' });
    }

    db.prepare(`DELETE FROM study_sessions WHERE id = ? AND user_id = ?`).run(sessionId, userId);

    // Recalcula o streak
    let newStreak = 0;
    try {
      newStreak = calculateUserStreak(userId, session.career_id);
      db.prepare(`UPDATE user_profiles SET streakDays = ? WHERE id = ?`).run(newStreak, userId);
    } catch (e) {}

    res.json({
      success: true,
      newStreak,
      message: 'Lançamento de estudo removido com sucesso.'
    });
  } catch (err) {
    console.error('Erro ao excluir estudo retroativo:', err);
    res.status(500).json({ error: 'Falha ao excluir estudo: ' + err.message });
  }
});

// GET /materials — List all uploaded materials with study progress
router.get('/materials', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;

    let sql = `
      SELECT 
        sm.id, sm.filename, sm.filepath, sm.subject, sm.lesson_number, sm.title, sm.summary, sm.created_at,
        sm.studied_at, sm.theory_completed, sm.questions_completed, sm.current_page, sm.total_pages, sm.notes,
        sm.theory_pages, sm.exercise_pages, sm.has_exercises, sm.table_of_contents_json, sm.reading_metrics_json,
        sm.caderno_enxuto, sm.content_text,
        COUNT(DISTINCT ss.id) as session_count,
        SUM(CASE WHEN ss.status = 'completed' THEN 1 ELSE 0 END) as completed_sessions,
        MAX(ss.completed_at) as last_studied_at,
        COUNT(sq.id) as total_questions,
        SUM(CASE WHEN sq.is_correct = 1 THEN 1 ELSE 0 END) as correct_questions
      FROM study_materials sm
      LEFT JOIN study_sessions ss ON sm.id = ss.material_id AND ss.user_id = ?
      LEFT JOIN session_questions sq ON ss.id = sq.session_id
      WHERE sm.user_id = ?
    `;
    const params = [userId, userId];

    if (careerId) {
      sql += ` AND (sm.career_id = ? OR sm.career_id IS NULL) `;
      params.push(careerId);
    }

    sql += ` GROUP BY sm.id ORDER BY sm.subject ASC, CASE WHEN sm.lesson_number IS NULL THEN 999 ELSE sm.lesson_number END ASC, sm.created_at DESC`;

    const materials = db.prepare(sql).all(...params);

    const formatted = materials.map(m => ({
      ...m,
      pdfUrl: toPdfUrl(m.filepath),
      tableOfContents: m.table_of_contents_json ? JSON.parse(m.table_of_contents_json) : [],
      readingMetrics: m.reading_metrics_json ? JSON.parse(m.reading_metrics_json) : null,
      accuracy_pct: m.total_questions > 0 ? Math.round((m.correct_questions / m.total_questions) * 100) : null
    }));

    res.json({ materials: formatted });
  } catch (error) {
    console.error('Erro ao listar materiais:', error);
    res.status(500).json({ error: 'Falha ao listar materiais.' });
  }
});

// GET /materials/:id/pace — Inteligência de Ritmo de Leitura e Retomada de Sessão
router.get('/materials/:id/pace', (req, res) => {
  try {
    const { id } = req.params;
    const userId = getAuthenticatedUserId(req);

    const pace = studyCadenceService.calculateReadingPace(id, userId);
    res.json(pace);
  } catch (error) {
    console.error('Erro ao calcular ritmo de estudo:', error);
    res.status(error.message.includes('não encontrado') ? 404 : 500).json({ error: error.message || 'Falha ao calcular ritmo de estudo.' });
  }
});

// GET /catalog — Grouped catalog by Subject for study track overview (dynamic per career)
router.get('/catalog', (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
    const careerCfg = getCareerConfig(careerId);

    const rows = db.prepare(`
      SELECT 
        sm.id, sm.filename, sm.filepath, sm.subject, sm.lesson_number, sm.title, sm.summary, sm.created_at,
        sm.studied_at, sm.theory_completed, sm.questions_completed, sm.is_native_lesson,
        COUNT(DISTINCT ss.id) as session_count,
        SUM(CASE WHEN ss.status = 'completed' THEN 1 ELSE 0 END) as completed_sessions,
        MAX(ss.completed_at) as last_studied_at,
        COUNT(sq.id) as total_questions,
        SUM(CASE WHEN sq.is_correct = 1 THEN 1 ELSE 0 END) as correct_questions
      FROM study_materials sm
      LEFT JOIN study_sessions ss ON sm.id = ss.material_id AND ss.user_id = ?
      LEFT JOIN session_questions sq ON ss.id = sq.session_id
      WHERE sm.user_id = ?
      GROUP BY sm.id
      ORDER BY sm.subject ASC, CASE WHEN sm.lesson_number IS NULL THEN 999 ELSE sm.lesson_number END ASC, sm.created_at DESC
    `).all(userId, userId);

    // Fetch active reviews for materials
    const allReviews = db.prepare(`
      SELECT material_id, review_type, scheduled_date, status
      FROM study_reviews
      WHERE status = 'pending' AND user_id = ?
      ORDER BY scheduled_date ASC
    `).all(userId);

    const reviewsByMaterial = {};
    for (const rev of allReviews) {
      if (!reviewsByMaterial[rev.material_id]) reviewsByMaterial[rev.material_id] = [];
      reviewsByMaterial[rev.material_id].push(rev);
    }

    const bySubject = {};
    const subjectLookup = {};

    // Initialize all official subjects of the active career so they always show up
    for (const info of careerCfg.subjects) {
      bySubject[info.subject] = {
        subject: info.subject,
        wave: info.wave,
        weightQuestions: info.questions,
        percentage: info.percentage,
        description: info.description,
        totalAulas: 0,
        concluidas: 0,
        aulas: []
      };
      subjectLookup[info.subject.toLowerCase().trim()] = info.subject;
    }

    // Populate with actual uploaded or native materials strictly matching this career
    for (const r of rows) {
      const rawSubj = (r.subject || '').toLowerCase().trim();
      const matchedSubject = subjectLookup[rawSubj] || 
        Object.keys(subjectLookup).find(k => k.includes(rawSubj) || rawSubj.includes(k));

      // Se o material pertencer a outra carreira (ex: Direito Tributário enquanto estuda SES-RJ), ignora no catálogo
      if (!matchedSubject) continue;

      const canonicalSubj = subjectLookup[matchedSubject] || matchedSubject;
      const targetBucket = bySubject[canonicalSubj];
      if (!targetBucket) continue;

      const isCompleted = r.completed_sessions > 0 || r.questions_completed === 1;
      targetBucket.totalAulas++;
      if (isCompleted) targetBucket.concluidas++;
      
      targetBucket.aulas.push({
        ...r,
        pdfUrl: toPdfUrl(r.filepath),
        isCompleted,
        reviews: reviewsByMaterial[r.id] || [],
        accuracy_pct: r.total_questions > 0 ? Math.round((r.correct_questions / r.total_questions) * 100) : null
      });
    }

    res.json({
      careerId: careerCfg.id,
      careerName: careerCfg.name,
      catalog: Object.values(bySubject),
      officialLessons: careerCfg.official_lessons || []
    });
  } catch (error) {
    console.error('Erro ao gerar catálogo:', error);
    res.status(500).json({ error: 'Falha ao gerar catálogo.' });
  }
});

// POST /generate-native-lesson — Modo de Estudo Sem PDF (Aulas Nativas do Edital)
router.post('/generate-native-lesson', async (req, res) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const careerId = req.headers['x-exam-id'] || req.body.careerId || 'marinha_rm2';
    const { subject, lessonNumber, title, keyTopics } = req.body;

    if (!subject || !title) {
      return res.status(400).json({ error: 'Disciplina e Título da aula são obrigatórios.' });
    }

    const careerCfg = getCareerConfig(careerId);

    // Verificar se já existe aula nativa salva no banco para este usuário
    const existing = db.prepare(`
      SELECT id, title, subject, lesson_number, summary, content_text, caderno_enxuto, analysis_json
      FROM study_materials
      WHERE user_id = ? AND subject = ? AND lesson_number = ? AND is_native_lesson = 1
    `).get(userId, subject, lessonNumber);

    if (existing && !req.body.force) {
      return res.json({
        materialId: existing.id,
        cached: true,
        title: existing.title,
        subject: existing.subject,
        lessonNumber: existing.lesson_number,
        summary: existing.summary,
        content: existing.content_text,
        analysis: JSON.parse(existing.analysis_json || '{}'),
        message: 'Aula nativa carregada do seu acervo com sucesso!'
      });
    }

    // Verificar cache global compartilhado entre todos os usuários
    const globalCached = db.prepare(`
      SELECT content_markdown, lesson_title, fixation_questions_json
      FROM native_lessons_cache
      WHERE career_id = ? AND subject = ? AND lesson_number = ?
    `).get(careerId, subject, lessonNumber);

    let lessonMarkdown = globalCached?.content_markdown || null;
    let summaryText = null;

    if (!lessonMarkdown) {
      const bancasNomes = (careerCfg.bancas || []).map(b => b.name).join(', ');

      const systemPrompt = `Você é um Professor Titular, Mentor Estrategista e Examinador de Alta Performance no concurso ${careerCfg.name} (${careerCfg.role}).
Sua missão é redigir uma AULA COMPLETA, APROFUNDADA, DIDÁTICA E RIGOROSAMENTE DIRECIONADA PARA GABARITAR a prova da banca examinadora oficial (${bancasNomes}).

ESTRUTURA OBRIGATÓRIA DA AULA:
# 🎯 ${subject} — Aula ${lessonNumber}: ${title}

## 1. 📌 Relevância Estratégica & Foco da Banca
Apresente a incidência deste tema nas provas anteriores, o perfil de cobrança da banca e as palavras-chave críticas.

## 2. 📚 Teoria Completa & Letra da Norma/Legislação
Apresente a fundamentação teórica rigorosa, citando expressamente os artigos, leis, decretos, súmulas, regulamentos ou normas militares/civis pertinentes com explicações claras, técnicas e exemplos práticos contextualizados.

## 3. ⚠️ Pegadinhas Clássicas & Armadilhas de Prova
Aponte as 3 a 5 pegadinhas mais recorrentes nas bancas e como o examinador tenta induzir o candidato ao erro.

## 4. 💡 Mnemônicos & Esquemas Mentais de Memorização
Apresente tabelas comparativas, quadros sinóticos e mnemônicos inteligentes para fixação imediata.

## 5. 📝 Resumo Executivo em Tópicos (Checklist Final)
Um checklist dos 7 a 10 pontos inegociáveis que o concurseiro precisa saber de cor antes da prova.`;

      const userPrompt = `Gere a aula completa e aprofundada:
- Concurso: ${careerCfg.name}
- Disciplina: ${subject}
- Número da Aula: ${lessonNumber}
- Tópico Principal: ${title}
- Tópicos-Chave: ${keyTopics || title}

Redija uma apostila textual rica, formatada em Markdown, sem economizar nos detalhes e na profundidade dos artigos e conceitos cobrados.`;

      lessonMarkdown = await generateContent(userPrompt, systemPrompt);

      // Extrai o resumo estratégico diretamente da aula gerada (instantâneo, economiza cota e tempo)
      const sectionMatch = lessonMarkdown.match(/## 1\.[^\n]*\n([\s\S]*?)(?=## 2\.|$)/);
      if (sectionMatch && sectionMatch[1] && sectionMatch[1].trim()) {
        summaryText = sectionMatch[1].trim().substring(0, 600);
      } else {
        summaryText = lessonMarkdown.substring(0, 400).trim() + '...';
      }

      // Salva no cache global
      try {
        db.prepare(`
          INSERT OR REPLACE INTO native_lessons_cache (career_id, subject, lesson_number, topic, lesson_title, content_markdown)
          VALUES (?, ?, ?, ?, ?, ?)
        `).run(careerId, subject, lessonNumber, keyTopics || title, title, lessonMarkdown);
      } catch (cacheErr) {
        console.warn('Erro ao salvar no native_lessons_cache:', cacheErr.message);
      }
    } else {
      summaryText = `Aula oficial do edital carregada instantaneamente do cache de alta performance: ${title} (${subject}).`;
    }

    const filename = `Aula_${String(lessonNumber).padStart(2, '0')}_${subject.replace(/[^a-zA-Z0-9]/g, '_')}_Nativa.md`;
    const filepath = path.join(uploadsDir, filename);

    // Salva arquivo no disco para manter integridade de caminho de forma assíncrona
    try { await fs.promises.writeFile(filepath, lessonMarkdown, 'utf8'); } catch(e){}

    const analysisMock = {
      titulo: title,
      materia: subject,
      numeroAula: lessonNumber,
      resumoEstrategico: summaryText,
      topicosPrincipais: (keyTopics || title).split(',').map(s => s.trim())
    };

    const stmt = db.prepare(`
      INSERT INTO study_materials (filename, filepath, subject, lesson_number, title, summary, content_text, caderno_enxuto, analysis_json, user_id, is_native_lesson, career_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
    `);

    const result = stmt.run(
      filename,
      filepath,
      subject,
      lessonNumber,
      title,
      summaryText,
      lessonMarkdown,
      lessonMarkdown,
      JSON.stringify(analysisMock),
      userId,
      careerId
    );

    const materialId = result.lastInsertRowid;

    // Log de atividade
    db.prepare('INSERT INTO activity_log (type, detail, user_id, career_id) VALUES (?, ?, ?, ?)')
      .run('material', `Aula do Edital: ${subject} - Aula ${lessonNumber} (${title})`, userId, careerId);

    res.json({
      materialId,
      cached: false,
      title,
      subject,
      lessonNumber,
      summary: summaryText,
      content: lessonMarkdown,
      analysis: analysisMock,
      message: `Aula ${lessonNumber} gerada com sucesso! Pronto para iniciar o estudo. 📖⚡`
    });

  } catch (err) {
    logger.error('STUDY_ROOM', `Erro ao gerar aula nativa do edital (${req.body.subject} - Aula ${req.body.lessonNumber}): ${err.message}`, err.stack);
    res.status(500).json({ error: 'Falha ao formular aula do edital: ' + err.message });
  }
});

// GET /materials/:id — Get material details with full analysis
router.get('/materials/:id', (req, res) => {
  try {
    const material = db.prepare(`
      SELECT * FROM study_materials WHERE id = ?
    `).get(req.params.id);

    if (!material) {
      return res.status(404).json({ error: 'Material não encontrado.' });
    }

    // Parse JSON fields
    material.analysis = JSON.parse(material.analysis_json || '{}');
    material.pdfUrl = toPdfUrl(material.filepath);

    // Get associated sessions
    const sessions = db.prepare(`
      SELECT id, duration_minutes, actual_duration_seconds, status, scope_note, started_at, completed_at
      FROM study_sessions 
      WHERE material_id = ? 
      ORDER BY started_at DESC
    `).all(req.params.id);

    res.json({ material, sessions });
  } catch (error) {
    console.error('Erro ao buscar material:', error);
    res.status(500).json({ error: 'Falha ao buscar material.' });
  }
});

// POST /materials/:id/caderno-enxuto — Gera ou retorna o Caderno Enxuto da apostila com DNA de Banca
router.post('/materials/:id/caderno-enxuto', async (req, res) => {
  try {
    const material = db.prepare('SELECT id, title, subject, content_text, caderno_enxuto, career_id FROM study_materials WHERE id = ?')
      .get(req.params.id);

    if (!material) {
      return res.status(404).json({ error: 'Material não encontrado.' });
    }

    // Se já estiver em cache no banco e não for pedido force, retorna direto
    if (material.caderno_enxuto && !req.body.force) {
      return res.json({ cadernoEnxuto: material.caderno_enxuto, cached: true });
    }

    if (!material.content_text || material.content_text.trim().length < 50) {
      return res.status(400).json({ error: 'O conteúdo de texto da apostila não está disponível para gerar o caderno enxuto.' });
    }

    const careerId = material.career_id || 'atrfb';
    const careerCfg = getCareerConfig(careerId);
    const bancaName = careerCfg.bancas?.[0]?.name || 'banca oficial';

    const prompt = buildCadernoEnxutoPrompt(material.content_text, material.subject, material.title, careerId);
    const cadernoMarkdown = await generateContent(
      prompt,
      `Você é um Professor Mentor e Estrategista de Alta Performance para ${careerCfg.name} (${bancaName}). Resuma com precisão cirúrgica.`
    );

    // Salva no banco de dados para acesso instantâneo futuro
    db.prepare('UPDATE study_materials SET caderno_enxuto = ? WHERE id = ?').run(cadernoMarkdown, material.id);

    res.json({ cadernoEnxuto: cadernoMarkdown, cached: false });
  } catch (error) {
    console.error('Erro ao gerar Caderno Enxuto FGV:', error);
    res.status(500).json({ error: 'Falha ao processar Caderno Enxuto FGV.' });
  }
});

// DELETE /materials/:id — Delete a material and its file
router.delete('/materials/:id', async (req, res) => {
  try {
    const material = db.prepare('SELECT filepath FROM study_materials WHERE id = ?')
      .get(req.params.id);

    if (material && material.filepath) {
      const resolvedPath = path.resolve(material.filepath);
      const safeUploadsDir = path.resolve(uploadsDir);
      if (resolvedPath.startsWith(safeUploadsDir)) {
        try { await fs.promises.unlink(resolvedPath); } catch (e) {}
      }
    }

    db.prepare('DELETE FROM study_materials WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao deletar material:', error);
    res.status(500).json({ error: 'Falha ao deletar material.' });
  }
});

// ============================================================
// STUDY SESSIONS
// ============================================================

// POST /sessions/start — Start a new study session with user_id
router.post('/sessions/start', (req, res) => {
  try {
    const { materialId, durationMinutes } = req.body;
    const userId = getAuthenticatedUserId(req);

    if (!materialId || !durationMinutes) {
      return res.status(400).json({ error: 'materialId e durationMinutes são obrigatórios.' });
    }

    const material = db.prepare('SELECT id, title, subject, lesson_number, filepath FROM study_materials WHERE id = ?')
      .get(materialId);
    if (!material) {
      return res.status(404).json({ error: 'Material não encontrado.' });
    }

    const result = db.prepare(`
      INSERT INTO study_sessions (material_id, duration_minutes, status, user_id)
      VALUES (?, ?, 'active', ?)
    `).run(materialId, durationMinutes, userId);

    db.prepare('INSERT INTO activity_log (type, detail, user_id) VALUES (?, ?, ?)')
      .run('study', `Sessão iniciada: ${material.subject} - Aula ${material.lesson_number ?? 'Extra'} (${durationMinutes}min)`, userId);

    res.json({
      sessionId: result.lastInsertRowid,
      materialId,
      durationMinutes,
      pdfUrl: toPdfUrl(material.filepath),
      status: 'active',
      message: `Sessão de ${durationMinutes} minutos iniciada! Bons estudos! 📚`
    });
  } catch (error) {
    console.error('Erro ao iniciar sessão:', error);
    res.status(500).json({ error: 'Falha ao iniciar sessão.' });
  }
});

// POST /sessions/:id/ask — Ask a contextual question during study
router.post('/sessions/:id/ask', async (req, res) => {
  try {
    const session = db.prepare(`
      SELECT ss.*, sm.content_text, sm.analysis_json, sm.title, sm.subject
      FROM study_sessions ss
      JOIN study_materials sm ON ss.material_id = sm.id
      WHERE ss.id = ?
    `).get(req.params.id);

    if (!session) {
      return res.status(404).json({ error: 'Sessão de estudo não encontrada.' });
    }

    const { message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Mensagem é obrigatória.' });
    }

    // Save user message
    db.prepare('INSERT INTO session_chat (session_id, role, text) VALUES (?, ?, ?)')
      .run(req.params.id, 'user', message);

    // Get previous chat history for this session
    const chatHistory = db.prepare(`
      SELECT role, text FROM session_chat 
      WHERE session_id = ? 
      ORDER BY created_at ASC
    `).all(req.params.id);

    // Build context
    const contextPrompt = buildContextualChatPrompt(
      session.content_text?.substring(0, 50000) || '',
      session.title,
      session.subject,
      session.duration_minutes
    );

    // Stream SSE Response
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let fullResponse = '';

    const historyForGemini = chatHistory.slice(0, -1).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    for await (const chunk of streamChat(
      historyForGemini,
      `${contextPrompt}\n\nPERGUNTA DO ALUNO: ${message}`,
      STUDY_ROOM_SYSTEM_PROMPT
    )) {
      fullResponse += chunk;
      res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
    }

    // Save assistant response
    db.prepare('INSERT INTO session_chat (session_id, role, text) VALUES (?, ?, ?)')
      .run(req.params.id, 'model', fullResponse);

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();

  } catch (error) {
    console.error('Erro no chat contextual da sessão:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Falha no chat contextual.' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Erro ao gerar resposta.' })}\n\n`);
      res.end();
    }
  }
});

// POST /sessions/:id/finish — Finish session and generate fixation questions
router.post('/sessions/:id/finish', async (req, res) => {
  try {
    const session = db.prepare(`
      SELECT ss.*, sm.content_text, sm.analysis_json, sm.title, sm.subject, sm.lesson_number
      FROM study_sessions ss
      JOIN study_materials sm ON ss.material_id = sm.id
      WHERE ss.id = ?
    `).get(req.params.id);

    if (!session) {
      return res.status(404).json({ error: 'Sessão de estudo não encontrada.' });
    }

    const { actualDurationSeconds, scopeNote, mode } = req.body;

    // Update session status
    db.prepare(`
      UPDATE study_sessions 
      SET status = 'completed', actual_duration_seconds = ?, scope_note = ?, completed_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(actualDurationSeconds || null, scopeNote || null, req.params.id);

    // Build context for fixation questions
    const analysis = JSON.parse(session.analysis_json || '{}');
    const materialContext = `
DISCIPLINA: ${session.subject}
AULA: ${session.lesson_number !== null ? 'Aula ' + session.lesson_number : 'Tema Avulso'} - ${session.title}
RESUMO: ${session.summary}
TÓPICOS: ${(analysis.topicos || []).map(t => t.nome).join(', ')}
TÓPICOS QUENTES: ${(analysis.topicosQuentes || []).join(', ')}
TÓPICOS ISCA: ${(analysis.topicosIsca || []).join(', ')}
ARTIGOS DE LEI / SÚMULAS: ${(analysis.artigosLei || []).join(', ')}
CONTEÚDO COMPLETO: ${session.content_text?.substring(0, 25000) || session.summary}
    `;

    const questionCount = req.body.questionCount || (mode === 'armadilhas' || mode === 'tendencias' ? 5 : 10);
    const prompt = buildFixationQuestionsPrompt(materialContext, questionCount, scopeNote || '', mode || 'sempre_cai');

    const questions = await generateJSON(
      prompt,
      'Você é um elaborador sênior de questões de concursos da FGV e Cebraspe. Crie questões desafiadoras com distratores técnicos reais.',
      FIXATION_QUESTIONS_SCHEMA
    );

    const insertQ = db.prepare(`
      INSERT INTO session_questions (session_id, material_id, question_text, options, correct_index, explanation, difficulty, topic)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const savedQuestions = [];
    const insertMany = db.transaction((qs) => {
      for (const q of qs) {
        const result = insertQ.run(
          req.params.id,
          session.material_id,
          q.question,
          JSON.stringify(q.options),
          q.correctIndex,
          q.explanation,
          q.difficulty || 'medio',
          q.topic || ''
        );
        savedQuestions.push({
          id: result.lastInsertRowid,
          ...q,
        });
      }
    });

    insertMany(questions);

    db.prepare('INSERT INTO activity_log (type, detail) VALUES (?, ?)')
      .run('study', `Sessão concluída: ${session.subject} (Aula ${session.lesson_number ?? 'Extra'}) — ${savedQuestions.length} questões geradas`);

    res.json({
      sessionId: parseInt(req.params.id),
      status: 'completed',
      questionsGenerated: savedQuestions.length,
      questions: savedQuestions,
      message: `⏰ Sessão finalizada! ${savedQuestions.length} questões de fixação geradas sobre "${session.title}".`
    });

  } catch (error) {
    console.error('Erro ao finalizar sessão:', error);
    res.status(500).json({ error: 'Falha ao finalizar sessão e gerar questões.' });
  }
});

// POST /sessions/:id/answer — Answer a fixation question
router.post('/sessions/:id/answer', (req, res) => {
  try {
    const { questionId, selectedAnswer } = req.body;

    const question = db.prepare('SELECT * FROM session_questions WHERE id = ? AND session_id = ?')
      .get(questionId, req.params.id);

    if (!question) {
      return res.status(404).json({ error: 'Questão não encontrada.' });
    }

    const isCorrect = selectedAnswer === question.correct_index;

    db.prepare(`
      UPDATE session_questions 
      SET selected_answer = ?, is_correct = ?, answered_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(selectedAnswer, isCorrect ? 1 : 0, questionId);

    res.json({
      questionId: parseInt(questionId),
      selectedAnswer,
      isCorrect,
      correctIndex: question.correct_index,
      explanation: question.explanation
    });

  } catch (error) {
    console.error('Erro ao responder questão:', error);
    res.status(500).json({ error: 'Falha ao registrar resposta.' });
  }
});

export default router;
