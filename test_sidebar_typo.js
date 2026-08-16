import puppeteer from 'puppeteer';

async function testSidebarTypography() {
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

  await page.screenshot({ path: '/home/joao/Imagens/auditoria_telas/sidebar_tipografia_ampliada.png', fullPage: true });
  console.log('Sidebar screenshot saved to /home/joao/Imagens/auditoria_telas/sidebar_tipografia_ampliada.png');

  await browser.close();
}

testSidebarTypography().catch(err => {
  console.error('Sidebar typography test failed:', err);
  process.exit(1);
});
