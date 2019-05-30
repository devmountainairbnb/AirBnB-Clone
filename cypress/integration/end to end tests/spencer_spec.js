describe('Input form', () => {
    const textInput = 'London'
    it('accepts user input', () => {
        cy.visit('http://localhost:3000/#/')
        cy.get('.padding-input-where')
        .type(textInput)
        .should('have.value', textInput)
    })

    it('starts as an empty string', () => {
        cy.visit('http://localhost:3000/#/')
        cy.get('.padding-input-where')
        .should('have.value', '')
    })
})


    it('value is equal to false', function() {
      expect('.padding-input-where').to.equal('.padding-input-where')
    })

  it('clicking "type" navigates to a new url', function() {
    cy.visit('http://localhost:3000/#/')
    cy.get('.explore-link-tags')
  })



  it('clicking "type" navigates to a new url', function() {
    cy.visit('http://localhost:3000/#/')
    cy.get('.explore-link-tags1').click()
    cy.url().should('include', '/unfilteredhomes')
  })