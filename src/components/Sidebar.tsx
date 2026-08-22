import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { CAREERS_LIST, getCareerById } from '../utils/careers';
import { getConcurseiroRank } from '../utils/gamification';
import { ChevronDown, Check, Sun, Moon, LogOut, Settings } from 'lucide-react';
import { CarimboStatus } from './UIPrimitives';

interface SidebarProps {
  user: UserProfile | null;
  currentCareerId: string;
  onSelectCareer: (careerId: string) => void;
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
  onSwitchUser: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  currentCareerId,
  onSelectCareer,
  activeTab,
  onNavigate,
  pendingErrorsCount,
  isDark,
  onToggleTheme,
  onSwitchUser
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);
  const currentRank = getConcurseiroRank(user?.xp || 0);

  const navGroups = [
    {
      title: 'ESTUDO DIÁRIO',
      items: [
        { id: 'dashboard' as ActiveTab, label: 'Dashboard' },
        { id: 'study' as ActiveTab, label: 'Sala de Estudos' },
        { id: 'simulados' as ActiveTab, label: 'Simulados & Treino' },
      ]
    },
    {
      title: 'TREINO & PRÁTICA',
      items: [
        { id: 'leiseca' as ActiveTab, label: 'Caça-Pegadinhas da Lei' },
        { id: 'erros' as ActiveTab, label: 'Caderno de Erros', badge: pendingErrorsCount },
        { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2' },
        { id: 'redacao' as ActiveTab, label: 'Redação Discursiva' },
      ]
    },
    {
      title: 'ESTRATÉGIA & ANÁLISE',
      items: [
        { id: 'edital' as ActiveTab, label: 'Raio-X do Edital' },
        { id: 'aproveitamento' as ActiveTab, label: 'Transição de Editais' },
        { id: 'comunidade' as ActiveTab, label: 'Comunidade & Salas' },
      ]
    },
    {
      title: 'SISTEMA & GUIA',
      items: [
        { id: 'guia' as ActiveTab, label: 'Guia de Uso & Método' },
        { id: 'sobre' as ActiveTab, label: 'Sobre a Plataforma' },
        { id: 'settings' as ActiveTab, label: 'Configurações' },
      ]
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col justify-between w-68 xl:w-72 h-screen bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] select-none shrink-0 z-30 font-sans shadow-lg">
      
      {/* Top Section: Brand + Edital */}
      <div className="overflow-y-auto scrollbar-thin">
        {/* 1. Brand Header */}
        <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div 
            onClick={() => onNavigate('dashboard')}
            className="cursor-pointer group space-y-0.5"
          >
            <div className="font-display font-bold text-2xl tracking-tight text-[var(--text-primary)]">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </div>
            <CarimboStatus status="homologado" label="OFICIAL" />
          </div>

          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-focus)] transition-all shadow-sm"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* 2. Edital Selector (Official Process Style) */}
        <div className="p-4 border-b border-[var(--border-subtle)] relative bg-[var(--bg-elevated)]/30">
          <div className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5 px-1">
            Edital em Foco
          </div>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all text-left shadow-sm group"
          >
            <div className="truncate pr-2 space-y-0.5">
              <div className="text-sm font-bold text-[var(--text-primary)] truncate">
                {currentCareer.name.split('—')[0]}
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                Banca: {currentCareer.banca}
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0 group-hover:text-[var(--text-primary)] transition-colors" />
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
              <div className="absolute top-full left-4 right-4 mt-1.5 z-50 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-focus)] shadow-2xl p-1.5 animate-fade-in space-y-1">
                {CAREERS_LIST.map((c) => {
                  const isSelected = c.id === currentCareerId;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCareer(c.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold border-l-2 border-[var(--accent-primary)]'
                          : 'hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="truncate font-semibold">{c.name}</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-mono">{c.banca}</div>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[var(--accent-primary)]" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* 3. Navigation Links */}
        <div className="p-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-1.5">
              <div className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider px-3 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                <span>{group.title}</span>
              </div>
              {group.items.map((item) => {
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border-l-4 border-[var(--accent-primary)] shadow-sm font-bold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {item.badge && item.badge > 0 ? (
                      <span className="px-2 py-0.5 font-mono text-xs font-bold rounded-full bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] border border-[var(--accent-danger)]/30">
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Student Footer Card with Patente & Rank */}
      <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 space-y-3 shrink-0">
        <div 
          onClick={() => onNavigate('settings')}
          className={`flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] cursor-pointer transition-all shadow-sm ${
            activeTab === 'settings' ? 'border-[var(--border-focus)]' : ''
          }`}
        >
          <div className="truncate text-left space-y-0.5">
            <div className="text-sm font-bold text-[var(--text-primary)] truncate">
              {user?.name || 'Estudante'}
            </div>
            <div className="text-xs text-[var(--accent-primary)] font-mono font-bold truncate">
              {currentRank.title} ({user?.xp || 0} XP)
            </div>
          </div>
          <Settings className="w-4 h-4 text-[var(--text-muted)] shrink-0 hover:text-[var(--text-primary)] transition-colors" />
        </div>

        <button
          onClick={onSwitchUser}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-all border border-[var(--border-subtle)] hover:border-[var(--border-focus)] shadow-sm"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Trocar Perfil</span>
        </button>
      </div>
    </aside>
  );
};
