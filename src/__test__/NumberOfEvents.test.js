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

    expect(textBoxElement).toHaveValue('10');

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

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

    expect(allRenderedEventItems.length).toBe(10);

  });

});