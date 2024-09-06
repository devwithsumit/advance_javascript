async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts'); // Fetches and logs data from the API
