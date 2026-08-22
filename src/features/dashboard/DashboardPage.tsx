import React, { useState, useEffect } from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { getConcurseiroRank, getSubjectsForCareer, SubjectStats } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { Card, Button, ProgressBar, CarimboStatus } from '../../components/UIPrimitives';
import { api } from '../../api/client';
import { ChevronRight, Flame, Target, Trophy, CheckCircle2, Circle, ArrowRight, BookOpen, Layers, Scale, PenTool, BookMarked, Sparkles, RotateCw } from 'lucide-react';

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
  const userXp = user?.xp || 0;
  const userLevel = user?.level || 1;
  const userStreak = user?.streakDays || 0;
  const todayQuestions = user?.todayQuestions || 0;
  const goalQuestions = user?.dailyGoalQuestions || 30;
  const todayMinutes = user?.todayMinutes || 0;
  const goalMinutes = user?.dailyGoalMinutes || 120;

  const currentRank = getConcurseiroRank(userXp);
  const [subjectsList, setSubjectsList] = useState<SubjectStats[]>(() => getSubjectsForCareer(careerId));

  useEffect(() => {
    let isMounted = true;
    const baseList = getSubjectsForCareer(careerId);
    setSubjectsList(baseList);

    api.getDashboardStats(user?.id, careerId)
      .then((data: any) => {
        if (isMounted && data && Array.isArray(data.subjectBreakdown) && data.subjectBreakdown.length > 0) {
          const merged = baseList.map(baseSubj => {
            const found = data.subjectBreakdown.find((b: any) => b.name === baseSubj.name || b.name?.toLowerCase() === baseSubj.name?.toLowerCase());
            if (found) {
              return {
                ...baseSubj,
                totalQuestions: found.totalQuestions || 0,
                correctPercentage: found.correctPercentage || 0,
                status: found.status || (found.totalQuestions > 0 ? 'em_revisao' : 'em_revisao'),
                statusLabel: found.statusLabel || (found.totalQuestions > 0 ? 'EM ESTUDO' : 'NÃO INICIADO')
              };
            }
            return baseSubj;
          });
          setSubjectsList(merged);
        }
      })
      .catch(() => {
        // Keep base 0 stats safely
      });

    return () => { isMounted = false; };
  }, [user?.id, careerId]);

  const topSubject = subjectsList[0]?.name || 'Direito Tributário';
  const topLesson = getLessonContent(topSubject);

  // Focus mission dynamically bound to the primary subject of the selected career
  const currentMission: DailyMission = {
    subject: topSubject,
    topic: topLesson.topic,
    estimatedMinutes: 30,
    rewardXp: 25,
    status: 'pending'
  };

  const xpNextLevel = currentRank.maxXp;
  const xpCurrentLevelBase = currentRank.minXp;
  const xpProgress = Math.min(100, Math.round(((userXp - xpCurrentLevelBase) / (xpNextLevel - xpCurrentLevelBase)) * 100));

  const isQuestionsGoalMet = todayQuestions >= goalQuestions;
  const isTimeGoalMet = todayMinutes >= goalMinutes;
  const isErrorsGoalMet = pendingErrorsCount === 0;

  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const activeDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  const quickActions = [
    {
      title: 'Ciclo de Estudos',
      desc: 'Esteira rotativa ponderada com interleaving',
      icon: RotateCw,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
      action: () => onNavigate('ciclos')
    },
    {
      title: 'Sala de Estudos',
      desc: 'Leitura de doutrina, cadência 60/30 e timer',
      icon: BookOpen,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10 border-blue-500/20',
      action: () => onNavigate('study')
    },
    {
      title: 'Simulados de Prova',
      desc: `Treino cronometrado com questões da ${currentCareer.banca}`,
      icon: Target,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      action: () => onNavigate('simulados')
    },
    {
      title: 'Caça-Pegadinhas da Lei',
      desc: 'Identifique os erros clássicos em 15s (+10 XP)',
      icon: Scale,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10 border-amber-500/20',
      action: () => onNavigate('leiseca')
    },
    {
      title: 'Caderno de Erros',
      desc: `${pendingErrorsCount} itens para superar com ciclo SM-2 (+15 XP)`,
      icon: BookMarked,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10 border-rose-500/20',
      badge: pendingErrorsCount > 0 ? `${pendingErrorsCount} falhas` : undefined,
      action: () => onNavigate('erros')
    },
    {
      title: 'Flashcards SM-2',
      desc: 'Fixação de conceitos com repetição espaçada',
      icon: Layers,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10 border-purple-500/20',
      action: () => onNavigate('flashcards')
    },
    {
      title: 'Redação Discursiva',
      desc: 'Correção instantânea por IA nos 4 critérios (+50 XP)',
      icon: PenTool,
      color: 'text-teal-500',
      bg: 'bg-teal-500/10 border-teal-500/20',
      action: () => onNavigate('redacao')
    }
  ];

  return (
    <div className="space-y-7 pb-20 max-w-6xl mx-auto font-sans animate-fade-in">
      
      {/* 1. CENTRO DE COMANDO: GAMIFICAÇÃO & CONSISTÊNCIA DIÁRIA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Card A: Patente do Concurseiro & Metas do Dia */}
        <Card className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-[var(--bg-surface)] shadow-md border-l-4 border-l-[var(--accent-primary)]">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[var(--accent-warning)]" />
                <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Patente do Concurseiro
                </span>
              </div>
              <CarimboStatus status="homologado" label={`NÍVEL ${currentRank.level}`} />
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                {currentRank.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                {currentRank.description}
              </p>
            </div>

            {/* Barra de XP e Nível */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">PROGRESSO DE XP:</span>
                <span className="font-bold text-[var(--accent-primary)]">{userXp} / {xpNextLevel} XP</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
                <div 
                  className="h-full bg-[var(--accent-primary)] transition-all duration-500 rounded-full"
                  style={{ width: `${Math.max(5, xpProgress)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Checklist de Metas Diárias com XP */}
          <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2.5 font-mono text-xs">
            <div className="font-bold text-[var(--text-primary)] flex items-center justify-between text-[11px] uppercase tracking-wider">
              <span>Metas do Dia • Recompensas em XP:</span>
              <span className="text-[var(--accent-success)]">+130 XP Disponíveis</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isQuestionsGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)]" /> : <Circle className="w-4 h-4 text-[var(--text-muted)]" />}
                  <span className={isQuestionsGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}>
                    Resolver 30 questões de prova ({todayQuestions}/30)
                  </span>
                </div>
                <span className="font-bold text-[var(--accent-primary)]">+50 XP</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isTimeGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)]" /> : <Circle className="w-4 h-4 text-[var(--text-muted)]" />}
                  <span className={isTimeGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}>
                    Estudar 60 minutos líquidos ({todayMinutes}/60m)
                  </span>
                </div>
                <span className="font-bold text-[var(--accent-primary)]">+50 XP</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isErrorsGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)]" /> : <Circle className="w-4 h-4 text-[var(--text-muted)]" />}
                  <span className={isErrorsGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}>
                    Zerar vulnerabilidades do Caderno ({pendingErrorsCount} pendentes)
                  </span>
                </div>
                <span className="font-bold text-[var(--accent-primary)]">+30 XP</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Card B: Trava de Ofensiva & Sequência de Dias (Streak) */}
        <Card className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-[var(--bg-surface)] shadow-md border-t-4 border-t-amber-500">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Chama da Consistência
                </span>
              </div>
              <CarimboStatus 
                status={userStreak > 0 ? "homologado" : "em_revisao"} 
                label={userStreak > 0 ? "OFENSIVA ATIVA" : "INICIE HOJE"} 
              />
            </div>

            <div>
              <div className="font-mono text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                {userStreak} <span className="text-sm sm:text-base font-normal text-[var(--text-muted)]">dias seguidos</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                {userStreak > 0
                  ? 'Sua sequência de estudos está garantida. Continue estudando para não congelar sua ofensiva!'
                  : 'Complete sua primeira sessão de estudos hoje para acender a chama e ativar seu multiplicador de consistência.'}
              </p>
            </div>

            {/* Mini Rastreador Semanal */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-1.5">
                Histórico Semanal de Presença:
              </div>
              <div className="grid grid-cols-7 gap-1.5 text-center font-mono">
                {weekDays.map((day, idx) => {
                  const isCurrent = idx === activeDayIndex;
                  const isCompleted = idx <= activeDayIndex && userStreak > 0;

                  return (
                    <div 
                      key={day}
                      className={`p-2 rounded-lg border text-xs flex flex-col items-center gap-1 ${
                        isCompleted
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-500 font-bold'
                          : isCurrent
                          ? 'bg-[var(--bg-elevated)] border-[var(--border-focus)] text-[var(--text-primary)] font-bold'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      <span className="text-[10px]">{day}</span>
                      <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-amber-500' : 'bg-[var(--border-subtle)]'}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
            <span className="text-[var(--text-muted)]">MULTIPLICADOR:</span>
            <span className="font-bold text-amber-400">{userStreak >= 7 ? '1.5x XP (Ativo)' : '1.0x XP'}</span>
          </div>
        </Card>

      </div>

      {/* 2. HUB DE AÇÕES RÁPIDAS (Acesso Rápido para Redução de Ruído) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Hub de Acesso Rápido
            </span>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">Escolha o que deseja praticar hoje</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {quickActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={action.action}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:shadow-md transition-all text-left flex items-start gap-3.5 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                      {action.title}
                    </span>
                    {action.badge && (
                      <span className="px-1.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 font-mono text-[10px] font-bold shrink-0">
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                    {action.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. HERO: MISSÃO OFICIAL DO EDITAL (Entrada Imediata no Estudo) */}
      <Card className="p-6 sm:p-8 space-y-5 border-l-4 border-l-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-lg">
        
        {/* Top Meta Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <CarimboStatus status="homologado" label="DISCIPLINA RECOMENDADA" />
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
              {currentCareer.name.split('—')[0]} • BANCA {currentCareer.banca}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[var(--text-muted)]">TEMPO: <strong className="text-[var(--text-primary)]">~30 MIN</strong></span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--accent-primary)] font-bold">+{currentMission.rewardXp} XP</span>
          </div>
        </div>

        {/* Main Title & Topic */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight leading-tight">
            {currentMission.subject}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {currentMission.topic}
          </p>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Button
            size="lg"
            variant="brand"
            onClick={() => onStartStudy(currentMission)}
            className="font-bold text-sm sm:text-base px-6 shadow-md"
          >
            Iniciar Ciclo de Estudos (+25 XP)
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('study')}
            className="text-xs sm:text-sm font-semibold px-5"
          >
            Abrir Sala de Estudos Teórica
          </Button>
        </div>
      </Card>

      {/* 3. RADAR DE DISCIPLINAS DO EDITAL & TAXA DE DOMÍNIO (O Foco Real do Concurso) */}
      <Card className="p-6 sm:p-8 space-y-5 bg-[var(--bg-surface)] shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[var(--accent-primary)]" />
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                Disciplinas do Edital & Taxa de Domínio
              </h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Acompanhamento do percentual de acerto e peso de cada matéria no certame oficial da <strong>{currentCareer.banca}</strong>
            </p>
          </div>

          <CarimboStatus status="homologado" label={`${subjectsList.length} MATÉRIAS`} />
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjectsList.map((subj, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all space-y-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {subj.name}
                  </div>
                  <div className="font-mono text-[11px] text-[var(--text-muted)]">
                    Peso no Edital: <strong className="text-[var(--text-primary)]">{subj.weight}</strong> • {subj.totalQuestions} itens resolvidos
                  </div>
                </div>
                <CarimboStatus status={subj.status} label={subj.statusLabel} />
              </div>

              {/* Progress Bar of Subject Accuracy */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)]">TAXA DE ACERTO:</span>
                  <span className={`font-bold ${subj.correctPercentage >= 75 ? 'text-[var(--accent-success)]' : subj.correctPercentage >= 60 ? 'text-[var(--accent-warning)]' : 'text-[var(--accent-danger)]'}`}>
                    {subj.correctPercentage}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${subj.correctPercentage >= 75 ? 'bg-[var(--accent-success)]' : subj.correctPercentage >= 60 ? 'bg-[var(--accent-warning)]' : 'bg-[var(--accent-danger)]'}`}
                    style={{ width: `${subj.correctPercentage}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('study')}
                  className="font-mono text-xs font-semibold text-[var(--accent-primary)] hover:underline flex items-center gap-1"
                >
                  <span>Treinar Esta Matéria</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 4. RADAR DE VULNERABILIDADES & CADERNO DE ERROS */}
      <Card className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <CarimboStatus 
              status={pendingErrorsCount > 0 ? "vulneravel" : "homologado"} 
              label={pendingErrorsCount > 0 ? `${pendingErrorsCount} PENDENTES` : "ZERADO"} 
            />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Caderno de Erros & Superação (+15 XP)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {pendingErrorsCount > 0
              ? `Você possui ${pendingErrorsCount} falhas registradas aguardando retreino com ganho de +15 XP por superação.`
              : 'Todas as falhas identificadas anteriormente foram retreinadas e superadas com sucesso.'}
          </p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => onNavigate('erros')}
          className="font-mono text-xs shrink-0 self-start sm:self-center font-semibold shadow-sm"
        >
          Acessar Caderno de Erros
        </Button>
      </Card>

      {/* 5. MÓDULOS OFICIAIS DE PREPARAÇÃO */}
      <div className="space-y-3">
        <div className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider px-1">
          Módulos Oficiais de Preparação
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Módulo 1: Simulados */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('simulados')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer bg-[var(--bg-surface)] shadow-md"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 01</span>
                <CarimboStatus status="em_revisao" label="CRONOMETRADO" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Simulados & Treino Real
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Provas estruturadas com distribuição de pesos conforme a banca examinadora {currentCareer.banca} e tempo oficial de prova.
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Acessar Simulados</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Módulo 2: Redação */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('redacao')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer bg-[var(--bg-surface)] shadow-md"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 02</span>
                <CarimboStatus status="homologado" label="4 CRITÉRIOS" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Redação Discursiva
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avaliação técnica em 4 critérios da banca (tema, estrutura dissertativa, gramática e argumentação jurídica).
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Escrever Redação (+50 XP)</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Módulo 3: Raio-X */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('edital')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer bg-[var(--bg-surface)] shadow-md"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 03</span>
                <CarimboStatus status="homologado" label="PARETO 80/20" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Raio-X de Incidência
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Mapeamento estatístico dos assuntos com maior frequência histórica nas provas anteriores da banca {currentCareer.banca}.
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Ver Tópicos de Ouro</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
};
