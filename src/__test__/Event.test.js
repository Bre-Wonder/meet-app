import { render, fireEvent } from "@testing-library/react"
import Event from "../components/Event";
import "../mock-data";
import { getEvents } from "../api";

let allEvents;

beforeAll(async () => {
  allEvents = await getEvents();
  //grab mock-data
});

describe('<Event /> component', () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  // Testing that each event has a title
  test('renders event title (event title)', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    // use summary key

  });

  // Testing that events contains a start time
  test('renders event start time ()', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();

    // use created key

  });

  // Testing that an event has a location
  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    // use location key

  });

  // Testing that an event by default the event details are hidden
  test('when opened, event details should be hidden by default', () => {
    expect(EventComponent.getByText('Show Details')).toBeInTheDocument();

    expect(EventComponent.getByText('Hide Details')).not.toBeInTheDocument();

  });

  test('Show Details button displays when details are hidden', async () => {
    const showDetailsButton = EventComponent.getByText('Show Details');
    expect(showDetailsButton).toBeInTheDocument();

    await fireEvent.click(showDetailsButton);

    const hideDetailsButton = EventComponent.getByText('Hide Details');
    expect(hideDetailsButton).toBeInTheDocument();

  });

  test('Hide Details button displays when detials are shown', async () => {

    const showDetailsButton = EventComponent.getByText('Show Details');

    await fireEvent.click(showDetailsButton);

    const hideDetailsButton = EventComponent.getByText('Hide Details');
    expect(hideDetailsButton).toBeInTheDocument();

    await fireEvent.click(hideDetailsButton);

    const showDetailsButtonAfterHide = EventComponent.getByText('Show Details');
    expect(showDetailsButtonAfterHide).toBeInTheDocument();

  });



});