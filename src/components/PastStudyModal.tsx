import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Card, Button, CarimboStatus } from './UIPrimitives';
import { useToast } from './Toast';
import { api } from '../api/client';
import { getSubjectsForCareer, SubjectStats } from '../utils/gamification';
import { getCareerById } from '../utils/careers';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Trash2, 
  Flame, 
  Plus, 
  ChevronRight, 
  HelpCircle,
  FileText,
  History
} from 'lucide-react';

interface PastStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  careerId: string;
  onStudySaved?: (xpGained: number, newStreak: number) => void;
}

interface PastStudySession {
  id: number;
  subject: string;
  title?: string;
  duration_minutes: number;
  started_at: string;
  completed_at: string;
  scope_note?: string;
  study_date: string;
}

export const PastStudyModal: React.FC<PastStudyModalProps> = ({
  isOpen,
  onClose,
  careerId,
  onStudySaved
}) => {
  const { success, error: toastError, info } = useToast();
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);

  const [activeTab, setActiveTab] = useState<'novo' | 'historico'>('novo');
  const [loading, setLoading] = useState(false);

  // Helper para formatar data local YYYY-MM-DD
  const getLocalDateString = (daysAgo: number = 0) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Form states
  const [studyDate, setStudyDate] = useState<string>(() => getLocalDateString(1)); // Padrão: ontem
  const [selectedSubject, setSelectedSubject] = useState<string>(() => careerSubjects[0]?.name || 'Direito Constitucional');
  const [topic, setTopic] = useState<string>('');
  const [durationMinutes, setDurationMinutes] = useState<number>(60);
  const [pagesRead, setPagesRead] = useState<number | ''>('');
  const [questionsCount, setQuestionsCount] = useState<number | ''>('');
  const [questionsCorrect, setQuestionsCorrect] = useState<number | ''>('');
  const [notes, setNotes] = useState<string>('');
  const [showQuestionsSection, setShowQuestionsSection] = useState<boolean>(false);

  // History state
  const [historyList, setHistoryList] = useState<PastStudySession[]>([]);
  const [loadingHistory, setLoadingHistory] = useState<boolean>(false);

  // Recarrega lista de matérias se mudar carreira
  useEffect(() => {
    if (careerSubjects.length > 0) {
      setSelectedSubject(careerSubjects[0].name);
    }
  }, [careerId]);

  // Carrega histórico quando abrir a aba de histórico
  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const res = await api.getPastStudies(careerId);
      if (res && res.items) {
        setHistoryList(res.items);
      }
    } catch (err: any) {
      console.error('Erro ao carregar histórico de estudos passados:', err);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === 'historico') {
      loadHistory();
    }
  }, [isOpen, activeTab, careerId]);

  if (!isOpen) return null;

  // Cálculo dinâmico de XP estimado
  const estimatedXp = Math.round(
    ((Number(durationMinutes) || 60) / 30) * 20 + 
    ((Number(questionsCount) || 0) * 2) + 
    (Number(pagesRead) > 0 ? 10 : 0)
  );

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studyDate) {
      toastError('Data Obrigatória', 'Por favor, selecione o dia em que você estudou.');
      return;
    }
    if (!selectedSubject) {
      toastError('Disciplina Obrigatória', 'Selecione a matéria estudada.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.registerPastStudy({
        studyDate,
        subject: selectedSubject,
        topic: topic.trim() || undefined,
        durationMinutes: Number(durationMinutes) || 60,
        pagesRead: pagesRead !== '' ? Number(pagesRead) : undefined,
        questionsCount: questionsCount !== '' ? Number(questionsCount) : undefined,
        questionsCorrect: questionsCorrect !== '' ? Number(questionsCorrect) : undefined,
        notes: notes.trim() || undefined,
        careerId
      });

      if (res && res.success) {
        success(
          '🔥 Estudo Gravado com Sucesso!',
          `Lançamento de ${res.studyDate} registrado. Você ganhou +${res.xpGained} XP! Nova Ofensiva: ${res.newStreak} dias.`
        );

        if (onStudySaved) {
          onStudySaved(res.xpGained, res.newStreak);
        }

        // Limpa formulário e fecha modal
        setTopic('');
        setPagesRead('');
        setQuestionsCount('');
        setQuestionsCorrect('');
        setNotes('');
        onClose();
      }
    } catch (err: any) {
      toastError('Falha ao Gravar Estudo', err.message || 'Ocorreu um erro ao salvar o registro.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Deseja realmente remover este lançamento de estudo?')) return;
    try {
      const res = await api.deletePastStudy(id);
      if (res && res.success) {
        success('Lançamento Removido', 'Registro excluído e ofensiva recalculada.');
        setHistoryList(prev => prev.filter(item => item.id !== id));
        if (onStudySaved) {
          onStudySaved(0, res.newStreak);
        }
      }
    } catch (err: any) {
      toastError('Erro ao Excluir', err.message);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in font-sans">
      <div 
        className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-elevated)]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--accent-amber-bg)] flex items-center justify-center text-[var(--accent-warning)]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-display font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                Registrar Estudo Passado
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-normal">
                  Retroativo
                </span>
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Lance os dias anteriores que você estudou por fora para recuperar ofensiva e somar horas
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-[var(--border-subtle)] px-6 bg-[var(--bg-surface)]">
          <button
            type="button"
            onClick={() => setActiveTab('novo')}
            className={`py-3 px-4 text-xs font-bold font-sans border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'novo'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Novo Lançamento</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('historico');
              loadHistory();
            }}
            className={`py-3 px-4 text-xs font-bold font-sans border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'historico'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Histórico de Lançamentos</span>
            {historyList.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[10px] font-mono">
                {historyList.length}
              </span>
            )}
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          {activeTab === 'novo' ? (
            <form onSubmit={handleSave} className="space-y-5">
              {/* 1. SELETOR DE DATA COM ATALHOS RÁPIDOS */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                  1. Qual dia você estudou?
                </label>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setStudyDate(getLocalDateString(1))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      studyDate === getLocalDateString(1)
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Ontem
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudyDate(getLocalDateString(2))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      studyDate === getLocalDateString(2)
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Anteontem
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudyDate(getLocalDateString(3))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      studyDate === getLocalDateString(3)
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    3 dias atrás
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudyDate(getLocalDateString(0))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      studyDate === getLocalDateString(0)
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Hoje
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="date"
                    value={studyDate}
                    max={getLocalDateString(0)}
                    onChange={(e) => setStudyDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--accent-primary)] focus:outline-none text-sm text-[var(--text-primary)] font-mono"
                  />
                </div>
              </div>

              {/* 2. DISCIPLINA & ASSUNTO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                    2. Disciplina
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--accent-primary)] focus:outline-none text-sm text-[var(--text-primary)] font-sans cursor-pointer"
                  >
                    {careerSubjects.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} ({s.weight})
                      </option>
                    ))}
                    <option value="Outra / Conhecimentos Gerais">Outra / Geral</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                    Assunto / Tópico (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Art. 5º da CF, Imunidades Tributárias, Estatuto..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--accent-primary)] focus:outline-none text-sm text-[var(--text-primary)] font-sans placeholder-[var(--text-muted)]"
                  />
                </div>
              </div>

              {/* 3. TEMPO DEDICADO (MINUTOS) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                    3. Quanto tempo você estudou?
                  </label>
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                    {durationMinutes} min ({Math.floor(durationMinutes / 60)}h{durationMinutes % 60 > 0 ? ` ${durationMinutes % 60}m` : ''})
                  </span>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[30, 45, 60, 90, 120, 180].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDurationMinutes(mins)}
                      className={`py-2.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                        durationMinutes === mins
                          ? 'bg-[var(--btn-primary-bg)] text-white border-[var(--accent-primary)] shadow-md'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-focus)]'
                      }`}
                    >
                      {mins < 60 ? `${mins}m` : `${mins / 60}h`}
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <span className="text-xs text-[var(--text-muted)]">Ou digite o valor exato:</span>
                  <input
                    type="number"
                    min="5"
                    max="720"
                    step="5"
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(Math.max(5, parseInt(e.target.value, 10) || 5))}
                    className="w-24 px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none text-center"
                  />
                  <span className="text-xs text-[var(--text-muted)]">minutos</span>
                </div>
              </div>

              {/* 4. SEÇÃO EXPANSÍVEL: PÁGINAS E QUESTÕES */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 p-4 space-y-3">
                <button
                  type="button"
                  onClick={() => setShowQuestionsSection(!showQuestionsSection)}
                  className="w-full flex items-center justify-between text-left text-xs font-bold text-[var(--text-primary)] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[var(--accent-primary)]" />
                    Páginas Lidas & Questões Resolvidas (Opcional)
                  </span>
                  <span className="text-xs font-mono text-[var(--accent-primary)]">
                    {showQuestionsSection ? 'Ocultar ▲' : 'Expandir ▼'}
                  </span>
                </button>

                {showQuestionsSection && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 animate-fade-in border-t border-[var(--border-subtle)]">
                    <div className="space-y-1">
                      <label className="text-[11px] text-[var(--text-muted)] font-mono">Páginas Lidas:</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="Ex: 25"
                        value={pagesRead}
                        onChange={(e) => setPagesRead(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                        className="w-full px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-[var(--text-muted)] font-mono">Questões Feitas:</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="Ex: 20"
                        value={questionsCount}
                        onChange={(e) => setQuestionsCount(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                        className="w-full px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-[var(--text-muted)] font-mono">Acertos:</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="Ex: 17"
                        value={questionsCorrect}
                        onChange={(e) => setQuestionsCorrect(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                        className="w-full px-3 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-mono"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 5. ANOTAÇÕES / RESUMO */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                  Anotações / Resumo Pessoal (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Registre pontos-chave ou tópicos que precisará revisar mais tarde..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--accent-primary)] focus:outline-none text-xs text-[var(--text-primary)] font-sans placeholder-[var(--text-muted)] resize-none"
                />
              </div>

              {/* PREVIEW DE XP & SUBMIT BUTTON */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[var(--accent-primary-glow)] flex items-center justify-center text-[var(--accent-primary)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--text-muted)] font-mono">RECOMPENSA DE EXPERIÊNCIA</div>
                    <div className="text-sm font-bold font-mono text-[var(--accent-primary)]">
                      +{estimatedXp} XP creditados
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial text-xs min-h-[44px]"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="brand"
                    size="md"
                    disabled={loading}
                    className="flex-1 sm:flex-initial text-xs font-bold shadow-lg flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Flame className="w-4 h-4" />
                    <span>{loading ? 'Gravando...' : 'Gravar Estudo Passado'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            /* HISTÓRICO DE ESTUDOS PASSADOS */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Últimos estudos gravados no seu histórico:</span>
                <button
                  onClick={loadHistory}
                  className="text-[var(--accent-primary)] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  Atualizar Lista
                </button>
              </div>

              {loadingHistory ? (
                <div className="py-12 text-center text-xs font-mono text-[var(--text-muted)]">
                  Carregando histórico de estudos...
                </div>
              ) : historyList.length === 0 ? (
                <div className="py-12 text-center space-y-2 border border-dashed border-[var(--border-subtle)] rounded-2xl p-6">
                  <Calendar className="w-8 h-8 text-[var(--text-muted)] mx-auto opacity-50" />
                  <p className="text-sm font-bold text-[var(--text-primary)]">Nenhum estudo retroativo lançado</p>
                  <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                    Use a aba 'Novo Lançamento' para registrar dias anteriores que você estudou.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {historyList.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start justify-between gap-3 hover:border-[var(--border-focus)] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--accent-warning)] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.study_date}
                          </span>
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            {item.subject}
                          </span>
                          <span className="text-xs font-mono text-[var(--accent-primary)]">
                            ({item.duration_minutes} min)
                          </span>
                        </div>
                        {item.scope_note && (
                          <p className="text-xs text-[var(--text-secondary)] font-sans">
                            {item.scope_note}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer shrink-0"
                        title="Remover lançamento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
