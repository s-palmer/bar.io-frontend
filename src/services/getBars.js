const axios = require('axios');


const getBars = async () => {
  
    let response = await axios.get('http://localhost:8000/bars');

    if (!response.ok) {
      let data = []
      return data;
    }

    let data = await response.json();
    return data;
}

export default getBars


