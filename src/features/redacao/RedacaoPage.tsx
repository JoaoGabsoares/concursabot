import React, { useState, useEffect } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { CAREER_ESSAY_THEMES } from '../../utils/studyContent';
import { RedacaoCritique } from '../../types';
import { api } from '../../api/client';

interface RedacaoPageProps {
  careerId: string;
}

export const RedacaoPage: React.FC<RedacaoPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const defaultTheme = CAREER_ESSAY_THEMES[careerId] || "O papel do Estado e das instituições públicas no desenvolvimento social e econômico.";
  
  const [tema, setTema] = useState<string>(defaultTheme);
  const [texto, setTexto] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [critique, setCritique] = useState<RedacaoCritique | null>(null);

  // Sincroniza o tema se a carreira mudar
  useEffect(() => {
    setTema(CAREER_ESSAY_THEMES[careerId] || defaultTheme);
    setCritique(null);
  }, [careerId]);

  const wordCount = texto.trim().split(/\s+/).filter(Boolean).length;
  const lineCount = texto.split('\n').filter(Boolean).length;

  const handleCorrigir = async () => {
    if (!texto.trim() || wordCount < 30) {
      alert("Escreva pelo menos 30 palavras para enviar para correção discursiva oficial.");
      return;
    }

    setLoading(true);
    try {
      const data = await api.corrigirRedacao(tema, texto, currentCareer.id);
      setCritique(data);
    } catch (e: any) {
      alert("Erro ao conectar com a IA: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Corretor de Redação Discursiva
            </h1>
            <CarimboStatus status="homologado" label={`BANCA ${currentCareer.banca}`} />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Avaliação técnica em 4 critérios oficiais de banca examinadora (+50 XP por avaliação homologada)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Editor Area */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 sm:p-8 space-y-5 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)]">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                Tema Proposto para o Concurso ({currentCareer.name.split('—')[0]}):
              </label>
              <textarea
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="w-full p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] outline-none resize-none font-medium leading-relaxed"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Texto Dissertativo-Argumentativo:
                </label>
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                  <span>{wordCount} palavras</span>
                  <span>•</span>
                  <span>{lineCount} linhas</span>
                </div>
              </div>
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Desenvolva sua dissertação respeitando a norma culta, a estrutura canônica (introdução, desenvolvimento em 2 parágrafos e conclusão) e a pertinência com a banca..."
                className="w-full h-80 p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs sm:text-sm text-[var(--text-primary)] outline-none resize-none leading-relaxed font-sans"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Critérios: FGV / Cesgranrio / DEnsM / IBDO
              </span>
              <Button
                variant="brand"
                onClick={handleCorrigir}
                disabled={loading}
                className="font-mono text-xs"
              >
                {loading ? "Avaliando pela IA..." : "Submeter para Correção Oficial (+50 XP)"}
              </Button>
            </div>
          </Card>
        </div>

        {/* Evaluation Output Area */}
        <div className="lg:col-span-5 space-y-6">
          {critique ? (
            <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                    PARECER DA BANCA
                  </span>
                  <div className="font-display font-bold text-xl text-[var(--text-primary)]">
                    Nota Final: {critique.notaTotal}/100
                  </div>
                </div>
                <CarimboStatus 
                  status={critique.notaTotal >= 70 ? "homologado" : "vulneravel"} 
                  label={critique.notaTotal >= 70 ? "CLASSIFICADO" : "ELIMINADO"} 
                />
              </div>

              {/* 4 Criteria Scores */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">1. Domínio do Tema e Coerência:</span>
                  <span className="font-bold text-[var(--text-primary)]">{critique.criterio1_tema}/25</span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">2. Estrutura Textual Dissertativa:</span>
                  <span className="font-bold text-[var(--text-primary)]">{critique.criterio2_estrutura}/25</span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">3. Norma Culta e Gramática:</span>
                  <span className="font-bold text-[var(--text-primary)]">{critique.criterio3_gramatica}/25</span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">4. Argumentação e Proposta de Solução:</span>
                  <span className="font-bold text-[var(--text-primary)]">{critique.criterio4_argumentacao}/25</span>
                </div>
              </div>

              {/* Feedback Comments */}
              <div className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <h4 className="font-display font-bold text-sm text-[var(--text-primary)]">
                  Apontamentos do Avaliador:
                </h4>
                <p className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] italic">
                  "{critique.comentarioGeral || critique.comentario}"
                </p>
              </div>
            </Card>
          ) : (
            <Card className="p-6 sm:p-8 space-y-4 bg-[var(--bg-surface)] shadow-md border-[var(--border-subtle)] text-center text-xs text-[var(--text-muted)]">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto text-[var(--text-primary)] font-bold text-lg font-mono">
                ✍️
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                Aguardando Redação
              </h3>
              <p className="leading-relaxed">
                Escreva seu texto e clique em "Submeter para Correção Oficial". A IA examinará a norma culta, coesão, clareza e argumentação com base na banca {currentCareer.banca}.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
