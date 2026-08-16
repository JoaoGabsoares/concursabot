import { api } from './api.js';
import { parseMarkdown } from './utils.js';

export async function render(container) {
  container.innerHTML = `
    <div class="grid-4 slide-up">
      <div class="card" style="grid-column: span 1; display:flex; flex-direction:column; gap:1rem;">
        <h3 style="color:var(--color-summaries)">Novo Resumo</h3>
        <div class="form-group">
          <label>Formato</label>
          <select id="sum-type">
            <option>Resumo Estratégico</option>
            <option>Mapa Mental (Tópicos)</option>
            <option>Quadro Comparativo</option>
          </select>
        </div>
        <div class="form-group" style="flex:1;">
          <label>Texto Base (Cole PDF/Lei)</label>
          <textarea id="sum-text" style="height: 100%; min-height: 250px;" placeholder="Cole o texto ou artigo aqui..."></textarea>
        </div>
        <button id="btn-generate-sum" class="btn btn-primary" style="background:var(--gradient-success); border:none;">Gerar IA</button>
      </div>
      
      <div class="card" style="grid-column: span 3; position:relative;">
        <div id="sum-loading" style="display:none; text-align:center; padding:5rem;">
          <div class="spinner" style="border-left-color: var(--color-summaries);"></div>
          <p style="color:var(--text-muted); margin-top:1rem;">Sintetizando informações chave...</p>
        </div>
        
        <div id="sum-empty" style="text-align:center; padding:5rem;">
          <div style="font-size:3rem; margin-bottom:1rem; opacity:0.5;">📚</div>
          <h3 style="color:var(--text-muted)">Área de Leitura</h3>
          <p style="color:var(--text-muted)">Insira o texto ao lado para a IA gerar um resumo focado em provas.</p>
        </div>
        
        <div id="sum-result" class="markdown-content" style="display:none; overflow-y:auto; max-height:600px;">
        </div>
        
        <div id="sum-actions" style="display:none; margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border-color); text-align:right;">
          <button id="btn-save-notebook" class="btn btn-secondary" style="margin-right:0.5rem;">📋 Copiar Resumo</button>
          <button id="btn-generate-flashcards" class="btn btn-primary" style="background:var(--color-primary); border:none;">🃏 Gerar Flashcards disso</button>
        </div>
      </div>
    </div>
  `;

  let lastGeneratedMarkdown = '';

  document.getElementById('btn-generate-sum').addEventListener('click', async () => {
    const text = document.getElementById('sum-text').value.trim();
    const btn = document.getElementById('btn-generate-sum');
    if (!text) {
      window.showToast('Cole algum texto primeiro.', 'warning');
      return;
    }
    
    document.getElementById('sum-empty').style.display = 'none';
    document.getElementById('sum-result').style.display = 'none';
    document.getElementById('sum-actions').style.display = 'none';
    document.getElementById('sum-loading').style.display = 'block';
    btn.disabled = true;
    btn.textContent = 'Gerando...';
    
    try {
      const type = document.getElementById('sum-type').value;
      const data = await api.summaries.generate(text, type);
      lastGeneratedMarkdown = data.markdown || '';
      
      document.getElementById('sum-loading').style.display = 'none';
      const resultDiv = document.getElementById('sum-result');
      resultDiv.innerHTML = parseMarkdown(lastGeneratedMarkdown);
      resultDiv.style.display = 'block';
      document.getElementById('sum-actions').style.display = 'block';
    } catch(e) {
      window.showToast('Erro ao gerar resumo', 'error');
      document.getElementById('sum-loading').style.display = 'none';
      document.getElementById('sum-empty').style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Gerar IA';
    }
  });

  // Copiar Resumo para o Caderno
  document.getElementById('btn-save-notebook')?.addEventListener('click', async () => {
    if (!lastGeneratedMarkdown) return;
    try {
      await navigator.clipboard.writeText(lastGeneratedMarkdown);
      window.showToast('📋 Resumo copiado para a área de transferência!', 'success');
    } catch (err) {
      window.showToast('Resumo pronto para estudo!', 'info');
    }
  });

  // Converter Resumo em Flashcards com 1 clique
  document.getElementById('btn-generate-flashcards')?.addEventListener('click', async () => {
    if (!lastGeneratedMarkdown) return;
    const btn = document.getElementById('btn-generate-flashcards');
    btn.disabled = true;
    btn.textContent = 'Criando Baralho...';

    try {
      const type = document.getElementById('sum-type').value;
      await api.flashcards.generate({
        topic: `Resumo: ${type}`,
        text: lastGeneratedMarkdown.substring(0, 2000),
        count: 5
      });
      window.showToast('🃏 5 Flashcards gerados a partir do resumo!', 'success');
      setTimeout(() => {
        window.location.hash = '#flashcards';
      }, 500);
    } catch (err) {
      window.showToast('Erro ao criar flashcards a partir do resumo.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = '🃏 Gerar Flashcards disso';
    }
  });
}
