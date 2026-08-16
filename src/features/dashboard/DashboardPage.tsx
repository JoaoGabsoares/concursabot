import React from 'react';
import { UserProfile, ActiveTab, DailyMission } from '../../types';
import { getCareerById } from '../../utils/careers';
import { Card, Button, ProgressBar, CarimboStatus } from '../../components/UIPrimitives';
import { ChevronRight } from 'lucide-react';

interface DashboardPageProps {
  user: UserProfile | null;
  careerId: string;
  onNavigate: (tab: ActiveTab) => void;
  pendingErrorsCount: number;
  onStartStudy: (mission?: DailyMission) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  user,
  careerId,
  onNavigate,
  pendingErrorsCount,
  onStartStudy
}) => {
  const currentCareer = getCareerById(careerId);
  const streak = user?.streakDays || 0;
  const level = user?.level || 1;
  const xp = user?.xp || 0;
  const currentLevelProgress = xp % 500;
  const xpPercent = Math.min(100, Math.round((currentLevelProgress / 500) * 100));

  const questionsDone = user?.todayQuestions || 0;
  const questionsGoal = user?.dailyGoalQuestions || 30;
  const questionsPercent = Math.min(100, Math.round((questionsDone / questionsGoal) * 100));

  const minutesDone = user?.todayMinutes || 0;
  const minutesGoal = user?.dailyGoalMinutes || 60;
  const minutesPercent = Math.min(100, Math.round((minutesDone / minutesGoal) * 100));

  const nextMission: DailyMission = {
    subject: currentCareer.id.includes('bb') ? 'Conhecimentos Bancários' : currentCareer.id.includes('atrfb') ? 'Direito Tributário' : 'Legislação do SUS',
    topic: currentCareer.id.includes('bb') ? 'Sistema Financeiro Nacional, Mercado de Câmbio & Resoluções CMN' : currentCareer.id.includes('atrfb') ? 'Competência Tributária, Princípios Constitucionais & CTN' : 'Princípios e Diretrizes do SUS (Lei Federal 8.080/90)',
    revisionType: 'D+1',
    estimatedMinutes: 30
  };

  return (
    <div className="space-y-8 pb-20 font-sans animate-fade-in">
      
      {/* 1. HERO INSTITUCIONAL DO EDITAL (Newsreader Display + Carimbo de Status) */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              EDITAL: {currentCareer.name} ({currentCareer.banca})
            </span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              CICLO DE REVISÃO ESPAÇADA
            </span>
          </div>
          <CarimboStatus status="em_revisao" label="PRIORITÁRIO NO EDITAL" />
        </div>

        <div className="space-y-2 max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)] font-semibold">
            Disciplina em Pauta
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] leading-tight tracking-tight">
            {nextMission.subject}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {nextMission.topic}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
          <div>TEMPO SUGERIDO: <span className="text-[var(--text-primary)] font-bold">~{nextMission.estimatedMinutes} MINUTOS</span></div>
          <div>MÉTODO: <span className="text-[var(--text-primary)] font-bold">REPETIÇÃO ESPAÇADA D+1</span></div>
          <div>RECOMPENSA: <span className="text-[var(--accent-primary)] font-bold">+25 XP</span></div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            size="lg"
            variant="brand"
            onClick={() => onStartStudy(nextMission)}
            className="font-bold text-sm"
          >
            Iniciar Estudo da Disciplina
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('study')}
            className="text-sm"
          >
            Abrir Sala de Estudos Teórica
          </Button>
        </div>
      </div>

      {/* 2. GRID DE 4 MÉTRICAS DO ALUNO (IBM Plex Mono para Dados e Números Reais) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Questões Hoje */}
        <Card className="flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Questões Hoje
            </span>
            <span className="font-mono text-xs font-semibold text-[var(--accent-primary)]">
              {questionsPercent}%
            </span>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {questionsDone}
              <span className="text-xs text-[var(--text-muted)] font-normal ml-1">/ {questionsGoal}</span>
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Meta diária de resolução</div>
          </div>
          <ProgressBar value={questionsPercent} variant="brand" />
        </Card>

        {/* Tempo Líquido */}
        <Card className="flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Tempo Líquido
            </span>
            <span className="font-mono text-xs font-semibold text-[var(--accent-primary)]">
              {minutesPercent}%
            </span>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {minutesDone}
              <span className="text-xs text-[var(--text-muted)] font-normal ml-1">/ {minutesGoal}m</span>
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Minutos de estudo focado</div>
          </div>
          <ProgressBar value={minutesPercent} variant="brand" />
        </Card>

        {/* Ofensiva */}
        <Card className="flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Ofensiva
            </span>
            <CarimboStatus status={streak > 0 ? "homologado" : "pendente"} label={streak > 0 ? "ATIVO" : "INATIVO"} />
          </div>
          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {streak}
              <span className="text-xs text-[var(--text-muted)] font-normal ml-1">dias</span>
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Consistência de estudos</div>
          </div>
          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            {streak > 0 ? 'Frequência regular registrada' : 'Inicie sua sequência hoje'}
          </div>
        </Card>

        {/* Nível do Estudante */}
        <Card className="flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Nível & Progresso
            </span>
            <span className="font-mono text-xs font-bold text-[var(--accent-primary)]">
              {xp} XP
            </span>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Nível {level}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              {currentLevelProgress} / 500 XP para Nível {level + 1}
            </div>
          </div>
          <ProgressBar value={xpPercent} variant="brand" />
        </Card>

      </div>

      {/* 3. RADAR DE VULNERABILIDADES & CADERNO DE ERROS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Vulnerabilidades & Caderno de Erros
          </h2>
          <button 
            onClick={() => onNavigate('erros')}
            className="font-mono text-xs text-[var(--accent-primary)] hover:underline flex items-center gap-1"
          >
            Abrir Caderno Completo <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <Card className="space-y-4 border-l-4 border-l-[var(--color-status-danger)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <CarimboStatus 
                  status={pendingErrorsCount > 0 ? "vulneravel" : "homologado"} 
                  label={pendingErrorsCount > 0 ? `${pendingErrorsCount} PENDENTES` : "ZERADO"} 
                />
                <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  {pendingErrorsCount > 0 
                    ? `${pendingErrorsCount} ${pendingErrorsCount === 1 ? 'questão errada aguardando superação' : 'questões erradas aguardando superação'}`
                    : 'Nenhuma vulnerabilidade pendente no caderno'
                  }
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                {pendingErrorsCount > 0 
                  ? 'Questões erradas em simulados anteriores foram isoladas. Refaça cada uma para consolidar os pontos cegos e ganhar bônus de superação (+15 XP).'
                  : 'Todas as falhas identificadas anteriormente foram retreinadas e superadas.'
                }
              </p>
            </div>

            <Button
              variant={pendingErrorsCount > 0 ? "brand" : "secondary"}
              size="md"
              onClick={() => onNavigate('erros')}
              className="text-xs font-semibold shrink-0"
            >
              {pendingErrorsCount > 0 ? 'Retreinar Erros Agora' : 'Acessar Caderno'}
            </Button>
          </div>
        </Card>
      </div>

      {/* 4. MÓDULOS DE PREPARAÇÃO (3 Cards Institucionais) */}
      <div className="space-y-3">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] px-1">
          Módulos Oficiais de Preparação
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card: Simulados */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('simulados')}
            className="flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Módulo 01</span>
                <CarimboStatus status="pendente" label="CRONOMETRADO" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Simulados & Treino Real
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Provas estruturadas com distribuição de pesos conforme a banca examinadora e tempo oficial de prova.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[var(--accent-primary)] font-semibold border-t border-[var(--border-subtle)]">
              <span>Acessar Simulados</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Card: Redação */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('redacao')}
            className="flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Módulo 02</span>
                <CarimboStatus status="pendente" label="4 CRITÉRIOS" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Redação Discursiva
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avaliação técnica em 4 critérios da banca (tema, estrutura dissertativa, gramática e argumentação jurídica).
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[var(--accent-primary)] font-semibold border-t border-[var(--border-subtle)]">
              <span>Escrever Redação</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Card: Raio-X */}
          <Card 
            hoverable={true} 
            onClick={() => onNavigate('edital')}
            className="flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Módulo 03</span>
                <CarimboStatus status="homologado" label="PARETO 80/20" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Raio-X de Incidência
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Mapeamento estatístico dos assuntos com maior frequência histórica nas provas anteriores da banca {currentCareer.banca}.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[var(--accent-primary)] font-semibold border-t border-[var(--border-subtle)]">
              <span>Ver Tópicos de Ouro</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
};
