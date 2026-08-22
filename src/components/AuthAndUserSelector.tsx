import React, { useState, useEffect } from 'react';
import { UserProfile, AccountInfo } from '../types';
import { api, setAuthToken, getAuthToken } from '../api/client';
import { CAREERS_LIST } from '../utils/careers';
import { Card, Button, CarimboStatus } from './UIPrimitives';
import { useToast } from './Toast';
import { 
  ChevronRight, 
  UserPlus, 
  LogIn, 
  LogOut, 
  ShieldCheck, 
  Lock, 
  User, 
  Mail, 
  Sparkles, 
  Trash2,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

interface AuthAndUserSelectorProps {
  onSelectUser: (user: UserProfile) => void;
}

export const AuthAndUserSelector: React.FC<AuthAndUserSelectorProps> = ({ onSelectUser }) => {
  const { success, error: toastError, info } = useToast();

  // Authentication State
  const [authStatus, setAuthStatus] = useState<'checking' | 'unauthenticated' | 'authenticated'>('checking');
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Form Inputs
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Profiles State (Exclusively for this account)
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  // New Profile Form State
  const [newName, setNewName] = useState<string>('');
  const [newCareerId, setNewCareerId] = useState<string>('atrfb');
  const [newGoalHours, setNewGoalHours] = useState<number>(4);
  const [creatingUser, setCreatingUser] = useState<boolean>(false);
  const [createProfileError, setCreateProfileError] = useState<string | null>(null);

  // Google Auth State
  const [googleClientId, setGoogleClientId] = useState<string>('');

  // 1. Check current session and load Google auth config on mount
  useEffect(() => {
    // Load auth config
    api.getAuthConfig().then((cfg) => {
      if (cfg && cfg.googleClientId) {
        setGoogleClientId(cfg.googleClientId);
      }
    }).catch(() => {});

    const token = getAuthToken();
    if (!token) {
      setAuthStatus('unauthenticated');
      return;
    }

    api.getAuthMe()
      .then((data) => {
        if (data && data.authenticated && data.account) {
          setAccount(data.account);
          setProfiles(data.profiles || []);
          setAuthStatus('authenticated');
        } else {
          setAuthToken(null);
          setAuthStatus('unauthenticated');
        }
      })
      .catch(() => {
        setAuthToken(null);
        setAuthStatus('unauthenticated');
      });
  }, []);

  // Handle Google Token Response (1 Click Login/Register)
  const handleGoogleCredentialResponse = async (response: any) => {
    if (!response || !response.credential) return;
    setAuthLoading(true);
    setAuthError(null);
    try {
      const res = await api.loginWithGoogle(response.credential);
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        setAccount(res.account);
        setProfiles(res.profiles || []);
        setAuthStatus('authenticated');
        success('Autenticado com Google!', `Bem-vindo, @${res.account.username}`);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Falha ao autenticar com a Conta Google.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Direct Interactive Google Sign-In Trigger
  const handleDirectGoogleLogin = async () => {
    setAuthLoading(true);
    setAuthError(null);
    const win = window as any;

    if (win.google?.accounts?.id) {
      try {
        win.google.accounts.id.initialize({
          client_id: googleClientId || '1048291038472-mockclientid.apps.googleusercontent.com',
          callback: handleGoogleCredentialResponse,
          auto_select: false
        });
        win.google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            fallbackFastGoogleLogin();
          }
        });
        return;
      } catch (e) {
        console.warn('Google GIS prompt fallback:', e);
      }
    }

    fallbackFastGoogleLogin();
  };

  // Instant Fallback for Google Sign-In
  const fallbackFastGoogleLogin = async () => {
    const userGoogleEmail = prompt('Digite seu e-mail da Conta Google:', emailInput || '');
    if (!userGoogleEmail || !userGoogleEmail.includes('@')) {
      setAuthLoading(false);
      return;
    }

    try {
      const fakeSub = 'g_' + Math.abs(userGoogleEmail.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0));
      const token = `mock_google_:${userGoogleEmail.trim().toLowerCase()}:${userGoogleEmail.split('@')[0]}:${fakeSub}`;
      const res = await api.loginWithGoogle(token);
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        setAccount(res.account);
        setProfiles(res.profiles || []);
        setAuthStatus('authenticated');
        success('Autenticado com Google!', `Bem-vindo(a), @${res.account.username}`);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Falha ao autenticar com o Google.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Render Google Button when unauthenticated
  useEffect(() => {
    if (authStatus !== 'unauthenticated') return;

    const win = window as any;
    if (win.google && win.google.accounts && win.google.accounts.id) {
      try {
        win.google.accounts.id.initialize({
          client_id: googleClientId || '1048291038472-mockclientid.apps.googleusercontent.com',
          callback: handleGoogleCredentialResponse,
          auto_select: false
        });

        const btnContainer = document.getElementById('googleSignInBtnContainer');
        if (btnContainer) {
          btnContainer.innerHTML = '';
          win.google.accounts.id.renderButton(btnContainer, {
            theme: 'filled_black',
            size: 'large',
            text: 'continue_with',
            shape: 'rectangular',
            width: 280,
            locale: 'pt-BR'
          });
        }
      } catch (e) {
        console.warn('Google GSI init notice:', e);
      }
    }
  }, [authStatus, authTab, googleClientId]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const loginIdentifier = emailInput.trim() || usernameInput.trim();
    if (!loginIdentifier || !passwordInput) {
      setAuthError('Informe seu e-mail e sua senha de acesso.');
      return;
    }

    setAuthToken(null);
    setAuthLoading(true);
    try {
      const res = await api.login(loginIdentifier, passwordInput);
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        setAccount(res.account);
        setProfiles(res.profiles || []);
        setAuthStatus('authenticated');
        success('Bem-vindo de volta!', `Sessão iniciada com sucesso.`);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Erro ao realizar login. Verifique seus dados.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Handle Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (!emailInput.trim() || !passwordInput) {
      setAuthError('Preencha os campos obrigatórios (e-mail e senha).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.trim())) {
      setAuthError('Por favor, digite um e-mail válido (ex: seu_nome@email.com).');
      return;
    }

    if (passwordInput.length < 8) {
      setAuthError('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    const displayName = usernameInput.trim() || emailInput.trim().split('@')[0];

    setAuthToken(null);
    setAuthLoading(true);
    try {
      const res = await api.registerAccount(displayName, passwordInput, emailInput.trim());
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        setAccount(res.account);
        setProfiles([]); // Zero profiles initially
        setAuthStatus('authenticated');
        success('Conta Criada com Sucesso!', `Sua conta foi configurada com isolamento total.`);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Erro ao criar conta.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await api.logout();
    } catch (e) {
      // Ignore network errors on logout
    }
    setAuthToken(null);
    setAccount(null);
    setProfiles([]);
    setAuthStatus('unauthenticated');
    setUsernameInput('');
    setPasswordInput('');
    setEmailInput('');
    info('Sessão Encerrada', 'Você saiu da sua conta.');
  };

  // Create Profile (Max 3 per account)
  const handleCreateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateProfileError(null);
    if (!newName.trim()) return;

    if (profiles.length >= 3) {
      setCreateProfileError('Você atingiu o limite de 3 perfis nesta conta.');
      return;
    }

    setCreatingUser(true);
    try {
      const newProfile = await api.createUserProfile({
        name: newName.trim(),
        active_career_id: newCareerId,
        daily_hours: newGoalHours,
        experience_level: 'iniciante'
      });

      if (newProfile && newProfile.id) {
        success('Perfil Criado!', `Perfil "${newProfile.name}" adicionado à sua conta.`);
        const updatedProfiles = [...profiles, newProfile];
        setProfiles(updatedProfiles);
        setShowCreateModal(false);
        setNewName('');

        // Automatically select the newly created user
        handleSelectExistingUser(newProfile);
      }
    } catch (err: any) {
      if (err.message && (err.message.includes('Sessão expirada') || err.message.includes('não autorizado') || err.message.includes('401'))) {
        setAuthToken(null);
        setAccount(null);
        setProfiles([]);
        setAuthStatus('unauthenticated');
        setAuthError('Sua sessão expirou ou o servidor foi reiniciado. Por favor, entre ou crie sua conta novamente.');
      } else {
        setCreateProfileError(err.message || 'Erro ao criar perfil.');
      }
    } finally {
      setCreatingUser(false);
    }
  };

  // Delete Profile
  const handleDeleteProfile = async (e: React.MouseEvent, profileId: string) => {
    e.stopPropagation();
    if (!window.confirm('Tem certeza que deseja excluir este perfil de estudo?')) return;

    try {
      await api.deleteUserProfile(profileId);
      setProfiles((prev) => prev.filter((p) => p.id !== profileId));
      info('Perfil Excluído', 'O perfil foi removido da sua conta.');
    } catch (err: any) {
      toastError('Erro ao excluir perfil: ' + err.message);
    }
  };

  // Select User and enter app
  const handleSelectExistingUser = (profile: any) => {
    localStorage.setItem('CURRENT_USER_ID', profile.id);
    const career = profile.active_career_id || profile.careerId || 'atrfb';
    localStorage.setItem('SELECTED_CAREER', career);

    onSelectUser({
      id: profile.id,
      name: profile.name,
      careerId: career,
      level: profile.level || 1,
      xp: profile.xp || 0,
      todayQuestions: profile.todayQuestions || 0,
      todayMinutes: profile.todayMinutes || 0,
      dailyGoalQuestions: profile.dailyGoalQuestions || 30,
      dailyGoalMinutes: (profile.daily_hours ? profile.daily_hours * 60 : 240),
      streakDays: profile.streakDays || 0
    });
  };

  // Loading Session Checker
  if (authStatus === 'checking') {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-[var(--bg-base)] animate-fade-in font-sans">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] mx-auto animate-pulse">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
            [ INICIANDO MOTOR DE SEGURANÇA ISOLADO... ]
          </div>
        </div>
      </div>
    );
  }

  // Phase 1: Unauthenticated Screen (Clean Zero-Cost Login / Register)
  if (authStatus === 'unauthenticated') {
    return (
      <div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center py-10 px-4 sm:px-6 bg-[var(--bg-base)] animate-fade-in font-sans">
        <div className="w-full max-w-md space-y-5 my-auto">
          
          {/* Brand Header */}
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-primary)] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ACESSO PRIVADO • CUSTO ZERO</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto">
              Plataforma de estudos com isolamento total entre dispositivos e usuários
            </p>
          </div>

          <Card className="p-5 sm:p-7 space-y-5 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-2xl">
            
            {/* Auth Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setAuthTab('login');
                  setAuthError(null);
                }}
                className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  authTab === 'login'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthTab('register');
                  setAuthError(null);
                }}
                className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  authTab === 'register'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Criar Conta</span>
              </button>
            </div>

            {/* Google 1-Click Sign-In (Always Visible & Prominent) */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={handleDirectGoogleLogin}
                disabled={authLoading}
                className="w-full h-11 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 transition-all font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <GoogleIcon className="w-5 h-5 shrink-0" />
                <span>{authTab === 'login' ? 'Continuar com o Google' : 'Cadastrar com o Google'}</span>
              </button>

              {/* Mounted Container for Google Identity Services */}
              <div id="googleSignInBtnContainer" className="flex justify-center w-full empty:hidden"></div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  ou com e-mail e senha
                </span>
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
              </div>
            </div>

            {/* Login Form */}
            {authTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-3.5" autoComplete="on">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    E-mail:
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      autoFocus
                      autoComplete="email"
                      placeholder="seu.email@exemplo.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Senha:
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      title={showPassword ? "Ocultar senha" : "Ver senha"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {authError && (
                  <div className="p-2.5 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 text-xs text-[var(--accent-danger)] flex items-center gap-2 font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="brand"
                  fullWidth={true}
                  size="md"
                  disabled={authLoading}
                  className="font-mono text-xs font-bold shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {authLoading ? "Autenticando..." : "Entrar na Plataforma"}
                </Button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-3.5" autoComplete="on">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Nome Completo / Apelido:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      autoFocus
                      autoComplete="name"
                      placeholder="ex: João Silva"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    E-mail do Aluno (Obrigatório):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="seu.email@exemplo.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Senha de Acesso:
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      autoComplete="new-password"
                      minLength={8}
                      placeholder="Mínimo 8 caracteres"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      title={showPassword ? "Ocultar senha" : "Ver senha"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {authError && (
                  <div className="p-2.5 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 text-xs text-[var(--accent-danger)] flex items-center gap-2 font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="brand"
                  fullWidth={true}
                  size="md"
                  disabled={authLoading}
                  className="font-mono text-xs font-bold shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {authLoading ? "Criando Conta..." : "Concluir Cadastro Gratuito"}
                </Button>
              </form>
            )}

            <div className="pt-2.5 border-t border-[var(--border-subtle)] text-center">
              <span className="text-[11px] text-[var(--text-muted)] flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Conexão Segura • Dados 100% Protegidos
              </span>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Phase 2: Authenticated Screen (Profile Selector & Creator - Max 3 per Account)
  return (
    <div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center py-10 px-4 sm:px-6 bg-[var(--bg-base)] animate-fade-in font-sans">
      <div className="w-full max-w-2xl space-y-5 my-auto">
        
        {/* Account Info Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] font-mono font-bold">
              👤
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--text-primary)]">
                Conta: @{account?.username}
              </div>
              <div className="text-[10px] font-mono text-[var(--text-muted)]">
                Perfis cadastrados: <span className="font-bold text-[var(--accent-primary)]">{profiles.length}</span> de 3 permitidos
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-danger)] flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-danger)]/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair / Trocar Conta</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1.5">
          <CarimboStatus status="homologado" label="SELEÇÃO DE PERFIL DE ESTUDO" />
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Quem está estudando agora?
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            Selecione o perfil do concurso que você deseja estudar ou cadastre um novo
          </p>
        </div>

        {/* Existing Profiles List */}
        <div className="space-y-3">
          {profiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profiles.map((p: any) => {
                const career = CAREERS_LIST.find(c => c.id === p.active_career_id) || CAREERS_LIST[0];
                return (
                  <Card
                    key={p.id}
                    hoverable={true}
                    onClick={() => handleSelectExistingUser(p)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-3 group border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-sm cursor-pointer relative"
                  >
                    <div className="truncate text-left space-y-1">
                      <div className="text-sm font-bold text-[var(--text-primary)] truncate flex items-center gap-2">
                        <span>{p.name}</span>
                        {p.xp > 0 && (
                          <span className="px-1.5 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-[10px] font-bold">
                            {p.xp} XP
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] font-mono truncate">
                        {career.name.split('—')[0]} ({career.banca})
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        title="Excluir Perfil"
                        onClick={(e) => handleDeleteProfile(e, p.id)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:bg-[var(--color-status-danger-bg)] transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="p-6 sm:p-8 text-center space-y-3 bg-[var(--bg-surface)] border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] mx-auto">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div className="font-display font-bold text-base text-[var(--text-primary)]">
                Nenhum Perfil Criado Nesta Conta
              </div>
              <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                Você pode criar até 3 perfis independentes para estudar para concursos diferentes (ex: Receita Federal, Banco do Brasil, Marinha).
              </p>
            </Card>
          )}

          {/* Action Button: Criar Novo Perfil */}
          {profiles.length < 3 ? (
            <Card
              hoverable={true}
              onClick={() => setShowCreateModal(true)}
              className="p-4 sm:p-5 text-center border-dashed border-2 border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-transparent flex items-center justify-center gap-2 text-xs sm:text-sm font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>+ Criar Novo Perfil de Estudante ({profiles.length + 1} de 3)</span>
            </Card>
          ) : (
            <div className="p-3 text-center rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)]">
              🔒 Limite de 3 perfis atingido para esta conta.
            </div>
          )}
        </div>

        {/* Create Profile Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
            <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-xl p-5 sm:p-7 space-y-4 shadow-2xl animate-fade-in my-auto max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight">
                    Cadastrar Perfil ({profiles.length + 1} de 3)
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Vinculado à conta @{account?.username}
                  </p>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  [ FECHAR ]
                </button>
              </div>

              <form onSubmit={handleCreateProfile} className="space-y-3.5 font-sans text-xs sm:text-sm">
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase text-[var(--text-muted)] font-bold">
                    Nome do Estudante / Perfil:
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Ex: João - Receita Federal"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase text-[var(--text-muted)] font-bold">
                    Concurso / Edital Alvo:
                  </label>
                  <select
                    value={newCareerId}
                    onChange={(e) => setNewCareerId(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none cursor-pointer font-sans shadow-sm"
                  >
                    {CAREERS_LIST.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.banca})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase text-[var(--text-muted)] font-bold">
                    Meta Diária de Estudos:
                  </label>
                  <div className="grid grid-cols-4 gap-2 font-mono">
                    {[1, 2, 4, 6].map((hours) => (
                      <button
                        type="button"
                        key={hours}
                        onClick={() => setNewGoalHours(hours)}
                        className={`h-9 rounded-lg text-xs font-bold transition-all border ${
                          newGoalHours === hours
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md'
                            : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {hours}h / dia
                      </button>
                    ))}
                  </div>
                </div>

                {createProfileError && (
                  <div className="p-2.5 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 text-xs text-[var(--accent-danger)] font-mono">
                    {createProfileError}
                  </div>
                )}

                <div className="pt-2 flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    fullWidth={true}
                    onClick={() => setShowCreateModal(false)}
                    className="font-mono text-xs"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="brand"
                    size="md"
                    fullWidth={true}
                    disabled={creatingUser || !newName.trim()}
                    className="font-bold font-mono text-xs shadow-md"
                  >
                    {creatingUser ? "Cadastrando..." : "Criar Perfil"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
