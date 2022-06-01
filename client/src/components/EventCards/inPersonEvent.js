import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Event({ event }) {

  const { eventId, startDate, endDate, startTime, endTime, name, description,
    location, plannerName, email, phone, linkedIn } = event;

  return (
    <div className='project' key={name}>
      <div id='eventDate'>
        <h4>{startDate}</h4>
        <h4>{startTime} - {endTime}</h4>
      </div>

      <div id='breakLine'></div>

      <div id="project-text">
        <h3>{removeHyphensAndCapitalize(name)}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Event;
