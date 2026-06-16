import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('App Routing', () => {
  test('should load the home page by default', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for Navbar brand using regex for robustness
    await expect(page.getByRole('navigation').getByText(/Traders Queen\s*2\.0/i)).toBeVisible();

    // Check for Hero content
    await expect(page.getByText(/Zero Repaint/i).first()).toBeVisible();
  });

  test('should navigate to Terms of Service page via URL parameter', async ({ page }) => {
    await page.goto(`${BASE_URL}/?page=terms`);

    await expect(page.getByRole('heading', { name: /Terms of Service/i, exact: true })).toBeVisible();
    await expect(page.getByText(/Last updated:/i)).toBeVisible();
  });

  test('should navigate to Privacy Policy page via URL parameter', async ({ page }) => {
    await page.goto(`${BASE_URL}/?page=privacy`);

    await expect(page.getByRole('heading', { name: /Privacy Policy/i, exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Information We Collect/i })).toBeVisible();
  });

  test('should navigate to Refund Policy page via URL parameter', async ({ page }) => {
    await page.goto(`${BASE_URL}/?page=refund`);

    await expect(page.getByRole('heading', { name: /Refund Policy/i, exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Digital Products Nature/i })).toBeVisible();
  });

  test('should navigate to legal pages via footer links', async ({ page }) => {
    await page.goto(BASE_URL);

    // Find the Terms of Service link in the footer and click it
    const termsLink = page.locator('footer').getByRole('link', { name: /Terms of Service/i });
    await termsLink.scrollIntoViewIfNeeded();
    await termsLink.click();

    await expect(page).toHaveURL(/.*page=terms/);
    await expect(page.getByRole('heading', { name: /Terms of Service/i })).toBeVisible();
  });
});
