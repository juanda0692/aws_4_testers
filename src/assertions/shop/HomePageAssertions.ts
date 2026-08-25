import { expect } from '@playwright/test';
import { HomePage } from '../../pages/shop/HomePage';

export class HomePageAssertions {
  constructor(private readonly homePage: HomePage) {}

  async expectProductVisibleWithPrice(name: string, price: string): Promise<void> {
    const card = this.homePage.productCardByName(name);
    await expect(card).toBeVisible();
    await expect(card.getByRole('heading', { name })).toBeVisible();
    await expect(card).toContainText(price);
  }

  async expectCatalogProductCount(count: number): Promise<void> {
    await expect(this.homePage.productCards).toHaveCount(count, { timeout: 10_000 });
  }

  async expectCartCount(count: number): Promise<void> {
    await expect(this.homePage.cartCount).toHaveText(`(${count})`);
  }
}
