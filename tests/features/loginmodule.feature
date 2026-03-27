Feature: Login page UI verification, functional verification, and dashboard navigation

  Rule: Login page UI verification
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

    Scenario: label for first field
      Then User should see the label text "username"

    Scenario: label for second field
      Then User should see the label text "password"

    Scenario: Username input field presence
      Then Username input field should be visible

    Scenario: Password input field presence
      Then Password input field should be visible

    Scenario: Login button presence
      Then Login button should be visible

    Scenario: Login button color and styling
      Then Login button should be displayed with a blue-purple background and white text

    Scenario: Input field label alignment
      Then Username and Password labels should be left-aligned above their respective input fields

    Scenario: Total number of input fields
      Then User should see exactly two input fields

    Scenario: Login button enabled state
      Then User should see login button enabled

  Rule: Login page functional verification
    Background:
      Given User is on the login page

    Scenario: Login with valid credential
      When User clicks login button after entering valid credentials
      Then User should be redirected to dashboard page

    Scenario: Login with non-existing user
      When User clicks login button after entering non existing user
      Then An error message "Invalid username or password" should be displayed

    Scenario: Login with spl charac in user name
      When User clicks login button after entering spl charac in username
      Then An error message "Invalid username or password" should be displayed

    Scenario: Login with only few charac of username
      When User clicks login button after entering only few charac of username
      Then An error message "Invalid username or password" should be displayed

    Scenario: Login with wrong password
      When User clicks login button after entering wrong password
      Then An error message "Invalid username or password" should be displayed

    Scenario: Login with spl charac in password
      When User clicks login button after entering spl charach in password
      Then An error message "Invalid username or password" should be displayed

    Scenario: Login with empty username field
      When User clicks login button after entering only password
      Then An error message "Username is Required" should be displayed

    Scenario: Login with empty password field
      When User clicks login button after entering only username
      Then An error message "Password is Required" should be displayed

  Rule: Dashboard page
    Scenario: Navigation bar links presence
      Given User is on the login page
      When User clicks login button after entering valid credentials
      Then Navigation bar should display exactly four links "My Patients", "New Patient", "Login", and "Logout"

    Scenario: "My Patients" navigation link is clickable
      Given User logged into the app
      And User is on the Dashboard page
      When User clicks the "My Patients" link in the navigation bar
      Then User should be redirected to the "My Patients" page

    Scenario: "New Patient" navigation link is clickable
      Given User logged into the app
      And User is on the Dashboard page
      When User clicks the "New Patient" link in the navigation bar
      Then User should be redirected to the "New Patient" page

    Scenario: "Logout" navigation link is clickable
      Given User logged into the app
      And User is on the Dashboard page
      When User clicks the "Logout" link in the navigation bar
      Then User should be logged out of the application

    Scenario: Home icon is clickable
      Given User logged into the app
      And User is on the Dashboard page
      When User clicks the home icon on the navigation bar
      Then User should be navigated to the dashboard page
