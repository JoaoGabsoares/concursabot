import db from '../database.js';

export const INITIAL_USER_PROFILES = [
  {
    id: 'user_joao',
    name: 'João (Titular)',
    avatar_emoji: '👨‍💼',
    active_career_id: 'atrfb',
    color_theme: 'primary',
    is_default: 1
  },
  {
    id: 'user_saude',
    name: 'Estudante Saúde',
    avatar_emoji: '👩‍⚕️',
    active_career_id: 'ses_rj',
    color_theme: 'success',
    is_default: 0
  },
  {
    id: 'user_militar',
    name: 'Estudante Militar',
    avatar_emoji: '⚓',
    active_career_id: 'marinha_rm2',
    color_theme: 'info',
    is_default: 0
  },
  {
    id: 'user_adm',
    name: 'Estudante Tribunais',
    avatar_emoji: '🏢',
    active_career_id: 'adm_tribunais',
    color_theme: 'warning',
    is_default: 0
  },
  {
    id: 'user_bb_comercial',
    name: 'Estudante BB Comercial',
    avatar_emoji: '🏦',
    active_career_id: 'bb_comercial',
    color_theme: 'primary',
    is_default: 0
  },
  {
    id: 'user_bb_ti',
    name: 'Estudante BB Tecnologia',
    avatar_emoji: '💻',
    active_career_id: 'bb_ti',
    color_theme: 'info',
    is_default: 0
  }
];

export function seedUserProfiles() {
  try {
    const insertStmt = db.prepare(`
      INSERT OR IGNORE INTO user_profiles (id, name, avatar_emoji, active_career_id, color_theme, is_default, last_active_at)
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `);

    const insertMany = db.transaction((profiles) => {
      for (const p of profiles) {
        insertStmt.run(p.id, p.name, p.avatar_emoji, p.active_career_id, p.color_theme, p.is_default);
      }
    });

    insertMany(INITIAL_USER_PROFILES);
  } catch (err) {
    console.error('[DB Seed] Error seeding user profiles:', err);
  }
}
