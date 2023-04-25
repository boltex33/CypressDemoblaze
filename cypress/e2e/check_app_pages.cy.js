describe('Demoblaze', () => {
    it('Navigation among the apllication pages', () => {
      // Navigate to the website
      cy.visit('https://www.demoblaze.com/')
      
      // Click the login button
      cy.get('#login2').click()
      cy.wait(1000)
      
      // Enter the username and password and click login
      cy.get('#loginusername').type('boltex33').should('have.value', 'boltex33')
      cy.get('#loginpassword').type('boltex98').should('have.value', 'boltex98')
      cy.get("button").contains("Log in").click()

      // Test that the user can navigate among the application pages
      cy.contains('Phones').click()
      cy.contains('Nexus 6').click()
      cy.url().should('include', '/prod.html?idp_=3')

      cy.visit('https://www.demoblaze.com/')
      cy.contains('Laptops').click()
      cy.contains('Sony vaio i5').click()
      cy.url().should('include', '/prod.html?idp_=8')

      cy.visit('https://www.demoblaze.com/')
      cy.contains('Monitors').click()
      cy.contains('Apple monitor 24').click()
      cy.url().should('include', 'prod.html?idp_=10')

      })
  })