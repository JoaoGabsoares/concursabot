import { api } from './api.js';
import { showToast, formatDate, getSubjectColor } from './utils.js';
import { getCareerConfig, getActiveCareerId, getCareerSubjectGrouping } from './careers.js';

let currentSchedule = null;

export async function render(container) {
  const activeCareerId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeCareerId);
  const grouping = getCareerSubjectGrouping(careerCfg);

  let subjectsSectionHtml = '';
  if (grouping.wave1.length > 0) {
    subjectsSectionHtml += `
      <div class="schedule-subject-section">
        <div class="schedule-section-header">
          <span class="schedule-section-title" style="color:#60A5FA;">
            ${grouping.group1Title}
          </span>
        </div>
        <div class="schedule-subject-grid">
          ${grouping.wave1.map(s => `
            <label class="schedule-subject-card is-selected">
              <input type="checkbox" name="sch-subject" value="${s.subject}" data-wave="1" checked>
              <div class="schedule-subject-info">
                <span class="schedule-subject-name">${s.subject}</span>
                <span class="schedule-subject-weight">${s.questions}q • ${s.description || 'Foco'}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (grouping.wave2.length > 0) {
    subjectsSectionHtml += `
      <div class="schedule-subject-section" style="margin-top:0.6rem;">
        <div class="schedule-section-header">
          <span class="schedule-section-title" style="color:#F59E0B;">
            ${grouping.group2Title}
          </span>
        </div>
        <div class="schedule-subject-grid">
          ${grouping.wave2.map(s => `
            <label class="schedule-subject-card">
              <input type="checkbox" name="sch-subject" value="${s.subject}" data-wave="2">
              <div class="schedule-subject-info">
                <span class="schedule-subject-name">${s.subject}</span>
                <span class="schedule-subject-weight">${s.questions}q • ${s.description || 'Complementar'}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="schedule-module">
      <!-- Google Calendar Sync Card (Opt-in & Collapsible) -->
      <div class="card slide-up" style="margin-bottom: 1.5rem; border-left: 4px solid #60A5FA;">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span style="font-size:1.2rem;">📅</span>
            <div>
              <h3 style="margin:0; color:var(--text-primary); font-size:1rem;">Integração com Google Agenda (Opcional)</h3>
              <p class="text-muted" style="font-size:0.8rem; margin:0.15rem 0 0 0;">
                Sincronize seus blocos de estudo com sua agenda pessoal. Fica <strong>desativada por padrão</strong> para não misturar outras matérias.
              </p>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem; font-weight:600; cursor:pointer;">
              <input type="checkbox" id="gcal-toggle-enabled" style="width:18px; height:18px; cursor:pointer;">
              <span>Ativar Sincronização</span>
            </label>
            <button class="btn btn-secondary btn-sm" id="btn-toggle-gcal-panel">⚙️ Configurar</button>
          </div>
        </div>

        <div id="gcal-config-panel" style="margin-top:1rem; display:none; border-top:1px solid var(--border-color); padding-top:1rem;">
          <div class="form-group">
            <label for="gcal-url" style="font-weight:600; font-size:0.85rem;">Endereço Secreto iCal da sua Google Agenda (.ics):</label>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
              <input type="url" id="gcal-url" class="form-control" style="flex:1; min-width:280px;" placeholder="https://calendar.google.com/calendar/ical/seuemail%40gmail.com/private-xxxx/basic.ics">
              <button class="btn btn-primary" id="btn-save-gcal">Salvar e Conectar</button>
            </div>
            <p class="text-muted" style="font-size:0.75rem; margin-top:0.35rem;">
              💡 <strong>Como pegar:</strong> No Google Agenda no computador, vá em Configurações da sua agenda → role até "Integrar agenda" → copie o <strong>"Endereço secreto no formato iCal"</strong>.
            </p>
          </div>

          <div id="gcal-status-box" style="margin-top:0.75rem;"></div>
        </div>
      </div>

      <!-- Schedule Generator & Weekly View -->
      <div class="grid-2 slide-up">
        <!-- Left: Generator Form -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
            <h3 style="color:var(--color-schedule); margin:0;">🤖 Gerador IA de Cronograma (Gemini 3.7 Flash)</h3>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem; background:var(--bg-tertiary); padding:0.75rem 1rem; border-radius:6px; border-left:3px solid var(--color-primary);">
            Concurso Ativo: <strong style="color:var(--text-primary); font-size:0.92rem;">${careerCfg.name}</strong><br>
            Banca Examinadora: <strong style="color:var(--color-primary);">${careerCfg.banca || (careerCfg.bancas && careerCfg.bancas[0] ? careerCfg.bancas[0].name : 'Oficial')}</strong>
          </div>
          
          <div class="form-group">
            <label for="sch-title" style="font-weight:600;">Título do Cronograma</label>
            <input type="text" id="sch-title" class="form-control" value="Plano de Estudos — ${careerCfg.name}">
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label for="sch-hours" style="font-weight:600;">Horas de Estudo / Dia</label>
              <input type="number" id="sch-hours" class="form-control" value="4" min="1" max="12">
            </div>
            <div class="form-group">
              <label for="sch-date" style="font-weight:600;">Data Estimada da Prova</label>
              <input type="date" id="sch-date" class="form-control" value="${grouping.defaultExamDate}">
            </div>
          </div>

          <div class="form-group">
            <label style="font-weight:600;">Dias Disponíveis na Semana</label>
            <div style="display:flex; gap:0.4rem; margin-top:0.3rem; flex-wrap:wrap;">
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="1" checked> Seg</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="2" checked> Ter</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="3" checked> Qua</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="4" checked> Qui</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="5" checked> Sex</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="6" checked> Sáb</label>
              <label style="background:var(--bg-tertiary); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem; cursor:pointer;"><input type="checkbox" name="sch-day" value="7"> Dom</label>
            </div>
          </div>

          <!-- Disciplinas do Ciclo (Structured & Organized) -->
          <div class="form-group" style="margin-top:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; flex-wrap:wrap; gap:0.4rem;">
              <label style="font-weight:700; margin:0;">📚 Disciplinas do Ciclo de Estudos</label>
              <div class="schedule-quick-btns" style="margin:0;">
                <button type="button" class="schedule-quick-btn" id="btn-select-wave1">${grouping.priorityButtonText}</button>
                <button type="button" class="schedule-quick-btn" id="btn-select-all-subjects">Selecionar Todas</button>
                <button type="button" class="schedule-quick-btn" id="btn-clear-subjects">Limpar</button>
              </div>
            </div>

            ${subjectsSectionHtml}
          </div>

          <button id="btn-gen-schedule" class="btn btn-primary" style="width:100%; margin-top:1.25rem; padding:0.9rem; background:var(--gradient-primary); font-size:1rem; font-weight:600;">
            <span class="btn-text">⚡ Gerar Cronograma Inteligente</span>
            <span class="btn-loading" style="display:none;">⏳ Calculando distribuição com IA...</span>
          </button>
        </div>
        
        <!-- Right: Current Schedule & Weekly Tasks -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <h3 id="schedule-display-title" style="margin:0; font-size:1.05rem;">📅 Sua Distribuição Semanal</h3>
              <p id="schedule-strategy-text" style="font-size:0.78rem; color:var(--text-secondary); margin:0.15rem 0 0 0;"></p>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <button class="btn btn-secondary btn-sm" id="btn-export-ics" style="display:none;" title="Baixar arquivo de agenda (.ics) para Google/Apple Agenda">
                📥 Exportar .ICS
              </button>
              <span id="schedule-progress-badge" class="badge badge-primary">Carregando...</span>
            </div>
          </div>

          <div id="week-view" style="display:flex; flex-direction:column; gap:0.75rem; max-height:600px; overflow-y:auto; padding-right:0.25rem;">
            <div class="loading-placeholder">Carregando cronograma ativo...</div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupCalendarHandlers();
  setupSubjectPickerEvents(grouping);
  setupScheduleGeneratorHandlers();
  loadCurrentSchedule();
}

// ============================================================
// SUBJECT PICKER QUICK ACTIONS & TOGGLES
// ============================================================

function setupSubjectPickerEvents(grouping) {
  const cards = document.querySelectorAll('.schedule-subject-card');

  cards.forEach(card => {
    const chk = card.querySelector('input[type="checkbox"]');
    chk.addEventListener('change', () => {
      if (chk.checked) card.classList.add('is-selected');
      else card.classList.remove('is-selected');
    });
  });

  document.getElementById('btn-select-wave1')?.addEventListener('click', () => {
    cards.forEach(card => {
      const chk = card.querySelector('input[type="checkbox"]');
      const isWave1 = chk.dataset.wave === '1';
      chk.checked = isWave1;
      if (isWave1) card.classList.add('is-selected');
      else card.classList.remove('is-selected');
    });
    showToast(grouping?.toastText || 'Disciplinas prioritárias selecionadas!', 'info');
  });

  document.getElementById('btn-select-all-subjects')?.addEventListener('click', () => {
    cards.forEach(card => {
      const chk = card.querySelector('input[type="checkbox"]');
      chk.checked = true;
      card.classList.add('is-selected');
    });
  });

  document.getElementById('btn-clear-subjects')?.addEventListener('click', () => {
    cards.forEach(card => {
      const chk = card.querySelector('input[type="checkbox"]');
      chk.checked = false;
      card.classList.remove('is-selected');
    });
  });
}

// ============================================================
// SCHEDULE GENERATOR HANDLER
// ============================================================

function setupScheduleGeneratorHandlers() {
  const btn = document.getElementById('btn-gen-schedule');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const title = document.getElementById('sch-title').value.trim() || 'Cronograma ATRFB';
    const hoursPerDay = parseInt(document.getElementById('sch-hours').value, 10) || 4;
    const examDate = document.getElementById('sch-date').value || null;

    const subjectBoxes = Array.from(document.querySelectorAll('input[name="sch-subject"]:checked'));
    const subjects = subjectBoxes.map(cb => cb.value);

    const dayBoxes = Array.from(document.querySelectorAll('input[name="sch-day"]:checked'));
    const daysPerWeek = dayBoxes.length || 6;

    if (subjects.length === 0) {
      showToast('Selecione pelo menos uma disciplina.', 'warning');
      return;
    }

    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    showToast('🤖 A IA está organizando o ciclo ótimo de estudo...', 'info');

    try {
      const activeCareerId = getActiveCareerId();
      const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

      const res = await fetch('/api/schedule/generate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-exam-id': activeCareerId,
          'x-user-id': activeUserId
        },
        body: JSON.stringify({
          title,
          subjects,
          hoursPerDay,
          daysPerWeek,
          examDate,
          careerId: activeCareerId
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Falha ao gerar cronograma');
      }

      showToast('🎉 Cronograma semanal gerado com sucesso!', 'success');
      loadCurrentSchedule();

    } catch (error) {
      console.error('Schedule gen error:', error);
      showToast(error.message || 'Erro ao gerar cronograma.', 'error');
    } finally {
      btn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
    }
  });
}

// ============================================================
// LOAD & RENDER SCHEDULE
// ============================================================

async function loadCurrentSchedule() {
  const container = document.getElementById('week-view');
  const titleEl = document.getElementById('schedule-display-title');
  const badgeEl = document.getElementById('schedule-progress-badge');

  try {
    const activeCareerId = getActiveCareerId();
    const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
    const res = await fetch(`/api/schedule?careerId=${encodeURIComponent(activeCareerId)}`, {
      headers: {
        'x-exam-id': activeCareerId,
        'x-user-id': activeUserId
      }
    });
    if (!res.ok) throw new Error('Falha ao listar cronogramas');

    const schedules = await res.json();

    if (schedules.length === 0) {
      badgeEl.textContent = 'Sem cronograma';
      badgeEl.className = 'badge badge-secondary';
      container.innerHTML = `
        <div class="empty-state" style="padding:2rem;">
          <span class="empty-icon">📅</span>
          <h4>Nenhum cronograma ativo</h4>
          <p class="text-muted" style="font-size:0.85rem;">Selecione as matérias ao lado e clique em "Gerar Cronograma Inteligente".</p>
        </div>
      `;
      return;
    }

    const latestId = schedules[0].id;
    const detailRes = await fetch(`/api/schedule/${latestId}`);
    currentSchedule = await detailRes.json();

    titleEl.textContent = `📅 ${currentSchedule.title || 'Cronograma Semanal'}`;
    const stratEl = document.getElementById('schedule-strategy-text');
    if (stratEl && currentSchedule.schedule_data?.strategy_summary) {
      stratEl.textContent = currentSchedule.schedule_data.strategy_summary;
    }

    const btnExportIcs = document.getElementById('btn-export-ics');
    if (btnExportIcs) {
      btnExportIcs.style.display = 'inline-flex';
      btnExportIcs.onclick = () => {
        window.open(`/api/schedule/${currentSchedule.id}/export-ics`, '_blank');
        showToast('📥 Arquivo .ICS gerado! Importe no Google Agenda ou Apple Calendar.', 'success');
      };
    }

    const tasks = currentSchedule.tasks || [];
    const completedTasks = tasks.filter(t => t.completed).length;
    const pct = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

    badgeEl.textContent = `${completedTasks}/${tasks.length} concluídas (${pct}%)`;
    badgeEl.className = pct === 100 ? 'badge badge-success' : 'badge badge-primary';

    // Group tasks by day of week (1 to 7)
    const dayNames = {
      1: 'Segunda-feira',
      2: 'Terça-feira',
      3: 'Quarta-feira',
      4: 'Quinta-feira',
      5: 'Sexta-feira',
      6: 'Sábado',
      7: 'Domingo'
    };

    const tasksByDay = {};
    for (let d = 1; d <= 7; d++) tasksByDay[d] = [];

    tasks.forEach(t => {
      const d = t.day_of_week || 1;
      if (!tasksByDay[d]) tasksByDay[d] = [];
      tasksByDay[d].push(t);
    });

    let html = '';

    for (let d = 1; d <= 7; d++) {
      const dayTasks = tasksByDay[d];
      if (dayTasks.length === 0) continue;

      html += `
        <div style="display:flex; flex-direction:column; gap:0.4rem; margin-bottom:0.75rem;">
          <h5 style="color:var(--text-muted); text-transform:uppercase; font-size:0.8rem; letter-spacing:0.5px; margin:0 0 0.2rem 0;">
            ${dayNames[d] || 'Dia ' + d}
          </h5>
          ${dayTasks.map(t => {
            const subjectColor = getSubjectColor(t.subject);
            const isDone = !!t.completed;

            return `
              <div style="background:var(--bg-tertiary); border-left:4px solid var(--color-tutor); padding:0.75rem 1rem; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center; gap:0.5rem; transition:all 0.2s; ${isDone ? 'opacity:0.6; text-decoration:line-through;' : ''}">
                <div style="flex:1;">
                  <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                    <span class="badge badge-${subjectColor}">${t.subject}</span>
                    <strong style="font-size:0.9rem;">${t.topic}</strong>
                  </div>
                  <p style="font-size:0.75rem; color:var(--text-muted); margin:0.2rem 0 0 0;">
                    ⏱️ Duração: ${t.duration_minutes} min
                  </p>
                </div>

                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'" title="Abrir na Sala de Estudos">
                    ▶️
                  </button>
                  <input type="checkbox" class="task-checkbox" data-id="${t.id}" ${isDone ? 'checked' : ''} style="width:20px; height:20px; cursor:pointer;" title="Marcar como concluída">
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = html;

    // Task completion handler
    container.querySelectorAll('.task-checkbox').forEach(chk => {
      chk.addEventListener('change', async () => {
        const taskId = chk.dataset.id;
        const completed = chk.checked;

        try {
          await fetch(`/api/schedule/task/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
          });

          showToast(completed ? 'Tarefa concluída! 👏' : 'Tarefa desmarcada.', 'info');
          loadCurrentSchedule();
        } catch (e) {
          showToast('Erro ao atualizar tarefa.', 'error');
        }
      });
    });

  } catch (error) {
    console.error('Load schedule error:', error);
    container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">Não foi possível carregar o cronograma.</p>`;
  }
}

// ============================================================
// GOOGLE CALENDAR SYNC (OPT-IN & TOGGLE)
// ============================================================

function setupCalendarHandlers() {
  const saveBtn = document.getElementById('btn-save-gcal');
  const toggleBtn = document.getElementById('btn-toggle-gcal-panel');
  const toggleCheckbox = document.getElementById('gcal-toggle-enabled');
  const configPanel = document.getElementById('gcal-config-panel');
  const urlInput = document.getElementById('gcal-url');
  const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

  // Toggle config panel visibility
  toggleBtn?.addEventListener('click', () => {
    configPanel.style.display = configPanel.style.display === 'none' ? 'block' : 'none';
  });

  // Toggle enable/disable Google Calendar sync
  toggleCheckbox?.addEventListener('change', async () => {
    const enabled = toggleCheckbox.checked;
    try {
      const res = await fetch('/api/schedule/calendar/toggle', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-id': activeUserId
        },
        body: JSON.stringify({ enabled })
      });
      const data = await res.json();
      showToast(data.message || (enabled ? 'Google Agenda ativada!' : 'Google Agenda desativada.'), 'info');
      checkCurrentCalendar();
    } catch (e) {
      showToast('Erro ao alterar status da agenda.', 'error');
    }
  });

  saveBtn?.addEventListener('click', async () => {
    const url = urlInput.value.trim();
    if (!url) {
      showToast('Insira a URL do seu calendário Google.', 'warning');
      return;
    }

    try {
      const res = await fetch('/api/schedule/calendar/config', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-id': activeUserId
        },
        body: JSON.stringify({ url, enable: true })
      });

      const data = await res.json();
      if (data.success) {
        showToast('Google Agenda conectada e ativada!', 'success');
        if (toggleCheckbox) toggleCheckbox.checked = true;
        renderCalendarStatus(data.test);
      } else {
        showToast(data.error || 'Erro ao conectar.', 'error');
      }
    } catch (e) {
      showToast('Erro ao salvar URL do calendário.', 'error');
    }
  });

  checkCurrentCalendar();
}

async function checkCurrentCalendar() {
  const statusBox = document.getElementById('gcal-status-box');
  const toggleCheckbox = document.getElementById('gcal-toggle-enabled');
  if (!statusBox) return;

  const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
  const activeCareerId = getActiveCareerId();

  try {
    const res = await fetch(`/api/schedule/today?careerId=${encodeURIComponent(activeCareerId)}`, {
      headers: {
        'x-user-id': activeUserId,
        'x-exam-id': activeCareerId
      }
    });
    const data = await res.json();

    if (toggleCheckbox) {
      toggleCheckbox.checked = !!data.googleCalendarEnabled;
    }

    if (!data.googleCalendarConfigured) {
      statusBox.innerHTML = `<p class="text-muted" style="font-size:0.85rem; margin:0;">Agenda não conectada. Cole o link iCal acima se desejar ativar.</p>`;
      return;
    }

    if (!data.googleCalendarEnabled) {
      statusBox.innerHTML = `
        <div style="padding:0.6rem 0.8rem; background:var(--bg-tertiary); border-radius:4px; font-size:0.82rem; color:var(--text-secondary);">
          ⏸️ <strong>Sincronização Desativada</strong>. Marque a caixa acima para exibir eventos do Google Agenda no seu Dashboard.
        </div>
      `;
      return;
    }

    if (!data.googleEvents || data.googleEvents.length === 0) {
      statusBox.innerHTML = `
        <div style="padding:0.6rem 0.8rem; background:rgba(16, 185, 129, 0.1); border-left:3px solid #10B981; border-radius:4px; font-size:0.82rem;">
          ✅ <strong>Google Agenda Conectada e Ativa!</strong> Nenhum evento de estudo hoje.
        </div>
      `;
      return;
    }

    statusBox.innerHTML = `
      <div style="padding:0.6rem 0.8rem; background:rgba(16, 185, 129, 0.1); border-left:3px solid #10B981; border-radius:4px; font-size:0.82rem;">
        ✅ <strong>Google Agenda Ativa!</strong> ${data.googleEvents.length} evento(s) de estudo hoje:
        <ul style="margin:0.4rem 0 0 1rem;">
          ${data.googleEvents.map(ev => `
            <li><strong>${ev.timeDisplay}:</strong> ${ev.summary} ${ev.subject ? `<span class="badge badge-info">${ev.subject}</span>` : ''}</li>
          `).join('')}
        </ul>
      </div>
    `;
  } catch (e) {
    statusBox.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">Google Agenda não configurada.</p>`;
  }
}

function renderCalendarStatus(data) {
  const statusBox = document.getElementById('gcal-status-box');
  if (!statusBox) return;

  if (!data || !data.success) {
    statusBox.innerHTML = `
      <div style="padding:0.75rem 1rem; background:rgba(245, 158, 11, 0.1); border-left:3px solid #F59E0B; border-radius:4px; font-size:0.85rem;">
        ${data?.error || 'Insira o Endereço Secreto iCal (.ics) para sincronizar seus eventos.'}
      </div>
    `;
    return;
  }

  statusBox.innerHTML = `
    <div style="padding:0.75rem 1rem; background:rgba(16, 185, 129, 0.1); border-left:3px solid #10B981; border-radius:4px; font-size:0.85rem;">
      ✅ <strong>Google Agenda conectada e validada com sucesso!</strong>
    </div>
  `;
}
