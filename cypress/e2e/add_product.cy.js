describe("Demoblaze", () => {
    it("Add a product from 'Laptops' category and place an order", () => {
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
        cy.contains('Laptops').click()
        cy.contains('Sony vaio i5').click()
        cy.contains('Add to cart').click()

         // Click on the cart link and proceed to checkout
        cy.get('#cartur').click()

        // Check if the product is added to cart successfully
        cy.get('#tbodyid').contains('td', 'Sony vaio i5')

        cy.contains('Place Order').click()
        cy.wait(1000)

        // Fill out the order form and click purchase
        cy.get('#name').type('Patrick Bateman').should('have.value', 'Patrick Bateman')
        cy.get('#country').type('United States').should('have.value', 'United States')
        cy.get('#city').type('California').should('have.value', 'California')
        cy.get('#card').type('123456789').should('have.value', '123456789')
        cy.get('#month').type('05').should('have.value', '05')
        cy.get('#year').type('2023').should('have.value', '2023')
        cy.contains('Purchase').click()

        // Check if the order is placed successfully
        cy.contains('Thank you for your purchase!')
      })
  })