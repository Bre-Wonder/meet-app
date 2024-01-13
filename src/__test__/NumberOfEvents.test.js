import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {

  let eventCount

  beforeEach(() => {
    eventCount = render(<NumberOfEvents setCurrentNumber={() => {}}/>);
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