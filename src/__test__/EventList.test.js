import { render } from '@testing-library/react';
import EventList from '../components/EventList';

// test #2 - checks EventList to make sure it contains an element that has a role of "list"
describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });
});