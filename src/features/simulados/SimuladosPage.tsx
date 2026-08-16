import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';

interface SimuladosPageProps {
  careerId: string;
}

export const SimuladosPage: React.FC<SimuladosPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const [examRunning, setExamRunning] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [finished, setFinished] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const mockQuestions = [
    {
      id: 1,
      subject: "Direito Administrativo",
      banca: currentCareer.banca,
      question: "No tocante aos poderes administrativos, o ato praticado por autoridade pública visando a fim diverso daquele previsto em lei padece de vício denominado:",
      options: {
        A: "Excesso de poder.",
        B: "Desvio de finalidade.",
        C: "Incompetência territorial.",
        D: "Vício de forma insanável.",
        E: "Ilegitimidade passiva."
      },
      answer: "B",
      explanation: "O desvio de finalidade (ou desvio de poder) ocorre quando o agente pratica o ato visando a fim diverso daquele previsto, explícita ou implicitamente, na lei."
    },
    {
      id: 2,
      subject: "Direito Constitucional",
      banca: currentCareer.banca,
      question: "Assinale a opção que indica o remédio constitucional cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais:",
      options: {
        A: "Mandado de Segurança Coletivo.",
        B: "Ação Popular.",
        C: "Habeas Data.",
        D: "Habeas Corpus.",
        E: "Mandado de Injunção."
      },
      answer: "C",
      explanation: "Art. 5º, LXXII, 'a' da CF/88: Conceder-se-á habeas data para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público."
    },
    {
      id: 3,
      subject: currentCareer.id.includes('bb') ? 'Conhecimentos Bancários' : 'Língua Portuguesa',
      banca: currentCareer.banca,
      question: "Em relação à concordância verbal e nominal na norma culta, assinale a opção correta:",
      options: {
        A: "Fazem dez anos que o concurso não é realizado.",
        B: "Haviam muitos candidatos inscritos no processo seletivo.",
        C: "Devem haver soluções imediatas para a demanda.",
        D: "Fazia dez anos que o certame não ocorria.",
        E: "Alugam-se salas comerciais sem fiador."
      },
      answer: "D",
      explanation: "O verbo fazer indicando tempo decorrido é impessoal, permanecendo na 3ª pessoa do singular (Fazia dez anos)."
    }
  ];

  useEffect(() => {
    let timer: any;
    if (examRunning && !finished) {
      timer = setInterval(() => setSecondsElapsed((s) => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [examRunning, finished]);

  const handleSelect = (optionKey: string) => {
    if (finished) return;
    setAnswers({ ...answers, [currentQuestionIndex]: optionKey });
  };

  const calculateScore = () => {
    let correct = 0;
    mockQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    return {
      correct,
      total: mockQuestions.length,
      percentage: Math.round((correct / mockQuestions.length) * 100)
    };
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!examRunning && !finished) {
    return (
      <div className="space-y-6 pb-20 max-w-4xl mx-auto font-sans animate-fade-in">
        <div className="text-center space-y-3 pt-6">
          <CarimboStatus status="em_revisao" label="SIMULADO OFICIAL DE PROVA" />
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
            Simulador de Prova Cronometrado
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            Ambiente de treino sob pressão cronometrada no padrão estrito da banca {currentCareer.banca}.
          </p>
        </div>

        <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-lg">
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Parâmetros Oficiais do Certame
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
              <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Carreira</div>
                <div className="text-xs font-bold text-[var(--text-primary)] mt-1 truncate">{currentCareer.name.split('—')[0]}</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Banca</div>
                <div className="text-xs font-bold text-[var(--text-primary)] mt-1">{currentCareer.banca}</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Questões</div>
                <div className="text-xs font-bold text-[var(--text-primary)] mt-1">{mockQuestions.length} Itens</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--text-muted)] uppercase">Tempo Estimado</div>
                <div className="text-xs font-bold text-[var(--text-primary)] mt-1">3 min / item</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            variant="brand"
            fullWidth={true}
            onClick={() => {
              setExamRunning(true);
              setSecondsElapsed(0);
              setAnswers({});
            }}
            className="font-bold text-sm sm:text-base shadow-md"
          >
            Iniciar Simulado Cronometrado
          </Button>
        </Card>
      </div>
    );
  }

  const currentQ = mockQuestions[currentQuestionIndex];
  const scoreResult = calculateScore();

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto font-sans animate-fade-in">
      {/* Top Status Bar */}
      <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-xs sm:text-sm text-[var(--text-primary)]">
            ITEM {currentQuestionIndex + 1} DE {mockQuestions.length}
          </span>
          <CarimboStatus status="pendente" label={currentQ.subject} />
        </div>

        <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
          <div className="text-[var(--accent-primary)] font-bold">
            TEMPO: {formatTimer(secondsElapsed)}
          </div>

          {!finished && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (window.confirm("Deseja finalizar o simulado e gerar a ata de desempenho?")) {
                  setFinished(true);
                }
              }}
              className="font-mono text-xs"
            >
              Entregar Prova
            </Button>
          )}
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md">
        <p className="text-sm sm:text-base font-medium text-[var(--text-primary)] leading-relaxed">
          {currentQ.question}
        </p>

        {/* Alternatives List */}
        <div className="space-y-3 pt-2">
          {Object.entries(currentQ.options).map(([key, optText]) => {
            const isSelected = answers[currentQuestionIndex] === key;
            let style = "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-focus)]";

            if (finished) {
              if (key === currentQ.answer) {
                style = "border-[var(--color-status-success)] bg-[var(--color-status-success-bg)] text-[var(--accent-success)] font-bold";
              } else if (isSelected) {
                style = "border-[var(--color-status-danger)] bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] font-medium";
              } else {
                style = "opacity-35 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)]";
              }
            } else if (isSelected) {
              style = "border-[var(--accent-primary)] bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold";
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={finished}
                className={`w-full text-left p-4 rounded-lg text-xs sm:text-sm transition-all flex items-start gap-3 border ${style}`}
              >
                <span className="w-6 h-6 rounded bg-[var(--bg-surface)] flex items-center justify-center font-mono font-bold shrink-0 text-xs border border-[var(--border-subtle)]">
                  {key}
                </span>
                <span className="flex-1 leading-relaxed">{optText}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation on finish */}
        {finished && (
          <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 animate-fade-in text-xs font-mono">
            <div className="font-bold text-[var(--accent-success)]">
              [ GABARITO HOMOLOGADO: LETRA {currentQ.answer} ]
            </div>
            <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigator Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-[var(--border-subtle)]">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="font-mono text-xs"
          >
            Anterior
          </Button>

          <div className="flex gap-1.5">
            {mockQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-colors ${
                  currentQuestionIndex === idx
                    ? 'bg-[var(--accent-primary)] text-white'
                    : answers[idx]
                    ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            variant="brand"
            onClick={() => {
              if (currentQuestionIndex < mockQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else if (!finished) {
                setFinished(true);
              }
            }}
            className="font-mono text-xs font-bold"
          >
            {currentQuestionIndex < mockQuestions.length - 1 ? 'Próxima' : finished ? 'Ver Ata Final' : 'Finalizar'}
          </Button>
        </div>
      </Card>

      {/* Result Card Modal on Finish */}
      {finished && (
        <Card className="p-6 sm:p-8 text-center space-y-4 border border-[var(--border-focus)] bg-[var(--bg-surface)] shadow-2xl">
          <CarimboStatus status="homologado" label="RESULTADO HOMOLOGADO" />
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Ata de Desempenho Oficial
            </h2>
            <div className="font-mono text-4xl sm:text-5xl font-bold text-[var(--accent-primary)] mt-3">
              {scoreResult.percentage}% de Acerto
            </div>
            <p className="font-mono text-xs text-[var(--text-secondary)] mt-2">
              {scoreResult.correct} acertos de {scoreResult.total} itens • Tempo total: {formatTimer(secondsElapsed)}
            </p>
          </div>

          <div className="flex gap-3 justify-center pt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setFinished(false);
                setExamRunning(false);
                setAnswers({});
              }}
              className="font-mono text-xs"
            >
              Novo Simulado
            </Button>
            <Button
              variant="brand"
              size="sm"
              onClick={() => window.print()}
              className="font-mono text-xs font-bold"
            >
              Imprimir Ata Oficial
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
