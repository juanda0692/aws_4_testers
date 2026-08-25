import { test, expect } from '@playwright/test';
import { ShopifyStorefrontApiClient } from '../../../api/ShopifyStorefrontApiClient';

test.describe('Storefront products API', () => {
  test('exposes the catalog products shown on the storefront', async ({ request }) => {
    const client = new ShopifyStorefrontApiClient(request);

    const greyJacket = await client.getProductByHandle('grey-jacket');
    const noirJacket = await client.getProductByHandle('noir-jacket');
    const stripedTop = await client.getProductByHandle('striped-top');

    expect(greyJacket).toBeDefined();
    expect(greyJacket?.title).toBe('Grey jacket');
    expect(greyJacket?.variants[0].price).toBe('55.00');

    expect(noirJacket).toBeDefined();
    expect(noirJacket?.title).toBe('Noir jacket');
    expect(noirJacket?.variants[0].price).toBe('60.00');

    expect(stripedTop).toBeDefined();
    expect(stripedTop?.title).toBe('Striped top');
    expect(stripedTop?.variants[0].price).toBe('50.00');
  });
});
