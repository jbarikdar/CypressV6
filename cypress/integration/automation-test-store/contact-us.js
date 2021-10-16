/// <reference types = "Cypress"/>
describe("Test Contact us form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    //Cypress.currentTest.retries(2);
    cy.visit("https://automationteststore.com/");
    //cy.get("[href='https://automationteststore.com/index.php?rt=content/contact']").click();
    cy.get("[href$='contact555']")
      .click()
      .then(function (name) {
        cy.log("Clicked on link using text: " + name.text());
      });
    //cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });

    cy.get("#ContactUsFrm_enquiry").type("Notes");
    cy.get(".col-md-6 > .btn").click();
    cy.get(".mb40 > :nth-child(3)").should("contain.text", "success");
  });
});
