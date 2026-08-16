import { api } from './api.js';
import { showToast } from './utils.js';

export async function render(container) {
  const activeCareer = localStorage.getItem('concursa_active_exam') || 'atrfb';
  
  container.innerHTML = `
    <div class="slide-up">
      <!-- Top Header & Metrics -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
            <span style="font-size:1.5rem;">🎯</span>
            <h2 style="margin:0; font-size:1.6rem; color:var(--text-primary);">Caderno de Erros Inteligente</h2>
          </div>
          <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">
            Transforme suas falhas em aprovação. Refaça questões erradas até dominar 100% dos conceitos.
          </p>
        </div>
        <button id="btn-start-error-drill" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; font-weight:700; padding:0.6rem 1.25rem;">
          <span>⚡ Treinar Erros Pendentes</span>
        </button>
      </div>

      <!-- Stats Bar -->
      <div class="grid-4" style="margin-bottom:2rem;">
        <div class="card" style="padding:1.25rem; text-align:center;">
          <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-weight:700;">Total Registrado</div>
          <div id="stat-total-errors" style="font-size:2rem; font-weight:800; color:var(--text-primary); font-family:var(--font-mono); margin-top:0.25rem;">-</div>
        </div>
        <div class="card" style="padding:1.25rem; text-align:center; border-left:4px solid #EF4444;">
          <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:#EF4444; font-weight:700;">Erros Pendentes</div>
          <div id="stat-pending-errors" style="font-size:2rem; font-weight:800; color:#EF4444; font-family:var(--font-mono); margin-top:0.25rem;">-</div>
        </div>
        <div class="card" style="padding:1.25rem; text-align:center; border-left:4px solid #10B981;">
          <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:#10B981; font-weight:700;">Superadas / Dominadas</div>
          <div id="stat-mastered-errors" style="font-size:2rem; font-weight:800; color:#10B981; font-family:var(--font-mono); margin-top:0.25rem;">-</div>
        </div>
        <div class="card" style="padding:1.25rem; text-align:center; border-left:4px solid var(--color-primary);">
          <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-primary); font-weight:700;">Taxa de Superação</div>
          <div id="stat-overcome-rate" style="font-size:2rem; font-weight:800; color:var(--color-primary); font-family:var(--font-mono); margin-top:0.25rem;">0%</div>
        </div>
      </div>

      <!-- Filter Controls -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div style="display:flex; gap:0.5rem;" id="error-status-filters">
          <button class="btn btn-secondary btn-sm active" data-status="pending">🔴 Pendentes</button>
          <button class="btn btn-secondary btn-sm" data-status="mastered">🟢 Dominadas (100%)</button>
          <button class="btn btn-secondary btn-sm" data-status="all">Todos</button>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <label style="font-size:0.85rem; font-weight:600; color:var(--text-secondary);">Filtrar Matéria:</label>
          <select id="select-subject-filter" class="form-control" style="padding:0.35rem 0.75rem; font-size:0.85rem; width:auto;">
            <option value="all">Todas as Disciplinas</option>
          </select>
        </div>
      </div>

      <!-- Error Questions List -->
      <div id="error-items-list" style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="text-align:center; padding:3rem; color:var(--text-muted);">Carregando questões do Caderno de Erros...</div>
      </div>
    </div>
  `;

  let currentStatus = 'pending';
  let currentSubject = 'all';
  let errorItems = [];

  async function loadData() {
    try {
      const res = await api.cadernoErros.list({ status: currentStatus, subject: currentSubject });
      if (!res.success) return;

      const { stats, items } = res;
      errorItems = items || [];

      document.getElementById('stat-total-errors').textContent = stats.total;
      document.getElementById('stat-pending-errors').textContent = stats.pending;
      document.getElementById('stat-mastered-errors').textContent = stats.mastered;
      document.getElementById('stat-overcome-rate').textContent = `${stats.overcomeRate}%`;

      // Populate subject filter if not done yet
      const subjectSelect = document.getElementById('select-subject-filter');
      if (subjectSelect.options.length <= 1) {
        const subjects = [...new Set(errorItems.map(i => i.subject).filter(Boolean))];
        subjects.forEach(sub => {
          const opt = document.createElement('option');
          opt.value = sub;
          opt.textContent = sub;
          subjectSelect.appendChild(opt);
        });
      }

      renderList();
    } catch (err) {
      document.getElementById('error-items-list').innerHTML = `<div style="text-align:center; color:var(--color-danger); padding:2rem;">Erro ao carregar caderno de erros.</div>`;
    }
  }

  function renderList() {
    const listEl = document.getElementById('error-items-list');

    if (errorItems.length === 0) {
      listEl.innerHTML = `
        <div class="card" style="text-align:center; padding:4rem 1.5rem;">
          <div style="font-size:3.5rem; margin-bottom:1rem;">🎉</div>
          <h3 style="color:var(--text-primary); margin-bottom:0.5rem;">Nenhum erro ${currentStatus === 'pending' ? 'pendente' : 'nesta categoria'}!</h3>
          <p style="color:var(--text-secondary); max-width:450px; margin:0 auto 1.5rem auto; font-size:0.9rem;">
            ${currentStatus === 'pending' ? 'Você resolveu todas as questões pendentes do seu caderno de erros. Continue fazendo simulados e questões!' : 'Seus erros registrados aparecerão aqui conforme você estuda.'}
          </p>
          <a href="#simulados" class="btn btn-primary">Fazer um Simulado</a>
        </div>
      `;
      return;
    }

    listEl.innerHTML = errorItems.map((item, index) => {
      const isMastered = item.status === 'mastered';
      return `
        <div class="card" id="error-card-${item.id}" style="padding:1.5rem; border-left: 4px solid ${isMastered ? '#10B981' : '#EF4444'};">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
              <span class="badge" style="background:var(--bg-tertiary); color:var(--text-primary); font-weight:700;">#${item.question_id}</span>
              <span class="badge badge-primary">${item.subject || 'Geral'}</span>
              ${item.topic ? `<span class="badge" style="background:var(--bg-secondary); color:var(--text-secondary);">${item.topic}</span>` : ''}
              ${item.banca ? `<span class="badge" style="background:#3B82F622; color:#3B82F6; font-weight:700;">${item.banca}</span>` : ''}
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-mono);">
                Tentativas: <strong>${item.review_count || 1}</strong>
              </span>
              <span class="badge" style="background:${isMastered ? '#10B98122' : '#EF444422'}; color:${isMastered ? '#10B981' : '#EF4444'}; font-weight:700;">
                ${isMastered ? '✓ Dominada' : 'Pendente'}
              </span>
            </div>
          </div>

          <div style="font-size:1.05rem; line-height:1.6; color:var(--text-primary); margin-bottom:1.25rem; font-weight:500;">
            ${item.question_text}
          </div>

          <!-- Options -->
          <div class="error-options-group" id="options-group-${item.id}" style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.25rem;">
            ${item.options.map((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              const wasWrongChoice = item.wrong_answer_index === optIdx;
              return `
                <button class="option-btn-retry" data-item-id="${item.id}" data-opt-idx="${optIdx}" style="
                  text-align:left;
                  padding:0.75rem 1rem;
                  border:1px solid var(--border-color);
                  border-radius:6px;
                  background:var(--bg-secondary);
                  color:var(--text-primary);
                  font-size:0.92rem;
                  cursor:pointer;
                  transition:all 0.15s ease;
                  display:flex;
                  gap:0.75rem;
                  align-items:flex-start;
                ">
                  <span style="font-weight:700; font-family:var(--font-mono); color:var(--color-primary); min-width:20px;">${letter})</span>
                  <span style="flex:1;">${opt}</span>
                  ${wasWrongChoice && !isMastered ? '<small style="color:#EF4444; font-weight:700; font-size:0.75rem;">[Você marcou esta]</small>' : ''}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Feedback & Explanation area (hidden initially until retry) -->
          <div id="explanation-box-${item.id}" style="display:${isMastered ? 'block' : 'none'}; background:var(--bg-tertiary); padding:1rem; border-radius:6px; margin-bottom:1rem; border-left:3px solid var(--color-primary);">
            <div style="font-weight:700; font-size:0.85rem; color:var(--color-primary); margin-bottom:0.25rem;">💡 Gabarito & Resolução Comentada:</div>
            <div style="font-size:0.9rem; line-height:1.5; color:var(--text-secondary);">${item.explanation || 'Resolução não informada.'}</div>
          </div>

          <!-- Notes Area -->
          <div style="display:flex; gap:0.5rem; align-items:center; margin-top:0.75rem; border-top:1px solid var(--border-color); padding-top:0.75rem;">
            <input type="text" id="notes-input-${item.id}" class="form-control" placeholder="Anotação de estudo: Por que errei? O que preciso lembrar?" value="${item.notes || ''}" style="font-size:0.85rem; padding:0.4rem 0.75rem;">
            <button class="btn btn-secondary btn-sm btn-save-notes" data-item-id="${item.id}" style="white-space:nowrap;">Salvar Nota</button>
            <button class="btn btn-secondary btn-sm btn-delete-error" data-item-id="${item.id}" title="Remover do Caderno" style="color:var(--color-danger); padding:0.4rem 0.6rem;">🗑️</button>
          </div>
        </div>
      `;
    }).join('');

    attachEventListeners();
  }

  function attachEventListeners() {
    // Retry Option Selection
    document.querySelectorAll('.option-btn-retry').forEach(btn => {
      btn.addEventListener('click', async () => {
        const itemId = btn.dataset.itemId;
        const optIdx = Number(btn.dataset.optIdx);
        
        try {
          const res = await api.cadernoErros.retry(itemId, optIdx);
          const expBox = document.getElementById(`explanation-box-${itemId}`);
          const card = document.getElementById(`error-card-${itemId}`);
          
          if (res.isCorrect) {
            btn.style.background = '#10B98122';
            btn.style.borderColor = '#10B981';
            btn.style.color = '#10B981';
            card.style.borderLeftColor = '#10B981';
            showToast(`🎉 Resposta correta! Questão dominada (+${res.xpEarned} XP)`, 'success');
          } else {
            btn.style.background = '#EF444422';
            btn.style.borderColor = '#EF4444';
            btn.style.color = '#EF4444';
            showToast('Ainda não é esta. Leia a explicação abaixo e revise o conceito.', 'warning');
          }

          if (expBox) {
            expBox.style.display = 'block';
          }
        } catch (e) {
          showToast('Erro ao validar resposta.', 'error');
        }
      });
    });

    // Save Notes
    document.querySelectorAll('.btn-save-notes').forEach(btn => {
      btn.addEventListener('click', async () => {
        const itemId = btn.dataset.itemId;
        const input = document.getElementById(`notes-input-${itemId}`);
        const notes = input.value.trim();
        try {
          await api.cadernoErros.saveNotes(itemId, notes);
          showToast('Anotação salva no Caderno de Erros!', 'success');
        } catch (e) {
          showToast('Erro ao salvar anotação.', 'error');
        }
      });
    });

    // Delete Error
    document.querySelectorAll('.btn-delete-error').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Deseja remover esta questão do seu Caderno de Erros?')) return;
        const itemId = btn.dataset.itemId;
        try {
          await api.cadernoErros.delete(itemId);
          showToast('Questão removida do Caderno de Erros.', 'info');
          await loadData();
        } catch (e) {
          showToast('Erro ao remover questão.', 'error');
        }
      });
    });
  }

  // Filter Buttons
  document.querySelectorAll('#error-status-filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#error-status-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatus = btn.dataset.status;
      loadData();
    });
  });

  // Subject Filter
  document.getElementById('select-subject-filter')?.addEventListener('change', (e) => {
    currentSubject = e.target.value;
    loadData();
  });

  // Start Error Drill
  document.getElementById('btn-start-error-drill')?.addEventListener('click', () => {
    currentStatus = 'pending';
    document.querySelectorAll('#error-status-filters button').forEach(b => {
      b.classList.toggle('active', b.dataset.status === 'pending');
    });
    loadData();
    showToast('Foco nas questões pendentes ativado!', 'info');
  });

  await loadData();
}
