const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');

  // Wait for the page to be fully loaded
  await page.waitForTimeout(2000);

  // Navigate to Proof Section to bring the buttons into view
  const proofHeading = await page.locator('section#proof h2').first();
  await proofHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // Focus the "Next slide" button in Proof section
  const nextButton = page.locator('section#proof button[aria-label="Next slide"]').first();
  await nextButton.focus();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/focus_visible_proof.png' });

  await browser.close();
})();
