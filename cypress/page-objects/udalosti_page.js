import { MenuSection } from "./menu_section";

export class UdalostiPage extends MenuSection {
  constructor() {
    super("udalosti");
    this.h1Udalost = "h1";
  }

  h1HastextUdalosti(overeniUdalosti) {
    cy.get(this.h1Udalost)
      .should("be.visible")
      .should("have.text", overeniUdalosti);
    return this;
  }
}
