## 2
Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default
        Given the app is open
        When the app lists out events happening in different cities
        Then an events details should be hidden by default

    Scenario: User can expand an event to see details
        Given there is an event with no details being shown to the user
        When the user clicks the show details button
        Then the details of the event should be shown to user

    Scenario: User can collapse an event to hide details
        Given there is an event with details being shown to the user
        When the user clicks the hide details button
        Then the events details will no longer be shown to the user