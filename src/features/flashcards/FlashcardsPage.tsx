import React, { useState } from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { Layers, RotateCcw, CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Flashcard } from '../../types';

interface FlashcardsPageProps {
  careerId: string;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const sampleFlashcards: Flashcard[] = [
    {
      id: 1,
      front: "Qual é a diferença essencial entre Desvio de Poder e Excesso de Poder?",
      back: "• Desvio de Poder: Vício de finalidade (o agente atua com fim diverso da lei).\n• Excesso de Poder: Vício de competência (o agente atua além dos limites legais de suas atribuições).",
      subject: "Direito Administrativo",
      topic: "Abuso de Poder",
      interval: 1,
      repetitions: 1,
      ease_factor: 2.5,
      due_date: "Hoje"
    },
    {
      id: 2,
      front: "Quais são os tributos que exigem Lei Complementar para sua instituição segundo a CF/88?",
      back: "1. Impostos Residuais (Art. 154, I)\n2. Empréstimos Compulsórios (Art. 148)\n3. Imposto sobre Grandes Fortunas - IGF (Art. 153, VII)\n4. Contribuições Sociais Residuais (Art. 195, § 4º)",
      subject: "Direito Tributário",
      topic: "Espécies Tributárias",
      interval: 3,
      repetitions: 2,
      ease_factor: 2.6,
      due_date: "Hoje"
    },
    {
      id: 3,
      front: "O que diz o princípio da Anterioridade Nonagesimal (Noventena)?",
      back: "A lei que cria ou majora tributo só pode ser exigida após decorridos 90 dias da data de sua publicação (com exceções constitucionais como II, IE, IOF, IPI extraordinário).",
      subject: "Direito Tributário",
      topic: "Princípios Constitucionais Tributários",
      interval: 1,
      repetitions: 0,
      ease_factor: 2.5,
      due_date: "Hoje"
    }
  ];

  const currentCard = sampleFlashcards[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < sampleFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 sm:pb-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
              Flashcards SM-2
            </h1>
            <Badge variant="success">Repetição Espaçada</Badge>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-sans">
            Algoritmo inteligente de retenção mnemônica de longo prazo
          </p>
        </div>

        <div className="font-mono text-xs text-[var(--text-muted)]">
          Card {currentIndex + 1} de {sampleFlashcards.length}
        </div>
      </div>

      {/* Flip Card Container */}
      <Card
        hoverable={true}
        onClick={() => setFlipped(!flipped)}
        className="min-h-[280px] sm:min-h-[320px] flex flex-col justify-between p-6 sm:p-8 cursor-pointer select-none border-2 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-center transition-all shadow-lg"
      >
        <div className="flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
          <Badge variant="default">{currentCard.subject}</Badge>
          <span>Toque no card para virar 🔄</span>
        </div>

        <div className="my-auto py-6">
          {!flipped ? (
            <div className="space-y-3 animate-fade-in">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Pergunta / Conceito
              </span>
              <h2 className="text-base sm:text-xl font-serif font-bold text-[var(--text-primary)] leading-relaxed">
                {currentCard.front}
              </h2>
            </div>
          ) : (
            <div className="space-y-3 animate-fade-in">
              <span className="text-[11px] font-mono text-[var(--accent-gabarito)] uppercase tracking-wider font-bold">
                Resposta / Gabarito
              </span>
              <p className="text-xs sm:text-sm font-sans text-[var(--text-primary)] leading-relaxed whitespace-pre-line text-left bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)]">
                {currentCard.back}
              </p>
            </div>
          )}
        </div>

        <div className="text-[11px] font-sans text-[var(--text-muted)]">
          {flipped ? "Avalie sua retenção abaixo:" : "Clique para revelar a resposta"}
        </div>
      </Card>

      {/* SM-2 Rating Buttons (Only shown when flipped) */}
      {flipped && (
        <div className="grid grid-cols-4 gap-2 animate-fade-in">
          <Button
            size="md"
            variant="danger"
            onClick={handleNext}
            className="text-xs font-semibold"
          >
            Errei (1d)
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={handleNext}
            className="text-xs font-semibold text-amber-400"
          >
            Difícil (3d)
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={handleNext}
            className="text-xs font-semibold text-sky-400"
          >
            Bom (7d)
          </Button>
          <Button
            size="md"
            variant="primary"
            onClick={handleNext}
            className="text-xs font-semibold"
          >
            Fácil (15d)
          </Button>
        </div>
      )}
    </div>
  );
};
