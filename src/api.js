import mockData from "./mock-data";

// Will take an events array to map over to create new array with only locations
// Will Remove duplicates by creating a new array using the spread operator and spreading a Set

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};

// Checking if token has been found

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};


// Will fetch the list of all events from Google Calendar API

export const getEvents = async () => {
  //NProgress.start();
  if (window.location.href.startsWith('http://localhost')) {
    //NProgress.done();
    return mockData;
  }
  
  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = 'https://4de84okria.execute-api.us-west-2.amazonaws.com/dev/api/get-events' + '/' + token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      return result.events;
    } else return null;
  }
};

// simiplifying URL for the user by taking out of the URL

const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl = 
      window.location.protocol +
      '//' +
      window.location.host + 
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState("", "", newurl);
  } 
};

// redirects user to get token from Google if token not validated or expired

const getToken = async (code) => {
  const endcodeCode = encodeURIComponent(code);
  const response = await fetch(
    'https://4de84okria.execute-api.us-west-2.amazonaws.com/dev/api/token' + '/' + endcodeCode
  );
  const { access_token } = await response.json();
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};

// getting access Token or confirming if one is already there

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');

  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const response = await fetch(
        "https://4de84okria.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authURL } = result;
      return (window.location.href = authURL);
    }
    return code && getToken(code);
  }
  return accessToken;
};

