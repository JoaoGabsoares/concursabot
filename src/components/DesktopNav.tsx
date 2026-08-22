import React from 'react';
import { ActiveTab } from '../types';
import { 
  LayoutDashboard, 
  BookOpen, 
  Target, 
  BookMarked, 
  BarChart3, 
  PenTool, 
  Layers, 
  Scale, 
  GitCompare, 
  MessageSquare, 
  HelpCircle, 
  Settings,
  Sparkles
} from 'lucide-react';

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
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'study' as ActiveTab, label: 'Sala de Estudos', icon: BookOpen },
    { id: 'simulados' as ActiveTab, label: 'Simulados', icon: Target },
    { id: 'erros' as ActiveTab, label: 'Caderno de Erros', icon: BookMarked, badge: pendingErrorsCount },
    { id: 'leiseca' as ActiveTab, label: 'Caça-Pegadinhas', icon: Scale },
    { id: 'flashcards' as ActiveTab, label: 'Flashcards SM-2', icon: Layers },
    { id: 'edital' as ActiveTab, label: 'Raio-X Edital', icon: BarChart3 },
    { id: 'redacao' as ActiveTab, label: 'Redação IA', icon: PenTool },
    { id: 'aproveitamento' as ActiveTab, label: 'Transição', icon: GitCompare },
    { id: 'comunidade' as ActiveTab, label: 'Comunidade', icon: MessageSquare },
    { id: 'guia' as ActiveTab, label: 'Guia & Método', icon: HelpCircle },
  ];

  return (
    <div className="hidden sm:block border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 sm:px-6 shadow-xs select-none">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-1.5 overflow-x-auto py-2 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'guia' && activeTab === 'settings_guia');

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/40 font-bold shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} />
                <span>{item.label}</span>
                {item.badge && item.badge > 0 ? (
                  <span className="px-1.5 py-0.2 bg-rose-500 text-white text-[9px] font-mono font-bold rounded-full ml-0.5">
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
