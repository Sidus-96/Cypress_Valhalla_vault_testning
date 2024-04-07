Feature: Start quiz

Scenario: Logged in and time to start quiz
        Given that I am on the log in page
        And when i enter "User" and "Password1234!" into my input fields
        And when i click login
        And I will enter the menu page
        When I click on "Kategorier" then I will enter another page
        And When I am in category page, then I will start the first catergory
        And When i am in the segment page, then i will start the first part
        And When the first part is chosen, then we can start the quiz by looking for "Testa frågorna för del 1"
        Then the quiz has started. Time to choose answers