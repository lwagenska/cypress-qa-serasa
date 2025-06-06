import { getAuth } from '../../support/commands'

describe('Deletar cards via API', () => {
  let boardId  

  it('Criar e excluir um card com sucesso', () => {
    cy.createBoard().then(id => {
      boardId = id  

      cy.getListIdFromBoard(boardId).then(listId => {
        cy.createCard(listId).then(cardId => {
          cy.deleteCard(cardId)

          const { key, token } = getAuth() 
          cy.request({
            method: 'GET',
            url: `/cards/${cardId}?key=${key}&token=${token}`,
            failOnStatusCode: false
          }).then((res) => {
            expect(res.status).to.eq(404)
          })
        })
      })
    })
  })

  afterEach(() => {
    if (boardId) {
      cy.deleteBoard(boardId)
    }
  })
})
