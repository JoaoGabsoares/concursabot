import React, { useState } from 'react';
import { Sparkles, BrainCircuit, StickyNote, Copy, Check, X } from 'lucide-react';

export interface PdfSelectionHUDProps {
  position: { x: number; y: number } | null;
  selectedText: string;
  onHighlight: (color: 'yellow' | 'green' | 'purple' | 'red' | 'blue', note?: string) => void;
  onAskAi: () => void;
  onCreateFlashcard: () => void;
  onClose: () => void;
}

export const HIGHLIGHT_COLORS = [
  { id: 'yellow' as const, name: 'Conceito / Regra Geral', bg: '#facc15', border: '#eab308', text: '#713f12', badge: '🟡' },
  { id: 'green' as const, name: 'Prazos & Números', bg: '#4ade80', border: '#22c55e', text: '#14532d', badge: '🟢' },
  { id: 'purple' as const, name: 'Jurisprudência / Súmulas', bg: '#c084fc', border: '#a855f7', text: '#581c87', badge: '🟣' },
  { id: 'red' as const, name: 'Pegadinha / Exceção', bg: '#f87171', border: '#ef4444', text: '#7f1d1d', badge: '🔴' },
  { id: 'blue' as const, name: 'Doutrina & Mnemônico', bg: '#60a5fa', border: '#3b82f6', text: '#1e3a8a', badge: '🔵' }
];

export const PdfSelectionHUD: React.FC<PdfSelectionHUDProps> = ({
  position,
  selectedText,
  onHighlight,
  onAskAi,
  onCreateFlashcard,
  onClose
}) => {
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [selectedColorForNote, setSelectedColorForNote] = useState<'yellow' | 'green' | 'purple' | 'red' | 'blue'>('yellow');
  const [noteText, setNoteText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!position || !selectedText.trim()) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveWithNote = (e: React.FormEvent) => {
    e.preventDefault();
    onHighlight(selectedColorForNote, noteText.trim() || undefined);
    setShowNoteInput(false);
    setNoteText('');
  };

  return (
    <div
      className="fixed z-50 transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in zoom-in-95 duration-150"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1.5 text-xs font-sans text-[var(--text-primary)] backdrop-blur-md">
        
        {/* Row 1: Color Highlighters & Main Actions */}
        <div className="flex items-center gap-1">
          {/* Colors */}
          <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-subtle)]">
            {HIGHLIGHT_COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onHighlight(c.id)}
                title={`Grifar: ${c.name}`}
                className="w-6 h-6 rounded-full border border-black/20 hover:scale-115 transition-transform flex items-center justify-center cursor-pointer shadow-xs"
                style={{ backgroundColor: c.bg }}
              />
            ))}
          </div>

          <div className="h-4 w-px bg-[var(--border-subtle)] mx-0.5" />

          {/* Add Note */}
          <button
            type="button"
            onClick={() => setShowNoteInput(!showNoteInput)}
            className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              showNoteInput 
                ? 'bg-[var(--accent-primary)] text-white' 
                : 'hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'
            }`}
            title="Adicionar Nota de Margem"
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nota</span>
          </button>

          {/* AI Explain */}
          <button
            type="button"
            onClick={onAskAi}
            className="px-2.5 py-1.5 rounded-lg font-bold bg-[var(--accent-primary-glow)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs border border-[var(--accent-primary)]/20"
            title="Pedir explicação detalhada para o Tutor IA"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tutor IA</span>
          </button>

          {/* Create Flashcard */}
          <button
            type="button"
            onClick={onCreateFlashcard}
            className="px-2.5 py-1.5 rounded-lg font-bold bg-amber-500/15 hover:bg-amber-500 text-amber-600 dark:text-amber-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer border border-amber-500/20"
            title="Criar Flashcard Anki deste trecho"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Anki</span>
          </button>

          {/* Copy */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            title="Copiar trecho"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-success)]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] transition-colors cursor-pointer"
            title="Fechar menu"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Note Input Drawer */}
        {showNoteInput && (
          <form onSubmit={handleSaveWithNote} className="flex flex-col gap-1.5 pt-1.5 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[var(--text-muted)] font-mono">Cor da Nota:</span>
              <div className="flex items-center gap-1">
                {HIGHLIGHT_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedColorForNote(c.id)}
                    className={`w-4 h-4 rounded-full border cursor-pointer transition-transform ${
                      selectedColorForNote === c.id ? 'ring-2 ring-[var(--accent-primary)] scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.bg }}
                  />
                ))}
              </div>
            </div>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Digite sua anotação ou mnemônico pessoal..."
              className="w-full h-16 p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] resize-none"
              autoFocus
            />
            <div className="flex justify-end gap-1.5">
              <button
                type="button"
                onClick={() => setShowNoteInput(false)}
                className="px-2.5 py-1 rounded-md text-[11px] hover:bg-[var(--bg-hover)] text-[var(--text-muted)] cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-3 py-1 rounded-md text-[11px] font-bold bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white shadow-xs cursor-pointer"
              >
                Salvar Grifo com Nota (+5 XP)
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
