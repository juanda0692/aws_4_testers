import { test } from '../../../fixtures/shopFixtures';

test.describe('Add product to cart', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await homeOperations.goto();
  });

  test('adding a product from its detail page updates the cart', async ({
    homeOperations,
    productAssertions,
    productOperations,
    cartOperations,
    cartAssertions,
  }) => {
    await homeOperations.openProduct('Grey jacket');
    await productAssertions.expectProductDetails('Grey jacket', '£55.00');

    await productOperations.addToCart();

    await cartOperations.goto();
    await cartAssertions.expectProductInCart('Grey jacket');
  });
});
