import photosApi from "../services/photosAPI";

// const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const DIR_URL = process.env.REACT_APP_DIR_URL;

const Bar = ({ bar }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}`;
  const imgSRC = photosApi(bar.photo_reference)

  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <p>Address: {bar.formatted_address}</p>
      <p>Rating: {bar.rating}</p>
      <p>Price Level: {bar.price_level}</p>
      <p>User Ratings: {bar.user_ratings_total}</p>

      <img
        width="100%"
        src={imgSRC}
        alt="simmons-bar"
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
