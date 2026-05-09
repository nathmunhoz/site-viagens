describe('Página Home', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080')
  })

  it('carrega a página inicial', () => {

    cy.contains('EXPLORE O MUNDO')

  })

  it('exibe o menu de navegação', () => {

    cy.get('nav').should('exist')

  })

  it('possui 4 links no menu', () => {

    cy.get('nav ul li')
      .should('have.length', 4)

  })

  it('exibe os cards de viagens', () => {

    cy.get('.card-item')
      .should('have.length', 3)

  })

  it('exibe os botões Ler Mais', () => {

    cy.contains('Ler Mais')

  })

  it('possui campo de email', () => {

    cy.get('input[type="email"]')
      .should('exist')

  })

  it('exibe o footer', () => {

    cy.get('footer')
      .should('exist')

  })

})