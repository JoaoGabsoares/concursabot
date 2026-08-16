import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
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
  Check
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
  theory_completed?: boolean;
  questions_completed?: boolean;
  notes?: string;
  created_at?: string;
}

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId }) => {
  const { success, error: toastError, info } = useToast();
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  const [selectedSubject, setSelectedSubject] = useState<string>(careerSubjects[0]?.name || 'Direito Constitucional');
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // View Mode: 'resumo' | 'leitor_pdf'
  const [viewMode, setViewMode] = useState<'resumo' | 'leitor_pdf'>('resumo');

  // Study Progress State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(45);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [studyNotes, setStudyNotes] = useState<string>('');
  const [isSavingProgress, setIsSavingProgress] = useState<boolean>(false);

  // Timer State (60m Leitura | 30m Questões)
  const [timerMode, setTimerMode] = useState<'leitura' | 'questoes' | 'livre'>('leitura');
  const [timerSeconds, setTimerSeconds] = useState<number>(60 * 60); // 60 min default
  const [initialTimerSeconds, setInitialTimerSeconds] = useState<number>(60 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

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
            info('⏱️ Tempo Encerrado!', timerMode === 'leitura' ? 'Hora de fazer as questões de fixação!' : 'Bloco de questões concluído!');
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

  // Format timer MM:SS
  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSetTimer = (mode: 'leitura' | 'questoes' | 'livre') => {
    setTimerMode(mode);
    setIsTimerRunning(false);
    if (mode === 'leitura') {
      setTimerSeconds(60 * 60);
      setInitialTimerSeconds(60 * 60);
    } else if (mode === 'questoes') {
      setTimerSeconds(30 * 60);
      setInitialTimerSeconds(30 * 60);
    } else {
      setTimerSeconds(15 * 60);
      setInitialTimerSeconds(15 * 60);
    }
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

  // Sincroniza a disciplina caso a carreira mude
  useEffect(() => {
    if (careerSubjects.length > 0) {
      setSelectedSubject(careerSubjects[0].name);
      setUploadSubject(careerSubjects[0].name);
      setSelectedCustomMaterial(null);
      setUserSelectedOption(null);
      setAnswered(false);
      setCurrentPage(1);
      setIsCompleted(false);
    }
  }, [careerId]);

  // Ao trocar de disciplina, reseta o estado do quiz e limpa material customizado
  const handleSubjectChange = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setSelectedCustomMaterial(null);
    setUserSelectedOption(null);
    setAnswered(false);
    setCurrentPage(1);
    setIsCompleted(false);
    setViewMode('resumo');
  };

  // Ao selecionar material customizado, carrega seus dados de página
  const handleSelectMaterial = (mat: CustomMaterial) => {
    setSelectedCustomMaterial(mat);
    setUserSelectedOption(null);
    setAnswered(false);
    setCurrentPage(mat.current_page || 1);
    setTotalPages(mat.total_pages || 50);
    setIsCompleted(Boolean(mat.theory_completed));
    setStudyNotes(mat.notes || '');
    setViewMode('resumo');
  };

  const lesson = getLessonContent(selectedSubject);
  const activeQuestion = lesson.question;

  const handleSelectOption = (opt: string) => {
    if (answered) return;
    setUserSelectedOption(opt);
    setAnswered(true);
    if (opt === activeQuestion.answer) {
      success('Resposta Correta!', 'Excelente fixação na banca oficial.', 10);
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
      success('PDF Processado!', 'Material indexado com sucesso na Sala de Estudos.');
      setSelectedFile(null);
      setIsUploadModalOpen(false);
      await loadMaterials();
    } catch (err: any) {
      setUploadError(err.message || 'Erro ao processar o PDF com a IA.');
    } finally {
      setIsUploading(false);
    }
  };

  // Salvar Progresso e Concluir Estudo
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
      }, 'user_joao', careerId);

      if (res.success) {
        success(
          isCompleted ? '🎉 Aula Concluída!' : '📖 Progresso Salvo!',
          res.message,
          res.xpGained
        );

        if (selectedCustomMaterial) {
          setSelectedCustomMaterial((prev) => prev ? {
            ...prev,
            current_page: currentPage,
            total_pages: totalPages,
            theory_completed: isCompleted,
            notes: studyNotes
          } : null);
        }

        await loadMaterials();
      }
    } catch (err: any) {
      toastError('Erro ao registrar estudo: ' + err.message);
    } finally {
      setIsSavingProgress(false);
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar com Botões Responsivos */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Sala de Estudos Teórica
            </h1>
            <CarimboStatus status="homologado" label="RAG 2.0 OFICIAL" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Doutrina e legislação com leitor integrado e fixação na banca {currentCareer.banca}
          </p>
        </div>

        {/* Botões de Ação com whitespace-nowrap para não quebrar texto */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Botão de Upload de PDF */}
          <Button 
            variant="brand" 
            size="sm" 
            onClick={() => setIsUploadModalOpen(true)}
            className="font-mono text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <UploadCloud className="w-4 h-4 shrink-0" />
            <span>+ Subir PDF da Aula</span>
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.print()}
            className="font-mono text-xs whitespace-nowrap shrink-0"
          >
            Exportar PDF
          </Button>
          
          <Button 
            variant={showQuestions ? "secondary" : "brand"}
            size="sm" 
            onClick={() => setShowQuestions(!showQuestions)}
            className="font-mono text-xs whitespace-nowrap shrink-0"
          >
            {showQuestions ? "Ocultar Fixação" : "Mostrar Fixação"}
          </Button>
        </div>
      </div>

      {/* Widget de Timer de Estudo (1h Leitura + 30m Questões) */}
      <Card className="p-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                Ciclo de Estudo Ativo:
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xl text-[var(--text-primary)]">
                  {formatTimer(timerSeconds)}
                </span>
                <span className="text-xs text-[var(--accent-primary)] font-mono font-semibold">
                  ({timerMode === 'leitura' ? 'Bloco 1: Leitura' : timerMode === 'questoes' ? 'Bloco 2: Questões' : 'Modo Livre'})
                </span>
              </div>
            </div>
          </div>

          {/* Modos do Timer */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleSetTimer('leitura')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                timerMode === 'leitura'
                  ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
              }`}
            >
              📖 Leitura (60m)
            </button>
            <button
              onClick={() => handleSetTimer('questoes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                timerMode === 'questoes'
                  ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
              }`}
            >
              ✍️ Questões (30m)
            </button>

            <div className="h-6 w-[1px] bg-[var(--border-subtle)] mx-1 hidden sm:block" />

            {/* Controles Play/Pause/Reset */}
            <Button
              variant={isTimerRunning ? "outline" : "brand"}
              size="sm"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="font-mono text-xs flex items-center gap-1"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? 'Pausar' : 'Iniciar'}</span>
            </Button>
            <button
              onClick={() => handleSetTimer(timerMode)}
              title="Reiniciar Timer"
              className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] text-[var(--text-muted)] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Card>

      {/* Disciplinas Selector (Official Filter Badges) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
            Disciplinas do Edital ({currentCareer.name.split('—')[0]}):
          </div>
          {uploadedMaterials.length > 0 && (
            <span className="text-[11px] font-mono text-[var(--accent-primary)] font-bold">
              {uploadedMaterials.length} PDF{uploadedMaterials.length > 1 ? 's' : ''} Pessoais no Acervo
            </span>
          )}
        </div>

        {/* Disciplinas Oficiais */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {careerSubjects.map((subj) => {
            const isSelected = selectedSubject === subj.name && !selectedCustomMaterial;
            return (
              <button
                key={subj.name}
                onClick={() => handleSubjectChange(subj.name)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border shadow-sm ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] font-bold shadow-md'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]'
                }`}
              >
                {subj.name}
              </button>
            );
          })}
        </div>

        {/* PDFs Carregados pelo Aluno (se existirem) */}
        {uploadedMaterials.length > 0 && (
          <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Seus PDFs de Apostilas Enviados (Clique para Estudar):</span>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {uploadedMaterials.map((mat) => {
                const isSelected = selectedCustomMaterial?.id === mat.id;
                const isMatCompleted = Boolean(mat.theory_completed);
                return (
                  <button
                    key={mat.id}
                    onClick={() => handleSelectMaterial(mat)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--accent-primary)] font-bold shadow-sm'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[180px]">{mat.title || mat.filename}</span>
                    {isMatCompleted ? (
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold">
                        ✓ LIDO
                      </span>
                    ) : mat.current_page && mat.current_page > 1 ? (
                      <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 font-mono text-[9px] font-bold">
                        PÁG {mat.current_page}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Split Study Grid (Theory Left / Practice Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Theory & Notes (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 sm:p-8 space-y-6 border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md">
            
            {/* View Mode Toggle (Resumo vs Leitor) */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-[var(--bg-elevated)] p-1 rounded-lg border border-[var(--border-subtle)]">
                <button
                  onClick={() => setViewMode('resumo')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    viewMode === 'resumo'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 inline mr-1" />
                  Doutrina Esquematizada
                </button>
                <button
                  onClick={() => setViewMode('leitor_pdf')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    viewMode === 'leitor_pdf'
                      ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" />
                  Leitor de Conteúdo Completo
                </button>
              </div>

              {selectedCustomMaterial?.pdfUrl && (
                <a
                  href={selectedCustomMaterial.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[var(--accent-primary)] hover:underline flex items-center gap-1 shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir PDF Original</span>
                </a>
              )}
            </div>

            {selectedCustomMaterial ? (
              /* Custom Material View */
              <>
                <div className="space-y-2 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                      PDF PESSOAL • {selectedCustomMaterial.subject}
                    </span>
                    <CarimboStatus 
                      status={selectedCustomMaterial.theory_completed ? "homologado" : "em_revisao"} 
                      label={selectedCustomMaterial.theory_completed ? "CONCLUÍDO" : `EM ANDAMENTO (PÁG ${currentPage}/${totalPages})`} 
                    />
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                    {selectedCustomMaterial.title || selectedCustomMaterial.filename}
                  </h2>
                </div>

                {viewMode === 'resumo' ? (
                  <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs space-y-1">
                      <span className="font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block text-[10px]">
                        Resumo Estratégico do Material
                      </span>
                      <p className="whitespace-pre-line leading-relaxed text-[var(--text-primary)]">
                        {selectedCustomMaterial.summary || selectedCustomMaterial.content_text?.substring(0, 1200)}
                      </p>
                    </div>

                    {selectedCustomMaterial.caderno_enxuto && (
                      <div className="space-y-2 pt-2">
                        <h3 className="font-display font-bold text-base text-[var(--text-primary)] flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          Caderno Enxuto Extraído
                        </h3>
                        <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] whitespace-pre-line leading-relaxed">
                          {selectedCustomMaterial.caderno_enxuto}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Leitor de Conteúdo Completo */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] max-h-[500px] overflow-y-auto font-sans text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed space-y-3 whitespace-pre-line">
                      {selectedCustomMaterial.content_text || selectedCustomMaterial.summary || "Conteúdo de texto não disponível para exibição."}
                    </div>
                  </div>
                )}

                {/* Painel de Controle de Páginas e Continuidade */}
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-4">
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Controle de Progresso de Leitura</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[var(--text-muted)] font-mono block">
                        Parei na página:
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          max={totalPages}
                          value={currentPage}
                          onChange={(e) => setCurrentPage(parseInt(e.target.value, 10) || 1)}
                          className="w-20 p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-sm font-bold text-center text-[var(--text-primary)] outline-none focus:border-[var(--border-focus)]"
                        />
                        <span className="text-xs text-[var(--text-muted)] font-mono">
                          de {totalPages} páginas
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-[var(--text-muted)] font-mono block">
                        Status desta aula:
                      </label>
                      <div className="flex items-center gap-3 pt-1">
                        <label className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] cursor-pointer">
                          <input
                            type="radio"
                            name="completion"
                            checked={!isCompleted}
                            onChange={() => setIsCompleted(false)}
                            className="accent-[var(--accent-primary)]"
                          />
                          <span>Parcial (Continuar nesta aula)</span>
                        </label>
                        <label className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] cursor-pointer">
                          <input
                            type="radio"
                            name="completion"
                            checked={isCompleted}
                            onChange={() => setIsCompleted(true)}
                            className="accent-emerald-500"
                          />
                          <span className="font-semibold text-emerald-400">Aula Concluída</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[var(--text-muted)] font-mono block">
                      Anotação de Estudo / Artigo de Destaque:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Parei no Art. 150, inciso VI da CF/88 (Imunidades Tributárias)..."
                      value={studyNotes}
                      onChange={(e) => setStudyNotes(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] outline-none focus:border-[var(--border-focus)]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCustomMaterial(null)}
                    className="font-mono text-xs"
                  >
                    ← Voltar à Doutrina do Edital
                  </Button>
                  <Button 
                    variant="brand" 
                    size="sm" 
                    disabled={isSavingProgress}
                    className="font-mono text-xs flex items-center gap-1.5"
                    onClick={handleRegisterStudy}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Concluir Aula (+25 XP)' : 'Salvar Progresso (+15 XP)'}</span>
                  </Button>
                </div>
              </>
            ) : (
              /* Official Doctrine Lesson View */
              <>
                <div className="space-y-2 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                      MÓDULO 0{lesson.lessonNumber} DE {lesson.totalLessons} • {lesson.subject}
                    </span>
                    <CarimboStatus 
                      status={isCompleted ? "homologado" : "em_revisao"} 
                      label={isCompleted ? "CONCLUÍDO" : "PONTO DE EDITAL"} 
                    />
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                    {lesson.topic}
                  </h2>
                </div>

                {viewMode === 'resumo' ? (
                  <>
                    {/* Jurisprudence Banner */}
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1">
                      <span className="font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block text-[10px]">
                        Tendência da Banca {currentCareer.banca}
                      </span>
                      <p className="leading-relaxed text-[var(--text-primary)]">
                        {lesson.jurisprudenceNote}
                      </p>
                    </div>

                    {/* Structured Theory Content */}
                    <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                        {lesson.section1Title}
                      </h3>
                      <p>
                        {lesson.section1Body}
                      </p>

                      <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] pt-2">
                        {lesson.section2Title}
                      </h3>
                      
                      <div className="space-y-2 font-mono text-xs">
                        {lesson.mnemonics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                            <span className="text-[var(--accent-primary)] font-bold">{m.code}:</span> {m.meaning}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Leitor Completo da Aula */
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] max-h-[500px] overflow-y-auto font-sans text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed space-y-4">
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                      {lesson.topic}
                    </h3>
                    <p>{lesson.section1Body}</p>
                    <div className="p-4 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                      <div className="font-bold text-xs font-mono text-[var(--accent-primary)]">
                        🎯 PONTOS CRÍTICOS DA BANCA {currentCareer.banca}:
                      </div>
                      <p className="text-xs">{lesson.jurisprudenceNote}</p>
                    </div>
                    <p>{lesson.section2Title}</p>
                  </div>
                )}

                {/* Progress Box */}
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--text-muted)]">Progresso da Aula:</span>
                    <span className="text-[var(--accent-primary)] font-bold">
                      {isCompleted ? '100% Concluído' : 'Em Leitura (50%)'}
                    </span>
                  </div>
                  <ProgressBar progress={isCompleted ? 100 : 50} />
                </div>

                {/* Progress Actions */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    Resumo RAG Consolidado
                  </span>
                  <Button 
                    variant="brand" 
                    size="sm" 
                    disabled={isSavingProgress}
                    className="font-mono text-xs flex items-center gap-1.5"
                    onClick={async () => {
                      setIsCompleted(true);
                      await handleRegisterStudy();
                    }}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Concluir Leitura (+25 XP)</span>
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>

        {/* Right Column: Immediate Practice Quiz (5 cols) */}
        {showQuestions && (
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 space-y-5 border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                    FIXAÇÃO IMEDIATA
                  </div>
                  <div className="font-display font-bold text-sm text-[var(--text-primary)] truncate max-w-[200px]">
                    {selectedCustomMaterial ? selectedCustomMaterial.subject : selectedSubject}
                  </div>
                </div>
                <CarimboStatus status="em_revisao" label="TREINO ATIVO" />
              </div>

              {/* Question Body */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                  {activeQuestion.question}
                </p>

                {/* Alternatives List */}
                <div className="space-y-2.5">
                  {Object.entries(activeQuestion.options).map(([letter, text]) => {
                    const isSelected = userSelectedOption === letter;
                    const isCorrect = letter === activeQuestion.answer;
                    
                    let btnStyle = "bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]";
                    
                    if (answered) {
                      if (isCorrect) {
                        btnStyle = "bg-[var(--color-status-success-bg)] border-[var(--color-status-success)] text-[var(--color-status-success)] font-semibold";
                      } else if (isSelected) {
                        btnStyle = "bg-[var(--color-status-danger-bg)] border-[var(--color-status-danger)] text-[var(--color-status-danger)]";
                      }
                    }

                    return (
                      <button
                        key={letter}
                        disabled={answered}
                        onClick={() => handleSelectOption(letter)}
                        className={`w-full text-left p-3 rounded-lg border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${btnStyle}`}
                      >
                        <span className="font-mono font-bold shrink-0 px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          {letter}
                        </span>
                        <span>{text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Commentary */}
              {answered && (
                <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs">
                  <div className="flex items-center justify-between font-mono font-bold">
                    <span className={userSelectedOption === activeQuestion.answer ? "text-[var(--accent-success)]" : "text-[var(--accent-danger)]"}>
                      {userSelectedOption === activeQuestion.answer ? "RESPOSTA CORRETA! (+10 XP)" : "GABARITO: LETRA " + activeQuestion.answer}
                    </span>
                    <span className="text-[var(--text-muted)] text-[10px]">
                      ID #{activeQuestion.id}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {activeQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Item Oficial • Banca {currentCareer.banca}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUserSelectedOption(null);
                    setAnswered(false);
                  }}
                  className="font-mono text-xs"
                >
                  Reiniciar Quiz
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Modal de Upload de PDF (RAG 2.0) */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => !isUploading && setIsUploadModalOpen(false)}
          />

          <Card className="relative w-full max-w-lg p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-focus)] shadow-2xl z-10 animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)]">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Subir PDF da Aula (RAG 2.0)
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Extração inteligente e leitor integrado
                  </p>
                </div>
              </div>

              <button
                disabled={isUploading}
                onClick={() => setIsUploadModalOpen(false)}
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              {/* Disciplina de Destino */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Disciplina Associada:
                </label>
                <select
                  value={uploadSubject}
                  onChange={(e) => setUploadSubject(e.target.value)}
                  disabled={isUploading}
                  className="w-full p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] outline-none"
                >
                  {careerSubjects.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Geral">Geral / Outra</option>
                </select>
              </div>

              {/* Arquivo PDF */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Arquivo PDF (Apostila Simplificada, Grifada ou Completa):
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf"
                  disabled={isUploading}
                  className="hidden"
                />

                <div 
                  onClick={() => !isUploading && fileInputRef.current?.click()}
                  className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
                    selectedFile 
                      ? 'border-[var(--accent-primary)] bg-[var(--accent-primary-glow)]' 
                      : 'border-[var(--border-subtle)] hover:border-[var(--border-focus)] bg-[var(--bg-elevated)]/40'
                  }`}
                >
                  {selectedFile ? (
                    <div className="space-y-1">
                      <FileText className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
                      <div className="text-xs font-bold text-[var(--text-primary)]">
                        {selectedFile.name}
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-muted)]">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Clique para trocar
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
                      <UploadCloud className="w-8 h-8 text-[var(--text-muted)] mx-auto" />
                      <div>
                        <span className="font-semibold text-[var(--accent-primary)]">Clique para escolher</span> ou arraste o arquivo PDF aqui
                      </div>
                      <div className="text-[10px] font-mono">
                        Apostila Simplificada, Grifada ou Completa (até 50 MB)
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status & Alerts */}
              {uploadError && (
                <div className="p-3 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)] text-xs text-[var(--accent-danger)] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-[var(--border-subtle)]">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isUploading}
                  onClick={() => setIsUploadModalOpen(false)}
                  className="font-mono text-xs"
                >
                  Cancelar
                </Button>

                <Button
                  type="submit"
                  variant="brand"
                  size="sm"
                  disabled={!selectedFile || isUploading}
                  className="font-mono text-xs flex items-center gap-2"
                >
                  {isUploading ? "Processando e Extraindo PDF..." : "Enviar e Indexar PDF"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
