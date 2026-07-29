# QA Playwright E-commerce

## Objetivo

Este projeto foi desenvolvido como solução para um desafio técnico de QA Pleno, contemplando automação de testes End-to-End (UI) e testes de API utilizando **Playwright**, **TypeScript** e boas práticas de automação.

O objetivo principal é validar um fluxo de compra em uma aplicação de ecommerce, cobrindo a camada de interface (UI) e a camada de serviços (API).

---

# Tecnologias

- Playwright
- TypeScript
- Axios
- Faker
- Dotenv
- Winston
- Allure Report
- Node.js

---

# Arquitetura

O projeto utiliza o padrão **Page Object Model (POM)** para os testes de interface, mantendo separação entre responsabilidades.

Estrutura utilizada:

- Pages
- API Client
- Tests
- Helpers
- Configurações centralizadas

---

# Estrutura do Projeto

```text
qa-playwright-ecommerce/

├── .github/
│
├── .vscode/
│
├── src/
│   ├── api/
│   │   └── ApiClient.ts
│   │
│   ├── config/
│   │   └── urls.ts
│   │
│   ├── helpers/
│   │   └── environment.ts
│   │
│   └── pages/
│       ├── HomePage.ts
│       └── CartPage.ts
│
├── tests/
│   ├── api/
│   │   └── products.spec.ts
│   │
│   └── ui/
│       └── purchase.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

---

# Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- npm

---

# Instalação do Projeto

Após clonar o repositório:

```bash
git clone https://github.com/marciodutra/qa-playwright-ecommerce.git
```

Acesse a pasta do projeto:

```bash
cd qa-playwright-ecommerce
```

Instale as dependências:

```bash
npm install
```

---

# Instalação dos Navegadores Playwright

O Playwright necessita dos navegadores instalados para execução dos testes.

Execute:

```bash
npx playwright install
```

Serão instalados:

- Chromium
- Firefox
- Webkit

---

# Configuração das Variáveis de Ambiente

O projeto utiliza variáveis de ambiente através do arquivo `.env`.

Crie um arquivo `.env` baseado no `.env.example`.

Exemplo:

```env
BASE_URL=https://www.demoblaze.com
API_URL=https://dummyjson.com
```

---

# Testes Implementados

## Testes de API

API utilizada:

```
https://dummyjson.com
```

---

## POST /products/add

Cenário:

Cadastro de um novo produto.

Validações realizadas:

- Status Code `201`
- Retorno do ID do produto criado
- Estrutura da resposta JSON

Os dados enviados são gerados dinamicamente utilizando a biblioteca **Faker**, evitando massa de dados fixa.

---

## GET /products/{id}

Cenário:

Consulta de produto existente.

Validações realizadas:

- Status Code `200`
- Dados retornados no JSON
- Propriedades esperadas do produto

---

# Teste de Interface (UI)

Aplicação utilizada:

```
https://www.demoblaze.com
```

Fluxo automatizado:

1. Acessar a página inicial do ecommerce
2. Localizar um produto
3. Acessar a página do produto
4. Adicionar o produto ao carrinho
5. Acessar o carrinho
6. Validar que o produto foi adicionado corretamente

Produto utilizado no cenário:

```
Samsung galaxy s6
```

---

# Execução dos Testes

## Executar todos os testes

```bash
npm test
```

ou:

```bash
npx playwright test
```

---

## Executar somente testes de API

```bash
npm run test:api
```

---

## Executar somente testes de UI

```bash
npm run test:ui
```

---

# Relatório de Testes - Allure Report

O projeto utiliza **Allure Report** para geração de relatório visual de execução.

O comando abaixo executa todo o fluxo:

```bash
npm run test:allure
```

Esse comando realiza:

1. Execução dos testes Playwright
2. Geração dos resultados Allure
3. Criação do relatório HTML
4. Inicialização do servidor Allure
5. Abertura automática do relatório no navegador

---

# Evidências de Teste

Em caso de falha, o Playwright gera automaticamente:

- Screenshot
- Vídeo da execução
- Trace Viewer

Para visualizar o relatório nativo do Playwright:

```bash
npx playwright show-report
```

---

# Navegadores Validados

Os testes foram executados nos seguintes navegadores:

- Chromium ✅
- Firefox ✅
- Webkit ✅

---

# Massa de Dados

Para evitar dados fixos nos testes de API, foi utilizada a biblioteca:

```
@faker-js/faker
```

Os dados de criação de produtos são gerados dinamicamente durante a execução dos testes.

---

# Status do Projeto

✅ Automação UI implementada  
✅ Automação API implementada  
✅ Page Object Model aplicado  
✅ Axios configurado para chamadas HTTP  
✅ Faker configurado para geração de dados  
✅ Allure Report configurado  
✅ Testes executados em Chromium, Firefox e Webkit  

Próxima evolução:

- Configuração de pipeline CI/CD utilizando GitHub Actions

---

# Autor

Marcio Dutra

GitHub:

https://github.com/marciodutra