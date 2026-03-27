@editPatient
Feature: Edit Patient  - Dialog Box vaildation

Rule: Edit Patient  - Dialog Box vaildation
Background: 
Given User logged in and patients already exists
And User is in my patient page
When User clicks edit icon for the particular patient 

Scenario: Title of the dialoge box
Then User should see  Edit Patient page on the dialog box

Scenario Outline: Validate the Presence of buttons
Then User should see "<buttonName>" and enabled
Examples:
| buttonName |
| submit |
| close |

Scenario: Presence of 9 Input field
Then User should see 9 input field

Scenario: Presence of 3 drop down
Then User should see 3 drop down

Scenario: Presence of file upload option
Then User should see exactly 1 file upload option

Scenario Outline: Validate the Presence of fields in the edit patient
Then User should see the "<field>" populated with the value entered during patient
Examples:
|field|
| First Name |
| Last Name  |
| Email    |
| Contact Number |
| Allergy |
| Food Preference |
| Cuisine Category |
| Date of Birth    |

Scenario: Presence of sub titleVitals 
Then User should see vitals title after DOB field

Scenario: Presence of Label Upload health report 
Then User should see Upload health report : text for Upload button

Scenario: Presence of  No File Choosen text when no files uploaded
Then User should see "No File Choosen" text 


Rule: Edit Patient  - Function test case
Background: 
Given After navigating to the My Patient page, the logged-in user clicks the edit icon
And User is edit dialog box


# Scenario: Edit first name with valid data
# When User clicks submit after editing first name with valid data
# Then User should redirected to my patient with edited value in first name

# Scenario: Edit first name with numeric data
# When User clicks submit after editing first name with numeric data
# Then User should  see error message in Patient name accepts only alphabets







