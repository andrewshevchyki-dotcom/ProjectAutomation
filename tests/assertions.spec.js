import { test, expect} from '@playwright/test';

test ('Assertions' , async ({page}) =>{

    await page.goto('https://kitchen.applitools.com/')
    
    //Assertions
    //Check if element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click
    }
    //assertion element visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //assertion enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect.soft(page.locator('text=The KItchen')).not.toHaveText('The Kitchen')
    await page.pause()
    //element attribute
    //await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', '/.*css-dpmy2a/')
    
    //check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //visual validation with screenshot
    await expect(page).toHaveScreenshot()
});