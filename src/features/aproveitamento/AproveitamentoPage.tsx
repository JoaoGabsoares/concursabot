import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
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
  BookOpen,
  Zap,
  Check,
  CalendarDays,
  Target,
  Layers,
  Flame
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

interface MateriaSemana {
  nome: string;
  horas: number;
  tipo: string;
  foco: string;
}

interface SemanaCronograma {
  numeroSemana: number;
  dataInicio: string;
  dataFim: string;
  dataInicioISO?: string;
  dataFimISO?: string;
  horasSemana: number;
  focoPrincipal: string;
  materias: MateriaSemana[];
  questoesAlvo: number;
  metaDescricao: string;
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
  cronogramaSemanal: SemanaCronograma[];
  estimativaSemanasTransicao: number;
  totalHorasTransicao: number;
  weeklyHoursCapacity?: number;
  dicaEstrategica: string;
}

export const AproveitamentoPage: React.FC<AproveitamentoPageProps> = ({ careerId }) => {
  const { success, error } = useToast();
  const [origemId, setOrigemId] = useState<string>(careerId || 'bb_comercial');
  const [destinoId, setDestinoId] = useState<string>('transpetro_adm');
  const [dailyHours, setDailyHours] = useState<number>(2);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(6);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [resultado, setResultado] = useState<ResultadoComparacao | null>(null);

  // Executa comparação inicial
  useEffect(() => {
    handleComparar(origemId, destinoId, dailyHours, daysPerWeek);
  }, []);

  const handleComparar = async (origem: string, destino: string, hours: number = dailyHours, days: number = daysPerWeek) => {
    setLoading(true);
    setSyncSuccess(false);
    try {
      const data = await api.compararEditais(origem, destino, {
        dailyHours: hours,
        daysPerWeek: days
      });
      setResultado(data);
    } catch (err: any) {
      console.error('Erro ao comparar editais:', err);
      error('Erro na Comparação', err.message || 'Falha ao calcular matriz de aproveitamento.');
    } finally {
      setLoading(false);
    }
  };

  const handleSincronizar = async () => {
    if (!resultado || !resultado.cronogramaSemanal || resultado.cronogramaSemanal.length === 0) return;
    setSyncing(true);
    try {
      const res = await api.sincronizarCronogramaAproveitamento({
        origemCareerId: origemId,
        destinoCareerId: destinoId,
        cronogramaSemanal: resultado.cronogramaSemanal,
        dailyHours,
        daysPerWeek
      });
      setSyncSuccess(true);
      success('⚡ Cronograma Sincronizado!', res.message || 'Plano de transição integrado ao seu calendário de estudos com sucesso.');
    } catch (err: any) {
      console.error('Erro ao sincronizar cronograma:', err);
      error('Erro ao Sincronizar', err.message || 'Não foi possível sincronizar o cronograma.');
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Institucional */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CarimboStatus status="homologado" label="TRANSIÇÃO DE EDITAIS • INTELIGÊNCIA" />
            <Badge variant="brand">MATRIZ CURRICULAR 2026</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
            Matriz de Aproveitamento entre Concursos
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
            Descubra quanto da sua bagagem de estudos você aproveita para o próximo concurso e gere um cronograma semanal real.
          </p>
        </div>
      </div>

      {/* Painel de Seleção dos Editais & Rotina */}
      <Card className="p-6 space-y-5 border-[var(--border-focus)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Carreira de Origem */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-mono text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>EDITAL QUE VOCÊ ESTUDOU / ESTÁ ESTUDANDO:</span>
            </label>
            <select
              value={origemId}
              onChange={(e) => setOrigemId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs sm:text-sm focus:border-[var(--accent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none min-h-[44px]"
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
            <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Carreira de Destino */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-mono text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[var(--accent-success)]" />
              <span>NOVO EDITAL ALVO (MIGRAÇÃO / NOVO FOCO):</span>
            </label>
            <select
              value={destinoId}
              onChange={(e) => setDestinoId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs sm:text-sm focus:border-[var(--accent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] outline-none min-h-[44px]"
            >
              {CAREERS_LIST.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.banca})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Controles de Carga Horária e Rotina */}
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Carga Diária:</span>
              <select
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className="h-9 px-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <option value={1}>1h / dia</option>
                <option value={2}>2h / dia (Padrão)</option>
                <option value={3}>3h / dia</option>
                <option value={4}>4h / dia</option>
                <option value={6}>6h / dia (Intensivo)</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Dias por Semana:</span>
              <select
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className="h-9 px-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)] outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <option value={5}>5 dias (Seg a Sex)</option>
                <option value={6}>6 dias (Seg a Sáb)</option>
                <option value={7}>7 dias (Todos os dias)</option>
              </select>
            </div>

            <span className="text-xs text-[var(--text-muted)]">
              Capacidade: <strong>{dailyHours * daysPerWeek}h / semana</strong>
            </span>
          </div>

          <Button
            variant="brand"
            icon={GitCompare}
            onClick={() => handleComparar(origemId, destinoId, dailyHours, daysPerWeek)}
            disabled={loading}
            className="font-sans text-xs font-bold shadow-md min-h-[44px]"
          >
            {loading ? 'Calculando Matriz...' : 'Recalcular Aproveitamento & Datas'}
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
                <span className="text-xs font-mono text-[var(--text-muted)] font-bold">
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
                <span className="text-xs font-mono text-[var(--text-muted)] font-bold">
                  PRAZO ESTIMADO DE TRANSIÇÃO
                </span>
                <div className="text-3xl font-mono font-bold text-[var(--text-primary)] mt-2">
                  ~{resultado.estimativaSemanasTransicao} semanas
                </div>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  Estudando {dailyHours}h/dia ({dailyHours * daysPerWeek}h/semana)
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Matérias Comuns:</span>
                  <strong className="text-[var(--accent-success)] font-mono">{resultado.disciplinasComuns.length}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Matérias Inéditas (Gap):</span>
                  <strong className="text-[var(--accent-warning)] font-mono">{resultado.disciplinasIneditas.length}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Total Horas de Transição:</span>
                  <strong className="text-[var(--accent-primary)] font-mono">~{resultado.totalHorasTransicao}h</strong>
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
                        <div className="text-xs text-[var(--text-muted)] font-mono">
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

          {/* CRONOGRAMA SEMANAL COM DATAS REAIS & SINCRONIZAÇÃO */}
          {resultado.cronogramaSemanal && resultado.cronogramaSemanal.length > 0 && (
            <Card className="p-6 space-y-5 border-[var(--accent-primary)]/40 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-[var(--accent-primary)]" />
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                      Cronograma Semanal de Transição com Datas Reais
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    Planejamento com datas reais de calendário ({resultado.cronogramaSemanal.length} semanas • {dailyHours * daysPerWeek}h/semana)
                  </p>
                </div>

                <Button
                  variant={syncSuccess ? "outline" : "brand"}
                  onClick={handleSincronizar}
                  disabled={syncing || syncSuccess}
                  className={`font-sans text-xs font-bold shrink-0 min-h-[44px] ${syncSuccess ? 'border-[var(--accent-success)] text-[var(--accent-success)]' : ''}`}
                >
                  {syncing ? (
                    'Sincronizando...'
                  ) : syncSuccess ? (
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[var(--accent-success)]" />
                      Cronograma Sincronizado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[var(--accent-warning)] fill-[var(--accent-warning)]" />
                      ⚡ Sincronizar com Meu Cronograma
                    </span>
                  )}
                </Button>
              </div>

              {/* Grid de Semanas com Datas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resultado.cronogramaSemanal.map((sem) => (
                  <div
                    key={sem.numeroSemana}
                    className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-primary)] text-white font-mono text-xs font-bold">
                          Semana 0{sem.numeroSemana}
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                          📅 {sem.dataInicio} a {sem.dataFim}
                        </span>
                      </div>
                      <Badge variant="brand">{sem.horasSemana}h</Badge>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[var(--accent-warning)]" />
                        <span>Foco: {sem.focoPrincipal}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-sans text-xs leading-relaxed">
                        {sem.metaDescricao}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
                      {sem.materias.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[var(--text-secondary)] truncate max-w-[220px]">
                            • {m.nome}
                          </span>
                          <span className="font-bold text-[var(--accent-primary)]">
                            {m.horas}h
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Trilha de Transição Acelerada por Prioridade */}
          {resultado.trilhaTransicao.length > 0 && (
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[var(--border-subtle)]">
                <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
                <div>
                  <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                    Ordem de Prioridade das Matérias Inéditas
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Disciplinas do novo edital ordenadas pelo impacto percentual na nota
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
                          Peso no Edital: {passo.pesoNoEdital} • Carga sugerida: ~{passo.sugestaoHorasEstudo}h de teoria + questões
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
