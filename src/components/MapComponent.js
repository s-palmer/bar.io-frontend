import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const center = {
  lat: 51.5173523,
  lng: -0.0732582,
};

const MapComponent = ({ bars }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: Apikey,
    region: "uk",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markerLocations = () => {
    return bars.map((bar, index) => {
      return (
        <Marker
          position={{
            lat: bar.geometry.location.lat,
            lng: bar.geometry.location.lng,
          }}
        key={index}/>
      );
    });
  };

  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
          {markerLocations()}
        </>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapComponent;
