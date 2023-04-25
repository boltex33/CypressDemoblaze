describe('Demoblaze', () => {
    it('Check Log out functionality', () => {
      // Navigate to the website
      cy.visit('https://www.demoblaze.com/')
      
      // Click the login button
      cy.get('#login2').click()
      cy.wait(1000)
      
      // Enter the username and password and click login
      cy.get('#loginusername').type('boltex33').should('have.value', 'boltex33')
      cy.get('#loginpassword').type('boltex98').should('have.value', 'boltex98')
      cy.get("button").contains("Log in").click()

      // Click the logout button
      cy.get("#logout2").click()

      })
  })