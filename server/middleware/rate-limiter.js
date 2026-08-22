// Sliding-Window In-Memory Rate Limiter Middleware for Express

export class RateLimiter {
  constructor(windowMs = 60000, maxRequests = 60, message = 'Muitas requisições. Aguarde um momento.') {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.message = message;
    this.clients = new Map(); // ip -> array of timestamps

    // Cleanup old timestamps every minute
    setInterval(() => this.cleanup(), 60000).unref();
  }

  cleanup() {
    const now = Date.now();
    for (const [ip, timestamps] of this.clients.entries()) {
      const valid = timestamps.filter(t => now - t < this.windowMs);
      if (valid.length === 0) {
        this.clients.delete(ip);
      } else {
        this.clients.set(ip, valid);
      }
    }
  }

  middleware() {
    return (req, res, next) => {
      // Ignora rate limiter em suítes de testes automatizados (bloqueado estritamente em produção)
      if (process.env.NODE_ENV === 'test' || (process.env.NODE_ENV !== 'production' && req.headers['x-test-suite'] === 'true')) {
        return next();
      }

      const ip = req.ip || req.socket.remoteAddress || '127.0.0.1';
      const now = Date.now();

      if (!this.clients.has(ip)) {
        this.clients.set(ip, []);
      }

      const timestamps = this.clients.get(ip);
      const recent = timestamps.filter(t => now - t < this.windowMs);

      if (recent.length >= this.maxRequests) {
        const retryAfter = Math.ceil((this.windowMs - (now - recent[0])) / 1000);
        res.setHeader('Retry-After', retryAfter);
        return res.status(429).json({
          error: this.message,
          retryAfterSeconds: retryAfter
        });
      }

      recent.push(now);
      this.clients.set(ip, recent);

      res.setHeader('X-RateLimit-Limit', this.maxRequests);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, this.maxRequests - recent.length));

      next();
    };
  }
}

// 1. Limiter Geral da API: 120 requisições por minuto por IP
export const generalLimiter = new RateLimiter(
  60000,
  120,
  'Limite de requisições excedido. Por favor, aguarde alguns instantes.'
).middleware();

// 2. Limiter Estrito para Rotas de IA (Gemini): 30 requisições por minuto por IP
export const aiRateLimiter = new RateLimiter(
  60000,
  30,
  'Muitas requisições de Inteligência Artificial em sequência. Aguarde alguns segundos para continuar.'
).middleware();

// 3. Limiter Anti-Brute Force para Rotas de Autenticação: 15 requisições por minuto por IP
export const authRateLimiter = new RateLimiter(
  60000,
  15,
  'Muitas tentativas de autenticação em sequência. Por segurança, aguarde um minuto para tentar novamente.'
).middleware();
