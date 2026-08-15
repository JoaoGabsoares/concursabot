// Módulo Caderno de Erros Inteligente — Re-treino Estratégico de Falhas
import { showToast, formatDate, getSubjectColor } from './utils.js';
import { getActiveCareerId, getCareerConfig } from './careers.js';

let errorQuestions = [];
let activeFilterSubject = 'all';

export async function render(container) {
  const activeExamId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeExamId);

  container.innerHTML = `
    <div class="error-notebook-view slide-up">
      <!-- Top Banner -->
      <div class="card" style="border-top: 3px solid #EF4444; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="badge badge-danger">📕 Re-treino Ativo</span>
              <span class="badge badge-secondary">${careerCfg.shortName}</span>
            </div>
            <h2 style="margin: 0.5rem 0 0.25rem 0; font-size: 1.5rem; color: var(--text-primary);">
              Caderno de Erros Inteligente
            </h2>
            <p class="text-muted" style="margin: 0; font-size: 0.9rem;">
              Transforme falhas em acertos. Todas as questões erradas nos seus simulados e treinos reunidas para você dominar.
            </p>
          </div>

          <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
            <button class="btn btn-secondary btn-sm" id="btn-refresh-errors">🔄 Atualizar</button>
            <button class="btn btn-warning btn-sm" id="btn-create-error-simulado">⚡ Gerar Simulado dos Erros</button>
            <button class="btn btn-primary btn-sm" id="btn-retrain-all">🚀 Modo Rápido</button>
          </div>
        </div>

        <!-- Metric Counters -->
        <div class="grid-3" style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--glass-border);">
          <div class="stat-card">
            <span class="stat-label">Total de Questões a Superar</span>
            <span class="stat-value" id="stat-total-errors" style="color:#EF4444;">--</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">Disciplina Mais Crítica</span>
            <span class="stat-value" id="stat-top-subject" style="font-size:1.1rem; color:#F59E0B;">--</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">Status de Revisão</span>
            <span class="stat-value" id="stat-review-status" style="font-size:1.1rem; color:#10B981;">Em Treinamento</span>
          </div>
        </div>
      </div>

      <!-- Filters Row -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem;">
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <label style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Filtrar Matéria:</label>
          <select id="select-error-subject" class="form-control" style="padding:0.4rem 0.75rem; font-size:0.85rem;">
            <option value="all">Todas as Matérias</option>
          </select>
        </div>
        <div id="error-count-indicator" class="text-muted" style="font-size:0.85rem;">
          Carregando questões...
        </div>
      </div>

      <!-- Questions List Container -->
      <div id="error-items-list" style="display:flex; flex-direction:column; gap:1rem;">
        <div class="loading-placeholder">Buscando histórico de erros...</div>
      </div>
    </div>
  `;

  setupListeners();
  await loadErrorNotebook();
}

async function loadErrorNotebook() {
  const listContainer = document.getElementById('error-items-list');
  const countIndicator = document.getElementById('error-count-indicator');
  const totalErrorsElem = document.getElementById('stat-total-errors');
  const topSubjectElem = document.getElementById('stat-top-subject');
  const subjectSelect = document.getElementById('select-error-subject');

  try {
    const userId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
    const res = await fetch(`/api/questions/error-notebook?user_id=${userId}`, {
      headers: {
        'x-user-id': userId,
        'x-invite-pin': localStorage.getItem('concursa_invite_pin') || ''
      }
    });

    if (!res.ok) throw new Error('Falha ao carregar caderno de erros.');
    const data = await res.json();
    errorQuestions = data.errors || [];

    totalErrorsElem.textContent = errorQuestions.length;

    if (errorQuestions.length === 0) {
      countIndicator.textContent = '0 questões pendentes';
      topSubjectElem.textContent = 'Nenhum erro pendente 🎉';
      listContainer.innerHTML = `
        <div class="card" style="text-align:center; padding:3rem 1.5rem;">
          <div style="font-size:3rem; margin-bottom:0.75rem;">🏆</div>
          <h3 style="margin:0 0 0.5rem 0;">Seu Caderno de Erros está Vazio!</h3>
          <p class="text-muted" style="max-width:480px; margin:0 auto 1.5rem auto;">
            Você ainda não possui erros registrados ou já superou todas as questões pendentes. Continue fazendo simulados e treinos!
          </p>
          <a href="#simulados" class="btn btn-primary">🎯 Fazer Novo Simulado</a>
        </div>
      `;
      return;
    }

    // Populate subject filter options
    const subjectCounts = {};
    errorQuestions.forEach(q => {
      subjectCounts[q.subject] = (subjectCounts[q.subject] || 0) + 1;
    });

    let topSub = Object.keys(subjectCounts)[0];
    let maxCount = 0;
    for (const [sub, count] of Object.entries(subjectCounts)) {
      if (count > maxCount) {
        maxCount = count;
        topSub = sub;
      }
    }
    topSubjectElem.textContent = `${topSub} (${maxCount}x)`;

    subjectSelect.innerHTML = `<option value="all">Todas as Matérias (${errorQuestions.length})</option>` +
      Object.entries(subjectCounts).map(([sub, count]) => `
        <option value="${sub}" ${activeFilterSubject === sub ? 'selected' : ''}>${sub} (${count})</option>
      `).join('');

    renderQuestionsList();
  } catch (err) {
    console.error(err);
    listContainer.innerHTML = `<div class="card error-state">Erro ao carregar caderno de erros: ${err.message}</div>`;
  }
}

function renderQuestionsList() {
  const listContainer = document.getElementById('error-items-list');
  const countIndicator = document.getElementById('error-count-indicator');

  const filtered = activeFilterSubject === 'all' 
    ? errorQuestions 
    : errorQuestions.filter(q => q.subject === activeFilterSubject);

  countIndicator.textContent = `Exibindo ${filtered.length} de ${errorQuestions.length} questões`;

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div class="card" style="text-align:center; padding:2rem;">Nenhuma questão encontrada para a matéria selecionada.</div>`;
    return;
  }

  const letters = ['A', 'B', 'C', 'D', 'E'];

  listContainer.innerHTML = filtered.map((q, idx) => {
    let options = [];
    try {
      options = Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]');
    } catch(e) {
      options = ['Certo', 'Errado'];
    }

    const optionsHtml = options.map((opt, oIdx) => `
      <div class="option-item" data-qid="${q.id}" data-oidx="${oIdx}" style="padding:0.75rem 1rem; border:1px solid var(--glass-border); border-radius:var(--radius-sm); cursor:pointer; background:var(--glass-bg); margin-bottom:0.4rem; transition:all 0.15s ease;">
        <strong>(${letters[oIdx] || oIdx + 1})</strong> ${opt}
      </div>
    `).join('');

    return `
      <div class="card error-question-card" id="error-card-${q.id}" style="border-left: 4px solid #EF4444; position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <span class="badge" style="background:${getSubjectColor(q.subject)}20; color:${getSubjectColor(q.subject)}; font-weight:600;">
              ${q.subject}
            </span>
            ${q.banca ? `<span class="badge badge-secondary">${q.banca}</span>` : ''}
            <span class="badge badge-danger">⚠️ ${q.error_count || 1} erro(s)</span>
          </div>
          <span class="text-muted" style="font-size:0.75rem;">Último erro: ${formatDate(q.answered_at)}</span>
        </div>

        <div style="font-size:1rem; line-height:1.6; margin-bottom:1.25rem; color:var(--text-primary);">
          ${q.question_text}
        </div>

        <div class="options-container" id="opts-${q.id}" style="margin-bottom:1rem;">
          ${optionsHtml}
        </div>

        <!-- Feedback & Explanation Box -->
        <div class="feedback-box" id="feedback-${q.id}" style="display:none; padding:1rem; border-radius:var(--radius-sm); margin-top:0.75rem;"></div>
      </div>
    `;
  }).join('');

  // Attach interactive answer event handlers
  document.querySelectorAll('.option-item').forEach(item => {
    item.addEventListener('click', () => {
      const qid = Number(item.dataset.qid);
      const oidx = Number(item.dataset.oidx);
      handleRetrainAnswer(qid, oidx);
    });
  });
}

async function handleRetrainAnswer(qid, selectedAnswer) {
  const card = document.getElementById(`error-card-${qid}`);
  const feedbackBox = document.getElementById(`feedback-${qid}`);
  const optionsDiv = document.getElementById(`opts-${qid}`);
  if (!card || !feedbackBox) return;

  const q = errorQuestions.find(item => item.id === qid);
  if (!q) return;

  const isCorrect = selectedAnswer === q.correct_index;

  // Visual feedback on options
  const optionElements = optionsDiv.querySelectorAll('.option-item');
  optionElements.forEach((opt, idx) => {
    opt.style.pointerEvents = 'none'; // disable clicking
    if (idx === q.correct_index) {
      opt.style.borderColor = '#10B981';
      opt.style.background = 'rgba(16, 185, 129, 0.15)';
      opt.style.color = '#10B981';
    } else if (idx === selectedAnswer && !isCorrect) {
      opt.style.borderColor = '#EF4444';
      opt.style.background = 'rgba(239, 68, 68, 0.15)';
      opt.style.color = '#EF4444';
    }
  });

  // Show detailed feedback box
  feedbackBox.style.display = 'block';
  if (isCorrect) {
    card.style.borderLeftColor = '#10B981';
    feedbackBox.style.background = 'rgba(16, 185, 129, 0.1)';
    feedbackBox.style.border = '1px solid #10B981';
    feedbackBox.innerHTML = `
      <div style="font-weight:700; color:#10B981; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.4rem;">
        ✅ Parabéns! Você superou esta questão!
      </div>
      <div style="font-size:0.88rem; line-height:1.5; color:var(--text-secondary);">
        <strong>Fundamentação:</strong> ${q.explanation || 'Excelente fixação do conteúdo.'}
      </div>
    `;
    showToast('Questão superada com sucesso! +20 XP', 'success');
  } else {
    feedbackBox.style.background = 'rgba(239, 68, 68, 0.1)';
    feedbackBox.style.border = '1px solid #EF4444';
    feedbackBox.innerHTML = `
      <div style="font-weight:700; color:#EF4444; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.4rem;">
        ❌ Resposta Incorreta. Atenção à regra:
      </div>
      <div style="font-size:0.88rem; line-height:1.5; color:var(--text-secondary);">
        <strong>Comentário:</strong> ${q.explanation || 'Revise a norma e tente novamente.'}
      </div>
    `;
    showToast('Ainda não foi dessa vez. Revise a explicação!', 'warning');
  }

  // Record answer in database
  try {
    const userId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
    await fetch('/api/questions/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': userId,
        'x-invite-pin': localStorage.getItem('concursa_invite_pin') || ''
      },
      body: JSON.stringify({
        questionId: qid,
        selectedAnswer
      })
    });
  } catch(e) {}
}

function setupListeners() {
  document.getElementById('btn-refresh-errors')?.addEventListener('click', loadErrorNotebook);
  
  document.getElementById('select-error-subject')?.addEventListener('change', (e) => {
    activeFilterSubject = e.target.value;
    renderQuestionsList();
  });

  document.getElementById('btn-retrain-all')?.addEventListener('click', () => {
    const firstCard = document.querySelector('.error-question-card');
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Modo re-treino rápido iniciado! Resolva as questões abaixo.', 'info');
    }
  });

  document.getElementById('btn-create-error-simulado')?.addEventListener('click', async () => {
    if (!errorQuestions || errorQuestions.length === 0) {
      showToast('Nenhum erro registrado para gerar simulado.', 'warning');
      return;
    }
    const btn = document.getElementById('btn-create-error-simulado');
    btn.disabled = true;
    btn.innerHTML = '⏳ Gerando Simulado...';

    try {
      const res = await api.simulados.createFromErrors(15);
      if (res && res.simuladoId) {
        showToast(`🎯 Simulado de re-treino com ${res.count} questões gerado!`, 'success');
        window.location.hash = '#simulados';
      } else {
        showToast('Não foi possível gerar o simulado de erros.', 'error');
      }
    } catch (err) {
      console.error('Erro ao gerar simulado dos erros:', err);
      showToast('Erro ao criar simulado de re-treino.', 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '⚡ Gerar Simulado dos Erros';
    }
  });
}
