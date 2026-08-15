// Middleware e Gestor de Autenticação por Códigos de Convite (Invite Gate)

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

export function validateInviteCode(code) {
  if (!isInviteRequired()) return true;
  if (!code) return false;
  const allowed = getAllowedCodes();
  const normalized = String(code).trim().toUpperCase();
  return allowed.includes(normalized);
}

export function inviteAuthMiddleware(req, res, next) {
  // Se não houver exigência de convite, o acesso é livre
  if (!isInviteRequired()) {
    return next();
  }

  // Permite acesso livre aos arquivos estáticos do frontend
  if (!req.path.startsWith('/api/')) {
    return next();
  }

  // Rotas públicas de verificação de status e saúde
  const publicRoutes = [
    '/api/health',
    '/api/verify-pin',
    '/api/auth/status',
    '/api/auth/verify-invite'
  ];

  if (publicRoutes.includes(req.path)) {
    return next();
  }

  const provided = req.headers['x-invite-pin'] || req.headers['x-invite-code'] || req.query.pin || req.query.invite;

  if (!validateInviteCode(provided)) {
    return res.status(401).json({
      error: 'Acesso restrito. Código de convite ou PIN inválido.',
      require_invite: true,
      require_pin: true
    });
  }

  next();
}
