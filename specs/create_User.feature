Feature: Create_User

    Scenario: Create a user with valid credentials
        Given that I am on the Registration page
        When I type "Usertest" in Input.Email and "Password1234!" in passwordfiled and "Password1234!" in confirmPassword
        And I agree to the terms and conditions
        And I click the Register button
        Then I should see Register confirmation page
