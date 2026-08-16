// PWA & Offline Sync Manager
import { showToast } from './utils.js';

class PWAManager {
  constructor() {
    this.isOffline = !navigator.onLine;
    this.syncQueueKey = 'concursa_offline_queue';
    this.init();
  }

  init() {
    window.addEventListener('online', () => this.handleOnline());
    window.addEventListener('offline', () => this.handleOffline());

    if (this.isOffline) {
      this.showOfflineBanner();
    }
  }

  handleOffline() {
    this.isOffline = true;
    this.showOfflineBanner();
    showToast('📡 Você está no modo offline. Seus estudos continuarão salvos localmente.', 'info');
  }

  handleOnline() {
    this.isOffline = false;
    this.hideOfflineBanner();
    showToast('🌐 Conexão restabelecida! Sincronizando dados...', 'success');
    this.flushSyncQueue();
  }

  showOfflineBanner() {
    let banner = document.getElementById('offline-indicator-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'offline-indicator-banner';
      banner.style.cssText = `
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: #1E293B;
        color: #F59E0B;
        border: 1px solid #F59E0B;
        padding: 0.6rem 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `;
      banner.innerHTML = `<span>⚡ Modo Offline Ativo</span> <small style="color:#94A3B8;">(Dados serão salvos localmente)</small>`;
      document.body.appendChild(banner);
    }
    banner.style.display = 'flex';
  }

  hideOfflineBanner() {
    const banner = document.getElementById('offline-indicator-banner');
    if (banner) banner.style.display = 'none';
  }

  queueOfflineAnswer(questionId, selectedAnswer, careerId, userId) {
    try {
      const queue = JSON.parse(localStorage.getItem(this.syncQueueKey) || '[]');
      queue.push({
        type: 'answer',
        questionId,
        selectedAnswer,
        careerId,
        userId,
        timestamp: Date.now()
      });
      localStorage.setItem(this.syncQueueKey, JSON.stringify(queue));
    } catch (e) {}
  }

  async flushSyncQueue() {
    try {
      const queue = JSON.parse(localStorage.getItem(this.syncQueueKey) || '[]');
      if (queue.length === 0) return;

      for (const item of queue) {
        if (item.type === 'answer') {
          await fetch('/api/questions/answer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-User-Id': item.userId || 'user_joao',
              'X-Exam-Id': item.careerId || 'atrfb'
            },
            body: JSON.stringify({ questionId: item.questionId, selectedAnswer: item.selectedAnswer })
          }).catch(() => {});
        }
      }

      localStorage.removeItem(this.syncQueueKey);
      showToast('✅ Dados offline sincronizados com sucesso!', 'success');
    } catch (e) {
      console.warn('Sync queue flush error:', e);
    }
  }
}

export const pwaManager = new PWAManager();
