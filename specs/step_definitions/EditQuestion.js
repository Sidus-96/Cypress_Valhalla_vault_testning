import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("on the log in page", () => {
  cy.visit("/Account/login");
  // TODO: implement step
});

Given("when admin enter {string} and {string} into my input", (a, b) => {
  // TODO: implement step
  // cy.origin(Cypress.env("auth0_domain"), { args: { a, b } }, ({ a, b }) => {
  cy.get(":nth-child(5) > .form-control").type(a);
  cy.get(":nth-child(6) > .form-control").type(b);
  // });
});

When("i press login", () => {
  cy.get(".w-100").click();
  // TODO: implement step
});

Then("i will enter the home menu page", () => {
  cy.get('.mt-5').should('contain', 'Ta steget in i Cyber Sentinel Training Hub på Valhalla Vault och påbörja din resa genom cybersäkerhetsutbildningen')
});

Given("im logged in", () => {
  cy.login("Admin", "Password1234!")
});

When('enter the admin dashboard page', () => {
  cy.visit('/Admin')
}); 

When("click on Show question", () => {
  cy.wait(2000)
  cy.get(':nth-child(11)').click();
});

When("Show all questions", () => {
  cy.get(':nth-child(1) > .fw-bold').should("contain", "Kreditkortsbedrägeri")
});

When('Click on edit', () => {
  cy.get(':nth-child(1) > :nth-child(5) > .btn').click();
});

When('Change the question', () => {
  cy.get('#Question').type("I have changed the question");
});

Then('Submit', () => {
  cy.get('.row > form > [type="submit"]').click();
});
