import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { api } from '../api/client';
import { CAREERS_LIST } from '../utils/careers';
import { Card, Button, CarimboStatus } from './UIPrimitives';
import { ChevronRight } from 'lucide-react';

interface AuthAndUserSelectorProps {
  onSelectUser: (user: UserProfile) => void;
}

export const AuthAndUserSelector: React.FC<AuthAndUserSelectorProps> = ({ onSelectUser }) => {
  const [pinRequired, setPinRequired] = useState<boolean>(false);
  const [pinVerified, setPinVerified] = useState<boolean>(() => {
    return sessionStorage.getItem('GABARITO_PIN_AUTH') === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);

  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  // New Profile Form State
  const [newName, setNewName] = useState<string>('');
  const [newCareerId, setNewCareerId] = useState<string>('bb_comercial');
  const [newGoalHours, setNewGoalHours] = useState<number>(2);
  const [creatingUser, setCreatingUser] = useState<boolean>(false);

  // 1. Check Auth Status from server
  useEffect(() => {
    fetch('/api/auth/status')
      .then(res => res.json())
      .then(data => {
        if (data && data.pinRequired && !pinVerified) {
          setPinRequired(true);
        } else {
          setPinRequired(false);
          loadProfiles();
        }
      })
      .catch(() => {
        loadProfiles();
      });
  }, [pinVerified]);

  const loadProfiles = () => {
    setLoading(true);
    api.getUserProfiles()
      .then(data => {
        if (Array.isArray(data)) {
          setProfiles(data);
        }
      })
      .catch(err => {
        console.error('Erro ao carregar perfis:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVerifyPin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setPinError(null);

    if (!pinInput.trim()) {
      setPinError('Digite o PIN de acesso.');
      return;
    }

    try {
      const res = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput.trim() })
      });

      if (res.ok) {
        sessionStorage.setItem('GABARITO_PIN_AUTH', 'true');
        setPinVerified(true);
        setPinRequired(false);
        loadProfiles();
      } else {
        setPinError('PIN de convite incorreto.');
      }
    } catch (err: any) {
      setPinError('Erro ao validar PIN: ' + err.message);
    }
  };

  const handleCreateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    setCreatingUser(true);
    try {
      const newProfile = await api.createUserProfile({
        name: newName.trim(),
        active_career_id: newCareerId,
        daily_hours: newGoalHours,
        experience_level: 'iniciante'
      });

      if (newProfile && newProfile.id) {
        localStorage.setItem('CURRENT_USER_ID', newProfile.id);
        localStorage.setItem('SELECTED_CAREER', newCareerId);
        onSelectUser({
          id: newProfile.id,
          name: newProfile.name,
          careerId: newCareerId,
          level: 1,
          xp: 0,
          todayQuestions: 0,
          todayMinutes: 0,
          dailyGoalQuestions: 30,
          dailyGoalMinutes: newGoalHours * 60,
          streakDays: 0
        });
      }
    } catch (err: any) {
      alert('Erro ao criar perfil: ' + err.message);
    } finally {
      setCreatingUser(false);
    }
  };

  const handleSelectExistingUser = (profile: any) => {
    localStorage.setItem('CURRENT_USER_ID', profile.id);
    const career = profile.active_career_id || profile.careerId || 'bb_comercial';
    localStorage.setItem('SELECTED_CAREER', career);

    onSelectUser({
      id: profile.id,
      name: profile.name,
      careerId: career,
      level: profile.level || 1,
      xp: profile.xp || 0,
      todayQuestions: profile.todayQuestions || 0,
      todayMinutes: profile.todayMinutes || 0,
      dailyGoalQuestions: profile.dailyGoalQuestions || 30,
      dailyGoalMinutes: (profile.daily_hours ? profile.daily_hours * 60 : 60),
      streakDays: profile.streakDays || 0
    });
  };

  // Phase 1: PIN Verification Screen
  if (pinRequired && !pinVerified) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-[var(--bg-base)] animate-fade-in font-sans">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-2">
            <CarimboStatus status="em_revisao" label="ACESSO RESTRITO" />
            <h1 className="font-display font-bold text-2xl text-[var(--text-primary)] tracking-tight">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Insira a credencial de acesso para desbloquear a plataforma
            </p>
          </div>

          <Card className="p-6 space-y-4 shadow-xl">
            <form onSubmit={handleVerifyPin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase text-[var(--text-muted)] tracking-wider">
                  PIN de Acesso Institucional:
                </label>
                <input
                  type="password"
                  autoFocus
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="••••"
                  className="w-full h-11 px-3 text-center text-lg font-mono tracking-widest rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                />
              </div>

              {pinError && (
                <div className="p-2.5 rounded bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] text-xs text-center border border-[var(--accent-danger)]/30 font-mono">
                  [ {pinError} ]
                </div>
              )}

              <Button
                type="submit"
                variant="brand"
                fullWidth={true}
                size="lg"
                className="font-bold text-sm"
              >
                Autenticar & Acessar
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  // Phase 2: User Profile Selection & Creation Screen
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-base)] animate-fade-in select-none font-sans">
      <div className="w-full max-w-xl space-y-6">
        
        {/* Brand Top Header */}
        <div className="text-center space-y-2">
          <CarimboStatus status="homologado" label="SISTEMA DE IDENTIFICAÇÃO OFICIAL" />
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
            Quem está estudando hoje?
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Selecione seu perfil de concurseiro para carregar seu histórico ou cadastre um novo estudante
          </p>
        </div>

        {/* Existing Profiles List */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-8 text-xs text-[var(--text-muted)] font-mono">
              [ CONSULTANDO BANCO DE DADOS OFICIAL... ]
            </div>
          ) : profiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profiles.map((p: any) => {
                const career = CAREERS_LIST.find(c => c.id === p.active_career_id) || CAREERS_LIST[0];
                return (
                  <Card
                    key={p.id}
                    hoverable={true}
                    onClick={() => handleSelectExistingUser(p)}
                    className="p-4 flex items-center justify-between gap-3 group border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]"
                  >
                    <div className="truncate text-left space-y-0.5">
                      <div className="text-xs font-bold text-[var(--text-primary)] truncate">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono truncate">
                        {career.name.split('—')[0]} ({career.banca})
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] shrink-0 transition-colors" />
                  </Card>
                );
              })}
            </div>
          ) : null}

          {/* Action Button: Criar Novo Perfil */}
          <Card
            hoverable={true}
            onClick={() => setShowCreateModal(true)}
            className="p-4 text-center border-dashed border-2 border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-transparent flex items-center justify-center gap-2 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer uppercase tracking-wider"
          >
            <span>[ + Criar Novo Perfil de Estudante ]</span>
          </Card>
        </div>

        {/* Create Profile Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-xl p-6 space-y-4 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="font-display font-bold text-base text-[var(--text-primary)] tracking-tight">
                  Cadastrar Novo Estudante
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  [ X ]
                </button>
              </div>

              <form onSubmit={handleCreateProfile} className="space-y-4 font-sans text-xs">
                <div className="space-y-1">
                  <label className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Nome Completo ou Apelido:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Soares"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full h-10 px-3 rounded text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Concurso / Edital Alvo:
                  </label>
                  <select
                    value={newCareerId}
                    onChange={(e) => setNewCareerId(e.target.value)}
                    className="w-full h-10 px-3 rounded text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none cursor-pointer font-sans"
                  >
                    {CAREERS_LIST.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.banca})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Meta Diária de Estudos:
                  </label>
                  <div className="grid grid-cols-3 gap-2 font-mono">
                    {[1, 2, 4].map((hours) => (
                      <button
                        type="button"
                        key={hours}
                        onClick={() => setNewGoalHours(hours)}
                        className={`h-9 rounded text-xs font-bold transition-all border ${
                          newGoalHours === hours
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                            : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {hours}h / dia
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    fullWidth={true}
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="brand"
                    size="md"
                    fullWidth={true}
                    disabled={creatingUser || !newName.trim()}
                    className="font-bold font-mono"
                  >
                    {creatingUser ? "Cadastrando..." : "Iniciar Jornada"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
