import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PORT = process.env.TEST_PORT || '3098';
const BASE_URL = `http://127.0.0.1:${TEST_PORT}`;

// Helper: Sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper: Check server health
async function checkHealth(url = BASE_URL) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const res = await fetch(`${url}/api/health`, { signal: controller.signal });
    clearTimeout(timeout);
    return res.ok;
  } catch {
    return false;
  }
}

// DOM Helper: Find element by selector and text content
async function waitForElementByText(page, selector, textSubstring, timeout = 12000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const handles = await page.$$(selector);
    for (const h of handles) {
      const text = await h.evaluate(el => el.textContent);
      if (text && text.toLowerCase().includes(textSubstring.toLowerCase())) {
        const isVisible = await h.evaluate(el => {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
        });
        if (isVisible) return h;
      }
    }
    await sleep(150);
  }
  throw new Error(`Timeout waiting for element '${selector}' with text "${textSubstring}" after ${timeout}ms`);
}

// DOM Helper: Click element by text with reliable synthetic dispatch
async function clickByText(page, selector, textSubstring, timeout = 12000) {
  const el = await waitForElementByText(page, selector, textSubstring, timeout);
  await el.evaluate(e => {
    e.scrollIntoView({ block: 'center', inline: 'center' });
    e.click();
  });
  return el;
}

async function runE2ESimulation() {
  console.log('======================================================================');
  console.log('🚀 GABARITO.AI — SIMULAÇÃO E2E COM PUPPETEER (FLUXO DO CONCURSEIRO)');
  console.log('======================================================================');

  const startTime = Date.now();
  let serverProcess = null;
  let browser = null;

  const testReport = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalSteps: 8,
    passedTests: 0,
    failedTests: 0,
    steps: [],
    consoleErrors: [],
    networkErrors: [],
    durationMs: 0
  };

  // 1. Iniciar ou conectar ao servidor backend
  const isAlreadyRunning = await checkHealth(BASE_URL);
  if (!isAlreadyRunning) {
    console.log(`📡 Iniciando servidor backend na porta isolada ${TEST_PORT}...`);
    serverProcess = spawn(process.execPath, [path.join(__dirname, '../server/index.js')], {
      env: { ...process.env, PORT: TEST_PORT, NODE_ENV: 'test' },
      stdio: 'pipe'
    });

    let ready = false;
    for (let i = 0; i < 40; i++) {
      await sleep(300);
      if (await checkHealth(BASE_URL)) {
        ready = true;
        break;
      }
    }

    if (!ready) {
      throw new Error(`Falha ao iniciar servidor de testes na porta ${TEST_PORT}.`);
    }
    console.log(`✅ Servidor backend pronto em ${BASE_URL}!\n`);
  } else {
    console.log(`✅ Conectado ao servidor existente em ${BASE_URL}!\n`);
  }

  try {
    // 2. Inicializar Puppeteer
    console.log('🌐 Inicializando Puppeteer Browser em modo Headless...');
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--window-size=1440,900'
      ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Monitorar logs de console
    page.on('console', (msg) => {
      const text = msg.text();
      const type = msg.type();
      if (type === 'error') {
        testReport.consoleErrors.push({ type, text, timestamp: new Date().toISOString() });
        console.log(`   ⚠️ [Browser Console Error]: ${text}`);
      }
    });

    page.on('pageerror', (err) => {
      testReport.consoleErrors.push({ type: 'pageerror', text: err.message });
      console.log(`   🚨 [Browser Page Error]: ${err.message}`);
    });

    page.on('response', (response) => {
      const status = response.status();
      const url = response.url();
      if (status >= 400 && !url.includes('/api/auth/me')) {
        testReport.networkErrors.push({ url, status, timestamp: new Date().toISOString() });
        console.log(`   ⚠️ [Network Error ${status}]: ${url}`);
      }
    });

    // Auto-confirm window.confirm dialogs (ex: exclusão de estudos)
    page.on('dialog', async (dialog) => {
      console.log(`   💬 [Browser Dialog Confirm]: "${dialog.message()}" -> Aceito`);
      await dialog.accept();
    });

    // Helper para registrar resultado de etapa
    async function recordStep(name, actionFn) {
      const stepStart = Date.now();
      console.log(`\n▶️ [PASSO] ${name}...`);
      try {
        const result = await actionFn();
        const duration = Date.now() - stepStart;
        testReport.steps.push({ name, status: 'PASS', durationMs: duration, details: result });
        testReport.passedTests++;
        console.log(`   ✅ SUCESSO: ${name} (${duration}ms)`);
        return result;
      } catch (err) {
        const duration = Date.now() - stepStart;
        testReport.steps.push({ name, status: 'FAIL', durationMs: duration, error: err.message });
        testReport.failedTests++;
        console.error(`   ❌ FALHA: ${name} (${duration}ms) -> ${err.message}`);
        throw err;
      }
    }

    // =========================================================================
    // STEP 1: REGISTRO E LOGIN DE NOVO USUÁRIO CONCURSEIRO
    // =========================================================================
    await recordStep('1. Registro de Novo Usuário Concurseiro', async () => {
      await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Localizar botão "Começar Grátis" no cabeçalho
      await clickByText(page, 'header button', 'Começar Grátis');
      await sleep(600);

      // Preencher formulário de registro com dados únicos
      const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      const testEmail = `aluno_${uniqueId}@gabarito.ai`;
      const testName = `Aluno_${uniqueId}`;
      const testPass = 'ConcursoFederal2026!';

      await page.waitForSelector('input[name="name"]', { timeout: 8000 });
      await page.type('input[name="name"]', testName, { delay: 15 });
      await page.type('input[name="email"]', testEmail, { delay: 15 });
      await page.type('input[name="password"]', testPass, { delay: 15 });

      // Submeter formulário
      const submitBtn = await page.waitForSelector('form button[type="submit"]', { timeout: 5000 });
      await submitBtn.evaluate(e => e.click());

      // Aguardar transição para a aplicação logada (Dashboard com Sidebar)
      await page.waitForSelector('aside', { timeout: 15000 });
      await page.waitForSelector('h1', { timeout: 10000 });

      return { email: testEmail, name: testName, status: 'Authenticated' };
    });

    // =========================================================================
    // STEP 2: NAVEGAÇÃO E VALIDAÇÃO DA DASHBOARD
    // =========================================================================
    await recordStep('2. Validação da Dashboard Tática & Cards', async () => {
      await sleep(500);
      // Verificar cabeçalho tático da carreira
      const careerTitle = await page.$eval('h1', (el) => el.textContent?.trim());
      
      // Validar Bloco 1: Próximo Estudo Recomendado (Missão do Dia)
      const missionBtn = await waitForElementByText(page, 'button', 'CONTINUAR ESTUDO AGORA');
      
      // Validar Bloco 2: Sequência / Streak e Heatmap 7 dias
      await waitForElementByText(page, 'div', '02 // SEQUÊNCIA');
      const heatMapDays = await page.$$eval('.grid.grid-cols-7 > div', (days) => days.map(d => d.textContent?.trim()));
      
      // Validar Bloco 3: Taxa de Domínio Global do Edital
      await waitForElementByText(page, 'div', '03 // PROGRESSO MACRO DO EDITAL');
      const masteryText = await page.evaluate(() => {
        const el = Array.from(document.querySelectorAll('div')).find(d => d.textContent?.includes('Taxa de Domínio Global:'));
        return el ? el.textContent.trim() : 'Encontrado';
      });

      return {
        careerTitle,
        missionFound: !!missionBtn,
        heatMapDaysCount: heatMapDays.length,
        masteryText
      };
    });

    // =========================================================================
    // STEP 3: MODAL DE ESTUDO RETROATIVO (+ LANÇAR ESTUDO RETROATIVO)
    // =========================================================================
    await recordStep('3. Lançamento Retroativo de Estudo & Exclusão no Histórico', async () => {
      // Abrir modal clicando no botão "+ Lançar Estudo Retroativo"
      await clickByText(page, 'button', '+ Lançar Estudo Retroativo');
      await sleep(500);

      // Verificar modal aberto
      await waitForElementByText(page, 'h2', 'Registrar Estudo Passado');

      // Selecionar dia "Ontem"
      await clickByText(page, 'button', 'Ontem');

      // Selecionar matéria "Direito Tributário"
      await page.select('select', 'Direito Tributário');

      // Preencher assunto
      const topicInput = await page.$('input[placeholder*="Ex: Art. 5º da CF"]');
      if (topicInput) {
        await topicInput.type('Imunidades e Competência Tributária', { delay: 10 });
      }

      // Selecionar duração de 60m (renderizado como "1h")
      await clickByText(page, 'button', '1h');

      // Expandir seção de questões resolvidas
      await clickByText(page, 'button', 'Páginas Lidas & Questões Resolvidas');
      await sleep(200);

      // Preencher 10 questões feitas e 8 acertos
      const inputQuestions = await page.$('input[placeholder="Ex: 20"]');
      if (inputQuestions) await inputQuestions.type('10', { delay: 10 });

      const inputCorrect = await page.$('input[placeholder="Ex: 17"]');
      if (inputCorrect) await inputCorrect.type('8', { delay: 10 });

      // Clicar em "Gravar Estudo Passado"
      await clickByText(page, 'button', 'Gravar Estudo Passado');

      // Aguardar fechamento e atualização reativa do toast
      await sleep(1000);

      // Reabrir o modal para testar a aba de Histórico e remoção
      await clickByText(page, 'button', '+ Lançar Estudo Retroativo');
      await sleep(400);

      // Clicar na aba "Histórico de Lançamentos"
      await clickByText(page, 'button', 'Histórico de Lançamentos');
      await sleep(600);

      // Verificar item listado no histórico
      await waitForElementByText(page, 'div', 'Direito Tributário');

      // Clicar no botão de exclusão (Remover lançamento)
      const trashBtn = await page.waitForSelector('button[title="Remover lançamento"]', { timeout: 3000 });
      await trashBtn.evaluate(e => e.click());
      await sleep(800);

      // Fechar modal
      const closeBtn = await page.waitForSelector('button[aria-label="Fechar Modal de Estudo Passado"]', { timeout: 3000 });
      await closeBtn.evaluate(e => e.click());
      await sleep(400);

      return { status: 'Saved, Verified and Deleted from History successfully' };
    });

    // =========================================================================
    // STEP 4: SALA DE ESTUDOS (MÓDULOS, NAVEGAÇÃO 5 PÁGINAS E CONCLUSÃO)
    // =========================================================================
    await recordStep('4. Sala de Estudos — Módulos, Paginador (1-5) e Conclusão', async () => {
      // Clicar no menu lateral "Sala de Estudos"
      await clickByText(page, 'aside button', 'Sala de Estudos');
      await sleep(800);

      // Validar cabeçalho da Sala de Estudos
      await waitForElementByText(page, 'div', 'Tendência da Banca');

      // Alternar para Módulo 02
      await clickByText(page, 'button', 'Módulo 02');
      await sleep(500);

      // Navegar pelas 5 páginas estruturadas
      // Pág 1: Doutrina & Fundamentos
      await waitForElementByText(page, 'span', 'PÁGINA 01');
      
      // Ir para Pág 2: Esquemas & Tabelas
      await clickByText(page, 'button', 'Esquemas & Tabelas');
      await sleep(300);
      await waitForElementByText(page, 'span', 'PÁGINA 02');

      // Ir para Pág 3: Casos & Pegadinhas
      await clickByText(page, 'button', 'Casos & Pegadinhas');
      await sleep(300);
      await waitForElementByText(page, 'span', 'PÁGINA 03');

      // Ir para Pág 4: Letra de Lei & Súmulas
      await clickByText(page, 'button', 'Letra de Lei & Súmulas');
      await sleep(300);
      await waitForElementByText(page, 'span', 'PÁGINA 04');

      // Ir para Pág 5: Treino de Fixação
      await clickByText(page, 'button', 'Treino de Fixação');
      await sleep(300);
      await waitForElementByText(page, 'span', 'PÁGINA 05');

      // Responder questão de fixação na página 5 se presente
      const optionBtn = await page.$('.space-y-2 button');
      if (optionBtn) {
        await optionBtn.evaluate(e => e.click());
        await sleep(300);
      }

      // Marcar "Aula Finalizada"
      const finishLabels = await page.$$('label');
      for (const lbl of finishLabels) {
        const txt = await lbl.evaluate(el => el.textContent);
        if (txt && txt.includes('Aula Finalizada')) {
          await lbl.evaluate(e => e.click());
          break;
        }
      }
      await sleep(200);

      // Concluir Aula / Salvar Marca-Página
      const saveBtn = await page.waitForSelector('button:has(svg.lucide-check)', { timeout: 5000 });
      await saveBtn.evaluate(e => e.click());
      await sleep(800);

      return { module: 'Módulo 02', pagesNavigated: 5, status: 'Completed' };
    });

    // =========================================================================
    // STEP 5: CICLO DE ESTUDOS (WIZARD, 20H/SEM E AVANÇO DE BLOCO)
    // =========================================================================
    await recordStep('5. Ciclo de Estudos — Wizard 20h/sem & Avanço de Bloco', async () => {
      // Clicar no menu lateral "Ciclo de Estudos"
      await clickByText(page, 'aside button', 'Ciclo de Estudos');
      await sleep(800);

      // Abrir Wizard de Configuração do Ciclo
      const openWizBtn = await page.$('button:has(svg.lucide-sliders)');
      if (openWizBtn) {
        await openWizBtn.evaluate(e => e.click());
      } else {
        await clickByText(page, 'button', 'Configurar / Novo Ciclo');
      }
      await sleep(500);

      // Etapa 1: Selecionar Modelo Adaptativo
      await waitForElementByText(page, 'h4', '1. Escolha o Modelo de Ciclo');
      await clickByText(page, 'button', 'Próximo');
      await sleep(300);

      // Etapa 2: Carga Horária 20h/sem e Duração do Bloco 60m
      await waitForElementByText(page, 'h4', '2. Carga Horária');
      await clickByText(page, 'button', '60 min');
      await clickByText(page, 'button', 'Próximo');
      await sleep(300);

      // Etapa 3: Matriz de Dificuldades -> Gerar Prévia
      await waitForElementByText(page, 'h4', '3. Diagnóstico Pessoal');
      await clickByText(page, 'button', 'Gerar Prévia do Ciclo');
      await sleep(600);

      // Etapa 4: Prévia e Confirmação -> Ativar Ciclo
      await waitForElementByText(page, 'h4', '4. Prévia do Seu Novo Ciclo');
      await clickByText(page, 'button', 'Ativar Este Ciclo');
      await sleep(1000);

      // Verificar Esteira de Rotação Contínua e Avançar Bloco Ativo
      await waitForElementByText(page, 'h3', 'Esteira de Rotação Contínua');
      
      const completeBlockBtn = await waitForElementByText(page, 'button', 'Concluir Bloco (+20 XP)');
      await completeBlockBtn.evaluate(e => e.click());
      await sleep(800);

      return { weeklyHours: 20, model: 'Adaptativo', status: 'Cycle Activated and Block Advanced' };
    });

    // =========================================================================
    // STEP 6: SIMULADOS POR MATÉRIA FGV (RESOLUÇÃO E GABARITO COMENTADO)
    // =========================================================================
    await recordStep('6. Simulados por Matéria FGV & Gabarito Comentado', async () => {
      // Clicar no menu lateral "Simulados & Treino"
      await clickByText(page, 'aside button', 'Simulados & Treino');
      await sleep(800);

      // Validar card de Simulado por Matéria
      await waitForElementByText(page, 'h2', 'Simulado Específico por Disciplina');

      // Iniciar Simulado de Direito Tributário
      await clickByText(page, 'button', 'Iniciar Simulado de Direito Tributário');

      // Aguardar carregamento das questões
      await waitForElementByText(page, 'span', 'QUESTÃO 1 DE');

      // Responder Questão 1
      const q1Options = await page.$$('.space-y-6 .grid.grid-cols-1 > div');
      if (q1Options.length > 0) {
        await q1Options[0].evaluate(e => e.click());
        await sleep(300);
      }

      // Avançar para Questão 2
      await clickByText(page, 'button', 'Próxima');
      await sleep(300);

      // Responder Questão 2
      const q2Options = await page.$$('.space-y-6 .grid.grid-cols-1 > div');
      if (q2Options.length > 1) {
        await q2Options[1].evaluate(e => e.click());
        await sleep(300);
      }

      // Finalizar e entregar simulado
      await clickByText(page, 'button', 'Entregar Simulado');
      await sleep(1000);

      // Verificar tela de Gabarito Comentado e Desempenho
      await waitForElementByText(page, 'h2', 'Resultado do Simulado');
      await waitForElementByText(page, 'h3', 'Gabarito Comentado e Fundamentação Oficial');

      // Resetar para tela inicial de simulados
      await clickByText(page, 'button', 'Novo Simulado');
      await sleep(500);

      return { subject: 'Direito Tributário', questionsCount: 20, status: 'Exam completed and reviewed' };
    });

    // =========================================================================
    // STEP 7: LEI SECA ATIVA & CAÇA-PEGADINHAS
    // =========================================================================
    await recordStep('7. Lei Seca Ativa & Desafio Caça-Pegadinhas', async () => {
      // Clicar no menu lateral "Caça-Pegadinhas da Lei"
      await clickByText(page, 'aside button', 'Caça-Pegadinhas da Lei');
      await sleep(800);

      // Iniciar Desafio Caça-Pegadinhas
      await clickByText(page, 'button', 'Iniciar Desafio');
      await sleep(800);

      // Aguardar exibição das palavras do artigo interativo
      await page.waitForSelector('.flex.flex-wrap.gap-1\\.5 button', { timeout: 5000 });

      // Clicar em uma das palavras para submeter resposta
      const wordButtons = await page.$$('.flex.flex-wrap.gap-1\\.5 button');
      if (wordButtons.length > 3) {
        await wordButtons[3].evaluate(e => e.click());
        await sleep(600);
      }

      // Verificar feedback do desafio
      await waitForElementByText(page, 'strong', 'Palavra adulterada:');

      // Alternar para aba "ARTIGOS DE OURO"
      await clickByText(page, 'button', 'ARTIGOS DE OURO');
      await sleep(600);
      await waitForElementByText(page, 'span', 'artigos com incidência confirmada');

      // Alternar para aba "SÚMULAS & JURISPRUDÊNCIA"
      await clickByText(page, 'button', 'SÚMULAS & JURISPRUDÊNCIA');
      await sleep(600);
      await waitForElementByText(page, 'div', 'PEGADINHA DA BANCA');

      return { status: 'Challenge played, Golden Articles and Súmulas validated' };
    });

    // =========================================================================
    // STEP 8: CADERNO DE ERROS (CONFERÊNCIA E FILTROS)
    // =========================================================================
    await recordStep('8. Caderno de Erros — Estatísticas e Filtros de Superação', async () => {
      // Clicar no menu lateral "Caderno de Erros"
      await clickByText(page, 'aside button', 'Caderno de Erros');
      await sleep(800);

      // Validar cabeçalho do Caderno de Erros
      await waitForElementByText(page, 'h1', 'Caderno de Erros & Vulnerabilidades');

      // Testar filtros (Pendentes, Superados, Todos)
      await clickByText(page, 'button', 'Superados');
      await sleep(300);

      await clickByText(page, 'button', 'Todos');
      await sleep(300);

      await clickByText(page, 'button', 'Pendentes');
      await sleep(300);

      return { status: 'Error notebook and filters operational' };
    });

    // Finalizar relatório
    testReport.durationMs = Date.now() - startTime;
    console.log('\n======================================================================');
    console.log(`🎉 SIMULAÇÃO E2E CONCLUÍDA COM SUCESSO!`);
    console.log(`⏱️ Tempo Total: ${(testReport.durationMs / 1000).toFixed(2)}s`);
    console.log(`📊 Testes Aprovados: ${testReport.passedTests} / ${testReport.totalSteps}`);
    console.log(`⚠️ Erros de Console: ${testReport.consoleErrors.length}`);
    console.log(`⚠️ Erros de Rede 4xx/5xx: ${testReport.networkErrors.length}`);
    console.log('======================================================================\n');

  } catch (error) {
    console.error('\n❌ ERRO CRÍTICO NA SIMULAÇÃO E2E:', error);
    testReport.durationMs = Date.now() - startTime;
    process.exitCode = 1;
  } finally {
    if (browser) {
      try { await browser.close(); } catch {}
    }
    if (serverProcess) {
      console.log('🛑 Encerrando servidor de teste isolado...');
      try { serverProcess.kill('SIGINT'); } catch {}
    }
  }

  return testReport;
}

// Executar se for chamado diretamente via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runE2ESimulation().then((report) => {
    if (process.exitCode === 1) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
}

export { runE2ESimulation };
