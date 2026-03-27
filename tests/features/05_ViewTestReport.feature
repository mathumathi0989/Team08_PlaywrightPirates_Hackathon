Feature: Patient information section

  Background:
    Given User logged into the app and patients already exists
    When User clicks View Previous Test Reports button for a specific record

  Scenario: Correct report opens for selected record
    Then Corresponding report for that record should be opened

  Scenario: Patient information header validation
    Then Title "View Patient Test Reports" should be displayed
    And Patient id corresponding to the record selected in My Patients page should be displayed
    And Patient name corresponding to the record selected in My Patients page should be displayed
    And Patient email corresponding to the record selected in My Patients page should be displayed
    And Patient contact number corresponding to the record selected in My Patients page should be displayed
    And Close icon "x" should be displayed
    And Reports table should be displayed

  Scenario: Table information UI validation
    Then Table headers should have "Record Number", "File", "Uploaded Time", "File/Report Name","Vitals","Identified Health Conditions"

  Scenario: Table headers column order
    Then Record header should be in the exact order Record Number → File → Uploaded Time → File/Report Name → Vitals → Identified Health Conditions should be displayed

  Scenario: Record display
    Then Each report should display a record number
    And Each report should display View PDF button
    And Each report should display uploaded time
    And Each report should display file/report name
    And Each report should display vitals information
    And Corresponding report for that record should be opened

  Scenario: Pagination controls are displayed
    When User clicks View Previous Test Reports button for a specific record
    Then Pagination controls First, previous, next, last arrows should be displayed

  Scenario: Navigate to first page pagination
    When User navigates to the first page of patient record
    Then Previous arrow (<) should be disabled
    And First page arrow (<<) should be disabled
    And Next arrow (>) should be enabled
    And Last page arrow (>>) should be enabled

  Scenario: Navigate to last page pagination
    When User navigates to the last page of patient record
    Then Previous arrow (>) should be disabled
    And First page arrow (>>) should be disabled
    And Next arrow (<) should be enabled
    And Last page arrow (<<) should be enabled

  Scenario: All pagination arrows disabled when only one page exists
    Given User is in dietician application dashboard page
    When User clicks on My Patients button
    Then First, previous, next, last arrows should be disabled

  Scenario: Pagination count is updated correctly
    Then Pagination text should display the correct range and total number of patients

  Scenario: All pagination arrows disabled in report table
    Then First, previous, next, last arrows should be disabled
   # Following sceanrios are combined in the above code.
  # Scenario: Navigate to the next page using pagination
  #   Given User is in View Patient Test Reports page with multiple record for the patient
  #   When User clicks the next page arrow (>)
  #   Then Next set of patient records should be displayed
  # Scenario: Navigate to the previous page using pagination
  #   Given User is in Report table of View Patient Test Reports page
  #   When User clicks the previous page arrow (<)
  #   Then Previous set of patient records should be displayed
  # Scenario: Navigate to the first page using pagination
  #   Given User is in any page except first page of Report table
  #   When User clicks the first page arrow (>>)
  #   Then First page of patient records should be displayed
  # Scenario: Navigate to the last page using pagination
  #   Given User is in any page except last page of Report table
  #   When User clicks the last page arrow (<<)
  #   Then Last page of patient records should be displayed
