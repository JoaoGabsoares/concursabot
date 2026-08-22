import React, { useState, useEffect, useMemo } from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { getConcurseiroRank, getSubjectsForCareer, SubjectStats } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { Card, Button, ProgressBar, CarimboStatus } from '../../components/UIPrimitives';
import { api } from '../../api/client';
import { 
  ChevronRight, 
  Flame, 
  Target, 
  Trophy, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Scale, 
  PenTool, 
  BookMarked, 
  Sparkles, 
  RotateCw,
  Play,
  Clock,
  Zap,
  TrendingUp,
  Filter,
  CheckCircle
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
  const userXp = user?.xp || 0;
  const userLevel = user?.level || 1;
  const userStreak = user?.streakDays || 0;
  const todayQuestions = user?.todayQuestions || 0;
  const goalQuestions = user?.dailyGoalQuestions || 30;
  const todayMinutes = user?.todayMinutes || 0;
  const goalMinutes = user?.dailyGoalMinutes || 120;

  const currentRank = getConcurseiroRank(userXp);
  const [subjectsList, setSubjectsList] = useState<SubjectStats[]>(() => getSubjectsForCareer(careerId));
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<'all' | 'juridico' | 'exatas' | 'geral'>('all');

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
      .catch(() => {});

    return () => { isMounted = false; };
  }, [user?.id, careerId]);

  const topSubject = subjectsList[0]?.name || 'Direito Tributário';
  const topLesson = getLessonContent(topSubject);

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

  const filteredSubjects = useMemo(() => {
    if (activeSubjectFilter === 'all') return subjectsList;
    return subjectsList.filter((s) => {
      const lower = s.name.toLowerCase();
      if (activeSubjectFilter === 'juridico') {
        return lower.includes('direito') || lower.includes('legislação') || lower.includes('constitucional') || lower.includes('tributário') || lower.includes('administrativo');
      }
      if (activeSubjectFilter === 'exatas') {
        return lower.includes('raciocínio') || lower.includes('matemática') || lower.includes('estatística') || lower.includes('contabilidade') || lower.includes('tecnologia') || lower.includes('dados');
      }
      if (activeSubjectFilter === 'geral') {
        return lower.includes('português') || lower.includes('língua') || lower.includes('redação') || lower.includes('ingles') || lower.includes('fluência');
      }
      return true;
    });
  }, [subjectsList, activeSubjectFilter]);

  const overallMastery = useMemo(() => {
    if (!subjectsList.length) return 0;
    const sum = subjectsList.reduce((acc, curr) => acc + (curr.correctPercentage || 0), 0);
    return Math.round(sum / subjectsList.length);
  }, [subjectsList]);

  const quickTiles = [
    {
      title: 'Sala de Estudos',
      subtitle: 'Leitor Doutrinário 60/30',
      icon: BookOpen,
      color: 'text-[var(--accent-primary)]',
      bg: 'bg-[var(--accent-primary-glow)]',
      borderColor: 'hover:border-[var(--accent-primary)]/40',
      action: () => onNavigate('study')
    },
    {
      title: 'Simulados Oficiais',
      subtitle: `Treino Real • ${currentCareer.banca}`,
      icon: Target,
      color: 'text-[var(--accent-success)]',
      bg: 'bg-[var(--accent-emerald-bg)]',
      borderColor: 'hover:border-[var(--accent-success)]/40',
      action: () => onNavigate('simulados')
    },
    {
      title: 'Caça-Pegadinhas',
      subtitle: 'Reflexo 15s • Artigos de Ouro',
      icon: Scale,
      color: 'text-[var(--accent-warning)]',
      bg: 'bg-[var(--accent-amber-bg)]',
      borderColor: 'hover:border-[var(--accent-warning)]/40',
      action: () => onNavigate('leiseca')
    },
    {
      title: 'Caderno de Erros',
      subtitle: `${pendingErrorsCount} falhas para superar`,
      icon: BookMarked,
      color: 'text-[var(--accent-danger)]',
      bg: 'bg-[var(--color-status-danger-bg)]',
      borderColor: 'hover:border-[var(--accent-danger)]/40',
      badge: pendingErrorsCount > 0 ? `${pendingErrorsCount}` : undefined,
      action: () => onNavigate('erros')
    }
  ];

  return (
    <div className="space-y-6 pb-20 max-w-7xl mx-auto font-sans animate-fade-in">
      
      <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-success)] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              Centro de Operações • {currentCareer.banca}
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Olá, {user?.name || 'Futuro Homologado'}.
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Preparação Oficial focada no edital: <strong className="text-[var(--text-primary)]">{currentCareer.name}</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono shrink-0">
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-left space-y-0.5">
            <div className="text-[11px] text-[var(--text-muted)] uppercase">Patente</div>
            <div className="text-sm font-bold text-[var(--text-primary)]">Nível {currentRank.level}</div>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-left space-y-0.5">
            <div className="text-[11px] text-[var(--text-muted)] uppercase">XP Total</div>
            <div className="text-sm font-bold text-[var(--accent-primary)]">{userXp} XP</div>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-left space-y-0.5">
            <div className="text-[11px] text-[var(--text-muted)] uppercase">Ofensiva</div>
            <div className="text-sm font-bold text-[var(--accent-warning)]">{userStreak} dias</div>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-left space-y-0.5">
            <div className="text-[11px] text-[var(--text-muted)] uppercase">Domínio Geral</div>
            <div className="text-sm font-bold text-[var(--accent-success)]">{overallMastery}%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-primary-glow)] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-50" />
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                DISCIPLINA RECOMENDADA
              </span>
              <CarimboStatus status="homologado" label={`PESO NO EDITAL: ALTO`} />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentMission.estimatedMinutes} MIN</span>
              <span>•</span>
              <span className="text-[var(--accent-primary)] font-bold">+{currentMission.rewardXp} XP</span>
            </div>
          </div>
          <div className="space-y-2 relative z-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight leading-snug">
              {currentMission.subject}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {currentMission.topic}
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
            <button
              onClick={() => onStartStudy(currentMission)}
              className="px-6 py-3.5 rounded-2xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white font-sans text-sm font-bold flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Estudar Esta Disciplina Agora</span>
            </button>
            <button
              onClick={() => onNavigate('ciclos')}
              className="px-5 py-3.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-[var(--text-primary)] font-sans text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <RotateCw className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Ver Ciclo Completo</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[var(--accent-amber-bg)] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[var(--accent-warning)]" />
                </div>
                <span className="font-sans text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
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
                {userStreak} <span className="text-sm font-normal text-[var(--text-muted)]">dias seguidos</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                {userStreak > 0
                  ? 'Sua sequência está garantida! Continue estudando para manter o multiplicador de XP.'
                  : 'Estude hoje para acender sua chama e multiplicar suas recompensas de experiência.'}
              </p>
            </div>
            <div className="pt-2">
              <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase mb-2">
                Presença nos 7 Dias da Semana:
              </div>
              <div className="grid grid-cols-7 gap-1.5 text-center font-mono">
                {weekDays.map((day, idx) => {
                  const isCurrent = idx === activeDayIndex;
                  const isCompleted = idx <= activeDayIndex && userStreak > 0;
                  return (
                    <div 
                      key={day}
                      className={`p-2 rounded-xl border text-xs flex flex-col items-center gap-1.5 transition-all ${
                        isCompleted
                          ? 'bg-[var(--accent-amber-bg)] border-[var(--accent-warning)]/40 text-[var(--accent-warning)] font-bold'
                          : isCurrent
                          ? 'bg-[var(--bg-elevated)] border-[var(--border-focus)] text-[var(--text-primary)] font-bold ring-2 ring-[var(--accent-primary)]/20'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      <span className="text-[10px]">{day}</span>
                      <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-[var(--accent-warning)]' : 'bg-[var(--border-subtle)]'}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
            <span className="text-[var(--text-muted)]">MULTIPLICADOR ATIVO:</span>
            <span className="font-bold text-[var(--accent-warning)]">{userStreak >= 7 ? '1.5x XP (Ativado)' : '1.0x XP'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickTiles.map((tile, idx) => {
          const Icon = tile.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={tile.action}
              className={`p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] ${tile.borderColor} hover:shadow-lg transition-all text-left flex items-start gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] relative overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl ${tile.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner`}>
                <Icon className={`w-6 h-6 ${tile.color}`} />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                    {tile.title}
                  </span>
                  {tile.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] font-mono text-[11px] font-bold shrink-0 animate-pulse">
                      {tile.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-1">
                  {tile.subtitle}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2.5">
                <Target className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                  Radar do Edital & Taxa de Domínio
                </h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Mapeamento individual de acertos e cobertura no certame da <strong>{currentCareer.banca}</strong>
              </p>
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] font-sans text-xs">
              <button
                onClick={() => setActiveSubjectFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeSubjectFilter === 'all'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Todas ({subjectsList.length})
              </button>
              <button
                onClick={() => setActiveSubjectFilter('juridico')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeSubjectFilter === 'juridico'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Jurídico
              </button>
              <button
                onClick={() => setActiveSubjectFilter('exatas')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeSubjectFilter === 'exatas'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Exatas & Dados
              </button>
              <button
                onClick={() => setActiveSubjectFilter('geral')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeSubjectFilter === 'geral'
                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Gerais
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[420px] overflow-y-auto custom-scrollbar pr-1">
            {filteredSubjects.map((subj, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all space-y-3 shadow-xs group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                      {subj.name}
                    </div>
                    <div className="font-mono text-[11px] text-[var(--text-muted)]">
                      Peso: <strong className="text-[var(--text-primary)]">{subj.weight}</strong> • {subj.totalQuestions} questões
                    </div>
                  </div>
                  <CarimboStatus status={subj.status} label={subj.statusLabel} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[11px]">
                    <span className="text-[var(--text-muted)]">TAXA DE ACERTO:</span>
                    <span className={`font-bold ${subj.correctPercentage >= 75 ? 'text-[var(--accent-success)]' : subj.correctPercentage >= 60 ? 'text-[var(--accent-warning)]' : 'text-[var(--accent-danger)]'}`}>
                      {subj.correctPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${subj.correctPercentage >= 75 ? 'bg-[var(--accent-success)]' : subj.correctPercentage >= 60 ? 'bg-[var(--accent-warning)]' : 'bg-[var(--accent-danger)]'}`}
                      style={{ width: `${Math.max(4, subj.correctPercentage)}%` }}
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <button
                    onClick={() => onNavigate('study')}
                    className="text-[var(--accent-primary)] hover:underline font-bold flex items-center gap-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded"
                  >
                    <span>Estudar Conteúdo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate('simulados')}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>Simulado</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-md">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[var(--accent-warning)]" />
                  <span className="font-sans text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Patente do Concurseiro
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-xs font-bold">
                  NÍVEL {currentRank.level}
                </span>
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-[var(--text-primary)]">
                  {currentRank.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  {currentRank.description}
                </p>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[var(--text-muted)]">XP PARA NÍVEL {currentRank.level + 1}:</span>
                  <span className="font-bold text-[var(--accent-primary)]">{userXp} / {xpNextLevel} XP</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
                  <div 
                    className="h-full bg-[var(--accent-primary)] transition-all duration-500 rounded-full"
                    style={{ width: `${Math.max(5, xpProgress)}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3 font-mono text-xs">
              <div className="font-bold text-[var(--text-primary)] flex items-center justify-between text-xs uppercase tracking-wider border-b border-[var(--border-subtle)] pb-2">
                <span>Metas do Dia:</span>
                <span className="text-[var(--accent-success)]">+130 XP</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isQuestionsGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)] shrink-0" /> : <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />}
                    <span className={`text-xs ${isQuestionsGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}`}>
                      30 questões ({todayQuestions}/30)
                    </span>
                  </div>
                  <span className="font-bold text-[var(--accent-primary)]">+50 XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isTimeGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)] shrink-0" /> : <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />}
                    <span className={`text-xs ${isTimeGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}`}>
                      60 min estudo ({todayMinutes}/60m)
                    </span>
                  </div>
                  <span className="font-bold text-[var(--accent-primary)]">+50 XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isErrorsGoalMet ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)] shrink-0" /> : <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />}
                    <span className={`text-xs ${isErrorsGoalMet ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"}`}>
                      Zerar Caderno ({pendingErrorsCount} pend.)
                    </span>
                  </div>
                  <span className="font-bold text-[var(--accent-primary)]">+30 XP</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('flashcards')}
            className="w-full py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-xs font-sans font-bold text-[var(--text-primary)] flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Layers className="w-4 h-4 text-[var(--accent-purple)]" />
            <span>Revisar Flashcards SM-2</span>
          </button>
        </div>
      </div>
    </div>
  );
};
