describe('Listing Tests', () => {
    it('clicks into specified listing content', () => {
        cy.visit('http://localhost:3000/#/')
        cy.contains('Million dollar view in Cabo!!').click()
    })

    it('should have navigated to a new url', () => {
        cy.url().should('include', '/listing')
    })

    it('lightbox is closed initially', () => {
        cy.get('div.ReactModalPortal').should('not.exist')
    })

    it('lightbox is opened after clicking image', () => {
        cy.get('.imagePrimary').click()
        cy.get('div.ReactModalPortal')
    })
    
    it('lightbox is closed after clicking the "X" on screen', () => {
        cy.get('.ril-close').click()
        cy.get('div.ReactModalPortal').should('not.exist')
    })
})