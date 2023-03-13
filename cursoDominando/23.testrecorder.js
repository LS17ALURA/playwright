import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.goto('https://todomvc.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('tab', { name: 'About' }).click();

  await page.getByRole('heading', { name: '1.4K Followers · 8 Following' }).getByRole('link', { name: '1.4K Followers' }).click();
});