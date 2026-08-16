import React, { useState } from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { BookOpen, FileText, CheckCircle2, ChevronRight, Sparkles, MessageSquare, Download, Play, HelpCircle, Award, Check } from 'lucide-react';

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
    <div className="space-y-5 pb-20 md:pb-8 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Sala de Estudos Split
            </h1>
            <Badge variant="brand">RAG 2.0</Badge>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Teoria estruturada pelo método Caderno Enxuto com 5 questões de fixação imediata
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            icon={Download}
            onClick={() => window.print()}
          >
            Exportar Resumo
          </Button>
          <Button 
            variant={showQuestions ? "secondary" : "brand"}
            size="sm" 
            icon={HelpCircle}
            onClick={() => setShowQuestions(!showQuestions)}
          >
            {showQuestions ? "Ocultar Fixação" : "Fixação (5 Questões)"}
          </Button>
        </div>
      </div>

      {/* Disciplinas Switcher */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
              selectedSubject === subj
                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] font-semibold shadow-xs'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]'
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* Main Split Layout: Teoria + Questões Dock */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left / Center: Caderno Enxuto (Teoria Estruturada) */}
        <div className={showQuestions ? "lg:col-span-7 space-y-4" : "lg:col-span-12 space-y-4"}>
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  {selectedSubject} • Aula 0{activeLesson}
                </span>
                <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight mt-0.5">
                  Princípios Fundamentais & Competências Estruturais
                </h3>
              </div>
              <Badge variant="warning">Em Estudo</Badge>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--accent-primary)] text-xs">
                <span className="font-semibold text-[var(--accent-primary)]">🎯 Ponto de Ouro da Banca ({currentCareer.banca}):</span> As questões costumam explorar a literalidade dos artigos e as exceções expressas ao princípio da anterioridade e da estrita legalidade.
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] mb-1">
                  1. Conceito Dogmático & Finalidade
                </h4>
                <p className="text-[var(--text-secondary)]">
                  A estruturação do ordenamento exige obediência irrestrita aos postulados constitucionais. No âmbito dos concursos públicos, as bancas examinadoras cobram reiteradamente a distinção entre normas de eficácia plena, contida e limitada.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] mb-1.5">
                  2. Esquema Mnemônico de Fixação (Gabarito.AI)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <div className="text-[var(--accent-success)] font-bold text-sm">LIMPE</div>
                    <div className="text-[var(--text-muted)] text-[11px] mt-0.5">Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <div className="text-amber-400 font-bold text-sm">SOCIDIVAPU</div>
                    <div className="text-[var(--text-muted)] text-[11px] mt-0.5">Soberania, Cidadania, Dignidade, Valores do Trabalho, Pluralismo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Lesson Footer */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveLesson(Math.max(1, activeLesson - 1))}
                disabled={activeLesson === 1}
              >
                Aula Anterior
              </Button>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Aula {activeLesson} de 12
              </span>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => setActiveLesson(activeLesson + 1)}
              >
                Próxima Aula
              </Button>
            </div>
          </Card>
        </div>

        {/* Right: Questões de Fixação Imediata */}
        {showQuestions && (
          <div className="lg:col-span-5 space-y-3 animate-fade-in">
            <Card className="p-5 space-y-3 border-[var(--border-focus)]">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)]">
                  <Award className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Fixação Imediata (1/5)</span>
                </div>
                <Badge variant="info">{currentCareer.banca}</Badge>
              </div>

              <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                {sampleQuestion.question}
              </p>

              {/* Alternatives List */}
              <div className="space-y-2 pt-1">
                {Object.entries(sampleQuestion.options).map(([key, text]) => {
                  let styleClass = 'border-[var(--border-subtle)] hover:border-[var(--border-focus)] bg-[var(--bg-elevated)] text-[var(--text-primary)]';

                  if (answered) {
                    if (key === sampleQuestion.answer) {
                      styleClass = 'border-[var(--accent-success)] bg-[var(--accent-success-glow)] text-[var(--accent-success)] font-semibold';
                    } else if (key === userSelectedOption) {
                      styleClass = 'border-[var(--accent-danger)] bg-[var(--accent-danger-glow)] text-[var(--accent-danger)] font-medium';
                    } else {
                      styleClass = 'opacity-35 border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)]';
                    }
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectOption(key)}
                      disabled={answered}
                      className={`w-full text-left p-3 rounded-lg text-xs transition-all flex items-start gap-2.5 border ${styleClass}`}
                    >
                      <span className="w-5 h-5 rounded-md bg-[var(--bg-surface)] flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                        {key}
                      </span>
                      <span className="flex-1 leading-snug">{text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {answered && (
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5 animate-fade-in text-xs">
                  <div className="font-semibold text-[var(--accent-success)] flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-4 h-4" /> Gabarito Oficial: Letra {sampleQuestion.answer}
                  </div>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
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
