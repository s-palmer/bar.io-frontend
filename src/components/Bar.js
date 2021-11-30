const Bar = ({ bar }) => {
  return (
    <div className="bar">
      <h3>{bar.name}</h3>
      <p>Address: {bar.formatted_address}</p>
      <p>Rating: {bar.rating}</p>
      <p>Price Level: {bar.price_level}</p>
      <p>User Ratings: {bar.user_ratings_total}</p>
      <p>Open Now? {bar.opening_hours.open_now ? 'Yes' : 'No' }</p>
      <img src="https://node-test-api-bario.herokuapp.com/images/simmons.jpeg" alt="simmons-bar"></img>
      <ul>
        {bar.types.map((type) => (
          <li>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bar;
