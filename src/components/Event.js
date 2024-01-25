import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  let starTime = event.created;

  return (
    <li role="listitem" className="event">
      <div className="eventName">{event.summary}</div>
      <div className="eventStartTime">{starTime}</div>
      <div className="eventLocations">{event.location}</div>   

      {showDetails ? (
        <div>
          <p className="details-btn">Event Details</p>
          <button className="HideDetails" onClick={() => setShowDetails(false)}>Hide Details</button>
        </div>
      ) : (
        <button className="details-btn" onClick={() => setShowDetails(true)}>Show Details</button>
      )}
    </li>
 );
};

export default Event;