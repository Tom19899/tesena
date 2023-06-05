import { MenuSection } from "./menu_section";

export class PostrehyPage extends MenuSection {
  constructor() {
    super("postrehy");
    this.h1Postrehy = "h1";
  }

  h1HastextPostrehy(overeniPostrehy) {
    cy.get(this.h1Postrehy)
      .should("be.visible")
      .should("have.text", overeniPostrehy);
    return this;
  }
}
