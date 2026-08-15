import { showToast, renderMarkdown, formatDate, getSubjectColor } from './utils.js';
import { generatePrintExamBooklet } from './simulado-print.js';
import { getCareerConfig, getActiveCareerId, getCareerSubjects, getCareerBancas } from './careers.js';

let currentSimulado = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let simuladoTimerInterval = null;
let totalDurationSeconds = 0;
let remainingSeconds = 0;

function renderSimuladoCheckboxes(examId = null) {
  const subjects = getCareerSubjects(examId);
  return subjects.map((sub, idx) => `
    <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; cursor:pointer;">
      <input type="checkbox" name="sim-sub" value="${sub.subject}" ${idx < 6 ? 'checked' : ''}> ${sub.subject} (${sub.questions}q)
    </label>
  `).join('');
}

export async function render(container) {
  const activeExamId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeExamId);
  const bancas = getCareerBancas(activeExamId);

  const bancasOptions = bancas.map(b => `
    <option value="${b.id}" ${b.default ? 'selected' : ''}>${b.name}</option>
  `).join('');

  container.innerHTML = `
    <div class="simulados-module">
      <!-- Setup Card -->
      <div class="card slide-up" id="simulado-setup">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h2 style="color: var(--color-primary); margin:0;">Simulados Oficiais — ${careerCfg.name}</h2>
            <p class="text-muted" style="font-size:0.85rem; margin-top:0.25rem;">
              Treine com o formato e critérios reais de pontuação da banca examinadora oficial.
            </p>
          </div>
          <button class="btn btn-secondary btn-sm" id="btn-history-toggle">Ver Histórico</button>
        </div>

        <!-- History List (Hidden by default) -->
        <div id="simulado-history-box" style="display:none; margin: 1rem 0; padding:1rem; background:var(--bg-tertiary); border-radius:var(--radius-md); border:1px solid var(--glass-border);">
          <h4 style="margin-bottom:0.75rem;">Histórico de Simulados Realizados</h4>
          <div id="history-items"><div class="loading-placeholder">Carregando histórico...</div></div>
        </div>

        <div class="grid-2" style="margin-top:1.25rem;">
          <!-- Left: Disciplines -->
          <div>
            <div class="form-group">
              <label style="font-weight:600;">Disciplinas do Simulado (${careerCfg.shortName})</label>
              <p class="text-muted" style="font-size:0.75rem; margin-bottom:0.5rem;">Selecione as matérias para compor a prova:</p>
              <div id="subject-checkboxes" style="display:flex; flex-direction:column; gap:0.4rem; max-height:220px; overflow-y:auto; padding:0.5rem; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                ${renderSimuladoCheckboxes(activeExamId)}
              </div>
            </div>
          </div>

          <!-- Right: Banca & Params -->
          <div>
            <div class="form-group">
              <label for="s-banca" style="font-weight:600;">Banca Examinadora</label>
              <select id="s-banca" class="form-control">
                ${bancasOptions}
              </select>
              <div id="banca-info-banner" style="margin-top:0.5rem; padding:0.65rem 0.85rem; background:rgba(27, 54, 93, 0.08); border-left:3px solid var(--color-primary); border-radius:2px; font-size:0.8rem; line-height:1.4;">
                <strong>Perfil Oficial:</strong> Questões estruturadas no estilo oficial da banca com alternativas (A-E) ou Certo/Errado, distratores e fundamentação rigorosa.
              </div>
            </div>

            <div class="grid-2">
              <div class="form-group">
                <label for="s-count" style="font-weight:600;">Qtd. de Questões</label>
                <select id="s-count" class="form-control">
                  <option value="5">5 questões (Express)</option>
                  <option value="10" selected>10 questões (Treino Padrão)</option>
                  <option value="20">20 questões (Intensivo)</option>
                  <option value="30">30 questões (Simulado Médio)</option>
                  <option value="50">50 questões (Simulado Completo)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="s-time" style="font-weight:600;">Tempo Máximo (min)</label>
                <input type="number" id="s-time" class="form-control" value="30" min="5" max="300" style="font-family:var(--font-mono);">
              </div>
            </div>
          </div>
        </div>

        <button id="btn-generate-simulado" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%; padding: 1rem; font-size: 1.1rem; background: var(--color-primary);">
          <span class="btn-text">Gerar Simulado</span>
          <span class="btn-loading" style="display:none;">Elaborando questões personalizadas da banca...</span>
        </button>
      </div>

      <!-- Simulado Running Screen -->
      <div id="simulado-run" class="slide-up" style="display:none;">
        <div class="card" style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span id="run-banca-badge" class="badge badge-primary">FGV</span>
              <h3 style="margin:0;">Simulado em Andamento</h3>
            </div>
            <p style="margin:0.25rem 0 0 0; color:var(--text-muted); font-size:0.85rem;" id="q-counter">Questão 1 de 10</p>
          </div>

          <div class="timer-display" id="s-timer" style="font-family:'Outfit',sans-serif; font-size:1.8rem; font-weight:700; color:#60A5FA;">
            00:30:00
          </div>

          <div style="display:flex; gap:0.5rem; align-items:center;">
            <button id="btn-print-simulado-running" class="btn btn-secondary btn-sm" title="Imprimir Caderno de Prova em 2 colunas para treino em papel">🖨️ Caderno de Prova (PDF)</button>
            <button id="btn-finish-simulado" class="btn btn-danger btn-sm">⏹️ Finalizar Prova</button>
          </div>
        </div>

        <!-- Question Navigation Grid -->
        <div class="card" style="margin-bottom:1rem; padding:0.75rem;">
          <div style="font-size:0.8rem; font-weight:600; color:var(--text-muted); margin-bottom:0.5rem;">Mapa de Questões:</div>
          <div id="questions-nav-map" style="display:flex; flex-wrap:wrap; gap:0.4rem;"></div>
        </div>

        <!-- Question Body Card -->
        <div class="card" style="min-height:360px; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; gap:0.5rem; align-items:center; margin-bottom:1rem;">
              <span id="q-subject-badge" class="badge badge-info">Direito Tributário</span>
              <span id="q-type-badge" class="badge badge-secondary">Múltipla Escolha</span>
            </div>

            <div id="q-text" class="markdown-content" style="font-size:1.05rem; line-height:1.6; margin-bottom:1.5rem;"></div>

            <div id="q-options" style="display:flex; flex-direction:column; gap:0.6rem;"></div>

            <!-- Cebraspe Leave Blank Button -->
            <div id="q-blank-action" style="margin-top:1rem; display:none;">
              <button id="btn-leave-blank" class="btn-blank-answer">⚪ Deixar esta questão em Branco (0 pontos no Cebraspe)</button>
            </div>
          </div>

          <!-- Bottom Navigation -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem; border-top:1px solid var(--glass-border); padding-top:1rem;">
            <button id="btn-prev-q" class="btn btn-secondary">← Anterior</button>
            <span id="q-nav-indicator" class="text-muted" style="font-size:0.85rem;">1 / 10</span>
            <button id="btn-next-q" class="btn btn-primary">Próxima →</button>
          </div>
        </div>
      </div>

      <!-- Simulado Results Screen -->
      <div id="simulado-results-screen" class="slide-up" style="display:none;">
        <div class="card fixation-results-card">
          <div class="card-header" style="text-align:center;">
            <h2>📊 Relatório de Desempenho do Simulado</h2>
            <p id="res-banca-title" class="text-muted" style="font-size:0.9rem;"></p>
          </div>

          <div class="fixation-score" id="sim-final-score" style="text-align:center; padding:1.5rem 0;"></div>

          <div id="sim-metrics-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:1rem; margin:1.5rem 0;"></div>

          <div id="sim-feedback-message" style="padding:1rem; background:var(--glass-bg); border-radius:var(--radius-md); border:1px solid var(--glass-border); margin-bottom:1.5rem;"></div>

          <!-- Full Review with Explanations -->
          <h3 style="margin-top:2rem; margin-bottom:1rem;">📝 Gabarito Comentado e Análise das Questões</h3>
          <div id="sim-full-review-list"></div>

          <div style="display:flex; gap:1rem; margin-top:2rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-primary" id="btn-new-simulado">🎯 Fazer Outro Simulado</button>
            <button class="btn btn-secondary" id="btn-print-simulado-results">🖨️ Caderno & Gabarito (PDF)</button>
            <button class="btn btn-secondary" id="btn-back-dashboard">🏠 Ir ao Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupBancaSelector();
  setupEventListeners();
  loadHistory();
}

// ============================================================
// BANCA SELECTOR & BANNERS
// ============================================================

function setupBancaSelector() {
  const select = document.getElementById('s-banca');
  const banner = document.getElementById('banca-info-banner');

  const banners = {
    'IBDO': '<strong>Perfil IBDO Projetos (Oficial SES-RJ / IASERJ 2026):</strong> Enunciados objetivos e diretos, 4 alternativas (A, B, C, D) e foco extremo na literalidade da Lei Seca do SUS (Leis 8.080 e 8.142), protocolos do Ministério da Saúde e estatutos estaduais.',
    'DEnsM': '<strong>Perfil DEnsM (Marinha do Brasil):</strong> Questões curtas e estritamente literais baseadas no Estatuto dos Militares (Lei 6.880/80), RDM e LESTA, com 5 alternativas (A-E) e pegadinhas de postos vs graduações.',
    'FGV': '<strong>Perfil FGV:</strong> Enunciados com casos concretos, situações práticas funcionais, 5 alternativas (A-E) e pegadinhas sutis de jurisprudência (STF/STJ).',
    'CEBRASPE': '<strong>Perfil CEBRASPE (CESPE):</strong> Formato Certo ou Errado com armadilhas de termos absolutistas ("sempre", "nunca"). ⚠️ <strong>Regra de Apenação Líquida:</strong> 1 errada anula 1 certa! É essencial treinar deixar itens duvidosos em branco.',
    'CESGRANRIO': '<strong>Perfil CESGRANRIO:</strong> Múltipla escolha (A-E) equilibrada e técnica, valorizando a interpretação clara da lei sem ambiguidades.',
    'FCC': '<strong>Perfil FCC:</strong> Foco na literalidade dos artigos de lei ("letra seca") combinada com casos hipotéticos objetivos.',
    'IDECAN': '<strong>Perfil IDECAN:</strong> Questões de saúde e administração com 4 a 5 alternativas, equilibrando teoria de protocolos com casos funcionais.',
    'IBFC': '<strong>Perfil IBFC:</strong> Estilo tradicional de concursos da área de saúde pública, com foco em memorização de leis e termos de enfermagem.'
  };

  const currentVal = select.value;
  if (banners[currentVal]) {
    banner.innerHTML = banners[currentVal];
  }

  select.addEventListener('change', () => {
    banner.innerHTML = banners[select.value] || '<strong>Perfil Oficial:</strong> Questões estruturadas no estilo da banca com gabarito fundamentado.';
  });
}

function setupEventListeners() {
  const generateBtn = document.getElementById('btn-generate-simulado');
  const finishBtn = document.getElementById('btn-finish-simulado');
  const prevBtn = document.getElementById('btn-prev-q');
  const nextBtn = document.getElementById('btn-next-q');
  const blankBtn = document.getElementById('btn-leave-blank');
  const historyToggle = document.getElementById('btn-history-toggle');
  const newSimBtn = document.getElementById('btn-new-simulado');
  const dashBtn = document.getElementById('btn-back-dashboard');

  historyToggle.addEventListener('click', () => {
    const box = document.getElementById('simulado-history-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  });

  generateBtn.addEventListener('click', startSimuladoCreation);
  finishBtn.addEventListener('click', () => {
    if (confirm('Deseja realmente finalizar e entregar o simulado agora?')) {
      submitSimulado();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderActiveQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSimulado && currentQuestionIndex < currentSimulado.questions.length - 1) {
      currentQuestionIndex++;
      renderActiveQuestion();
    }
  });

  blankBtn.addEventListener('click', () => {
    if (!currentSimulado) return;
    const q = currentSimulado.questions[currentQuestionIndex];
    userAnswers[q.id] = -1; // Blank
    renderActiveQuestion();
    updateNavMap();
  });

  const printRunningBtn = document.getElementById('btn-print-simulado-running');
  const printResultsBtn = document.getElementById('btn-print-simulado-results');

  printRunningBtn?.addEventListener('click', () => {
    if (currentSimulado && currentSimulado.questions && currentSimulado.questions.length > 0) {
      generatePrintExamBooklet(currentSimulado, currentSimulado.questions);
    } else {
      showToast('Nenhuma questão carregada para impressão.', 'warning');
    }
  });

  printResultsBtn?.addEventListener('click', () => {
    if (currentSimulado && currentSimulado.questions && currentSimulado.questions.length > 0) {
      generatePrintExamBooklet(currentSimulado, currentSimulado.questions);
    } else {
      showToast('Nenhuma questão carregada para impressão.', 'warning');
    }
  });

  newSimBtn?.addEventListener('click', () => {
    document.getElementById('simulado-results-screen').style.display = 'none';
    document.getElementById('simulado-setup').style.display = 'block';
  });

  dashBtn?.addEventListener('click', () => {
    window.location.hash = '#dashboard';
  });
}

// ============================================================
// CREATE & LOAD SIMULADO
// ============================================================

async function startSimuladoCreation() {
  const checkedBoxes = Array.from(document.querySelectorAll('input[name="sim-sub"]:checked'));
  const subjects = checkedBoxes.map(cb => cb.value);

  if (subjects.length === 0) {
    showToast('Selecione pelo menos uma disciplina.', 'warning');
    return;
  }

  const banca = document.getElementById('s-banca').value;
  const questionCount = parseInt(document.getElementById('s-count').value, 10);
  const timeLimitMinutes = parseInt(document.getElementById('s-time').value, 10);

  const btn = document.getElementById('btn-generate-simulado');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';

  try {
    showToast('🧠 Criando questões personalizadas com IA...', 'info');

    const res = await fetch('/api/simulados/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        banca,
        subjects,
        questionCount,
        timeLimitMinutes
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Falha ao criar simulado');
    }

    const data = await res.json();
    const simRes = await fetch(`/api/simulados/${data.simuladoId}`);
    currentSimulado = await simRes.json();

    userAnswers = {};
    currentQuestionIndex = 0;

    // Show run screen
    document.getElementById('simulado-setup').style.display = 'none';
    document.getElementById('simulado-results-screen').style.display = 'none';
    document.getElementById('simulado-run').style.display = 'block';

    const isCebraspe = banca.toUpperCase().includes('CEBRASPE');
    document.getElementById('run-banca-badge').textContent = banca;
    document.getElementById('q-blank-action').style.display = isCebraspe ? 'block' : 'none';

    // Start timer
    totalDurationSeconds = timeLimitMinutes * 60;
    remainingSeconds = totalDurationSeconds;
    startSimuladoTimer();

    renderActiveQuestion();
    updateNavMap();

  } catch (error) {
    console.error('Erro ao gerar simulado:', error);
    showToast(error.message || 'Erro ao gerar simulado.', 'error');
  } finally {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
  }
}

function startSimuladoTimer() {
  if (simuladoTimerInterval) clearInterval(simuladoTimerInterval);
  const display = document.getElementById('s-timer');

  const update = () => {
    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    display.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  update();

  simuladoTimerInterval = setInterval(() => {
    remainingSeconds--;
    update();

    if (remainingSeconds <= 0) {
      clearInterval(simuladoTimerInterval);
      showToast('⏰ Tempo esgotado! Finalizando simulado...', 'warning');
      submitSimulado();
    }
  }, 1000);
}

// ============================================================
// ACTIVE QUESTION RENDERING
// ============================================================

function renderActiveQuestion() {
  if (!currentSimulado || !currentSimulado.questions) return;
  const questions = currentSimulado.questions;
  const q = questions[currentQuestionIndex];

  document.getElementById('q-counter').textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
  document.getElementById('q-nav-indicator').textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
  document.getElementById('q-subject-badge').textContent = q.subject || 'Geral';
  document.getElementById('q-type-badge').textContent = q.type === 'certo_errado' ? 'Certo ou Errado' : 'Múltipla Escolha (A-E)';

  document.getElementById('q-text').innerHTML = renderMarkdown(q.question_text);

  const optionsContainer = document.getElementById('q-options');
  const options = JSON.parse(q.options || '[]');
  const selected = userAnswers[q.id];

  optionsContainer.innerHTML = options.map((opt, idx) => {
    const letter = q.type === 'certo_errado' ? (idx === 0 ? 'C' : 'E') : String.fromCharCode(65 + idx);
    const isSelected = selected === idx;

    return `
      <button type="button" class="question-option ${isSelected ? 'active-selection' : ''}" data-idx="${idx}">
        <span class="option-letter">${letter}</span>
        <span class="option-text">${opt}</span>
      </button>
    `;
  }).join('');

  optionsContainer.querySelectorAll('.question-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      userAnswers[q.id] = idx;
      renderActiveQuestion();
      updateNavMap();
    });
  });

  document.getElementById('btn-prev-q').disabled = currentQuestionIndex === 0;
  document.getElementById('btn-next-q').disabled = currentQuestionIndex === questions.length - 1;
}

function updateNavMap() {
  if (!currentSimulado || !currentSimulado.questions) return;
  const container = document.getElementById('questions-nav-map');

  container.innerHTML = currentSimulado.questions.map((q, idx) => {
    const ans = userAnswers[q.id];
    const isCurrent = idx === currentQuestionIndex;
    let bg = 'var(--bg-tertiary)';
    let color = 'var(--text-primary)';

    if (ans === -1) {
      bg = 'rgba(245, 158, 11, 0.2)'; // Blank
      color = '#FBBF24';
    } else if (ans !== undefined) {
      bg = 'rgba(59, 130, 246, 0.3)'; // Answered
      color = '#60A5FA';
    }

    const border = isCurrent ? '2px solid #3B82F6' : '1px solid var(--glass-border)';

    return `
      <button class="nav-q-btn" data-idx="${idx}" style="width:32px; height:32px; border-radius:6px; border:${border}; background:${bg}; color:${color}; font-size:0.8rem; font-weight:600; cursor:pointer;">
        ${idx + 1}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.nav-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentQuestionIndex = parseInt(btn.dataset.idx, 10);
      renderActiveQuestion();
      updateNavMap();
    });
  });
}

// ============================================================
// FINISH & RESULTS
// ============================================================

async function submitSimulado() {
  if (simuladoTimerInterval) {
    clearInterval(simuladoTimerInterval);
    simuladoTimerInterval = null;
  }

  const timeSpent = totalDurationSeconds - remainingSeconds;

  try {
    const res = await fetch(`/api/simulados/${currentSimulado.id}/finish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answers: userAnswers,
        timeSpentSeconds: Math.max(0, timeSpent)
      })
    });

    if (!res.ok) throw new Error('Falha ao salvar respostas');
    const result = await res.json();

    document.getElementById('simulado-run').style.display = 'none';
    document.getElementById('simulado-results-screen').style.display = 'block';

    renderResults(result);

  } catch (error) {
    console.error('Erro ao finalizar:', error);
    showToast('Erro ao submeter simulado.', 'error');
  }
}

function renderResults(res) {
  document.getElementById('res-banca-title').textContent = `Banca: ${res.banca} • ${res.total} questões`;

  const scoreContainer = document.getElementById('sim-final-score');
  const metricsContainer = document.getElementById('sim-metrics-grid');
  const feedbackMsg = document.getElementById('sim-feedback-message');
  const reviewContainer = document.getElementById('sim-full-review-list');

  if (res.isCebraspe) {
    scoreContainer.innerHTML = `
      <div class="score-number" style="color:${res.notaLiquida > 0 ? '#34D399' : '#EF4444'};">
        ${res.notaLiquida} <span style="font-size:1.5rem; color:var(--text-muted);">pts líquidos</span>
      </div>
      <div class="score-detail">Cálculo Cebraspe: ${res.acertos} acertos - ${res.erros} erros = ${res.notaLiquida} pontos</div>
    `;
  } else {
    scoreContainer.innerHTML = `
      <div class="score-number" style="color:${res.accuracyPct >= 70 ? '#34D399' : '#FBBF24'};">
        ${res.acertos}/${res.total}
      </div>
      <div class="score-detail">${res.accuracyPct}% de acertos brutos</div>
    `;
  }

  metricsContainer.innerHTML = `
    <div class="stat-pill">
      <span class="stat-pill-label">✅ Acertos</span>
      <span class="stat-pill-val" style="color:#34D399;">${res.acertos}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">❌ Erros</span>
      <span class="stat-pill-val" style="color:#EF4444;">${res.erros}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">⚪ Em Branco</span>
      <span class="stat-pill-val" style="color:#FBBF24;">${res.emBranco}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-label">🎯 Aproveitamento</span>
      <span class="stat-pill-val" style="color:#60A5FA;">${res.accuracyPct}%</span>
    </div>
  `;

  feedbackMsg.innerHTML = `
    <h4 style="margin:0 0 0.5rem 0;">🔍 Diagnóstico Estratégico</h4>
    <p style="margin:0; font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
      ${res.accuracyPct >= 80 
        ? '🏆 Excelente desempenho! Você demonstrou alto domínio das pegadinhas da banca e sólida fundamentação jurídica.' 
        : res.accuracyPct >= 65 
        ? '📈 Bom rendimento. Observe com atenção o gabarito comentado abaixo para ajustar os pontos onde a banca tentou induzir ao erro.' 
        : '⚠️ Desempenho com margem para evolução. Revise com calma as justificativas abaixo e reforce o estudo dos artigos de lei e jurisprudência.'}
    </p>
  `;

  // Render review questions
  reviewContainer.innerHTML = currentSimulado.questions.map((q, idx) => {
    const options = JSON.parse(q.options || '[]');
    const selected = userAnswers[q.id];
    const isCorrect = selected === q.correct_index;
    const isBlank = selected === undefined || selected === null || selected === -1;

    const statusBadge = isBlank
      ? '<span class="badge badge-warning">⚪ Em Branco (0 pts)</span>'
      : isCorrect
      ? '<span class="badge badge-success">✅ Acertou (+1 pt)</span>'
      : '<span class="badge badge-danger">❌ Errou (-1 pt)</span>';

    return `
      <div class="card" style="margin-bottom:1rem; border-left:4px solid ${isBlank ? '#F59E0B' : isCorrect ? '#10B981' : '#EF4444'};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <div style="display:flex; gap:0.5rem;">
            <span class="badge badge-primary">Q${idx + 1}</span>
            <span class="badge badge-info">${q.subject}</span>
          </div>
          ${statusBadge}
        </div>

        <div style="font-size:0.95rem; line-height:1.6; margin-bottom:1rem;">${renderMarkdown(q.question_text)}</div>

        <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.9rem;">
          ${options.map((opt, optIdx) => {
            const letter = q.type === 'certo_errado' ? (optIdx === 0 ? 'C' : 'E') : String.fromCharCode(65 + optIdx);
            const isGabarito = optIdx === q.correct_index;
            const isUserChoice = optIdx === selected;

            let border = 'var(--glass-border)';
            let bg = 'transparent';

            if (isGabarito) {
              border = '#10B981';
              bg = 'rgba(16, 185, 129, 0.15)';
            } else if (isUserChoice && !isCorrect) {
              border = '#EF4444';
              bg = 'rgba(239, 68, 68, 0.15)';
            }

            return `
              <div style="padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid ${border}; background:${bg}; display:flex; align-items:center; gap:0.6rem;">
                <strong>${letter})</strong>
                <span>${opt}</span>
                ${isGabarito ? '<span style="margin-left:auto; color:#34D399; font-weight:600; font-size:0.8rem;">GABARITO OFICIAL</span>' : ''}
                ${isUserChoice && !isCorrect ? '<span style="margin-left:auto; color:#F87171; font-weight:600; font-size:0.8rem;">SUA MARCAÇÃO</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>

        <div style="margin-top:1rem; padding:0.85rem; background:rgba(30,41,59,0.5); border-radius:var(--radius-sm); border-top:1px dashed var(--glass-border);">
          <div style="font-weight:700; color:#60A5FA; margin-bottom:0.35rem; font-size:0.85rem;">💡 Comentário & Fundamentação da Banca:</div>
          <div style="font-size:0.88rem; line-height:1.5; color:var(--text-secondary);">${q.explanation || 'Comentário não disponível.'}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// HISTORY
// ============================================================

async function loadHistory() {
  const container = document.getElementById('history-items');
  if (!container) return;

  try {
    const res = await fetch('/api/simulados');
    if (!res.ok) return;

    const data = await res.json();
    if (data.length === 0) {
      container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">Nenhum simulado finalizado ainda.</p>`;
      return;
    }

    container.innerHTML = data.slice(0, 5).map(s => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0; border-bottom:1px solid var(--glass-border); font-size:0.85rem;">
        <div>
          <strong>${s.banca || 'FGV'}</strong> • ${s.question_count} questões
          <div class="text-muted" style="font-size:0.75rem;">${formatDate(s.created_at)}</div>
        </div>
        <div>
          <span class="badge badge-success">Nota: ${s.score} pts</span>
        </div>
      </div>
    `).join('');

  } catch (e) {
    container.innerHTML = `<p class="text-muted">Histórico indisponível.</p>`;
  }
}
