import { test } from '../../../fixtures/shopFixtures';

test.describe('Home page catalog', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await homeOperations.goto();
  });

  test('displays the storefront product catalog with names and prices', async ({ homeAssertions }) => {
    await homeAssertions.expectCatalogProductCount(3);
    await homeAssertions.expectProductVisibleWithPrice('Grey jacket', '£55.00');
    await homeAssertions.expectProductVisibleWithPrice('Noir jacket', '£60.00');
    await homeAssertions.expectProductVisibleWithPrice('Striped top', '£50.00');
  });
});
