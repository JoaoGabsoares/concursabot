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
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    authMethods: ['password', 'google']
  });
});

// Helper: Determina a URL de callback do Google para este host
function getGoogleRedirectUri(req) {
  if (process.env.GOOGLE_REDIRECT_URI) {
    return process.env.GOOGLE_REDIRECT_URI;
  }
  const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  const host = req.headers['x-forwarded-host'] || req.get('host') || 'localhost:3000';
  return `${protocol}://${host}/api/auth/google/callback`;
}

// GET /api/auth/google/url - Retorna a URL de redirecionamento para o frontend
router.get('/google/url', (req, res) => {
  const redirectUri = getGoogleRedirectUri(req);
  const state = 'gabarito_' + Date.now();
  const authInfo = authService.getGoogleAuthUrl(redirectUri, state);
  res.json(authInfo);
});

// GET /api/auth/google/redirect - Redirecionamento direto em tela cheia para o Google Accounts (Gmail)
router.get('/google/redirect', (req, res) => {
  const redirectUri = getGoogleRedirectUri(req);
  const state = 'gabarito_' + Date.now();
  const authInfo = authService.getGoogleAuthUrl(redirectUri, state);
  return res.redirect(authInfo.url);
});

// GET /api/auth/google/dev-screen - Tela completa simulada do Google para ambiente de desenvolvimento local
router.get('/google/dev-screen', (req, res) => {
  const redirectUri = req.query.redirect_uri || getGoogleRedirectUri(req);
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fazer login nas Contas do Google — Gabarito.AI</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #f0f4f9;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 16px;
        }
        .card {
          background: #ffffff;
          border-radius: 28px;
          padding: 40px 36px;
          max-width: 448px;
          width: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .google-logo {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }
        h1 {
          font-family: 'Google Sans', sans-serif;
          font-size: 24px;
          color: #1f1f1f;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .subtitle {
          font-size: 15px;
          color: #444746;
          margin-bottom: 28px;
        }
        .dev-badge {
          background: #e8f0fe;
          color: #1a73e8;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .field {
          margin-bottom: 20px;
        }
        label {
          display: block;
          font-size: 13px;
          color: #444746;
          margin-bottom: 6px;
          font-weight: 500;
        }
        input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #747775;
          border-radius: 8px;
          font-size: 16px;
          color: #1f1f1f;
          outline: none;
          transition: border-color 0.2s;
        }
        input:focus {
          border-color: #0b57d0;
          border-width: 2px;
          padding: 13px 15px;
        }
        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
        }
        .btn-cancel {
          background: none;
          border: none;
          color: #0b57d0;
          font-family: 'Google Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          padding: 10px 12px;
          border-radius: 20px;
          text-decoration: none;
        }
        .btn-cancel:hover {
          background: #e8f0fe;
        }
        .btn-submit {
          background: #0b57d0;
          color: #ffffff;
          border: none;
          font-family: 'Google Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          padding: 10px 24px;
          border-radius: 20px;
          transition: background 0.2s;
        }
        .btn-submit:hover {
          background: #0842a0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <svg class="google-logo" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
        <h1>Fazer login</h1>
        <p class="subtitle">Continuar no Gabarito.AI</p>

        <div class="dev-badge">
          🛡️ Modo de Desenvolvimento Local / Google OAuth 2.0
        </div>

        <form action="/api/auth/google/dev-callback" method="POST">
          <input type="hidden" name="redirect_uri" value="${redirectUri}">
          <div class="field">
            <label for="email">E-mail ou telefone do Google (@gmail.com)</label>
            <input type="email" id="email" name="email" required placeholder="exemplo@gmail.com" autofocus>
          </div>
          <div class="field">
            <label for="name">Nome completo</label>
            <input type="text" id="name" name="name" placeholder="Aluno Concurseiro">
          </div>
          <div class="actions">
            <a href="/" class="btn-cancel">Cancelar</a>
            <button type="submit" class="btn-submit">Avançar</button>
          </div>
        </form>
      </div>
    </body>
    </html>
  `);
});

// POST /api/auth/google/dev-callback - Processa o formulário de desenvolvimento em tela cheia
router.post('/google/dev-callback', async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).send('E-mail inválido.');
    }
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = (name || cleanEmail.split('@')[0]).trim();
    const fakeSub = 'g_dev_' + Math.abs(cleanEmail.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0));

    const mockCode = `mock_code_:${cleanEmail}:${cleanName}:${fakeSub}`;
    const googleUser = await authService.exchangeGoogleCode(mockCode, '');
    const result = await authService.loginOrCreateGoogleUser(googleUser);

    return res.redirect(`/?auth_token=${result.token}&google_auth=success`);
  } catch (err) {
    console.error('[Google Dev Callback Error]:', err.message);
    return res.redirect(`/?auth_error=${encodeURIComponent(err.message)}`);
  }
});

// GET /api/auth/google/callback - Callback oficial do Google após login em tela cheia no accounts.google.com
router.get('/google/callback', async (req, res) => {
  try {
    const { code, error } = req.query;

    if (error) {
      console.warn('[Google Callback Access Denied]:', error);
      return res.redirect(`/?auth_error=${encodeURIComponent('Acesso cancelado na Conta Google.')}`);
    }

    if (!code) {
      return res.redirect(`/?auth_error=${encodeURIComponent('Código de autorização não recebido do Google.')}`);
    }

    const redirectUri = getGoogleRedirectUri(req);
    const googleUser = await authService.exchangeGoogleCode(code, redirectUri);
    const result = await authService.loginOrCreateGoogleUser(googleUser);

    return res.redirect(`/?auth_token=${result.token}&google_auth=success`);
  } catch (err) {
    console.error('[Google Callback Error]:', err.message);
    return res.redirect(`/?auth_error=${encodeURIComponent(err.message || 'Falha ao autenticar com a Conta Google.')}`);
  }
});

// POST /api/auth/google - Authenticate with Google ID token (API direct)
router.post('/google', async (req, res) => {
  try {
    const credential = req.body.credential || req.body.token || req.body.id_token || req.body.idToken;

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
