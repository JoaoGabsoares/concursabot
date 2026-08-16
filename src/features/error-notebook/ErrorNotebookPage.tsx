import React, { useState } from 'react';
import { Card, Button, BottomSheet, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
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
    <div className="space-y-6 pb-20 font-sans animate-fade-in">
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
            Isolamento de falhas com retreino de superação (+15 XP) e notas técnicas pessoais
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-xs">
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterStatus === 'pending'
                ? 'bg-[var(--accent-primary)] text-white font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setFilterStatus('mastered')}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterStatus === 'mastered'
                ? 'bg-[var(--accent-primary)] text-white font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Superados (+15 XP)
          </button>
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded transition-colors ${
              filterStatus === 'all'
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold'
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
          <Card className="text-center py-12 space-y-3">
            <CarimboStatus status="homologado" label="CADERNO 100% ZERADO" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] tracking-tight">
              Nenhuma vulnerabilidade pendente
            </h3>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
              Você superou todos os itens do caderno de erros ou ainda não registrou falhas nos simulados oficiais.
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
                className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border ${
                  isMastered ? 'border-[var(--color-status-success)]/30' : 'border-[var(--color-status-danger)]/30'
                }`}
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <CarimboStatus status={isMastered ? "homologado" : "vulneravel"} label={isMastered ? "SUPERADO" : "PENDENTE"} />
                    <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">{item.subject}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">{item.topic}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium line-clamp-2 leading-relaxed">
                    {item.question_text}
                  </p>

                  {item.personal_notes && (
                    <div className="font-mono text-xs text-[var(--accent-primary)] bg-[var(--bg-elevated)] px-2.5 py-1 rounded border border-[var(--border-subtle)] inline-block">
                      NOTA: {item.personal_notes}
                    </div>
                  )}
                </div>

                <Button
                  variant={isMastered ? "outline" : "brand"}
                  size="sm"
                  className="font-mono text-xs shrink-0"
                >
                  {isMastered ? 'Revisar' : 'Retreinar Item'}
                </Button>
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
          <div className="space-y-4 font-sans text-xs sm:text-sm">
            <p className="text-[var(--text-primary)] font-medium leading-relaxed">
              {selectedError.question_text}
            </p>

            <div className="grid grid-cols-5 gap-2 pt-2">
              {['A', 'B', 'C', 'D', 'E'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setRetryOption(opt)}
                  className={`h-11 rounded font-mono font-bold text-sm transition-all border ${
                    retryOption === opt
                      ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                      : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-focus)]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <Button
              variant="brand"
              fullWidth={true}
              onClick={handleExecuteRetry}
              disabled={!retryOption}
              className="font-bold mt-2"
            >
              Confirmar Resposta de Retreino
            </Button>

            {retryResult && (
              <div className="p-4 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in">
                <CarimboStatus 
                  status={retryResult.correct ? "homologado" : "vulneravel"} 
                  label={retryResult.correct ? "ACERTOU • SUPERAÇÃO HOMOLOGADA (+15 XP)" : "INCORRETO • MANTIDO NO CADERNO"} 
                />
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  {retryResult.explanation}
                </p>
              </div>
            )}

            {/* Anotação Técnica */}
            <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <label className="font-mono text-xs text-[var(--text-muted)] uppercase">
                Anotação Técnica Pessoal:
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Artigo de lei ou mnemônico chave para não errar..."
                rows={2}
                className="w-full p-2.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
              />
              <Button
                variant="outline"
                size="sm"
                fullWidth={true}
                onClick={handleSaveNotes}
              >
                Salvar Nota Técnica
              </Button>
            </div>
          </div>
        </BottomSheet>
      )}
    </div>
  );
};
