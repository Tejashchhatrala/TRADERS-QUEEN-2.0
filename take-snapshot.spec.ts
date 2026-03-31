import { test, expect } from '@playwright/test';

test('capture snapshot for PR', async ({ page }) => {
  // Go to local dev server
  await page.goto('http://localhost:3000');

  // Wait for animations/renders to settle
  await page.waitForTimeout(3000);

  // Take full page screenshot
  await page.screenshot({ path: 'snapshot_for_pr.png', fullPage: true });
});
