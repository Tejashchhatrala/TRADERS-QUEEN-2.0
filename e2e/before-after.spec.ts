import { test, expect } from '@playwright/test';

test.describe('BeforeAfter Component', () => {
  test('should render all key elements correctly', async ({ page }) => {
    // Navigate to homepage (using base URL from config if available, otherwise fallback)
    await page.goto('/');

    // Wait for the section to be visible
    const section = page.locator('#before-after');
    await expect(section).toBeVisible();

    // Check for the section title/badge
    await expect(page.getByText('What Changes After You Start Using This')).toBeVisible();

    // Check for the main heading (handles the icon in between)
    await expect(page.getByText('From Confusion')).toBeVisible();
    await expect(page.getByText('To Clarity')).toBeVisible();

    // Check for BEFORE and AFTER headings
    await expect(page.getByRole('heading', { name: 'BEFORE' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AFTER' })).toBeVisible();

    // Check for some "Before" items
    await expect(page.getByText('Watching charts for hours')).toBeVisible();
    await expect(page.getByText('Random entries')).toBeVisible();

    // Check for some "After" items
    await expect(page.getByText('Alerts tell you when to act')).toBeVisible();
    await expect(page.getByText('Clear entry, SL & target')).toBeVisible();

    // Check for the lifestyle image
    const image = page.locator('img[alt="Trader checking signal on phone"]');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', '/images/lifestyle/trader-phone.jpg');
  });
});
