Feature: Edit question 

    Scenario: Time to log in 
      Given on the log in page 
      And when admin enter "Admin" and "Password1234!" into my input       
      When i press login 
      Then i will enter the home menu page 

    Scenario: Enter the admin dashboard
      Given im logged in
      And enter the admin dashboard page  
      And click on Show question
      And Show all questions 
      And Click on edit 
      And Change the question
      Then Submit 




   