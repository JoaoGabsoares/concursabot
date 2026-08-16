import React from 'react';
import { Card, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';

interface EditalPageProps {
  careerId: string;
}

export const EditalPage: React.FC<EditalPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);

  const topTopics = [
    { subject: "Conhecimentos Bancários", topic: "Sistema Financeiro Nacional e Mercado de Capitais", status: "homologado" as const, label: "ALTA INCIDÊNCIA", weight: "25%" },
    { subject: "Língua Portuguesa", topic: "Interpretação de Texto, Coesão e Sintaxe de Regência", status: "homologado" as const, label: "ALTA INCIDÊNCIA", weight: "20%" },
    { subject: "Matemática Financeira", topic: "Juros Compostos, Sistemas de Amortização (SAC/Price)", status: "em_revisao" as const, label: "MÉDIA INCIDÊNCIA", weight: "15%" },
    { subject: "Atendimento & Vendas", topic: "Técnicas de Negociação, Ética e LGPD Bancária", status: "em_revisao" as const, label: "MÉDIA INCIDÊNCIA", weight: "15%" },
    { subject: "Informática / TI", topic: "Segurança da Informação, Excel Avançado e Nuvem", status: "em_revisao" as const, label: "MÉDIA INCIDÊNCIA", weight: "15%" }
  ];

  const historicalCuts = [
    { year: 2023, score: "78.5 pontos (Cesgranrio - Microrregião SP/RJ)" },
    { year: 2021, score: "74.0 pontos (Cesgranrio - Nacional)" },
    { year: 2018, score: "72.5 pontos (Cesgranrio - Geral)" }
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Cut Score Card */}
        <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Notas de Corte Históricas
            </h3>
            <span className="font-mono text-xs text-[var(--text-muted)] font-bold">HISTÓRICO OFICIAL</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Pontuação líquida mínima necessária para aprovação nas últimas edições do certame:
          </p>

          <div className="space-y-2.5 pt-2 font-mono">
            {historicalCuts.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--text-primary)]">{item.year}</span>
                <span className="text-[var(--text-secondary)]">{item.score}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Strategy Advice */}
        <Card className="p-6 sm:p-8 space-y-4 border-l-4 border-l-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Diretriz de Eficiência Técnica
            </h3>
            <CarimboStatus status="em_revisao" label="METODOLOGIA" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
            O princípio de Pareto 80/20 demonstra que <strong>20% dos tópicos do edital concentram 80% das questões cobradas em prova</strong>. Priorize a fixação dos temas de alta incidência antes de se aprofundar em minúcias periféricas de baixo retorno.
          </p>
          <div className="font-mono text-[11px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
            META DO EDITAL: Atingir 85%+ de acerto nos tópicos prioritários.
          </div>
        </Card>
      </div>

      {/* Top 5 Golden Topics Table */}
      <Card className="p-6 sm:p-8 space-y-5 bg-[var(--bg-surface)] shadow-md">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
            Tópicos de Ouro ({currentCareer.name.split('—')[0]})
          </h3>
          <CarimboStatus status="homologado" label="TOP 5 PRIORITÁRIOS" />
        </div>

        <div className="space-y-3">
          {topTopics.map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {idx + 1}. {item.subject}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {item.topic}
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center font-mono text-xs">
                <CarimboStatus status={item.status} label={item.label} />
                <span className="font-bold text-[var(--accent-primary)] px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg shadow-sm">
                  {item.weight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
