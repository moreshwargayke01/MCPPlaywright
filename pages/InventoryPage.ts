
import { Page, Locator } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly productList: Locator;
    readonly sortDropdown: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {

        this.page = page;

        this.inventoryTitle = page.locator('.title');

        this.productList = page.locator('.inventory_item');

        this.sortDropdown = page.locator('.product_sort_container');

        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async verifyInventoryPage() {

        await this.inventoryTitle.waitFor();

        return await this.inventoryTitle.textContent();
    }

    async sortProductsLowToHigh() {

        await this.sortDropdown.selectOption('lohi');
    }

    async addProductToCart(productName: string) {

        const product = this.productList.filter({
            has: this.page.getByText(productName, { exact: true })
        });

        await product.locator('button').click();
    }

    async openCart() {

        await this.cartIcon.click();
    }
}
