
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../config/testData';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loggedInPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password
    );

    await use(new InventoryPage(page));
  }

});

export { expect };
