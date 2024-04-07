Feature: Create_Category

    Scenario: Create a category
        Given that i log in as admin
        And I type "admin" in EmailInput and I type "Password1234!" in PasswordInput
        Then I can go to Admin dashboard
        When I click on Show categories and click on add category
        And I write in "CategoryTest" in category name input
        And I click the submit button
        Then I click on show categories and see my added category
