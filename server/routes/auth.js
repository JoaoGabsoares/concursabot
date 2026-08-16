import express from 'express';
import { authService } from '../services/AuthService.js';
import db from '../database.js';

const router = express.Router();

// Helper: Extract session token from request
export function getSessionAccount(req) {
  try {
    const authHeader = req.headers['authorization'];
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.headers['x-account-token']) {
      token = req.headers['x-account-token'].trim();
    }

    if (!token) return null;

    const session = db.prepare(`
      SELECT s.token, s.account_id, s.expires_at, a.id, a.username, a.email
      FROM auth_sessions s
      JOIN accounts a ON a.id = s.account_id
      WHERE s.token = ? AND s.expires_at > CURRENT_TIMESTAMP
    `).get(token);

    return session || null;
  } catch (err) {
    console.error('Error verifying session:', err);
    return null;
  }
}

// GET /api/auth/status - Backwards compatibility
router.get('/status', (req, res) => {
  res.json({
    pinRequired: false,
    authEnabled: true,
    platform: 'Gabarito.AI Zero-Cost Multi-Tenant'
  });
});

// POST /api/auth/register - Register new isolated account
router.post('/register', (req, res) => {
  try {
    const { username, password, email } = req.body;
    const result = authService.register(username, password, email);
    res.status(201).json({
      success: true,
      message: 'Conta criada com sucesso!',
      ...result
    });
  } catch (err) {
    const isClientError = err.message.includes('obrigatórios') || err.message.includes('caracteres') || err.message.includes('cadastrado');
    res.status(isClientError ? 400 : 500).json({ error: err.message });
  }
});

// POST /api/auth/login - Login to isolated account
router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const result = authService.login(username, password);
    res.json({
      success: true,
      message: 'Login realizado com sucesso!',
      ...result
    });
  } catch (err) {
    const isUnauthorized = err.message.includes('incorretos');
    res.status(isUnauthorized ? 401 : 400).json({ error: err.message });
  }
});

// GET /api/auth/me - Verify current session & return active account
router.get('/me', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.headers['x-account-token']) {
      token = req.headers['x-account-token'].trim();
    }

    if (!token) {
      return res.status(401).json({ authenticated: false, error: 'Sessão não informada.' });
    }

    const data = authService.validateToken(token);
    if (!data) {
      return res.status(401).json({ authenticated: false, error: 'Sessão expirada ou inválida.' });
    }

    res.json({
      authenticated: true,
      account: data.account,
      profiles: data.profiles
    });
  } catch (err) {
    console.error('Error fetching session profile:', err);
    res.status(500).json({ error: 'Erro ao validar sessão.' });
  }
});

// POST /api/auth/logout - Terminate session
router.post('/logout', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.headers['x-account-token']) {
      token = req.headers['x-account-token'].trim();
    }

    authService.logout(token);
    res.json({ success: true, message: 'Sessão encerrada com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao encerrar sessão.' });
  }
});

export default router;
