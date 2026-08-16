import puppeteer from 'puppeteer';

async function testPdfView() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    localStorage.setItem('CURRENT_USER_ID', 'user_joao');
    localStorage.setItem('SELECTED_CAREER', 'atrfb');
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // Click on Sala de Estudos
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('aside button'));
    const studyBtn = btns.find(b => b.textContent && b.textContent.trim().startsWith('Sala de Estudos'));
    if (studyBtn) studyBtn.click();
  });

  await new Promise(r => setTimeout(r, 1000));

  // Click on the uploaded PDF button in the shelf
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const pdfBtn = btns.find(b => b.textContent && b.textContent.includes('Conceito e Classificação'));
    if (pdfBtn) pdfBtn.click();
  });

  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({ path: '/home/joao/Imagens/auditoria_telas/nova_sala_de_estudos_pdf_embutido.png', fullPage: true });
  console.log('PDF embedded screenshot saved!');

  await browser.close();
}

testPdfView().catch(err => {
  console.error('PDF view error:', err);
  process.exit(1);
});
