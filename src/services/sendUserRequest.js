const postURL = process.env.REACT_APP_TEST_API_POST

const sendUserRequest = (props) => {
  const mins = props.mins;
  const location = props.text;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify({ mins: {mins}, location: {location} })
  }

  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, data);
    const res = await response.json();
    return res;
  }

  postData(postURL, requestOptions)
  .then(data => {
    console.log(data);
  });
}

export default sendUserRequest
