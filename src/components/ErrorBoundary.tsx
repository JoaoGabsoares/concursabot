import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou erro:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full p-8 flex flex-col items-center justify-center text-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl space-y-4 my-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[var(--color-status-danger-bg)] text-[var(--accent-danger)] flex items-center justify-center text-2xl font-bold font-mono">
            ⚠️
          </div>
          <div className="space-y-1 max-w-md">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {this.props.fallbackTitle || 'Ops! Ocorreu uma inconsistência no módulo'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              O sistema protegeu a sua sessão. Clique abaixo para reiniciar a visualização com os dados sincronizados.
            </p>
            {this.state.error && (
              <pre className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent-warning)] text-left overflow-x-auto max-h-32 mt-2">
                {this.state.error.message}
              </pre>
            )}
          </div>
          <button
            type="button"
            onClick={this.handleReset}
            className="px-5 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-sans text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            Recarregar Módulo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
