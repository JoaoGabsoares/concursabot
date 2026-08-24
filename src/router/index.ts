import { useState, useEffect, useCallback } from 'react';
import { ActiveTab } from '../types';

export interface RouteState {
  tab: ActiveTab;
  path: string;
  paramId?: number | null;
  subRoute?: string;
}

export const ROUTE_MAP: Record<string, ActiveTab> = {
  '': 'dashboard',
  'dashboard': 'dashboard',
  'ciclos': 'ciclos',
  'ciclo-estudos': 'ciclos',
  'study-cycle': 'ciclos',
  'estudo': 'study',
  'study': 'study',
  'study-room': 'study',
  'leitor': 'reader',
  'reader': 'reader',
  'simulados': 'simulados',
  'erros': 'erros',
  'caderno-erros': 'erros',
  'error-notebook': 'erros',
  'leiseca': 'leiseca',
  'redacao': 'redacao',
  'aproveitamento': 'aproveitamento',
  'edital': 'edital',
  'flashcards': 'flashcards',
  'guia': 'guia',
  'guia-metodo': 'guia',
  'sobre': 'sobre',
  'configuracoes': 'settings',
  'settings': 'settings',
  'settings_ajustes': 'settings_ajustes',
  'settings_guia': 'settings_guia',
  'settings_sobre': 'settings_sobre',
};

export const TAB_TO_PATH: Record<ActiveTab, string> = {
  'dashboard': '/dashboard',
  'ciclos': '/ciclos',
  'study-cycle': '/ciclos',
  'study': '/estudo',
  'study-room': '/estudo',
  'reader': '/leitor',
  'simulados': '/simulados',
  'erros': '/erros',
  'error-notebook': '/erros',
  'leiseca': '/leiseca',
  'redacao': '/redacao',
  'aproveitamento': '/aproveitamento',
  'edital': '/edital',
  'flashcards': '/flashcards',
  'guia': '/guia',
  'sobre': '/sobre',
  'settings': '/configuracoes',
  'settings_ajustes': '/configuracoes',
  'settings_guia': '/guia',
  'settings_sobre': '/sobre',
};

/**
 * Converte o Hash da URL (#/leitor/10016) no RouteState estruturado
 */
export function parseRoute(hashString: string): RouteState {
  const clean = (hashString || '').replace(/^#\/?/, '').trim();
  const segments = clean.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { tab: 'dashboard', path: '/dashboard', paramId: null };
  }

  const primarySegment = segments[0].toLowerCase();
  
  // Rota com parâmetro ID: ex: #/reader/10016 ou #/leitor/10016
  if ((primarySegment === 'reader' || primarySegment === 'leitor') && segments.length >= 2) {
    const parsedId = parseInt(segments[1], 10);
    return {
      tab: 'reader',
      path: `/${primarySegment}/${segments[1]}`,
      paramId: isNaN(parsedId) ? null : parsedId
    };
  }

  const matchedTab = ROUTE_MAP[primarySegment] || 'dashboard';
  const canonicalPath = TAB_TO_PATH[matchedTab] || `/${primarySegment}`;

  return {
    tab: matchedTab,
    path: canonicalPath,
    paramId: null,
    subRoute: segments.slice(1).join('/')
  };
}

/**
 * Retorna o link formatado com hash para uso em tags <a href="...">
 */
export function getHrefForTab(tab: ActiveTab, paramId?: number | string): string {
  const basePath = TAB_TO_PATH[tab] || `/${tab}`;
  if (paramId) {
    return `#${basePath}/${paramId}`;
  }
  return `#${basePath}`;
}

/**
 * Navega programaticamente para uma rota ou aba sem recarregar a página
 */
export function navigateTo(target: string | ActiveTab, paramId?: number | string): void {
  let targetHref = '';

  if (typeof target === 'string' && target.startsWith('/')) {
    targetHref = `#${target}`;
  } else if (target in TAB_TO_PATH) {
    targetHref = getHrefForTab(target as ActiveTab, paramId);
  } else {
    targetHref = `#/${target}${paramId ? `/${paramId}` : ''}`;
  }

  if (window.location.hash !== targetHref) {
    window.location.hash = targetHref;
  }
}

/**
 * Hook do React para sincronizar o estado da aplicação com a barra de endereços do navegador
 */
export function useAppRouter(): {
  route: RouteState;
  navigate: (tabOrPath: ActiveTab | string, paramId?: number | string) => void;
} {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window !== 'undefined') {
      return parseRoute(window.location.hash);
    }
    return { tab: 'dashboard', path: '/dashboard', paramId: null };
  });

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash));
    };

    // Sincronizar rota inicial
    if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/') {
      window.location.hash = '#/dashboard';
    } else {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((tabOrPath: ActiveTab | string, paramId?: number | string) => {
    navigateTo(tabOrPath, paramId);
  }, []);

  return { route, navigate };
}
