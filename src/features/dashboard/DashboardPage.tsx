import React from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { Flame, Trophy, Play, CheckCircle, Clock, AlertTriangle, Target, PenTool, BarChart3, ChevronRight, Zap, RefreshCw } from 'lucide-react';

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
  const nextLevelXp = (level * 500);
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
    topic: currentCareer.id.includes('bb') ? 'Sistema Financeiro Nacional & Mercado de Câmbio' : currentCareer.id.includes('atrfb') ? 'Competência Tributária & Limitações Constitucionais' : 'Princípios e Diretrizes do SUS (Lei 8.080/90)',
    revisionType: 'D+1',
    estimatedMinutes: 30
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 sm:pb-8 animate-fade-in">
      {/* 1. Header Hero Banner: Streak & Gamification */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Streak Block */}
        <Card className="flex items-center gap-3.5 bg-gradient-to-r from-orange-950/20 to-transparent border-orange-900/30">
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-serif font-bold text-[var(--text-primary)]">{streak} Dias</span>
              <Badge variant="warning">Ativo</Badge>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] font-sans">
              Consistência diária de estudos
            </p>
          </div>
        </Card>

        {/* Level & XP Block */}
        <Card className="sm:col-span-2 flex flex-col justify-center">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[var(--accent-gabarito)]" />
              <span className="font-semibold text-[var(--text-primary)]">Nível {level} — {user?.name || 'Estudante'}</span>
            </div>
            <span className="font-mono text-[var(--text-muted)] text-[11px]">{xp} XP Total</span>
          </div>
          <div className="w-full bg-[var(--bg-elevated)] h-2 rounded-full overflow-hidden border border-[var(--border-subtle)]">
            <div 
              className="bg-[var(--accent-gabarito)] h-full rounded-full transition-all duration-500" 
              style={{ width: `${xpPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono mt-1">
            <span>Progresso do Nível</span>
            <span>{currentLevelProgress} / 500 XP</span>
          </div>
        </Card>
      </div>

      {/* 2. MISSION HERO: SUA MISSÃO DE HOJE (Mission-Driven UX) */}
      <Card className="relative overflow-hidden border-2 border-[var(--text-primary)]/20 bg-[var(--bg-surface)] p-5 sm:p-7 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[var(--accent-gabarito-glow)] text-[var(--accent-gabarito)] border border-[var(--accent-gabarito)]/30 font-bold flex items-center gap-1">
                <Zap className="w-3 h-3" /> Missão do Dia
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {currentCareer.banca}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)] leading-tight">
              {nextMission.subject}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-sans line-clamp-2">
              {nextMission.topic}
            </p>

            <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> ~{nextMission.estimatedMinutes} min
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-400">
                <RefreshCw className="w-3.5 h-3.5" /> Revisão Espaçada Ativa
              </span>
            </div>
          </div>

          {/* Primary CTA (Thumb-Friendly on Mobile) */}
          <div className="shrink-0 pt-2 sm:pt-0">
            <Button
              size="lg"
              variant="primary"
              fullWidth={true}
              icon={Play}
              onClick={() => onStartStudy(nextMission)}
              className="sm:w-auto text-base font-semibold px-8 shadow-md"
            >
              Começar a Estudar Agora
            </Button>
          </div>
        </div>
      </Card>

      {/* 3. METAS DIÁRIAS (Dois blocos limpos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Questões Diárias */}
        <Card className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Questões Hoje
            </div>
            <div className="text-2xl font-serif font-bold text-[var(--text-primary)]">
              {questionsDone} <span className="text-sm font-sans font-normal text-[var(--text-muted)]">/ {questionsGoal}</span>
            </div>
            <div className="text-[11px] font-sans text-[var(--accent-gabarito)] font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> {questionsPercent}% da meta concluída
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[var(--bg-elevated)] flex items-center justify-center relative font-mono text-xs font-bold text-[var(--text-primary)]">
            <span>{questionsPercent}%</span>
          </div>
        </Card>

        {/* Minutos Diários */}
        <Card className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Tempo Líquido
            </div>
            <div className="text-2xl font-serif font-bold text-[var(--text-primary)]">
              {minutesDone} <span className="text-sm font-sans font-normal text-[var(--text-muted)]">/ {minutesGoal} min</span>
            </div>
            <div className="text-[11px] font-sans text-sky-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {minutesPercent}% do tempo diário
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[var(--bg-elevated)] flex items-center justify-center relative font-mono text-xs font-bold text-[var(--text-primary)]">
            <span>{minutesPercent}%</span>
          </div>
        </Card>
      </div>

      {/* 4. RADAR DE ATENÇÃO (Condicional - Só aparece se houver erros no Caderno) */}
      {pendingErrorsCount > 0 && (
        <Card 
          hoverable={true}
          onClick={() => onNavigate('erros')}
          className="border-red-900/30 bg-red-950/15 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-[var(--accent-danger)] shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <span>Radar de Atenção: {pendingErrorsCount} {pendingErrorsCount === 1 ? 'questão pendente' : 'questões pendentes'}</span>
                <Badge variant="danger">Caderno de Erros</Badge>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-sans">
                Refaça as questões erradas para consolidar a fixação e ganhar +15 XP de superação.
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[var(--text-muted)] shrink-0 hidden sm:block" />
        </Card>
      )}

      {/* 5. ATALHOS RÁPIDOS (3 cards de acesso direto) */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider px-1">
          Acesso Rápido às Ferramentas
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('simulados')}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--accent-gabarito)] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Simulados & Treino</div>
              <div className="text-[10px] text-[var(--text-muted)] truncate">Provas reais e tempo cronometrado</div>
            </div>
          </Card>

          <Card 
            hoverable={true} 
            onClick={() => onNavigate('redacao')}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-amber-400 shrink-0">
              <PenTool className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Corretor de Redação IA</div>
              <div className="text-[10px] text-[var(--text-muted)] truncate">Avaliação em 4 critérios da banca</div>
            </div>
          </Card>

          <Card 
            hoverable={true} 
            onClick={() => onNavigate('edital')}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-sky-400 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Raio-X do Edital</div>
              <div className="text-[10px] text-[var(--text-muted)] truncate">Pareto 80/20 e tópicos de ouro</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
