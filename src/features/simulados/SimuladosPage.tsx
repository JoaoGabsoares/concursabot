import React, { useState, useEffect } from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { Target, Clock, Award, CheckCircle2, XCircle, RotateCcw, Printer, Play } from 'lucide-react';

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
      <div className="space-y-6 pb-20 md:pb-8 max-w-3xl mx-auto animate-fade-in">
        <div className="text-center space-y-2 pt-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
            Simulador de Prova Oficial
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Treinamento de alta pressão cronometrado no padrão estrito da banca <strong>{currentCareer.banca}</strong>
          </p>
        </div>

        <Card className="p-6 space-y-5">
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Parâmetros do Simulado
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[11px] text-[var(--text-muted)]">Carreira</div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 truncate">{currentCareer.name.split('—')[0]}</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[11px] text-[var(--text-muted)]">Banca</div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">{currentCareer.banca}</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[11px] text-[var(--text-muted)]">Questões</div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">3 Itens Oficiais</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[11px] text-[var(--text-muted)]">Tempo Médio</div>
                <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">3 min / item</div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            variant="brand"
            fullWidth={true}
            icon={Play}
            onClick={() => {
              setExamRunning(true);
              setSecondsElapsed(0);
              setAnswers({});
            }}
            className="font-bold text-sm shadow-md"
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
    <div className="space-y-5 pb-20 md:pb-8 max-w-4xl mx-auto animate-fade-in">
      {/* Top Status Bar */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-sm text-[var(--text-primary)]">
            Questão {currentQuestionIndex + 1} de {mockQuestions.length}
          </span>
          <Badge variant="default">{currentQ.subject}</Badge>
        </div>

        <div className="flex items-center gap-3 font-mono text-sm">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Clock className="w-4 h-4" />
            <span>{formatTimer(secondsElapsed)}</span>
          </div>

          {!finished && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (window.confirm("Deseja finalizar o simulado e gerar o relatório de desempenho?")) {
                  setFinished(true);
                }
              }}
            >
              Entregar Prova
            </Button>
          )}
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-6 space-y-4">
        <p className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
          {currentQ.question}
        </p>

        {/* Alternatives List */}
        <div className="space-y-2.5 pt-2">
          {Object.entries(currentQ.options).map(([key, optText]) => {
            const isSelected = answers[currentQuestionIndex] === key;
            let style = "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-focus)]";

            if (finished) {
              if (key === currentQ.answer) {
                style = "border-[var(--accent-success)] bg-[var(--accent-success-glow)] text-[var(--accent-success)] font-semibold";
              } else if (isSelected) {
                style = "border-[var(--accent-danger)] bg-[var(--accent-danger-glow)] text-[var(--accent-danger)] font-medium";
              } else {
                style = "opacity-35 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)]";
              }
            } else if (isSelected) {
              style = "border-[var(--accent-primary)] bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-semibold";
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={finished}
                className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-start gap-3 border ${style}`}
              >
                <span className="w-6 h-6 rounded-md bg-[var(--bg-surface)] flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                  {key}
                </span>
                <span className="flex-1 leading-normal">{optText}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation on finish */}
        {finished && (
          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 animate-fade-in text-xs sm:text-sm">
            <div className="font-semibold text-[var(--accent-success)] font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Gabarito Oficial da Banca: Letra {currentQ.answer}
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigator Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
          >
            Anterior
          </Button>

          <div className="flex gap-1.5">
            {mockQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-7 h-7 rounded-md font-mono text-xs font-bold transition-colors ${
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
            variant="primary"
            onClick={() => {
              if (currentQuestionIndex < mockQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else if (!finished) {
                setFinished(true);
              }
            }}
          >
            {currentQuestionIndex < mockQuestions.length - 1 ? 'Próxima' : finished ? 'Ver Resultado' : 'Finalizar'}
          </Button>
        </div>
      </Card>

      {/* Result Card Modal on Finish */}
      {finished && (
        <Card className="p-6 text-center space-y-4 border border-[var(--border-focus)] bg-[var(--bg-surface)] shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-success-glow)] text-[var(--accent-success)] flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Resultado Homologado
            </h2>
            <div className="text-3xl font-mono font-bold text-[var(--accent-success)] mt-1">
              {scoreResult.percentage}% de Acerto
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              {scoreResult.correct} acertos de {scoreResult.total} questões em {formatTimer(secondsElapsed)}
            </p>
          </div>

          <div className="flex gap-2 justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              icon={RotateCcw}
              onClick={() => {
                setFinished(false);
                setExamRunning(false);
                setAnswers({});
              }}
            >
              Novo Simulado
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Printer}
              onClick={() => window.print()}
            >
              Imprimir Folha Oficial
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
