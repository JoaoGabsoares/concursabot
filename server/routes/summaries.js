import express from 'express';
import db, { logActivity } from '../database.js';
import { generateContent } from '../gemini.js';
import { summariesSystemInstruction, summariesPromptTemplates } from '../prompts/summaries.js';

const router = express.Router();

// POST /generate - Generate summary
router.post('/generate', async (req, res) => {
    const { title, text, type = 'strategic' } = req.body;

    if (!text) return res.status(400).json({ error: 'Text is required' });
    if (!summariesPromptTemplates[type]) return res.status(400).json({ error: 'Invalid summary type' });

    try {
        const prompt = summariesPromptTemplates[type](text);
        const summaryText = await generateContent(prompt, summariesSystemInstruction);

        const stmt = db.prepare('INSERT INTO summaries (title, original_text, summary, type) VALUES (?, ?, ?, ?)');
        const info = stmt.run(title || 'Sem título', text, summaryText, type);
        
        logActivity('summary', `Generated summary ${info.lastInsertRowid}`);

        res.json({ success: true, id: info.lastInsertRowid, summary: summaryText });
    } catch (error) {
        console.error("Summary gen error:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET / - List saved summaries
router.get('/', (req, res) => {
    try {
        const stmt = db.prepare('SELECT id, title, type, created_at FROM summaries ORDER BY created_at DESC');
        res.json(stmt.all());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /:id - Get specific summary
router.get('/:id', (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM summaries WHERE id = ?');
        const summary = stmt.get(req.params.id);
        if (!summary) return res.status(404).json({ error: 'Not found' });
        res.json(summary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /:id - Delete summary
router.delete('/:id', (req, res) => {
    try {
        const stmt = db.prepare('DELETE FROM summaries WHERE id = ?');
        stmt.run(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
