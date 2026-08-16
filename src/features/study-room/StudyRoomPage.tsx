import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { api } from '../../api/client';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, X, Plus, BookOpen, Layers } from 'lucide-react';

interface StudyRoomPageProps {
  careerId: string;
}

interface CustomMaterial {
  id: number;
  filename: string;
  subject: string;
  title: string;
  summary: string;
  content_text?: string;
  analysis_json?: string;
  created_at?: string;
}

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  const [selectedSubject, setSelectedSubject] = useState<string>(careerSubjects[0]?.name || 'Direito Constitucional');
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // Upload Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSubject, setUploadSubject] = useState<string>(careerSubjects[0]?.name || 'Geral');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Custom Uploaded Materials
  const [uploadedMaterials, setUploadedMaterials] = useState<CustomMaterial[]>([]);
  const [selectedCustomMaterial, setSelectedCustomMaterial] = useState<CustomMaterial | null>(null);

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
    }
  }, [careerId]);

  // Ao trocar de disciplina, reseta o estado do quiz e limpa material customizado
  const handleSubjectChange = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setSelectedCustomMaterial(null);
    setUserSelectedOption(null);
    setAnswered(false);
  };

  const lesson = getLessonContent(selectedSubject);
  const activeQuestion = lesson.question;

  const handleSelectOption = (opt: string) => {
    if (answered) return;
    setUserSelectedOption(opt);
    setAnswered(true);
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
      setUploadSuccess(true);
      setSelectedFile(null);
      await loadMaterials();
      setTimeout(() => {
        setIsUploadModalOpen(false);
        setUploadSuccess(false);
      }, 1500);
    } catch (err: any) {
      setUploadError(err.message || 'Erro ao processar o PDF com a IA.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Sala de Estudos Teórica
            </h1>
            <CarimboStatus status="homologado" label="RAG 2.0 OFICIAL" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Doutrina e legislação esquematizada com fixação imediata na banca {currentCareer.banca}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Botão de Upload de PDF */}
          <Button 
            variant="brand" 
            size="sm" 
            onClick={() => setIsUploadModalOpen(true)}
            className="font-mono text-xs flex items-center gap-1.5"
          >
            <UploadCloud className="w-4 h-4" />
            <span>+ Subir PDF da Aula</span>
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.print()}
            className="font-mono text-xs"
          >
            Exportar PDF
          </Button>
          
          <Button 
            variant={showQuestions ? "secondary" : "brand"}
            size="sm" 
            onClick={() => setShowQuestions(!showQuestions)}
            className="font-mono text-xs"
          >
            {showQuestions ? "Ocultar Fixação" : "Mostrar Fixação"}
          </Button>
        </div>
      </div>

      {/* Disciplinas Selector (Official Filter Badges) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
            Disciplinas do Edital ({currentCareer.name.split('—')[0]}):
          </div>
          {uploadedMaterials.length > 0 && (
            <span className="text-[11px] font-mono text-[var(--accent-primary)] font-bold">
              {uploadedMaterials.length} PDF{uploadedMaterials.length > 1 ? 's' : ''} do Aluno Processado{uploadedMaterials.length > 1 ? 's' : ''}
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
            <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3 h-3 text-[var(--accent-primary)]" />
              <span>Seus Arquivos PDF Enviados (RAG):</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {uploadedMaterials.map((mat) => {
                const isSelected = selectedCustomMaterial?.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => {
                      setSelectedCustomMaterial(mat);
                      setUserSelectedOption(null);
                      setAnswered(false);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--accent-primary)] font-bold'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[200px]">{mat.title || mat.filename}</span>
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
            {selectedCustomMaterial ? (
              /* Custom Material View */
              <>
                <div className="space-y-2 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                      PDF PESSOAL • {selectedCustomMaterial.subject}
                    </span>
                    <CarimboStatus status="homologado" label="RAG PROCESSADO" />
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                    {selectedCustomMaterial.title || selectedCustomMaterial.filename}
                  </h2>
                </div>

                <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1">
                  <span className="font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block text-[10px]">
                    Arquivo Fonte
                  </span>
                  <p className="font-mono text-xs">
                    {selectedCustomMaterial.filename}
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Resumo Estratégico do Material
                  </h3>
                  <p className="whitespace-pre-line">
                    {selectedCustomMaterial.summary || selectedCustomMaterial.content_text?.substring(0, 1500)}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
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
                    className="font-mono text-xs"
                    onClick={() => alert(`Material '${selectedCustomMaterial.title}' revisado! +25 XP concedidos.`)}
                  >
                    Registrar Estudo (+25 XP)
                  </Button>
                </div>
              </>
            ) : (
              /* Official Doctrine Lesson View */
              <>
                <div className="space-y-2 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                      MÓDULO 0{lesson.lessonNumber} DE {lesson.totalLessons} • {lesson.subject}
                    </span>
                    <CarimboStatus status="homologado" label="PONTO DE EDITAL" />
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                    {lesson.topic}
                  </h2>
                </div>

                {/* Jurisprudence Banner */}
                <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1">
                  <span className="font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block text-[10px]">
                    Tendência da Banca {currentCareer.banca}
                  </span>
                  <p className="leading-relaxed">
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

                {/* Progress Actions */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    Página 1 de 1 • Resumo RAG Consolidado
                  </span>
                  <Button 
                    variant="brand" 
                    size="sm" 
                    className="font-mono text-xs"
                    onClick={() => alert(`Aula de ${selectedSubject} concluída! +25 XP concedidos.`)}
                  >
                    Concluir Leitura (+25 XP)
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
                  <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                    Disciplina: {selectedSubject}
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
                    Extração inteligente, resumo e geração de questões
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
                  Arquivo PDF (Apostila, Resumo ou Lei):
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
                        Limite máximo: 20 MB por arquivo PDF
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

              {uploadSuccess && (
                <div className="p-3 rounded-lg bg-[var(--color-status-success-bg)] border border-[var(--accent-success)] text-xs text-[var(--accent-success)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>PDF processado com sucesso! Carregando na sala de estudos...</span>
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
                  className="font-mono text-xs"
                >
                  {isUploading ? "Processando RAG 2.0..." : "Enviar e Processar PDF"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
