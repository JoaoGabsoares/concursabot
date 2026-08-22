import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, Award, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'success' | 'xp' | 'info' | 'warning' | 'error';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  xp?: number;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  success: (title: string, message?: string, xp?: number) => void;
  info: (title: string, message?: string) => void;
  warning: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    const duration = toast.duration || (toast.xp ? 4500 : 3500);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const success = useCallback((title: string, message?: string, xp?: number) => {
    showToast({ type: xp ? 'xp' : 'success', title, message, xp });
  }, [showToast]);

  const info = useCallback((title: string, message?: string) => {
    showToast({ type: 'info', title, message });
  }, [showToast]);

  const warning = useCallback((title: string, message?: string) => {
    showToast({ type: 'warning', title, message });
  }, [showToast]);

  const error = useCallback((title: string, message?: string) => {
    showToast({ type: 'error', title, message });
  }, [showToast]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, success, info, warning, error }}>
      {children}
      {/* Toast Overlay Container */}
      <div 
        className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((toast) => {
          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start justify-between gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
                toast.type === 'xp' || toast.type === 'warning'
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-warning)]/40 text-[var(--text-primary)] shadow-lg'
                  : toast.type === 'success'
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-success)]/40 text-[var(--text-primary)] shadow-lg'
                  : toast.type === 'error'
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-danger)]/40 text-[var(--text-primary)] shadow-lg'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-primary)] shadow-lg'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {toast.type === 'xp' ? (
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-amber-bg)] border border-[var(--accent-warning)]/30 flex items-center justify-center text-[var(--accent-warning)] font-mono font-bold text-xs">
                      <Award className="w-4 h-4" />
                    </div>
                  ) : toast.type === 'success' ? (
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-emerald-bg)] border border-[var(--accent-success)]/30 flex items-center justify-center text-[var(--accent-success)]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : toast.type === 'error' ? (
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-status-danger-bg)] border border-[var(--accent-danger)]/30 flex items-center justify-center text-[var(--accent-danger)]">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  ) : toast.type === 'warning' ? (
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-amber-bg)] border border-[var(--accent-warning)]/30 flex items-center justify-center text-[var(--accent-warning)]">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)]">
                      <Info className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-sans font-bold text-sm leading-tight text-[var(--text-primary)]">
                      {toast.title}
                    </h4>
                    {toast.xp && (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--accent-amber-bg)] text-[var(--accent-warning)] border border-[var(--accent-warning)]/40">
                        +{toast.xp} XP
                      </span>
                    )}
                  </div>
                  {toast.message && (
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                      {toast.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1 rounded-md focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
