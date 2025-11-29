import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('Log in', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button123"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});