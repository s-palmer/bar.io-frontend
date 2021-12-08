const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const InfoWindowContent = ({selectedBar, userLocation}) => {
  const BarLink = `${DIR_URL}${selectedBar.location.lat},${selectedBar.location.lng}&origin=${userLocation.lat},${userLocation.lng}`;

  return (
    <div className="map-infowindow">
      <p>Bar name: {selectedBar.name}</p>
      <a href={BarLink} className="infowindow-button">
        Take me here
      </a>
    </div>
  )
}

export default InfoWindowContent
