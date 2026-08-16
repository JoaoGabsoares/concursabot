import React, { useState } from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { UserProfile } from '../../types';
import { Settings, User, Key, Download, Upload, Shield, RefreshCw, CheckCircle, Info } from 'lucide-react';

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
    <div className="space-y-5 pb-20 md:pb-8 max-w-3xl mx-auto animate-fade-in">
      {/* Header Bar */}
      <div className="pb-3 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
            Ajustes do Sistema & Perfil
          </h1>
          <Badge variant="brand">v3.0 Pro</Badge>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-0.5">
          Gerenciamento de credenciais, motor de IA e backup local de progresso
        </p>
      </div>

      {/* 1. Profile Settings */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
          <User className="w-4 h-4 text-[var(--accent-primary)]" />
          <h3 className="font-semibold text-sm text-[var(--text-primary)]">
            Identidade do Estudante
          </h3>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-[var(--text-muted)]">
            Nome de Exibição
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-1 p-2.5 rounded-lg text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleSaveProfile}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Card>

      {/* 2. Gemini AI Key */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
          <Key className="w-4 h-4 text-amber-400" />
          <h3 className="font-semibold text-sm text-[var(--text-primary)]">
            Chave de API Gemini (Opcional / Bring Your Own Key)
          </h3>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          O servidor já possui o motor padrão ativo. Caso deseje utilizar sua própria cota pessoal do Google Gemini para limites mais altos, insira sua chave abaixo:
        </p>

        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="password"
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="flex-1 p-2.5 rounded-lg text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-mono"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSaveKey}
            >
              {savedKey ? "Salvo! ✓" : "Atualizar Chave"}
            </Button>
          </div>
        </div>
      </Card>

      {/* 3. Backup & Export */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
          <Download className="w-4 h-4 text-sky-400" />
          <h3 className="font-semibold text-sm text-[var(--text-primary)]">
            Backup & Integridade dos Dados
          </h3>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Faça download completo das suas respostas, anotações do Caderno de Erros, histórico de simulados e redações em formato JSON padronizado.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <Button
            variant="outline"
            size="sm"
            icon={Download}
            onClick={handleExportBackup}
          >
            Exportar Backup JSON
          </Button>
        </div>
      </Card>

      {/* 4. Security & Architecture Notice */}
      <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-1 text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
          <Shield className="w-4 h-4 text-[var(--accent-success)]" />
          <span>Gabarito.AI — Blindagem de Segurança 360° Ativa</span>
        </div>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Zero-Build SQLite oficial (`node:sqlite`), proteção contra prototype pollution, sanitização HPP, anti-timing attack, rate limiting e cabeçalhos OWASP ativos.
        </p>
      </div>
    </div>
  );
};
