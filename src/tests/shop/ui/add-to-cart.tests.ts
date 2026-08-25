import { test } from '../../../fixtures/shopFixtures';

test.describe('Add product to cart', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await test.step('Navigate to the home page', async () => {
      await homeOperations.goto();
    });
  });

  test('adding a product from its detail page updates the cart', async ({
    homeOperations,
    productAssertions,
    productOperations,
    cartOperations,
    cartAssertions,
  }) => {
    await test.step('Open the "Grey jacket" product page', async () => {
      await homeOperations.openProduct('Grey jacket');
    });

    await test.step('Product page shows the correct name and price', async () => {
      await productAssertions.expectProductDetails('Grey jacket', '£55.00');
    });

    await test.step('Add the product to the cart', async () => {
      await productOperations.addToCart();
    });

    await test.step('Navigate to the cart page', async () => {
      await cartOperations.goto();
    });

    await test.step('Cart contains the added "Grey jacket"', async () => {
      await cartAssertions.expectProductInCart('Grey jacket');
    });
  });
});
