Feature: Register user

Scenario: Register a user
Given that I am on the register page
And I see Create a new account on the page
When I enter "NewUser123" and "Password12345!" into my input fields
And I click on the checkbox 
And I click on Register
Then I should see Register confirmation
