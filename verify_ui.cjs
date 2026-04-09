const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const pages = [
    { name: 'terms', url: 'http://localhost:3000/?page=terms' },
    { name: 'privacy', url: 'http://localhost:3000/?page=privacy' },
    { name: 'refund', url: 'http://localhost:3000/?page=refund' }
  ];

  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  for (const { name, url } of pages) {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `./screenshots/${name}.png`, fullPage: true });
    console.log(`Saved screenshot for ${name}`);
  }

  await browser.close();
})();
