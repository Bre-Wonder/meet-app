import mockData from "./mock-data";

// Will take an events array to map over to create new array with only locations
// Will Remove duplicates by creating a new array using the spread operator and spreading a Set

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};

// Will fetch the list of all events

export const getEvents = async () => {
  return mockData;
};