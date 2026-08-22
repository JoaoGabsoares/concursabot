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

  // 1. Validar estatísticas no serviço de domínio
  const stats = ragKnowledgeService.getStats();
  assert(stats.totalDocuments >= 3500, `Deve possuir pelo menos 3500 documentos indexados (encontrados: ${stats.totalDocuments})`);
  assert(stats.totalChars > 150000000, `Deve possuir mais de 150M de caracteres de doutrina (encontrados: ${stats.totalChars})`);
  assert(stats.subjects.length >= 8, 'Deve cobrir pelo menos 8 polos disciplinares da Receita Federal');
  console.log(`  ✅ 1. Estatísticas do Acervo ATRFB (${stats.totalDocuments} docs • ${(stats.totalChars / 1000000).toFixed(1)}M chars): PASSOU`);

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
  assert(statsData.totalDocuments >= 3500);
  console.log(`  ✅ 4. Endpoint REST GET /api/rag/stats: PASSOU`);

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
