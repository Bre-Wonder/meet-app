import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the app is open', () => {

    });

    when('the app lists out events happening in different cities', () => {

    });

    then('an events details should be hidden by default', () => {

    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
    given('there is an event with no details being shown to the user', () => {

    });

    when('the user clicks the show details button', () => {

    });

    then('the details of the event should be shown to user', () => {

    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('there is an event with details being shown to the user', () => {

    });

    when('the user clicks the hide details button', () => {

    });

    then('the events details will no longer be shown to the user', () => {

    });
  });


});