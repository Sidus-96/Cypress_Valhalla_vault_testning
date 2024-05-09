Feature: Create_Segment

# Kör med bara ett scenario 
# eftersom det buggade med flera !!

Scenario:Login as Admin
Given that I am on the log-in page
And I see the input fields
When I input "admin" in EmailInput and I input "Password1234!" in PasswordInput
And I click login
Then I should be on the Home page


Given that I am logged in as admin
And I see Admin dashboard button
When I click Admin Dasboard
Then I should see Show segments


Given that I am on the Admin dashboard
When I click on Show segments
And I scroll down to the bottom of the page
Then I should see Add Segment button


Given that I see the Add Segment button
When I click on the Add Segment button
Then I should see input fields

Given that I see the input fields
When I type "Hur man skriver bra Gherkin"
And I click Add new segments
Then I should see Admin Dashboard