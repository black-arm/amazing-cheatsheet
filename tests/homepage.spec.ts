import { expect, test} from '@playwright/test';

test.describe('homapage', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
    })

    test('show central title', async ({ page }) => {

        const h1Title = page.locator('h1.title-color', { hasText: 'Amazing Cheatsheet'});
        await expect(h1Title).toHaveText('Amazing Cheatsheet');

        const paragraph = page.locator('[class="text-center text-2xl font-light"]');
        await expect(paragraph).toHaveText(`Amazing Cheatsheet is an open source project for web developers.
         Here you find find all information about framework, languages and tools for frontend world!!!`)
    })
})