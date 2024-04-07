Feature: LoginPage

    Scenario: Login with valid credentials
        Given that I am on the Login page
        When I type "user" in "input[name='Input.Email']"
        And I type "Password1234!" in "input[name='Input.Password']"
        Then I click the Login button
