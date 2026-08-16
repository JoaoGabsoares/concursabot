import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, '../server.log');
const reportFilePath = path.join(__dirname, '../LIVE_TESTING_SESSION.md');

// Inicializar arquivo de relatório de testes
const startHeader = `# 📡 Sessão de Testes em Tempo Real — Registro de Eventos e Logs

> **Início do Monitoramento:** ${new Date().toLocaleString('pt-BR')}  
> **Status:** 🟢 MONITORANDO ATIVAMENTE (Aguardando ações do usuário no site...)  
> **Instruções:** Faça seus testes livremente no navegador. Todos os cliques, uploads, chamadas à IA e erros serão registrados aqui em tempo real.

---

| Horário | Categoria | Status | Detalhes da Ação / Rota | Duração / Obs |
| :--- | :---: | :---: | :--- | :--- |
`;

if (!fs.existsSync(reportFilePath)) {
  fs.writeFileSync(reportFilePath, startHeader, 'utf-8');
} else {
  fs.appendFileSync(reportFilePath, `\n\n### 🔄 Nova Sessão Iniciada em: ${new Date().toLocaleString('pt-BR')}\n\n| Horário | Categoria | Status | Detalhes da Ação / Rota | Duração / Obs |\n| :--- | :---: | :---: | :--- | :--- |\n`, 'utf-8');
}

console.log('🚀 Monitor de Logs em Tempo Real ATIVO!');
console.log(`Lendo: ${logFilePath}`);
console.log(`Gravando em: ${reportFilePath}`);

let currentSize = 0;
if (fs.existsSync(logFilePath)) {
  currentSize = fs.statSync(logFilePath).size;
}

function processLine(line) {
  if (!line.trim()) return;

  const now = new Date().toLocaleTimeString('pt-BR');
  let category = '🌐 HTTP';
  let status = '⚪ INFO';
  let duration = '-';

  if (line.includes('[AI   ]') || line.includes('GEMINI')) {
    category = '🤖 IA Gemini';
    status = '🟣 AI CALL';
  } else if (line.includes('429') || line.includes('RESOURCE_EXHAUSTED')) {
    category = '⚠️ Cota / Quota';
    status = '🟡 RATE LIMIT';
  } else if (line.includes('500') || line.includes('Erro') || line.includes('Error')) {
    category = '❌ Erro Backend';
    status = '🔴 ERROR';
  } else if (line.includes('/api/rag/upload')) {
    category = '📁 RAG Upload';
    status = '🟢 UPLOAD';
  } else if (line.includes('/api/questions')) {
    category = '📝 Questões';
    status = '🔵 QUESTÃO';
  } else if (line.includes('/api/redacao')) {
    category = '✍️ Redação IA';
    status = '🟣 REDAÇÃO';
  } else if (line.includes('/api/caderno-erros')) {
    category = '🎯 Caderno Erros';
    status = '🟠 ERROS';
  } else if (line.includes(' 200 ') || line.includes(' 201 ') || line.includes(' 304 ')) {
    category = '🌐 HTTP';
    status = '🟢 SUCESSO';
  }

  const durMatch = line.match(/\((\d+ms)\)/);
  if (durMatch) {
    duration = durMatch[1];
  }

  const cleanDetails = line.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  const markdownRow = `| ${now} | ${category} | ${status} | \`${cleanDetails.substring(0, 120)}\` | ${duration} |\n`;

  try {
    fs.appendFileSync(reportFilePath, markdownRow, 'utf-8');
    console.log(`[EVENTO] ${category} -> ${status}: ${line.substring(0, 80)}`);
  } catch (e) {
    console.error('Erro ao escrever no relatório:', e.message);
  }
}

// Watcher com polling para capturar qualquer escrita contínua
setInterval(() => {
  try {
    if (!fs.existsSync(logFilePath)) return;
    const stat = fs.statSync(logFilePath);

    if (stat.size > currentSize) {
      const stream = fs.createReadStream(logFilePath, {
        start: currentSize,
        end: stat.size,
        encoding: 'utf-8'
      });

      let buffer = '';
      stream.on('data', (chunk) => {
        buffer += chunk;
      });

      stream.on('end', () => {
        currentSize = stat.size;
        const lines = buffer.split('\n');
        lines.forEach(processLine);
      });
    } else if (stat.size < currentSize) {
      currentSize = stat.size;
    }
  } catch (err) {}
}, 400);
