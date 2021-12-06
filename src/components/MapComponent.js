import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const MapComponent = ({ bars }) => {
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

  const markerLocations = () => {
    return bars.map((bar, index) => {
      return (
        <Marker
          position={{
            lat: bar.geometry.location.lat,
            lng: bar.geometry.location.lng
          }}
          key={bar.place_id}
          onClick={() => { setSelectedBar(bar);}}
        />
      );
    });
  };

  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ {lat: 51.5173523, lng: -0.0732582} }
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          {markerLocations()}
        

        {selectedBar && (
          <InfoWindow
            position={{ lat: selectedBar.geometry.location.lat, lng: selectedBar.geometry.location.lng }}
            onCloseClick={() => {
              setSelectedBar(null);
            }}
          >
            <div>
              <p>Bar name: {selectedBar.name}</p>
            </div>
          </InfoWindow>
        )}
        </>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapComponent;
