import { test, expect } from '@playwright/test';

test('Verifica título da página', async ({ page }) => {
  await page.goto('https://www.google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Google');
});
