import { getGeocode, getLatLng } from "use-places-autocomplete";

const geoCoder = (setUserLocation, input) => {

  const parameter = {
    address: input,
    region: "uk"
  };

  getGeocode(parameter)
  .then((results) => 
    getLatLng(results[0])
  )
  .then(
    ({ lat, lng }) => {
    console.log({ lat, lng });
    setUserLocation({lat, lng});
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

  return (
    <>
    </>
  )
}

export default geoCoder;
