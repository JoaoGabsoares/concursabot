import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';
import dotenv from 'dotenv';
import db, { logActivity } from './database.js';
import { generateEmbedding } from './gemini.js';
import { guessSubject } from './subject-guesser.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to sleep between API requests to respect rate limits
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Recursively find all PDF files in a directory
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

// Split text into semantic chunks with overlap
export function chunkText(text, chunkSize = 1000, overlap = 200) {
  const cleanText = text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  const chunks = [];
  let startIndex = 0;

  while (startIndex < cleanText.length) {
    let endIndex = startIndex + chunkSize;
    
    // Try to break at a newline or period if possible
    if (endIndex < cleanText.length) {
      const nextBreak = cleanText.lastIndexOf('\n', endIndex);
      const nextPeriod = cleanText.lastIndexOf('. ', endIndex);
      const breakPoint = Math.max(nextBreak, nextPeriod);

      if (breakPoint > startIndex + chunkSize * 0.5) {
        endIndex = breakPoint + 1;
      }
    }

    const chunk = cleanText.substring(startIndex, endIndex).trim();
    if (chunk.length > 50) { // Only keep meaningful chunks
      chunks.push(chunk);
    }

    startIndex = endIndex - overlap;
    if (startIndex >= cleanText.length || endIndex >= cleanText.length) break;
  }

  return chunks;
}

// Main Ingestion Routine
export async function ingestDirectory(targetDir, forceReingest = false) {
  console.log(`\n======================================================`);
  console.log(`🧠 ConcursaBot — Indexador RAG de Documentos`);
  console.log(`======================================================`);
  console.log(`📁 Buscando PDFs em: ${targetDir}\n`);

  const pdfFiles = findPDFs(targetDir);
  console.log(`📚 Total de PDFs encontrados: ${pdfFiles.length}`);

  if (pdfFiles.length === 0) {
    console.log(`⚠️ Nenhum arquivo .pdf encontrado neste caminho.`);
    return;
  }

  let totalIndexed = 0;
  let totalChunksCreated = 0;
  let totalSkipped = 0;
  let totalAlreadyIndexed = 0;

  const insertDoc = db.prepare(`
    INSERT OR REPLACE INTO rag_documents (filename, filepath, subject, total_chunks)
    VALUES (?, ?, ?, ?)
  `);

  const insertChunk = db.prepare(`
    INSERT INTO rag_chunks (document_id, chunk_index, content, embedding)
    VALUES (?, ?, ?, ?)
  `);

  const deleteOldChunks = db.prepare(`
    DELETE FROM rag_chunks WHERE document_id = ?
  `);

  for (let i = 0; i < pdfFiles.length; i++) {
    const pdfPath = pdfFiles[i];
    const filename = path.basename(pdfPath);
    const subject = guessSubject(pdfPath, targetDir);

    console.log(`\n[${i + 1}/${pdfFiles.length}] Processando: ${filename} (${subject})...`);

    try {
      // Check if already indexed — evita reprocessar (e regastar cota de API) em reruns
      const existingDoc = db.prepare('SELECT id FROM rag_documents WHERE filepath = ?').get(pdfPath);
      if (existingDoc) {
        const existingChunkCount = db.prepare('SELECT COUNT(*) as c FROM rag_chunks WHERE document_id = ?').get(existingDoc.id).c;
        if (existingChunkCount > 0 && !forceReingest) {
          console.log(`   ⏭️  Já indexado (${existingChunkCount} chunks). Pulando — use --force para reindexar.`);
          totalAlreadyIndexed++;
          continue;
        }
      }

      // Read PDF buffer
      const dataBuffer = fs.readFileSync(pdfPath);
      const pdfData = await pdfParse(dataBuffer);
      const text = pdfData.text || '';

      if (text.trim().length < 100) {
        console.log(`   ⚠️ PDF parece escaneado ou sem texto extraível. Pulando.`);
        totalSkipped++;
        continue;
      }

      // Chunk text
      const chunks = chunkText(text, 1000, 200);
      console.log(`   📄 Páginas: ${pdfData.numpages} | Trechos gerados: ${chunks.length}`);

      // Insert or update doc record
      const docResult = insertDoc.run(filename, pdfPath, subject, chunks.length);
      const docId = existingDoc ? existingDoc.id : docResult.lastInsertRowid;

      // Delete any previous chunks for this document
      deleteOldChunks.run(docId);

      // Generate embeddings and store chunks
      process.stdout.write(`   ⏳ Gerando embeddings com Gemini gemini-embedding-001: `);

      const insertMany = db.transaction((chunkList) => {
        for (let cIdx = 0; cIdx < chunkList.length; cIdx++) {
          const { content, embedding } = chunkList[cIdx];
          insertChunk.run(docId, cIdx, content, JSON.stringify(embedding));
        }
      });

      const processedChunks = [];
      for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
        const chunkContent = chunks[cIdx];
        
        try {
          const embedding = await generateEmbedding(chunkContent);
          processedChunks.push({ content: chunkContent, embedding });
          
          if (cIdx % 5 === 0 || cIdx === chunks.length - 1) {
            process.stdout.write(`.`);
          }

          // Small delay to remain safely within Gemini Free Tier limits (15 RPM / quota)
          await sleep(100);
        } catch (embErr) {
          console.error(`\n   ❌ Erro no embedding do chunk ${cIdx}:`, embErr.message);
          // Wait a bit longer if rate limited
          await sleep(2000);
        }
      }

      insertMany(processedChunks);
      console.log(` ✅ Concluído! (${processedChunks.length} vetores salvos)`);

      totalIndexed++;
      totalChunksCreated += processedChunks.length;

    } catch (err) {
      console.error(`   ❌ Falha ao processar ${filename}:`, err.message);
      totalSkipped++;
    }
  }

  logActivity('rag_ingest', `Indexados ${totalIndexed} documentos (${totalChunksCreated} chunks)`);

  console.log(`\n======================================================`);
  console.log(`🎉 Ingestão RAG Finalizada com Sucesso!`);
  console.log(`📊 Documentos indexados agora: ${totalIndexed}`);
  console.log(`⏭️  Já estavam indexados (pulados): ${totalAlreadyIndexed}`);
  console.log(`🔢 Total de chunks vetoriais gerados nesta rodada: ${totalChunksCreated}`);
  if (totalSkipped > 0) console.log(`⚠️ Documentos com falha/pulados: ${totalSkipped}`);
  console.log(`======================================================\n`);
}

// Run from CLI if executed directly
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const cliArgs = process.argv.slice(2);
  const forceFlag = cliArgs.includes('--force');
  const target = cliArgs.find(a => !a.startsWith('--')) || path.join(__dirname, '../uploads');
  ingestDirectory(target, forceFlag).catch(console.error);
}
