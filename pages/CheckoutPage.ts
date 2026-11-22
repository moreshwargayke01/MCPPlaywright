
import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;

    readonly continueButton: Locator;
    readonly finishButton: Locator;

    readonly checkoutTitle: Locator;
    readonly checkoutItems: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    readonly confirmationMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        this.checkoutTitle = page.locator('.title');
        this.checkoutItems = page.locator('.cart_item');

        this.itemTotal = page.locator('.summary_subtotal_label');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');

        this.confirmationMessage = page.locator('.complete-header');
    }

    async enterCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    async verifyCheckoutOverview() {

        await this.checkoutTitle.waitFor();

        return await this.checkoutTitle.textContent();
    }

    async getOrderTotal() {

        return await this.total.textContent();
    }

    async finishOrder() {

        await this.finishButton.click();
    }

    async verifyOrderConfirmation() {

        await this.confirmationMessage.waitFor();

        return await this.confirmationMessage.textContent();
    }
}
