import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab, DailyMission } from './types';
import { api } from './api/client';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AuthAndUserSelector } from './components/AuthAndUserSelector';

// Pages
import { DashboardPage } from './features/dashboard/DashboardPage';
import { StudyRoomPage } from './features/study-room/StudyRoomPage';
import { SimuladosPage } from './features/simulados/SimuladosPage';
import { ErrorNotebookPage } from './features/error-notebook/ErrorNotebookPage';
import { RedacaoPage } from './features/redacao/RedacaoPage';
import { LeiSecaPage } from './features/leiseca/LeiSecaPage';
import { AproveitamentoPage } from './features/aproveitamento/AproveitamentoPage';
import { EditalPage } from './features/edital/EditalPage';
import { FlashcardsPage } from './features/flashcards/FlashcardsPage';
import { SettingsPage } from './features/settings/SettingsPage';
import { AudioFlashPlayer } from './components/AudioFlashPlayer';
import { ToastProvider } from './components/Toast';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('THEME') !== 'light';
  });

  const [careerId, setCareerId] = useState<string>(() => {
    return localStorage.getItem('SELECTED_CAREER') || 'bb_comercial';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [pendingErrorsCount, setPendingErrorsCount] = useState<number>(0);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [audioPlayerOpen, setAudioPlayerOpen] = useState<boolean>(false);

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

  // Check if there is an active saved user in localStorage
  useEffect(() => {
    const savedUserId = localStorage.getItem('CURRENT_USER_ID');
    if (!savedUserId) {
      setLoadingUser(false);
      return;
    }

    api.getUserProfile(savedUserId)
      .then((profile) => {
        if (profile && profile.id) {
          const userCareer = profile.active_career_id || careerId;
          setCareerId(userCareer);
          setUser({
            id: profile.id,
            name: profile.name,
            careerId: userCareer,
            level: profile.level || 1,
            xp: profile.xp || 0,
            dailyGoalMinutes: (profile.daily_hours ? profile.daily_hours * 60 : 120),
            dailyGoalQuestions: 30,
            todayQuestions: 0,
            todayMinutes: 0,
            streakDays: 0
          });
        } else {
          localStorage.removeItem('CURRENT_USER_ID');
        }
      })
      .catch(() => {
        // If user profile fails to load, prompt selector
        localStorage.removeItem('CURRENT_USER_ID');
      })
      .finally(() => {
        setLoadingUser(false);
      });
  }, []);

  // Load live user stats from backend whenever user or career changes
  useEffect(() => {
    if (!user?.id) return;

    api.getDashboardStats(user.id, careerId)
      .then((data) => {
        if (data) {
          setUser((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              streakDays: data.streak !== undefined ? data.streak : prev.streakDays,
              xp: data.xp !== undefined ? data.xp : prev.xp,
              level: data.level !== undefined ? data.level : prev.level,
              todayQuestions: data.todayQuestions !== undefined ? data.todayQuestions : prev.todayQuestions,
              dailyGoalQuestions: data.goalQuestions || prev.dailyGoalQuestions,
              todayMinutes: data.todayMinutes !== undefined ? data.todayMinutes : prev.todayMinutes,
              dailyGoalMinutes: data.goalMinutes || prev.dailyGoalMinutes,
            };
          });
          if (typeof data.pendingErrorsCount === 'number') {
            setPendingErrorsCount(data.pendingErrorsCount);
          }
        }
      })
      .catch(() => {
        // Safe offline fallback
      });
  }, [user?.id, careerId]);

  const handleSelectCareer = (newCareerId: string) => {
    setCareerId(newCareerId);
    localStorage.setItem('SELECTED_CAREER', newCareerId);
    if (user?.id) {
      api.updateUserProfile(user.id, { active_career_id: newCareerId }).catch(() => {});
    }
  };

  const handleStartStudy = (mission?: DailyMission) => {
    setActiveTab('study');
  };

  const handleSwitchUser = () => {
    localStorage.removeItem('CURRENT_USER_ID');
    setUser(null);
  };

  const handleSelectUser = (selectedUser: UserProfile) => {
    setUser(selectedUser);
    setCareerId(selectedUser.careerId);
    setActiveTab('dashboard');
  };

  if (loadingUser) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[var(--bg-base)] text-xs text-[var(--text-muted)] font-mono">
        Carregando ambiente Gabarito.AI...
      </div>
    );
  }

  // If no active user, render Auth & Profile Selector Screen
  if (!user) {
    return <AuthAndUserSelector onSelectUser={handleSelectUser} />;
  }

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
        onSwitchUser={handleSwitchUser}
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
          onToggleAudio={() => setAudioPlayerOpen(prev => !prev)}
        />

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10">
          <div className="max-w-7xl w-full mx-auto space-y-8">
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

            {activeTab === 'leiseca' && (
              <LeiSecaPage careerId={careerId} />
            )}

            {activeTab === 'aproveitamento' && (
              <AproveitamentoPage careerId={careerId} />
            )}

            {activeTab === 'edital' && (
              <EditalPage careerId={careerId} />
            )}

            {activeTab === 'flashcards' && (
              <FlashcardsPage careerId={careerId} />
            )}

            {(activeTab === 'settings' || activeTab === 'settings_ajustes' || activeTab === 'settings_guia' || activeTab === 'settings_sobre') && (
              <SettingsPage
                user={user}
                onUpdateUser={(name) => setUser((prev) => (prev ? { ...prev, name } : null))}
                initialTab={
                  activeTab === 'settings_guia'
                    ? 'guia'
                    : activeTab === 'settings_sobre'
                    ? 'sobre'
                    : 'ajustes'
                }
              />
            )}
          </div>
        </main>

        {/* Audio Flash Player Flutuante */}
        <AudioFlashPlayer
          careerId={careerId}
          isOpen={audioPlayerOpen}
          onClose={() => setAudioPlayerOpen(false)}
        />
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
