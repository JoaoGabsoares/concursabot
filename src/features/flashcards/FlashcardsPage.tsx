import React, { useState } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
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
      back: "• Desvio de Poder: Vício de finalidade (o agente atua com fim diverso daquele previsto em lei).\n• Excesso de Poder: Vício de competência (o agente atua além dos limites legais de suas atribuições).",
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
    <div className="space-y-6 pb-20 max-w-3xl mx-auto font-sans animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Flashcards SM-2
            </h1>
            <CarimboStatus status="homologado" label="ALGORITMO SM-2" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Repetição espaçada com feedback ponderado para consolidação de longo prazo
          </p>
        </div>

        <div className="font-mono text-xs font-bold text-[var(--text-muted)]">
          CARD {currentIndex + 1} DE {sampleFlashcards.length}
        </div>
      </div>

      {/* Flip Card Container */}
      <Card
        hoverable={true}
        onClick={() => setFlipped(!flipped)}
        className="min-h-[320px] sm:min-h-[360px] flex flex-col justify-between p-8 sm:p-10 cursor-pointer select-none text-center bg-[var(--bg-surface)] shadow-lg hover:border-[var(--border-focus)] transition-all"
      >
        <div className="flex justify-between items-center text-xs font-mono">
          <CarimboStatus status="pendente" label={currentCard.subject} />
          <span className="text-[var(--text-muted)] font-semibold">[ CLIQUE PARA VIRAR 🔄 ]</span>
        </div>

        <div className="my-auto py-8">
          {!flipped ? (
            <div className="space-y-4 animate-fade-in">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-bold">
                Conceito / Pergunta Técnica:
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] leading-relaxed max-w-xl mx-auto">
                {currentCard.front}
              </h2>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in text-left">
              <span className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                Gabarito Técnico:
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line bg-[var(--bg-elevated)] p-5 rounded-lg border border-[var(--border-subtle)] font-mono shadow-inner">
                {currentCard.back}
              </p>
            </div>
          )}
        </div>

        <div className="font-mono text-xs text-[var(--text-muted)]">
          {flipped ? "Classifique sua retenção para calcular o próximo ciclo:" : "Toque no card para inspecionar a resposta"}
        </div>
      </Card>

      {/* SM-2 Rating Buttons (Only shown when flipped) */}
      {flipped && (
        <div className="grid grid-cols-4 gap-3 animate-fade-in font-mono">
          <Button
            size="md"
            variant="danger"
            onClick={handleNext}
            className="text-xs font-bold shadow-sm"
          >
            Errei (1d)
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={handleNext}
            className="text-xs font-bold text-[var(--accent-warning)] shadow-sm"
          >
            Difícil (3d)
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={handleNext}
            className="text-xs font-bold text-[var(--accent-primary)] shadow-sm"
          >
            Bom (7d)
          </Button>
          <Button
            size="md"
            variant="brand"
            onClick={handleNext}
            className="text-xs font-bold shadow-md"
          >
            Fácil (15d)
          </Button>
        </div>
      )}
    </div>
  );
};
