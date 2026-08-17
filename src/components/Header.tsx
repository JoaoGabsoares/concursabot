import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { getCareerById, CAREERS_LIST } from '../utils/careers';
import { getConcurseiroRank } from '../utils/gamification';
import { Menu, X, Sun, Moon, ChevronRight, ChevronDown, Check, Flame } from 'lucide-react';

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
  const currentRank = getConcurseiroRank(user?.xp || 0);

  const tabLabels: Record<ActiveTab, { title: string; category: string }> = {
    dashboard: { title: 'Visão Geral & Missão', category: 'ESTUDO DIÁRIO' },
    study: { title: 'Sala de Estudos Teórica', category: 'ESTUDO DIÁRIO' },
    simulados: { title: 'Simulados & Treino Real', category: 'TREINO & PRÁTICA' },
    erros: { title: 'Caderno de Erros', category: 'TREINO & PRÁTICA' },
    flashcards: { title: 'Flashcards SM-2', category: 'TREINO & PRÁTICA' },
    leiseca: { title: 'Caça-Pegadinhas da Lei', category: 'TREINO & PRÁTICA' },
    aproveitamento: { title: 'Transição de Editais', category: 'INTELIGÊNCIA' },
    redacao: { title: 'Corretor de Redação', category: 'INTELIGÊNCIA' },
    edital: { title: 'Raio-X do Edital', category: 'INTELIGÊNCIA' },
    comunidade: { title: 'Comunidade & Tutor IA', category: 'COMUNIDADE' },
    settings: { title: 'Configurações', category: 'SISTEMA' },
    settings_ajustes: { title: 'Ajustes & API', category: 'SISTEMA' },
    settings_guia: { title: 'Guia de Uso & Método', category: 'SISTEMA' },
    settings_sobre: { title: 'Sobre o Gabarito.AI', category: 'SISTEMA' },
  };

  const currentTabInfo = tabLabels[activeTab] || { title: 'Painel', category: 'GABARITO.AI' };

  return (
    <>
      <header className="w-full h-14 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-4 sm:px-8 flex items-center justify-between select-none z-20 shrink-0 font-sans shadow-sm">
        {/* Left: Mobile Toggle / Desktop Breadcrumbs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-secondary)]"
            aria-label="Menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Mobile Brand Mark */}
          <div 
            onClick={() => onNavigate('dashboard')}
            className="lg:hidden font-display font-bold text-base text-[var(--text-primary)] cursor-pointer"
          >
            Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
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

        {/* Right Actions: Real Metric Badges & Theme */}
        <div className="flex items-center gap-3">
          {/* Rank Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
            <span className="text-[var(--text-muted)]">RANK:</span>
            <span className="font-bold text-[var(--accent-primary)]">{currentRank.title}</span>
          </div>

          {/* Streak Metric */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-500 font-bold">
            <Flame className="w-3.5 h-3.5" />
            <span>{user?.streakDays || 0} DIAS</span>
          </div>

          {/* Career Indicator (Mobile) */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] truncate max-w-[120px]"
            >
              <span className="truncate">{currentCareer.banca}</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
            </button>

            {careerDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCareerDropdownOpen(false)} />
                <div className="absolute right-0 top-full mt-1 w-64 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-focus)] shadow-2xl p-1.5 z-50 animate-fade-in space-y-1">
                  {CAREERS_LIST.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCareer(c.id);
                        setCareerDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-md text-xs flex items-center justify-between ${
                        c.id === currentCareerId 
                          ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold' 
                          : 'hover:bg-[var(--bg-active)] text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="truncate">
                        <div className="truncate font-semibold">{c.name}</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-mono">{c.banca}</div>
                      </div>
                      {c.id === currentCareerId && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="lg:hidden w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] flex flex-col z-10 animate-fade-in font-sans">
            <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <div className="font-display font-bold text-base text-[var(--text-primary)]">
                Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="w-7 h-7 rounded flex items-center justify-center text-[var(--text-muted)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {[
                { id: 'dashboard' as ActiveTab, label: 'Início' },
                { id: 'study' as ActiveTab, label: 'Sala de Estudos' },
                { id: 'simulados' as ActiveTab, label: 'Simulados & Treino' },
                { id: 'erros' as ActiveTab, label: 'Caderno de Erros', badge: pendingErrorsCount },
                { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2' },
                { id: 'leiseca' as ActiveTab, label: 'Caça-Pegadinhas da Lei' },
                { id: 'aproveitamento' as ActiveTab, label: 'Transição de Editais' },
                { id: 'redacao' as ActiveTab, label: 'Redação Discursiva' },
                { id: 'edital' as ActiveTab, label: 'Raio-X do Edital' },
                { id: 'settings' as ActiveTab, label: 'Configurações' },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border-l-4 border-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && item.badge > 0 ? (
                      <span className="px-2 py-0.5 font-mono text-[10px] font-bold rounded bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] border border-[var(--accent-danger)]/30">
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
