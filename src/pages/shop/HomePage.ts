import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly loginLink: Locator;
  readonly signUpLink: Locator;
  readonly cartDrawerToggle: Locator;
  readonly cartCount: Locator;
  readonly checkoutLink: Locator;
  readonly productCards: Locator;
  readonly cartDrawer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
    this.loginLink = page.getByRole('link', { name: 'Log In' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.cartDrawerToggle = page.locator('a.toggle-drawer.cart.desktop');
    this.cartCount = page.locator('#cart-target-desktop');
    this.checkoutLink = page.getByRole('link', { name: 'Check Out' });
    this.productCards = page.locator('.product-grid a[id^="product-"]');
    this.cartDrawer = page.locator('#drawer');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  productCardByName(name: string): Locator {
    return this.productCards.filter({ hasText: name });
  }
}
