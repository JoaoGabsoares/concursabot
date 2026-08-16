import puppeteer from 'puppeteer';

async function testConsole() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[PAGE LOG] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.error(`[PAGE ERROR]: ${err.toString()}`);
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const rootContent = await page.evaluate(() => {
    return document.getElementById('root')?.innerHTML || 'EMPTY';
  });

  console.log('Root innerHTML preview:', rootContent.substring(0, 300));
  await page.screenshot({ path: '/home/joao/Imagens/debug_localhost_error.png', fullPage: true });

  await browser.close();
}

testConsole().catch(err => {
  console.error('Puppeteer test failed:', err);
  process.exit(1);
});
