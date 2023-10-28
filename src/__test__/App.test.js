import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  
  //test #1
  test('renders list of events', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

});