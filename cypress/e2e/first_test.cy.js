import { HomePage } from "../page-objects/home_page";
import { faker } from "@faker-js/faker";
import { SluzbyPage } from "../page-objects/sluzby_page";

describe("Open website Tesena", () => {
  let username;
  const phone = "+420771177222";

  beforeEach(() => {
    new HomePage().openTesena().confirmCookies();
  });

  it("Click 2 menu section", () => {
    new HomePage().clickSluzby().waitTime().clickSkoleni().waitTime();
  });

  it("Fill form", () => {
    username = faker.person.firstName();
    new HomePage()
      .fillFieldNameAndCheckValue(username)
      .fillAccidentalUserEmail()
      .fillPhoneNumber(phone)
      .fillBoxWithCanWeHelpYou()
      .clickCheckBoxGDPR();
  });

  it.only("Check visible elements", () => {
    new HomePage().checkWelcomeText().logoIsVisible();
    new SluzbyPage()
      .clickSluzby()
      .buttonKonzultaceZdarmaIsVissible()
      .imageCeskaSportelnaIsVisible()
      .buttonNaseSluzbyIsVisible();
  });
});
