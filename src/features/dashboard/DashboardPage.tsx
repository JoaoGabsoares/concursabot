import React, { useState, useEffect, useMemo } from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { getConcurseiroRank, getSubjectsForCareer, SubjectStats } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { PastStudyModal } from '../../components/PastStudyModal';
import { api } from '../../api/client';
import { 
  Play, 
  RotateCw, 
  Clock, 
  Calendar, 
  ChevronRight 
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
  const [localStreak, setLocalStreak] = useState<number | null>(null);
  const [isPastStudyModalOpen, setIsPastStudyModalOpen] = useState<boolean>(false);
  const userStreak = localStreak !== null ? localStreak : (user?.streakDays || 0);
  const todayQuestions = user?.todayQuestions || 0;
  const goalQuestions = user?.dailyGoalQuestions || 30;
  const todayMinutes = user?.todayMinutes || 0;

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
                status: found.status || (found.totalQuestions > 0 ? 'em_revisao' : 'pendente'),
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
    estimatedMinutes: 45,
    rewardXp: 30,
    status: 'pending'
  };

  const overallMastery = useMemo(() => {
    if (!subjectsList.length) return 0;
    const sum = subjectsList.reduce((acc, curr) => acc + (curr.correctPercentage || 0), 0);
    return Math.round(sum / subjectsList.length);
  }, [subjectsList]);

  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const activeDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans animate-fade-in pb-12">
      
      {/* 0. Cabeçalho Institucional Tático */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              [ PAINEL DE COMANDO TÁTICO ]
            </span>
          </div>
          <h1 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
            {currentCareer.name.split('—')[0]}
          </h1>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
          <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            Banca: <strong className="text-[var(--text-primary)]">{currentCareer.banca}</strong>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            Patente: <strong className="text-[var(--accent-primary)]">{currentRank.title}</strong>
          </span>
        </div>
      </div>

      {/* Grid Principal: 2 Blocos Superiores (Ação Imediata + Sequência) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* BLOCO 1: Próxima Ação Recomendada (Missão em Foco) */}
        <div className="lg:col-span-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[11px] font-bold text-[var(--accent-primary)] tracking-wider">
              [ 01 // PRÓXIMO ESTUDO RECOMENDADO ]
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentMission.estimatedMinutes} MIN</span>
              <span>•</span>
              <span className="text-[var(--accent-primary)] font-bold">+{currentMission.rewardXp} XP</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              {currentMission.subject}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {currentMission.topic}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onStartStudy(currentMission)}
              className="px-6 py-3.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-mono text-xs font-bold flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Play className="w-4 h-4 fill-[var(--btn-primary-text)]" />
              <span>CONTINUAR ESTUDO AGORA ➔</span>
            </button>
            <button
              onClick={() => onNavigate('ciclos')}
              className="px-4 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <RotateCw className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Ver Ciclo de Estudos</span>
            </button>
          </div>
        </div>

        {/* BLOCO 2: Sequência de Operação (Chama da Consistência / Streak) */}
        <div className="lg:col-span-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 flex flex-col justify-between space-y-4 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-[var(--text-muted)] tracking-wider">
                [ 02 // SEQUÊNCIA ]
              </span>
              <span className="text-[11px] font-mono font-bold text-[var(--accent-primary)]">
                {userStreak > 0 ? 'OFENSIVA ATIVA' : 'INICIE HOJE'}
              </span>
            </div>

            <div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                {userStreak} <span className="text-xs font-normal text-[var(--text-muted)]">dias seguidos</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                {userStreak > 0
                  ? 'Consistência tática mantida. Seu multiplicador de foco está ativo.'
                  : 'Complete a missão do dia para acender sua chama operacional.'}
              </p>
            </div>

            {/* Heatmap 7 Dias */}
            <div className="pt-1">
              <div className="grid grid-cols-7 gap-1 text-center font-mono">
                {weekDays.map((day, idx) => {
                  const isCurrent = idx === activeDayIndex;
                  const isCompleted = idx <= activeDayIndex && userStreak > 0;
                  return (
                    <div 
                      key={day}
                      className={`p-1.5 rounded-lg border text-xs flex flex-col items-center gap-1 transition-all ${
                        isCompleted
                          ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--accent-primary)] font-bold'
                          : isCurrent
                          ? 'bg-[var(--bg-elevated)] border-[var(--border-strong)] text-[var(--text-primary)] font-bold'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      <span className="text-[9px] uppercase">{day}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-subtle)]'}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setIsPastStudyModalOpen(true)}
              className="w-full py-2 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>+ Lançar Estudo Retroativo</span>
            </button>
          </div>
        </div>

      </div>

      {/* BLOCO 3: Índice de Domínio Global (1 Único Número Macro) */}
      <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="font-mono text-[11px] font-bold text-[var(--text-muted)] tracking-wider">
              [ 03 // PROGRESSO MACRO DO EDITAL ]
            </span>
            <div className="font-display font-bold text-lg text-[var(--text-primary)]">
              Taxa de Domínio Global: <span className="text-[var(--accent-primary)] font-mono">{overallMastery}%</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('edital')}
            className="self-start sm:self-center text-xs font-mono font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ver Radar Detalhado de Matérias</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Barra de Progresso Única */}
        <div className="w-full h-3 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
          <div 
            className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-700"
            style={{ width: `${Math.max(4, overallMastery)}%` }}
          />
        </div>

        {/* Métricas Essenciais em 1 Linha */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="text-[10px] text-[var(--text-muted)] uppercase">Questões Hoje</div>
            <div className="font-bold text-[var(--text-primary)]">{todayQuestions} / {goalQuestions} Q</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="text-[10px] text-[var(--text-muted)] uppercase">Tempo Hoje</div>
            <div className="font-bold text-[var(--text-primary)]">{todayMinutes} min</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="text-[10px] text-[var(--text-muted)] uppercase">Total de XP</div>
            <div className="font-bold text-[var(--accent-primary)]">{userXp} XP</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <div className="text-[10px] text-[var(--text-muted)] uppercase">Erros Pendentes</div>
            <div className={`font-bold ${pendingErrorsCount > 0 ? 'text-[var(--accent-danger)]' : 'text-[var(--text-primary)]'}`}>
              {pendingErrorsCount} no Caderno
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Estudos Passados */}
      <PastStudyModal
        isOpen={isPastStudyModalOpen}
        onClose={() => setIsPastStudyModalOpen(false)}
        careerId={careerId}
        onStudySaved={(xpGained: number, newStreak: number) => {
          if (user) {
            user.xp += xpGained;
          }
          setLocalStreak(newStreak);
        }}
      />

    </div>
  );
};
