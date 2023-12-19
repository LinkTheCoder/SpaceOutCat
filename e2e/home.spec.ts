import { test, expect } from '@playwright/test';

test('has title and click web app link', async ({ page }) => {
  // Navigate to your website.
  await page.goto('https://www.spaceoutcat.com/');

  // Expect a title "to contain" a substring related to your website.
  await expect(page).toHaveTitle(/Space Out Cat/);

  // Click the link with the text "WEB APP."
  await page.click('a:has-text("WEB APP")');
});
