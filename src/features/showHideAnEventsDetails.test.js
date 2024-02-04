import { render, waitFor, within } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import Event from "../components/Event";


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {

   let AppComponent 
    given('the app is open', () => {
      AppComponent = render(<App />);

    });

    when('the app lists out events happening in different cities', async () => {
      const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
          const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
          expect(allRenderedEventItems.length).toBe(33);
        });

    });

    then('an events details should be hidden by default', () => {
      const AppDOM = AppComponent.container.firstChild;
      const details = AppDOM.querySelector('.detail-description');
      expect(details).not.toBeInTheDocument();


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