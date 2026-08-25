import { test } from '../../../fixtures/shopFixtures';

test.describe('Customer login', () => {
  test.beforeEach(async ({ loginOperations }) => {
    await loginOperations.goto();
  });

  test('rejects sign in with invalid credentials', async ({ loginOperations, loginAssertions }) => {
    await loginOperations.login('not-a-real-user@example.com', 'wrong-password-123');

    await loginAssertions.expectLoginRejected();
  });
});
