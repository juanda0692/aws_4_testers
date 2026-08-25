import { test } from '../../../fixtures/shopFixtures';

test.describe('Customer login', () => {
  test.beforeEach(async ({ loginOperations }) => {
    await test.step('Navigate to the login page', async () => {
      await loginOperations.goto();
    });
  });

  test('rejects sign in with invalid credentials', async ({ loginOperations, loginAssertions }) => {
    await test.step('Submit sign in with invalid credentials', async () => {
      await loginOperations.login('not-a-real-user@example.com', 'wrong-password-123');
    });

    await test.step('Sign in is rejected and the user stays on the login page', async () => {
      await loginAssertions.expectLoginRejected();
    });
  });
});
