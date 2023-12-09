let userVotes = 0;

function createLiElement(user, activity, count, i) {
    const userSuggestion = document.createElement('li');
    userSuggestion.className = 'vote';

    const countSpan = document.createElement('span');
    countSpan.className = 'vote-count';
    countSpan.textContent = count + '  '; // Display the count

    userSuggestion.appendChild(countSpan);

    const textSpan = document.createElement('span');
    textSpan.className = 'vote-text';
    textSpan.textContent = `${user} Suggested: ${activity}  `; // Rest of the item

    const voteButton = document.createElement('button');
    voteButton.id = 'cast_vote';
    voteButton.textContent = 'Vote!';
    
    voteButton.onclick = function () {
        // Check if the user has reached the maximum number of votes (e.g., 3)
        if (userVotes < 3) {
            // Increment the vote counter when the button is clicked
            count++;
            userVotes++; // Increment the user's votes

            // Update the local storage with the new count
            suggestions[i].count = count; // Update the count in the suggestions array
            localStorage.setItem('suggestions', JSON.stringify(suggestions));

            countSpan.textContent = count + '  '; // Update the count
            updateMostVotedActivity(); // Call the function to update the most voted activity
        } else {
            alert("You've reached the maximum number of votes (3)!");
        }
    };

    userSuggestion.appendChild(countSpan);
    userSuggestion.appendChild(textSpan);
    userSuggestion.appendChild(voteButton);

    return userSuggestion;
}

const suggestions = JSON.parse(localStorage.getItem('suggestions'));
const ulElement = document.querySelector('.votes'); // Select the <ul> element

// Variable to keep track of the most voted activity
let mostVotedActivity = { activity: '', count: 0 };

if (ulElement) {
    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        const liElement = createLiElement(suggestion.user, suggestion.activity, suggestion.count || 0, i); // Pass i to the createLiElement function
        ulElement.appendChild(liElement);
    }
}

function updateMostVotedActivity() {
    let mostVotedActivity = { activity: '', count: 0 };

    suggestions.forEach((suggestion) => {
        if (suggestion.count > mostVotedActivity.count) {
            mostVotedActivity = { activity: suggestion.activity, count: suggestion.count };
        }
    });

    const mostVotedActivityText = document.querySelector('.most-voted-activity');
    if (mostVotedActivityText) {
        mostVotedActivityText.textContent = `${mostVotedActivity.activity}`;
    }
}

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    // WebSocket connection opened, you can handle this event if needed
    // For now, let's just log it
    console.log('WebSocket connection opened');
  };
}

configureWebSocket();
updateMostVotedActivity();
