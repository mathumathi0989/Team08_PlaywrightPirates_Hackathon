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

  Scenario: Validate invalid inputs on tab away
    When the user enters invalid data for "InValidInput" from "AddPatientInvalid" and tabs away
    Then the system should display the respective error message for each invalid input
