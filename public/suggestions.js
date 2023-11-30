async function suggest() {

    const nameEl = document.querySelector("#suggestion");
    const username = localStorage.getItem('userName');
    const suggestion = nameEl.value;

    // Send a POST request to the server to save the suggestion
    await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, activity: suggestion }),
    });

    // Refresh the displayed suggestions
    displaySuggestions();
}

async function displaySuggestions() {
    try {
        // Get the latest suggestions from the service
        const response = await fetch('/api/suggestions');
        const suggestions = await response.json();

        // Update the local storage
        localStorage.setItem('suggestions', JSON.stringify(suggestions));

        // Display the suggestions on the webpage
        const playerSuggestions = document.querySelector('#votes');
        playerSuggestions.innerHTML = ''; // Clear existing suggestions

        for (const suggestion of suggestions) {
            const displayText = `${suggestion.user} suggested: ${suggestion.activity}`;

            // Create a new list item element
            const newListItem = document.createElement('li');
            newListItem.className = 'vote player-event';
            newListItem.textContent = displayText;

            // Append the new list item to the <ul>
            playerSuggestions.appendChild(newListItem);
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}

displaySuggestions();

function createLiElement(user, activity, count) {
    const userSuggestion = document.createElement('li');
    userSuggestion.className = 'prev_vote';
    userSuggestion.textContent = `${user} Suggested: ${activity}`;

    const voteCounter = document.createElement('span');
    voteCounter.className = 'vote-counter';
    voteCounter.textContent = count;

    userSuggestion.appendChild(voteCounter);

    return userSuggestion;
}

function displayRandomSuggestions(count) {
    // Step 1: Retrieve the stored username
    const username = localStorage.getItem('userName');

    // Step 2: Retrieve the list of suggestions from local storage
    const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];

    // Step 3: Filter suggestions based on the username
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.user === username);

    // Step 4: Shuffle the filtered suggestions to get a random selection
    const shuffledSuggestions = getRandomSelection(filteredSuggestions, count);

    // Step 5: Get the <ul> element where you want to display the suggestions
    const ulElement = document.querySelector('.prev_votes');

    if (ulElement) {
        // Clear any existing content in the list
        ulElement.innerHTML = '';

        // Step 6: Loop through the shuffled suggestions and create <li> elements
        for (const suggestion of shuffledSuggestions) {
            const liElement = createLiElement(username, suggestion.activity);
            ulElement.appendChild(liElement);
        }
    }
}


function getRandomSelection(array, count, username) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
}

// Call displayRandomSuggestions with the desired count (e.g., 2 for two suggestions)
displayRandomSuggestions(2);