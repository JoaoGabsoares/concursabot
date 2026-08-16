import { api } from './api.js';
import { showToast } from './utils.js';

export async function render(container) {
  container.innerHTML = `
    <div id="deck-list-view" class="slide-up">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h3 style="color:var(--text-primary); margin:0;">Seus Baralhos de Flashcards</h3>
          <p style="margin:0.25rem 0 0 0; font-size:0.85rem; color:var(--text-secondary);">Repetição espaçada inteligente (SRS) para fixação de prazos e leis.</p>
        </div>
        <button id="btn-create-deck" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; font-weight:700;">
          <span>✨ Novo Baralho IA</span>
        </button>
      </div>

      <div class="grid-4" id="decks-container">
        <div style="grid-column: 1 / -1; text-align:center; padding:3rem 0; color:var(--text-muted);">Carregando baralhos...</div>
      </div>
    </div>
    
    <div id="review-view" class="slide-up" style="display:none;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
        <button id="btn-back" class="btn btn-secondary">← Voltar aos Baralhos</button>
        <span id="review-progress" style="color:var(--text-secondary); font-weight:600; font-family:var(--font-mono);">Card 1 de 1</span>
      </div>
      
      <div class="flashcard-scene" id="flashcard-element" style="cursor:pointer;">
        <div class="flashcard-inner" id="card-inner">
          <div class="flashcard-front">
            <span class="badge badge-primary" id="card-badge" style="margin-bottom:1rem; align-self:center;">Flashcard</span>
            <h3 style="font-size: 1.35rem; line-height:1.5; color:var(--text-primary);" id="card-front-text">Carregando pergunta...</h3>
            <p style="color:var(--text-muted); margin-top:2rem; font-size:0.85rem;">(Clique no card ou pressione <kbd style="background:var(--bg-tertiary); padding:2px 6px; border-radius:4px; border:1px solid var(--border-color); font-weight:700;">Espaço</kbd> para virar)</p>
          </div>
          <div class="flashcard-back">
            <h4 style="color:var(--color-primary); margin-bottom:1rem; font-size:1rem;">💡 Resposta</h4>
            <p style="font-size: 1.2rem; line-height:1.5; color:var(--text-primary);" id="card-back-text">Carregando resposta...</p>
          </div>
        </div>
      </div>
      
      <div id="rating-buttons" style="display:none; justify-content:center; gap:0.75rem; margin-top:2rem; flex-wrap:wrap;">
        <button class="btn" id="btn-rate-1" style="background:#EF4444; color:#fff; min-width:120px; font-weight:600;" data-rate="1">
          Não Lembrei <small style="display:block; opacity:0.85; font-size:0.75rem;">[1]</small>
        </button>
        <button class="btn" id="btn-rate-2" style="background:#F59E0B; color:#fff; min-width:120px; font-weight:600;" data-rate="2">
          Difícil <small style="display:block; opacity:0.85; font-size:0.75rem;">[2]</small>
        </button>
        <button class="btn" id="btn-rate-3" style="background:#3B82F6; color:#fff; min-width:120px; font-weight:600;" data-rate="3">
          Bom <small style="display:block; opacity:0.85; font-size:0.75rem;">[3]</small>
        </button>
        <button class="btn" id="btn-rate-4" style="background:#10B981; color:#fff; min-width:120px; font-weight:600;" data-rate="4">
          Fácil <small style="display:block; opacity:0.85; font-size:0.75rem;">[4]</small>
        </button>
      </div>
    </div>

    <!-- Modal de Criação de Baralho IA -->
    <div id="modal-create-deck" class="modal-overlay" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.65); z-index:9999; align-items:center; justify-content:center;">
      <div class="modal card" style="max-width:520px; width:90%; padding:1.75rem; border-radius:var(--radius-md);">
        <h3 style="margin-bottom:1rem; color:var(--text-primary);">✨ Criar Baralho com IA</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.25rem;">Gere automaticamente cartões de memorização para qualquer assunto ou cole seu texto.</p>
        
        <div class="form-group" style="margin-bottom:1rem;">
          <label style="font-weight:700; font-size:0.85rem;">Tema ou Disciplina *</label>
          <input type="text" id="deck-topic-input" class="form-control" placeholder="Ex: Prazos do Processo Administrativo (Lei 9.784)">
        </div>

        <div class="form-group" style="margin-bottom:1.5rem;">
          <label style="font-weight:700; font-size:0.85rem;">Texto Base / Artigos (Opcional)</label>
          <textarea id="deck-text-input" class="form-control" rows="4" placeholder="Cole artigos de lei, súmulas ou anotações para a IA sintetizar..."></textarea>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
          <button id="btn-cancel-create-deck" class="btn btn-secondary">Cancelar</button>
          <button id="btn-confirm-create-deck" class="btn btn-primary">🚀 Gerar Baralho</button>
        </div>
      </div>
    </div>
  `;

  const deckListView = document.getElementById('deck-list-view');
  const reviewView = document.getElementById('review-view');
  const cardInner = document.getElementById('card-inner');
  const ratingButtons = document.getElementById('rating-buttons');
  const modalCreateDeck = document.getElementById('modal-create-deck');

  let reviewCards = [];
  let currentCardIndex = 0;

  async function loadDecks() {
    try {
      const decks = await api.flashcards.getDecks();
      const containerEl = document.getElementById('decks-container');
      if (!decks || decks.length === 0) {
        containerEl.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1rem;" class="card">
            <div style="font-size:3rem; margin-bottom:1rem;">🃏</div>
            <h4 style="color:var(--text-primary);">Nenhum baralho criado ainda</h4>
            <p style="color:var(--text-secondary); font-size:0.9rem; max-width:400px; margin:0.5rem auto 1.5rem auto;">
              Crie seu primeiro baralho com Inteligência Artificial para memorizar prazos, artigos e fórmulas.
            </p>
            <button class="btn btn-primary" onclick="document.getElementById('btn-create-deck').click()">Criar Primeiro Baralho</button>
          </div>
        `;
        return;
      }

      containerEl.innerHTML = decks.map(d => `
        <div class="card" style="display:flex; flex-direction:column; align-items:center; text-align:center; cursor:pointer; padding:1.5rem; transition:all 0.2s ease;" onclick="window.startReview('${d.id}')">
          <div style="font-size:2.5rem; margin-bottom:0.75rem;">🃏</div>
          <h4 style="margin-bottom:0.5rem; font-size:1.05rem; color:var(--text-primary);">${d.name}</h4>
          <div style="display:flex; gap:1rem; margin-top:0.75rem; font-size:0.85rem;">
            <span style="color:var(--text-muted);">Total: ${d.cardCount}</span>
            <span style="color:var(--color-primary); font-weight:700;">Revisar: ${d.dueCount || d.cardCount}</span>
          </div>
        </div>
      `).join('');
    } catch (e) {
      document.getElementById('decks-container').innerHTML = `<div style="grid-column:1/-1; text-align:center; color:var(--color-danger);">Erro ao carregar baralhos.</div>`;
    }
  }

  await loadDecks();

  // Abrir Modal de Criação
  document.getElementById('btn-create-deck')?.addEventListener('click', () => {
    modalCreateDeck.style.display = 'flex';
    document.getElementById('deck-topic-input')?.focus();
  });

  // Fechar Modal
  document.getElementById('btn-cancel-create-deck')?.addEventListener('click', () => {
    modalCreateDeck.style.display = 'none';
  });

  // Confirmar Criação de Baralho
  document.getElementById('btn-confirm-create-deck')?.addEventListener('click', async () => {
    const topic = document.getElementById('deck-topic-input').value.trim();
    const text = document.getElementById('deck-text-input').value.trim();
    const btn = document.getElementById('btn-confirm-create-deck');

    if (!topic) {
      showToast('Informe o tema do baralho.', 'warning');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Gerando cartões com IA...';

    try {
      await api.flashcards.generate({ topic, text, count: 5 });
      showToast('✨ Baralho criado com sucesso!', 'success');
      modalCreateDeck.style.display = 'none';
      document.getElementById('deck-topic-input').value = '';
      document.getElementById('deck-text-input').value = '';
      await loadDecks();
    } catch (err) {
      showToast('Erro ao gerar baralho.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = '🚀 Gerar Baralho';
    }
  });

  // Voltar
  document.getElementById('btn-back')?.addEventListener('click', () => {
    reviewView.style.display = 'none';
    deckListView.style.display = 'block';
    cardInner.classList.remove('is-flipped');
    ratingButtons.style.display = 'none';
    loadDecks();
  });

  function flipCard() {
    if (!cardInner.classList.contains('is-flipped')) {
      cardInner.classList.add('is-flipped');
      setTimeout(() => {
        ratingButtons.style.display = 'flex';
      }, 200);
    }
  }

  document.getElementById('flashcard-element')?.addEventListener('click', flipCard);

  function renderCurrentCard() {
    if (reviewCards.length === 0 || currentCardIndex >= reviewCards.length) {
      showToast('🎉 Parabéns! Você concluiu a revisão de todos os cards de hoje.', 'success');
      document.getElementById('btn-back').click();
      return;
    }

    const card = reviewCards[currentCardIndex];
    document.getElementById('review-progress').textContent = `Card ${currentCardIndex + 1} de ${reviewCards.length}`;
    document.getElementById('card-front-text').textContent = card.front;
    document.getElementById('card-back-text').textContent = card.back;
    cardInner.classList.remove('is-flipped');
    ratingButtons.style.display = 'none';
  }

  window.startReview = async function(deckId) {
    try {
      const cards = await api.flashcards.getReviewCards();
      reviewCards = cards && cards.length > 0 ? cards : [
        { id: 1, front: 'O que é o princípio da legalidade na Administração Pública?', back: 'A Administração só pode fazer aquilo que a lei expressamente autoriza ou determina.' },
        { id: 2, front: 'Qual o prazo de validade de um concurso público segundo a CF/88?', back: 'Até 2 anos, prorrogável uma única vez por igual período (Art. 37, III).' }
      ];
      currentCardIndex = 0;
      deckListView.style.display = 'none';
      reviewView.style.display = 'block';
      renderCurrentCard();
    } catch (e) {
      showToast('Erro ao iniciar revisão.', 'error');
    }
  };

  window.nextCard = async function(ratingVal = 3) {
    const card = reviewCards[currentCardIndex];
    if (card && card.id) {
      try {
        await api.flashcards.reviewCard(card.id, Number(ratingVal));
      } catch (err) {
        console.warn('Review recording error:', err);
      }
    }
    showToast('Revisão computada pelo algoritmo SRS ✅', 'success');
    currentCardIndex++;
    renderCurrentCard();
  };

  // Rating buttons listeners
  document.querySelectorAll('#rating-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const rate = btn.dataset.rate || 3;
      window.nextCard(rate);
    });
  });

  // Listener Global de Teclado para Flashcards
  if (window._flashcardKeyHandler) {
    window.removeEventListener('keydown', window._flashcardKeyHandler);
  }

  window._flashcardKeyHandler = function(e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (!reviewView || reviewView.style.display === 'none') return;

    if (e.code === 'Space' || e.key === 'Enter') {
      e.preventDefault();
      flipCard();
    } else if (cardInner.classList.contains('is-flipped')) {
      if (e.key === '1') { e.preventDefault(); window.nextCard(1); }
      else if (e.key === '2') { e.preventDefault(); window.nextCard(2); }
      else if (e.key === '3') { e.preventDefault(); window.nextCard(3); }
      else if (e.key === '4') { e.preventDefault(); window.nextCard(4); }
    }
  };

  window.addEventListener('keydown', window._flashcardKeyHandler);
}
