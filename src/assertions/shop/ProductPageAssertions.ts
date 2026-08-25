import { expect } from '@playwright/test';
import { ProductPage } from '../../pages/shop/ProductPage';

export class ProductPageAssertions {
  constructor(private readonly productPage: ProductPage) {}

  async expectProductDetails(name: string, price: string): Promise<void> {
    await expect(this.productPage.productTitle).toHaveText(name);
    await expect(this.productPage.productPrice).toContainText(price);
  }
}
