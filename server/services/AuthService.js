/**
 * AuthService.js
 * 
 * Serviço Orientado a Objetos para gestão de contas de usuário, autenticação segura
 * com derivação criptográfica Scrypt, gerenciamento de sessões e perfis de estudo.
 * 
 * Padrões: Single Responsibility (SOLID), Clean Code e Legibilidade.
 */

import crypto from 'crypto';
import db from '../database.js';

export class AuthService {
  /**
   * Gera um salt criptográfico aleatório.
   */
  generateSalt() {
    return crypto.randomBytes(16).toString('hex');
  }

  /**
   * Gera um token de sessão criptográfico seguro.
   */
  generateSessionToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  /**
   * Hasheia a senha usando Scrypt seguro.
   * @param {string} password 
   * @param {string} salt 
   * @returns {string} Hash hexadecimal
   */
  hashPassword(password, salt) {
    return crypto.scryptSync(password, salt, 64).toString('hex');
  }

  /**
   * Registra uma nova conta de usuário.
   * @param {string} username 
   * @param {string} password 
   * @param {string} email 
   * @returns {object} { account, token, profiles }
   */
  register(username, password, email) {
    if (!username || !password || !email) {
      throw new Error('Nome de usuário, e-mail e senha são obrigatórios.');
    }

    if (password.length < 8) {
      throw new Error('A senha deve ter no mínimo 8 caracteres.');
    }

    const cleanUsername = username.trim().toLowerCase();
    const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      throw new Error('Por favor, informe um endereço de e-mail válido.');
    }

    const usernameExists = db.prepare('SELECT id FROM accounts WHERE LOWER(username) = ?').get(cleanUsername);
    if (usernameExists) {
      throw new Error('Este nome de usuário já está em uso. Por favor, escolha outro.');
    }

    const emailExists = db.prepare('SELECT id FROM accounts WHERE LOWER(email) = ?').get(cleanEmail);
    if (emailExists) {
      throw new Error('Este e-mail já está cadastrado em outra conta. Faça login ou utilize outro e-mail.');
    }

    const salt = this.generateSalt();
    const passwordHash = this.hashPassword(password, salt);
    const accountId = 'acc_' + Date.now() + '_' + crypto.randomBytes(4).toString('hex');

    db.prepare(`
      INSERT INTO accounts (id, username, email, password_hash, salt, created_at, last_login_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `).run(accountId, cleanUsername, cleanEmail, passwordHash, salt);

    const token = this.generateSessionToken();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    db.prepare(`
      INSERT INTO auth_sessions (token, account_id, created_at, expires_at)
      VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    `).run(token, accountId, expiresAt);

    return {
      token,
      account: {
        id: accountId,
        username: cleanUsername,
        email: cleanEmail
      },
      profiles: []
    };
  }

  /**
   * Realiza login autenticado.
   * @param {string} usernameOrEmail 
   * @param {string} password 
   * @returns {object} { account, token, profiles }
   */
  login(usernameOrEmail, password) {
    if (!usernameOrEmail || !password) {
      throw new Error('Informe o usuário e a senha.');
    }

    const cleanInput = usernameOrEmail.trim().toLowerCase();
    const account = db.prepare(`
      SELECT * FROM accounts WHERE LOWER(username) = ? OR LOWER(email) = ?
    `).get(cleanInput, cleanInput);

    if (!account) {
      throw new Error('Usuário ou senha incorretos.');
    }

    // 1. Checar se a conta está temporariamente bloqueada por força bruta
    if (account.locked_until) {
      const lockExpiry = new Date(account.locked_until).getTime();
      const now = Date.now();
      if (lockExpiry > now) {
        const remainingMinutes = Math.max(1, Math.ceil((lockExpiry - now) / 60000));
        throw new Error(`Conta temporariamente bloqueada devido a 5 tentativas inválidas consecutivas. Tente novamente em ${remainingMinutes} minuto(s).`);
      } else {
        // Se a janela de bloqueio de 15 minutos já expirou, reseta o estado para nova contagem
        account.failed_attempts = 0;
        account.locked_until = null;
        db.prepare('UPDATE accounts SET failed_attempts = 0, locked_until = NULL WHERE id = ?')
          .run(account.id);
      }
    }

    const expectedHash = this.hashPassword(password, account.salt);
    const hashBuf = Buffer.from(account.password_hash, 'utf8');
    const expectedBuf = Buffer.from(expectedHash, 'utf8');
    const isPasswordValid = hashBuf.length === expectedBuf.length && crypto.timingSafeEqual(hashBuf, expectedBuf);

    if (!isPasswordValid) {
      const currentAttempts = (account.failed_attempts || 0) + 1;
      if (currentAttempts >= 5) {
        const lockUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString();
        db.prepare('UPDATE accounts SET failed_attempts = ?, locked_until = ? WHERE id = ?')
          .run(currentAttempts, lockUntil, account.id);
        throw new Error('Conta bloqueada por 15 minutos devido a 5 tentativas incorretas consecutivas.');
      } else {
        db.prepare('UPDATE accounts SET failed_attempts = ? WHERE id = ?')
          .run(currentAttempts, account.id);
        const remaining = 5 - currentAttempts;
        throw new Error(`Usuário ou senha incorretos. (${remaining} tentativa(s) restante(s) antes do bloqueio de 15 minutos)`);
      }
    }

    // 2. Login bem-sucedido: zera falhas, destrava conta e atualiza last_login_at
    db.prepare(`
      UPDATE accounts 
      SET failed_attempts = 0, locked_until = NULL, last_login_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `).run(account.id);

    const token = this.generateSessionToken();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    db.prepare(`
      INSERT INTO auth_sessions (token, account_id, created_at, expires_at)
      VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    `).run(token, account.id, expiresAt);

    const profiles = db.prepare(`
      SELECT * FROM user_profiles WHERE account_id = ? ORDER BY is_default DESC, last_active_at DESC
    `).all(account.id);

    return {
      token,
      account: {
        id: account.id,
        username: account.username,
        email: account.email
      },
      profiles
    };
  }

  /**
   * Valida um token de sessão existente.
   * @param {string} token 
   * @returns {object|null}
   */
  validateToken(token) {
    if (!token) return null;

    const session = db.prepare(`
      SELECT s.token, s.account_id, a.username, a.email
      FROM auth_sessions s
      JOIN accounts a ON s.account_id = a.id
      WHERE s.token = ? AND datetime(s.expires_at) > datetime('now')
    `).get(token);

    if (!session) return null;

    const profiles = db.prepare(`
      SELECT * FROM user_profiles WHERE account_id = ? ORDER BY last_active_at DESC
    `).all(session.account_id);

    return {
      account: {
        id: session.account_id,
        username: session.username,
        email: session.email
      },
      profiles
    };
  }

  /**
   * Encerra a sessão atual.
   * @param {string} token 
   */
  logout(token) {
    if (token) {
      db.prepare('DELETE FROM auth_sessions WHERE token = ?').run(token);
    }
    return { success: true };
  }

  /**
   * Constrói a URL oficial de autorização do Google OAuth 2.0.
   * @param {string} redirectUri 
   * @param {string} state 
   * @returns {{ url: string, isConfigured: boolean }}
   */
  getGoogleAuthUrl(redirectUri, state = 'gabarito_oauth_state') {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    const isRealConfig = clientId && 
                         !clientId.includes('mockclientid') && 
                         !clientId.includes('seu_client_id') && 
                         clientSecret &&
                         !clientSecret.includes('seu_client_secret');

    if (!isRealConfig) {
      // Modo de desenvolvimento local (tela simulada em tela cheia)
      return {
        url: `/api/auth/google/dev-screen?state=${encodeURIComponent(state)}&redirect_uri=${encodeURIComponent(redirectUri)}`,
        isConfigured: false
      };
    }

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      access_type: 'offline',
      state: state,
      prompt: 'select_account'
    });

    return {
      url: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
      isConfigured: true
    };
  }

  /**
   * Realiza a troca do Authorization Code por tokens e obtém dados do perfil no Google.
   * @param {string} code 
   * @param {string} redirectUri 
   * @returns {Promise<{ email: string, name: string, sub: string, picture: string|null }>}
   */
  async exchangeGoogleCode(code, redirectUri) {
    if (!code) {
      throw new Error('Código de autorização do Google não informado.');
    }

    // Suporte a mock em testes ou dev screen
    if (code.startsWith('mock_code_')) {
      const parts = code.split(':');
      const email = (parts[1] || 'aluno.concurso@gmail.com').toLowerCase();
      const name = parts[2] || email.split('@')[0];
      const sub = parts[3] || 'google_' + Date.now();
      return {
        email,
        name,
        sub,
        picture: 'https://lh3.googleusercontent.com/a/default-user'
      };
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error('Google OAuth não configurado no servidor (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET ausentes).');
    }

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    });

    if (!tokenResponse.ok) {
      const errBody = await tokenResponse.text();
      console.error('[Google Token Exchange Error]:', errBody);
      throw new Error('Falha ao trocar código de autorização com os servidores do Google.');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error('Servidor do Google não retornou access_token.');
    }

    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!userInfoResponse.ok) {
      throw new Error('Falha ao obter perfil do usuário na API do Google.');
    }

    const userData = await userInfoResponse.json();
    if (!userData.email) {
      throw new Error('Não foi possível obter o e-mail da Conta Google.');
    }

    return {
      email: userData.email.toLowerCase(),
      name: userData.name || userData.given_name || userData.email.split('@')[0],
      sub: userData.sub,
      picture: userData.picture || null
    };
  }

  /**
   * Valida o token de identidade JWT emitido pelo Google.
   * @param {string} credential 
   */
  async verifyGoogleToken(credential) {
    if (!credential || typeof credential !== 'string') {
      throw new Error('Token de autenticação do Google não fornecido ou em formato inválido.');
    }

    // Ambiente de testes automatizados ou token mock
    if (credential.startsWith('mock_google_')) {
      const parts = credential.split(':');
      return {
        email: (parts[1] || 'google_tester@gmail.com').toLowerCase(),
        name: parts[2] || 'Aluno Google Tester',
        sub: parts[3] || 'google_sub_' + Date.now(),
        picture: 'https://lh3.googleusercontent.com/a/mock'
      };
    }

    // Validação estrita via endpoint oficial do Google tokeninfo
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const payload = await res.json();
        if (payload.email) {
          return {
            email: payload.email.toLowerCase(),
            name: payload.name || payload.given_name || payload.email.split('@')[0],
            sub: payload.sub,
            picture: payload.picture || null
          };
        }
      }
    } catch (e) {
      console.warn('[Google Verify Warning]:', e.message);
    }

    throw new Error('Falha ao validar credenciais da Conta Google. Verifique se o token é válido e foi emitido pelo Google.');
  }

  /**
   * Provisiona ou faz login de um usuário autenticado pelo Google.
   * @param {{ email: string, name: string, sub: string, picture: string|null }} googleUser 
   */
  async loginOrCreateGoogleUser(googleUser) {
    const cleanEmail = googleUser.email.trim().toLowerCase();

    // 1. Procurar conta existente por email ou google_id
    let account = db.prepare(`
      SELECT * FROM accounts 
      WHERE LOWER(email) = ? OR (google_id IS NOT NULL AND google_id = ?)
    `).get(cleanEmail, googleUser.sub);

    if (!account) {
      // 2. Criar nova conta provisionada via Google
      const baseUsername = cleanEmail.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
      let finalUsername = baseUsername;
      
      const existingUser = db.prepare('SELECT id FROM accounts WHERE LOWER(username) = ?').get(finalUsername);
      if (existingUser) {
        finalUsername = `${baseUsername}_${Math.floor(1000 + Math.random() * 9000)}`;
      }

      const salt = this.generateSalt();
      const passwordHash = this.hashPassword(crypto.randomBytes(32).toString('hex'), salt);
      const accountId = 'acc_g_' + Date.now() + '_' + crypto.randomBytes(4).toString('hex');

      db.prepare(`
        INSERT INTO accounts (id, username, email, password_hash, salt, google_id, avatar_url, created_at, last_login_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `).run(accountId, finalUsername, cleanEmail, passwordHash, salt, googleUser.sub, googleUser.picture);

      account = {
        id: accountId,
        username: finalUsername,
        email: cleanEmail,
        google_id: googleUser.sub,
        avatar_url: googleUser.picture
      };

      // Criar perfil padrão inicial para a nova conta
      const profileId = 'prof_g_' + Date.now() + '_' + crypto.randomBytes(4).toString('hex');
      db.prepare(`
        INSERT INTO user_profiles (id, account_id, name, avatar_emoji, active_career_id, is_default, created_at, target_role, target_banca, experience_level, daily_hours)
        VALUES (?, ?, ?, ?, 'atrfb', 1, CURRENT_TIMESTAMP, 'Analista Tributário', 'FGV', 'iniciante', 4)
      `).run(profileId, accountId, googleUser.name || 'Concurseiro', '🎯');
    } else {
      // Atualizar dados do Google se necessário
      db.prepare(`
        UPDATE accounts 
        SET google_id = COALESCE(google_id, ?), 
            avatar_url = COALESCE(?, avatar_url),
            last_login_at = CURRENT_TIMESTAMP,
            failed_attempts = 0,
            locked_until = NULL
        WHERE id = ?
      `).run(googleUser.sub, googleUser.picture, account.id);
    }

    const token = this.generateSessionToken();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    db.prepare(`
      INSERT INTO auth_sessions (token, account_id, created_at, expires_at)
      VALUES (?, ?, CURRENT_TIMESTAMP, ?)
    `).run(token, account.id, expiresAt);

    const profiles = db.prepare(`
      SELECT * FROM user_profiles WHERE account_id = ? ORDER BY is_default DESC, last_active_at DESC
    `).all(account.id);

    return {
      token,
      account: {
        id: account.id,
        username: account.username,
        email: account.email,
        avatar_url: account.avatar_url || googleUser.picture
      },
      profiles
    };
  }

  /**
   * Autenticação direta com token ID do Google.
   * @param {string} credential 
   */
  async loginWithGoogle(credential) {
    const googleUser = await this.verifyGoogleToken(credential);
    return this.loginOrCreateGoogleUser(googleUser);
  }
}

export const authService = new AuthService();

