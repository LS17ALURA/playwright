const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo:50}) //headless:false -> abre o browser, slowMo:50 -> atrasa o teste 50 milissegundos
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('http://todomvc.com/examples/react/#/')

    await page.fill('.new-todo', 'Task_1')
    await page.press('.new-todo', 'Enter')

    await page.fill('.new-todo', 'Task_2')
    await page.press('.new-todo', 'Enter')

    await page.check('.toggle')
    
    const elements = await page.$$('.toggle')
    elements.forEach(element => element.check())
    
}) ()