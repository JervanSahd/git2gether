import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
import Map from "../Map/Map";
import Geocode from "react-geocode";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
//import NodeGeocoder from 'node-geocoder';

// importing icons for contact links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

Geocode.setApiKey("AIzaSyBsYeaeYql_I1Bj96IEerbAK4-hqc7tCkI");
Geocode.setLocationType("ROOFTOP");

// const options = {
//   provider: 'google',

//   // Optional depending on the providers
//   fetch: customFetchImplementation,
//   apiKey: 'AIzaSyBsYeaeYql_I1Bj96IEerbAK4-hqc7tCkI', // for Mapquest, OpenCage, Google Premier
//   formatter: null // 'gpx', 'string', ...
// };


function Event({ event }) {

  const { _id, startDate, endDate, startTime, endTime, name, description,
    location, streamLink, plannerName, email, phone, linkedIn, } = event;

  const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const Phone = <FontAwesomeIcon icon={faPhoneSquare} />
  const Email = <FontAwesomeIcon icon={faEnvelopeSquare} />

  console.log({ _id });
  console.log({ location });

  //creating email link
  const mailto = 'mailto:'
  const emailAddress = mailto.concat(email)


  //map size
  const containerStyle = {
    width: "14rem",
    height: "14rem",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  // const geocoder = NodeGeocoder(options);
  // const res = geocoder.geocode(location);
  // console.log(res);

  Geocode.fromAddress(location).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      const center = {
        lat: lat,
        lng: lng,
      };
      console.log(center);
      return center
    },
    (error) => {
      console.error('invalid address');
    },
  );


  const center = {
    lat: 33.753746,
    lng: -84.38633,
  };

  
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBsYeaeYql_I1Bj96IEerbAK4-hqc7tCkI",
  });

  return isLoaded ? (
    <div id="eventInfo" key={_id}>

      <div id="maps">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          options={options}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
          <Marker position={center} />
        </GoogleMap>
        {/* <Map /> */}
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
            <a id='icons' href={emailAddress} target="_blank">{Phone}</a>
          </div>
        </div>
      </div>
    </div >
  ) : (
    <></>
  );
}

export default Event;
