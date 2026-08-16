import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';
import { CAREERS_LIST, getCareerById } from '../utils/careers';
import { 
  LayoutDashboard, 
  BookOpen, 
  Target, 
  AlertCircle, 
  PenTool, 
  BarChart3, 
  Layers, 
  Settings, 
  ChevronDown, 
  Check, 
  Flame, 
  Moon, 
  Sun, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  user: UserProfile | null;
  currentCareerId: string;
  onSelectCareer: (careerId: string) => void;
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  currentCareerId,
  onSelectCareer,
  activeTab,
  onNavigate,
  pendingErrorsCount,
  isDark,
  onToggleTheme
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentCareer = getCareerById(currentCareerId);

  const navGroups = [
    {
      title: 'ESTUDO DIÁRIO',
      items: [
        { id: 'dashboard' as ActiveTab, label: 'Início', icon: LayoutDashboard },
        { id: 'study' as ActiveTab, label: 'Sala de Estudos', icon: BookOpen },
      ]
    },
    {
      title: 'TREINO & PRÁTICA',
      items: [
        { id: 'simulados' as ActiveTab, label: 'Simulados & Treino', icon: Target },
        { id: 'erros' as ActiveTab, label: 'Caderno de Erros', icon: AlertCircle, badge: pendingErrorsCount },
        { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2', icon: Layers },
      ]
    },
    {
      title: 'INTELIGÊNCIA & ANÁLISE',
      items: [
        { id: 'redacao' as ActiveTab, label: 'Redação Discursiva', icon: PenTool },
        { id: 'edital' as ActiveTab, label: 'Raio-X do Edital', icon: BarChart3 },
      ]
    }
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] select-none shrink-0 z-30">
      {/* 1. Brand Logo */}
      <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
        <div 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.35)] group-hover:scale-105 transition-transform">
            G
          </div>
          <div>
            <div className="font-bold text-sm tracking-tight text-[var(--text-primary)]">
              Gabarito<span className="text-[var(--accent-primary)] font-mono">.AI</span>
            </div>
            <div className="text-[10px] text-[var(--text-muted)] font-mono -mt-0.5">
              v3.0 Ultra Pro
            </div>
          </div>
        </div>

        <button
          onClick={onToggleTheme}
          aria-label="Alternar tema"
          className="w-7 h-7 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* 2. Career Selector */}
      <div className="p-3 border-b border-[var(--border-subtle)] relative">
        <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1 px-1">
          Edital em Foco
        </div>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all text-left group"
        >
          <div className="truncate pr-1">
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
            <div className="absolute top-full left-3 right-3 mt-1 z-50 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-focus)] shadow-2xl p-1.5 animate-fade-in space-y-1">
              {CAREERS_LIST.map((c) => {
                const isSelected = c.id === currentCareerId;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCareer(c.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-md text-xs transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30'
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

      {/* 3. Navigation Links */}
      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <div className="text-[10px] font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider px-2 mb-1.5">
              {group.title}
            </div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[var(--bg-active)] text-[var(--text-primary)] font-semibold shadow-xs border border-[var(--border-subtle)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} strokeWidth={1.8} />
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
        ))}
      </div>

      {/* 4. Bottom User Profile Footer */}
      <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div 
          onClick={() => onNavigate('settings')}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
            activeTab === 'settings' ? 'bg-[var(--bg-active)]' : 'hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <div className="flex items-center gap-2.5 truncate">
            <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center font-bold text-xs text-[var(--text-primary)] shrink-0">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'J'}
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-[var(--text-primary)] truncate">
                {user?.name || 'Estudante'}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                <span>Nível {user?.level || 1}</span>
                <span>•</span>
                <span>{user?.xp || 0} XP</span>
              </div>
            </div>
          </div>
          <Settings className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 hover:text-[var(--text-primary)]" />
        </div>
      </div>
    </aside>
  );
};
