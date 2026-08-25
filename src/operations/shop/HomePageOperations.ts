import { Page } from '@playwright/test';
import { HomePage } from '../../pages/shop/HomePage';

export class HomePageOperations {
  constructor(private readonly page: Page, private readonly homePage: HomePage) {}

  async goto(): Promise<void> {
    await this.homePage.goto();
  }

  async searchFor(term: string): Promise<void> {
    await this.homePage.searchInput.fill(term);
    await this.homePage.searchInput.press('Enter');
  }

  async openProduct(name: string): Promise<void> {
    await this.homePage.productCardByName(name).click();
  }

  async openCartDrawer(): Promise<void> {
    await this.homePage.cartDrawerToggle.click();
  }

  async getCartCountText(): Promise<string> {
    return (await this.homePage.cartCount.textContent()) ?? '';
  }
}
