import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { api } from '../../api/client';
import { 
  GitCompare, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Compass,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { CAREERS_LIST, CAREERS_MAP } from '../../utils/careers';

interface AproveitamentoPageProps {
  careerId: string;
}

interface DisciplinaComparada {
  nome: string;
  peso: number;
  nucleo: string;
  origemEquivalente?: string;
  status: string;
}

interface TrilhaPasso {
  passo: number;
  disciplina: string;
  pesoNoEdital: string;
  prioridade: 'ALTA' | 'MÉDIA' | 'NORMAL';
  sugestaoHorasEstudo: number;
}

interface ResultadoComparacao {
  origem: string;
  destino: string;
  bancaDestino: string;
  percentualAproveitamento: number;
  percentualGapInedito: number;
  disciplinasComuns: DisciplinaComparada[];
  disciplinasIneditas: DisciplinaComparada[];
  trilhaTransicao: TrilhaPasso[];
  estimativaSemanasTransicao: number;
  dicaEstrategica: string;
}

export const AproveitamentoPage: React.FC<AproveitamentoPageProps> = ({ careerId }) => {
  const [origemId, setOrigemId] = useState<string>(careerId || 'bb_comercial');
  const [destinoId, setDestinoId] = useState<string>('transpetro_adm');
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<ResultadoComparacao | null>(null);

  // Executa comparação inicial
  useEffect(() => {
    handleComparar(origemId, destinoId);
  }, []);

  const handleComparar = async (origem: string, destino: string) => {
    setLoading(true);
    try {
      const data = await api.compararEditais(origem, destino);
      setResultado(data);
    } catch (err) {
      console.error('Erro ao comparar editais:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Institucional */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CarimboStatus status="homologado" label="TRANSIÇÃO DE EDITAIS • INTELIGÊNCIA" />
            <Badge variant="brand">MATRIZ CURRICULAR</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
            Matriz de Aproveitamento entre Concursos
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
            Descubra quanto da sua bagagem de estudos você aproveita para o próximo concurso e receba a trilha de transição.
          </p>
        </div>
      </div>

      {/* Painel de Seleção dos Editais */}
      <Card className="p-6 space-y-4 border-[var(--border-focus)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Carreira de Origem */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-mono text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>EDITAL QUE VOCÊ ESTUDOU / ESTÁ ESTUDANDO:</span>
            </label>
            <select
              value={origemId}
              onChange={(e) => setOrigemId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs sm:text-sm focus:border-[var(--border-focus)] outline-none"
            >
              {CAREERS_LIST.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.banca})
                </option>
              ))}
            </select>
          </div>

          {/* Seta Central */}
          <div className="md:col-span-2 flex justify-center py-2 md:py-0">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)]">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Carreira de Destino */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-mono text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>NOVO EDITAL ALVO (MIGRAÇÃO / SEGUNDO FOCO):</span>
            </label>
            <select
              value={destinoId}
              onChange={(e) => setDestinoId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs sm:text-sm focus:border-[var(--border-focus)] outline-none"
            >
              {CAREERS_LIST.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.banca})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button
            variant="brand"
            icon={GitCompare}
            onClick={() => handleComparar(origemId, destinoId)}
            disabled={loading}
          >
            {loading ? 'Calculando Matriz...' : 'Calcular Aproveitamento & Trilha de Transição'}
          </Button>
        </div>
      </Card>

      {/* Resultados da Comparação */}
      {resultado && (
        <div className="space-y-6">
          {/* Card Principal de Resumo e % de Aproveitamento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="md:col-span-8 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  ANÁLISE DE AFINIDADE CURRICULAR
                </span>
                <Badge variant={resultado.percentualAproveitamento >= 60 ? 'success' : 'warning'}>
                  {resultado.percentualAproveitamento >= 60 ? 'ALTA AFINIDADE' : 'MÉDIA AFINIDADE'}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-sans font-semibold text-[var(--text-primary)]">
                    Aproveitamento da Base de Estudos
                  </span>
                  <span className="text-2xl font-mono font-bold text-[var(--color-status-success)]">
                    {resultado.percentualAproveitamento}%
                  </span>
                </div>
                <ProgressBar value={resultado.percentualAproveitamento} />
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <div>
                  <strong>Diagnóstico Estratégico:</strong> {resultado.dicaEstrategica}
                </div>
              </div>
            </Card>

            {/* Estimativa de Tempo de Transição */}
            <Card className="md:col-span-4 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  PRAZO ESTIMADO DE TRANSIÇÃO
                </span>
                <div className="text-3xl font-mono font-bold text-[var(--text-primary)] mt-2">
                  ~{resultado.estimativaSemanasTransicao} semanas
                </div>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  Estudando 2h/dia no ritmo de cadência 60/30
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Matérias Comuns:</span>
                  <strong className="text-emerald-400 font-mono">{resultado.disciplinasComuns.length}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Matérias Inéditas (Gap):</span>
                  <strong className="text-amber-400 font-mono">{resultado.disciplinasIneditas.length}</strong>
                </div>
              </div>
            </Card>
          </div>

          {/* Comparativo Detalhado de Disciplinas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Disciplinas Aproveitadas */}
            <Card className="p-5 space-y-3 border-[var(--color-status-success)]/30">
              <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-status-success)]" />
                <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">
                  Disciplinas da Base Aproveitadas ({resultado.disciplinasComuns.length})
                </h3>
              </div>
              <div className="space-y-2">
                {resultado.disciplinasComuns.map((d, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">{d.nome}</div>
                      {d.origemEquivalente && (
                        <div className="text-[11px] text-[var(--text-muted)] font-mono">
                          Equivale a: {d.origemEquivalente}
                        </div>
                      )}
                    </div>
                    <Badge variant="success">PESO {d.peso}%</Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Disciplinas Inéditas */}
            <Card className="p-5 space-y-3 border-[var(--color-status-warning)]/30">
              <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
                <AlertCircle className="w-4 h-4 text-[var(--color-status-warning)]" />
                <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">
                  Disciplinas Inéditas do Novo Edital ({resultado.disciplinasIneditas.length})
                </h3>
              </div>
              <div className="space-y-2">
                {resultado.disciplinasIneditas.map((d, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <div className="font-semibold text-[var(--text-primary)]">{d.nome}</div>
                    <Badge variant="warning">PESO {d.peso}%</Badge>
                  </div>
                ))}
                {resultado.disciplinasIneditas.length === 0 && (
                  <div className="p-4 text-center text-xs text-[var(--text-muted)] font-mono">
                    Nenhuma matéria inédita! Ambos os editais possuem grade idêntica.
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Trilha de Transição Acelerada */}
          {resultado.trilhaTransicao.length > 0 && (
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[var(--border-subtle)]">
                <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
                <div>
                  <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                    Trilha de Transição Acelerada (Roteiro Recomendado)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Siga esta ordem de estudo para cobrir o edital novo com a máxima eficiência de tempo
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {resultado.trilhaTransicao.map((passo) => (
                  <div 
                    key={passo.passo}
                    className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] text-white font-mono font-bold flex items-center justify-center text-xs">
                        #{passo.passo}
                      </div>
                      <div>
                        <div className="font-sans font-bold text-sm text-[var(--text-primary)]">
                          {passo.disciplina}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] font-mono">
                          Peso no Edital: {passo.pesoNoEdital} • Tempo sugerido: ~{passo.sugestaoHorasEstudo}h de teoria + questões
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant={passo.prioridade === 'ALTA' ? 'danger' : 'warning'}>
                        PRIORIDADE {passo.prioridade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};
