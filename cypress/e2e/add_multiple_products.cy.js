describe('Demoblaze', () => {
    it('Add multiple products from different categories and place the order', () => {
      // Visit the demo site
      cy.visit('https://www.demoblaze.com/')
      
      // Click the login button
      cy.get('#login2').click()
      cy.wait(1000)
      // Enter the username and password and click login
      cy.get('#loginusername').type('boltex33').should('have.value', 'boltex33')
      cy.get('#loginpassword').type('boltex98').should('have.value', 'boltex98')
      cy.get("button").contains("Log in").click()
  
      // Click on a product from the Laptops category and add it to cart
      cy.contains('Laptops').click()
      cy.contains('Dell i7 8gb').click()
      cy.contains('Add to cart').click()
  
      // Click on a product from the Phones category and add it to cart
      cy.visit('https://www.demoblaze.com/')
      cy.contains('Phones').click()
      cy.contains('Samsung galaxy s6').click()
      cy.contains('Add to cart').click()
  
      // Click on a product from the Monitors category and add it to cart
      cy.visit('https://www.demoblaze.com/')
      cy.contains('Monitors').click()
      cy.contains('Apple monitor 24').click()
      cy.contains('Add to cart').click()

      // Click on the cart link and proceed to checkout
      cy.get('#cartur').click()
  
      // Check if the products are added to cart successfully
      cy.get('#tbodyid').contains('td', 'Dell i7 8gb')
      cy.get('#tbodyid').contains('td', 'Samsung galaxy s6')
      cy.get('#tbodyid').contains('td', 'Apple monitor 24')
  
      // Remove the Dell i7 8gb laptop from the cart
      cy.get('#tbodyid').contains('td', 'Dell i7 8gb').parent().contains('Delete').click()
  
      // Check if the Dell i7 8gb laptop is removed from the cart successfully
      cy.get('#tbodyid').should('not.contain', 'Dell i7 8gb')
  
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
  