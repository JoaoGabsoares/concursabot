import { createRequire } from 'module';
import { execSync } from 'child_process';

const require = createRequire(import.meta.url);

try {
  // Tentar carregar o better-sqlite3 nativo
  require('better-sqlite3');
} catch (error) {
  if (error.code === 'ERR_DLOPEN_FAILED' || (error.message && error.message.includes('NODE_MODULE_VERSION'))) {
    console.warn(`\n⚠️  [ConcursaBot] Incompatibilidade de binário detectada no Node ${process.version}.`);
    console.log('🔄 Recompilando better-sqlite3 automaticamente para o Node atual...');
    try {
      execSync('npm rebuild better-sqlite3', { stdio: 'inherit' });
      console.log('✅ Recompilação concluída com sucesso! Iniciando servidor...\n');
    } catch (rebuildErr) {
      console.error('❌ Falha ao recompilar better-sqlite3:', rebuildErr.message);
      process.exit(1);
    }
  } else {
    throw error;
  }
}
