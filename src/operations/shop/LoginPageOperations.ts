import { Page } from '@playwright/test';
import { LoginPage } from '../../pages/shop/LoginPage';

export class LoginPageOperations {
  constructor(private readonly page: Page, private readonly loginPage: LoginPage) {}

  async goto(): Promise<void> {
    await this.loginPage.goto();
  }

  async login(email: string, password: string): Promise<void> {
    await this.loginPage.emailInput.fill(email);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.signInButton.click();
  }
}
