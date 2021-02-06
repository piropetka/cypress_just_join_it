describe('Log-in test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://justjoin.it/')
      // cy.contains('Sign in').click()
    cy.xpath('//span[text()=\"Sign in\"]').click()
  })
})