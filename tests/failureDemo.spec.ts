
import { test, expect } from '@playwright/test';

test('Demo - Screenshot and Trace on Failure', async ({ page }) => {

  await page.goto('/');

  await expect(page).toHaveTitle('Wrong Title');

});

