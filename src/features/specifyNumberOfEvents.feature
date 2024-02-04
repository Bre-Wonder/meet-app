## 3
Feature: Specify Number of Events

    Scenario: When user hasn't specified a number, 33 events are shown by default.
        Given the user has not typed a value into the number of events input field;
        When the user opens the app;
        Then 33 events will be displayed by default;

    Scenario: User can change the number of events displayed.
        Given the user has just opened the app;
        When the user changes the value of the number of events input field;
        Then the number of events in the list will change accordingly;
