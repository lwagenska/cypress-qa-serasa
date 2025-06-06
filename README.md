# Cypress QA Automation - Serasa Test

Projeto de automação de testes utilizando Cypress focado na API do [Trello](https://trello.com), criado como parte de um teste técnico.

---

## 📌 Visão Geral

Este projeto cobre ações básicas da API do Trello, simulando o fluxo de criação e exclusão de recursos:

- 📋 **Board**
- 🗂️ **Card**

Com boas práticas como:

- Uso de `custom commands`
- Separação por cenários (`create` e `delete`)
- Validação dos recursos criados via `GET`
- Uso de `faker` para dados dinâmicos
- Limpeza com `afterEach`

---

## 🛠️ Pré-requisitos

Você deve ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- npm (já vem com o Node.js)
- Git

---

## 📦 Instalação 

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seu-usuario/cypress-qa-serasa.git
cd cypress-qa-serasa
npm install
```
> O Cypress será instalado automaticamente junto com as dependências do projeto via `npm install`.

---

## 🧪 Variáveis de ambiente

Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```env
TRELLO_KEY=sua_key_aqui
TRELLO_TOKEN=seu_token_aqui
```
---

## 🚀 Como executar os testes

```bash
npm run test
``` 

---

## 🗂️ Estrutura dos testes
```
cypress/
├── e2e/
│   └── api/
│       ├── createBoard.cy.js
│       ├── createCard.cy.js
│       ├── deleteBoard.cy.js
│       └── deleteCard.cy.js
├── support/
│   ├── commands.js        
│   └── e2e.js             
```
---

## 🧠 Tecnologias utilizadas
* [Cypress](https://www.cypress.io/)
* [Faker.js](https://github.com/faker-js/faker)
* [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🔐 Segurança
As credenciais (TRELLO_KEY e TRELLO_TOKEN) são mantidas fora do repositório via .env. Nunca suba este arquivo.

---

## 💡 Autor

Este projeto foi desenvolvido por **Lucas Wagenska** como parte de um teste técnico.