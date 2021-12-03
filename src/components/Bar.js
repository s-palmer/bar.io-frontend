const DIR_URL="https://www.google.com/maps/dir/?api=1&destination="

const Bar = ({ bar }) => {

  const BarLink = `${DIR_URL}${bar.geometry.location.lat},${bar.geometry.location.lng}`

  // Need to add user origin when we have user location being taken from the form

  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <p>Address: {bar.formatted_address}</p>
      <p>Rating: {bar.rating}</p>
      <p>Price Level: {bar.price_level}</p>
      <p>User Ratings: {bar.user_ratings_total}</p>
      <p>Open Now? {bar.opening_hours.open_now ? 'Yes' : 'No' }</p>
      <a href={BarLink}>Take me here</a>
      <img width="100%" src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg" alt="simmons-bar"></img>
      <ul>
        {bar.types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bar;
