import { showToast, showErrorModal, renderMarkdown, parseMarkdown, formatDate, getSubjectColor } from './utils.js';
import { getCareerConfig, getActiveCareerId, getCareerLessons, getCareerSubjects, getCareerSubjectGrouping } from './careers.js';
import { printStudyLesson } from './study-room-export.js';

// ============================================================
// SALA DE ESTUDOS — Study Room Module
// ============================================================

export function renderSubjectOptions(examId = null) {
  const cfg = getCareerConfig(examId);
  const grouping = getCareerSubjectGrouping(cfg);
  let html = '';

  if (grouping.wave1.length > 0) {
    html += `<optgroup label="${grouping.optgroup1}">`;
    grouping.wave1.forEach((sub, sIdx) => {
      const isSelected = sIdx === 0 ? 'selected' : '';
      html += `<option value="${sub.subject}" ${isSelected}>${sub.subject} (${sub.questions}q)</option>`;
    });
    html += `</optgroup>`;
  }
  if (grouping.wave2.length > 0) {
    html += `<optgroup label="${grouping.optgroup2}">`;
    grouping.wave2.forEach((sub) => {
      html += `<option value="${sub.subject}">${sub.subject} (${sub.questions}q)</option>`;
    });
    html += `</optgroup>`;
  }
  html += `<option value="Outra">Outra Disciplina</option>`;
  return html;
}

let currentSession = null;
let timerInterval = null;
let remainingSeconds = 0;
let timerAudioPlayed = false;

window.addEventListener('app-route-change', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

export async function render(container) {
  const activeExamId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeExamId);

  container.innerHTML = `
    <div class="study-room">
      <!-- Top: Fast Native Lessons (No PDF) OR PDF Upload -->
      <div class="study-room-top" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
        
        <!-- CARD 1: Modo Sem PDF (Aulas Nativas do Edital) -->
        <div class="card" style="border-top: 3px solid var(--color-primary); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
              <div>
                <span class="doc-stamp revisao" style="margin-bottom:0.35rem; display:inline-block;">Modo Sem PDF</span>
                <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">Aulas Nativas do Edital</h3>
              </div>
            </div>
            <p class="text-muted" style="font-size:0.85rem; line-height:1.4; margin-bottom:1rem;">
              Não tem PDF agora? Selecione qualquer aula do edital oficial de <strong>${careerCfg.shortName}</strong> e comece a estudar imediatamente com teoria, legislação e pegadinhas geradas sob medida.
            </p>

            <div class="form-group">
              <label for="native-lesson-subject-select" style="font-weight:600; font-size:0.85rem;">1. Disciplina do Edital</label>
              <select id="native-lesson-subject-select" class="form-control">
                <!-- Dinâmico via populateNativeLessonSelects -->
              </select>
            </div>

            <div class="form-group" style="margin-top:0.6rem;">
              <label for="native-lesson-topic-select" style="font-weight:600; font-size:0.85rem;">2. Aula Oficial do Conteúdo Programático</label>
              <select id="native-lesson-topic-select" class="form-control">
                <!-- Dinâmico via populateNativeLessonSelects -->
              </select>
            </div>
          </div>

          <button class="btn btn-primary" id="btn-start-native-lesson" style="width:100%; margin-top:1.25rem; padding:0.85rem; font-weight:700;">
            <span class="btn-text">Iniciar Estudo da Aula do Edital</span>
            <span class="btn-loading" style="display:none;">Formulando Apostila Estratégica...</span>
          </button>
        </div>

        <!-- CARD 2: Upload de PDF Próprio -->
        <div class="card study-upload-card" style="border-top: 3px solid var(--color-primary);">
          <div class="card-header" style="padding-bottom:0.5rem;">
            <span class="doc-stamp pendente" style="margin-bottom:0.35rem; display:inline-block;">Upload Manual</span>
            <h3 style="margin:0; font-size:1.15rem;">Enviar Apostila em PDF (Seu Material)</h3>
            <p class="text-muted" style="font-size:0.8rem; margin-top:0.25rem;">Envie seus PDFs (Estratégia, Gran ou material próprio) para análise inteligente.</p>
          </div>
          
          <div class="upload-area" id="upload-area">
            <div class="upload-dropzone" id="upload-dropzone" style="padding:1.5rem 1rem;">
              <p style="margin:0.25rem 0; font-weight:600;">Arraste seu PDF aqui ou <label for="file-input" class="upload-link" style="color:var(--color-primary); cursor:pointer;">clique para selecionar</label></p>
              <p class="text-muted" style="font-size: 0.75rem;">Suporta arquivos PDF (ex: Aula 01_Apostila_Grifada.pdf)</p>
              <input type="file" id="file-input" accept=".pdf" style="display:none;">
            </div>
            
            <div class="upload-config" id="upload-config" style="display:none; padding:1rem; background:var(--bg-tertiary); border-radius:var(--radius-sm); border:1px solid var(--glass-border); margin-top:0.75rem;">
              <div class="upload-file-info" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; padding-bottom:0.5rem; border-bottom:1px solid var(--glass-border);">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <span id="upload-filename" style="font-weight:600; font-size:0.9rem; font-family:var(--font-mono);"></span>
                </div>
                <button class="btn-icon" id="upload-remove" title="Remover" style="cursor:pointer;">✕</button>
              </div>

              <div class="grid-2">
                <div class="form-group">
                  <label for="upload-subject" style="font-weight:600; font-size:0.85rem;">Matéria do Concurso</label>
                  <select id="upload-subject" class="form-control">
                    ${renderSubjectOptions(activeExamId)}
                  </select>
                </div>

                <div class="form-group">
                  <label for="upload-study-status" style="font-weight:600; font-size:0.85rem;">Status do Estudo</label>
                  <select id="upload-study-status" class="form-control">
                    <option value="theory_only" selected>Teoria Lida (Revisão D+1)</option>
                    <option value="full">Completo (Teoria + Questões)</option>
                    <option value="unread">Apenas Salvo (Não estudei)</option>
                  </select>
                </div>
              </div>

              <!-- Data Real de Estudo -->
              <div class="form-group" style="margin-top:0.5rem;">
                <label style="font-weight:600; font-size:0.8rem; display:flex; justify-content:space-between;">
                  <span>Quando você estudou esta aula?</span>
                  <span class="text-muted" style="font-size:0.75rem;">Ciclo D+1, D+7, D+30</span>
                </label>
                
                <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-top:0.25rem;" id="upload-date-quick-btns">
                  <button type="button" class="btn btn-secondary btn-sm date-pill-btn" data-date="2026-08-10">Seg (10/08)</button>
                  <button type="button" class="btn btn-secondary btn-sm date-pill-btn" data-date="2026-08-11">Ontem (11/08)</button>
                  <button type="button" class="btn btn-secondary btn-sm date-pill-btn active" data-date="2026-08-12">Hoje (12/08)</button>
                  <button type="button" class="btn btn-secondary btn-sm date-pill-btn" data-date="custom">Outra Data</button>
                </div>

                <input type="date" id="upload-custom-date" class="form-control" style="display:none; margin-top:0.4rem; max-width:180px;" value="2026-08-12">
                <input type="hidden" id="upload-studied-at" value="2026-08-12">
              </div>

              <button class="btn btn-primary" id="btn-upload" style="width:100%; margin-top:1rem; padding:0.75rem; font-weight:700;">
                <span class="btn-text">Processar, Catalogar e Agendar Revisões</span>
                <span class="btn-loading" style="display:none;">Analisando conteúdo da apostila...</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Materials Library / Subject Catalog -->
      <div class="card" id="catalog-card-container" style="margin-top: 1rem;">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h3 style="margin:0;">Catálogo de Aulas & Trilhas — ${careerCfg.name}</h3>
            <p class="text-muted" style="font-size:0.85rem; margin-top:0.25rem;">Histórico e sequência de estudo por disciplina</p>
          </div>
          <button class="btn btn-secondary btn-sm" id="btn-refresh-catalog">Atualizar</button>
        </div>
        
        <div id="catalog-overview-stats" class="catalog-overview-card" style="display:none;">
          <!-- Dinâmico -->
        </div>

        <div id="materials-list" style="padding: 1rem 0;">
          <div class="loading-placeholder">Carregando catálogo de aulas...</div>
        </div>
      </div>

      <!-- Active Study Session (Split Screen) -->
      <div id="study-session-area" class="study-session-area" style="display:none;">
        <!-- Session Header with Timer -->
        <div class="card study-session-header">
          <div class="session-info">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span id="session-lesson-badge" class="lesson-number-badge">Aula --</span>
              <h3 id="session-material-title" style="margin:0;">Estudando: ...</h3>
            </div>
            <p class="text-muted" id="session-material-subject" style="margin-top:0.35rem; font-size:0.9rem;"></p>
          </div>

          <div class="session-timer" id="session-timer">
            <div class="timer-display">
              <span id="timer-value" class="timer-value" style="font-family:var(--font-mono); font-weight:700;">00:00</span>
            </div>
            <div class="timer-bar">
              <div class="timer-bar-fill" id="timer-bar-fill"></div>
            </div>
          </div>

          <div class="session-scope-note" style="flex:1; min-width:260px;">
            <label for="session-scope-note" class="text-muted" style="font-size:0.8rem; display:block; margin-bottom:0.25rem;">
              Até onde você leu? (Opcional — as questões de fixação vão focar neste trecho)
            </label>
            <input type="text" id="session-scope-note" class="form-control"
              placeholder="Ex: li até a pág. 25 / conceito de competência privativa">
          </div>

          <div class="session-actions" style="display:flex; gap:0.5rem; align-items:center;">
            <button class="btn btn-secondary btn-sm" id="btn-toggle-focus-mode" title="Modo Foco Sem Distrações">🎯 Modo Foco</button>
            <button class="btn btn-danger btn-sm" id="btn-finish-session">Concluir e Fixar</button>
          </div>
        </div>

        <div class="focus-floating-bar" id="focus-floating-bar">
          <span style="font-size:0.85rem; font-weight:700; color:var(--color-primary);">🎯 Modo Foco Ativo</span>
          <button class="btn btn-secondary btn-sm" id="btn-exit-focus">Sair do Foco (Esc)</button>
        </div>

        <!-- Session Content: Left (Digital Theory / PDF / Summary Tabs) + Right (Chat) -->
        <div class="session-split-container">
          <!-- Left: Tabbed Document Viewer -->
          <div class="card session-viewer-card">
            <div class="study-nav-tabs">
              <button class="study-tab-btn active" id="tab-btn-teoria" data-tab="teoria" style="display:none;">
                Apostila Digital
              </button>
              <button class="study-tab-btn" id="tab-btn-pdf" data-tab="pdf">
                Apostila Original (PDF)
              </button>
              <button class="study-tab-btn" id="tab-btn-raiox" data-tab="raiox">
                Raio-X da Banca
              </button>
              <button class="study-tab-btn" id="tab-btn-summary" data-tab="summary">
                Resumo da Aula
              </button>
              <div style="margin-left:auto; display:flex; gap:0.4rem; align-items:center;">
                <button id="btn-print-lesson" class="btn btn-secondary btn-sm" style="display:none;" title="Baixar ou Imprimir Apostila em PDF A4">
                  Imprimir PDF
                </button>
                <button class="study-tab-btn active" id="btn-toggle-tutor-pane" title="Abrir ou fechar painel do Tutor IA">
                  Tutor IA
                </button>
                <a href="#" id="session-external-pdf" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="text-decoration:none;">
                  Nova Aba
                </a>
              </div>
            </div>

            <!-- Panel 0: Native Digital Theory Viewer -->
            <div class="session-tab-content session-summary-panel" id="panel-teoria" style="display:none; padding:1.5rem; overflow-y:auto; max-height:calc(100vh - 280px); line-height:1.7;">
              <div id="session-teoria-content" class="markdown-content"></div>
            </div>

            <!-- Panel 1: Embedded PDF Viewer -->
            <div class="session-tab-content" id="panel-pdf">
              <iframe id="pdf-frame" class="pdf-viewer-frame" src="about:blank" title="Visualizador da Apostila"></iframe>
            </div>

            <!-- Panel 2: Raio-X & Foco da Banca (Smart Filter) -->
            <div class="session-tab-content session-summary-panel" id="panel-raiox" style="display:none; padding:1rem; overflow-y:auto; max-height:calc(100vh - 280px);">
              <!-- Dinâmico via renderRaioXPanel -->
            </div>

            <!-- Panel 3: Strategic Summary & Topics -->
            <div class="session-tab-content session-summary-panel" id="panel-summary" style="display:none; padding:1rem; overflow-y:auto; max-height:calc(100vh - 280px);">
              <h4 style="margin-bottom:0.75rem;">📋 Resumo Estratégico</h4>
              <div id="session-summary" class="markdown-content"></div>
              <div class="session-topics" id="session-topics" style="margin-top:1.5rem;"></div>
            </div>
          </div>

          <!-- Right: Contextual AI Tutor Chat (Collapsible) -->
          <div class="card session-chat-card" id="session-chat-pane" style="display:flex; flex-direction:column; height:100%;">
            <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h4 style="margin:0; font-size:0.95rem;">💬 Tutor da Aula</h4>
                <p class="text-muted" style="font-size:0.75rem; margin-top:0.15rem;">Tire dúvidas sobre conceitos e leis</p>
              </div>
              <button class="btn-icon" id="btn-close-tutor-pane" style="font-size:0.85rem; cursor:pointer;" title="Fechar Painel do Tutor">✕</button>
            </div>
            
            <div class="chat-messages" id="session-chat-messages" style="flex:1; overflow-y:auto;">
              <div class="chat-message model">
                <div class="message-content">
                  Estou com o texto integral desta aula aberto! Qualquer dúvida sobre os conceitos, artigos de lei ou pegadinhas da banca examinadora, é só me perguntar. 🎓
                </div>
              </div>
            </div>

            <div class="chat-input-area">
              <input type="text" id="session-chat-input" class="form-control" placeholder="Pergunte sobre um conceito da aula...">
              <button class="btn btn-primary" id="btn-session-chat-send">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Fixation Questions Area -->
      <div id="fixation-area" class="fixation-area" style="display:none;">
        <div class="card fixation-header">
          <div class="fixation-alert">
            <span class="fixation-icon">⏰</span>
            <div>
              <h3>Hora de Fixar o Conteúdo!</h3>
              <p>Sessão finalizada. Resolva as questões abaixo para consolidar seu aprendizado na memória de longo prazo.</p>
            </div>
          </div>
          <div class="fixation-progress">
            <span id="fixation-progress-text">0 / 0</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" id="fixation-progress-bar"></div>
            </div>
          </div>
        </div>

        <div id="fixation-questions-container"></div>

        <div id="fixation-results" style="display:none;">
          <div class="card fixation-results-card">
            <h3>📊 Resultado da Fixação</h3>
            <div class="fixation-score" id="fixation-score"></div>
            <div class="fixation-details" id="fixation-details"></div>
            <button class="btn btn-primary" id="btn-back-to-materials" style="margin-top:1rem;">← Voltar ao Catálogo de Aulas</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize Handlers
  populateNativeLessonSelects(activeExamId);
  setupNativeLessonHandlers();
  setupUploadHandlers();
  setupTabHandlers();
  loadCatalog();

  document.getElementById('btn-refresh-catalog')?.addEventListener('click', loadCatalog);
}

function populateNativeLessonSelects(careerId) {
  const subjSelect = document.getElementById('native-lesson-subject-select');
  const topicSelect = document.getElementById('native-lesson-topic-select');
  if (!subjSelect || !topicSelect) return;

  const subjects = getCareerSubjects(careerId);
  const lessons = getCareerLessons(careerId);

  subjSelect.innerHTML = subjects.map((s, idx) => `
    <option value="${s.subject}" ${idx === 0 ? 'selected' : ''}>${s.subject} (${s.questions}q)</option>
  `).join('');

  function updateTopics() {
    const selectedSubj = subjSelect.value;
    const filteredLessons = lessons.filter(l => l.subject === selectedSubj);

    if (filteredLessons.length === 0) {
      topicSelect.innerHTML = `<option value="1" data-lesson-number="1" data-title="Introdução e Teoria Geral">Aula 01 — Teoria Geral de ${selectedSubj}</option>`;
      return;
    }

    topicSelect.innerHTML = filteredLessons.map((l, idx) => `
      <option value="${l.lessonNumber}" data-lesson-number="${l.lessonNumber}" data-title="${l.title}" data-key-topics="${l.keyTopics || ''}" ${idx === 0 ? 'selected' : ''}>
        Aula ${String(l.lessonNumber).padStart(2, '0')}: ${l.title}
      </option>
    `).join('');
  }

  subjSelect.onchange = updateTopics;
  updateTopics();
}

function setupNativeLessonHandlers() {
  const btnStart = document.getElementById('btn-start-native-lesson');
  if (!btnStart) return;

  btnStart.addEventListener('click', async () => {
    const subjSelect = document.getElementById('native-lesson-subject-select');
    const topicSelect = document.getElementById('native-lesson-topic-select');
    const subject = subjSelect.value;
    const selectedOption = topicSelect.selectedOptions[0];

    if (!selectedOption) {
      showToast('Selecione uma aula do edital.', 'warning');
      return;
    }

    const lessonNumber = parseInt(selectedOption.dataset.lessonNumber, 10) || 1;
    const title = selectedOption.dataset.title || selectedOption.text;
    const keyTopics = selectedOption.dataset.keyTopics || '';

    const btnText = btnStart.querySelector('.btn-text');
    const btnLoading = btnStart.querySelector('.btn-loading');
    btnStart.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'inline';

    try {
      const activeCareerId = getActiveCareerId();
      const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

      showToast('🤖 IA redigindo teoria aprofundada, artigos e pegadinhas...', 'info');

      const res = await fetch('/api/study-room/generate-native-lesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': activeUserId,
          'x-exam-id': activeCareerId
        },
        body: JSON.stringify({
          careerId: activeCareerId,
          subject,
          lessonNumber,
          title,
          keyTopics
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro HTTP ${res.status}: Falha ao gerar aula.`);
      }

      const data = await res.json();
      showToast(data.message || 'Aula carregada com sucesso!', 'success');

      await startStudySession(data.materialId, 30);
    } catch (err) {
      console.error('Erro ao gerar aula nativa:', err);
      showErrorModal('Falha na Geração da Apostila Estratégica', err, {
        careerId: getActiveCareerId(),
        subject,
        lessonNumber,
        title,
        keyTopics
      });
    } finally {
      btnStart.disabled = false;
      if (btnText) btnText.style.display = 'inline';
      if (btnLoading) btnLoading.style.display = 'none';
    }
  });
}

// ============================================================
// TAB HANDLERS (TEORIA vs PDF vs RAIO-X vs RESUMO)
// ============================================================

function setupTabHandlers() {
  const btnTeoria = document.getElementById('tab-btn-teoria');
  const btnPdf = document.getElementById('tab-btn-pdf');
  const btnRaiox = document.getElementById('tab-btn-raiox');
  const btnSummary = document.getElementById('tab-btn-summary');
  const panelTeoria = document.getElementById('panel-teoria');
  const panelPdf = document.getElementById('panel-pdf');
  const panelRaiox = document.getElementById('panel-raiox');
  const panelSummary = document.getElementById('panel-summary');

  if (!btnPdf || !btnSummary || !btnRaiox) return;

  const showTab = (activeBtn, activePanel) => {
    [btnTeoria, btnPdf, btnRaiox, btnSummary].filter(Boolean).forEach(b => b.classList.remove('active'));
    [panelTeoria, panelPdf, panelRaiox, panelSummary].filter(Boolean).forEach(p => p.style.display = 'none');
    activeBtn.classList.add('active');
    activePanel.style.display = activePanel === panelPdf ? 'flex' : 'block';
  };

  if (btnTeoria && panelTeoria) {
    btnTeoria.addEventListener('click', () => showTab(btnTeoria, panelTeoria));
  }
  btnPdf.addEventListener('click', () => showTab(btnPdf, panelPdf));
  btnRaiox.addEventListener('click', () => showTab(btnRaiox, panelRaiox));
  btnSummary.addEventListener('click', () => showTab(btnSummary, panelSummary));

  // Tutor pane toggle
  const btnToggleTutor = document.getElementById('btn-toggle-tutor-pane');
  const btnCloseTutor = document.getElementById('btn-close-tutor-pane');
  const chatPane = document.getElementById('session-chat-pane');

  if (btnToggleTutor && chatPane) {
    btnToggleTutor.addEventListener('click', () => {
      const isHidden = chatPane.style.display === 'none';
      chatPane.style.display = isHidden ? 'flex' : 'none';
      btnToggleTutor.classList.toggle('active', isHidden);
    });
  }

  if (btnCloseTutor && chatPane && btnToggleTutor) {
    btnCloseTutor.addEventListener('click', () => {
      chatPane.style.display = 'none';
      btnToggleTutor.classList.remove('active');
    });
  }
}

// ============================================================
// FILE UPLOAD HANDLERS
// ============================================================

let selectedFile = null;

function setupUploadHandlers() {
  const fileInput = document.getElementById('file-input');
  const dropzone = document.getElementById('upload-dropzone');
  const uploadConfig = document.getElementById('upload-config');
  const removeBtn = document.getElementById('upload-remove');
  const uploadBtn = document.getElementById('btn-upload');

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      selectFile(e.target.files[0]);
    }
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });
  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      selectFile(e.dataTransfer.files[0]);
    }
  });

  removeBtn.addEventListener('click', () => {
    selectedFile = null;
    uploadConfig.style.display = 'none';
    dropzone.style.display = 'flex';
    fileInput.value = '';
  });

  // Date Quick Selection in Upload
  document.querySelectorAll('#upload-date-quick-btns .date-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#upload-date-quick-btns .date-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const dateVal = btn.dataset.date;
      const customInput = document.getElementById('upload-custom-date');
      const hiddenInput = document.getElementById('upload-studied-at');
      if (dateVal === 'custom') {
        customInput.style.display = 'block';
        hiddenInput.value = customInput.value;
      } else {
        customInput.style.display = 'none';
        hiddenInput.value = dateVal;
      }
    });
  });

  document.getElementById('upload-custom-date')?.addEventListener('change', (e) => {
    document.getElementById('upload-studied-at').value = e.target.value;
  });

  uploadBtn.addEventListener('click', uploadAndAnalyze);
}

function selectFile(file) {
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    showToast('Apenas arquivos PDF são aceitos.', 'error');
    return;
  }

  selectedFile = file;
  document.getElementById('upload-filename').textContent = file.name;
  document.getElementById('upload-dropzone').style.display = 'none';
  document.getElementById('upload-config').style.display = 'block';
}

async function uploadAndAnalyze() {
  if (!selectedFile) return;

  const btn = document.getElementById('btn-upload');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';

  try {
    const formData = new FormData();
    formData.append('pdf', selectedFile);
    formData.append('subject', document.getElementById('upload-subject').value);
    formData.append('studiedAt', document.getElementById('upload-studied-at').value);
    formData.append('studyStatus', document.getElementById('upload-study-status').value);

    const response = await fetch('/api/study-room/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || 'Falha no upload');
    }

    const data = await response.json();
    const lessonLabel = data.lessonNumber !== null ? `Aula ${data.lessonNumber}` : 'Aula';
    showToast(`✅ ${data.subject} (${lessonLabel}) catalogada e revisões agendadas!`, 'success');

    // Reset upload area
    selectedFile = null;
    document.getElementById('upload-config').style.display = 'none';
    document.getElementById('upload-dropzone').style.display = 'flex';
    document.getElementById('file-input').value = '';

    // Reload catalog
    loadCatalog();

  } catch (error) {
    console.error('Upload error:', error);
    showToast(error.message || 'Erro ao processar o material.', 'error');
  } finally {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
  }
}

// ============================================================
// CATALOG BY SUBJECT
// ============================================================

async function loadCatalog() {
  const container = document.getElementById('materials-list');
  const statsContainer = document.getElementById('catalog-overview-stats');

  try {
    const activeCareerId = getActiveCareerId();
    const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

    const response = await fetch(`/api/study-room/catalog?careerId=${encodeURIComponent(activeCareerId)}`, {
      headers: {
        'x-user-id': activeUserId,
        'x-exam-id': activeCareerId
      }
    });
    if (!response.ok) throw new Error('Falha ao obter catálogo');

    const data = await response.json();
    const catalog = data.catalog || [];

    if (catalog.length === 0) {
      statsContainer.style.display = 'none';
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📂</span>
          <p>Nenhuma aula catalogada ainda. Faça upload do seu primeiro PDF ou importe do Google Drive!</p>
        </div>
      `;
      return;
    }

    // Render Stats
    let totalMaterias = catalog.length;
    let totalAulas = 0;
    let totalConcluidas = 0;

    catalog.forEach(cat => {
      totalAulas += cat.totalAulas;
      totalConcluidas += cat.concluidas;
    });

    const percent = totalAulas > 0 ? Math.round((totalConcluidas / totalAulas) * 100) : 0;

    statsContainer.style.display = 'grid';
    statsContainer.innerHTML = `
      <div class="stat-pill">
        <span class="stat-pill-label">Disciplinas Ativas</span>
        <span class="stat-pill-val">${totalMaterias}</span>
      </div>
      <div class="stat-pill">
        <span class="stat-pill-label">Total de Aulas</span>
        <span class="stat-pill-val">${totalAulas}</span>
      </div>
      <div class="stat-pill">
        <span class="stat-pill-label">Aulas Estudadas</span>
        <span class="stat-pill-val" style="color:#34D399;">${totalConcluidas}</span>
      </div>
      <div class="stat-pill">
        <span class="stat-pill-label">Progresso Geral</span>
        <span class="stat-pill-val" style="color:#60A5FA;">${percent}%</span>
      </div>
    `;

    // Render Subjects
    container.innerHTML = catalog.map(cat => {
      const subjectColor = getSubjectColor(cat.subject);
      const waveLabel = cat.wave ? `Wave ${cat.wave}` : '';
      const questionsLabel = cat.weightQuestions ? `${cat.weightQuestions} questões na prova` : '';

      return `
        <div class="subject-catalog-group">
          <div class="subject-catalog-header">
            <div class="subject-catalog-title">
              <span class="badge badge-${subjectColor}">${cat.subject}</span>
              ${waveLabel ? `<span class="badge badge-secondary" style="font-size:0.75rem;">${waveLabel}</span>` : ''}
              <span>${cat.aulas.length > 0 ? `${cat.aulas.length} aula(s) carregada(s)` : 'Disciplina Mapeada'}</span>
            </div>
            <div class="subject-catalog-meta">
              <span class="text-muted" style="font-size:0.85rem;">
                ${cat.aulas.length > 0 ? `${cat.concluidas}/${cat.totalAulas} estudadas` : questionsLabel}
              </span>
            </div>
          </div>

          <div class="subject-lessons-list">
            ${cat.aulas.length > 0 ? cat.aulas.map(aula => {
              const lessonNum = aula.lesson_number !== null ? `Aula ${String(aula.lesson_number).padStart(2, '0')}` : 'Tema';
              
              let statusPill = '';
              if (aula.theory_completed === 1 && (aula.questions_completed === 1 || aula.session_count > 0)) {
                statusPill = `<span class="lesson-status-pill lesson-status-completed">✅ Teoria + Questões Feitas ${aula.studied_at ? '(' + formatDate(aula.studied_at) + ')' : ''}</span>`;
              } else if (aula.theory_completed === 1) {
                statusPill = `<span class="lesson-status-pill" style="background:rgba(245,158,11,0.15); color:#FBBF24; border:1px solid #F59E0B;">⚠️ Apenas Teoria Lida (${formatDate(aula.studied_at)})</span>`;
              } else {
                statusPill = `<span class="lesson-status-pill lesson-status-pending">⚪ Não iniciada</span>`;
              }

              // Reviews Badges
              const reviews = aula.reviews || [];
              let reviewsHtml = '';
              if (reviews.length > 0) {
                const todayStr = new Date().toISOString().split('T')[0];
                reviewsHtml = `
                  <div style="display:flex; gap:0.35rem; margin-top:0.35rem; flex-wrap:wrap; align-items:center;">
                    <span style="font-size:0.72rem; color:var(--text-muted);">Revisões:</span>
                    ${reviews.map(r => {
                      const isOverdue = r.scheduled_date < todayStr;
                      const isToday = r.scheduled_date === todayStr;
                      const badgeClass = isOverdue ? 'badge-danger' : (isToday ? 'badge-primary' : 'badge-secondary');
                      const label = r.review_type.toUpperCase();
                      return `<span class="badge ${badgeClass}" style="font-size:0.7rem;" title="${label}: ${formatDate(r.scheduled_date)}">${label}: ${formatDate(r.scheduled_date)} ${isOverdue ? '⚠️' : ''}</span>`;
                    }).join('')}
                  </div>
                `;
              }

              return `
                <div class="lesson-item-row" data-id="${aula.id}">
                  <div style="display:flex; align-items:center; flex:1; min-width:0;">
                    <span class="lesson-number-badge">${lessonNum}</span>
                    <div class="lesson-title-area" style="flex:1; min-width:0;">
                      <span class="lesson-title-text">${aula.title || aula.filename}</span>
                      <div class="lesson-sub-meta">
                        ${statusPill}
                        <span>📖 ${aula.session_count || 0} sessões</span>
                      </div>
                      ${reviewsHtml}
                    </div>
                  </div>

                  <div style="display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap;">
                    <button class="btn btn-primary btn-sm btn-start-study" data-id="${aula.id}">
                      ${aula.isCompleted ? '🔄 Revisar' : '▶️ Estudar'}
                    </button>
                    <button class="btn btn-secondary btn-sm btn-edit-status" data-id="${aula.id}" 
                      data-subject="${cat.subject}" 
                      data-lesson="${aula.lesson_number || ''}" 
                      data-date="${aula.studied_at || ''}"
                      data-theory="${aula.theory_completed || 0}"
                      data-questions="${aula.questions_completed || 0}"
                      title="Alterar data real de estudo e reagendar revisões">
                      📅 Data
                    </button>
                    <button class="btn btn-danger btn-sm btn-delete-material" data-id="${aula.id}" title="Excluir aula">
                      🗑️
                    </button>
                  </div>
                </div>
              `;
            }).join('') : `
              <div class="lesson-item-row" style="opacity:0.85; border:1px dashed var(--glass-border);">
                <div style="display:flex; align-items:center; flex:1;">
                  <span class="lesson-number-badge" style="background:var(--bg-secondary); color:var(--text-muted);">Aula 01</span>
                  <div class="lesson-title-area">
                    <span class="lesson-title-text" style="color:var(--text-secondary);">${cat.description || 'Apostila ainda não enviada'}</span>
                    <div class="lesson-sub-meta">
                      <span class="lesson-status-pill lesson-status-pending">⚪ Aguardando upload da Aula 01</span>
                    </div>
                  </div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="document.getElementById('upload-subject').value='${cat.subject}'; document.getElementById('file-input').click();">
                  📤 Enviar Apostila
                </button>
              </div>
            `}
          </div>
        </div>
      `;
    }).join('');

    // Event listeners
    container.querySelectorAll('.btn-start-study').forEach(btn => {
      btn.addEventListener('click', () => showStartSessionDialog(btn.dataset.id));
    });

    container.querySelectorAll('.btn-edit-status').forEach(btn => {
      btn.addEventListener('click', () => {
        showEditStudyStatusModal(
          btn.dataset.id,
          btn.dataset.subject,
          btn.dataset.lesson,
          btn.dataset.date,
          btn.dataset.theory,
          btn.dataset.questions
        );
      });
    });

    container.querySelectorAll('.btn-delete-material').forEach(btn => {
      btn.addEventListener('click', () => deleteMaterial(btn.dataset.id));
    });

  } catch (error) {
    console.error('Erro ao carregar catálogo:', error);
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">⚠️</span>
        <p>Erro ao carregar catálogo. Clique em Atualizar para tentar novamente.</p>
      </div>
    `;
  }
}

// Modal de alteração retroativa de data e status
function showEditStudyStatusModal(materialId, subject, lessonNumber, currentDate, theoryCompleted, questionsCompleted) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  let defaultStatus = 'theory_only';
  if (parseInt(theoryCompleted, 10) === 1 && parseInt(questionsCompleted, 10) === 1) defaultStatus = 'full';
  else if (parseInt(theoryCompleted, 10) === 0) defaultStatus = 'unread';

  const defaultDate = currentDate || '2026-08-12';

  overlay.innerHTML = `
    <div class="modal card" style="max-width:480px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--glass-border); padding-bottom:0.5rem;">
        <h3 style="margin:0; font-size:1.15rem;">📅 Data Real de Estudo & Revisões</h3>
        <button class="btn-icon" id="btn-close-edit-modal" style="cursor:pointer;">✕</button>
      </div>

      <div style="margin-bottom:1rem;">
        <span class="badge badge-primary">${subject}</span>
        <strong style="margin-left:0.5rem;">Aula ${lessonNumber || 'Pendente'}</strong>
      </div>

      <div class="form-group">
        <label style="font-weight:600;">Status do Estudo</label>
        <select id="edit-study-status" class="form-control">
          <option value="theory_only" ${defaultStatus === 'theory_only' ? 'selected' : ''}>⚠️ Apenas Teoria Lida (Revisão & Questões na Fila)</option>
          <option value="full" ${defaultStatus === 'full' ? 'selected' : ''}>✅ Completo (Teoria Lida + Questões Feitas)</option>
          <option value="unread" ${defaultStatus === 'unread' ? 'selected' : ''}>⚪ Não estudada (Zerar status)</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:0.75rem;">
        <label style="font-weight:600; display:flex; justify-content:space-between;">
          <span>Data Real em que foi Estudada:</span>
        </label>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.35rem;" id="modal-date-quick-btns">
          <button type="button" class="btn btn-secondary btn-sm date-modal-pill" data-date="2026-08-10">⏮️ Segunda (10/08)</button>
          <button type="button" class="btn btn-secondary btn-sm date-modal-pill" data-date="2026-08-11">⏮️ Ontem (11/08)</button>
          <button type="button" class="btn btn-secondary btn-sm date-modal-pill active" data-date="2026-08-12">⭐ Hoje (12/08)</button>
        </div>
        <input type="date" id="modal-studied-at" class="form-control" style="margin-top:0.5rem;" value="${defaultDate}">
      </div>

      <div class="modal-actions" style="margin-top:1.5rem; display:flex; justify-content:flex-end; gap:0.5rem;">
        <button class="btn btn-secondary" id="btn-cancel-edit-modal">Cancelar</button>
        <button class="btn btn-primary" id="btn-save-edit-modal">💾 Salvar & Reagendar Revisões</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#btn-close-edit-modal').onclick = () => overlay.remove();
  overlay.querySelector('#btn-cancel-edit-modal').onclick = () => overlay.remove();

  overlay.querySelectorAll('.date-modal-pill').forEach(btn => {
    btn.onclick = () => {
      overlay.querySelectorAll('.date-modal-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      overlay.querySelector('#modal-studied-at').value = btn.dataset.date;
    };
  });

  overlay.querySelector('#btn-save-edit-modal').onclick = async () => {
    const studyStatus = overlay.querySelector('#edit-study-status').value;
    const studiedAt = overlay.querySelector('#modal-studied-at').value;

    try {
      const res = await fetch(`/api/study-room/materials/${materialId}/study-status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studyStatus, studiedAt })
      });

      if (res.ok) {
        showToast('Data e ciclo de revisões atualizados com sucesso! 🧠🎯', 'success');
        overlay.remove();
        loadCatalog();
      } else {
        showToast('Erro ao atualizar status.', 'error');
      }
    } catch (e) {
      showToast('Erro ao conectar com o servidor.', 'error');
    }
  };
}

async function deleteMaterial(id) {
  if (!confirm('Deseja realmente excluir este material e o histórico de sessões associado?')) return;

  try {
    const response = await fetch(`/api/study-room/materials/${id}`, { method: 'DELETE' });
    if (response.ok) {
      showToast('Material removido com sucesso.', 'success');
      loadCatalog();
    } else {
      showToast('Erro ao remover material.', 'error');
    }
  } catch (e) {
    showToast('Erro ao remover material.', 'error');
  }
}

// ============================================================
// STUDY SESSION
// ============================================================

function showStartSessionDialog(materialId) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal card">
      <h3>⏱️ Definir Tempo de Estudo da Aula</h3>
      <p class="text-muted">Quanto tempo você vai focar na leitura e fixação desta aula?</p>
      <div class="duration-options">
        <button class="btn btn-option duration-btn" data-minutes="25">25 min (Pomodoro)</button>
        <button class="btn btn-option duration-btn" data-minutes="45">45 min</button>
        <button class="btn btn-option duration-btn active" data-minutes="60">1 hora (Recomendado)</button>
        <button class="btn btn-option duration-btn" data-minutes="90">1h30</button>
        <button class="btn btn-option duration-btn" data-minutes="120">2 horas</button>
      </div>
      <div class="form-group" style="margin-top: 1rem;">
        <label>Ou tempo personalizado (minutos):</label>
        <input type="number" id="custom-duration" class="form-control" min="5" max="480" placeholder="Ex: 50">
      </div>
      <div class="modal-actions">
        <button class="btn btn-secondary" id="btn-cancel-session">Cancelar</button>
        <button class="btn btn-primary" id="btn-confirm-session">📚 Iniciar Estudo da Aula</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  let selectedMinutes = 60;

  overlay.querySelectorAll('.duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMinutes = parseInt(btn.dataset.minutes);
      document.getElementById('custom-duration').value = '';
    });
  });

  document.getElementById('custom-duration').addEventListener('input', (e) => {
    if (e.target.value) {
      selectedMinutes = parseInt(e.target.value);
      overlay.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
    }
  });

  document.getElementById('btn-cancel-session').addEventListener('click', () => overlay.remove());

  document.getElementById('btn-confirm-session').addEventListener('click', () => {
    overlay.remove();
    startStudySession(materialId, selectedMinutes);
  });
}

async function startStudySession(materialId, durationMinutes) {
  try {
    const response = await fetch('/api/study-room/sessions/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materialId, durationMinutes })
    });

    if (!response.ok) throw new Error('Falha ao iniciar sessão');
    const sessionData = await response.json();

    const matRes = await fetch(`/api/study-room/materials/${materialId}`);
    const materialData = matRes.ok ? await matRes.json() : null;

    currentSession = {
      ...sessionData,
      durationMinutes,
      material: materialData?.material || { title: 'Aula', summary: '' },
      startTime: Date.now()
    };

    showSessionUI();
    startTimer(durationMinutes);

    showToast(`📚 Sessão de ${durationMinutes} min iniciada! Bom estudo!`, 'success');
  } catch (error) {
    console.error('Erro ao iniciar sessão:', error);
    showToast('Erro ao iniciar sessão.', 'error');
  }
}

function showSessionUI() {
  document.querySelector('.study-room-top').style.display = 'none';
  document.getElementById('catalog-card-container').style.display = 'none';
  document.getElementById('study-session-area').style.display = 'block';
  document.getElementById('fixation-area').style.display = 'none';

  const activeExamId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeExamId);

  const material = currentSession.material;
  const lessonNum = material.lesson_number !== null ? `Aula ${String(material.lesson_number).padStart(2, '0')}` : 'Aula';

  document.getElementById('session-lesson-badge').textContent = lessonNum;
  document.getElementById('session-material-title').textContent = material.title || material.filename;
  document.getElementById('session-material-subject').textContent = `${material.subject || 'Geral'} • ${careerCfg.shortName}`;

  // Load PDF in iframe or Teoria Nativa
  const pdfFrame = document.getElementById('pdf-frame');
  const externalLink = document.getElementById('session-external-pdf');
  const pdfUrl = currentSession.pdfUrl || material.pdfUrl;

  const isNative = Boolean(material.is_native_lesson) || (pdfUrl && !pdfUrl.endsWith('.pdf')) || !pdfUrl;

  const btnTeoria = document.getElementById('tab-btn-teoria');
  const btnPdf = document.getElementById('tab-btn-pdf');
  const panelTeoria = document.getElementById('panel-teoria');
  const teoriaContent = document.getElementById('session-teoria-content');

  if (isNative) {
    if (btnTeoria) btnTeoria.style.display = 'inline-flex';
    if (btnPdf) btnPdf.style.display = 'none';
    if (externalLink) externalLink.style.display = 'none';

    if (teoriaContent) {
      teoriaContent.innerHTML = parseMarkdown(material.content_text || material.caderno_enxuto || material.summary || 'Apostila gerada.');
    }
    if (btnTeoria) btnTeoria.click();
  } else {
    if (btnTeoria) btnTeoria.style.display = 'none';
    if (btnPdf) btnPdf.style.display = 'inline-flex';
    if (pdfUrl) {
      pdfFrame.src = pdfUrl;
      externalLink.href = pdfUrl;
      externalLink.style.display = 'inline-flex';
    } else {
      pdfFrame.src = 'about:blank';
      externalLink.style.display = 'none';
    }
    if (btnPdf) btnPdf.click();
  }

  // Configura botão de impressão / exportação em PDF A4
  const btnPrint = document.getElementById('btn-print-lesson');
  if (btnPrint) {
    btnPrint.style.display = isNative ? 'inline-flex' : 'none';
    btnPrint.onclick = () => {
      printStudyLesson(
        material.title || 'Apostila Oficial',
        material.subject || 'Geral',
        material.lesson_number || 1,
        teoriaContent ? teoriaContent.innerHTML : (material.content_text || ''),
        careerCfg.name
      );
    };
  }

  // Render Raio-X & Foco Panel
  const raioxEl = document.getElementById('panel-raiox');
  const analysis = material.analysis || (material.analysis_json ? JSON.parse(material.analysis_json) : {});
  
  if (raioxEl) {
    const topicosQuentes = analysis.topicosQuentes || [
      'Conceito e Elementos de Tributo (Art. 3º do CTN) — Alta cobrança em casos práticos',
      'Teoria Pentapartida (STF) vs Teoria Tripartida (CTN)',
      'Taxas vs Preços Públicos (Súmula Vinculante 19 e 41)'
    ];
    const topicosIsca = analysis.topicosIsca || [
      'Evolução histórica das receitas públicas na antiguidade (<3% na FGV)',
      'Teorias doutrinárias minoritárias sobre a parafiscalidade'
    ];
    const roteiro = analysis.roteiroLeitura || 'Inicie direto no Art. 3º do CTN e foque na diferença entre Taxas e Tarifas. Pule a introdução histórica inicial.';
    const artigos = analysis.artigosLei || ['Art. 3º do CTN', 'Art. 118 do CTN (Pecunia non olet)', 'Art. 145, II da CF/88 (Taxas)', 'Súmula Vinculante 19', 'Súmula Vinculante 41'];

    raioxEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-color); flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h4 style="margin:0; font-size:1.1rem; color:var(--text-primary);">🎯 Raio-X & Foco FGV</h4>
          <p class="text-muted" style="font-size:0.8rem; margin:0.2rem 0 0 0;">Filtre a palha e estude apenas o que a banca cobra</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-open-caderno-enxuto" style="font-weight:700;">
          ⚡ Caderno Enxuto FGV (Ler em 20 min)
        </button>
      </div>

      <div style="background:var(--color-primary-bg); border-left:4px solid var(--color-primary); padding:0.85rem 1rem; border-radius:var(--radius-sm); margin-bottom:1rem;">
        <div style="font-weight:700; color:var(--color-primary); display:flex; align-items:center; gap:0.4rem;">
          <span>🧭 Roteiro Estratégico de Leitura da Aula</span>
        </div>
        <p style="margin:0.25rem 0 0 0; font-size:0.85rem; color:var(--text-primary); font-weight:500;">
          ${roteiro}
        </p>
      </div>

      <div style="margin-bottom:1rem;">
        <h5 style="color:var(--color-danger); display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem; font-size:0.9rem;">
          <span>🔥 O que Sempre Cai na FGV nesta Aula (>75%)</span>
        </h5>
        <div style="display:flex; flex-direction:column; gap:0.4rem;">
          ${topicosQuentes.map(t => `
            <div style="background:var(--bg-tertiary); padding:0.6rem 0.85rem; border-radius:4px; border-left:3px solid var(--color-danger); font-size:0.85rem; color:var(--text-primary);">
              <strong>${t}</strong>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom:1rem;">
        <h5 style="color:var(--text-muted); display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem; font-size:0.9rem;">
          <span>🧊 Tópicos Isca (<15% na FGV — Leia rápido ou pule)</span>
        </h5>
        <div style="display:flex; flex-direction:column; gap:0.4rem;">
          ${topicosIsca.map(t => `
            <div style="background:var(--bg-tertiary); padding:0.5rem 0.85rem; border-radius:4px; border-left:3px solid var(--text-muted); font-size:0.82rem; color:var(--text-secondary); opacity:0.85;">
              ⚠️ ${t}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom:1rem;">
        <h5 style="color:var(--color-warning); display:flex; align-items:center; gap:0.4rem; margin-bottom:0.4rem; font-size:0.9rem;">
          <span>⚖️ Artigos de Lei & Súmulas Obrigatórias para Grifar no PDF</span>
        </h5>
        <div class="artigos-tag-list" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-top:0.4rem;">
          ${artigos.map(a => `<span class="artigo-tag" style="background:var(--color-warning-bg); border:1px solid var(--color-warning); color:var(--color-warning); font-weight:700; padding:0.2rem 0.5rem; border-radius:4px; font-size:0.75rem;">📖 ${a}</span>`).join('')}
        </div>
      </div>
    `;

    document.getElementById('btn-open-caderno-enxuto')?.addEventListener('click', () => {
      openCadernoEnxuto(material.id);
    });
  }

  // Render summary panel (optional tab)
  const summaryEl = document.getElementById('session-summary');
  summaryEl.innerHTML = renderMarkdown(material.summary || analysis.resumoEstrategico || 'Resumo não disponível.');

  const topicsEl = document.getElementById('session-topics');
  const topicos = analysis.topicos || [];
  if (topicos.length > 0) {
    topicsEl.innerHTML = `
      <h5>📌 Tópicos Abordados nesta Aula</h5>
      <div class="topics-list">
        ${topicos.map(t => `
          <div class="topic-item">
            <strong>${t.nome}</strong>
            ${t.subtopicos ? `<ul>${t.subtopicos.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else {
    topicsEl.innerHTML = '';
  }

  // Setup contextual chat
  setupSessionChat();

  // Finish session handler
  document.getElementById('btn-finish-session').onclick = finishSession;

  // Modo Foco Toggle Handlers
  const btnToggleFocus = document.getElementById('btn-toggle-focus-mode');
  const btnExitFocus = document.getElementById('btn-exit-focus');

  function toggleFocus(enable = null) {
    const isCurrentlyActive = document.body.classList.contains('focus-mode-active');
    const newState = enable !== null ? enable : !isCurrentlyActive;
    if (newState) {
      document.body.classList.add('focus-mode-active');
      showToast('🎯 Modo Foco ativado! Pressione Esc para sair.', 'info');
    } else {
      document.body.classList.remove('focus-mode-active');
    }
  }

  if (btnToggleFocus) btnToggleFocus.onclick = () => toggleFocus();
  if (btnExitFocus) btnExitFocus.onclick = () => toggleFocus(false);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('focus-mode-active')) {
      toggleFocus(false);
    }
  });
}

// ============================================================
// TIMER
// ============================================================

function startTimer(minutes) {
  if (timerInterval) clearInterval(timerInterval);
  remainingSeconds = minutes * 60;
  const totalSeconds = remainingSeconds;
  timerAudioPlayed = false;

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      onTimerExpired();
      return;
    }

    if (remainingSeconds === 300 && !timerAudioPlayed) {
      timerAudioPlayed = true;
      showToast('⏰ Faltam 5 minutos! Prepare-se para as questões de fixação.', 'warning');
    }

    updateTimerDisplay();

    const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    const bar = document.getElementById('timer-bar-fill');
    if (bar) bar.style.width = `${progress}%`;
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const display = hours > 0
    ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const valEl = document.getElementById('timer-value');
  if (valEl) valEl.textContent = display;

  const timerEl = document.getElementById('session-timer');
  if (timerEl) {
    if (remainingSeconds <= 60) {
      timerEl.classList.add('timer-critical');
    } else if (remainingSeconds <= 300) {
      timerEl.classList.add('timer-warning');
    }
  }
}

function playChimeSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.35); // E5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
    osc2.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.45); // G5

    gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 1.2);
    osc2.stop(ctx.currentTime + 1.2);
  } catch (e) {
    console.debug('Web Audio Chime notice:', e);
  }
}

function onTimerExpired() {
  playChimeSound();
  showToast('⏰ Tempo esgotado! Gerando questões de fixação...', 'info');
  finishSession();
}

// ============================================================
// SESSION CONTEXTUAL CHAT
// ============================================================

function setupSessionChat() {
  const input = document.getElementById('session-chat-input');
  const sendBtn = document.getElementById('btn-session-chat-send');

  const send = () => {
    const message = input.value.trim();
    if (!message) return;
    input.value = '';
    sendSessionMessage(message);
  };

  sendBtn.onclick = send;
  input.onkeydown = (e) => {
    if (e.key === 'Enter') send();
  };
}

async function sendSessionMessage(message) {
  const container = document.getElementById('session-chat-messages');

  const userDiv = document.createElement('div');
  userDiv.className = 'chat-message user';
  userDiv.innerHTML = `<div class="message-content">${message}</div>`;
  container.appendChild(userDiv);

  const modelDiv = document.createElement('div');
  modelDiv.className = 'chat-message model';
  modelDiv.innerHTML = `<div class="message-content"><span class="typing-indicator">●●●</span></div>`;
  container.appendChild(modelDiv);
  container.scrollTop = container.scrollHeight;

  try {
    const response = await fetch(`/api/study-room/sessions/${currentSession.sessionId}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (response.headers.get('Content-Type')?.includes('text/event-stream')) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.substring(6));
              if (data.done) break;
              if (data.chunk) {
                fullText += data.chunk;
                modelDiv.querySelector('.message-content').innerHTML = renderMarkdown(fullText);
                container.scrollTop = container.scrollHeight;
              }
            } catch (e) {}
          }
        }
      }
    } else {
      const data = await response.json();
      modelDiv.querySelector('.message-content').innerHTML = renderMarkdown(data.response || 'Erro ao processar');
    }
  } catch (error) {
    console.error('Chat error:', error);
    modelDiv.querySelector('.message-content').innerHTML = '❌ Erro ao enviar mensagem.';
  }
}

// ============================================================
// CADERNO ENXUTO FGV (SMART FILTER)
// ============================================================

async function openCadernoEnxuto(materialId) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal card" style="max-width:760px; max-height:85vh; display:flex; flex-direction:column;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.75rem; margin-bottom:1rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.4rem;">⚡</span>
          <div>
            <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">Caderno Enxuto FGV (Leitura Rápida)</h3>
            <p class="text-muted" style="margin:0; font-size:0.78rem;">Palha teórica e tópicos isca eliminados — apenas o núcleo de prova</p>
          </div>
        </div>
        <button class="btn-icon" id="btn-close-caderno" style="cursor:pointer;">✕</button>
      </div>

      <div id="caderno-body" style="flex:1; overflow-y:auto; padding:0.5rem; line-height:1.6;">
        <div class="loading-placeholder">🧠 Analisando a apostila, descartando partes irrelevantes e estruturando o Caderno Enxuto FGV...</div>
      </div>

      <div class="modal-actions" style="margin-top:1rem; padding-top:0.75rem; border-top:1px solid var(--border-color); display:flex; justify-content:space-between;">
        <button class="btn btn-secondary btn-sm" id="btn-copy-caderno">📋 Copiar Texto</button>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" id="btn-regerar-caderno">🔄 Regerar Filtro</button>
          <button class="btn btn-primary btn-sm" id="btn-ok-caderno">Concluir Leitura</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#btn-close-caderno').onclick = () => overlay.remove();
  overlay.querySelector('#btn-ok-caderno').onclick = () => overlay.remove();

  let currentText = '';

  const loadCaderno = async (force = false) => {
    const bodyEl = overlay.querySelector('#caderno-body');
    bodyEl.innerHTML = `<div class="loading-placeholder">🧠 Analisando a apostila, descartando partes irrelevantes e estruturando o Caderno Enxuto FGV...</div>`;

    try {
      const res = await fetch(`/api/study-room/materials/${materialId}/caderno-enxuto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force })
      });

      if (!res.ok) throw new Error('Falha ao processar Caderno Enxuto.');
      const data = await res.json();
      currentText = data.cadernoEnxuto || 'Não foi possível extrair o caderno enxuto.';

      bodyEl.innerHTML = `
        <div class="markdown-content" style="font-size:0.92rem;">
          ${renderMarkdown(currentText)}
        </div>
      `;
    } catch (e) {
      bodyEl.innerHTML = `<p class="text-muted">❌ ${e.message || 'Erro ao carregar o Caderno Enxuto.'}</p>`;
    }
  };

  overlay.querySelector('#btn-regerar-caderno').onclick = () => loadCaderno(true);
  overlay.querySelector('#btn-copy-caderno').onclick = () => {
    if (currentText) {
      navigator.clipboard.writeText(currentText);
      showToast('Caderno Enxuto copiado para a área de transferência!', 'success');
    }
  };

  loadCaderno();
}

// ============================================================
// FINISH SESSION & FIXATION QUESTIONS
// ============================================================

function finishSession() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  const scopeNote = document.getElementById('session-scope-note')?.value || '';
  const actualDuration = currentSession.durationMinutes * 60 - remainingSeconds;

  // Mode Selection Modal
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal card" style="max-width:500px;">
      <div style="border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; margin-bottom:1rem;">
        <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">🎯 Concluir Estudo & Calibrar Fixação</h3>
        <p class="text-muted" style="margin:0.25rem 0 0 0; font-size:0.8rem;">Escolha o foco da bateria de questões gerada pela IA:</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.25rem;">
        <label style="padding:0.75rem 1rem; border:1px solid var(--border-color); border-radius:var(--radius-sm); cursor:pointer; display:flex; align-items:flex-start; gap:0.75rem; background:var(--bg-tertiary);">
          <input type="radio" name="fixation-mode-choice" value="sempre_cai" checked style="margin-top:0.2rem;">
          <div>
            <strong style="color:var(--text-primary); font-size:0.9rem;">🔥 Modo "Sempre Cai" (>75% na FGV) — 10 Questões</strong>
            <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">Foca no núcleo duro e regras essenciais que mais pontuam na prova.</p>
          </div>
        </label>

        <label style="padding:0.75rem 1rem; border:1px solid var(--border-color); border-radius:var(--radius-sm); cursor:pointer; display:flex; align-items:flex-start; gap:0.75rem; background:var(--bg-tertiary);">
          <input type="radio" name="fixation-mode-choice" value="armadilhas" style="margin-top:0.2rem;">
          <div>
            <strong style="color:var(--color-danger); font-size:0.9rem;">⚠️ Modo "Pegadinhas & Armadilhas FGV" — 5 Questões</strong>
            <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">Casos práticos com as trocas de conceitos clássicas da banca examinadora.</p>
          </div>
        </label>

        <label style="padding:0.75rem 1rem; border:1px solid var(--border-color); border-radius:var(--radius-sm); cursor:pointer; display:flex; align-items:flex-start; gap:0.75rem; background:var(--bg-tertiary);">
          <input type="radio" name="fixation-mode-choice" value="tendencias" style="margin-top:0.2rem;">
          <div>
            <strong style="color:var(--color-primary); font-size:0.9rem;">📈 Modo "Tendências Recentes 2024-2026" — 5 Questões</strong>
            <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">Reformas recentes e jurisprudência pacificada do STF/STJ.</p>
          </div>
        </label>
      </div>

      <div class="modal-actions" style="display:flex; justify-content:flex-end; gap:0.5rem;">
        <button class="btn btn-secondary" id="btn-cancel-finish-dialog">Voltar à Leitura</button>
        <button class="btn btn-primary" id="btn-confirm-finish-dialog">Gerar Questões & Fixar 🚀</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#btn-cancel-finish-dialog').onclick = () => overlay.remove();

  overlay.querySelector('#btn-confirm-finish-dialog').onclick = async () => {
    const selectedMode = overlay.querySelector('input[name="fixation-mode-choice"]:checked')?.value || 'sempre_cai';
    overlay.remove();

    showToast('⏳ Gerando questões calibradas no padrão FGV...', 'info');

    try {
      const response = await fetch(`/api/study-room/sessions/${currentSession.sessionId}/finish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actualDurationSeconds: Math.max(0, actualDuration),
          scopeNote,
          mode: selectedMode,
          questionCount: selectedMode === 'sempre_cai' ? 10 : 5
        })
      });

      if (!response.ok) throw new Error('Falha ao gerar questões de fixação');
      const data = await response.json();

      document.getElementById('study-session-area').style.display = 'none';
      document.getElementById('fixation-area').style.display = 'block';

      renderFixationQuestions(data.questions || []);

    } catch (error) {
      console.error('Finish session error:', error);
      showToast('Erro ao gerar questões de fixação.', 'error');
    }
  };
}

let fixationAnswers = {};
let fixationQuestionsList = [];
let currentFixationIndex = 0;

function renderFixationQuestions(questions) {
  fixationQuestionsList = questions || [];
  fixationAnswers = {};
  currentFixationIndex = 0;

  const container = document.getElementById('fixation-questions-container');
  const progressText = document.getElementById('fixation-progress-text');
  const progressBar = document.getElementById('fixation-progress-bar');
  const resultsDiv = document.getElementById('fixation-results');

  resultsDiv.style.display = 'none';
  progressText.textContent = `0 / ${questions.length}`;
  progressBar.style.width = '0%';

  if (questions.length === 0) {
    container.innerHTML = `<p class="text-muted">Nenhuma questão gerada.</p>`;
    return;
  }

  renderActiveFixationSlide();

  document.getElementById('btn-back-to-materials').onclick = () => {
    document.getElementById('fixation-area').style.display = 'none';
    document.querySelector('.study-room-top').style.display = 'block';
    document.getElementById('catalog-card-container').style.display = 'block';
    loadCatalog();
  };
}

function renderActiveFixationSlide() {
  const container = document.getElementById('fixation-questions-container');
  const questions = fixationQuestionsList;
  if (!questions || questions.length === 0) return;

  const q = questions[currentFixationIndex];
  const total = questions.length;
  const isAnswered = fixationAnswers[q.id] !== undefined;
  const storedResult = fixationAnswers[q.id];

  const dotsHtml = questions.map((item, idx) => {
    const isCur = idx === currentFixationIndex;
    const ans = fixationAnswers[item.id];
    let stateClass = '';
    if (ans !== undefined) {
      stateClass = ans.isCorrect ? 'answered-correct' : 'answered-wrong';
    }
    return `
      <button class="fixation-dot-btn ${isCur ? 'current' : ''} ${stateClass}" data-goto="${idx}" title="Questão ${idx + 1}">
        ${idx + 1}
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div class="card question-card" id="fixation-q-${q.id}">
      <div class="question-meta" style="justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="badge badge-info" style="font-weight:700;">Questão ${currentFixationIndex + 1} de ${total}</span>
          <span class="badge badge-${q.difficulty === 'facil' ? 'success' : q.difficulty === 'dificil' ? 'danger' : 'warning'}">
            ${q.difficulty || 'médio'}
          </span>
          ${q.topic ? `<span class="badge badge-secondary">${q.topic}</span>` : ''}
        </div>
        <div class="fixation-dots-container">
          ${dotsHtml}
        </div>
      </div>

      <div class="question-text" style="font-size:1.05rem; line-height:1.6; margin-bottom:1.5rem;">
        ${q.question}
      </div>

      <div class="question-options">
        ${q.options.map((opt, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          let extraClass = '';
          if (isAnswered) {
            if (optIdx === storedResult.correctIndex) extraClass = 'correct-answer';
            else if (optIdx === storedResult.selectedAnswer && !storedResult.isCorrect) extraClass = 'wrong-answer';
          }
          return `
            <button type="button" class="question-option ${extraClass}" data-qid="${q.id}" data-opt="${optIdx}" ${isAnswered ? 'disabled' : ''}>
              <span class="option-letter">${letter}</span>
              <span class="option-text">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="question-feedback" id="feedback-${q.id}" style="${isAnswered ? 'display:block;' : 'display:none;'} margin-top:1.25rem; padding:1rem; border-radius:var(--radius-sm); background:${isAnswered && storedResult.isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border:1px solid ${isAnswered && storedResult.isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">
        ${isAnswered ? `
          <div style="font-weight:700; color:${storedResult.isCorrect ? 'var(--color-success)' : 'var(--color-danger)'}; margin-bottom:0.4rem;">
            ${storedResult.isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta'}
          </div>
          <div style="font-size:0.9rem; line-height:1.5; color:var(--text-primary);">${storedResult.explanation || ''}</div>
        ` : ''}
      </div>

      <div class="fixation-pagination-wrapper">
        <button class="btn btn-secondary btn-sm" id="btn-prev-fixation" ${currentFixationIndex === 0 ? 'disabled' : ''}>
          ← Anterior
        </button>
        <span style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-mono);">
          ${currentFixationIndex + 1} / ${total}
        </span>
        ${currentFixationIndex < total - 1 ? `
          <button class="btn btn-primary btn-sm" id="btn-next-fixation">
            Próxima Questão →
          </button>
        ` : `
          <button class="btn btn-success btn-sm" id="btn-finish-fixation-all">
            🏁 Ver Resultado Final
          </button>
        `}
      </div>
    </div>
  `;

  // Attach handlers
  container.querySelectorAll('.fixation-dot-btn').forEach(btn => {
    btn.onclick = () => {
      currentFixationIndex = parseInt(btn.dataset.goto, 10);
      renderActiveFixationSlide();
    };
  });

  const prevBtn = container.querySelector('#btn-prev-fixation');
  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentFixationIndex > 0) {
        currentFixationIndex--;
        renderActiveFixationSlide();
      }
    };
  }

  const nextBtn = container.querySelector('#btn-next-fixation');
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (currentFixationIndex < total - 1) {
        currentFixationIndex++;
        renderActiveFixationSlide();
      }
    };
  }

  const finishAllBtn = container.querySelector('#btn-finish-fixation-all');
  if (finishAllBtn) {
    finishAllBtn.onclick = () => {
      showFixationResults();
    };
  }

  container.querySelectorAll('.question-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = parseInt(btn.dataset.qid, 10);
      const opt = parseInt(btn.dataset.opt, 10);
      answerFixationQuestion(qid, opt);
    });
  });
}

async function answerFixationQuestion(questionId, selectedAnswer) {
  if (fixationAnswers[questionId] !== undefined) return;

  const card = document.getElementById(`fixation-q-${questionId}`);
  const buttons = card ? card.querySelectorAll('.question-option') : [];
  buttons.forEach(b => b.disabled = true);

  try {
    const response = await fetch(`/api/study-room/sessions/${currentSession.sessionId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, selectedAnswer })
    });

    const data = await response.json();

    fixationAnswers[questionId] = {
      selectedAnswer,
      correctIndex: data.correctIndex,
      isCorrect: data.isCorrect,
      explanation: data.explanation || ''
    };

    // Update progress bar
    const answeredCount = Object.keys(fixationAnswers).length;
    const total = fixationQuestionsList.length;
    document.getElementById('fixation-progress-text').textContent = `${answeredCount} / ${total}`;
    document.getElementById('fixation-progress-bar').style.width = `${(answeredCount / total) * 100}%`;

    // Re-render slide to update state, options, explanation and dot
    renderActiveFixationSlide();

    if (answeredCount === total) {
      showToast('🎉 Todas as questões foram respondidas!', 'success');
    }

  } catch (error) {
    console.error('Answer error:', error);
    showToast('Erro ao registrar resposta.', 'error');
    buttons.forEach(b => b.disabled = false);
  }
}

function showFixationResults() {
  const resultsDiv = document.getElementById('fixation-results');
  const scoreDiv = document.getElementById('fixation-score');
  const detailsDiv = document.getElementById('fixation-details');

  let correct = 0;
  const total = fixationQuestionsList.length;

  fixationQuestionsList.forEach(q => {
    const ans = fixationAnswers[q.id];
    if (ans && (ans.isCorrect || ans.selectedAnswer === q.correctIndex || ans === q.correctIndex)) {
      correct++;
    }
  });

  const pct = Math.round((correct / total) * 100);

  scoreDiv.innerHTML = `
    <div class="score-number" style="color: ${pct >= 70 ? '#34D399' : '#FBBF24'};">${correct}/${total}</div>
    <div class="score-detail">${pct}% de aproveitamento nesta aula</div>
  `;

  detailsDiv.innerHTML = `
    <p style="margin-top:0.75rem; color:var(--text-secondary);">
      ${pct >= 80 ? '🎉 Excelente domínio do tema! Aula fixada com sucesso.' : pct >= 60 ? '👍 Bom rendimento. Revise os pontos onde houve dúvida.' : '⚠️ Rendimento abaixo do ideal. Recomendamos agendar uma nova sessão de revisão desta aula.'}
    </p>
  `;

  resultsDiv.style.display = 'block';
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
