# Feature: Patient information section
#   Background:
#     Given User logged into the app and patients already exists
#   Scenario: Correct report opens for selected record
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Corresponding report for that record should be opened
#   Scenario: Title is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Title "View Patient Test Reports" should be displayed
#   Scenario: Patient Id is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Patient id corresponding to the record selected in My Patients page should be displayed
#   Scenario: Name is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Patient name corresponding to the record selected in My Patients page should be displayed
#   Scenario: Email is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Patient email corresponding to the record selected in My Patients page should be displayed
#   Scenario: Contact number is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Patient contact number corresponding to the record selected in My Patients page should be displayed
#   Scenario: Close icon is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a particular record
#     Then Close icon "x" should be displayed
# Feature: View patient test reports - table
#   Background:
#     Given User logged into the app and patients already exists
#   Scenario: Report table is displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Reports table should be displayed
#   Scenario: Table headers column are displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Table headers should have Record Number, File, Uploaded Time, File/Report Name, Vitals, Identified Health Conditions
#   Scenario: Table headers column order
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Record header should be in the exact order Record Number → File → Uploaded Time → File/Report Name → Vitals → Identified Health Conditions should be displayed
#   Scenario: Pagination controls are displayed
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Pagination controls First, previous, next, last arrows should be displayed
# Feature: Reports table data scenarios
#   Background:
#     Given User logged into the app and patients already exists
#   Scenario: Record number display
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Each report should display a record number
#   Scenario: View PDF button display
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Each report should display View PDF button
#   Scenario: Uploaded time display
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Each report should display uploaded time
#   Scenario: File name display
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Each report should display file/report name
#   Scenario: Vitals information display
#     Given User is in My Patients page
#     When User clicks View Previous Test Reports button for a specific record
#     Then Each report should display vitals information
# Feature: View PDF
#   Background:
#     Given User is in My Patients page after logged into the app and patients already exists
#   Scenario: Corresponding PDF report opens for a record
#     Given User is in View Plan Test Reports page
#     When User clicks View PDF button for a particular record
#     Then Corresponding report for that record should be opened
#     Feature: Pagination management with multiple records
#   Background:
#     Given User is in view patient test report page with multiple records already exist in the system for that user
#   Scenario: Navigate to the next page using pagination
#     Given User is in View Patient Test Reports page with multiple record for the patient
#     When User clicks the next page arrow (>)
#     Then Next set of patient records should be displayed
#   Scenario: Navigate to the previous page using pagination
#     Given User is in Report table of View Patient Test Reports page
#     When User clicks the previous page arrow (<)
#     Then Previous set of patient records should be displayed
#   Scenario: Navigate to the first page using pagination
#     Given User is in any page except first page of Report table
#     When User clicks the first page arrow (>>)
#     Then First page of patient records should be displayed
#   Scenario: Navigate to the last page using pagination
#     Given User is in any page except last page of Report table
#     When User clicks the last page arrow (<<)
#     Then Last page of patient records should be displayed
#   Scenario: Pagination count is updated correctly
#     Given User is in any page of Report table
#     When User clicks any page navigation arrow
#     Then Pagination text should display the correct range and total number of patients
# Feature: Pagination management with only one record
#   Background:
#     Given User is logged into the application and only one patient record already exist in the system for that user
#   Scenario: All pagination arrows disabled when only one page exists
#     Given User is in My Patient page
#     When User clicks on View Patient Test Reports button
#     Then First, previous, next, last arrows should be disabled
