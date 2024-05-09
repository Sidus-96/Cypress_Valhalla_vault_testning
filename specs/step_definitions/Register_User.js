import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the register page", () => {
  cy.visit("/Account/Register");
});

Given("I see Create a new account on the page", () => {
  cy.get("h2").should("be.visible");
});

When("I enter {string} and {string} into my input fields", (a, b) => {
  cy.get(":nth-child(5) > .form-control").type(a);
  cy.get(":nth-child(6) > .form-control").type(b);
  cy.get(":nth-child(7) > .form-control").type(b);
});

When("I click on the checkbox", () => {
  cy.get("label > .valid").click();
});

When("I click on Register", () => {
  cy.get(".w-100").click();
});

Then("I should see Register confirmation", () => {
  cy.get("h1").should("be.visible");
});
