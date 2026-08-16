import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab, DailyMission } from './types';
import { api } from './api/client';
import { Header } from './components/Header';
import { DesktopNav } from './components/DesktopNav';
import { MobileBottomNav } from './components/MobileBottomNav';

// Pages
import { DashboardPage } from './features/dashboard/DashboardPage';
import { StudyRoomPage } from './features/study-room/StudyRoomPage';
import { SimuladosPage } from './features/simulados/SimuladosPage';
import { ErrorNotebookPage } from './features/error-notebook/ErrorNotebookPage';
import { RedacaoPage } from './features/redacao/RedacaoPage';
import { EditalPage } from './features/edital/EditalPage';
import { FlashcardsPage } from './features/flashcards/FlashcardsPage';
import { SettingsPage } from './features/settings/SettingsPage';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('THEME') !== 'light';
  });

  const [careerId, setCareerId] = useState<string>(() => {
    return localStorage.getItem('SELECTED_CAREER') || 'bb_comercial';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [pendingErrorsCount, setPendingErrorsCount] = useState<number>(2);

  const [user, setUser] = useState<UserProfile>({
    id: 'user_joao',
    name: 'João Soares',
    careerId: 'bb_comercial',
    level: 4,
    xp: 2500,
    dailyGoalMinutes: 120,
    dailyGoalQuestions: 50,
    todayQuestions: 45,
    todayMinutes: 90,
    streakDays: 12
  });

  // Apply theme class to <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('THEME', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('THEME', 'light');
    }
  }, [isDark]);

  // Load live user stats from backend
  useEffect(() => {
    api.getDashboardStats(user.id, careerId)
      .then((data) => {
        if (data) {
          setUser((prev) => ({
            ...prev,
            streakDays: data.streak || prev.streakDays,
            xp: data.xp || prev.xp,
            level: data.level || prev.level,
            todayQuestions: data.todayQuestions || prev.todayQuestions,
            dailyGoalQuestions: data.goalQuestions || prev.dailyGoalQuestions,
            todayMinutes: data.todayMinutes || prev.todayMinutes,
            dailyGoalMinutes: data.goalMinutes || prev.dailyGoalMinutes,
          }));
          if (typeof data.pendingErrorsCount === 'number') {
            setPendingErrorsCount(data.pendingErrorsCount);
          }
        }
      })
      .catch(() => {
        // Safe offline fallback
      });
  }, [careerId]);

  const handleSelectCareer = (newCareerId: string) => {
    setCareerId(newCareerId);
    localStorage.setItem('SELECTED_CAREER', newCareerId);
  };

  const handleStartStudy = (mission?: DailyMission) => {
    setActiveTab('study');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-200">
      {/* 1. Compact Header */}
      <Header
        user={user}
        currentCareerId={careerId}
        onSelectCareer={handleSelectCareer}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
      />

      {/* 2. Desktop Navigation Bar */}
      <DesktopNav
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        pendingErrorsCount={pendingErrorsCount}
      />

      {/* 3. Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {activeTab === 'dashboard' && (
          <DashboardPage
            user={user}
            careerId={careerId}
            onNavigate={(tab) => setActiveTab(tab)}
            pendingErrorsCount={pendingErrorsCount}
            onStartStudy={handleStartStudy}
          />
        )}

        {activeTab === 'study' && (
          <StudyRoomPage careerId={careerId} />
        )}

        {activeTab === 'simulados' && (
          <SimuladosPage careerId={careerId} />
        )}

        {activeTab === 'erros' && (
          <ErrorNotebookPage careerId={careerId} />
        )}

        {activeTab === 'redacao' && (
          <RedacaoPage careerId={careerId} />
        )}

        {activeTab === 'edital' && (
          <EditalPage careerId={careerId} />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsPage careerId={careerId} />
        )}

        {activeTab === 'settings' && (
          <SettingsPage
            user={user}
            onUpdateUser={(name) => setUser((prev) => ({ ...prev, name }))}
          />
        )}
      </main>

      {/* 4. Mobile Bottom Navigation Bar (Thumb Zone) */}
      <MobileBottomNav
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        pendingErrorsCount={pendingErrorsCount}
      />
    </div>
  );
};
