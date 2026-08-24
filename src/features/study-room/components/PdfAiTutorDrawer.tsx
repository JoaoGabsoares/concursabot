import React from 'react';
import { Sparkles, Scale, AlertTriangle, Lightbulb, BrainCircuit, X, Check, Copy, BookOpen } from 'lucide-react';

export interface PdfAiTutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  excerpt: string;
  pageNumber: number;
  subject: string;
  loading: boolean;
  explanation: {
    summary: string;
    legalBasis: string;
    practicalExample?: string;
    examTrap?: string;
    mnemonics?: string;
  } | null;
  onCreateFlashcard: (front: string, back: string) => void;
}

export const PdfAiTutorDrawer: React.FC<PdfAiTutorDrawerProps> = ({
  isOpen,
  onClose,
  excerpt,
  pageNumber,
  subject,
  loading,
  explanation,
  onCreateFlashcard
}) => {
  const [copied, setCopied] = React.useState(false);
  const [cardCreated, setCardCreated] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (!explanation) return;
    const text = `Trecho (Pág. ${pageNumber}): "${excerpt}"\n\nResumo IA:\n${explanation.summary}\n\nBase Legal: ${explanation.legalBasis}\n\nPegadinha de Prova: ${explanation.examTrap || ''}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickFlashcard = () => {
    if (!explanation) return;
    const front = `O que estabelece a regra/doutrina sobre: "${excerpt.substring(0, 120)}${excerpt.length > 120 ? '...' : ''}"?`;
    const back = `${explanation.summary}\n\n⚖️ Base: ${explanation.legalBasis}${explanation.mnemonics ? `\n🧠 Mnemônico: ${explanation.mnemonics}` : ''}`;
    onCreateFlashcard(front, back);
    setCardCreated(true);
    setTimeout(() => setCardCreated(false), 2500);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[440px] bg-[var(--bg-card)] border-l border-[var(--border-strong)] shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-200">
      
      {/* Header */}
      <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)]">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm text-[var(--text-primary)]">
              Tutor IA • Análise de Trecho
            </h3>
            <p className="text-[11px] font-mono text-[var(--text-muted)]">
              {subject} • Página {pageNumber}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          title="Fechar painel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Excerpt Quoted Box */}
      <div className="p-3 bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)]">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1 flex items-center gap-1">
          <BookOpen className="w-3 h-3 text-[var(--accent-primary)]" />
          <span>Trecho Selecionado na Apostila:</span>
        </div>
        <blockquote className="text-xs text-[var(--text-secondary)] italic border-l-2 border-[var(--accent-primary)] pl-2 line-clamp-3 leading-relaxed">
          "{excerpt}"
        </blockquote>
      </div>

      {/* Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
        {loading ? (
          <div className="py-16 flex flex-col items-center justify-center gap-3 text-center">
            <div className="w-8 h-8 rounded-full border-2 border-[var(--accent-primary)] border-t-transparent animate-spin" />
            <p className="font-bold text-[var(--text-primary)]">Consultando Gemini 3.6 Flash...</p>
            <p className="text-[11px] text-[var(--text-muted)] max-w-xs">
              Mapeando doutrina, jurisprudência do STF/STJ e pegadinhas de bancas examinadoras.
            </p>
          </div>
        ) : explanation ? (
          <>
            {/* 1. Explicação Central */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
              <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-xs">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>Conceito Central & Entendimento</span>
              </h4>
              <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {explanation.summary}
              </p>
            </div>

            {/* 2. Fundamento Legal / Súmulas */}
            <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1.5">
              <h4 className="font-bold text-blue-400 flex items-center gap-1.5 text-xs">
                <Scale className="w-3.5 h-3.5" />
                <span>Base Normativa & Jurisprudência</span>
              </h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {explanation.legalBasis}
              </p>
            </div>

            {/* 3. Pegadinha de Banca */}
            {explanation.examTrap && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1.5">
                <h4 className="font-bold text-red-400 flex items-center gap-1.5 text-xs">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Atenção: Pegadinha de Prova</span>
                </h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {explanation.examTrap}
                </p>
              </div>
            )}

            {/* 4. Exemplo Prático */}
            {explanation.practicalExample && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-xs">
                  <span>💡 Exemplo Prático de Aplicação</span>
                </h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {explanation.practicalExample}
                </p>
              </div>
            )}

            {/* 5. Mnemônico */}
            {explanation.mnemonics && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 text-xs">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>Âncora de Memória & Mnemônico</span>
                </h4>
                <p className="font-mono text-xs font-semibold text-emerald-300">
                  {explanation.mnemonics}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-[var(--text-muted)]">
            Nenhuma explicação disponível para este trecho.
          </div>
        )}
      </div>

      {/* Footer Actions */}
      {explanation && !loading && (
        <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-2 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-hover)] text-xs font-semibold text-[var(--text-secondary)] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>

          <button
            type="button"
            onClick={handleQuickFlashcard}
            disabled={cardCreated}
            className="flex-1 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>{cardCreated ? 'Flashcard Criado! ✓' : 'Criar Flashcard Anki (+15 XP)'}</span>
          </button>
        </div>
      )}

    </div>
  );
};
