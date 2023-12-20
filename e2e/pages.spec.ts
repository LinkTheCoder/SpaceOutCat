import { test, expect } from '@playwright/test';

const pages = [
    'https://www.spaceoutcat.com/health-tracker',
    'https://www.spaceoutcat.com/sleep-sounds',
    'https://www.spaceoutcat.com/updates',
    'https://www.spaceoutcat.com/privacy',
    'https://www.spaceoutcat.com/profile',
    'https://www.spaceoutcat.com/login',
    'https://www.spaceoutcat.com/mindfulness',
    'https://www.spaceoutcat.com/mindfulness/anxiety',
    'https://www.spaceoutcat.com/mindfulness/productivity',
    'https://www.spaceoutcat.com/mindfulness/sns-detox',
    'https://www.spaceoutcat.com/',
];

for (const pageUrl of pages) {
    test(`Page ${pageUrl} is accessible`, async ({ page }) => {
        const response = await page.goto(pageUrl);

        // Ensure the response is not null before accessing status
        if (response) {
            const status = response.status();
            expect(status).toBe(200);
        } else {
            // Handle the case where there is no response (e.g., navigation failed)
            throw new Error('Page navigation failed');
        }
    });
}
