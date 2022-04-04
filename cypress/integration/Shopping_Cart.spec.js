describe("Shopping Cart Page", () => {
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

    it("TC44 - FE-GU- Cart Page - Remove/ Add products and Checkout - (End to End)", () => {
        //Add 3 Products from New Arrivals to the Cart

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
        
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(2) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1)       
        })
        cy.wait=(20000)
        
        cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector')
        .then(($element) => {
            $element[0].setAttribute('style', 'visibility: visible;')
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > [data-button="increase-quantity"] > [data-button="increase"]')
            .click()      
            cy.get('#store_product_list_354 > .row-cols-2 > :nth-child(3) > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form > .product-qty-selector > .form-control-plaintext')
            .should('have.value',1) 
        })
        cy.wait=(20000)
        
        //Check Shopping Bag count
        cy.get(".shopping-bag-item-count").should('have.text',3)
        cy.visit("/store/cart");

        /* Get Max Quantity for the third product
        let maxQty = 0;
        cy.get("#order_line_items_attributes_0_quantity").invoke('attr', 'max')
        .then(max => { 
            console.log(max);
            maxQty = max; })
        cy.wait=(20000) 

        // Set the max quantity for the third Product and validate alert
        cy.get("#order_line_items_attributes_0_quantity").type('{selectAll}'+maxQty)
        cy.contains("You got the last one!").should('exist')
        */

        // Remove first product with "Remove" button
        cy.contains("Remove").first().click()
        cy.get(".shopping-bag-item-count").should('have.text',2)
        
        // Remove second product after clear quantity
        cy.get("#order_line_items_attributes_0_quantity").clear()
        cy.get(".shopping-bag-item-count").should('have.text',1)

        // Set a huge quantity for the third Product and validate error
        cy.get("#order_line_items_attributes_0_quantity").type("{selectAll}99999")
        cy.contains("Please lower the quantity or choose another product.").should('exist')
        cy.get(".shopping-bag-item-count").should('have.text',99999)

        // Reset quantity to 1 for the third Product
        cy.get("#order_line_items_attributes_0_quantity").type("{selectAll}1")
        cy.get(".shopping-bag-item-count").should('have.text',1)

        cy.get('#checkout-link')
        .click()

        //Validate the checkout button redirects to registration page
        cy.url().should('eq', 'https://www.herb.delivery/store/checkout/registration')

        //As an extra, I will fill the form, USER TYPE and CHECKBOX
        cy.get('#spree_user_first_name').type("Leslie")
        cy.get('#spree_user_last_name').type("Vergara")
        cy.get('#spree_user_email').type("leslie@michelada.io")
        cy.get('#birthdaypicker').type("11302021")
        cy.get('#spree_user_phone').type("210 1234567")
        cy.get('#spree_user_password').type("Padawan.#22")
        cy.get('#spree_user_user_type_adult_use').check({ force: true })
        //cy.get('#cardIdSelfie > .dropzone-msg > .input-group > .custom-file > .custom-file-btn').click()

        cy.get('#expirationdatepicker').type("06302023")
        cy.get('[for="opt-in-newsletter"]').should("exist").click()

    })
    


})    

