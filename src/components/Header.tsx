import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { getCareerById, CAREERS_LIST } from '../utils/careers';
import { getConcurseiroRank } from '../utils/gamification';
import { CarimboStatus } from './UIPrimitives';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight, 
  ChevronDown, 
  Check, 
  Flame, 
  Settings, 
  LogOut,
  LayoutDashboard,
  RotateCw,
  BookOpen,
  Target,
  BookMarked,
  Layers,
  Scale,
  GitCompare,
  PenTool,
  BarChart3,
  ShieldCheck,
  HelpCircle,
  Info,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  user: UserProfile | null;
  currentCareerId: string;
  onSelectCareer: (careerId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount?: number;
  onSwitchUser?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  currentCareerId,
  onSelectCareer,
  isDark,
  onToggleTheme,
  activeTab,
  onNavigate,
  pendingErrorsCount = 0,
  onSwitchUser
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [careerDrawerDropdownOpen, setCareerDrawerDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);
  const currentRank = getConcurseiroRank(user?.xp || 0);

  const handleLogout = () => {
    localStorage.removeItem('GABARITO_AUTH_TOKEN');
    localStorage.removeItem('CURRENT_USER_ID');
    window.location.reload();
  };

  const tabLabels: Record<ActiveTab, { title: string; category: string }> = {
    dashboard: { title: 'Dashboard', category: 'ESTUDO DIÁRIO' },
    ciclos: { title: 'Ciclo de Estudos', category: 'ESTUDO DIÁRIO' },
    'study-cycle': { title: 'Ciclo de Estudos', category: 'ESTUDO DIÁRIO' },
    study: { title: 'Sala de Estudos', category: 'ESTUDO DIÁRIO' },
    'study-room': { title: 'Sala de Estudos', category: 'ESTUDO DIÁRIO' },
    simulados: { title: 'Simulados & Treino Real', category: 'TREINO & PRÁTICA' },
    erros: { title: 'Caderno de Erros', category: 'TREINO & PRÁTICA' },
    'error-notebook': { title: 'Caderno de Erros', category: 'TREINO & PRÁTICA' },
    flashcards: { title: 'Flashcards SM-2', category: 'TREINO & PRÁTICA' },
    leiseca: { title: 'Caça-Pegadinhas da Lei', category: 'TREINO & PRÁTICA' },
    aproveitamento: { title: 'Transição de Editais', category: 'INTELIGÊNCIA' },
    redacao: { title: 'Corretor de Redação', category: 'INTELIGÊNCIA' },
    edital: { title: 'Raio-X do Edital', category: 'INTELIGÊNCIA' },
    guia: { title: 'Guia de Uso & Método', category: 'METODOLOGIA' },
    sobre: { title: 'Sobre a Plataforma', category: 'SISTEMA' },
    settings: { title: 'Configurações', category: 'SISTEMA' },
    settings_ajustes: { title: 'Configurações', category: 'SISTEMA' },
    settings_guia: { title: 'Guia de Uso & Método', category: 'METODOLOGIA' },
    settings_sobre: { title: 'Sobre a Plataforma', category: 'SISTEMA' },
  };

  const currentTabInfo = tabLabels[activeTab] || { title: 'Painel', category: 'GABARITO.AI' };

  const navMenuItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'ciclos', label: 'Ciclo de Estudos', icon: <RotateCw className="w-4 h-4" /> },
    { id: 'study', label: 'Sala de Estudos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'simulados', label: 'Simulados Oficiais', icon: <Target className="w-4 h-4" /> },
    { id: 'erros', label: 'Caderno de Erros', icon: <BookMarked className="w-4 h-4" />, badge: pendingErrorsCount },
    { id: 'flashcards', label: 'Flashcards SM-2', icon: <Layers className="w-4 h-4" /> },
    { id: 'leiseca', label: 'Caça-Pegadinhas da Lei', icon: <Scale className="w-4 h-4" /> },
    { id: 'aproveitamento', label: 'Transição de Editais', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'redacao', label: 'Redação Discursiva', icon: <PenTool className="w-4 h-4" /> },
    { id: 'edital', label: 'Raio-X do Edital', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'guia', label: 'Guia de Uso & Método', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'sobre', label: 'Sobre a Plataforma', icon: <Info className="w-4 h-4" /> },
    { id: 'settings', label: 'Configurações', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Top Header Bar (Glassmorphism & Executive Depth) */}
      <header className="sticky top-0 w-full h-14 sm:h-16 bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-subtle)] px-3 sm:px-6 lg:px-8 flex items-center justify-between select-none z-30 shrink-0 font-sans shadow-xs transition-all">
        
        {/* Left: Mobile Toggle & Branding / Desktop Breadcrumbs */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden min-w-[44px] min-h-[44px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            aria-label="Abrir Menu Lateral"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Mobile Brand Mark */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="lg:hidden flex items-center gap-2 cursor-pointer truncate"
          >
            <span className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </span>
            <span className="hidden xs:inline-block px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 truncate max-w-[110px]">
              {currentCareer.banca}
            </span>
          </div>

          {/* Desktop Institutional Breadcrumbs */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-sans">
            <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              {currentTabInfo.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="font-sans font-bold text-[var(--text-primary)] text-sm tracking-tight">
              {currentTabInfo.title}
            </span>
          </div>
        </div>

        {/* Right Actions: Metrics, Theme & Quick Settings */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Rank Badge (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[var(--text-muted)]">RANK:</span>
            <span className="font-bold text-[var(--accent-primary)]">{currentRank.title}</span>
          </div>

          {/* Streak Metric (Compact on mobile) */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[var(--accent-amber-bg)] border border-[var(--accent-warning)]/30 text-xs font-mono text-[var(--accent-warning)] font-bold shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-[var(--accent-warning)] text-[var(--accent-warning)]" />
            <span className="hidden sm:inline">{user?.streakDays || 0} DIAS</span>
            <span className="sm:hidden">{user?.streakDays || 0}d</span>
          </div>

          {/* Edital Official Badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/20 text-xs font-sans text-[var(--accent-primary)] font-bold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>{currentCareer.shortName || currentCareer.name.split('—')[0].trim()}</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
            title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
          >
            {isDark ? <Sun className="w-4 h-4 text-[var(--accent-warning)]" /> : <Moon className="w-4 h-4 text-[var(--accent-primary)]" />}
          </button>

          {/* Desktop User Dropdown (Trocar Perfil, Configurações, Logout) */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--border-focus)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/40 flex items-center justify-center text-xs font-mono font-bold text-[var(--accent-primary)] shrink-0">
                {user?.name ? user.name.substring(0, 2).toUpperCase() : 'OP'}
              </div>
              <div className="text-left font-mono text-xs hidden xl:block">
                <div className="font-bold text-[var(--text-primary)] leading-tight truncate max-w-[100px]">
                  {user?.name || 'Operador'}
                </div>
                <div className="text-[10px] text-[var(--text-muted)] leading-tight">
                  Lv.{user?.level || 1}
                </div>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${userDropdownOpen ? 'rotate-180 text-[var(--text-primary)]' : ''}`} />
            </button>

            {userDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setUserDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-2 z-50 animate-fade-in font-sans space-y-1">
                  
                  {/* User Profile Header */}
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                    <div className="font-mono text-xs font-bold text-[var(--text-primary)] truncate">
                      {user?.name || 'Concurseiro Operacional'}
                    </div>
                    <div className="text-[11px] font-mono text-[var(--accent-primary)] flex items-center justify-between">
                      <span>{currentRank.title}</span>
                      <span className="text-[var(--text-muted)]">{user?.xp || 0} XP</span>
                    </div>
                  </div>

                  {/* Dropdown Options */}
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      if (onSwitchUser) onSwitchUser();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors text-left cursor-pointer"
                  >
                    <span className="font-mono text-[10px] text-[var(--accent-primary)]">[ 01 ]</span>
                    <span>Trocar Perfil / Usuário</span>
                  </button>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('settings');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors text-left cursor-pointer"
                  >
                    <span className="font-mono text-[10px] text-[var(--accent-primary)]">[ 02 ]</span>
                    <span>Configurações & Metas</span>
                  </button>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('guia');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors text-left cursor-pointer"
                  >
                    <span className="font-mono text-[10px] text-[var(--accent-primary)]">[ 03 ]</span>
                    <span>Guia de Metodologia</span>
                  </button>

                  <div className="border-t border-[var(--border-subtle)] my-1" />

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium text-[var(--accent-danger)] hover:bg-[var(--accent-danger)]/10 transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Encerrar Sessão</span>
                  </button>

                </div>
              </>
            )}
          </div>

          {/* Mobile Quick Settings Button */}
          <button
            onClick={() => onNavigate('settings')}
            aria-label="Configurações"
            className="lg:hidden min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
            title="Configurações da Plataforma"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Menu Completo de Navegação e Perfil) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-fade-in">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-72 max-w-[85vw] h-full bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] flex flex-col z-10 font-sans shadow-2xl">
            
            {/* Header do Drawer: Perfil e Fechar */}
            <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/40 flex items-center justify-center text-base shrink-0 select-none shadow-sm">
                  {user?.avatar || '👨‍🎓'}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)] truncate">
                    {user?.name || 'Concurseiro'}
                  </div>
                  <div className="text-xs font-mono text-[var(--accent-primary)] font-semibold flex items-center gap-1">
                    <span>{user?.xp || 0} XP</span>
                    <span>•</span>
                    <span>Nível {user?.level || 1}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Seletor de Carreira no Drawer */}
            <div className="p-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <label className="text-xs font-sans font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1.5 px-1">
                Edital em Foco:
              </label>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCareerDrawerDropdownOpen(!careerDrawerDropdownOpen)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors"
                >
                  <div className="truncate text-left">
                    <div className="font-bold truncate text-xs">{currentCareer.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{currentCareer.banca}</div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform ${careerDrawerDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {careerDrawerDropdownOpen && (
                  <div className="mt-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-focus)] shadow-xl p-1 max-h-48 overflow-y-auto space-y-1 z-20 animate-fade-in">
                    {CAREERS_LIST.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCareer(c.id);
                          setCareerDrawerDropdownOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-md text-xs flex items-center justify-between transition-colors ${
                          c.id === currentCareerId
                            ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                        }`}
                      >
                        <div className="truncate pr-2">
                          <div className="font-semibold truncate text-xs">{c.name}</div>
                          <div className="text-xs text-[var(--text-muted)] font-mono">{c.banca}</div>
                        </div>
                        {c.id === currentCareerId && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lista de Navegação Principal */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              <span className="text-xs font-sans font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1 px-2">
                Navegação da Plataforma
              </span>

              {navMenuItems.map((item) => {
                const isActive = activeTab === item.id || (item.id === 'settings' && activeTab.startsWith('settings'));
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full min-h-[44px] flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold border-l-4 border-[var(--accent-primary)] shadow-sm'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && item.badge > 0 ? (
                      <span className="px-2 py-0.5 font-mono text-xs font-bold rounded bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] border border-[var(--accent-danger)]/30">
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {/* Rodapé do Drawer: Trocar Perfil / Sair */}
            {onSwitchUser && (
              <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30">
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onSwitchUser();
                  }}
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 p-2 rounded-lg text-xs font-sans text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:bg-[var(--color-status-danger-bg)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Trocar Perfil / Sair</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

