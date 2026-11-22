
import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartTitle: Locator;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartTitle = page.locator('.title');

        this.cartItems = page.locator('.cart_item');

        this.checkoutButton = page.locator('#checkout');

        this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async verifyCartPage() {

        await this.cartTitle.waitFor();

        return await this.cartTitle.textContent();
    }

    async verifyCartProducts(expectedProducts: string[]) {

        for (const productName of expectedProducts) {

            await this.cartItems.filter({
                hasText: productName
            }).waitFor();
        }
    }

    async getCartItemCount() {

        return await this.cartItems.count();
    }

    async clickCheckout() {

        await this.checkoutButton.click();
    }

    async continueShopping() {

        await this.continueShoppingButton.click();
    }
}
