import { expect } from '@playwright/test';
import { SearchResultsPage } from '../../pages/shop/SearchResultsPage';

export class SearchResultsAssertions {
  constructor(private readonly searchResultsPage: SearchResultsPage) {}

  async expectSearchedKeyword(term: string): Promise<void> {
    await expect(this.searchResultsPage.heading).toBeVisible();
    await expect(this.searchResultsPage.keywordLabel).toContainText(term);
  }

  async expectResultContains(name: string): Promise<void> {
    await expect(this.searchResultsPage.resultCardByName(name)).toBeVisible();
  }
}
