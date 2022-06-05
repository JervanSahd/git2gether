import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "14rem",
  height: "14rem",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const center = {
  lat: 33.753746,
  lng: -84.38633,
};
const libraries = ["places"];

function MyComponent() {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBsYeaeYql_I1Bj96IEerbAK4-hqc7tCkI",
    libraries,
  });


  return isLoaded ? (
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
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
