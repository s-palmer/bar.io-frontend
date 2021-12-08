const DIR_URL = process.env.REACT_APP_DIR_URL;
const photoApiURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600"
const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const Bar = ({ bar, location }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}&origin=${location.lat},${location.lng}`;
  const photoURL = `${photoApiURL}&key=${Apikey}&photo_reference=${bar.photo_reference}`
  return (
    <div className="bar">

    
      <div className="bar-card-title">
        <h3>{bar.name}</h3>
      </div>

      <div className="bar-card-info">
        <p><b>Price Level:</b> {"£".repeat(bar.price_level)}</p>
        <p><b>Rating:</b> {bar.rating}</p>
        <p><b>No. Of Ratings:</b> {bar.user_ratings_total}</p>
      </div>

      <div className="bar-card-image">
          <img
        width="100%"
        src={photoURL}
        alt={bar.name}
      ></img>
     
      </div>

      <div className="bar-card-address">
        <p><b>Address:</b> {bar.formatted_address}</p>
      </div>
      <a href={BarLink} className="direction-button">
        Take me to {bar.name}
      </a>
    
    </div>
  );
};

export default Bar;
