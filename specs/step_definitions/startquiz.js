import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Här fortsätter denna .js från login.js. Fick duplicate så behövde ej skriva om denna

//----------------------------------------------------
// Given("that I am on the log in page", () => {
//   cy.visit("/Account/login");
//   // TODO: implement step
// });

// Given("when i enter {string} and {string} into my input fields", (a, b) => {
//   // TODO: implement step
//   // cy.origin(Cypress.env("auth0_domain"), { args: { a, b } }, ({ a, b }) => {
//   cy.get(":nth-child(5) > .form-control").type(a);
//   cy.get(":nth-child(6) > .form-control").type(b);
//   // });
// });

// When("when i click login", () => {
//   cy.get(".w-100").click();

//   // TODO: implement step
// });

// Then("I will enter the menu page", () => {
//   cy.visit("/Home");
//   // TODO: implement step
// });
//------------------------------------------------------

When("I click on {string} then I will enter another page", (a) => {
  cy.get(":nth-child(2) > .nav-link");
  cy.visit("/categorypage");
});

When(
  "When I am in category page, then I will start the first catergory",
  () => {
    cy.get(":nth-child(3) > h4 > .btn");
    cy.visit("segmentpage/1");
  }
);

When("When i am in the segment page, then i will start the first part", () => {
  cy.get(".btn");
  cy.visit("subcategory/1/1");
});

When(
  "When the first part is chosen, then we can start the quiz by looking for {string}",
  (a) => {
    cy.contains(".btn", a).click();
    cy.visit("questionpage/1/1");
  }
);

Then("the quiz has started. Time to choose answers", () => {
  cy.get(":nth-child(3) > input").click(); // väljer 3e svaret
  cy.get(":nth-child(2) > .btn").click(); // accept. och gå til nästa
  cy.get(":nth-child(3) > input").click(); // välj ett svar
  cy.get(":nth-child(2) > .btn").click(); // accept. och gå til nästa
  cy.get(":nth-child(3) > input").click(); // välj ett svar
  cy.get(":nth-child(3) > .btn").click(); // accept. och gå til nästa
  cy.get("form > :nth-child(1) > :nth-child(1) > input").click(); // välj ett svar
  cy.get(":nth-child(3) > .btn").click(); // accept. och gå til nästa
  cy.visit("/categorypage"); // Går tillbaka till category page
});
