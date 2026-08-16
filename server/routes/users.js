import express from 'express';
import db from '../database.js';
import { generateContent } from '../gemini.js';
import { getSessionAccount } from './auth.js';

const router = express.Router();

// GET /api/users/system/health - Check Gemini AI connection & latency and DB stats
router.get('/system/health', async (req, res) => {
  try {
    const start = Date.now();
    let aiStatus = 'connected';
    let aiLatencyMs = 0;
    let aiModel = process.env.GEMINI_MODEL || 'gemini-3.7-flash';

    try {
      await generateContent('Diga apenas OK.', 'Você é um validador de latência.');
      aiLatencyMs = Date.now() - start;
    } catch (errAi) {
      aiStatus = 'error: ' + errAi.message;
      aiLatencyMs = Date.now() - start;
    }

    const totalQuestions = db.prepare('SELECT COUNT(*) as c FROM questions').get().c;
    const totalSessions = db.prepare('SELECT COUNT(*) as c FROM study_sessions').get().c;
    const totalMaterials = db.prepare('SELECT COUNT(*) as c FROM study_materials').get().c;
    const totalSimulados = db.prepare('SELECT COUNT(*) as c FROM simulados').get().c;

    res.json({
      status: 'ok',
      ai: {
        status: aiStatus,
        model: aiModel,
        latencyMs: aiLatencyMs
      },
      stats: {
        totalQuestions,
        totalSessions,
        totalMaterials,
        totalSimulados
      },
      pwa: {
        serviceWorker: true,
        offlineReady: true
      }
    });
  } catch (err) {
    console.error('System health check error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users - List user profiles for current authenticated account
router.get('/', (req, res) => {
  try {
    const session = getSessionAccount(req);
    let profiles = [];

    if (session) {
      // Returns exclusively the profiles of the logged in account
      profiles = db.prepare(`
        SELECT 
          u.*,
          (SELECT COUNT(*) FROM study_sessions WHERE user_id = u.id) as total_sessions,
          (SELECT COUNT(*) FROM activity_log WHERE user_id = u.id) as total_activities
        FROM user_profiles u
        WHERE u.account_id = ?
        ORDER BY u.is_default DESC, u.last_active_at DESC
      `).all(session.account_id);
    } else if (req.query.all === 'true') {
      profiles = db.prepare(`
        SELECT 
          u.*,
          (SELECT COUNT(*) FROM study_sessions WHERE user_id = u.id) as total_sessions,
          (SELECT COUNT(*) FROM activity_log WHERE user_id = u.id) as total_activities
        FROM user_profiles u
        ORDER BY u.is_default DESC, u.last_active_at DESC
      `).all();
    } else {
      // Unauthenticated visitor sees zero profiles (complete privacy)
      profiles = [];
    }

    res.json(profiles);
  } catch (err) {
    console.error('Error fetching user profiles:', err);
    res.status(500).json({ error: 'Erro ao buscar perfis de usuário.' });
  }
});

// GET /api/users/:id - Get specific user profile
router.get('/:id', (req, res) => {
  try {
    const profile = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado.' });
    res.json(profile);
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ error: 'Erro ao buscar perfil.' });
  }
});

// POST /api/users - Create new user profile with complete wizard metadata & 3-profile account limit
router.post('/', (req, res) => {
  try {
    const session = getSessionAccount(req);
    const accountId = session ? session.account_id : (req.body.account_id || null);

    if (accountId) {
      const countRes = db.prepare('SELECT COUNT(*) as c FROM user_profiles WHERE account_id = ?').get(accountId);
      if (countRes && countRes.c >= 3) {
        return res.status(400).json({ 
          error: 'Limite de 3 perfis atingido para esta conta. Exclua um perfil antes de criar um novo.' 
        });
      }
    }

    const { 
      name, 
      avatar_emoji, 
      active_career_id, 
      color_theme,
      target_role,
      target_banca,
      experience_level,
      daily_hours,
      study_shifts,
      preferred_material,
      custom_exam_title,
      google_calendar_enabled,
      google_calendar_url,
      tutor_style,
      sound_effects_enabled,
      cadence_reading_min,
      cadence_questions_min,
      cadence_mode
    } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Nome do estudante é obrigatório.' });
    }

    const id = 'user_' + Date.now();
    const avatar = avatar_emoji || '👨‍🎓';
    const career = active_career_id || 'atrfb';
    const color = color_theme || 'primary';
    const role = target_role || 'Analista Tributário';
    const banca = target_banca || 'FGV';
    const exp = experience_level || 'iniciante';
    const hours = daily_hours || 4;
    const shifts = Array.isArray(study_shifts) ? JSON.stringify(study_shifts) : (study_shifts || '["manha", "noite"]');
    const material = preferred_material || 'enxuto';
    const customTitle = custom_exam_title || null;
    const gcalEnabled = google_calendar_enabled ? 1 : 0;
    const gcalUrl = google_calendar_url || null;
    const tutStyle = tutor_style || 'pratico';
    const sounds = sound_effects_enabled !== undefined ? (sound_effects_enabled ? 1 : 0) : 1;
    const cadRead = parseInt(cadence_reading_min, 10) || 60;
    const cadQuest = parseInt(cadence_questions_min, 10) || 30;
    const cadMode = cadence_mode || '60_30';

    const stmt = db.prepare(`
      INSERT INTO user_profiles (
        id, account_id, name, avatar_emoji, active_career_id, color_theme, is_default, 
        target_role, target_banca, experience_level, daily_hours, study_shifts, preferred_material, custom_exam_title,
        google_calendar_enabled, google_calendar_url, tutor_style, sound_effects_enabled,
        cadence_reading_min, cadence_questions_min, cadence_mode,
        last_active_at
      )
      VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `);
    stmt.run(id, accountId, name.trim(), avatar, career, color, role, banca, exp, hours, shifts, material, customTitle, gcalEnabled, gcalUrl, tutStyle, sounds, cadRead, cadQuest, cadMode);

    const created = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    res.status(201).json(created);
  } catch (err) {
    console.error('Error creating user profile:', err);
    res.status(500).json({ error: 'Erro ao criar perfil de usuário.' });
  }
});

// POST /api/users/:id/activate - Activate user profile (updates last_active_at)
router.post('/:id/activate', (req, res) => {
  try {
    const { id } = req.params;
    const profile = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado.' });

    db.prepare('UPDATE user_profiles SET last_active_at = CURRENT_TIMESTAMP WHERE id = ?').run(id);

    const updated = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    res.json(updated);
  } catch (err) {
    console.error('Error activating user profile:', err);
    res.status(500).json({ error: 'Erro ao ativar perfil de usuário.' });
  }
});

// PUT /api/users/:id - Update user profile
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      avatar_emoji, 
      active_career_id, 
      color_theme,
      target_role,
      target_banca,
      experience_level,
      daily_hours,
      study_shifts,
      preferred_material,
      custom_exam_title,
      google_calendar_enabled,
      google_calendar_url,
      tutor_style,
      sound_effects_enabled,
      cadence_reading_min,
      cadence_questions_min,
      cadence_mode
    } = req.body;

    const profile = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado.' });

    const newName = name !== undefined ? name.trim() : profile.name;
    const newAvatar = avatar_emoji !== undefined ? avatar_emoji : profile.avatar_emoji;
    const newCareer = active_career_id !== undefined ? active_career_id : profile.active_career_id;
    const newColor = color_theme !== undefined ? color_theme : profile.color_theme;
    const newRole = target_role !== undefined ? target_role : profile.target_role;
    const newBanca = target_banca !== undefined ? target_banca : profile.target_banca;
    const newExp = experience_level !== undefined ? experience_level : profile.experience_level;
    const newHours = daily_hours !== undefined ? daily_hours : profile.daily_hours;
    const newShifts = study_shifts !== undefined ? (Array.isArray(study_shifts) ? JSON.stringify(study_shifts) : study_shifts) : profile.study_shifts;
    const newMaterial = preferred_material !== undefined ? preferred_material : profile.preferred_material;
    const newCustom = custom_exam_title !== undefined ? custom_exam_title : profile.custom_exam_title;
    const newGcalEnabled = google_calendar_enabled !== undefined ? (google_calendar_enabled ? 1 : 0) : profile.google_calendar_enabled;
    const newGcalUrl = google_calendar_url !== undefined ? google_calendar_url : profile.google_calendar_url;
    const newTutorStyle = tutor_style !== undefined ? tutor_style : (profile.tutor_style || 'pratico');
    const newSounds = sound_effects_enabled !== undefined ? (sound_effects_enabled ? 1 : 0) : (profile.sound_effects_enabled !== undefined ? profile.sound_effects_enabled : 1);
    const newCadRead = cadence_reading_min !== undefined ? parseInt(cadence_reading_min, 10) : (profile.cadence_reading_min || 60);
    const newCadQuest = cadence_questions_min !== undefined ? parseInt(cadence_questions_min, 10) : (profile.cadence_questions_min || 30);
    const newCadMode = cadence_mode !== undefined ? cadence_mode : (profile.cadence_mode || '60_30');

    db.prepare(`
      UPDATE user_profiles 
      SET name = ?, avatar_emoji = ?, active_career_id = ?, color_theme = ?, 
          target_role = ?, target_banca = ?, experience_level = ?, daily_hours = ?, study_shifts = ?, preferred_material = ?, custom_exam_title = ?,
          google_calendar_enabled = ?, google_calendar_url = ?, tutor_style = ?, sound_effects_enabled = ?,
          cadence_reading_min = ?, cadence_questions_min = ?, cadence_mode = ?,
          last_active_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(newName, newAvatar, newCareer, newColor, newRole, newBanca, newExp, newHours, newShifts, newMaterial, newCustom, newGcalEnabled, newGcalUrl, newTutorStyle, newSounds, newCadRead, newCadQuest, newCadMode, id);

    const updated = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    res.json(updated);
  } catch (err) {
    console.error('Error updating user profile:', err);
    res.status(500).json({ error: 'Erro ao atualizar perfil.' });
  }
});

// DELETE /api/users/:id - Delete user profile and cascade related operational data
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const profile = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(id);
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado.' });

    if (profile.is_default) {
      return res.status(400).json({ error: 'O perfil padrão titular não pode ser removido.' });
    }

    const deleteCascade = db.transaction((userId) => {
      // 1. Study Sessions and Children
      db.prepare(`DELETE FROM session_questions WHERE session_id IN (SELECT id FROM study_sessions WHERE user_id = ?)`).run(userId);
      db.prepare(`DELETE FROM session_chat WHERE session_id IN (SELECT id FROM study_sessions WHERE user_id = ?)`).run(userId);
      db.prepare('DELETE FROM study_sessions WHERE user_id = ?').run(userId);

      // 2. Study Reviews and Missed Sessions
      db.prepare('DELETE FROM study_reviews WHERE user_id = ?').run(userId);
      db.prepare('DELETE FROM missed_sessions WHERE user_id = ?').run(userId);

      // 3. Questions and Simulados
      db.prepare('DELETE FROM question_answers WHERE user_id = ?').run(userId);
      db.prepare(`DELETE FROM simulado_questions WHERE simulado_id IN (SELECT id FROM simulados WHERE user_id = ?)`).run(userId);
      db.prepare('DELETE FROM simulados WHERE user_id = ?').run(userId);

      // 4. Flashcards and Decks
      db.prepare(`DELETE FROM flashcards WHERE deck_id IN (SELECT id FROM flashcard_decks WHERE user_id = ?)`).run(userId);
      db.prepare('DELETE FROM flashcard_decks WHERE user_id = ?').run(userId);

      // 5. Activity Log, Gamification & Schedule
      db.prepare('DELETE FROM activity_log WHERE user_id = ?').run(userId);
      db.prepare('DELETE FROM schedule_tasks WHERE user_id = ?').run(userId);
      db.prepare('DELETE FROM user_achievements WHERE user_id = ?').run(userId);
      db.prepare('DELETE FROM user_xp_log WHERE user_id = ?').run(userId);

      // 6. User Profile
      db.prepare('DELETE FROM user_profiles WHERE id = ?').run(userId);
    });

    deleteCascade(id);
    res.json({ success: true, message: 'Perfil e histórico removidos com sucesso em cascata.' });
  } catch (err) {
    console.error('Error deleting user profile:', err);
    res.status(500).json({ error: 'Erro ao remover perfil.' });
  }
});

// GET /api/users/:id/export-progress — Exporta backup completo do progresso
router.get('/:id/export-progress', (req, res) => {
  try {
    const userId = req.params.id;
    const profile = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(userId);
    if (!profile) return res.status(404).json({ error: 'Perfil não encontrado.' });

    const sessions = db.prepare('SELECT * FROM study_sessions WHERE user_id = ?').all(userId);
    const answers = db.prepare('SELECT * FROM question_answers WHERE user_id = ?').all(userId);
    const simulados = db.prepare('SELECT * FROM simulados WHERE user_id = ?').all(userId);
    const achievements = db.prepare('SELECT * FROM user_achievements WHERE user_id = ?').all(userId);
    const xpLog = db.prepare('SELECT * FROM user_xp_log WHERE user_id = ?').all(userId);
    const tasks = db.prepare('SELECT * FROM schedule_tasks WHERE user_id = ?').all(userId);

    const backupData = {
      version: '1.0',
      exported_at: new Date().toISOString(),
      user: profile,
      data: {
        sessions,
        answers,
        simulados,
        achievements,
        xp_log: xpLog,
        schedule_tasks: tasks
      }
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="gabarito_backup_${userId}_${Date.now()}.json"`);
    res.json(backupData);
  } catch (err) {
    console.error('Error exporting user progress:', err);
    res.status(500).json({ error: 'Erro ao gerar backup de progresso.' });
  }
});

export default router;
