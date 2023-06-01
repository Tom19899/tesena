import { HomePage } from "../page-objects/home_page";
import { SluzbyPage } from "../page-objects/sluzby_page";

describe("Open website Tesena", () => {
  const phone = "+420771177222";
  // const faker = require("faker");

  beforeEach(() => {
    new HomePage().openTesena().confirmCookies();
    cy.viewport(1366, 768);
  });

  context("Click menu section", () => {
    it("Click all menu section", () => {
      new HomePage()
        .clickSluzby()
        .clickSkoleni()
        .clickUdalosti()
        .clickPostrehy()
        .clickKariera()
        .clickTesenaFest();
    });
  });

  context("Fill form and check visible elements", () => {
    it("Fill form", () => {
      new HomePage()
        .fillFieldNameAndCheckValue()
        .fillAccidentalUserEmail()
        .fillPhoneNumber(phone)
        .fillBoxWithCanWeHelpYou()
        .clickCheckBoxGDPR();
    });

    it("Check visible elements", () => {
      new HomePage().checkWelcomeText().logoIsVisible();
      new SluzbyPage()
        .clickSluzby()
        .buttonKonzultaceZdarmaIsVissible()
        .imageCeskaSportelnaIsVisible()
        .buttonNaseSluzbyIsVisible();
    });
  });
});
