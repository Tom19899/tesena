import { MenuSection } from "./menu_section";

export class KarieraPage extends MenuSection {
  constructor() {
    super("kariera");
    this.h1Kariera = '[data-uniqid="inv2"] > .col > .block > :nth-child(1)';
  }

  h1HastextKariera(overeniKariera) {
    cy.get(this.h1Kariera)
      .should("be.visible")
      .should("have.text", overeniKariera);
    return this;
  }
}
