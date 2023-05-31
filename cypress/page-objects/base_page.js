export class BasePage {
  constructor(path) {
    this.baseUrl = "https://www.tesena.com/";
    this.path = path;
  }

  visit() {
    cy.visit(this.baseUrl + this.path);
    return this;
  }
}
