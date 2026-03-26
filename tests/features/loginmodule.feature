Feature: Login Page UI Verification, Functional Verification, and Dashboard Navigation

Rule: Login Page UI Verification
Background:
  Given User is on the browser
  When User enters app url

Scenario: Navigation bar text visibility
  Then User should see the text "Dietician Project" on left side of Navigation bar

Scenario: Navigation bar icon visibility
  Then User should see the home icon on left side of navigation bar

Scenario: Navigation bar background colour
  Then Navigation bar background should have a blue-purple color

Scenario: Page title visibility
  Then Heading "Dietician Application" should be visible inside the login card
  
  Scenario: Label visibility for username field
  Then User should see the label text "username"

Scenario: Label visibility for password field
  Then User should see the label text "password"

Scenario: Username input field presence
  Then Username input field should be visible

Scenario: Password input field presence
  Then Password input field should be visible

  Scenario: Login button verification
  Then Login button should be visible
  
Scenario: Input field label alignment
  Then Username and Password labels should be left-aligned above their respective input fields

Scenario: Total number of input fields
  Then User should see exactly two input fields

  Rule: Login Page Functional Verification
Background:
  Given User is on the login page

Scenario: Login with valid credentials
  When User clicks login button after entering valid credentials
  Then User should be redirected to dashboard page

Scenario: Login with empty username field
  When User clicks login button after entering only password
  Then An error message "Username is Required" should be displayed

Scenario: Login with empty password field
  When User clicks login button after entering only username
  Then An error message "Password is Required" should be displayed

Rule: Dashboard Page - Navigation Bar Verification
Background:
  Given User is on the login page
  When User clicks login button after entering valid credentials

Scenario: Navigation bar links presence
  Then Navigation bar should display exactly four links "My Patients", "New Patient", "Login", and "Logout"

Rule: Dashboard Page - Navigation Links Functionality
Background:
  Given User logged into the app
  And User is on the Dashboard page

Scenario: "My Patients" navigation link is clickable
  When User clicks the "My Patients" link in the navigation bar
  Then User should be redirected to the "My Patients" page

Scenario: "New Patient" navigation link is clickable
  When User clicks the "New Patient" link in the navigation bar
  Then User should be redirected to the "New Patient" page

Scenario: "Logout" navigation link is clickable
  When User clicks the "Logout" link in the navigation bar
  Then User should be logged out of the application

Scenario: Home icon is clickable
  When User clicks the home icon on the navigation bar
  Then User should be navigated to the dashboard page

