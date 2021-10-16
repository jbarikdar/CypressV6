import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types = "Cypress"/>
describe("Test Contact us form via WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const contact_Us_PO = new Contact_Us_PO();
  const homepage_PO = new Homepage_PO();
  before(() => {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html"
    // );
    //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    homepage_PO.visitHomepage();

    homepage_PO.clickOn_ContactUs_Button();
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    //cy.get('#contact-us').click({force:true});
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.url().should("contain", "contact");
    cy.title().should("include", "WebDriver");
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("This is my comment!");
    // cy.get('[type="submit"]').click();
    // cy.get("h1").should("contain.text", "Thank");
    // cy.webdriverUni_ContactForm_Submission(
    //   data.first_name,
    //   data.last_name,
    //   data.email,
    //   "This is my comment!",
    //   "h1",
    //   "Thank"
    // );

    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "This is my comment!",
      "h1",
      "Thank"
    );
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.visit("http://www.webdriveruniversity.com/");
    //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // //cy.get('[name="email"]').type("john@ross.com");
    // cy.get("textarea.feedback-input").type("This is my comment!");
    // cy.get('[type="submit"]').click();
    // cy.get("body").should("contain.text", "Error");

    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      " ",
      "This is my comment!",
      "body",
      "Error"
    );
    // cy.webdriverUni_ContactForm_Submission(
    //   Cypress.env("first_name"),
    //   data.last_name,
    //   " ",
    //   "This is my comment!",
    //   "body",
    //   "Error"
    // );
  });
});
