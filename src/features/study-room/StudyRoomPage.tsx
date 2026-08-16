import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import { getLessonContent } from '../../utils/studyContent';

interface StudyRoomPageProps {
  careerId: string;
}

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const careerSubjects = getSubjectsForCareer(careerId);
  
  const [selectedSubject, setSelectedSubject] = useState<string>(careerSubjects[0]?.name || 'Língua Portuguesa');
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  // Sincroniza a disciplina caso a carreira mude
  useEffect(() => {
    if (careerSubjects.length > 0) {
      setSelectedSubject(careerSubjects[0].name);
      setUserSelectedOption(null);
      setAnswered(false);
    }
  }, [careerId]);

  // Ao trocar de disciplina, reseta o estado do quiz
  const handleSubjectChange = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setUserSelectedOption(null);
    setAnswered(false);
  };

  const lesson = getLessonContent(selectedSubject);
  const activeQuestion = lesson.question;

  const handleSelectOption = (opt: string) => {
    if (answered) return;
    setUserSelectedOption(opt);
    setAnswered(true);
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Sala de Estudos Teórica
            </h1>
            <CarimboStatus status="homologado" label="RAG 2.0 OFICIAL" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Doutrina e legislação esquematizada com fixação imediata na banca {currentCareer.banca}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.print()}
            className="font-mono text-xs"
          >
            Exportar PDF
          </Button>
          <Button 
            variant={showQuestions ? "secondary" : "brand"}
            size="sm" 
            onClick={() => setShowQuestions(!showQuestions)}
            className="font-mono text-xs"
          >
            {showQuestions ? "Ocultar Fixação" : "Mostrar Fixação"}
          </Button>
        </div>
      </div>

      {/* Disciplinas Selector (Official Filter Badges) */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
          Disciplinas do Edital ({currentCareer.name.split('—')[0]}):
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {careerSubjects.map((subj) => {
            const isSelected = selectedSubject === subj.name;
            return (
              <button
                key={subj.id}
                onClick={() => handleSubjectChange(subj.name)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border shadow-sm ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] font-bold shadow-md'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]'
                }`}
              >
                {subj.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Split Study Grid (Theory Left / Practice Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Theory & Notes (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 sm:p-8 space-y-6 border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md">
            {/* Topic Header */}
            <div className="space-y-2 pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                  MÓDULO 0{lesson.lessonNumber} DE {lesson.totalLessons} • {lesson.subject}
                </span>
                <CarimboStatus status="homologado" label="PONTO DE EDITAL" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                {lesson.topic}
              </h2>
            </div>

            {/* Jurisprudence Banner */}
            <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1">
              <span className="font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block text-[10px]">
                Tendência da Banca {currentCareer.banca}
              </span>
              <p className="leading-relaxed">
                {lesson.jurisprudenceNote}
              </p>
            </div>

            {/* Structured Theory Content */}
            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                {lesson.section1Title}
              </h3>
              <p>
                {lesson.section1Body}
              </p>

              <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] pt-2">
                {lesson.section2Title}
              </h3>
              
              <div className="space-y-2 font-mono text-xs">
                {lesson.mnemonics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--accent-primary)] font-bold">{m.code}:</span> {m.meaning}
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Actions */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)] font-mono">
                Página 1 de 1 • Resumo RAG Consolidado
              </span>
              <Button 
                variant="brand" 
                size="sm" 
                className="font-mono text-xs"
                onClick={() => alert(`Aula de ${selectedSubject} concluída! +25 XP concedidos.`)}
              >
                Concluir Leitura (+25 XP)
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: Immediate Practice Quiz (5 cols) */}
        {showQuestions && (
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 space-y-5 border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                    FIXAÇÃO IMEDIATA
                  </div>
                  <div className="font-display font-bold text-sm text-[var(--text-primary)]">
                    Banca: {currentCareer.banca}
                  </div>
                </div>
                <CarimboStatus status="em_revisao" label="TREINO ATIVO" />
              </div>

              {/* Question Body */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                  {activeQuestion.question}
                </p>

                {/* Alternatives List */}
                <div className="space-y-2.5">
                  {Object.entries(activeQuestion.options).map(([letter, text]) => {
                    const isSelected = userSelectedOption === letter;
                    const isCorrect = letter === activeQuestion.answer;
                    
                    let btnStyle = "bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]";
                    
                    if (answered) {
                      if (isCorrect) {
                        btnStyle = "bg-[var(--color-status-success-bg)] border-[var(--color-status-success)] text-[var(--color-status-success)] font-semibold";
                      } else if (isSelected) {
                        btnStyle = "bg-[var(--color-status-danger-bg)] border-[var(--color-status-danger)] text-[var(--color-status-danger)]";
                      }
                    }

                    return (
                      <button
                        key={letter}
                        disabled={answered}
                        onClick={() => handleSelectOption(letter)}
                        className={`w-full text-left p-3 rounded-lg border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${btnStyle}`}
                      >
                        <span className="font-mono font-bold shrink-0 px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          {letter}
                        </span>
                        <span>{text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Commentary */}
              {answered && (
                <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs">
                  <div className="flex items-center justify-between font-mono font-bold">
                    <span className={userSelectedOption === activeQuestion.answer ? "text-[var(--accent-success)]" : "text-[var(--accent-danger)]"}>
                      {userSelectedOption === activeQuestion.answer ? "RESPOSTA CORRETA! (+10 XP)" : "GABARITO: LETRA " + activeQuestion.answer}
                    </span>
                    <span className="text-[var(--text-muted)] text-[10px]">
                      ID #{activeQuestion.id}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {activeQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Questão 1 de 1
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUserSelectedOption(null);
                    setAnswered(false);
                  }}
                  className="font-mono text-xs"
                >
                  Reiniciar Quiz
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
