import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { ApiClient } from '../../src/api/ApiClient';

type ProductRequest = {
  title: string;
  price: number;
};

type ProductResponse = {
  id: number;
  title: string;
  price: number;
};

test.describe('Products API', () => {
  const api = new ApiClient();

  test('Deve cadastrar um novo produto', async () => {
    const novoProduto: ProductRequest = {
      title: faker.commerce.productName(),
      price: Number(faker.commerce.price({
        min: 100,
        max: 5000,
        dec: 0
      }))
    };

    const response = await api.post<ProductResponse>(
      '/products/add',
      novoProduto
    );

    expect(response.status).toBe(201);

    expect(response.data.id).toBeGreaterThan(0);
    expect(response.data.title).toBe(novoProduto.title);
    expect(response.data.price).toBe(novoProduto.price);
  });

  test('Deve consultar um produto existente', async () => {

  const response = await api.get<ProductResponse>('/products/1');

  expect(response.status).toBe(200);

  expect(response.data.id).toBe(1);
  expect(response.data.title).toBeTruthy();
  expect(response.data.price).toBeGreaterThan(0);

});
});

