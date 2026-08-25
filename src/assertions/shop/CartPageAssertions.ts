import { expect } from '@playwright/test';
import { CartPage } from '../../pages/shop/CartPage';

export class CartPageAssertions {
  constructor(private readonly cartPage: CartPage) {}

  async expectEmptyCart(): Promise<void> {
    await expect(this.cartPage.emptyCartMessage).toBeVisible();
  }

  async expectProductInCart(name: string): Promise<void> {
    await expect(this.cartPage.cartSection).toContainText(name);
  }
}
