const sendUserRequest = async (res, mins) => {
  const lat = res.lat;
  const lng = res.lng;
  const minsVal = mins;
  const postURL = process.env.REACT_APP_TEST_API_POST_URL;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mins: minsVal, location: { lat, lng } }),
  };

  let response = await fetch(postURL, requestOptions);
  let data = await response.json();
  console.log(data.results);
  return data.results;
};

export default sendUserRequest;
