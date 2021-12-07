import { getGeocode, getLatLng } from "use-places-autocomplete";

const geoCoder = (setUserLocation, text) => {

  const parameter = {
    address: text,
    region: "uk"
  };

  console.log(parameter);

  return getGeocode(parameter)
  .then((results) => 
    getLatLng(results[0])
  )
  .then(
    ({ lat, lng }) => {
    const res = { lat, lng };
    console.log(res);
    setUserLocation(res);
    return res;
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
}

export default geoCoder;
