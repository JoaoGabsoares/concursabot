import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from '../database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to parse simple YAML frontmatter without external dependency
function parseYamlFrontmatter(fileContent) {
  if (!fileContent.startsWith('---')) {
    return { frontmatter: {}, body: fileContent };
  }

  const endIndex = fileContent.indexOf('\n---', 3);
  if (endIndex === -1) {
    return { frontmatter: {}, body: fileContent };
  }

  const rawYaml = fileContent.substring(3, endIndex).trim();
  const body = fileContent.substring(endIndex + 4).trim();
  const frontmatter = {};

  let currentKey = null;

  const lines = rawYaml.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (trimmed.startsWith('- ') && currentKey) {
      if (!Array.isArray(frontmatter[currentKey])) {
        frontmatter[currentKey] = [];
      }
      frontmatter[currentKey].push(trimmed.substring(2).replace(/^['"]|['"]$/g, '').trim());
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const val = line.substring(colonIndex + 1).trim();

      currentKey = key;
      if (val === '') {
        frontmatter[key] = [];
      } else {
        frontmatter[key] = val.replace(/^['"]|['"]$/g, '').trim();
      }
    }
  }

  return { frontmatter, body };
}

export async function ingestAtrfbRag() {
  console.log('\n======================================================');
  console.log('🏛️ INGESTÃO DO ACERVO RAG ATRFB (3.543 DOCUMENTOS)');
  console.log('======================================================');

  const rootDir = path.resolve(__dirname, '../../');
  const manifestPath = path.join(rootDir, 'conteudo_pdfs_estudo/analista_tributario/atrfb_rag_manifest.json');

  if (!fs.existsSync(manifestPath)) {
    console.error(`❌ Manifesto não encontrado em: ${manifestPath}`);
    return { success: false, error: 'Manifesto não encontrado' };
  }

  console.log('📖 Lendo manifesto consolidado...');
  const manifestRaw = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestRaw);
  console.log(`📋 Total de itens mapeados no manifesto: ${manifest.length}`);

  // Iniciar transação no SQLite para inserção de altíssima velocidade
  console.log('⚡ Processando e indexando no SQLite (FTS5)...');
  const startTime = Date.now();

  const insertStmt = db.prepare(`
    INSERT OR REPLACE INTO atrfb_rag_documents (
      file_path, subject, module_type, lesson_number, title,
      tags_json, articles_cited_json, sumulas_cited_json,
      content_markdown, char_count
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let insertedCount = 0;
  let skippedCount = 0;
  let totalChars = 0;

  const subjectStats = {};

  const executeBatch = db.transaction(() => {
    for (const item of manifest) {
      const fullPath = path.join(rootDir, item.path);
      if (!fs.existsSync(fullPath)) {
        skippedCount++;
        continue;
      }

      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { frontmatter, body } = parseYamlFrontmatter(fileContent);

      const subject = frontmatter.disciplina || item.disciplina || 'Direito Tributário';
      const moduleType = frontmatter.tipo_material || item.tipo || 'Curso Teórico Base';
      const lessonNumber = frontmatter.aula_numero || item.aula || '00';
      const title = frontmatter.titulo_aula || item.titulo || path.basename(item.path, '.md');
      const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];
      const articlesCited = Array.isArray(frontmatter.artigos_citados) ? frontmatter.artigos_citados : [];
      const sumulasCited = Array.isArray(frontmatter.sumulas_citadas) ? frontmatter.sumulas_citadas : [];

      const charCount = body.length;
      totalChars += charCount;

      insertStmt.run(
        item.path,
        subject,
        moduleType,
        String(lessonNumber),
        title,
        JSON.stringify(tags),
        JSON.stringify(articlesCited),
        JSON.stringify(sumulasCited),
        body,
        charCount
      );

      insertedCount++;
      subjectStats[subject] = (subjectStats[subject] || 0) + 1;
    }
  });

  executeBatch();

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Ingestão concluída com sucesso em ${durationSec}s!`);
  console.log(`📊 Documentos indexados: ${insertedCount}`);
  console.log(`📄 Caracteres totais de conhecimento: ${totalChars.toLocaleString('pt-BR')}`);
  console.log('\n📚 Distribuição por Polo Disciplinar:');
  for (const [subj, count] of Object.entries(subjectStats)) {
    console.log(`   - ${subj}: ${count} documentos`);
  }

  // Auto-provisionar aulas teóricas essenciais na Sala de Estudos para acesso imediato
  console.log('\n🏫 Auto-provisionando apostilas essenciais na Sala de Estudos para ATRFB...');
  const keyLessons = db.prepare(`
    SELECT * FROM atrfb_rag_documents 
    WHERE module_type = 'Curso Teórico Base' AND file_path LIKE '%Apostila%'
    ORDER BY subject, lesson_number
  `).all();

  const insertMaterial = db.prepare(`
    INSERT OR IGNORE INTO study_materials (
      filename, filepath, subject, lesson_number, title, summary, content_text,
      user_id, career_id, is_native_lesson, total_pages, theory_pages
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 'user_joao', 'atrfb', 1, 35, 30)
  `);

  let provisionedCount = 0;
  const provisionBatch = db.transaction(() => {
    for (const doc of keyLessons) {
      const parsedNum = parseInt(doc.lesson_number, 10) || 0;
      const cleanTitle = `${doc.title} (Aula ${doc.lesson_number})`;
      const summary = doc.content_markdown.substring(0, 300).replace(/\n+/g, ' ') + '...';
      
      insertMaterial.run(
        path.basename(doc.file_path),
        doc.file_path,
        doc.subject,
        parsedNum,
        cleanTitle,
        summary,
        doc.content_markdown
      );
      provisionedCount++;
    }
  });
  provisionBatch();

  console.log(`✅ ${provisionedCount} apostilas teóricas auto-provisionadas na Sala de Estudos!`);

  return {
    success: true,
    totalDocuments: insertedCount,
    totalChars,
    durationSec,
    subjectStats,
    provisionedCount
  };
}

// Permitir execução via linha de comando
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  ingestAtrfbRag()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌ Erro na ingestão:', err);
      process.exit(1);
    });
}
