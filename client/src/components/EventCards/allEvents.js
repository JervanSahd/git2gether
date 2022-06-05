import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
import Map from "../Map/Map";

// importing icons for contact links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';


function Event({ event }) {

  const { _id, startDate, endDate, startTime, endTime, name, description,
    location, streamLink, plannerName, email, phone, linkedIn, } = event;

  //trying to get icons to not appear if not included in form
  // console.log(linkedIn);
  // const linkIcon = '';
  // const LinkedIn = () => {
  //   if (linkedIn === '0') {
  //     const linkIcon = '';
  //     console.log(linkIcon);
  //     return linkIcon
  //   }
  //   if (linkedIn !== '0') {
  //     const linkIcon = <FontAwesomeIcon icon={faLinkedin} />;
  //     return linkIcon
  //   };
  // };
  // LinkedIn();
  // console.log(linkIcon);

  const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const Phone = <FontAwesomeIcon icon={faPhoneSquare} />
  const Email = <FontAwesomeIcon icon={faEnvelopeSquare} />

  console.log({ _id });
  console.log({ location });

  //creating email link
  const mailto = 'mailto:'
  const emailAddress = mailto.concat(email)


  return (
    <div id="eventInfo" key={_id}>

      <div id="maps">
        <Map />
      </div>

      <div id='content'>
        <div>
          <div id="eventDate">
            <h4>{startDate}</h4>
            <h4>
              {startTime} - {endTime}
            </h4>
          </div>

          <div id="breakLine"></div>

          <div id="eventText">
            <div id="titleLocation">
              <h3 id='eventTitle'>{removeHyphensAndCapitalize(name)}</h3>
              <h4 id='location'>{location}</h4>
            </div>

            <p>{description}</p>
          </div>
        </div>

        <div id="planner">
          <p>Event Organizer: {plannerName}</p>
          <div id='iconBox'>
            <a id='icons' href={emailAddress} target="_blank">{Email}</a>
            <a id='icons' href={linkedIn} target="_blank">{Linkedin}</a>
            <a id='icons' href={phone} target="_blank">{Phone}</a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Event;
