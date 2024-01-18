import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { getCalendarEvents } from '../../auth-server/handler';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';


//unit testing

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch allLocations={[]}/>);
  });

  //test #1
  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
      expect(cityTextBox).toBeInTheDocument();
      expect(cityTextBox).toHaveClass('city');
  });

  //test #2
  test('suggestions list is hidden by default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  //test #3
  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.click(cityTextBox);

    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  //test #4
  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    // if user types 'Berlin' to find events there
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");

    const suggestions = allLocations? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }): [];

    const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
        expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });

  // test #5 user clicks on text box and suggested cities are rendered
  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch 
      allLocations={allLocations}
      setCurrentCity={() => {}}
      />);

    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");

    //test for the text content in the suggestion box looks like this: "Berlin, Germany"
    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem') [0];
    await user.click(BerlinGermanySuggestion);
    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});

//integration testing

describe('<CitySearch /> integration', () => {

// test #6 
test('renders suggestions list when the app is rendered', async () => {
  const user = userEvent.setup();
  const AppComponent = render(<App />);
  const AppDOM = AppComponent.container.firstChild;

  const CitySearchDOM = AppDOM.querySelector('#city-search');
  const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
  await user.click(cityTextBox);

  const allEvents = await getEvents();
  const allLocations = extractLocations(allEvents);

  await waitFor(() => {
    const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
   });

  // const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
  // expect(suggestionListItems.length).toBe(allLocations.length + 1);


  });

});