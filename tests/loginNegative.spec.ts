
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Negative Login Tests', () => {

  test('Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('wrong_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('Empty Username and Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('', '');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });

  test('Locked Out User', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Sorry, this user has been locked out');
  });

});
