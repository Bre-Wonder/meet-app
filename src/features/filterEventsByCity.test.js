import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent, { UserEvent } from '@testing-library/user-event';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

  test('When the user hasn\'t typed in a city name, all events for all city should be on home screen', ({ given, when, then }) => {
    given('the user has not typed in a city name', () => {

    });
   let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('there should be a list of all events to click on', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(33);
      })

    });
  });

  test('When the user types in a city name, the user should be given a list of suggested cities', ({ given, when, then }) => {
    
   let AppComponent;
    given('the user has the app open', () => {
      AppComponent = render(<App />);

    });

   let CitySearchDOM;
    when('the user begins to type in the search box for cities', async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector('#city-search');
      const citySearchInput = within(CitySearchDOM).queryByRole('textbox');
      await user.type(citySearchInput, 'Berlin');

    });

    then('there should be a list of city suggestions for user to select from', async () => {
      const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems).toHaveLength(2);

    });
  });

  test('The user can select city name from the list of suggested cities', ({ given, and, when, then }) => {
   
    let AppComponent;
    let AppDOM;
    let CitySearchDOM;
    let citySearchInput;
    
    given('The user is typing a city name into the city search box', async () => {
      AppComponent = render(<App />);
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector('#city-search');
      citySearchInput = within(CitySearchDOM).queryByRole('textbox');
      await user.type(citySearchInput, 'Berlin');

    });

    and('the list of suggested cities renders', () => {

    });

    when('the user selects a name of a city', () => {

    });

    then('the city will change to the selected city name', () => {

    });

    and('user will only see a list of events in that cityå', () => {

    });
  });

});