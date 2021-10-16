/// <reference types = "Cypress"/>
describe("Verify checkboxes via WebdriverUni", () => {
  beforeEach(() => {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });
  });
  it("Check and validate checkbox", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    //cy.get("#checkboxes > :nth-child(1) > input").check();
    //cy.get("#checkboxes > :nth-child(1) > input").check().should('not.be.checked')
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");
  });
  it("Uncheck and validate checkbox ", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    //cy.get("#checkboxes > :nth-child(1) > input").check();
    //cy.get("#checkboxes > :nth-child(1) > input").check().should('not.be.checked')
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck();
    cy.get("@option-3").should("not.be.checked");
  });
  it("Check multiple checkboxes ", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
