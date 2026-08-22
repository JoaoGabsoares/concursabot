import React, { useState, useEffect } from 'react';
import { CAREERS_LIST, getCareerById } from '../../utils/careers';
import { getSubjectsForCareer, getConcurseiroRank } from '../../utils/gamification';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { api, setAuthToken } from '../../api/client';
import { UserProfile, AccountInfo } from '../../types';
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Scale, 
  Layers, 
  BookOpen, 
  ChevronRight, 
  LogIn, 
  UserPlus, 
  Flame, 
  Trophy, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  Sun, 
  Moon,
  Lock,
  User,
  Mail,
  AlertCircle,
  Eye,
  EyeOff,
  BrainCircuit,
  Compass
} from 'lucide-react';

interface PublicDashboardPageProps {
  onSelectUser: (user: UserProfile) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

interface DemoPegadinha {
  id: string;
  careerId: string;
  banca: string;
  source: string;
  text: string;
  hasTrap: boolean;
  trapExplanation: string;
  correctExplanation: string;
}

const DEMO_PEGADINHAS: DemoPegadinha[] = [
  {
    id: 'ctn_art3',
    careerId: 'atrfb',
    banca: 'FGV',
    source: 'Código Tributário Nacional — Art. 3º',
    text: 'Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente discricionária.',
    hasTrap: true,
    trapExplanation: 'PEGADINHA CLÁSSICA FGV! O artigo 3º do CTN estabelece expressamente que a cobrança é mediante atividade administrativa PLENAMENTE VINCULADA, e não discricionária.',
    correctExplanation: 'A atividade de lançamento e cobrança tributária é vinculada e obrigatória sob pena de responsabilidade funcional.'
  },
  {
    id: 'cf_art5_xiii',
    careerId: 'bb_ti',
    banca: 'Fundação Cesgranrio',
    source: 'Constituição Federal — Art. 5º, XIII',
    text: 'É livre o exercício de qualquer trabalho, ofício ou profissão, sendo vedada em qualquer hipótese a imposição de qualificações profissionais por lei ordinária.',
    hasTrap: true,
    trapExplanation: 'PEGADINHA CESGRANRIO! A CF/88 diz: "...atendidas as qualificações profissionais que a lei estabelecer". Trata-se de norma de eficácia contida que admite restrições legais.',
    correctExplanation: 'O legislador ordinário pode estabelecer exigências como diplomas e registros para determinadas profissões.'
  },
  {
    id: 'lei13303_art29',
    careerId: 'transpetro_adm',
    banca: 'Fundação Cesgranrio',
    source: 'Lei das Estatais — Lei 13.303/16',
    text: 'É dispensável a realização de licitação por empresas públicas e sociedades de economia mista para compras e serviços de valor até R$ 100.000,00, conforme atualização monetária periódica.',
    hasTrap: false,
    trapExplanation: 'Não há pegadinha neste trecho!',
    correctExplanation: 'CORRETO! O art. 29 da Lei 13.303/16 prevê hipóteses de dispensa de licitação em razão do valor para empresas estatais.'
  }
];

export const PublicDashboardPage: React.FC<PublicDashboardPageProps> = ({
  onSelectUser,
  isDark,
  onToggleTheme
}) => {
  const { success, error: toastError, info } = useToast();

  // Selected Career for Live Showcase
  const [selectedCareerId, setSelectedCareerId] = useState<string>('atrfb');
  const activeCareer = getCareerById(selectedCareerId);
  const careerSubjects = getSubjectsForCareer(selectedCareerId);

  // Demo Pegadinha State
  const [activeDemoIdx, setActiveDemoIdx] = useState<number>(0);
  const [timerLeft, setTimerLeft] = useState<number>(15);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [demoAnswered, setDemoAnswered] = useState<boolean>(false);
  const [demoResult, setDemoResult] = useState<{ isCorrect: boolean; message: string } | null>(null);

  // Auth Modal State
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [googleClientId, setGoogleClientId] = useState<string>('');

  // 1. Timer for interactive Pegadinha Challenge
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerLeft === 0 && timerRunning) {
      setTimerRunning(false);
      setDemoAnswered(true);
      setDemoResult({
        isCorrect: false,
        message: 'TEMPO ESGOTADO! Em prova da banca, hesitar mais de 15 segundos na letra de lei consome o tempo da redação.'
      });
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerLeft]);

  // 2. Load Google Auth Client ID
  useEffect(() => {
    api.getAuthConfig().then((cfg) => {
      if (cfg && cfg.googleClientId) {
        setGoogleClientId(cfg.googleClientId);
      }
    }).catch(() => {});
  }, []);

  // 3. Render Google Sign-in button when modal opens
  useEffect(() => {
    if (!showAuthModal) return;

    const timer = setTimeout(() => {
      const btnContainer = document.getElementById('googleModalBtnContainer');
      if (btnContainer && (window as any).google?.accounts?.id && googleClientId) {
        btnContainer.innerHTML = '';
        (window as any).google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleGoogleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true
        });
        (window as any).google.accounts.id.renderButton(btnContainer, {
          theme: isDark ? 'filled_black' : 'outline',
          size: 'large',
          text: authTab === 'login' ? 'signin_with' : 'signup_with',
          shape: 'rectangular',
          width: '100%',
          logo_alignment: 'left'
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [showAuthModal, authTab, googleClientId, isDark]);

  // Start Pegadinha Test
  const handleStartPegadinha = (index: number) => {
    setActiveDemoIdx(index);
    setTimerLeft(15);
    setTimerRunning(true);
    setDemoAnswered(false);
    setDemoResult(null);
  };

  // Submit Pegadinha Answer
  const handleAnswerPegadinha = (userThinksHasTrap: boolean) => {
    if (demoAnswered || !timerRunning) return;
    setTimerRunning(false);
    setDemoAnswered(true);

    const currentItem = DEMO_PEGADINHAS[activeDemoIdx];
    const isCorrect = userThinksHasTrap === currentItem.hasTrap;

    if (isCorrect) {
      setDemoResult({
        isCorrect: true,
        message: currentItem.hasTrap ? currentItem.trapExplanation : currentItem.correctExplanation
      });
      success('Reflexo Jurídico de Elite! +10 XP Demonstrativo');
    } else {
      setDemoResult({
        isCorrect: false,
        message: currentItem.hasTrap ? currentItem.trapExplanation : 'O texto legal está perfeitamente correto e de acordo com a norma vigente.'
      });
      toastError('Cuidado com a Pegadinha da Banca!');
    }
  };

  // Auth: Google Login
  const handleGoogleCredentialResponse = async (response: any) => {
    if (!response || !response.credential) return;
    setAuthLoading(true);
    setAuthError(null);
    try {
      const res = await api.loginWithGoogle(response.credential);
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        if (res.profiles && res.profiles.length > 0) {
          handleEnterProfile(res.profiles[0]);
        } else {
          // Auto-create default profile with selected career
          const newProf = await api.createUserProfile({
            name: res.account.name || 'Aluno Gabarito',
            careerId: selectedCareerId,
            dailyHours: 4
          });
          handleEnterProfile(newProf);
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Falha ao autenticar com Google');
    } finally {
      setAuthLoading(false);
    }
  };

  // Auth: Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await api.login(usernameInput.trim(), passwordInput);
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        if (res.profiles && res.profiles.length > 0) {
          handleEnterProfile(res.profiles[0]);
        } else {
          const newProf = await api.createUserProfile({
            name: res.account.name || usernameInput.trim(),
            careerId: selectedCareerId,
            dailyHours: 4
          });
          handleEnterProfile(newProf);
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Erro ao realizar login');
    } finally {
      setAuthLoading(false);
    }
  };

  // Auth: Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    if (passwordInput.length < 8) {
      setAuthError('A senha de acesso deve possuir no mínimo 8 caracteres.');
      setAuthLoading(false);
      return;
    }

    try {
      const res = await api.register(usernameInput.trim(), passwordInput, emailInput.trim());
      if (res.success && res.token && res.account) {
        setAuthToken(res.token);
        const newProf = await api.createUserProfile({
          name: res.account.name || usernameInput.trim(),
          careerId: selectedCareerId,
          dailyHours: 4
        });
        handleEnterProfile(newProf);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Erro ao criar conta');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleEnterProfile = (profile: any) => {
    localStorage.setItem('CURRENT_USER_ID', profile.id);
    const career = profile.active_career_id || profile.careerId || selectedCareerId;
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

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-primary)] font-sans flex flex-col justify-between selection:bg-[var(--accent-primary)] selection:text-white">
      
      {/* ============================================================ */}
      {/* 1. TOP NAVIGATION HEADER                                     */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Platform Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] text-white flex items-center justify-center font-display font-black text-xl shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[var(--text-primary)]">
                  Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-[10px] font-bold">
                  SISTEMA ONLINE
                </span>
              </div>
              <p className="text-[11px] font-mono text-[var(--text-muted)] hidden md:block">
                Motor Heurístico de Provas & Inteligência de Bancas
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={isDark ? "Modo Claro" : "Modo Escuro"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setAuthTab('login');
                setAuthError(null);
                setShowAuthModal(true);
              }}
              className="font-mono text-xs font-bold"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Entrar</span>
            </Button>

            <Button
              variant="brand"
              size="sm"
              onClick={() => {
                setAuthTab('register');
                setAuthError(null);
                setShowAuthModal(true);
              }}
              className="font-mono text-xs font-bold shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Começar Grátis</span>
            </Button>
          </div>

        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. HERO INTERATIVO: SELETOR DE CARREIRAS AO VIVO             */}
      {/* ============================================================ */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 space-y-12">
        
        {/* Hero Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-primary)] font-bold">
            <BrainCircuit className="w-4 h-4" />
            <span>METODOLOGIA ATIVA • DNA DE PROVA FGV, CESGRANRIO & CEBRASPE</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.15]">
            A Preparação de Elite com <br className="hidden sm:inline" />
            <span className="text-[var(--accent-primary)]">Inteligência Estratégica de Bancas</span>
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Simulados cronometrados com pesos reais do edital, caça-pegadinhas da lei seca em 15s, correção dissertativa por critérios e caderno de erros com repetição espaçada SM-2.
          </p>
        </div>

        {/* Dynamic Career Selector Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                1. Selecione o Certame Desejado para Simulação em Tempo Real:
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline">
              9 Editais Oficiais Mapeados
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CAREERS_LIST.map((career) => {
              const isSelected = career.id === selectedCareerId;
              return (
                <button
                  key={career.id}
                  type="button"
                  onClick={() => setSelectedCareerId(career.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold shrink-0 transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md scale-[1.02]'
                      : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>{career.name.split('—')[0].trim()}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'}`}>
                    {career.banca.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Career Radar & Edital Breakdown Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card A: Raio-X da Carreira Selecionada */}
          <Card className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[var(--bg-surface)] border-l-4 border-l-[var(--accent-primary)] shadow-xl">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <CarimboStatus status="homologado" label={`BANCA ${activeCareer.banca.toUpperCase()}`} />
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                    EDITAL VERTICALIZADO
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-[var(--accent-primary)] font-bold">
                  <span>RECOMPENSA: +50 XP/SIMULADO</span>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                  {activeCareer.name}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {activeCareer.description}
                </p>
              </div>

              {/* Tags & Attributes */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeCareer.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] font-semibold">
                    🏷️ {tag}
                  </span>
                ))}
              </div>

              {/* Weight Breakdown of Subjects */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex justify-between">
                  <span>Matérias de Maior Peso no Certame:</span>
                  <span className="text-[var(--accent-primary)]">Distribuição Oficial</span>
                </div>

                <div className="space-y-2">
                  {careerSubjects.slice(0, 4).map((subj, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-primary)]">{subj.name}</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--accent-primary)] font-bold border border-[var(--border-subtle)]">
                        Peso: {subj.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Ambiente calibrado para os padrões da <strong>{activeCareer.banca}</strong>
              </span>
              <Button
                variant="brand"
                size="md"
                onClick={() => {
                  setAuthTab('register');
                  setShowAuthModal(true);
                }}
                className="w-full sm:w-auto font-mono text-xs font-bold shadow-md"
              >
                <span>Acessar Este Concurso</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Card B: Laboratório Caça-Pegadinhas da Lei ao Vivo (15s) */}
          <Card className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[var(--bg-surface)] border-t-4 border-t-amber-500 shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Desafio Caça-Pegadinhas (15s)
                  </span>
                </div>
                <div className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 ${timerRunning ? 'bg-amber-500 text-white animate-pulse' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'}`}>
                  <Timer className="w-3.5 h-3.5" />
                  <span>{timerLeft}s</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Teste seu Reflexo Jurídico de Prova
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Treine a identificação instantânea de armadilhas literais da lei seca.
                </p>
              </div>

              {/* Legal Text Snippet */}
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-[var(--accent-primary)] font-bold">
                  <span>{DEMO_PEGADINHAS[activeDemoIdx].source}</span>
                  <span className="text-[var(--text-muted)]">{DEMO_PEGADINHAS[activeDemoIdx].banca}</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-serif italic">
                  "{DEMO_PEGADINHAS[activeDemoIdx].text}"
                </p>
              </div>

              {/* Action Buttons */}
              {!timerRunning && !demoAnswered ? (
                <Button
                  variant="brand"
                  fullWidth={true}
                  size="md"
                  onClick={() => handleStartPegadinha(activeDemoIdx)}
                  className="font-mono text-xs font-bold shadow-md mt-2"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Iniciar Desafio de 15 Segundos</span>
                </Button>
              ) : timerRunning ? (
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <Button
                    variant="danger"
                    size="md"
                    onClick={() => handleAnswerPegadinha(true)}
                    className="font-mono text-xs font-bold"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>TEM PEGADINHA</span>
                  </Button>
                  <Button
                    variant="brand"
                    size="md"
                    onClick={() => handleAnswerPegadinha(false)}
                    className="font-mono text-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>TEXTO CORRETO</span>
                  </Button>
                </div>
              ) : null}

              {/* Feedback Alert */}
              {demoResult && (
                <div className={`p-4 rounded-xl border text-xs font-mono space-y-1.5 animate-fade-in ${demoResult.isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' : 'bg-rose-500/10 border-rose-500/30 text-rose-500'}`}>
                  <div className="font-bold flex items-center gap-1.5">
                    {demoResult.isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>{demoResult.isCorrect ? "RESPOSTA CORRETA!" : "RESPOSTA INCORRETA!"}</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-primary)] leading-relaxed font-sans">
                    {demoResult.message}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleStartPegadinha((activeDemoIdx + 1) % DEMO_PEGADINHAS.length)}
                    className="text-[11px] font-bold underline text-[var(--accent-primary)] hover:opacity-80 pt-1 cursor-pointer"
                  >
                    Próxima Questão de Teste →
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>MÓDULO LEI SECA ATIVA</span>
              <span className="font-bold text-amber-400">+10 XP por acerto</span>
            </div>
          </Card>

        </div>

        {/* ============================================================ */}
        {/* 3. OS 4 PILARES DE ALTA PERFORMANCE DO GABARITO.AI           */}
        {/* ============================================================ */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-1.5">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
              Metodologia de Alta Retenção & Heurística de Banca
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Projetado para eliminar ruídos e direcionar 100% do seu esforço para o que realmente pontua na sua prova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pilar 1 */}
            <Card className="p-5 space-y-3 bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                Simulados com DNA de Banca
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A FGV exige casos práticos de 5 linhas; a Cesgranrio exige literalidade. Nossos geradores adaptam a semântica para cada certame.
              </p>
            </Card>

            {/* Pilar 2 */}
            <Card className="p-5 space-y-3 bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                Caça-Pegadinhas da Lei
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Treino de reflexo rápido em 15s para memorizar os artigos de ouro e não cair em pegadinhas de prazos, exceções e vedações.
              </p>
            </Card>

            {/* Pilar 3 */}
            <Card className="p-5 space-y-3 bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                Caderno de Erros SM-2
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Todas as questões erradas são indexadas por vulnerabilidade e reaparecem em ciclos de repetição espaçada até a superação (+15 XP).
              </p>
            </Card>

            {/* Pilar 4 */}
            <Card className="p-5 space-y-3 bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-500 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                Sala de Estudos & Cadência
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Leitura guiada em blocos 60/30, doutrina estruturada, marca-páginas inteligente e acompanhamento do ritmo de leitura em págs/hora.
              </p>
            </Card>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. CALL TO ACTION BANNER                                     */}
        {/* ============================================================ */}
        <Card className="p-8 sm:p-10 bg-gradient-to-r from-blue-900/30 via-[var(--bg-surface)] to-indigo-900/30 border border-[var(--accent-primary)]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-xs font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>ACESSO COMPLETO • CUSTO ZERO</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
              Pronto para elevar seu rendimento nos simulados?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Crie seu perfil em segundos ou entre com sua conta Google para salvar seu histórico, acompanhar o ranking e pontuar nas missões diárias.
            </p>
          </div>

          <Button
            variant="brand"
            size="lg"
            onClick={() => {
              setAuthTab('register');
              setShowAuthModal(true);
            }}
            className="shrink-0 font-mono text-sm font-bold shadow-xl px-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Criar Minha Conta Grátis</span>
          </Button>
        </Card>

      </main>

      {/* ============================================================ */}
      {/* 5. FOOTER INSTITUCIONAL                                      */}
      {/* ============================================================ */}
      <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 sm:px-8 py-6 mt-12 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-primary)]">Gabarito.AI</span>
            <span>• Plataforma de Alta Performance para Concursos</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Isolamento Zero-Trust</span>
            <span>•</span>
            <span>Bancas FGV, Cesgranrio & Cebraspe</span>
            <span>•</span>
            <span>Versão 4.5</span>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 6. MODAL DE AUTENTICAÇÃO INTEGRADO (Google & Credenciais)    */}
      {/* ============================================================ */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5 relative">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)] transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-primary)] font-bold">
                <ShieldCheck className="w-3 h-3" />
                <span>ACESSO SEGURO • GABARITO.AI</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                {authTab === 'login' ? 'Entrar na Plataforma' : 'Criar Conta de Estudante'}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {authTab === 'login' ? 'Acesse seus simulados, progresso e cadernos' : 'Cadastro gratuito com acesso a todos os editais'}
              </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setAuthTab('login');
                  setAuthError(null);
                }}
                className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  authTab === 'login'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm'
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
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Criar Conta</span>
              </button>
            </div>

            {/* Google 1-Click Sign-In Container */}
            <div className="space-y-3 pt-1">
              <div id="googleModalBtnContainer" className="flex justify-center w-full min-h-[44px]"></div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  ou com usuário e senha
                </span>
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
              </div>
            </div>

            {/* Form */}
            {authTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-3.5" autoComplete="off">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Nome de Usuário ou Email:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      autoFocus
                      autoComplete="off"
                      placeholder="ex: joao_concursos"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
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
                      required
                      autoComplete="off"
                      placeholder="••••••••"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
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
                  className="font-mono text-xs font-bold shadow-md mt-2"
                >
                  {authLoading ? "Autenticando..." : "Entrar na Plataforma"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3.5" autoComplete="off">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Nome de Usuário:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      autoFocus
                      autoComplete="off"
                      placeholder="ex: João Soares"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    E-mail (Obrigatório):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      autoComplete="off"
                      placeholder="seu_email@exemplo.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
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
                      required
                      autoComplete="new-password"
                      minLength={8}
                      placeholder="Mínimo 8 caracteres"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
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
                  className="font-mono text-xs font-bold shadow-md mt-2"
                >
                  {authLoading ? "Criando Perfil..." : "Concluir Cadastro Gratuito"}
                </Button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
