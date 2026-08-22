import React from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { 
  Target, 
  Flame, 
  Trophy, 
  Clock, 
  ArrowRight, 
  Brain
} from 'lucide-react';
import { ActiveTab } from '../../types';

interface GuiaMetodoPageProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const GuiaMetodoPage: React.FC<GuiaMetodoPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in font-sans pb-16 max-w-6xl mx-auto">
      
      {/* Header Institucional */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CarimboStatus status="homologado" label="METODOLOGIA DE ELITE" />
          <span className="text-xs font-mono text-[var(--accent-primary)] font-bold">
            CIÊNCIA COGNITIVA APLICADA A CONCURSOS
          </span>
        </div>
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
          Guia de Uso & Método de Alta Performance
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
          O <strong>Gabarito.AI</strong> foi estruturado com base nas técnicas mais eficientes de aprendizagem acelerada e retenção de longo prazo. Entenda como utilizar cada pilar para acelerar sua aprovação.
        </p>
      </div>

      {/* Grid dos 4 Pilares Centrais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pilar 1: Pareto 80/20 */}
        <Card className="p-6 sm:p-7 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm hover:border-[var(--accent-primary)] transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5 text-[var(--accent-primary)] font-bold text-base sm:text-lg">
              <Target className="w-5 h-5" />
              <span>1. Princípio de Pareto 80/20</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono text-xs font-bold">
              ESTRATÉGIA
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Em certames de alto nível, <strong>80% das questões são extraídas de apenas 20% do edital</strong>. O Raio-X do Gabarito.AI analisa os padrões históricos da sua banca para indicar com precisão matemática os artigos de lei e tópicos com maior probabilidade de cobrança.
          </p>

          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">Como aplicar no dia a dia:</span>
            <span>• Consulte o <strong>Raio-X do Edital</strong> antes de iniciar qualquer nova matéria.</span>
            <span>• Priorize os <strong>Artigos de Ouro</strong> na leitura da lei seca.</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('edital')}
            className="w-full font-sans text-xs font-semibold flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Acessar Raio-X do Edital</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Card>

        {/* Pilar 2: Curva do Esquecimento SM-2 */}
        <Card className="p-6 sm:p-7 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm hover:border-[var(--accent-primary)] transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5 text-[var(--accent-warning)] font-bold text-base sm:text-lg">
              <Flame className="w-5 h-5" />
              <span>2. Curva do Esquecimento (SM-2)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[var(--accent-amber-bg)] text-[var(--accent-warning)] font-mono text-xs font-bold">
              MEMÓRIA
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            A memória humana perde até 70% do conteúdo estudado após 48 horas se não houver reforço programado. O algoritmo de <strong>Repetição Espaçada (SM-2)</strong> agenda automaticamente suas revisões nos intervalos exatos: <strong>D+1, D+7 e D+30</strong>.
          </p>

          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">Como aplicar no dia a dia:</span>
            <span>• Revise diariamente os <strong>Flashcards</strong> agendados para o dia.</span>
            <span>• Não acumule cards atrasados para manter a curva estabilizada.</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('flashcards')}
            className="w-full font-sans text-xs font-semibold flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Abrir Flashcards do Dia</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Card>

        {/* Pilar 3: Superação no Caderno de Erros */}
        <Card className="p-6 sm:p-7 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm hover:border-[var(--accent-primary)] transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5 text-[var(--accent-danger)] font-bold text-base sm:text-lg">
              <Trophy className="w-5 h-5" />
              <span>3. Superação no Caderno de Erros</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] font-mono text-xs font-bold">
              DIAGNÓSTICO
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            O erro é a bússola mais valiosa do concurseiro. Toda questão errada na Sala de Estudos ou nos Simulados é automaticamente arquivada. O aluno só atinge a maestria quando resolve novamente o item, anota o motivo do erro e acerta o reteste (+15 XP).
          </p>

          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">Como aplicar no dia a dia:</span>
            <span>• Dedique 20 minutos semanais para zerar as pendências de erros.</span>
            <span>• Escreva anotações pessoais com o antídoto da pegadinha.</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('erros')}
            className="w-full font-sans text-xs font-semibold flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Ver Caderno de Erros</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Card>

        {/* Pilar 4: Cadência 60/30 & Prática Ativa */}
        <Card className="p-6 sm:p-7 space-y-4 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm hover:border-[var(--accent-primary)] transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5 text-[var(--accent-success)] font-bold text-base sm:text-lg">
              <Clock className="w-5 h-5" />
              <span>4. Cadência 60/30 & Fixação Imediata</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[var(--accent-emerald-bg)] text-[var(--accent-success)] font-mono text-xs font-bold">
              EXECUÇÃO
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Estudo passivo sem resolução de questões gera falsa sensação de aprendizado. O método do Gabarito.AI estabelece a proporção áurea: <strong>60 minutos de leitura teórica focada</strong> seguidos imediatamente por <strong>30 minutos de questões da banca</strong>.
          </p>

          <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">Como aplicar no dia a dia:</span>
            <span>• Utilize o timer integrado da Sala de Estudos para manter a cadência.</span>
            <span>• Salve seu marca-página ao encerrar a leitura para registrar progresso.</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('study')}
            className="w-full font-sans text-xs font-semibold flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Ir para a Sala de Estudos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Card>

      </div>

      {/* Roteiro Diário Recomendado */}
      <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
        <div className="border-b border-[var(--border-subtle)] pb-4 flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
              Roteiro Diário de Alta Eficiência
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Siga esta sequência lógica todos os dias para maximizar sua retenção e pontuação.
            </p>
          </div>
          <CarimboStatus status="homologado" label="FLUXO HOMOLOGADO" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-bold flex items-center justify-center text-xs">
              01
            </div>
            <div className="font-bold text-xs text-[var(--text-primary)]">Missão do Dia</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Abra o Dashboard e identifique a disciplina e módulo prioritários indicados.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-bold flex items-center justify-center text-xs">
              02
            </div>
            <div className="font-bold text-xs text-[var(--text-primary)]">Leitura de Doutrina</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Leia as 5 páginas do módulo na Sala de Estudos e salve o ponto de parada.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-bold flex items-center justify-center text-xs">
              03
            </div>
            <div className="font-bold text-xs text-[var(--text-primary)]">Fixação Imediata</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Resolva questões da banca para consolidar os mnemônicos e pegadinhas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-bold flex items-center justify-center text-xs">
              04
            </div>
            <div className="font-bold text-xs text-[var(--text-primary)]">Flashcards & Erros</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Zere os flashcards do dia e revise as questões erradas no Caderno de Erros.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-mono font-bold flex items-center justify-center text-xs">
              05
            </div>
            <div className="font-bold text-xs text-[var(--text-primary)]">Simulado & Redação</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Aos fins de semana, realize um Simulado Cronometrado e envie uma Redação.
            </p>
          </div>

        </div>
      </Card>

      {/* Gamificação & Patentes */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--text-primary)]">
            <Brain className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Sistema de Patentes e XP de Produtividade</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Cada ação correta pontua: +10 XP por questão acertada, +15 XP por marca-página salvo, +15 XP por erro superado e +25 XP por aula concluída.
          </p>
        </div>
        <Button
          variant="brand"
          size="md"
          onClick={() => onNavigate('dashboard')}
          className="font-sans text-xs font-bold shrink-0 shadow-sm min-h-[44px]"
        >
          Ir para o Meu Treinamento ➔
        </Button>
      </div>

    </div>
  );
};
