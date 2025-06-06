import { getAuth } from '../../support/commands'

describe('Criar board via API', () => {
    let boardId

  it('Criar board com sucesso', () => {
    cy.createBoard().then(id => {
      boardId = id  
      const { key, token } = getAuth()

      cy.request({
        method: 'GET',
        url: `/boards/${boardId}?key=${key}&token=${token}`
      }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body.id).to.eq(boardId)
        expect(res.body.closed).to.be.false // verifica se o board ta ativo ou arquivado (ver API do Trello)
      })
    })
  })

  afterEach(() => {
    if (boardId) {
      cy.deleteBoard(boardId)
    }
  })
})
