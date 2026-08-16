import express from 'express';
import fs from 'fs';
import { logger } from '../logger.js';

const router = express.Router();

// GET /api/system/logs - Query logs from memory ring buffer with filters
router.get('/', (req, res) => {
  try {
    const { level = 'all', limit = 200, search = '' } = req.query;
    const logs = logger.getLogs({
      level: String(level),
      limit: parseInt(limit, 10) || 200,
      search: String(search)
    });

    res.json({
      success: true,
      total: logs.length,
      logs
    });
  } catch (err) {
    logger.error('SYSTEM_LOGS', 'Erro ao consultar logs do sistema', err.message);
    res.status(500).json({ error: 'Erro ao consultar logs.' });
  }
});

// GET /api/system/logs/download - Download server.log file
router.get('/download', async (req, res) => {
  try {
    const filePath = logger.getLogFilePath();
    try {
      await fs.promises.access(filePath);
    } catch {
      await fs.promises.writeFile(filePath, '[SYSTEM] Arquivo de log inicializado.\n', 'utf8');
    }
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="gabarito_system_${Date.now()}.log"`);
    res.sendFile(filePath);
  } catch (err) {
    logger.error('SYSTEM_LOGS', 'Erro ao baixar arquivo de log', err.message);
    res.status(500).json({ error: 'Erro ao baixar arquivo de log.' });
  }
});

// DELETE /api/system/logs - Clear logs
router.delete('/', (req, res) => {
  try {
    logger.clearLogs();
    res.json({ success: true, message: 'Logs limpos com sucesso.' });
  } catch (err) {
    logger.error('SYSTEM_LOGS', 'Erro ao limpar logs', err.message);
    res.status(500).json({ error: 'Erro ao limpar logs.' });
  }
});

export default router;
