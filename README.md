# QA Playwright E-commerce

## Objetivo

Este projeto foi desenvolvido como solução para um desafio técnico de QA Pleno, contemplando automação de testes End-to-End (UI) e testes de API utilizando **Playwright**, **TypeScript** e boas práticas de automação.

O objetivo principal é validar um fluxo de compra em uma aplicação de ecommerce, garantindo o funcionamento correto das principais jornadas do usuário.

---

## Tecnologias

* Playwright
* TypeScript
* Axios
* Faker
* Dotenv
* Winston
* Node.js

---

## Cenário Automatizado

Fluxo de compra validado:

1. Acessar a página inicial do ecommerce
2. Localizar um produto
3. Acessar a página do produto
4. Adicionar o produto ao carrinho
5. Navegar até o carrinho
6. Validar que o produto foi adicionado corretamente

Produto utilizado no cenário:

```
Samsung galaxy s6
```

---

## Arquitetura

O projeto utiliza o padrão **Page Object Model (POM)**, mantendo a separação entre:

* Locators
* Ações das páginas
* Regras de teste
* Configurações

Estrutura preparada para evolução com:

* Pages
* API Clients
* Services
* Factories
* Helpers
* Configuração centralizada de ambientes

---

## Estrutura do Projeto

```text
qa-playwright-ecommerce/
│
├── src/
│   ├── api/
│   │   └── ApiClient.ts
│   │
│   ├── config/
│   │   └── urls.ts
│   │
│   └── pages/
│       ├── HomePage.ts
│       └── CartPage.ts
│
├── tests/
│   └── ui/
│       └── purchase.spec.ts
│
├── docs/
├── .github/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Execução dos Testes

Instalar dependências:

```bash
npm install
```

Instalar browsers do Playwright:

```bash
npx playwright install
```

Executar todos os testes:

```bash
npx playwright test
```

Executar o fluxo de compra:

```bash
npx playwright test tests/ui/purchase.spec.ts
```

---

## Browsers Validados

O fluxo de compra foi validado nos seguintes navegadores:

* Chromium ✅
* Firefox ✅
* Webkit ✅

---

## Evidências

Em caso de falha, o Playwright gera automaticamente:

* Screenshots
* Vídeos
* Trace Viewer

Para abrir o relatório:

```bash
npx playwright show-report
```

---

## Status

✅ Fluxo de compra E2E implementado

🚧 Projeto em evolução

Próximas etapas:

* Implementação dos testes de API
* Validação de contratos
* Integração UI + API
* Evolução da cobertura de testes
* Configuração de pipeline CI/CD

---

## Autor

Marcio Dutra

GitHub:
https://github.com/marciodutra
