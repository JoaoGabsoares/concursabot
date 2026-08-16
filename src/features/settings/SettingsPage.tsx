import React, { useState } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { UserProfile } from '../../types';

interface SettingsPageProps {
  user: UserProfile | null;
  onUpdateUser: (name: string) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ user, onUpdateUser }) => {
  const [userName, setUserName] = useState(user?.name || 'João Soares');
  const [geminiKey, setGeminiKey] = useState('');
  const [savedKey, setSavedKey] = useState(false);

  const handleSaveProfile = () => {
    onUpdateUser(userName);
    alert('Perfil atualizado com sucesso!');
  };

  const handleSaveKey = () => {
    if (!geminiKey.trim()) return;
    localStorage.setItem('GEMINI_API_KEY', geminiKey.trim());
    setSavedKey(true);
    setTimeout(() => setSavedKey(false), 3000);
  };

  const handleExportBackup = () => {
    window.open('/api/users/export/progress', '_blank');
  };

  return (
    <div className="space-y-6 pb-20 max-w-3xl mx-auto font-sans animate-fade-in">
      {/* Header Bar */}
      <div className="pb-4 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Ajustes do Sistema & Perfil
          </h1>
          <CarimboStatus status="homologado" label="PLATAFORMA OFICIAL" />
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
          Gerenciamento de credenciais, motor de IA e backup local de progresso
        </p>
      </div>

      {/* 1. Profile Settings */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
            Identidade do Estudante
          </h3>
          <span className="font-mono text-xs text-[var(--text-muted)]">ID: {user?.id || 'LOCAL'}</span>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase text-[var(--text-muted)] tracking-wider">
            Nome de Exibição:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-1 p-2.5 rounded text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans"
            />
            <Button
              variant="brand"
              size="sm"
              onClick={handleSaveProfile}
              className="font-bold font-mono"
            >
              Salvar
            </Button>
          </div>
        </div>
      </Card>

      {/* 2. Gemini AI Key */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
            Chave de API Gemini (Bring Your Own Key)
          </h3>
          <CarimboStatus status="pendente" label="OPCIONAL" />
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          O servidor já possui o motor padrão ativo. Caso deseje utilizar sua própria cota pessoal do Google Gemini para limites mais altos, insira sua chave abaixo:
        </p>

        <div className="space-y-2 font-mono">
          <div className="flex gap-2">
            <input
              type="password"
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="flex-1 p-2.5 rounded text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSaveKey}
              className="font-bold"
            >
              {savedKey ? "Salvo! ✓" : "Atualizar Chave"}
            </Button>
          </div>
        </div>
      </Card>

      {/* 3. Backup & Export */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
            Backup & Integridade dos Dados
          </h3>
          <CarimboStatus status="homologado" label="JSON PADRONIZADO" />
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Faça download completo das suas respostas, anotações do Caderno de Erros, histórico de simulados e redações em formato JSON padronizado.
        </p>

        <div className="pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportBackup}
            className="font-mono text-xs"
          >
            Exportar Backup JSON
          </Button>
        </div>
      </Card>

      {/* 4. Trocar de Estudante */}
      <Card className="p-6 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
              Trocar de Perfil de Estudante
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Alternar para outro perfil cadastrado ou criar uma nova conta de estudos
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              localStorage.removeItem('CURRENT_USER_ID');
              window.location.reload();
            }}
            className="font-mono text-xs shrink-0"
          >
            Trocar Perfil
          </Button>
        </div>
      </Card>

      {/* 5. Security & Architecture Notice */}
      <div className="p-4 rounded border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-1 text-xs font-mono">
        <div className="font-bold text-[var(--text-primary)] flex items-center gap-2">
          <CarimboStatus status="homologado" label="SEGURANÇA ATIVA" />
          <span>Blindagem de Segurança 360° Gabarito.AI</span>
        </div>
        <p className="text-[var(--text-muted)] text-[11px] leading-relaxed pt-1">
          Zero-Build SQLite oficial (`node:sqlite`), proteção contra prototype pollution, sanitização HPP, anti-timing attack, rate limiting e cabeçalhos OWASP ativos.
        </p>
      </div>
    </div>
  );
};
