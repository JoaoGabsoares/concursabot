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
    { id: 'study' as ActiveTab, label: 'Estudo' },
    { id: 'simulados' as ActiveTab, label: 'Simulado' },
    { id: 'erros' as ActiveTab, label: 'Erros', badge: pendingErrorsCount },
    { id: 'redacao' as ActiveTab, label: 'Redação' },
  ];

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] px-2 py-1 select-none font-sans"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex items-center justify-center py-2 px-3 rounded text-xs transition-colors select-none ${
                isActive
                  ? 'text-[var(--accent-primary)] font-bold bg-[var(--accent-primary-glow)] border-b-2 border-[var(--accent-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && tab.badge > 0 ? (
                <span className="ml-1 font-mono text-[10px] font-bold text-[var(--accent-danger)]">
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
