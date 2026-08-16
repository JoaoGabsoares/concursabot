import puppeteer from 'puppeteer';

async function testRegister() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Click on "Criar Conta" tab
  console.log('Clicking "Criar Conta"...');
  const tabs = await page.$$('button');
  for (const tab of tabs) {
    const text = await page.evaluate(el => el.innerText, tab);
    if (text.includes('Criar Conta')) {
      await tab.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 500));

  // Fill in Registration form with "João Soares"
  const inputs = await page.$$('input');
  if (inputs.length >= 3) {
    await inputs[0].type(`Joao Teste ${Date.now().toString().slice(-4)}`);
    await inputs[1].type('joao.teste@exemplo.com');
    await inputs[2].type('senha123');
  }

  // Click "Criar Conta Gratuita" button
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await page.evaluate(el => el.innerText, btn);
    if (text.includes('Criar Conta Gratuita')) {
      console.log('Clicking submit...');
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1500));

  const pageTitle = await page.evaluate(() => document.body.innerText);
  console.log('Page content after register:', pageTitle.substring(0, 200));

  await page.screenshot({ path: '/home/joao/Imagens/debug_registered_screen.png', fullPage: true });
  await browser.close();
}

testRegister().catch(err => {
  console.error('Test register failed:', err);
  process.exit(1);
});
