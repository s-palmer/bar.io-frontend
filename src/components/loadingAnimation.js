import React from "react";

const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem'
};

export default function ThreeDotsWave() {
  return (
    <div>
      <span style={loadingCircle} />
      <span style={loadingCircle} />
      <span style={loadingCircle} />
    </div>
  );
}