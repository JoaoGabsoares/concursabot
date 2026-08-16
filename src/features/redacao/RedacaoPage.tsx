import React, { useState } from 'react';
import { Card, Button, Badge } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
import { PenTool, Sparkles, Award, CheckCircle, AlertTriangle, Send, Clock, BookOpen } from 'lucide-react';
import { RedacaoCritique } from '../../types';

interface RedacaoPageProps {
  careerId: string;
}

export const RedacaoPage: React.FC<RedacaoPageProps> = ({ careerId }) => {
  const currentCareer = getCareerById(careerId);
  const [tema, setTema] = useState<string>("O papel dos bancos públicos e da tecnologia no desenvolvimento sustentável e na inclusão financeira nacional");
  const [texto, setTexto] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [critique, setCritique] = useState<RedacaoCritique | null>(null);

  const wordCount = texto.trim().split(/\s+/).filter(Boolean).length;
  const lineCount = texto.split('\n').filter(Boolean).length;

  const handleCorrigir = async () => {
    if (!texto.trim() || wordCount < 30) {
      alert("Escreva pelo menos 30 palavras para enviar para correção discursiva oficial.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/redacao/corrigir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tema, texto, careerId: currentCareer.id })
      });
      const data = await res.json();
      setCritique(data);
    } catch (e: any) {
      alert("Erro ao conectar com a IA: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 sm:pb-8 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
              Corretor de Redação IA
            </h1>
            <Badge variant="success">Banca {currentCareer.banca}</Badge>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-sans">
            Avaliação automatizada em 4 critérios normativos oficiais (+50 XP por redação)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Editor Area */}
        <div className="lg:col-span-7 space-y-4">
          <Card className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                Tema Oficial da Prova Discursiva:
              </label>
              <input
                type="text"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="w-full p-2.5 rounded-lg text-xs font-semibold bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-gabarito)] outline-none"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Folha de Texto Definitivo (20 a 30 linhas)</span>
                <span>{wordCount} palavras • ~{lineCount} linhas</span>
              </div>
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Insira aqui sua redação dissertativo-argumentativa..."
                rows={14}
                className="w-full p-4 rounded-xl text-xs sm:text-sm leading-relaxed bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-gabarito)] outline-none font-sans"
              />
            </div>

            <Button
              size="lg"
              variant="primary"
              fullWidth={true}
              icon={Send}
              disabled={loading}
              onClick={handleCorrigir}
              className="text-sm font-semibold"
            >
              {loading ? "Avaliando nos critérios da banca..." : "Submeter para Correção da Banca IA (+50 XP)"}
            </Button>
          </Card>
        </div>

        {/* Feedback & Score Area */}
        <div className="lg:col-span-5 space-y-4">
          {critique ? (
            <Card className="space-y-4 border-2 border-[var(--accent-gabarito)] animate-fade-in">
              <div className="text-center pb-3 border-b border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider">
                  Nota Oficial Homologada
                </span>
                <div className="text-4xl font-serif font-bold text-[var(--accent-gabarito)] mt-1">
                  {critique.nota_total} <span className="text-base text-[var(--text-muted)] font-normal">/ 100</span>
                </div>
              </div>

              {/* 4 Criteria Breakdown */}
              <div className="space-y-2 text-xs">
                {Object.entries(critique.criterios || {}).map(([key, val]: [string, any]) => (
                  <div key={key} className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                    <div className="flex justify-between font-semibold capitalize text-[var(--text-primary)] font-serif">
                      <span>{key.replace('_', ' ')}</span>
                      <span className="font-mono text-[var(--accent-gabarito)]">{val.nota} pts</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] font-sans leading-snug">
                      {val.feedback}
                    </p>
                  </div>
                ))}
              </div>

              {/* General Feedback */}
              {critique.comentario_geral && (
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs space-y-1">
                  <div className="font-semibold text-[var(--text-primary)] font-serif">Parecer da Banca:</div>
                  <p className="text-[var(--text-muted)] font-sans leading-relaxed">
                    {critique.comentario_geral}
                  </p>
                </div>
              )}
            </Card>
          ) : (
            <Card className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-elevated)] text-[var(--accent-gabarito)] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-[var(--text-primary)]">
                Critérios Oficiais da Banca
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-sans max-w-xs mx-auto">
                1. Adequação ao Tema • 2. Estrutura Textual • 3. Domínio da Norma Culta • 4. Coerência & Argumentação
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
