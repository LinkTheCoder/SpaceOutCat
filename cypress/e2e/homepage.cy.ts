describe('visit homepage, open web app', () => {
    it('passes', () => {
      cy.visit('https://www.spaceoutcat.com/')
      cy.contains('WEB APP').click()
    })
  })