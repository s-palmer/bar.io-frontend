const API_URL = process.env.REACT_APP_TEST_API

const getBars = async () => {
  let response = await fetch(API_URL);
  let data = await response.json();
  console.log(data);
  return data.results;
};

export default getBars;
