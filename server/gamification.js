import db from './database.js';

export const RANKS = [
  { level: 1, name: 'Novato no Edital', title: '🌱 Novato no Edital', minXp: 0, maxXp: 500, color: '#10B981', badge: '🌱' },
  { level: 2, name: 'Concurseiro Focado', title: '📖 Concurseiro Focado', minXp: 500, maxXp: 1500, color: '#3B82F6', badge: '📖' },
  { level: 3, name: 'Dominador de Lei Seca', title: '⚡ Dominador de Lei Seca', minXp: 1500, maxXp: 3500, color: '#6366F1', badge: '⚡' },
  { level: 4, name: 'Mestre da Banca', title: '🎯 Mestre da Banca', minXp: 3500, maxXp: 7000, color: '#8B5CF6', badge: '🎯' },
  { level: 5, name: 'Monstro dos Simulados', title: '🔥 Monstro dos Simulados', minXp: 7000, maxXp: 12000, color: '#EC4899', badge: '🔥' },
  { level: 6, name: 'Pronto para a Nomeação', title: '🏛️ Pronto para a Nomeação', minXp: 12000, maxXp: 999999, color: '#F59E0B', badge: '👑' }
];

export const ACHIEVEMENTS_CATALOG = [
  {
    key: 'first_step',
    title: 'Primeiro Passo',
    desc: 'Completou a 1ª sessão de estudo ou aula no sistema',
    icon: '🌟',
    xp: 100,
    category: 'estudo',
    check: (stats) => stats.sessionsCount >= 1
  },
  {
    key: 'streak_3',
    title: 'Foco Blindado',
    desc: 'Estudou 3 dias consecutivos sem falhar',
    icon: '🔥',
    xp: 250,
    category: 'disciplina',
    check: (stats) => stats.streakDays >= 3
  },
  {
    key: 'streak_7',
    title: 'Semana Imbatível',
    desc: 'Manteve 7 dias consecutivos de estudo ativo',
    icon: '⚡',
    xp: 500,
    category: 'disciplina',
    check: (stats) => stats.streakDays >= 7
  },
  {
    key: 'streak_30',
    title: 'Lenda dos Concursos',
    desc: '30 dias seguidos de dedicação e disciplina ininterrupta',
    icon: '👑',
    xp: 1500,
    category: 'disciplina',
    check: (stats) => stats.streakDays >= 30
  },
  {
    key: 'question_10',
    title: 'Atirador de Elite',
    desc: 'Resolveu suas primeiras 10 questões de prova',
    icon: '📝',
    xp: 150,
    category: 'questoes',
    check: (stats) => stats.questionsCount >= 10
  },
  {
    key: 'question_100',
    title: 'Centurião das Bancas',
    desc: 'Resolveu mais de 100 questões com gabarito comentado',
    icon: '🎯',
    xp: 600,
    category: 'questoes',
    check: (stats) => stats.questionsCount >= 100
  },
  {
    key: 'master_fgv',
    title: 'Gabaritador de Prova',
    desc: 'Alcançou 80% ou mais de acertos em um simulado completo',
    icon: '🏆',
    xp: 400,
    category: 'simulados',
    check: (stats) => stats.maxSimuladoScore >= 80
  },
  {
    key: 'speed_runner',
    title: 'Treino Sob Pressão',
    desc: 'Completou um simulado cronometrado no tempo regulamentar',
    icon: '⏱️',
    xp: 300,
    category: 'simulados',
    check: (stats) => stats.simuladosCount >= 1
  },
  {
    key: 'memory_master',
    title: 'Mente de Aço',
    desc: 'Revisou mais de 30 flashcards de artigos e súmulas',
    icon: '🃏',
    xp: 200,
    category: 'memorizacao',
    check: (stats) => stats.flashcardsReviewed >= 30
  },
  {
    key: 'bookworm',
    title: 'Devorador de Editais',
    desc: 'Concluiu 5 sessões de estudo com apostilas ou cadernos enxutos',
    icon: '📚',
    xp: 350,
    category: 'estudo',
    check: (stats) => stats.sessionsCount >= 5
  },
  {
    key: 'early_bird',
    title: 'Clube da Madrugada/Manhã',
    desc: 'Registrou sessão de estudo matinal antes das 9h',
    icon: '🌅',
    xp: 150,
    category: 'disciplina',
    check: (stats) => stats.hasEarlyMorningSession === true
  },
  {
    key: 'concursado_ready',
    title: 'Pronto para a Posse',
    desc: 'Alcançou o Nível 5 de XP acumulado no sistema',
    icon: '🏛️',
    xp: 1000,
    category: 'especial',
    check: (stats) => stats.currentLevel >= 5
  }
];

export const CAREER_SUBJECTS = {
  'marinha_rm2': ['Língua Portuguesa', 'Formação Militar-Naval', 'Legislação Militar-Naval', 'Relações Humanas e Liderança', 'História Naval'],
  'ses_rj': ['Legislação do SUS & Saúde Pública', 'Língua Portuguesa', 'Conhecimentos Específicos de Enfermagem', 'Noções de Administração Pública', 'SUS'],
  'atrfb': ['Direito Tributário', 'Legislação Tributária e Aduaneira', 'Legislação Tributária', 'Legislação Aduaneira', 'Direito Constitucional', 'Direito Administrativo', 'Contabilidade Geral', 'Língua Portuguesa', 'Língua Inglesa', 'Raciocínio Lógico-Matemático e Estatística', 'Raciocínio Lógico Matemático', 'Estatística', 'Administração Geral e Pública'],
  'afrfb': ['Direito Tributário', 'Legislação Tributária e Aduaneira', 'Direito Constitucional', 'Direito Administrativo', 'Contabilidade Geral e Avançada', 'Auditoria', 'Língua Portuguesa', 'Língua Inglesa', 'Raciocínio Lógico-Matemático e Estatística', 'Administração Pública e Economia', 'Tecnologia da Informação'],
  'transpetro_adm': ['Noções de Administração', 'Legislação e Licitações para Estatais (Lei 13.303/16)', 'Língua Portuguesa', 'Matemática', 'Técnicas de Arquivo e Documentação', 'Ética e Conduta no Setor Público'],
  'transpetro_log': ['Gestão de Estoques e Almoxarifado', 'Transporte, Movimentação e Modais Logísticos', 'Língua Portuguesa', 'Matemática', 'Gestão de Compras e Fornecedores', 'Legislação de Contratações em Estatais (Lei 13.303/16)'],
  'bb_comercial': ['Conhecimentos Bancários', 'Atendimento e Técnicas de Vendas', 'Língua Portuguesa', 'Matemática Financeira', 'Conhecimentos de Informática', 'Probabilidade e Estatística'],
  'bb_ti': ['Tecnologia da Informação', 'Bancos de Dados & SQL', 'Língua Portuguesa', 'Matemática', 'Probabilidade e Estatística', 'Conhecimentos Bancários'],
  'adm_tribunais': ['Direito Administrativo', 'Direito Constitucional', 'Língua Portuguesa', 'Administração Geral e Pública', 'Raciocínio Lógico Matemático']
};

export function calculateUserStreak(userId, careerId = null) {
  try {
    let dates = [];
    const subjects = careerId && CAREER_SUBJECTS[careerId] ? CAREER_SUBJECTS[careerId] : null;

    if (careerId && subjects) {
      const placeholders = subjects.map(() => '?').join(',');
      dates = db.prepare(`
        SELECT DISTINCT substr(study_time, 1, 10) as study_date
        FROM (
          SELECT ss.started_at as study_time 
          FROM study_sessions ss
          LEFT JOIN study_materials sm ON ss.material_id = sm.id
          WHERE ss.user_id = ? AND (ss.career_id = ? OR sm.career_id = ? OR sm.subject IN (${placeholders}) OR ss.career_id IS NULL)
          UNION
          SELECT qa.answered_at as study_time 
          FROM question_answers qa
          JOIN questions q ON qa.question_id = q.id
          WHERE qa.user_id = ? AND (qa.career_id = ? OR q.subject IN (${placeholders}))
          UNION
          SELECT s.created_at as study_time 
          FROM simulados s
          WHERE s.user_id = ? AND s.career_id = ?
          UNION
          SELECT al.created_at as study_time
          FROM activity_log al
          WHERE al.user_id = ? AND (al.career_id = ? OR al.career_id IS NULL)
        )
        WHERE study_date IS NOT NULL
        ORDER BY study_date DESC
      `).all(userId, careerId, careerId, ...subjects, userId, careerId, ...subjects, userId, careerId, userId, careerId);
    } else {
      dates = db.prepare(`
        SELECT DISTINCT substr(study_time, 1, 10) as study_date
        FROM (
          SELECT started_at as study_time FROM study_sessions WHERE user_id = ?
          UNION
          SELECT answered_at as study_time FROM question_answers WHERE user_id = ?
          UNION
          SELECT created_at as study_time FROM simulados WHERE user_id = ?
          UNION
          SELECT created_at as study_time FROM activity_log WHERE user_id = ?
        )
        WHERE study_date IS NOT NULL
        ORDER BY study_date DESC
      `).all(userId, userId, userId, userId);
    }

    if (dates.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < dates.length; i++) {
      const d = new Date(dates[i].study_date + 'T00:00:00');
      const diffDays = Math.floor((today - d) / (1000 * 60 * 60 * 24));

      if (i === 0) {
        if (diffDays === 0 || diffDays === 1) {
          streak = 1;
        } else {
          return 0;
        }
      } else {
        const prevDate = new Date(dates[i - 1].study_date + 'T00:00:00');
        const gap = Math.floor((prevDate - d) / (1000 * 60 * 60 * 24));
        if (gap === 1) {
          streak++;
        } else {
          break;
        }
      }
    }
    return streak;
  } catch (e) {
    console.error('Error calculating user streak:', e);
    return 0;
  }
}

export function getUserStatsForGamification(userId, careerId = null) {
  try {
    const subjects = careerId && CAREER_SUBJECTS[careerId] ? CAREER_SUBJECTS[careerId] : null;

    let sessions = { count: 0 };
    let questions = { count: 0, correct: 0 };
    let simulados = { count: 0, max_score: 0 };
    let flashcards = { count: 0 };
    let earlyMorning = { count: 0 };

    if (careerId && subjects) {
      const placeholders = subjects.map(() => '?').join(',');

      sessions = db.prepare(`
        SELECT COUNT(*) as count 
        FROM study_sessions ss
        JOIN study_materials sm ON ss.material_id = sm.id
        WHERE ss.user_id = ?
          AND (sm.career_id = ? OR sm.subject IN (${placeholders}))
      `).get(userId, careerId, ...subjects);

      questions = db.prepare(`
        SELECT COUNT(*) as count, SUM(CASE WHEN qa.is_correct = 1 THEN 1 ELSE 0 END) as correct
        FROM question_answers qa
        JOIN questions q ON qa.question_id = q.id
        WHERE qa.user_id = ?
          AND (qa.career_id = ? OR q.subject IN (${placeholders}))
      `).get(userId, careerId, ...subjects);

      simulados = db.prepare(`
        SELECT COUNT(*) as count, MAX(score) as max_score 
        FROM simulados 
        WHERE user_id = ? 
          AND status = 'completed'
          AND career_id = ?
      `).get(userId, careerId);

      flashcards = db.prepare(`
        SELECT COUNT(*) as count 
        FROM activity_log 
        WHERE user_id = ? 
          AND type = 'flashcard_review'
          AND career_id = ?
      `).get(userId, careerId);

      earlyMorning = db.prepare(`
        SELECT COUNT(*) as count 
        FROM study_sessions ss
        JOIN study_materials sm ON ss.material_id = sm.id
        WHERE ss.user_id = ? 
          AND (sm.career_id = ? OR sm.subject IN (${placeholders}))
          AND CAST(strftime('%H', ss.started_at) AS INTEGER) < 9
      `).get(userId, careerId, ...subjects);

    } else {
      sessions = db.prepare('SELECT COUNT(*) as count FROM study_sessions WHERE user_id = ?').get(userId);
      questions = db.prepare('SELECT COUNT(*) as count, SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct FROM question_answers WHERE user_id = ?').get(userId);
      simulados = db.prepare(`SELECT COUNT(*) as count, MAX(score) as max_score FROM simulados WHERE user_id = ? AND status = 'completed'`).get(userId);
      flashcards = db.prepare(`SELECT COUNT(*) as count FROM activity_log WHERE user_id = ? AND type = 'flashcard_review'`).get(userId);
      earlyMorning = db.prepare(`SELECT COUNT(*) as count FROM study_sessions WHERE user_id = ? AND CAST(strftime('%H', started_at) AS INTEGER) < 9`).get(userId);
    }

    const streak = calculateUserStreak(userId, careerId);

    return {
      sessionsCount: sessions?.count || 0,
      questionsCount: questions?.count || 0,
      questionsCorrect: questions?.correct || 0,
      simuladosCount: simulados?.count || 0,
      maxSimuladoScore: simulados?.max_score || 0,
      flashcardsReviewed: flashcards?.count || 0,
      hasEarlyMorningSession: (earlyMorning?.count || 0) > 0,
      streakDays: streak
    };
  } catch (e) {
    console.error('Error getting stats for gamification:', e);
    return {
      sessionsCount: 0,
      questionsCount: 0,
      questionsCorrect: 0,
      simuladosCount: 0,
      maxSimuladoScore: 0,
      flashcardsReviewed: 0,
      hasEarlyMorningSession: false,
      streakDays: 0
    };
  }
}

export function evaluateAndUnlockAchievements(userId, stats, baseXP, careerId = null) {
  try {
    const unlockedRows = careerId
      ? db.prepare('SELECT achievement_key FROM user_achievements WHERE user_id = ? AND career_id = ?').all(userId, careerId)
      : db.prepare('SELECT achievement_key FROM user_achievements WHERE user_id = ?').all(userId);
    const unlockedKeys = new Set(unlockedRows.map(r => r.achievement_key));

    const newlyUnlocked = [];

    for (const ach of ACHIEVEMENTS_CATALOG) {
      if (!unlockedKeys.has(ach.key)) {
        if (ach.check(stats)) {
          const achId = `ach_${userId}_${careerId || 'all'}_${ach.key}`;
          db.prepare(`
            INSERT OR IGNORE INTO user_achievements (id, user_id, achievement_key, unlocked_at, xp_awarded, career_id)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?)
          `).run(achId, userId, ach.key, ach.xp, careerId || 'atrfb');

          db.prepare(`
            INSERT INTO user_xp_log (user_id, amount, reason, created_at, career_id)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)
          `).run(userId, ach.xp, `Troféu Desbloqueado: ${ach.title}`, careerId || 'atrfb');

          newlyUnlocked.push(ach);
          unlockedKeys.add(ach.key);
        }
      }
    }

    return newlyUnlocked;
  } catch (e) {
    console.error('Error evaluating achievements:', e);
    return [];
  }
}

export function getGamificationStatus(userId, careerId = null) {
  try {
    const stats = getUserStatsForGamification(userId, careerId);

    const activityXP = 
      (stats.sessionsCount * 50) + 
      (stats.questionsCount * 10) + 
      (stats.questionsCorrect * 10) + 
      (stats.simuladosCount * 150) + 
      (stats.maxSimuladoScore >= 80 ? 100 : 0) +
      (stats.flashcardsReviewed * 5) +
      (stats.streakDays * 25);

    evaluateAndUnlockAchievements(userId, stats, activityXP, careerId);

    const trophyXpRow = careerId
      ? db.prepare('SELECT COALESCE(SUM(xp_awarded), 0) as total FROM user_achievements WHERE user_id = ? AND career_id = ?').get(userId, careerId)
      : db.prepare('SELECT COALESCE(SUM(xp_awarded), 0) as total FROM user_achievements WHERE user_id = ?').get(userId);
    const trophyXP = trophyXpRow?.total || 0;

    const bonusXpRow = careerId
      ? db.prepare(`SELECT COALESCE(SUM(amount), 0) as total FROM user_xp_log WHERE user_id = ? AND career_id = ? AND reason LIKE 'Bônus Diário%'`).get(userId, careerId)
      : db.prepare(`SELECT COALESCE(SUM(amount), 0) as total FROM user_xp_log WHERE user_id = ? AND reason LIKE 'Bônus Diário%'`).get(userId);
    const bonusXP = bonusXpRow?.total || 0;

    const totalXP = activityXP + trophyXP + bonusXP;

    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (totalXP >= RANKS[i].minXp) {
        currentRank = RANKS[i];
        nextRank = RANKS[i + 1] || null;
      }
    }

    stats.currentLevel = currentRank.level;

    evaluateAndUnlockAchievements(userId, stats, totalXP, careerId);

    let progressPct = 100;
    let xpNeededForNext = 0;
    if (nextRank) {
      const levelSpan = nextRank.minXp - currentRank.minXp;
      const currentLevelXp = totalXP - currentRank.minXp;
      progressPct = Math.min(100, Math.max(0, Math.round((currentLevelXp / levelSpan) * 100)));
      xpNeededForNext = nextRank.minXp - totalXP;
    }

    const unlockedRows = careerId
      ? db.prepare('SELECT achievement_key, unlocked_at, xp_awarded FROM user_achievements WHERE user_id = ? AND career_id = ?').all(userId, careerId)
      : db.prepare('SELECT achievement_key, unlocked_at, xp_awarded FROM user_achievements WHERE user_id = ?').all(userId);
    const unlockedMap = {};
    unlockedRows.forEach(r => { unlockedMap[r.achievement_key] = r; });

    const achievements = ACHIEVEMENTS_CATALOG.map(ach => {
      const unlockedInfo = unlockedMap[ach.key];
      return {
        key: ach.key,
        title: ach.title,
        desc: ach.desc,
        icon: ach.icon,
        xp: ach.xp,
        category: ach.category,
        isUnlocked: !!unlockedInfo,
        unlockedAt: unlockedInfo ? unlockedInfo.unlocked_at : null
      };
    });

    const recentXpLog = careerId
      ? db.prepare(`SELECT * FROM user_xp_log WHERE user_id = ? AND career_id = ? ORDER BY created_at DESC LIMIT 10`).all(userId, careerId)
      : db.prepare(`SELECT * FROM user_xp_log WHERE user_id = ? ORDER BY created_at DESC LIMIT 10`).all(userId);

    return {
      userId,
      careerId,
      totalXP,
      currentRank,
      nextRank,
      progressPct,
      xpNeededForNext,
      streakDays: stats.streakDays,
      stats,
      achievements,
      unlockedCount: unlockedRows.length,
      totalAchievementsCount: ACHIEVEMENTS_CATALOG.length,
      recentXpLog
    };
  } catch (e) {
    console.error('Error getting gamification status:', e);
    return {
      userId,
      careerId,
      totalXP: 0,
      currentRank: RANKS[0],
      nextRank: RANKS[1],
      progressPct: 0,
      xpNeededForNext: 500,
      streakDays: 0,
      stats: {
        sessionsCount: 0,
        questionsCount: 0,
        questionsCorrect: 0,
        simuladosCount: 0,
        maxSimuladoScore: 0,
        flashcardsReviewed: 0,
        hasEarlyMorningSession: false,
        streakDays: 0
      },
      achievements: ACHIEVEMENTS_CATALOG.map(a => ({ ...a, isUnlocked: false })),
      unlockedCount: 0,
      totalAchievementsCount: ACHIEVEMENTS_CATALOG.length,
      recentXpLog: []
    };
  }
}

export function addXP(userId, amount, reason = 'Atividade Concluída', careerId = 'atrfb') {
  try {
    db.prepare(`
      INSERT INTO user_xp_log (user_id, amount, reason, created_at, career_id)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)
    `).run(userId, amount, reason, careerId);
    return true;
  } catch (e) {
    console.error('Error adding XP:', e);
    return false;
  }
}

