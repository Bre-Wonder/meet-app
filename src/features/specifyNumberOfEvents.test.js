import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn\'t specified a number, 33 events are shown by default.', ({ given, when, then }) => {
        
    	given('the user has not typed a value into the number of events input field;', () => {

    	});

    	when('the user opens the app;', () => {

    	});

    	then('33 events will be displayed by default;', () => {

    	});
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
    	given('the user has just opened the app;', () => {

    	});

    	when('the user changes the value of the number of events input field;', (arg0) => {

    	});

    	then('the number of events in the list will change accordingly;', () => {

    	});
    });

});