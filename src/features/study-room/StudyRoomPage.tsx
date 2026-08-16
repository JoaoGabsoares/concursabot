import React, { useState } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';

interface StudyRoomPageProps {
  careerId: string;
}

export const StudyRoomPage: React.FC<StudyRoomPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const [selectedSubject, setSelectedSubject] = useState<string>('Direito Constitucional');
  const [activeLesson, setActiveLesson] = useState<number>(1);
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  const subjects = currentCareer.id.includes('bb')
    ? ['Conhecimentos Bancários', 'Língua Portuguesa', 'Matemática Financeira', 'Atendimento no Setor Bancário']
    : currentCareer.id.includes('atrfb') || currentCareer.id.includes('afrfb')
    ? ['Direito Tributário', 'Legislação Tributária', 'Direito Constitucional', 'Direito Administrativo', 'Contabilidade']
    : ['Legislação do SUS', 'Políticas de Saúde', 'Enfermagem Geral', 'Administração Pública'];

  const sampleQuestion = {
    id: 101,
    question: "Sobre a repartição das receitas tributárias na Constituição Federal de 1988, é correto afirmar:",
    options: {
      A: "Pertence aos Municípios 50% do produto da arrecadação do imposto da União sobre renda e proventos de qualquer natureza incidente na fonte.",
      B: "Pertence aos Estados e ao DF 50% do produto da arrecadação do ITR sobre os imóveis neles situados.",
      C: "Pertence aos Municípios 25% do produto da arrecadação do ICMS do respectivo Estado.",
      D: "A União pode reter a entrega de recursos do Fundo de Participação dos Municípios em qualquer hipótese de divergência política.",
      E: "O imposto sobre grandes fortunas é de competência partilhada entre Estados e Municípios."
    },
    answer: "C",
    explanation: "Art. 158, IV da CF/88: Pertence aos Municípios vinte e cinco por cento do produto da arrecadação do imposto do Estado sobre operações relativas à circulação de mercadorias e sobre prestações de serviços de transporte interestadual e intermunicipal e de comunicação (ICMS)."
  };

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
            {showQuestions ? "Ocultar Fixação" : "Fixação (5 Questões)"}
          </Button>
        </div>
      </div>

      {/* Disciplinas Switcher */}
      <div className="flex gap-2 overflow-x-auto pb-1 font-mono text-xs">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all border ${
              selectedSubject === subj
                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] font-bold shadow-md'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* Main Split Layout: Teoria + Questões Dock */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center: Caderno Teórico Estruturado */}
        <div className={showQuestions ? "lg:col-span-7 space-y-4" : "lg:col-span-12 space-y-4"}>
          <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {selectedSubject} • AULA {activeLesson}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight mt-1">
                  Princípios Fundamentais & Competências Estruturais
                </h3>
              </div>
              <CarimboStatus status="em_revisao" label="EM ESTUDO" />
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs font-mono">
                <span className="font-bold text-[var(--accent-primary)]">JURISPRUDÊNCIA / LITERALIDADE ({currentCareer.banca}):</span> Cobrança recorrente da literalidade dos artigos constitucionais e suas respectivas exceções orçamentárias e tributárias.
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  1. Conceito Dogmático & Finalidade Institucional
                </h4>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  A estruturação do ordenamento jurídico exige obediência irrestrita aos postulados constitucionais. No âmbito dos concursos públicos federais e bancários, as bancas examinadoras cobram reiteradamente a distinção dogmática entre normas de eficácia plena, contida e limitada.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  2. Esquema Mnemônico Oficial de Fixação
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                    <div className="text-[var(--accent-primary)] font-bold text-sm">LIMPE</div>
                    <div className="text-[var(--text-secondary)] text-[11px] leading-relaxed">Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                    <div className="text-[var(--accent-primary)] font-bold text-sm">SOCIDIVAPU</div>
                    <div className="text-[var(--text-secondary)] text-[11px] leading-relaxed">Soberania, Cidadania, Dignidade, Valores do Trabalho, Pluralismo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Lesson Footer */}
            <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveLesson(Math.max(1, activeLesson - 1))}
                disabled={activeLesson === 1}
                className="font-mono text-xs"
              >
                Aula Anterior
              </Button>
              <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                AULA {activeLesson} / 12
              </span>
              <Button 
                variant="brand" 
                size="sm"
                onClick={() => setActiveLesson(activeLesson + 1)}
                className="font-mono text-xs font-bold"
              >
                Próxima Aula
              </Button>
            </div>
          </Card>
        </div>

        {/* Right: Questões de Fixação Imediata */}
        {showQuestions && (
          <div className="lg:col-span-5 space-y-4 animate-fade-in">
            <Card className="p-6 space-y-4 border border-[var(--border-focus)] bg-[var(--bg-surface)] shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  FIXAÇÃO IMEDIATA (1/5)
                </div>
                <CarimboStatus status="pendente" label={currentCareer.banca} />
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                {sampleQuestion.question}
              </p>

              {/* Alternatives List */}
              <div className="space-y-2.5 pt-1">
                {Object.entries(sampleQuestion.options).map(([key, text]) => {
                  let styleClass = 'border-[var(--border-subtle)] hover:border-[var(--border-focus)] bg-[var(--bg-elevated)] text-[var(--text-primary)]';

                  if (answered) {
                    if (key === sampleQuestion.answer) {
                      styleClass = 'border-[var(--color-status-success)] bg-[var(--color-status-success-bg)] text-[var(--accent-success)] font-bold';
                    } else if (key === userSelectedOption) {
                      styleClass = 'border-[var(--color-status-danger)] bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] font-medium';
                    } else {
                      styleClass = 'opacity-35 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)]';
                    }
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectOption(key)}
                      disabled={answered}
                      className={`w-full text-left p-3.5 rounded-lg text-xs transition-all flex items-start gap-3 border ${styleClass}`}
                    >
                      <span className="w-6 h-6 rounded bg-[var(--bg-surface)] flex items-center justify-center font-mono font-bold shrink-0 text-xs border border-[var(--border-subtle)]">
                        {key}
                      </span>
                      <span className="flex-1 leading-relaxed">{text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {answered && (
                <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 animate-fade-in text-xs font-mono">
                  <div className="font-bold text-[var(--accent-success)]">
                    [ GABARITO OFICIAL: LETRA {sampleQuestion.answer} ]
                  </div>
                  <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
                    {sampleQuestion.explanation}
                  </p>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
