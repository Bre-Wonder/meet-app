import { render, waitFor, within } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from '../App';


//unit testing

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })

  // test #2 - checks EventList to make sure it contains an element that has a role of "list"
  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  // test #3 - make sure that there are 4 list items rendered
  test('renders correct number of events', async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents}/>);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});

//start of integration testing

describe('<EventList /> integration', () => {

  //test #4
  test('renders a list of 32 evetns when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />); 
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBeGreaterThan(0);
    });
  });

});