Feature: Add Patient - Functional Tests

  Background:
    Given User is in Add Patient Details Dialog Box
#  ----DropDown Presence

  Scenario: Allergy dropdown contains all expected values
    When User clicks on Allergy dropdown
    Then Allergy dropdown should contain all expected values

  Scenario: Allergy dropdown contains 13 values
    When User clicks on Allergy dropdown
    Then Allergy dropdown should contain 13 values

  Scenario: Food Preference dropdown contains all expected values
    When User clicks on Food Preference dropdown
    Then Food Preference dropdown should contain all expected values

  Scenario: Food Preference dropdown contains 5 values
    When User clicks on Food Preference dropdown
    Then Food Preference dropdown should contain 5 values

  Scenario: Cuisine Category dropdown contains all expected values
    When User clicks on Cuisine Category dropdown
    Then Cuisine Category dropdown should contain all expected values

  Scenario: Cuisine Category dropdown contains 36 values
    When User clicks on Cuisine Category dropdown
    Then Cuisine Category dropdown should contain 36 values

  Scenario: Submit button is enabled after filling all mandatory fields
    When User fills all mandatory fields with valid data
    Then User should see Submit button in enabled state

  Scenario: Success message after valid submission
    When User fills all mandatory fields with valid data
    And User clicks Submit button
    Then User should see "Patient successfully created" toast message

  Scenario: Navigation to My Patient page after valid submission
    When User fills all mandatory fields with valid data
    And User clicks Submit button
    Then User should be directed to My Patient Page with New Patient Details created
    # ── Dropdown Selection ──────────────────────────────────

  Scenario Outline: Selecting a new value replaces the previous selection
    When the user selects "<first>" from the "<dropdown>" dropdown
    And the user selects "<second>" from the "<dropdown>" dropdown
    Then "<second>" should be selected in the "<dropdown>" field
    And "<first>" should not be selected in the "<dropdown>" field

    Examples:
      | dropdown         | first   | second   |
      | Allergy          | Peanut  | Milk     |
      | Food Preference  | Vegan   | Jain     |
      | Cuisine Category | Punjabi | Gujarati |
  # -----DOB Field --------------------

  Scenario: Calendar opens on clicking DOB field
    When User clicks on Date of Birth field
    Then User should see calendar date picker with Month Day Year

  Scenario: Valid date is displayed in MM/DD/YYYY format
    When User selects valid date "01/12/2000" in DOB field
    Then User should see selected date "01/12/2000" in MM/DD/YYYY format

  Scenario Outline: DOB field validation errors
    When User enters "<date>" in DOB field and tabs away
    Then User should see DOB error message "<errorMessage>"

    Examples:
      | date       | errorMessage                           |
      | 34/20/2022 | Invalid date ,Please select valid date |
      | ab/cd/efgh | Invalid date format                    |
      |      12/05 | Invalid date format                    |
      | 02/29/2023 | Please select valid date               |

  Scenario: Current date as DOB shows error
    When User selects current date as DOB
    Then User should see DOB error message "Invalid date ,Please select valid date"

      # ── First Name Validation ───────────────────────────────
  Scenario Outline: First name field validation
    When User enters "<input>" in First name field and tabs away
    Then User should see error message "<errorMessage>"
    Examples:
      | input | errorMessage                              |
      | 12345 | Patient first name accepts only alphabets |
      | @#$%  | Patient first name accepts only alphabets |
      |       | Firstname field is required               |
  # ── Last Name Validation ────────────────────────────────
  Scenario Outline: Last name field validation
    When User enters "<input>" in Last name field and tabs away
    Then User should see error message "<errorMessage>"
    Examples:
      | input | errorMessage                             |
      | 12345 | Patient last name accepts only alphabets |
      | @#$%  | Patient last name accepts only alphabets |
      |       | Lastname field is required               |
  # ── Email Validation ────────────────────────────────────
  Scenario Outline: Email field validation
    When User enters "<email>" in Email field and tabs away
    Then User should see error message "<errorMessage>"
    Examples:
      | email          | errorMessage                       |
      | 1test@test.com | Please enter a valid email address |
      | testtest.com   | Please enter a valid email address |
      | test@test      | Please enter a valid email address |
      | test#test.com  | Please enter a valid email address |
      | existing@email | Email id already exists            |
      |                | Email field is required            |
  # ── Contact Number Validation ───────────────────────────
  Scenario Outline: Contact number field validation
    When User enters "<contact>" in Contact Number field and tabs away
    Then User should see error message "<errorMessage>"
    Examples:
      | contact      | errorMessage                               |
      | abcdefghij   | Contact number accepts only numeric values |
      | @#$%^&*()    | Contact number accepts only numeric values |
      |        12345 | Please enter a valid contact number        |
      | 123456789012 | Please enter a valid contact number        |
      |   9876543210 | Contact number already exists              |
      |              | Contact Num is required                    |
  # ── Mandatory Dropdown Checks ───────────────────────────
  Scenario Outline: Mandatory dropdown field shows error when empty
    When User submits form without selecting "<dropdown>"
    Then User should see error message "<errorMessage>"
    Examples:
      | dropdown         | errorMessage                |
      | Allergies        | Allergies is required       |
      | Food Preference  | Food Preference is required |
      | Cuisine Category | Cusine Category is required |
      | DOB              | Date is required            |
  # ── Vitals Validation ───────────────────────────────────
  Scenario Outline: Vitals field validation
    When User enters "<input>" in "<field>" vitals field and tabs away
    Then User should see error message "<errorMessage>"
    Examples:
      | field       | input | errorMessage                     |
      | Weight      | @#$%  | Please enter a valid weight      |
      | Weight      | abc   | Please enter a valid weight      |
      | Height      | @#$%  | Please enter a valid height      |
      | Height      | abc   | Please enter a valid height      |
      | Temperature | @#$%  | Please enter a valid temperature |
      | Temperature | abc   | Please enter a valid temperature |
      | SP          | @#$%  | Please enter a valid SP value    |
      | SP          | abc   | Please enter a valid SP value    |
      | DP          | @#$%  | Please enter a valid SP value    |
      | DP          | abc   | Please enter a valid SP value    |
  # ── File Upload ─────────────────────────────────────────
  Scenario Outline: File upload validation
    When User uploads "<fileName>" file
    Then User should see "<outcome>"
    Examples:
      | fileName      | outcome                                       |
      | invalid.docx  | Invalid file type. Please upload a valid file |
      | largefile.pdf | File size exceeds the allowed limit           |
  Scenario: Upload valid PDF and verify file name shown
    When User uploads "valid.pdf" file
    Then User should see uploaded file name "valid.pdf" with extension
  Scenario: Submit without file upload succeeds
    When User fills all mandatory fields with valid data
    And User clicks Submit button without uploading a file
    Then User should be directed to My Patient Page
