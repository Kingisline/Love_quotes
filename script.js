function getRandomQuote() {
    // API endpoint for random love quotes
    const apiUrl = 'https://api.quotable.io/random?tags=love';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the quote and author from the API response
            const quote = data.content;
            const author = data.author;

            // Display the quote in the HTML element with id "quote"
            document.getElementById('quote').textContent = `"${quote}" - ${author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
