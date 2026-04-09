const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');

  // Wait for the page to be fully loaded
  await page.waitForTimeout(2000);

  // Navigate to Testimonials Section to bring the buttons into view
  const testimonialsHeading = await page.getByText(/Real Feedback from Traders Using This/);
  await testimonialsHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // Focus the "Next slide" button in Testimonials
  const nextButton = page.locator('button[aria-label="Next slide"]').first();
  await nextButton.focus();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/focus_visible_testimonials.png' });

  await browser.close();
})();
