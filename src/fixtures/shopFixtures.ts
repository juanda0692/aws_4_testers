import { test as base } from '@playwright/test';

import { HomePage } from '../pages/shop/HomePage';
import { SearchResultsPage } from '../pages/shop/SearchResultsPage';
import { ProductPage } from '../pages/shop/ProductPage';
import { CartPage } from '../pages/shop/CartPage';
import { LoginPage } from '../pages/shop/LoginPage';

import { HomePageOperations } from '../operations/shop/HomePageOperations';
import { ProductPageOperations } from '../operations/shop/ProductPageOperations';
import { LoginPageOperations } from '../operations/shop/LoginPageOperations';
import { CartPageOperations } from '../operations/shop/CartPageOperations';

import { HomePageAssertions } from '../assertions/shop/HomePageAssertions';
import { SearchResultsAssertions } from '../assertions/shop/SearchResultsAssertions';
import { ProductPageAssertions } from '../assertions/shop/ProductPageAssertions';
import { CartPageAssertions } from '../assertions/shop/CartPageAssertions';
import { LoginPageAssertions } from '../assertions/shop/LoginPageAssertions';

type ShopFixtures = {
  homePage: HomePage;
  homeOperations: HomePageOperations;
  homeAssertions: HomePageAssertions;

  searchResultsPage: SearchResultsPage;
  searchAssertions: SearchResultsAssertions;

  productPage: ProductPage;
  productOperations: ProductPageOperations;
  productAssertions: ProductPageAssertions;

  cartPage: CartPage;
  cartOperations: CartPageOperations;
  cartAssertions: CartPageAssertions;

  loginPage: LoginPage;
  loginOperations: LoginPageOperations;
  loginAssertions: LoginPageAssertions;
};

export const test = base.extend<ShopFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  homeOperations: async ({ page, homePage }, use) => {
    await use(new HomePageOperations(page, homePage));
  },
  homeAssertions: async ({ homePage }, use) => {
    await use(new HomePageAssertions(homePage));
  },

  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  searchAssertions: async ({ searchResultsPage }, use) => {
    await use(new SearchResultsAssertions(searchResultsPage));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  productOperations: async ({ page, productPage }, use) => {
    await use(new ProductPageOperations(page, productPage));
  },
  productAssertions: async ({ productPage }, use) => {
    await use(new ProductPageAssertions(productPage));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  cartOperations: async ({ page, cartPage }, use) => {
    await use(new CartPageOperations(page, cartPage));
  },
  cartAssertions: async ({ cartPage }, use) => {
    await use(new CartPageAssertions(cartPage));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loginOperations: async ({ page, loginPage }, use) => {
    await use(new LoginPageOperations(page, loginPage));
  },
  loginAssertions: async ({ page, loginPage }, use) => {
    await use(new LoginPageAssertions(page, loginPage));
  },
});

export { expect } from '@playwright/test';
