import { test } from '../../../fixtures/shopFixtures';

test.describe('Product search', () => {
  test.beforeEach(async ({ homeOperations }) => {
    await homeOperations.goto();
  });

  test('returns matching products when searching for "jacket"', async ({ homeOperations, searchAssertions }) => {
    await homeOperations.searchFor('jacket');

    await searchAssertions.expectSearchedKeyword('jacket');
    await searchAssertions.expectResultContains('Grey jacket');
    await searchAssertions.expectResultContains('Noir jacket');
  });
});
