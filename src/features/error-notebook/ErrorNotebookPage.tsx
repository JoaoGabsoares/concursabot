import React, { useState } from 'react';
import { Card, Button, Badge, BottomSheet } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { AlertCircle, CheckCircle2, RotateCcw, Edit3, Award, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { ErrorItem } from '../../types';

interface ErrorNotebookPageProps {
  careerId: string;
}

export const ErrorNotebookPage: React.FC<ErrorNotebookPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const [filterStatus, setFilterStatus] = useState<'pending' | 'mastered' | 'all'>('pending');
  const [selectedError, setSelectedError] = useState<ErrorItem | null>(null);
  const [retryOption, setRetryOption] = useState<string | null>(null);
  const [retryResult, setRetryResult] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [notes, setNotes] = useState<string>('');

  const [errorsList, setErrorsList] = useState<ErrorItem[]>([
    {
      id: 11,
      question_id: 201,
      question_text: "No direito administrativo brasileiro, a convalidação de ato administrativo com vício de competência relativa é admitida quando:",
      user_answer: "A",
      correct_answer: "B",
      explanation: "A convalidação é cabível em vícios de competência (desde que não seja privativa ou exclusiva) e em vícios de forma (desde que a forma não seja essencial à validade do ato).",
      subject: "Direito Administrativo",
      topic: "Atos Administrativos",
      banca: currentCareer.banca,
      status: 'pending',
      personal_notes: "Atenção: competência exclusiva NUNCA admite convalidação.",
      created_at: "Ontem"
    },
    {
      id: 12,
      question_id: 202,
      question_text: "A respeito dos tributos no ordenamento jurídico nacional, o empréstimo compulsório pode ser instituído por meio de:",
      user_answer: "D",
      correct_answer: "C",
      explanation: "Art. 148 da CF/88: A União, mediante lei complementar, poderá instituir empréstimos compulsórios.",
      subject: "Direito Tributário",
      topic: "Espécies Tributárias",
      banca: currentCareer.banca,
      status: 'pending',
      created_at: "Hoje"
    }
  ]);

  const displayedErrors = errorsList.filter(e => filterStatus === 'all' || e.status === filterStatus);

  const handleOpenRetry = (item: ErrorItem) => {
    setSelectedError(item);
    setRetryOption(null);
    setRetryResult(null);
    setNotes(item.personal_notes || '');
  };

  const handleExecuteRetry = () => {
    if (!selectedError || !retryOption) return;
    const isCorrect = retryOption === selectedError.correct_answer;
    setRetryResult({
      correct: isCorrect,
      explanation: selectedError.explanation
    });

    if (isCorrect) {
      setErrorsList(errorsList.map(e => e.id === selectedError.id ? { ...e, status: 'mastered' } : e));
    }
  };

  const handleSaveNotes = () => {
    if (!selectedError) return;
    setErrorsList(errorsList.map(e => e.id === selectedError.id ? { ...e, personal_notes: notes } : e));
    setSelectedError(null);
  };

  return (
    <div className="space-y-5 pb-20 md:pb-8 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Caderno de Erros Cirúrgico
            </h1>
            <Badge variant="danger">{errorsList.filter(e => e.status === 'pending').length} Pendentes</Badge>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Captura automática de falhas com retreino de superação (+15 XP) e anotações pessoais
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              filterStatus === 'pending'
                ? 'bg-[var(--accent-danger)] text-white font-semibold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setFilterStatus('mastered')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              filterStatus === 'mastered'
                ? 'bg-[var(--accent-success)] text-white font-semibold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Superados (+15 XP)
          </button>
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              filterStatus === 'all'
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Todos
          </button>
        </div>
      </div>

      {/* Errors List */}
      <div className="space-y-3">
        {displayedErrors.length === 0 ? (
          <Card className="text-center py-12 space-y-2">
            <CheckCircle2 className="w-10 h-10 text-[var(--accent-success)] mx-auto" />
            <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
              Nenhum erro pendente!
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Você dominou todos os itens do caderno de erros ou ainda não cometeu falhas nos simulados.
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
                className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isMastered ? 'border-[var(--accent-success)]/30 bg-[var(--accent-success-glow)]/10' : 'border-red-900/30'
                }`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={isMastered ? 'success' : 'danger'}>
                      {isMastered ? 'SUPERADO' : 'PENDENTE'}
                    </Badge>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{item.subject}</span>
                    {item.topic && (
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">• {item.topic}</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium line-clamp-2">
                    {item.question_text}
                  </p>
                  {item.personal_notes && (
                    <p className="text-[11px] text-amber-400 italic">
                      📝 Nota: "{item.personal_notes}"
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <Button
                    size="sm"
                    variant={isMastered ? 'outline' : 'primary'}
                    icon={RotateCcw}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenRetry(item);
                    }}
                  >
                    {isMastered ? 'Rever' : 'Retreinar'}
                  </Button>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Bottom Sheet for Retraining & Personal Notes */}
      <BottomSheet
        isOpen={!!selectedError}
        onClose={() => setSelectedError(null)}
        title={selectedError ? `Retreino: ${selectedError.subject}` : 'Retreino'}
      >
        {selectedError && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
              {selectedError.question_text}
            </p>

            <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] text-[11px] font-mono text-[var(--text-muted)] flex justify-between">
              <span>Sua resposta anterior: <strong className="text-[var(--accent-danger)]">Letra {selectedError.user_answer}</strong></span>
              <span>Banca: <strong>{selectedError.banca}</strong></span>
            </div>

            {/* Quick Option Selector for Retry */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                Escolha a alternativa correta:
              </div>
              <div className="grid grid-cols-5 gap-2 font-mono font-bold text-sm">
                {['A', 'B', 'C', 'D', 'E'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setRetryOption(opt)}
                    className={`h-11 rounded-lg border transition-all ${
                      retryOption === opt
                        ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)]'
                        : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-focus)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <Button
              size="md"
              variant="brand"
              fullWidth={true}
              disabled={!retryOption}
              onClick={handleExecuteRetry}
            >
              Validar Superação (+15 XP)
            </Button>

            {/* Retry Feedback */}
            {retryResult && (
              <div className={`p-3.5 rounded-xl border space-y-1.5 animate-fade-in ${
                retryResult.correct 
                  ? 'bg-[var(--accent-success-glow)] border-[var(--accent-success)] text-[var(--accent-success)]'
                  : 'bg-[var(--accent-danger-glow)] border-[var(--accent-danger)] text-[var(--accent-danger)]'
              }`}>
                <div className="font-semibold text-xs flex items-center gap-1.5 font-mono">
                  {retryResult.correct ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {retryResult.correct ? '🎉 PARABÉNS! Questão superada com sucesso (+15 XP)!' : '❌ Incorreto! Leia a fundamentação abaixo:'}
                </div>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                  {retryResult.explanation}
                </p>
              </div>
            )}

            {/* Personal Notes Box */}
            <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <label className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-amber-400" /> Anotação Pessoal de Fixação
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Não confundir convalidação com anulação; competência exclusiva nunca admite..."
                rows={3}
                className="w-full p-2.5 rounded-lg text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
              />
              <Button
                size="sm"
                variant="outline"
                fullWidth={true}
                onClick={handleSaveNotes}
              >
                Salvar Anotação Pessoal
              </Button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  );
};
