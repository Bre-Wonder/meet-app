import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';


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