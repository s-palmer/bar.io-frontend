import React from "react";
import Wrapper, { Status } from "./components/Wrapper";
import MyMapComponent from "./components/MyMapComponent";

const render = (status) => {
  if (status === Status.LOADING) return <p>Loading...</p>;
  if (status === Status.FAILURE) return <p>Error...</p>;
  return null;
};

const MapWrapper = () => (
  <Wrapper apiKey="<enter API key here>" render={render}>
    <MyMapComponent />
  </Wrapper>
);

export default MapWrapper;
