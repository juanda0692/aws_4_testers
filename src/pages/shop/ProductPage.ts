import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('#product-form h1');
    this.productPrice = page.locator('#product-price .product-price');
    this.addToCartButton = page.getByRole('button', { name: 'Add To Cart' });
  }
}
