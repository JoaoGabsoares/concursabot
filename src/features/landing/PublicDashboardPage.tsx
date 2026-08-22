import React, { useState, useEffect } from 'react';
import { CAREERS_LIST, getCareerById } from '../../utils/careers';
import { getSubjectsForCareer, getConcurseiroRank, CONCURSEIRO_RANKS } from '../../utils/gamification';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { api, setAuthToken } from '../../api/client';
import { UserProfile } from '../../types';
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
  Compass,
  TrendingUp,
  Award,
  Check,
  HelpCircle,
  ChevronDown,
  ArrowUpRight,
  Activity,
  DollarSign,
  Briefcase
} from 'lucide-react';

interface PublicDashboardPageProps {
  onSelectUser: (user: UserProfile) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

// Extra Career Metadata for Rich Showcase
const CAREER_METRICS: Record<string, { salary: string; vacancies: string; competition: string; badgeColor: string }> = {
  atrfb: { salary: 'R$ 11.684,39/mês', vacancies: '469 Vagas', competition: '184 cand/vaga', badgeColor: 'from-blue-600 to-cyan-500' },
  afrfb: { salary: 'R$ 21.029,09/mês', vacancies: '230 Vagas', competition: '240 cand/vaga', badgeColor: 'from-amber-500 to-yellow-400' },
  bb_comercial: { salary: 'R$ 5.430,00/mês', vacancies: '3.000 Vagas', competition: '380 cand/vaga', badgeColor: 'from-emerald-500 to-teal-400' },
  bb_ti: { salary: 'R$ 5.600,00/mês + PLR', vacancies: '1.500 Vagas', competition: '92 cand/vaga', badgeColor: 'from-cyan-500 to-blue-600' },
  transpetro_adm: { salary: 'R$ 5.540,25/mês', vacancies: 'Cadastro Reserva', competition: '140 cand/vaga', badgeColor: 'from-purple-500 to-pink-500' },
  transpetro_log: { salary: 'R$ 5.540,25/mês', vacancies: 'Quadro Terra', competition: '110 cand/vaga', badgeColor: 'from-indigo-500 to-blue-500' },
  ses_rj: { salary: 'R$ 4.890,00/mês', vacancies: 'Edital 2026', competition: '160 cand/vaga', badgeColor: 'from-teal-500 to-emerald-500' },
  marinha_rm2: { salary: 'R$ 4.300,00/mês', vacancies: 'Anual (RM2)', competition: '85 cand/vaga', badgeColor: 'from-blue-700 to-indigo-600' }
};

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

// Demo FGV Question for Lab 2
const DEMO_FGV_QUESTION = {
  career: 'Receita Federal — Analista-Tributário (ATRFB)',
  banca: 'FGV (Fundação Getulio Vargas)',
  enunciado: 'Tício, auditor-fiscal em fiscalização aduaneira no Porto de Santos, identifica mercadoria importada com documentação inidônea e declaração de valor flagrantemente subfaturado. Ao ser questionado pelo importador, Tício concede prazo discricionário de 60 dias sem previsão regulamentar para apresentação de novos documentos, abstendo-se de lavrar o auto de infração imediato. À luz dos princípios constitucionais tributários e das regras de lançamento do CTN, a conduta de Tício:',
  options: [
    { letter: 'A', text: 'É válida, pois o princípio da razoabilidade confere ao auditor a discricionariedade na escolha do momento da autuação.' },
    { letter: 'B', text: 'É ilícita, pois a atividade administrativa de lançamento é vinculada e obrigatória, sob pena de responsabilidade funcional (Art. 142, parágrafo único do CTN).' },
    { letter: 'C', text: 'Gera apenas nulidade relativa sanável por despacho fundamentado da chefia imediata.' },
    { letter: 'D', text: 'É facultada pelo regime de autolançamento tributário aduaneiro.' },
    { letter: 'E', text: 'Depende de prévia autorização judicial para configurar infração funcional.' }
  ],
  correct: 'B',
  explanation: 'A FGV explora frequentemente a distinção entre atos vinculados e discricionários em matéria fiscal. Conforme o Art. 142, parágrafo único do CTN, a atividade de lançamento tributário é rigorosamente vinculada e obrigatória, sob pena de responsabilidade funcional do agente público. O auditor não possui margem de discricionariedade para postergar a autuação aduaneira.'
};

export const PublicDashboardPage: React.FC<PublicDashboardPageProps> = ({
  onSelectUser,
  isDark,
  onToggleTheme
}) => {
  const { success, error: toastError, info } = useToast();

  // Selected Career for Live Showcase
  const [selectedCareerId, setSelectedCareerId] = useState<string>('atrfb');
  const activeCareer = getCareerById(selectedCareerId);
  const activeMetrics = CAREER_METRICS[selectedCareerId] || CAREER_METRICS.atrfb;
  const careerSubjects = getSubjectsForCareer(selectedCareerId);

  // Lab 1: Demo Pegadinha State
  const [activeDemoIdx, setActiveDemoIdx] = useState<number>(0);
  const [timerLeft, setTimerLeft] = useState<number>(15);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [demoAnswered, setDemoAnswered] = useState<boolean>(false);
  const [demoResult, setDemoResult] = useState<{ isCorrect: boolean; message: string } | null>(null);

  // Lab 2: Demo FGV Question State
  const [fgvSelectedOption, setFgvSelectedOption] = useState<string | null>(null);
  const [fgvSubmitted, setFgvSubmitted] = useState<boolean>(false);

  // Lab 3: Demo Matrix Aproveitamento State
  const [matrixFrom, setMatrixFrom] = useState<string>('bb_comercial');
  const [matrixTo, setMatrixTo] = useState<string>('transpetro_adm');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
  const handleGoogleRedirectLogin = () => {
    setAuthLoading(true);
    setAuthError(null);
    window.location.href = '/api/auth/google/redirect';
  };

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


  // Auth: Email & Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    const loginIdentifier = emailInput.trim() || usernameInput.trim();
    if (!loginIdentifier) {
      setAuthError('Por favor, informe seu e-mail.');
      setAuthLoading(false);
      return;
    }

    try {
      const res = await api.login(loginIdentifier, passwordInput);
      if (res && res.token) {
        api.setAuthToken(res.token);
        success('Login Realizado!', `Bem-vindo(a) de volta!`);
        if (res.profiles && res.profiles.length > 0) {
          handleEnterProfile(res.profiles[0]);
        } else {
          const newProf = await api.createUserProfile({
            name: res.account?.name || loginIdentifier.split('@')[0],
            careerId: selectedCareerId,
            daily_hours: 4
          });
          handleEnterProfile(newProf);
        }
      } else {
        setAuthError('Credenciais inválidas. Verifique seu e-mail e senha.');
      }
    } catch (err: any) {
      setAuthError(err.message || 'Erro ao realizar login. Verifique seu e-mail e senha.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Auth: Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);

    if (!emailInput.trim() || !emailInput.includes('@')) {
      setAuthError('Por favor, informe um endereço de e-mail válido.');
      setAuthLoading(false);
      return;
    }

    if (passwordInput.length < 8) {
      setAuthError('A senha de acesso deve possuir no mínimo 8 caracteres.');
      setAuthLoading(false);
      return;
    }

    const displayName = usernameInput.trim() || emailInput.trim().split('@')[0];

    try {
      const res = await api.register(displayName, passwordInput, emailInput.trim());
      if (res && res.token) {
        api.setAuthToken(res.token);
        success('Conta Criada com Sucesso!', `Sua conta foi configurada.`);
        const newProf = await api.createUserProfile({
          name: displayName,
          careerId: selectedCareerId,
          daily_hours: 4
        });
        handleEnterProfile(newProf);
      } else {
        setAuthError('Não foi possível criar a conta. Tente novamente.');
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

  // Matrix Affinity Calculation
  const getMatrixPercentage = () => {
    if (matrixFrom === matrixTo) return 100;
    if ((matrixFrom.includes('bb') && matrixTo.includes('transpetro')) || (matrixFrom.includes('transpetro') && matrixTo.includes('bb'))) return 68;
    if (matrixFrom.includes('atrfb') && matrixTo.includes('afrfb')) return 85;
    if ((matrixFrom.includes('atrfb') || matrixFrom.includes('afrfb')) && matrixTo.includes('transpetro')) return 45;
    return 52;
  };

  const ranksList = CONCURSEIRO_RANKS.map(r => ({
    level: r.level,
    title: r.title,
    xp: `${r.minXp.toLocaleString('pt-BR')} XP`
  }));

  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-primary)] font-sans flex flex-col justify-between selection:bg-[var(--accent-primary)] selection:text-white bg-grid-cyber">
      
      {/* ============================================================ */}
      {/* 1. TOP NAVIGATION HEADER                                     */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-xl px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Platform Status */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-blue-500/20">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl tracking-tight text-[var(--text-primary)]">
                  Gabarito<span className="text-cyan-400 font-mono font-normal">.AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  SISTEMA ATIVO
                </span>
              </div>
              <p className="text-[11px] font-mono text-[var(--text-muted)] hidden md:block">
                Inteligência Heurística & Metodologia Ativa de Bancas
              </p>
            </div>
          </div>

          {/* Navigation Anchors */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-[var(--text-secondary)]">
            <a href="#simulador" className="hover:text-cyan-400 transition-colors">Simulador</a>
            <a href="#laboratorios" className="hover:text-cyan-400 transition-colors">Laboratórios</a>
            <a href="#metodologia" className="hover:text-cyan-400 transition-colors">Metodologia</a>
            <a href="#comparativo" className="hover:text-cyan-400 transition-colors">Comparativo</a>
            <a href="#patentes" className="hover:text-cyan-400 transition-colors">Patentes</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-sm"
              title={isDark ? "Modo Claro" : "Modo Escuro"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
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
              className="font-mono text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Começar Grátis</span>
            </Button>
          </div>

        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. HERO INTERATIVO: SELETOR DE CARREIRAS AO VIVO             */}
      {/* ============================================================ */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-14 space-y-16">
        
        {/* Live Metrics Ticker Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-[var(--text-primary)] font-bold">24.850+</span> Questões Classificadas
          </div>
          <span className="text-[var(--border-subtle)] hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[var(--text-primary)] font-bold">1.420</span> Simulados Hoje
          </div>
          <span className="text-[var(--border-subtle)] hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            Bancas <strong className="text-cyan-400">FGV</strong>, <strong className="text-emerald-400">Cesgranrio</strong> & <strong className="text-amber-400">Cebraspe</strong>
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-bold glow-blue">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>METODOLOGIA ATIVA DE ALTO IMPACTO PARA CONCURSOS DE ELITE</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Acelere sua Aprovação com <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Inteligência Heurística de Provas
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Simulados calibrados com a malícia da sua banca examinadora, caça-pegadinhas da lei em 15s, correção dissertativa por critérios e caderno de erros com ciclo SM-2.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SECTION: SIMULADOR AO VIVO DE CARREIRAS (BENTO HERO)         */}
        {/* ============================================================ */}
        <section id="simulador" className="space-y-4 pt-4 scroll-mt-24">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                1. Selecione o Certame para Simulação em Tempo Real:
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold hidden sm:inline">
              9 Editais Disponíveis
            </span>
          </div>

          {/* Interactive Career Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {CAREERS_LIST.map((career) => {
              const isSelected = career.id === selectedCareerId;
              return (
                <button
                  key={career.id}
                  type="button"
                  onClick={() => setSelectedCareerId(career.id)}
                  className={`p-2.5 rounded-xl font-mono text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white border-cyan-400 shadow-lg shadow-blue-500/20 scale-[1.03]'
                      : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-cyan-500/40'
                  }`}
                >
                  <span className="truncate w-full">{career.name.split('—')[0].trim()}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${isSelected ? 'bg-white/20 text-white' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'}`}>
                    {career.banca.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Career Bento Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Card A: Raio-X & Salário da Carreira */}
            <Card className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[var(--bg-surface)] border-l-4 border-l-cyan-500 shadow-2xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <CarimboStatus status="homologado" label={`BANCA ${activeCareer.banca.toUpperCase()}`} />
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                      EDITAL VERTICALIZADO
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    💰 {activeMetrics.salary}
                  </span>
                </div>

                <div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--text-primary)]">
                    {activeCareer.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    {activeCareer.description}
                  </p>
                </div>

                {/* Key Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase">Vagas</div>
                    <div className="font-bold text-cyan-400 mt-0.5">{activeMetrics.vacancies}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase">Concorrência</div>
                    <div className="font-bold text-amber-400 mt-0.5">{activeMetrics.competition}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase">Simulados</div>
                    <div className="font-bold text-emerald-400 mt-0.5">Disponível</div>
                  </div>
                </div>

                {/* Subject Weight Distribution Bars */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex justify-between">
                    <span>Matérias de Maior Peso no Edital:</span>
                    <span className="text-cyan-400">Distribuição Oficial da Banca</span>
                  </div>

                  <div className="space-y-2">
                    {careerSubjects.slice(0, 4).map((subj, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[var(--text-primary)]">{subj.name}</span>
                        <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] text-cyan-400 font-bold border border-[var(--border-subtle)]">
                          Peso: {subj.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Simulador calibrado para os padrões da <strong>{activeCareer.banca}</strong>
                </span>
                <Button
                  variant="brand"
                  size="md"
                  onClick={() => {
                    setAuthTab('register');
                    setShowAuthModal(true);
                  }}
                  className="w-full sm:w-auto font-mono text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 px-5 py-2.5 whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Iniciar Treinamento Oficial</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Button>
              </div>
            </Card>

            {/* Card B: Demonstração de Questão com DNA FGV */}
            <Card className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-[var(--bg-surface)] border-t-4 border-t-purple-500 shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-purple-400" />
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      DNA da Banca FGV • Caso Prático
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono text-[10px] font-bold">
                    INÉDITA
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                  {DEMO_FGV_QUESTION.enunciado}
                </p>

                {/* Options List */}
                <div className="space-y-1.5 pt-1">
                  {DEMO_FGV_QUESTION.options.slice(0, 3).map((opt) => {
                    const isSelected = fgvSelectedOption === opt.letter;
                    const isCorrect = opt.letter === DEMO_FGV_QUESTION.correct;

                    return (
                      <button
                        key={opt.letter}
                        type="button"
                        onClick={() => {
                          setFgvSelectedOption(opt.letter);
                          setFgvSubmitted(true);
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                          fgvSubmitted && isCorrect
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400 font-semibold'
                            : fgvSubmitted && isSelected && !isCorrect
                            ? 'bg-rose-500/15 border-rose-500 text-rose-400 font-semibold'
                            : isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-[var(--text-primary)]'
                            : 'bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <span className="font-mono font-bold shrink-0 px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px]">
                          {opt.letter}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Explanation Feedback */}
                {fgvSubmitted && (
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs space-y-1 animate-fade-in font-mono">
                    <div className="font-bold text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Análise Semântica da IA:</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
                      {DEMO_FGV_QUESTION.explanation}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>SIMULADOR INTELIGENTE</span>
                <span className="text-purple-400 font-bold">+25 XP por acerto</span>
              </div>
            </Card>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION: 3 LABORATÓRIOS INTERATIVOS DE TESTE AO VIVO        */}
        {/* ============================================================ */}
        <section id="laboratorios" className="space-y-6 pt-8 scroll-mt-24">
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>EXPERIÊNCIA PRÁTICA IMEDIATA</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              Laboratórios de Treinamento Ativo
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Teste os 3 motores exclusivos antes de criar sua conta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Lab 1: Caça-Pegadinhas da Lei (15s) */}
            <Card className="p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[var(--bg-surface)] border-t-4 border-t-amber-500 shadow-xl glow-amber">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      Laboratório 01 • Caça-Pegadinhas da Lei Seca
                    </span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 ${timerRunning ? 'bg-amber-500 text-white animate-pulse' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'}`}>
                    <Timer className="w-3.5 h-3.5" />
                    <span>{timerLeft}s</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                    Reflexo Rápido na Letra da Lei
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Identifique em 15s se a banca alterou uma palavra crucial do artigo.
                  </p>
                </div>

                {/* Legal Text Snippet */}
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px] text-cyan-400 font-bold">
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
                    className="font-mono text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-md shadow-amber-500/20 mt-2"
                  >
                    <Zap className="w-4 h-4 text-amber-200" />
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
                      className="font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>TEXTO CORRETO</span>
                    </Button>
                  </div>
                ) : null}

                {/* Feedback Alert */}
                {demoResult && (
                  <div className={`p-4 rounded-xl border text-xs font-mono space-y-1.5 animate-fade-in ${demoResult.isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
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
                      className="text-[11px] font-bold underline text-cyan-400 hover:opacity-80 pt-1 cursor-pointer"
                    >
                      Testar Próximo Artigo →
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>MÓDULO LEI SECA ATIVA</span>
                <span className="font-bold text-amber-400">+10 XP por acerto</span>
              </div>
            </Card>

            {/* Lab 2: Matriz de Aproveitamento Interativa */}
            <Card className="p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[var(--bg-surface)] border-t-4 border-t-emerald-500 shadow-xl glow-emerald">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      Laboratório 02 • Matriz de Aproveitamento
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold">
                    TRANSIÇÃO DE EDITAIS
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                    Simulador de Compatibilidade entre Concursos
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Descubra quanto do seu estudo atual pode ser reaproveitado em outro edital.
                  </p>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Estudei Para:</label>
                    <select
                      value={matrixFrom}
                      onChange={(e) => setMatrixFrom(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] outline-none"
                    >
                      <option value="bb_comercial">Banco do Brasil (Comercial)</option>
                      <option value="atrfb">Receita Federal (ATRFB)</option>
                      <option value="transpetro_adm">Transpetro (Administração)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-[var(--text-muted)] uppercase font-bold">Quero Migrar Para:</label>
                    <select
                      value={matrixTo}
                      onChange={(e) => setMatrixTo(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] outline-none"
                    >
                      <option value="transpetro_adm">Transpetro (Administração)</option>
                      <option value="afrfb">Receita Federal (AFRFB)</option>
                      <option value="bb_comercial">Banco do Brasil (Comercial)</option>
                    </select>
                  </div>
                </div>

                {/* Affinity Gauge Bar */}
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[var(--text-muted)]">ÍNDICE DE AFINIDADE CURRICULAR:</span>
                    <span className="font-bold text-emerald-400 text-sm">{getMatrixPercentage()}% de Base Comum</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-700 rounded-full"
                      style={{ width: `${getMatrixPercentage()}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-mono pt-1">
                    ⚡ {getMatrixPercentage() >= 60 ? 'Transição Acelerada: você já domina mais da metade das matérias do edital destino!' : 'Transição Estratégica: requer foco nas matérias específicas inéditas.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>MAPEAMENTO 80/20</span>
                <span className="text-emerald-400 font-bold">Trilha Automática</span>
              </div>
            </Card>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION: OS 4 PILARES DA METODOLOGIA ATIVA                   */}
        {/* ============================================================ */}
        <section id="metodologia" className="space-y-6 pt-8 scroll-mt-24">
          <div className="text-center space-y-1.5">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              Por que a Metodologia Ativa Funciona?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Elimine o estudo passivo e direcione 100% da sua energia para a retenção de longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pilar 1 */}
            <Card className="p-6 space-y-3 bg-[var(--bg-surface)] hover:border-cyan-500 transition-all shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                DNA de Bancas Reais
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A FGV exige casos práticos densos; a Cesgranrio cobra prazos e literalidade. Nossos simuladores geram questões com a malícia exata da sua banca.
              </p>
            </Card>

            {/* Pilar 2 */}
            <Card className="p-6 space-y-3 bg-[var(--bg-surface)] hover:border-amber-500 transition-all shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Caça-Pegadinhas da Lei
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Reflexo rápido em 15s para memorizar artigos de ouro e neutralizar armadilhas de prazos, exceções e vedações na hora da prova.
              </p>
            </Card>

            {/* Pilar 3 */}
            <Card className="p-6 space-y-3 bg-[var(--bg-surface)] hover:border-rose-500 transition-all shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Caderno de Erros SM-2
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Questões erradas voltam em intervalos inteligentes (D+1, D+7, D+30) até a superação definitiva com ganho de +15 XP.
              </p>
            </Card>

            {/* Pilar 4 */}
            <Card className="p-6 space-y-3 bg-[var(--bg-surface)] hover:border-teal-500 transition-all shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Cadência 60/30 & Timer
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Blocos estruturados de 60 min de doutrina + 30 min de questões práticas, com estimativa de tempo e ritmo de leitura medido em páginas/hora.
              </p>
            </Card>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION: COMPARATIVO (MÉTODO TRADICIONAL vs GABARITO.AI)    */}
        {/* ============================================================ */}
        <section id="comparativo" className="space-y-6 pt-8 scroll-mt-24">
          <div className="text-center space-y-1.5">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              Estudo Tradicional vs Gabarito.AI
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Compare as abordagens e entenda por que o aprendizado ativo encurta o tempo até a nomeação.
            </p>
          </div>

          <Card className="p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-2xl overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                  <th className="pb-3 font-bold uppercase">Critério de Preparação</th>
                  <th className="pb-3 font-bold uppercase text-rose-400">Método Tradicional (PDF Passivo)</th>
                  <th className="pb-3 font-bold uppercase text-cyan-400">Ecossistema Gabarito.AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                <tr>
                  <td className="py-3.5 font-bold text-[var(--text-primary)] font-sans">Leitura da Doutrina</td>
                  <td className="py-3.5 text-rose-300">PDFs de 1.000 páginas sem foco nas bancas</td>
                  <td className="py-3.5 text-cyan-400 font-bold">Pareto 80/20 com os tópicos mais cobrados</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--text-primary)] font-sans">Treino de Lei Seca</td>
                  <td className="py-3.5 text-rose-300">Leitura maçante no Vade Mecum sem teste</td>
                  <td className="py-3.5 text-cyan-400 font-bold">Desafios de 15s no Caça-Pegadinhas da Lei</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--text-primary)] font-sans">Gestão de Erros</td>
                  <td className="py-3.5 text-rose-300">Erros esquecidos em folhas avulsas</td>
                  <td className="py-3.5 text-cyan-400 font-bold">Algoritmo SM-2 com repetição espaçada automática</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--text-primary)] font-sans">Correção de Redação</td>
                  <td className="py-3.5 text-rose-300">Dias de espera e custo alto por correção</td>
                  <td className="py-3.5 text-cyan-400 font-bold">Correção instantânea por IA nos 4 eixos oficiais</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--text-primary)] font-sans">Simulados</td>
                  <td className="py-3.5 text-rose-300">Provas genéricas sem ponderação do edital</td>
                  <td className="py-3.5 text-cyan-400 font-bold">Provas de 4h com pesos reais e Cartão Digital</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* ============================================================ */}
        {/* SECTION: TRILHA DE PATENTES DOS CONCURSEIROS                 */}
        {/* ============================================================ */}
        <section id="patentes" className="space-y-6 pt-8 scroll-mt-24">
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>SISTEMA DE PROGRESSÃO & XP</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              As 10 Patentes do Concurseiro
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Suba de nível resolvendo questões, zerando o caderno de erros e mantendo sua sequência diária ativa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            {ranksList.map((rank) => (
              <div 
                key={rank.level}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] font-bold text-[10px] text-cyan-400">
                    NÍVEL {rank.level}
                  </span>
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="font-bold text-[var(--text-primary)] text-xs truncate">
                  {rank.title}
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  {rank.xp}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION: FAQ (PERGUNTAS FREQUENTES)                          */}
        {/* ============================================================ */}
        <section id="faq" className="space-y-6 pt-8 scroll-mt-24">
          <div className="text-center space-y-1.5">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              Perguntas Frequentes
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Tudo o que você precisa saber sobre o Gabarito.AI.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "O Gabarito.AI é gratuito?",
                a: "Sim! A plataforma opera com custo zero para o estudante, permitindo acesso a simulados, caça-pegadinhas da lei seca, correção de redações e caderno de erros sem assinaturas caras."
              },
              {
                q: "Posso acessar pelo computador e pelo celular?",
                a: "Sim! O Gabarito.AI é 100% responsivo e sincroniza sua conta e progresso de estudos automaticamente em qualquer dispositivo através do Google 1-Click ou usuário e senha."
              },
              {
                q: "Como funciona a adaptação por banca (FGV, Cesgranrio, etc.)?",
                a: "Nosso motor heurístico analisa o DNA de cobrança de cada banca examinadora. A FGV tem foco em enunciados situacionais densos e inversões de sentido; a Cesgranrio foca em prazos e literalidade das normas."
              },
              {
                q: "Meus dados de estudo ficam isolados?",
                a: "Sim! Cada conta possui isolamento hermético com criptografia Scrypt nativa. Seu histórico de simulados, anotações do caderno de erros e XP são estritamente privados."
              }
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Card 
                  key={idx}
                  className="p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-all cursor-pointer"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      {faqItem.q}
                    </h3>
                    <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                  </div>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2.5 leading-relaxed font-sans pt-2 border-t border-[var(--border-subtle)]">
                      {faqItem.a}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* CALL TO ACTION FINAL                                         */}
        {/* ============================================================ */}
        <Card className="p-8 sm:p-12 bg-gradient-to-r from-blue-950 via-[var(--bg-surface)] to-indigo-950 border border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 glow-blue">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>ACESSO COMPLETO & ILIMITADO</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
              Pronto para colocar seu nome no Diário Oficial?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Crie seu perfil em 1 clique com sua Conta Google e inicie seu simulado oficial hoje mesmo.
            </p>
          </div>

          <Button
            variant="brand"
            size="lg"
            onClick={() => {
              setAuthTab('register');
              setShowAuthModal(true);
            }}
            className="shrink-0 font-mono text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 px-8 py-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Criar Conta Gratuita</span>
          </Button>
        </Card>

      </main>

      {/* ============================================================ */}
      {/* FOOTER INSTITUCIONAL                                         */}
      {/* ============================================================ */}
      <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 sm:px-8 py-8 mt-16 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">G</div>
            <span className="font-bold text-[var(--text-primary)]">Gabarito.AI</span>
            <span>• Plataforma de Alta Performance para Concursos</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>Isolamento Zero-Trust</span>
            <span>•</span>
            <span>FGV, Cesgranrio & Cebraspe</span>
            <span>•</span>
            <span>Versão 4.6</span>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* MODAL DE AUTENTICAÇÃO INTEGRADO (Google & Credenciais)       */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* MODAL DE AUTENTICAÇÃO INTEGRADO (Google & Credenciais)       */}
      {/* ============================================================ */}
      {showAuthModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAuthModal(false);
          }}
        >
          <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4 relative my-auto max-h-[92vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)] transition-colors cursor-pointer z-10"
              title="Fechar Janela"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[10px] font-mono text-cyan-400 font-bold">
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
                className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
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
                className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  authTab === 'register'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Criar Conta</span>
              </button>
            </div>

            {/* Google Full-Page Redirect Sign-In */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={handleGoogleRedirectLogin}
                disabled={authLoading}
                className="w-full h-11 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-cyan-500/50 transition-all font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <GoogleIcon className="w-5 h-5 shrink-0" />
                <span>{authTab === 'login' ? 'Entrar com a Conta Google' : 'Cadastrar com a Conta Google'}</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  ou com e-mail e senha
                </span>
                <div className="flex-1 h-px bg-[var(--border-subtle)]"></div>
              </div>
            </div>

            {/* Form */}
            {authTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-3.5" autoComplete="on">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    E-mail do Aluno:
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
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-cyan-400 outline-none font-sans"
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
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-cyan-400 outline-none font-sans"
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
                  className="font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 mt-3 py-3 h-11 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  {authLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Autenticando...</span>
                    </span>
                  ) : (
                    <span>Entrar na Plataforma</span>
                  )}
                </Button>
              </form>
            ) : (
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
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-cyan-400 outline-none font-sans"
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
                      className="w-full h-10 pl-10 pr-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-cyan-400 outline-none font-sans"
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
                      className="w-full h-10 pl-10 pr-10 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-cyan-400 outline-none font-sans"
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
                  className="font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 mt-3 py-3 h-11 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  {authLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Criando Perfil...</span>
                    </span>
                  ) : (
                    <span>Concluir Cadastro Gratuito</span>
                  )}
                </Button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
