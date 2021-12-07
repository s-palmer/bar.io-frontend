const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const Bar = ({ bar }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}`;

  // Need to add user origin when we have user location being taken from the form

  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <p>Address: {bar.formatted_address}</p>
      <p>Rating: {bar.rating}</p>
      <p>Price Level: {bar.price_level}</p>
      <p>User Ratings: {bar.user_ratings_total}</p>

      <img
        width="100%"
        src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg"
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
