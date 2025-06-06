import { getAuth } from '../../support/commands'

describe('Deletar board via API', () => {
  it('Criar e excluir um board com sucesso', () => {
    cy.createBoard().then(boardId => {
      cy.deleteBoard(boardId)

      const { key, token } = getAuth() 
      cy.request({
        method: 'GET',
        url: `/boards/${boardId}?key=${key}&token=${token}`,
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(404)
      })
    })
  })
})
