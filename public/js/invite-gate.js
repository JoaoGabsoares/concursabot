// ============================================================
// GABARITO.AI INVITE GATEKEEPER
// Tela institucional de acesso por convite / PIN
// ============================================================

import { showToast } from './utils.js';

export async function checkInviteAccess(onAccessGranted) {
  try {
    const storedPin = localStorage.getItem('gabarito_invite_pin') || localStorage.getItem('concursa_invite_pin') || '';
    const res = await fetch('/api/auth/status', {
      headers: {
        'x-invite-pin': storedPin,
        'x-invite-code': storedPin
      }
    });

    if (!res.ok) return true; // Se o backend falhar ou estiver offline, não bloqueia
    const data = await res.json();

    if (data.required && !data.authenticated) {
      showInviteGateModal(onAccessGranted);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('[InviteGate] Falha ao verificar status do convite:', err.message);
    return true;
  }
}

export function showInviteGateModal(onSuccess) {
  let gateEl = document.getElementById('invite-gate-overlay');
  if (!gateEl) {
    gateEl = document.createElement('div');
    gateEl.id = 'invite-gate-overlay';
    gateEl.className = 'modal-overlay';
    gateEl.style.zIndex = '99999';
    gateEl.style.background = 'rgba(15, 23, 42, 0.9)';
    gateEl.style.backdropFilter = 'blur(10px)';
    document.body.appendChild(gateEl);
  }

  gateEl.innerHTML = `
    <div class="modal card" style="max-width: 480px; padding: 2.25rem 2rem; text-align: center; border: 1.5px solid var(--border-color); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
      <div style="margin-bottom: 1.25rem;">
        <span class="doc-stamp revisao" style="font-size: 0.75rem; letter-spacing: 0.15em;">ACESSO RESTRITO POR CONVITE</span>
      </div>

      <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎯</div>

      <h2 style="font-size: 1.45rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0; font-family: var(--font-display);">
        Gabarito<span style="color:var(--color-primary);">.AI</span>
      </h2>

      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.75rem;">
        Esta plataforma de estudos com Inteligência Artificial é exclusiva para concursandos autorizados. Digite seu código de convite ou PIN para ingressar:
      </p>

      <form id="form-invite-gate" style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <input 
            type="text" 
            id="input-invite-code" 
            class="form-control" 
            placeholder="Ex: CONCURSA2026" 
            autocomplete="off" 
            required
            style="text-align: center; font-size: 1.1rem; font-weight: 700; font-family: var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; padding: 0.75rem;"
          >
          <div id="invite-gate-error" style="color: var(--color-danger); font-size: 0.8rem; margin-top: 0.5rem; display: none; font-weight: 600;"></div>
        </div>

        <button type="submit" id="btn-submit-invite" class="btn btn-primary" style="padding: 0.85rem; font-size: 0.95rem; font-weight: 700; background: var(--gradient-primary);">
          🔓 Desbloquear Acesso Institucional
        </button>
      </form>

      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color); font-size: 0.78rem; color: var(--text-muted);">
        Ainda não tem convite? Solicite seu acesso junto ao administrador do projeto.
      </div>
    </div>
  `;

  gateEl.style.display = 'flex';

  const form = document.getElementById('form-invite-gate');
  const input = document.getElementById('input-invite-code');
  const errorEl = document.getElementById('invite-gate-error');
  const btnSubmit = document.getElementById('btn-submit-invite');

  setTimeout(() => input?.focus(), 100);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = input.value.trim().toUpperCase();
    if (!code) return;

    btnSubmit.disabled = true;
    btnSubmit.textContent = '⏳ Validando Convite...';
    errorEl.style.display = 'none';

    try {
      const res = await fetch('/api/auth/verify-invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('concursa_invite_pin', code);
        showToast('🎉 Acesso autorizado com sucesso! Bem-vindo.', 'success');
        gateEl.style.display = 'none';
        if (typeof onSuccess === 'function') {
          onSuccess(code);
        } else {
          window.location.reload();
        }
      } else {
        errorEl.textContent = data.error || 'Código de convite inválido ou expirado.';
        errorEl.style.display = 'block';
        btnSubmit.disabled = false;
        btnSubmit.textContent = '🔓 Desbloquear Acesso Institucional';
        input.focus();
        input.select();
      }
    } catch (err) {
      errorEl.textContent = 'Falha de conexão com o servidor. Tente novamente.';
      errorEl.style.display = 'block';
      btnSubmit.disabled = false;
      btnSubmit.textContent = '🔓 Desbloquear Acesso Institucional';
    }
  });
}
