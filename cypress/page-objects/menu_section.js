import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.menuSluzby = "#menu-1 > :nth-child(1) > .nav__link > .nav__label";
    this.menuSkoleni = '[href="https://www.tesena.com/skoleni"] > .nav__label';
    this.logo = "span.is-loaded > .is-loaded";
    this.menuUdalosti =
      ':nth-child(3) > [href="https://www.tesena.com/udalosti"]';
    this.menuPostrehy = ":nth-child(4) > .nav__link > .nav__label";
    this.menuKariera = ":nth-child(5) > .nav__link > .nav__label";
    this.menuTesenaFest = ".is-last > .nav__link > .nav__label";
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

  clickUdalosti() {
    const { UdalostiPage } = require("./udalosti_page");
    cy.get(this.menuUdalosti).click();
    return new UdalostiPage();
  }

  clickPostrehy() {
    const { PostrehyPage } = require("./postrehy_page");
    cy.get(this.menuPostrehy).click();
    return new PostrehyPage();
  }

  clickKariera() {
    const { KarieraPage } = require("./kariera_page");
    cy.get(this.menuKariera).click();
    return new KarieraPage();
  }

  clickTesenaFest() {
    const { TesenafestPage } = require("./tesenaFest_page");
    cy.get(this.menuTesenaFest).click();
    return new TesenafestPage();
  }

  waitTime() {
    cy.wait(1000);
    return this;
  }
}
