
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../config/testData';

for (const data of testData.loginScenarios) {

  test(`DDT - ${data.scenario}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(data.username, data.password);

    if (data.expectedMessage === '') {
      await expect(page).toHaveURL(/inventory.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    } else {
      await expect(page.locator('[data-test="error"]'))
        .toContainText(data.expectedMessage);
    }

  });

}
