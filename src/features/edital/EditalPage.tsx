import React from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { BarChart3, TrendingUp, Award, CheckCircle, PieChart, ShieldAlert, Sparkles } from 'lucide-react';

interface EditalPageProps {
  careerId: string;
}

export const EditalPage: React.FC<EditalPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);

  const topTopics = [
    { subject: "Conhecimentos Bancários", topic: "Sistema Financeiro Nacional e Mercado de Capitais", incidence: "Alta", weight: "25%" },
    { subject: "Língua Portuguesa", topic: "Interpretação de Texto, Coesão e Sintaxe de Regência", incidence: "Alta", weight: "20%" },
    { subject: "Matemática Financeira", topic: "Juros Compostos, Sistemas de Amortização (SAC/Price)", incidence: "Média", weight: "15%" },
    { subject: "Atendimento & Vendas", topic: "Técnicas de Negociação, Ética e LGPD Bancária", incidence: "Média", weight: "15%" },
    { subject: "Informática / TI", topic: "Segurança da Informação, Excel Avançado e Nuvem", incidence: "Média", weight: "15%" }
  ];

  const historicalCuts = [
    { year: 2023, score: "78.5 pontos (Cesgranrio - Microrregião SP/RJ)" },
    { year: 2021, score: "74.0 pontos (Cesgranrio - Nacional)" },
    { year: 2018, score: "72.5 pontos (Cesgranrio - Geral)" }
  ];

  return (
    <div className="space-y-5 pb-20 md:pb-8 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Raio-X de Incidência da Banca
            </h1>
            <Badge variant="brand">Pareto 80/20</Badge>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Mapeamento estatístico das matérias com maior peso e histórico de corte da <strong>{currentCareer.banca}</strong>
          </p>
        </div>
      </div>

      {/* Grid: Pareto 80/20 + Cut Score */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Cut Score Card */}
        <Card className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-sm text-[var(--text-primary)]">
              Notas de Corte Históricas
            </h3>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Pontuação mínima necessária para aprovação nas últimas edições do concurso:
          </p>

          <div className="space-y-2 pt-1">
            {historicalCuts.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-[var(--text-primary)]">{item.year}</span>
                <span className="text-[var(--text-secondary)]">{item.score}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Strategy Advice */}
        <Card className="p-5 space-y-3 border-[var(--accent-primary)]/30 bg-[var(--accent-primary-glow)]/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
            <h3 className="font-semibold text-sm text-[var(--accent-primary)]">
              Estratégia de Alta Performance
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
            O princípio de Pareto 80/20 indica que <strong>20% dos tópicos do edital respondem por 80% das questões de prova</strong>. Priorize o estudo verticalizado das disciplinas com maior incidência antes de tentar esgotar os tópicos periféricos.
          </p>
          <div className="text-[11px] font-mono text-[var(--text-muted)]">
            🎯 Meta do Gabarito.AI: Atingir 85%+ de acerto nos 5 tópicos de ouro.
          </div>
        </Card>
      </div>

      {/* Top 5 Golden Topics Table */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
          <h3 className="font-semibold text-sm text-[var(--text-primary)]">
            Tópicos de Ouro ({currentCareer.name.split('—')[0]})
          </h3>
          <Badge variant="warning">Top 5 Prioritários</Badge>
        </div>

        <div className="space-y-2">
          {topTopics.map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 sm:p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[var(--text-primary)]">
                  {idx + 1}. {item.subject}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {item.topic}
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center font-mono text-xs">
                <Badge variant={item.incidence === 'Alta' ? 'danger' : 'warning'}>
                  Incidência {item.incidence}
                </Badge>
                <span className="font-bold text-[var(--accent-success)]">{item.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
