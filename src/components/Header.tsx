import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { CAREERS_LIST, getCareerById } from '../utils/careers';
import { ChevronDown, Moon, Sun, Shield, Sparkles, User, Settings, Check } from 'lucide-react';

interface HeaderProps {
  user: UserProfile | null;
  currentCareerId: string;
  onSelectCareer: (careerId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  currentCareerId,
  onSelectCareer,
  isDark,
  onToggleTheme,
  activeTab,
  onNavigate
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[var(--border-subtle)] bg-[var(--bg-glass)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            G
          </div>
          <span className="font-serif font-bold text-lg tracking-tight">
            Gabarito<span className="text-[var(--accent-gabarito)] font-mono">.AI</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[var(--border-subtle)] text-[var(--text-muted)] tracking-wider">
            v3.0 Pro
          </span>
        </div>

        {/* Center: Career Selector Dropdown (Mobile-First Dropdown) */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-focus)] transition-all max-w-[200px] sm:max-w-xs truncate"
          >
            <span className="text-[var(--accent-gabarito)] font-mono font-bold">●</span>
            <span className="truncate font-sans">{currentCareer.name.split('—')[0]}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
          </button>

          {dropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute top-full mt-2 right-0 sm:left-0 z-50 w-72 sm:w-80 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl p-2 animate-fade-in">
                <div className="text-[11px] font-mono text-[var(--text-muted)] px-3 py-1.5 uppercase tracking-wider">
                  Selecionar Edital Ativo
                </div>
                <div className="space-y-1 mt-1">
                  {CAREERS_LIST.map((c) => {
                    const isSelected = c.id === currentCareerId;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCareer(c.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                          isSelected 
                            ? 'bg-[var(--accent-gabarito-glow)] text-[var(--accent-gabarito)] font-semibold border border-[var(--accent-gabarito)]/30' 
                            : 'hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                        }`}
                      >
                        <div className="truncate pr-2">
                          <div className="truncate">{c.name}</div>
                          <div className="text-[10px] text-[var(--text-muted)] font-mono">{c.banca}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 shrink-0 text-[var(--accent-gabarito)]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Actions: Theme Toggle & Settings */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleTheme}
            aria-label="Alternar tema claro/escuro"
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onNavigate('settings')}
            aria-label="Ajustes do perfil"
            className={`w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] transition-colors ${
              activeTab === 'settings' 
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold' 
                : 'hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
