import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { CAREERS_LIST, getCareerById } from '../utils/careers';
import { ChevronDown, Check, Sun, Moon, LogOut, Settings } from 'lucide-react';

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

  const navGroups = [
    {
      title: 'ESTUDO DIÁRIO',
      items: [
        { id: 'dashboard' as ActiveTab, label: 'Início' },
        { id: 'study' as ActiveTab, label: 'Sala de Estudos' },
      ]
    },
    {
      title: 'TREINO & PRÁTICA',
      items: [
        { id: 'simulados' as ActiveTab, label: 'Simulados & Treino' },
        { id: 'erros' as ActiveTab, label: 'Caderno de Erros', badge: pendingErrorsCount },
        { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2' },
      ]
    },
    {
      title: 'INTELIGÊNCIA & ANÁLISE',
      items: [
        { id: 'redacao' as ActiveTab, label: 'Redação Discursiva' },
        { id: 'edital' as ActiveTab, label: 'Raio-X do Edital' },
      ]
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] select-none shrink-0 z-30 font-sans">
      {/* 1. Brand Header (Institutional Seal Style) */}
      <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
        <div 
          onClick={() => onNavigate('dashboard')}
          className="cursor-pointer group"
        >
          <div className="font-display font-bold text-lg tracking-tight text-[var(--text-primary)]">
            Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
          </div>
          <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
            Plataforma Oficial
          </div>
        </div>

        <button
          onClick={onToggleTheme}
          aria-label="Alternar tema"
          className="w-8 h-8 rounded border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* 2. Edital Selector (Official Process Style) */}
      <div className="p-4 border-b border-[var(--border-subtle)] relative">
        <div className="text-[10px] font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5 px-1">
          Edital em Foco
        </div>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between p-2.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all text-left group"
        >
          <div className="truncate pr-2">
            <div className="text-xs font-semibold text-[var(--text-primary)] truncate">
              {currentCareer.name.split('—')[0]}
            </div>
            <div className="text-[10px] font-mono text-[var(--text-muted)]">
              Banca: {currentCareer.banca}
            </div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 group-hover:text-[var(--text-primary)] transition-colors" />
        </button>

        {dropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
            <div className="absolute top-full left-4 right-4 mt-1.5 z-50 rounded bg-[var(--bg-elevated)] border border-[var(--border-focus)] shadow-2xl p-1 animate-fade-in space-y-0.5">
              {CAREERS_LIST.map((c) => {
                const isSelected = c.id === currentCareerId;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCareer(c.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded text-xs transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold border-l-2 border-[var(--accent-primary)]'
                        : 'hover:bg-[var(--bg-active)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="truncate font-medium">{c.name}</div>
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

      {/* 3. Navigation Links (Text-First, Strict Zero Clutter) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <div className="text-[10px] font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider px-3 mb-1.5">
              {group.title}
            </div>
            {group.items.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold border-l-2 border-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  {item.badge && item.badge > 0 ? (
                    <span className="px-1.5 py-0.2 font-mono text-[10px] font-bold rounded bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] border border-[var(--accent-danger)]/30">
                      [{item.badge}]
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* 4. Student Footer (Strict Typography, No Cliché Icons) */}
      <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
        <div 
          onClick={() => onNavigate('settings')}
          className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
            activeTab === 'settings' ? 'bg-[var(--bg-active)]' : 'hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <div className="truncate text-left">
            <div className="text-xs font-bold text-[var(--text-primary)] truncate">
              {user?.name || 'Estudante'}
            </div>
            <div className="text-[10px] text-[var(--text-muted)] font-mono">
              Nível {user?.level || 1} • {user?.xp || 0} XP
            </div>
          </div>
          <Settings className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 hover:text-[var(--text-primary)]" />
        </div>

        <button
          onClick={onSwitchUser}
          className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors border border-[var(--border-subtle)]"
        >
          <LogOut className="w-3 h-3" />
          <span>Trocar Perfil</span>
        </button>
      </div>
    </aside>
  );
};
