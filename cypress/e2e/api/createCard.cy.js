import { getAuth } from '../../support/commands'

describe('Criar card via API', () => {
  it('Criar um card com sucesso', () => {
    cy.createBoard().then(boardId => {
      cy.getListIdFromBoard(boardId).then(listId => {
        cy.createCard(listId).then(cardId => {
          const { key, token } = getAuth()

          cy.request({
            method: 'GET',
            url: `/cards/${cardId}?key=${key}&token=${token}`
          }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(cardId)
            expect(res.body.idList).to.eq(listId)
            expect(res.body.closed).to.be.false // verifica se o card ta ativo ou arquivado (ver API do Trello)
          })
        })
      })
    })
  })
})
