import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { getEvents } from "../api";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await getEvents();
        setAllEvents(events);
      } catch (error) {
        console.error("Error in fetching events", error);
      }
    }

  fetchEvents();
  }, []);
  
  const startTime = event.created;

 return (
  <div>
    <div className="eventName">{event.summary}</div>
    <div className="eventStartTime">{startTime}</div>
    <div className="eventLocations">{event.location}</div>

    {showDetails ? (
      <div>
        <p>Event Details</p>
        <button onClick={() => setShowDetails(false)}>Hide Details</button>
      </div>
    ) : (
      <button onClick={() => setShowDetails(true)}>Show Details</button>
    )}
  </div>
 );
};

export default Event;