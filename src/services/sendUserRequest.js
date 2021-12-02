const sendUserRequest = (props) => {
  const mins = props.mins
  const location = props.text

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mins: {mins}, location: {location} })
  };

  fetch('postURL', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
}

export default sendUserRequest
