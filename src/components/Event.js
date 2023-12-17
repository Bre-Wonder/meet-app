import { useState } from "react";
import { getEvents } from "../api";
import mockData from "../mock-data";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
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