import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the log in page", () => {
  cy.visit("/Account/login");
  // TODO: implement step
});

Given("when i enter {string} and {string} into my input fields", (a, b) => {
  // TODO: implement step
  // cy.origin(Cypress.env("auth0_domain"), { args: { a, b } }, ({ a, b }) => {
  cy.get(":nth-child(5) > .form-control").type(a);
  cy.get(":nth-child(6) > .form-control").type(b);
  // });
});

When("when i click login", () => {
  cy.get(".w-100").click();
  // hehe
  // TODO: implement step
});

Then("I will enter the menu page", () => {
  cy.visit("/Home");
  // TODO: implement step
});
