from playwright.sync_api import Playwright, sync_playwright, expect

def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://freebitco.in/signup/?op=s")
    page.get_by_role("link", name="LOGIN").click()
    page.get_by_label("Bitcoin Address/E-mail Address").click()
    page.get_by_label("Bitcoin Address/E-mail Address").fill("atm_mfink@hotmail.com")
    page.get_by_label("Password", exact=True).click()
    page.get_by_label("Password", exact=True).fill("Orienta12!@")
    page.get_by_role("button", name="LOGIN!").click()
    page.get_by_text("NO THANKS").first.click()
    page.waitForSelector('button', { state: 'visible' });
    page.waitForSelector('button[name="ROLL!"]', { timeout: 60 * 60 * 1000 });
    page.click('button[name="ROLL!"]');

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
