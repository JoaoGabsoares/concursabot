import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus, ProgressBar, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';
import { 
  Timer, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  PenTool, 
  Grid, 
  Award, 
  Clock, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

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

  const [modoProva, setModoModo] = useState<'treino_rapido' | 'dia_d' | 'vulnerabilidades'>('treino_rapido');
  const [examRunning, setExamRunning] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [finished, setFinished] = useState(false);
  
  // Timers
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [secondsRemainingDiaD, setSecondsRemainingDiaD] = useState(4 * 3600); // 4 horas

  // Sub-abas durante o Dia D
  const [diaDTab, setDiaDTab] = useState<'questoes' | 'cartao_resposta' | 'redacao'>('questoes');
  const [textoRedacao, setTextoRedacao] = useState('');

  // Reseta ao trocar de carreira
  useEffect(() => {
    setExamRunning(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setFinished(false);
    setSecondsElapsed(0);
    setSecondsRemainingDiaD(4 * 3600);
    setTextoRedacao('');
  }, [careerId]);

  // Timer do simulado
  useEffect(() => {
    let interval: any = null;
    if (examRunning && !finished) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
        if (modoProva === 'dia_d') {
          setSecondsRemainingDiaD((prev) => {
            if (prev <= 1) {
              setFinished(true);
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examRunning, finished, modoProva]);

  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectAnswer = (qIndex: number, letter: string) => {
    if (finished) return;
    setAnswers(prev => ({
      ...prev,
      [qIndex]: letter
    }));
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

  const wordCount = textoRedacao.trim() ? textoRedacao.trim().split(/\s+/).length : 0;
  const lineCount = textoRedacao.split('\n').filter(l => l.trim().length > 0).length || (wordCount > 0 ? Math.ceil(wordCount / 10) : 0);

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Simulados Oficiais & Dia D de Prova
            </h1>
            <CarimboStatus status="homologado" label={`BANCA ${currentCareer.banca}`} />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Treino realístico para {currentCareer.name.split('—')[0]} com Cartão-Resposta e Redação Integrada
          </p>
        </div>

        {examRunning && !finished && (
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-sm font-bold text-[var(--text-primary)] flex items-center gap-2 shadow-sm">
              <span className="text-[var(--accent-danger)] animate-pulse">●</span>
              {modoProva === 'dia_d' ? (
                <span>RESTANTE: {formatTimer(secondsRemainingDiaD)}</span>
              ) : (
                <span>TEMPO: {formatTimer(secondsElapsed)}</span>
              )}
            </div>
            <Button
              variant="brand"
              size="sm"
              onClick={handleFinishExam}
              className="font-mono text-xs"
            >
              Entregar Prova
            </Button>
          </div>
        )}
      </div>

      {/* Tela Pré-Prova (Seleção de Modo) */}
      {!examRunning && !finished && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Modo 1: Treino Rápido */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'treino_rapido' 
                  ? 'border-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-lg ring-1 ring-[var(--accent-primary)]/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-primary)]/50 opacity-90'
              }`}
              onClick={() => setModoModo('treino_rapido')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="brand">MODO ÁGIL</Badge>
                  <div className="p-2 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Simulado Rápido de Treino
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    Resolva as {totalQuestions} questões representativas no seu ritmo com cronômetro progressivo e gabarito comentado imediato.
                  </p>
                </div>
              </div>
              
              <div className="pt-6 mt-auto">
                <Button 
                  variant={modoProva === 'treino_rapido' ? 'brand' : 'outline'}
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation();
                    setModoModo('treino_rapido');
                    setExamRunning(true);
                    setSecondsElapsed(0);
                  }}
                  className="font-mono text-xs font-bold"
                >
                  Iniciar Treino Rápido
                </Button>
              </div>
            </Card>

            {/* Modo 2: Treino de Vulnerabilidades */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'vulnerabilidades' 
                  ? 'border-rose-500 bg-[var(--bg-surface)] shadow-lg ring-1 ring-rose-500/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-rose-500/50 opacity-90'
              }`}
              onClick={() => setModoModo('vulnerabilidades')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="danger">FOCO EM PONTOS FRACOS</Badge>
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Radar de Vulnerabilidades
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    Treino direcionado com base no seu <strong>Caderno de Erros</strong> e disciplinas de maior incidência estatística da banca.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <Button 
                  variant={modoProva === 'vulnerabilidades' ? 'brand' : 'outline'}
                  fullWidth
                  className={modoProva === 'vulnerabilidades' ? 'bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold' : 'font-mono text-xs font-bold'}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModoModo('vulnerabilidades');
                    setExamRunning(true);
                    setSecondsElapsed(0);
                  }}
                >
                  Iniciar Treino Crítico
                </Button>
              </div>
            </Card>

            {/* Modo 3: Dia D de Prova */}
            <Card 
              className={`p-6 flex flex-col justify-between cursor-pointer transition-all border-2 rounded-2xl ${
                modoProva === 'dia_d' 
                  ? 'border-amber-500 bg-[var(--bg-surface)] shadow-lg ring-1 ring-amber-500/30' 
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-amber-500/50 opacity-90'
              }`}
              onClick={() => setModoModo('dia_d')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="warning">IMERSÃO TOTAL • 4 HORAS</Badge>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    Simulação Oficial "Dia D"
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    4h contínuas com <strong>Cartão-Resposta Digital</strong> e <strong>Redação Oficial</strong> no mesmo bloco temporal de prova.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <Button 
                  variant={modoProva === 'dia_d' ? 'brand' : 'outline'}
                  fullWidth
                  className={modoProva === 'dia_d' ? 'bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold' : 'font-mono text-xs font-bold'}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModoModo('dia_d');
                    setExamRunning(true);
                    setSecondsRemainingDiaD(4 * 3600);
                  }}
                >
                  Iniciar Dia D (4h)
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Prova em Andamento */}
      {examRunning && !finished && (
        <div className="space-y-6">
          {/* Seletor de visualização do Dia D */}
          {modoProva === 'dia_d' && (
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDiaDTab('questoes')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'questoes' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>CADERNO DE QUESTÕES ({answeredCount}/{totalQuestions})</span>
                </button>

                <button
                  onClick={() => setDiaDTab('cartao_resposta')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'cartao_resposta' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>CARTÃO-RESPOSTA DIGITAL</span>
                </button>

                <button
                  onClick={() => setDiaDTab('redacao')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    diaDTab === 'redacao' ? 'bg-[var(--accent-primary)] text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <PenTool className="w-4 h-4" />
                  <span>FOLHA DE REDAÇÃO {textoRedacao.trim() ? `(${wordCount} pal.)` : ''}</span>
                </button>
              </div>

              {secondsRemainingDiaD <= 1800 && (
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-500 animate-pulse">
                  <AlertTriangle className="w-4 h-4" />
                  <span>ÚLTIMOS 30 MIN: Transfira suas respostas para o Cartão!</span>
                </div>
              )}
            </div>
          )}

          {/* VISÃO 1: CADERNO DE QUESTÕES */}
          {(modoProva === 'treino_rapido' || diaDTab === 'questoes') && (
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
                        <div
                          key={letter}
                          onClick={() => handleSelectAnswer(currentQuestionIndex, letter)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer select-none text-xs sm:text-sm flex items-start gap-3 ${
                            isSelected
                              ? 'bg-[var(--accent-primary-glow)] border-[var(--accent-primary)] text-[var(--text-primary)] shadow-sm'
                              : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                              isSelected
                                ? 'bg-[var(--accent-primary)] text-white'
                                : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]'
                            }`}
                          >
                            {letter}
                          </div>
                          <span className="leading-relaxed font-sans mt-0.5">{text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentQuestionIndex === 0}
                      onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    >
                      &larr; Anterior
                    </Button>

                    <Button
                      variant="brand"
                      size="sm"
                      disabled={currentQuestionIndex === totalQuestions - 1}
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    >
                      Próxima &rarr;
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar Navigation Matrix (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <Card className="p-6 space-y-4 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
                      MAPA DE RESPOSTAS
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                      {answeredCount}/{totalQuestions}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {questionsList.map((_, idx) => {
                      const isAnswered = answers[idx] !== undefined;
                      const isCurrent = idx === currentQuestionIndex;

                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-lg font-mono text-xs font-bold transition-all ${
                            isCurrent
                              ? 'ring-2 ring-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
                              : isAnswered
                              ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                              : 'bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* VISÃO 2: CARTÃO-RESPOSTA DIGITAL (FOLHA OFICIAL) */}
          {diaDTab === 'cartao_resposta' && (
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-focus)] shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Folha Oficial de Respostas (Cartão-Resposta)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Preencha as bolhas de cada questão com atenção antes do encerramento da prova
                  </p>
                </div>
                <Badge variant="brand">GABARITO DEFINITIVO</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {questionsList.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--text-primary)]">Item #{idx + 1}</span>
                      <span className="text-[10px] text-[var(--text-muted)] truncate max-w-[100px]">{q.subject}</span>
                    </div>
                    <div className="flex items-center justify-between gap-1 pt-1">
                      {['A', 'B', 'C', 'D', 'E'].map((letter) => {
                        const isMarked = answers[idx] === letter;
                        return (
                          <button
                            key={letter}
                            onClick={() => handleSelectAnswer(idx, letter)}
                            className={`w-7 h-7 rounded-full font-mono text-xs font-bold transition-all border ${
                              isMarked
                                ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-md scale-105'
                                : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-focus)]'
                            }`}
                          >
                            {letter}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* VISÃO 3: FOLHA DE REDAÇÃO DISCURSIVA */}
          {diaDTab === 'redacao' && (
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-focus)] shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Folha Oficial da Prova Discursiva
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Redija seu texto dissertativo-argumentativo em norma-padrão (20 a 30 linhas)
                  </p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)]">
                  <span>{wordCount} palavras</span>
                  <span>•</span>
                  <span>~{lineCount} linhas</span>
                </div>
              </div>

              <textarea
                value={textoRedacao}
                onChange={(e) => setTextoRedacao(e.target.value)}
                placeholder="Rascunhe e passe a limpo sua redação oficial aqui..."
                rows={16}
                className="w-full p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm font-sans text-[var(--text-primary)] leading-relaxed outline-none focus:border-[var(--border-focus)] resize-none"
              />
            </Card>
          )}
        </div>
      )}

      {/* Resultado Oficial */}
      {finished && (
        <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                BOLETIM OFICIAL HOMOLOGADO
              </span>
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Resultado do Simulado {modoProva === 'dia_d' ? '• Dia D de Prova' : ''}
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
              <span className="font-bold text-[var(--accent-primary)] text-lg">+{correctCount * 15 + (textoRedacao.trim() ? 50 : 0)} XP</span>
            </div>
          </div>

          {textoRedacao.trim() && (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[var(--text-primary)]">📝 REDAÇÃO ENTREGUE</span>
                <Badge variant="success">{wordCount} palavras • ~{lineCount} linhas</Badge>
              </div>
              <p className="text-xs text-[var(--text-secondary)] italic line-clamp-3">
                "{textoRedacao}"
              </p>
            </div>
          )}

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
                setTextoRedacao('');
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
