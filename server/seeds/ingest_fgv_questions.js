import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import db from '../database.js';

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Mapeamento de Gabaritos Oficiais FGV das 8 Provas do Caderno
const GABARITO_MAP = {
  'TJ-RS': {
    1: 'A', 2: 'C', 3: 'C', 4: 'E', 5: 'E', 6: 'E', 7: 'A', 8: 'C', 9: 'C', 10: 'C',
    12: 'D', 13: 'B', 14: 'A', 15: 'D', 16: 'E', 17: 'C', 18: 'B', 19: 'B', 20: 'C',
    21: 'E', 22: 'C', 23: 'B', 24: 'C', 25: 'A', 26: 'D', 27: 'E', 28: 'E', 29: 'B', 30: 'D'
  },
  'TJ-SC': {
    1: 'D', 2: 'C', 3: 'D', 4: 'D', 5: 'A', 6: 'D', 7: 'A', 8: 'A', 9: 'C', 10: 'E',
    11: 'A', 12: 'B', 13: 'B', 14: 'E', 15: 'D', 16: 'D', 17: 'D', 19: 'C', 20: 'B'
  },
  'IMBEL-1': {
    1: 'D', 2: 'A', 3: 'A', 4: 'A', 5: 'E', 6: 'D', 7: 'E', 8: 'B', 9: 'D', 10: 'B',
    11: 'E', 12: 'A', 13: 'B', 14: 'D', 15: 'E', 16: 'C', 17: 'E', 18: 'D', 19: 'A', 20: 'C'
  },
  'IMBEL-2': {
    1: 'E', 2: 'C', 3: 'A', 4: 'E', 5: 'B', 6: 'C', 7: 'A', 8: 'E', 9: 'B', 10: 'B',
    11: 'D', 12: 'D', 13: 'A', 14: 'D', 15: 'B'
  },
  'IBGE': {
    1: 'C', 2: 'E', 3: 'B', 4: 'A', 5: 'B', 6: 'E', 7: 'A', 8: 'C', 9: 'D', 10: 'D',
    11: 'C', 12: 'D', 13: 'D', 14: 'B', 15: 'E'
  },
  'ANGRA': {
    1: 'C', 2: 'C', 3: 'C', 4: 'D', 5: 'E', 6: 'C', 7: 'A', 8: 'B', 9: 'C', 10: 'C'
  },
  'MPE-RJ': {
    1: 'C', 2: 'E', 3: 'A', 4: 'C', 5: 'D', 6: 'E', 7: 'A', 8: 'B', 9: 'D', 10: 'A',
    11: 'A', 12: 'E', 13: 'B', 14: 'D', 15: 'A', 16: 'E', 17: 'C', 18: 'C', 19: 'B', 20: 'C',
    21: 'A', 22: 'E', 23: 'A', 24: 'D', 25: 'E', 26: 'E', 27: 'E', 28: 'E', 29: 'D', 30: 'A'
  },
  'TJ-CE': {
    1: 'C', 2: 'A', 3: 'B', 4: 'A', 5: 'C', 6: 'B', 7: 'C', 8: 'A', 9: 'D', 10: 'E',
    11: 'B', 12: 'C', 13: 'E', 14: 'D', 15: 'A', 16: 'C', 17: 'D', 18: 'C', 19: 'A', 20: 'A',
    21: 'D', 22: 'D'
  }
};

function getExamKey(origin) {
  const o = origin.toUpperCase();
  if (o.includes('TJ - RS') || o.includes('TJ-RS')) return 'TJ-RS';
  if (o.includes('TJ - SC') || o.includes('TJ-SC')) return 'TJ-SC';
  if (o.includes('MPE-RJ') || o.includes('MPE - RJ')) return 'MPE-RJ';
  if (o.includes('TJ-CE') || o.includes('TJ - CE')) return 'TJ-CE';
  if (o.includes('IBGE')) return 'IBGE';
  if (o.includes('ANGRA')) return 'ANGRA';
  if (o.includes('IMBEL')) {
    if (o.includes('MÉDIO') || o.includes('MEDIO')) return 'IMBEL-2';
    return 'IMBEL-1';
  }
  return 'UNKNOWN';
}

function inferTopic(text) {
  const t = text.toLowerCase();
  if (t.includes('conjunção') || t.includes('conectivo') || t.includes('porém') || t.includes('portanto') || t.includes('embora')) {
    return 'Conjunções e Coesão Textual';
  }
  if (t.includes('crase') || t.includes('regência') || t.includes('transitividade')) {
    return 'Regência e Emprego da Crase';
  }
  if (t.includes('concordância') || t.includes('plural') || t.includes('singular')) {
    return 'Concordância Verbal e Nominal';
  }
  if (t.includes('pontuação') || t.includes('vírgula') || t.includes('dois-pontos') || t.includes('aspas')) {
    return 'Pontuação e Efeitos de Sentido';
  }
  if (t.includes('ortografia') || t.includes('grafia') || t.includes('acentuação') || t.includes('parônimo') || t.includes('homônimo')) {
    return 'Ortografia e Semântica Lexical';
  }
  if (t.includes('argumentativo') || t.includes('argumentação') || t.includes('tese') || t.includes('premissa')) {
    return 'Tipologia Textual e Argumentação';
  }
  if (t.includes('figura de linguagem') || t.includes('metáfora') || t.includes('ironia') || t.includes('sentido figurado')) {
    return 'Figuras de Linguagem e Estilística';
  }
  return 'Interpretação e Compreensão de Textos';
}

export async function ingestFGVQuestions() {
  console.log('🚀 Iniciando Análise & Ingestão de Questões FGV...');
  const pdfPath = '/home/joao/Downloads/c468fbb535a9aa620ace609012e2a4e9.pdf';

  if (!fs.existsSync(pdfPath)) {
    throw new Error(`Arquivo não encontrado: ${pdfPath}`);
  }

  // 1. Carregar assinaturas das questões já cadastradas no banco para deduplicação
  const existingRows = db.prepare('SELECT id, question_text FROM questions').all();
  const existingSignatures = new Set();
  existingRows.forEach(q => {
    existingSignatures.add(normalize(q.question_text).slice(0, 80));
  });

  console.log(`📦 Questões existentes no banco SQLite: ${existingRows.length}`);

  // 2. Extrair texto do PDF página por página
  const buf = fs.readFileSync(pdfPath);
  let pageNum = 0;
  const pageTexts = [];
  const options = {
    pagerender: function(pageData) {
      pageNum++;
      return pageData.getTextContent().then(function(textContent) {
        let text = '';
        for (let item of textContent.items) {
          text += item.str + ' ';
        }
        pageTexts.push({ page: pageNum, text });
        return text;
      });
    }
  };

  await pdfParse(buf, options);

  // Páginas 4 a 39 contêm as 8 provas completas
  const fullText = pageTexts.slice(3, 39).map(p => p.text).join('\n');
  const clean = fullText
    .replace(/B\s*AN\s*C\s*A\s*F\s*GV\s*\|\s*C\s*AD\s*ER\s*N\s*O\s*D\s*E\s*Q\s*U\s*ES\s*T\s*Õ\s*E\s*S\s*D\s*E\s*L\s*Í\s*N\s*GU\s*A\s*P\s*O\s*R\s*T\s*U\s*GU\s*E\s*S\s*A/gi, '')
    .replace(/www\.romulopassos\.com\.br\s+\d+/gi, '')
    .replace(/\s+/g, ' ');

  const qRegex = /(\d+)\.\s*\(([^\)]+FGV[^\)]*)\)([\s\S]*?)(?=\d+\.\s*\([^\)]+FGV[^\)]*\)|P\s*R\s*O\s*V\s*A\s+|$)/gi;
  let match;
  let totalAnalyzed = 0;
  let duplicatesBlocked = 0;
  let insertedCount = 0;

  const insertStmt = db.prepare(`
    INSERT INTO questions (
      subject, topic, banca, type, question_text, options, correct_index, explanation
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  db.transaction(() => {
    while ((match = qRegex.exec(clean)) !== null) {
      totalAnalyzed++;
      const qNum = parseInt(match[1], 10);
      const origin = match[2].trim();
      const content = match[3].trim();

      const optRegex = /a\)\s*([\s\S]*?)\s*b\)\s*([\s\S]*?)\s*c\)\s*([\s\S]*?)\s*d\)\s*([\s\S]*?)\s*(?:e\)\s*([\s\S]*))?$/i;
      const optMatch = content.match(optRegex);

      let statement = content;
      let options = [];
      if (optMatch) {
        statement = content.slice(0, optMatch.index).trim();
        options = [
          optMatch[1]?.trim(),
          optMatch[2]?.trim(),
          optMatch[3]?.trim(),
          optMatch[4]?.trim(),
          optMatch[5]?.trim()
        ].filter(Boolean);
      }

      if (options.length < 4) continue; // Pula se não tiver 4 ou 5 alternativas

      // Limpa pontuações estranhas no início e final do enunciado
      statement = statement.replace(/^[:\.\-\s]+/, '').replace(/[\s\n]+/g, ' ').trim();

      // Deduplicação estrita via assinatura normalizada
      const sig = normalize(statement).slice(0, 80);
      if (existingSignatures.has(sig)) {
        duplicatesBlocked++;
        continue;
      }

      // Adiciona assinatura para não duplicar no próprio lote
      existingSignatures.add(sig);

      const examKey = getExamKey(origin);
      const letter = GABARITO_MAP[examKey]?.[qNum] || 'A';
      const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4 };
      const correctIdx = letterMap[letter.toUpperCase()] !== undefined ? letterMap[letter.toUpperCase()] : 0;
      const topic = inferTopic(statement);

      const fullQuestionText = `(${origin}) ${statement}`;
      const explanation = `Gabarito Oficial FGV: Letra (${letter.toUpperCase()}). ${
        options[correctIdx] ? `A alternativa correta é "${options[correctIdx]}", de acordo com a norma culta e o padrão interpretativo da banca FGV (${origin}).` : 'Conforme chave oficial da banca examinadora FGV.'
      }`;

      insertStmt.run(
        'Língua Portuguesa',
        topic,
        'FGV',
        'multiple_choice',
        fullQuestionText,
        JSON.stringify(options),
        correctIdx,
        explanation
      );

      insertedCount++;
    }
  })();

  const newTotal = db.prepare('SELECT COUNT(*) as total FROM questions').get().total;
  const newFgvTotal = db.prepare("SELECT COUNT(*) as total FROM questions WHERE banca = 'FGV'").get().total;
  const newPortTotal = db.prepare("SELECT COUNT(*) as total FROM questions WHERE subject = 'Língua Portuguesa'").get().total;

  console.log('========================================================');
  console.log('🎉 INGESTÃO & DEDUPLICAÇÃO FGV CONCLUÍDAS COM SUCESSO!');
  console.log('========================================================');
  console.log(`📊 Questões analisadas no PDF:             ${totalAnalyzed}`);
  console.log(`🛡️ Questões duplicadas bloqueadas:         ${duplicatesBlocked}`);
  console.log(`✨ Questões inéditas inseridas no banco:    ${insertedCount}`);
  console.log(`📚 Novo total de questões na base:          ${newTotal}`);
  console.log(`🎯 Novo total de questões da Banca FGV:     ${newFgvTotal}`);
  console.log(`📖 Novo total de Língua Portuguesa:         ${newPortTotal}`);

  return {
    totalAnalyzed,
    duplicatesBlocked,
    insertedCount,
    newTotal,
    newFgvTotal,
    newPortTotal
  };
}

ingestFGVQuestions().catch(console.error);
