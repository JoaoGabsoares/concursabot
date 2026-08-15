import { showToast, parseMarkdown, formatDate } from './utils.js';

// ============================================================
// BASE DE CONHECIMENTO & ACERVO DE PDFS (RAG INTELIGENTE)
// ============================================================

export async function render(container) {
  container.innerHTML = `
    <div class="rag-container slide-up">
      <!-- Top Stats Bar -->
      <div class="grid-4" style="margin-bottom: 1.5rem;">
        <div class="card stat-card" style="border-left: 4px solid var(--color-primary);">
          <div class="stat-icon" style="background: rgba(27, 54, 93, 0.1); color: var(--color-primary);">📚</div>
          <div class="stat-info">
            <h3 id="rag-stat-docs">0</h3>
            <p>PDFs no Acervo</p>
          </div>
        </div>
        <div class="card stat-card" style="border-left: 4px solid var(--color-questions);">
          <div class="stat-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--color-questions);">🔢</div>
          <div class="stat-info">
            <h3 id="rag-stat-chunks">0</h3>
            <p>Trechos Vetoriais</p>
          </div>
        </div>
        <div class="card stat-card" style="border-left: 4px solid var(--color-summaries);">
          <div class="stat-icon" style="background: rgba(16, 185, 129, 0.15); color: var(--color-summaries);">⚡</div>
          <div class="stat-info">
            <h3>Google Gemini</h3>
            <p>Embeddings Semânticos</p>
          </div>
        </div>
        <div class="card stat-card" style="border-left: 4px solid var(--color-flashcards);">
          <div class="stat-icon" style="background: rgba(249, 115, 22, 0.15); color: var(--color-flashcards);">🔍</div>
          <div class="stat-info">
            <h3>Busca Cruzada</h3>
            <p>Citação por Páginas</p>
          </div>
        </div>
      </div>

      <!-- Main Search & Question Interface -->
      <div class="card" style="margin-bottom: 1.5rem;">
        <div class="card-header">
          <h3>🔎 Consulta Inteligente no Seu Acervo de Editais e Apostilas</h3>
          <p class="text-muted" style="font-size: 0.88rem; margin-top: 0.25rem;">
            Faça perguntas doutrinárias ou pesquise termos. A IA cruza todos os PDFs indexados e responde citando os documentos fonte.
          </p>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
          <select id="rag-subject-filter" class="form-control" style="max-width: 220px;">
            <option value="Todas">Todas as Disciplinas</option>
            <option value="Direito Tributário">Direito Tributário</option>
            <option value="Direito Constitucional">Direito Constitucional</option>
            <option value="Direito Administrativo">Direito Administrativo</option>
            <option value="Direito Penal">Direito Penal</option>
            <option value="Língua Portuguesa">Língua Portuguesa</option>
            <option value="Raciocínio Lógico">Raciocínio Lógico</option>
            <option value="Contabilidade Geral">Contabilidade Geral</option>
            <option value="Legislação Específica">Legislação Específica</option>
          </select>
          <input type="text" id="rag-query-input" class="form-control" style="flex:1; min-width:260px;" placeholder="Ex: Qual a jurisprudência do STF sobre imunidade tributária recíproca?">
          <button class="btn btn-primary" id="btn-rag-ask">
            <span>🧠 Consultar IA</span>
          </button>
          <button class="btn btn-secondary" id="btn-rag-search">
            <span>🔍 Buscar Trechos</span>
          </button>
        </div>
      </div>

      <!-- RAG Loading & Answers Area -->
      <div id="rag-loading" style="display: none; text-align: center; padding: 2.5rem;" class="card">
        <div class="loading-spinner"></div>
        <p style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">Consultando vetores semânticos e sintetizando resposta fundamentada...</p>
      </div>

      <div id="rag-answer-card" class="card" style="display: none; margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
        <h4 style="color: var(--color-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>💡 Resposta Fundamentada no Acervo</span>
        </h4>
        <div id="rag-answer-content" class="markdown-content"></div>
        <div id="rag-sources-container" style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <h5 style="color: var(--text-muted); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em;">📂 Documentos Fontes Citados</h5>
          <div id="rag-sources-list" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;"></div>
        </div>
      </div>

      <div id="rag-search-results" class="card" style="display: none; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 1rem;">📄 Trechos Semânticos Relevantes</h4>
        <div id="rag-search-list" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
      </div>

      <!-- Ingestion & Document Library Grid -->
      <div class="grid-2">
        <!-- Interactive Ingestion Box -->
        <div class="card">
          <div class="card-header" style="margin-bottom: 0.75rem;">
            <h3>📥 Indexar Novos PDFs no Acervo</h3>
            <p class="text-muted" style="font-size: 0.83rem;">Arraste suas apostilas e editais ou selecione pelo computador:</p>
          </div>

          <div class="rag-dropzone-box" id="rag-dropzone">
            <input type="file" id="rag-file-input" multiple accept=".pdf" style="display: none;">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📂</div>
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.25rem;">
              Arraste seus arquivos PDF aqui
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 0.85rem 0;">
              Suporta apostilas de cursinhos, editais e cadernos de questões (até 50MB cada)
            </p>
            <button type="button" class="btn btn-primary btn-sm" id="btn-trigger-picker">
              📁 Selecionar Arquivos PDF
            </button>
          </div>

          <div id="rag-upload-status" style="display: none; margin-top: 1rem; padding: 0.85rem; background: var(--bg-tertiary); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.4rem;">
              <span id="rag-upload-filename">Enviando e indexando...</span>
              <span id="rag-upload-pct">0%</span>
            </div>
            <div style="background: var(--bg-primary); height: 6px; border-radius: 3px; overflow: hidden;">
              <div id="rag-upload-bar" class="rag-upload-progress-bar" style="width: 0%;"></div>
            </div>
            <p id="rag-upload-msg" style="font-size: 0.78rem; color: var(--text-muted); margin: 0.4rem 0 0 0;"></p>
          </div>
        </div>

        <!-- Indexed Documents List -->
        <div class="card">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <div>
              <h3 style="margin: 0;">📑 Apostilas e PDFs Indexados</h3>
              <p class="text-muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 0;">Acervo pronto para buscas e geração de simulados</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-refresh-docs" title="Atualizar lista">🔄</button>
          </div>
          <div id="rag-docs-list" style="max-height: 320px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
            <div class="loading-placeholder">Carregando acervo...</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize
  setupRAGHandlers();
  loadRAGStats();
  loadRAGDocuments();
}

function setupRAGHandlers() {
  const queryInput = document.getElementById('rag-query-input');
  const btnAsk = document.getElementById('btn-rag-ask');
  const btnSearch = document.getElementById('btn-rag-search');
  const btnRefresh = document.getElementById('btn-refresh-docs');
  const dropzone = document.getElementById('rag-dropzone');
  const fileInput = document.getElementById('rag-file-input');
  const btnTriggerPicker = document.getElementById('btn-trigger-picker');

  btnAsk.addEventListener('click', handleRAGAsk);
  btnSearch.addEventListener('click', handleRAGSearch);
  btnRefresh?.addEventListener('click', () => {
    loadRAGStats();
    loadRAGDocuments();
    showToast('Acervo atualizado.', 'info');
  });

  queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleRAGAsk();
  });

  // Dropzone events
  btnTriggerPicker?.addEventListener('click', () => fileInput.click());
  dropzone?.addEventListener('click', (e) => {
    if (e.target !== btnTriggerPicker) fileInput.click();
  });

  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone?.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });

  dropzone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesUpload(e.dataTransfer.files);
    }
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFilesUpload(e.target.files);
    }
  });
}

// Upload Files directly to API
async function handleFilesUpload(files) {
  const pdfFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith('.pdf'));

  if (pdfFiles.length === 0) {
    showToast('Por favor, selecione apenas arquivos com extensão .pdf', 'warning');
    return;
  }

  const statusBox = document.getElementById('rag-upload-status');
  const filenameLabel = document.getElementById('rag-upload-filename');
  const pctLabel = document.getElementById('rag-upload-pct');
  const bar = document.getElementById('rag-upload-bar');
  const msgLabel = document.getElementById('rag-upload-msg');

  statusBox.style.display = 'block';
  filenameLabel.textContent = `Processando ${pdfFiles.length} arquivo(s)...`;
  pctLabel.textContent = '10%';
  bar.style.width = '10%';
  msgLabel.textContent = 'Enviando arquivos e extraindo texto com IA...';

  const formData = new FormData();
  pdfFiles.forEach(f => formData.append('pdfs', f));

  try {
    bar.style.width = '40%';
    pctLabel.textContent = '40%';

    const res = await fetch('/api/rag/upload', {
      method: 'POST',
      body: formData
    });

    bar.style.width = '85%';
    pctLabel.textContent = '85%';

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Falha ao processar PDFs.');
    }

    bar.style.width = '100%';
    pctLabel.textContent = '100%';
    msgLabel.textContent = `✅ ${data.processed} PDF(s) indexados e ${data.totalChunksIndexed} trechos vetoriais criados!`;

    showToast(`🎉 ${data.processed} PDF(s) indexados com sucesso!`, 'success');

    setTimeout(() => {
      loadRAGStats();
      loadRAGDocuments();
      statusBox.style.display = 'none';
    }, 2500);

  } catch (err) {
    console.error('Upload error:', err);
    msgLabel.textContent = `❌ Erro: ${err.message}`;
    showToast(err.message || 'Erro no upload de PDFs.', 'error');
  }
}

// Load RAG Stats
async function loadRAGStats() {
  try {
    const res = await fetch('/api/rag/stats');
    if (!res.ok) return;
    const data = await res.json();

    const docsEl = document.getElementById('rag-stat-docs');
    const chunksEl = document.getElementById('rag-stat-chunks');

    if (docsEl) docsEl.textContent = data.totalDocuments || 0;
    if (chunksEl) chunksEl.textContent = data.totalChunks || 0;
  } catch (e) {
    console.warn('Erro ao carregar stats do acervo:', e);
  }
}

// Load RAG Documents List
async function loadRAGDocuments() {
  const container = document.getElementById('rag-docs-list');
  if (!container) return;

  try {
    const res = await fetch('/api/rag/documents');
    if (!res.ok) throw new Error('Falha ao buscar acervo');
    const data = await res.json();

    if (!data.documents || data.documents.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <div style="font-size: 1.8rem; margin-bottom: 0.3rem;">📭</div>
          <p style="margin: 0; font-size: 0.85rem;">Nenhum PDF indexado ainda. Arraste suas apostilas no painel ao lado.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = data.documents.map(doc => `
      <div style="background: var(--bg-tertiary); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
        <div style="overflow: hidden;">
          <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" title="${doc.filename}">
            📄 ${doc.filename}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.15rem; display: flex; gap: 0.6rem;">
            <span>📚 ${doc.subject || 'Geral'}</span>
            <span>🔢 ${doc.total_chunks} trechos</span>
          </div>
        </div>
        <button class="btn-icon btn-del-doc" data-id="${doc.id}" title="Excluir do acervo" style="cursor: pointer; color: var(--color-danger); opacity: 0.7;">
          🗑️
        </button>
      </div>
    `).join('');

    // Delete document handler
    container.querySelectorAll('.btn-del-doc').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const docId = btn.dataset.id;
        if (!confirm('Deseja remover este PDF do acervo vetorial?')) return;

        try {
          const delRes = await fetch(`/api/rag/documents/${docId}`, { method: 'DELETE' });
          if (delRes.ok) {
            showToast('Documento removido do acervo.', 'success');
            loadRAGStats();
            loadRAGDocuments();
          } else {
            showToast('Erro ao remover documento.', 'error');
          }
        } catch (err) {
          showToast('Erro ao conectar ao servidor.', 'error');
        }
      });
    });

  } catch (e) {
    container.innerHTML = `<p class="text-muted" style="font-size: 0.85rem;">Erro ao carregar documentos.</p>`;
  }
}

// Handle RAG Ask (AI Q&A with Sources)
async function handleRAGAsk() {
  const question = document.getElementById('rag-query-input').value.trim();
  const subject = document.getElementById('rag-subject-filter').value;

  if (!question) {
    showToast('Digite uma dúvida para consultar a IA.', 'warning');
    return;
  }

  const loading = document.getElementById('rag-loading');
  const answerCard = document.getElementById('rag-answer-card');
  const searchCard = document.getElementById('rag-search-results');

  loading.style.display = 'block';
  answerCard.style.display = 'none';
  searchCard.style.display = 'none';

  try {
    const res = await fetch('/api/rag/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, subject })
    });

    const data = await res.json();
    loading.style.display = 'none';

    document.getElementById('rag-answer-content').innerHTML = parseMarkdown(data.answer);
    
    // Render Sources
    const sourcesContainer = document.getElementById('rag-sources-list');
    if (data.sources && data.sources.length > 0) {
      sourcesContainer.innerHTML = data.sources.map(s => `
        <div style="background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center;">
          <span>📄 <strong>${s.filename}</strong> (${s.subject})</span>
          <span class="badge badge-success">Similaridade: ${s.score}%</span>
        </div>
      `).join('');
    } else {
      sourcesContainer.innerHTML = `<p class="text-muted" style="font-size: 0.8rem;">Conhecimento geral da IA.</p>`;
    }

    answerCard.style.display = 'block';

  } catch (e) {
    loading.style.display = 'none';
    showToast('Erro ao consultar a IA. Verifique sua conexão.', 'error');
  }
}

// Handle Semantic Search
async function handleRAGSearch() {
  const query = document.getElementById('rag-query-input').value.trim();
  const subject = document.getElementById('rag-subject-filter').value;

  if (!query) {
    showToast('Digite um termo para pesquisar.', 'warning');
    return;
  }

  const loading = document.getElementById('rag-loading');
  const searchCard = document.getElementById('rag-search-results');
  const answerCard = document.getElementById('rag-answer-card');

  loading.style.display = 'block';
  searchCard.style.display = 'none';
  answerCard.style.display = 'none';

  try {
    const res = await fetch('/api/rag/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, subject, topK: 5 })
    });

    const data = await res.json();
    loading.style.display = 'none';

    const searchList = document.getElementById('rag-search-list');
    if (!data.results || data.results.length === 0) {
      searchList.innerHTML = `<p class="text-muted" style="padding: 1rem; text-align: center;">Nenhum trecho com similaridade encontrado no acervo.</p>`;
    } else {
      searchList.innerHTML = data.results.map((r) => `
        <div style="background: var(--bg-tertiary); border-left: 4px solid var(--color-primary); padding: 1rem; border-radius: var(--radius-sm);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <strong>📄 ${r.filename} <span class="badge badge-info">${r.subject}</span></strong>
            <span class="badge badge-success">Similaridade: ${Math.round(r.score * 100)}%</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-primary); line-height: 1.5; margin: 0;">${r.content}</p>
        </div>
      `).join('');
    }

    searchCard.style.display = 'block';

  } catch (e) {
    loading.style.display = 'none';
    showToast('Erro ao realizar busca vetorial.', 'error');
  }
}
