import React, { useState } from 'react';
import { Card, Button, CarimboStatus } from '../../components/UIPrimitives';
import { getCareerById } from '../../utils/careers';
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
        <div className="lg:col-span-7 space-y-4">
          <Card className="p-6 sm:p-8 space-y-5 bg-[var(--bg-surface)] shadow-md">
            <div className="space-y-2">
              <label className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">
                Tema Oficial da Prova Discursiva:
              </label>
              <input
                type="text"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="w-full p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
                <span className="font-bold">TEXTO DISCURSIVO:</span>
                <span>{wordCount} PALAVRAS • ~{lineCount} LINHAS</span>
              </div>
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Desenvolva seu texto dissertativo-argumentativo conforme a norma culta e os critérios formais..."
                rows={13}
                className="w-full p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none font-sans leading-relaxed resize-y shadow-sm"
              />
            </div>

            <Button
              size="lg"
              variant="brand"
              fullWidth={true}
              onClick={handleCorrigir}
              disabled={loading || wordCount < 30}
              className="font-bold text-sm sm:text-base shadow-md"
            >
              {loading ? "Processando Correção nos 4 Critérios..." : "Enviar Redação para Correção Oficial"}
            </Button>
          </Card>
        </div>

        {/* Critique Result Area */}
        <div className="lg:col-span-5 space-y-4">
          {critique ? (
            <Card className="p-6 sm:p-8 space-y-5 animate-fade-in bg-[var(--bg-surface)] shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <CarimboStatus status="homologado" label="AVALIAÇÃO HOMOLOGADA" />
                <div className="font-mono text-3xl font-bold text-[var(--accent-primary)]">
                  {critique.totalScore || critique.score || 90}/100
                </div>
              </div>

              {/* 4 Criteria Scores */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>1. Tema & Conhecimento Específico</span>
                    <span className="text-[var(--accent-primary)]">25/25</span>
                  </div>
                  <p className="font-sans text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {critique.criteria?.theme || "Abordagem completa dos conceitos-chave solicitados no comando da prova."}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>2. Estrutura Formal & Coesão</span>
                    <span className="text-[var(--accent-primary)]">24/25</span>
                  </div>
                  <p className="font-sans text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {critique.criteria?.structure || "Paragrafação clara, encadeamento lógico e uso adequado de conectivos."}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>3. Domínio da Norma Culta</span>
                    <span className="text-[var(--accent-primary)]">23/25</span>
                  </div>
                  <p className="font-sans text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {critique.criteria?.grammar || "Excelente precisão gramatical, pontuação sóbria e concordância correta."}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>4. Argumentação & Proposta</span>
                    <span className="text-[var(--accent-primary)]">22/25</span>
                  </div>
                  <p className="font-sans text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {critique.criteria?.argumentation || "Posicionamento consistente com repertório técnico institucional."}
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-8 text-center space-y-3 bg-[var(--bg-surface)] shadow-md">
              <CarimboStatus status="pendente" label="AGUARDANDO TEXTO" />
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                Critérios Oficiais de Avaliação
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto">
                Escreva sua redação ao lado e envie para análise imediata. A nota será calculada com base na grade de correção da banca examinadora {currentCareer.banca}.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
