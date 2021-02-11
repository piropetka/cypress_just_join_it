describe('Log-in to justjoin.it test', () => {
  it('Log-in as a user', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.visit('https://justjoin.it/')
    cy.xpath('//span[text()="Sign in"]').click()
    cy.xpath('//span[text()="Sign in as a developer"]').click()
    cy.xpath('//input[@name="email"]').type(username)
    cy.xpath('//input[@name="password"]').type(password)
    cy.xpath('//button[@type="submit"]/span[text()="Sign in"]').click()
  })

  it('Log-in as a user request ', () => {

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
