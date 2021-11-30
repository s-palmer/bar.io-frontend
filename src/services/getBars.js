const getBars = async () => {
  let response = await fetch("https://node-test-api-bario.herokuapp.com/bars");
  let data = await response.json();
  console.log(data);
  return data.results;
};

export default getBars;
