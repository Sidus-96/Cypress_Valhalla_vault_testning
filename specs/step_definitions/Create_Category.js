import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let categoryNameWithTime;
Given('that i log in as admin', () => {
  cy.visit("/Account/login");
});

Given('I type {string} in EmailInput and I type {string} in PasswordInput', (a, b) => {
  cy.get(":nth-child(5) > .form-control").type(a);
  cy.get(":nth-child(6) > .form-control").type(b);
  cy.get('.w-100').click();
});

Then('I can go to Admin dashboard', () => {
  cy.get(':nth-child(2) > .nav-link').click();
});

When('I click on Show categories and click on add category', () => {
  cy.wait(500); //vänta tills allt har renderat
 
  cy.get('.content > :nth-child(3)').contains('Show categories').trigger('mouseover').click(); //hittade från stackoverflow. Detta gör att knappen kunde tryckas. 
  cy.get('.Categories > :nth-child(3)').focus().click(); //Klickar på add category knappen

});

When('I write in {string} in category name input', (a) => {
  categoryNameWithTime=a+Date.now();
  //cy.get('#CategoryName').type(a);
  cy.wait(500);
  cy.get('#CategoryName').should('be.visible').type(categoryNameWithTime);
  //cy.get('.btn').click();

});

When('I click the submit button', () => {
  cy.get('.btn').focus().click();
});

Then('I click on show categories and see my added category', () => {
  cy.wait(500); //vänta tills allt har renderat
 
  cy.get('.content > :nth-child(3)').contains('Show categories').trigger('mouseover').click(); //hittade från stackoverflow. Detta gör att knappen kunde tryckas. 
  cy.get('tr').contains(categoryNameWithTime).should('exist'); //Kollar om kategorin är skapad
});