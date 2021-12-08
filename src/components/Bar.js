const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const Bar = ({ bar, location }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}&origin=${location.lat},${location.lng}`;
  return (
    <div className="bar">

      <div className="bar-card-title">
        <h3>{bar.name}</h3>
      </div>

      <div className="bar-card-info">
        <p><b>Price Level:</b> {"💰".repeat(bar.price_level)}</p>
        <p><b>Rating:</b> {"⭐".repeat(bar.rating)}</p>
        <p><b>No. Of Ratings:</b> {bar.user_ratings_total}</p>
      </div>

      <div className="bar-card-image">
        <img
          width="100%"
          src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg"
          alt="simmons-bar"
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
