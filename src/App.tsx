import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab, DailyMission } from './types';
import { api } from './api/client';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AuthAndUserSelector } from './components/AuthAndUserSelector';
import { PublicDashboardPage } from './features/landing/PublicDashboardPage';

// Lazy loaded page modules for optimal chunking and initial load speed
const DashboardPage = React.lazy(() => import('./features/dashboard/DashboardPage').then(m => ({ default: m.DashboardPage })));
const StudyCyclePage = React.lazy(() => import('./features/study-cycle/StudyCyclePage').then(m => ({ default: m.StudyCyclePage })));
const StudyRoomPage = React.lazy(() => import('./features/study-room/StudyRoomPage').then(m => ({ default: m.StudyRoomPage })));
const SimuladosPage = React.lazy(() => import('./features/simulados/SimuladosPage').then(m => ({ default: m.SimuladosPage })));
const ErrorNotebookPage = React.lazy(() => import('./features/error-notebook/ErrorNotebookPage').then(m => ({ default: m.ErrorNotebookPage })));
const RedacaoPage = React.lazy(() => import('./features/redacao/RedacaoPage').then(m => ({ default: m.RedacaoPage })));
const LeiSecaPage = React.lazy(() => import('./features/leiseca/LeiSecaPage').then(m => ({ default: m.LeiSecaPage })));
const AproveitamentoPage = React.lazy(() => import('./features/aproveitamento/AproveitamentoPage').then(m => ({ default: m.AproveitamentoPage })));
const EditalPage = React.lazy(() => import('./features/edital/EditalPage').then(m => ({ default: m.EditalPage })));
const FlashcardsPage = React.lazy(() => import('./features/flashcards/FlashcardsPage').then(m => ({ default: m.FlashcardsPage })));
const GuiaMetodoPage = React.lazy(() => import('./features/guide/GuiaMetodoPage').then(m => ({ default: m.GuiaMetodoPage })));
const AboutPage = React.lazy(() => import('./features/about/AboutPage').then(m => ({ default: m.AboutPage })));
const SettingsPage = React.lazy(() => import('./features/settings/SettingsPage').then(m => ({ default: m.SettingsPage })));
import { ToastProvider } from './components/Toast';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('THEME') !== 'light';
  });

  const [careerId, setCareerId] = useState<string>(() => {
    return localStorage.getItem('SELECTED_CAREER') || 'atrfb';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [pendingErrorsCount, setPendingErrorsCount] = useState<number>(0);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

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

  // Check if there is an active saved user in localStorage or Google OAuth redirect callback
  useEffect(() => {
    // 1. Processar retorno de redirecionamento do Google OAuth 2.0
    if (typeof window !== 'undefined' && window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      const urlAuthToken = urlParams.get('auth_token');
      const googleAuthSuccess = urlParams.get('google_auth');

      if (urlAuthToken) {
        localStorage.setItem('GABARITO_AUTH_TOKEN', urlAuthToken);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }

    const token = localStorage.getItem('GABARITO_AUTH_TOKEN');
    const savedUserId = localStorage.getItem('CURRENT_USER_ID');

    if (!token && !savedUserId) {
      setLoadingUser(false);
      return;
    }

    // Validar sessão ativa e carregar perfil
    api.getAuthMe()
      .then((authData) => {
        if (authData && authData.authenticated) {
          const targetProfile = (authData.profiles || []).find((p: any) => p.id === savedUserId) || authData.profiles?.[0];
          if (targetProfile) {
            localStorage.setItem('CURRENT_USER_ID', targetProfile.id);
            const userCareer = targetProfile.active_career_id || careerId;
            setCareerId(userCareer);
            setUser({
              id: targetProfile.id,
              name: targetProfile.name,
              careerId: userCareer,
              level: targetProfile.level || 1,
              xp: targetProfile.xp || 0,
              dailyGoalMinutes: (targetProfile.daily_hours ? targetProfile.daily_hours * 60 : 120),
              dailyGoalQuestions: 30,
              todayQuestions: 0,
              todayMinutes: 0,
              streakDays: 0
            });
            return;
          }
        }
        
        // Se a conta não tem perfis ou token inválido
        if (savedUserId) {
          return api.getUserProfile(savedUserId).then((profile) => {
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
            }
          });
        }
      })
      .catch(() => {
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

  const handleStartStudy = (target?: DailyMission | string) => {
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

  // If no active user, render Public Interactive Dashboard (Landing Portal)
  if (!user) {
    return (
      <PublicDashboardPage
        onSelectUser={handleSelectUser}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />
    );
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
          onSwitchUser={handleSwitchUser}
        />

        {/* Scrollable Viewport (Zero menu duplication: left Sidebar handles desktop navigation) */}
        <main className="flex-1 overflow-y-auto p-3.5 sm:p-6 lg:p-8 pb-28 lg:pb-8">
          <div className="max-w-7xl w-full mx-auto space-y-8">
            <React.Suspense fallback={
              <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 text-xs font-mono text-[var(--text-muted)] animate-fade-in">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--accent-primary)] border-t-transparent animate-spin" />
                <span>Carregando módulo de estudo...</span>
              </div>
            }>
              {activeTab === 'dashboard' && (
                <DashboardPage
                  user={user}
                  careerId={careerId}
                  onNavigate={(tab) => setActiveTab(tab)}
                  pendingErrorsCount={pendingErrorsCount}
                  onStartStudy={handleStartStudy}
                />
              )}

              {(activeTab === 'ciclos' || activeTab === 'study-cycle') && (
                <StudyCyclePage
                  user={user}
                  careerId={careerId}
                  onNavigate={(tab) => setActiveTab(tab)}
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
                <EditalPage 
                  careerId={careerId} 
                  onNavigate={(tab) => setActiveTab(tab)}
                  onStartStudy={handleStartStudy}
                />
              )}

              {activeTab === 'flashcards' && (
                <FlashcardsPage careerId={careerId} />
              )}

              {(activeTab === 'guia' || activeTab === 'settings_guia') && (
                <GuiaMetodoPage onNavigate={(tab) => setActiveTab(tab)} />
              )}

              {(activeTab === 'sobre' || activeTab === 'settings_sobre') && (
                <AboutPage />
              )}

              {(activeTab === 'settings' || activeTab === 'settings_ajustes') && (
                <SettingsPage
                  user={user}
                  onUpdateUser={(name) => setUser((prev) => (prev ? { ...prev, name } : null))}
                  initialTab="ajustes"
                />
              )}
            </React.Suspense>
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
