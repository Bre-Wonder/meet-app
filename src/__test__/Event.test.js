import { render } from "@testing-library/react"
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

  // Testing that an event contains a "show details" button
  test('when opened, event details should be hidden', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    //rewrite this test

  });

  test('details are shown about event when show details button is clicked', async () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    //rewrite this test

  });

  test('details are hiddent when hide details button is clicked', async () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    //rewrite this test

  });



})