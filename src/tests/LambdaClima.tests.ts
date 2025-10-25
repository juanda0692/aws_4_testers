import { test, expect } from '@playwright/test';
import { LambdaInvoker } from '../../utils/LambdaInvoker';

test('Lambda Clima Function positive Tests', async ({ }) => {
  const lambdaInvoker = new LambdaInvoker();
  const response = await lambdaInvoker.invokeLambda('LambdaClima', { city: 'Medellín' });
  expect(response).toBeDefined();
  expect(response).toHaveProperty('temperature');
  expect(response).toHaveProperty('condition');
  expect(response.temperature).toBeGreaterThan(15);
  console.log(response);

});