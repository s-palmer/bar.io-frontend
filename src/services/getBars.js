const getBars = async () => {
  let response = await fetch("http://localhost:8888/bars");
  let data = await response.json();
  console.log(data);
  return data.results;
};

export default getBars;
