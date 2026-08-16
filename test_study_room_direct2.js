import puppeteer from 'puppeteer';

async function testStudyRoomDirect2() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Set localStorage with current active user to jump straight into dashboard
  await page.evaluate(() => {
    localStorage.setItem('CURRENT_USER_ID', 'user_joao');
    localStorage.setItem('SELECTED_CAREER', 'atrfb');
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // 2. Click specifically on the "Sala de Estudos" button
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('aside button'));
    const studyBtn = btns.find(b => b.textContent && b.textContent.trim().startsWith('Sala de Estudos'));
    if (studyBtn) studyBtn.click();
  });

  await new Promise(r => setTimeout(r, 1200));

  // 3. Test changing subject to "Direito Tributário"
  await page.evaluate(() => {
    const subBtns = Array.from(document.querySelectorAll('button'));
    const tribBtn = subBtns.find(b => b.textContent && b.textContent.includes('Direito Tributário'));
    if (tribBtn) tribBtn.click();
  });

  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: '/home/joao/Imagens/auditoria_telas/nova_sala_de_estudos_tributario.png', fullPage: true });
  console.log('Tributario screenshot saved!');

  await browser.close();
}

testStudyRoomDirect2().catch(err => {
  console.error('Direct study room error:', err);
  process.exit(1);
});
