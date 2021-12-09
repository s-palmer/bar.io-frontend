const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";
const photoApiURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600";
const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const InfoWindowContent = ({selectedBar, userLocation}) => {
  const BarLink = `${DIR_URL}${selectedBar.location.lat},${selectedBar.location.lng}&origin=${userLocation.lat},${userLocation.lng}`;
  const photoURL = `${photoApiURL}&key=${Apikey}&photo_reference=${selectedBar.photo_reference}`;

  return (
    <div className="map-infowindow">
      <p><b>{selectedBar.name}</b></p>
        <img
          width="100%"
          height="auto"
          src={photoURL}
          alt="simmons-bar"
        ></img>
        <a href={BarLink} className="map-infowindow-button">
          Take me here
        </a>
    </div>
  )
}

export default InfoWindowContent
