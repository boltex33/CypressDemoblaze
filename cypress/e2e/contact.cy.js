describe('Demoblaze', () => {
    it('Send a message to Contact', () => {
        // Visit the demo site
        cy.visit('https://www.demoblaze.com/')
    
        // Click the login button
        cy.get('#login2').click()
        cy.wait(1000)
        
        // Enter the username and password and click login
        cy.get('#loginusername').type('boltex33').should('have.value', 'boltex33')
        cy.get('#loginpassword').type('boltex98').should('have.value', 'boltex98')
        cy.get("button").contains("Log in").click()

        // Click on the Contact link
        cy.get('ul li').eq(1).click()
        cy.wait(1000)
    
        // Fill out the Contact form
        cy.get('#recipient-email').type('test@test.com').should('have.value', 'test@test.com')
        cy.get('#recipient-name').type('Patrick Bateman').should('have.value', 'Patrick Bateman')
        cy.get('#message-text').type('This is a test message.').should('have.value', 'This is a test message.')
    
        // Submit the form
        cy.contains('Send message').click()

        cy.on('window:alert', (text) => {
          expect(text).to.contains('Thanks for the message!!');
        });
    
    })
  })
  
  
  
  
  
  
  
  