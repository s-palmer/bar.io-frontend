import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import InfoWindowContent from "./InfoWindowContent";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const MapComponent = ({ bars, location }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: Apikey,
    region: "uk",
  });

  const [map, setMap] = useState(null);
  const [selectedBar, setSelectedBar] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markerLocations = bars.map((bar, index) => (
    <Marker
      position={{
        lat: bar.location.lat,
        lng: bar.location.lng,
      }}
      key={index}
      onClick={() => { setSelectedBar(bar);}}
    />
  ));


  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>{markerLocations}</>
        {selectedBar && (
          <InfoWindow
            position={{ lat: selectedBar.location.lat, lng: selectedBar.location.lng }}
            onCloseClick={() => {
              setSelectedBar(null);
            }}
          >
            <InfoWindowContent selectedBar={selectedBar} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapComponent;
