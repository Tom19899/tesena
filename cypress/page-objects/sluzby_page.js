import { MenuSection } from "./menu_section";

export class SluzbyPage extends MenuSection {
  constructor() {
    super("sluzby");
    this.buttonKonzultaceZdarma =
      '[data-uniqid="inv4"] > .col > .block > .left > .btn > .btn__label';
    this.imageGraf = ".image-wrapper > .image";
    this.buttonNaseSluzby = ".image-btn > .btn";
  }

  buttonKonzultaceZdarmaIsVissible() {
    cy.get(this.buttonKonzultaceZdarma).should("be.visible");
    return this;
  }

  imageCeskaSportelnaIsVisible() {
    cy.get(this.imageGraf).should("be.visible");
    return this;
  }

  buttonNaseSluzbyIsVisible() {
    cy.get(this.buttonNaseSluzby).should("be.visible");
    return this;
  }
}
