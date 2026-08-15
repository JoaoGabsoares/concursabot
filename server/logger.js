import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../server.log');

const MAX_MEMORY_LOGS = 400;
const memoryLogs = [];

function formatTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').substring(0, 19);
}

function writeLog(level, tag, message, details = null) {
  const timestamp = formatTimestamp();
  const logEntry = {
    id: Date.now() + Math.random().toString(36).substring(2, 7),
    timestamp,
    level, // 'INFO' | 'WARN' | 'ERROR' | 'AI' | 'HTTP'
    tag,   // e.g. 'GEMINI', 'STUDY_ROOM', 'EDITAL', 'HTTP', 'SYSTEM'
    message: typeof message === 'string' ? message : JSON.stringify(message),
    details: details ? (typeof details === 'string' ? details : JSON.stringify(details, null, 2)) : null
  };

  // Add to memory ring buffer
  memoryLogs.push(logEntry);
  if (memoryLogs.length > MAX_MEMORY_LOGS) {
    memoryLogs.shift();
  }

  // Format line for server.log
  const logLine = `[${timestamp}] [${level.padEnd(5)}] [${tag.padEnd(10)}] ${logEntry.message}${logEntry.details ? ' | Details: ' + logEntry.details : ''}\n`;
  
  // Write to console with subtle coloring
  if (level === 'ERROR') {
    console.error(`\x1b[31m${logLine.trim()}\x1b[0m`);
  } else if (level === 'WARN') {
    console.warn(`\x1b[33m${logLine.trim()}\x1b[0m`);
  } else if (level === 'AI') {
    console.log(`\x1b[36m${logLine.trim()}\x1b[0m`);
  } else {
    console.log(logLine.trim());
  }

  // Append to server.log asynchronously
  fs.appendFile(logFilePath, logLine, (err) => {
    if (err) console.error('Erro ao gravar no server.log:', err.message);
  });

  return logEntry;
}

export const logger = {
  info: (tag, message, details) => writeLog('INFO', tag, message, details),
  warn: (tag, message, details) => writeLog('WARN', tag, message, details),
  error: (tag, message, details) => writeLog('ERROR', tag, message, details),
  ai: (tag, message, details) => writeLog('AI', tag, message, details),
  http: (tag, message, details) => writeLog('HTTP', tag, message, details),

  getLogs: ({ level = 'all', limit = 200, search = '' } = {}) => {
    let filtered = [...memoryLogs];

    if (level && level !== 'all') {
      filtered = filtered.filter(l => l.level.toLowerCase() === level.toLowerCase());
    }

    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(l => 
        l.message.toLowerCase().includes(q) || 
        l.tag.toLowerCase().includes(q) ||
        (l.details && l.details.toLowerCase().includes(q))
      );
    }

    return filtered.slice(-Math.min(limit, MAX_MEMORY_LOGS));
  },

  clearLogs: () => {
    memoryLogs.length = 0;
    try {
      fs.writeFileSync(logFilePath, `[${formatTimestamp()}] [INFO ] [SYSTEM    ] Logs limpos pelo administrador.\n`, 'utf8');
    } catch(e){}
    return true;
  },

  getLogFilePath: () => logFilePath
};

export default logger;
