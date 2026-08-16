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

  // Focus mission based on active career
  const currentMission: DailyMission = {
    subject: careerId.includes('bb')
      ? 'Conhecimentos Bancários'
      : careerId.includes('atrfb')
      ? 'Direito Tributário'
      : careerId.includes('marinha')
      ? 'Organização Básica da Marinha'
      : 'Legislação do SUS',
    topic: careerId.includes('bb')
      ? 'Sistema Financeiro Nacional & Mercado Financeiro'
      : careerId.includes('atrfb')
      ? 'Competência Tributária, Princípios Constitucionais & CTN'
      : careerId.includes('marinha')
      ? 'História Naval, Tradições Navais & Hierarquia'
      : 'Princípios Doutrinários e Organizativos do SUS (Lei 8.080/90)',
    estimatedMinutes: 30,
    rewardXp: 25,
    status: 'pending'
  };

  const todayQuestions = user?.todayQuestions || 0;
  const goalQuestions = user?.dailyGoalQuestions || 30;
  const todayMinutes = user?.todayMinutes || 0;
  const goalMinutes = user?.dailyGoalMinutes || 180;
  const userXp = user?.xp || 0;
  const userLevel = user?.level || 1;
  const userStreak = user?.streakDays || 0;

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto font-sans animate-fade-in">
      
      {/* 1. HERO: Missão Oficial do Dia */}
      <Card className="p-6 sm:p-8 space-y-6 border-l-4 border-l-[var(--accent-primary)] bg-[var(--bg-surface)] shadow-lg">
        
        {/* Top Meta Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <CarimboStatus status="homologado" label="DISCIPLINA EM PAUTA" />
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
              {currentCareer.name.split('—')[0]} • {currentCareer.banca}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[var(--text-muted)]">TEMPO: <strong className="text-[var(--text-primary)]">~30 MIN</strong></span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--accent-primary)] font-bold">+{currentMission.rewardXp} XP</span>
          </div>
        </div>

        {/* Main Title & Topic */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight leading-tight">
            {currentMission.subject}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {currentMission.topic}
          </p>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Button
            size="lg"
            variant="brand"
            onClick={() => onStartStudy(currentMission)}
            className="font-bold text-sm sm:text-base px-6 shadow-md"
          >
            Iniciar Estudo da Disciplina
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('study')}
            className="text-xs sm:text-sm font-semibold px-5"
          >
            Abrir Sala de Estudos Teórica
          </Button>
        </div>
      </Card>

      {/* 2. GRID DE 4 MÉTRICAS (Alinhamento & Contraste Calibrado) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Questões Hoje */}
        <Card className="p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
            <span className="font-bold uppercase tracking-wider">Questões Hoje</span>
            <span className="font-bold text-[var(--accent-primary)]">
              {Math.min(100, Math.round((todayQuestions / goalQuestions) * 100))}%
            </span>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {todayQuestions} <span className="text-xs sm:text-sm text-[var(--text-muted)] font-normal">/ {goalQuestions}</span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Meta de resolução diária</div>
          </div>
          <ProgressBar value={todayQuestions} max={goalQuestions} />
        </Card>

        {/* Tempo Líquido */}
        <Card className="p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
            <span className="font-bold uppercase tracking-wider">Tempo Líquido</span>
            <span className="font-bold text-[var(--accent-primary)]">
              {Math.min(100, Math.round((todayMinutes / goalMinutes) * 100))}%
            </span>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {todayMinutes} <span className="text-xs sm:text-sm text-[var(--text-muted)] font-normal">/ {goalMinutes}m</span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Minutos de estudo focado</div>
          </div>
          <ProgressBar value={todayMinutes} max={goalMinutes} />
        </Card>

        {/* Ofensiva */}
        <Card className="p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
            <span className="font-bold uppercase tracking-wider">Ofensiva</span>
            <CarimboStatus status={userStreak > 0 ? "homologado" : "pendente"} label={userStreak > 0 ? "ATIVO" : "INATIVO"} />
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {userStreak} <span className="text-xs sm:text-sm text-[var(--text-muted)] font-normal">dias</span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Consistência ininterrupta</div>
          </div>
          <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
            <div 
              className="h-full bg-[var(--accent-primary)] transition-all duration-300"
              style={{ width: `${Math.min(100, userStreak * 14)}%` }}
            />
          </div>
        </Card>

        {/* Nível & XP */}
        <Card className="p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
            <span className="font-bold uppercase tracking-wider">Progresso XP</span>
            <span className="font-bold text-[var(--accent-primary)]">{userXp} XP</span>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Nível {userLevel}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">{userXp % 500} / 500 XP para Nível {userLevel + 1}</div>
          </div>
          <ProgressBar value={userXp % 500} max={500} />
        </Card>

      </div>

      {/* 3. RADAR DE VULNERABILIDADES & CADERNO DE ERROS */}
      <Card className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <CarimboStatus 
              status={pendingErrorsCount > 0 ? "vulneravel" : "homologado"} 
              label={pendingErrorsCount > 0 ? `${pendingErrorsCount} PENDENTES` : "ZERADO"} 
            />
            <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
              Caderno de Erros & Vulnerabilidades
            </h3>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {pendingErrorsCount > 0
              ? `Você possui ${pendingErrorsCount} falhas registradas aguardando retreino com ganho de +15 XP.`
              : 'Todas as falhas identificadas anteriormente foram retreinadas e superadas com sucesso.'}
          </p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => onNavigate('erros')}
          className="font-mono text-xs shrink-0 self-start sm:self-center"
        >
          Acessar Caderno de Erros
        </Button>
      </Card>

      {/* 4. MÓDULOS OFICIAIS DE PREPARAÇÃO (Alturas Equalizadas) */}
      <div className="space-y-3">
        <div className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider px-1">
          Módulos Oficiais de Preparação
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Módulo 1: Simulados */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('simulados')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 01</span>
                <CarimboStatus status="em_revisao" label="CRONOMETRADO" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Simulados & Treino Real
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Provas estruturadas com distribuição de pesos conforme a banca examinadora {currentCareer.banca} e tempo oficial de prova.
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Acessar Simulados</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Módulo 2: Redação */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('redacao')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 02</span>
                <CarimboStatus status="homologado" label="4 CRITÉRIOS" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Redação Discursiva
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avaliação técnica em 4 critérios da banca (tema, estrutura dissertativa, gramática e argumentação jurídica).
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Escrever Redação</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Módulo 3: Raio-X */}
          <Card 
            hoverable={true}
            onClick={() => onNavigate('edital')}
            className="p-6 h-full flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">Módulo 03</span>
                <CarimboStatus status="homologado" label="PARETO 80/20" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Raio-X de Incidência
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Mapeamento estatístico dos assuntos com maior frequência histórica nas provas anteriores da banca {currentCareer.banca}.
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs font-semibold text-[var(--accent-primary)]">
              <span>Ver Tópicos de Ouro</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
};
