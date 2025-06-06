import { faker } from '@faker-js/faker'

// Função para reutilizar auth
export const getAuth = () => {
  return {
    key: Cypress.env('trello_key'),
    token: Cypress.env('trello_token')
  }
}

Cypress.Commands.add('createBoard', () => {
  const { key, token } = getAuth()
  const boardName = faker.word.words(2)

  return cy.request({
    method: 'POST',
    url: `/boards/?name=${boardName}&key=${key}&token=${token}`
  }).then(res => {
    expect(res.status).to.eq(200)
    return res.body.id
  })
})

Cypress.Commands.add('getListIdFromBoard', (boardId) => {
  const { key, token } = getAuth()

  return cy.request({
    method: 'GET',
    url: `/boards/${boardId}/lists?key=${key}&token=${token}`
  }).then((res) => {
    expect(res.status).to.eq(200)
    return res.body[0].id
  })
})

Cypress.Commands.add('createCard', (listId) => {
  const { key, token } = getAuth()
  const cardName = faker.commerce.productName()

  return cy.request({
    method: 'POST',
    url: `/cards?name=${cardName}&idList=${listId}&key=${key}&token=${token}`
  }).then(res => {
    expect(res.status).to.eq(200)
    return res.body.id
  })
})

Cypress.Commands.add('deleteBoard', (boardId) => {
  const { key, token } = getAuth()

  return cy.request({
    method: 'DELETE',
    url: `/boards/${boardId}?key=${key}&token=${token}`
  }).then(res => {
    expect(res.status).to.eq(200)
  })
})

Cypress.Commands.add('deleteCard', (cardId) => {
  const { key, token } = getAuth()

  return cy.request({
    method: 'DELETE',
    url: `/cards/${cardId}?key=${key}&token=${token}`
  }).then(res => {
    expect(res.status).to.eq(200)
  })
})
