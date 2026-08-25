import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly emptyCartMessage: Locator;
  readonly cartSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'My Cart' });
    this.cartSection = page.locator('#cart');
    this.emptyCartMessage = page.getByText('It appears that your cart is currently empty!');
  }

  async goto(): Promise<void> {
    await this.page.goto('/cart');
  }
}
