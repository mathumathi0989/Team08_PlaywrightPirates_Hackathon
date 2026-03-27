@deletePatient
Feature: Delete patient

Rule: Delete pop up info validation

Background: 
Given Navigating to the My Patient page after logged in
When User clicks the Delete icon for a particular patient in the patient table


Scenario: Delete patient - alert title verification
Then Alert title should be "Confirm"

Scenario: Delete patient - alert text verification
Then Alert text should be "Are you sure to delete Patient Name?"

Scenario: Delete patient - Yes button verification
Then Alert should display a Yes button

Scenario: Delete patient - No button verification
Then Alert should display a No button

Rule: Delete pop up functional validation

Background:
Given Navigating to the My Patient page after logged in
And User clicks the Delete icon for a particular patient in the patient table


Scenario: Delete patient - confirm deletion- Navigation check
When User accepts the alert
Then User should be navigated back to main page

@smoke
Scenario: Delete patient after confirm deletion
When User accepts the alert
Then "Patient" should be removed from the table and a success message displayed

Scenario: Delete patient - cancel deletion Navigation check
When User dismiss the alert
Then User should be navigated back to main page

Scenario: Delete patient after cancel deletion
When User dismiss the alert
Then Alert should close and the "patient" should remain in the table

