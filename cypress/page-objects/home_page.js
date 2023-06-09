import { AccidentalGenerators } from "../utils/AccidentalGenerators";
import { MenuSection } from "./menu_section";

export class HomePage extends MenuSection {
  constructor() {
    super();
    this.tesenaUrl = "https://www.tesena.com/";
    this.buttonAgreeCookies = ".js-cookies-confirm-all > .btn__label";
    this.nadpisTesting360 = "h1.text-large";
    this.form = "#form_1";
    this.fieldName = "#field-name";
    this.fieldEmail = "#field-email";
    this.fieldPhone = "#field-phone";
    this.fieldCanWeHelpYou = "#field-s-cim-vam-muzeme-pomoci";
    this.checkBoxWithGDPR =
      "#field-wrapper-field_form_1_4_0_0 > .field-wrapper > label";
  }
  confirmCookies() {
    cy.get(this.buttonAgreeCookies).click();
    cy.get(this.buttonAgreeCookies).should("not.be.visible");
  }

  openTesena() {
    cy.visit(this.tesenaUrl);
    return this;
  }

  checkWelcomeText(welcomeText) {
    cy.get(this.nadpisTesting360).contains(welcomeText);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logo).should("be.visible");
    return this;
  }

  formIsVisible() {
    cy.get(this.form).should("be.visible");
    return this;
  }

  fillFieldNameAndCheckValue(generatorFirstName) {
    cy.get(this.fieldName).type(generatorFirstName);
    cy.get(this.fieldName).should("have.value", generatorFirstName);
    return this;
  }

  fillAccidentalUserEmail(generatedEmail) {
    cy.get(this.fieldEmail).type(generatedEmail);
    cy.get(this.fieldEmail).should("have.value", generatedEmail);
    return this;
  }

  fillPhoneNumber(phone) {
    cy.get(this.fieldPhone).type(phone);
    cy.get(this.fieldPhone).should("have.value", phone);
    return this;
  }

  fillBoxWithCanWeHelpYou(text) {
    cy.get(this.fieldCanWeHelpYou).type(text);
    cy.get(this.fieldCanWeHelpYou).should("have.value", text);
    return this;
  }

  clickCheckBoxGDPR() {
    cy.get(this.checkBoxWithGDPR).click();
    cy.get(this.checkBoxWithGDPR).should("be.visible");
    return this;
  }
}
