import { expect } from '@playwright/test';
import { Page } from '@playwright/test';
import { LoginPage } from '../../pages/shop/LoginPage';

export class LoginPageAssertions {
  constructor(private readonly page: Page, private readonly loginPage: LoginPage) {}

  async expectLoginRejected(): Promise<void> {
    await expect(this.page).toHaveURL(/\/account\/login/);
    await expect(this.loginPage.heading).toBeVisible();
    await expect(this.loginPage.emailInput).toBeVisible();
  }
}
