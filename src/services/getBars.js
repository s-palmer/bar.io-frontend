// const TEST_API_URL = process.env.REACT_APP_TEST_API
const REAL_API_URL = process.env.REACT_APP_PLACES_REAL_API
const API_KEY = process.env.REACT_APP_PLACES_API_KEY
const CORS_PROXY_URL = process.env.REACT_APP_CORS_PROXY

const getBars = async ( {lat, lng} ) => {
  const fetchURL = `${CORS_PROXY_URL}/${REAL_API_URL}&key=${API_KEY}&location=${lat},${lng}`
  // const fetchURL = `${TEST_API_URL}`
  let response = await fetch(fetchURL);
  let data = await response.json();
  return data.results;
};

export default getBars;
