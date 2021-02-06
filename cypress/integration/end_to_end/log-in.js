describe('Log-in test', () => {
  it('Visits the Kitchen Sink', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.visit('https://justjoin.it/')
      // cy.contains('Sign in').click()
    cy.xpath('//span[text()="Sign in"]').click()
    cy.xpath('//span[text()="Sign in as a developer"]').click()
    cy.xpath('//input[@name="email"]').type(username)
    cy.xpath('//input[@name="password"]').type(password)
    cy.xpath('//button[@type="submit"]/span[text()="Sign in"]').click()
  })

  it('Log-in test request ', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.request({
      method: 'POST',
      url: "https://justjoin.it/api/developers/auth",
      form: true,
      body: {
        email: username,
        password: password
      }
    })
  });
})
