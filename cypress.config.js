const { defineConfig } = require("cypress")
require("dotenv").config() // Carrega variáveis do .env

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    env: {
      trello_key: process.env.TRELLO_KEY,
      trello_token: process.env.TRELLO_TOKEN
    },
    supportFile: 'cypress/support/e2e.js'
  },
})
