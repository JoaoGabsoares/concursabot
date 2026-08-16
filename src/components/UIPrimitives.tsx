import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

// 1. Card Primitive (Linear Craft Surface)
export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverable = false }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5 transition-all duration-150 ${
        hoverable ? 'hover:border-[var(--border-focus)] hover:bg-[var(--bg-elevated)] cursor-pointer hover:shadow-xs' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 2. Button Primitive (Solid White Contrast & Surface Elevated)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon: Icon,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs rounded-md',
    md: 'h-10 px-4 text-xs sm:text-sm rounded-lg min-h-[42px] sm:min-h-[40px]',
    lg: 'h-12 px-6 text-sm sm:text-base rounded-xl min-h-[48px]'
  };

  const variantClasses = {
    primary: 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold hover:bg-[var(--btn-primary-hover)] shadow-xs active:scale-[0.98]',
    brand: 'bg-[var(--accent-primary)] text-white font-semibold hover:bg-[var(--accent-primary-hover)] shadow-xs active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.25)]',
    secondary: 'bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--bg-active)] border border-[var(--border-subtle)] font-medium active:scale-[0.98]',
    outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] hover:bg-[var(--bg-elevated)] font-medium',
    danger: 'bg-[var(--accent-danger)] text-white font-medium hover:opacity-90 active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] font-medium'
  };

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 font-sans select-none transition-all duration-150 touch-manipulation disabled:opacity-40 disabled:pointer-events-none ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
};

// 3. Badge Primitive (Subtle Tint & Hairline Border)
export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info' | 'brand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantStyles = {
    default: 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)]',
    brand: 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] border-[var(--accent-primary)]/30 font-semibold',
    success: 'bg-[var(--accent-success-glow)] text-[var(--accent-success)] border-[var(--accent-success)]/30 font-semibold',
    danger: 'bg-[var(--accent-danger-glow)] text-[var(--accent-danger)] border-[var(--accent-danger)]/30 font-semibold',
    warning: 'bg-[var(--accent-warning-glow)] text-[var(--accent-warning)] border-[var(--accent-warning)]/30 font-semibold',
    info: 'bg-sky-500/10 text-sky-400 border-sky-500/25'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

// 4. Progress Bar Primitive
export interface ProgressBarProps {
  value: number; // 0 to 100
  variant?: 'brand' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  variant = 'brand',
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, value));

  const barColors = {
    brand: 'bg-[var(--accent-primary)]',
    success: 'bg-[var(--accent-success)]',
    warning: 'bg-[var(--accent-warning)]',
    danger: 'bg-[var(--accent-danger)]'
  };

  return (
    <div className={`w-full bg-[var(--bg-elevated)] h-1.5 rounded-full overflow-hidden border border-[var(--border-subtle)] ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${barColors[variant]}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};

// 5. Bottom Sheet / Modal Primitive
export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Sheet Modal Container */}
      <div className="relative w-full sm:max-w-lg bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] rounded-t-2xl sm:rounded-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col shadow-2xl z-10 animate-fade-in">
        {/* Drag Handle (Mobile) */}
        <div className="w-12 h-1.5 bg-[var(--border-subtle)] rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)]">
          <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
