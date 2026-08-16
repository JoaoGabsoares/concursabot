import React from 'react';
import { ActiveTab } from '../types';
import { LayoutDashboard, BookOpen, Target, AlertCircle, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount?: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onNavigate,
  pendingErrorsCount = 0
}) => {
  const tabs = [
    { id: 'dashboard' as ActiveTab, label: 'Início', icon: LayoutDashboard },
    { id: 'study' as ActiveTab, label: 'Estudo', icon: BookOpen },
    { id: 'simulados' as ActiveTab, label: 'Simulado', icon: Target },
    { id: 'erros' as ActiveTab, label: 'Erros', icon: AlertCircle, badge: pendingErrorsCount },
    { id: 'redacao' as ActiveTab, label: 'Redação', icon: Sparkles },
  ];

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-glass)] backdrop-blur-xl border-t border-[var(--border-subtle)] px-2 py-1.5 safe-area-pb"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-lg min-w-[56px] min-h-[48px] transition-colors select-none ${
                isActive
                  ? 'text-[var(--accent-primary)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.2 : 1.7} />
                {tab.badge && tab.badge > 0 ? (
                  <span className="absolute -top-1 -right-2.5 w-4 h-4 bg-[var(--accent-danger)] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center ring-2 ring-[var(--bg-surface)]">
                    {tab.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-sans">
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-6 h-0.5 bg-[var(--accent-primary)] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
