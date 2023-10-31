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

function displaySuggestions() {
    // Step 1: Retrieve the list of suggestions from local storage
    const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
    
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