import { test, expect } from '@playwright/test';

test.only ('Login test 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Andrii')
    await page.locator('[placeholder="Enter your password"]').fill('123456')

    await page.waitForSelector('text=Sign in', {timeout: 3000})
    await page.locator('text=Sign in').click()


})

/*test.only ('Login test 2', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
})*/