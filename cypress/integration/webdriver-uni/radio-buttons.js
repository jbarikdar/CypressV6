/// <reference types = "Cypress"/>
describe("Verify radio buttons via WebdriverUni", () => {
  before(function () {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check speicific radio buttons", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("#radio-buttons").find("input[type='radio']").first().check();
    cy.get("#radio-buttons").find("input[type='radio']").eq(1).check();
  });
  it("Validate the states of specific radio buttons", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("[value = 'lettuce']").should("not.be.checked");
    cy.get("[value = 'pumpkin']").should("be.checked");
    //[value = 'cabbage']
    //[value = 'pumpkin']
    cy.get("[value = 'lettuce']").check();
    cy.get("[value = 'lettuce']").should("be.checked");
    cy.get("[value = 'pumpkin']").should("not.be.checked");

    cy.get("[value = 'cabbage']").should("be.disabled");
  });
});
