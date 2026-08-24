import http from 'http';
import assert from 'assert';
import db from '../../server/database.js';

const PORT = 3099;
const BASE_URL = `http://127.0.0.1:${PORT}`;

function makeRequest(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const reqOptions = {
      method: options.method || 'GET',
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    };

    const req = http.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, headers: res.headers, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, headers: res.headers, body: data });
        }
      });
    });

    req.on('error', reject);
    if (options.body) {
      req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

export async function runMultipagesAndHighlightsTests() {
  console.log('\n===============================================================');
  console.log('🧪 TEST SUITE: MULTI-PAGES ROUTER & PDF HIGHLIGHTS ENGINE');
  console.log('===============================================================');

  // 1. Criar usuário e conta de teste
  const testEmail = `router_tester_${Date.now()}@concurseiro.com`;
  const regRes = await makeRequest('/api/auth/register', {
    method: 'POST',
    body: { email: testEmail, password: 'StrongPassword123!', name: 'MultiPages Tester' }
  });
  assert.strictEqual(regRes.status, 201, 'Registro de conta de teste deve retornar 201');
  const token = regRes.body.token;
  const user = regRes.body.user;
  const authHeader = { 'Authorization': `Bearer ${token}` };

  console.log('  ✅ 1. Autenticação e Token de Sessão: PASSOU');

  // 2. Garantir que existe um material de teste
  let testMat = db.prepare('SELECT * FROM study_materials LIMIT 1').get();
  if (!testMat) {
    const info = db.prepare(`
      INSERT INTO study_materials (user_id, career_id, subject, title, filename, filepath, total_pages)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(user.id, 'atrfb', 'Direito Tributário', 'Apostila Teste CTN', 'teste.pdf', '/uploads/teste.pdf', 126);
    testMat = db.prepare('SELECT * FROM study_materials WHERE id = ?').get(info.lastInsertRowid);
  }

  const matId = testMat.id;
  console.log(`  ✅ 2. Material de Estudo Vinculado (ID: ${matId}): PASSOU`);

  // 3. Criar Grifos com todas as 5 cores semânticas e bounding rects
  const colors = ['yellow', 'green', 'purple', 'red', 'blue'];
  const createdHighlights = [];

  for (const c of colors) {
    const hRes = await makeRequest(`/api/study-room/materials/${matId}/highlights`, {
      method: 'POST',
      headers: authHeader,
      body: {
        page_number: 1,
        text: `Trecho grifado de teste na cor ${c}`,
        color: c,
        note: `Anotação de margem da cor ${c}`,
        position: {
          rects: [
            { left: 50, top: 120, width: 200, height: 16 }
          ]
        }
      }
    });

    assert.strictEqual(hRes.status, 201, `Criação de grifo na cor ${c} deve retornar 201`);
    assert.strictEqual(hRes.body.success, true, 'Resposta deve conter success: true');
    assert.strictEqual(hRes.body.highlight.color, c, `Cor do grifo deve ser ${c}`);
    assert.ok(hRes.body.highlight.position.rects.length > 0, 'Bounding rects devem ser persistidos no JSON');
    createdHighlights.push(hRes.body.highlight);
  }

  console.log('  ✅ 3. Criação de Grifos com 5 Cores Semânticas & Bounding Rects: PASSOU');

  // 4. Listar Grifos por Material (testando tanto string quanto integer no path)
  const listRes1 = await makeRequest(`/api/study-room/materials/${matId}/highlights`, {
    headers: authHeader
  });
  assert.strictEqual(listRes1.status, 200, 'Listagem com ID numérico deve retornar 200');
  assert.ok(listRes1.body.highlights.length >= 5, 'Deve retornar os 5 grifos criados');

  const listRes2 = await makeRequest(`/api/study-room/materials/${String(matId)}/highlights?page=1`, {
    headers: authHeader
  });
  assert.strictEqual(listRes2.status, 200, 'Listagem com ID em string e query page=1 deve retornar 200');
  assert.ok(listRes2.body.highlights.length >= 5, 'Deve retornar os grifos da página 1');

  console.log('  ✅ 4. Listagem e Filtro por Página (Tipagem Resiliente int/string): PASSOU');

  // 5. Atualizar Grifo (Alterar cor e nota)
  const targetH = createdHighlights[0];
  const updateRes = await makeRequest(`/api/study-room/highlights/${targetH.id}`, {
    method: 'PUT',
    headers: authHeader,
    body: {
      color: 'purple',
      note: 'Nota atualizada com sucesso'
    }
  });
  assert.strictEqual(updateRes.status, 200, 'Atualização de grifo deve retornar 200');
  assert.strictEqual(updateRes.body.highlight.color, 'purple', 'Cor deve ter sido alterada para purple');
  assert.strictEqual(updateRes.body.highlight.note, 'Nota atualizada com sucesso', 'Nota deve ter sido atualizada');

  console.log('  ✅ 5. Atualização de Grifo e Nota de Margem: PASSOU');

  // 6. Excluir Grifos (testando ambas as rotas /highlights/:id e /materials/:matId/highlights/:id)
  const delRes1 = await makeRequest(`/api/study-room/highlights/${createdHighlights[1].id}`, {
    method: 'DELETE',
    headers: authHeader
  });
  assert.strictEqual(delRes1.status, 200, 'Exclusão via /highlights/:id deve retornar 200');

  const delRes2 = await makeRequest(`/api/study-room/materials/${matId}/highlights/${createdHighlights[2].id}`, {
    method: 'DELETE',
    headers: authHeader
  });
  assert.strictEqual(delRes2.status, 200, 'Exclusão via /materials/:matId/highlights/:id deve retornar 200');

  console.log('  ✅ 6. Exclusão de Grifos com Rotas Canônicas e Aliases: PASSOU');

  // 7. Teste de SPA Fallback e Roteamento de Abas
  const spaRes = await makeRequest('/leitor/10016');
  assert.strictEqual(spaRes.status, 200, 'Rotas diretas do frontend devem responder 200 servindo a SPA');

  console.log('  ✅ 7. Servidor SPA Fallback para Rotas de Menus e Abas: PASSOU');

  console.log('\n🎉 TODOS OS TESTES DE MULTI-PÁGINAS & MOTOR DE GRIFOS FORAM APROVADOS!');
  console.log('===============================================================\n');
}

// Se executado diretamente via node
if (process.argv[1]?.endsWith('multipages_and_pdf_highlights.test.js')) {
  runMultipagesAndHighlightsTests().catch(err => {
    console.error('❌ Falha nos testes:', err);
    process.exit(1);
  });
}
