const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 1000 })

    const userContext = await browser.newContext()
    const adminContext = await browser.newContext()

    await browser.close()
})()