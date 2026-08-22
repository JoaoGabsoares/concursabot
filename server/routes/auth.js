import express from 'express';
import { authService } from '../services/AuthService.js';
import db from '../database.js';

const router = express.Router();

// Helper: Extract session account from request
export function getSessionAccount(req) {
  try {
    if (req.account && req.account.id) {
      return {
        id: req.account.id,
        account_id: req.account.id,
        username: req.account.username,
        email: req.account.email
      };
    }

    const authHeader = req.headers['authorization'];
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.headers['x-account-token']) {
      token = req.headers['x-account-token'].trim();
    }

    if (!token) return null;

    const data = authService.validateToken(token);
    if (!data || !data.account) return null;

    return {
      id: data.account.id,
      account_id: data.account.id,
      username: data.account.username,
      email: data.account.email
    };
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
    let { username, password, email, name } = req.body;
    if (!username && email) {
      // Derive clean username from email or name
      const prefix = (name || email.split('@')[0]).replace(/[^a-zA-Z0-9._-]/g, '');
      username = prefix.length >= 3 ? prefix : `aluno_${Date.now().toString().slice(-4)}`;
    }
    const result = authService.register(username, password, email);
    res.status(201).json({
      success: true,
      message: 'Conta criada com sucesso!',
      ...result
    });
  } catch (err) {
    const isClientError = err.message.includes('obrigatórios') || 
                          err.message.includes('caracteres') || 
                          err.message.includes('cadastrado') ||
                          err.message.includes('uso') ||
                          err.message.includes('válido') ||
                          err.message.includes('informe');
    res.status(isClientError ? 400 : 500).json({ error: err.message });
  }
});

// GET /api/auth/config - Expose public auth configuration (e.g. Google Client ID)
router.get('/config', (req, res) => {
  res.json({
    googleClientId: process.env.GOOGLE_CLIENT_ID || '1048291038472-mockclientid.apps.googleusercontent.com',
    authMethods: ['password', 'google']
  });
});

// POST /api/auth/google - Authenticate with Google Identity Services (1 Click)
router.post('/google', async (req, res) => {
  try {
    const credential = req.body.credential || 
                       req.body.token || 
                       req.body.id_token || 
                       req.body.idToken || 
                       req.body.access_token || 
                       (req.body.email ? req.body : null);

    if (!credential) {
      return res.status(400).json({ error: 'Credencial do Google não fornecida.' });
    }

    const result = await authService.loginWithGoogle(credential);
    res.json({
      success: true,
      message: 'Autenticado com a Conta Google com sucesso!',
      ...result
    });
  } catch (err) {
    console.error('[Google Auth Error]:', err.message);
    res.status(400).json({ error: err.message || 'Falha ao autenticar com o Google.' });
  }
});

// POST /api/auth/login - Login to isolated account
router.post('/login', (req, res) => {
  try {
    const identifier = req.body.email || req.body.username || req.body.usernameOrEmail;
    const password = req.body.password;
    const result = authService.login(identifier, password);
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
