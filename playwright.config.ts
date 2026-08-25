import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'src/tests',
  testMatch: '**/*.tests.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'lamda',
      testDir: 'src/tests',
      testMatch: 'LambdaClima.tests.ts',
    },
    {
      name: 'shop-ui',
      testDir: 'src/tests/shop/ui',
      use: {
        ...devices['Desktop Chrome'],
        /* Use the Chrome already installed on this machine instead of downloading Playwright's own Chromium build. */
        channel: 'chrome',
        baseURL: process.env.SHOP_BASE_URL || 'https://sauce-demo.myshopify.com',
      },
    },
    {
      name: 'shop-api',
      testDir: 'src/tests/shop/api',
      use: {
        baseURL: process.env.SHOP_BASE_URL || 'https://sauce-demo.myshopify.com',
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
