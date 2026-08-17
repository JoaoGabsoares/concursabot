import crypto from 'crypto';

export function getAllowedCodes() {
  const envCodes = process.env.INVITE_CODES || process.env.INVITE_PIN || '';
  if (envCodes.trim()) {
    return envCodes
      .split(',')
      .map(c => c.trim().toUpperCase())
      .filter(Boolean);
  }
  // Se estiver em produção ou se nenhum código for definido no .env, tem códigos de demonstração
  if (process.env.NODE_ENV === 'production') {
    return ['CONCURSA2026', 'MILITAR-VIP', 'RECEITA-PRO'];
  }
  return [];
}

export function isInviteRequired() {
  const codes = getAllowedCodes();
  return codes.length > 0;
}

// Comparação em tempo constante contra Timing Attacks
function safeCompare(a, b) {
  const bufA = Buffer.from(String(a || ''));
  const bufB = Buffer.from(String(b || ''));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function validateInviteCode(code) {
  if (!isInviteRequired()) return true;
  if (!code) return false;
  const allowed = getAllowedCodes();
  const normalized = String(code).trim().toUpperCase();
  return allowed.some(allowedCode => safeCompare(normalized, allowedCode));
}

export function inviteAuthMiddleware(req, res, next) {
  // Se não houver exigência de convite, o acesso é livre
  if (!isInviteRequired()) {
    return next();
  }

  // 1. Obter o path completo da API
  const rawPath = ((req.baseUrl || '') + (req.path || '')).split('?')[0];
  const fullPath = rawPath.length > 1 && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath;

  // Permite acesso livre aos arquivos estáticos fora de /api
  if (!fullPath.startsWith('/api')) {
    return next();
  }

  // Rotas públicas de autenticação, verificação de status e saúde
  const publicRoutes = [
    '/api/health',
    '/api/verify-pin',
    '/api/auth/status',
    '/api/auth/verify-invite',
    '/api/auth/register',
    '/api/auth/login'
  ];

  if (publicRoutes.includes(fullPath)) {
    return next();
  }

  // Se o usuário possui token de autenticação de sessão, delega a validação para sessionAuthMiddleware
  const authHeader = req.headers['authorization'];
  const hasSessionToken = (authHeader && authHeader.startsWith('Bearer ')) || req.headers['x-account-token'];
  if (hasSessionToken) {
    return next();
  }

  const provided = req.headers['x-invite-pin'] || req.headers['x-invite-code'] || req.query.pin || req.query.invite;

  if (validateInviteCode(provided)) {
    return next();
  }

  return res.status(401).json({
    error: 'Acesso restrito. Código de convite ou PIN inválido.',
    require_invite: true,
    require_pin: true
  });
}
