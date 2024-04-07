import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the Login page', () => {
  cy.visit('/Account/Login?ReturnUrl=%2Fhome');
});

When('I type {string} in {string}', (a, b) => {
  cy.get(b).type(a);
});

/* No duplicate steps, this one already above
When('I type {string} in {string}', (a, b) => {});*/

Then('I click the Login button', () => {
  cy.get('button[type="submit"]').click();
});