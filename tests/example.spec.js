import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  });

  page = await context.newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({ path: 'test2-trace.zip' });
});

test('has title', async () => {
  await page.goto('https://playwright.dev/');
  await page.pause(); 
  await expect(page).toHaveTitle(/Playwright/);
  await page.locator('xpath=//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a').click();

});
