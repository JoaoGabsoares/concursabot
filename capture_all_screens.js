import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = '/home/joao/Imagens/auditoria_telas';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function runVisualAudit() {
  console.log('🚀 Iniciando Auditoria Visual e Mapeamento Completo do Gabarito.AI...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const auditLog = [];

  // Helper para captura
  async function snap(name, description) {
    const filename = `${name}.png`;
    const filePath = path.join(outputDir, filename);
    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`📸 [Captura] ${name} -> ${description}`);
    auditLog.push({ name, description, file: filePath });
  }

  // Helper para clique por texto
  async function clickButtonWithText(textPattern) {
    const btns = await page.$$('button');
    for (const btn of btns) {
      const text = await (await btn.getProperty('textContent')).jsonValue();
      if (text && text.includes(textPattern)) {
        await btn.click();
        await new Promise(r => setTimeout(r, 600));
        return true;
      }
    }
    return false;
  }

  // Setup localStorage with clean user
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    localStorage.setItem('CURRENT_USER_ID', 'user_joao');
    localStorage.setItem('SELECTED_CAREER', 'atrfb');
    localStorage.setItem('THEME', 'dark');
  });

  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // 1. Dashboard Desktop Dark (Receita Federal)
  await snap('01_dashboard_receita_federal', 'Dashboard Geral - Receita Federal ATRFB (Dark, 0 XP Inicial)');

  // 2. Troca de Carreira no Dashboard (Banco do Brasil Comercial)
  await page.evaluate(() => {
    localStorage.setItem('SELECTED_CAREER', 'bb_comercial');
  });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await snap('02_dashboard_bb_comercial', 'Dashboard Geral - Banco do Brasil Comercial (Cesgranrio)');

  // Voltar para Receita Federal
  await page.evaluate(() => {
    localStorage.setItem('SELECTED_CAREER', 'atrfb');
  });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // 3. Sala de Estudos (Study Room)
  await clickButtonWithText('Sala de Estudos');
  await snap('03_study_room_tributario', 'Sala de Estudos - Direito Tributário (FGV)');

  // 4. Clica em Direito Constitucional
  await clickButtonWithText('Direito Constitucional');
  await snap('04_study_room_constitucional', 'Sala de Estudos - Direito Constitucional (Eficácia & Remédios)');

  // 5. Clica em Direito Administrativo
  await clickButtonWithText('Direito Administrativo');
  await snap('05_study_room_administrativo', 'Sala de Estudos - Direito Administrativo (Atos & Desvio)');

  // 6. Clica no Botão "+ Subir PDF da Aula"
  await clickButtonWithText('Subir PDF');
  await snap('06_study_room_upload_modal', 'Modal de Upload de PDF da Aula (RAG 2.0)');

  // Fecha modal de upload
  await clickButtonWithText('Cancelar');

  // 7. Simulados & Treino Real
  await clickButtonWithText('Simulados & Treino');
  await snap('07_simulados_screen', 'Tela de Simulados Oficiais Cronometrados');

  // Iniciar Simulado
  await clickButtonWithText('Iniciar Simulado');
  await snap('08_simulado_executando', 'Simulado em Execução com Cronômetro e Mapa de Respostas');

  // 8. Caderno de Erros
  await clickButtonWithText('Caderno de Erros');
  await snap('09_caderno_de_erros', 'Caderno de Erros & Vulnerabilidades (Estado Inicial Zerado)');

  // 9. Flashcards SM-2
  await clickButtonWithText('Flashcards SM-2');
  await snap('10_flashcards_screen', 'Flashcards com Algoritmo de Repetição Espaçada SM-2');

  // 10. Redação Discursiva
  await clickButtonWithText('Redação Discursiva');
  await snap('11_redacao_screen', 'Corretor de Redação Discursiva com 4 Critérios de Banca');

  // 11. Raio-X do Edital
  await clickButtonWithText('Raio-X do Edital');
  await snap('12_raio_x_edital', 'Raio-X de Incidência do Edital e Notas de Corte');

  // 12. Configurações - Aba Ajustes
  await clickButtonWithText('Configurações & Guia');
  await snap('13_configuracoes_ajustes', 'Painel de Configurações, Chave API e Backup');

  // 13. Configurações - Aba Guia de Uso
  await clickButtonWithText('Guia de Uso');
  await snap('14_guia_de_uso_metodologia', 'Guia Oficial de Metodologia, Pareto 80/20 e Repetição Espaçada');

  // 14. Configurações - Aba Sobre
  await clickButtonWithText('Sobre o Sistema');
  await snap('15_sobre_o_sistema', 'Sobre o Gabarito.AI v2.5.0 e Especificações de Engenharia');

  // 15. Modo Claro (Light Mode)
  await page.evaluate(() => {
    localStorage.setItem('THEME', 'light');
    document.documentElement.classList.remove('dark');
  });
  await clickButtonWithText('Início & Missão');
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await snap('16_dashboard_light_mode', 'Dashboard Geral no Modo Claro (Papel Institucional)');

  // 16. Mobile Viewport (iPhone 14 / Android 390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await snap('17_dashboard_mobile', 'Dashboard Visão Mobile (Bottom Nav & Responsivo)');

  await browser.close();

  fs.writeFileSync(
    path.join(outputDir, 'audit_summary.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), totalScreenshots: auditLog.length, screenshots: auditLog }, null, 2)
  );

  console.log(`\n🎉 Auditoria visual concluída! ${auditLog.length} telas capturadas em: ${outputDir}`);
}

runVisualAudit().catch(err => {
  console.error('Erro na auditoria visual:', err);
  process.exit(1);
});
