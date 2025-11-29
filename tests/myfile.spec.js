const {test, expect} = require('@playwright/test')

test('My first test', async ({page}) =>{
    await page.goto('https://pornhub.com/')
    await expect(page).toHaveTitle('Free Porn Videos & Sex Movies - Porno, XXX, Porn Tube | Pornhub')
})
