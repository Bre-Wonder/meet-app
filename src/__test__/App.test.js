import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })
  //test #1
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  // test #4 - CitySearch Test, when user begins to type in a city
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('NumberOfEvents component is rendered', () => {
    const numberOfEventsComponent = AppDOM.querySelector('#numberOfEvents')
    expect(numberOfEventsComponent).toBeInTheDocument();
  });

});