import path from 'path';

// Guess subject from subfolder hierarchy or filename.
// Shared by server/ingest.js (RAG) and server/preload-library.js (Sala de Estudos)
// so the two catalogs infer subjects the same way.
export function guessSubject(filepath, baseDir = '') {
  const normalized = filepath.toLowerCase();
  if (normalized.includes('tribut')) return 'Direito Tributário';
  if (normalized.includes('constituc')) return 'Direito Constitucional';
  if (normalized.includes('administra')) return 'Direito Administrativo';
  if (normalized.includes('penal')) return 'Direito Penal';
  if (normalized.includes('processual')) return 'Direito Processual';
  if (normalized.includes('civil')) return 'Direito Civil';
  if (normalized.includes('trabalho')) return 'Direito do Trabalho';
  if (normalized.includes('previdenc')) return 'Direito Previdenciário';
  if (normalized.includes('eleitoral')) return 'Direito Eleitoral';
  if (normalized.includes('financeiro') || normalized.includes('afo')) return 'Direito Financeiro / AFO';
  if (normalized.includes('contab')) return 'Contabilidade';
  if (normalized.includes('econom')) return 'Economia';
  if (normalized.includes('audit')) return 'Auditoria';
  if (normalized.includes('portug') || normalized.includes('redac')) return 'Português';
  if (normalized.includes('logic') || normalized.includes('rlm') || normalized.includes('matemat')) return 'Raciocínio Lógico / Matemática';
  if (normalized.includes('inform') || normalized.includes('comput') || normalized.includes('ti')) return 'Informática / TI';
  if (normalized.includes('legisla')) return 'Legislação Específica';
  if (normalized.includes('etica')) return 'Ética no Serviço Público';

  // Fallback: extract the closest relative subfolder name as the subject
  if (baseDir) {
    const rel = path.relative(baseDir, path.dirname(filepath));
    const parts = rel.split(path.sep).filter(p => p && p !== '.');
    if (parts.length > 0) {
      return parts[0];
    }
  }

  return 'Geral';
}
