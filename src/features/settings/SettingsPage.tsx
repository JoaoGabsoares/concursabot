import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { UserProfile } from '../../types';
import { api } from '../../api/client';
import { Settings, BookOpen, Info, ShieldCheck, Download, Trash2, UserCheck, Flame, Target, Trophy } from 'lucide-react';

interface SettingsPageProps {
  user: UserProfile | null;
  onUpdateUser: (name: string) => void;
  initialTab?: SettingsSubTab;
}

export type SettingsSubTab = 'ajustes' | 'guia' | 'sobre';

export const SettingsPage: React.FC<SettingsPageProps> = ({ user, onUpdateUser, initialTab = 'ajustes' }) => {
  const { success, error: toastError } = useToast();
  const [activeSubTab, setActiveSubTab] = useState<SettingsSubTab>(initialTab);
  const [userName, setUserName] = useState(user?.name || 'João Soares');
  const [profileSaved, setProfileSaved] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveSubTab(initialTab);
    }
  }, [initialTab]);

  const handleSaveProfile = () => {
    onUpdateUser(userName);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handleExportBackup = () => {
    window.open('/api/users/export/progress', '_blank');
  };

  const handleResetProgress = async () => {
    if (confirm('Tem certeza de que deseja zerar seu XP e histórico de estudos para reiniciar do zero absoluto?')) {
      try {
        await api.updateUserProfile(user?.id || 'user_joao', {
          xp: 0,
          level: 1,
          streakDays: 0,
          todayQuestions: 0,
          todayMinutes: 0
        });
        localStorage.removeItem('CURRENT_USER_ID');
        success('Progresso Zerado!', 'Histórico resetado para 0 XP com sucesso.');
        setTimeout(() => window.location.reload(), 1200);
      } catch (e) {
        toastError('Erro ao resetar progresso.');
      }
    }
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto font-sans animate-fade-in">
      {/* Header Bar */}
      <div className="pb-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Configurações & Guia Oficial
            </h1>
            <CarimboStatus status="homologado" label="PLATAFORMA OFICIAL" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Gestão de credenciais, metodologia de estudos e arquitetura do Gabarito.AI
          </p>
        </div>

        {/* Sub-Tabs Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] shrink-0">
          <button
            onClick={() => setActiveSubTab('ajustes')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeSubTab === 'ajustes'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm border border-[var(--border-subtle)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Preferências</span>
          </button>

          <button
            onClick={() => setActiveSubTab('guia')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeSubTab === 'guia'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm border border-[var(--border-subtle)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guia de Uso</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sobre')}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeSubTab === 'sobre'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm border border-[var(--border-subtle)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Sobre o Sistema</span>
          </button>
        </div>
      </div>

      {/* ABA 1: PREFERÊNCIAS & DADOS */}
      {activeSubTab === 'ajustes' && (
        <div className="space-y-6 animate-fade-in">
          {/* 1. Profile Settings */}
          <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Identidade do Estudante
                </h3>
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] font-bold">ID: {user?.id || 'LOCAL'}</span>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-[var(--text-muted)] tracking-wider font-bold">
                Nome de Exibição:
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="flex-1 p-3 rounded-lg text-xs sm:text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans shadow-sm"
                />
                <Button
                  variant="brand"
                  size="md"
                  onClick={handleSaveProfile}
                  className="font-bold font-mono text-xs px-6 shadow-md"
                >
                  {profileSaved ? 'Salvo! ✓' : 'Salvar'}
                </Button>
              </div>
            </div>
          </Card>

          {/* 3. Backup & Reset */}
          <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Backup & Gestão de Dados
                </h3>
              </div>
              <CarimboStatus status="homologado" label="JSON OFICIAL" />
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Exporte seus dados completos de questões, histórico de redações e anotações do Caderno de Erros ou resete o progresso para recomeçar o treinamento do zero.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="md"
                onClick={handleExportBackup}
                className="font-mono text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Backup JSON</span>
              </Button>

              <Button
                variant="danger"
                size="md"
                onClick={handleResetProgress}
                className="font-mono text-xs font-semibold flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Zerar Progresso & Histórico (0 XP)</span>
              </Button>
            </div>
          </Card>

          {/* 4. Trocar de Estudante */}
          <Card className="p-6 sm:p-8 space-y-3 bg-[var(--bg-surface)] shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Trocar de Perfil de Estudante
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  Alternar para outro perfil cadastrado ou criar uma nova conta de estudos
                </p>
              </div>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  localStorage.removeItem('CURRENT_USER_ID');
                  window.location.reload();
                }}
                className="font-mono text-xs font-bold shrink-0 shadow-sm"
              >
                Trocar Perfil
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* ABA 2: GUIA DE USO & METODOLOGIA */}
      {activeSubTab === 'guia' && (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md">
            <div className="border-b border-[var(--border-subtle)] pb-4">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
                Metodologia de Alta Performance do Gabarito.AI
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Fundamentada nas melhores práticas mundiais de ciência cognitiva e aprovação em concursos públicos de elite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Pilar 1: Pareto */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>1. Princípio de Pareto 80/20</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Em qualquer edital, 80% das questões são extraídas de aproximadamente 20% dos artigos e temas da banca. O Raio-X do Gabarito.AI mapeia exatamente esses tópicos de ouro para você priorizar seu tempo no que realmente pontua.
                </p>
              </div>

              {/* Pilar 2: Repetição Espaçada */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold text-sm">
                  <Flame className="w-4 h-4" />
                  <span>2. Curva do Esquecimento (D+1, D+7, D+30)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Nosso motor de Flashcards SM-2 agenda automaticamente revisões ativas no momento exato em que a memória de curto prazo começa a decair, consolidando a matéria na memória de longo prazo.
                </p>
              </div>

              {/* Pilar 3: Caderno de Erros */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold text-sm">
                  <Trophy className="w-4 h-4" />
                  <span>3. Superação no Caderno de Erros (+15 XP)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Cada questão errada na Sala de Estudos ou nos Simulados é automaticamente capturada. Você só avança na patente quando revisita o erro, anota a pegadinha e acerta o re-teste para ganhar bônus de superação.
                </p>
              </div>

              {/* Pilar 4: Redação por Critérios */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>4. Treino Discursivo com Espelho de Banca</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  O corretor de redações utiliza critérios oficiais das bancas (FGV, Cesgranrio, Cebraspe, IBDO) para pontuar domínio temático, estrutura dissertativa, gramática e capacidade argumentativa em segundos.
                </p>
              </div>
            </div>

            {/* Passo a Passo */}
            <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Roteiro Diário Recomendado:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-xs text-[var(--text-secondary)] font-sans">
                <li>Abra a <strong>Visão Geral & Missão</strong> e execute a matéria prioritária recomendada do dia.</li>
                <li>Leia a teoria esquematizada e resolva a <strong>Fixação Imediata</strong> na Sala de Estudos.</li>
                <li>Revise os <strong>Flashcards do Dia</strong> para manter a repetição espaçada em dia.</li>
                <li>Acesse o <strong>Caderno de Erros</strong> e zere as pendências ativas.</li>
                <li>Aos finais de semana, execute um <strong>Simulado Cronometrado</strong> e redija uma <strong>Discursiva</strong>.</li>
              </ol>
            </div>
          </Card>
        </div>
      )}

      {/* ABA 3: SOBRE A PLATAFORMA */}
      {activeSubTab === 'sobre' && (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <div>
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
                  Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
                </h2>
                <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  Versão 2.5.0 (Produção Homologada)
                </div>
              </div>
              <CarimboStatus status="homologado" label="SISTEMA ATIVO" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                O <strong>Gabarito.AI</strong> é uma plataforma de estudos avançada para concursos públicos de alto nível, projetada com foco absoluto em <strong>produtividade cognitiva</strong>, <strong>autoridade institucional</strong> e <strong>velocidade</strong>.
              </p>
              <p>
                Diferente de sistemas genéricos carregados de elementos visuais desnecessários, nossa interface adota a estética <em>Institutional Editorial</em>: tipografia legível, alta densidade de informação útil, tempos de resposta ultrarrápidos e zero poluição.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-3 font-mono text-xs">
              <div className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-success)]" />
                <span>Especificações Técnicas de Engenharia</span>
              </div>
              <ul className="space-y-1.5 text-[var(--text-muted)]">
                <li>• <strong>Frontend:</strong> React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons.</li>
                <li>• <strong>Backend:</strong> Node.js Express ESM com motor de banco nativo <code>node:sqlite</code>.</li>
                <li>• <strong>Inteligência Artificial:</strong> Google Gemini 3.5 com sanitização estrita de prompts.</li>
                <li>• <strong>Blindagem:</strong> 117 testes automatizados (Pentest, AI Security, Rest APIs e QA).</li>
              </ul>
            </div>
          </Card>
        </div>
      )}

      {/* Footer Security Badge */}
      <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2 text-xs font-mono shadow-sm">
        <div className="font-bold text-[var(--text-primary)] flex items-center gap-2.5">
          <CarimboStatus status="homologado" label="SEGURANÇA ATIVA" />
          <span className="text-sm">Blindagem de Segurança 360° Gabarito.AI</span>
        </div>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed pt-1">
          Zero-Build SQLite oficial (`node:sqlite`), proteção contra prototype pollution, sanitização HPP, anti-timing attack, rate limiting e cabeçalhos OWASP ativos.
        </p>
      </div>
    </div>
  );
};
