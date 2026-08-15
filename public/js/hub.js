import { showToast } from './utils.js';

// Pre-configured Exam Catalogs
export const EXAM_CATALOG = [
  {
    id: 'atrfb',
    category: 'fiscal',
    title: 'Receita Federal do Brasil',
    role: 'Analista-Tributário (ATRFB) & Auditor (AFRFB)',
    banca: 'FGV (Fundação Getulio Vargas)',
    status: 'active',
    statusLabel: '🟢 Em Andamento (Wave 1 & 2)',
    icon: '🏛️',
    color: 'primary',
    description: 'Ciclo estratégico focado nas 140 questões do edital com peso máximo em Tributário, Previdenciário e Fluência de Dados.',
    stats: {
      materias: 12,
      pesoFoco: '80% da Prova (Wave 1)',
      questoesTotal: 140
    },
    subjects: [
      { name: 'Direito Tributário', weight: '16q (Alto)' },
      { name: 'Direito Previdenciário', weight: '16q (Alto)' },
      { name: 'Língua Portuguesa', weight: '15q' },
      { name: 'Fluência em Dados', weight: '15q' },
      { name: 'Direito Constitucional', weight: '14q' },
      { name: 'Legislação Tributária & Aduaneira', weight: '10q' }
    ]
  },
  {
    id: 'ses_rj',
    category: 'saude',
    title: 'SES-RJ / IASERJ 2026 (Saúde RJ)',
    role: 'Técnico de Enfermagem & Assistente Administrativo',
    banca: 'Instituto IBDO Projetos (Oficial 2026)',
    status: 'ready',
    statusLabel: '🟢 Edital Aberto (287 vagas)',
    icon: '🏥',
    color: 'success',
    description: 'Primeiro concurso estatutário da Saúde RJ em 25 anos. Foco em Legislação do SUS (Leis 8.080 e 8.142), Português e Conhecimentos Específicos.',
    stats: {
      materias: 5,
      pesoFoco: 'SUS & Específicas do Cargo',
      questoesTotal: 70
    },
    subjects: [
      { name: 'Legislação do SUS & Saúde Pública RJ', weight: '15 questões' },
      { name: 'Língua Portuguesa Normativa', weight: '15 questões' },
      { name: 'Enfermagem & Cuidados Clínicos', weight: '20 questões' },
      { name: 'Administração Pública & Protocolo', weight: '20 questões' }
    ]
  },
  {
    id: 'marinha_rm2',
    category: 'militar',
    title: 'Marinha do Brasil (Praças RM2 / SMV)',
    role: 'Cabo / Terceiro-Sargento Temporário (SMV-Praças)',
    banca: 'DEnsM / Marinha do Brasil (Oficial)',
    status: 'ready',
    statusLabel: '🟢 Prova Anual (~620 vagas)',
    icon: '⚓',
    color: 'cyan',
    description: 'Concurso anual da Marinha para praças temporários com 50 questões: 25 de Língua Portuguesa e 25 de Formação Militar-Naval.',
    stats: {
      materias: 2,
      pesoFoco: 'Português (50%) + Militar-Naval (50%)',
      questoesTotal: 50
    },
    subjects: [
      { name: 'Língua Portuguesa (Gramática & Sintaxe)', weight: '25 questões (50%)' },
      { name: 'Formação Militar-Naval (Lei 6.880 e RDM)', weight: '25 questões (50%)' }
    ]
  },
  {
    id: 'adm_tribunais',
    category: 'administrativo',
    title: 'Carreiras Administrativas & Tribunais',
    role: 'Técnico e Analista Administrativo (TJs, TRFs, TRTs)',
    banca: 'FGV / Cebraspe / FCC',
    status: 'ready',
    statusLabel: '⚪ Disponível',
    icon: '🏢',
    color: 'warning',
    description: 'Tronco comum de altíssimo aproveitamento para Tribunais e órgãos federais com nova Lei de Licitações (14.133) e Gestão Pública.',
    stats: {
      materias: 8,
      pesoFoco: 'Direito Adm + Constitucional',
      questoesTotal: 100
    },
    subjects: [
      { name: 'Direito Administrativo & Licitações (Lei 14.133)', weight: 'Foco Central' },
      { name: 'Direito Constitucional & Administração Pública', weight: 'Fundamental' },
      { name: 'Administração Geral e Pública', weight: 'Gestão' },
      { name: 'Raciocínio Lógico-Matemático e Português', weight: 'Básico' }
    ]
  }
];

export function getExamOverlap(activeId, targetId) {
  if (activeId === targetId) return 100;
  const matrix = {
    'atrfb': { 'adm_tribunais': 75, 'marinha_rm2': 45, 'ses_rj': 35 },
    'ses_rj': { 'adm_tribunais': 50, 'marinha_rm2': 40, 'atrfb': 35 },
    'marinha_rm2': { 'atrfb': 45, 'adm_tribunais': 45, 'ses_rj': 40 },
    'adm_tribunais': { 'atrfb': 75, 'ses_rj': 50, 'marinha_rm2': 45 }
  };
  return matrix[activeId]?.[targetId] || 40;
}

export async function render(container) {
  const currentActiveId = localStorage.getItem('concursa_active_exam') || 'atrfb';

  container.innerHTML = `
    <div class="hub-container fade-in">
      <!-- Hub Editorial Header -->
      <div class="hub-header">
        <div class="hub-header-badge">
          <span>🎯 Hub Multicarreiras ConcursaBot</span>
        </div>
        <h1 class="hub-title">Escolha seu Objetivo de Estudo</h1>
        <p class="hub-subtitle">
          Selecione a carreira desejada para carregar automaticamente o edital verticalizado, 
          as tendências de banca específicas e o cronograma de estudos personalizado.
        </p>

        <!-- Category Filters -->
        <div class="hub-filter-pills" id="hub-filters">
          <button class="hub-filter-btn active" data-filter="all">Todas as Áreas (4)</button>
          <button class="hub-filter-btn" data-filter="fiscal">🏛️ Fiscal & Receita</button>
          <button class="hub-filter-btn" data-filter="saude">🏥 Saúde (SES-RJ)</button>
          <button class="hub-filter-btn" data-filter="militar">⚓ Militar (Marinha RM2)</button>
          <button class="hub-filter-btn" data-filter="administrativo">🏢 Administrativo</button>
        </div>
      </div>

      <!-- Career Cards Grid -->
      <div class="hub-grid" id="career-grid">
        ${EXAM_CATALOG.map(exam => {
          const isActive = exam.id === currentActiveId;
          return `
            <div class="card career-card ${isActive ? 'career-active' : ''}" data-category="${exam.category}" data-id="${exam.id}">
              <!-- Top Card Meta -->
              <div class="career-card-top">
                <div class="career-card-icon">${exam.icon}</div>
                <div class="career-card-tags">
                  <span class="badge ${isActive ? 'badge-primary' : 'badge-secondary'}">
                    ${isActive ? '🟢 Foco Atual Ativo' : exam.statusLabel}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="career-card-body">
                <h3 class="career-card-title">${exam.title}</h3>
                <div class="career-card-role">${exam.role}</div>
                <div class="career-card-banca">
                  <span>🏛️ <strong>Banca Predominante:</strong> ${exam.banca}</span>
                </div>
                <p class="career-card-desc">${exam.description}</p>

                <!-- Core Subjects List -->
                <div class="career-card-subjects-box">
                  <div class="career-card-subjects-header">📚 Matérias Prioritárias do Edital:</div>
                  <div class="career-card-subjects-tags">
                    ${exam.subjects.map(s => `
                      <span class="subject-tag">
                        <strong>${s.name}</strong> <small>(${s.weight})</small>
                      </span>
                    `).join('')}
                  </div>
                </div>

                ${!isActive ? `
                  <div class="conciliar-pill" style="display:inline-flex; align-items:center; gap:0.35rem; padding:0.25rem 0.6rem; border-radius:12px; background:rgba(99,102,241,0.12); color:#818CF8; font-size:0.75rem; font-weight:600; margin-top:0.6rem; border:1px solid rgba(99,102,241,0.25);">
                    <span>⚡ Dá pra conciliar: <strong>${getExamOverlap(currentActiveId, exam.id)}%</strong> de sobreposição de matérias</span>
                  </div>
                ` : ''}

                <!-- 3 Últimos Concursos Widget Expansível -->
                <div class="benchmarks-preview-box" id="benchmarks-${exam.id}">
                  <button class="btn-toggle-benchmarks" data-id="${exam.id}">
                    <span>📜 Base Validada: 3 Últimos Concursos Oficiais</span>
                    <span class="arrow-icon">▾</span>
                  </button>
                  <div class="benchmarks-details" id="benchmarks-details-${exam.id}" style="display:none;">
                    <div class="loading-placeholder-sm">Carregando histórico dos 3 últimos editais...</div>
                  </div>
                </div>
              </div>

              <!-- Footer Action -->
              <div class="career-card-footer">
                <button class="btn ${isActive ? 'btn-primary' : 'btn-secondary'} btn-block btn-select-exam" data-id="${exam.id}">
                  ${isActive ? '🚀 Entrar no Workspace de Estudos' : '⚡ Ativar este Concurso & Estudar'}
                </button>
              </div>
            </div>
          `;
        }).join('')}

        <!-- Card Expansível: Cadastrar Novo Concurso -->
        <div class="card career-card career-card-add" id="card-add-custom-exam">
          <div class="add-exam-content">
            <div class="add-exam-icon">➕</div>
            <h3>Adicionar Novo Concurso</h3>
            <p>Tem outro edital em vista? Cadastre um novo certame subindo o edital em PDF ou colando os dados da banca.</p>
            <button class="btn btn-secondary btn-sm" id="btn-modal-add-exam">
              📋 Cadastrar Novo Edital
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Adicionar Concurso Personalizado (Modal Overlay Centralizado) -->
    <div id="modal-custom-exam" class="modal-overlay" style="display:none;">
      <div class="modal" style="max-width:560px;">
        <div class="modal-header">
          <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary); display:flex; align-items:center; gap:0.5rem;">
            <span>➕</span> Cadastrar Novo Concurso & Edital
          </h3>
          <button class="btn-close" id="btn-close-exam-modal" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--text-muted);">✕</button>
        </div>
        <div class="modal-body">
          <p class="text-muted" style="font-size:0.85rem; margin-top:-0.25rem;">
            Cadastre os dados do certame para criar seu Workspace de estudos e calibrar a inteligência da IA.
          </p>
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Nome do Órgão / Concurso:</label>
            <input type="text" id="custom-exam-name" class="form-control" placeholder="Ex: TJ-SP, Polícia Federal, EBSERH, Bacen...">
          </div>
          <div class="grid-2">
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Cargo / Especialidade:</label>
              <input type="text" id="custom-exam-role" class="form-control" placeholder="Ex: Analista Judiciário, Enfermeiro...">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Banca Examinadora:</label>
              <input type="text" id="custom-exam-banca" class="form-control" placeholder="Ex: FGV, Cebraspe, FCC, Vunesp...">
            </div>
          </div>
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Área do Concurso:</label>
            <select id="custom-exam-category" class="form-control">
              <option value="administrativo">🏢 Administrativo & Tribunais</option>
              <option value="saude">🏥 Saúde & Enfermagem</option>
              <option value="militar">⚓ Militar & Forças Armadas</option>
              <option value="policial">👮 Policial & Segurança</option>
              <option value="fiscal">🏛️ Fiscal & Controle</option>
            </select>
          </div>
          <div style="background:var(--color-primary-bg, rgba(27,54,93,0.08)); border-left:3px solid var(--color-primary); padding:0.85rem; border-radius:6px; font-size:0.82rem; color:var(--text-secondary);">
            💡 <strong>Próximo Passo:</strong> Após cadastrar, você poderá enviar o edital em PDF no módulo <strong>Biblioteca (RAG)</strong> para gerar simulados e resumos específicos da sua banca.
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="btn-cancel-custom-exam">Cancelar</button>
          <button class="btn btn-primary" id="btn-save-custom-exam" style="background:var(--color-primary); border-color:var(--color-primary);">Salvar & Entrar no Workspace</button>
        </div>
      </div>
    </div>
  `;

  // Attach Event Handlers
  setupHubEvents();
}

function setupHubEvents() {
  // Filter Tabs
  document.querySelectorAll('.hub-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hub-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.career-card:not(.career-card-add)').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Toggle benchmarks dropdown on career card
  document.querySelectorAll('.btn-toggle-benchmarks').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const careerId = btn.getAttribute('data-id');
      const container = document.getElementById(`benchmarks-details-${careerId}`);
      if (!container) return;

      const isHidden = container.style.display === 'none';
      container.style.display = isHidden ? 'block' : 'none';
      btn.querySelector('.arrow-icon').textContent = isHidden ? '▴' : '▾';

      if (isHidden && !container.getAttribute('data-loaded')) {
        try {
          const [benchRes, pipeRes] = await Promise.all([
            fetch(`/api/benchmarks/${careerId}`),
            fetch(`/api/benchmarks/pipelines/${careerId}`)
          ]);
          const benchData = await benchRes.json();
          const pipeData = await pipeRes.json();
          const editions = benchData.editions || [];
          const phases = pipeData.phases || [];

          let html = '';

          // Study Pipeline Summary
          if (pipeData && phases.length > 0) {
            html += `
              <div style="background:rgba(16, 185, 129, 0.08); border:1px solid rgba(16, 185, 129, 0.25); border-radius:6px; padding:0.75rem; margin-bottom:0.75rem;">
                <div style="font-size:0.72rem; font-weight:700; color:var(--color-success); text-transform:uppercase; display:flex; justify-content:space-between;">
                  <span>🗺️ Fluxo Validado (${pipeData.method_name})</span>
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.15rem;">${pipeData.author_source}</div>
                <div style="margin-top:0.4rem; display:flex; flex-direction:column; gap:0.35rem;">
                  ${phases.map((p, idx) => `
                    <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.3;">
                      <strong style="color:var(--text-primary);">${idx + 1}. ${p.name}</strong> <span class="badge badge-secondary" style="font-size:0.65rem;">${p.duration_weeks}</span>
                      <div style="font-size:0.72rem; color:var(--text-muted);">${p.daily_routine}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }

          // 3 Editions Timeline
          if (editions.length === 0) {
            html += `<p class="text-muted" style="font-size:0.8rem; margin:0.5rem 0;">Nenhum edital anterior cadastrado.</p>`;
          } else {
            html += editions.map(ed => `
              <div class="benchmark-edition-item">
                <div class="benchmark-edition-header">
                  <strong>Edição ${ed.edition_year} (${ed.banca})</strong>
                  <span class="badge badge-secondary" style="font-size:0.7rem;">Corte: ${ed.corte_historico || 'N/A'}</span>
                </div>
                ${ed.pegadinhas_historicas && ed.pegadinhas_historicas.length > 0 ? `
                  <div class="benchmark-pegadinhas-box">
                    <span style="color:var(--color-danger); font-weight:700; font-size:0.75rem;">⚠️ Pegadinha Cobrada:</span>
                    <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">${ed.pegadinhas_historicas[0]}</p>
                  </div>
                ` : ''}
                ${ed.temas_discursivas?.tema_cobrado ? `
                  <div class="benchmark-discursiva-box">
                    <span style="color:var(--color-primary); font-weight:700; font-size:0.75rem;">✍️ Tema da Discursiva:</span>
                    <p style="margin:0.15rem 0 0 0; font-size:0.78rem; color:var(--text-secondary);">${ed.temas_discursivas.tema_cobrado}</p>
                  </div>
                ` : ''}
              </div>
            `).join('');
          }

          container.innerHTML = html;
          container.setAttribute('data-loaded', 'true');
        } catch (err) {
          container.innerHTML = `<p style="color:var(--color-danger); font-size:0.8rem;">Erro ao carregar histórico.</p>`;
        }
      }
    });
  });

  // Select Exam and Navigate to Dashboard
  document.querySelectorAll('.btn-select-exam').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const examId = btn.getAttribute('data-id');
      const exam = EXAM_CATALOG.find(x => x.id === examId) || EXAM_CATALOG[0];
      const activeUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

      localStorage.setItem('concursa_active_exam', exam.id);
      localStorage.setItem('concursa_active_exam_title', exam.title);
      localStorage.setItem('concursa_active_exam_badge', exam.role);

      // Persistir a troca de concurso no SQLite
      try {
        await fetch(`/api/users/${encodeURIComponent(activeUserId)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ active_career_id: exam.id })
        });
      } catch (err) {
        console.warn('Erro ao sincronizar carreira no perfil:', err);
      }

      showToast(`🎯 Concurso Ativado: ${exam.title}`, 'success');

      // Update Top Bar display if present
      if (window.updateTopBarDisplays) {
        window.updateTopBarDisplays();
      }

      // Enter Workspace
      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 200);
    });
  });

  // Modal Custom Exam Handlers
  const modal = document.getElementById('modal-custom-exam');
  const btnOpenModal = document.getElementById('btn-modal-add-exam');
  const btnCloseModal = document.getElementById('btn-close-exam-modal');
  const btnCancelModal = document.getElementById('btn-cancel-custom-exam');
  const btnSaveModal = document.getElementById('btn-save-custom-exam');

  if (btnOpenModal && modal) {
    btnOpenModal.addEventListener('click', () => {
      // Limpar campos
      const nameEl = document.getElementById('custom-exam-name');
      const roleEl = document.getElementById('custom-exam-role');
      const bancaEl = document.getElementById('custom-exam-banca');
      if (nameEl) nameEl.value = '';
      if (roleEl) roleEl.value = '';
      if (bancaEl) bancaEl.value = '';
      modal.style.display = 'flex';
      if (nameEl) nameEl.focus();
    });
  }

  const closeModal = () => {
    if (modal) modal.style.display = 'none';
  };

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (btnSaveModal) {
    btnSaveModal.addEventListener('click', () => {
      const name = document.getElementById('custom-exam-name').value.trim();
      const role = document.getElementById('custom-exam-role').value.trim();
      const banca = document.getElementById('custom-exam-banca').value.trim();

      if (!name) {
        showToast('Informe o nome do concurso.', 'warning');
        return;
      }

      showToast(`Concurso "${name}" cadastrado com sucesso!`, 'success');
      closeModal();

      // Set as active
      localStorage.setItem('concursa_active_exam', 'custom_' + Date.now());
      localStorage.setItem('concursa_active_exam_title', name);
      localStorage.setItem('concursa_active_exam_badge', role || 'Edital Personalizado');

      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 400);
    });
  }
}
