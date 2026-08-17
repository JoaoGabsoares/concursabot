/**
 * session-auth.js
 * 
 * Middleware de Autenticação de Sessão Zero-Trust (Secure-by-Default).
 * Intercepta todas as rotas em /api/* e exige obrigatoriamente um token de sessão
 * válido (Authorization: Bearer <token> ou x-account-token) emitido por AuthService,
 * exceto para endpoints estritamente públicos (login, registro, healthcheck).
 */

import { authService } from '../services/AuthService.js';

// Rotas públicas expressas que não exigem token de autenticação
const PUBLIC_API_ROUTES = new Set([
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/status',
  '/api/auth/verify-invite',
  '/api/verify-pin',
  '/api/health'
]);

export function sessionAuthMiddleware(req, res, next) {
  // 1. Obter o path completo da API (ex: /api/auth/login ou /api/study-room/sessions/1/ask)
  const fullPath = ((req.baseUrl || '') + (req.path || '')).split('?')[0];

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
