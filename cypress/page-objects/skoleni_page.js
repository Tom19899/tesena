import { MenuSection } from "./menu_section";

export class SkoleniPage extends MenuSection {
  constructor() {
    super("skoleni");
    this.textSkoleni = "h1";
  }

  h1HastextSkoleni(overeniSkoleni) {
    cy.get(this.textSkoleni)
      .should("be.visible")
      .should("have.text", overeniSkoleni);
    return this;
  }
}
