from playwright.sync_api import Playwright, sync_playwright_with_deferred_shutdown

def test_google_search():
    with sync_playwright_with_deferred_shutdown() as playwright:
        browser = playwright.chromium.launch()
        context = browser.new_context()
        page = context.new_page()
        
        # Visitar a página do Google
        page.goto("https://www.google.com")
        
        # Preencher o campo de pesquisa e clicar no botão "Pesquisa Google"
        page.fill('input[name="q"]', "Playwright")
        page.click('input[value="Pesquisa Google"]')
        
        # Esperar pelos resultados da pesquisa
        page.wait_for_selector('div#search')

        # Fechar o navegador
        browser.close()
# não posso usar este teste porque não há como configurar variáveis de sitema sem permissão do administrador