import React from 'react';
import { ActiveTab } from '../types';
import { LayoutDashboard, BookOpen, Target, AlertCircle, BarChart3, PenTool, Layers, Settings } from 'lucide-react';

interface DesktopNavProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount?: number;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  activeTab,
  onNavigate,
  pendingErrorsCount = 0
}) => {
  const navItems = [
    { id: 'dashboard' as ActiveTab, label: 'Início', icon: LayoutDashboard },
    { id: 'study' as ActiveTab, label: 'Sala de Estudos', icon: BookOpen },
    { id: 'simulados' as ActiveTab, label: 'Simulados & Treino', icon: Target },
    { id: 'erros' as ActiveTab, label: 'Caderno de Erros', icon: AlertCircle, badge: pendingErrorsCount },
    { id: 'redacao' as ActiveTab, label: 'Redação IA', icon: PenTool },
    { id: 'edital' as ActiveTab, label: 'Raio-X do Edital', icon: BarChart3 },
    { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2', icon: Layers },
  ];

  return (
    <div className="hidden sm:block border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xs font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent-gabarito)]' : 'text-[var(--text-muted)]'}`} strokeWidth={1.7} />
                <span>{item.label}</span>
                {item.badge && item.badge > 0 ? (
                  <span className="px-1.5 py-0.2 bg-[var(--accent-danger)] text-white text-[10px] font-mono font-bold rounded-full ml-1">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
