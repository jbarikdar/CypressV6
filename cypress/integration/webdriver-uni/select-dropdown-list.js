/// <reference types = "Cypress"/>
describe("Interact with dropdown lists via WebdriverUni", () => {
  it("Select specific values via select dropdown list", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select('c#')
    cy.get("#dropdowm-menu-2").select('testng').should('have.value','testng')
    cy.get("#dropdowm-menu-3").select('jquery').contains('JQuery')
  });

});
