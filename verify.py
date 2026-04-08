import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1080})
        await page.goto("http://localhost:3000")

        # Scroll down to trigger framer-motion animations
        for i in range(10):
            await page.evaluate(f"window.scrollBy(0, window.innerHeight)")
            await page.wait_for_timeout(500)

        await page.evaluate(f"window.scrollTo(0, 0)")
        await page.wait_for_timeout(1000)

        await page.screenshot(path="/home/jules/verification/homepage_full.png", full_page=True)
        await browser.close()

asyncio.run(main())
