export class AccidentalGenerators {
  constructor() {
    this.emailAddress = "#fields_9";
    this.firstName = "#input-firstname";
    this.secondName = "#input-lastname";
    this.telephone = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordInputConfirm = "#input-confirm";
    this.continueButton = ".pull-right > .btn";
  }

  emailAdressGenerator() {
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 1000000);

    // Construct the email address using the random number and template.org domain
    const emailAddress = `user${randomNumber}@example.org`;
    // cy.get(this.emailAddress).type(emailAddress);
    return emailAddress;
  }

  firstNameGenerator() {
    // First Name Generator
    const firstNames = [
      "Tom",
      "Jana",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
    ];
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    // cy.get(this.firstName).type(randomFirstName);
    return randomFirstName;
  }

  usernameGenerator() {
    const randomNumber = Math.floor(Math.random() * 1000);
    const userName = [
      "Tbrouk",
      "muska",
      "beruska",
      "komar",
      "slimak",
      "mandelinka",
      "kliste",
      "konipas",
    ];
    const randomUserName =
      userName[Math.floor(Math.random() * userName.length)];
    // randomUserNameWithNumber = `${randomNumber}${randomUserName}`
    // randomUserName.push(`User${randomNumber}`);
    const randomUserNameWithNumber = `${randomNumber}${randomUserName}`;
    return randomUserNameWithNumber;
  }

  lastNameGenerator() {
    // Last Name Generator
    const lastNames = [
      "Anderson",
      "Brown",
      "Carter",
      "Davis",
      "Edwards",
      "Fisher",
      "Váňa",
    ];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    // cy.get(this.secondName).type(randomLastName);
    return randomLastName;
  }

  passwordGenerator() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`";

    function randomChar(characters) {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // choose one lowercase letter, one uppercase letter, and one special character
    let passwordChars =
      randomChar(lowercaseLetters) +
      randomChar(uppercaseLetters) +
      randomChar(specialChars);

    // choose the remaining characters at random from all three sets
    for (let i = 0; i < 7; i++) {
      passwordChars += randomChar(
        lowercaseLetters + uppercaseLetters + specialChars
      );
    }

    // cy.get(this.passwordInput).type(passwordChars);

    return passwordChars;
  }
}
