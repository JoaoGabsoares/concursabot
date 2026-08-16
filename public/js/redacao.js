import { api } from './api.js';
import { showToast } from './utils.js';

export async function render(container) {
  const activeCareer = localStorage.getItem('concursa_active_exam') || 'bb_comercial';

  container.innerHTML = `
    <div class="slide-up">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
            <span style="font-size:1.5rem;">📝</span>
            <h2 style="margin:0; font-size:1.6rem; color:var(--text-primary);">Laboratório de Redação Discursiva</h2>
          </div>
          <p style="margin:0; font-size:0.9rem; color:var(--text-secondary);">
            Correção rigorosa baseada na grade oficial da Cesgranrio e FGV (Tema, Estrutura, Gramática e Argumentação).
          </p>
        </div>
        <div style="display:flex; gap:0.75rem;">
          <button id="btn-tab-escrever" class="btn btn-primary btn-sm active">Nova Redação</button>
          <button id="btn-tab-historico" class="btn btn-secondary btn-sm">Histórico de Notas</button>
        </div>
      </div>

      <!-- View: Escrever Redação -->
      <div id="view-escrever-redacao">
        <!-- Theme Selection Card -->
        <div class="card" style="padding:1.5rem; margin-bottom:1.5rem; border-top:4px solid var(--color-primary);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <label style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">1. Selecione a Proposta de Redação:</label>
            <span class="badge badge-primary" id="badge-banca-tema">Banca: Cesgranrio</span>
          </div>

          <select id="select-tema-redacao" class="form-control" style="margin-bottom:1rem; font-size:0.95rem; font-weight:600;">
            <option value="">Carregando temas...</option>
          </select>

          <div id="tema-context-box" style="background:var(--bg-tertiary); padding:1rem; border-radius:6px; font-size:0.88rem; line-height:1.5; color:var(--text-secondary);">
            Selecione um tema acima para visualizar os textos motivadores e instruções da banca.
          </div>
        </div>

        <!-- Editor Toolbar & Timer -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.75rem;">
          <div style="display:flex; gap:1rem; align-items:center; font-size:0.85rem; font-family:var(--font-mono); color:var(--text-secondary);">
            <span>Palavras: <strong id="editor-word-count" style="color:var(--text-primary);">0</strong></span>
            <span>Linhas estimadas: <strong id="editor-line-count" style="color:var(--text-primary);">0</strong> <small>(Ideal: 20 a 30 linhas)</small></span>
          </div>
          
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div id="redacao-timer" style="font-family:var(--font-mono); font-weight:700; font-size:1rem; color:var(--color-primary); background:var(--bg-secondary); padding:0.3rem 0.75rem; border-radius:6px; border:1px solid var(--border-color);">
              ⏱️ 60:00
            </div>
            <button id="btn-toggle-timer" class="btn btn-secondary btn-sm">Iniciar Timer</button>
          </div>
        </div>

        <!-- Text Area -->
        <div class="card" style="padding:1rem; margin-bottom:1.5rem;">
          <textarea id="redacao-textarea" class="form-control" rows="18" placeholder="Digite sua redação aqui respeitando a estrutura dissertativa-argumentativa (Introdução com tese, Desenvolvimento 1 e 2 com argumentos consistentes, e Conclusão com proposta de solução)..." style="font-family:'Inter', sans-serif; font-size:1rem; line-height:1.7; resize:vertical; padding:1rem;"></textarea>
        </div>

        <!-- Action Button -->
        <div style="display:flex; justify-content:flex-end; gap:1rem; align-items:center;">
          <button id="btn-clear-redacao" class="btn btn-secondary">Limpar</button>
          <button id="btn-submit-redacao" class="btn btn-primary" style="padding:0.75rem 2rem; font-weight:700; font-size:1rem;">
            🚀 Enviar para Correção da Banca IA (+50 XP)
          </button>
        </div>

        <!-- Correction Result Box (Initially Hidden) -->
        <div id="redacao-result-box" style="display:none; margin-top:2.5rem;" class="slide-up">
          <!-- Loaded via JS -->
        </div>
      </div>

      <!-- View: Histórico de Redações -->
      <div id="view-historico-redacao" style="display:none;">
        <div class="card" style="padding:1.5rem;" id="historico-container">
          <div style="text-align:center; padding:2rem; color:var(--text-muted);">Carregando histórico...</div>
        </div>
      </div>
    </div>
  `;

  const viewEscrever = document.getElementById('view-escrever-redacao');
  const viewHistorico = document.getElementById('view-historico-redacao');
  const textarea = document.getElementById('redacao-textarea');
  const wordCountEl = document.getElementById('editor-word-count');
  const lineCountEl = document.getElementById('editor-line-count');
  const timerEl = document.getElementById('redacao-timer');
  const btnToggleTimer = document.getElementById('btn-toggle-timer');
  const selectTema = document.getElementById('select-tema-redacao');
  const temaContextBox = document.getElementById('tema-context-box');
  const badgeBanca = document.getElementById('badge-banca-tema');

  let temasList = [];
  let timerInterval = null;
  let timerSeconds = 60 * 60;
  let timerRunning = false;

  // Load Temas
  try {
    const res = await api.redacao.getTemas(activeCareer);
    if (res.success && res.temas) {
      temasList = res.temas;
      selectTema.innerHTML = temasList.map(t => `<option value="${t.id}">${t.titulo} (${t.banca})</option>`).join('');
      updateTemaContext();
    }
  } catch (e) {
    selectTema.innerHTML = '<option value="">Erro ao carregar temas</option>';
  }

  function updateTemaContext() {
    const selectedId = selectTema.value;
    const tema = temasList.find(t => t.id === selectedId);
    if (tema) {
      badgeBanca.textContent = `Banca: ${tema.banca} • ${tema.cargo}`;
      temaContextBox.innerHTML = `
        <div style="font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">Contexto Motivador:</div>
        <p style="margin-bottom:0.75rem;">${tema.contexto}</p>
        <div style="font-weight:700; color:var(--color-primary); margin-bottom:0.25rem;">Comando da Prova:</div>
        <p style="margin:0; font-style:italic;">${tema.instrucoes}</p>
      `;
    }
  }

  selectTema.addEventListener('change', updateTemaContext);

  // Live Count
  textarea.addEventListener('input', () => {
    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const lines = text ? text.split('\n').filter(l => l.trim().length > 0).length : 0;
    const estimatedLines = Math.max(lines, Math.ceil(words / 9));

    wordCountEl.textContent = words;
    lineCountEl.textContent = estimatedLines;

    if (estimatedLines >= 20 && estimatedLines <= 30) {
      lineCountEl.style.color = '#10B981';
    } else if (estimatedLines > 30) {
      lineCountEl.style.color = '#EF4444';
    } else {
      lineCountEl.style.color = 'var(--text-primary)';
    }
  });

  // Timer
  btnToggleTimer.addEventListener('click', () => {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      btnToggleTimer.textContent = 'Retomar Timer';
    } else {
      timerRunning = true;
      btnToggleTimer.textContent = 'Pausar Timer';
      timerInterval = setInterval(() => {
        if (timerSeconds <= 0) {
          clearInterval(timerInterval);
          showToast('⏰ Tempo esgotado! Revise e envie sua redação.', 'warning');
          return;
        }
        timerSeconds--;
        const mins = Math.floor(timerSeconds / 60);
        const secs = timerSeconds % 60;
        timerEl.textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }, 1000);
    }
  });

  // Submit Essay
  document.getElementById('btn-submit-redacao').addEventListener('click', async () => {
    const texto = textarea.value.trim();
    const selectedId = selectTema.value;
    const temaObj = temasList.find(t => t.id === selectedId);
    const tema = temaObj ? temaObj.titulo : 'Tema Geral';
    const banca = temaObj ? temaObj.banca : 'Cesgranrio';

    if (texto.length < 150) {
      showToast('O texto é muito curto para ser avaliado (mínimo de 150 caracteres).', 'warning');
      return;
    }

    const btn = document.getElementById('btn-submit-redacao');
    btn.disabled = true;
    btn.textContent = '🤖 Banca Examinadora IA Corrigindo...';

    try {
      const res = await api.redacao.corrigir({
        tema,
        texto,
        banca,
        careerId: activeCareer
      });

      showToast(`🎉 Redação corrigida com sucesso! Nota: ${res.notaTotal}/100 (+${res.xpEarned} XP)`, 'success');
      renderCorrectionResult(res);
    } catch (err) {
      showToast('Erro ao corrigir redação.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = '🚀 Enviar para Correção da Banca IA (+50 XP)';
    }
  });

  function renderCorrectionResult(res) {
    const resultBox = document.getElementById('redacao-result-box');
    const fb = res.feedback || {};
    const isApproved = res.notaTotal >= 70.0;

    resultBox.innerHTML = `
      <div class="card" style="padding:2rem; border-top:6px solid ${isApproved ? '#10B981' : '#EF4444'};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="badge" style="background:${isApproved ? '#10B98122' : '#EF444422'}; color:${isApproved ? '#10B981' : '#EF4444'}; font-size:0.9rem; font-weight:800; padding:0.4rem 0.8rem;">
              ${isApproved ? '✓ APROVADO NA REDAÇÃO (Nota ≥ 70)' : '⚠️ ABAIXO DA NOTA DE CORTE (< 70)'}
            </span>
            <h3 style="margin:0.75rem 0 0 0; color:var(--text-primary);">Relatório de Avaliação Oficial</h3>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.85rem; color:var(--text-muted); font-weight:700;">NOTA FINAL</div>
            <div style="font-size:3rem; font-weight:900; font-family:var(--font-mono); color:${isApproved ? '#10B981' : '#EF4444'}; line-height:1;">
              ${res.notaTotal.toFixed(1)} <small style="font-size:1.2rem; color:var(--text-muted);">/ 100</small>
            </div>
          </div>
        </div>

        <!-- 4 Criteria Grid -->
        <div class="grid-4" style="margin-bottom:2rem;">
          <div class="card" style="padding:1rem; text-align:center; background:var(--bg-secondary);">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">1. Tema & Tipologia</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--text-primary); font-family:var(--font-mono); margin-top:0.25rem;">
              ${res.notaTema.toFixed(1)} <small style="font-size:0.8rem; color:var(--text-muted);">/25</small>
            </div>
          </div>
          <div class="card" style="padding:1rem; text-align:center; background:var(--bg-secondary);">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">2. Coesão & Coerência</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--text-primary); font-family:var(--font-mono); margin-top:0.25rem;">
              ${res.notaEstrutura.toFixed(1)} <small style="font-size:0.8rem; color:var(--text-muted);">/25</small>
            </div>
          </div>
          <div class="card" style="padding:1rem; text-align:center; background:var(--bg-secondary);">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">3. Norma Culta</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--text-primary); font-family:var(--font-mono); margin-top:0.25rem;">
              ${res.notaGramatica.toFixed(1)} <small style="font-size:0.8rem; color:var(--text-muted);">/25</small>
            </div>
          </div>
          <div class="card" style="padding:1rem; text-align:center; background:var(--bg-secondary);">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">4. Argumentação</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--text-primary); font-family:var(--font-mono); margin-top:0.25rem;">
              ${res.notaArgumentacao.toFixed(1)} <small style="font-size:0.8rem; color:var(--text-muted);">/25</small>
            </div>
          </div>
        </div>

        <!-- Parecer Geral -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="color:var(--text-primary); margin-bottom:0.5rem;">📋 Parecer da Banca:</h4>
          <p style="font-size:0.95rem; line-height:1.6; color:var(--text-secondary);">${fb.resumo_geral || ''}</p>
        </div>

        <!-- Pontos Fortes e Fracos -->
        <div class="grid-2" style="margin-bottom:1.5rem;">
          <div style="background:#10B98111; border:1px solid #10B98133; padding:1.25rem; border-radius:8px;">
            <h5 style="color:#10B981; margin:0 0 0.5rem 0;">✨ Pontos Fortes:</h5>
            <ul style="margin:0; padding-left:1.2rem; font-size:0.88rem; color:var(--text-primary); line-height:1.5;">
              ${(fb.pontos_fortes || []).map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
          <div style="background:#EF444411; border:1px solid #EF444433; padding:1.25rem; border-radius:8px;">
            <h5 style="color:#EF4444; margin:0 0 0.5rem 0;">⚠️ O que Precisa Melhorar:</h5>
            <ul style="margin:0; padding-left:1.2rem; font-size:0.88rem; color:var(--text-primary); line-height:1.5;">
              ${(fb.pontos_fracos || []).map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Desvios Gramaticais -->
        ${fb.desvios_gramaticais && fb.desvios_gramaticais.length > 0 ? `
          <div style="margin-bottom:1.5rem; background:var(--bg-tertiary); padding:1.25rem; border-radius:8px;">
            <h5 style="color:var(--color-primary); margin:0 0 0.75rem 0;">🔍 Desvios Gramaticais Identificados:</h5>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              ${fb.desvios_gramaticais.map(d => `
                <div style="font-size:0.88rem; padding:0.5rem; background:var(--bg-primary); border-radius:4px;">
                  <span style="color:#EF4444; text-decoration:line-through;">${d.trecho}</span> → <strong style="color:#10B981;">${d.correcao}</strong>
                  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Regra: ${d.regra}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Sugestao de Reescrita -->
        ${fb.sugestao_reescrita ? `
          <div style="background:var(--bg-secondary); border-left:4px solid var(--color-primary); padding:1rem; border-radius:6px;">
            <div style="font-weight:700; font-size:0.85rem; color:var(--color-primary); margin-bottom:0.25rem;">💡 Sugestão de Reescrita da Banca:</div>
            <div style="font-size:0.9rem; line-height:1.5; color:var(--text-secondary);">${fb.sugestao_reescrita}</div>
          </div>
        ` : ''}
      </div>
    `;

    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth' });
  }

  // Tab navigation
  const btnTabEscrever = document.getElementById('btn-tab-escrever');
  const btnTabHistorico = document.getElementById('btn-tab-historico');

  btnTabEscrever.addEventListener('click', () => {
    btnTabEscrever.classList.add('active');
    btnTabHistorico.classList.remove('active');
    viewEscrever.style.display = 'block';
    viewHistorico.style.display = 'none';
  });

  btnTabHistorico.addEventListener('click', async () => {
    btnTabHistorico.classList.add('active');
    btnTabEscrever.classList.remove('active');
    viewEscrever.style.display = 'none';
    viewHistorico.style.display = 'block';
    await loadHistorico();
  });

  async function loadHistorico() {
    const histContainer = document.getElementById('historico-container');
    try {
      const res = await api.redacao.getHistorico();
      if (!res.success || !res.historico || res.historico.length === 0) {
        histContainer.innerHTML = `
          <div style="text-align:center; padding:3rem;">
            <div style="font-size:3rem; margin-bottom:1rem;">📝</div>
            <h4>Nenhuma redação corrigida ainda</h4>
            <p style="color:var(--text-secondary); font-size:0.9rem;">Escreva sua primeira redação para receber nota detalhada e pontos de melhoria da IA.</p>
          </div>
        `;
        return;
      }

      histContainer.innerHTML = `
        <h4 style="margin-bottom:1rem; color:var(--text-primary);">Suas Redações Anteriores</h4>
        <div style="display:flex; flex-direction:column; gap:1rem;">
          ${res.historico.map(h => `
            <div class="card" style="padding:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h5 style="margin:0 0 0.25rem 0; font-size:1rem; color:var(--text-primary);">${h.tema}</h5>
                <span style="font-size:0.8rem; color:var(--text-muted);">${new Date(h.createdAt).toLocaleDateString('pt-BR')} • ${h.wordCount} palavras • Banca ${h.banca}</span>
              </div>
              <div style="text-align:right;">
                <span style="font-size:1.8rem; font-weight:800; font-family:var(--font-mono); color:${h.notaTotal >= 70 ? '#10B981' : '#EF4444'};">
                  ${h.notaTotal.toFixed(1)}
                </span>
                <small style="display:block; font-size:0.75rem; color:var(--text-muted);">de 100</small>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } catch (e) {
      histContainer.innerHTML = '<div style="color:var(--color-danger); text-align:center;">Erro ao carregar histórico.</div>';
    }
  }
}
