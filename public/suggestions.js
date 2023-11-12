function suggest() {
    // Step 1: Retrieve the current list from local storage (if it exists)
    const storedList = JSON.parse(localStorage.getItem('suggestions')) || [];

    const nameEl = document.querySelector("#suggestion");

    // Step 2: Add the new item as a user-activity pair to the list
    const username = localStorage.getItem('userName');
    const suggestion = nameEl.value;
    storedList.push({ user: username, activity: suggestion });

    // Step 3: Store the updated list back in local storage
    localStorage.setItem('suggestions', JSON.stringify(storedList));
}


async function displaySuggestions() {
    let suggestions = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/suggestions');
      suggestions = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('suggestions', JSON.stringify(suggestions));
    } catch {
      // If there was an error then just use the last saved scores
      const storedSuggestions = localStorage.getItem('suggestions');
      if (storedSuggestions) {
        suggestions = JSON.parse(storedSuggestions);
      }
    }
    
    // Step 2: Get the <ul> element where you want to display the suggestions
    const playerSuggestions = document.querySelector('#votes');

    // Step 4: Loop through the suggestions and create a new <li> element for each
    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        const displayText = suggestion.user + " suggested: " + suggestion.activity;

        // Create a new list item element
        const newListItem = document.createElement('li');
        newListItem.className = 'vote player-event';

        // Set the content for the new list item
        newListItem.textContent = displayText;

        // Append the new list item to the <ul>
        playerSuggestions.appendChild(newListItem);
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
            const liElement = createLiElement(username, suggestion.activity, suggestion.count);
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




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
    // Step 1: Retrieve the list of suggestions from local storage
    const storedList = JSON.parse(localStorage.getItem('suggestions')) || [];
    const suggestions = ["Let's play Basketball", "Let's get some food!", "Anyone down for tennis?", "How about a hike?", "Let's go to the Lake", "picnic anyone?", "pickleball anyone?"];
    const usernames = ["Phil", "Albert", "Jenna", "Scott"]
    const random_suggestion = suggestions[getRandomInt(0, suggestions.length - 1)];

    // Step 2: Get the <ul> element where you want to display the suggestions
    const playerSuggestions = document.querySelector('#votes');

    // Create a new user-activity pair
    const user = usernames[getRandomInt(0, usernames.length - 1)];
    const suggestion = { user: user, activity: random_suggestion };

    // Push the user-activity pair to the stored list and update local storage
    storedList.push(suggestion);
    localStorage.setItem('suggestions', JSON.stringify(storedList));

    // Create a list item for display
    const displayText = user + " suggested: " + suggestion.activity;

    // Create a new list item element
    const newListItem = document.createElement('li');
    newListItem.className = 'vote player-event';

    // Set the content for the new list item
    newListItem.textContent = displayText;

    // Append the new list item to the <ul>
    playerSuggestions.appendChild(newListItem);
}, 7000);