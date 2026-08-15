import { api } from './api.js';
import { showToast, showErrorModal, formatDate, getSubjectColor } from './utils.js';

let currentAnalysis = null;
let activeSubjectIndex = 0;

export async function render(container) {
  container.innerHTML = `
    <div class="edital-module slide-up">
      
      <!-- Top Config & Preset Card -->
      <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h3 style="margin:0; color:var(--color-primary);">Raio-X de Tendência de Banca & Editais</h3>
            <p class="text-muted" style="font-size:0.85rem; margin-top:0.25rem;">
              Cruze o edital com a inteligência estatística da banca para descobrir o que <strong>SEMPRE CAI</strong>, o que <strong>NUNCA CAIU</strong> e as <strong>TENDÊNCIAS 2024-2026</strong>.
            </p>
          </div>
        </div>

        <!-- Presets Row -->
        <div style="margin-top:1rem;">
          <label style="font-weight:600; font-size:0.85rem; color:var(--text-secondary);">Modelos Oficiais Pré-Carregados (1 Clique):</label>
          <div class="preset-pills-container" id="preset-pills">
            <button class="preset-pill-btn active" data-preset="receita-atrfb-fgv">Receita Federal (ATRFB) • FGV</button>
            <button class="preset-pill-btn" data-preset="ses-rj-saude">Saúde SES-RJ • IBDO / FGV</button>
            <button class="preset-pill-btn" data-preset="marinha-rm2-pracas">Marinha do Brasil (Praças RM2) • DEnsM</button>
            <button class="preset-pill-btn" data-preset="adm-tribunais-fgv">Administrativo & Tribunais • FGV</button>
            <button class="preset-pill-btn" data-preset="custom">Outro Concurso (Personalizado)</button>
          </div>
        </div>

        <!-- Inputs Form -->
        <div style="margin-top:1.25rem;">
          <div class="grid-2">
            <div class="form-group">
              <label for="edital-cargo" style="font-weight:600;">Cargo e Órgão</label>
              <input type="text" id="edital-cargo" class="form-control" value="Analista Tributário da Receita Federal (ATRFB)">
            </div>
            <div class="form-group">
              <label style="font-weight:600;">Banca Examinadora</label>
              <div class="banca-chips-row" id="banca-chips">
                <button type="button" class="banca-chip-btn active" data-banca="FGV">FGV</button>
                <button type="button" class="banca-chip-btn" data-banca="IBDO">IBDO</button>
                <button type="button" class="banca-chip-btn" data-banca="DEnsM">DEnsM</button>
                <button type="button" class="banca-chip-btn" data-banca="CEBRASPE">CEBRASPE</button>
                <button type="button" class="banca-chip-btn" data-banca="FCC">FCC</button>
              </div>
            </div>
          </div>

          <div class="form-group" id="edital-text-wrapper" style="margin-top:0.75rem;">
            <label for="edital-text" style="font-weight:600; display:flex; justify-content:space-between;">
              <span>Conteúdo Programático do Edital</span>
              <span class="text-muted" style="font-size:0.75rem; font-weight:normal;">(A IA analisa qualquer lista de matérias)</span>
            </label>
            <textarea id="edital-text" class="form-control" style="height: 120px; font-family:'Inter',sans-serif; font-size:0.85rem;" placeholder="Cole aqui o conteúdo programático do anexo de disciplinas..."></textarea>
          </div>

          <button id="btn-analyze-edital" class="btn btn-primary" style="width:100%; margin-top:1rem; padding:0.9rem; background:var(--color-primary); font-size:1rem; font-weight:700; border:none; color:#fff;">
            <span class="btn-text">Gerar Raio-X de Tendência da Banca</span>
            <span class="btn-loading" style="display:none; color:#fff;">Cruzando edital com histórico de provas da banca...</span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div id="edital-loading" style="display:none; text-align:center; padding:3rem;" class="card">
        <div class="spinner" style="border-left-color: var(--color-edital); margin:0 auto;"></div>
        <h4 style="margin-top:1.25rem; font-size:1.1rem;">Decodificando Padrões & Estatísticas da Banca...</h4>
        <p class="text-muted" style="font-size:0.85rem; margin-top:0.3rem;">Cruzando os artigos de lei mais recorrentes, teses do STF/STJ e armadilhas clássicas do examinador.</p>
      </div>

      <!-- Analysis Results View -->
      <div id="edital-result" class="slide-up" style="display:none;"></div>

    </div>
  `;

  const activeExamId = localStorage.getItem('concursa_active_exam') || 'atrfb';
  let defaultPreset = 'receita-atrfb-fgv';
  if (activeExamId === 'ses_rj') defaultPreset = 'ses-rj-saude';
  else if (activeExamId === 'marinha_rm2') defaultPreset = 'marinha-rm2-pracas';
  else if (activeExamId === 'adm_tribunais') defaultPreset = 'adm-tribunais-fgv';

  currentSelectedPresetId = defaultPreset;

  document.querySelectorAll('.preset-pill-btn').forEach(btn => {
    if (btn.dataset.preset === defaultPreset) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  setupEvents();
  loadPreset(defaultPreset);
}

// ============================================================
// EVENTS & PRESET CONTROLS
// ============================================================

let currentSelectedBanca = 'FGV';
let currentSelectedPresetId = 'receita-atrfb-fgv';

function setupEvents() {
  // Preset buttons
  document.querySelectorAll('.preset-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetId = btn.dataset.preset;
      currentSelectedPresetId = presetId;
      loadPreset(presetId);
    });
  });

  // Banca chips
  document.querySelectorAll('.banca-chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.banca-chip-btn').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSelectedBanca = chip.dataset.banca;
    });
  });

  // Generate Button
  document.getElementById('btn-analyze-edital').addEventListener('click', handleAnalyze);
}

async function loadPreset(presetId) {
  const cargoInput = document.getElementById('edital-cargo');
  const textArea = document.getElementById('edital-text');

  if (presetId === 'custom') {
    cargoInput.value = '';
    textArea.value = '';
    textArea.placeholder = 'Cole aqui o conteúdo programático do edital...';
    return;
  }

  try {
    const res = await fetch(`/api/edital/presets/${presetId}`);
    if (res.ok) {
      const preset = await res.json();
      cargoInput.value = preset.cargo;
      textArea.value = preset.editalText.trim();
      
      // Update active banca chip
      document.querySelectorAll('.banca-chip-btn').forEach(chip => {
        if (chip.dataset.banca.toUpperCase() === preset.banca.toUpperCase()) {
          chip.classList.add('active');
          currentSelectedBanca = preset.banca;
        } else {
          chip.classList.remove('active');
        }
      });
    }
  } catch (e) {
    console.error('Error loading preset:', e);
  }
}

// ============================================================
// ANALYZE ACTION
// ============================================================

async function handleAnalyze() {
  const cargo = document.getElementById('edital-cargo').value.trim();
  const editalText = document.getElementById('edital-text').value.trim();
  const banca = currentSelectedBanca;

  if (!editalText) {
    showToast('Insira o texto do edital ou selecione um modelo.', 'warning');
    return;
  }

  const btn = document.getElementById('btn-analyze-edital');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');
  const loadingEl = document.getElementById('edital-loading');
  const resultEl = document.getElementById('edital-result');

  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  resultEl.style.display = 'none';
  loadingEl.style.display = 'block';

  showToast(`🤖 Analisando tendências de cobrança da ${banca}...`, 'info');

  try {
    const res = await fetch('/api/edital/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cargo,
        banca,
        editalText
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Falha ao processar edital');
    }

    const data = await res.json();
    currentAnalysis = data.analysis;
    activeSubjectIndex = 0;

    renderAnalysisResult(data.analysis);
    showToast('🎉 Raio-X de Tendência gerado com sucesso!', 'success');

  } catch (error) {
    console.error('Edital analysis error:', error);
    showErrorModal('Falha na Análise de Edital', error, {
      banca,
      cargo,
      tamanhoEdital: editalText.length
    });
  } finally {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    loadingEl.style.display = 'none';
  }
}

function getCareerIdFromCargo(cargo = '', presetId = '') {
  if (presetId === 'ses-rj-saude' || cargo.includes('SES-RJ') || cargo.includes('Saúde')) return 'ses_rj';
  if (presetId === 'marinha-rm2-pracas' || cargo.includes('Marinha') || cargo.includes('RM2')) return 'marinha_rm2';
  if (presetId === 'adm-tribunais-fgv' || cargo.includes('Administrativo') || cargo.includes('Tribunais')) return 'adm_tribunais';
  return 'atrfb';
}

async function renderAnalysisResult(analysis) {
  const container = document.getElementById('edital-result');
  if (!container || !analysis) return;

  const profile = analysis.bancaProfile || {};
  const dist = profile.distribuicaoPercentual || { letraLei: 40, jurisprudencia: 35, casosPraticos: 15, doutrina: 10 };
  const disciplinas = analysis.disciplinas || [];
  const planoAtaque = analysis.planoAtaque || [];
  const careerId = getCareerIdFromCargo(analysis.cargo, currentSelectedPresetId);

  // Fetch Benchmarks and Pipeline for this career
  let benchmarksData = null;
  let pipelineData = null;
  try {
    const [benchRes, pipeRes] = await Promise.all([
      fetch(`/api/benchmarks/${careerId}`),
      fetch(`/api/benchmarks/pipelines/${careerId}`)
    ]);
    if (benchRes.ok) benchmarksData = await benchRes.json();
    if (pipeRes.ok) pipelineData = await pipeRes.json();
  } catch (e) {}

  const editions = benchmarksData?.editions || [];
  const phases = pipelineData?.phases || [];

  container.innerHTML = `
    <!-- Top DNA da Banca Card -->
    <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <span class="doc-stamp revisao">DNA DO EXAMINADOR • ${analysis.banca}</span>
          <h3 style="margin:0.35rem 0 0 0; font-size:1.25rem;">${analysis.cargo}</h3>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="window.location.hash='#schedule'">
            Aplicar no Cronograma
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.location.hash='#simulados'">
            Simulado da Tendência
          </button>
        </div>
      </div>

      <p style="margin:0.75rem 0 0 0; font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
        ${analysis.resumoEstrategico || profile.estiloGeral}
      </p>

      <!-- Proportions Bar -->
      <div style="margin-top:1.25rem;">
        <label style="font-weight:600; font-size:0.8rem; text-transform:uppercase; color:var(--text-muted);">
          Como a banca divide as questões na prova:
        </label>
        
        <div class="dna-bar-wrapper">
          <div class="dna-segment dna-lei" style="width: ${dist.letraLei}%;" title="Letra da Lei: ${dist.letraLei}%">
            ${dist.letraLei}% Lei
          </div>
          <div class="dna-segment dna-juris" style="width: ${dist.jurisprudencia}%;" title="Jurisprudência/Súmulas: ${dist.jurisprudencia}%">
            ${dist.jurisprudencia}% Jurisprudência
          </div>
          <div class="dna-segment dna-casos" style="width: ${dist.casosPraticos}%;" title="Casos Práticos: ${dist.casosPraticos}%">
            ${dist.casosPraticos}% Casos
          </div>
          <div class="dna-segment dna-doutrina" style="width: ${dist.doutrina}%;" title="Doutrina: ${dist.doutrina}%">
            ${dist.doutrina}% Doutrina
          </div>
        </div>

        <div class="dna-legend-grid">
          <div class="dna-legend-item"><span class="dna-dot" style="background:#1B365D;"></span> <span>Letra da Lei (${dist.letraLei}%)</span></div>
          <div class="dna-legend-item"><span class="dna-dot" style="background:#059669;"></span> <span>Jurisprudência / Súmulas (${dist.jurisprudencia}%)</span></div>
          <div class="dna-legend-item"><span class="dna-dot" style="background:#D97706;"></span> <span>Casos Práticos (${dist.casosPraticos}%)</span></div>
          <div class="dna-legend-item"><span class="dna-dot" style="background:#475569;"></span> <span>Doutrina Teórica (${dist.doutrina}%)</span></div>
        </div>
      </div>

      <!-- Pegadinhas Recorrentes -->
      ${profile.armadilhasClassicas && profile.armadilhasClassicas.length > 0 ? `
        <div style="margin-top:1.25rem; padding:0.85rem 1rem; background:rgba(220, 38, 38, 0.08); border-left:3px solid var(--color-status-danger); border-radius:2px;">
          <strong style="color:var(--color-status-danger); font-size:0.85rem;">Armadilhas & Pegadinhas Clássicas da ${analysis.banca}:</strong>
          <ul style="margin:0.35rem 0 0 1.2rem; font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
            ${profile.armadilhasClassicas.map(arm => `<li>${arm}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>

    <!-- Linha do Tempo: 3 Últimos Concursos Oficiais -->
    ${editions.length > 0 ? `
      <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <div>
            <h3 style="margin:0; font-size:1.1rem; color:var(--text-primary);">Histórico dos Últimos Concursos Oficiais</h3>
            <p class="text-muted" style="font-size:0.8rem; margin-top:0.15rem;">Dados validados de notas de corte, vagas e temas cobrados</p>
          </div>
          <span class="doc-stamp revisao">${editions.length} Edições Mapeadas</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
          ${editions.map(ed => `
            <div style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:0.9rem 1rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <strong style="font-size:0.95rem; color:var(--text-primary);">Edição ${ed.edition_year} (${ed.banca})</strong>
                <span class="badge badge-secondary" style="font-size:0.72rem; font-family:var(--font-mono);">${ed.vagas_total || 0} vagas</span>
              </div>
              <div style="font-size:0.8rem; color:var(--color-primary); font-weight:700; margin-bottom:0.4rem; font-family:var(--font-mono);">
                Nota de Corte: ${ed.corte_historico || 'N/A'}
              </div>
              ${ed.pegadinhas_historicas && ed.pegadinhas_historicas.length > 0 ? `
                <div style="font-size:0.78rem; color:var(--text-secondary); line-height:1.4; margin-bottom:0.4rem;">
                  <strong style="color:var(--color-status-danger);">Pegadinha:</strong> ${ed.pegadinhas_historicas[0]}
                </div>
              ` : ''}
              ${ed.temas_discursivas?.tema_cobrado ? `
                <div style="font-size:0.78rem; color:var(--text-secondary); line-height:1.4;">
                  <strong style="color:var(--color-primary);">Discursiva:</strong> ${ed.temas_discursivas.tema_cobrado}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 🗺️ Fluxo de Estudo Validado por Aprovados (Study Pipeline) -->
    ${phases.length > 0 ? `
      <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="doc-stamp coberto">Roadmap Comprovado</span>
              <span style="font-size:0.8rem; color:var(--text-muted);">${pipelineData.author_source || 'Validado por aprovados'}</span>
            </div>
            <h3 style="margin:0.25rem 0 0 0; font-size:1.15rem; color:var(--text-primary);">${pipelineData.method_name}</h3>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-top:1rem;">
          ${phases.map(ph => `
            <div style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:1rem; display:flex; flex-direction:column;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <strong style="color:var(--color-primary); font-size:0.92rem;">${ph.name}</strong>
                <span class="badge badge-secondary" style="font-size:0.7rem; font-family:var(--font-mono);">${ph.duration_weeks}</span>
              </div>
              <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.6rem; line-height:1.4;">${ph.description}</p>
              <div style="background:var(--bg-card); border:1px solid var(--border-color); padding:0.6rem 0.75rem; border-radius:4px; margin-bottom:0.6rem;">
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Rotina Diária Recomendada:</div>
                <div style="font-size:0.8rem; color:var(--text-primary); font-weight:600; margin-top:0.15rem;">${ph.daily_routine}</div>
              </div>
              <div style="margin-top:auto;">
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.3rem;">Regras de Ação:</div>
                <ul style="margin:0 0 0 1.1rem; font-size:0.78rem; color:var(--text-secondary); line-height:1.4;">
                  ${ph.action_rules.map(rule => `<li>${rule}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Raio-X por Disciplinas -->
    <div class="card" style="margin-bottom: 1.5rem;">
      <h3 style="margin-bottom:1rem;">Raio-X Preditivo de Disciplinas & Assuntos</h3>
      
      <!-- Subjects Tabs Navigation -->
      <div class="raiox-subject-tabs" id="subject-tabs">
        ${disciplinas.map((d, index) => {
          return `
            <button class="raiox-tab-btn ${index === 0 ? 'active' : ''}" data-index="${index}">
              <span class="badge badge-secondary" style="font-size:0.7rem;">${d.pesoRelevancia || 'Core'}</span>
              ${d.nome}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Subject Content Area -->
      <div id="subject-tab-content"></div>
    </div>

    <!-- Plano de Ataque Final -->
    ${planoAtaque.length > 0 ? `
      <div class="card" style="border-left: 4px solid var(--color-primary);">
        <h3 style="color:var(--color-primary); margin-bottom:0.75rem;">Plano de Ataque Estratégico (Regra de Pareto 80/20)</h3>
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          ${planoAtaque.map((step, idx) => `
            <div style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.9rem; line-height:1.4;">
              <span style="font-weight:700; color:var(--color-primary); font-family:var(--font-mono); min-width:20px;">${idx + 1}.</span>
              <span>${step}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;

  container.style.display = 'block';

  // Setup Subject Tab Switching
  setupSubjectTabEvents(disciplinas);
  renderSubjectDetail(disciplinas[0]);
}

function setupSubjectTabEvents(disciplinas) {
  document.querySelectorAll('.raiox-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.raiox-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.index, 10);
      renderSubjectDetail(disciplinas[idx]);
    });
  });
}

function renderSubjectDetail(subject) {
  const contentEl = document.getElementById('subject-tab-content');
  if (!contentEl || !subject) return;

  const quentes = subject.topicosQuentes || [];
  const tendencias = subject.tendenciasRecentes || [];
  const medios = subject.topicosMedios || [];
  const iscas = subject.topicosIsca || [];

  contentEl.innerHTML = `
    <!-- Subject Header -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem; padding-bottom:0.75rem; border-bottom:1px solid var(--glass-border);">
      <div>
        <h4 style="margin:0; font-size:1.15rem;">${subject.nome}</h4>
        <p class="text-muted" style="margin:0.2rem 0 0 0; font-size:0.85rem;">${subject.diagnosticoDisciplina || 'Análise preditiva de incidência'}</p>
      </div>
      <div style="display:flex; gap:0.5rem;">
        <span class="badge badge-warning">${subject.questoesEstimadas ? `~${subject.questoesEstimadas} questões` : 'Peso Alto'}</span>
        <button class="btn btn-primary btn-sm" onclick="window.location.hash='#study-room'">
          📖 Estudar Matéria
        </button>
      </div>
    </div>

    <!-- 1. SEMPRE CAI (> 75%) -->
    <div class="raiox-category-section">
      <div class="raiox-category-header" style="color:#F87171;">
        <span>🔥 SEMPRE CAI (Alta Incidência — Prioridade Máxima)</span>
      </div>
      ${quentes.length > 0 ? quentes.map(t => `
        <div class="raiox-topic-card quente">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
            <strong style="font-size:0.95rem; color:#FEE2E2;">${t.nome}</strong>
            <span class="prob-badge prob-quente">${t.probabilidade || 90}% de chance</span>
          </div>
          <p style="margin:0.35rem 0 0 0; font-size:0.83rem; color:var(--text-secondary); line-height:1.4;">
            💡 <strong>Por que a banca ama cobrar:</strong> ${t.motivoBanca}
          </p>
          ${t.artigosObrigatorios && t.artigosObrigatorios.length > 0 ? `
            <div class="artigos-tag-list">
              <span style="font-size:0.72rem; color:#F87171; font-weight:700; align-self:center;">Artigos/Súmulas:</span>
              ${t.artigosObrigatorios.map(art => `<span class="artigo-tag">${art}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `).join('') : '<p class="text-muted" style="font-size:0.85rem;">Nenhum tópico com incidência extrema mapeado.</p>'}
    </div>

    <!-- 2. TENDÊNCIAS RECENTES (2024-2026) -->
    ${tendencias.length > 0 ? `
      <div class="raiox-category-section">
        <div class="raiox-category-header" style="color:#60A5FA;">
          <span>📈 TENDÊNCIAS RECENTES (Inovações 2024-2026)</span>
        </div>
        ${tendencias.map(t => `
          <div class="raiox-topic-card tendencia">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
              <strong style="font-size:0.95rem; color:#DBEAFE;">${t.nome}</strong>
              <span class="prob-badge prob-tendencia">⚡ ${t.anoRelevancia || '2024-2026'}</span>
            </div>
            <p style="margin:0.35rem 0 0 0; font-size:0.83rem; color:var(--text-secondary); line-height:1.4;">
              🚀 <strong>O que a banca está cobrando:</strong> ${t.inovacao}
            </p>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <!-- 3. MÉDIA INCIDÊNCIA (30% a 70%) -->
    ${medios.length > 0 ? `
      <div class="raiox-category-section">
        <div class="raiox-category-header" style="color:#FBBF24;">
          <span>⚠️ INCIDÊNCIA MÉDIA (30% a 70%)</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.5rem;">
          ${medios.map(t => `
            <div class="raiox-topic-card medio" style="margin:0;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:0.85rem;">${t.nome}</span>
                <span class="prob-badge prob-medio">${t.probabilidade || 50}%</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 4. TÓPICOS ISCA / RARAMENTE COBRADOS (< 15%) -->
    ${iscas.length > 0 ? `
      <div class="raiox-category-section" style="margin-top:1rem;">
        <div class="raiox-category-header" style="color:#94A3B8;">
          <span>🧊 TÓPICOS ISCA / RARAMENTE COBRADOS (&lt; 15% — Não perca tempo)</span>
        </div>
        ${iscas.map(t => `
          <div class="raiox-topic-card isca">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
              <strong style="font-size:0.85rem; color:#CBD5E1;">${t.nome}</strong>
              <span class="prob-badge prob-isca">${t.probabilidade || 10}% chance</span>
            </div>
            <p style="margin:0.25rem 0 0 0; font-size:0.8rem; color:#94A3B8;">
              🛡️ <strong>Alerta:</strong> ${t.alerta}
            </p>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}
