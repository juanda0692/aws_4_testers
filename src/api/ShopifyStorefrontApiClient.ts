import { APIRequestContext } from '@playwright/test';

export type ShopifyProductVariant = {
  id: number;
  title: string;
  price: string;
  available: boolean;
};

export type ShopifyProduct = {
  id: number;
  handle: string;
  title: string;
  product_type: string;
  variants: ShopifyProductVariant[];
};

export type ShopifyProductsResponse = {
  products: ShopifyProduct[];
};

export class ShopifyStorefrontApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getAllProducts(): Promise<ShopifyProductsResponse> {
    const response = await this.request.get('/products.json');
    return response.json();
  }

  async getProductByHandle(handle: string): Promise<ShopifyProduct | undefined> {
    const { products } = await this.getAllProducts();
    return products.find((product) => product.handle === handle);
  }
}
