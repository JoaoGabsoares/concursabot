import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';
import dotenv from 'dotenv';
import db, { logActivity } from './database.js';
import { generateJSON } from './gemini.js';
import { guessSubject } from './subject-guesser.js';
import { extractLessonNumber } from './routes/study-room.js';
import { MATERIAL_ANALYSIS_PROMPT, MATERIAL_ANALYSIS_SCHEMA } from './prompts/study-room.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Recursively find all PDF files in a directory (excluding fragmented slide files by default)
function findPDFs(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Diretório não encontrado: ${dir}`);
    return [];
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findPDFs(fullPath, fileList);
      } else if (file.toLowerCase().endsWith('.pdf')) {
        fileList.push(fullPath);
      }
    } catch (e) {
      // Ignore permission or access errors
    }
  }
  return fileList;
}

// Registra os PDFs de uma pasta direto na biblioteca da Sala de Estudos (study_materials)
export async function preloadLibrary(targetDir, forceReindex = false) {
  console.log(`\n======================================================`);
  console.log(`📚 ConcursaBot — Pré-carregamento da Biblioteca (Sala de Estudos)`);
  console.log(`======================================================`);
  console.log(`📁 Buscando PDFs em: ${targetDir}\n`);

  const pdfFiles = findPDFs(targetDir);
  console.log(`📄 Total de PDFs encontrados: ${pdfFiles.length}`);

  if (pdfFiles.length === 0) {
    console.log(`⚠️ Nenhum arquivo .pdf encontrado neste caminho.`);
    return;
  }

  const insertMaterial = db.prepare(`
    INSERT INTO study_materials (filename, filepath, subject, lesson_number, title, summary, content_text, analysis_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let added = 0, skipped = 0, failed = 0;

  for (let i = 0; i < pdfFiles.length; i++) {
    const pdfPath = pdfFiles[i];
    const filename = path.basename(pdfPath);

    const existing = db.prepare('SELECT id FROM study_materials WHERE filepath = ?').get(pdfPath);
    if (existing && !forceReindex) {
      skipped++;
      continue;
    }

    console.log(`\n[${i + 1}/${pdfFiles.length}] Processando: ${filename}...`);

    try {
      const pdfBuffer = fs.readFileSync(pdfPath);
      const pdfData = await pdfParse(pdfBuffer);
      const textContent = pdfData.text || '';

      if (textContent.trim().length < 100) {
        console.log(`   ⚠️ PDF parece escaneado ou sem texto extraível. Pulando.`);
        failed++;
        continue;
      }

      const fallbackSubject = guessSubject(pdfPath, targetDir);
      const detectedLessonNum = extractLessonNumber(filename, textContent);

      const analysis = await generateJSON(
        `${MATERIAL_ANALYSIS_PROMPT}\n\nCONTEÚDO DO PDF:\n${textContent.substring(0, 100000)}`,
        'Você é um especialista em análise de materiais de estudo para concursos públicos.',
        MATERIAL_ANALYSIS_SCHEMA
      );

      const finalLessonNum = detectedLessonNum !== null 
        ? detectedLessonNum 
        : (analysis.numeroAula !== undefined && analysis.numeroAula !== null ? analysis.numeroAula : null);

      if (existing) {
        db.prepare(`
          UPDATE study_materials
          SET subject = ?, lesson_number = ?, title = ?, summary = ?, content_text = ?, analysis_json = ?
          WHERE id = ?
        `).run(
          analysis.materia || fallbackSubject,
          finalLessonNum,
          analysis.titulo || filename,
          analysis.resumoEstrategico || '',
          textContent,
          JSON.stringify(analysis),
          existing.id
        );
      } else {
        insertMaterial.run(
          filename,
          pdfPath,
          analysis.materia || fallbackSubject,
          finalLessonNum,
          analysis.titulo || filename,
          analysis.resumoEstrategico || '',
          textContent,
          JSON.stringify(analysis)
        );
      }

      console.log(`   ✅ "${analysis.titulo || filename}" (${analysis.materia || fallbackSubject} - Aula ${finalLessonNum ?? 'Extra'}) catalogada.`);
      added++;

      await sleep(500);

    } catch (error) {
      console.error(`   ❌ Erro ao processar ${filename}:`, error.message);
      failed++;
    }
  }

  console.log(`\n======================================================`);
  console.log(`🎉 Pré-carregamento concluído!`);
  console.log(`   ✅ Adicionados / Atualizados: ${added}`);
  console.log(`   ⏭️ Já existentes (ignorados): ${skipped}`);
  console.log(`   ❌ Falhas: ${failed}`);
  console.log(`======================================================\n`);

  logActivity('material', `Pré-carregamento de biblioteca: ${added} materiais adicionados.`);
}

// CLI runner
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const targetDir = process.argv[2] || path.join(process.env.HOME || '/home/joao', 'MeuDrive');
  const force = process.argv.includes('--force');
  preloadLibrary(targetDir, force)
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}
