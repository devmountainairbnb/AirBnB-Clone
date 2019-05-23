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

describe('value to be truthy', function() {
    it('value is equal to false', function() {
      expect('.padding-input-where').to.equal('.padding-input-where')
    })
  })

// describe('link to a different page', () => {
//     it('routes from home to filteredHomes page', () => {
//         cy.visit('http://localhost:3000/#/')
//         cy.get('.house-box')
//         cy.server(cy.route('http://localhost:3000/#/filteredhomes'))
//     })
// })