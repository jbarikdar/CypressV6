/// <reference types = "Cypress"/>
describe("Interact with dropdown lists via WebdriverUni", () => {
  it("Verify Autocomplete dropdown lists via webdriveruni", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type('A');
    cy.get("#myInputautocomplete-list > *").each(($el,index,$list)=>{
        const prod = $el.text();
        const productToSelect = 'Avacado';
        if(prod === productToSelect){
            cy.wrap($el).click()
            cy.get('#submit-button').click()
            cy.url().should('include', productToSelect)
        }
    }).then(()=>{
        cy.get("#myInput").type("G");
           cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
             const prod = $el.text();
             const productToSelect = "Grapes";
             if (prod === productToSelect) {
               cy.wrap($el).click();
               cy.get("#submit-button").click();
               cy.url().should("include", productToSelect);
             }
           });
    })
  });
});
