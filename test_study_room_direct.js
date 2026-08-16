import puppeteer from 'puppeteer';

async function testStudyRoomDirect() {
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
  await new Promise(r => setTimeout(r, 1000));

  // 2. Click on "Sala de Estudos" in sidebar or top
  console.log('Clicking on Sala de Estudos in sidebar...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button, a'));
    const studyBtn = btns.find(b => b.innerText && (b.innerText.includes('Sala de Estudos') || b.innerText.includes('Estudo')));
    if (studyBtn) studyBtn.click();
  });

  await new Promise(r => setTimeout(r, 1200));

  // 3. Test page number change to 15
  await page.evaluate(() => {
    const input = document.querySelector('input[type="number"]');
    if (input) {
      input.value = '15';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  // 4. Test selecting answer "C" (Habeas Data) or option
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const opt = btns.find(b => b.innerText && (b.innerText.includes('Habeas Data') || b.innerText.includes('Letra C') || b.innerText.includes('C')));
    if (opt) opt.click();
  });

  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: '/home/joao/Imagens/auditoria_telas/nova_sala_de_estudos_direta.png', fullPage: true });
  console.log('Direct screenshot saved to /home/joao/Imagens/auditoria_telas/nova_sala_de_estudos_direta.png');

  await browser.close();
}

testStudyRoomDirect().catch(err => {
  console.error('Direct study room error:', err);
  process.exit(1);
});
