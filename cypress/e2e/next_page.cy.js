describe("Demoblaze", () => {
    it("Add a product from the second page", () => {
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
        cy.wait(3000)
        cy.get("#next2").click()
        
        cy.contains('MacBook air').click()
        cy.contains('Add to cart').click()

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added.');
        });
        
      })
  })