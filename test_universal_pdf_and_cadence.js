import assert from 'assert';
import { 
  processUniversalPdf, 
  sanitizePdfText, 
  detectContentBoundaries, 
  extractTableOfContents,
  classifySubjectAndBanca,
  calculateReadingMetrics 
} from './server/utils/universal-pdf-parser.js';

async function testUniversalPdfParser() {
  console.log('🧪 Iniciando Teste Unitário do Motor Universal de PDFs e Heurísticas...');

  // 1. Teste de Sanitização de Ruídos
  const rawTextWithNoise = `
    Apostila de Direito Tributário
    O uso deste material é exclusivo de Joao Silva
    Licenciado para joao@email.com - CPF 123.456.789-00
    Página 1 de 50
    www.cursopreparatorio.com.br
    
    Art. 3º Tributo é toda prestação pecuniária compulsória...
  `;
  const sanitized = sanitizePdfText(rawTextWithNoise);
  console.log('1. Sanitização de Ruídos:', sanitized.includes('CPF') ? '❌ FALHA' : '✅ SUCESSO');
  assert.strictEqual(sanitized.includes('123.456.789-00'), false);
  assert.strictEqual(sanitized.includes('joao@email.com'), false);

  // 2. Teste de Detecção de Fronteira Teoria vs Questões
  const mixedBookText = `
    CONTEÚDO DA AULA
    1. Competência Tributária
    O CTN e a CF/88 definem a competência tributária privativa, comum e cumulativa...
    O fato gerador ocorre com a subsunção do fato à norma.
    
    QUESTÕES COMENTADAS
    1. (FGV - 2023 - Receita Federal - Analista Tributário)
    Sobre o lançamento por homologação, assinale a opção correta.
    A) Ocorre sem pagamento prévio.
    B) Extingue o crédito sob condição resolutória.
    Gabarito: Letra B.
  `;
  const boundaries = detectContentBoundaries(mixedBookText, 100);
  console.log('2. Detecção de Fronteira Teoria vs Questões:');
  console.log(`   - Tem Exercícios: ${boundaries.hasExercises}`);
  console.log(`   - Teoria Estimada: ${boundaries.estimatedTheoryPages} págs`);
  console.log(`   - Exercícios Estimados: ${boundaries.estimatedExercisePages} págs`);
  console.log(`   - Separador Detectado: "${boundaries.detectedSeparator}"`);
  assert.strictEqual(boundaries.hasExercises, true);
  assert.ok(boundaries.estimatedTheoryPages > 0);

  // 3. Teste de Extração de Sumário
  const bookWithToc = `
    SUMÁRIO
    1. Conceito e Classificação dos Tributos ........ 5
    2. Espécies Tributárias na CF/88 ................ 15
    3. Princípios e Imunidades ...................... 30
    
    AULA 01 - INTRODUÇÃO
    Iniciando o estudo de direito tributário...
  `;
  const toc = extractTableOfContents(bookWithToc);
  console.log('3. Extração de Sumário: Encontrados', toc.length, 'tópicos:');
  toc.forEach(t => console.log(`   • ${t.title} -> pág. ${t.page}`));
  assert.ok(toc.length >= 2);

  // 4. Teste de Classificação Semântica de Disciplina e Banca
  const aduaneiroSample = `
    Decreto 6.759/2009 - Regulamento Aduaneiro.
    O despacho aduaneiro de importação é processado no Siscomex.
    Regimes aduaneiros especiais: Drawback, Admissão Temporária e Entreposto Aduaneiro.
    A pena de perdimento da mercadoria será aplicada pela autoridade fiscal.
    Banca Examinadora: Fundação Getulio Vargas (FGV).
  `;
  const classification = classifySubjectAndBanca(aduaneiroSample, 'apostila_modulo_3.pdf');
  console.log('4. Classificação Semântica:', classification.subject, '| Banca:', classification.banca, '| Confiança:', classification.confidence);
  assert.strictEqual(classification.subject, 'Legislação Aduaneira');
  assert.strictEqual(classification.banca, 'FGV');

  // 5. Teste de Métricas de Leitura
  const metrics = calculateReadingMetrics(mixedBookText, 10, 180);
  console.log('5. Métricas de Leitura:', `${metrics.totalWords} palavras • Estimativa: ${metrics.estimatedReadingMinutesTotal} min • ${metrics.estimatedPagesPerHour} págs/hora`);
  assert.ok(metrics.totalWords > 0);

  // 6. Teste Universal Integrado
  const fullResult = processUniversalPdf(mixedBookText, 50, 'Aula_01_Tributario.pdf');
  console.log('6. Pipeline Universal Integrado:');
  console.log(`   - Matéria: ${fullResult.subject}`);
  console.log(`   - Total Páginas: ${fullResult.totalPages} (Teoria: ${fullResult.theoryPages}p | Exercícios: ${fullResult.exercisePages}p)`);
  assert.strictEqual(fullResult.subject, 'Direito Tributário');

  console.log('\n======================================================');
  console.log('🎉 TODOS OS TESTES DO MOTOR UNIVERSAL DE PDFS PASSARAM!');
  console.log('======================================================\n');
}

testUniversalPdfParser().catch(err => {
  console.error('❌ Falha nos testes:', err);
  process.exit(1);
});
