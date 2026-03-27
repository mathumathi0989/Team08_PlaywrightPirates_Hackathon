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

@smoke
Scenario Outline: Edit name field with valid data
When User clicks submit after editing "<field>" with valid data
Then User should redirected to my patient with edited value in "<field>"
Examples:
|field|
|First Name|
|Last Name |

Scenario Outline: Edit name field with invalid data
When User clicks submit after editing field with "<testcase>" data
Then User should see error message "Patient name accepst only alphabets"
|testcase|
|invalid_FirstName_Numeric|
|invalid_FirstName_SpecialChar |
|invalid_LastName_Numeric|
|invalid_LastName_SpecialChar |

Scenario: Edit email with valid data
When User clicks submit after editing the email with valid data
Then User should see the updated email value in My patient page

Scenario Outline: Edit email with invalid data
When User clicks submit after editing the email with invalid "<testcase>"
Then User should see "<error_message>"
| testcase | error_message |
|invalidEmail_invalidFormat | Please enter a valid email address | 
|invalidEmail_missing@Symbol | Please enter a valid email address |


Scenario Outline: Verify edit vitals field with valid value
When user clicks submit after entering a valid value in the "<vital>" field
Then user should see the updated "<vital>" value in the My patient page
Examples:
|vital|
|Weight|
|Height|
|Temperature|


Scenario Outline: Edit vitals field with invalid data
When user clicks submit after entering "<testcase>" in the vital field
Then user should see the "<error_message>"
Examples:
|testcase|error_message|
|invalidVitals_WeightAlpha|Please enter a valid weight|
|invalidVitals_WeightSpecialChar| Please enter a valid weight|
|invalidVitals_HeightAlpha| Please enter a valid height |
|invalidVitals_HeightSpecialChar| Please enter a valid height |
|invalidVitals_TempAlpha|Please enter a valid temperature|
|invalidVitals_TempSpecialChar| Please enter a valid temperature|


Scenario: Edit only SP with valid value
When user clicks submit after eidting the valid value in SP field only
Then user should receive an error message in DP field

Scenario: Edit only DP with valid value
When user clicks submit after eidting the valid value in DP field only
Then user should receive an error message in SP field

Scenario: Edit both SP and DP with valid values
When user clicks submit after entering valid values in both SP and DP fields
Then user should be redirected to My patient page


Scenario Outline: Edit blood pressure fields with invalid data
When user clicks submit after entering invalid "<testcase>" in the SP and DP fields
Then user should see the "<error_message>"
Examples:
|testcase|error_message|
|invalidSP_Alpha| Please enter a valid SP value |
|invalidSP_SpecialChar | Please enter a valid SP value |
| invalidDP_Alpha | Please enter a valid DP value |
| invalidDP_SpecialChar | Please enter a valid DP value |


Scenario: Calendar date picker is displayed for DOB field
When user clicks the Date of Birth field
Then user should see a calendar date picker with month day and year

Scenario Outline: Invalid date input in DOB field
When user click submit after entering invalid "<testcase>" in the DOB field
Then user should see the "<error_message"
Examples:
|testcase| error_message |
| cinvalidDOB_CurrentDate | Invalid date, Please select valid date |
| invalidDOB_Alpha | Invalid date format |
| invalidDOB_Incomplete | Invalid date format |

Scenario: verify upload functionality
When user clicks submit after user upload a valid file
Then Uploaded file should be saved successfully

Scenario Outline: Close the edit dialog
Given user is in the edit dialog box "<state>"
When user clicks the close button
Then edit dialog should close 
Examples:
|state |
| without unsaved changes |
| with unsaved changes |










