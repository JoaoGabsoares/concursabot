import { api } from './api.js';
import { formatDate, showToast } from './utils.js';

export async function render(container) {
  const userName = localStorage.getItem('concursa_active_user_name') || 'Estudante';
  const userAvatar = localStorage.getItem('concursa_active_user_avatar') || '👨‍🎓';

  container.innerHTML = `
    <div class="gamification-container fade-in">
      <!-- Loading State -->
      <div id="gamification-loading" style="text-align:center; padding:3rem 0;">
        <div class="loading-placeholder">Carregando conquistas, níveis e XP...</div>
      </div>

      <!-- Main Gamification Content -->
      <div id="gamification-content" style="display:none;">
        <!-- Hero Gamer Header -->
        <div class="hero-focus-banner gamer-hero-banner slide-up" style="background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%); border-left: 5px solid var(--color-primary); margin-bottom: 1.75rem;">
          <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
            <div class="gamer-avatar-badge" style="position:relative;">
              <div style="font-size:3rem; line-height:1; background:var(--bg-primary); padding:1rem; border-radius:50%; border:3px solid var(--color-primary); box-shadow:var(--shadow-md);">
                ${userAvatar}
              </div>
              <span id="gamer-level-badge" style="position:absolute; bottom:-5px; right:-5px; background:var(--color-primary); color:#fff; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:10px; border:2px solid var(--bg-card);">
                Nv. 1
              </span>
            </div>

            <div style="flex:1; min-width:260px;">
              <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.25rem;">
                <span class="badge" id="gamer-rank-badge" style="background:var(--color-primary-bg); color:var(--color-primary); font-weight:700;">
                  🌱 Novato no Edital
                </span>
                <span style="font-size:0.8rem; color:var(--text-muted);">•</span>
                <span id="gamer-streak-display" style="font-size:0.85rem; font-weight:700; color:#F59E0B; display:inline-flex; align-items:center; gap:0.25rem;">
                  🔥 0 Dias Seguidos
                </span>
              </div>

              <h2 style="font-size:1.5rem; margin:0 0 0.5rem 0; color:var(--text-primary);">
                ${userName}
              </h2>

              <!-- XP Progress Bar -->
              <div style="margin-top:0.5rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
                  <strong style="color:var(--text-primary);"><span id="gamer-total-xp">0</span> XP Acumulados</strong>
                  <span id="gamer-next-xp" style="color:var(--text-secondary);">Próximo Nível: 500 XP</span>
                </div>
                <div style="width:100%; height:10px; background:var(--bg-primary); border-radius:5px; overflow:hidden; border:1px solid var(--border-color);">
                  <div id="gamer-xp-bar" style="width:0%; height:100%; background:linear-gradient(90deg, var(--color-primary), #EA580C); border-radius:5px; transition:width 0.6s ease;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Action: Daily Check-in Bonus -->
          <div style="display:flex; flex-direction:column; gap:0.5rem; align-items:flex-end;">
            <button class="btn btn-primary" id="btn-claim-daily-xp" style="font-weight:700; display:inline-flex; align-items:center; gap:0.4rem; box-shadow:var(--shadow-sm);">
              <span>🎁 Check-in Diário (+50 XP)</span>
            </button>
            <span style="font-size:0.75rem; color:var(--text-muted);">Resgate 1x ao dia ao iniciar os estudos</span>
          </div>
        </div>

        <!-- Quick Summary Stats Grid -->
        <div class="grid-4 slide-up" style="margin-bottom:1.75rem;">
          <div class="card" style="padding:1.1rem; text-align:center;">
            <div style="font-size:1.8rem; margin-bottom:0.2rem;">📖</div>
            <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);" id="stat-xp-sessions">0</div>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Aulas / PDFs Concluídos</div>
          </div>
          <div class="card" style="padding:1.1rem; text-align:center;">
            <div style="font-size:1.8rem; margin-bottom:0.2rem;">📝</div>
            <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);" id="stat-xp-questions">0</div>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Questões Resolvidas</div>
          </div>
          <div class="card" style="padding:1.1rem; text-align:center;">
            <div style="font-size:1.8rem; margin-bottom:0.2rem;">⏱️</div>
            <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);" id="stat-xp-simulados">0</div>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Simulados Feitos</div>
          </div>
          <div class="card" style="padding:1.1rem; text-align:center;">
            <div style="font-size:1.8rem; margin-bottom:0.2rem;">🏆</div>
            <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);" id="stat-xp-trophies">0 / 12</div>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Troféus Desbloqueados</div>
          </div>
        </div>

        <!-- Trophy Showcase Header & Filters -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <h3 style="font-size:1.25rem; margin:0; color:var(--text-primary);">🏆 Vitrine de Conquistas & Medalhas</h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0.2rem 0 0 0;">Desbloqueie troféus e ganhe impulsos massivos de XP para subir de nível</p>
          </div>

          <!-- Filter Pills -->
          <div style="display:flex; gap:0.4rem; background:var(--bg-tertiary); padding:0.25rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <button class="btn btn-sm trophy-filter-btn active" data-filter="all" style="font-weight:600; font-size:0.8rem;">Todas (12)</button>
            <button class="btn btn-sm trophy-filter-btn" data-filter="unlocked" style="font-weight:600; font-size:0.8rem;">✨ Conquistadas</button>
            <button class="btn btn-sm trophy-filter-btn" data-filter="locked" style="font-weight:600; font-size:0.8rem;">🔒 Bloqueadas</button>
          </div>
        </div>

        <!-- Trophy Grid -->
        <div class="grid-3 slide-up" id="trophies-grid" style="margin-bottom:2rem;">
          <!-- Injetado dinamicamente via JS -->
        </div>

        <!-- Recent XP Log -->
        <div class="card slide-up">
          <div class="card-header">
            <h3 style="font-size:1.05rem; margin:0; color:var(--text-primary);">📜 Histórico Recente de Ganho de XP</h3>
          </div>
          <div id="recent-xp-container" style="padding:1rem;">
            <!-- Injetado dinamicamente -->
          </div>
        </div>
      </div>
    </div>
  `;

  await loadGamificationData(container);
}

async function loadGamificationData(container) {
  try {
    const res = await fetch('/api/gamification/status');
    if (!res.ok) throw new Error('Falha ao carregar status de gamificação');

    const data = await res.json();
    renderGamificationUI(data, container);
  } catch (err) {
    console.error('Error in loadGamificationData:', err);
    document.getElementById('gamification-loading').innerHTML = `
      <div class="card" style="padding:2rem; text-align:center;">
        <h3 style="color:var(--color-danger)">Erro ao carregar dados de gamificação</h3>
        <p class="text-muted">${err.message}</p>
        <button class="btn btn-primary" onclick="window.location.reload()">Tentar Novamente</button>
      </div>
    `;
  }
}

function renderGamificationUI(data, container) {
  document.getElementById('gamification-loading').style.display = 'none';
  document.getElementById('gamification-content').style.display = 'block';

  // Hero Updates
  const rank = data.currentRank;
  document.getElementById('gamer-level-badge').textContent = `Nv. ${rank.level}`;
  document.getElementById('gamer-level-badge').style.background = rank.color;
  
  const rankBadge = document.getElementById('gamer-rank-badge');
  rankBadge.textContent = rank.title;
  rankBadge.style.color = rank.color;
  rankBadge.style.background = `${rank.color}20`;

  document.getElementById('gamer-streak-display').innerHTML = `🔥 ${data.streakDays} ${data.streakDays === 1 ? 'Dia Seguido' : 'Dias Seguidos'}`;
  document.getElementById('gamer-total-xp').textContent = data.totalXP.toLocaleString();

  if (data.nextRank) {
    document.getElementById('gamer-next-xp').textContent = `Próximo Nível (${data.nextRank.title}): ${data.nextRank.minXp.toLocaleString()} XP (Faltam ${data.xpNeededForNext.toLocaleString()} XP)`;
  } else {
    document.getElementById('gamer-next-xp').textContent = 'Nível Máximo Atingido! 👑';
  }

  document.getElementById('gamer-xp-bar').style.width = `${data.progressPct}%`;
  document.getElementById('gamer-xp-bar').style.background = 'linear-gradient(90deg, var(--color-primary), #EA580C)';

  // Summary stats
  document.getElementById('stat-xp-sessions').textContent = data.stats.sessionsCount || 0;
  document.getElementById('stat-xp-questions').textContent = data.stats.questionsCount || 0;
  document.getElementById('stat-xp-simulados').textContent = data.stats.simuladosCount || 0;
  document.getElementById('stat-xp-trophies').textContent = `${data.unlockedCount} / ${data.totalAchievementsCount}`;

  // Render Trophies
  renderTrophiesGrid(data.achievements, 'all');

  // Filter Buttons Setup
  document.querySelectorAll('.trophy-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.trophy-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTrophiesGrid(data.achievements, btn.dataset.filter);
    });
  });

  // Daily Check-in Button
  const btnClaim = document.getElementById('btn-claim-daily-xp');
  if (btnClaim) {
    btnClaim.addEventListener('click', async () => {
      try {
        btnClaim.disabled = true;
        btnClaim.textContent = 'Resgatando...';

        const res = await fetch('/api/gamification/claim-daily', { method: 'POST' });
        const result = await res.json();

        if (res.ok) {
          showToast(`🎉 Bônus Diário Resgatado! +${result.bonusXP} XP`, 'success');
          await loadGamificationData(container);
        } else {
          showToast(result.error || 'Bônus já resgatado hoje!', 'warning');
          btnClaim.textContent = '✓ Check-in Feito Hoje';
        }
      } catch (err) {
        showToast('Erro ao resgatar bônus.', 'error');
        btnClaim.disabled = false;
        btnClaim.textContent = '🎁 Check-in Diário (+50 XP)';
      }
    });
  }

  // Render Recent XP Log
  const logContainer = document.getElementById('recent-xp-container');
  if (data.recentXpLog && data.recentXpLog.length > 0) {
    logContainer.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        ${data.recentXpLog.map(item => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.85rem; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <div style="display:flex; align-items:center; gap:0.65rem;">
              <span style="font-size:1.1rem;">⚡</span>
              <div>
                <strong style="font-size:0.85rem; color:var(--text-primary); display:block;">${item.reason}</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">${formatDate(item.created_at)}</span>
              </div>
            </div>
            <span class="badge badge-success" style="font-weight:800; font-size:0.82rem;">+${item.amount} XP</span>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    logContainer.innerHTML = `
      <p style="text-align:center; color:var(--text-muted); font-size:0.85rem; margin:1rem 0;">
        Nenhum registro de XP adicional recente. Resolva questões, conclua aulas ou faça simulados para pontuar!
      </p>
    `;
  }
}

function renderTrophiesGrid(achievements, filter) {
  const grid = document.getElementById('trophies-grid');
  if (!grid) return;

  const filtered = achievements.filter(ach => {
    if (filter === 'unlocked') return ach.isUnlocked;
    if (filter === 'locked') return !ach.isUnlocked;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:2rem; color:var(--text-muted);">
        Nenhum troféu encontrado para esta categoria.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ach => {
    const isUnlocked = ach.isUnlocked;
    return `
      <div class="card trophy-card ${isUnlocked ? 'trophy-unlocked' : 'trophy-locked'}" style="padding:1.25rem; display:flex; flex-direction:column; justify-content:space-between; position:relative; border: 1px solid ${isUnlocked ? 'var(--color-primary)' : 'var(--border-color)'}; background:${isUnlocked ? 'var(--bg-card)' : 'var(--bg-secondary)'}; opacity:${isUnlocked ? '1' : '0.85'};">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
            <div style="font-size:2.4rem; filter:${isUnlocked ? 'none' : 'grayscale(100%) opacity(0.5)'}; line-height:1;">
              ${ach.icon}
            </div>
            <span class="badge" style="font-weight:700; font-size:0.75rem; background:${isUnlocked ? 'var(--color-primary-bg)' : 'var(--bg-tertiary)'}; color:${isUnlocked ? 'var(--color-primary)' : 'var(--text-muted)'};">
              +${ach.xp} XP
            </span>
          </div>

          <h4 style="font-size:1.05rem; margin:0 0 0.35rem 0; color:${isUnlocked ? 'var(--text-primary)' : 'var(--text-secondary)'};">
            ${ach.title}
          </h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin:0; line-height:1.4;">
            ${ach.desc}
          </p>
        </div>

        <div style="margin-top:1.1rem; pt-2; border-top:1px dashed var(--border-color); font-size:0.75rem;">
          ${isUnlocked ? `
            <div style="color:var(--color-success); font-weight:700; display:flex; align-items:center; gap:0.3rem;">
              <span>✨ Desbloqueado!</span>
              <span style="font-weight:400; color:var(--text-muted); font-size:0.7rem;">(${formatDate(ach.unlockedAt)})</span>
            </div>
          ` : `
            <div style="color:var(--text-muted); display:flex; align-items:center; gap:0.3rem;">
              <span>🔒 Bloqueado</span>
            </div>
          `}
        </div>
      </div>
    `;
  }).join('');
}
