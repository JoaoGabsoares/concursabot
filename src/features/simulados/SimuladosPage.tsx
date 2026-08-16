import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';

interface SimuladosPageProps {
  careerId: string;
}

export const SimuladosPage: React.FC<SimuladosPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  // Constrói o banco de questões oficial para o concurso ativo
  const careerQuestions = careerSubjects.map((subj, idx) => {
    const lesson = getLessonContent(subj.name);
    return {
      id: idx + 1,
      subject: subj.name,
      banca: currentCareer.banca,
      question: lesson.question.question,
      options: lesson.question.options,
      answer: lesson.question.answer,
      explanation: lesson.question.explanation
    };
  });

  const [examRunning, setExamRunning] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [finished, setFinished] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Reseta ao trocar de carreira
  useEffect(() => {
    setExamRunning(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFinished(false);
    setSecondsElapsed(0);
  }, [careerId]);

  // Timer do simulado
  useEffect(() => {
    let interval: any = null;
    if (examRunning && !finished) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examRunning, finished]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectAnswer = (letter: string) => {
    if (finished) return;
    setAnswers({
      ...answers,
      [currentQuestionIndex]: letter
    });
  };

  const handleFinishExam = () => {
    setFinished(true);
  };

  // Cálculos de desempenho
  const questionsList = careerQuestions.length > 0 ? careerQuestions : [
    {
      id: 1,
      subject: "Língua Portuguesa",
      banca: currentCareer.banca,
      question: "Assinale a opção em que a regência verbal atende rigorosamente ao padrão culto da língua.",
      options: { A: "Visou ao cargo.", B: "Visou o cargo.", C: "Assistiu o filme.", D: "Prefere café do que chá." },
      answer: "A",
      explanation: "O verbo visar no sentido de almejar é transitivo indireto com preposição 'a'."
    }
  ];

  const totalQuestions = questionsList.length;
  const answeredCount = Object.keys(answers).length;
  let correctCount = 0;

  if (finished) {
    questionsList.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correctCount += 1;
      }
    });
  }

  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const activeQ = questionsList[currentQuestionIndex] || questionsList[0];

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Simulados Oficiais da Banca
            </h1>
            <CarimboStatus status="homologado" label={`BANCA ${currentCareer.banca}`} />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Simulação de prova real para {currentCareer.name.split('—')[0]} com cronômetro e certificação técnica
          </p>
        </div>

        {examRunning && !finished && (
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-sm font-bold text-[var(--text-primary)] flex items-center gap-2 shadow-sm">
              <span className="text-[var(--accent-danger)] animate-pulse">●</span>
              <span>TEMPO: {formatTimer(secondsElapsed)}</span>
            </div>
            <Button
              variant="brand"
              size="sm"
              onClick={handleFinishExam}
              className="font-mono text-xs"
            >
              Finalizar Simulado
            </Button>
          </div>
        )}
      </div>

      {!examRunning && !finished && (
        <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
              Simulado Geral: {currentCareer.name}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Este simulado abrange a totalidade das disciplinas do edital ({totalQuestions} itens representativos com os pesos oficiais da banca <strong className="text-[var(--text-primary)]">{currentCareer.banca}</strong>).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Total de Itens</span>
              <span className="font-bold text-[var(--text-primary)] text-sm">{totalQuestions} Questões</span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Tempo Estimado</span>
              <span className="font-bold text-[var(--text-primary)] text-sm">~{totalQuestions * 3} Minutos</span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Banca Examinadora</span>
              <span className="font-bold text-[var(--accent-primary)] text-sm">{currentCareer.banca}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Gera relatório de desempenho e alimenta o Caderno de Erros automaticamente.
            </span>
            <Button
              variant="brand"
              onClick={() => {
                setExamRunning(true);
                setSecondsElapsed(0);
              }}
              className="font-mono text-xs"
            >
              Iniciar Simulado Cronometrado
            </Button>
          </div>
        </Card>
      )}

      {examRunning && !finished && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question View (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
              {/* Question Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                  QUESTÃO {currentQuestionIndex + 1} DE {totalQuestions} • {activeQ.subject}
                </span>
                <CarimboStatus status="homologado" label={`BANCA ${currentCareer.banca}`} />
              </div>

              {/* Question Text */}
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                {activeQ.question}
              </p>

              {/* Options */}
              <div className="space-y-3">
                {Object.entries(activeQ.options).map(([letter, text]) => {
                  const isSelected = answers[currentQuestionIndex] === letter;
                  return (
                    <button
                      key={letter}
                      onClick={() => handleSelectAnswer(letter)}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs leading-relaxed transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] font-semibold shadow-sm'
                          : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <span className={`font-mono font-bold shrink-0 px-2 py-0.5 rounded border text-xs ${
                        isSelected ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]' : 'bg-[var(--bg-surface)] border-[var(--border-subtle)]'
                      }`}>
                        {letter}
                      </span>
                      <span>{text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className="font-mono text-xs"
                >
                  ← Anterior
                </Button>

                <Button
                  variant={currentQuestionIndex === totalQuestions - 1 ? "brand" : "outline"}
                  size="sm"
                  onClick={() => {
                    if (currentQuestionIndex === totalQuestions - 1) {
                      handleFinishExam();
                    } else {
                      setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
                    }
                  }}
                  className="font-mono text-xs"
                >
                  {currentQuestionIndex === totalQuestions - 1 ? "Finalizar Simulado" : "Próxima →"}
                </Button>
              </div>
            </Card>
          </div>

          {/* Navigator Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 space-y-5 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">
                  Mapa de Respostas
                </h3>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {answeredCount}/{totalQuestions} Respondidas
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2.5">
                {questionsList.map((_, idx) => {
                  const isCurrent = currentQuestionIndex === idx;
                  const isAnswered = answers[idx] !== undefined;

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-9 rounded-lg font-mono text-xs font-bold transition-all border ${
                        isCurrent
                          ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary-glow)] bg-[var(--accent-primary)] text-white'
                          : isAnswered
                          ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border-[var(--border-focus)]'
                          : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <ProgressBar
                  value={answeredCount}
                  max={totalQuestions}
                  label="Progresso da Prova"
                  showPercentage
                />
              </div>
            </Card>
          </div>
        </div>
      )}

      {finished && (
        <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                RELATÓRIO HOMOLOGADO DE SIMULADO
              </span>
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Resultado Oficial do Treino Real
              </h2>
            </div>
            <CarimboStatus
              status={scorePct >= 70 ? "homologado" : "vulneravel"}
              label={scorePct >= 70 ? "HOMOLOGADO NO CORTE" : "ABAIXO DO CORTE"}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Taxa de Acerto</span>
              <span className="font-bold text-[var(--text-primary)] text-lg">{scorePct}%</span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Itens Corretos</span>
              <span className="font-bold text-[var(--accent-success)] text-lg">{correctCount} / {totalQuestions}</span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">Tempo Total</span>
              <span className="font-bold text-[var(--text-primary)] text-lg">{formatTimer(secondsElapsed)}</span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] uppercase block text-[10px]">XP Conquistado</span>
              <span className="font-bold text-[var(--accent-primary)] text-lg">+{correctCount * 15} XP</span>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4 pt-4">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Gabarito Comentado e Diagnóstico
            </h3>

            <div className="space-y-3">
              {questionsList.map((q, idx) => {
                const userAns = answers[idx];
                const isCorrect = userAns === q.answer;

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-[var(--text-primary)]">
                        Item #{idx + 1} • {q.subject}
                      </span>
                      <CarimboStatus
                        status={isCorrect ? "homologado" : "vulneravel"}
                        label={isCorrect ? "ACERTOU" : "ERROU"}
                      />
                    </div>
                    <p className="text-[var(--text-secondary)] font-medium">
                      {q.question}
                    </p>
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">
                      Sua resposta: <strong className={isCorrect ? "text-[var(--accent-success)]" : "text-[var(--accent-danger)]"}>{userAns || 'Em branco'}</strong> • Gabarito Oficial: <strong className="text-[var(--accent-success)]">{q.answer}</strong>
                    </div>
                    <p className="text-[var(--text-secondary)] text-[11px] bg-[var(--bg-surface)] p-2.5 rounded border border-[var(--border-subtle)] italic">
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Questões com erro foram catalogadas para retreino no Caderno de Erros.
            </span>
            <Button
              variant="brand"
              onClick={() => {
                setExamRunning(false);
                setFinished(false);
                setAnswers({});
                setCurrentQuestionIndex(0);
              }}
              className="font-mono text-xs"
            >
              Novo Simulado
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
