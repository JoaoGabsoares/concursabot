import React from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { Card, Button, Badge, ProgressBar } from '../../components/UIPrimitives';
import { 
  Flame, 
  Trophy, 
  Play, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Target, 
  PenTool, 
  BarChart3, 
  ChevronRight, 
  Zap, 
  RefreshCw,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';

interface DashboardPageProps {
  user: UserProfile | null;
  careerId: string;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount: number;
  onStartStudy: (mission?: DailyMission) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  user,
  careerId,
  onNavigate,
  pendingErrorsCount,
  onStartStudy
}) => {
  const currentCareer = getCareerById(careerId);
  const streak = user?.streakDays || 0;
  const level = user?.level || 1;
  const xp = user?.xp || 0;
  const currentLevelProgress = xp % 500;
  const xpPercent = Math.min(100, Math.round((currentLevelProgress / 500) * 100));

  const questionsDone = user?.todayQuestions || 0;
  const questionsGoal = user?.dailyGoalQuestions || 30;
  const questionsPercent = Math.min(100, Math.round((questionsDone / questionsGoal) * 100));

  const minutesDone = user?.todayMinutes || 0;
  const minutesGoal = user?.dailyGoalMinutes || 60;
  const minutesPercent = Math.min(100, Math.round((minutesDone / minutesGoal) * 100));

  // Dynamic next study mission
  const nextMission: DailyMission = {
    subject: currentCareer.id.includes('bb') ? 'Conhecimentos Bancários' : currentCareer.id.includes('atrfb') ? 'Direito Tributário' : 'Legislação do SUS',
    topic: currentCareer.id.includes('bb') ? 'Sistema Financeiro Nacional, Mercado de Câmbio & Resoluções CMN' : currentCareer.id.includes('atrfb') ? 'Competência Tributária, Princípios Constitucionais & CTN' : 'Princípios e Diretrizes do SUS (Lei Federal 8.080/90)',
    revisionType: 'D+1',
    estimatedMinutes: 30
  };

  const weekDays = [
    { day: 'Seg', done: streak > 0 },
    { day: 'Ter', done: streak > 1 },
    { day: 'Qua', done: streak > 2 },
    { day: 'Qui', done: streak > 3 },
    { day: 'Sex', done: streak > 4 },
    { day: 'Sáb', done: streak > 5 },
    { day: 'Dom', done: streak > 0, isToday: true },
  ];

  return (
    <div className="space-y-8 pb-24 md:pb-12 animate-fade-in">
      
      {/* 1. HERO EXPANSIVO — SUA MISSÃO DE ESTUDO DE HOJE */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-elevated)] p-7 sm:p-10 shadow-2xl transition-all duration-300 hover:border-[var(--border-focus)]">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Missão Prioritária do Dia
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Banca: {currentCareer.banca} • Ciclo de Fixação Ativo
              </span>
            </div>
            <Badge variant="brand">Prioridade Alta</Badge>
          </div>

          <div className="space-y-2 max-w-4xl">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              {nextMission.subject}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {nextMission.topic}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-mono text-[var(--text-muted)] pt-1">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-primary)]" /> ~{nextMission.estimatedMinutes} min sugeridos
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-amber-400 font-medium">
              <RefreshCw className="w-4 h-4" /> Revisão Espaçada (Curva do Esquecimento)
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-[var(--accent-success)] font-medium">
              <Award className="w-4 h-4" /> +25 XP ao Concluir
            </span>
          </div>

          {/* Action CTAs (Large 48px tactile buttons) */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              size="lg"
              variant="brand"
              icon={Play}
              onClick={() => onStartStudy(nextMission)}
              className="h-12 px-8 font-bold text-sm shadow-xl"
            >
              Começar a Estudar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              icon={BookOpen}
              onClick={() => onNavigate('study')}
              className="h-12 px-6 text-sm font-medium"
            >
              Abrir Sala de Estudos Split
            </Button>
          </div>
        </div>
      </div>

      {/* 2. GRID DE 4 MÉTRICAS PRINCIPAIS (Preenchimento Completo da Tela) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Questões Hoje */}
        <Card className="p-6 flex flex-col justify-between space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Questões Hoje
            </span>
            <span className="text-xs font-mono font-semibold text-[var(--accent-success)]">
              {questionsPercent}% da meta
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight font-mono">
              {questionsDone}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              / {questionsGoal} questões
            </span>
          </div>
          <ProgressBar value={questionsPercent} variant="success" />
        </Card>

        {/* Card 2: Tempo Líquido */}
        <Card className="p-6 flex flex-col justify-between space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Tempo Líquido
            </span>
            <span className="text-xs font-mono font-semibold text-[var(--accent-primary)]">
              {minutesPercent}% da meta
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight font-mono">
              {minutesDone}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              / {minutesGoal} minutos
            </span>
          </div>
          <ProgressBar value={minutesPercent} variant="brand" />
        </Card>

        {/* Card 3: Ofensiva & Streak */}
        <Card className="p-6 flex flex-col justify-between space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Ofensiva Diária
            </span>
            <Badge variant="warning">{streak} {streak === 1 ? 'Dia' : 'Dias'}</Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-amber-400 tracking-tight font-mono flex items-center gap-2">
              <Flame className="w-7 h-7 fill-amber-400 animate-flame" />
              {streak}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              dias consecutivos
            </span>
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] font-mono">
            {streak > 0 ? '🔥 Hábito mantido com sucesso' : '⚡ Inicie sua sequência hoje'}
          </div>
        </Card>

        {/* Card 4: Nível & Gamificação */}
        <Card className="p-6 flex flex-col justify-between space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Nível do Aluno
            </span>
            <span className="text-xs font-mono font-bold text-[var(--accent-warning)]">
              {xp} XP Total
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight font-mono">
              Nível {level}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              ({currentLevelProgress}/500 XP)
            </span>
          </div>
          <ProgressBar value={xpPercent} variant="warning" />
        </Card>

      </div>

      {/* 3. SEÇÃO CENTRAL: RADAR DO CADERNO DE ERROS & SUPERAÇÃO */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Radar de Vulnerabilidades & Caderno de Erros
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('erros')}
            className="text-xs font-mono text-[var(--accent-primary)] hover:underline flex items-center gap-1"
          >
            Abrir Caderno Completo <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <Card className="p-6 border border-red-900/30 bg-gradient-to-r from-red-950/20 via-[var(--bg-surface)] to-[var(--bg-surface)] shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[var(--accent-danger)] shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-base text-[var(--text-primary)]">
                    {pendingErrorsCount > 0 
                      ? `${pendingErrorsCount} ${pendingErrorsCount === 1 ? 'questão errada aguardando revisão' : 'questões erradas aguardando revisão'}`
                      : 'Nenhuma vulnerabilidade pendente'
                    }
                  </h3>
                  <Badge variant={pendingErrorsCount > 0 ? "danger" : "success"}>
                    {pendingErrorsCount > 0 ? "Superação +15 XP" : "100% Zerado"}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                  {pendingErrorsCount > 0 
                    ? 'O algoritmo isolou as questões que você errou em simulados e treinos anteriores. Refaça-as agora para consolidar os pontos cegos.'
                    : 'Excelente! Todas as questões erradas anteriores foram retreinadas e superadas no Caderno de Erros.'
                  }
                </p>
              </div>
            </div>

            <Button
              variant={pendingErrorsCount > 0 ? "brand" : "secondary"}
              size="md"
              icon={pendingErrorsCount > 0 ? RefreshCw : BookOpen}
              onClick={() => onNavigate('erros')}
              className="h-11 px-6 text-xs sm:text-sm font-semibold shrink-0"
            >
              {pendingErrorsCount > 0 ? 'Retreinar Erros Agora' : 'Explorar Caderno'}
            </Button>
          </div>
        </Card>
      </div>

      {/* 4. ATALHOS & FERRAMENTAS DE ALTA PERFORMANCE (Grid 3 Colunas Expansivo) */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] px-1">
          Ferramentas Oficiais de Preparação
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card: Simulados Oficiais */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('simulados')}
            className="p-6 flex flex-col justify-between space-y-4 group border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-md"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[var(--text-primary)]">
                  Simulados & Treino Real
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Provas completas com contagem regressiva oficial, distribuição por pesos da banca e relatório estatístico detalhado.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-[var(--accent-primary)] font-semibold border-t border-[var(--border-subtle)]">
              <span>Iniciar Simulado</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

          {/* Card: Redação Discursiva */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('redacao')}
            className="p-6 flex flex-col justify-between space-y-4 group border border-[var(--border-subtle)] hover:border-amber-500 shadow-md"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[var(--text-primary)]">
                  Corretor de Redação IA
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Correção rigorosa nos 4 critérios oficiais da banca examinadora (tema, estrutura formal, gramática e argumentação).
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-amber-400 font-semibold border-t border-[var(--border-subtle)]">
              <span>Escrever Redação</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

          {/* Card: Raio-X do Edital */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('edital')}
            className="p-6 flex flex-col justify-between space-y-4 group border border-[var(--border-subtle)] hover:border-sky-500 shadow-md"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[var(--text-primary)]">
                  Raio-X de Incidência (Pareto)
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Análise estatística 80/20 dos assuntos mais recorrentes nas últimas provas da banca {currentCareer.banca}.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-sky-400 font-semibold border-t border-[var(--border-subtle)]">
              <span>Ver Tópicos de Ouro</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
};
