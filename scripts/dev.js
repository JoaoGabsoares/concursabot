import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('===============================================================');
console.log('🚀 GABARITO.AI — INICIALIZANDO AMBIENTE DE DESENVOLVIMENTO');
console.log('===============================================================');

const rootDir = path.join(__dirname, '..');

// 1. Inicia o Servidor Backend (Porta 3000 com Hot-Reload nativo --watch)
console.log('📡 Iniciando Servidor Backend (Node.js 22 com --watch na porta 3000)...');
const serverProc = spawn(process.execPath, ['--watch', path.join(rootDir, 'server/index.js')], {
    stdio: 'inherit',
    env: { ...process.env, PORT: '3000' }
});

// 2. Inicia o Servidor Frontend (Vite na porta 5173)
console.log('⚡ Iniciando Frontend (Vite HMR na porta 5173)...\n');
const viteBin = path.join(rootDir, 'node_modules/vite/bin/vite.js');
const clientProc = spawn(process.execPath, [viteBin], {
    stdio: 'inherit',
    env: process.env
});

// 3. Gerenciamento de Encerramento Limpo (Ctrl + C)
function shutdown(signal) {
    console.log(`\n🛑 Encerrando ambiente de desenvolvimento (${signal})...`);
    try { serverProc.kill('SIGINT'); } catch {}
    try { clientProc.kill('SIGINT'); } catch {}
    process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

serverProc.on('exit', (code) => {
    if (code !== 0 && code !== null) {
        console.error(`\n❌ Servidor backend encerrou com código ${code}`);
    }
});

clientProc.on('exit', (code) => {
    if (code !== 0 && code !== null) {
        console.error(`\n❌ Servidor Vite encerrou com código ${code}`);
    }
});
