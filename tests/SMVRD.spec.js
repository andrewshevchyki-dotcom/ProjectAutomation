import { test, expect, chromium} from '@playwright/test';

test('Slow motion and video recording demo', async()=>{

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir:'videos/',
            size: {width: 800, height: 600}
        }
    });

    const page = await context.newPage();
    
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Andrii')
    await page.locator('[placeholder="Enter your password"]').fill('123456')

    await page.waitForSelector('text=Sign in', {timeout: 3000})
    await page.locator('text=Sign in').click()

    await context.close();


});