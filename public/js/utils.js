export function parseMarkdown(text) {
  if (!text) return '';
  
  let html = text;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Code Blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');
  
  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
  
  // Lists
  html = html.replace(/^\s*\n\*/gm, '<ul>\n*');
  html = html.replace(/^(\*|\-) (.*)$/gim, '<li>$2</li>');
  html = html.replace(/<\/li>\n<ul>/gim, '<ul>');
  html = html.replace(/<\/li>\n<li>/gim, '</li><li>');
  // List wrapper
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<pre') || p.startsWith('<block')) return p;
    return `<p>${p}</p>`;
  }).join('');
  
  // Strip unsafe scripts e inline handlers
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  html = html.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  html = html.replace(/\son\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');
  html = html.replace(/href\s*=\s*(?:'javascript:[^']*'|"javascript:[^"]*"|javascript:[^\s>]+)/gi, 'href="#"');
  
  return `<div class="markdown-content">${html}</div>`;
}

export { escapeHTML, sanitizeHTML } from './sanitizer.js';

export const renderMarkdown = parseMarkdown;

export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return String(dateString);
  return date.toLocaleDateString('pt-BR');
}

export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse backwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function getSubjectColor(subject) {
  if (!subject) return 'secondary';
  const s = String(subject).toLowerCase();
  if (s.includes('tribut')) return 'warning';
  if (s.includes('constituc')) return 'primary';
  if (s.includes('administra')) return 'danger';
  if (s.includes('previdenc')) return 'success';
  if (s.includes('portug')) return 'info';
  if (s.includes('dado') || s.includes('ti') || s.includes('inform')) return 'primary';
  if (s.includes('aduan')) return 'warning';
  if (s.includes('logic') || s.includes('rlm')) return 'info';
  if (s.includes('contab')) return 'success';
  if (s.includes('ingles')) return 'secondary';
  return 'secondary';
}

export function showErrorModal(title, error, context = {}) {
  // Remove existing error modal if any
  document.querySelectorAll('.error-diagnostic-modal-overlay').forEach(el => el.remove());

  const errMessage = error instanceof Error ? error.message : (typeof error === 'string' ? error : JSON.stringify(error));
  const errStack = error instanceof Error ? (error.stack || '') : '';
  const timestamp = new Date().toISOString();

  const diagnosticPayload = {
    title,
    timestamp,
    error: errMessage,
    stack: errStack || null,
    context,
    url: window.location.href,
    userAgent: navigator.userAgent
  };

  const diagnosticText = JSON.stringify(diagnosticPayload, null, 2);

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay error-diagnostic-modal-overlay';
  overlay.style.zIndex = '9999';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'error-modal-title');

  overlay.innerHTML = `
    <div class="modal card" style="max-width:560px; border-left: 4px solid var(--color-danger); animation: scaleIn 0.2s ease;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; border-bottom:1px solid var(--glass-border); padding-bottom:0.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.5rem;" aria-hidden="true">⚠️</span>
          <div>
            <h3 id="error-modal-title" style="margin:0; font-size:1.15rem; color:var(--color-danger);">${title || 'Falha na Operação'}</h3>
            <span style="font-size:0.75rem; color:var(--text-muted);">${new Date().toLocaleTimeString()}</span>
          </div>
        </div>
        <button class="btn-icon" id="btn-close-err-modal" aria-label="Fechar modal de erro" style="cursor:pointer; font-size:1.1rem;">✕</button>
      </div>

      <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.4; margin-bottom:0.75rem;">
        Ocorreu um erro ao processar sua solicitação. O detalhe técnico está disponível abaixo para cópia e diagnóstico:
      </p>

      <div style="position:relative; margin-bottom:1rem;">
        <pre style="background:var(--bg-tertiary); border:1px solid var(--border-color); padding:0.75rem; border-radius:var(--radius-sm); font-size:0.78rem; max-height:160px; overflow-y:auto; color:var(--text-primary); font-family:monospace; white-space:pre-wrap; word-break:break-all;">${diagnosticText}</pre>
      </div>

      <div style="display:flex; gap:0.5rem; justify-content:flex-end; flex-wrap:wrap;">
        <button class="btn btn-primary" id="btn-copy-error-details" style="font-size:0.85rem;">
          📋 Copiar Detalhes do Erro
        </button>
        <button class="btn btn-secondary" id="btn-view-system-logs" style="font-size:0.85rem;">
          🔍 Ver Logs do Sistema
        </button>
        <button class="btn btn-secondary" id="btn-dismiss-err-modal" style="font-size:0.85rem;">
          Fechar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const close = () => {
    document.removeEventListener('keydown', onKeyDown);
    overlay.remove();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
  };
  document.addEventListener('keydown', onKeyDown);

  overlay.querySelector('#btn-close-err-modal')?.addEventListener('click', close);
  overlay.querySelector('#btn-dismiss-err-modal')?.addEventListener('click', close);
  
  overlay.querySelector('#btn-copy-error-details')?.addEventListener('click', () => {
    navigator.clipboard.writeText(diagnosticText).then(() => {
      showToast('📋 Detalhes do erro copiados para a área de transferência!', 'success');
    }).catch(() => {
      showToast('Erro ao copiar automaticamente. Selecione o texto e use Ctrl+C.', 'warning');
    });
  });

  overlay.querySelector('#btn-view-system-logs')?.addEventListener('click', () => {
    close();
    window.location.hash = '#settings';
    setTimeout(() => {
      document.querySelector('[data-tab="logs"]')?.click();
    }, 150);
  });
}

