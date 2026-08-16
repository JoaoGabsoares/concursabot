import React from 'react';
import { ActiveTab } from '../types';
import { LayoutDashboard, BookOpen, Target, AlertCircle, BarChart3, PenTool, Sparkles } from 'lucide-react';

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
    { id: 'simulados' as ActiveTab, label: 'Treino', icon: Target },
    { id: 'erros' as ActiveTab, label: 'Erros', icon: AlertCircle, badge: pendingErrorsCount },
    { id: 'edital' as ActiveTab, label: 'Edital', icon: BarChart3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-[var(--border-subtle)] bg-[var(--bg-glass)] pb-[env(safe-area-inset-bottom)] sm:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center w-full h-full py-1 min-w-[56px] min-h-[44px] touch-manipulation transition-colors ${
                isActive 
                  ? 'text-[var(--accent-gabarito)] font-medium' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} strokeWidth={isActive ? 2.2 : 1.6} />
                {tab.badge && tab.badge > 0 ? (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 bg-[var(--accent-danger)] text-white text-[9px] font-mono font-bold rounded-full leading-tight animate-pulse">
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-1 font-sans tracking-tight">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--accent-gabarito)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
