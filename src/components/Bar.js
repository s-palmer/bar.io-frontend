const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=";

const Bar = ({ bar, location }) => {
  const BarLink = `${DIR_URL}${bar.location.lat},${bar.location.lng}&origin=${location.lat},${location.lng}`;
  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <img
        width="100%"
        src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg"
        alt="simmons-bar"
      ></img>
      <p><b>Address:</b> {bar.formatted_address}</p>
      <p>
      <b>Rating:</b> {bar.rating}
      <br/>
      <b>Price Level:</b> {"£".repeat(bar.price_level)}
      <br/>
      <b>No. Of Ratings:</b> {bar.user_ratings_total}</p>
      <a href={BarLink} className="direction-button">
        Take me to {bar.name}
      </a>
    </div>
  );
};

export default Bar;
