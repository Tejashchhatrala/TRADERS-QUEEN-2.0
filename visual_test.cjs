const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Wait a moment for motion elements and images to finish basic load
  await page.waitForTimeout(3000);

  // Scroll to bottom slowly to trigger all lazy-loaded/motion elements
  await page.evaluate(async () => {
      await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 500;
          const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 200);
      });
  });

  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved to screenshot_full.png');
})();
