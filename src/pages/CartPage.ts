import { Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acessarCarrinho() {

        await this.page.locator('#cartur').click();

        await this.page.waitForURL('**/cart.html');

    }

    async validarProduto(produto: string) {

        console.log('URL CARRINHO:', this.page.url());

        const tabela = await this.page.locator('#tbodyid').innerText();

        console.log('CONTEUDO TBODY:', tabela);

        const storage = await this.page.evaluate(() => {
            return JSON.stringify(localStorage);
        });

        console.log('LOCAL STORAGE:', storage);


        const produtoNoCarrinho = this.page
            .locator('#tbodyid')
            .getByText(produto, { exact: true });


        await produtoNoCarrinho.waitFor({
            state: 'visible',
            timeout: 15000
        });


        return produtoNoCarrinho.isVisible();

    }
}