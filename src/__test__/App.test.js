import { render, within } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';


// unit testing
describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })
  //test #1
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  // test #2 - CitySearch Test, when user begins to type in a city
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  // test #3
  test('NumberOfEvents component is rendered', () => {
    expect(AppDOM.querySelector('#event-Count-Input')).toBeInTheDocument();
  });

});

//integration testing
describe('<App/> integraption', () => {

  //test #4 
  test('renders a list of evetns matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem')
    
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
    
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain('Berlin, Germany');
    });
  });

});