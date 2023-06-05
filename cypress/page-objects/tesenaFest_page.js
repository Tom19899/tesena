import { MenuSection } from "./menu_section";

export class TesenafestPage extends MenuSection {
  constructor() {
    super("tesenafest");
    this.h1TesenaFest = "h1";
  }

  h1HastextTesenaFest(overeniTesenaFest) {
    cy.get(this.h1TesenaFest)
      .should("be.visible")
      .should("have.text", overeniTesenaFest);
    return this;
  }
}

it("Check visible elements", () => {
  new HomePage().checkWelcomeText(welcomeText).logoIsVisible();
  new SluzbyPage()
    .clickSluzby()
    .buttonKonzultaceZdarmaIsVissible()
    .imageCeskaSportelnaIsVisible()
    .buttonNaseSluzbyIsVisible();
});
