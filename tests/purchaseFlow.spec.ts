
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../config/testData';

test('SauceDemo Complete E2E Purchase Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.navigateToLoginPage();
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await expect(page).toHaveURL(/inventory.html/);
  await expect(inventoryPage.inventoryTitle).toHaveText('Products');

  // 2. Sort products and add products to cart
  await inventoryPage.sortProductsLowToHigh();

  for (const product of testData.products) {
    await inventoryPage.addProductToCart(product);
  }

  await expect(page.locator('.shopping_cart_badge'))
    .toHaveText(String(testData.products.length));

  // 3. Open Cart and verify products
  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart.html/);
  await expect(cartPage.cartTitle).toHaveText('Your Cart');

  await cartPage.verifyCartProducts(testData.products);
  await expect(cartPage.cartItems)
    .toHaveCount(testData.products.length);

  // 4. Checkout
  await cartPage.clickCheckout();

  await expect(page).toHaveURL(/checkout-step-one.html/);

  await checkoutPage.enterCustomerInformation(
    testData.customer.firstName,
    testData.customer.lastName,
    testData.customer.postalCode
  );

  // 5. Checkout Overview
  await expect(page).toHaveURL(/checkout-step-two.html/);
  await expect(checkoutPage.checkoutTitle)
    .toHaveText('Checkout: Overview');

  await expect(checkoutPage.checkoutItems)
    .toHaveCount(testData.products.length);

  await expect(checkoutPage.itemTotal).toBeVisible();
  await expect(checkoutPage.tax).toBeVisible();
  await expect(checkoutPage.total).toContainText('Total: $');

  // 6. Finish Order
  await checkoutPage.finishOrder();

  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(checkoutPage.confirmationMessage)
    .toHaveText('Thank you for your order!');
});
