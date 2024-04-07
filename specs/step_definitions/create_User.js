import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the Registration page', () => {
  cy.visit("/account/register")
});

When('I type {string} in Input.Email and {string} in passwordfiled and {string} in confirmPassword', (a, b, c) => {
  if(a="usertest")
  {
    a=a+Date.now();
  }
  cy.get(":nth-child(5) > .form-control").type(a);
  cy.get(":nth-child(6) > .form-control").type(b);
cy.get(":nth-child(7) > .form-control").type(c);

});

When('I agree to the terms and conditions', () => {
  cy.get('label > .valid').click();
});

When('I click the Register button', () => {
  cy.get('.w-100').click();
});

Then('I should see Register confirmation page', () => {
 cy.get('h1').contains("Register confirmation")

});