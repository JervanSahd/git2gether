import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Event({ event }) {

    const { eventId, startDate, endDate, startTime, endTime, name, description,
        location, streamLink, plannerName, email, phone, linkedIn } = event;

    return (
        <div id='eventInfo' key={eventId}>
            <div id='eventDate'>
                <h4>{startDate}</h4>
                <h4>{startTime} - {endTime}</h4>
            </div>

            <div id='breakLine'></div>

            <div id="eventText">
                <h3>{removeHyphensAndCapitalize(name)}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Event;