
import { test, expect } from '../fixtures/testFixtures';

test('Verify Login using Custom Fixture', async ({ loggedInPage }) => {

  await expect(loggedInPage.inventoryTitle)
    .toHaveText('Products');

  await expect(loggedInPage.productList)
    .toHaveCount(6);

});
