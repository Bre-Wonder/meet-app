import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn\'t specified a number, 33 events are shown by default.', ({ given, when, then }) => {

    	given('the user has not typed a value into the number of events input field;', () => {

    	});
    
     let AppComponent;

    	when('the user opens the app;', () => {
        AppComponent = render(<App />);

    	});

    	then('33 events will be displayed by default;', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
          const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
          expect(allRenderedEventItems.length).toBe(33);
        });
    	});
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {

    let AppComponent;

    	given('the user has just opened the app;', () => {
        AppComponent = render(<App />);

    	});

    	when('the user changes the value of the number of events input field;', async () => {
        let user = userEvent.setup();
        const AppDOM = AppComponent.container.firstChild;
        const noeDOM = AppDOM.querySelector('#event-Count-Input'); 
        const noeTextBox = within(noeDOM).queryByRole('textbox');
        await user.type(noeTextBox, '{backspace}{backspace}10');

    	});

    	then('the number of events in the list will change accordingly;', () => {  
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

        expect(allRenderedEventItems.length).toBe(10);
    	});
    });

});