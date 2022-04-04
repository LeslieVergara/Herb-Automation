describe("Landing Page flow", () => {
   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
   beforeEach(() => {
      cy.visit("/");
   });

   it("TC37 - FE-GU- Landing Page - Valid Currently Serving Address", () => {
      // Confirm the user is 21 Years
      cy.contains("Yes")
      .should("exist")
      .click()

      cy.get('[id="landing-search-address"]')
      .type("2208 Sawtelle Boulevard, Los Angeles, CA 90064")

      cy.get('.pac-item')
      .click()

      //Validate redirects to the store page
      cy.contains('Welcome to HERB! Come on in and have a look around')
      .should("exist");
   })

   it("TC39 - FE-GU- Landing Page - Coming Soon Serving Address", () => {
      // Confirm the user is 21 Years
      cy.contains("Yes")
      .should("exist")
      .click()

      cy.get('[id="landing-search-address"]')
      .type("3400 W Arbor Vitae St, Inglewood")

      cy.get('.pac-item')
      .click()
      cy.wait=(3000)

      cy.get('#deliveryAddressModal > .modal-dialog > .modal-content')
      .should("exist")
      cy.contains("We don't deliver to you...yet.")
      .should("exist")

   })

   it("TC45 - FE-GU- Landing Page - Currently Serving Address (Missing Street Number)", () => {
      // Confirm the user is 21 Years
      cy.contains("Yes")
      .should("exist")
      .click()

      cy.get('[id="landing-search-address"]')
      .type("Sawtelle Boulevard, Los Angeles")

      cy.get('.pac-item').first()
      .click()
      cy.wait=(2000)

      cy.get('#deliveryAddressModal > .modal-dialog > .modal-content')
      .should("exist")
      cy.contains("Missing Street Number")
      .should("exist")
   })

   it("TC47 - FE-GU- Landing Page - Non Serving Address", () => {
      // Confirm the user is 21 Years
      cy.contains("Yes")
      .should("exist")
      .click()

      cy.get('[id="landing-search-address"]')
      .type("20 W 34th St, New York, NY 10001")

      cy.get('.pac-item').should("not.exist")
   })
   
})