/// <reference types = "Cypress"/>
describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.greaterThan", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Validate product thumbnails", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    //   cy.get("@productThumbnail")
    //     .find(".oneprice")
    //     .each(($el, index, $list) => {
    //         cy.log($el.text())
    //     });
    let itemsTotal = 0;
    cy.get("@productThumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");
    cy.get("@productThumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("saleItemPrice");
    cy.get("@itemPrice").then(($linkText) => {
      let itemPrice = $linkText.split("$");
      let itemPriceTotal = 0;
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemsTotal);
    });
    cy.get("@saleItemPrice").then(($linkText) => {
      let saleItemPrice = $linkText.split("$");
      let salesItemPrice = 0;
      for (let i = 0; i < saleItemPrice.length; i++) {
        cy.log(saleItemPrice[i]);
        saleItemPrice += Number(saleItemPrice[i]);
      }
      cy.log("Sale price items total: "+ salesItemPrice)
      itemsTotal += salesItemPrice;
    })
    .then(()=>{
        cy.log("The total price of all products: "+itemsTotal)
    })
  });
});
