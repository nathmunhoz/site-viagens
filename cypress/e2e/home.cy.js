describe('Página Home', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
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

describe('Página Contato', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/paginas/contato.html')
  })

  it('exibe o menu de navegação', () => {

    cy.get('nav').should('exist')

  })

  it('possui 4 links no menu', () => {

    cy.get('nav ul li')
      .should('have.length', 4)

  })

  it('exibe elementos do formulário', () => {

  cy.get('#nome')
  .should('be.visible')

  cy.get('#email')
  .should('be.visible')

  cy.get('#assunto')
  .should('be.visible')

  cy.get('#mensagem')
  .should('be.visible')

  cy.get('button[type="submit"]')
  .should('be.visible')

})

it('permite preencher o formulário', () => {

cy.get('#nome')
  .type('Ana Clara')

cy.get('#email')
  .type('ana@email.com')

cy.get('#mensagem')
  .type('Gostei do site!')

cy.get('#nome')
  .should('have.value', 'Ana Clara')

cy.get('#email')
  .should('have.value', 'ana@email.com')

cy.get('#mensagem')
  .should('have.value', 'Gostei do site!')

})

it('exibe os cards das redes sociais', () => {

cy.get('.social-card')
  .should('have.length', 3)

})

it('exibe Instagram, Facebook e Twitter', () => {

cy.contains('Instagram')
cy.contains('Facebook')
cy.contains('Twitter')

})

it('exibe o footer', () => {

cy.get('footer')
  .should('exist')

})

})

describe('Página Destinos', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/paginas/destinos.html')
  })

  it('carrega a página', () => {
    cy.contains('DESTINOS')
  })

  it('exibe os botões de filtro', () => {
  cy.get('.filtro')
    .should('have.length', 5)
  })

  it('mostra os cards', () => {
    cy.get('.card').should('have.length', 12)
  })

  it('filtra por praia', () => {
    cy.get('[data-filtro="praia"]').click()
    cy.get('.card:not(.hidden)').should('exist')
  })

  it('volta para todos os destinos', () => {
    cy.get('[data-filtro="praia"]').click()
    cy.get('[data-filtro="todos"]').click()
    cy.get('.card:not(.hidden)').should('have.length', 12)
  })

  it('clicar em ler mais leva para outra página', () => {
    cy.get('.card .btn').first().click()
    cy.url().should('include', 'paginas-destino')
  })

})





