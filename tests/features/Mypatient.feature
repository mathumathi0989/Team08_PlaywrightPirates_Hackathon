# Feature: My Patient

#   Background:
#     Given User is in dietician application dashboard page
#     When User clicks on My Patients button

#   Scenario: Title is displayed
#     Then Page header "My Patients" should be displayed

#   Scenario: Search bar display
#     Then Search bar should be displayed

#   Scenario: Search icon
#     Then Search icon should be displayed inside the search bar

#   Scenario: Search placeholder text
#     Then Placeholder text "Search..." should be displayed

#   Scenario: Table column header
#     Then "Patient Id", "Name", "Details" , "Last Visit Date", "Actions" , " Edit/Delete" should be displayed

#   Scenario: Patient Id column sorting icon
#     Then Up and down arrow icons should be displayed in the Patient Id column header

#   Scenario: Name column sorting icon
#     Then Up and down arrow icons should be displayed in the Name column header

#   Scenario: Patient Id displayed for each row
#     Then Patient Id should be displayed for each patient record

#   Scenario: Patient name displayed for each row
#     Then Patient name should be displayed for each patient record

#   Scenario: Details column displays patient information
#     Then Details column should display "phone number","email","date of birth" for each patient record

#   Scenario: Details are displayed in multiline format
#     Then Phone number, email , date of birth should be displayed on separate lines for each patient record

#   Scenario: Email format in details column
#     Then Email should be displayed in valid email format for each patient record

#   Scenario: Phone number format in details column
#     Then Phone number displayed in details column should contain valid digits for each patient record

#   Scenario: DOB format in details column
#     Then Date of birth should be displayed in "dd-mm-yyyy" format for each patient record

#   Scenario: Last visit date displayed for each row
#     Then Last visit date should be displayed for each patient record

#   Scenario: Last visit date format
#     Then Last visit date should be displayed in "dd-mm-yyyy" format for each patient record

#   Scenario: 3 button under Actions column for each row
#     Then "View Previous Test Reports", "View Previous Diet Plans", "Create New Report/plan" should be displayed for each patient record

#   Scenario: Edit icon displayed for each row
#     Then Edit icon should be displayed for each patient record-

#   Scenario: Delete icon displayed for each row
#     Then Delete icon should be displayed for each patient record

#   Scenario: My Patient page loads with empty table
#     Then My Patients page should display with empty table

#   Scenario: Patient Id sorting
#     When User clicks an sorting arrow in Patient Id column
#     Then Patient records should be sorted in ascending or descending order by patient id

#   Scenario: Name column sorting
#     When User clicks an arrow in Name column
#     Then Patient records should be sorted in ascending or descending order by name

#   Scenario: Search functionality using patient name
#     When User searches using patient name
#     Then Matching patient details should be displayed

#   Scenario: Search funcionality using patient id
#     When User searched using patient id
#     Then Matching patient details should be displayed

#   Scenario: Search is cleared
#     Given User entered the text in search box in My Patients page
#     When User clears the search text
#     Then All the existed patient records should be displayed

#   Scenario: Navigate to the next page using pagination
#     Given User is in My Patients page with multiple pages of a patient record
#     When User clicks the next page arrow (>)
#     Then Next set of  patient records should be displayed

#   Scenario: Navigate to the previous page using pagination
#     Given User is in later page of My Patients page
#     When User clicks the previous page arrow (<)
#     Then Previous set of patient records should be displayed

#   Scenario: Navigate to the first page using pagination
#     Given User is in any page except first page of My Patients page
#     When User clicks the first page arrow (>>)
#     Then First page of patient records should be displayed

#   Scenario: Navigate to the last page using pagination
#     Given User is in any page except last page of My Patients page
#     When User clicks the last page arrow (<<)
#     Then Last page of patient records should be displayed

#   Scenario: Pagination count is updated correctly
#     Given User is in any page of My Patients page
#     When User clicks any page navigation arrow
#     Then Pagination text should display the correct range and total number of patients

#   Scenario: Pagination controls when patient records exceed one page
#     Given User is in My Patients page with multiple pages of patient record
#     When User navigates to any page
#     Then Pagination controls should be displayed

#   Scenario: Navigate to first page pagination
#     When User navigates to the first page of patient record
#     Then Previous arrow (<) should be disabled
#     And First page arrow (<<) should be disabled
#     And Next arrow (>) should be enabled
#     And Last page arrow (>>) should be enabled

#   Scenario: Navigate to last page pagination
#     When User navigates to the last page of patient record
#     Then Previous arrow (>) should be disabled
#     And First page arrow (>>) should be disabled
#     And Next arrow (<) should be enabled
#     And Last page arrow (<<) should be enabled

#   Scenario: All pagination arrows disabled when only one page exists
#     Given User is in dietician application dashboard page
#     When User clicks on My Patients button
#     Then First, previous, next, last arrows should be disabled

#   Scenario: Pagination when no patient data exists
#     Then "Showing 0 to 0 of 0 patients" should be displayed

#   Scenario: All pagination arrows disabled when no data exists
#     Then First, previous, next, last arrows should be disabled

#   Scenario: Pagination behavior with limited or no data
#     Then All pagination arrows (First, Previous, Next, Last) should be disabled
#     And If no patient data exists, the text "Showing 0 to 0 of 0 patients" should be displayed
