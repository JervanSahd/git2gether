import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
import Map from "../Map/Map";


function Event({ event }) {
  // const { eventId, startDate, startTime, endTime, name, description,} = event;
  // SS delete unused variables
  const { _id, startDate, endDate, startTime, endTime, name, description,
    location, streamLink, plannerName, email, phone, linkedIn, } = event;


  console.log({ _id });
  console.log({ location });



  return (
    <div id="eventInfo" key={_id}>
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


      <div id="maps">
        <Map

        />
      </div>

    </div >
  );
}

export default Event;
