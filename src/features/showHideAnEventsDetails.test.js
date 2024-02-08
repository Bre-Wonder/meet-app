import { render, waitFor, within, fireEvent } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api";


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

  let AppComponent;
    given('there is an event with no details being shown to the user',  () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const details = AppDOM.querySelector('.detail-description');
      expect(details).not.toBeInTheDocument();   

    });

    let allEvents;
    let EventComponent;    
    when('the user clicks the show details button', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const showDetailsButton = EventComponent.getByText('Show Details');
      expect(showDetailsButton).toBeInTheDocument();
  
      await fireEvent.click(showDetailsButton);

    });

    then('the details of the event should be shown to user', () => {
      const hideDetailsButton = EventComponent.getByText('Hide Details');
      expect(hideDetailsButton).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {

    let allEvents;
    let EventComponent; 
    given('there is an event with details being shown to the user', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const showDetailsButton = EventComponent.getByText('Show Details');
      expect(showDetailsButton).toBeInTheDocument();
  
      await fireEvent.click(showDetailsButton);

      const hideDetailsButton = EventComponent.getByText('Hide Details');
      expect(hideDetailsButton).toBeInTheDocument();

    });

    when('the user clicks the hide details button', async () => {
      const hideDetailsButton = EventComponent.getByText('Hide Details');
      expect(hideDetailsButton).toBeInTheDocument();
      await fireEvent.click(hideDetailsButton);

    });

    then('the events details will no longer be shown to the user', () => {
      const showDetailsButtonAfterHide = EventComponent.getByText('Show Details');
      expect(showDetailsButtonAfterHide).toBeInTheDocument();

    });
  });


});