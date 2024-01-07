import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  let starTime = event.created;

  return (
    <div>
      <div className="eventName">{event.summary}</div>
      <div className="eventStartTime">{starTime}</div>
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