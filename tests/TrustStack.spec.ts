import { test, expect } from '@playwright/test';

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('TrustStack Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should display the trust section with correct content', async ({ page }) => {
    // Assert the "Why This Is Different" badge is visible
    // We use a locator that waits for visibility automatically
    const badge = page.getByText('Why This Is Different');
    await expect(badge).toBeVisible();

    // Assert the main heading is visible
    const heading = page.getByRole('heading', { name: 'Built for Transparency — Not Marketing' });
    await expect(heading).toBeVisible();

    // Assert that all trust items are rendered correctly
    const trustItems = [
      {
        title: 'Full Source Code Included',
        desc: 'Full TradingView Pine Script Code — Editable & Visible'
      },
      {
        title: 'Zero Repaint',
        desc: 'Signal stays fixed — No manipulation'
      },
      {
        title: 'Works on Free TradingView',
        desc: 'Runs on TradingView — No software needed'
      },
      {
        title: 'No Login / No Dependency',
        desc: 'No app. No account. You own it.'
      }
    ];

    for (const item of trustItems) {
      const itemHeading = page.getByRole('heading', { name: item.title });
      await expect(itemHeading).toBeVisible();

      const itemDesc = page.getByText(item.desc);
      await expect(itemDesc).toBeVisible();
    }

    // Assert the final "black box" message
    await expect(page.getByText('This is not a black box.')).toBeVisible();
    await expect(page.getByText('You see everything. You control everything.')).toBeVisible();
  });

  test('should take a screenshot of the trust section', async ({ page }) => {
    // Locate the section by ID which is present in the source code
    const trustSection = page.locator('section#trust');

    // Ensure the section is visible and scrolled into view
    await expect(trustSection).toBeVisible();
    await trustSection.scrollIntoViewIfNeeded();

    // Take a screenshot of the specific section
    await trustSection.screenshot({ path: 'tests/trust-stack.png' });
  });
});
