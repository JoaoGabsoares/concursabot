import express from 'express';
import * as db from '../database.js';
import { StudyCycleService } from '../services/StudyCycleService.js';
import { addXP } from '../gamification.js';

const router = express.Router();

// GET /api/study-cycles/models - Catálogo de modelos de ciclo disponíveis
router.get(['/models', '/modelos'], (req, res) => {
  try {
    const models = StudyCycleService.getCycleModels();
    res.json(models);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/study-cycles/subjects - Disciplinas canônicas da carreira com pesos e grupos
router.get('/subjects', (req, res) => {
  try {
    const careerId = req.query.careerId || 'atrfb';
    const subjects = StudyCycleService.getCareerSubjects(careerId);
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/study-cycles/active - Obter ciclo ativo (auto-provisiona se não existir)
router.get('/active', (req, res) => {
  try {
    const userId = req.query.userId || req.headers['x-user-id'] || 'user_joao';
    const careerId = req.query.careerId || 'atrfb';

    let activeCycle = db.getActiveStudyCycle(userId, careerId);

    // Se ainda não tiver ciclo criado, cria um ciclo adaptativo padrão de 20h/semana
    if (!activeCycle) {
      const generated = StudyCycleService.generateCycle({
        userId,
        careerId,
        modelType: 'adaptativo',
        weeklyHours: 20,
        blockDurationMinutes: 60
      });
      activeCycle = db.saveStudyCycle(generated.cycleData, generated.blocks);
    }

    res.json(activeCycle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/study-cycles/generate | /simular - Gerar ou reconfigurar novo ciclo inteligente
router.post(['/generate', '/simular'], (req, res) => {
  try {
    const {
      userId = 'user_joao',
      careerId = 'atrfb',
      modelType = 'adaptativo',
      weeklyHours = 20,
      blockDurationMinutes = 60,
      examDate = null,
      customDifficulties = {},
      cycleName = null,
      saveImmediately = req.path.includes('simular') ? false : true
    } = req.body;

    const generated = StudyCycleService.generateCycle({
      userId,
      careerId,
      modelType,
      weeklyHours: Number(weeklyHours) || 20,
      blockDurationMinutes: Number(blockDurationMinutes) || 60,
      examDate,
      customDifficulties,
      cycleName
    });

    if (saveImmediately) {
      const savedCycle = db.saveStudyCycle(generated.cycleData, generated.blocks);
      return res.status(201).json(savedCycle);
    }

    res.json(generated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/study-cycles/rebalance - Recalibra o ciclo ativo com base no desempenho real do aluno
router.post('/rebalance', (req, res) => {
  try {
    const userId = req.body.userId || req.headers['x-user-id'] || 'user_joao';
    const careerId = req.body.careerId || 'atrfb';
    const saveImmediately = req.body.saveImmediately !== false;

    const currentCycle = db.getActiveStudyCycle(userId, careerId);
    const rebalanced = StudyCycleService.rebalanceCycleFromUserPerformance({
      userId,
      careerId,
      dbInstance: db.default || db,
      currentCycle
    });

    if (saveImmediately) {
      const savedCycle = db.saveStudyCycle(rebalanced.cycleData, rebalanced.blocks);
      return res.json({
        success: true,
        message: 'Ciclo recalibrado com sucesso com base no seu histórico real de questões!',
        cycle: savedCycle,
        performanceInsights: rebalanced.performanceInsights
      });
    }

    res.json(rebalanced);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/study-cycles/advance | /advance-block - Marcar bloco como concluído (+20 XP) e avançar ciclo
router.post(['/advance', '/advance-block'], (req, res) => {
  try {
    const { cycleId, blockId, userId = 'user_joao', careerId = 'atrfb' } = req.body;
    if (!cycleId || !blockId) {
      return res.status(400).json({ error: 'cycleId e blockId são obrigatórios.' });
    }

    const updatedCycle = db.advanceStudyCycleBlock(cycleId, Number(blockId), userId, careerId);

    // Concede +20 XP ao estudante
    try {
      addXP(userId, 20, 'Bloco de Ciclo de Estudos Concluído');
    } catch (e) {}

    res.json({
      success: true,
      message: 'Bloco concluído com sucesso! +20 XP concedidos.',
      cycle: updatedCycle
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/study-cycles/blocks/:id - Atualizar detalhes de um bloco específico
router.put('/blocks/:id', (req, res) => {
  try {
    const blockId = Number(req.params.id);
    const updated = db.updateStudyCycleBlock(blockId, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Bloco não encontrado.' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/study-cycles/:id - Excluir ciclo de estudos
router.delete('/:id', (req, res) => {
  try {
    const cycleId = req.params.id;
    const userId = req.query.userId || req.headers['x-user-id'] || 'user_joao';
    const careerId = req.query.careerId || 'atrfb';
    const result = db.deleteStudyCycle(cycleId, userId, careerId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
