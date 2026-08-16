import assert from 'assert';
import { 
  processUniversalPdf, 
  sanitizePdfText, 
  detectContentBoundaries, 
  extractTableOfContents,
  classifySubjectAndBanca,
  calculateReadingMetrics 
} from '../../server/utils/universal-pdf-parser.js';

export async function runUniversalPdfTests() {
  console.log('\n📄 [TEST SUITE: Universal PDF Parser & Heuristics]');

  // 1. Sanitização de Ruídos
  const rawTextWithNoise = `
    Apostila de Direito Tributário
    O uso deste material é exclusivo de Joao Silva
    Licenciado para joao@email.com - CPF 123.456.789-00
    Página 1 de 50
    www.cursopreparatorio.com.br
    
    Art. 3º Tributo é toda prestação pecuniária compulsória...
  `;
  const sanitized = sanitizePdfText(rawTextWithNoise);
  assert.strictEqual(sanitized.includes('123.456.789-00'), false, 'CPF não foi removido');
  assert.strictEqual(sanitized.includes('joao@email.com'), false, 'Email não foi removido');
  console.log('  ✅ 1. Sanitização de Ruídos e Marcas d Água: PASSOU');

  // 2. Detecção de Fronteira Teoria vs Questões
  const mixedBookText = `
    CONTEÚDO DA AULA
    1. Competência Tributária
    O CTN e a CF/88 definem a competência tributária privativa, comum e cumulativa...
    
    QUESTÕES COMENTADAS
    1. (FGV - 2023 - Receita Federal - Analista Tributário)
    Sobre o lançamento por homologação, assinale a opção correta.
    Gabarito: Letra B.
  `;
  const boundaries = detectContentBoundaries(mixedBookText, 100);
  assert.strictEqual(boundaries.hasExercises, true, 'Deveria detectar bloco de exercícios');
  assert.ok(boundaries.estimatedTheoryPages > 0, 'Deveria estimar páginas de teoria');
  console.log('  ✅ 2. Detecção de Fronteira Teoria vs Questões: PASSOU');

  // 3. Extração de Sumário
  const bookWithToc = `
    SUMÁRIO
    1. Conceito e Classificação dos Tributos ........ 5
    2. Espécies Tributárias na CF/88 ................ 15
    3. Princípios e Imunidades ...................... 30
  `;
  const toc = extractTableOfContents(bookWithToc);
  assert.ok(toc.length >= 2, 'Deveria extrair tópicos do sumário');
  console.log(`  ✅ 3. Extração Universal de Sumário (${toc.length} tópicos): PASSOU`);

  // 4. Classificação Semântica
  const sample = `
    Decreto 6.759/2009 - Regulamento Aduaneiro.
    Regimes aduaneiros especiais: Drawback, Admissão Temporária.
    Banca Examinadora: Fundação Getulio Vargas (FGV).
  `;
  const classification = classifySubjectAndBanca(sample, 'apostila.pdf');
  assert.strictEqual(classification.subject, 'Legislação Aduaneira');
  assert.strictEqual(classification.banca, 'FGV');
  console.log('  ✅ 4. Classificação Semântica de Matéria e Banca: PASSOU');

  // 5. Métricas de Leitura
  const metrics = calculateReadingMetrics(mixedBookText, 10, 180);
  assert.ok(metrics.totalWords > 0);
  console.log('  ✅ 5. Cálculo de Ritmo e Métricas de Leitura: PASSOU');
}

if (process.argv[1]?.endsWith('universal_pdf.test.js')) {
  runUniversalPdfTests().then(() => console.log('🎉 Todos os testes unitários passaram!'));
}
