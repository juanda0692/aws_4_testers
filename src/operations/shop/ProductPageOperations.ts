import { Page } from '@playwright/test';
import { ProductPage } from '../../pages/shop/ProductPage';

export class ProductPageOperations {
  constructor(private readonly page: Page, private readonly productPage: ProductPage) {}

  async addToCart(): Promise<void> {
    const cartAddResponse = this.page.waitForResponse(
      (response) => response.url().includes('/cart/add') && response.request().method() === 'POST',
    );
    await this.productPage.addToCartButton.click();
    await cartAddResponse;
  }
}
