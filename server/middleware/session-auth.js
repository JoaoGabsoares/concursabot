/**
 * session-auth.js
 * 
 * Middleware de Autenticação de Sessão Zero-Trust (Secure-by-Default).
 * Intercepta todas as rotas em /api/* e exige obrigatoriamente um token de sessão
 * válido (Authorization: Bearer <token> ou x-account-token) emitido por AuthService,
 * exceto para endpoints estritamente públicos (login, registro, healthcheck).
 */

import { authService } from '../services/AuthService.js';
import db from '../database.js';

// Rotas públicas expressas que não exigem token de autenticação
const PUBLIC_API_ROUTES = new Set([
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/google',
  '/api/auth/config',
  '/api/auth/status',
  '/api/health'
]);

export function sessionAuthMiddleware(req, res, next) {
  // 1. Obter o path completo da API (ex: /api/auth/login ou /api/study-room/sessions/1/ask)
  const rawPath = ((req.baseUrl || '') + (req.path || '')).split('?')[0];
  const fullPath = rawPath.length > 1 && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath;

  // 2. Rotas públicas autorizadas sem exigência de token
  if (PUBLIC_API_ROUTES.has(fullPath)) {
    return next();
  }

  // 3. Extração do token Bearer ou x-account-token
  const authHeader = req.headers['authorization'];
  let token = null;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else if (req.headers['x-account-token']) {
    token = String(req.headers['x-account-token']).trim();
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      authenticated: false,
      error: 'Acesso não autorizado. É necessário estar autenticado para acessar este recurso da plataforma.'
    });
  }

  // 4. Validação criptográfica do token na tabela auth_sessions
  try {
    const sessionData = authService.validateToken(token);
    if (!sessionData || !sessionData.account) {
      return res.status(401).json({
        success: false,
        authenticated: false,
        error: 'Sessão expirada ou inválida. Por favor, realize o login novamente.'
      });
    }

    // 5. Injeta os dados da conta autenticada na requisição
    req.account = sessionData.account;
    req.profiles = sessionData.profiles;
    req.accountId = sessionData.account.id;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      authenticated: false,
      error: 'Erro na validação da sessão de autenticação.'
    });
  }
}

/**
 * Helper Anti-IDOR: Retorna estritamente o user_id pertencente à conta autenticada.
 * Se o cliente enviar um x-user-id forjado pertencente a outro aluno,
 * a tentativa de spoofing é neutralizada e o perfil da própria conta é retornado.
 */
export function getAuthenticatedUserId(req) {
  const accountId = req.account?.id || req.accountId;
  
  const requestedId = req.headers['x-user-id'] || 
                      req.headers['x-profile-id'] || 
                      req.query?.user_id || 
                      req.body?.userId || 
                      req.body?.user_id;

  if (accountId) {
    if (requestedId && typeof requestedId === 'string' && requestedId.trim()) {
      const cleanId = requestedId.trim();
      if (cleanId === accountId) return cleanId;

      // Verificar se o requestedId pertence aos perfis da conta autenticada
      const ownedProfile = db.prepare('SELECT id FROM user_profiles WHERE id = ? AND account_id = ?').get(cleanId, accountId);
      if (ownedProfile) return ownedProfile.id;
    }

    // Se nenhum ID válido ou se tentou ID de outro usuário, usar o primeiro perfil da própria conta
    const defaultProfile = db.prepare('SELECT id FROM user_profiles WHERE account_id = ? ORDER BY is_default DESC, last_active_at DESC LIMIT 1').get(accountId);
    if (defaultProfile) return defaultProfile.id;

    return accountId;
  }

  return requestedId ? String(requestedId).trim() : 'anonymous_user';
}

