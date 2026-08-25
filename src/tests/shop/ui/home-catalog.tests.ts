import { test } from '../../../fixtures/shopFixtures';

test.describe('Home page catalog', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await test.step('Navigate to the home page', async () => {
      await homeOperations.goto();
    });
  });

  test('displays the storefront product catalog with names and prices', async ({ homeAssertions }) => {
    await test.step('Catalog shows exactly 3 products', async () => {
      await homeAssertions.expectCatalogProductCount(3);
    });

    await test.step('"Grey jacket" is listed with price £55.00', async () => {
      await homeAssertions.expectProductVisibleWithPrice('Grey jacket', '£55.00');
    });

    await test.step('"Noir jacket" is listed with price £60.00', async () => {
      await homeAssertions.expectProductVisibleWithPrice('Noir jacket', '£60.00');
    });

    await test.step('"Striped top" is listed with price £50.00', async () => {
      await homeAssertions.expectProductVisibleWithPrice('Striped top', '£50.00');
    });
  });
});
