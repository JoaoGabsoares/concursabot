import React from 'react';
import { Card, CarimboStatus } from '../../components/UIPrimitives';
import { ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in font-sans pb-16 max-w-5xl mx-auto">
      
      {/* Header Institucional */}
      <Card className="p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-md">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 flex-wrap gap-3">
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Gabarito<span className="text-[var(--accent-primary)] font-mono font-normal">.AI</span>
            </h1>
            <div className="text-xs font-mono text-[var(--text-muted)] mt-1">
              Versão 6.0.0 (Sala de Operações • Multiplataforma)
            </div>
          </div>
          <CarimboStatus status="homologado" label="SISTEMA ATIVO & SEGURO" />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          <p>
            O <strong>Gabarito.AI</strong> é uma plataforma de estudos avançada para concursos públicos de alto nível (Receita Federal, Banco do Brasil, Transpetro, Marinha e Tribunais), projetada com foco absoluto em <strong>produtividade cognitiva</strong>, <strong>autoridade institucional</strong> e <strong>velocidade de resposta</strong>.
          </p>
          <p>
            Diferente de sistemas genéricos sobrecarregados de distrações visuais e anúncios, nossa interface adota a estética <em>Institutional Editorial</em>: tipografia legível, alta densidade de informação útil, tempos de resposta ultrarrápidos e zero poluição.
          </p>
        </div>

        {/* Especificações Técnicas */}
        <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-3 font-mono text-xs">
          <div className="font-bold text-[var(--text-primary)] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--accent-success)]" />
            <span>Especificações Técnicas de Engenharia</span>
          </div>
          <ul className="space-y-2 text-[var(--text-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] font-bold">•</span>
              <span><strong>Frontend:</strong> React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons com arquitetura de componentes atômicos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] font-bold">•</span>
              <span><strong>Backend:</strong> Node.js Express ESM com motor nativo <code>node:sqlite</code> (zero dependências C++ instáveis).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] font-bold">•</span>
              <span><strong>Inteligência Artificial:</strong> Google Gemini 2.5 Flash / 1.5 Pro com sanitização estrita de prompts e espelhos de critérios oficiais de bancas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] font-bold">•</span>
              <span><strong>Segurança & Blindagem:</strong> Suíte completa de testes automatizados (Pentest, AI Security, Rest APIs, Headers OWASP e CSRF/XSS protection).</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Badge de Segurança */}
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
