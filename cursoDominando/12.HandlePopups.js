const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    // ....
    
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open')    // Opens a popup
    ])
    
    // ....

    await page.screenshot({path:"./screenshots/twelve.png",fullPage:true})
    await browser.close()
})()

//não abrirá poppup