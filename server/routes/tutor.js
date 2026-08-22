import express from 'express';
import db, { logActivity } from '../database.js';
import { streamChat } from '../gemini.js';
import { getTutorSystemInstruction } from '../prompts/tutor.js';
import { getAuthenticatedUserId } from '../middleware/session-auth.js';
import { ragKnowledgeService } from '../services/RagKnowledgeService.js';
import crypto from 'crypto';

const router = express.Router();

// POST /chat - Streaming chat with SSE
router.post('/chat', async (req, res) => {
    let { sessionId, message, subject, careerId, tutorStyle } = req.body;
    const userId = getAuthenticatedUserId(req);

    if (!careerId) {
        careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
    }

    if (!tutorStyle) {
        try {
            const userProfile = db.prepare('SELECT tutor_style FROM user_profiles WHERE id = ?').get(userId);
            tutorStyle = userProfile?.tutor_style || 'pratico';
        } catch (e) {
            tutorStyle = 'pratico';
        }
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    message = message.trim();

    // Setup SSE headers early
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
        // Validate or create session
        let session = null;
        if (sessionId && sessionId !== 'new') {
            const checkStmt = db.prepare('SELECT id, subject, title, career_id FROM chat_sessions WHERE id = ?');
            session = checkStmt.get(sessionId);
        }

        if (!session) {
            sessionId = crypto.randomUUID();
            const sessionTitle = message.length > 40 ? message.substring(0, 40) + '...' : message;
            const createStmt = db.prepare('INSERT INTO chat_sessions (id, subject, title, career_id) VALUES (?, ?, ?, ?)');
            createStmt.run(sessionId, subject || 'Geral', sessionTitle, careerId);
            logActivity('tutor', `Novo chat: ${sessionTitle} (${careerId})`);
        } else {
            const updateStmt = db.prepare('UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = ?');
            updateStmt.run(sessionId);
        }

        // Send sessionId back immediately as first SSE event
        res.write(`data: ${JSON.stringify({ sessionId: sessionId })}\n\n`);

        // Get prior session history for conversation context
        const getHistory = db.prepare('SELECT role, text FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC');
        const history = getHistory.all(sessionId);

        // Save user message immediately to DB
        const insertMessage = db.prepare('INSERT INTO chat_messages (session_id, role, text) VALUES (?, ?, ?)');
        insertMessage.run(sessionId, 'user', message);

        let fullModelResponse = "";
        
        // Setup dynamic AI prompt for the active career and style with RAG Knowledge Base
        let systemPrompt = getTutorSystemInstruction(careerId, subject || 'Geral', tutorStyle);
        if (careerId === 'atrfb') {
            const { contextBlock } = ragKnowledgeService.buildAugmentedContext(message, { subject, limit: 3 });
            if (contextBlock) {
                systemPrompt += `\n\n${contextBlock}\nInstrução Adicional: Se o trecho do acervo acima for relevante para a dúvida do aluno, cite a aula e o artigo correspondente.`;
            }
        }
        const stream = await streamChat(history, message, systemPrompt);
        
        for await (const chunk of stream) {
            if (chunk) {
                fullModelResponse += chunk;
                res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
            }
        }

        // Save model response to DB
        if (fullModelResponse) {
            insertMessage.run(sessionId, 'model', fullModelResponse);
        }

        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        res.end();

    } catch (error) {
        console.error("Tutor Chat error:", error);
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Erro ao gerar resposta' });
        } else {
            res.write(`data: ${JSON.stringify({ error: error.message || 'Erro ao gerar resposta' })}\n\n`);
            res.end();
        }
    }
});

// GET /sessions - List chat sessions filtered by active career
router.get('/sessions', (req, res) => {
    try {
        const careerId = req.query.careerId || req.headers['x-exam-id'];
        let sessions = [];
        if (careerId) {
            const stmt = db.prepare('SELECT * FROM chat_sessions WHERE career_id = ? OR career_id IS NULL ORDER BY updated_at DESC');
            sessions = stmt.all(careerId);
        } else {
            const stmt = db.prepare('SELECT * FROM chat_sessions ORDER BY updated_at DESC');
            sessions = stmt.all();
        }
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /history/:sessionId - Get messages for a session
router.get('/history/:sessionId', (req, res) => {
    try {
        const session = db.prepare('SELECT * FROM chat_sessions WHERE id = ?').get(req.params.sessionId);
        const messages = db.prepare('SELECT * FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC').all(req.params.sessionId);
        res.json({ session, messages });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /sessions/:sessionId - Alias for getting a session and its messages
router.get('/sessions/:sessionId', (req, res) => {
    try {
        const session = db.prepare('SELECT * FROM chat_sessions WHERE id = ?').get(req.params.sessionId);
        const messages = db.prepare('SELECT * FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC').all(req.params.sessionId);
        res.json({ session, messages });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /sessions/:sessionId - Delete a session
router.delete('/sessions/:sessionId', (req, res) => {
    try {
        const stmt = db.prepare('DELETE FROM chat_sessions WHERE id = ?');
        stmt.run(req.params.sessionId);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
