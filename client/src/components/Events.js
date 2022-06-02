//import React, { useState } from 'react';
import React from 'react';
import Event from "./EventCards/allEvents";
//import EventDetails from './EventCards/eventDetails';

import { QUERY_INPERSON } from '../utils/queries'
import { useQuery } from '@apollo/client';

function EventCards() {
  const { data } = useQuery(QUERY_INPERSON);
  const events = data?.InPersonAll || [];


  // const [events] = useState([
  //   {
  //     name: 'recent grad network and hangout',
  //     description: `Congrats! You finished bootcamp. So join us at Barley's for a chance to 
  //       network with other bootcamp grads in the area. See you there!`,
  //     startDate: 'Wednesday, June 01',
  //     startTime: '4:00pm',
  //     endTime: '6:00pm',
  //     location: "Barley's Taproom & Pizzeria",
  //     plannerName: 'Autumn Fields',
  //     email: 'autumnf12@gmail.com',
  //     phone: '5555555555',
  //     linkedIn: 'https://www.linkedin.com/in/autumn-fields-2021/'
  //   },
  //   {
  //     name: 'Couch Networking',
  //     description: `Leaving the house is hard. But chilling on the couch is easy. Let's
  //       get together and network on a zoom call! `,
  //     startDate: 'Wednesday, June 01',
  //     startTime: '7:00pm',
  //     endTime: '',
  //     streamLink: "https://hangouts.google.com/",
  //     plannerName: 'Autumn Fields',
  //     email: 'autumnf12@gmail.com',
  //     phone: '5555555555',
  //     linkedIn: 'https://www.linkedin.com/in/autumn-fields-2021/'
  //   },
  //   {
  //     name: 'recent grad network and hangout',
  //     description: `Congrats! You finished bootcamp. So join us at Barley's for a chance to 
  //       network with other bootcamp grads in the area. See you there!`,
  //     startDate: 'Wednesday, June 01',
  //     startTime: '4:00pm',
  //     endTime: '6:00pm',
  //     location: "Barley's Taproom & Pizzeria",
  //     plannerName: 'Autumn Fields',
  //     email: 'autumnf12@gmail.com',
  //     phone: '5555555555',
  //     linkedIn: 'https://www.linkedin.com/in/autumn-fields-2021/'
  //   },
  //   {
  //     name: 'recent grad network and hangout',
  //     description: `Congrats! You finished bootcamp. So join us at Barley's for a chance to 
  //       network with other bootcamp grads in the area. See you there!`,
  //     startDate: 'Wednesday, June 01',
  //     startTime: '4:00pm',
  //     endTime: '6:00pm',
  //     location: "Barley's Taproom & Pizzeria",
  //     plannerName: 'Autumn Fields',
  //     email: 'autumnf12@gmail.com',
  //     phone: '5555555555',
  //     linkedIn: 'https://www.linkedin.com/in/autumn-fields-2021/'
  //   }

  // ]);


  return (
    <div>
      <div id="eventCards">
        {events.map((event, idx) => (
          <Event
            event={event}
            key={"event" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCards;
