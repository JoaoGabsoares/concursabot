import { showToast } from './utils.js';
import { switchActiveUser } from './users.js';

export const EMOJI_CATEGORIES = {
  '🏛️ Fiscal & Gestão': ['👨‍💼', '👩‍💼', '💼', '📊', '⚖️'],
  '🏥 Saúde & SUS': ['👨‍⚕️', '👩‍⚕️', '🩺', '🧬', '🏥'],
  '⚓ Militar & Forças': ['⚓', '🎖️', '🛳️', '🪖', '🛡️'],
  '🎯 Concurseiros & Foco': ['👨‍🎓', '👩‍🎓', '🚀', '🔥', '💡', '🏆', '📚']
};

export const CAREER_OPTIONS = [
  {
    id: 'atrfb',
    name: '🏛️ Receita Federal do Brasil (ATRFB / AFRFB)',
    role: 'Analista / Auditor Fiscal',
    banca: 'FGV',
    desc: 'Foco na Wave 1 (Tributário, Previdenciário, Português, Fluência de Dados e Aduaneiro).'
  },
  {
    id: 'ses_rj',
    name: '🏥 SES-RJ / IASERJ 2026 (Saúde RJ)',
    role: 'Técnico de Enfermagem / Assistente Administrativo',
    banca: 'IBDO Projetos',
    desc: '70 questões com foco em Legislação do SUS (Leis 8.080/8.142) e Específicas do Cargo.'
  },
  {
    id: 'marinha_rm2',
    name: '⚓ Marinha do Brasil (Praças RM2 / SMV)',
    role: 'Cabo / Terceiro-Sargento Temporário',
    banca: 'DEnsM',
    desc: '50 questões (25 Português + 25 Legislação Militar-Naval e Tradições).'
  },
  {
    id: 'adm_tribunais',
    name: '🏢 Tribunais & Área Administrativa',
    role: 'Técnico / Analista Judiciário',
    banca: 'FGV / Cebraspe / FCC',
    desc: 'Tronco comum administrativo com Nova Lei de Licitações (14.133/21).'
  },
  {
    id: 'bb_comercial',
    name: '🏦 Banco do Brasil — Agente Comercial',
    role: 'Escriturário / Agente Comercial',
    banca: 'Fundação Cesgranrio',
    desc: '70 questões (Conhecimentos Bancários, Vendas e Negociação, Informática e RLM).'
  },
  {
    id: 'bb_ti',
    name: '💻 Banco do Brasil — Agente de Tecnologia',
    role: 'Escriturário / Agente de TI',
    banca: 'Fundação Cesgranrio',
    desc: '70 questões com 35 questões de Tecnologia da Informação (SQL, Python, DevOps, APIs).'
  },
  {
    id: 'custom',
    name: '➕ Outro Concurso Personalizado',
    role: 'Cargo Personalizado',
    banca: 'Banca a definir',
    desc: 'Cadastre seu órgão, cargo e banca examinadora desejados.'
  }
];

export async function render(container) {
  let currentStep = 1;
  const formData = {
    name: '',
    avatar_emoji: '👨‍💼',
    color_theme: 'primary',
    active_career_id: 'atrfb',
    target_role: 'Analista Tributário',
    target_banca: 'FGV',
    custom_exam_title: '',
    experience_level: 'iniciante',
    daily_hours: 4,
    study_shifts: ['manha', 'noite'],
    preferred_material: 'enxuto'
  };

  function updateView() {
    container.innerHTML = `
      <div class="wizard-container fade-in">
        <!-- Wizard Header -->
        <div class="wizard-header">
          <div class="wizard-badge">
            <span>🎓 Criador de Perfil de Estudante</span>
          </div>
          <h1 class="wizard-title">Configure sua Jornada de Aprovação</h1>
          <p class="wizard-subtitle">
            Personalize sua meta, disponibilidade diária e metodologia para o ConcursaBot calibrar seu cronograma.
          </p>

          <!-- Step Progress Indicator -->
          <div class="wizard-steps-indicator">
            <div class="wizard-step-node ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}">
              <div class="step-num">${currentStep > 1 ? '✓' : '1'}</div>
              <div class="step-label">Identidade</div>
            </div>
            <div class="wizard-step-line ${currentStep >= 2 ? 'active' : ''}"></div>
            <div class="wizard-step-node ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}">
              <div class="step-num">${currentStep > 2 ? '✓' : '2'}</div>
              <div class="step-label">Concurso & Nível</div>
            </div>
            <div class="wizard-step-line ${currentStep >= 3 ? 'active' : ''}"></div>
            <div class="wizard-step-node ${currentStep >= 3 ? 'active' : ''}">
              <div class="step-num">3</div>
              <div class="step-label">Rotina & Foco</div>
            </div>
          </div>
        </div>

        <!-- Wizard Card Body -->
        <div class="card wizard-card">
          ${renderStepContent(currentStep, formData)}

          <!-- Footer Navigation Buttons -->
          <div class="wizard-footer">
            <button class="btn btn-secondary" id="btn-wizard-prev" ${currentStep === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              ← Voltar
            </button>
            <button class="btn btn-primary" id="btn-wizard-next">
              ${currentStep === 3 ? '🚀 Concluir & Entrar no Workspace' : 'Próximo Passo →'}
            </button>
          </div>
        </div>
      </div>
    `;

    attachWizardEvents();
  }

  function renderStepContent(step, data) {
    if (step === 1) {
      return `
        <div class="step-pane fade-in">
          <h3 class="step-title">Etapa 1: Quem é você?</h3>
          <p class="text-muted step-desc">Defina o nome do estudante e sua identidade visual no app.</p>

          <div class="form-group" style="margin-top:1.25rem;">
            <label style="font-weight:700; font-size:0.9rem;">Nome / Apelido do Estudante:</label>
            <input type="text" id="wizard-name" class="form-control" placeholder="Ex: João Silva, Mariana, Auditor 2026..." value="${data.name}" maxlength="30" autofocus>
          </div>

          <div class="form-group" style="margin-top:1.5rem;">
            <label style="font-weight:700; font-size:0.9rem;">Escolha seu Avatar Emoji:</label>
            <div class="avatar-preview-box">
              <div class="avatar-big-preview">${data.avatar_emoji}</div>
              <div>
                <strong>Avatar Selecionado</strong>
                <p class="text-muted" style="font-size:0.8rem; margin:0.15rem 0 0 0;">Será exibido no topo do workspace</p>
              </div>
            </div>

            <div class="emoji-categories-container">
              ${Object.entries(EMOJI_CATEGORIES).map(([cat, emojis]) => `
                <div class="emoji-category-group">
                  <span class="emoji-cat-title">${cat}</span>
                  <div class="emoji-cat-row">
                    ${emojis.map(e => `
                      <button type="button" class="emoji-chip-btn ${data.avatar_emoji === e ? 'active' : ''}" data-emoji="${e}">${e}</button>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    if (step === 2) {
      return `
        <div class="step-pane fade-in">
          <h3 class="step-title">Etapa 2: Qual o seu Objetivo & Nível Atual?</h3>
          <p class="text-muted step-desc">Escolha a carreira que deseja focar e seu momento de preparação.</p>

          <div class="form-group" style="margin-top:1.25rem;">
            <label style="font-weight:700; font-size:0.9rem; margin-bottom:0.75rem; display:block;">Selecione seu Concurso-Alvo:</label>
            <div class="career-select-grid">
              ${CAREER_OPTIONS.map(c => `
                <div class="career-option-card ${data.active_career_id === c.id ? 'active' : ''}" data-career="${c.id}">
                  <div style="font-size:1.05rem; font-weight:700; color:var(--text-primary); margin-bottom:0.25rem;">${c.name}</div>
                  <div style="font-size:0.8rem; color:var(--color-primary); font-weight:600; margin-bottom:0.35rem;">🏛️ ${c.banca} • ${c.role}</div>
                  <p style="font-size:0.78rem; color:var(--text-secondary); margin:0; line-height:1.35;">${c.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Custom Career Inputs if selected -->
            <div id="custom-career-box" style="margin-top:1rem; padding:1rem; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:6px; ${data.active_career_id === 'custom' ? 'display:block;' : 'display:none;'}">
              <div class="grid-2">
                <div class="form-group">
                  <label style="font-size:0.8rem; font-weight:700;">Nome do Órgão / Concurso:</label>
                  <input type="text" id="custom-career-name" class="form-control" placeholder="Ex: TJ-SP, PF Administrativo, EBSERH..." value="${data.custom_exam_title || ''}">
                </div>
                <div class="form-group">
                  <label style="font-size:0.8rem; font-weight:700;">Banca Examinadora:</label>
                  <input type="text" id="custom-career-banca" class="form-control" placeholder="Ex: Vunesp, FGV, Cebraspe..." value="${data.target_banca || ''}">
                </div>
              </div>
            </div>
          </div>

          <div class="form-group" style="margin-top:1.5rem;">
            <label style="font-weight:700; font-size:0.9rem; margin-bottom:0.75rem; display:block;">Qual seu Nível de Preparação?</label>
            <div class="level-select-grid">
              <div class="level-card ${data.experience_level === 'iniciante' ? 'active' : ''}" data-level="iniciante">
                <div class="level-icon">🐣</div>
                <div class="level-name">Iniciante</div>
                <div class="level-desc">Começando do zero. Foco em teoria enxuta e construção da base.</div>
              </div>
              <div class="level-card ${data.experience_level === 'intermediario' ? 'active' : ''}" data-level="intermediario">
                <div class="level-icon">📈</div>
                <div class="level-name">Intermediário</div>
                <div class="level-desc">Já vi parte do edital. Foco em ciclo de matérias + baterias de questões.</div>
              </div>
              <div class="level-card ${data.experience_level === 'avancado' ? 'active' : ''}" data-level="avancado">
                <div class="level-icon">🚀</div>
                <div class="level-name">Avançado / Reta Final</div>
                <div class="level-desc">Revisão avançada. Foco 100% em questões de prova, discursivas e simulados.</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (step === 3) {
      return `
        <div class="step-pane fade-in">
          <h3 class="step-title">Etapa 3: Sua Rotina & Preferências de Estudo</h3>
          <p class="text-muted step-desc">Defina sua carga horária diária e estilo de estudo para o cronograma.</p>

          <div class="form-group" style="margin-top:1.25rem;">
            <label style="font-weight:700; font-size:0.9rem; margin-bottom:0.5rem; display:block;">Meta de Horas de Estudo por Dia:</label>
            <div class="hours-chips-grid">
              ${[2, 3, 4, 6, 8].map(h => `
                <button type="button" class="hours-chip-btn ${data.daily_hours === h ? 'active' : ''}" data-hours="${h}">
                  <span style="font-size:1.15rem; font-weight:800;">${h}h</span>
                  <small style="font-size:0.7rem; color:var(--text-muted);">por dia</small>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="form-group" style="margin-top:1.5rem;">
            <label style="font-weight:700; font-size:0.9rem; margin-bottom:0.5rem; display:block;">Turnos Disponíveis (Selecione todos que se aplicam):</label>
            <div class="shifts-chips-grid">
              <button type="button" class="shift-chip-btn ${data.study_shifts.includes('manha') ? 'active' : ''}" data-shift="manha">
                <span>🌅 Manhã Cedo (05h30 - 08h)</span>
              </button>
              <button type="button" class="shift-chip-btn ${data.study_shifts.includes('tarde') ? 'active' : ''}" data-shift="tarde">
                <span>☀️ Tarde (13h - 18h)</span>
              </button>
              <button type="button" class="shift-chip-btn ${data.study_shifts.includes('noite') ? 'active' : ''}" data-shift="noite">
                <span>🌙 Noite (19h - 22h)</span>
              </button>
              <button type="button" class="shift-chip-btn ${data.study_shifts.includes('fim_semana') ? 'active' : ''}" data-shift="fim_semana">
                <span>📅 Fins de Semana Intensivos</span>
              </button>
            </div>
          </div>

          <div class="form-group" style="margin-top:1.5rem;">
            <label style="font-weight:700; font-size:0.9rem; margin-bottom:0.5rem; display:block;">Estilo de Material Preferido:</label>
            <div class="material-select-grid">
              <div class="material-card ${data.preferred_material === 'enxuto' ? 'active' : ''}" data-material="enxuto">
                <div style="font-weight:700; font-size:0.95rem; color:var(--color-primary);">⚡ Caderno Enxuto (Filtro IA)</div>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin:0.25rem 0 0 0;">
                  Resumos estratégicos com eliminação de palha introdutória e foco no que sempre cai. (Recomendado)
                </p>
              </div>
              <div class="material-card ${data.preferred_material === 'grifada' ? 'active' : ''}" data-material="grifada">
                <div style="font-weight:700; font-size:0.95rem;">📑 Apostilas Grifadas</div>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin:0.25rem 0 0 0;">
                  Leitura guiada focada nos grifos oficiais do professor e marcações de lei seca.
                </p>
              </div>
              <div class="material-card ${data.preferred_material === 'questoes' ? 'active' : ''}" data-material="questoes">
                <div style="font-weight:700; font-size:0.95rem;">🎯 Engenharia Reversa (Questões)</div>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin:0.25rem 0 0 0;">
                  Aprender resolvendo baterias de questões comentadas direto da banca.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  function attachWizardEvents() {
    // Step 1 Events
    const nameInput = document.getElementById('wizard-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        formData.name = e.target.value;
      });
    }

    document.querySelectorAll('.emoji-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.emoji-chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        formData.avatar_emoji = btn.dataset.emoji;
        const bigPreview = document.querySelector('.avatar-big-preview');
        if (bigPreview) bigPreview.textContent = btn.dataset.emoji;
      });
    });

    // Step 2 Events
    document.querySelectorAll('.career-option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.career-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        formData.active_career_id = card.dataset.career;
        const customBox = document.getElementById('custom-career-box');
        if (customBox) {
          customBox.style.display = formData.active_career_id === 'custom' ? 'block' : 'none';
        }
      });
    });

    const customNameInput = document.getElementById('custom-career-name');
    if (customNameInput) {
      customNameInput.addEventListener('input', (e) => {
        formData.custom_exam_title = e.target.value;
      });
    }

    const customBancaInput = document.getElementById('custom-career-banca');
    if (customBancaInput) {
      customBancaInput.addEventListener('input', (e) => {
        formData.target_banca = e.target.value;
      });
    }

    document.querySelectorAll('.level-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.level-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        formData.experience_level = card.dataset.level;
      });
    });

    // Step 3 Events
    document.querySelectorAll('.hours-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.hours-chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        formData.daily_hours = parseInt(btn.dataset.hours, 10);
      });
    });

    document.querySelectorAll('.shift-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const shift = btn.dataset.shift;
        if (formData.study_shifts.includes(shift)) {
          formData.study_shifts = formData.study_shifts.filter(s => s !== shift);
          btn.classList.remove('active');
        } else {
          formData.study_shifts.push(shift);
          btn.classList.add('active');
        }
      });
    });

    document.querySelectorAll('.material-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.material-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        formData.preferred_material = card.dataset.material;
      });
    });

    // Prev Button
    const btnPrev = document.getElementById('btn-wizard-prev');
    if (btnPrev && currentStep > 1) {
      btnPrev.addEventListener('click', () => {
        currentStep--;
        updateView();
      });
    }

    // Next / Finish Button
    const btnNext = document.getElementById('btn-wizard-next');
    if (btnNext) {
      btnNext.addEventListener('click', async () => {
        if (currentStep === 1) {
          if (!formData.name.trim()) {
            showToast('Por favor, informe seu nome ou apelido.', 'warning');
            const inp = document.getElementById('wizard-name');
            if (inp) inp.focus();
            return;
          }
          currentStep = 2;
          updateView();
          return;
        }

        if (currentStep === 2) {
          if (formData.active_career_id === 'custom' && !formData.custom_exam_title.trim()) {
            showToast('Informe o nome do concurso personalizado.', 'warning');
            return;
          }
          currentStep = 3;
          updateView();
          return;
        }

        if (currentStep === 3) {
          // Final Submit
          btnNext.disabled = true;
          btnNext.textContent = '⏳ Criando Perfil & Calibrando...';

          try {
            const res = await fetch('/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });

            if (res.ok) {
              const createdUser = await res.json();
              showToast(`🎉 Perfil de ${createdUser.name} criado com sucesso!`, 'success');
              await switchActiveUser(createdUser);
            } else {
              showToast('Erro ao salvar perfil.', 'error');
              btnNext.disabled = false;
              btnNext.textContent = '🚀 Concluir & Entrar no Workspace';
            }
          } catch (err) {
            console.error('Error saving profile:', err);
            showToast('Erro ao conectar ao servidor.', 'error');
            btnNext.disabled = false;
            btnNext.textContent = '🚀 Concluir & Entrar no Workspace';
          }
        }
      });
    }
  }

  updateView();
}
