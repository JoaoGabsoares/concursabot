import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';
import db from '../database.js';
import { generateJSON, generateContent, streamChat } from '../gemini.js';
import logger from '../logger.js';
import {
  MATERIAL_ANALYSIS_PROMPT,
  MATERIAL_ANALYSIS_SCHEMA,
  buildCadernoEnxutoPrompt,
  buildFixationQuestionsPrompt,
  FIXATION_QUESTIONS_SCHEMA,
  buildContextualChatPrompt,
  STUDY_ROOM_SYSTEM_PROMPT
} from '../prompts/study-room.js';
import { CAREERS_CATALOG, getCareerConfig } from '../careers.js';

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
  return `/uploads/${path.basename(filepath)}`;
}

// Extrai o número da aula a partir do nome do arquivo ou do texto
export function extractLessonNumber(filename = '', text = '') {
  // Ex: Aula 01_Apostila_Grifada.pdf, Aula_02.pdf, aula03.pdf, aula 0.pdf
  const fileMatch = filename.match(/(?:aula|lesson)[_\s-]*0*(\d+)/i);
  if (fileMatch) return parseInt(fileMatch[1], 10);

  const textMatch = text.substring(0, 2000).match(/(?:aula|lesson)[_\s-]*0*(\d+)/i);
  if (textMatch) return parseInt(textMatch[1], 10);

  return null;
}

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ============================================================
// PDF UPLOAD & ANALYSIS
// ============================================================

// Agendador automático de Revisões Espaçadas (Curva do Esquecimento: D+1, D+7, D+30)
export function scheduleSpacedReviews(materialId, subject, lessonNumber, baseDateStr, userId = 'user_joao', careerId = 'atrfb') {
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
    db.prepare("DELETE FROM study_reviews WHERE material_id = ? AND status = 'pending' AND (user_id = ? OR user_id IS NULL)").run(materialId, userId);

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

// POST /upload — Upload a PDF and analyze with Gemini
router.post('/upload', async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado. Envie um PDF.' });
    }

    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';
    const { originalname, filename, path: filepath, size } = req.file;
    const requestedSubject = req.body.subject || 'Geral';
    const studiedAt = req.body.studiedAt || null; // 'YYYY-MM-DD'
    const studyStatus = req.body.studyStatus || 'unread'; // 'full' | 'theory_only' | 'unread'

    // Extração de texto local via pdf-parse de forma assíncrona
    const pdfBuffer = await fs.promises.readFile(filepath);
    const pdfData = await pdfParse(pdfBuffer);
    const textContent = pdfData.text || '';

    if (textContent.trim().length < 100) {
      return res.status(422).json({
        error: 'Não foi possível extrair texto deste PDF (provavelmente é um PDF escaneado/imagem). Tente um PDF com texto selecionável.'
      });
    }

    // Análise estruturada via Gemini com fallback local resiliente
    let analysisResponse;
    try {
      analysisResponse = await generateJSON(
        `${MATERIAL_ANALYSIS_PROMPT}\n\nCONTEÚDO DO PDF:\n${textContent.substring(0, 100000)}`,
        'Você é um especialista em análise de materiais de estudo para concursos públicos.',
        MATERIAL_ANALYSIS_SCHEMA
      );
    } catch (aiErr) {
      console.warn('Gemini AI analysis fallback ativado:', aiErr.message);
      const cleanTitle = originalname.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
      analysisResponse = {
        titulo: cleanTitle,
        materia: requestedSubject || 'Geral',
        numeroAula: detectedLessonNumber || 1,
        resumoEstrategico: textContent.substring(0, 350).replace(/\s+/g, ' ') + '...',
        topicosChave: [requestedSubject || 'Conceitos Chave', 'Legislação e Doutrina'],
        jurisprudenciaRelevante: 'Doutrina e jurisprudência aplicável ao edital.',
        artigosChave: [],
        dicasBanca: 'Atenção aos detalhes literais e pegadinhas recorrentes.',
        pontosCriticos: ['Revisão sistemática dos tópicos extraídos do PDF.']
      };
    }

    const finalLessonNumber = detectedLessonNumber !== null 
      ? detectedLessonNumber 
      : (analysisResponse.numeroAula !== undefined && analysisResponse.numeroAula !== null ? analysisResponse.numeroAula : null);

    const finalSubject = (requestedSubject && requestedSubject !== 'Geral' && requestedSubject !== 'Outra')
      ? requestedSubject
      : (analysisResponse.materia || 'Geral');

    const theoryCompleted = (studyStatus === 'full' || studyStatus === 'theory_only') ? 1 : 0;
    const questionsCompleted = (studyStatus === 'full') ? 1 : 0;
    const finalStudiedDate = studiedAt || (studyStatus !== 'unread' ? new Date().toISOString().split('T')[0] : null);

    // Save to database with user_id and career_id
    const stmt = db.prepare(`
      INSERT INTO study_materials (filename, filepath, subject, lesson_number, title, summary, content_text, analysis_json, studied_at, theory_completed, questions_completed, user_id, career_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      originalname,
      filepath,
      finalSubject,
      finalLessonNumber,
      analysisResponse.titulo,
      analysisResponse.resumoEstrategico,
      textContent,
      JSON.stringify(analysisResponse),
      finalStudiedDate,
      theoryCompleted,
      questionsCompleted,
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
      .run('material', `Enviou apostila: ${finalSubject} - Aula ${finalLessonNumber || 1} (${analysisResponse.titulo})`, userId, careerId);

    res.json({
      materialId,
      filename: originalname,
      pdfUrl: toPdfUrl(filepath),
      subject: finalSubject,
      lessonNumber: finalLessonNumber,
      title: analysisResponse.titulo,
      summary: analysisResponse.resumoEstrategico,
      analysis: analysisResponse,
      studied_at: finalStudiedDate,
      theory_completed: theoryCompleted,
      questions_completed: questionsCompleted,
      message: 'Apostila processada com sucesso! Cronograma e revisões atualizados.'
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

// GET /materials — List all uploaded materials with study progress
router.get('/materials', (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
    const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;

    let sql = `
      SELECT 
        sm.id, sm.filename, sm.filepath, sm.subject, sm.lesson_number, sm.title, sm.summary, sm.created_at,
        sm.studied_at, sm.theory_completed, sm.questions_completed,
        COUNT(DISTINCT ss.id) as session_count,
        SUM(CASE WHEN ss.status = 'completed' THEN 1 ELSE 0 END) as completed_sessions,
        MAX(ss.completed_at) as last_studied_at,
        COUNT(sq.id) as total_questions,
        SUM(CASE WHEN sq.is_correct = 1 THEN 1 ELSE 0 END) as correct_questions
      FROM study_materials sm
      LEFT JOIN study_sessions ss ON sm.id = ss.material_id AND (ss.user_id = ? OR ss.user_id IS NULL)
      LEFT JOIN session_questions sq ON ss.id = sq.session_id
      WHERE (sm.user_id = ? OR sm.user_id IS NULL)
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
      accuracy_pct: m.total_questions > 0 ? Math.round((m.correct_questions / m.total_questions) * 100) : null
    }));

    res.json({ materials: formatted });
  } catch (error) {
    console.error('Erro ao listar materiais:', error);
    res.status(500).json({ error: 'Falha ao listar materiais.' });
  }
});

// GET /catalog — Grouped catalog by Subject for study track overview (dynamic per career)
router.get('/catalog', (req, res) => {
  try {
    const userId = req.headers['x-user-id'] || 'user_joao';
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
      LEFT JOIN study_sessions ss ON sm.id = ss.material_id AND (ss.user_id = ? OR ss.user_id IS NULL)
      LEFT JOIN session_questions sq ON ss.id = sq.session_id
      WHERE (sm.user_id = ? OR sm.user_id = 'user_joao' OR sm.user_id IS NULL)
      GROUP BY sm.id
      ORDER BY sm.subject ASC, CASE WHEN sm.lesson_number IS NULL THEN 999 ELSE sm.lesson_number END ASC, sm.created_at DESC
    `).all(userId, userId);

    // Fetch active reviews for materials
    const allReviews = db.prepare(`
      SELECT material_id, review_type, scheduled_date, status
      FROM study_reviews
      WHERE status = 'pending' AND (user_id = ? OR user_id = 'user_joao' OR user_id IS NULL)
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
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';
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

// POST /materials/:id/caderno-enxuto — Gera ou retorna o Caderno Enxuto FGV da apostila
router.post('/materials/:id/caderno-enxuto', async (req, res) => {
  try {
    const material = db.prepare('SELECT id, title, subject, content_text, caderno_enxuto FROM study_materials WHERE id = ?')
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

    const prompt = buildCadernoEnxutoPrompt(material.content_text, material.subject, material.title);
    const cadernoMarkdown = await generateContent(
      prompt,
      'Você é um Professor Mentor e Estrategista de Alta Performance para a FGV Receita Federal. Resuma com precisão cirúrgica.'
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
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

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

    await streamChat(
      historyForGemini,
      `${contextPrompt}\n\nPERGUNTA DO ALUNO: ${message}`,
      (chunk) => {
        fullResponse += chunk;
        res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
      },
      STUDY_ROOM_SYSTEM_PROMPT
    );

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
