import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the log-in page", () => {
  cy.visit("/Account/login");
});

Given("I see the input fields", () => {
  cy.get(":nth-child(5) > .form-control").should("be.visible");
  cy.get(":nth-child(6) > .form-control").should("be.visible");
});

When(
  "I input {string} in EmailInput and I input {string} in PasswordInput",
  (a, b) => {
    cy.get(":nth-child(5) > .form-control").type(a);
    cy.get(":nth-child(6) > .form-control").type(b);
  }
);

When("I click login", () => {
  cy.get(".w-100").click();
});

Then("I should be on the Home page", () => {
  cy.url().should("eq", "https://localhost:7000/Home");
});

Given("that I am logged in as admin", () => {
  cy.get(":nth-child(2) > .nav-link").should("be.visible");
});

Given("I see Admin dashboard button", () => {
  cy.get(":nth-child(2) > .nav-link").should("be.visible");
});

When("I click Admin Dasboard", () => {
  cy.get(":nth-child(2) > .nav-link").click();
});

Then("I should see Show segments", () => {
  cy.wait(500); //vänta tills allt har renderat
  cy.get(".content > :nth-child(7)").should("be.visible");
});

Given("that I am on the Admin dashboard", () => {
  // TODO: implement step
});

When("I click on Show segments", () => {
  cy.get(".content > :nth-child(7)")
    .contains("Show segments")
    .trigger("mouseover")
    .click(); //hittade från stackoverflow. Detta gör att knappen kunde tryckas.
});

When("I scroll down to the bottom of the page", () => {
  // TODO: implement step
});

Then("I should see Add Segment button", () => {
  cy.get(".Segments > :nth-child(3)").should("be.visible");
});

Given("that I see the Add Segment button", () => {
  // TODO: implement step
});

When("I click on the Add Segment button", () => {
  cy.get(".Segments > :nth-child(3)").click();
});

Then("I should see input fields", () => {
  cy.get("#SegmentName").should("be.visible");
});

Given("that I see the input fields", () => {
  // TODO: implement step
});

When("I type {string}", (a) => {
  cy.get("#SegmentName").click();
  cy.get("#SegmentName").type(a);
});

When("I click Add new segments", () => {
  cy.get(".btn").click();
});

Then("I should see Admin Dashboard", () => {
  cy.get("h3").should("contain", "Admin Dashboard");
});
