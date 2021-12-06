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
    console.log({ lat, lng });
    const res = { lat, lng };
    setUserLocation({lat, lng});
    return res;
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
}

export default geoCoder;
