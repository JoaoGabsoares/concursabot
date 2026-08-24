import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Card, Button, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { PastStudyModal } from '../../components/PastStudyModal';
import { useToast } from '../../components/Toast';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { 
  getLessonContent, 
  getModulesForSubject, 
  getModulePage, 
  getModuleQuestionBatch, 
  ModulePage, 
  ModuleQuestion,
  TheoryDensityMode,
  EditalSubtopic
} from '../../utils/studyContent';
import { api } from '../../api/client';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  X, 
  BookOpen, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  ExternalLink,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileSearch,
  SlidersHorizontal,
  Flame,
  ArrowRight,
  Bookmark,
  Layers,
  Trash2,
  Settings,
  Calendar,
  Plus,
  Award,
  HelpCircle,
  RefreshCw,
  ListTree,
  Zap,
  BrainCircuit,
  BookMarked,
  GraduationCap,
  Compass,
  Printer
} from 'lucide-react';

interface StudyRoomPageProps {
  careerId: string;
  initialSubject?: string;
}

interface CustomMaterial {
  id: number;
  filename: string;
  filepath?: string;
  pdfUrl?: string;
  subject: string;
  lesson_number?: number;
  title: string;
  summary: string;
  content_text?: string;
  current_page?: number;
  total_pages?: number;
  theory_pages?: number;
  exercise_pages?: number;
  has_exercises?: boolean;
  tableOfContents?: Array<{ title: string; page: number | null }>;
  readingMetrics?: {
    totalWords: number;
    wordsPerPage: number;
    estimatedReadingMinutesTotal: number;
    estimatedPagesPerHour: number;
  };
  theory_completed?: boolean;
  questions_completed?: boolean;
  notes?: string;
  created_at?: string;
  caderno_enxuto?: string;
  career_id?: string;
  original_filename?: string;
  stored_filename?: string;
  page_count?: number;
}

interface ReadingPaceInfo {
  materialId: number;
  title: string;
  subject: string;
  currentPage: number;
  totalPages: number;
  theoryPages: number;
  pagesRemaining: number;
  progressPct: number;
  cadence: { readingMin: number; questionsMin: number; mode: string };
  estimatedMinutesRemaining: number;
  totalReadingMinutes: number;
  totalTheoryPages: number;
  pagesRead: number;
  averageMinutesPerPage: number;
  estimatedRemainingMinutes: number;
  estimatedRemainingHours: number;
  estimatedSessionsRemaining: number;
  resumeRecommendation: string;
}

type CadencePreset = '60_30' | '45_15' | '50_10' | '90_30' | 'custom';

const CADENCE_STORAGE_KEY = 'GABARITO_CADENCE_TIMER_STATE';
const CADENCE_PRESET_KEY = 'GABARITO_CADENCE_PRESET';
const CADENCE_CUSTOM_READING_KEY = 'GABARITO_CUSTOM_READING_MIN';
const CADENCE_CUSTOM_QUESTIONS_KEY = 'GABARITO_CUSTOM_QUESTIONS_MIN';

// Componente isolado para o Cronômetro de Cadência com Persistência em LocalStorage (Imune a F5 / Reload)
const CadenceTimerWidget: React.FC<{
  timerMode: 'leitura' | 'questoes' | 'livre';
  readingMinutes: number;
  questionsMinutes: number;
  cadencePreset: CadencePreset;
  customReadingMin: number;
  customQuestionsMin: number;
  onModeChange: (mode: 'leitura' | 'questoes' | 'livre') => void;
  onTimeExpired: (mode: 'leitura' | 'questoes' | 'livre') => void;
  onTick: (elapsedMinutes: number) => void;
  onOpenCadenceModal: () => void;
}> = React.memo(({
  timerMode,
  readingMinutes,
  questionsMinutes,
  cadencePreset,
  customReadingMin,
  customQuestionsMin,
  onModeChange,
  onTimeExpired,
  onTick,
  onOpenCadenceModal
}) => {
  const getInitialSeconds = useCallback((mode: 'leitura' | 'questoes' | 'livre') => {
    if (mode === 'leitura') return readingMinutes * 60;
    if (mode === 'questoes') return questionsMinutes * 60;
    return 20 * 60;
  }, [readingMinutes, questionsMinutes]);

  // Helper para carregar estado persistente do localStorage
  const loadSavedTimer = useCallback(() => {
    try {
      const raw = localStorage.getItem(CADENCE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.seconds === 'number') {
          if (parsed.isRunning && parsed.targetEndTime) {
            const now = Date.now();
            const remaining = Math.max(0, Math.round((parsed.targetEndTime - now) / 1000));
            return {
              seconds: remaining,
              isRunning: remaining > 0,
              initialSeconds: parsed.initialSeconds || getInitialSeconds(timerMode),
              savedMode: parsed.timerMode as 'leitura' | 'questoes' | 'livre'
            };
          }
          return {
            seconds: parsed.seconds,
            isRunning: false,
            initialSeconds: parsed.initialSeconds || getInitialSeconds(timerMode),
            savedMode: parsed.timerMode as 'leitura' | 'questoes' | 'livre'
          };
        }
      }
    } catch (e) {
      console.warn('Erro ao carregar timer persistente:', e);
    }
    return null;
  }, [getInitialSeconds, timerMode]);

  const initialLoadRef = useRef(loadSavedTimer());

  const [seconds, setSeconds] = useState<number>(() => {
    const saved = initialLoadRef.current;
    if (saved && saved.savedMode === timerMode && saved.seconds > 0) {
      return saved.seconds;
    }
    return getInitialSeconds(timerMode);
  });

  const [isRunning, setIsRunning] = useState<boolean>(() => {
    const saved = initialLoadRef.current;
    if (saved && saved.savedMode === timerMode) {
      return saved.isRunning;
    }
    return false;
  });

  const initialSecsRef = useRef<number>(
    initialLoadRef.current?.initialSeconds || getInitialSeconds(timerMode)
  );

  // Função para persistir estado atual no localStorage
  const persistState = useCallback((sec: number, running: boolean, mode: 'leitura' | 'questoes' | 'livre', initSec: number) => {
    try {
      const state = {
        timerMode: mode,
        seconds: sec,
        isRunning: running,
        targetEndTime: running ? Date.now() + sec * 1000 : null,
        initialSeconds: initSec,
        lastUpdated: Date.now()
      };
      localStorage.setItem(CADENCE_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore storage quotas
    }
  }, []);

  // Ao alterar timerMode ou minutos do preset
  const prevModeRef = useRef(timerMode);
  useEffect(() => {
    if (prevModeRef.current !== timerMode) {
      prevModeRef.current = timerMode;
      const saved = loadSavedTimer();
      if (saved && saved.savedMode === timerMode && saved.seconds > 0) {
        setSeconds(saved.seconds);
        setIsRunning(saved.isRunning);
        initialSecsRef.current = saved.initialSeconds;
      } else {
        const init = getInitialSeconds(timerMode);
        setSeconds(init);
        initialSecsRef.current = init;
        setIsRunning(false);
        persistState(init, false, timerMode, init);
      }
    }
  }, [timerMode, getInitialSeconds, loadSavedTimer, persistState]);

  // Intervalo de contagem regressiva
  useEffect(() => {
    if (!isRunning || seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onTimeExpired(timerMode);
          const elapsedMins = Math.round(initialSecsRef.current / 60);
          onTick(elapsedMins);
          persistState(0, false, timerMode, initialSecsRef.current);
          return 0;
        }
        const next = prev - 1;
        const elapsedMins = Math.round((initialSecsRef.current - next) / 60);
        onTick(elapsedMins);
        persistState(next, true, timerMode, initialSecsRef.current);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, seconds, timerMode, onTimeExpired, onTick, persistState]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getPresetLabel = () => {
    if (cadencePreset === '60_30') return '60 / 30 min';
    if (cadencePreset === '45_15') return '45 / 15 min';
    if (cadencePreset === '50_10') return '50 / 10 min';
    if (cadencePreset === '90_30') return '90 / 30 min';
    return `${customReadingMin}/${customQuestionsMin} min`;
  };

  const handleTogglePlay = () => {
    const nextRunning = !isRunning;
    setIsRunning(nextRunning);
    persistState(seconds, nextRunning, timerMode, initialSecsRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    const init = initialSecsRef.current || getInitialSeconds(timerMode);
    setSeconds(init);
    persistState(init, false, timerMode, init);
  };

  const handleModeClick = (mode: 'leitura' | 'questoes' | 'livre') => {
    onModeChange(mode);
    const newInit = getInitialSeconds(mode);
    setSeconds(newInit);
    setIsRunning(false);
    initialSecsRef.current = newInit;
    persistState(newInit, false, mode, newInit);
  };

  return (
    <Card className="p-4 sm:p-5 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
          <span className="font-sans text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
            Cadência de Estudo
          </span>
        </div>
        <button
          type="button"
          onClick={onOpenCadenceModal}
          className="text-xs font-sans font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 bg-[var(--accent-primary-glow)] px-2 py-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
          title="Ajustar Método de Cadência"
        >
          <span>{getPresetLabel()}</span>
          <Settings className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1 p-1 bg-[var(--bg-elevated)] rounded-lg text-xs font-sans">
        <button
          type="button"
          onClick={() => handleModeClick('leitura')}
          className={`py-1.5 rounded-md font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
            timerMode === 'leitura'
              ? 'bg-[var(--accent-primary)] text-white shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          Leitura ({readingMinutes}m)
        </button>
        <button
          type="button"
          onClick={() => handleModeClick('questoes')}
          className={`py-1.5 rounded-md font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
            timerMode === 'questoes'
              ? 'bg-[var(--accent-primary)] text-white shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          Questões ({questionsMinutes}m)
        </button>
        <button
          type="button"
          onClick={() => handleModeClick('livre')}
          className={`py-1.5 rounded-md font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
            timerMode === 'livre'
              ? 'bg-[var(--accent-primary)] text-white shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          Livre (20m)
        </button>
      </div>

      <div className="text-center py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
        <div className="font-mono font-bold text-4xl sm:text-5xl text-[var(--text-primary)] tracking-widest">
          {formatTimer(seconds)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={isRunning ? "outline" : "brand"}
          size="sm"
          fullWidth={true}
          onClick={handleTogglePlay}
          className="font-sans text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pausar</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>{seconds === initialSecsRef.current ? "Iniciar Bloco" : "Continuar"}</span>
            </>
          )}
        </Button>

        <button
          type="button"
          onClick={handleReset}
          className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
          title="Reiniciar Cronômetro"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
});

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId, initialSubject }) => {
  const { success, error: toastError, info } = useToast();
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  const [selectedSubject, setSelectedSubject] = useState<string>(() => {
    if (initialSubject) return initialSubject;
    return careerSubjects[0]?.name || 'Direito Tributário';
  });

  useEffect(() => {
    if (initialSubject && initialSubject !== selectedSubject) {
      setSelectedSubject(initialSubject);
    }
  }, [initialSubject]);
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // View Mode: 'pdf' (Visualizador de PDF Original) | 'notebook' (Caderno Editorial Formatado)
  const [viewMode, setViewMode] = useState<'pdf' | 'notebook'>('notebook');

  // Study Progress & Page Tracking State
  const [selectedModuleNumber, setSelectedModuleNumber] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(5);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [studyNotes, setStudyNotes] = useState<string>('');
  const [isSavingProgress, setIsSavingProgress] = useState<boolean>(false);
  const readerTopRef = useRef<HTMLDivElement>(null);
  const moduleNavScrollRef = useRef<HTMLDivElement>(null);

  const scrollModuleNav = (direction: 'left' | 'right') => {
    if (moduleNavScrollRef.current) {
      const offset = direction === 'left' ? -200 : 200;
      moduleNavScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Cadence State Persistente (Configurável: 60/30, 45/15, 50/10, 90/30 ou Custom)
  const [cadencePreset, setCadencePreset] = useState<CadencePreset>(() => {
    return (localStorage.getItem(CADENCE_PRESET_KEY) as CadencePreset) || '60_30';
  });
  const [customReadingMin, setCustomReadingMin] = useState<number>(() => {
    const v = localStorage.getItem(CADENCE_CUSTOM_READING_KEY);
    return v ? parseInt(v, 10) : 60;
  });
  const [customQuestionsMin, setCustomQuestionsMin] = useState<number>(() => {
    const v = localStorage.getItem(CADENCE_CUSTOM_QUESTIONS_KEY);
    return v ? parseInt(v, 10) : 30;
  });
  const [isCadenceModalOpen, setIsCadenceModalOpen] = useState<boolean>(false);

  // Timer State Persistente (Leitura vs Questões vs Livre)
  const [timerMode, setTimerMode] = useState<'leitura' | 'questoes' | 'livre'>(() => {
    try {
      const raw = localStorage.getItem(CADENCE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.timerMode) return parsed.timerMode;
      }
    } catch {}
    return 'leitura';
  });
  const sessionElapsedMinutesRef = useRef<number>(30);

  // Reading Pace & Velocity state
  const [paceInfo, setPaceInfo] = useState<ReadingPaceInfo | null>(null);

  // Upload & Past Study Modal States
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPastStudyModalOpen, setIsPastStudyModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customLessonNumber, setCustomLessonNumber] = useState<string>('');
  const [uploadSubject, setUploadSubject] = useState<string>(careerSubjects[0]?.name || 'Geral');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Custom Uploaded Materials
  const [uploadedMaterials, setUploadedMaterials] = useState<CustomMaterial[]>([]);
  const [selectedCustomMaterial, setSelectedCustomMaterial] = useState<CustomMaterial | null>(null);
  const [filterBySelectedSubject, setFilterBySelectedSubject] = useState<boolean>(true);
  const [isGeneratingAiLesson, setIsGeneratingAiLesson] = useState<boolean>(false);

  // Theory Density Mode (Thinku / Clipping style)
  const [densityMode, setDensityMode] = useState<TheoryDensityMode>('doutrina_completa');
  const [isExpandingLesson, setIsExpandingLesson] = useState<boolean>(false);

  // Edital Subtopics Tree
  const [editalSubtopics, setEditalSubtopics] = useState<EditalSubtopic[]>([]);
  const [isSubtopicsModalOpen, setIsSubtopicsModalOpen] = useState<boolean>(false);

  // Flashcards Modal State (Anki Active Recall)
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState<boolean>(false);
  const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState<boolean>(false);
  const [flashcardDeck, setFlashcardDeck] = useState<{ deckTitle: string; count: number; cards: Array<{ front: string; back: string; topic: string }> } | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  // Multi-Question Fixation Batch State (5 a 10+ Questões Sincronizadas)
  const [questionBatch, setQuestionBatch] = useState<ModuleQuestion[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, { selected: string; isCorrect: boolean; explanation: string; xpGained: number }>>({});
  const [isAnsweringQuestion, setIsAnsweringQuestion] = useState<boolean>(false);
  const [isGeneratingMoreQuestions, setIsGeneratingMoreQuestions] = useState<boolean>(false);

  // Carrega subtópicos do edital da carreira e matéria
  useEffect(() => {
    if (selectedSubject) {
      api.getEditalSubtopics(careerId, selectedSubject)
        .then(res => {
          if (res?.success && Array.isArray(res.subtopics)) {
            setEditalSubtopics(res.subtopics);
          }
        })
        .catch(() => {});
    }
  }, [careerId, selectedSubject]);

  // Helpers to get minutes based on cadence preset
  const getReadingMinutes = () => {
    if (cadencePreset === '60_30') return 60;
    if (cadencePreset === '45_15') return 45;
    if (cadencePreset === '50_10') return 50;
    if (cadencePreset === '90_30') return 90;
    return customReadingMin;
  };

  const getQuestionsMinutes = () => {
    if (cadencePreset === '60_30') return 30;
    if (cadencePreset === '45_15') return 15;
    if (cadencePreset === '50_10') return 10;
    if (cadencePreset === '90_30') return 30;
    return customQuestionsMin;
  };

  // Format timer MM:SS
  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const applyCadencePreset = (preset: CadencePreset) => {
    setCadencePreset(preset);
    let rMin = 60;
    let qMin = 30;
    if (preset === '45_15') { rMin = 45; qMin = 15; }
    else if (preset === '50_10') { rMin = 50; qMin = 10; }
    else if (preset === '90_30') { rMin = 90; qMin = 30; }
    else if (preset === 'custom') { rMin = customReadingMin; qMin = customQuestionsMin; }

    try {
      localStorage.setItem(CADENCE_PRESET_KEY, preset);
      localStorage.setItem(CADENCE_CUSTOM_READING_KEY, String(rMin));
      localStorage.setItem(CADENCE_CUSTOM_QUESTIONS_KEY, String(qMin));
    } catch {}

    setIsCadenceModalOpen(false);
    info('Cadência Atualizada', `Definido: ${rMin}m Leitura + ${qMin}m Questões.`);
  };

  const handleSetTimerMode = (mode: 'leitura' | 'questoes' | 'livre') => {
    setTimerMode(mode);
  };

  // Transição rápida: Marcar parada atual e ir direto para bloco de questões
  const handleSwitchToQuestions = async () => {
    await handleRegisterStudy();
    setTimerMode('questoes');
    info('🎯 Bloco de Prática Iniciado', `Cronômetro ajustado para ${getQuestionsMinutes()} min de questões de fixação.`);
  };

  // Carrega materiais do backend
  const loadMaterials = async () => {
    try {
      const data = await api.getStudyMaterials(careerId);
      if (data && data.materials) {
        setUploadedMaterials(data.materials);
      }
    } catch (e) {
      console.warn('Erro ao buscar materiais:', e);
    }
  };

  // Gerador de Caderno de Doutrina Paginado com IA
  const handleGenerateAiLesson = async () => {
    if (!selectedSubject || isGeneratingAiLesson) return;
    setIsGeneratingAiLesson(true);
    info('✨ Redigindo Doutrina Aprofundada', `Nossa IA Especialista está redigindo uma apostila completa com doutrina, tabelas e pegadinhas para ${selectedSubject} (Modo: ${densityMode === 'doutrina_completa' ? 'Doutrina Completa' : densityMode === 'reta_final' ? 'Reta Final' : 'Resumo Estratégico'})...`);
    try {
      const res = await api.generateLesson({
        subject: selectedSubject,
        topic: currentModule?.title || `Módulo 0${selectedModuleNumber}: Estudo Dirigido de ${selectedSubject}`,
        lessonNumber: selectedModuleNumber || 1,
        densityMode,
        careerId
      });

      if (res && res.success && res.materialId) {
        success('✨ Caderno Concluído!', `Apostila aprofundada de ${selectedSubject} foi gerada e salva com sucesso.`);
        await loadMaterials();
        const newMat: CustomMaterial = {
          id: res.materialId,
          filename: `[Caderno IA] ${res.lesson?.titulo || selectedSubject}.md`,
          subject: selectedSubject,
          lesson_number: selectedModuleNumber || 1,
          title: res.lesson?.titulo || `${selectedSubject} - Aula ${selectedModuleNumber || 1}`,
          summary: res.lesson?.resumoEstrategico || `Apostila Digital de ${selectedSubject}`,
          content_text: (res.lesson?.pages || []).map((p: any) => `## ${p.pageTitle}\n\n${p.leadText}\n\n${p.bodyText}${p.deepDiveText ? `\n\n### Aprofundamento\n${p.deepDiveText}` : ''}`).join('\n\n---\n\n'),
          current_page: 1,
          total_pages: res.lesson?.totalPages || 5,
          theory_pages: res.lesson?.totalPages || 5,
          exercise_pages: 1,
          has_exercises: true,
          caderno_enxuto: JSON.stringify(res.lesson)
        };
        setSelectedCustomMaterial(newMat);
        setViewMode('notebook');
        setCurrentPage(1);
        scrollToReaderTop();
      }
    } catch (err: any) {
      console.error('Erro ao gerar caderno:', err);
      toastError('Erro ao Gerar: ' + (err?.message || 'Não foi possível gerar a apostila com IA.'));
    } finally {
      setIsGeneratingAiLesson(false);
    }
  };

  // Expansão Infinita de Teoria (+5 Páginas Doutrinárias sob Demanda)
  const handleExpandTheoryLesson = async () => {
    if (isExpandingLesson || !selectedSubject) return;
    setIsExpandingLesson(true);
    info('📖 Expandindo Doutrina Teórica', `Gerando +5 novas páginas aprofundadas sobre ${currentModule?.title || selectedSubject}...`);
    try {
      const res = await api.expandLesson({
        materialId: selectedCustomMaterial?.id,
        subject: selectedSubject,
        topic: currentModule?.title || selectedSubject,
        densityMode,
        pagesCount: 5,
        careerId
      });

      if (res && res.success && res.lesson) {
        success('🎉 Teoria Expandida!', `Foram adicionadas +${res.addedCount || 5} páginas à sua apostila. Total atual: ${res.totalPages} páginas.`);
        await loadMaterials();
        
        const updatedMat: CustomMaterial = {
          ...(selectedCustomMaterial || {
            id: res.materialId || Date.now(),
            filename: `[Caderno IA] ${res.lesson?.titulo || selectedSubject}.md`,
            subject: selectedSubject,
            lesson_number: selectedModuleNumber || 1,
            title: res.lesson?.titulo || `${selectedSubject} - Aula ${selectedModuleNumber || 1}`,
            summary: res.lesson?.resumoEstrategico || `Apostila Digital de ${selectedSubject}`,
            current_page: 1,
            exercise_pages: 1,
            has_exercises: true
          }),
          total_pages: res.totalPages,
          theory_pages: res.totalPages,
          caderno_enxuto: JSON.stringify(res.lesson),
          content_text: (res.lesson?.pages || []).map((p: any) => `## ${p.pageTitle}\n\n${p.leadText}\n\n${p.bodyText}${p.deepDiveText ? `\n\n### Aprofundamento\n${p.deepDiveText}` : ''}`).join('\n\n---\n\n')
        };
        setSelectedCustomMaterial(updatedMat);
        const newStartPage = Math.max(1, (res.totalPages - (res.addedCount || 5)) + 1);
        setCurrentPage(newStartPage);
        scrollToReaderTop();
      }
    } catch (err: any) {
      toastError('Erro ao Expandir: ' + (err?.message || 'Falha ao expandir páginas teóricas.'));
    } finally {
      setIsExpandingLesson(false);
    }
  };

  // Geração de Baralho de Flashcards (Anki Repetição Espaçada)
  const handleGenerateFlashcards = async () => {
    if (isGeneratingFlashcards || !selectedSubject) return;
    setIsGeneratingFlashcards(true);
    info('🧠 Gerando Baralho de Flashcards', `Extraindo perguntas e conceitos mnemônicos da lição de ${selectedSubject}...`);
    try {
      const res = await api.generateLessonFlashcards({
        subject: selectedSubject,
        topic: currentModule?.title || selectedSubject,
        lessonContent: activePage?.bodyText || currentModule?.title || selectedSubject,
        count: 5,
        careerId
      });

      if (res && res.success && res.cards) {
        setFlashcardDeck({
          deckTitle: res.deckTitle || `Baralho: ${currentModule?.title || selectedSubject}`,
          count: res.count || res.cards.length,
          cards: res.cards
        });
        setCurrentCardIndex(0);
        setIsCardFlipped(false);
        setIsFlashcardsModalOpen(true);
        success('🧠 Baralho Pronto!', `Foram gerados ${res.count || res.cards.length} flashcards Anki salvos no seu banco de repetição.`);
      }
    } catch (err: any) {
      toastError('Erro nos Flashcards: ' + (err?.message || 'Não foi possível gerar os flashcards.'));
    } finally {
      setIsGeneratingFlashcards(false);
    }
  };

  const displayedMaterials = useMemo<CustomMaterial[]>(() => {
    if (!filterBySelectedSubject) return uploadedMaterials;
    const sNorm = selectedSubject?.trim().toLowerCase() || '';
    return uploadedMaterials.filter((m: CustomMaterial) => {
      const mNorm = m.subject?.trim().toLowerCase() || '';
      return mNorm === sNorm || mNorm.includes(sNorm) || sNorm.includes(mNorm);
    });
  }, [uploadedMaterials, selectedSubject, filterBySelectedSubject]);

  useEffect(() => {
    loadMaterials();
  }, [careerId]);

  // Carrega ritmo de leitura quando seleciona material
  const fetchReadingPace = async (materialId: number) => {
    try {
      const pace = await api.getReadingPace(materialId);
      if (pace) {
        setPaceInfo(pace);
      }
    } catch (e) {
      console.warn('Erro ao buscar ritmo:', e);
    }
  };

  // Sincroniza a disciplina caso a carreira mude
  useEffect(() => {
    if (careerSubjects.length > 0) {
      setSelectedSubject(careerSubjects[0].name);
      setUploadSubject(careerSubjects[0].name);
      setSelectedModuleNumber(1);
      setSelectedCustomMaterial(null);
      setUserSelectedOption(null);
      setAnswered(false);
      setCurrentPage(1);
      setIsCompleted(false);
      setViewMode('notebook');
      setPaceInfo(null);
    }
  }, [careerId]);

  // Ao trocar de disciplina
  const handleSubjectChange = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setSelectedModuleNumber(1);
    setSelectedCustomMaterial(null);
    setUserSelectedOption(null);
    setAnswered(false);
    setCurrentPage(1);
    setIsCompleted(false);
    setViewMode('notebook');
    setPaceInfo(null);
  };

  // Ao selecionar material customizado com PDF
  const handleSelectMaterial = (mat: CustomMaterial) => {
    setSelectedCustomMaterial(mat);
    setUserSelectedOption(null);
    setAnswered(false);
    setCurrentPage(mat.current_page || 1);
    const total = (mat.total_pages && mat.total_pages > 1) ? mat.total_pages : (mat.theory_pages || 45);
    setTotalPages(total);
    setIsCompleted(Boolean(mat.theory_completed));
    setStudyNotes(mat.notes || '');
    if (mat.pdfUrl) {
      setViewMode('pdf');
    } else {
      setViewMode('notebook');
    }
    fetchReadingPace(mat.id);
  };

  const subjectModules = getModulesForSubject(selectedSubject);
  const currentModule = subjectModules.find((m) => m.moduleNumber === selectedModuleNumber) || subjectModules[0] || {
    moduleNumber: 1,
    totalModules: 1,
    title: `Módulo 01 • ${selectedSubject}`,
    bancaTrend: '',
    totalPages: 5,
    pages: []
  };

  const activePage: ModulePage | null = useMemo(() => {
    if (!selectedCustomMaterial) {
      return getModulePage(selectedSubject, currentModule.moduleNumber, currentPage);
    }
    
    // Se for material com caderno estruturado em JSON
    const rawJson = selectedCustomMaterial.caderno_enxuto || (selectedCustomMaterial as any).analysis_json;
    if (rawJson) {
      try {
        const parsed = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
        if (parsed && Array.isArray(parsed.pages) && parsed.pages.length > 0) {
          const pageIdx = Math.max(0, Math.min(currentPage - 1, parsed.pages.length - 1));
          return parsed.pages[pageIdx] || null;
        }
      } catch (err) {
        console.warn('Erro ao parsear páginas do caderno:', err);
      }
    }
    return null;
  }, [selectedCustomMaterial, selectedSubject, currentModule.moduleNumber, currentPage]);

  const lesson = getLessonContent(selectedSubject);

  // Inicialização e sincronização da Bateria de Questões (Multi-Question Fixation Batch)
  useEffect(() => {
    let initialList: ModuleQuestion[] = [];

    if (selectedCustomMaterial) {
      const rawJson = selectedCustomMaterial.caderno_enxuto || (selectedCustomMaterial as any).analysis_json;
      if (rawJson) {
        try {
          const parsed = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
          if (parsed && Array.isArray(parsed.pages)) {
            parsed.pages.forEach((p: any, idx: number) => {
              if (p.question) {
                initialList.push({
                  id: p.question.id || (idx + 1),
                  question: p.question.question,
                  options: p.question.options,
                  answer: p.question.answer,
                  explanation: p.question.explanation,
                  topic: p.pageTitle || selectedCustomMaterial.title,
                  banca: currentCareer.banca
                });
              }
            });
          }
        } catch (e) {
          console.warn('Erro ao extrair questões do caderno customizado:', e);
        }
      }
    }

    if (initialList.length === 0) {
      initialList = getModuleQuestionBatch(selectedSubject, selectedModuleNumber);
    }

    setQuestionBatch(initialList);
    setActiveQuestionIndex(0);
    setAnsweredQuestions({});
    setUserSelectedOption(null);
    setAnswered(false);

    // Complementa assincronamente com questões do banco de dados
    api.getModuleQuestions({
      subject: selectedSubject,
      topic: currentModule?.title,
      limit: 5,
      careerId
    }).then(res => {
      if (res && res.success && Array.isArray(res.questions) && res.questions.length > 0) {
        setQuestionBatch(prev => {
          const existingIds = new Set(prev.map(q => q.id));
          const newOnes: ModuleQuestion[] = res.questions
            .filter((q: any) => !existingIds.has(q.id))
            .map((q: any) => {
              let optObj: Record<string, string> = {};
              if (Array.isArray(q.options)) {
                ['A', 'B', 'C', 'D', 'E'].forEach((letter, i) => {
                  if (q.options[i]) optObj[letter] = q.options[i];
                });
              } else if (typeof q.options === 'object' && q.options !== null) {
                optObj = q.options;
              }
              const letters = ['A', 'B', 'C', 'D', 'E'];
              const ansLetter = typeof q.correctIndex === 'number' ? (letters[q.correctIndex] || 'A') : String(q.correctIndex || 'A');
              return {
                id: q.id,
                question: q.question,
                options: optObj,
                answer: ansLetter,
                explanation: q.explanation || 'Gabarito oficial fundamentado.',
                topic: q.topic || selectedSubject,
                banca: q.banca || currentCareer.banca
              };
            });
          return [...prev, ...newOnes];
        });
      }
    }).catch(err => console.warn('Aviso ao sincronizar questões do banco:', err));
  }, [selectedSubject, selectedModuleNumber, selectedCustomMaterial, careerId]);

  const currentActiveQuestion: ModuleQuestion = questionBatch[activeQuestionIndex] || questionBatch[0] || {
    id: 999,
    question: lesson.question.question,
    options: lesson.question.options,
    answer: lesson.question.answer,
    explanation: lesson.question.explanation,
    topic: selectedSubject,
    banca: currentCareer.banca
  };

  const activeQuestion = currentActiveQuestion;

  const scrollToReaderTop = () => {
    if (readerTopRef.current) {
      readerTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = async (letter: string) => {
    if (!currentActiveQuestion || answeredQuestions[activeQuestionIndex] || isAnsweringQuestion) return;

    setUserSelectedOption(letter);
    setAnswered(true);
    setIsAnsweringQuestion(true);

    try {
      const res = await api.answerStudyQuestion({
        questionId: currentActiveQuestion.id,
        questionText: currentActiveQuestion.question,
        options: currentActiveQuestion.options,
        selectedAnswer: letter,
        correctIndex: currentActiveQuestion.answer,
        explanation: currentActiveQuestion.explanation,
        subject: selectedSubject,
        topic: currentModule?.title,
        banca: currentCareer.banca,
        careerId
      });

      const isCorrect = res ? res.isCorrect : (letter === currentActiveQuestion.answer);
      const xpGained = res?.xpGained || (isCorrect ? 10 : 2);

      setAnsweredQuestions(prev => ({
        ...prev,
        [activeQuestionIndex]: {
          selected: letter,
          isCorrect,
          explanation: res?.explanation || currentActiveQuestion.explanation,
          xpGained
        }
      }));

      if (isCorrect) {
        success('🎯 Resposta Correta! (+10 XP)', 'Excelente fixação no ponto do edital.');
      } else {
        toastError('❌ Resposta Incorreta (+2 XP) — Registrada no Caderno de Erros!');
      }
    } catch (err: any) {
      console.warn('Erro ao sincronizar resposta com o backend:', err);
      const isCorrect = letter === currentActiveQuestion.answer;
      setAnsweredQuestions(prev => ({
        ...prev,
        [activeQuestionIndex]: {
          selected: letter,
          isCorrect,
          explanation: currentActiveQuestion.explanation,
          xpGained: isCorrect ? 10 : 2
        }
      }));
      if (isCorrect) {
        success('Resposta Correta!', 'Excelente fixação.');
      }
    } finally {
      setIsAnsweringQuestion(false);
    }
  };

  const handleGenerateMoreQuestions = async () => {
    if (isGeneratingMoreQuestions || !selectedSubject) return;
    setIsGeneratingMoreQuestions(true);
    info('⚡ Gerando Questões Inéditas', `Nossa IA está elaborando +5 questões da banca ${currentCareer.banca} sobre ${currentModule.title}...`);

    try {
      const res = await api.getModuleQuestions({
        subject: selectedSubject,
        topic: currentModule.title,
        limit: 5,
        careerId
      });

      if (res && res.questions && Array.isArray(res.questions)) {
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const formatted: ModuleQuestion[] = res.questions.map((q: any, idx: number) => {
          let optObj: Record<string, string> = {};
          if (Array.isArray(q.options)) {
            letters.forEach((l, i) => {
              if (q.options[i]) optObj[l] = q.options[i];
            });
          } else if (typeof q.options === 'object') {
            optObj = q.options;
          }
          return {
            id: q.id || Date.now() + idx,
            question: q.question_text || q.question,
            options: optObj,
            answer: typeof q.correct_index === 'number' ? letters[q.correct_index] : String(q.correct_index || 'A'),
            explanation: q.explanation || 'Gabarito Oficial fundamentado.',
            topic: q.topic || currentModule.title,
            banca: q.banca || currentCareer.banca
          };
        });

        const newStartIndex = questionBatch.length;
        setQuestionBatch(prev => [...prev, ...formatted]);
        setActiveQuestionIndex(newStartIndex);
        setUserSelectedOption(null);
        setAnswered(false);
        success('🎉 Novas Questões Prontas!', `Adicionamos ${formatted.length} novas questões à sua bateria de estudo.`);
      }
    } catch (err: any) {
      toastError('Erro ao Gerar: ' + (err?.message || 'Não foi possível gerar mais questões.'));
    } finally {
      setIsGeneratingMoreQuestions(false);
    }
  };

  const handleSelectModule = (modNum: number) => {
    setSelectedModuleNumber(modNum);
    setCurrentPage(1);
    setUserSelectedOption(null);
    setAnswered(false);
    scrollToReaderTop();
  };

  const handleSelectPageDirect = (pageNum: number) => {
    setCurrentPage(pageNum);
    setUserSelectedOption(null);
    setAnswered(false);
    scrollToReaderTop();
  };

  const effectiveTotalPages = selectedCustomMaterial 
    ? ((selectedCustomMaterial.total_pages && selectedCustomMaterial.total_pages > 1) ? selectedCustomMaterial.total_pages : (selectedCustomMaterial.theory_pages || totalPages || 45))
    : (currentModule.totalPages || 5);

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      const next = Math.max(1, prev - 1);
      scrollToReaderTop();
      return next;
    });
    setUserSelectedOption(null);
    setAnswered(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => {
      const next = Math.min(effectiveTotalPages, prev + 1);
      scrollToReaderTop();
      return next;
    });
    setUserSelectedOption(null);
    setAnswered(false);
  };

  const handlePrintDoctrinePdf = () => {
    window.print();
  };

  // Navegação fluida por teclas de seta (← / →) durante a leitura da teoria
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || isFlashcardsModalOpen || isUploadModalOpen || isSubtopicsModalOpen || isCadenceModalOpen || isPastStudyModalOpen) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [effectiveTotalPages, isFlashcardsModalOpen, isUploadModalOpen, isSubtopicsModalOpen, isCadenceModalOpen, isPastStudyModalOpen]);

  const handleAdvanceToNextModule = () => {
    if (selectedModuleNumber < subjectModules.length) {
      handleSelectModule(selectedModuleNumber + 1);
      success('🎉 Módulo Concluído!', `Avançando para o Módulo 0${selectedModuleNumber + 1}!`);
    }
  };

  // Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        setUploadError('Por favor, selecione um arquivo no formato PDF.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setUploadError(null);

      // Limpa e sugere título amigável e legível
      const cleanName = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/^\d{10,15}[-_]/, '') // remove prefixos numéricos/timestamp
        .replace(/[_-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      setCustomTitle(cleanName);
      setUploadSubject(selectedSubject);

      // Tenta extrair número da aula a partir do nome
      const lessonMatch = file.name.match(/(?:aula|lesson|m[oó]dulo)[_\s-]*0*(\d+)/i);
      if (lessonMatch) {
        setCustomLessonNumber(lessonMatch[1]);
      } else {
        setCustomLessonNumber('');
      }
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError('Selecione um arquivo PDF.');
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append('pdf', selectedFile);
    formData.append('subject', uploadSubject);
    if (customTitle.trim()) {
      formData.append('customTitle', customTitle.trim());
    }
    if (customLessonNumber.trim()) {
      formData.append('lessonNumber', customLessonNumber.trim());
    }
    formData.append('careerId', careerId);
    formData.append('studyStatus', 'unread');

    try {
      const currentUserId = localStorage.getItem('CURRENT_USER_ID') || '';
      const result = await api.uploadStudyMaterial(formData, currentUserId, careerId);
      success('PDF Indexado com Sucesso!', `Apostila "${customTitle || result.title}" vinculada a ${uploadSubject} (${result.theoryPages || 45} págs).`);
      setSelectedFile(null);
      setCustomTitle('');
      setCustomLessonNumber('');
      setIsUploadModalOpen(false);
      await loadMaterials();
    } catch (err: any) {
      setUploadError(err.message || 'Erro ao processar o PDF.');
    } finally {
      setIsUploading(false);
    }
  };

  // Salvar Progresso e Marca-Página
  const handleRegisterStudy = async () => {
    setIsSavingProgress(true);
    try {
      const durationMinutes = sessionElapsedMinutesRef.current || 30;
      const qDoneCount = Object.keys(answeredQuestions).length;
      const qCorrCount = Object.values(answeredQuestions).filter(a => a.isCorrect).length;

      const res = await api.registerStudy({
        materialId: selectedCustomMaterial?.id,
        subject: selectedCustomMaterial ? selectedCustomMaterial.subject : selectedSubject,
        lessonNumber: selectedCustomMaterial?.lesson_number || currentModule.moduleNumber,
        title: selectedCustomMaterial ? selectedCustomMaterial.title : currentModule.title,
        currentPage,
        totalPages: effectiveTotalPages,
        isCompleted,
        durationMinutes: durationMinutes > 0 ? durationMinutes : 30,
        questionsCount: qDoneCount,
        correctQuestionsCount: qCorrCount,
        notes: studyNotes
      });

      if (res && res.success) {
        if (isCompleted) {
          success('🏆 Aula Concluída!', `Parabéns! Você concluiu a aula${qDoneCount > 0 ? ` e resolveu ${qDoneCount} questões (${qCorrCount} acertos)` : ''} e ganhou +${res.xpGained || 50} XP.`);
        } else {
          info('🔖 Marca-Página Salvo!', `Progresso salvo na Página ${currentPage} de ${effectiveTotalPages}${qDoneCount > 0 ? ` (${qDoneCount} questões feitas)` : ''}. (+${res.xpGained || 20} XP)`);
        }
        if (selectedCustomMaterial) {
          fetchReadingPace(selectedCustomMaterial.id);
        }
        await loadMaterials();
      }
    } catch (err: any) {
      toastError('Erro ao registrar progresso: ' + err.message);
    } finally {
      setIsSavingProgress(false);
    }
  };

  // Excluir Material e Arquivo PDF do disco
  const handleDeleteMaterial = async (e: React.MouseEvent, materialId: number) => {
    e.stopPropagation();
    if (!window.confirm('Deseja excluir este PDF e liberar espaço no disco local?')) return;

    try {
      await api.deleteStudyMaterial(materialId);
      info('PDF Excluído', 'O arquivo físico e os dados foram removidos do seu computador.');
      if (selectedCustomMaterial?.id === materialId) {
        setSelectedCustomMaterial(null);
        setViewMode('notebook');
        setPaceInfo(null);
      }
      await loadMaterials();
    } catch (err: any) {
      toastError('Erro ao excluir material: ' + err.message);
    }
  };

  const progressPercent = Math.min(100, Math.max(1, Math.round((currentPage / (effectiveTotalPages || 1)) * 100)));

  return (
    <div className="space-y-6 animate-fade-in font-sans pb-16">
      
      {/* 1. Header & Cadence Config Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <CarimboStatus status="homologado" label="SALA DE ESTUDOS TEÓRICOS" />
            <span className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              {currentCareer.name} ({currentCareer.banca})
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Leitura de Doutrina & Fixação de Questões
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Ciclo Personalizado: <strong className="text-[var(--text-primary)]">{getReadingMinutes()} min de Leitura</strong> + <strong className="text-[var(--accent-primary)]">{getQuestionsMinutes()} min de Questões</strong>
          </p>
        </div>

        {/* Action Controls: Cadence Preset, Past Study & Upload PDF */}
        <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setIsPastStudyModalOpen(true)}
            className="px-3 py-2 rounded-xl text-xs font-sans font-bold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-warning)] text-[var(--accent-warning)] flex items-center gap-1.5 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
            title="Lançar estudos realizados em dias anteriores fora da plataforma"
          >
            <Calendar className="w-3.5 h-3.5 text-[var(--accent-warning)]" />
            <span>📅 Lançar Estudo Passado</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCadenceModalOpen(true)}
            className="px-3 py-2 rounded-xl text-xs font-sans font-bold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center gap-1.5 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
            title="Ajustar proporção de tempo entre Leitura Teórica e Questões"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Cadência: {getReadingMinutes()}m / {getQuestionsMinutes()}m</span>
          </button>

          <Button
            variant="brand"
            size="sm"
            onClick={() => setIsUploadModalOpen(true)}
            className="font-sans text-xs flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>+ Subir PDF da Aula</span>
          </Button>
        </div>
      </div>

      {/* 2. Top Navigation: Disciplinas do Edital & PDFs Cadastrados */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar-horizontal scroll-smooth">
        <span className="text-xs font-sans font-bold text-[var(--text-muted)] uppercase tracking-wider shrink-0 pl-1">
          Disciplinas:
        </span>
        {careerSubjects.map((sub) => {
          const isSelected = selectedSubject === sub.name && !selectedCustomMaterial;
          return (
            <button
              key={sub.name}
              type="button"
              onClick={() => handleSubjectChange(sub.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                isSelected
                  ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]'
              }`}
            >
              <span>{sub.name}</span>
            </button>
          );
        })}
      </div>

      {/* Uploaded PDF Shelf with Clear Identification & Subject Filter */}
      {uploadedMaterials.length > 0 && (
        <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[var(--accent-primary)] tracking-wider">
                [ 📁 MINHAS APOSTILAS & RESUMOS ]
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                ({displayedMaterials.length} {filterBySelectedSubject ? `em ${selectedSubject}` : 'cadastrados'})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFilterBySelectedSubject(!filterBySelectedSubject)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                {filterBySelectedSubject ? `Filtrando: ${selectedSubject} (Ver Todos)` : 'Mostrando Todos (Filtrar por Matéria)'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setUploadSubject(selectedSubject);
                  setIsUploadModalOpen(true);
                }}
                className="px-2.5 py-1 rounded-lg text-xs font-sans font-bold bg-[var(--accent-primary)] text-white hover:opacity-90 transition-all flex items-center gap-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Adicionar PDF</span>
              </button>
            </div>
          </div>

          {displayedMaterials.length === 0 ? (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-dashed border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                <span>Nenhuma apostila personalizada vinculada a <strong>{selectedSubject}</strong> ainda.</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilterBySelectedSubject(false)}
                  className="text-xs text-[var(--accent-primary)] hover:underline font-mono cursor-pointer"
                >
                  Ver {uploadedMaterials.length} PDFs de outras matérias
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUploadSubject(selectedSubject);
                    setIsUploadModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-sans text-xs font-bold transition-all cursor-pointer"
                >
                  + Subir PDF para {selectedSubject}
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {displayedMaterials.map((mat: CustomMaterial) => {
                const isSelected = selectedCustomMaterial?.id === mat.id;
                return (
                  <div
                    key={mat.id}
                    onClick={() => handleSelectMaterial(mat)}
                    className={`group p-3 rounded-xl transition-all flex items-start justify-between gap-3 cursor-pointer border ${
                      isSelected
                        ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-sm'
                        : 'bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'}`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {mat.lesson_number && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                              Aula {String(mat.lesson_number).padStart(2, '0')}
                            </span>
                          )}
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-sans font-semibold bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                            {mat.subject}
                          </span>
                        </div>
                        <h4 className="font-sans font-bold text-xs text-[var(--text-primary)] truncate leading-snug" title={mat.title || mat.filename}>
                          {mat.title || mat.filename}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)]">
                          <span>{mat.current_page || 1}/{mat.total_pages || mat.theory_pages || 1} págs</span>
                          {mat.theory_completed ? (
                            <span className="text-[var(--accent-success)] font-bold">✓ Lido</span>
                          ) : (
                            <span className="text-[var(--accent-primary)] font-medium">Em leitura</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      title="Excluir este PDF do computador"
                      onClick={(e) => handleDeleteMaterial(e, mat.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 hover:text-[var(--accent-danger)] hover:bg-[var(--bg-surface)] transition-all rounded-lg text-[var(--text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] shrink-0 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 3. Main Split View Grid: Left = Reader & Page Tracker | Right = Timer & Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: THE STUDY READER & PAGE TRACKER (7 or 8 cols)  */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-4">
          
          <Card className="p-5 sm:p-7 space-y-5 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
            
            {/* Anchor for smooth scroll */}
            <div ref={readerTopRef} />

            {/* View Mode Bar & Smart Universal PDF Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode('pdf')}
                  disabled={!selectedCustomMaterial?.pdfUrl}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    viewMode === 'pdf'
                      ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                      : selectedCustomMaterial?.pdfUrl
                      ? 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      : 'opacity-40 cursor-not-allowed bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-transparent'
                  }`}
                  title={selectedCustomMaterial?.pdfUrl ? "Ler o arquivo PDF original com formatação e grifos" : "Suba um PDF para habilitar este modo"}
                >
                  <FileSearch className="w-3.5 h-3.5" />
                  <span>📑 PDF Original</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('notebook')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    viewMode === 'notebook'
                      ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>📝 Caderno de Doutrina</span>
                </button>

                {/* Subtópicos do Edital */}
                <button
                  type="button"
                  onClick={() => setIsSubtopicsModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  title="Abrir índice completo dos subtópicos do edital oficial"
                >
                  <Compass className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>🧭 Subtópicos ({editalSubtopics.length > 0 ? editalSubtopics.length : 'Edital'})</span>
                </button>

                {/* Geração de Doutrina */}
                <button
                  type="button"
                  onClick={handleGenerateAiLesson}
                  disabled={isGeneratingAiLesson}
                  className="px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-sm disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  title="Gerar apostila digital completa via IA"
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isGeneratingAiLesson ? 'animate-spin' : ''}`} />
                  <span>{isGeneratingAiLesson ? 'Redigindo...' : '✨ Gerar Teoria'}</span>
                </button>

                {/* Expansão de Teoria */}
                <button
                  type="button"
                  onClick={handleExpandTheoryLesson}
                  disabled={isExpandingLesson}
                  className="px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  title="Adicionar +5 páginas aprofundadas com jurisprudência e quadros sinóticos à lição"
                >
                  <Plus className={`w-3.5 h-3.5 ${isExpandingLesson ? 'animate-spin' : ''}`} />
                  <span>{isExpandingLesson ? 'Expandindo...' : '➕ +5 Págs Teoria'}</span>
                </button>

                {/* Flashcards Anki */}
                <button
                  type="button"
                  onClick={handleGenerateFlashcards}
                  disabled={isGeneratingFlashcards}
                  className="px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white shadow-sm disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  title="Gerar baralho de flashcards Anki para fixação ativa"
                >
                  <BrainCircuit className={`w-3.5 h-3.5 ${isGeneratingFlashcards ? 'animate-spin' : ''}`} />
                  <span>{isGeneratingFlashcards ? 'Criando Anki...' : '🧠 Flashcards'}</span>
                </button>
              </div>

              {/* Universal Badges */}
              <div className="flex items-center gap-2 font-mono text-xs">
                {selectedCustomMaterial && (selectedCustomMaterial.total_pages || selectedCustomMaterial.theory_pages) && (
                  <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-bold">
                    📄 {selectedCustomMaterial.total_pages || selectedCustomMaterial.theory_pages} Páginas Totais
                  </span>
                )}
                {selectedCustomMaterial && selectedCustomMaterial.theory_pages && selectedCustomMaterial.total_pages && selectedCustomMaterial.theory_pages < selectedCustomMaterial.total_pages && (
                  <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 font-bold">
                    📖 {selectedCustomMaterial.theory_pages}p Teoria
                  </span>
                )}
                {selectedCustomMaterial && selectedCustomMaterial.exercise_pages && selectedCustomMaterial.exercise_pages > 0 && (
                  <span className="px-2 py-0.5 rounded bg-[var(--accent-purple-bg)] text-[var(--accent-purple)] border border-[var(--accent-purple)]/20 font-bold">
                    🎯 {selectedCustomMaterial.exercise_pages}p Questões
                  </span>
                )}
              </div>
            </div>

            {/* SELETOR DE DENSIDADE TEÓRICA (Padrão Thinku & Clipping) */}
            <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-xs font-sans font-bold text-[var(--text-secondary)] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Nível de Profundidade Teórica:</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setDensityMode('doutrina_completa')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-sans font-bold transition-all ${
                    densityMode === 'doutrina_completa'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                  title="Doutrina densa, correntes divergentes e jurisprudência comentada"
                >
                  📘 Doutrina Completa
                </button>

                <button
                  type="button"
                  onClick={() => setDensityMode('resumo_estrategico')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-sans font-bold transition-all ${
                    densityMode === 'resumo_estrategico'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                  title="Equilíbrio didático com esquemas e tabelas comparativas"
                >
                  📗 Estratégico
                </button>

                <button
                  type="button"
                  onClick={() => setDensityMode('reta_final')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-sans font-bold transition-all ${
                    densityMode === 'reta_final'
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                  title="Foco em súmulas, prazos e caça-pegadinhas"
                >
                  📙 Reta Final
                </button>
              </div>
            </div>

            {/* SELETOR DE MÓDULOS DA DISCIPLINA */}
            {!selectedCustomMaterial && subjectModules.length > 0 && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Módulos de {selectedSubject} ({subjectModules.length} Módulos Disponíveis)</span>
                  </span>
                  <span className="text-xs font-sans text-[var(--text-muted)]">
                    Selecione o módulo para estudar:
                  </span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar-horizontal scroll-smooth">
                  {subjectModules.map((mod) => {
                    const isModActive = mod.moduleNumber === currentModule.moduleNumber;
                    return (
                      <button
                        key={mod.moduleNumber}
                        type="button"
                        onClick={() => handleSelectModule(mod.moduleNumber)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                          isModActive
                            ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                            : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        <span>Módulo 0{mod.moduleNumber}</span>
                        {isModActive && <span className="text-xs opacity-80 font-normal">({currentPage}/{effectiveTotalPages}p)</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Lesson Title & Module Meta */}
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>
                    {selectedCustomMaterial 
                      ? `APOSTILA DIGITAL • ${selectedCustomMaterial.subject}`
                      : `MÓDULO 0${currentModule.moduleNumber} DE 0${currentModule.totalModules} • ${selectedSubject}`}
                  </span>
                </span>

                <CarimboStatus 
                  status={isCompleted ? "homologado" : "em_revisao"} 
                  label={isCompleted ? "MÓDULO CONCLUÍDO" : `EM LEITURA • PÁG ${currentPage}/${effectiveTotalPages}`} 
                />
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                {selectedCustomMaterial 
                  ? (selectedCustomMaterial.title || selectedCustomMaterial.filename) 
                  : currentModule.title}
              </h2>

              {/* NAVEGADOR DINÂMICO DE PÁGINAS (1 A N) COM SCROLL FLUIDO & SETAS */}
              <div className="pt-2 relative flex items-center border-b border-[var(--border-subtle)] pb-3">
                {/* Botão de rolagem para esquerda */}
                <button
                  type="button"
                  onClick={() => scrollModuleNav('left')}
                  className="shrink-0 p-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all mr-1.5 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  title="Rolar abas para esquerda"
                  aria-label="Rolar abas para esquerda"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Container deslizante com suporte a mouse wheel */}
                <div
                  ref={moduleNavScrollRef}
                  className="flex-1 flex items-center gap-1.5 overflow-x-auto custom-scrollbar-horizontal scroll-smooth py-1"
                >
                  {Array.from({ length: effectiveTotalPages }, (_, i) => {
                    const pageNum = i + 1;
                    let label = `Pág. ${pageNum}`;
                    if (pageNum === 1) label = '1. Doutrina & Fundamentos';
                    else if (pageNum === 2) label = '2. Esquemas & Tabelas';
                    else if (pageNum === 3) label = '3. Casos & Pegadinhas';
                    else if (pageNum === 4) label = '4. Letra de Lei & Súmulas';
                    else if (pageNum === 5) label = '5. Treino de Fixação';
                    else if (pageNum === 6) label = '6. Desdobramentos Dogmáticos';
                    else if (pageNum === 7) label = '7. Jurisprudência STF/STJ';
                    else if (pageNum === 8) label = '8. Tabela de Exceções';
                    else if (pageNum === 9) label = '9. Casos de Fiscalização';
                    else if (pageNum === 10) label = '10. Questão Inédita Comentada';
                    else label = `${pageNum}. Aprofundamento Teórico`;

                    const isPageActive = currentPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handleSelectPageDirect(pageNum)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                          isPageActive
                            ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold border border-[var(--accent-primary)] shadow-xs'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full text-xs font-mono flex items-center justify-center font-bold ${
                          isPageActive ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                        }`}>
                          {pageNum}
                        </span>
                        <span>{label.replace(/^\d+\.\s*/, '')}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Botão de rolagem para direita */}
                <button
                  type="button"
                  onClick={() => scrollModuleNav('right')}
                  className="shrink-0 p-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all ml-1.5 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  title="Rolar abas para direita"
                  aria-label="Rolar abas para direita"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Partial Reading Progress & Pace Intelligence Banner */}
            {selectedCustomMaterial && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 font-sans font-bold text-[var(--text-primary)]">
                    <Flame className="w-4 h-4 text-[var(--accent-warning)]" />
                    <span>Ritmo de Estudo & Parada:</span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs">
                    {paceInfo?.resumeRecommendation || `Você está na página ${currentPage}. Faltam ${Math.max(0, effectiveTotalPages - currentPage)} páginas de teoria.`}
                  </p>
                </div>

                <Button
                  variant="brand"
                  size="sm"
                  onClick={handleSwitchToQuestions}
                  className="font-sans text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm"
                  title="Salva a página onde você parou e já inicia o bloco de questões"
                >
                  <span>⚡ Ir p/ Questões ({getQuestionsMinutes()}m)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            )}

            {/* ============================================================ */}
            {/* VIEW 1: NATIVE EMBEDDED PDF VIEWER                          */}
            {/* ============================================================ */}
            {viewMode === 'pdf' && selectedCustomMaterial?.pdfUrl ? (
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-inner">
                  <iframe
                    src={`${selectedCustomMaterial.pdfUrl}#page=${currentPage}&toolbar=1&navpanes=1`}
                    className="w-full h-[650px] border-0"
                    title="Leitor de PDF Integrado"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-sans text-[var(--text-muted)] px-1">
                  <span>Visualizador Universal: compatível com qualquer banca e editora</span>
                  <span>Use o controle abaixo para salvar sua página de leitura</span>
                </div>
              </div>
            ) : (
              /* ============================================================ */
              /* VIEW 2: FORMATTED EDITORIAL DOCTRINE NOTEBOOK (PAGINADO)     */
              /* ============================================================ */
              <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                
                {/* 1. Banca Trends & Header Banner */}
                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-sans text-xs font-bold uppercase tracking-wider">
                      🎯 Tendência da Banca {currentCareer.banca} • {activePage?.category || 'Doutrina & Teoria'}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-subtle)] shadow-xs">
                        <button
                          type="button"
                          onClick={handlePrevPage}
                          disabled={currentPage <= 1}
                          className="px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] disabled:opacity-30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                          title="Página Anterior (←)"
                        >
                          <ChevronLeft className="w-3.5 h-3.5 inline" /> <span className="hidden sm:inline">Anterior</span>
                        </button>
                        <span className="text-xs font-mono px-2 text-[var(--accent-primary)] font-bold">
                          {currentPage} / {effectiveTotalPages}
                        </span>
                        <button
                          type="button"
                          onClick={handleNextPage}
                          disabled={currentPage >= effectiveTotalPages}
                          className="px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] disabled:opacity-30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                          title="Próxima Página (→)"
                        >
                          <span className="hidden sm:inline">Próxima</span> <ChevronRight className="w-3.5 h-3.5 inline" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handlePrintDoctrinePdf}
                        className="px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-sans font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                        title="Exportar ou Imprimir Caderno de Doutrina"
                      >
                        <Printer className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                        <span className="hidden md:inline">Exportar / Imprimir</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans">
                    {selectedCustomMaterial 
                      ? (selectedCustomMaterial.summary || "Resumo e tópicos mais cobrados extraídos da apostila.")
                      : currentModule.bancaTrend || lesson.jurisprudenceNote}
                  </p>
                </div>

                {/* 2. Structured Active Page Body */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-sans text-xs font-bold">
                      PÁGINA 0{currentPage}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                      {activePage ? activePage.pageTitle : lesson.section1Title}
                    </h3>
                  </div>

                  {/* Lead Text */}
                  {activePage?.leadText && (
                    <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-medium text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                      💡 {activePage.leadText}
                    </div>
                  )}

                  {/* Main Body Text */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans whitespace-pre-line">
                    {activePage 
                      ? activePage.bodyText 
                      : (selectedCustomMaterial?.content_text || lesson.section1Body)}
                  </p>

                  {/* Deep Dive Box */}
                  {activePage?.deepDiveText && (
                    <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 mt-3 shadow-xs">
                      <div className="font-sans text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Aprofundamento Teórico & Doutrina</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-sans">
                        {activePage.deepDiveText}
                      </p>
                    </div>
                  )}

                  {/* Tabela de Esquemas / Verdade (Se disponível) */}
                  {activePage?.tableData && Array.isArray(activePage.tableData.headers) && Array.isArray(activePage.tableData.rows) && (
                    <div className="mt-4 rounded-xl border border-[var(--border-subtle)] overflow-hidden shadow-xs">
                      <div className="p-2.5 bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)] font-sans text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                        <span>Tabela Estrutural & Esquematização da Banca</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left border-collapse font-mono">
                          <thead className="bg-[var(--bg-surface)] text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                            <tr>
                              {activePage.tableData.headers.map((h, i) => (
                                <th key={i} className="p-2.5 font-bold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--border-subtle)] bg-[var(--bg-base)]">
                            {activePage.tableData.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[var(--bg-elevated)]/50 transition-colors">
                                {Array.isArray(row) && row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2.5 text-[var(--text-primary)]">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Mnemônicos Estruturados */}
                  {Array.isArray(activePage?.mnemonics) && activePage.mnemonics.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-sans text-xs font-bold">
                          ESQUEMAS DE FIXAÇÃO
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                          Mnemônicos e Regras de Ouro
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                        {activePage.mnemonics.map((m, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                            <span className="text-[var(--accent-primary)] font-bold block">{m.code}:</span>
                            <span className="text-[var(--text-secondary)] font-sans text-xs">{m.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Casos Práticos & Pegadinhas */}
                  {Array.isArray(activePage?.practicalCases) && activePage.practicalCases.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-[var(--accent-amber-bg)] text-[var(--accent-warning)] font-sans text-xs font-bold">
                          CASOS PRÁTICOS & PEGADINHAS
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                          Aplicação em Situações Hipotéticas da {currentCareer.banca}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {activePage.practicalCases.map((pc, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                            <div className="text-xs font-bold font-mono text-[var(--text-primary)]">
                              {pc.title}
                            </div>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {pc.scenario}
                            </p>
                            <div className="p-2.5 rounded-lg bg-[var(--accent-amber-bg)] border border-[var(--accent-warning)]/20 text-xs text-[var(--accent-warning)] font-sans">
                              ⚡ <strong>Dica da Banca:</strong> {pc.tip}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Legislação Aplicada & Artigos de Ouro */}
                  {Array.isArray(activePage?.lawArticles) && activePage.lawArticles.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-sans text-xs font-bold">
                          LETRA DE LEI & SÚMULAS
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                          Dispositivos Normativos e Precedentes
                        </h4>
                      </div>

                      <div className="space-y-2">
                        {activePage.lawArticles.map((la, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs space-y-1">
                            <div className="font-bold text-[var(--accent-primary)]">{la.article}</div>
                            <div className="text-[var(--text-secondary)] font-sans text-xs italic">"{la.text}"</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Questão de Fixação da Página 5 */}
                  {activePage?.question && activePage.question.options && typeof activePage.question.options === 'object' && (
                    <div className="space-y-4 pt-4">
                      <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                          <span className="px-2.5 py-1 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-sans text-xs font-bold">
                            🎯 QUESTÃO DE FIXAÇÃO DO MÓDULO 0{currentModule.moduleNumber}
                          </span>
                          <span className="font-mono text-xs text-[var(--accent-success)] font-bold">+10 XP</span>
                        </div>

                        <p className="text-xs sm:text-sm font-sans font-medium text-[var(--text-primary)] leading-relaxed">
                          {activePage.question.question}
                        </p>

                        <div className="space-y-2">
                          {Object.entries(activePage.question.options || {}).map(([letter, text]) => {
                            const isSelected = userSelectedOption === letter;
                            const isCorrect = letter === activePage.question?.answer;
                            let btnStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]';

                            if (answered) {
                              if (isCorrect) {
                                btnStyle = 'bg-[var(--accent-emerald-bg)] border-[var(--accent-success)] text-[var(--accent-success)] font-bold';
                              } else if (isSelected) {
                                btnStyle = 'bg-[var(--color-status-danger-bg)] border-[var(--accent-danger)] text-[var(--accent-danger)]';
                              }
                            }

                            return (
                              <button
                                key={letter}
                                type="button"
                                onClick={() => handleSelectOption(letter)}
                                disabled={answered}
                                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold shrink-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                                  {letter}
                                </span>
                                <span className="font-sans leading-relaxed">{text}</span>
                              </button>
                            );
                          })}
                        </div>

                        {answered && (
                          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs font-sans">
                            <div className="font-sans font-bold text-[var(--accent-primary)] flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)]" />
                              <span>Gabarito Comentado Oficial:</span>
                            </div>
                            <p className="text-[var(--text-primary)] leading-relaxed">
                              {activePage.question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>

                {/* 5. NAVEGAÇÃO PROEMINENTE ENTRE PÁGINAS (BOTÕES GRANDES) */}
                <div className="pt-6 border-t border-[var(--border-subtle)] mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={currentPage <= 1}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] disabled:opacity-30 disabled:cursor-not-allowed font-sans text-xs font-bold text-[var(--text-primary)] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Página Anterior ({currentPage > 1 ? currentPage - 1 : 1})</span>
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {currentPage < effectiveTotalPages ? (
                      <button
                        type="button"
                        onClick={handleNextPage}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-sans text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <span>Avançar para Página 0{currentPage + 1}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSwitchToQuestions}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--color-status-success)] text-white font-sans text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Concluir Teoria & Fazer Questões ➔</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* ============================================================ */}
            {/* 4. SMART PAGE TRACKER & READING BOOKMARK BAR                 */}
            {/* ============================================================ */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-4 pt-4 mt-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-sans text-xs font-bold text-[var(--text-primary)]">
                  <Bookmark className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>REGISTRO DE PÁGINA & PROGRESSO</span>
                </div>

                <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-2">
                  <span>Progresso Teórico:</span>
                  <span className="font-bold text-[var(--accent-primary)]">{progressPercent}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <ProgressBar value={isCompleted ? 100 : progressPercent} />

              {/* Page Navigator Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                
                {/* Page Increment Buttons */}
                <div className="space-y-1">
                  <label className="text-xs font-sans text-[var(--text-muted)] block">
                    Página Atual da Leitura:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevPage}
                      disabled={currentPage <= 1}
                      className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center justify-center disabled:opacity-40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      title="Página Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span>Pág.</span>
                      <input
                        type="number"
                        min="1"
                        max={effectiveTotalPages}
                        value={currentPage}
                        onChange={(e) => setCurrentPage(Math.max(1, Math.min(effectiveTotalPages, parseInt(e.target.value, 10) || 1)))}
                        className="w-16 h-8 text-center rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none"
                      />
                      <span className="text-[var(--text-muted)]">de {effectiveTotalPages}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextPage}
                      disabled={currentPage >= effectiveTotalPages}
                      className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center justify-center disabled:opacity-40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      title="Próxima Página"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="space-y-1">
                  <label className="text-xs font-sans text-[var(--text-muted)] block">
                    Status da Lição:
                  </label>
                  <div className="flex items-center gap-4 pt-1 text-xs">
                    <label className="flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer">
                      <input
                        type="radio"
                        name="lesson_status"
                        checked={!isCompleted}
                        onChange={() => setIsCompleted(false)}
                        className="accent-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      />
                      <span>Em Andamento</span>
                    </label>

                    <label className="flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer">
                      <input
                        type="radio"
                        name="lesson_status"
                        checked={isCompleted}
                        onChange={() => setIsCompleted(true)}
                        className="accent-[var(--accent-success)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      />
                      <span className="font-bold text-[var(--accent-success)]">Aula Finalizada</span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Study Notes */}
              <div className="space-y-1 pt-1">
                <label className="text-xs font-sans text-[var(--text-muted)] block">
                  Anotação do Ponto de Parada:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Parei no Art. 150 da CF/88 (Princípio da Anterioridade Anual vs Nonagesimal)..."
                  value={studyNotes}
                  onChange={(e) => setStudyNotes(e.target.value)}
                  className="w-full h-9 px-3 rounded-lg text-xs bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] shadow-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)]">
                {selectedCustomMaterial && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCustomMaterial(null)}
                    className="font-sans text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    ← Voltar ao Edital Nativo
                  </Button>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  {!selectedCustomMaterial && selectedModuleNumber < subjectModules.length && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleAdvanceToNextModule}
                      className="font-sans text-xs font-semibold flex items-center gap-1.5 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      title={`Pular para o Módulo 0${selectedModuleNumber + 1}`}
                    >
                      <span>Próximo Módulo (0{selectedModuleNumber + 1})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Button>
                  )}

                  <Button
                    variant="brand"
                    size="sm"
                    disabled={isSavingProgress}
                    onClick={handleRegisterStudy}
                    className="font-sans text-xs font-bold flex items-center gap-1.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Concluir Aula (+25 XP)' : 'Salvar Marca-Página (+15 XP)'}</span>
                  </Button>
                </div>
              </div>

            </div>

          </Card>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: TIMER & SYNCED FIXATION QUESTIONS (5 or 4 cols)*/}
        {/* ============================================================ */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-5">
          
          {/* 1. Timer Block (Cadência Configurável com Isolamento de Render) */}
          <CadenceTimerWidget
            timerMode={timerMode}
            readingMinutes={getReadingMinutes()}
            questionsMinutes={getQuestionsMinutes()}
            cadencePreset={cadencePreset}
            customReadingMin={customReadingMin}
            customQuestionsMin={customQuestionsMin}
            onModeChange={(mode) => setTimerMode(mode)}
            onTimeExpired={(mode) => {
              if (mode === 'leitura') {
                info('⏱️ Bloco de Leitura Concluído!', `Excelente foco! Hora de iniciar o bloco de ${getQuestionsMinutes()} min de questões de fixação.`);
                handleSwitchToQuestions();
              } else {
                info('⏱️ Bloco de Questões Encerrado!', 'Sessão completa de estudos registrada com sucesso!');
              }
            }}
            onTick={(elapsed) => {
              sessionElapsedMinutesRef.current = elapsed;
            }}
            onOpenCadenceModal={() => setIsCadenceModalOpen(true)}
          />

          {/* 2. Synced Questions Block (Bateria Inteligente de Questões do Edital) */}
          <Card className="p-5 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
            <div className="flex flex-col gap-2 pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-sans font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[var(--accent-warning)]" />
                    <span>BATERIA DE FIXAÇÃO DO EDITAL</span>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    Banca {currentCareer.banca} • {selectedSubject}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-emerald-bg)] text-[var(--accent-success)] font-bold">
                    {Object.values(answeredQuestions).filter(a => a.isCorrect).length}/{Object.keys(answeredQuestions).length} Acertos
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-amber-bg)] text-[var(--accent-warning)] font-bold">
                    +{Object.values(answeredQuestions).reduce((acc, curr) => acc + curr.xpGained, 0)} XP
                  </span>
                </div>
              </div>

              {/* Question Pills Carousel */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {questionBatch.map((q, idx) => {
                  const ans = answeredQuestions[idx];
                  const isCurrent = idx === activeQuestionIndex;
                  let pillStyle = "bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]";
                  if (ans) {
                    pillStyle = ans.isCorrect
                      ? "bg-[var(--accent-emerald-bg)] border-[var(--accent-success)] text-[var(--accent-success)] font-bold"
                      : "bg-[var(--color-status-danger-bg)] border-[var(--accent-danger)] text-[var(--accent-danger)] font-bold";
                  } else if (isCurrent) {
                    pillStyle = "bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--accent-primary)] font-bold ring-2 ring-[var(--accent-primary)]";
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setActiveQuestionIndex(idx);
                        setUserSelectedOption(answeredQuestions[idx]?.selected || null);
                        setAnswered(Boolean(answeredQuestions[idx]));
                      }}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-all shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${pillStyle}`}
                      title={`Ir para a Questão ${idx + 1}`}
                    >
                      Q{idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Info Header */}
            <div className="flex items-center justify-between text-xs font-sans text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">
                Questão {activeQuestionIndex + 1} de {questionBatch.length}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                {currentActiveQuestion.topic || currentModule.title}
              </span>
            </div>

            {/* Question Statement */}
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans">
              {currentActiveQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-2 pt-1 font-sans text-xs">
              {Object.entries(currentActiveQuestion.options || {}).map(([key, text]) => {
                const currentAns = answeredQuestions[activeQuestionIndex];
                const isSelected = (currentAns?.selected || userSelectedOption) === key;
                const isCorrect = key === currentActiveQuestion.answer;
                const isQuestionAnswered = Boolean(currentAns) || answered;

                let optionStyles = "bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)]";
                if (isQuestionAnswered) {
                  if (isCorrect) {
                    optionStyles = "bg-[var(--accent-emerald-bg)] border-[var(--accent-success)] text-[var(--accent-success)] font-bold";
                  } else if (isSelected && !isCorrect) {
                    optionStyles = "bg-[var(--color-status-danger-bg)] border-[var(--accent-danger)] text-[var(--accent-danger)] font-medium";
                  } else {
                    optionStyles = "opacity-50 bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)]";
                  }
                }

                return (
                  <button
                    key={key}
                    type="button"
                    disabled={isQuestionAnswered || isAnsweringQuestion}
                    onClick={() => handleSelectOption(key)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${optionStyles}`}
                  >
                    <span className="w-5 h-5 rounded-md font-mono font-bold text-xs flex items-center justify-center shrink-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      {key}
                    </span>
                    <span className="leading-snug pt-0.5">{text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation / Justification */}
            {(Boolean(answeredQuestions[activeQuestionIndex]) || answered) && (
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs font-sans">
                <div className="flex items-center gap-1.5 font-bold font-sans text-xs text-[var(--accent-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-success)]" />
                  <span>GABARITO COMENTADO: LETRA {currentActiveQuestion.answer}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {answeredQuestions[activeQuestionIndex]?.explanation || currentActiveQuestion.explanation}
                </p>

                {answeredQuestions[activeQuestionIndex] && !answeredQuestions[activeQuestionIndex].isCorrect && (
                  <div className="p-2.5 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 text-[var(--accent-danger)] text-xs font-sans flex items-center gap-2">
                    <span>📕</span>
                    <span><strong>Caderno de Erros:</strong> Registrada automaticamente para você revisar.</span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Actions for Question Batch */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeQuestionIndex <= 0}
                  onClick={() => {
                    const prevIdx = activeQuestionIndex - 1;
                    setActiveQuestionIndex(prevIdx);
                    setUserSelectedOption(answeredQuestions[prevIdx]?.selected || null);
                    setAnswered(Boolean(answeredQuestions[prevIdx]));
                  }}
                  className="font-sans text-xs flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Anterior</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeQuestionIndex >= questionBatch.length - 1}
                  onClick={() => {
                    const nextIdx = activeQuestionIndex + 1;
                    setActiveQuestionIndex(nextIdx);
                    setUserSelectedOption(answeredQuestions[nextIdx]?.selected || null);
                    setAnswered(Boolean(answeredQuestions[nextIdx]));
                  }}
                  className="font-sans text-xs flex items-center gap-1"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>

              <Button
                variant="secondary"
                size="sm"
                disabled={isGeneratingMoreQuestions}
                onClick={handleGenerateMoreQuestions}
                className="font-sans text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                title="Gerar +5 questões inéditas da banca sobre este tema"
              >
                {isGeneratingMoreQuestions ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[var(--accent-primary)]" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-warning)]" />
                )}
                <span>{isGeneratingMoreQuestions ? 'Gerando...' : '+5 Questões'}</span>
              </Button>
            </div>
          </Card>

        </div>

      </div>

      {/* 4. Cadence Configuration Modal (via Portal) */}
      {isCadenceModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsCadenceModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-2xl p-6 space-y-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight">
                  Configurar Cadência de Estudo
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Defina a proporção ideal para o seu perfil
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCadenceModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block font-sans">
                Selecione o Modelo de Sessão:
              </label>
              
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => applyCadencePreset('60_30')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    cadencePreset === '60_30'
                      ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-sans">⚡ Foco Profundo (Recomendado)</div>
                    <div className="text-xs text-[var(--text-muted)] font-sans">60 min Teoria + 30 min Questões FGV</div>
                  </div>
                  {cadencePreset === '60_30' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('45_15')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    cadencePreset === '45_15'
                      ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-sans">🚀 Sprint Ágil</div>
                    <div className="text-xs text-[var(--text-muted)] font-sans">45 min Teoria + 15 min Questões</div>
                  </div>
                  {cadencePreset === '45_15' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('50_10')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    cadencePreset === '50_10'
                      ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-sans">🍅 Pomodoro Concurseiro</div>
                    <div className="text-xs text-[var(--text-muted)] font-sans">50 min Teoria + 10 min Questões</div>
                  </div>
                  {cadencePreset === '50_10' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('90_30')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    cadencePreset === '90_30'
                      ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-sans">🏛️ Ciclo Imersivo (2 Horas)</div>
                    <div className="text-xs text-[var(--text-muted)] font-sans">90 min Teoria + 30 min Questões</div>
                  </div>
                  {cadencePreset === '90_30' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>
              </div>

              {/* Custom Values */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3 pt-3">
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block font-sans">
                  Ou digite minutos personalizados:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[var(--text-muted)] block mb-1 font-sans">Leitura (min):</label>
                    <input
                      type="number"
                      min="10"
                      max="180"
                      value={customReadingMin}
                      onChange={(e) => setCustomReadingMin(Math.max(5, parseInt(e.target.value, 10) || 60))}
                      className="w-full h-9 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--text-muted)] block mb-1 font-sans">Questões (min):</label>
                    <input
                      type="number"
                      min="5"
                      max="120"
                      value={customQuestionsMin}
                      onChange={(e) => setCustomQuestionsMin(Math.max(5, parseInt(e.target.value, 10) || 30))}
                      className="w-full h-9 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none"
                    />
                  </div>
                </div>
                <Button
                  variant="brand"
                  size="sm"
                  fullWidth={true}
                  onClick={() => applyCadencePreset('custom')}
                  className="font-sans text-xs font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  Salvar Cadência Personalizada
                </Button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 5. Upload Modal (via Portal) */}
      {isUploadModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsUploadModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-2xl p-6 space-y-5 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight">
                  Subir PDF de Aula (Qualquer Formato)
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Compatível com Estratégia, Gran Cursos, Direção, Doutrina e Resumos
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* 1. Arquivo PDF */}
              <div className="space-y-1.5">
                <label className="font-sans text-xs uppercase text-[var(--text-muted)] font-bold">
                  1. Arquivo PDF da Apostila / Resumo:
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-5 rounded-xl border-2 border-dashed border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-[var(--bg-elevated)] text-center cursor-pointer space-y-2 transition-colors"
                >
                  <UploadCloud className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
                  <div className="text-xs font-bold text-[var(--text-primary)]">
                    {selectedFile ? selectedFile.name : "Clique para selecionar o PDF"}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-sans">
                    Detecta automaticamente teoria vs questões comentadas, sumário e páginas
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="application/pdf"
                    className="hidden"
                  />
                </div>
              </div>

              {/* 2. Nome de Identificação Personalizado */}
              <div className="space-y-1.5">
                <label className="font-sans text-xs uppercase text-[var(--text-muted)] font-bold flex items-center justify-between">
                  <span>2. Nome de Identificação:</span>
                  <span className="text-[10px] text-[var(--accent-primary)] font-mono font-normal">Como aparecerá na sua estante</span>
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="Ex: Aula 01 - Conceito de Tributo e Espécies Tributárias"
                  className="w-full h-10 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-placeholder)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] font-sans text-xs"
                />
              </div>

              {/* 3. Grid: Disciplina + Número da Aula */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="font-sans text-xs uppercase text-[var(--text-muted)] font-bold">
                    3. Disciplina do Edital:
                  </label>
                  <select
                    value={uploadSubject}
                    onChange={(e) => setUploadSubject(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none cursor-pointer font-sans text-xs"
                  >
                    {careerSubjects.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs uppercase text-[var(--text-muted)] font-bold">
                    Nº da Aula:
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={customLessonNumber}
                    onChange={(e) => setCustomLessonNumber(e.target.value)}
                    placeholder="Ex: 1"
                    className="w-full h-10 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-placeholder)] focus:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] font-mono text-xs"
                  />
                </div>
              </div>

              {uploadError && (
                <div className="p-3 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 text-xs text-[var(--accent-danger)] font-mono">
                  {uploadError}
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  fullWidth={true}
                  onClick={() => setIsUploadModalOpen(false)}
                  className="font-sans text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="brand"
                  size="md"
                  fullWidth={true}
                  disabled={isUploading || !selectedFile}
                  className="font-bold font-sans text-xs shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  {isUploading ? "Processando e Indexando..." : "Salvar e Indexar PDF"}
                </Button>
              </div>

            </form>

          </div>
        </div>,
        document.body
      )}

      {/* 6. Modal de Subtópicos do Edital Oficial (via Portal) */}
      {isSubtopicsModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsSubtopicsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-2xl p-6 space-y-4 shadow-2xl text-left max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>Árvore de Subtópicos do Edital Oficial</span>
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  {selectedSubject} • {currentCareer.name} ({editalSubtopics.length} tópicos mapeados)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubtopicsModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {editalSubtopics.map((st, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                        Aula 0{st.lessonNumber}
                      </span>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                        {st.title}
                      </h4>
                    </div>
                    {st.keyTopics && (
                      <p className="text-xs text-[var(--text-muted)] font-sans line-clamp-2">
                        {st.keyTopics}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubtopicsModalOpen(false);
                      if (st.lessonNumber <= subjectModules.length) {
                        handleSelectModule(st.lessonNumber);
                      }
                      info('Subtópico Selecionado', `Carregando conteúdo doutrinário de "${st.title}"...`);
                    }}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-sans text-xs font-bold transition-all shadow-xs flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    <span>Estudar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 7. Modal de Baralho de Flashcards Anki (via Portal) */}
      {isFlashcardsModalOpen && flashcardDeck && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsFlashcardsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-2xl p-6 space-y-5 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-amber-500" />
                  <span>{flashcardDeck.deckTitle}</span>
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-sans">
                  Card {currentCardIndex + 1} de {flashcardDeck.cards.length} • Repetição Espaçada Ativa
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFlashcardsModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Flashcard Interativo com Flip */}
            {flashcardDeck.cards[currentCardIndex] && (
              <div 
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="min-h-[220px] p-6 rounded-2xl bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)] border-2 border-dashed border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)] cursor-pointer flex flex-col justify-between transition-all shadow-md group select-none"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isCardFlipped 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {isCardFlipped ? '💡 Verso • Resposta & Fundamento' : '❓ Frente • Pergunta / Conceito'}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] font-sans">
                    Clique para virar ↺
                  </span>
                </div>

                <div className="py-4 text-center">
                  <p className="font-sans text-sm sm:text-base font-bold text-[var(--text-primary)] leading-relaxed">
                    {isCardFlipped 
                      ? flashcardDeck.cards[currentCardIndex].back 
                      : flashcardDeck.cards[currentCardIndex].front}
                  </p>
                </div>

                <div className="text-center text-[10px] text-[var(--text-muted)] font-mono">
                  {flashcardDeck.cards[currentCardIndex].topic}
                </div>
              </div>
            )}

            {/* Controles de Navegação do Baralho */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                disabled={currentCardIndex === 0}
                onClick={() => {
                  setCurrentCardIndex(prev => Math.max(0, prev - 1));
                  setIsCardFlipped(false);
                }}
                className="px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-sans font-bold text-[var(--text-primary)] disabled:opacity-40 flex items-center gap-1.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-1">
                {flashcardDeck.cards.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentCardIndex ? 'bg-[var(--accent-primary)] w-4' : 'bg-[var(--border-subtle)]'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={currentCardIndex === flashcardDeck.cards.length - 1}
                onClick={() => {
                  setCurrentCardIndex(prev => Math.min(flashcardDeck.cards.length - 1, prev + 1));
                  setIsCardFlipped(false);
                }}
                className="px-3 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-sans font-bold hover:bg-[var(--accent-primary-hover)] disabled:opacity-40 flex items-center gap-1.5 transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Modal de Lançamento de Estudo Retroativo */}
      <PastStudyModal
        isOpen={isPastStudyModalOpen}
        onClose={() => setIsPastStudyModalOpen(false)}
        careerId={careerId}
        onStudySaved={() => {
          loadMaterials();
        }}
      />

    </div>
  );
};
