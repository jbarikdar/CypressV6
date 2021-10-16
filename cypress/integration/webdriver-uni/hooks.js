describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  });

  beforeEach(() => {
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    cy.log("runs after each test in the block");
  });

  after(() => {
    cy.log("runs once after all tests in the block");
  });
  it("Example Test one", () => {
    cy.log("Example Test1");
  });
  it("Example Test two", () => {
    cy.log("Example Test2");
  });
});
