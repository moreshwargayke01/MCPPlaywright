
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../config/testData';

test('SauceDemo Login Verification', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);

    const title = await inventoryPage.verifyInventoryPage();

    expect(title).toBe('Products');

});
