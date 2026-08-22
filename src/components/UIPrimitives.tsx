import React from 'react';

// 1. Signature Element: Carimbo de Status do Edital
export interface CarimboStatusProps {
  status: 'homologado' | 'em_revisao' | 'vulneravel' | 'pendente';
  label: string;
  className?: string;
}

export const CarimboStatus: React.FC<CarimboStatusProps> = ({ status, label, className = '' }) => {
  const classMap = {
    homologado: 'carimbo-homologado',
    em_revisao: 'carimbo-em-revisao',
    vulneravel: 'carimbo-vulneravel',
    pendente: 'carimbo-pendente'
  };

  return (
    <span className={`carimbo-status ${classMap[status]} ${className}`}>
      [ {label} ]
    </span>
  );
};

// 2. Tactile Button Component (Rich backgrounds, clear borders, tactile depth)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: any;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 cursor-pointer select-none active:scale-[0.98] disabled:opacity-45 disabled:pointer-events-none disabled:active:scale-100 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]';

  const sizeStyles = {
    sm: 'min-h-9 px-3.5 text-xs gap-2',
    md: 'min-h-10 px-5 text-xs sm:text-sm gap-2',
    lg: 'min-h-12 px-6 text-sm sm:text-base gap-2.5 font-bold',
  };

  const variantStyles = {
    brand: 'bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white shadow-md hover:shadow-lg border border-[var(--accent-primary)]/20 active:opacity-90',
    primary: 'bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white shadow-md hover:shadow-lg border border-[var(--accent-primary)]/20',
    secondary: 'bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] shadow-sm',
    outline: 'bg-[var(--bg-elevated)] hover:bg-[var(--bg-active)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] shadow-sm',
    ghost: 'bg-transparent hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
    danger: 'bg-[var(--accent-danger)] hover:opacity-90 text-white shadow-sm border border-[var(--accent-danger)]/30'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
};

// 3. Card Component with Border Contrast & Subtle Elevation
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-[var(--shadow-card)] transition-all duration-200 ${
        hoverable ? 'hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-elevated)] hover:translate-y-[-1px]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// 4. Badge Component
export interface BadgeProps {
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'danger' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    brand: 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30',
    success: 'bg-[var(--color-status-success-bg)] text-[var(--color-status-success)] border border-[var(--color-status-success)]/30',
    warning: 'bg-[var(--color-status-warning-bg)] text-[var(--color-status-warning)] border border-[var(--color-status-warning)]/30',
    danger: 'bg-[var(--color-status-danger-bg)] text-[var(--color-status-danger)] border border-[var(--color-status-danger)]/30',
    outline: 'bg-transparent text-[var(--text-secondary)] border border-[var(--border-subtle)]',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// 5. ProgressBar Component with High Contrast Track
export interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {label && (
        <div className="flex justify-between text-xs font-mono text-[var(--text-muted)]">
          <span>{label}</span>
          <span className="font-bold text-[var(--text-primary)]">{percentage}%</span>
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden">
        <div
          className="h-full bg-[var(--accent-primary)] transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// 6. Bottom Sheet / Modal Primitives
export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-[var(--bg-surface)] border border-[var(--border-focus)] rounded-xl p-6 space-y-4 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <h3 className="font-display font-bold text-base text-[var(--text-primary)] tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="font-sans text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded"
          >
            [ FECHAR ]
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
