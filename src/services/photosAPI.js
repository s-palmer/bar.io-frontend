const photoApiURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600"

const CORS_PROXY_URL = process.env.REACT_APP_CORS_PROXY;
const Apikey = process.env.REACT_APP_PLACES_API_KEY;

const photosApi = async (photoRef) => {
  let photoURL = `${photoApiURL}&key=${Apikey}&photo_reference=${photoRef}`
  let response = await fetch(photoURL);
  return response;
}

export default photosApi
