import { test, expect } from '@playwright/test';
import { ShopifyStorefrontApiClient } from '../../../api/ShopifyStorefrontApiClient';

test.describe('Storefront products API', () => {
  test('exposes the catalog products shown on the storefront', async ({ request }) => {
    const client = new ShopifyStorefrontApiClient(request);

    const [greyJacket, noirJacket, stripedTop] = await test.step('Fetch grey-jacket, noir-jacket and striped-top from /products.json', async () => {
      return Promise.all([
        client.getProductByHandle('grey-jacket'),
        client.getProductByHandle('noir-jacket'),
        client.getProductByHandle('striped-top'),
      ]);
    });

    await test.step('"Grey jacket" data matches the storefront (£55.00)', async () => {
      expect(greyJacket).toBeDefined();
      expect(greyJacket?.title).toBe('Grey jacket');
      expect(greyJacket?.variants[0].price).toBe('55.00');
    });

    await test.step('"Noir jacket" data matches the storefront (£60.00)', async () => {
      expect(noirJacket).toBeDefined();
      expect(noirJacket?.title).toBe('Noir jacket');
      expect(noirJacket?.variants[0].price).toBe('60.00');
    });

    await test.step('"Striped top" data matches the storefront (£50.00)', async () => {
      expect(stripedTop).toBeDefined();
      expect(stripedTop?.title).toBe('Striped top');
      expect(stripedTop?.variants[0].price).toBe('50.00');
    });
  });
});
