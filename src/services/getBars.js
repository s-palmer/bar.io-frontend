const getBars = async () => {
    let response = await fetch('http://localhost:8000/bars');
    let data = await response.json();

    return data;
}

export default getBars
