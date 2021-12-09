const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const InfoWindowContent = ({selectedBar, userLocation}) => {
  const BarLink = `${DIR_URL}${selectedBar.location.lat},${selectedBar.location.lng}&origin=${userLocation.lat},${userLocation.lng}`;

  return (
    <div className="map-infowindow">
      <p><b>{selectedBar.name}</b></p>
        <img
          width="100%"
          height="auto"
          src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg"
          alt="simmons-bar"
        ></img>
        <a href={BarLink} className="map-infowindow-button">
          Take me here
        </a>
    </div>
  )
}

export default InfoWindowContent
