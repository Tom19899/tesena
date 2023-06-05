import { HomePage } from "../page-objects/home_page";
import { SluzbyPage } from "../page-objects/sluzby_page";
import { AccidentalGenerators } from "../utils/AccidentalGenerators";

describe("Open website Tesena", () => {
  const phone = "+420771177222";
  const generatorFirstName = new AccidentalGenerators().firstNameGenerator();
  const generatedEmail = new AccidentalGenerators().emailAdressGenerator();
  const text = "Ahoj, jak se máš?";
  const welcomeText = "Testing 360°";
  const overeniSkoleni = "Školení";
  const overeniUdalosti = "Potkejme se";
  const overeniPostrehy = "Postřehy ze světa testování";
  const overeniKariera = "Spojuje nás touha";
  const overeniTesenaFest = "Tesena Fest 2022";

  beforeEach(() => {
    new HomePage().openTesena().confirmCookies();
    cy.viewport(1366, 768);
  });

  context("Click menu section", () => {
    it("Click all menu section", () => {
      new HomePage()
        .clickSluzby()
        .buttonKonzultaceZdarmaIsVissible()
        .clickSkoleni()
        .h1HastextSkoleni(overeniSkoleni)
        .clickUdalosti()
        .h1HastextUdalosti(overeniUdalosti)
        .clickPostrehy()
        .h1HastextPostrehy(overeniPostrehy)
        .clickKariera()
        .h1HastextKariera(overeniKariera)
        .clickTesenaFest()
        .h1HastextTesenaFest(overeniTesenaFest);
    });
  });

  context("Fill form and check visible elements", () => {
    it("Fill form", () => {
      new HomePage()
        .fillFieldNameAndCheckValue(generatorFirstName)
        .fillAccidentalUserEmail(generatedEmail)
        .fillPhoneNumber(phone)
        .fillBoxWithCanWeHelpYou(text)
        .clickCheckBoxGDPR();
    });
  });

  context("Check visible elements", () => {
    it("Check welcome text", () => {
      new HomePage().checkWelcomeText(welcomeText);
    });

    it("Check logo is visible", () => {
      new HomePage().logoIsVisible();
    });

    it("Check button konzultace is visible", () => {
      new SluzbyPage().clickSluzby().buttonKonzultaceZdarmaIsVissible();
    });

    it("Check image Ceska sporitelna is visible", () => {
      new SluzbyPage().clickSluzby().imageCeskaSportelnaIsVisible();
    });

    it("Check button sluzby is visible", () => {
      new SluzbyPage().clickSluzby().buttonNaseSluzbyIsVisible();
    });
  });
});
