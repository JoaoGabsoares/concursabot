import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Card, Button, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent, getModulesForSubject, getModulePage, DisciplineModule, ModulePage } from '../../utils/studyContent';
import { api } from '../../api/client';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Plus, 
  BookOpen, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  ExternalLink,
  Bookmark,
  Sparkles,
  HelpCircle,
  Eye,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Scale,
  ShieldCheck,
  FileSearch,
  SlidersHorizontal,
  Flame,
  ArrowRight,
  Trash2
} from 'lucide-react';

interface StudyRoomPageProps {
  careerId: string;
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
  estimatedSessionsRemaining: number;
  resumeRecommendation: string;
}

type CadencePreset = '60_30' | '45_15' | '50_10' | '90_30' | 'custom';

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId }) => {
  const { success, error: toastError, info } = useToast();
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  const [selectedSubject, setSelectedSubject] = useState<string>(careerSubjects[0]?.name || 'Direito Constitucional');
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

  // Cadence State (Configurável: 60/30, 45/15, 50/10, 90/30 ou Custom)
  const [cadencePreset, setCadencePreset] = useState<CadencePreset>('60_30');
  const [customReadingMin, setCustomReadingMin] = useState<number>(60);
  const [customQuestionsMin, setCustomQuestionsMin] = useState<number>(30);
  const [isCadenceModalOpen, setIsCadenceModalOpen] = useState<boolean>(false);

  // Timer State (Leitura vs Questões vs Livre)
  const [timerMode, setTimerMode] = useState<'leitura' | 'questoes' | 'livre'>('leitura');
  const [timerSeconds, setTimerSeconds] = useState<number>(60 * 60); // 60 min default
  const [initialTimerSeconds, setInitialTimerSeconds] = useState<number>(60 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Reading Pace & Velocity state
  const [paceInfo, setPaceInfo] = useState<ReadingPaceInfo | null>(null);

  // Upload Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSubject, setUploadSubject] = useState<string>(careerSubjects[0]?.name || 'Geral');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Custom Uploaded Materials
  const [uploadedMaterials, setUploadedMaterials] = useState<CustomMaterial[]>([]);
  const [selectedCustomMaterial, setSelectedCustomMaterial] = useState<CustomMaterial | null>(null);

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            if (timerMode === 'leitura') {
              info('⏱️ Bloco de Leitura Concluído!', `Excelente foco! Hora de iniciar o bloco de ${getQuestionsMinutes()} min de questões de fixação.`);
              handleSwitchToQuestions();
            } else {
              info('⏱️ Bloco de Questões Encerrado!', 'Sessão completa de estudos registrada com sucesso!');
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds, timerMode, info]);

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
    setIsTimerRunning(false);
    let rMin = 60;
    if (preset === '45_15') rMin = 45;
    else if (preset === '50_10') rMin = 50;
    else if (preset === '90_30') rMin = 90;
    else if (preset === 'custom') rMin = customReadingMin;

    if (timerMode === 'leitura') {
      setTimerSeconds(rMin * 60);
      setInitialTimerSeconds(rMin * 60);
    }
    setIsCadenceModalOpen(false);
    info('Cadência Atualizada', `Definido: ${rMin}m Leitura + ${getQuestionsMinutes()}m Questões.`);
  };

  const handleSetTimerMode = (mode: 'leitura' | 'questoes' | 'livre') => {
    setTimerMode(mode);
    setIsTimerRunning(false);
    if (mode === 'leitura') {
      const secs = getReadingMinutes() * 60;
      setTimerSeconds(secs);
      setInitialTimerSeconds(secs);
    } else if (mode === 'questoes') {
      const secs = getQuestionsMinutes() * 60;
      setTimerSeconds(secs);
      setInitialTimerSeconds(secs);
    } else {
      setTimerSeconds(20 * 60);
      setInitialTimerSeconds(20 * 60);
    }
  };

  // Transição rápida: Marcar parada atual e ir direto para bloco de questões
  const handleSwitchToQuestions = async () => {
    await handleRegisterStudy();
    setTimerMode('questoes');
    const qSecs = getQuestionsMinutes() * 60;
    setTimerSeconds(qSecs);
    setInitialTimerSeconds(qSecs);
    setIsTimerRunning(true);
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
    setTotalPages(mat.theory_pages || mat.total_pages || 45);
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

  const activePage: ModulePage | null = !selectedCustomMaterial 
    ? getModulePage(selectedSubject, currentModule.moduleNumber, currentPage) 
    : null;

  const lesson = getLessonContent(selectedSubject);
  const activeQuestion = activePage?.question || lesson.question;

  const scrollToReaderTop = () => {
    if (readerTopRef.current) {
      readerTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (opt: string) => {
    if (answered) return;
    setUserSelectedOption(opt);
    setAnswered(true);
    if (opt === activeQuestion.answer) {
      success('Resposta Correta!', 'Excelente fixação no ponto do edital.', 10);
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
    formData.append('careerId', careerId);
    formData.append('studyStatus', 'unread');

    try {
      const result = await api.uploadStudyMaterial(formData, 'user_joao', careerId);
      success('PDF Indexado com Heurísticas Universais!', `Detectadas ${result.theoryPages || 45} páginas de teoria e ${result.exercisePages || 0} páginas de exercícios.`);
      setSelectedFile(null);
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
      const durationMinutes = Math.round((initialTimerSeconds - timerSeconds) / 60) || 30;
      const res = await api.registerStudy({
        materialId: selectedCustomMaterial?.id,
        subject: selectedCustomMaterial ? selectedCustomMaterial.subject : selectedSubject,
        lessonNumber: selectedCustomMaterial?.lesson_number || lesson.lessonNumber,
        title: selectedCustomMaterial ? selectedCustomMaterial.title : lesson.topic,
        currentPage,
        totalPages,
        isCompleted,
        durationMinutes: durationMinutes > 0 ? durationMinutes : 30,
        notes: studyNotes
      });

      if (res && res.success) {
        if (isCompleted) {
          success('🏆 Aula Concluída!', `Parabéns! Você concluiu a aula e ganhou +${res.xpGained || 25} XP.`);
        } else {
          info('🔖 Marca-Página Salvo!', `Progresso salvo na Página ${currentPage} de ${totalPages}. (+${res.xpGained || 15} XP)`);
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

        {/* Action Controls: Cadence Preset & Upload PDF */}
        <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setIsCadenceModalOpen(true)}
            className="px-3 py-2 rounded-xl text-xs font-mono font-bold bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center gap-1.5 transition-all shadow-sm"
            title="Ajustar proporção de tempo entre Leitura Teórica e Questões"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Cadência: {getReadingMinutes()}m / {getQuestionsMinutes()}m</span>
          </button>

          <Button
            variant="brand"
            size="sm"
            onClick={() => setIsUploadModalOpen(true)}
            className="font-mono text-xs flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            <UploadCloud className="w-4 h-4" />
            <span>+ Subir PDF da Aula</span>
          </Button>
        </div>
      </div>

      {/* 2. Top Navigation: Disciplinas do Edital & PDFs Cadastrados */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider shrink-0 pl-1">
          Disciplinas:
        </span>
        {careerSubjects.map((sub) => {
          const isSelected = selectedSubject === sub.name && !selectedCustomMaterial;
          return (
            <button
              key={sub.name}
              type="button"
              onClick={() => handleSubjectChange(sub.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
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

      {/* Uploaded PDF Shelf with Smart Indicators */}
      {uploadedMaterials.length > 0 && (
        <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider shrink-0">
            📁 PDFs Carregados:
          </span>
          {uploadedMaterials.map((mat) => {
            const isSelected = selectedCustomMaterial?.id === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => handleSelectMaterial(mat)}
                className={`group px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white font-bold shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="max-w-[160px] truncate">{mat.title || mat.filename}</span>
                {mat.theory_pages && (
                  <span className="text-[10px] opacity-80 bg-black/20 px-1.5 py-0.5 rounded">
                    {mat.current_page || 1}/{mat.theory_pages}p teoria
                  </span>
                )}
                <button
                  type="button"
                  title="Excluir este PDF do computador"
                  onClick={(e) => handleDeleteMaterial(e, mat.id)}
                  className="opacity-0 group-hover:opacity-100 p-0.5 hover:text-rose-400 transition-opacity ml-0.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
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
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode('pdf')}
                  disabled={!selectedCustomMaterial?.pdfUrl}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === 'notebook'
                      ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>📝 Caderno de Doutrina Paginado</span>
                </button>
              </div>

              {/* Universal Badges */}
              {selectedCustomMaterial && (
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  {selectedCustomMaterial.theory_pages && (
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                      📖 {selectedCustomMaterial.theory_pages}p Teoria
                    </span>
                  )}
                  {selectedCustomMaterial.exercise_pages && selectedCustomMaterial.exercise_pages > 0 && (
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                      🎯 {selectedCustomMaterial.exercise_pages}p Questões
                    </span>
                  )}
                  <a
                    href={selectedCustomMaterial.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[var(--accent-primary)] hover:underline flex items-center gap-1 shrink-0 ml-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* SELETOR DE MÓDULOS DA DISCIPLINA (Sem PDF) */}
            {!selectedCustomMaterial && subjectModules.length > 0 && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Módulos de {selectedSubject} ({subjectModules.length} Módulos Disponíveis)</span>
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Selecione o módulo para estudar:
                  </span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {subjectModules.map((mod) => {
                    const isModActive = mod.moduleNumber === currentModule.moduleNumber;
                    return (
                      <button
                        key={mod.moduleNumber}
                        type="button"
                        onClick={() => handleSelectModule(mod.moduleNumber)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                          isModActive
                            ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                            : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        <span>Módulo 0{mod.moduleNumber}</span>
                        {isModActive && <span className="text-[10px] opacity-80 font-normal">({currentPage}/5p)</span>}
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
                      ? `PDF DA AULA • ${selectedCustomMaterial.subject}`
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

              {/* NAVEGADOR DE PÁGINAS DO MÓDULO (PÁGINAS 1 A 5) */}
              {!selectedCustomMaterial && (
                <div className="pt-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none border-b border-[var(--border-subtle)] pb-3">
                  {[
                    { num: 1, label: '1. Doutrina & Fundamentos' },
                    { num: 2, label: '2. Esquemas & Tabelas' },
                    { num: 3, label: '3. Casos & Pegadinhas' },
                    { num: 4, label: '4. Letra de Lei & Súmulas' },
                    { num: 5, label: '5. Treino de Fixação' }
                  ].map((p) => {
                    const isPageActive = currentPage === p.num;
                    return (
                      <button
                        key={p.num}
                        type="button"
                        onClick={() => handleSelectPageDirect(p.num)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                          isPageActive
                            ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold border border-[var(--accent-primary)] shadow-xs'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Partial Reading Progress & Pace Intelligence Banner */}
            {selectedCustomMaterial && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 font-mono font-bold text-[var(--text-primary)]">
                    <Flame className="w-4 h-4 text-amber-400" />
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
                  className="font-mono text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm"
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
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-1">
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
                    <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-[10px] font-bold uppercase tracking-wider">
                      🎯 Tendência da Banca {currentCareer.banca} • {activePage?.category || 'Doutrina & Teoria'}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] font-bold">
                      Página {currentPage} de {effectiveTotalPages}
                    </span>
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
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-mono text-[10px] font-bold">
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
                    {selectedCustomMaterial?.content_text 
                      ? selectedCustomMaterial.content_text
                      : (activePage ? activePage.bodyText : lesson.section1Body)}
                  </p>

                  {/* Deep Dive Box */}
                  {activePage?.deepDiveText && (
                    <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 mt-3 shadow-xs">
                      <div className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Aprofundamento Teórico & Doutrina</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-sans">
                        {activePage.deepDiveText}
                      </p>
                    </div>
                  )}

                  {/* Tabela de Esquemas / Verdade (Se disponível) */}
                  {activePage?.tableData && (
                    <div className="mt-4 rounded-xl border border-[var(--border-subtle)] overflow-hidden shadow-xs">
                      <div className="p-2.5 bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)] font-mono text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
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
                                {row.map((cell, cIdx) => (
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
                  {activePage?.mnemonics && activePage.mnemonics.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-[10px] font-bold">
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
                  {activePage?.practicalCases && activePage.practicalCases.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-mono text-[10px] font-bold">
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
                            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-500 font-mono">
                              ⚡ <strong>Dica da Banca:</strong> {pc.tip}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Legislação Aplicada & Artigos de Ouro */}
                  {activePage?.lawArticles && activePage.lawArticles.length > 0 && (
                    <div className="space-y-3 pt-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-[var(--border-subtle)]">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-mono text-[10px] font-bold">
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
                  {activePage?.question && (
                    <div className="space-y-4 pt-4">
                      <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                          <span className="px-2.5 py-1 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-[10px] font-bold">
                            🎯 QUESTÃO DE FIXAÇÃO DO MÓDULO 0{currentModule.moduleNumber}
                          </span>
                          <span className="font-mono text-xs text-[var(--accent-success)] font-bold">+10 XP</span>
                        </div>

                        <p className="text-xs sm:text-sm font-sans font-medium text-[var(--text-primary)] leading-relaxed">
                          {activePage.question.question}
                        </p>

                        <div className="space-y-2">
                          {Object.entries(activePage.question.options).map(([letter, text]) => {
                            const isSelected = userSelectedOption === letter;
                            const isCorrect = letter === activePage.question?.answer;
                            let btnStyle = 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]';

                            if (answered) {
                              if (isCorrect) {
                                btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold';
                              } else if (isSelected) {
                                btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                              }
                            }

                            return (
                              <button
                                key={letter}
                                type="button"
                                onClick={() => handleSelectOption(letter)}
                                disabled={answered}
                                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle}`}
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
                            <div className="font-mono font-bold text-[var(--accent-primary)] flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" />
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

              </div>
            )}

            {/* ============================================================ */}
            {/* 4. SMART PAGE TRACKER & READING BOOKMARK BAR                 */}
            {/* ============================================================ */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-4 pt-4 mt-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--text-primary)]">
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
                  <label className="text-[11px] font-mono text-[var(--text-muted)] block">
                    Página Atual da Leitura:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevPage}
                      disabled={currentPage <= 1}
                      className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center justify-center disabled:opacity-40 transition-colors"
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
                        className="w-16 h-8 text-center rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                      />
                      <span className="text-[var(--text-muted)]">de {effectiveTotalPages}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextPage}
                      disabled={currentPage >= effectiveTotalPages}
                      className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] flex items-center justify-center disabled:opacity-40 transition-colors"
                      title="Próxima Página"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] block">
                    Status da Lição:
                  </label>
                  <div className="flex items-center gap-4 pt-1 text-xs">
                    <label className="flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer">
                      <input
                        type="radio"
                        name="lesson_status"
                        checked={!isCompleted}
                        onChange={() => setIsCompleted(false)}
                        className="accent-[var(--accent-primary)]"
                      />
                      <span>Em Andamento</span>
                    </label>

                    <label className="flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer">
                      <input
                        type="radio"
                        name="lesson_status"
                        checked={isCompleted}
                        onChange={() => setIsCompleted(true)}
                        className="accent-emerald-500"
                      />
                      <span className="font-bold text-emerald-400">Aula Finalizada</span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Study Notes */}
              <div className="space-y-1 pt-1">
                <label className="text-[11px] font-mono text-[var(--text-muted)] block">
                  Anotação do Ponto de Parada:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Parei no Art. 150 da CF/88 (Princípio da Anterioridade Anual vs Nonagesimal)..."
                  value={studyNotes}
                  onChange={(e) => setStudyNotes(e.target.value)}
                  className="w-full h-9 px-3 rounded-lg text-xs bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] shadow-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)]">
                {selectedCustomMaterial && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCustomMaterial(null)}
                    className="font-mono text-xs"
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
                      className="font-mono text-xs font-semibold flex items-center gap-1.5 shadow-xs"
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
                    className="font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm"
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
          
          {/* 1. Timer Block (Cadência Configurável) */}
          <Card className="p-5 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
                <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>TIMER DE CADÊNCIA</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--accent-primary)] font-bold uppercase">
                {timerMode === 'leitura' ? `${getReadingMinutes()}m Leitura` : timerMode === 'questoes' ? `${getQuestionsMinutes()}m Questões` : 'Livre'}
              </span>
            </div>

            {/* Timer Modes */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-[11px]">
              <button
                type="button"
                onClick={() => handleSetTimerMode('leitura')}
                className={`py-1.5 rounded-md font-bold transition-all ${
                  timerMode === 'leitura'
                    ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Leitura ({getReadingMinutes()}m)
              </button>
              <button
                type="button"
                onClick={() => handleSetTimerMode('questoes')}
                className={`py-1.5 rounded-md font-bold transition-all ${
                  timerMode === 'questoes'
                    ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Questões ({getQuestionsMinutes()}m)
              </button>
              <button
                type="button"
                onClick={() => handleSetTimerMode('livre')}
                className={`py-1.5 rounded-md font-bold transition-all ${
                  timerMode === 'livre'
                    ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Livre (20m)
              </button>
            </div>

            {/* Big Countdown Display */}
            <div className="text-center py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="font-mono font-bold text-4xl sm:text-5xl text-[var(--text-primary)] tracking-widest">
                {formatTimer(timerSeconds)}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={isTimerRunning ? "outline" : "brand"}
                size="sm"
                fullWidth={true}
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{timerSeconds === initialTimerSeconds ? "Iniciar Bloco" : "Continuar"}</span>
                  </>
                )}
              </Button>

              <button
                type="button"
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(initialTimerSeconds);
                }}
                className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                title="Reiniciar Cronômetro"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </Card>

          {/* 2. Synced Questions Block */}
          <Card className="p-5 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>QUESTÃO DE FIXAÇÃO DA AULA</span>
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">
                  Banca {currentCareer.banca} • {selectedSubject}
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold">
                Q#{activeQuestion.id}
              </span>
            </div>

            {/* Question Statement */}
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans">
              {activeQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-2 pt-1 font-sans text-xs">
              {Object.entries(activeQuestion.options).map(([key, text]) => {
                const isSelected = userSelectedOption === key;
                const isCorrect = key === activeQuestion.answer;

                let optionStyles = "bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-primary)]";
                if (answered) {
                  if (isCorrect) {
                    optionStyles = "bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold";
                  } else if (isSelected && !isCorrect) {
                    optionStyles = "bg-rose-500/10 border-rose-500 text-rose-400";
                  } else {
                    optionStyles = "opacity-50 bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)]";
                  }
                }

                return (
                  <button
                    key={key}
                    type="button"
                    disabled={answered}
                    onClick={() => handleSelectOption(key)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${optionStyles}`}
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
            {answered && (
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs font-sans">
                <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-[var(--accent-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>GABARITO COMENTADO: LETRA {activeQuestion.answer}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {activeQuestion.explanation}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)]">
                  💡 Este conceito foi abordado diretamente na doutrina desta lição.
                </div>
              </div>
            )}
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
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Defina a proporção ideal para o seu perfil
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCadenceModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <label className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                Selecione o Modelo de Sessão:
              </label>
              
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => applyCadencePreset('60_30')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    cadencePreset === '60_30'
                      ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs">⚡ Foco Profundo (Recomendado)</div>
                    <div className="text-[11px] text-[var(--text-muted)] font-sans">60 min Teoria + 30 min Questões FGV</div>
                  </div>
                  {cadencePreset === '60_30' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('45_15')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    cadencePreset === '45_15'
                      ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs">🚀 Sprint Ágil</div>
                    <div className="text-[11px] text-[var(--text-muted)] font-sans">45 min Teoria + 15 min Questões</div>
                  </div>
                  {cadencePreset === '45_15' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('50_10')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    cadencePreset === '50_10'
                      ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs">🍅 Pomodoro Concurseiro</div>
                    <div className="text-[11px] text-[var(--text-muted)] font-sans">50 min Teoria + 10 min Questões</div>
                  </div>
                  {cadencePreset === '50_10' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>

                <button
                  type="button"
                  onClick={() => applyCadencePreset('90_30')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    cadencePreset === '90_30'
                      ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--text-primary)] font-bold'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <div>
                    <div className="text-xs">🏛️ Ciclo Imersivo (2 Horas)</div>
                    <div className="text-[11px] text-[var(--text-muted)] font-sans">90 min Teoria + 30 min Questões</div>
                  </div>
                  {cadencePreset === '90_30' && <Check className="w-4 h-4 text-[var(--accent-primary)]" />}
                </button>
              </div>

              {/* Custom Values */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3 pt-3">
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Ou digite minutos personalizados:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-[var(--text-muted)] block mb-1">Leitura (min):</label>
                    <input
                      type="number"
                      min="10"
                      max="180"
                      value={customReadingMin}
                      onChange={(e) => setCustomReadingMin(Math.max(5, parseInt(e.target.value, 10) || 60))}
                      className="w-full h-9 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[var(--text-muted)] block mb-1">Questões (min):</label>
                    <input
                      type="number"
                      min="5"
                      max="120"
                      value={customQuestionsMin}
                      onChange={(e) => setCustomQuestionsMin(Math.max(5, parseInt(e.target.value, 10) || 30))}
                      className="w-full h-9 px-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] outline-none"
                    />
                  </div>
                </div>
                <Button
                  variant="brand"
                  size="sm"
                  fullWidth={true}
                  onClick={() => applyCadencePreset('custom')}
                  className="font-mono text-xs font-bold"
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
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Compatível com Estratégia, Gran Cursos, Direção, Doutrina e Resumos
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs sm:text-sm">
              
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase text-[var(--text-muted)] font-bold">
                  Disciplina da Aula:
                </label>
                <select
                  value={uploadSubject}
                  onChange={(e) => setUploadSubject(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none cursor-pointer font-sans"
                >
                  {careerSubjects.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase text-[var(--text-muted)] font-bold">
                  Arquivo PDF:
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 rounded-xl border-2 border-dashed border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-[var(--bg-elevated)] text-center cursor-pointer space-y-2 transition-colors"
                >
                  <UploadCloud className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
                  <div className="text-xs font-bold text-[var(--text-primary)]">
                    {selectedFile ? selectedFile.name : "Clique para selecionar o PDF"}
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] font-mono">
                    Detecta automaticamente teoria vs questões comentadas, sumário e banca
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
                  className="font-mono text-xs"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="brand"
                  size="md"
                  fullWidth={true}
                  disabled={isUploading || !selectedFile}
                  className="font-bold font-mono text-xs shadow-md"
                >
                  {isUploading ? "Processando..." : "Subir e Indexar PDF"}
                </Button>
              </div>

            </form>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
