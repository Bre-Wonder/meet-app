import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

// unit testing

describe('<NumberOfEvents /> component', () => {

  let eventCount;

  beforeEach(() => {
    eventCount = render(<NumberOfEvents setCurrentNOE={() => {}}/>);
  });

  //NumberOfEvents component contains role of textbox
  test('NumberOfEvents component contains role of textbox', () => {
    const textBoxElement = eventCount.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
  });

  //Default value of the input field is 32
  test('Default value of the input field is 33', () => {
    const textBoxElement = eventCount.getByRole('textbox');
    expect(textBoxElement).toHaveValue('33');

  });

  //Ensure that the value fo the NumberOfEvents component's textbox has a value that changes accordingly when a user types in it
  test('Textbox changes accordingly to what user types in it', async () => {
    const textBoxElement = eventCount.getByRole('textbox');
    const inputValue = '{backspace}{backspace}10';

    await userEvent.type(textBoxElement, inputValue);

    expect(textBoxElement).toBe(10);

  });

});

// integration testing

describe('<NumberOfEvents /> integration', () => {

  // test #5 testing that the user can change the number of events displayed

  test('update the number of events with what the user types a new number', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const noeDOM = AppDOM.querySelector('#event-Count-Input'); 
    const noeTextBox = within(noeDOM).queryByRole('textbox');
    // await user.click(noeTextBox); // not sure if I need this yet

    await user.type(noeTextBox, '{backspace}{backspace}10');

    // await waitFor(() => {
    //   const EventListDOM = AppDOM.querySelector('#event-list');
    //   const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
  
    //   expect(allRenderedEventItems.length).toBe(10);

    // });

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

    expect(allRenderedEventItems.length).toBe('10');

  });

});

//test from CitySearch test - to be deleted

// test('renders a list of evetns matching the city selected by the user', async () => {
//   const user = userEvent.setup();
//   const AppComponent = render(<App />);
//   const AppDOM = AppComponent.container.firstChild;

//   const CitySearchDOM = AppDOM.querySelector('#city-search');
//   const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

//   await user.type(CitySearchInput, "Berlin");
//   const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
//   await user.click(berlinSuggestionItem);

//   const EventListDOM = AppDOM.querySelector('#event-list');
//   const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem')
  
//   const allEvents = await getEvents();
//   const berlinEvents = allEvents.filter(
//     event => event.location === 'Berlin, Germany'
//   );
  
//   expect(allRenderedEventItems.length).toBe(berlinEvents.length);

//   allRenderedEventItems.forEach(event => {
//     expect(event.textContent).toContain('Berlin, Germany');
//   });
// });