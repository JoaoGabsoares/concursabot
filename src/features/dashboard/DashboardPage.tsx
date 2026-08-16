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
  ArrowUpRight
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
  const streak = user?.streakDays || 1;
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
    { day: 'Seg', done: true },
    { day: 'Ter', done: true },
    { day: 'Qua', done: true },
    { day: 'Qui', done: true },
    { day: 'Sex', done: true },
    { day: 'Sáb', done: true },
    { day: 'Dom', done: true, isToday: true },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-8 animate-fade-in">
      {/* Bento Grid Principal (2/3 Coluna Conteúdo + 1/3 Coluna Status) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* === COLUNA PRINCIPAL (2 COLUNAS) === */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* 1. HERO CARD: SUA MISSÃO DE HOJE */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-elevated)] p-6 sm:p-7 transition-all duration-200 hover:border-[var(--border-focus)] shadow-lg group">
            {/* Background subtle radial glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Missão do Dia
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {currentCareer.banca} • Ciclo D+1
                  </span>
                </div>
                <Badge variant="brand">Prioridade Alta</Badge>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] leading-snug">
                  {nextMission.subject}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  {nextMission.topic}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[var(--text-secondary)]" /> ~{nextMission.estimatedMinutes} min sugeridos
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <RefreshCw className="w-3.5 h-3.5" /> Revisão Espaçada Ativa
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  size="lg"
                  variant="primary"
                  icon={Play}
                  onClick={() => onStartStudy(nextMission)}
                  className="font-bold text-sm px-6 shadow-md"
                >
                  Começar a Estudar Agora
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  icon={BookOpen}
                  onClick={() => onNavigate('study')}
                  className="text-xs sm:text-sm"
                >
                  Abrir Sala de Estudos Split
                </Button>
              </div>
            </div>
          </div>

          {/* 2. METAS DIÁRIAS (Dois Cards Balanceados) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Meta 1: Questões Resolvidas */}
            <Card className="p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Questões Hoje
                </span>
                <span className="text-xs font-mono font-semibold text-[var(--accent-success)]">
                  {questionsPercent}% da meta
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[var(--text-primary)] tracking-tight font-mono">
                  {questionsDone}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  / {questionsGoal} questões
                </span>
              </div>
              <ProgressBar value={questionsPercent} variant="success" />
            </Card>

            {/* Meta 2: Tempo Líquido */}
            <Card className="p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Tempo Líquido
                </span>
                <span className="text-xs font-mono font-semibold text-[var(--accent-primary)]">
                  {minutesPercent}% da meta
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[var(--text-primary)] tracking-tight font-mono">
                  {minutesDone}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  / {minutesGoal} minutos
                </span>
              </div>
              <ProgressBar value={minutesPercent} variant="brand" />
            </Card>
          </div>

          {/* 3. RADAR DE ATENÇÃO (Caderno de Erros) */}
          {pendingErrorsCount > 0 && (
            <div 
              onClick={() => onNavigate('erros')}
              className="p-4 rounded-xl border border-red-900/30 bg-red-950/15 hover:bg-red-950/25 transition-colors cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[var(--accent-danger)] shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <span>Radar de Atenção: {pendingErrorsCount} {pendingErrorsCount === 1 ? 'questão errada pendente' : 'questões erradas pendentes'}</span>
                    <Badge variant="danger">Superação +15 XP</Badge>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Refaça as questões capturadas no Caderno de Erros para zerar suas vulnerabilidades.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0 transition-transform group-hover:translate-x-0.5" />
            </div>
          )}

          {/* 4. ATALHOS RÁPIDOS (Grid 3 Colunas) */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider px-1">
              Ferramentas de Alta Performance
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Card 
                hoverable={true} 
                onClick={() => onNavigate('simulados')}
                className="p-4 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--accent-primary)] shrink-0 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Simulados Oficiais</div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">Tempo de prova cronometrado</div>
                </div>
              </Card>

              <Card 
                hoverable={true} 
                onClick={() => onNavigate('redacao')}
                className="p-4 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Redação Discursiva</div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">Correção nos 4 critérios</div>
                </div>
              </Card>

              <Card 
                hoverable={true} 
                onClick={() => onNavigate('edital')}
                className="p-4 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Raio-X do Edital</div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">Pareto 80/20 & Pesos</div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* === COLUNA LATERAL DE STATUS & GAMIFICAÇÃO (1 COLUNA) === */}
        <div className="space-y-5">
          
          {/* Card 1: Streak de Fogo & Calendário Semanal */}
          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-flame" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Ofensiva de Estudos
                </span>
              </div>
              <Badge variant="warning">{streak} Dias</Badge>
            </div>

            <div className="text-center py-2">
              <div className="text-4xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                {streak} <span className="text-sm font-sans font-normal text-[var(--text-muted)]">dias seguidos</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Você está mais consistente do que 88% dos candidatos.
              </p>
            </div>

            {/* Week Streak Tracker */}
            <div className="grid grid-cols-7 gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
              {weekDays.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{w.day}</span>
                  <div 
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                      w.done 
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400' 
                        : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                    } ${w.isToday ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-[var(--bg-surface)]' : ''}`}
                  >
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 2: Nível & Gamificação */}
          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Nível {level}
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)]">{xp} XP Total</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-[var(--text-secondary)]">
                <span>Rumo ao Nível {level + 1}</span>
                <span>{currentLevelProgress} / 500 XP</span>
              </div>
              <ProgressBar value={xpPercent} variant="brand" />
            </div>

            <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] space-y-1">
              <div className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Bônus de XP Ativos:
              </div>
              <div className="flex justify-between">
                <span>• Questão acertada:</span>
                <span className="font-mono text-[var(--accent-success)]">+10 XP</span>
              </div>
              <div className="flex justify-between">
                <span>• Superação no Caderno:</span>
                <span className="font-mono text-amber-400">+15 XP</span>
              </div>
              <div className="flex justify-between">
                <span>• Redação corrigida:</span>
                <span className="font-mono text-[var(--accent-primary)]">+50 XP</span>
              </div>
            </div>
          </Card>

          {/* Card 3: Resumo da Carreira & Corte Histórico */}
          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Concurso Alvo
              </span>
              <Badge variant="default">{currentCareer.banca}</Badge>
            </div>
            <div className="font-semibold text-sm text-[var(--text-primary)]">
              {currentCareer.name}
            </div>
            <div className="text-xs text-[var(--text-secondary)] space-y-1 border-t border-[var(--border-subtle)] pt-2.5">
              <div className="flex justify-between">
                <span>Nota de corte estimada:</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">78.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Disciplinas no edital:</span>
                <span className="font-mono text-[var(--text-primary)]">6 matérias</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              fullWidth={true}
              icon={ArrowUpRight}
              onClick={() => onNavigate('edital')}
              className="text-xs mt-1"
            >
              Ver Raio-X Completo do Edital
            </Button>
          </Card>

        </div>
      </div>
    </div>
  );
};
