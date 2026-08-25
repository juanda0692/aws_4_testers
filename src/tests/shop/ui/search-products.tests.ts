import { test } from '../../../fixtures/shopFixtures';

test.describe('Product search', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await test.step('Navigate to the home page', async () => {
      await homeOperations.goto();
    });
  });

  test('returns matching products when searching for "jacket"', async ({ homeOperations, searchAssertions }) => {
    await test.step('Search for "jacket"', async () => {
      await homeOperations.searchFor('jacket');
    });

    await test.step('Search results page reflects the searched keyword', async () => {
      await searchAssertions.expectSearchedKeyword('jacket');
    });

    await test.step('Results include "Grey jacket"', async () => {
      await searchAssertions.expectResultContains('Grey jacket');
    });

    await test.step('Results include "Noir jacket"', async () => {
      await searchAssertions.expectResultContains('Noir jacket');
    });
  });
});
