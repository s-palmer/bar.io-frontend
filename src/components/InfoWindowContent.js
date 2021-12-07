const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const InfoWindowContent = ({selectedBar}) => {
  const BarLink = `${DIR_URL}${selectedBar.geometry.location.lat},${selectedBar.geometry.location.lng}`;

  return (
    <div>
      <p>Bar name: {selectedBar.name}</p>
      <a href={BarLink} className="infowindow-button">
        Take me here
      </a>
    </div>
  )
}

export default InfoWindowContent
