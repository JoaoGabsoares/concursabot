import assert from 'assert';
import { ragKnowledgeService } from '../../server/services/RagKnowledgeService.js';
import { authService } from '../../server/services/AuthService.js';
import db from '../../server/database.js';

export async function runRagKnowledgeTests(baseUrl = 'http://localhost:3000') {
  console.log('\n🧠 [TEST SUITE: RAG Knowledge Base ATRFB & FTS5 Hybrid Engine]');

  // 0. Registrar e Autenticar Usuário de Teste (via AuthService para isolamento de testes)
  const username = `user_rag_${Date.now()}`;
  const reg = authService.register(username, 'SenhaSegura123!', `${username}@teste.com`);
  const token = reg.token;
  const authHeaders = { 'Authorization': `Bearer ${token}`, 'x-account-token': token };

  // 0.1. Se o banco de testes estiver limpo (totalDocuments == 0), provisiona fixtures de teste
  let stats = ragKnowledgeService.getStats();
  if (stats.totalDocuments === 0) {
    console.log('  ℹ️ Banco de testes limpo detectado: provisionando fixtures de acervo RAG ATRFB...');
    const sampleDocs = [
      {
        file_path: 'materiais/atrfb/direito_tributario/aula_01_imunidades.md',
        subject: 'Direito Tributário',
        module_type: 'Teoria e Doutrina',
        lesson_number: '01',
        title: 'Sistema Tributário Nacional e Imunidades Constitucionais',
        tags_json: JSON.stringify(['tributario', 'imunidade', 'cf88', 'fgv']),
        articles_cited_json: JSON.stringify(['Artigo 150 CF', 'Art. 150, VI, a da CF/88', 'Artigo 151']),
        sumulas_cited_json: JSON.stringify(['Súmula Vinculante 52', 'Súmula 724 STF']),
        content_markdown: 'O Artigo 150 CF estabelece as limitações ao poder de tributar, contemplando a imunidade tributaria recíproca e dos templos de qualquer culto. O princípio da anterioridade nonagesimal e anual garante a segurança jurídica aos contribuintes.',
        char_count: 55000
      },
      {
        file_path: 'materiais/atrfb/direito_tributario/aula_02_competencia.md',
        subject: 'Direito Tributário',
        module_type: 'Teoria e Doutrina',
        lesson_number: '02',
        title: 'Competência Tributária e Capacidade Tributária Ativa',
        tags_json: JSON.stringify(['tributario', 'competencia', 'ctn']),
        articles_cited_json: JSON.stringify(['Artigo 6 CTN', 'Artigo 7 CTN']),
        sumulas_cited_json: JSON.stringify(['Súmula 583 STF']),
        content_markdown: 'A competencia tributaria é indelegável, intransferível e privativa de cada ente federado (União, Estados, DF e Municípios), cabendo à União os tributos residuais e extraordinários de guerra.',
        char_count: 48000
      },
      {
        file_path: 'materiais/atrfb/direito_constitucional/aula_01_direitos.md',
        subject: 'Direito Constitucional',
        module_type: 'Teoria e Doutrina',
        lesson_number: '01',
        title: 'Direitos e Garantias Fundamentais',
        tags_json: JSON.stringify(['constitucional', 'direitos_fundamentais', 'cf88']),
        articles_cited_json: JSON.stringify(['Artigo 5 CF']),
        sumulas_cited_json: JSON.stringify(['Súmula Vinculante 11']),
        content_markdown: 'Os direitos e deveres individuais e coletivos previstos no Artigo 5 CF possuem eficácia plena e aplicabilidade imediata.',
        char_count: 42000
      },
      {
        file_path: 'materiais/atrfb/direito_administrativo/aula_01_licitacoes.md',
        subject: 'Direito Administrativo',
        module_type: 'Teoria e Doutrina',
        lesson_number: '01',
        title: 'Nova Lei de Licitações (Lei 14.133/2021)',
        tags_json: JSON.stringify(['administrativo', 'licitacoes']),
        articles_cited_json: JSON.stringify(['Artigo 28 Lei 14.133']),
        sumulas_cited_json: JSON.stringify([]),
        content_markdown: 'Modalidades licitatórias previstas na Lei 14.133/2021: pregão, concorrência, concurso, leilão e diálogo competitivo.',
        char_count: 38000
      }
    ];

    const insertStmt = db.prepare(`
      INSERT OR IGNORE INTO atrfb_rag_documents (
        file_path, subject, module_type, lesson_number, title, tags_json, articles_cited_json, sumulas_cited_json, content_markdown, char_count
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const doc of sampleDocs) {
      insertStmt.run(
        doc.file_path, doc.subject, doc.module_type, doc.lesson_number,
        doc.title, doc.tags_json, doc.articles_cited_json, doc.sumulas_cited_json,
        doc.content_markdown, doc.char_count
      );
    }
    stats = ragKnowledgeService.getStats();
  }

  // 1. Validar estatísticas no serviço de domínio
  assert(stats.totalDocuments > 0, `Deve possuir documentos indexados no RAG (encontrados: ${stats.totalDocuments})`);
  assert(stats.totalChars > 0, `Deve possuir caracteres computados no acervo (encontrados: ${stats.totalChars})`);
  assert(stats.subjects.length > 0, 'Deve possuir disciplinas cadastradas no acervo RAG');
  console.log(`  ✅ 1. Estatísticas do Acervo ATRFB (${stats.totalDocuments} docs • ${(stats.totalChars / 1000).toFixed(1)}k chars): PASSOU`);

  // 2. Validar Busca Híbrida FTS5 por Artigo e Doutrina
  const tributarioResults = ragKnowledgeService.search('imunidade tributaria', { limit: 5 });
  assert(Array.isArray(tributarioResults) && tributarioResults.length > 0, 'Deve encontrar resultados para imunidade tributaria');
  assert(tributarioResults[0].title, 'Resultado deve possuir título');
  assert(tributarioResults[0].subject, 'Resultado deve possuir disciplina');

  const articleResults = ragKnowledgeService.search('Artigo 150 CF', { limit: 5 });
  assert(articleResults.length > 0, 'Deve encontrar documentos citando o Artigo 150');
  console.log(`  ✅ 2. Busca Híbrida FTS5 e Indexação de Artigos (${tributarioResults.length} resultados para termo doutrinário): PASSOU`);

  // 3. Validar Montagem de Contexto Aumentado com Citações
  const { contextBlock, sources } = ragKnowledgeService.buildAugmentedContext('O que é o princípio da anterioridade?', { subject: 'Direito Tributário', limit: 3 });
  assert(contextBlock.includes('ACERVO OFICIAL DE ESTUDO'), 'Contexto deve conter cabeçalho oficial');
  assert(sources.length > 0, 'Deve identificar fontes formais da aula');
  console.log(`  ✅ 3. Montagem de Contexto RAG com Fontes Formais (${sources.length} fontes mapeadas): PASSOU`);

  // 4. Testar Endpoint REST /api/rag/stats
  const statsRes = await fetch(`${baseUrl}/api/rag/stats`, { headers: authHeaders });
  assert.strictEqual(statsRes.status, 200, 'GET /api/rag/stats deve responder 200');
  const statsData = await statsRes.json();
  assert.strictEqual(statsData.success, true);
  assert(statsData.totalDocuments > 0);
  console.log(`  ✅ 4. Endpoint REST GET /api/rag/stats (${statsData.totalDocuments} documentos mapeados): PASSOU`);

  // 5. Testar Endpoint REST /api/rag/search
  const searchRes = await fetch(`${baseUrl}/api/rag/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({ query: 'competencia tributaria', topK: 3 })
  });
  assert.strictEqual(searchRes.status, 200, 'POST /api/rag/search deve responder 200');
  const searchData = await searchRes.json();
  assert.strictEqual(searchData.success, true);
  assert(searchData.results.length > 0);
  console.log(`  ✅ 5. Endpoint REST POST /api/rag/search (${searchData.results.length} resultados em milissegundos): PASSOU`);
}
