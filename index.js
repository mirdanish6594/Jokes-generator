document.addEventListener('DOMContentLoaded', function () {
    const jokeElement = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke-btn');

    // Function to fetch a random joke
    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = `"${data.setup}" ${data.punchline}`;
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeElement.textContent = 'Failed to fetch joke. Please try again later.';
            });
    }

    // Fetch a joke when the page loads
    fetchJoke();

    // Fetch a new joke when the button is clicked
    newJokeButton.addEventListener('click', fetchJoke);
});
