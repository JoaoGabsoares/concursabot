import { api } from './api.js';
import { getSubjectColor, formatDate, showToast } from './utils.js';
import { openResetStudyModal } from './reset-modal.js';
import { getActiveCareerId, getCareerConfig, getCareerLessons } from './careers.js';

export async function render(container) {
  const activeExamId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeExamId);
  const officialLessons = getCareerLessons(activeExamId);

  const activeUserName = localStorage.getItem('concursa_active_user_name') || 'João';

  container.innerHTML = `
    <!-- Top Action-First Header & Metrics -->
    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
      <div>
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
          <span class="doc-stamp revisao">Centro de Ação Diária</span>
          <span class="badge badge-secondary">${careerCfg.shortName}</span>
        </div>
        <h2 style="font-size:1.6rem; margin:0; color:var(--text-primary);">Sua Pauta de Estudos de Hoje</h2>
        <p style="margin:0.2rem 0 0 0; font-size:0.88rem; color:var(--text-secondary);">Acompanhe suas metas diárias, revisões espaçadas e reposições para ${careerCfg.name}</p>
      </div>

      <!-- Quick Metrics Pills & Reset Action -->
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
        <div class="user-pill" style="padding:0.45rem 0.85rem; border-color:var(--border-color);">
          <strong style="color:var(--text-primary); font-family:var(--font-mono); font-size:0.95rem;"><span id="stat-answered">0</span></strong>
          <span style="color:var(--text-secondary); font-size:0.75rem;">questões</span>
        </div>
        <div class="user-pill" style="padding:0.45rem 0.85rem; border-color:var(--border-color);">
          <strong style="color:var(--color-status-success); font-family:var(--font-mono); font-size:0.95rem;"><span id="stat-accuracy">0%</span></strong>
          <span style="color:var(--text-secondary); font-size:0.75rem;">acertos</span>
        </div>
        <div class="user-pill" style="padding:0.45rem 0.85rem; border-color:var(--border-color);">
          <strong style="color:var(--color-status-warning); font-family:var(--font-mono); font-size:0.95rem;"><span id="stat-cards">0</span></strong>
          <span style="color:var(--text-secondary); font-size:0.75rem;">cards</span>
        </div>
        <div class="user-pill" style="padding:0.45rem 0.85rem; border-color:var(--border-color);">
          <strong style="color:var(--color-primary); font-family:var(--font-mono); font-size:0.95rem;"><span id="stat-simulados">0</span></strong>
          <span style="color:var(--text-secondary); font-size:0.75rem;">simulados</span>
        </div>

        <!-- Reset Button -->
        <button class="btn btn-secondary btn-sm" id="btn-dashboard-reset" title="Reiniciar progresso de estudo (dia, semana, mês ou geral)">
          <span>Resetar</span>
        </button>
      </div>
    </div>

    <!-- Gamification & Student Performance Card -->
    <div class="dash-student-card slide-up">
      <div class="dash-student-card-top">
        <div class="dash-student-profile">
          <div class="dash-student-avatar" id="dash-user-avatar">
            ${activeUserName.charAt(0).toUpperCase()}
          </div>
          <div class="dash-student-meta">
            <div class="dash-student-name-row">
              <span class="dash-student-name" id="dash-user-name">${activeUserName}</span>
              <span class="dash-student-rank-badge" id="dash-gamer-rank">Nível 1 • Novato no Edital</span>
              <span class="dash-student-streak-badge" id="dash-gamer-streak">🔥 0 Dias Seguidos</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-secondary);">
              Plano de Estudos focado em <strong style="color:var(--text-primary);">${careerCfg.name}</strong>
            </div>
          </div>
        </div>

        <a href="#conquistas" class="btn btn-secondary btn-sm" style="text-decoration:none; font-size:0.8rem; padding:0.4rem 0.85rem; display:inline-flex; align-items:center; gap:0.4rem;">
          <span>🏆 Ver Conquistas</span>
          <span style="opacity:0.6;">→</span>
        </a>
      </div>

      <!-- 3 Metrics Columns with Generous Spacing -->
      <div class="dash-student-metrics-grid">
        <div class="dash-student-metric-item">
          <span class="dash-student-metric-label">XP Acumulado</span>
          <span class="dash-student-metric-val" style="color:var(--color-primary);"><span id="dash-gamer-xp">0</span> <small style="font-size:0.75rem; font-weight:normal; color:var(--text-secondary);">XP</small></span>
        </div>
        <div class="dash-student-metric-item">
          <span class="dash-student-metric-label">Próximo Nível</span>
          <span class="dash-student-metric-val" style="font-size:0.95rem; color:var(--text-primary); font-family:var(--font-sans);" id="dash-gamer-next-level">Faltam 500 XP</span>
        </div>
        <div class="dash-student-metric-item">
          <span class="dash-student-metric-label">Troféus Conquistados</span>
          <span class="dash-student-metric-val" style="color:var(--color-status-warning);" id="dash-gamer-trophies">0 / 12</span>
        </div>
      </div>

      <!-- Level Progress Bar -->
      <div class="dash-student-progress-wrapper">
        <div class="dash-student-progress-labels">
          <span id="dash-gamer-progress-label">Progresso para o Próximo Nível</span>
          <strong id="dash-gamer-progress-pct" style="font-family:var(--font-mono); color:var(--text-primary);">0%</strong>
        </div>
        <div class="dash-student-progress-bar-bg">
          <div id="dash-gamer-bar" class="dash-student-progress-bar-fill" style="width:0%;"></div>
        </div>
      </div>
    </div>

    <!-- Cobertura do Edital & Ação Principal -->
    <div class="hero-focus-banner slide-up" style="margin-bottom:1.5rem;">
      <div class="hero-focus-info">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
          <span class="doc-stamp coberto">Cobertura do Edital</span>
          <span class="badge badge-secondary" id="edital-coverage-badge" style="font-family:var(--font-mono);">${officialLessons.length} Aulas Oficiais</span>
        </div>
        <h2 id="dash-next-lesson-title">${careerCfg.name}</h2>
        <p style="margin:0; font-size:0.88rem; color:var(--text-secondary);" id="dash-next-lesson-sub">
          Estude as aulas estruturadas do conteúdo programático ou envie apostilas próprias.
        </p>
      </div>
      <div style="display:flex; gap:0.65rem; align-items:center; flex-wrap:wrap;">
        <button class="btn btn-primary hero-focus-btn" onclick="window.location.hash='#study-room'">
          Estudar Aulas do Edital
        </button>
        <button class="btn btn-secondary hero-focus-btn" onclick="window.location.hash='#error-notebook'">
          Caderno de Erros
        </button>
      </div>
    </div>

    <!-- Pauta do Dia & Reposição (Inbox Linear Unificado) -->
    <div class="pauta-container slide-up" style="margin-bottom: 1.5rem;">
      <div class="pauta-header">
        <div>
          <h3 style="margin:0; font-size:1.05rem; color:var(--text-primary);">Pauta de Revisões & Matérias do Dia</h3>
          <p style="font-size:0.78rem; margin:0.15rem 0 0 0; color:var(--text-secondary);">Revisões espaçadas (D+1, D+7, D+30), Google Agenda e reposições prioritárias</p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" id="btn-sync-calendar">Atualizar Agenda</button>
          <button class="btn btn-secondary btn-sm" id="btn-add-backlog">Registrar Pendência</button>
        </div>
      </div>

      <div id="backlog-content">
        <div class="loading-placeholder">Carregando pauta do dia e revisões...</div>
      </div>
    </div>

    <!-- Google Calendar Today Row (Discreto) -->
    <div id="calendar-today-content" style="margin-bottom:1.5rem;">
      <!-- Dinâmico -->
    </div>

    <!-- Bottom Breakdown: Ferramentas Rápidas -->
    <div class="grid-2 slide-up">
      <div class="card">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1rem;">🎯 Radar de Matérias Oficiais — ${careerCfg.shortName}</h3>
          <span class="badge badge-primary">Oficial</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.85rem;" id="dash-subjects-radar">
          <!-- Injetado dinamicamente -->
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 style="font-size:1rem;">⚡ Ferramentas de Estudo Rápido</h3>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.65rem;">
          <button class="btn btn-secondary" onclick="window.location.hash='#study-room'" style="padding:0.85rem; font-size:0.85rem; font-weight:600; text-align:left;">
            📖 Biblioteca & Aulas
          </button>
          <button class="btn btn-secondary" onclick="window.location.hash='#simulados'" style="padding:0.85rem; font-size:0.85rem; font-weight:600; text-align:left;">
            ⏱️ Simulados Oficiais
          </button>
          <button class="btn btn-secondary" onclick="window.location.hash='#error-notebook'" style="padding:0.85rem; font-size:0.85rem; font-weight:600; text-align:left; border-left:3px solid #EF4444;">
            📕 Caderno de Erros
          </button>
          <button class="btn btn-secondary" onclick="window.location.hash='#schedule'" style="padding:0.85rem; font-size:0.85rem; font-weight:600; text-align:left;">
            📅 Cronograma Semanal
          </button>
        </div>
      </div>
    </div>
  `;

  // Fetch Stats
  try {
    const statsRes = await fetch(`/api/dashboard?careerId=${encodeURIComponent(activeExamId)}`, {
      headers: {
        'x-user-id': localStorage.getItem('concursa_active_user_id') || 'user_joao',
        'x-exam-id': activeExamId
      }
    });
    if (statsRes.ok) {
      const stats = await statsRes.json();
      animateValue("stat-answered", 0, stats.answered || 0, 1000);
      animateValue("stat-accuracy", 0, stats.accuracy || 0, 1000, "%");
      animateValue("stat-cards", 0, stats.pendingCards || 0, 1000);
      animateValue("stat-simulados", 0, stats.simulados || 0, 1000);
    }
  } catch(e) {}

  // Fetch Gamification Status
  try {
    const gamRes = await fetch(`/api/gamification/status?careerId=${encodeURIComponent(activeExamId)}`, {
      headers: {
        'x-user-id': localStorage.getItem('concursa_active_user_id') || 'user_joao',
        'x-exam-id': activeExamId
      }
    });
    if (gamRes.ok) {
      const gData = await gamRes.json();
      const rank = gData.currentRank || { title: 'Novato no Edital', badge: '🌱' };
      
      const rankEl = document.getElementById('dash-gamer-rank');
      if (rankEl) rankEl.textContent = `Nível ${rank.level || 1} • ${rank.name || 'Novato'}`;

      const streakEl = document.getElementById('dash-gamer-streak');
      if (streakEl) streakEl.innerHTML = `🔥 ${gData.streakDays} ${gData.streakDays === 1 ? 'Dia Seguido' : 'Dias Seguidos'}`;

      const xpEl = document.getElementById('dash-gamer-xp');
      if (xpEl) xpEl.textContent = (gData.totalXP || 0).toLocaleString();

      const nextLevelEl = document.getElementById('dash-gamer-next-level');
      if (nextLevelEl) {
        if (gData.nextRank) {
          nextLevelEl.textContent = `Faltam ${((gData.xpNeededForNext || 0)).toLocaleString()} XP (Nível ${gData.nextRank.level})`;
        } else {
          nextLevelEl.textContent = `Nível Máximo Alcançado 👑`;
        }
      }

      const trophiesEl = document.getElementById('dash-gamer-trophies');
      if (trophiesEl) trophiesEl.textContent = `${gData.unlockedCount || 0} / ${gData.totalAchievementsCount || 12}`;

      const progressLabelEl = document.getElementById('dash-gamer-progress-label');
      if (progressLabelEl) {
        if (gData.nextRank) {
          progressLabelEl.textContent = `Evolução para o Nível ${gData.nextRank.level} (${gData.nextRank.name})`;
        } else {
          progressLabelEl.textContent = `Evolução Total`;
        }
      }

      const progressPctEl = document.getElementById('dash-gamer-progress-pct');
      if (progressPctEl) progressPctEl.textContent = `${gData.progressPct || 0}%`;

      const barEl = document.getElementById('dash-gamer-bar');
      if (barEl) barEl.style.width = `${gData.progressPct || 0}%`;
    }
  } catch (e) {}

  // Renderizar Radar de Matérias Oficiais da Carreira
  const radarContainer = document.getElementById('dash-subjects-radar');
  if (radarContainer && careerCfg.subjects) {
    const totalQ = careerCfg.subjects.reduce((sum, s) => sum + (s.questions || 10), 0);
    radarContainer.innerHTML = careerCfg.subjects.slice(0, 4).map(sub => {
      const pct = Math.min(100, Math.round(((sub.questions || 10) / totalQ) * 100 * 2.5));
      return `
        <div>
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.25rem;">
            <strong style="color:var(--text-primary);">${sub.subject}</strong>
            <span style="color:var(--color-primary); font-weight:700;">${sub.questions}q (${sub.wave === 1 ? 'Prioritária' : 'Complementar'})</span>
          </div>
          <div style="width:100%; background:var(--bg-tertiary); height:6px; border-radius:3px;">
            <div style="width:${pct}%; background:${getSubjectColor(sub.subject)}; height:100%; border-radius:3px;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  loadBacklog();
  loadTodaySchedule();
  
  document.getElementById('btn-sync-calendar')?.addEventListener('click', () => {
    loadBacklog();
    loadTodaySchedule();
    showToast('Pauta e cronograma atualizados!', 'info');
  });
  document.getElementById('btn-add-backlog')?.addEventListener('click', showAddBacklogDialog);

  document.getElementById('btn-dashboard-reset')?.addEventListener('click', () => {
    openResetStudyModal(async () => {
      try {
        const stats = await api.dashboard.getStats();
        animateValue("stat-answered", 0, stats.answered || 0, 500);
        animateValue("stat-accuracy", 0, stats.accuracy || 0, 500, "%");
        animateValue("stat-cards", 0, stats.pendingCards || 0, 500);
        animateValue("stat-simulados", 0, stats.simulados || 0, 500);
      } catch(e) {}
      loadBacklog();
      loadTodaySchedule();
    });
  });
}

// ============================================================
// BACKLOG & MISSED SESSIONS
// ============================================================

async function loadBacklog() {
  const container = document.getElementById('backlog-content');
  if (!container) return;

  try {
    const activeExamId = getActiveCareerId();
    const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
    const res = await fetch(`/api/backlog?careerId=${encodeURIComponent(activeExamId)}`, {
      headers: {
        'x-exam-id': activeExamId,
        'x-user-id': activeUserId
      }
    });
    const data = await res.json();

    const manual = data.manualBacklog || [];
    const unreviewed = data.unreviewedMaterials || [];
    const spaced = data.spacedReviews || [];
    const overdue = spaced.filter(r => r.timeline_status === 'overdue');
    const todayReviews = spaced.filter(r => r.timeline_status === 'today');

    if (manual.length === 0 && unreviewed.length === 0 && overdue.length === 0 && todayReviews.length === 0) {
      container.innerHTML = `
        <div style="padding:1.5rem 1.25rem; display:flex; align-items:center; gap:0.75rem; color:var(--text-secondary);">
          <span style="font-size:1.2rem; color:var(--color-success);">✅</span>
          <div>
            <strong style="color:var(--text-primary); font-size:0.92rem;">Nenhuma pendência ou revisão atrasada!</strong>
            <p style="margin:0.15rem 0 0 0; font-size:0.82rem; color:var(--text-muted);">Sua rotina de estudos e a Curva do Esquecimento estão 100% em dia.</p>
          </div>
        </div>
      `;
      return;
    }

    let itemsHtml = '';

    // 1. Render Overdue Spaced Reviews first (D+1, D+7, D+30)
    overdue.forEach(rev => {
      const revTypeLabel = rev.review_type === 'd1' ? 'D+1 (24h)' : (rev.review_type === 'd7' ? 'D+7 (7 dias)' : 'D+30 (30 dias)');
      itemsHtml += `
        <div class="pauta-row overdue">
          <div class="pauta-row-left">
            <div>
              <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.2rem;">
                <span class="badge badge-secondary">${rev.subject}</span>
                <span class="doc-stamp indeferido">Revisão ${revTypeLabel} Atrasada</span>
                <span class="pauta-row-title">${rev.material_title || `Aula ${rev.lesson_number}`}</span>
              </div>
              <div class="pauta-row-meta" style="color:var(--color-status-danger); font-weight:600;">
                Venceu em ${formatDate(rev.scheduled_date)} (Estudada em ${formatDate(rev.studied_at)}). Reponha agora.
              </div>
            </div>
          </div>

          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'">
              Revisar Aula
            </button>
            <button class="btn btn-secondary btn-sm btn-complete-review" data-id="${rev.id}" title="Marcar revisão como feita">
              Concluída
            </button>
          </div>
        </div>
      `;
    });

    // 2. Render Today Spaced Reviews
    todayReviews.forEach(rev => {
      const revTypeLabel = rev.review_type === 'd1' ? 'D+1 (24h)' : (rev.review_type === 'd7' ? 'D+7 (7 dias)' : 'D+30 (30 dias)');
      itemsHtml += `
        <div class="pauta-row today">
          <div class="pauta-row-left">
            <div>
              <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.2rem;">
                <span class="badge badge-secondary">${rev.subject}</span>
                <span class="doc-stamp revisao">Revisão ${revTypeLabel} de Hoje</span>
                <span class="pauta-row-title">${rev.material_title || `Aula ${rev.lesson_number}`}</span>
              </div>
              <div class="pauta-row-meta">
                Curva do Esquecimento agendada para hoje (${formatDate(rev.scheduled_date)}).
              </div>
            </div>
          </div>

          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'">
              Revisar Aula
            </button>
            <button class="btn btn-secondary btn-sm btn-complete-review" data-id="${rev.id}">
              Concluir
            </button>
          </div>
        </div>
      `;
    });

    // 3. Render manual missed sessions
    manual.forEach(item => {
      itemsHtml += `
        <div class="pauta-row scheduled">
          <div class="pauta-row-left">
            <div>
              <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.2rem;">
                <span class="badge badge-secondary">${item.subject}</span>
                <span class="pauta-row-title">${item.title || `Aula ${item.lesson_number}`}</span>
                <span class="doc-stamp pendente">Reposição: ${item.target_slot}</span>
              </div>
              <div class="pauta-row-meta">
                Motivo: ${item.reason || 'Estudo adiado'}
              </div>
            </div>
          </div>

          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'">
              Repor Agora
            </button>
            <button class="btn btn-secondary btn-sm btn-resolve-backlog" data-id="${item.id}" title="Marcar como reposto">
              Concluído
            </button>
          </div>
        </div>
      `;
    });

    // 4. Render unreviewed materials
    unreviewed.forEach(mat => {
      itemsHtml += `
        <div class="pauta-row" style="border-left: 3px solid var(--color-status-warning);">
          <div class="pauta-row-left">
            <div>
              <div style="display:flex; align-items:center; gap:0.45rem; margin-bottom:0.2rem;">
                <span class="badge badge-secondary">${mat.subject}</span>
                <span class="pauta-row-title">${mat.title}</span>
                <span class="doc-stamp pendente">Questões Pendentes</span>
              </div>
              <div class="pauta-row-meta" style="color:var(--color-status-warning); font-weight:600;">
                Leitura concluída, aguardando resolução de questões para fixação.
              </div>
            </div>
          </div>

          <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'">
            Resolver Questões
          </button>
        </div>
      `;
    });

    container.innerHTML = `<div class="pauta-list">${itemsHtml}</div>`;

    container.querySelectorAll('.btn-resolve-backlog').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        try {
          const res = await fetch(`/api/backlog/${id}/resolve`, { method: 'PUT' });
          if (res.ok) {
            showToast('Reposição concluída! Parabéns pelo foco. 🎯', 'success');
            loadBacklog();
          }
        } catch (e) {
          showToast('Erro ao atualizar reposição.', 'error');
        }
      });
    });

    container.querySelectorAll('.btn-complete-review').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        try {
          const res = await fetch(`/api/backlog/reviews/${id}/complete`, { method: 'PUT' });
          if (res.ok) {
            showToast('Revisão espaçada registrada com sucesso! 🧠🎉', 'success');
            loadBacklog();
          }
        } catch (e) {
          showToast('Erro ao registrar revisão.', 'error');
        }
      });
    });

  } catch (error) {
    console.error('Backlog load error:', error);
    container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">Não foi possível carregar as reposições.</p>`;
  }
}

function showAddBacklogDialog() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal card">
      <h3>🚨 Registrar Matéria Atrasada / Reposição</h3>
      <p class="text-muted" style="font-size:0.85rem;">Registre o que não deu tempo de estudar para não deixar a matéria esquecida.</p>

      <div class="form-group" style="margin-top:1rem;">
        <label for="b-subject">Disciplina</label>
        <select id="b-subject" class="form-control">
          <option value="Direito Tributário" selected>Direito Tributário</option>
          <option value="Direito Previdenciário">Direito Previdenciário</option>
          <option value="Língua Portuguesa">Língua Portuguesa</option>
          <option value="Fluência de Dados">Fluência de Dados</option>
          <option value="Direito Constitucional">Direito Constitucional</option>
          <option value="Legislação Tributária">Legislação Tributária</option>
          <option value="Legislação Aduaneira">Legislação Aduaneira</option>
          <option value="Direito Administrativo">Direito Administrativo</option>
          <option value="Raciocínio Lógico Matemático">Raciocínio Lógico Matemático</option>
          <option value="Contabilidade Geral">Contabilidade Geral</option>
        </select>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label for="b-lesson">Nº da Aula (ex: 1)</label>
          <input type="number" id="b-lesson" class="form-control" placeholder="1" value="1">
        </div>
        <div class="form-group">
          <label for="b-slot">Quando pretende repor?</label>
          <select id="b-slot" class="form-control">
            <option value="Hoje à noite" selected>Hoje à noite</option>
            <option value="Amanhã de manhã">Amanhã de manhã</option>
            <option value="Amanhã à noite">Amanhã à noite</option>
            <option value="Fim de semana (Sábado/Domingo)">Fim de semana</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="b-reason">O que ficou pendente?</label>
        <input type="text" id="b-reason" class="form-control" placeholder="Ex: Não fiz as questões / Falta revisar / Bloco da manhã adiado" value="Faltou fazer questões e revisar">
      </div>

      <div class="modal-actions">
        <button class="btn btn-secondary" id="btn-cancel-backlog">Cancelar</button>
        <button class="btn btn-primary" id="btn-confirm-backlog">Salvar na Fila de Reposição</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#btn-cancel-backlog').onclick = () => overlay.remove();

  overlay.querySelector('#btn-confirm-backlog').onclick = async () => {
    const subject = overlay.querySelector('#b-subject').value;
    const lessonNumber = parseInt(overlay.querySelector('#b-lesson').value, 10) || null;
    const targetSlot = overlay.querySelector('#b-slot').value;
    const reason = overlay.querySelector('#b-reason').value;

    try {
      const res = await fetch('/api/backlog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          lessonNumber,
          title: `Aula ${lessonNumber || 'Pendente'}`,
          reason,
          targetSlot
        })
      });

      if (res.ok) {
        showToast('Matéria adicionada à fila de reposição!', 'success');
        overlay.remove();
        loadBacklog();
      } else {
        showToast('Erro ao salvar reposição.', 'error');
      }
    } catch (e) {
      showToast('Erro ao conectar ao servidor.', 'error');
    }
  };
}

// ============================================================
// SMART AI SCHEDULE & DAILY STUDY BLOCKS
// ============================================================

async function loadTodaySchedule() {
  const container = document.getElementById('calendar-today-content');
  if (!container) return;

  const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
  const activeCareerId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeCareerId);

  try {
    const res = await fetch(`/api/schedule/today?careerId=${encodeURIComponent(activeCareerId)}`, {
      headers: {
        'x-user-id': activeUserId,
        'x-exam-id': activeCareerId
      }
    });
    const data = await res.json();

    if (!data.success) {
      container.innerHTML = '';
      return;
    }

    const tasks = data.tasks || [];
    const hasSchedule = !!data.schedule;
    const gcalEnabled = !!data.googleCalendarEnabled;
    const gcalEvents = data.googleEvents || [];

    if (!hasSchedule) {
      container.innerHTML = `
        <div style="padding:1.25rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
              <span>🤖</span> <span>Você ainda não gerou um Cronograma Semanal para ${careerCfg.shortName}</span>
            </div>
            <p style="margin:0.25rem 0 0 0; font-size:0.82rem; color:var(--text-secondary);">
              A IA pode calcular a divisão ideal de horas e disciplinas da banca para a sua rotina diária.
            </p>
          </div>
          <button class="btn btn-primary" onclick="window.location.hash='#schedule'" style="background:var(--gradient-primary); font-size:0.85rem; font-weight:600;">
            ⚡ Criar Cronograma com IA
          </button>
        </div>
      `;
      return;
    }

    let tasksHtml = '';
    if (tasks.length === 0) {
      tasksHtml = `
        <div style="padding:1rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.88rem; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span style="font-weight:700; color:var(--text-primary);">🎉 Hoje é dia de descanso ou dia livre no ciclo semanal (${data.currentDayName})</span>
            <p style="margin:0.2rem 0 0 0; font-size:0.8rem; color:var(--text-secondary);">Aproveite para descansar ou adiantar revisões da semana.</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.location.hash='#schedule'">
            📅 Ver Cronograma
          </button>
        </div>
      `;
    } else {
      const completedCount = tasks.filter(t => t.completed).length;
      tasksHtml = `
        <div class="card" style="padding:1.15rem; border-left:4px solid var(--color-tutor);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <h4 style="margin:0; font-size:0.95rem; color:var(--text-primary);">
                📅 Metas do Ciclo de Hoje (${data.currentDayName})
              </h4>
              <span style="font-size:0.75rem; color:var(--text-secondary);">
                ${data.schedule.title} • ${completedCount}/${tasks.length} blocos concluídos
              </span>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="window.location.hash='#schedule'">
              ⚙️ Ajustar Ciclo
            </button>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            ${tasks.map(t => {
              const color = getSubjectColor(t.subject);
              const isDone = !!t.completed;
              return `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:0.65rem 0.85rem; background:var(--bg-primary); border:1px solid var(--border-color); border-radius:var(--radius-sm); gap:0.75rem; transition:all 0.2s; ${isDone ? 'opacity:0.6; text-decoration:line-through;' : ''}">
                  <div style="display:flex; align-items:center; gap:0.6rem; flex:1;">
                    <input type="checkbox" class="dash-task-chk" data-id="${t.id}" ${isDone ? 'checked' : ''} style="width:18px; height:18px; cursor:pointer;" title="Concluir bloco">
                    <div>
                      <div style="display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
                        <span class="badge badge-${color}">${t.subject}</span>
                        <strong style="font-size:0.88rem; color:var(--text-primary);">${t.topic}</strong>
                      </div>
                      <span style="font-size:0.75rem; color:var(--text-muted);">⏱️ ${t.duration_minutes} minutos</span>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'" title="Estudar matéria">
                    ▶️
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    let gcalHtml = '';
    if (gcalEnabled && gcalEvents.length > 0) {
      gcalHtml = `
        <div style="margin-top:0.75rem; padding:0.85rem; background:rgba(96, 165, 250, 0.08); border-left:3px solid #60A5FA; border-radius:var(--radius-sm);">
          <div style="font-weight:700; font-size:0.85rem; color:#60A5FA; margin-bottom:0.4rem;">
            🗓️ Google Agenda (${gcalEvents.length} eventos sincronizados para hoje):
          </div>
          <div style="display:flex; flex-direction:column; gap:0.35rem;">
            ${gcalEvents.map(ev => `
              <div style="font-size:0.82rem; color:var(--text-primary); display:flex; justify-content:space-between;">
                <span>⏱️ <strong>${ev.timeDisplay}</strong>: ${ev.summary}</span>
                ${ev.subject ? `<span class="badge badge-info">${ev.subject}</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = tasksHtml + gcalHtml;

    // Hook up checkboxes
    container.querySelectorAll('.dash-task-chk').forEach(chk => {
      chk.addEventListener('change', async () => {
        const taskId = chk.dataset.id;
        const completed = chk.checked;
        try {
          await fetch(`/api/schedule/task/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
          });
          showToast(completed ? '🎉 Bloco de estudo concluído! (+25 XP)' : 'Bloco desmarcado.', 'success');
          loadTodaySchedule();
        } catch (e) {
          showToast('Erro ao atualizar tarefa.', 'error');
        }
      });
    });

  } catch (err) {
    console.error('Error loading today schedule:', err);
    container.innerHTML = '';
  }
}

function animateValue(id, start, end, duration, suffix = "") {
  const obj = document.getElementById(id);
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
