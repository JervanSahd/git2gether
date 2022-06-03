import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
import Map from "../Map/Map";

function Event({ event }) {
  // const { eventId, startDate, startTime, endTime, name, description,} = event;
  // SS delete unused variables
  const {
    eventId,
    startDate,
    endDate,
    startTime,
    endTime,
    name,
    description,
    location,
    streamLink,
    plannerName,
    email,
    phone,
    linkedIn,
  } = event;
  return (
    <div id="eventInfo" key={eventId}>
      <div id="eventDate">
        <h4>{startDate}</h4>
        <h4>
          {startTime} - {endTime}
        </h4>
      </div>

      <div id="breakLine"></div>

      <div id="eventText">
        <h3>{removeHyphensAndCapitalize(name)}</h3>
        <p>{description}</p>
      </div>

      <div>
        {endDate}
        {location}
        {streamLink}
        {plannerName}
        {email}
        {phone}
        {linkedIn}
      </div>
      <div>
        {" "}
        <Map />
      </div>
    </div>
  );
}

export default Event;
