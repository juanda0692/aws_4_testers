import { Page } from '@playwright/test';
import { CartPage } from '../../pages/shop/CartPage';

export class CartPageOperations {
  constructor(private readonly page: Page, private readonly cartPage: CartPage) {}

  async goto(): Promise<void> {
    await this.cartPage.goto();
  }
}
