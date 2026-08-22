import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, Button, CarimboStatus, ProgressBar, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { api } from '../../api/client';
import { useToast } from '../../components/Toast';
import { 
  Timer, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  PenTool, 
  Grid, 
  Award, 
  Clock, 
  Sparkles,
  RotateCcw,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronRight,
  Flame,
  Zap,
  HelpCircle,
  Bookmark
} from 'lucide-react';

interface SimuladosPageProps {
  careerId: string;
}

export type SimuladoModo = 'materia' | 'treino_rapido' | 'vulnerabilidades' | 'dia_d';

interface QuestionItem {
  id: number;
  subject: string;
  topic?: string;
  banca?: string;
  question_text?: string;
  question?: string;
  options: any;
  correct_index?: number;
  answer?: string;
  explanation?: string;
}

// Componente isolado para o display de timer ao vivo
const ExamLiveTimerDisplay: React.FC<{
  modoProva: SimuladoModo;
  timeLimitMinutes?: number;
  onTick: (elapsed: number) => void;
  onTimeExpired: () => void;
}> = React.memo(({ modoProva, timeLimitMinutes, onTick, onTimeExpired }) => {
  const [seconds, setSeconds] = useState(0);
  const totalLimitSecs = (timeLimitMinutes || (modoProva === 'dia_d' ? 270 : 60)) * 60;
  const [remainingSecs, setRemainingSecs] = useState(totalLimitSecs);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        onTick(next);
        return next;
      });
      setRemainingSecs((prev) => {
        if (prev <= 1) {
          onTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [modoProva, timeLimitMinutes, onTick, onTimeExpired]);

  const format = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <span className="flex items-center gap-2">
      <span>TEMPO: {format(seconds)}</span>
      <span className="text-[var(--text-muted)] font-normal">|</span>
      <span className={remainingSecs < 300 ? 'text-[var(--accent-danger)] font-bold animate-pulse' : 'text-[var(--accent-warning)]'}>
        RESTANTE: {format(remainingSecs)}
      </span>
    </span>
  );
});

export const SimuladosPage: React.FC<SimuladosPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  const { success, error: toastError, info } = useToast();

  const [modoProva, setModoModo] = useState<SimuladoModo>('materia');
  const [examRunning, setExamRunning] = useState(false);
  const [loadingSimulado, setLoadingSimulado] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number | string }>({});
  const [finished, setFinished] = useState(false);
  const [activeSimuladoId, setActiveSimuladoId] = useState<number | null>(null);

  // Configurações do Simulado por Matéria
  const [selectedSubject, setSelectedSubject] = useState<string>(careerSubjects[0]?.name || 'Direito Tributário');
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(20);
  const [selectedStudySource, setSelectedStudySource] = useState<'all' | 'ai_only' | 'pdf_only' | 'full_edital' | 'errors_only'>('all');

  // Reconhecimento do que foi estudado segmentado
  const [studiedScope, setStudiedScope] = useState<string[]>([]);
  const [pdfSubjects, setPdfSubjects] = useState<string[]>([]);
  const [aiSubjects, setAiSubjects] = useState<string[]>([]);
  const [manualSubjects, setManualSubjects] = useState<string[]>([]);
  const [topicsBySubject, setTopicsBySubject] = useState<Record<string, { pdf: string[]; ai: string[]; manual: string[]; all: string[] }>>({});
  const [scopeCounts, setScopeCounts] = useState<{ pdfCount: number; aiCount: number; manualCount: number; total: number }>({
    pdfCount: 0,
    aiCount: 0,
    manualCount: 0,
    total: 0
  });
  const [studiedScopeCount, setStudiedScopeCount] = useState<number>(0);

  // Lista dinâmica de questões do exame ativo
  const [questionsList, setQuestionsList] = useState<QuestionItem[]>([]);
  const [examResult, setExamResult] = useState<any>(null);

  // Final Time recorded upon exam completion
  const [finalTimeSeconds, setFinalTimeSeconds] = useState(0);
  const elapsedSecondsRef = useRef(0);

  // Sub-abas durante o Dia D
  const [diaDTab, setDiaDTab] = useState<'questoes' | 'cartao_resposta' | 'redacao'>('questoes');
  const [textoRedacao, setTextoRedacao] = useState('');

  // Carrega escopo estudado ao montar ou mudar de carreira
  useEffect(() => {
    loadStudiedScope();
  }, [careerId]);

  // Reseta ao trocar de carreira
  useEffect(() => {
    setExamRunning(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFinished(false);
    setFinalTimeSeconds(0);
    elapsedSecondsRef.current = 0;
    setTextoRedacao('');
    setActiveSimuladoId(null);
    setExamResult(null);
    if (careerSubjects.length > 0) {
      setSelectedSubject(careerSubjects[0].name);
    }
  }, [careerId]);

  const loadStudiedScope = async () => {
    try {
      const res = await api.getStudiedScope(careerId);
      if (res) {
        if (res.studiedSubjects) setStudiedScope(res.studiedSubjects);
        if (res.pdfSubjects) setPdfSubjects(res.pdfSubjects);
        if (res.aiSubjects) setAiSubjects(res.aiSubjects);
        if (res.manualSubjects) setManualSubjects(res.manualSubjects);
        if (res.topicsBySubject) setTopicsBySubject(res.topicsBySubject);
        if (res.counts) setScopeCounts(res.counts);
        setStudiedScopeCount(res.studiedMaterialsCount || res.studiedSubjects?.length || 0);
      }
    } catch (err) {
      console.warn('Erro ao carregar escopo de estudos:', err);
    }
  };

  const isSubjectStudied = (subjName: string) => {
    const lower = subjName.toLowerCase().trim();
    return studiedScope.some(s => s.toLowerCase().trim().includes(lower) || lower.includes(s.toLowerCase().trim()));
  };

  const isSubjectInSource = (subjName: string, source: 'all' | 'ai_only' | 'pdf_only') => {
    const lower = subjName.toLowerCase().trim();
    if (source === 'pdf_only') {
      return pdfSubjects.some(s => s.toLowerCase().trim().includes(lower) || lower.includes(s.toLowerCase().trim()));
    }
    if (source === 'ai_only') {
      return aiSubjects.some(s => s.toLowerCase().trim().includes(lower) || lower.includes(s.toLowerCase().trim()));
    }
    return studiedScope.some(s => s.toLowerCase().trim().includes(lower) || lower.includes(s.toLowerCase().trim()));
  };

  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Iniciar Simulado Dinâmico (via Backend)
  const handleStartExam = async (mode: SimuladoModo) => {
    setModoModo(mode);
    setLoadingSimulado(true);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setFinished(false);
    setExamResult(null);
    elapsedSecondsRef.current = 0;

    try {
      if (mode === 'materia') {
        const isStudiedInSelectedSource = 
          selectedStudySource === 'pdf_only' ? isSubjectInSource(selectedSubject, 'pdf_only') :
          selectedStudySource === 'ai_only' ? isSubjectInSource(selectedSubject, 'ai_only') :
          selectedStudySource === 'all' ? isSubjectStudied(selectedSubject) : true;

        if (!isStudiedInSelectedSource && selectedStudySource !== 'full_edital' && selectedStudySource !== 'errors_only') {
          info(
            '💡 Dica de Estudo',
            `Não encontramos registros de ${selectedSubject} na fonte selecionada (${selectedStudySource === 'pdf_only' ? 'Meus PDFs' : selectedStudySource === 'ai_only' ? 'Elaborações da IA' : 'Estudos'}). O simulado adaptará questões padrão ${currentCareer.banca || 'Oficial'}.`
          );
        }

        const res = await api.createSubjectSimulado({
          subject: selectedSubject,
          questionCount: selectedQuestionCount,
          banca: currentCareer.banca || 'FGV',
          studySource: selectedStudySource,
          scopeMode: selectedStudySource === 'errors_only' ? 'errors_only' : selectedStudySource === 'full_edital' ? 'full_edital' : 'studied_only',
          careerId
        });

        if (res && res.simuladoId) {
          setActiveSimuladoId(res.simuladoId);
          const fullSim = await api.getSimuladoById(res.simuladoId);
          if (fullSim && fullSim.questions && fullSim.questions.length > 0) {
            setQuestionsList(fullSim.questions);
            setExamRunning(true);
            success(
              '🎯 Simulado Iniciado!',
              `Carregadas ${fullSim.questions.length} questões de ${selectedSubject} no padrão ${res.banca}.`
            );
          } else {
            throw new Error('Nenhuma questão retornada para este simulado.');
          }
        }
      } else if (mode === 'vulnerabilidades') {
        const res = await api.request<any>('/simulados/create-from-errors', {
          method: 'POST',
          body: JSON.stringify({ careerId, limit: 15 })
        });
        if (res && res.simuladoId) {
          setActiveSimuladoId(res.simuladoId);
          const fullSim = await api.getSimuladoById(res.simuladoId);
          setQuestionsList(fullSim.questions || []);
          setExamRunning(true);
          success('🛡️ Re-treino Iniciado!', `Simulado gerado com ${fullSim.questions.length} questões do seu Caderno de Erros.`);
        }
      } else if (mode === 'dia_d') {
        const res = await api.createSimulado(careerId, 140);
        if (res && (res as any).id) {
          const simId = (res as any).id;
          setActiveSimuladoId(simId);
          const fullSim = await api.getSimuladoById(simId);
          setQuestionsList(fullSim.questions || []);
          setExamRunning(true);
          success('🏛️ Dia D Iniciado!', 'Simulação oficial iniciada com 140 questões e 4h30 de prova.');
        } else {
          setQuestionsList(buildFallbackQuestions());
          setExamRunning(true);
        }
      } else {
        const res = await api.createSimulado(careerId, 10);
        if (res && (res as any).id) {
          const simId = (res as any).id;
          setActiveSimuladoId(simId);
          const fullSim = await api.getSimuladoById(simId);
          setQuestionsList(fullSim.questions || []);
          setExamRunning(true);
        } else {
          setQuestionsList(buildFallbackQuestions());
          setExamRunning(true);
        }
      }
    } catch (err: any) {
      console.warn('Erro ao criar simulado no backend, usando acervo local:', err.message);
      setQuestionsList(buildFallbackQuestions());
      setExamRunning(true);
      toastError('Aviso: Simulado gerado a partir do acervo local da carreira.');
    } finally {
      setLoadingSimulado(false);
    }
  };

  const buildFallbackQuestions = () => {
    return careerSubjects.map((subj, idx) => {
      const lesson = getLessonContent(subj.name);
      return {
        id: idx + 1,
        subject: subj.name,
        banca: currentCareer.banca,
        question_text: lesson.question.question,
        options: lesson.question.options,
        correct_index: ['A', 'B', 'C', 'D', 'E'].indexOf(lesson.question.answer),
        answer: lesson.question.answer,
        explanation: lesson.question.explanation
      };
    });
  };

  const handleSelectAnswer = (qIndex: number, letterOrIdx: string | number) => {
    if (finished) return;
    setAnswers(prev => ({
      ...prev,
      [qIndex]: letterOrIdx
    }));
  };

  const handleFinishExam = useCallback(async () => {
    setFinalTimeSeconds(elapsedSecondsRef.current);
    setFinished(true);

    if (activeSimuladoId) {
      try {
        const formattedAnswers: { [key: number]: number } = {};
        questionsList.forEach((q, idx) => {
          const raw = answers[idx];
          if (raw !== undefined && raw !== null) {
            if (typeof raw === 'number') {
              formattedAnswers[q.id] = raw;
            } else {
              const letterIndex = ['A', 'B', 'C', 'D', 'E'].indexOf(String(raw).toUpperCase());
              formattedAnswers[q.id] = letterIndex !== -1 ? letterIndex : 0;
            }
          }
        });

        const res = await api.finishSimulado(activeSimuladoId, {
          answers: formattedAnswers,
          timeSpentSeconds: elapsedSecondsRef.current
        });
        setExamResult(res);
        success('🏆 Simulado Concluído!', `Desempenho: ${res.accuracyPct || 0}% (${res.acertos || 0}/${res.total || questionsList.length}).`);
      } catch (err: any) {
        console.error('Erro ao finalizar simulado no backend:', err);
      }
    }
  }, [activeSimuladoId, answers, questionsList, success]);

  const handleTimerTick = useCallback((elapsed: number) => {
    elapsedSecondsRef.current = elapsed;
  }, []);

  const totalQuestions = questionsList.length;
  const answeredCount = Object.keys(answers).length;
  let correctCount = 0;

  const activeQ = questionsList[currentQuestionIndex] || questionsList[0] || {
    id: 1,
    subject: selectedSubject,
    banca: currentCareer.banca,
    question_text: "Aguardando questões...",
    options: { A: "Opção A", B: "Opção B", C: "Opção C", D: "Opção D", E: "Opção E" },
    correct_index: 0,
    answer: "A",
    explanation: ""
  };

  const getNormalizedOptions = (q: QuestionItem): { [key: string]: string } => {
    if (!q || !q.options) return { A: "Opção A", B: "Opção B", C: "Opção C", D: "Opção D", E: "Opção E" };
    if (typeof q.options === 'string') {
      try {
        const parsed = JSON.parse(q.options);
        if (Array.isArray(parsed)) {
          const obj: { [key: string]: string } = {};
          parsed.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            obj[letter] = opt.replace(/^[A-E]\)\s*/, '');
          });
          return obj;
        }
        return parsed;
      } catch (e) {
        return { A: q.options };
      }
    }
    if (Array.isArray(q.options)) {
      const obj: { [key: string]: string } = {};
      q.options.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        obj[letter] = typeof opt === 'string' ? opt.replace(/^[A-E]\)\s*/, '') : String(opt);
      });
      return obj;
    }
    return q.options;
  };

  const getCorrectLetter = (q: QuestionItem): string => {
    if (q.answer) return q.answer;
    if (q.correct_index !== undefined && q.correct_index !== null) {
      return String.fromCharCode(65 + q.correct_index);
    }
    return 'A';
  };

  if (finished) {
    questionsList.forEach((q, idx) => {
      const userAns = answers[idx];
      const correctLetter = getCorrectLetter(q);
      const isCorrect = typeof userAns === 'number' 
        ? userAns === (q.correct_index !== undefined ? q.correct_index : 0)
        : String(userAns).toUpperCase() === correctLetter.toUpperCase();

      if (isCorrect) correctCount += 1;
    });
  }

  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const wordCount = textoRedacao.trim() ? textoRedacao.trim().split(/\s+/).length : 0;
  const lineCount = textoRedacao.split('\n').filter(l => l.trim().length > 0).length || (wordCount > 0 ? Math.ceil(wordCount / 10) : 0);

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Simulados & Treino Real de Prova
            </h1>
            <CarimboStatus status="homologado" label={`PADRÃO OFICIAL ${currentCareer.banca}`} />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Simulados por Matéria (20 a 50 questões), Filtro Sincronizado e Dia D para {currentCareer.name}
          </p>
        </div>

        {examRunning && !finished && (
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-center gap-2 shadow-sm">
              <span className="text-[var(--accent-danger)]">●</span>
              <ExamLiveTimerDisplay
                modoProva={modoProva}
                timeLimitMinutes={modoProva === 'materia' ? selectedQuestionCount * 2 : undefined}
                onTick={handleTimerTick}
                onTimeExpired={handleFinishExam}
              />
            </div>
            <Button
              variant="brand"
              size="sm"
              onClick={handleFinishExam}
              className="font-sans text-xs font-bold shadow-sm"
            >
              Entregar Simulado
            </Button>
          </div>
        )}
      </div>

      {/* Tela Pré-Prova (Seleção de Modo e Simulado por Matéria) */}
      {!examRunning && !finished && (
        <div className="space-y-6">
          
          {/* DESTAQUE PRINCIPAL: SIMULADO POR MATÉRIA (20 A 50 QUESTÕES) */}
          <Card className="p-6 sm:p-7 bg-[var(--bg-surface)] border-2 border-[var(--accent-primary)] rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-[var(--accent-primary)]" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
                      NOVO • DRILL INTENSIVO
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--accent-warning)]">
                      🎯 BANCA {currentCareer.banca}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                    Simulado Específico por Disciplina (20 a 50 Questões)
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                    Treine com volume concentrado em uma única matéria com enunciados longos, casos práticos e pegadinhas reais no estilo da banca {currentCareer.banca}.
                  </p>
                </div>
              </div>

              {/* Controles de Configuração do Simulado por Matéria */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* 1. Seletor de Disciplina */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold text-[var(--text-primary)] flex items-center justify-between">
                    <span>1. Escolha a Disciplina:</span>
                    {isSubjectStudied(selectedSubject) && (
                      <span className="text-xs text-[var(--accent-success)] flex items-center gap-1 font-mono font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Estudada
                      </span>
                    )}
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-medium outline-none focus:border-[var(--accent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] shadow-xs"
                  >
                    {careerSubjects.map((s) => {
                      const studied = isSubjectStudied(s.name);
                      return (
                        <option key={s.name} value={s.name}>
                          {studied ? '✅ ' : '⏳ '} {s.name} ({s.weight})
                        </option>
                      );
                    })}
                  </select>
                  <span className="text-xs text-[var(--text-muted)] block">
                    {careerSubjects.find(s => s.name === selectedSubject)?.weight || 'Peso de Prova'}
                  </span>
                </div>

                {/* 2. Quantidade de Questões */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold text-[var(--text-primary)] block">
                    2. Volume de Questões:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { count: 20, time: '40 min' },
                      { count: 30, time: '60 min' },
                      { count: 50, time: '100 min' }
                    ].map((qOpt) => (
                      <button
                        key={qOpt.count}
                        type="button"
                        onClick={() => setSelectedQuestionCount(qOpt.count)}
                        className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                          selectedQuestionCount === qOpt.count
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm'
                            : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                        }`}
                      >
                        <div className="font-display font-bold text-sm">{qOpt.count}Q</div>
                        <div className="text-[10px] font-normal opacity-80">{qOpt.time}</div>
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-[var(--text-muted)] block">
                    Tempo recomendado: 2 min por questão.
                  </span>
                </div>

                {/* 3. Filtro e Fonte de Sincronização */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>3. Fonte da Sincronização:</span>
                  </label>
                  <div className="space-y-1.5">
                    <label className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer text-xs ${
                      selectedStudySource === 'all'
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}>
                      <input
                        type="radio"
                        name="studySource"
                        checked={selectedStudySource === 'all'}
                        onChange={() => setSelectedStudySource('all')}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span className="font-medium">
                        🌐 <strong>Todas as Fontes:</strong> PDFs + IA + Lançamentos
                      </span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer text-xs ${
                      selectedStudySource === 'ai_only'
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}>
                      <input
                        type="radio"
                        name="studySource"
                        checked={selectedStudySource === 'ai_only'}
                        onChange={() => setSelectedStudySource('ai_only')}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span className="font-medium">
                        🤖 <strong>Apenas Elaborações da IA:</strong> Módulos & Aulas IA
                      </span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer text-xs ${
                      selectedStudySource === 'pdf_only'
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}>
                      <input
                        type="radio"
                        name="studySource"
                        checked={selectedStudySource === 'pdf_only'}
                        onChange={() => setSelectedStudySource('pdf_only')}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span className="font-medium">
                        📄 <strong>Apenas Meus PDFs:</strong> Arquivos que subi
                      </span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer text-xs ${
                      selectedStudySource === 'full_edital'
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}>
                      <input
                        type="radio"
                        name="studySource"
                        checked={selectedStudySource === 'full_edital'}
                        onChange={() => setSelectedStudySource('full_edital')}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span className="font-medium">
                        🏛️ <strong>Edital Completo:</strong> Todos os tópicos da banca
                      </span>
                    </label>

                    <label className={`flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer text-xs ${
                      selectedStudySource === 'errors_only'
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}>
                      <input
                        type="radio"
                        name="studySource"
                        checked={selectedStudySource === 'errors_only'}
                        onChange={() => setSelectedStudySource('errors_only')}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span className="font-medium">
                        ⚠️ <strong>Caderno de Erros:</strong> Apenas o que errei
                      </span>
                    </label>
                  </div>
                </div>

              </div>

              {/* PAINEL DE RECONHECIMENTO DA MATÉRIA SELECIONADA */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    Status em {selectedSubject}:
                  </span>
                  <span className={`px-2 py-0.5 rounded-lg border font-mono ${
                    isSubjectInSource(selectedSubject, 'pdf_only')
                      ? 'bg-[var(--accent-emerald-bg)] border-[var(--accent-success)]/30 text-[var(--accent-success)] font-bold'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}>
                    📄 {topicsBySubject[selectedSubject]?.pdf.length || 0} PDFs
                  </span>
                  <span className={`px-2 py-0.5 rounded-lg border font-mono ${
                    isSubjectInSource(selectedSubject, 'ai_only')
                      ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)]/30 text-[var(--accent-primary)] font-bold'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}>
                    🤖 {topicsBySubject[selectedSubject]?.ai.length || 0} Aulas IA
                  </span>
                  <span className={`px-2 py-0.5 rounded-lg border font-mono ${
                    manualSubjects.includes(selectedSubject)
                      ? 'bg-[var(--accent-amber-bg)] border-[var(--accent-warning)]/30 text-[var(--accent-warning)] font-bold'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}>
                    ⏱️ {topicsBySubject[selectedSubject]?.manual.length || 0} Retroativos
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[var(--text-muted)]">
                  Banca Ativa: <strong className="text-[var(--accent-warning)]">{currentCareer.banca}</strong>
                </div>
              </div>

              {/* Botão de Iniciar Simulado por Matéria */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
                <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>
                    {selectedStudySource === 'pdf_only' && !isSubjectInSource(selectedSubject, 'pdf_only')
                      ? '💡 Nenhum PDF desta matéria encontrado. O simulado adaptará o acervo oficial.'
                      : selectedStudySource === 'ai_only' && !isSubjectInSource(selectedSubject, 'ai_only')
                      ? '💡 Módulo de IA em elaboração. As questões cobrirão o edital oficial.'
                      : `Sincronização ativa: foco em ${selectedSubject} padrão ${currentCareer.banca}.`}
                  </span>
                </div>

                <Button
                  variant="brand"
                  size="md"
                  onClick={() => handleStartExam('materia')}
                  disabled={loadingSimulado}
                  className="font-sans text-xs font-bold px-6 py-3 shadow-md flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>{loadingSimulado ? 'Preparando Questões Oficiais...' : `Iniciar Simulado de ${selectedSubject} (${selectedQuestionCount}Q)`}</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* DEMAIS MODALIDADES DE SIMULADO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch pt-2">
            
            {/* Modo 1: Treino Rápido */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'treino_rapido' 
                  ? 'border-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-lg ring-1 ring-[var(--accent-primary)]/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-primary)]/50 opacity-90'
              }`}
              onClick={() => setModoModo('treino_rapido')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="brand">MODO ÁGIL • 10Q</Badge>
                  <div className="p-2 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Treino Rápido Geral
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    10 questões mistas de todas as disciplinas do edital para aquecimento ágil de 15 minutos com gabarito imediato.
                  </p>
                </div>
              </div>
              
              <div className="pt-6 mt-auto">
                <Button 
                  variant="outline"
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartExam('treino_rapido');
                  }}
                  className="font-sans text-xs font-bold min-h-[44px]"
                >
                  Iniciar Treino Rápido (10Q)
                </Button>
              </div>
            </Card>

            {/* Modo 2: Radar de Vulnerabilidades */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'vulnerabilidades' 
                  ? 'border-[var(--accent-danger)] bg-[var(--bg-surface)] shadow-lg ring-1 ring-[var(--accent-danger)]/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-danger)]/50 opacity-90'
              }`}
              onClick={() => setModoModo('vulnerabilidades')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="danger">CADERNO DE ERROS</Badge>
                  <div className="p-2 rounded-xl bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)]">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Radar de Vulnerabilidades
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    Re-treine exclusivamente as questões que você já errou em simulados anteriores para blindar pontos fracos.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <Button 
                  variant="outline"
                  fullWidth
                  className="border-[var(--accent-danger)] text-[var(--accent-danger)] hover:bg-[var(--color-status-danger-bg)] font-sans text-xs font-bold min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartExam('vulnerabilidades');
                  }}
                >
                  Re-treinar Meus Erros
                </Button>
              </div>
            </Card>

            {/* Modo 3: Dia D de Prova */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'dia_d' 
                  ? 'border-[var(--accent-warning)] bg-[var(--bg-surface)] shadow-lg ring-1 ring-[var(--accent-warning)]/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-warning)]/50 opacity-90'
              }`}
              onClick={() => setModoModo('dia_d')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="warning">IMERSÃO TOTAL • 4H30</Badge>
                  <div className="p-2 rounded-xl bg-[var(--accent-amber-bg)] text-[var(--accent-warning)]">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Simulação Oficial "Dia D"
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    140 questões cronometradas, <strong>Cartão-Resposta Digital</strong> e <strong>Redação Oficial Discursiva</strong>.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <Button 
                  variant="outline"
                  fullWidth
                  className="border-[var(--accent-warning)] text-[var(--accent-warning)] hover:bg-[var(--accent-amber-bg)] font-sans text-xs font-bold min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartExam('dia_d');
                  }}
                >
                  Iniciar Simulado Dia D (140Q)
                </Button>
              </div>
            </Card>

          </div>
        </div>
      )}

      {/* EXAME EM ANDAMENTO */}
      {examRunning && !finished && (
        <div className="space-y-6">
          {/* Seletor de visualização do Dia D */}
          {modoProva === 'dia_d' && (
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDiaDTab('questoes')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'questoes' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>CADERNO DE QUESTÕES ({answeredCount}/{totalQuestions})</span>
                </button>

                <button
                  onClick={() => setDiaDTab('cartao_resposta')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'cartao_resposta' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>CARTÃO-RESPOSTA DIGITAL</span>
                </button>

                <button
                  onClick={() => setDiaDTab('redacao')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'redacao' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <PenTool className="w-4 h-4" />
                  <span>FOLHA DE REDAÇÃO {textoRedacao.trim() ? `(${wordCount} pal.)` : ''}</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent-warning)]">
                <AlertTriangle className="w-4 h-4" />
                <span>MODO SIMULAÇÃO OFICIAL DIA D</span>
              </div>
            </div>
          )}

          {/* VISÃO 1: CADERNO DE QUESTÕES */}
          {(modoProva !== 'dia_d' || diaDTab === 'questoes') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Question View (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] rounded-2xl">
                  
                  {/* Question Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                      QUESTÃO {currentQuestionIndex + 1} DE {totalQuestions} • {activeQ.subject}
                    </span>
                    <CarimboStatus status="homologado" label={`BANCA ${activeQ.banca || currentCareer.banca}`} />
                  </div>

                  {/* Question Text */}
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium whitespace-pre-line">
                    {activeQ.question_text || activeQ.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {Object.entries(getNormalizedOptions(activeQ)).map(([letter, text]) => {
                      const isSelected = answers[currentQuestionIndex] === letter || answers[currentQuestionIndex] === ['A', 'B', 'C', 'D', 'E'].indexOf(letter);

                      return (
                        <div
                          key={letter}
                          onClick={() => handleSelectAnswer(currentQuestionIndex, letter)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer select-none text-xs sm:text-sm flex items-start gap-3 min-h-[44px] ${
                            isSelected
                              ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] shadow-sm font-semibold'
                              : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                              isSelected
                                ? 'bg-[var(--accent-primary)] text-white'
                                : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]'
                            }`}
                          >
                            {letter}
                          </div>
                          <span className="leading-relaxed font-sans mt-0.5">{text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentQuestionIndex === 0}
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    >
                      &larr; Anterior
                    </Button>

                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {currentQuestionIndex + 1} de {totalQuestions}
                    </span>

                    <Button
                      variant="brand"
                      size="sm"
                      disabled={currentQuestionIndex === totalQuestions - 1}
                      onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    >
                      Próxima &rarr;
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar Navigation Matrix (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <Card className="p-6 space-y-4 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] rounded-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
                      MAPA DE QUESTÕES
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                      {answeredCount}/{totalQuestions} Respondidas
                    </span>
                  </div>

                  <ProgressBar value={totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0} />

                  <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                    {questionsList.map((_, idx) => {
                      const isAnswered = answers[idx] !== undefined && answers[idx] !== null;
                      const isCurrent = idx === currentQuestionIndex;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                            isCurrent
                              ? 'ring-2 ring-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--accent-primary)]'
                              : isAnswered
                              ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                              : 'bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* VISÃO 2: CARTÃO-RESPOSTA DIGITAL (FOLHA OFICIAL) */}
          {modoProva === 'dia_d' && diaDTab === 'cartao_resposta' && (
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-focus)] shadow-xl rounded-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Folha Oficial de Respostas (Cartão-Resposta)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Preencha as bolhas de cada questão com atenção antes do encerramento da prova
                  </p>
                </div>
                <Badge variant="brand">GABARITO DEFINITIVO</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {questionsList.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-primary)]">Item #{idx + 1}</span>
                      <span className="text-xs text-[var(--text-muted)] truncate max-w-[100px]">{q.subject}</span>
                    </div>
                    <div className="flex items-center justify-between gap-1 pt-1">
                      {['A', 'B', 'C', 'D', 'E'].map((letter) => {
                        const isMarked = answers[idx] === letter || answers[idx] === ['A', 'B', 'C', 'D', 'E'].indexOf(letter);
                        return (
                          <button
                            key={letter}
                            type="button"
                            onClick={() => handleSelectAnswer(idx, letter)}
                            className={`w-7 h-7 rounded-full font-mono text-xs font-bold transition-all border cursor-pointer ${
                              isMarked
                                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md scale-105'
                                : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-focus)]'
                            }`}
                          >
                            {letter}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* VISÃO 3: FOLHA DE REDAÇÃO DISCURSIVA */}
          {modoProva === 'dia_d' && diaDTab === 'redacao' && (
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-focus)] shadow-xl rounded-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Folha Oficial da Prova Discursiva
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Redija seu texto dissertativo-argumentativo em norma-padrão (20 a 30 linhas)
                  </p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)]">
                  <span>{wordCount} palavras</span>
                  <span>•</span>
                  <span>~{lineCount} linhas</span>
                </div>
              </div>

              <textarea
                value={textoRedacao}
                onChange={(e) => setTextoRedacao(e.target.value)}
                placeholder="Rascunhe e passe a limpo sua redação oficial aqui..."
                rows={16}
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm font-sans text-[var(--text-primary)] leading-relaxed outline-none focus:border-[var(--border-focus)] focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] resize-none"
              />
            </Card>
          )}
        </div>
      )}

      {/* RESULTADO OFICIAL COM GABARITO COMENTADO */}
      {finished && (
        <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] rounded-3xl animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                BOLETIM OFICIAL HOMOLOGADO
              </span>
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Resultado do Simulado {modoProva === 'materia' ? `• ${selectedSubject}` : ''}
              </h2>
            </div>
            <CarimboStatus
              status={scorePct >= 70 ? "homologado" : "vulneravel"}
              label={scorePct >= 70 ? "HOMOLOGADO NO CORTE" : "ABAIXO DO CORTE"}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-xs">Taxa de Acerto</span>
              <span className="font-bold text-[var(--text-primary)] text-lg">{scorePct}%</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-xs">Itens Corretos</span>
              <span className="font-bold text-[var(--accent-success)] text-lg">{correctCount} / {totalQuestions}</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-xs">Tempo Total</span>
              <span className="font-bold text-[var(--text-primary)] text-lg">{formatTimer(finalTimeSeconds)}</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-xs">XP Conquistado</span>
              <span className="font-bold text-[var(--accent-primary)] text-lg">+{correctCount * 15 + (textoRedacao.trim() ? 50 : 0)} XP</span>
            </div>
          </div>

          {textoRedacao.trim() && (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[var(--text-primary)]">📝 REDAÇÃO ENTREGUE</span>
                <Badge variant="success">{wordCount} palavras • ~{lineCount} linhas</Badge>
              </div>
              <p className="text-xs text-[var(--text-secondary)] italic line-clamp-3">
                "{textoRedacao}"
              </p>
            </div>
          )}

          {/* Detailed Question Review */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Gabarito Comentado e Fundamentação Oficial ({currentCareer.banca})
              </h3>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {correctCount} de {totalQuestions} certas
              </span>
            </div>

            <div className="space-y-3">
              {questionsList.map((q, idx) => {
                const userAns = answers[idx];
                const correctLetter = getCorrectLetter(q);
                const userAnsLetter = typeof userAns === 'number' ? String.fromCharCode(65 + userAns) : (userAns ? String(userAns) : null);
                const isCorrect = userAnsLetter === correctLetter;

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3 text-xs"
                  >
                    <div className="flex items-center justify-between font-mono flex-wrap gap-2">
                      <span className="font-bold text-[var(--text-primary)]">
                        Item #{idx + 1} • {q.subject} {q.topic ? `(${q.topic})` : ''}
                      </span>
                      <CarimboStatus
                        status={isCorrect ? "homologado" : "vulneravel"}
                        label={isCorrect ? "ACERTOU" : "ERROU"}
                      />
                    </div>

                    <p className="text-[var(--text-primary)] font-medium leading-relaxed whitespace-pre-line">
                      {q.question_text || q.question}
                    </p>

                    <div className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
                      Sua resposta: <strong className={isCorrect ? "text-[var(--accent-success)]" : "text-[var(--accent-danger)]"}>{userAnsLetter || 'Em branco'}</strong> • Gabarito Oficial: <strong className="text-[var(--accent-success)]">{correctLetter}</strong>
                    </div>

                    {q.explanation && (
                      <div className="p-3.5 rounded-xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/20 text-xs text-[var(--text-primary)] leading-relaxed space-y-1">
                        <div className="font-bold text-[var(--accent-primary)] flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Fundamentação & Comentário do Gabarito:</span>
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Questões com erro foram catalogadas para retreino no seu Caderno de Erros.
            </span>
            <Button
              variant="brand"
              onClick={() => {
                setExamRunning(false);
                setFinished(false);
                setAnswers({});
                setCurrentQuestionIndex(0);
                setTextoRedacao('');
                setActiveSimuladoId(null);
                setExamResult(null);
              }}
              className="font-sans text-xs font-bold"
            >
              Novo Simulado
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
