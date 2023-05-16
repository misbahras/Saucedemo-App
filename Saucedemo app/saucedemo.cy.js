describe('end to end flow',()=>{

    it('login test',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Swag Labs')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').click()
        cy.get('[data-test="checkout"]').click()
        cy.contains('Checkout: Your Information')
        cy.get('[data-test="firstName"]').type('abc')
        cy.get('[data-test="lastName"]').type('abc')
        cy.get('[data-test="postalCode"]').type('21457')
        cy.get('[data-test="continue"]').click()
        cy.contains('Checkout: Overview')
        cy.get('[data-test="finish"]').click()
        cy.contains('Thank you for your order!')
        cy.get('[data-test="back-to-products"]').click()

        
        

    })
})

        

       
       



    
    
    
