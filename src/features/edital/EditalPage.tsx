import React, { useState, useEffect, useMemo } from 'react';
import { CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { CAREER_PARETO_DB, getLessonContent } from '../../utils/studyContent';
import { getSubjectsForCareer, SubjectStats } from '../../utils/gamification';
import { api } from '../../api/client';
import { ActiveTab, DailyMission } from '../../types';
import { Target, BookOpen } from 'lucide-react';

interface EditalPageProps {
  careerId: string;
  onNavigate?: (tab: ActiveTab) => void;
  onStartStudy?: (mission?: DailyMission) => void;
}

export const EditalPage: React.FC<EditalPageProps> = ({ 
  careerId,
  onNavigate,
  onStartStudy
}) => {
  const currentCareer = getCareerById(careerId);
  const paretoData = CAREER_PARETO_DB[careerId] || CAREER_PARETO_DB["bb_comercial"];
  const topTopics = paretoData.topTopics;
  const historicalCuts = paretoData.cuts;

  const [subjectsList, setSubjectsList] = useState<SubjectStats[]>(() => getSubjectsForCareer(careerId));
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<'all' | 'juridico' | 'exatas' | 'geral'>('all');

  useEffect(() => {
    let isMounted = true;
    const baseList = getSubjectsForCareer(careerId);
    setSubjectsList(baseList);

    api.getDashboardStats(undefined, careerId)
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
  }, [careerId]);

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
        return lower.includes('português') || lower.includes('língua') || lower.includes('redação') || lower.includes('inglês') || lower.includes('ingles') || lower.includes('fluência');
      }
      return true;
    });
  }, [subjectsList, activeSubjectFilter]);

  const handleStudySubject = (subjName: string) => {
    if (onStartStudy) {
      const lesson = getLessonContent(subjName);
      onStartStudy({
        subject: subjName,
        topic: lesson.topic,
        estimatedMinutes: 45,
        rewardXp: 30,
        status: 'pending'
      });
    } else if (onNavigate) {
      onNavigate('study');
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      
      {/* 0. Cabeçalho Tático */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              [ RADAR TÁTICO DO EDITAL ]
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight mt-1">
            Matriz de Incidência & Pesos Oficiais
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
            Mapeamento de domínio e relevância no certame <strong>{currentCareer.name.split('—')[0]}</strong> • Banca <strong>{currentCareer.banca}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
          <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            Total de Disciplinas: <strong className="text-[var(--text-primary)]">{subjectsList.length}</strong>
          </span>
        </div>
      </div>

      {/* 1. Radar Completo de Disciplinas (Matriz do Edital) */}
      <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <Target className="w-5 h-5 text-[var(--accent-primary)]" />
            <h2 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Disciplinas do Edital Oficial ({filteredSubjects.length})
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)] font-mono text-xs">
            <button
              onClick={() => setActiveSubjectFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeSubjectFilter === 'all'
                  ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Todas ({subjectsList.length})
            </button>
            <button
              onClick={() => setActiveSubjectFilter('juridico')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeSubjectFilter === 'juridico'
                  ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Jurídico
            </button>
            <button
              onClick={() => setActiveSubjectFilter('exatas')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeSubjectFilter === 'exatas'
                  ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Exatas & Dados
            </button>
            <button
              onClick={() => setActiveSubjectFilter('geral')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeSubjectFilter === 'geral'
                  ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Gerais
            </button>
          </div>
        </div>

        {/* Grid de Cards de Disciplinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSubjects.map((subj, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all space-y-3 shadow-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {subj.name}
                  </div>
                  <div className="font-mono text-xs text-[var(--text-muted)]">
                    Peso Oficial: <strong className="text-[var(--accent-primary)]">{subj.weight}</strong> • {subj.totalQuestions} questões resolvidas
                  </div>
                </div>
                <CarimboStatus status={subj.status} label={subj.statusLabel} />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)]">ÍNDICE DE DOMÍNIO:</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {subj.correctPercentage}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-500"
                    style={{ width: `${Math.max(4, subj.correctPercentage)}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() => handleStudySubject(subj.name)}
                  className="text-[var(--accent-primary)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Estudar Conteúdo ➔</span>
                </button>
                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('simulados')}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Treinar Questões</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Diretriz de Pareto 80/20 & Notas de Corte Históricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Cut Score Card */}
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
            <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
              Notas de Corte Históricas
            </h3>
            <span className="font-mono text-[11px] text-[var(--text-muted)] font-bold">[ HISTÓRICO OFICIAL ]</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Pontuação líquida mínima necessária para convocação nas últimas edições do concurso ({currentCareer.name.split('—')[0]}):
          </p>

          <div className="space-y-2.5 pt-1 font-mono">
            {historicalCuts.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--text-primary)]">Edição {item.year}</span>
                <span className="text-[var(--accent-primary)] font-bold">{item.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Recommendation Card */}
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
            <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
              Diretriz de Eficiência Pareto 80/20
            </h3>
            <CarimboStatus status="homologado" label="MÉTODO TÁTICO" />
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            O princípio de Pareto comprova que <strong className="text-[var(--text-primary)]">20% dos tópicos do edital concentram 80% das questões</strong> cobradas pela banca <strong className="text-[var(--text-primary)]">{currentCareer.banca}</strong>. Priorize a fixação dos temas de alta incidência antes de estudar minúcias periféricas de baixo retorno.
          </p>

          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1 font-mono">
            <span className="font-bold text-[var(--text-primary)]">META TÁTICA:</span> Atingir 85%+ de acerto nos tópicos com peso superior a 2.0x.
          </div>
        </div>
      </div>

      {/* 3. Tópicos de Maior Retorno (Top Incidentes) */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
            Tópicos de Maior Relevância ({currentCareer.name.split('—')[0]})
          </h3>
          <span className="font-mono text-xs text-[var(--accent-primary)] font-bold">
            TOP {topTopics.length} PRIORITÁRIOS
          </span>
        </div>

        <div className="space-y-2.5">
          {topTopics.map((topic, idx) => (
            <div 
              key={idx} 
              className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {idx + 1}. {topic.subject}
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  {topic.topic}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                <CarimboStatus status={topic.status} label={topic.label} />
                <span className="font-bold text-[var(--accent-primary)]">
                  {topic.weight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
