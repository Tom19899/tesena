import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.menuSluzby = "#menu-1 > :nth-child(1) > .nav__link > .nav__label";
    this.menuSkoleni = '[href="https://www.tesena.com/skoleni"] > .nav__label';
    this.logo = "span.is-loaded > .is-loaded";
  }

  clickSkoleni() {
    //naimportovaná třída takhle, abych se vyhnul v JS crossReferenci mezi soubory
    const { SkoleniPage } = require("./skoleni_page");
    cy.get(this.menuSkoleni).click();
    return new SkoleniPage();
  }

  clickSluzby() {
    const { SluzbyPage } = require("./sluzby_page");
    cy.get(this.menuSluzby).click();
    return new SluzbyPage();
  }

  clickLogoAndCheckVisible() {
    cy.get(this.logo).should("be.visible");
    cy.get(this.logo).click();
    return this;
  }

  waitTime() {
    cy.wait(1000);
    return this;
  }
}
