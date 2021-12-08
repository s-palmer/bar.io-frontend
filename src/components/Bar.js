const DIR_URL = process.env.REACT_APP_DIR_URL;
const photoApiURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600"
const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const Bar = ({ bar }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}`;
  const photoURL = `${photoApiURL}&key=${Apikey}&photo_reference=${bar.photo_reference}`

  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <p>Address: {bar.formatted_address}</p>
      <p>Rating: {bar.rating}</p>
      <p>Price Level: {bar.price_level}</p>
      <p>User Ratings: {bar.user_ratings_total}</p>

      <img
        width="100%"
        src={photoURL}
        alt={bar.name}
      ></img>
      <ul>
        {bar.types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
      <a href={BarLink} className="direction-button">
        Take me to {bar.name}
      </a>
    </div>
  );
};

export default Bar;
