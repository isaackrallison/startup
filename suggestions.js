function suggest() {
    // Step 1: Retrieve the current list from local storage (if it exists)
    const storedList = JSON.parse(localStorage.getItem('suggestions')) || [];

    const nameEl = document.querySelector("#suggestion");

    // Step 2: Add the new item to the list
    storedList.push(nameEl.value);

    // Step 3: Store the updated list back in local storage
    localStorage.setItem('suggestions', JSON.stringify(storedList));
  }

function displaySuggestions() {
    // Step 1: Retrieve the list of suggestions from local storage
    const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
    const username = localStorage.getItem('userName');

    // Step 2: Get the <ul> element where you want to display the suggestions
    const playerSuggestions = document.querySelector('#votes');

    // Step 4: Loop through the suggestions and create a new <li> element for each
    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = username + " suggested: " + suggestions[i];

        // Create a new list item element
        const newListItem = document.createElement('li');
        newListItem.className = 'vote player-event';

        // Set the content for the new list item
        newListItem.textContent = suggestion;

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
    const suggestions = ["Let's play Basketball", "Let's get some food!", "Anyone down for tennis?", "How about a hike?", "Let's go to the Lake",
    "picnic anyone?","pickleball anyone?"];
    const usernames = ["Phil", "Albert", "Jenna", "Scott"]

    // Step 2: Get the <ul> element where you want to display the suggestions
    const playerSuggestions = document.querySelector('#votes');

    // Step 4: Loop through the suggestions and create a new <li> element for each
    const suggestion = usernames[getRandomInt(0, usernames.length - 1)] + " suggested: " + suggestions[getRandomInt(0, usernames.length - 1)];

        // Create a new list item element
    const newListItem = document.createElement('li');
    newListItem.className = 'vote player-event';

        // Set the content for the new list item
    newListItem.textContent = suggestion;

        // Append the new list item to the <ul>
    playerSuggestions.appendChild(newListItem);
}, 5000);