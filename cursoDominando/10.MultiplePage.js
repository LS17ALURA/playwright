const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const pageOne = await context.newPage()
    const pageTwo = await context.newPage()
    await pageOne.screenshot({path:`./screenshots/ten1.png`})
    await pageOne.screenshot({path:`./screenshots/ten2.png`})
    await browser.close()
})()