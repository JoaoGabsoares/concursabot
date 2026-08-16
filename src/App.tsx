import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab, DailyMission } from './types';
import { api } from './api/client';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
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
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-200">
      {/* 1. Desktop Left Sidebar (Fixed 64px width on desktop) */}
      <Sidebar
        user={user}
        currentCareerId={careerId}
        onSelectCareer={handleSelectCareer}
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        pendingErrorsCount={pendingErrorsCount}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* 2. Main Application Viewport (Full Height & Width) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Topbar Header */}
        <Header
          user={user}
          currentCareerId={careerId}
          onSelectCareer={handleSelectCareer}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          activeTab={activeTab}
          onNavigate={(tab) => setActiveTab(tab)}
          pendingErrorsCount={pendingErrorsCount}
        />

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl w-full mx-auto">
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
          </div>
        </main>
      </div>

      {/* 3. Mobile Bottom Navigation (Thumb Zone) */}
      <MobileBottomNav
        activeTab={activeTab}
        onNavigate={(tab) => setActiveTab(tab)}
        pendingErrorsCount={pendingErrorsCount}
      />
    </div>
  );
};
