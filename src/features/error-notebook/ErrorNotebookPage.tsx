import React, { useState, useEffect } from 'react';
import { Card, Button, BottomSheet, CarimboStatus } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { api } from '../../api/client';
import { getCareerById } from '../../utils/careers';
import { Download, Printer, RefreshCw, CheckCircle, AlertTriangle, BookOpen, Trash2 } from 'lucide-react';

interface ErrorNotebookPageProps {
  careerId: string;
}

interface ErrorNotebookItem {
  id: number;
  question_id: number;
  subject: string;
  topic?: string;
  banca?: string;
  question_text: string;
  options?: string[];
  correct_index: number;
  wrong_answer_index?: number;
  status: 'pending' | 'mastered';
  notes?: string;
  explanation: string;
  review_count?: number;
  created_at: string;
}

export const ErrorNotebookPage: React.FC<ErrorNotebookPageProps> = ({ careerId }) => {
  const { success, error: toastError } = useToast();
  const currentCareer = getCareerById(careerId);

  const [loading, setLoading] = useState(true);
  const [errorsList, setErrorsList] = useState<ErrorNotebookItem[]>([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, mastered: 0, overcomeRate: 0 });
  const [filterStatus, setFilterStatus] = useState<'pending' | 'mastered' | 'all'>('pending');
  const [selectedError, setSelectedError] = useState<ErrorNotebookItem | null>(null);
  const [retryOption, setRetryOption] = useState<number | null>(null);
  const [retryResult, setRetryResult] = useState<{ correct: boolean; explanation: string; xpEarned?: number } | null>(null);
  const [notes, setNotes] = useState<string>('');
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  const fetchNotebook = async () => {
    setLoading(true);
    try {
      const res = await api.getErrorNotebook(careerId);
      if (res && res.items) {
        setErrorsList(res.items);
        if (res.stats) {
          setStats(res.stats);
        }
      }
    } catch (err: any) {
      console.error('Erro ao carregar caderno de erros:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotebook();
  }, [careerId]);

  const displayedErrors = errorsList.filter(e => filterStatus === 'all' || e.status === filterStatus);

  const handleOpenRetry = (item: ErrorNotebookItem) => {
    setSelectedError(item);
    setRetryOption(null);
    setRetryResult(null);
    setNotes(item.notes || '');
  };

  const handleExecuteRetry = async () => {
    if (!selectedError || retryOption === null) return;

    try {
      const res = await api.retryErrorNotebook(selectedError.id, retryOption);
      const isCorrect = Boolean(res.isCorrect);

      setRetryResult({
        correct: isCorrect,
        explanation: res.explanation || selectedError.explanation,
        xpEarned: res.xpEarned || 0
      });

      if (isCorrect) {
        success('Superação Homologada!', `Você acertou e ganhou +${res.xpEarned || 15} XP.`);
      }

      // Atualiza lista local
      setErrorsList(prev => prev.map(e => {
        if (e.id === selectedError.id) {
          return { ...e, status: isCorrect ? 'mastered' : 'pending', review_count: (e.review_count || 0) + 1 };
        }
        return e;
      }));
    } catch (err: any) {
      toastError('Erro ao registrar retreino', err.message);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedError) return;
    try {
      await api.updateErrorNotebookNotes(selectedError.id, notes);
      success('Nota Salva', 'Anotação técnica atualizada no seu caderno.');
      setErrorsList(prev => prev.map(e => e.id === selectedError.id ? { ...e, notes } : e));
      setSelectedError(null);
    } catch (err: any) {
      toastError('Erro ao salvar nota', err.message);
    }
  };

  const handleDeleteItem = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (!confirm('Deseja remover esta questão do caderno de erros?')) return;
    try {
      await api.deleteErrorNotebookItem(id);
      success('Item Removido', 'Questão retirada do caderno de erros.');
      setErrorsList(prev => prev.filter(item => item.id !== id));
    } catch (err: any) {
      toastError('Erro ao remover item', err.message);
    }
  };

  // --- EXPORTAÇÃO PARA ANKI (.CSV) ---
  const handleExportAnki = () => {
    if (errorsList.length === 0) {
      toastError('Caderno Vazio', 'Não há itens para exportar.');
      return;
    }

    const rows = [
      ['Frente (Pergunta / Enunciado)', 'Verso (Resposta / Fundamentação)', 'Disciplina', 'Banca']
    ];

    errorsList.forEach((item) => {
      let front = `<b>[${item.subject}] ${item.topic || ''}</b><br><br>${item.question_text.replace(/"/g, '""')}`;
      if (item.options && Array.isArray(item.options) && item.options.length > 0) {
        front += '<br><br>' + item.options.map((opt, idx) => `${String.fromCharCode(65 + idx)}) ${opt}`).join('<br>');
      }

      const correctLetter = String.fromCharCode(65 + (item.correct_index ?? 0));
      let back = `<b>Gabarito Oficial: ${correctLetter}</b><br><br>${(item.explanation || '').replace(/"/g, '""')}`;
      if (item.notes) {
        back += `<br><br><i>Nota do Aluno: ${item.notes.replace(/"/g, '""')}</i>`;
      }

      rows.push([
        `"${front}"`,
        `"${back}"`,
        `"${item.subject || ''}"`,
        `"${item.banca || currentCareer.banca}"`
      ]);
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + rows.map(e => e.join(';')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `caderno_erros_${careerId}_anki.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    success('Exportação Concluída', 'Arquivo CSV para Anki baixado com sucesso!');
  };

  // --- FOLHA DE REVISÃO IMPRIMÍVEL ---
  const handlePrintReviewSheet = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Caderno de Erros & Vulnerabilidades
            </h1>
            <CarimboStatus 
              status={errorsList.filter(e => e.status === 'pending').length > 0 ? "vulneravel" : "homologado"} 
              label={`${errorsList.filter(e => e.status === 'pending').length} PENDENTES`} 
            />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Isolamento de falhas com retreino de superação (+15 XP), anotações técnicas e exportação
          </p>
        </div>

        {/* Botões de Ação: Exportar Anki & Imprimir */}
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportAnki}
            className="font-mono text-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            Exportar Anki (.CSV)
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPrintModal(true)}
            className="font-mono text-xs flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            Folha de Revisão
          </Button>
        </div>
      </div>

      {/* Stats e Tabs de Filtro */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="flex items-center gap-4 text-xs font-mono">
          <div>
            <span className="text-[var(--text-muted)]">Total: </span>
            <strong className="text-[var(--text-primary)]">{errorsList.length}</strong>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">Pendentes: </span>
            <strong className="text-amber-400">{errorsList.filter(e => e.status === 'pending').length}</strong>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">Superados: </span>
            <strong className="text-emerald-400">{errorsList.filter(e => e.status === 'mastered').length}</strong>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs">
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filterStatus === 'pending'
                ? 'bg-[var(--accent-primary)] text-white font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Pendentes ({errorsList.filter(e => e.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilterStatus('mastered')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filterStatus === 'mastered'
                ? 'bg-[var(--accent-primary)] text-white font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Superados ({errorsList.filter(e => e.status === 'mastered').length})
          </button>
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              filterStatus === 'all'
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Todos ({errorsList.length})
          </button>
        </div>
      </div>

      {/* Errors List */}
      <div className="space-y-3.5">
        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-[var(--text-muted)]">
            Carregando caderno de erros...
          </div>
        ) : displayedErrors.length === 0 ? (
          <Card className="text-center py-16 space-y-3 bg-[var(--bg-surface)] shadow-md">
            <CarimboStatus status="homologado" label="CADERNO 100% ZERADO" />
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] tracking-tight">
              Nenhuma vulnerabilidade neste filtro
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
              Você superou todos os itens ou ainda não errou questões em simulados oficiais.
            </p>
          </Card>
        ) : (
          displayedErrors.map((item) => {
            const isMastered = item.status === 'mastered';
            return (
              <Card
                key={item.id}
                hoverable={true}
                onClick={() => handleOpenRetry(item)}
                className={`p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border bg-[var(--bg-surface)] shadow-md ${
                  isMastered ? 'border-[var(--color-status-success)]/40' : 'border-[var(--color-status-danger)]/40'
                }`}
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <CarimboStatus status={isMastered ? "homologado" : "vulneravel"} label={isMastered ? "SUPERADO" : "PENDENTE"} />
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)]">{item.subject}</span>
                    {item.topic && (
                      <>
                        <span className="text-[var(--text-muted)]">•</span>
                        <span className="font-mono text-xs text-[var(--text-muted)]">{item.topic}</span>
                      </>
                    )}
                    {item.banca && (
                      <span className="font-mono text-[10px] text-[var(--text-muted)] px-1.5 py-0.5 rounded bg-[var(--bg-elevated)]">
                        {item.banca}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                    {item.question_text}
                  </p>

                  {item.notes && (
                    <div className="font-mono text-xs text-[var(--accent-primary)] bg-[var(--bg-elevated)] px-3 py-1.5 rounded-md border border-[var(--border-subtle)] inline-block">
                      NOTA: {item.notes}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <Button
                    variant={isMastered ? "outline" : "brand"}
                    size="sm"
                    className="font-mono text-xs shrink-0 font-bold"
                  >
                    {isMastered ? 'Revisar' : 'Retreinar Item'}
                  </Button>

                  <button
                    onClick={(e) => handleDeleteItem(e, item.id)}
                    title="Remover do Caderno"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Retreino Modal */}
      {selectedError && (
        <BottomSheet
          isOpen={!!selectedError}
          onClose={() => setSelectedError(null)}
          title={`Retreino de Item • ${selectedError.subject}`}
        >
          <div className="space-y-5 font-sans text-xs sm:text-sm">
            <p className="text-[var(--text-primary)] font-medium leading-relaxed">
              {selectedError.question_text}
            </p>

            {/* Alternativas se disponíveis */}
            {selectedError.options && selectedError.options.length > 0 ? (
              <div className="space-y-2 pt-2">
                {selectedError.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = retryOption === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setRetryOption(idx)}
                      className={`w-full text-left p-3 rounded-lg font-sans text-xs sm:text-sm transition-all border flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md font-semibold'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-focus)]'
                      }`}
                    >
                      <span className="font-mono font-bold">{letter})</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-2.5 pt-2">
                {['A', 'B', 'C', 'D', 'E'].map((opt, idx) => (
                  <button
                    key={opt}
                    onClick={() => setRetryOption(idx)}
                    className={`h-12 rounded-lg font-mono font-bold text-sm sm:text-base transition-all border ${
                      retryOption === idx
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-focus)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            <Button
              variant="brand"
              fullWidth={true}
              onClick={handleExecuteRetry}
              disabled={retryOption === null}
              className="font-bold text-sm mt-2 shadow-md"
            >
              Confirmar Resposta de Retreino
            </Button>

            {retryResult && (
              <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in">
                <CarimboStatus 
                  status={retryResult.correct ? "homologado" : "vulneravel"} 
                  label={retryResult.correct ? `ACERTOU • SUPERAÇÃO HOMOLOGADA (+${retryResult.xpEarned || 15} XP)` : "INCORRETO • MANTIDO NO CADERNO"} 
                />
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  {retryResult.explanation}
                </p>
              </div>
            )}

            {/* Anotação Técnica */}
            <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)]">
              <label className="font-mono text-xs text-[var(--text-muted)] uppercase font-bold">
                Anotação Técnica Pessoal:
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Artigo de lei ou mnemônico chave para não errar..."
                rows={2}
                className="w-full p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
              />
              <Button
                variant="outline"
                size="sm"
                fullWidth={true}
                onClick={handleSaveNotes}
                className="font-mono text-xs font-semibold"
              >
                Salvar Nota Técnica
              </Button>
            </div>
          </div>
        </BottomSheet>
      )}

      {/* Modal de Folha de Revisão Imprimível */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in">
            <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-elevated)]">
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-[var(--accent-primary)]" />
                <h2 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Folha Oficial de Revisão & Erros • {currentCareer.name}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="brand"
                  size="sm"
                  onClick={handlePrintReviewSheet}
                  className="font-mono text-xs"
                >
                  Imprimir / Salvar PDF
                </Button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-mono"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Conteúdo Imprimível */}
            <div className="p-6 overflow-y-auto space-y-6 print:p-0 print:m-0 text-[var(--text-primary)]">
              <div className="border-b-2 border-black pb-3 text-center space-y-1">
                <h1 className="font-serif font-bold text-xl uppercase tracking-wider text-black dark:text-white">
                  CADERNO TÉCNICO DE REVISÃO E SUPERAÇÃO DE VULNERABILIDADES
                </h1>
                <div className="text-xs font-mono text-[var(--text-muted)] flex justify-center gap-6">
                  <span>Edital: {currentCareer.name}</span>
                  <span>Banca: {currentCareer.banca}</span>
                  <span>Itens Pendentes: {errorsList.filter(e => e.status === 'pending').length}</span>
                </div>
              </div>

              {errorsList.map((item, idx) => (
                <div key={item.id} className="border border-[var(--border-subtle)] rounded-lg p-4 space-y-2.5 bg-[var(--bg-elevated)]/20 break-inside-avoid">
                  <div className="flex items-center justify-between text-xs font-mono font-bold border-b border-[var(--border-subtle)] pb-1.5">
                    <span className="text-[var(--accent-primary)]">ITEM #{idx + 1} • {item.subject} {item.topic ? `(${item.topic})` : ''}</span>
                    <div className="flex items-center gap-3 text-[10px] text-[var(--text-muted)]">
                      <span>[ ] D+1</span>
                      <span>[ ] D+7</span>
                      <span>[ ] D+30</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {item.question_text}
                  </p>

                  <div className="bg-[var(--bg-surface)] p-3 rounded border border-[var(--border-subtle)] text-xs space-y-1">
                    <div className="font-mono font-bold text-emerald-400">
                      Gabarito Oficial: {String.fromCharCode(65 + (item.correct_index ?? 0))}
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed">{item.explanation}</p>
                  </div>

                  {item.notes && (
                    <div className="text-xs font-mono text-[var(--accent-primary)] bg-[var(--bg-surface)] p-2 rounded border border-[var(--border-subtle)]">
                      ✍️ Minha Nota: {item.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorNotebookPage;
