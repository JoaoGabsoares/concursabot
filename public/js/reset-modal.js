import { showToast } from './utils.js';

export function openResetStudyModal(onSuccess) {
  let modalEl = document.getElementById('modal-study-reset');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'modal-study-reset';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  let selectedScope = 'day';

  modalEl.innerHTML = `
    <div class="modal reset-modal-card">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <span style="font-size:1.3rem;">🔄</span>
          <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">Resetar Progresso de Estudo</h3>
        </div>
        <button class="btn-close" id="btn-close-reset-modal" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--text-muted); padding:0.25rem 0.5rem;" title="Fechar">✕</button>
      </div>

      <div class="modal-body">
        <!-- Safe Info Banner -->
        <div class="reset-info-banner">
          <div style="font-weight:700; color:var(--color-primary); font-size:0.85rem; margin-bottom:0.2rem;">
            🛡️ O que permanece seguro e preservado:
          </div>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin:0; line-height:1.45;">
            Suas apostilas em PDF, Cadernos Enxutos gerados pela IA, resumos salvos e perfis de estudantes 
            <strong>NUNCA serão excluídos</strong>. Apenas os registros de tempo e histórico de questões serão reiniciados.
          </p>
        </div>

        <!-- Scope Selection Cards -->
        <div>
          <label style="font-weight:700; font-size:0.85rem; margin-bottom:0.5rem; display:block; color:var(--text-primary);">
            Selecione o que deseja reiniciar:
          </label>
          <div class="reset-scopes-grid">
            <div class="reset-scope-card active" data-scope="day">
              <div style="font-size:1.25rem;">📅</div>
              <div>
                <strong>Dia de Hoje</strong>
                <p>Limpa sessões, questões e tarefas concluídas hoje.</p>
              </div>
            </div>

            <div class="reset-scope-card" data-scope="week">
              <div style="font-size:1.25rem;">📆</div>
              <div>
                <strong>Semana Atual (7 dias)</strong>
                <p>Reinicia o progresso da semana no cronograma e dashboard.</p>
              </div>
            </div>

            <div class="reset-scope-card" data-scope="month">
              <div style="font-size:1.25rem;">🗓️</div>
              <div>
                <strong>Mês Atual (30 dias)</strong>
                <p>Limpa estatísticas e atividades dos últimos 30 dias.</p>
              </div>
            </div>

            <div class="reset-scope-card reset-scope-danger" data-scope="all">
              <div style="font-size:1.25rem;">🔄</div>
              <div>
                <strong style="color:var(--color-danger);">Zerar Todo o Histórico</strong>
                <p>Marco zero de desempenho (todas as sessões e questões passadas).</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Confirmation Input Box -->
        <div class="reset-confirm-box">
          <label style="font-size:0.82rem; font-weight:700; color:var(--color-danger); display:block; margin-bottom:0.4rem;">
            ⚠️ Confirmação de Segurança: Digite <strong>RESET</strong> abaixo ou marque a caixa:
          </label>
          <input type="text" id="input-confirm-reset-text" class="form-control" placeholder="Digite RESET" autocomplete="off" style="text-transform:uppercase; font-weight:700; letter-spacing:0.05em; margin-bottom:0.5rem;">
          <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.8rem; color:var(--text-secondary); cursor:pointer;">
            <input type="checkbox" id="chk-confirm-reset" style="width:16px; height:16px;">
            <span>Estou ciente e desejo reiniciar o histórico selecionado</span>
          </label>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" id="btn-cancel-reset" style="font-weight:600;">Cancelar</button>
        <button class="btn btn-danger" id="btn-execute-reset" disabled style="opacity:0.5; cursor:not-allowed; font-weight:700;">
          ⚠️ Executar Reset
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = 'flex';

  // Events
  const closeModal = () => {
    modalEl.style.display = 'none';
  };

  document.getElementById('btn-close-reset-modal').addEventListener('click', closeModal);
  document.getElementById('btn-cancel-reset').addEventListener('click', closeModal);

  // Close on clicking backdrop
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) {
      closeModal();
    }
  });

  // Scope Cards Click
  modalEl.querySelectorAll('.reset-scope-card').forEach(card => {
    card.addEventListener('click', () => {
      modalEl.querySelectorAll('.reset-scope-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedScope = card.dataset.scope;
    });
  });

  // Confirm input validation (either typing RESET or ticking checkbox)
  const inputConfirm = document.getElementById('input-confirm-reset-text');
  const chkConfirm = document.getElementById('chk-confirm-reset');
  const btnExecute = document.getElementById('btn-execute-reset');

  function checkCanExecute() {
    const textValid = inputConfirm.value.trim().toUpperCase() === 'RESET';
    const chkValid = chkConfirm ? chkConfirm.checked : false;

    if (textValid || chkValid) {
      btnExecute.disabled = false;
      btnExecute.style.opacity = '1';
      btnExecute.style.cursor = 'pointer';
    } else {
      btnExecute.disabled = true;
      btnExecute.style.opacity = '0.5';
      btnExecute.style.cursor = 'not-allowed';
    }
  }

  inputConfirm.addEventListener('input', checkCanExecute);
  if (chkConfirm) {
    chkConfirm.addEventListener('change', checkCanExecute);
  }

  btnExecute.addEventListener('click', async () => {
    const textValid = inputConfirm.value.trim().toUpperCase() === 'RESET';
    const chkValid = chkConfirm ? chkConfirm.checked : false;
    if (!textValid && !chkValid) return;

    btnExecute.disabled = true;
    btnExecute.textContent = '⏳ Executando Reset...';

    try {
      const res = await fetch('/api/study-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scope: selectedScope,
          confirmation: 'RESET'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`🎉 ${data.message}`, 'success');
        closeModal();
        if (typeof onSuccess === 'function') {
          onSuccess(data);
        } else {
          window.location.reload();
        }
      } else {
        showToast(data.error || 'Erro ao resetar progresso.', 'error');
        btnExecute.disabled = false;
        btnExecute.textContent = '⚠️ Executar Reset';
      }
    } catch (err) {
      console.error('Error executing reset:', err);
      showToast('Erro ao conectar ao servidor.', 'error');
      btnExecute.disabled = false;
      btnExecute.textContent = '⚠️ Executar Reset';
    }
  });
}
