import { getGeocode } from "use-places-autocomplete";

const geoCoder = ( {input} ) => {

  getGeocode(input)
  .then((results) => {
    console.log("Geocoding results: ", results);
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
