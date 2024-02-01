
## 1
Feature: Filter Events By City

  Scenario: When the user hasn't typed in a city name, all events for all city should be on home screen
    Given the user has not typed in a city name
    When the user opens the app
    Then there should be a list of all events to click on

  Scenario: When the user types in a city name, the user should be given a list of suggested cities
    Given the user has the app open
    When the user begins to type in the search box for cities
    Then there should be a list of city suggestions for user to select from

  Scenario: The user can select city name from the list of suggested cities
    Given The user is typing a city name into the city search box
    And the list of suggested cities renders
    When the user selects a name of a city
    Then the city will change to the selected city name
    And user will only see a list of events in that cityå

