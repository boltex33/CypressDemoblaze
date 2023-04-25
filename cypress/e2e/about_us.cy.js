describe('Demoblaze', () => {
    it('Play the video in the About us', () => {
        // Visit the demo site
        cy.visit('https://www.demoblaze.com/')
    
        // Click the login button
        cy.get('#login2').click()
        cy.wait(1000)
        
        // Enter the username and password and click login
        cy.get('#loginusername').type('boltex33').should('have.value', 'boltex33')
        cy.get('#loginpassword').type('boltex98').should('have.value', 'boltex98')
        cy.get("button").contains("Log in").click()

        // Click on the About us link
        cy.get('ul li').eq(2).click()
        cy.wait(1000)
    
        // Play the video
        cy.get("#example-video").click()
        cy.wait(2000)

        // Pause the video
        cy.get("#example-video").click()
    
    })
  })
  
  
  
  
  
  
  
  