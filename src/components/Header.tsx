import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { getCareerById, CAREERS_LIST } from '../utils/careers';
import { getConcurseiroRank } from '../utils/gamification';
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
  BookOpen,
  Target,
  BookMarked,
  Layers,
  Scale,
  GitCompare,
  PenTool,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  Info,
  Grid
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
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);
  const currentRank = getConcurseiroRank(user?.xp || 0);

  const tabLabels: Record<ActiveTab, { title: string; category: string }> = {
    dashboard: { title: 'Dashboard', category: 'ESTUDO DIÁRIO' },
    study: { title: 'Sala de Estudos Teórica', category: 'ESTUDO DIÁRIO' },
    simulados: { title: 'Simulados & Treino Real', category: 'TREINO & PRÁTICA' },
    erros: { title: 'Caderno de Erros', category: 'TREINO & PRÁTICA' },
    flashcards: { title: 'Flashcards SM-2', category: 'TREINO & PRÁTICA' },
    leiseca: { title: 'Caça-Pegadinhas da Lei', category: 'TREINO & PRÁTICA' },
    aproveitamento: { title: 'Transição de Editais', category: 'INTELIGÊNCIA' },
    redacao: { title: 'Corretor de Redação', category: 'INTELIGÊNCIA' },
    edital: { title: 'Raio-X do Edital', category: 'INTELIGÊNCIA' },
    comunidade: { title: 'Comunidade & Tutor IA', category: 'COMUNIDADE' },
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
    { id: 'study', label: 'Sala de Estudos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'simulados', label: 'Simulados Oficiais', icon: <Target className="w-4 h-4" /> },
    { id: 'erros', label: 'Caderno de Erros', icon: <BookMarked className="w-4 h-4" />, badge: pendingErrorsCount },
    { id: 'flashcards', label: 'Flashcards SM-2', icon: <Layers className="w-4 h-4" /> },
    { id: 'leiseca', label: 'Caça-Pegadinhas da Lei', icon: <Scale className="w-4 h-4" /> },
    { id: 'aproveitamento', label: 'Transição de Editais', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'redacao', label: 'Redação Discursiva', icon: <PenTool className="w-4 h-4" /> },
    { id: 'edital', label: 'Raio-X do Edital', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'comunidade', label: 'Comunidade & Chat', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'guia', label: 'Guia de Uso & Método', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'sobre', label: 'Sobre a Plataforma', icon: <Info className="w-4 h-4" /> },
    { id: 'settings', label: 'Configurações', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header className="w-full h-14 sm:h-16 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-3 sm:px-6 lg:px-8 flex items-center justify-between select-none z-20 shrink-0 font-sans shadow-sm">
        
        {/* Left: Mobile Toggle & Branding / Desktop Breadcrumbs */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0"
            aria-label="Abrir Menu Lateral"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Mobile Brand Mark */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="lg:hidden flex items-center gap-1.5 cursor-pointer truncate"
          >
            <span className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </span>
            <span className="hidden xs:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 truncate max-w-[110px]">
              {currentCareer.banca}
            </span>
          </div>

          {/* Desktop Institutional Breadcrumbs */}
          <div className="hidden lg:flex items-center gap-2 text-xs">
            <span className="font-mono text-[var(--text-muted)] uppercase tracking-wider text-[10px] font-bold">
              {currentTabInfo.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--border-focus)]" />
            <span className="font-display font-bold text-[var(--text-primary)] text-sm tracking-tight">
              {currentTabInfo.title}
            </span>
          </div>
        </div>

        {/* Right Actions: Metrics, Theme & Quick Settings */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Rank Badge (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[var(--text-muted)]">RANK:</span>
            <span className="font-bold text-[var(--accent-primary)]">{currentRank.title}</span>
          </div>

          {/* Streak Metric (Compact on mobile) */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-500 font-bold">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="hidden sm:inline">{user?.streakDays || 0} DIAS</span>
            <span className="sm:hidden">{user?.streakDays || 0}d</span>
          </div>

          {/* Quick Menu Launcher Button (Desktop/Tablet) */}
          <div className="relative">
            <button
              onClick={() => setQuickMenuOpen(!quickMenuOpen)}
              className="px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-primary)] transition-all shadow-xs"
              title="Menu de Atalhos Rápidos"
            >
              <Grid className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span className="hidden sm:inline">Menu</span>
              <ChevronDown className={`w-3 h-3 text-[var(--text-muted)] transition-transform ${quickMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {quickMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setQuickMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-focus)] shadow-2xl p-3 z-50 animate-fade-in font-sans space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)] px-1">
                    <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      Atalhos da Plataforma
                    </span>
                    <CarimboStatus status="homologado" label="OFICIAL" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => { onNavigate('study'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-[var(--accent-primary)] font-bold">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Doutrina</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">Sala de Estudos</div>
                    </button>

                    <button
                      onClick={() => { onNavigate('simulados'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
                        <Target className="w-3.5 h-3.5" />
                        <span>Simulados</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">Treino Oficial</div>
                    </button>

                    <button
                      onClick={() => { onNavigate('erros'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-rose-500 font-bold">
                        <BookMarked className="w-3.5 h-3.5" />
                        <span>Erros</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">{pendingErrorsCount} pendentes</div>
                    </button>

                    <button
                      onClick={() => { onNavigate('leiseca'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Pegadinhas</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">Lei Seca</div>
                    </button>

                    <button
                      onClick={() => { onNavigate('edital'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-blue-500 font-bold">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Raio-X Edital</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">Pesos e Pareto</div>
                    </button>

                    <button
                      onClick={() => { onNavigate('guia'); setQuickMenuOpen(false); }}
                      className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left space-y-1 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-indigo-500 font-bold">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Metodologia</span>
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">Guia de Estudos</div>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() => { onNavigate('settings'); setQuickMenuOpen(false); }}
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1"
                    >
                      <Settings className="w-3.5 h-3.5" />
                      <span>Ajustes</span>
                    </button>

                    <button
                      onClick={() => { onNavigate('sobre'); setQuickMenuOpen(false); }}
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Sobre o Sistema</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
          </button>

          {/* Mobile Quick Settings Button */}
          <button
            onClick={() => onNavigate('settings')}
            aria-label="Configurações"
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
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
                  <div className="text-[11px] font-mono text-[var(--accent-primary)] font-semibold flex items-center gap-1">
                    <span>{user?.xp || 0} XP</span>
                    <span>•</span>
                    <span>Nível {user?.level || 1}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Seletor de Carreira no Drawer */}
            <div className="p-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <label className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1.5 px-1">
                Edital em Foco:
              </label>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCareerDrawerDropdownOpen(!careerDrawerDropdownOpen)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-mono hover:border-[var(--accent-primary)] transition-colors"
                >
                  <div className="truncate text-left">
                    <div className="font-bold truncate text-[11px]">{currentCareer.name}</div>
                    <div className="text-[10px] text-[var(--text-muted)]">{currentCareer.banca}</div>
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
                          <div className="font-semibold truncate text-[11px]">{c.name}</div>
                          <div className="text-[9px] text-[var(--text-muted)] font-mono">{c.banca}</div>
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
              <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1 px-2">
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
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold transition-all ${
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
                      <span className="px-2 py-0.5 font-mono text-[10px] font-bold rounded bg-red-500/10 text-red-400 border border-red-500/30">
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
                  className="w-full flex items-center justify-center gap-2 p-2 rounded-lg text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:bg-red-500/10 transition-colors"
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

