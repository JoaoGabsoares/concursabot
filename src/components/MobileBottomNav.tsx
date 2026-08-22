import React from 'react';
import { ActiveTab } from '../types';

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
    { id: 'dashboard' as ActiveTab, label: 'Início' },
    { id: 'ciclos' as ActiveTab, label: 'Ciclos' },
    { id: 'study' as ActiveTab, label: 'Estudo' },
    { id: 'simulados' as ActiveTab, label: 'Simulado' },
    { id: 'erros' as ActiveTab, label: 'Erros', badge: pendingErrorsCount },
  ];

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] px-2 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] select-none font-sans shadow-2xl"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = 
            activeTab === tab.id ||
            (tab.id === 'ciclos' && activeTab === 'study-cycle') ||
            (tab.id === 'study' && activeTab === 'study-room') ||
            (tab.id === 'erros' && activeTab === 'error-notebook');

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex items-center justify-center min-h-[44px] py-2 px-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all select-none ${
                isActive
                  ? 'text-[var(--accent-primary)] font-bold bg-[var(--accent-primary-glow)] border-b-2 border-[var(--accent-primary)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && tab.badge > 0 ? (
                <span className="ml-1.5 font-mono text-xs font-bold text-[var(--accent-danger)]">
                  [{tab.badge}]
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
