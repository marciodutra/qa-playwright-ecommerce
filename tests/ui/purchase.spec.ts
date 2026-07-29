import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { CartPage } from '../../src/pages/CartPage';

test.describe('Fluxo de compra', () => {

  test('Usuário adiciona produto ao carrinho', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.acessar();

    await homePage.selecionarProduto('Samsung galaxy s6');

    await homePage.adicionarAoCarrinho();    

    await cartPage.acessarCarrinho();

    const produtoExiste = await cartPage.validarProduto('Samsung galaxy s6');

    expect(produtoExiste).toBeTruthy();

  });

});