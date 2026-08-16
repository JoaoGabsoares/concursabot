import { showToast } from './utils.js';
import { openResetStudyModal } from './reset-modal.js';
import { getActiveCareerId, setActiveCareerId, getCareerConfig } from './careers.js';
import { EXAM_CATALOG } from './hub.js';
import { applyTheme } from './app.js';

export async function render(container) {
  return renderSettings(container);
}

export async function renderSettings(container) {
  const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
  let activeTab = 'profile';

  container.innerHTML = `
    <div class="fade-in" style="max-width: 1000px; margin: 0 auto; padding-bottom: 3rem;">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h1 style="font-size:1.75rem; font-weight:800; color:var(--text-primary); margin:0; display:flex; align-items:center; gap:0.5rem;">
            <span>⚙️</span> Central de Configurações
          </h1>
          <p style="margin:0.25rem 0 0 0; color:var(--text-secondary); font-size:0.9rem;">
            Gerencie seu perfil de estudante, concurso alvo, integrações de agenda, IA e backups em um só lugar.
          </p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.location.hash='#dashboard'">
            ← Voltar ao Painel
          </button>
        </div>
      </div>

      <!-- Settings Tabs Navigation -->
      <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; overflow-x:auto;">
        <button class="btn btn-tab active" data-tab="profile" id="tab-btn-profile" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          👤 Perfil & Concurso
        </button>
        <button class="btn btn-tab" data-tab="calendar" id="tab-btn-calendar" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          📅 Agenda & Integrações
        </button>
        <button class="btn btn-tab" data-tab="ai" id="tab-btn-ai" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          🤖 Inteligência Artificial
        </button>
        <button class="btn btn-tab" data-tab="appearance" id="tab-btn-appearance" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          🎨 Aparência & Sons
        </button>
        <button class="btn btn-tab" data-tab="backup" id="tab-btn-backup" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          💾 Dados & Manutenção
        </button>
        <button class="btn btn-tab" data-tab="logs" id="tab-btn-logs" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          📋 Logs & Diagnóstico
        </button>
        <button class="btn btn-tab" data-tab="guide" id="tab-btn-guide" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          📖 Guia de Uso
        </button>
        <button class="btn btn-tab" data-tab="about" id="tab-btn-about" style="font-weight:600; font-size:0.88rem; padding:0.6rem 1rem; border-radius:var(--radius-sm);">
          ℹ️ Sobre & Contato
        </button>
      </div>

      <!-- Tab Content Area -->
      <div id="settings-tab-content">
        <div class="loading-placeholder">Carregando configurações...</div>
      </div>
    </div>
  `;

  // Fetch current user profile
  let userProfile = null;
  try {
    const res = await fetch(`/api/users/${activeUserId}`);
    userProfile = await res.json();
  } catch (err) {
    console.error('Error fetching user profile:', err);
  }

  if (!userProfile || userProfile.error) {
    userProfile = {
      id: activeUserId,
      name: 'João',
      avatar_emoji: '👨‍🎓',
      active_career_id: getActiveCareerId(),
      daily_hours: 4,
      study_shifts: '["manha", "noite"]',
      preferred_material: 'enxuto',
      target_role: 'Técnico / Analista',
      target_banca: 'IBDO / FGV',
      google_calendar_enabled: 0,
      google_calendar_url: '',
      tutor_style: 'pratico',
      sound_effects_enabled: 1
    };
  }

  // Bind tab navigation
  const tabButtons = container.querySelectorAll('.btn-tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderActiveTab();
    });
  });

  function renderActiveTab() {
    // Cancela qualquer polling ativo ao mudar de aba
    if (autoRefreshInterval) {
      clearInterval(autoRefreshInterval);
      autoRefreshInterval = null;
    }

    const tabContent = document.getElementById('settings-tab-content');
    if (!tabContent) return;

    if (activeTab === 'profile') {
      renderProfileTab(tabContent);
    } else if (activeTab === 'calendar') {
      renderCalendarTab(tabContent);
    } else if (activeTab === 'ai') {
      renderAITab(tabContent);
    } else if (activeTab === 'appearance') {
      renderAppearanceTab(tabContent);
    } else if (activeTab === 'backup') {
      renderBackupTab(tabContent);
    } else if (activeTab === 'logs') {
      renderLogsTab(tabContent);
    } else if (activeTab === 'guide') {
      renderGuideTab(tabContent);
    } else if (activeTab === 'about') {
      renderAboutTab(tabContent);
    }
  }

  // ==========================================
  // TAB: GUIA DE USO
  // ==========================================
  function renderGuideTab(tabEl) {
    tabEl.innerHTML = `
      <div class="card fade-in" style="padding:2rem; border-radius:var(--radius-md); border:1px solid var(--border-color); background:var(--bg-secondary);">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="font-size:2rem;">📖</span>
          <div>
            <h3 style="margin:0; font-size:1.35rem; color:var(--text-primary);">Manual de Uso & Como Funciona</h3>
            <p style="margin:0.2rem 0 0 0; font-size:0.85rem; color:var(--text-secondary);">Guia completo de cada uma das 12 ferramentas de estudo do ConcursaBot</p>
          </div>
        </div>

        <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.55; margin-bottom:1.5rem;">
          Criamos um guia visual interativo detalhando como funciona o fluxo de estudo em 3 passos, o objetivo de cada aba, a tabela de pontuação de XP e a rotina diária recomendada.
        </p>

        <div style="display:flex; gap:0.8rem; flex-wrap:wrap;">
          <a href="#guia" class="btn btn-primary" style="padding:0.65rem 1.4rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
            <span>📖 Abrir Guia de Uso Completo</span>
          </a>
          <a href="#sobre" class="btn btn-secondary" style="padding:0.65rem 1.4rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
            <span>ℹ️ Ver Manifesto & Pilares</span>
          </a>
        </div>
      </div>
    `;
  }

  // ==========================================
  // TAB: SOBRE & CONTATO
  // ==========================================
  function renderAboutTab(tabEl) {
    const contactEmail = 'joao.dev.soares@gmail.com';
    tabEl.innerHTML = `
      <div class="card fade-in" style="padding:2rem; border-radius:var(--radius-md); border:1px solid var(--border-color); background:var(--bg-secondary);">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="font-size:2rem;">🧠</span>
          <div>
            <h3 style="margin:0; font-size:1.35rem; color:var(--text-primary);">Sobre o ConcursaBot</h3>
            <p style="margin:0.2rem 0 0 0; font-size:0.85rem; color:var(--text-secondary);">Versão 2.5.0 Pro • Plataforma Aberta e Gratuita para Concursos</p>
          </div>
        </div>

        <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
          O ConcursaBot é uma solução inovadora de alta performance para concurseiros de alto rendimento. Em vez de perder horas assistindo aulas gravadas extensas, a plataforma une a <strong>leitura direta da apostila em tela dividida</strong> com um <strong>Caderno Enxuto gerado por IA</strong>, repetição espaçada automática (D+1, D+7, D+30), Caderno de Erros inteligente e análise preditiva de bancas examinadoras.
        </p>

        <div style="margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--border-color);">
          <h4 style="margin:0 0 0.75rem 0; font-size:1.1rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
            <span>📬</span> Contato & Desenvolvedor
          </h4>
          <p style="font-size:0.88rem; color:var(--text-secondary); margin:0 0 1rem 0;">
            Dúvidas, sugestões de novos editais ou relatórios de melhoria? Envie uma mensagem direta:
          </p>

          <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
            <div style="padding:0.6rem 1rem; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:8px; font-family:var(--font-mono); font-size:0.92rem; color:var(--text-primary); font-weight:600;">
              ${contactEmail}
            </div>

            <button id="btn-settings-copy-email" class="btn btn-secondary btn-sm" style="padding:0.6rem 1rem; font-weight:600;">
              <span>📋 Copiar E-mail</span>
            </button>

            <a href="mailto:${contactEmail}?subject=Contato%20ConcursaBot" class="btn btn-primary btn-sm" style="padding:0.6rem 1rem; font-weight:600;">
              <span>✉️ Abrir no E-mail</span>
            </a>

            <a href="#sobre" class="btn btn-secondary btn-sm" style="padding:0.6rem 1rem; font-weight:600;">
              <span>📖 Ver Apresentação Completa</span>
            </a>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-settings-copy-email')?.addEventListener('click', () => {
      navigator.clipboard.writeText(contactEmail).then(() => {
        showToast('📋 E-mail copiado para a área de transferência!', 'success');
      });
    });
  }

  // ==========================================
  // TAB 1: PERFIL & CONCURSO ALVO
  // ==========================================
  function renderProfileTab(tabEl) {
    const avatarList = ['👨‍🎓', '👩‍🎓', '👨‍💼', '👩‍💼', '👩‍⚕️', '👨‍⚕️', '⚖️', '⚓', '🏛️', '🧠', '⚡', '🎯', '🚀', '📚', '🛡️'];
    let shifts = [];
    try {
      shifts = typeof userProfile.study_shifts === 'string' ? JSON.parse(userProfile.study_shifts) : (userProfile.study_shifts || []);
    } catch(e) {
      shifts = ['manha', 'noite'];
    }

    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <h3 style="font-size:1.15rem; margin-bottom:1.25rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span>👤</span> Identificação do Estudante
        </h3>

        <form id="form-settings-profile">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem; margin-bottom:1.5rem;">
            <div>
              <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem; color:var(--text-primary);">
                Nome do Estudante
              </label>
              <input type="text" id="cfg-user-name" class="form-control" value="${userProfile.name || ''}" placeholder="Digite seu nome completo" required style="width:100%;">
            </div>

            <div>
              <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem; color:var(--text-primary);">
                Avatar Emoji
              </label>
              <div style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center;">
                <input type="hidden" id="cfg-avatar-emoji" value="${userProfile.avatar_emoji || '👨‍🎓'}">
                <span id="cfg-avatar-preview" style="font-size:1.8rem; min-width:40px; text-align:center;">${userProfile.avatar_emoji || '👨‍🎓'}</span>
                <div style="display:flex; gap:0.25rem; flex-wrap:wrap;">
                  ${avatarList.map(em => `
                    <button type="button" class="btn-avatar-pick" data-emoji="${em}" style="font-size:1.1rem; padding:0.25rem 0.4rem; border-radius:4px; border:1px solid var(--border-color); background:var(--bg-tertiary); cursor:pointer;">
                      ${em}
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div style="border-top:1px solid var(--border-color); padding-top:1.5rem; margin-bottom:1.5rem;">
            <h3 style="font-size:1.15rem; margin-bottom:1rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
              <span>🎯</span> Concurso Alvo Principal
            </h3>
            <p style="font-size:0.83rem; color:var(--text-secondary); margin-bottom:1rem;">
              O concurso selecionado define as disciplinas oficiais, pesos da banca examinadora e conteúdo das aulas.
            </p>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem; margin-bottom:1.25rem;">
              ${EXAM_CATALOG.map(exam => {
                const isSelected = (userProfile.active_career_id || getActiveCareerId()) === exam.id;
                return `
                  <div class="career-pick-card ${isSelected ? 'selected' : ''}" data-id="${exam.id}" style="padding:1.1rem; border-radius:var(--radius-sm); border:2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}; background:${isSelected ? 'rgba(27, 54, 93, 0.08)' : 'var(--bg-secondary)'}; cursor:pointer; transition:all 0.2s;">
                    <div style="font-size:1.5rem; margin-bottom:0.4rem;">${exam.icon}</div>
                    <div style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${exam.title}</div>
                    <div style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.2rem;">${exam.role}</div>
                    <div style="font-size:0.72rem; color:var(--color-primary); font-weight:700; margin-top:0.4rem;">🏛️ ${exam.banca}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div style="border-top:1px solid var(--border-color); padding-top:1.5rem; margin-bottom:1.5rem;">
            <h3 style="font-size:1.15rem; margin-bottom:1rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
              <span>⏱️</span> Rotina & Preferências de Estudo
            </h3>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem;">
              <div>
                <label style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem; color:var(--text-primary);">
                  <span>Meta Diária de Estudo:</span>
                  <span id="cfg-hours-display" style="color:var(--color-primary); font-weight:700;">${userProfile.daily_hours || 4} horas/dia</span>
                </label>
                <input type="range" id="cfg-daily-hours" min="1" max="12" step="1" value="${userProfile.daily_hours || 4}" style="width:100%;">
                <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">
                  <span>1h</span><span>4h (Recomendado)</span><span>8h</span><span>12h</span>
                </div>
              </div>

              <div>
                <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem; color:var(--text-primary);">
                  Formato de Leitura Preferido
                </label>
                <select id="cfg-preferred-material" class="form-control" style="width:100%;">
                  <option value="enxuto" ${userProfile.preferred_material === 'enxuto' ? 'selected' : ''}>⚡ Caderno Enxuto (Foco em Assertivas e Lei Seca)</option>
                  <option value="completo" ${userProfile.preferred_material === 'completo' ? 'selected' : ''}>📖 Apostila Completa (Doutrina Aprofundada)</option>
                </select>
              </div>
            </div>

            <div style="margin-top:1rem;">
              <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem; color:var(--text-primary);">
                Turnos Disponíveis para Estudo
              </label>
              <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; color:var(--text-secondary); cursor:pointer;">
                  <input type="checkbox" class="cfg-shift-chk" value="manha" ${shifts.includes('manha') ? 'checked' : ''}> 🌅 Manhã
                </label>
                <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; color:var(--text-secondary); cursor:pointer;">
                  <input type="checkbox" class="cfg-shift-chk" value="tarde" ${shifts.includes('tarde') ? 'checked' : ''}> ☀️ Tarde
                </label>
                <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; color:var(--text-secondary); cursor:pointer;">
                  <input type="checkbox" class="cfg-shift-chk" value="noite" ${shifts.includes('noite') ? 'checked' : ''}> 🌙 Noite
                </label>
                <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; color:var(--text-secondary); cursor:pointer;">
                  <input type="checkbox" class="cfg-shift-chk" value="madrugada" ${shifts.includes('madrugada') ? 'checked' : ''}> 🦉 Madrugada
                </label>
              </div>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:0.75rem; border-top:1px solid var(--border-color); padding-top:1.25rem;">
            <button type="submit" class="btn btn-primary" style="background:var(--gradient-primary); font-weight:700; padding:0.75rem 1.5rem;">
              💾 Salvar Alterações de Perfil
            </button>
          </div>
        </form>
      </div>
    `;

    // Emoji pickers
    tabEl.querySelectorAll('.btn-avatar-pick').forEach(btn => {
      btn.addEventListener('click', () => {
        const emoji = btn.dataset.emoji;
        document.getElementById('cfg-avatar-emoji').value = emoji;
        document.getElementById('cfg-avatar-preview').textContent = emoji;
      });
    });

    // Career pickers
    let selectedCareerId = userProfile.active_career_id || getActiveCareerId();
    tabEl.querySelectorAll('.career-pick-card').forEach(card => {
      card.addEventListener('click', () => {
        tabEl.querySelectorAll('.career-pick-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedCareerId = card.dataset.id;
      });
    });

    // Hours slider
    const hoursInput = document.getElementById('cfg-daily-hours');
    const hoursDisplay = document.getElementById('cfg-hours-display');
    if (hoursInput && hoursDisplay) {
      hoursInput.addEventListener('input', () => {
        hoursDisplay.textContent = `${hoursInput.value} horas/dia`;
      });
    }

    // Submit form
    document.getElementById('form-settings-profile')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('cfg-user-name').value.trim();
      const avatar_emoji = document.getElementById('cfg-avatar-emoji').value;
      const daily_hours = parseInt(document.getElementById('cfg-daily-hours').value, 10);
      const preferred_material = document.getElementById('cfg-preferred-material').value;

      const checkedShifts = Array.from(tabEl.querySelectorAll('.cfg-shift-chk:checked')).map(chk => chk.value);

      try {
        const res = await fetch(`/api/users/${userProfile.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            avatar_emoji,
            active_career_id: selectedCareerId,
            daily_hours,
            preferred_material,
            study_shifts: checkedShifts
          })
        });

        if (!res.ok) throw new Error('Erro ao salvar perfil');
        const updated = await res.json();
        userProfile = updated;

        // Apply career globally
        setActiveCareerId(selectedCareerId);

        // Update top bar UI
        const topName = document.getElementById('top-user-name');
        const topAvatar = document.getElementById('top-user-avatar');
        if (topName) topName.textContent = name;
        if (topAvatar) topAvatar.textContent = avatar_emoji;

        showToast('✅ Perfil e concurso atualizados com sucesso!', 'success');
      } catch (err) {
        showToast('Erro ao salvar perfil: ' + err.message, 'error');
      }
    });
  }

  // ==========================================
  // TAB 2: AGENDA & INTEGRAÇÕES
  // ==========================================
  function renderCalendarTab(tabEl) {
    const isEnabled = !!userProfile.google_calendar_enabled;

    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <h3 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span>📅</span> Sincronização com Google Agenda & Apple Calendar
        </h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          Controle central de sincronização de calendário. Por padrão, o ConcursaBot mantém a agenda desconectada para não poluir sua rotina.
        </p>

        <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:1.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <div>
              <strong style="font-size:0.95rem; color:var(--text-primary);">Sincronização de Calendário Externo</strong>
              <p style="margin:0.2rem 0 0 0; font-size:0.8rem; color:var(--text-secondary);">
                Quando ativado, os eventos do seu Google Agenda são combinados com os blocos de estudo.
              </p>
            </div>
            <label style="position:relative; display:inline-block; width:52px; height:28px; cursor:pointer;">
              <input type="checkbox" id="cfg-gcal-toggle" ${isEnabled ? 'checked' : ''} style="opacity:0; width:0; height:0;">
              <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background-color:${isEnabled ? 'var(--color-primary)' : 'var(--border-color)'}; transition:.3s; border-radius:28px;" id="cfg-toggle-bg"></span>
              <span style="position:absolute; content:''; height:20px; width:20px; left:${isEnabled ? '26px' : '4px'}; bottom:4px; background-color:white; transition:.3s; border-radius:50%; box-shadow:0 2px 4px rgba(0,0,0,0.2);" id="cfg-toggle-circle"></span>
            </label>
          </div>
        </div>

        <div id="cfg-gcal-config-box" style="${isEnabled ? 'display:block;' : 'display:none;'} background:var(--bg-primary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:1.5rem;">
          <h4 style="margin:0 0 0.75rem 0; font-size:0.95rem; color:var(--text-primary);">
            🔗 Endereço Secreto iCal (.ics) do Google Calendar
          </h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">
            No seu Google Agenda pelo computador, acesse: <em>Configurações da Agenda &gt; Integrar Agenda &gt; Endereço Secreto em formato iCal</em> e cole a URL abaixo:
          </p>

          <div style="display:flex; gap:0.5rem; margin-bottom:0.75rem; flex-wrap:wrap;">
            <input type="url" id="cfg-gcal-url" class="form-control" placeholder="https://calendar.google.com/calendar/ical/.../basic.ics" value="${userProfile.google_calendar_url || ''}" style="flex:1; min-width:260px;">
            <button class="btn btn-primary btn-sm" id="btn-save-gcal-url">
              💾 Salvar URL
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-test-gcal-url">
              🔄 Testar Conexão
            </button>
          </div>

          <div id="cfg-gcal-test-result" style="margin-top:0.75rem;"></div>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.5rem;">
          <h4 style="margin:0 0 0.5rem 0; font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
            <span>📥</span> Exportação Direta de Calendário
          </h4>
          <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:1rem;">
            Prefere não conectar sua conta? Baixe o arquivo de calendário padrão <strong>.ICS</strong> com o seu ciclo semanal de estudos para importar no celular em 1 clique.
          </p>
          <button class="btn btn-secondary" id="btn-export-settings-ics" style="font-weight:600;">
            📥 Baixar Cronograma Ativo (.ICS)
          </button>
        </div>
      </div>
    `;

    // Toggle interaction
    const toggleChk = document.getElementById('cfg-gcal-toggle');
    const toggleBg = document.getElementById('cfg-toggle-bg');
    const toggleCircle = document.getElementById('cfg-toggle-circle');
    const configBox = document.getElementById('cfg-gcal-config-box');

    toggleChk?.addEventListener('change', async () => {
      const enabled = toggleChk.checked;
      toggleBg.style.backgroundColor = enabled ? 'var(--color-primary)' : 'var(--border-color)';
      toggleCircle.style.left = enabled ? '26px' : '4px';
      configBox.style.display = enabled ? 'block' : 'none';

      try {
        await fetch('/api/schedule/calendar/toggle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ enabled, userId: userProfile.id })
        });
        userProfile.google_calendar_enabled = enabled ? 1 : 0;
        showToast(enabled ? 'Google Agenda ativada!' : 'Google Agenda desativada com sucesso.', 'info');
      } catch (e) {
        showToast('Erro ao atualizar status da agenda.', 'error');
      }
    });

    // Save URL
    document.getElementById('btn-save-gcal-url')?.addEventListener('click', async () => {
      const url = document.getElementById('cfg-gcal-url').value.trim();
      try {
        await fetch('/api/schedule/calendar/config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, userId: userProfile.id })
        });
        userProfile.google_calendar_url = url;
        showToast('✅ Link da Google Agenda salvo!', 'success');
      } catch (e) {
        showToast('Erro ao salvar URL da agenda.', 'error');
      }
    });

    // Test URL
    document.getElementById('btn-test-gcal-url')?.addEventListener('click', async () => {
      const resultEl = document.getElementById('cfg-gcal-test-result');
      resultEl.innerHTML = `<span class="text-muted" style="font-size:0.85rem;">🔄 Conectando à agenda...</span>`;
      try {
        const res = await fetch('/api/schedule/calendar/today');
        const data = await res.json();
        if (data.success) {
          resultEl.innerHTML = `
            <div style="padding:0.75rem; background:rgba(34, 197, 94, 0.1); border-left:3px solid var(--color-success); border-radius:4px; font-size:0.85rem; color:var(--text-primary);">
              ✅ <strong>Conexão bem-sucedida!</strong> ${data.events ? data.events.length : 0} eventos encontrados para hoje na sua agenda.
            </div>
          `;
        } else {
          resultEl.innerHTML = `
            <div style="padding:0.75rem; background:rgba(239, 68, 68, 0.1); border-left:3px solid var(--color-danger); border-radius:4px; font-size:0.85rem; color:var(--text-primary);">
              ❌ <strong>Aviso:</strong> ${data.error || 'Não foi possível ler o calendário com a URL informada.'}
            </div>
          `;
        }
      } catch (e) {
        resultEl.innerHTML = `<span class="text-danger" style="font-size:0.85rem;">Erro de conexão com o servidor.</span>`;
      }
    });

    // Export .ICS
    document.getElementById('btn-export-settings-ics')?.addEventListener('click', async () => {
      try {
        const res = await fetch(`/api/schedule?careerId=${encodeURIComponent(getActiveCareerId())}`);
        const list = await res.json();
        if (list && list.length > 0) {
          window.open(`/api/schedule/${list[0].id}/export-ics`, '_blank');
          showToast('📥 Arquivo .ICS gerado!', 'success');
        } else {
          showToast('Nenhum cronograma ativo encontrado para este concurso.', 'warning');
        }
      } catch (e) {
        showToast('Erro ao exportar cronograma.', 'error');
      }
    });
  }

  // ==========================================
  // TAB 3: INTELIGÊNCIA ARTIFICIAL
  // ==========================================
  function renderAITab(tabEl) {
    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <h3 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span>🤖</span> Motor de Inteligência Artificial
        </h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          O ConcursaBot utiliza modelos de ponta da família Google Gemini para geração de flashcards, resumos, simulados e resolução socrática de dúvidas.
        </p>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem; margin-bottom:1.5rem;">
          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">Modelo Principal Ativo</span>
              <span class="badge badge-success">Conectado (GA)</span>
            </div>
            <div style="font-family:monospace; font-size:1rem; color:var(--color-primary); font-weight:700;">
              gemini-3.7-flash
            </div>
            <p style="margin:0.4rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">
              Modelo de alta velocidade, raciocínio avançado e custo otimizado pelo Google AI Studio.
            </p>
          </div>

          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">Cadeia de Fallback Resiliente</span>
              <span class="badge badge-info">Automático</span>
            </div>
            <div style="font-family:monospace; font-size:0.85rem; color:var(--text-primary); margin-top:0.2rem;">
               gemini-3.7-flash &rarr; gemini-3.6-flash &rarr; gemini-3.5-flash &rarr; gemini-flash-latest
            </div>
            <p style="margin:0.4rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">
              Em caso de instabilidade ou picos de demanda na nuvem, o sistema alterna instantaneamente sem travar seu estudo.
            </p>
          </div>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.5rem; margin-bottom:1.5rem;">
          <h4 style="margin:0 0 0.75rem 0; font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
            <span>🎯</span> Estilo de Explicação do Tutor Socrático
          </h4>

          <div style="display:flex; flex-direction:column; gap:0.75rem;" id="cfg-tutor-style-container">
            <label style="display:flex; align-items:flex-start; gap:0.75rem; padding:0.85rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--border-color); cursor:pointer;">
              <input type="radio" name="tutor-style" value="pratico" ${userProfile.tutor_style === 'pratico' || !userProfile.tutor_style ? 'checked' : ''} style="margin-top:0.2rem;">
              <div>
                <strong style="font-size:0.88rem; color:var(--text-primary);">⚡ Prático & Direto (Recomendado)</strong>
                <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">
                  Foco na assertiva da questão, eliminando alternativas erradas de forma ágil e objetiva.
                </p>
              </div>
            </label>

            <label style="display:flex; align-items:flex-start; gap:0.75rem; padding:0.85rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--border-color); cursor:pointer;">
              <input type="radio" name="tutor-style" value="doutrinario" ${userProfile.tutor_style === 'doutrinario' ? 'checked' : ''} style="margin-top:0.2rem;">
              <div>
                <strong style="font-size:0.88rem; color:var(--text-primary);">⚖️ Doutrinário & Jurisprudencial</strong>
                <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">
                  Explicações aprofundadas com citação de artigos de lei, súmulas de tribunais superiores e teorias.
                </p>
              </div>
            </label>

            <label style="display:flex; align-items:flex-start; gap:0.75rem; padding:0.85rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--border-color); cursor:pointer;">
              <input type="radio" name="tutor-style" value="pegadinhas" ${userProfile.tutor_style === 'pegadinhas' ? 'checked' : ''} style="margin-top:0.2rem;">
              <div>
                <strong style="font-size:0.88rem; color:var(--text-primary);">🎯 Caçador de Pegadinhas da Banca</strong>
                <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">
                  Foco nos termos traiçoeiros utilizados pela banca (ex: <em>"salvo", "exclusivamente", "vedado"</em>).
                </p>
              </div>
            </label>
          </div>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.5rem;">
          <h4 style="margin:0 0 0.75rem 0; font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
            <span>⚡</span> Diagnóstico de Latência da IA
          </h4>
          <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
            <button class="btn btn-secondary" id="btn-test-ai-health" style="font-weight:600;">
              ⚡ Testar Conexão com Gemini
            </button>
            <span id="ai-health-status" style="font-size:0.85rem; color:var(--text-secondary);"></span>
          </div>
        </div>
      </div>
    `;

    // Tutor style change
    tabEl.querySelectorAll('input[name="tutor-style"]').forEach(radio => {
      radio.addEventListener('change', async () => {
        const style = radio.value;
        try {
          await fetch(`/api/users/${userProfile.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tutor_style: style })
          });
          userProfile.tutor_style = style;
          showToast('Estilo do Tutor atualizado!', 'success');
        } catch (e) {
          showToast('Erro ao atualizar estilo do tutor.', 'error');
        }
      });
    });

    // Test AI Health
    document.getElementById('btn-test-ai-health')?.addEventListener('click', async () => {
      const statusEl = document.getElementById('ai-health-status');
      statusEl.innerHTML = `<span class="text-muted">⏳ Medindo latência com a nuvem do Google...</span>`;
      try {
        const res = await fetch('/api/users/system/health');
        const data = await res.json();
        if (data.ai && data.ai.status === 'connected') {
          statusEl.innerHTML = `
            <span class="badge badge-success" style="font-size:0.85rem;">
              ✅ Online • ${data.ai.model} (${data.ai.latencyMs}ms)
            </span>
          `;
          showToast(`IA conectada com sucesso! Resposta em ${data.ai.latencyMs}ms`, 'success');
        } else {
          statusEl.innerHTML = `
            <span class="badge badge-danger" style="font-size:0.85rem;">
              ❌ Erro: ${data.ai?.status || 'Sem resposta'}
            </span>
          `;
        }
      } catch (err) {
        statusEl.innerHTML = `<span class="badge badge-danger">Erro de rede</span>`;
      }
    });
  }

  // ==========================================
  // TAB 4: APARÊNCIA & SONS
  // ==========================================
  function renderAppearanceTab(tabEl) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('concursa_theme') || 'light';
    const isDark = currentTheme === 'dark';
    const soundsEnabled = userProfile.sound_effects_enabled !== 0;

    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <h3 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span>🎨</span> Aparência Visual & Acessibilidade
        </h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          Personalize as cores, tema e efeitos sonoros para maior conforto durante longas sessões de estudo.
        </p>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem; margin-bottom:1.5rem;">
          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <strong style="font-size:0.95rem; color:var(--text-primary); display:block; margin-bottom:0.3rem;">
              🌓 Tema do Sistema
            </strong>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">
              Alterne entre o visual escuro de alto contraste e o modo claro clássico.
            </p>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn ${isDark ? 'btn-primary' : 'btn-secondary'} btn-sm" id="btn-theme-dark">
                🌙 Modo Escuro
              </button>
              <button class="btn ${!isDark ? 'btn-primary' : 'btn-secondary'} btn-sm" id="btn-theme-light">
                ☀️ Modo Claro
              </button>
            </div>
          </div>

          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <strong style="font-size:0.95rem; color:var(--text-primary); display:block; margin-bottom:0.3rem;">
              🔊 Efeitos Sonoros & Gamificação
            </strong>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">
              Sons de recompensa ao acertar questões, concluir blocos e subir de nível.
            </p>
            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:var(--text-primary); cursor:pointer;">
              <input type="checkbox" id="cfg-sounds-chk" ${soundsEnabled ? 'checked' : ''} style="width:18px; height:18px;">
              Ativar áudios de feedback
            </label>
          </div>
        </div>
      </div>
    `;

    // Theme toggles
    document.getElementById('btn-theme-dark')?.addEventListener('click', () => {
      applyTheme('dark');
      renderAppearanceTab(tabEl);
      showToast('Modo Escuro ativado.', 'info');
    });

    document.getElementById('btn-theme-light')?.addEventListener('click', () => {
      applyTheme('light');
      renderAppearanceTab(tabEl);
      showToast('Modo Claro ativado.', 'info');
    });

    // Sounds checkbox
    document.getElementById('cfg-sounds-chk')?.addEventListener('change', async (e) => {
      const enabled = e.target.checked ? 1 : 0;
      try {
        await fetch(`/api/users/${userProfile.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sound_effects_enabled: enabled })
        });
        userProfile.sound_effects_enabled = enabled;
        showToast(enabled ? 'Sons ativados!' : 'Sons desativados.', 'info');
      } catch (err) {
        showToast('Erro ao atualizar preferência de som.', 'error');
      }
    });
  }

  // ==========================================
  // TAB 5: DADOS & MANUTENÇÃO
  // ==========================================
  function renderBackupTab(tabEl) {
    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <h3 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
          <span>💾</span> Gestão de Dados, Backup & Reset
        </h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          Seus dados são armazenados localmente no banco de dados SQLite com suporte a modo offline via PWA.
        </p>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem; margin-bottom:1.5rem;">
          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <h4 style="margin:0 0 0.4rem 0; font-size:0.95rem; color:var(--text-primary);">
              📥 Backup Completo em JSON
            </h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.85rem;">
              Exporte todo o seu histórico de estudo, respostas de questões, simulados e estatísticas para um arquivo de segurança.
            </p>
            <button class="btn btn-secondary" id="btn-export-json-backup" style="font-weight:600;">
              📥 Exportar Backup (.JSON)
            </button>
          </div>

          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
            <h4 style="margin:0 0 0.4rem 0; font-size:0.95rem; color:var(--color-danger);">
              🔄 Reset Seguro de Estudos
            </h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.85rem;">
              Deseja recomeçar a preparação do zero? Limpe o histórico de simulados e métricas sem apagar seu perfil de estudante.
            </p>
            <button class="btn btn-danger" id="btn-open-reset-modal" style="font-weight:600;">
              🔄 Abrir Opções de Reset
            </button>
          </div>
        </div>

        <div style="border-top:1px solid var(--border-color); padding-top:1.5rem;">
          <h4 style="margin:0 0 0.75rem 0; font-size:0.95rem; color:var(--text-primary);">
            📊 Informações do Sistema & Armazenamento Local
          </h4>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem;" id="cfg-system-stats-grid">
            <div style="padding:0.75rem; background:var(--bg-primary); border-radius:4px; border:1px solid var(--border-color);">
              <span style="font-size:0.75rem; color:var(--text-secondary);">Banco de Dados:</span>
              <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">SQLite 3 (Local)</div>
            </div>
            <div style="padding:0.75rem; background:var(--bg-primary); border-radius:4px; border:1px solid var(--border-color);">
              <span style="font-size:0.75rem; color:var(--text-secondary);">Modo Offline:</span>
              <div style="font-weight:700; font-size:0.95rem; color:var(--color-success);">PWA Ativo ✅</div>
            </div>
            <div style="padding:0.75rem; background:var(--bg-primary); border-radius:4px; border:1px solid var(--border-color);">
              <span style="font-size:0.75rem; color:var(--text-secondary);">Versão do ConcursaBot:</span>
              <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">v2.4.0 Pro</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Export JSON Backup
    document.getElementById('btn-export-json-backup')?.addEventListener('click', () => {
      window.open(`/api/users/${userProfile.id}/export-progress`, '_blank');
      showToast('📥 Backup de progresso gerado e baixado!', 'success');
    });

    // Reset Modal
    document.getElementById('btn-open-reset-modal')?.addEventListener('click', () => {
      openResetStudyModal(() => {
        showToast('Dados de estudo reiniciados com sucesso.', 'info');
      });
    });

    // Load dynamic system stats
    fetch('/api/users/system/health')
      .then(res => res.json())
      .then(data => {
        const grid = document.getElementById('cfg-system-stats-grid');
        if (grid && data.stats) {
          grid.innerHTML += `
            <div style="padding:0.75rem; background:var(--bg-primary); border-radius:4px; border:1px solid var(--border-color);">
              <span style="font-size:0.75rem; color:var(--text-secondary);">Questões no Banco:</span>
              <div style="font-weight:700; font-size:0.95rem; color:var(--color-primary);">${data.stats.totalQuestions} questões</div>
            </div>
            <div style="padding:0.75rem; background:var(--bg-primary); border-radius:4px; border:1px solid var(--border-color);">
              <span style="font-size:0.75rem; color:var(--text-secondary);">Sessões de Estudo:</span>
              <div style="font-weight:700; font-size:0.95rem; color:var(--color-primary);">${data.stats.totalSessions} sessões</div>
            </div>
          `;
        }
      })
      .catch(console.error);
  }

  // ==========================================
  // TAB 6: LOGS & DIAGNÓSTICO EM TEMPO REAL
  // ==========================================
  function renderLogsTab(tabEl) {
    let currentLevelFilter = 'all';
    let currentSearchTerm = '';
    let autoRefreshInterval = null;

    tabEl.innerHTML = `
      <div class="card slide-up" style="padding:1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem;">
          <div>
            <h3 style="font-size:1.15rem; margin:0; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
              <span>📋</span> Logs do Sistema & Diagnóstico em Tempo Real
            </h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:0.25rem 0 0 0;">
              Rastreie chamadas do Gemini 3.7 Flash, requisições HTTP, avisos de timeout e diagnósticos de erros.
            </p>
          </div>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button class="btn btn-primary btn-sm" id="btn-copy-all-logs" style="font-weight:600;">
              📋 Copiar Logs
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-download-logs" style="font-weight:600;">
              📥 Baixar .log
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-refresh-logs">
              🔄 Atualizar
            </button>
            <button class="btn btn-danger btn-sm" id="btn-clear-logs" title="Limpar histórico de logs">
              🧹 Limpar
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; background:var(--bg-tertiary); padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:1rem;">
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center;">
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600; margin-right:0.25rem;">Nível:</span>
            <button class="badge log-filter-btn active" data-level="all" style="cursor:pointer; padding:0.35rem 0.6rem; border:none;">Todos</button>
            <button class="badge log-filter-btn" data-level="ai" style="cursor:pointer; padding:0.35rem 0.6rem; border:none; background:rgba(6, 182, 212, 0.15); color:#0891b2;">🤖 IA</button>
            <button class="badge log-filter-btn" data-level="error" style="cursor:pointer; padding:0.35rem 0.6rem; border:none; background:rgba(239, 68, 68, 0.15); color:#dc2626;">🔴 Erros</button>
            <button class="badge log-filter-btn" data-level="warn" style="cursor:pointer; padding:0.35rem 0.6rem; border:none; background:rgba(245, 158, 11, 0.15); color:#d97706;">🟡 Avisos</button>
            <button class="badge log-filter-btn" data-level="http" style="cursor:pointer; padding:0.35rem 0.6rem; border:none; background:rgba(59, 130, 246, 0.15); color:#2563eb;">🌐 HTTP</button>
            <button class="badge log-filter-btn" data-level="info" style="cursor:pointer; padding:0.35rem 0.6rem; border:none; background:rgba(16, 185, 129, 0.15); color:#059669;">🟢 Info</button>
          </div>

          <div style="display:flex; align-items:center; gap:0.75rem;">
            <input type="text" id="log-search-input" class="form-control" placeholder="Buscar nos logs..." style="font-size:0.8rem; padding:0.35rem 0.65rem; width:180px;">
            <label style="display:flex; align-items:center; gap:0.35rem; font-size:0.78rem; color:var(--text-secondary); cursor:pointer; user-select:none;">
              <input type="checkbox" id="log-auto-refresh-toggle"> Auto-refresh (3s)
            </label>
          </div>
        </div>

        <!-- Terminal Log Viewer -->
        <div id="log-terminal-container" style="background:#09090B; border:1px solid rgba(255,255,255,0.1); border-radius:var(--radius-sm); padding:1rem; font-family:'Fira Code', 'Courier New', monospace; font-size:0.82rem; height:420px; overflow-y:auto; color:#EDEDED;">
          <div style="color:#71717A; text-align:center; padding:2rem 0;">Carregando logs do servidor...</div>
        </div>
      </div>
    `;

    async function fetchAndRenderLogs() {
      const terminal = document.getElementById('log-terminal-container');
      if (!terminal) return;

      try {
        const queryParams = new URLSearchParams({
          level: currentLevelFilter,
          search: currentSearchTerm,
          limit: '200'
        });

        const res = await fetch(`/api/system/logs?${queryParams.toString()}`);
        if (!res.ok) throw new Error('Falha ao obter logs');
        const data = await res.json();
        const logs = data.logs || [];

        if (logs.length === 0) {
          terminal.innerHTML = `<div style="color:#71717A; text-align:center; padding:3rem 0;">Nenhum log registrado para os filtros atuais.</div>`;
          return;
        }

        let html = '';
        logs.forEach(l => {
          let badgeColor = '#10B981'; // green for info
          let badgeBg = 'rgba(16, 185, 129, 0.15)';
          let icon = 'ℹ️';

          if (l.level === 'ERROR') {
            badgeColor = '#EF4444';
            badgeBg = 'rgba(239, 68, 68, 0.2)';
            icon = '🔴';
          } else if (l.level === 'WARN') {
            badgeColor = '#F59E0B';
            badgeBg = 'rgba(245, 158, 11, 0.2)';
            icon = '🟡';
          } else if (l.level === 'AI') {
            badgeColor = '#06B6D4';
            badgeBg = 'rgba(6, 182, 212, 0.2)';
            icon = '🤖';
          } else if (l.level === 'HTTP') {
            badgeColor = '#3B82F6';
            badgeBg = 'rgba(59, 130, 246, 0.2)';
            icon = '🌐';
          }

          html += `
            <div style="padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.05); line-height:1.45;">
              <span style="color:#71717A; font-size:0.75rem;">[${l.timestamp.substring(11)}]</span>
              <span style="background:${badgeBg}; color:${badgeColor}; padding:0.15rem 0.4rem; border-radius:3px; font-weight:700; font-size:0.72rem; margin:0 0.35rem;">${icon} ${l.level}</span>
              <span style="color:#A1A1AA; font-size:0.78rem; font-weight:600;">[${l.tag}]</span>
              <span style="color:${l.level === 'ERROR' ? '#FCA5A5' : '#E4E4E7'}; margin-left:0.35rem;">${escapeHtml(l.message)}</span>
              ${l.details ? `
                <div style="margin-top:0.25rem; margin-left:1.5rem; padding:0.4rem 0.6rem; background:rgba(255,255,255,0.04); border-left:2px solid ${badgeColor}; border-radius:2px; font-size:0.74rem; color:#94A3B8; white-space:pre-wrap; word-break:break-all;">
                  ${escapeHtml(l.details)}
                </div>
              ` : ''}
            </div>
          `;
        });

        terminal.innerHTML = html;
        terminal.scrollTop = terminal.scrollHeight;
      } catch (err) {
        if (terminal) {
          terminal.innerHTML = `<div style="color:#EF4444; padding:1rem;">Erro ao carregar logs: ${err.message}</div>`;
        }
      }
    }

    function escapeHtml(text) {
      if (!text) return '';
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Filter Buttons
    tabEl.querySelectorAll('.log-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabEl.querySelectorAll('.log-filter-btn').forEach(b => {
          b.classList.remove('active');
          b.style.outline = 'none';
        });
        btn.classList.add('active');
        btn.style.outline = '2px solid var(--color-primary)';
        currentLevelFilter = btn.dataset.level;
        fetchAndRenderLogs();
      });
    });

    // Search Input
    const searchInput = tabEl.querySelector('#log-search-input');
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearchTerm = e.target.value;
        fetchAndRenderLogs();
      }, 300);
    });

    // Auto-refresh Toggle
    const autoToggle = tabEl.querySelector('#log-auto-refresh-toggle');
    autoToggle?.addEventListener('change', (e) => {
      if (e.target.checked) {
        autoRefreshInterval = setInterval(fetchAndRenderLogs, 3000);
        showToast('Auto-refresh de logs ativado (a cada 3s)', 'info');
      } else {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
      }
    });

    // Refresh button
    tabEl.querySelector('#btn-refresh-logs')?.addEventListener('click', () => {
      fetchAndRenderLogs();
      showToast('Logs atualizados!', 'info');
    });

    // Copy All Logs
    tabEl.querySelector('#btn-copy-all-logs')?.addEventListener('click', async () => {
      try {
        const res = await fetch('/api/system/logs?limit=400');
        const data = await res.json();
        const text = (data.logs || []).map(l => `[${l.timestamp}] [${l.level}] [${l.tag}] ${l.message}${l.details ? ' | ' + l.details : ''}`).join('\n');
        await navigator.clipboard.writeText(text);
        showToast('📋 Todos os logs copiados para a área de transferência!', 'success');
      } catch (err) {
        showToast('Erro ao copiar logs.', 'error');
      }
    });

    // Download Logs File
    tabEl.querySelector('#btn-download-logs')?.addEventListener('click', () => {
      window.open('/api/system/logs/download', '_blank');
      showToast('📥 Download do arquivo de logs iniciado!', 'success');
    });

    // Clear Logs
    tabEl.querySelector('#btn-clear-logs')?.addEventListener('click', async () => {
      if (!confirm('Deseja limpar todos os logs do servidor?')) return;
      try {
        await fetch('/api/system/logs', { method: 'DELETE' });
        showToast('🧹 Logs limpos com sucesso.', 'info');
        fetchAndRenderLogs();
      } catch (e) {
        showToast('Erro ao limpar logs.', 'error');
      }
    });

    // Initial log fetch
    fetchAndRenderLogs();
  }

  // Initial render
  renderActiveTab();
}
