import express from 'express';
import crypto from 'crypto';
import db from '../database.js';

const router = express.Router();

// Helper: Hash password with salt
function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

// Helper: Generate secure token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

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

    if (!username || typeof username !== 'string' || username.trim().length < 2) {
      return res.status(400).json({ error: 'O nome de usuário deve ter pelo menos 2 caracteres.' });
    }

    const cleanUsername = username.trim().toLowerCase();
    if (!/^[\p{L}\p{N}_.\-\s]+$/u.test(cleanUsername)) {
      return res.status(400).json({ error: 'O nome de usuário deve conter apenas letras, números, espaço, ponto ou traço.' });
    }

    if (!password || typeof password !== 'string' || password.length < 3) {
      return res.status(400).json({ error: 'A senha deve ter no mínimo 3 caracteres.' });
    }

    // Check if account already exists
    const existing = db.prepare('SELECT id FROM accounts WHERE LOWER(username) = ?').get(cleanUsername);
    if (existing) {
      return res.status(409).json({ error: 'Este nome de usuário já está em uso. Escolha outro ou faça login.' });
    }

    const accountId = `acc_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt);
    const cleanEmail = email && typeof email === 'string' ? email.trim() : null;

    db.prepare(`
      INSERT INTO accounts (id, username, email, password_hash, salt, created_at, last_login_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `).run(accountId, cleanUsername, cleanEmail, passwordHash, salt);

    // Create 30-day session token
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    db.prepare(`
      INSERT INTO auth_sessions (token, account_id, created_at, expires_at)
      VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    `).run(token, accountId, expiresAt);

    res.status(201).json({
      success: true,
      message: 'Conta criada com sucesso!',
      token,
      account: {
        id: accountId,
        username: cleanUsername,
        email: cleanEmail
      },
      profiles: [] // Newly created account starts with 0 profiles (100% clean)
    });
  } catch (err) {
    console.error('Error during account registration:', err);
    res.status(500).json({ error: 'Erro ao registrar conta: ' + err.message });
  }
});

// POST /api/auth/login - Login to isolated account
router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Informe usuário e senha.' });
    }

    const cleanUsername = username.trim().toLowerCase();
    const account = db.prepare(`
      SELECT * FROM accounts WHERE LOWER(username) = ? OR LOWER(email) = ?
    `).get(cleanUsername, cleanUsername);

    if (!account) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos.' });
    }

    const expectedHash = hashPassword(password, account.salt);
    if (account.password_hash !== expectedHash) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos.' });
    }

    // Update last login
    db.prepare('UPDATE accounts SET last_login_at = CURRENT_TIMESTAMP WHERE id = ?').run(account.id);

    // Create session token
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    db.prepare(`
      INSERT INTO auth_sessions (token, account_id, created_at, expires_at)
      VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    `).run(token, account.id, expiresAt);

    // Query profiles belonging exclusively to this account
    const profiles = db.prepare(`
      SELECT 
        u.*,
        (SELECT COUNT(*) FROM study_sessions WHERE user_id = u.id) as total_sessions,
        (SELECT COUNT(*) FROM activity_log WHERE user_id = u.id) as total_activities
      FROM user_profiles u
      WHERE u.account_id = ?
      ORDER BY u.is_default DESC, u.last_active_at DESC
    `).all(account.id);

    res.json({
      success: true,
      message: 'Login realizado com sucesso!',
      token,
      account: {
        id: account.id,
        username: account.username,
        email: account.email
      },
      profiles
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Erro ao fazer login: ' + err.message });
  }
});

// GET /api/auth/me - Check current session and get account's profiles
router.get('/me', (req, res) => {
  try {
    const session = getSessionAccount(req);
    if (!session) {
      return res.json({ authenticated: false, account: null, profiles: [] });
    }

    const profiles = db.prepare(`
      SELECT 
        u.*,
        (SELECT COUNT(*) FROM study_sessions WHERE user_id = u.id) as total_sessions,
        (SELECT COUNT(*) FROM activity_log WHERE user_id = u.id) as total_activities
      FROM user_profiles u
      WHERE u.account_id = ?
      ORDER BY u.is_default DESC, u.last_active_at DESC
    `).all(session.account_id);

    res.json({
      authenticated: true,
      account: {
        id: session.id,
        username: session.username,
        email: session.email
      },
      profiles
    });
  } catch (err) {
    console.error('Error verifying auth/me:', err);
    res.status(500).json({ error: 'Erro ao verificar sessão.' });
  }
});

// POST /api/auth/logout - End session
router.post('/logout', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.headers['x-account-token']) {
      token = req.headers['x-account-token'].trim();
    }

    if (token) {
      db.prepare('DELETE FROM auth_sessions WHERE token = ?').run(token);
    }

    res.json({ success: true, message: 'Sessão encerrada com sucesso.' });
  } catch (err) {
    console.error('Error during logout:', err);
    res.status(500).json({ error: 'Erro ao encerrar sessão.' });
  }
});

export default router;
