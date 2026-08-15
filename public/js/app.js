import { showToast } from './utils.js';
import { openResetStudyModal } from './reset-modal.js';
import { getCareerConfig, getActiveCareerId } from './careers.js';
import { checkInviteAccess } from './invite-gate.js';

// Workspace Sections & Sub-navigation Mappings
const WORKSPACE_SECTIONS = {
  'hub': {
    mainRoute: 'hub',
    routes: ['hub', 'welcome'],
    subItems: []
  },
  'hoje': {
    mainRoute: 'dashboard',
    routes: ['dashboard', 'hoje', 'conquistas', 'gamification'],
    subItems: [
      { hash: 'dashboard', label: '⚡ Pauta de Hoje', icon: '⚡' },
      { hash: 'conquistas', label: '🏆 Conquistas & Níveis de XP', icon: '🏆' }
    ]
  },
  'biblioteca': {
    mainRoute: 'study-room',
    routes: ['study-room', 'biblioteca', 'rag'],
    subItems: [
      { hash: 'study-room', label: '📖 Aulas & PDFs', icon: '📖' },
      { hash: 'rag', label: '📁 Acervo RAG (1.000 PDFs)', icon: '📁' }
    ]
  },
  'treino': {
    mainRoute: 'simulados',
    routes: ['simulados', 'questions', 'error-notebook', 'flashcards', 'treino'],
    subItems: [
      { hash: 'simulados', label: '⏱️ Simulados Oficiais', icon: '⏱️' },
      { hash: 'questions', label: '📝 Banco de Questões', icon: '📝' },
      { hash: 'error-notebook', label: '📕 Caderno de Erros', icon: '📕' },
      { hash: 'flashcards', label: '🃏 Flashcards de Leis', icon: '🃏' }
    ]
  },
  'inteligencia': {
    mainRoute: 'edital',
    routes: ['edital', 'schedule', 'summaries', 'tutor', 'inteligencia'],
    subItems: [
      { hash: 'edital', label: '🎯 Tendência de Banca', icon: '🎯' },
      { hash: 'schedule', label: '📅 Cronograma Semanal', icon: '📅' },
      { hash: 'summaries', label: '📚 Resumos Semanais', icon: '📚' },
      { hash: 'tutor', label: '🤖 Tutor IA 24/7', icon: '🤖' }
    ]
  }
};

// Route Definitions mapping hash to module filename and page info
const routes = {
  'hub': { section: 'hub', file: 'hub.js', title: 'Hub de Concursos', subtitle: 'Escolha ou alterne seu objetivo de aprovação' },
  'welcome': { section: 'hub', file: 'hub.js', title: 'Hub de Concursos', subtitle: 'Escolha ou alterne seu objetivo de aprovação' },

  'dashboard': { section: 'hoje', file: 'dashboard.js', title: 'Hoje • Painel de Ação', subtitle: 'Sua meta do dia e pauta de reposição' },
  'hoje': { section: 'hoje', file: 'dashboard.js', title: 'Hoje • Painel de Ação', subtitle: 'Sua meta do dia e pauta de reposição' },
  'conquistas': { section: 'hoje', file: 'gamification.js', title: '🏆 Conquistas & Níveis de XP', subtitle: 'Acompanhe seu progresso, medalhas desbloqueadas e streak de estudo' },
  'gamification': { section: 'hoje', file: 'gamification.js', title: '🏆 Conquistas & Níveis de XP', subtitle: 'Acompanhe seu progresso, medalhas desbloqueadas e streak de estudo' },
  
  'study-room': { section: 'biblioteca', file: 'study-room.js', title: 'Biblioteca de Aulas', subtitle: 'Estude com a apostila original e Caderno Enxuto' },
  'biblioteca': { section: 'biblioteca', file: 'study-room.js', title: 'Biblioteca de Aulas', subtitle: 'Estude com a apostila original e Caderno Enxuto' },
  'rag': { section: 'biblioteca', file: 'rag.js', title: 'Base de Conhecimento & Acervo', subtitle: 'Pesquisa semântica e consulta IA em todo o seu acervo de PDFs' },
  'acervo': { section: 'biblioteca', file: 'rag.js', title: 'Base de Conhecimento & Acervo', subtitle: 'Pesquisa semântica e consulta IA em todo o seu acervo de PDFs' },

  'simulados': { section: 'treino', file: 'simulados.js', title: 'Simulados Oficiais', subtitle: 'Treino sob pressão com regras reais de pontuação da banca' },
  'questions': { section: 'treino', file: 'questions.js', title: 'Banco de Questões Inéditas', subtitle: 'Fixação de temas e geração contínua por IA' },
  'error-notebook': { section: 'treino', file: 'error-notebook.js', title: '📕 Caderno de Erros Inteligente', subtitle: 'Retreino focado nas questões que você errou nos simulados' },
  'flashcards': { section: 'treino', file: 'flashcards.js', title: 'Flashcards de Memorização', subtitle: 'Repetição espaçada para prazos, súmulas e exceções de lei' },
  'treino': { section: 'treino', file: 'simulados.js', title: 'Central de Treino', subtitle: 'Simulados e baterias de fixação' },

  'edital': { section: 'inteligencia', file: 'edital.js', title: 'Tendência de Banca & Edital', subtitle: 'O que sempre cai, o que nunca cai e novidades do edital' },
  'schedule': { section: 'inteligencia', file: 'schedule.js', title: 'Cronograma Semanal', subtitle: 'Rotina estratégica de estudo e revisões' },
  'summaries': { section: 'inteligencia', file: 'summaries.js', title: 'Resumos Semanais', subtitle: 'Consolidação e mapas mentais' },
  'tutor': { section: 'inteligencia', file: 'tutor.js', title: 'Tutor IA 24/7', subtitle: 'Tire suas dúvidas conceituais e jurisprudenciais' },
  'inteligencia': { section: 'inteligencia', file: 'edital.js', title: 'Inteligência Estratégica', subtitle: 'Tendência de banca e cronograma' },

  'users': { section: 'hub', file: 'users.js', title: 'Perfis de Estudantes', subtitle: 'Selecione quem está estudando para carregar seu concurso' },
  'profile-creator': { section: 'hub', file: 'profile-creator.js', title: 'Criador de Perfil', subtitle: 'Assistente guiado de onboarding e metas de estudo' },
  'settings': { section: 'hub', file: 'settings.js', title: '⚙️ Central de Configurações', subtitle: 'Preferências de estudo, integrações de agenda, IA e backups' },
  'configuracoes': { section: 'hub', file: 'settings.js', title: '⚙️ Central de Configurações', subtitle: 'Preferências de estudo, integrações de agenda, IA e backups' }
};

// ============================================================
// THEME MANAGER (LIGHT MODE DEFAULT & DARK MODE)
// ============================================================

let themeInitialized = false;

function initTheme() {
  const savedTheme = localStorage.getItem('concursa_theme') || 'light';
  applyTheme(savedTheme);

  if (themeInitialized) return;
  themeInitialized = true;

  // Global delegated click listener ensures the theme toggle works everywhere
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('#theme-toggle');
    if (toggleBtn) {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('concursa_theme', next);
    }
  });
}

export function applyTheme(theme) {
  const finalTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', finalTheme);
  document.body.setAttribute('data-theme', finalTheme);
  
  const icon = document.getElementById('theme-icon');
  const text = document.getElementById('theme-text');
  if (icon) {
    icon.textContent = finalTheme === 'dark' ? '🌙' : '☀️';
  }
  if (text) {
    text.textContent = finalTheme === 'dark' ? 'Modo Escuro' : 'Modo Claro';
  }

  // Sincronizar botões de tema na tela de Ajustes se existirem
  const btnDark = document.getElementById('btn-theme-dark');
  const btnLight = document.getElementById('btn-theme-light');
  if (btnDark && btnLight) {
    if (finalTheme === 'dark') {
      btnDark.className = 'btn btn-primary btn-sm';
      btnLight.className = 'btn btn-secondary btn-sm';
    } else {
      btnDark.className = 'btn btn-secondary btn-sm';
      btnLight.className = 'btn btn-primary btn-sm';
    }
  }

  localStorage.setItem('concursa_theme', finalTheme);
}

if (typeof window !== 'undefined') {
  window.applyTheme = applyTheme;
}

// ============================================================
// ROUTING & WORKSPACE NAVIGATION
// ============================================================

async function handleRoute() {
  const rawHash = window.location.hash.substring(1) || 'dashboard';
  const hash = rawHash.split('/')[0].split('?')[0] || 'dashboard';
  const route = routes[hash] || routes['dashboard'];
  const currentSectionKey = route.section || 'hoje';
  const sectionConfig = WORKSPACE_SECTIONS[currentSectionKey] || WORKSPACE_SECTIONS['hoje'];

  // Update Top Bar Main Tabs Active State
  document.querySelectorAll('.workspace-nav-tab').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === currentSectionKey) {
      item.classList.add('active');
    }
  });

  // Render Sub-Navigation Bar if section has multiple tools
  const subNavBar = document.getElementById('sub-nav-bar');
  const subNavLinks = document.getElementById('sub-nav-links');

  if (sectionConfig.subItems && sectionConfig.subItems.length > 0) {
    subNavBar.style.display = 'block';
    subNavLinks.innerHTML = sectionConfig.subItems.map(item => `
      <a href="#${item.hash}" class="sub-nav-item ${hash === item.hash ? 'active' : ''}">
        <span>${item.label}</span>
      </a>
    `).join('');
  } else {
    subNavBar.style.display = 'none';
    subNavLinks.innerHTML = '';
  }

  // Update Breadcrumbs
  const crumbModuleEl = document.getElementById('crumb-module-name');
  if (crumbModuleEl) {
    crumbModuleEl.textContent = route.title || 'Início';
  }

  // Load Content
  const container = document.getElementById('page-content');
  if (!container) return;

  // Fade out
  container.style.opacity = 0;

  try {
    const module = await import(`./${route.file}`);
    setTimeout(async () => {
      container.innerHTML = ''; // Clear current
      await module.render(container);

      // Fade in
      container.style.opacity = 1;
      container.classList.remove('fade-in');
      void container.offsetWidth;
      container.classList.add('fade-in');
    }, 100);

  } catch (error) {
    console.error('Error loading module:', error);
    showToast('Erro ao carregar o módulo.', 'error');
    container.innerHTML = `<div class="card" style="padding:2rem; text-align:center;"><h3 style="color:var(--color-danger)">Erro ao carregar módulo</h3><p class="text-muted">${error.message}</p></div>`;
    container.style.opacity = 1;
  }
}

// Global utilities attached to window
window.showToast = showToast;

export function updateTopBarDisplays() {
  const activeCareerId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeCareerId);
  const userName = localStorage.getItem('concursa_active_user_name') || 'João (Titular)';
  const userAvatar = localStorage.getItem('concursa_active_user_avatar') || '👨‍💼';

  const userAvatarEl = document.getElementById('top-user-avatar');
  const userNameEl = document.getElementById('top-user-name');
  if (userAvatarEl) userAvatarEl.textContent = userAvatar;
  if (userNameEl) userNameEl.textContent = userName.split(' ')[0];

  const brandBadge = document.getElementById('header-exam-badge');
  if (brandBadge) {
    brandBadge.innerHTML = `${careerCfg.name} <span style="font-size:0.65rem; opacity:0.8;">▾</span>`;
  }

  const crumbExamEl = document.getElementById('crumb-exam-name');
  if (crumbExamEl) {
    crumbExamEl.textContent = `${careerCfg.shortName}`;
  }

  const intelTab = document.querySelector('.workspace-nav-tab[data-route="edital"] .tab-label');
  if (intelTab) {
    intelTab.textContent = `Inteligência & Edital`;
  }
}
window.updateTopBarDisplays = updateTopBarDisplays;

// Bootstrap Application Reliably
async function initApp() {
  initTheme();
  updateTopBarDisplays();

  // Quick reset button handler
  document.getElementById('btn-quick-reset')?.addEventListener('click', (e) => {
    e.preventDefault();
    openResetStudyModal(() => {
      handleRoute();
    });
  });

  window.addEventListener('hashchange', () => {
    updateTopBarDisplays();
    handleRoute();
  });

  // Verificar se o sistema exige convite de acesso ativo
  const hasAccess = await checkInviteAccess(() => {
    updateTopBarDisplays();
    if (!window.location.hash) {
      window.location.hash = '#hub';
    } else {
      handleRoute();
    }
  });

  if (hasAccess) {
    if (!window.location.hash) {
      window.location.hash = '#hub';
    } else {
      handleRoute();
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
