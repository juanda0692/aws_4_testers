import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly keywordLabel: Locator;
  readonly resultCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Search Results' });
    this.keywordLabel = page.locator('#keyword');
    this.resultCards = page.locator('.product-grid a[id^="product-"]');
  }

  resultCardByName(name: string): Locator {
    return this.resultCards.filter({ hasText: name });
  }
}
