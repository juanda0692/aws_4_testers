import { test, expect } from '@playwright/test';
import { LambdaInvoker } from '../../utils/LambdaInvoker';

test('Lambda Clima Function positive Tests', async ({ }) => {
  const lambdaInvoker = new LambdaInvoker();
  const response = await lambdaInvoker.invokeLambda('Clima', { city: 'Medellín' });
  expect(response).toBeDefined();
  const body = JSON.parse(response.body);
  expect(body).toHaveProperty('temperature');
  expect(body).toHaveProperty('description');
  expect(body.temperature).toBeGreaterThan(10);
  expect(body.temperature).toBeLessThan(40);
});