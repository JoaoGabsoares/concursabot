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
  register(username, password, email = null) {
    if (!username || !password) {
      throw new Error('Nome de usuário e senha são obrigatórios.');
    }

    if (password.length < 8) {
      throw new Error('A senha deve ter no mínimo 8 caracteres.');
    }

    const cleanUsername = username.trim().toLowerCase();
    const cleanEmail = email && typeof email === 'string' ? email.trim() : null;

    const existing = db.prepare(`
      SELECT id FROM accounts WHERE LOWER(username) = ? OR (email IS NOT NULL AND LOWER(email) = ?)
    `).get(cleanUsername, cleanEmail ? cleanEmail.toLowerCase() : null);

    if (existing) {
      throw new Error('Nome de usuário ou e-mail já cadastrado.');
    }

    const salt = this.generateSalt();
    const passwordHash = this.hashPassword(password, salt);
    const accountId = 'acc_' + Date.now();

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
      }
    }

    const expectedHash = this.hashPassword(password, account.salt);
    if (account.password_hash !== expectedHash) {
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
      SELECT * FROM user_profiles WHERE account_id = ? ORDER BY last_active_at DESC
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
}

export const authService = new AuthService();
