describe('Login', () => {
  it('should check for email and password field to not be empty', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('http://localhost:5173/')
    cy.get('[test-cy=login]').click()
    cy.get('[data-cy=login-button]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"email is not allowed to be empty')
    })
  })
  it('should check for the password field', () => {
    cy.once('uncaught:exception', () => false)
    cy.visit('http://localhost:5173/')
    cy.get('[test-cy=login]').click()
    cy.get('[data-cy-email=email]').type('yepyepnice96@example.com')
    cy.get('[data-cy=login-button]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"password is not allowed to be empty')
    })
  })
  it('should check if email and password is wrong', () => {
    cy.once('uncaught:exception', () => false)
    cy.visit('http://localhost:5173/')
    cy.get('[test-cy=login]').click()
    cy.get('[data-cy-email=email]').type('yepyepnice96@example.com')
    cy.get('[data-cy-password=password]').type('shorelyTheMostSecurePasswordEVER111')
    cy.get('[data-cy=login-button]').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('"email or password is wrong"')
    })
  })
  it('should do the login flawlessly', () => {
    cy.once('uncaught:exception', () => false)
    cy.visit('http://localhost:5173/')
    cy.get('[test-cy=login]').click()
    cy.get('[data-cy-email=email]').type('nani@gmail.com')
    cy.get('[data-cy-password=password]').type('nani123')
    cy.get('[data-cy=login-button]').click()
    cy.get('[test-cy-logout=logout]').click()
  })
})
