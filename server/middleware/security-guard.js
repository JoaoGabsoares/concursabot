// Middleware de proteção e segurança defensiva contra Prototype Pollution e manipulação maliciosa de objetos

export function securityGuardMiddleware(req, res, next) {
  const sanitizeObject = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;
    for (const key of Object.keys(obj)) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        delete obj[key];
        continue;
      }
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        sanitizeObject(obj[key]);
      }
    }
    return obj;
  };

  try {
    if (req.body && typeof req.body === 'object') {
      sanitizeObject(req.body);
    }
    if (req.query && typeof req.query === 'object') {
      sanitizeObject(req.query);
    }
    if (req.params && typeof req.params === 'object') {
      sanitizeObject(req.params);
    }
  } catch (e) {}

  next();
}

export default securityGuardMiddleware;
