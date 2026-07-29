import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acessar() {

        await this.page.goto('https://www.demoblaze.com/');

    }

    async selecionarProduto(produto: string) {

        const produtoLocator = this.page
            .locator('.hrefch')
            .filter({ hasText: produto });

        await produtoLocator.waitFor();

        await produtoLocator.click();

    }

    async adicionarAoCarrinho() {

        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        await Promise.all([
            this.page.waitForResponse(response =>
                response.url().includes('/addtocart')
            ),
            this.page.getByText('Add to cart', { exact: true }).click()
        ]);

    }
}