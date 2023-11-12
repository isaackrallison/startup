function createLiElement(user, activity, count) {
    const userSuggestion = document.createElement('li');
    userSuggestion.className = 'vote';

    const countSpan = document.createElement('span');
    countSpan.className = 'vote-count';
    countSpan.textContent = count; // Display the count

    userSuggestion.appendChild(countSpan);

    const textSpan = document.createElement('span');
    textSpan.className = 'vote-text';
    textSpan.textContent = `${user} Suggested: ${activity}`; // Rest of the item

    const voteButton = document.createElement('button');
    voteButton.id = 'cast_vote';
    voteButton.textContent = 'Vote!';
    voteButton.onclick = function () {
        // Increment the vote counter when the button is clicked
        count++;
        countSpan.textContent = count;
        updateMostVotedActivity(); // Call the function to update the most voted activity
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

function updateMostVotedActivity() {
    suggestions.forEach((suggestion) => {
        if (suggestion.activity === mostVotedActivity.activity) {
            mostVotedActivity.count++;
        }
        if (suggestion.activity !== mostVotedActivity.activity && suggestion.activity !== '') {
            mostVotedActivity = { activity: suggestion.activity, count: 1 };
        }
    });

    const mostVotedActivityText = document.querySelector('.most-voted-activity');
    if (mostVotedActivityText) {
        mostVotedActivityText.textContent = `Most Voted Activity: ${mostVotedActivity.activity}`;
    }
}

if (ulElement) {
    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        const liElement = createLiElement(suggestion.user, suggestion.activity, 0); // Initialize count to 0
        ulElement.appendChild(liElement);
    }
}

updateMostVotedActivity();