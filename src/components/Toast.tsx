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
                toast.type === 'xp'
                  ? 'bg-[#181a20]/95 border-amber-500/40 text-amber-100 shadow-amber-950/20'
                  : toast.type === 'success'
                  ? 'bg-[#141d18]/95 border-emerald-500/40 text-emerald-100 shadow-emerald-950/20'
                  : toast.type === 'error'
                  ? 'bg-[#221415]/95 border-rose-500/40 text-rose-100 shadow-rose-950/20'
                  : 'bg-[var(--bg-surface)]/95 border-[var(--border-subtle)] text-[var(--text-primary)] shadow-black/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {toast.type === 'xp' ? (
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                      <Award className="w-4 h-4" />
                    </div>
                  ) : toast.type === 'success' ? (
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : toast.type === 'error' ? (
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Info className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-sans font-bold text-sm leading-tight text-white">
                      {toast.title}
                    </h4>
                    {toast.xp && (
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/30 text-amber-300 border border-amber-500/40 animate-pulse">
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
                className="text-[var(--text-muted)] hover:text-white transition-colors p-1 rounded-md"
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
