import { api } from './api.js';

export async function render(container) {
  container.innerHTML = `
    <div id="deck-list-view" class="slide-up">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem;">
        <h3>Seus Baralhos</h3>
        <button id="btn-create-deck" class="btn btn-primary">+ Novo Baralho IA</button>
      </div>
      <div class="grid-4" id="decks-container">
        <!-- Loaded via JS -->
      </div>
    </div>
    
    <div id="review-view" class="slide-up" style="display:none;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
        <button id="btn-back" class="btn btn-secondary">← Voltar</button>
        <span id="review-progress" style="color:var(--text-muted)">Card 1 de 15</span>
      </div>
      
      <div class="flashcard-scene" id="flashcard-element">
        <div class="flashcard-inner" id="card-inner">
          <div class="flashcard-front">
            <h3 style="font-size: 1.5rem; line-height:1.4;" id="card-front-text">O que é o princípio da legalidade na Administração Pública?</h3>
            <p style="color:var(--text-muted); margin-top:2rem; font-size:0.9rem;">(Clique no card ou pressione <kbd style="background:var(--bg-tertiary); padding:2px 6px; border-radius:4px; border:1px solid var(--border-color); font-weight:700;">Espaço</kbd> para virar)</p>
          </div>
          <div class="flashcard-back">
            <h4 style="color:var(--color-flashcards); margin-bottom:1rem;">Resposta</h4>
            <p style="font-size: 1.2rem; line-height:1.5;" id="card-back-text">Significa que a Administração só pode fazer aquilo que a lei expressamente autoriza ou determina.</p>
          </div>
        </div>
      </div>
      
      <div id="rating-buttons" style="display:none; justify-content:center; gap:1rem; margin-top:2rem; flex-wrap:wrap;">
        <button class="btn" id="btn-rate-1" style="background:#EF4444; min-width:120px;" onclick="window.nextCard('again')">
          Não Lembrei <small style="display:block; opacity:0.85; font-size:0.75rem; font-weight:700;">[1]</small>
        </button>
        <button class="btn" id="btn-rate-2" style="background:#F59E0B; min-width:120px;" onclick="window.nextCard('hard')">
          Difícil <small style="display:block; opacity:0.85; font-size:0.75rem; font-weight:700;">[2]</small>
        </button>
        <button class="btn" id="btn-rate-3" style="background:#3B82F6; min-width:120px;" onclick="window.nextCard('good')">
          Bom <small style="display:block; opacity:0.85; font-size:0.75rem; font-weight:700;">[3]</small>
        </button>
        <button class="btn" id="btn-rate-4" style="background:#10B981; min-width:120px;" onclick="window.nextCard('easy')">
          Fácil <small style="display:block; opacity:0.85; font-size:0.75rem; font-weight:700;">[4]</small>
        </button>
      </div>
    </div>
  `;

  const deckListView = document.getElementById('deck-list-view');
  const reviewView = document.getElementById('review-view');
  const cardInner = document.getElementById('card-inner');
  const ratingButtons = document.getElementById('rating-buttons');

  // Load Decks
  try {
    const decks = await api.flashcards.getDecks();
    const decksHtml = decks.map(d => `
      <div class="card" style="display:flex; flex-direction:column; align-items:center; text-align:center; cursor:pointer;" onclick="window.startReview('${d.id}')">
        <div style="font-size:2.5rem; margin-bottom:1rem;">🃏</div>
        <h4 style="margin-bottom:0.5rem; font-size:1.1rem;">${d.name}</h4>
        <div style="display:flex; gap:1rem; margin-top:1rem; font-size:0.85rem;">
          <span style="color:var(--text-muted)">Total: ${d.cardCount}</span>
          <span style="color:var(--gradient-warning); font-weight:bold;">Revisar: ${d.dueCount}</span>
        </div>
      </div>
    `).join('');
    document.getElementById('decks-container').innerHTML = decksHtml;
  } catch(e) {}

  document.getElementById('btn-back').addEventListener('click', () => {
    reviewView.style.display = 'none';
    deckListView.style.display = 'block';
    cardInner.classList.remove('is-flipped');
    ratingButtons.style.display = 'none';
  });

  function flipCard() {
    if (!cardInner.classList.contains('is-flipped')) {
      cardInner.classList.add('is-flipped');
      setTimeout(() => {
        ratingButtons.style.display = 'flex';
      }, 250);
    }
  }

  document.getElementById('flashcard-element').addEventListener('click', flipCard);

  window.startReview = function(id) {
    deckListView.style.display = 'none';
    reviewView.style.display = 'block';
  };

  window.nextCard = function(rating = 'good') {
    cardInner.classList.remove('is-flipped');
    ratingButtons.style.display = 'none';
    window.showToast('Revisão computada pelo algoritmo SRS ✅', 'success');
  };

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
      if (e.key === '1') { e.preventDefault(); window.nextCard('again'); }
      else if (e.key === '2') { e.preventDefault(); window.nextCard('hard'); }
      else if (e.key === '3') { e.preventDefault(); window.nextCard('good'); }
      else if (e.key === '4') { e.preventDefault(); window.nextCard('easy'); }
    }
  };

  window.addEventListener('keydown', window._flashcardKeyHandler);
}
