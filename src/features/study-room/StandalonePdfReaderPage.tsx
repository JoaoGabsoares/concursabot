import React, { useState, useEffect } from 'react';
import { api } from '../../api/client';
import { PdfReaderStudio } from './components/PdfReaderStudio';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

export interface StandalonePdfReaderPageProps {
  materialId: number;
  onBack?: () => void;
}

export const StandalonePdfReaderPage: React.FC<StandalonePdfReaderPageProps> = ({
  materialId,
  onBack
}) => {
  const [material, setMaterial] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    api.getMaterialById(materialId)
      .then((res) => {
        if (isMounted) {
          if (res && res.material) {
            setMaterial(res.material);
          } else {
            setError('Apostila ou material de estudo não encontrado.');
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Erro ao carregar apostila no leitor standalone:', err);
          setError('Falha ao carregar material. Verifique sua conexão e autenticação.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [materialId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex flex-col items-center justify-center p-4 text-[var(--text-primary)]">
        <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl flex flex-col items-center gap-4 text-center max-w-sm">
          <Loader2 className="w-10 h-10 text-[var(--accent-primary)] animate-spin" />
          <div>
            <h3 className="font-bold text-sm">Carregando Estúdio de Leitura...</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Preparando motor de renderização de alta fidelidade e grifos.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !material || !material.pdfUrl) {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex flex-col items-center justify-center p-4 text-[var(--text-primary)]">
        <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl flex flex-col items-center gap-4 text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-400" />
          <div>
            <h3 className="font-bold text-base text-red-400">Apostila Indisponível</h3>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              {error || 'Este material não possui um arquivo PDF associado.'}
            </p>
          </div>
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Painel</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[var(--bg-base)] z-50 flex flex-col">
      {onBack && (
        <div className="bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-4 py-2 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Voltar para a Plataforma</span>
          </button>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Modo Leitura Imersiva Fullscreen
          </span>
        </div>
      )}

      <div className="flex-1 overflow-hidden p-2 sm:p-4">
        <PdfReaderStudio
          materialId={material.id}
          pdfUrl={material.pdfUrl}
          title={material.title || material.filename}
          subject={material.subject || 'Geral'}
          initialPage={material.current_page || 1}
          totalPages={material.total_pages || material.theory_pages || 1}
          tableOfContents={material.tableOfContents || []}
          isStandalone={true}
        />
      </div>
    </div>
  );
};
