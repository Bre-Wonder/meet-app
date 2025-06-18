# Meet-App

### Project Description

  The Meet App is a serverless, progressive web application built in React using test-driven development. The user should be able to open the application whether online or offline to select a city to see a list of events for that location. Each city should allow the user to select event details, filter the number of events they want to view, and see a vizualization of the details of all the events going on in that city. 

### Technologies Used: 
React 18.2.0  | D3 | AWS Lambda | gh-pages 6.0.0


### How to start up this project:

  Using Serverless Functions with Meet App:
  This Meet App uses AWS Lambda cloud services to run its serverless function. The serverless function allows the application to scale up or down depending on the traffic. The server only responds when an event is triggered by the user, in this case when a user selects a city or wants to see details or lists of events. AWS Lambda handles the allocation of resources such as compute and memory as its excuting the serverless function in response to its needs.

  The app was built with `create-react-app` in React in the CLI. 
  
  The app is hosted through "gh-pages" in GitHub. 


### API Used:
Google Calendar API


### Learning Moments: 


### What would I do differently? 


### What was the biggest learning take aways? 


GitHub Repository site: https://github.com/Bre-Wonder/meet-app

Live Site: 





#### How to get the project started

  The app was built through the "create-react-app" in React in the CLI. The app is hosted through "gh-pages" in GitHub. 


### User Stories

  Format for User Stories:
  As a [role],
  I should be able to [action],
  So that [benefit]

  Given: ***
  When: ***
  Then: ***

Feature 1 - Filter Events By City:
  As a user,
  I should be able to filter events by city
  So that I can see a list of events taking place in that city

  Given: the user has app open
  When: the user selects a city
  Then: a list of events in that city will be loaded

## Feature 2: Show/Hide Event Details
  As a user,
  I should be able to click an event to find out details about it, then hide those details,
  So that I can see more details about an event I am interested in and then go back to a list of events in that city.

  Given: a list of events for that city have been loaded
  When: the user clicks on a details button for a specific event
  Then: the event will expand to show the user details about the event

## Feature 3: Specify Number of Events
  As a user,
  I should be able to filter the number of events I can see in each city,
  So that I can control how many events I can see in a city at once.

  Given: user has selected a city to see a list of events
  When: the user uses a filter button the select a number of how many events they want to see in that city
  Then: the list of events for that city will show the selected amount events the user decided upon

## Feature 4: Use the App When Offline
  As a user,
  I should be able to access list of events and event details while offline,
  So that I can access a list of events in a city when not connected to the internet.

  Given: The meet-app is open
  When: the user is offline they may select a city, see a list of events in that city, and see details of those events
  Then: The user will navigate to an event they are interested in offline

## Feature 5: Add an App Shortcut to the Home Screen
  As a user,
  I should be able to navigate back to the home screen with a shortcut,
  So that I am able to navigate to the home page with easily and quickly.

  Given: Device is open
  When: the user selects shortcut element
  Then: the app opens to front page of meet-app

## Feature 6: Display Charts Visualizing Event Details
  As a user,
  I should be able to view chart visualing event details,
  So that I know which events each city is hosting.

  Given: The user has the app open
  When: the user types in a city name
  Then: a chart visualizes all the events going on in that city



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Further Help

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

