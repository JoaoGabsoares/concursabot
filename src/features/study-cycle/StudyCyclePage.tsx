import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { UserProfile, ActiveTab, DailyMission, StudyCycle, StudyCycleBlock, CycleModelType, CycleModelOption } from '../../types';
import { api } from '../../api/client';
import { getCareerById } from '../../utils/careers';
import { CarimboStatus } from '../../components/UIPrimitives';
import { 
  RotateCw, 
  CheckCircle2, 
  Play, 
  Settings2, 
  Calendar, 
  Clock, 
  Zap, 
  Flame, 
  Layers, 
  ChevronRight, 
  Sparkles, 
  Award, 
  BookOpen, 
  Target, 
  TrendingUp, 
  AlertCircle,
  Plus,
  RefreshCw,
  Sliders,
  Check,
  X
} from 'lucide-react';

interface StudyCyclePageProps {
  user: UserProfile | null;
  careerId: string;
  onNavigate: (tab: ActiveTab) => void;
  onStartStudy?: (target?: DailyMission | string) => void;
}

export const StudyCyclePage: React.FC<StudyCyclePageProps> = ({
  user,
  careerId,
  onNavigate,
  onStartStudy
}) => {
  const [cycle, setCycle] = useState<StudyCycle | null>(null);
  const [models, setModels] = useState<CycleModelOption[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const [showWizard, setShowWizard] = useState<boolean>(false);
  const [wizardStep, setWizardStep] = useState<number>(1);
  const wizardBodyRef = useRef<HTMLDivElement>(null);

  // Wizard state
  const [selectedModel, setSelectedModel] = useState<CycleModelType>('adaptativo');
  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const [blockDurationMinutes, setBlockDurationMinutes] = useState<number>(60);
  const [examDate, setExamDate] = useState<string>('');
  const [customDifficulties, setCustomDifficulties] = useState<Record<string, number>>({});
  const [previewCycle, setPreviewCycle] = useState<any>(null);

  // Auto-scroll modal body to top on step change or modal open
  useEffect(() => {
    if (showWizard && wizardBodyRef.current) {
      wizardBodyRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [showWizard, wizardStep]);

  const currentCareer = getCareerById(careerId);

  // Carrega ciclo ativo, modelos e matérias
  useEffect(() => {
    loadCycleData();
  }, [careerId, user?.id]);

  const loadCycleData = async () => {
    setLoading(true);
    try {
      const [activeCycleRes, modelsRes, subjectsRes] = await Promise.all([
        api.getActiveStudyCycle(user?.id || 'user_joao', careerId),
        api.getStudyCycleModels(),
        api.getStudyCycleSubjects(careerId)
      ]);

      setCycle(activeCycleRes);
      setModels(modelsRes || []);
      setSubjects(subjectsRes || []);

      // Inicializa dificuldades padrão (nível 2 = Médio)
      if (subjectsRes && subjectsRes.length > 0) {
        const initialDiffs: Record<string, number> = {};
        subjectsRes.forEach((s: any) => {
          initialDiffs[s.subject] = 2;
        });
        setCustomDifficulties(initialDiffs);
      }
    } catch (err) {
      console.error('Erro ao carregar dados do ciclo de estudos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvanceBlock = async (block: StudyCycleBlock) => {
    if (!cycle || !block.id) return;
    setActionLoading(true);
    try {
      const res = await api.advanceStudyCycleBlock(
        cycle.id,
        block.id,
        user?.id || 'user_joao',
        careerId
      );
      if (res.cycle) {
        setCycle(res.cycle);
      }
    } catch (err) {
      console.error('Erro ao avançar bloco do ciclo:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleStartBlockStudy = (subject: string) => {
    if (onStartStudy) {
      onStartStudy(subject);
    } else {
      onNavigate('study');
    }
  };

  const handleGeneratePreview = async () => {
    try {
      const res = await api.generateStudyCycle({
        userId: user?.id || 'user_joao',
        careerId,
        modelType: selectedModel,
        weeklyHours,
        blockDurationMinutes,
        examDate: examDate || null,
        customDifficulties,
        saveImmediately: false
      });
      setPreviewCycle(res);
      setWizardStep(4);
    } catch (err) {
      console.error('Erro ao gerar prévia do ciclo:', err);
    }
  };

  const handleSaveAndActivateCycle = async () => {
    setActionLoading(true);
    try {
      const newCycle = await api.generateStudyCycle({
        userId: user?.id || 'user_joao',
        careerId,
        modelType: selectedModel,
        weeklyHours,
        blockDurationMinutes,
        examDate: examDate || null,
        customDifficulties,
        saveImmediately: true
      });
      setCycle(newCycle);
      setShowWizard(false);
      setWizardStep(1);
    } catch (err) {
      console.error('Erro ao salvar ciclo:', err);
    } finally {
      setActionLoading(false);
    }
  };

  // Cores semânticas por grupo cognitivo
  const getCognitiveColor = (group: string) => {
    switch (group) {
      case 'exatas_dados':
        return {
          bg: 'bg-[var(--accent-primary-glow)]',
          text: 'text-[var(--accent-primary)]',
          border: 'border-[var(--accent-primary)]/30',
          dot: 'bg-[var(--accent-primary)]',
          label: 'Exatas & Dados'
        };
      case 'juridico':
        return {
          bg: 'bg-[var(--accent-purple-bg)]',
          text: 'text-[var(--accent-purple)]',
          border: 'border-[var(--accent-purple)]/30',
          dot: 'bg-[var(--accent-purple)]',
          label: 'Direito & Leis'
        };
      case 'humanas_linguagens':
      default:
        return {
          bg: 'bg-[var(--accent-emerald-bg)]',
          text: 'text-[var(--accent-success)]',
          border: 'border-[var(--accent-success)]/30',
          dot: 'bg-[var(--accent-success)]',
          label: 'Humanas & Linguagens'
        };
    }
  };

  const getDifficultyLabel = (level: number = 2) => {
    switch (level) {
      case 1: return { text: 'Fácil', color: 'text-[var(--accent-success)]' };
      case 2: return { text: 'Médio', color: 'text-[var(--accent-primary)]' };
      case 3: return { text: 'Difícil', color: 'text-[var(--accent-warning)]' };
      case 4: return { text: 'Crítico', color: 'text-[var(--accent-danger)]' };
      default: return { text: 'Médio', color: 'text-[var(--accent-primary)]' };
    }
  };

  const currentBlockIndex = cycle?.current_block_index || 0;
  const currentBlock = cycle?.blocks && cycle.blocks.length > 0 ? cycle.blocks[currentBlockIndex] : null;
  const totalBlocks = cycle?.blocks?.length || 0;
  const simulation = cycle?.settings?.simulation;

  return (
    <div className="space-y-8 animate-fade-in font-sans pb-16">
      
      {/* 1. Header Hero do Módulo */}
      <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary-glow)] rounded-full blur-3xl -z-10 opacity-30" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <CarimboStatus status="homologado" label="MÉTODO CIENTÍFICO" />
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                Interleaving Anti-Fadiga
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {currentCareer.name}
              </span>
            </div>

            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Ciclo de Estudos Inteligente
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Diga adeus a cronogramas rígidos por dia da semana que quebram com imprevistos. 
              O ciclo roda em esteira contínua e ponderada, alternando grupos neurais para evitar cansaço mental e cobrir 100% do edital.
            </p>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => { setShowWizard(true); setWizardStep(1); }}
              className="px-4 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-sans text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Sliders className="w-4 h-4" />
              <span>Configurar / Novo Ciclo</span>
            </button>

            <button
              onClick={loadCycleData}
              disabled={loading}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              title="Recarregar dados"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Global Cycle Summary Stats */}
        {cycle && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[var(--border-subtle)] text-xs">
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Carga da Volta</div>
              <div className="font-display font-bold text-lg text-[var(--text-primary)] mt-0.5">
                {(cycle.total_cycle_minutes / 60).toFixed(1)}h <span className="text-xs font-normal text-[var(--text-muted)]">líquidas</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Esteira de Blocos</div>
              <div className="font-display font-bold text-lg text-[var(--accent-primary)] mt-0.5">
                {currentBlockIndex + 1} <span className="text-xs font-normal text-[var(--text-muted)]">de {totalBlocks} blocos</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Voltas Concluídas</div>
              <div className="font-display font-bold text-lg text-[var(--accent-success)] mt-0.5">
                {cycle.completed_cycles_count} <span className="text-xs font-normal text-[var(--text-muted)]">voltas completas</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Modelo Ativo</div>
              <div className="font-bold text-sm text-[var(--text-primary)] mt-1 truncate">
                {cycle.model_type === 'adaptativo' ? '🎯 Adaptativo' : 
                 cycle.model_type === 'pareto_80_20' ? '⚡ Pareto 80/20' : 
                 cycle.model_type === 'pre_edital' ? '🧱 Base Pré-Edital' : 
                 cycle.model_type === 'data_prova' ? '⏱️ Sprint Prova' : '🚀 Micro-Sprints'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. Bloco da Vez (Card Destaque da Missão Imediata) */}
      {currentBlock ? (
        <div className="rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--accent-primary)]/40 p-6 sm:p-8 shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-[var(--accent-primary)] text-white shadow-xs">
                  BLOCO ATUAL #{currentBlockIndex + 1}
                </span>
                {(() => {
                  const cog = getCognitiveColor(currentBlock.cognitive_group);
                  return (
                    <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold ${cog.bg} ${cog.text} border ${cog.border}`}>
                      {cog.label}
                    </span>
                  );
                })()}
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Dificuldade: <strong className={getDifficultyLabel(currentBlock.difficulty_level).color}>{getDifficultyLabel(currentBlock.difficulty_level).text}</strong>
                </span>
              </div>

              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                  {currentBlock.subject}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Tempo previsto: <strong>{currentBlock.duration_minutes} minutos</strong> de imersão focada ({Math.round(currentBlock.duration_minutes * 0.65)}m Teoria/Doutrina + {Math.round(currentBlock.duration_minutes * 0.35)}m Questões).
                </p>
              </div>
            </div>

            {/* Ações do Bloco Atual */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => handleStartBlockStudy(currentBlock.subject)}
                className="px-6 py-3.5 rounded-xl bg-[var(--accent-success)] hover:opacity-90 text-white font-sans text-sm font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Iniciar na Sala de Estudos</span>
              </button>

              <button
                onClick={() => handleAdvanceBlock(currentBlock)}
                disabled={actionLoading}
                className="px-5 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-sans text-xs font-bold flex items-center justify-center gap-2 transition-all hover:border-[var(--accent-success)]/50 active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <CheckCircle2 className={`w-4 h-4 text-[var(--accent-success)] ${actionLoading ? 'animate-spin' : ''}`} />
                <span>Concluir Bloco (+20 XP)</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-3">
          <AlertCircle className="w-8 h-8 text-[var(--text-muted)] mx-auto" />
          <div className="font-display font-bold text-lg text-[var(--text-primary)]">
            Nenhum ciclo configurado ainda
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Gere seu primeiro ciclo inteligente em 1 minuto personalizado para o edital de {currentCareer.name}.
          </p>
          <button
            onClick={() => { setShowWizard(true); setWizardStep(1); }}
            className="px-5 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white font-sans text-xs font-bold inline-flex items-center gap-2 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Zap className="w-4 h-4" />
            <span>Criar Meu Ciclo Agora</span>
          </button>
        </div>
      )}

      {/* 3. Esteira Visual Sequencial de Blocos */}
      {cycle && cycle.blocks && cycle.blocks.length > 0 && (
        <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
            <div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Esteira de Rotação Contínua
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Sequência otimizada com interleaving. Ao finalizar o último bloco, o ciclo reinicia automaticamente a próxima volta.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] inline-block" />
                <span className="text-[var(--text-muted)]">Exatas/Dados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-purple)] inline-block" />
                <span className="text-[var(--text-muted)]">Jurídico</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-success)] inline-block" />
                <span className="text-[var(--text-muted)]">Humanas</span>
              </div>
            </div>
          </div>

          {/* Grid dos Blocos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {cycle.blocks.map((block, idx) => {
              const isCurrent = idx === currentBlockIndex;
              const isPast = idx < currentBlockIndex;
              const cog = getCognitiveColor(block.cognitive_group);
              const diff = getDifficultyLabel(block.difficulty_level);

              return (
                <div
                  key={block.id || idx}
                  className={`p-4 rounded-xl border transition-all relative flex flex-col justify-between gap-3 ${
                    isCurrent
                      ? 'bg-[var(--bg-elevated)] border-[var(--accent-primary)] shadow-md ring-2 ring-[var(--accent-primary)]/20'
                      : isPast
                      ? 'bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] opacity-75'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                      #{idx + 1}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${cog.bg} ${cog.text}`}>
                        {cog.label}
                      </span>
                      {isCurrent && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--accent-amber-bg)] text-[var(--accent-warning)]">
                          ATUAL
                        </span>
                      )}
                      {isPast && (
                        <span className="text-[var(--accent-success)]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="font-display font-bold text-sm text-[var(--text-primary)] line-clamp-2">
                      {block.subject}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mt-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {block.duration_minutes}m
                      </span>
                      <span>
                        Dif: <strong className={diff.color}>{diff.text}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Ação rápida no bloco */}
                  <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleStartBlockStudy(block.subject)}
                      className="text-[var(--accent-primary)] hover:underline font-sans font-bold flex items-center gap-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Estudar</span>
                    </button>

                    {isCurrent && (
                      <button
                        onClick={() => handleAdvanceBlock(block)}
                        disabled={actionLoading}
                        className="px-2 py-1 rounded bg-[var(--accent-emerald-bg)] hover:opacity-90 text-[var(--accent-success)] font-sans font-bold text-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        Concluir
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Simulador de Previsibilidade e Horizontes até a Prova */}
      {simulation && (
        <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
            <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
              Simulador de Cobertura e Previsibilidade
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <div className="text-xs font-mono text-[var(--text-muted)]">Duração de 1 Volta Completa</div>
              <div className="font-display font-bold text-xl text-[var(--text-primary)]">
                {simulation.daysPerLap} dias
              </div>
              <p className="text-xs font-sans text-[var(--text-secondary)]">
                Mantendo seu ritmo de <strong>{simulation.weeklyHours}h/semana</strong>, você roda todas as matérias do edital a cada {simulation.daysPerLap} dias.
              </p>
            </div>

            {simulation.daysUntilExam ? (
              <>
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-xs font-mono text-[var(--text-muted)]">Voltas até a Prova</div>
                  <div className="font-display font-bold text-xl text-[var(--accent-success)]">
                    {simulation.totalLapsUntilExam} voltas
                  </div>
                  <p className="text-xs font-sans text-[var(--text-secondary)]">
                    Em <strong>{simulation.daysUntilExam} dias</strong> até o exame, você passará {simulation.totalLapsUntilExam} vezes por todo o conteúdo!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-xs font-mono text-[var(--text-muted)]">Volume de Questões Estimado</div>
                  <div className="font-display font-bold text-xl text-[var(--accent-primary)]">
                    ~{simulation.projectedQuestions?.toLocaleString('pt-BR')} questões
                  </div>
                  <p className="text-xs font-sans text-[var(--text-secondary)]">
                    Projeção de <strong>{simulation.projectedTotalStudyHours}h líquidas</strong> dedicadas na esteira.
                  </p>
                </div>
              </>
            ) : (
              <div className="sm:col-span-2 p-4 rounded-xl bg-[var(--bg-elevated)] border border-dashed border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">Adicione a Data da Sua Prova</div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    Calcule o número exato de voltas e simulados até o dia do exame.
                  </div>
                </div>
                <button
                  onClick={() => { setShowWizard(true); setWizardStep(2); }}
                  className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-sans font-bold text-[var(--text-primary)] hover:border-[var(--accent-primary)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  Definir Data
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. MODAL WIZARD: GERADOR / RECALIBRADOR DE CICLO (Renderizado via Portal Frontal na Viewport) */}
      {showWizard && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fade-in"
          onClick={() => setShowWizard(false)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-3xl shadow-2xl flex flex-col overflow-hidden font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-elevated)]/50">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Configurador de Ciclo Inteligente
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold">
                  Etapa {wizardStep} de 4
                </span>
              </div>

              <button
                onClick={() => setShowWizard(false)}
                className="w-8 h-8 rounded-lg hover:bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body (Scrollable com reset automático de topo) */}
            <div ref={wizardBodyRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* ETAPA 1: SELEÇÃO DO MODELO */}
              {wizardStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                      1. Escolha o Modelo de Ciclo
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Cada modelo possui uma estratégia algorítmica desenhada para diferentes fases da preparação.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {models.map((m) => {
                      const isSelected = selectedModel === m.id;
                      return (
                        <div
                          key={m.id}
                          onClick={() => setSelectedModel(m.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                            isSelected
                              ? 'bg-[var(--bg-elevated)] border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 shadow-md'
                              : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                          }`}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="px-2 py-0.5 rounded text-xs font-sans font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)]">
                                {m.tag}
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                            </div>
                            <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                              {m.name}
                            </div>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {m.description}
                            </p>
                          </div>

                          <div className="text-xs font-sans text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
                            Ideal para: <strong>{m.idealFor}</strong>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ETAPA 2: CARGA HORÁRIA & DATA DA PROVA */}
              {wizardStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                      2. Carga Horária & Horizonte Temporal
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Defina sua disponibilidade real de estudos por semana. Seja realista para evitar frustração.
                    </p>
                  </div>

                  {/* Slider de Horas Semanais */}
                  <div className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[var(--text-primary)]">
                        Horas Disponíveis por Semana:
                      </span>
                      <span className="text-lg font-display font-bold text-[var(--accent-primary)]">
                        {weeklyHours}h <span className="text-xs font-normal text-[var(--text-muted)]">({(weeklyHours / 7).toFixed(1)}h/dia)</span>
                      </span>
                    </div>

                    <input
                      type="range"
                      min={5}
                      max={50}
                      step={1}
                      value={weeklyHours}
                      onChange={(e) => setWeeklyHours(Number(e.target.value))}
                      className="w-full accent-[var(--accent-primary)] cursor-pointer"
                    />

                    <div className="flex justify-between text-xs font-sans text-[var(--text-muted)]">
                      <span>5h/sem (Rotina Apertada)</span>
                      <span>20h/sem (Padrão)</span>
                      <span>50h/sem (Dedicação Total)</span>
                    </div>
                  </div>

                  {/* Duração do Bloco */}
                  <div className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                    <div className="text-xs font-sans font-bold text-[var(--text-primary)]">
                      Duração Padrão de Cada Bloco de Estudo:
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[45, 60, 75, 90].map((mins) => (
                        <button
                          key={mins}
                          onClick={() => setBlockDurationMinutes(mins)}
                          className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                            blockDurationMinutes === mins
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                              : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                          }`}
                        >
                          {mins} min
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Data da Prova */}
                  <div className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="text-xs font-sans font-bold text-[var(--text-primary)]">
                        Data Estimada da Prova (Opcional):
                      </span>
                    </div>
                    <input
                      type="date"
                      value={examDate}
                      onChange={(e) => setExamDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* ETAPA 3: MATRIZ DE DIFICULDADE POR MATÉRIA */}
              {wizardStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                      3. Diagnóstico Pessoal por Matéria
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Disciplinas marcadas como <strong>Crítico</strong> ou <strong>Difícil</strong> receberão multiplicadores adicionais de tempo no ciclo.
                    </p>
                  </div>

                  <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                    {subjects.map((sub: any) => {
                      const currentDiff = customDifficulties[sub.subject] || 2;
                      const cog = getCognitiveColor(sub.cognitiveGroup);

                      return (
                        <div
                          key={sub.subject}
                          className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${cog.dot}`} />
                              <span className="font-bold text-xs text-[var(--text-primary)]">
                                {sub.subject}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-[var(--text-muted)]">
                              Peso no Edital: {sub.weightPercentage}% • {sub.questions} questões
                            </div>
                          </div>

                          {/* Seletor de Dificuldade 1 a 4 */}
                          <div className="flex items-center gap-1">
                            {[
                              { lvl: 1, label: 'Fácil' },
                              { lvl: 2, label: 'Médio' },
                              { lvl: 3, label: 'Difícil' },
                              { lvl: 4, label: 'Crítico' }
                            ].map((d) => (
                              <button
                                key={d.lvl}
                                onClick={() => {
                                  setCustomDifficulties({
                                    ...customDifficulties,
                                    [sub.subject]: d.lvl
                                  });
                                }}
                                className={`px-2.5 py-1 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                                  currentDiff === d.lvl
                                    ? d.lvl === 4
                                      ? 'bg-[var(--accent-danger)] text-white'
                                      : d.lvl === 3
                                      ? 'bg-[var(--accent-warning)] text-white'
                                      : d.lvl === 1
                                      ? 'bg-[var(--accent-success)] text-white'
                                      : 'bg-[var(--accent-primary)] text-white'
                                    : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                                }`}
                              >
                                {d.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ETAPA 4: PRÉVIA E CONFIRMAÇÃO */}
              {wizardStep === 4 && previewCycle && (
                <div className="space-y-5">
                  <div>
                    <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                      4. Prévia do Seu Novo Ciclo
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Revise a distribuição gerada antes de ativar.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-xs font-mono text-[var(--text-muted)]">Total de Blocos</div>
                      <div className="font-display font-bold text-lg text-[var(--text-primary)]">
                        {previewCycle.blocks?.length || 0}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[var(--text-muted)]">Carga da Volta</div>
                      <div className="font-display font-bold text-lg text-[var(--accent-primary)]">
                        {((previewCycle.cycleData?.total_cycle_minutes || 0) / 60).toFixed(1)}h
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[var(--text-muted)]">Dias por Volta</div>
                      <div className="font-display font-bold text-lg text-[var(--accent-success)]">
                        {previewCycle.simulation?.daysPerLap || 7} dias
                      </div>
                    </div>
                  </div>

                  {/* Prévia da esteira */}
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {previewCycle.blocks?.map((b: any, idx: number) => {
                      const cog = getCognitiveColor(b.cognitive_group);
                      return (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                              #{idx + 1}
                            </span>
                            <span className="font-bold text-[var(--text-primary)]">
                              {b.subject}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${cog.bg} ${cog.text}`}>
                            {cog.label} • {b.duration_minutes}m
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-elevated)]/50">
              {wizardStep > 1 ? (
                <button
                  onClick={() => setWizardStep(wizardStep - 1)}
                  className="px-4 py-2 rounded-xl border border-[var(--border-subtle)] text-xs font-sans font-bold text-[var(--text-primary)] hover:bg-[var(--bg-surface)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  Voltar
                </button>
              ) : (
                <div />
              )}

              {wizardStep < 3 ? (
                <button
                  onClick={() => setWizardStep(wizardStep + 1)}
                  className="px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-sans font-bold flex items-center gap-1.5 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <span>Próximo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : wizardStep === 3 ? (
                <button
                  onClick={handleGeneratePreview}
                  className="px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-sans font-bold flex items-center gap-1.5 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Prévia do Ciclo</span>
                </button>
              ) : (
                <button
                  onClick={handleSaveAndActivateCycle}
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-xl bg-[var(--accent-success)] hover:opacity-90 text-white text-xs font-sans font-bold flex items-center gap-1.5 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  <Check className="w-4 h-4" />
                  <span>{actionLoading ? 'Salvando...' : 'Ativar Este Ciclo'}</span>
                </button>
              )}
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default StudyCyclePage;
