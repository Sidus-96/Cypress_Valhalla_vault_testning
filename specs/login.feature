Feature: Logging in

Scenario: Time to log in
        Given that I am on the log in page
        And when i enter "User" and "Password1234!" into my input fields
        When when i click login
        Then I will enter the menu page