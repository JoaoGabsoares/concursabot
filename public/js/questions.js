import { api } from './api.js';
import { renderMarkdown, showToast } from './utils.js';
import { getCareerConfig, getActiveCareerId, getCareerSubjectGrouping } from './careers.js';

export async function render(container) {
  const activeCareerId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeCareerId);
  const grouping = getCareerSubjectGrouping(careerCfg);

  const bancasOptions = (careerCfg.bancas || []).map(b => `
    <option value="${b.id}" ${b.default ? 'selected' : ''}>${b.name}</option>
  `).join('');

  let subjectsHtml = '';
  if (grouping.wave1.length > 0) {
    subjectsHtml += `<optgroup label="${grouping.optgroup1}">`;
    grouping.wave1.forEach((s, idx) => {
      subjectsHtml += `<option value="${s.subject}" ${idx === 0 ? 'selected' : ''}>${s.subject} (${s.questions}q)</option>`;
    });
    subjectsHtml += `</optgroup>`;
  }
  if (grouping.wave2.length > 0) {
    subjectsHtml += `<optgroup label="${grouping.optgroup2}">`;
    grouping.wave2.forEach((s) => {
      subjectsHtml += `<option value="${s.subject}">${s.subject} (${s.questions}q)</option>`;
    });
    subjectsHtml += `</optgroup>`;
  }

  container.innerHTML = `
    <div class="grid-4 slide-up" style="margin-bottom: 2rem;">
      <div class="card" style="grid-column: span 1;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <h3 style="color:var(--color-questions); margin:0;">⚡ Banco de Questões</h3>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">
          Concurso ativo: <strong style="color:var(--text-primary);">${careerCfg.name}</strong>
        </div>
        
        <div class="form-group">
          <label for="q-banca">Banca Examinadora</label>
          <select id="q-banca" class="form-control">
            ${bancasOptions}
          </select>
        </div>

        <div class="form-group">
          <label for="q-subject">Disciplina</label>
          <select id="q-subject" class="form-control">
            ${subjectsHtml}
          </select>
        </div>

        <div class="form-group">
          <label for="q-topic">Tópico Específico (Opcional)</label>
          <input type="text" id="q-topic" class="form-control" placeholder="Ex: Estatuto dos Militares art. 14, Riachuelo, Crase...">
        </div>

        <div class="form-group">
          <label for="q-count">Quantidade</label>
          <select id="q-count" class="form-control">
            <option value="3">3 Questões Rápidas</option>
            <option value="5" selected>5 Questões</option>
            <option value="10">10 Questões</option>
          </select>
        </div>

        <button id="btn-generate" class="btn btn-primary" style="width:100%; margin-top:1rem;">
          <span class="btn-text">⚡ Gerar Bateria com IA</span>
          <span class="btn-loading" style="display:none;">⏳ Formulando...</span>
        </button>
      </div>
      
      <div class="card" style="grid-column: span 3; position:relative;">
        <div id="loading-state" style="display:none; text-align:center; padding:4rem;">
          <div class="loading-spinner"></div>
          <p style="color:var(--text-muted); margin-top:1rem;">A IA está elaborando questões no perfil estrito da banca...</p>
        </div>
        
        <div id="empty-state" style="text-align:center; padding:4rem;">
          <div style="font-size:3rem; margin-bottom:1rem; opacity:0.5;">📝</div>
          <h3 style="color:var(--text-muted)">Nenhuma bateria ativa</h3>
          <p style="color:var(--text-muted)">Configure a banca e a disciplina ao lado e clique em Gerar.</p>
        </div>
        
        <div id="quiz-container" style="display:none;"></div>
      </div>
    </div>
  `;

  const btnGenerate = document.getElementById('btn-generate');
  const loading = document.getElementById('loading-state');
  const empty = document.getElementById('empty-state');
  const quizContainer = document.getElementById('quiz-container');

  btnGenerate.addEventListener('click', async () => {
    empty.style.display = 'none';
    quizContainer.style.display = 'none';
    loading.style.display = 'block';
    
    const banca = document.getElementById('q-banca').value;
    const subject = document.getElementById('q-subject').value;
    const topic = document.getElementById('q-topic').value || 'Geral';
    const count = parseInt(document.getElementById('q-count').value, 10);
    const type = banca.toUpperCase().includes('CEBRASPE') ? 'certo_errado' : 'multiple_choice';

    try {
      const data = await api.questions.generate(subject, topic, banca, count, type);
      renderQuiz(data.questions, banca);
    } catch (e) {
      showToast('Erro ao gerar questões. Verifique se o servidor está ativo.', 'error');
      loading.style.display = 'none';
      empty.style.display = 'block';
    }
  });

  function renderQuiz(questions, banca) {
    loading.style.display = 'none';
    quizContainer.style.display = 'block';
    quizContainer.innerHTML = '';
    
    questions.forEach((q, index) => {
      const qCard = document.createElement('div');
      qCard.className = 'card';
      qCard.style.marginBottom = '1.5rem';
      qCard.style.borderLeft = '3px solid var(--color-questions)';
      
      const isCE = q.options && q.options.length === 2 && (q.options[0] === 'Certo' || q.options[0] === 'Errado');

      let optionsHtml = '';
      (q.options || []).forEach((opt, optIndex) => {
        const letter = isCE ? (optIndex === 0 ? 'C' : 'E') : String.fromCharCode(65 + optIndex);
        optionsHtml += `
          <button class="question-option" data-qindex="${index}" data-optindex="${optIndex}">
            <span class="option-letter">${letter}</span>
            <span class="option-text">${opt}</span>
          </button>
        `;
      });
      
      qCard.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <div style="display:flex; gap:0.5rem;">
            <span class="badge badge-primary">Questão ${index + 1}</span>
            <span class="badge badge-info">${q.subject || document.getElementById('q-subject').value}</span>
          </div>
          <span class="badge badge-secondary">${banca}</span>
        </div>
        <div class="question-text" style="font-size:1.05rem; line-height:1.6; margin-bottom:1.5rem;">
          ${renderMarkdown(q.text || q.question_text)}
        </div>
        <div class="question-options">
          ${optionsHtml}
        </div>
        <div class="explanation markdown-content" style="display:none; margin-top:1.5rem; padding:1rem; border-radius:var(--radius-sm); background:rgba(30,41,59,0.5); border:1px solid var(--glass-border);">
          <h4 style="color:var(--color-questions); margin-bottom:0.5rem;">💡 Gabarito Comentado</h4>
          <div>${renderMarkdown(q.explanation || '')}</div>
        </div>
      `;
      
      quizContainer.appendChild(qCard);
      
      const btns = qCard.querySelectorAll('.question-option');
      btns.forEach(btn => {
        btn.addEventListener('click', async function() {
          if (qCard.classList.contains('answered')) return;
          qCard.classList.add('answered');
          
          const selectedIdx = parseInt(this.getAttribute('data-optindex'), 10);
          const correctIdx = q.correctIndex !== undefined ? q.correctIndex : q.correct_index;
          const isCorrect = selectedIdx === correctIdx;
          
          btns.forEach(b => {
            const idx = parseInt(b.getAttribute('data-optindex'), 10);
            b.style.pointerEvents = 'none';
            if (idx === correctIdx) {
              b.style.borderColor = '#10B981';
              b.style.background = 'rgba(16, 185, 129, 0.2)';
            } else if (idx === selectedIdx && idx !== correctIdx) {
              b.style.borderColor = '#EF4444';
              b.style.background = 'rgba(239, 68, 68, 0.2)';
            }
          });
          
          qCard.querySelector('.explanation').style.display = 'block';

          // Persiste resposta no backend se o ID existir
          if (q.id) {
            try {
              await api.questions.answer(q.id, selectedIdx);
              if (isCorrect) {
                showToast('✨ Questão correta! (+10 XP)', 'success');
              }
            } catch (err) {
              console.warn('Erro ao salvar resposta:', err);
            }
          }

          // Rola suavemente para a próxima questão não respondida se houver
          setTimeout(() => {
            const nextUnanswered = quizContainer.querySelector('.card:not(.answered)');
            if (nextUnanswered) {
              nextUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 350);
        });
      });
    });
  }

  // Listener Global de Teclas de Atalho (1-5 ou A-E)
  if (window._questionsKeyHandler) {
    window.removeEventListener('keydown', window._questionsKeyHandler);
  }

  window._questionsKeyHandler = function(e) {
    // Ignora se o usuário estiver digitando em um campo de texto ou select
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    
    // Suporta tanto quiz-container quanto questions-quiz
    const quizEl = document.getElementById('quiz-container') || document.getElementById('questions-quiz');
    if (!quizEl || quizEl.style.display === 'none') return;

    const key = e.key.toUpperCase();
    let optIndex = -1;

    if (['1', 'A'].includes(key)) optIndex = 0;
    else if (['2', 'B'].includes(key)) optIndex = 1;
    else if (['3', 'C'].includes(key)) optIndex = 2;
    else if (['4', 'D'].includes(key)) optIndex = 3;
    else if (['5', 'E'].includes(key)) optIndex = 4;

    if (optIndex >= 0) {
      const activeCard = quizEl.querySelector('.card:not(.answered)');
      if (activeCard) {
        const targetBtn = activeCard.querySelector(`.question-option[data-optindex="${optIndex}"]`);
        if (targetBtn) {
          e.preventDefault();
          targetBtn.click();
        }
      }
    }
  };

  window.addEventListener('keydown', window._questionsKeyHandler);
}
