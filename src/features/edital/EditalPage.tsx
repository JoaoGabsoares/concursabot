import React from 'react';
import { Card, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { CAREER_PARETO_DB } from '../../utils/studyContent';

interface EditalPageProps {
  careerId: string;
}

export const EditalPage: React.FC<EditalPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const paretoData = CAREER_PARETO_DB[careerId] || CAREER_PARETO_DB["bb_comercial"];

  const topTopics = paretoData.topTopics;
  const historicalCuts = paretoData.cuts;

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Raio-X de Incidência do Edital
            </h1>
            <CarimboStatus status="homologado" label="PARETO 80/20" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Mapeamento estatístico das disciplinas com maior peso e histórico de corte na banca {currentCareer.banca}
          </p>
        </div>
      </div>

      {/* Grid: Pareto 80/20 + Cut Score */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cut Score Card */}
        <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Notas de Corte Históricas
            </h3>
            <span className="font-mono text-xs text-[var(--text-muted)] font-bold">HISTÓRICO OFICIAL</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Pontuação líquida mínima necessária para aprovação nas últimas edições do certame ({currentCareer.name.split('—')[0]}):
          </p>

          <div className="space-y-3 pt-2 font-mono">
            {historicalCuts.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--text-primary)]">{item.year}</span>
                <span className="text-[var(--accent-primary)] font-bold">{item.score}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Tactical Recommendation Card */}
        <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Diretriz de Eficiência Técnica
            </h3>
            <CarimboStatus status="em_revisao" label="METODOLOGIA" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            O princípio de Pareto 80/20 demonstra que <strong className="text-[var(--text-primary)]">20% dos tópicos do edital concentram 80% das questões cobradas em prova</strong> pela banca <strong className="text-[var(--text-primary)]">{currentCareer.banca}</strong>. Priorize a fixação dos temas de alta incidência antes de se aprofundar em minúcias periféricas de baixo retorno.
          </p>

          <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] space-y-1 font-mono">
            <span className="font-bold text-[var(--text-primary)]">META DO EDITAL:</span> Atingir 85%+ de acerto nos tópicos prioritários.
          </div>
        </Card>
      </div>

      {/* Top 5 High Yield Topics */}
      <Card className="p-6 sm:p-8 space-y-5 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
            Tópicos de Ouro ({currentCareer.name.split('—')[0]})
          </h3>
          <CarimboStatus status="homologado" label={`TOP ${topTopics.length} PRIORITÁRIOS`} />
        </div>

        <div className="space-y-3">
          {topTopics.map((topic, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-[var(--border-focus)]"
            >
              <div className="space-y-1">
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {idx + 1}. {topic.subject}
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  {topic.topic}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <CarimboStatus status={topic.status} label={topic.label} />
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)]">
                  {topic.weight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
