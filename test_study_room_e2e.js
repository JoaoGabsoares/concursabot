import puppeteer from 'puppeteer';

async function testStudyRoom() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Fill login or select user
  const rootText = await page.evaluate(() => document.body.innerText);
  if (rootText.includes('ACESSO PRIVADO')) {
    console.log('Logging in...');
    const inputs = await page.$$('input');
    if (inputs.length >= 2) {
      await inputs[0].type('joao teste 1648');
      await inputs[1].type('senha123');
      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await page.evaluate(el => el.innerText, btn);
        if (text.includes('Entrar na Plataforma')) {
          await btn.click();
          break;
        }
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // 2. If in profile selection screen, create a profile if 0 profiles exist
  const bodyText = await page.evaluate(() => document.body.innerText);
  if (bodyText.includes('Quem está estudando agora?')) {
    console.log('In profile selector...');
    if (bodyText.includes('Nenhum Perfil Criado')) {
      console.log('Creating student profile...');
      const createCards = await page.$$('div, button');
      for (const card of createCards) {
        const t = await page.evaluate(el => el.innerText, card);
        if (t && t.includes('+ Criar Novo Perfil')) {
          await card.click();
          break;
        }
      }
      await new Promise(r => setTimeout(r, 500));
      const nameInput = await page.$('input[placeholder*="João"]');
      if (nameInput) {
        await nameInput.type('João Concurseiro Elite');
      }
      const submitBtn = await page.$('button[type="submit"]');
      if (submitBtn) {
        await submitBtn.click();
      }
      await new Promise(r => setTimeout(r, 1200));
    }
  }

  // 3. Navigate to Sala de Estudos
  console.log('Navigating to Sala de Estudos...');
  const navButtons = await page.$$('button, a');
  for (const btn of navButtons) {
    const text = await page.evaluate(el => el.innerText, btn);
    if (text && (text.includes('Sala de Estudos') || text.includes('Estudo'))) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));

  // 4. Test page navigation in Study Room
  console.log('Testing page navigator in Study Room...');
  const pageInput = await page.$('input[type="number"]');
  if (pageInput) {
    await pageInput.click({ clickCount: 3 });
    await pageInput.type('15');
  }

  // 5. Test Question Selection
  console.log('Selecting option in question...');
  const optButtons = await page.$$('button');
  for (const opt of optButtons) {
    const text = await page.evaluate(el => el.innerText, opt);
    if (text && text.includes('Habeas Data')) {
      await opt.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 800));

  // 6. Screenshot high-res
  await page.screenshot({ path: '/home/joao/Imagens/auditoria_telas/nova_sala_de_estudos.png', fullPage: true });
  console.log('Screenshot saved to /home/joao/Imagens/auditoria_telas/nova_sala_de_estudos.png');

  await browser.close();
}

testStudyRoom().catch(err => {
  console.error('Study room test error:', err);
  process.exit(1);
});
