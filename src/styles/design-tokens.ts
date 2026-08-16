/**
 * design-tokens.ts
 * 
 * Tokens Oficiais do Design System do Gabarito.AI
 * Paleta sofisticada, tipografia profissional, raios de borda, sombras e transições.
 */

export const DESIGN_TOKENS = {
  colors: {
    // Backgrounds & Surfaces
    background: '#0a0d14',
    surface: '#111726',
    surfaceSubtle: '#182033',
    surfaceElevated: '#1f2a42',
    
    // Borders
    borderSubtle: '#1f2a40',
    borderDefault: '#2b3956',
    borderActive: '#3b82f6',

    // Primary & Accents
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    primarySubtle: 'rgba(59, 130, 246, 0.12)',
    
    // Status & Feedback
    success: '#10b981',
    successSubtle: 'rgba(16, 185, 129, 0.12)',
    warning: '#f59e0b',
    warningSubtle: 'rgba(245, 158, 11, 0.12)',
    danger: '#ef4444',
    dangerSubtle: 'rgba(239, 68, 68, 0.12)',
    info: '#06b6d4',
    infoSubtle: 'rgba(6, 182, 212, 0.12)',

    // Text & Content
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    textDisabled: '#475569'
  },

  typography: {
    fontSans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontDisplay: '"Newsreader", Georgia, serif',
    fontMono: '"JetBrains Mono", "Fira Code", monospace'
  },

  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px'
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(59, 130, 246, 0.25)'
  },

  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
export default DESIGN_TOKENS;
