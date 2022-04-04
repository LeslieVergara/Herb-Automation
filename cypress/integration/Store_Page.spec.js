describe("Store Page", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
    beforeEach(() => {
        cy.visit("/");
        cy.contains("Yes").click()
        cy.get('[id="landing-search-address"]')
        .type("2208 Sawtelle Boulevard, Los Angeles, CA 90064")
        cy.get('.pac-item').click()
    });

    it("TC41 - FE-GU- Store Page -Add/remove products to the cart", () => {
        //Get the div containing the add/remove buttons, for the FIRST product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1)    
        })
        cy.wait=(20000)
        
        //Get the div containing the add/remove buttons, for the SECOND product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1)       
        })
        cy.wait=(20000)
        
        //Get the div containing the add/remove buttons, for the THIRD product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()      
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1) 
        })
        cy.wait=(20000)
        
        //Check Shopping Bag
        cy.get(".shopping-bag-item-count").should('have.text',3)
        
        //Get the div containing the add/remove buttons, for the FIRST product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            console.log("nth-child(1)")
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .input-group-prepend > .btn')
            .click()      
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',0)
        })
        cy.wait=(20000)

        //Get the div containing the add/remove buttons, for the SECOND product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            console.log("nth-child(1)")
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .input-group-prepend > .btn')
            .click()      
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',0)    
        })
        cy.wait=(20000)

        //Get the div containing the add/remove buttons, for the THIRD product in 'New Arrivals' section
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            console.log("nth-child(1)")
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .input-group-prepend > .btn')
            .click()      
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',0)          
        })
        cy.wait=(20000)

        //Check Shopping Bag
        cy.get(".shopping-bag-item-count").should('have.text',0)

    })
    
    it("TC42 - FE-GU- Store Page - Set Currently Serving Address (Missing Street Number) in 'DELIVER TO'", () => {
        cy.get('#ship-address').clear()
        .type("Sawtelle Boulevard, Los Angeles")
  
        cy.get('.pac-item').first()
        .click()
    
        cy.contains("Missing Street Number")
        .should("exist")
    })

    it("TC48 - FE-GU- Store Page - Set Coming Soon Serving Address in 'DELIVER TO'", () => {
        cy.get('#ship-address').clear()
        .type("3400 W Arbor Vitae St, Inglewood")
  
        cy.get('.pac-item').first()
        .click()
    
        cy.contains("Invalid Address")
        .should("exist")
    })

    it("TC49 - FE-GU- Store Page - Set Non Serving Address in 'DELIVER TO'", () => {
        cy.get('#ship-address').clear()
        .type("20 W 34th St, New York, NY 10001")
  
        cy.get('.pac-item').should("not.exist")
        
    })

    it("TC43 - FE-GU- Store Page - Set Valid Currently Serving Address in 'DELIVER TO' - Use  Original Address", () => {
        // Add one product to the cart
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1)    
        })
        cy.wait=(20000)
        
        //Confirm current Address
        cy.get('#ship-address').should('have.value','2208 Sawtelle Blvd, 90064')
        //Check Shopping Bag
        cy.get(".shopping-bag-item-count").should('have.text',1)
        //Change the current address
        cy.get('#ship-address').clear()
        .type("180 South Alvarado Street Los Angeles")
        cy.get('.pac-item').first()
        .click()

        //Validate the Modal
        cy.contains("We can change your address, but ...").should("exist")
        cy.contains("Changing the delivery address will remove products from your cart.").should("exist")
        cy.contains("Use Original Address").click()
       
        //Validate when click on the Use Original Address button the address and products in the shopping bag doesn't change
        cy.get(".shopping-bag-item-count").should('have.text',1)
        cy.get('#ship-address').should('have.value','2208 Sawtelle Blvd, 90064')
     
    })

    it("TC53 - FE-GU- Store Page - Set Valid Currently Serving Address in 'DELIVER TO' - Change address ", () => {
        // Add one product to the cart
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            // Make the buttons visible, so Cypress can click on them
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(1) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1)    
        })
        cy.wait=(20000)
        
        //Confirm current Address
        cy.get('#ship-address').should('have.value','2208 Sawtelle Blvd, 90064')
        //Check Shopping Bag
        cy.get(".shopping-bag-item-count").should('have.text',1)
        //Change the current address
        cy.get('#ship-address').clear()
        .type("180 South Alvarado Street Los Angeles")
        cy.get('.pac-item').first()
        .click()

        //Validate the Modal
        cy.contains("We can change your address, but ...").should("exist")
        cy.contains("Changing the delivery address will remove products from your cart.").should("exist")
        cy.contains("Change address").click()
       
          //Validate when clicking on the "Change Address" button, the address is updated and the shopping bag is empty.
        cy.get(".shopping-bag-item-count").should('have.text',0)
        cy.get('#ship-address').should('have.value','180 S Alvarado St, 90057')
            
    })

})