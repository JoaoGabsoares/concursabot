import express from 'express';
import db, { logActivity } from '../database.js';
import { generateJSON } from '../gemini.js';
import { flashcardsSystemInstruction, flashcardsPromptTemplate, flashcardsSchema } from '../prompts/flashcards.js';

const router = express.Router();

// POST /generate - Generate flashcard deck with user_id
router.post('/generate', async (req, res) => {
    const { topic, subject, text, count = 10 } = req.body;
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';

    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';

    if (!topic) return res.status(400).json({ error: 'Topic is required' });

    try {
        const prompt = flashcardsPromptTemplate(topic, text, count);
        const generatedCards = await generateJSON(prompt, flashcardsSystemInstruction, flashcardsSchema);

        db.transaction(() => {
            const deckStmt = db.prepare('INSERT INTO flashcard_decks (topic, subject, user_id, career_id) VALUES (?, ?, ?, ?)');
            const deckInfo = deckStmt.run(topic, subject || 'Geral', userId, careerId);
            const deckId = deckInfo.lastInsertRowid;

            const cardStmt = db.prepare('INSERT INTO flashcards (deck_id, front, back, user_id) VALUES (?, ?, ?, ?)');
            for (const card of generatedCards) {
                cardStmt.run(deckId, card.front, card.back, userId);
            }
        })();

        res.json({ success: true, message: 'Deck created' });
    } catch (error) {
        console.error("Flashcards gen error:", error);
        res.status(500).json({ error: error.message });
    }
});

// POST /add-single - Add a single custom flashcard directly from Tutor chat
router.post('/add-single', (req, res) => {
    const { subject = 'Geral', topic = 'Revisão Rápida', front, back } = req.body;
    const userId = req.headers['x-user-id'] || req.body.userId || 'user_joao';
    const careerId = req.headers['x-exam-id'] || req.body.careerId || req.body.career_id || 'atrfb';

    if (!front || !back) {
        return res.status(400).json({ error: 'Frente e Verso são obrigatórios' });
    }

    try {
        let deck = db.prepare('SELECT id FROM flashcard_decks WHERE subject = ? AND (user_id = ? OR user_id IS NULL) AND (career_id = ? OR career_id IS NULL) LIMIT 1').get(subject, userId, careerId);
        let deckId;
        if (!deck) {
            const createDeck = db.prepare('INSERT INTO flashcard_decks (topic, subject, user_id, career_id) VALUES (?, ?, ?, ?)');
            const info = createDeck.run(topic, subject, userId, careerId);
            deckId = info.lastInsertRowid;
        } else {
            deckId = deck.id;
        }

        const insertCard = db.prepare('INSERT INTO flashcards (deck_id, front, back, user_id) VALUES (?, ?, ?, ?)');
        const cardInfo = insertCard.run(deckId, front.trim(), back.trim(), userId);
        logActivity('flashcard', `Card criado via Tutor: ${front.substring(0, 30)}...`, userId, careerId);

        res.json({ success: true, cardId: cardInfo.lastInsertRowid, deckId });
    } catch (error) {
        console.error("Add single flashcard error:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET /decks - List all decks for active user
router.get('/decks', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
        const careerId = req.headers['x-exam-id'] || req.query.careerId || req.query.career_id || null;

        let stmt;
        if (careerId) {
            stmt = db.prepare(`
                SELECT d.id, d.topic, d.subject, 
                       COUNT(f.id) as total_cards,
                       SUM(CASE WHEN f.next_review <= datetime('now') THEN 1 ELSE 0 END) as due_cards
                FROM flashcard_decks d
                LEFT JOIN flashcards f ON d.id = f.deck_id
                WHERE (d.user_id = ? OR d.user_id IS NULL) AND (d.career_id = ? OR d.career_id IS NULL)
                GROUP BY d.id
            `);
            res.json(stmt.all(userId, careerId));
        } else {
            stmt = db.prepare(`
                SELECT d.id, d.topic, d.subject, 
                       COUNT(f.id) as total_cards,
                       SUM(CASE WHEN f.next_review <= datetime('now') THEN 1 ELSE 0 END) as due_cards
                FROM flashcard_decks d
                LEFT JOIN flashcards f ON d.id = f.deck_id
                WHERE (d.user_id = ? OR d.user_id IS NULL)
                GROUP BY d.id
            `);
            res.json(stmt.all(userId));
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /decks/:id - Get deck with cards
router.get('/decks/:id', (req, res) => {
    try {
        const deck = db.prepare('SELECT * FROM flashcard_decks WHERE id = ?').get(req.params.id);
        if (!deck) return res.status(404).json({ error: 'Not found' });

        const cards = db.prepare('SELECT * FROM flashcards WHERE deck_id = ?').all(req.params.id);
        res.json({ ...deck, cards });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /review - Get all cards due for review for active user
router.get('/review', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || req.query.user_id || 'user_joao';
        const stmt = db.prepare("SELECT * FROM flashcards WHERE next_review <= datetime('now') AND (user_id = ? OR user_id IS NULL) LIMIT 50");
        res.json(stmt.all(userId));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /review - Rate a card
router.post('/review', (req, res) => {
    const { cardId, rating } = req.body; // rating 1 to 4

    if (!cardId || !rating || rating < 1 || rating > 4) {
        return res.status(400).json({ error: 'Invalid cardId or rating (1-4)' });
    }

    try {
        const card = db.prepare('SELECT * FROM flashcards WHERE id = ?').get(cardId);
        if (!card) return res.status(404).json({ error: 'Card not found' });

        let ease = card.ease_factor;
        let interval = card.interval_days;
        let reps = card.repetitions;

        if (rating === 1) {
            reps = 0;
            interval = 0;
            ease = Math.max(1.3, ease - 0.2);
        } else {
            reps++;
            if (interval === 0) interval = 1;
            else if (interval === 1) interval = 3;
            else {
                if (rating === 2) interval = Math.round(interval * 1.2);
                else if (rating === 3) interval = Math.round(interval * ease);
                else if (rating === 4) interval = Math.round(interval * ease * 1.3);
            }
            if (rating === 2) ease = Math.max(1.3, ease - 0.15);
            else if (rating === 4) ease += 0.15;
        }

        const stmt = db.prepare(`
            UPDATE flashcards 
            SET ease_factor = ?, interval_days = ?, repetitions = ?, next_review = datetime('now', '+' || ? || ' days')
            WHERE id = ?
        `);
        stmt.run(ease, interval, reps, interval, cardId);

        const userId = req.headers['x-user-id'] || 'user_joao';
        const cardDeck = db.prepare('SELECT career_id FROM flashcard_decks WHERE id = (SELECT deck_id FROM flashcards WHERE id = ?)').get(cardId);
        const careerId = cardDeck?.career_id || 'atrfb';
        logActivity('flashcard_review', `Revisou card ${cardId}`, userId, careerId);

        res.json({ success: true, next_interval: interval });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /decks/:id
router.delete('/decks/:id', (req, res) => {
    try {
        const stmt = db.prepare('DELETE FROM flashcard_decks WHERE id = ?');
        stmt.run(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
