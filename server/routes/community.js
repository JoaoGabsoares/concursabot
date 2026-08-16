import express from 'express';
import db, { logActivity } from '../database.js';
import { generateContent } from '../gemini.js';
import { CAREERS_CATALOG } from '../careers.js';

const router = express.Router();

// In-Memory SSE Subscribers Map: channelId -> Set<Response>
const channelSubscribers = new Map();

function broadcastToChannel(channelId, eventType, data) {
    const clients = channelSubscribers.get(channelId);
    if (!clients || clients.size === 0) return;

    const payload = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
    for (const client of clients) {
        try {
            client.write(payload);
        } catch (e) {
            clients.delete(client);
        }
    }
}

// GET /api/community/channels - List channels for career
router.get('/channels', (req, res) => {
    try {
        const { careerId = 'atrfb' } = req.query;
        const channels = db.prepare(`
            SELECT id, career_id, name, description, icon, created_at
            FROM community_channels
            WHERE career_id = ? OR career_id = 'all'
            ORDER BY id ASC
        `).all(careerId);

        res.json({ success: true, channels });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar canais da comunidade: ' + err.message });
    }
});

// GET /api/community/messages/:channelId - List recent messages with reactions
router.get('/messages/:channelId', (req, res) => {
    try {
        const { channelId } = req.params;
        const { limit = 60 } = req.query;

        const messages = db.prepare(`
            SELECT 
                m.id,
                m.channel_id,
                m.user_id,
                m.user_name,
                m.user_avatar,
                m.career_badge,
                m.message_text,
                m.is_ai_response,
                m.created_at
            FROM community_messages m
            WHERE m.channel_id = ?
            ORDER BY m.id DESC
            LIMIT ?
        `).all(channelId, Number(limit));

        // Aggregate reactions for each message
        const messageIds = messages.map(m => m.id);
        const reactionsMap = new Map();

        if (messageIds.length > 0) {
            const placeholders = messageIds.map(() => '?').join(',');
            const reactions = db.prepare(`
                SELECT message_id, reaction_emoji, user_id
                FROM message_reactions
                WHERE message_id IN (${placeholders})
            `).all(...messageIds);

            for (const r of reactions) {
                if (!reactionsMap.has(r.message_id)) {
                    reactionsMap.set(r.message_id, []);
                }
                reactionsMap.get(r.message_id).push({ emoji: r.reaction_emoji, userId: r.user_id });
            }
        }

        const formatted = messages.reverse().map(m => {
            const reacts = reactionsMap.get(m.id) || [];
            // Group by emoji
            const summary = {};
            for (const r of reacts) {
                if (!summary[r.emoji]) summary[r.emoji] = { emoji: r.emoji, count: 0, userIds: [] };
                summary[r.emoji].count += 1;
                summary[r.emoji].userIds.push(r.userId);
            }

            return {
                ...m,
                reactions: Object.values(summary)
            };
        });

        res.json({ success: true, messages: formatted });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar mensagens do canal: ' + err.message });
    }
});

// POST /api/community/messages - Send a message and handle @GabaritoAI / @ConcursaBot triggers
router.post('/messages', async (req, res) => {
    try {
        const { channelId, messageText, userName, userAvatar, careerBadge, careerId = 'atrfb' } = req.body;
        const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

        if (!channelId || !messageText || !messageText.trim()) {
            return res.status(400).json({ error: 'Canal e texto da mensagem são obrigatórios.' });
        }

        const safeText = messageText.trim();
        const safeName = userName || 'Estudante';
        const safeAvatar = userAvatar || '👨‍🎓';
        const safeBadge = careerBadge || 'Concurseiro';

        // 1. Insert user message
        const insertStmt = db.prepare(`
            INSERT INTO community_messages (channel_id, user_id, user_name, user_avatar, career_badge, message_text, is_ai_response)
            VALUES (?, ?, ?, ?, ?, ?, 0)
        `);
        const result = insertStmt.run(channelId, userId, safeName, safeAvatar, safeBadge, safeText);
        const userMsgId = Number(result.lastInsertRowid);

        const createdUserMsg = {
            id: userMsgId,
            channel_id: channelId,
            user_id: userId,
            user_name: safeName,
            user_avatar: safeAvatar,
            career_badge: safeBadge,
            message_text: safeText,
            is_ai_response: 0,
            reactions: [],
            created_at: new Date().toISOString()
        };

        // Broadcast user message to SSE clients
        broadcastToChannel(channelId, 'message', createdUserMsg);

        // 2. Check if AI tutor was summoned via @GabaritoAI or @ConcursaBot
        const isAiMentioned = /@(gabaritoai|concursabot|tutor|bot)/i.test(safeText);

        if (isAiMentioned) {
            // Process AI response in the background
            (async () => {
                try {
                    const careerInfo = CAREERS_CATALOG[careerId] || { name: 'Concursos Públicos', banca: 'FGV / Cesgranrio' };
                    const aiPrompt = `Você é o Tutor Oficial de Elite do Gabarito.AI na sala de estudos comunitária da carreira: "${careerInfo.name}" (Banca: ${careerInfo.banca || 'Oficial'}).
O estudante ${safeName} perguntou no grupo:
"""
${safeText}
"""

Responda em formato direto, conciso, de altíssima precisão técnica e com tom encorajador e profissional de banca examinadora. Cite artigos de lei relevantes, mnemônicos ou pegadinhas clássicas da banca examinadora se aplicável. Mantenha a resposta entre 2 e 5 parágrafos curtos.`;

                    const aiResponseText = await generateContent(aiPrompt, 'Você é o Tutor IA oficial da plataforma Gabarito.AI no chat da comunidade.');

                    if (aiResponseText && aiResponseText.trim()) {
                        const botInsert = db.prepare(`
                            INSERT INTO community_messages (channel_id, user_id, user_name, user_avatar, career_badge, message_text, is_ai_response)
                            VALUES (?, 'gabarito_ai_bot', 'Gabarito.AI • Tutor IA', '🤖', 'TUTOR OFICIAL', ?, 1)
                        `);
                        const botResult = botInsert.run(channelId, aiResponseText.trim());

                        const botMsg = {
                            id: Number(botResult.lastInsertRowid),
                            channel_id: channelId,
                            user_id: 'gabarito_ai_bot',
                            user_name: 'Gabarito.AI • Tutor IA',
                            user_avatar: '🤖',
                            career_badge: 'TUTOR OFICIAL',
                            message_text: aiResponseText.trim(),
                            is_ai_response: 1,
                            reactions: [],
                            created_at: new Date().toISOString()
                        };

                        broadcastToChannel(channelId, 'message', botMsg);
                    }
                } catch (aiErr) {
                    console.error('Error generating AI community response:', aiErr.message);
                }
            })();
        }

        res.json({ success: true, message: createdUserMsg });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao enviar mensagem: ' + err.message });
    }
});

// POST /api/community/messages/:id/react - Toggle emoji reaction
router.post('/messages/:id/react', (req, res) => {
    try {
        const messageId = Number(req.params.id);
        const { emoji, channelId } = req.body;
        const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

        if (!messageId || !emoji) {
            return res.status(400).json({ error: 'messageId e emoji são obrigatórios.' });
        }

        const existing = db.prepare(`
            SELECT id FROM message_reactions
            WHERE message_id = ? AND user_id = ? AND reaction_emoji = ?
        `).get(messageId, userId, emoji);

        let action = 'added';
        if (existing) {
            db.prepare('DELETE FROM message_reactions WHERE id = ?').run(existing.id);
            action = 'removed';
        } else {
            db.prepare(`
                INSERT INTO message_reactions (message_id, user_id, reaction_emoji)
                VALUES (?, ?, ?)
            `).run(messageId, userId, emoji);
        }

        // Fetch updated reactions summary for this message
        const allReactions = db.prepare(`
            SELECT reaction_emoji, user_id
            FROM message_reactions
            WHERE message_id = ?
        `).all(messageId);

        const summary = {};
        for (const r of allReactions) {
            if (!summary[r.reaction_emoji]) summary[r.reaction_emoji] = { emoji: r.reaction_emoji, count: 0, userIds: [] };
            summary[r.reaction_emoji].count += 1;
            summary[r.reaction_emoji].userIds.push(r.user_id);
        }

        const updatedReactions = Object.values(summary);

        if (channelId) {
            broadcastToChannel(channelId, 'reaction', {
                messageId,
                reactions: updatedReactions
            });
        }

        res.json({ success: true, action, reactions: updatedReactions });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao processar reação: ' + err.message });
    }
});

// GET /api/community/stream/:channelId - Server-Sent Events (SSE) Real-Time Stream
router.get('/stream/:channelId', (req, res) => {
    const { channelId } = req.params;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders?.();

    if (!channelSubscribers.has(channelId)) {
        channelSubscribers.set(channelId, new Set());
    }
    const subscribers = channelSubscribers.get(channelId);
    subscribers.add(res);

    // Initial connection ack
    res.write(`event: connected\ndata: ${JSON.stringify({ status: 'connected', channelId })}\n\n`);

    // Heartbeat every 25s
    const heartbeat = setInterval(() => {
        try {
            res.write(': heartbeat\n\n');
        } catch {
            clearInterval(heartbeat);
        }
    }, 25000);

    req.on('close', () => {
        clearInterval(heartbeat);
        subscribers.delete(res);
    });
});

export default router;
