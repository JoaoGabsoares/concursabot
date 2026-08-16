import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

// Card Primitive
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
      className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5 transition-all ${
        hoverable ? 'hover:border-[var(--border-focus)] hover:shadow-sm cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Button Primitive
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
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
    sm: 'h-9 px-3 text-xs',
    md: 'h-11 px-4 text-sm min-h-[44px]',
    lg: 'h-13 px-6 text-base min-h-[48px]'
  };

  const variantClasses = {
    primary: 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold hover:opacity-90 shadow-xs active:scale-[0.98]',
    secondary: 'bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)]',
    outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] hover:bg-[var(--bg-elevated)]',
    danger: 'bg-[var(--accent-danger)] text-white font-medium hover:opacity-90 active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
  };

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium select-none transition-all touch-manipulation disabled:opacity-50 disabled:pointer-events-none ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
};

// Badge Primitive
export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantStyles = {
    default: 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)]',
    success: 'bg-[var(--accent-gabarito-glow)] text-[var(--accent-gabarito)] border-[var(--accent-gabarito)]/30 font-semibold',
    danger: 'bg-[var(--accent-danger-glow)] text-[var(--accent-danger)] border-[var(--accent-danger)]/30 font-semibold',
    warning: 'bg-[var(--accent-warning-glow)] text-[var(--accent-warning)] border-[var(--accent-warning)]/30 font-semibold',
    info: 'bg-sky-500/10 text-sky-400 border-sky-500/30'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Bottom Sheet / Modal Primitive
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
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Sheet Modal Container */}
      <div className="relative w-full sm:max-w-lg bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] rounded-t-2xl sm:rounded-2xl max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl z-10 animate-fade-in">
        {/* Drag Handle (Mobile) */}
        <div className="w-12 h-1.5 bg-[var(--border-subtle)] rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)]">
          <h3 className="font-serif font-semibold text-base text-[var(--text-primary)]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
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
