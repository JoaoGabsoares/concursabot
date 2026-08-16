import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { getCareerById, CAREERS_LIST } from '../utils/careers';
import { 
  Flame, 
  Sparkles, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronRight, 
  ChevronDown,
  Check,
  Zap,
  BookOpen,
  Target,
  AlertCircle,
  PenTool,
  BarChart3,
  Layers,
  Settings
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
}

export const Header: React.FC<HeaderProps> = ({
  user,
  currentCareerId,
  onSelectCareer,
  isDark,
  onToggleTheme,
  activeTab,
  onNavigate,
  pendingErrorsCount = 0
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);

  const tabLabels: Record<ActiveTab, { title: string; category: string }> = {
    dashboard: { title: 'Visão Geral & Missão', category: 'ESTUDO DIÁRIO' },
    study: { title: 'Sala de Estudos Split', category: 'ESTUDO DIÁRIO' },
    simulados: { title: 'Simulados & Treino Real', category: 'TREINO & PRÁTICA' },
    erros: { title: 'Caderno de Erros', category: 'TREINO & PRÁTICA' },
    flashcards: { title: 'Flashcards Repetição Espaçada', category: 'TREINO & PRÁTICA' },
    redacao: { title: 'Corretor de Redação Discursiva', category: 'INTELIGÊNCIA' },
    edital: { title: 'Raio-X de Incidência do Edital', category: 'INTELIGÊNCIA' },
    settings: { title: 'Configurações do Perfil', category: 'SISTEMA' },
  };

  const currentTabInfo = tabLabels[activeTab] || { title: 'Painel', category: 'GABARITO.AI' };

  return (
    <>
      <header className="w-full h-14 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-4 sm:px-6 flex items-center justify-between select-none z-20 shrink-0">
        {/* Left: Mobile Logo / Desktop Breadcrumb */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Drawer Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
            aria-label="Abrir menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Mobile Brand Mark */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="md:hidden flex items-center gap-2 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-xs">
              G
            </div>
            <span className="font-bold text-sm tracking-tight text-[var(--text-primary)]">
              Gabarito<span className="text-[var(--accent-primary)] font-mono">.AI</span>
            </span>
          </div>

          {/* Desktop Breadcrumbs */}
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="font-mono text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
              {currentTabInfo.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--border-focus)]" />
            <span className="font-semibold text-[var(--text-primary)] tracking-tight text-sm">
              {currentTabInfo.title}
            </span>
          </div>
        </div>

        {/* Right Actions: Streak, Career Badge, Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak Flame Counter */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold">
            <Flame className="w-3.5 h-3.5 fill-amber-400 animate-flame" />
            <span>{user?.streakDays || 1}d</span>
          </div>

          {/* XP Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="font-medium text-[var(--text-primary)]">{user?.xp || 0} XP</span>
          </div>

          {/* Active Career Indicator (Mobile Dropdown) */}
          <div className="relative md:hidden">
            <button
              onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] truncate max-w-[130px]"
            >
              <span className="truncate">{currentCareer.banca}</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
            </button>

            {careerDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCareerDropdownOpen(false)} />
                <div className="absolute right-0 top-full mt-1 w-64 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-focus)] shadow-2xl p-1.5 z-50 animate-fade-in space-y-1">
                  {CAREERS_LIST.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCareer(c.id);
                        setCareerDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-md text-xs flex items-center justify-between ${
                        c.id === currentCareerId 
                          ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold' 
                          : 'hover:bg-[var(--bg-active)] text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="truncate">
                        <div className="truncate font-medium">{c.name}</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-mono">{c.banca}</div>
                      </div>
                      {c.id === currentCareerId && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Left Slide-out Menu) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] h-full bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] flex flex-col z-10 animate-fade-in">
            {/* Drawer Header */}
            <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <span className="font-bold text-sm text-[var(--text-primary)]">Gabarito.AI</span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="w-7 h-7 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider px-2">Menu Principal</div>
                {[
                  { id: 'dashboard' as ActiveTab, label: 'Início / Painel', icon: Zap },
                  { id: 'study' as ActiveTab, label: 'Sala de Estudos', icon: BookOpen },
                  { id: 'simulados' as ActiveTab, label: 'Simulados & Treino', icon: Target },
                  { id: 'erros' as ActiveTab, label: 'Caderno de Erros', icon: AlertCircle, badge: pendingErrorsCount },
                  { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2', icon: Layers },
                  { id: 'redacao' as ActiveTab, label: 'Redação Discursiva', icon: PenTool },
                  { id: 'edital' as ActiveTab, label: 'Raio-X do Edital', icon: BarChart3 },
                  { id: 'settings' as ActiveTab, label: 'Configurações', icon: Settings },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileDrawerOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && item.badge > 0 ? (
                        <span className="px-1.5 py-0.2 bg-[var(--accent-danger)] text-white text-[10px] font-mono font-bold rounded-full">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
