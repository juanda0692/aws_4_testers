import { test, expect } from '@playwright/test';
import { LambdaInvoker } from '../../utils/LambdaInvoker';
import * as AWS from 'aws-sdk';
import { log } from 'node:console';

// Configure DynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "city";

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

test('Verify that the city is registered in DynamoDB', async ({ }) => {
  const city = 'New York';
  const lambdaInvoker = new LambdaInvoker();
  const lambdaResponse = await lambdaInvoker.invokeLambda('Clima', { city: city });
  expect(lambdaResponse).toBeDefined();

  // Wait a brief time to be sure that the Lambda function has had time to write to DynamoDB
  await new Promise(resolve => setTimeout(resolve, 3000));
  const params = {
    TableName: tableName,
    Key: { city: city }
  };
  const result = await dynamoDB.get(params).promise();

  // Verify that result.Item is defined before accessing its properties
  expect(result.Item).toBeDefined();
  expect(result.Item?.city).toBe(city);
  expect(result.Item?.temperature).toBeLessThan(50);
});