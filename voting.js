// function createLiElement(user, activity) {
//     const userSuggestion = document.createElement('li');
//     userSuggestion.className = 'vote';
//     userSuggestion.textContent = `${user} Suggested: ${activity}`;

//     const voteButton = document.createElement('button');
//     voteButton.id = 'cast_vote';
//     voteButton.textContent = 'Vote!';
//     voteButton.onclick = function () {
//         alert('Vote Submitted');
//     };

//     userSuggestion.appendChild(voteButton);

//     return userSuggestion;
// }

// const suggestions = JSON.parse(localStorage.getItem('suggestions'));
// const ulElement = document.querySelector('.votes'); // Select the <ul> element

// if (ulElement) {
//     for (let i = 0; i < suggestions.length; i++) {
//         const suggestion = suggestions[i];
//         const liElement = createLiElement(suggestion.user, suggestion.activity);
//         ulElement.appendChild(liElement);
//     }
// }

function createLiElement(user, activity, count) {
    const userSuggestion = document.createElement('li');
    userSuggestion.className = 'vote';
    userSuggestion.textContent = `${user} Suggested: ${activity}`;

    const voteCounter = document.createElement('span');
    voteCounter.className = 'vote-counter';
    voteCounter.textContent = count; // Initialize the counter with 0 votes

    const voteButton = document.createElement('button');
    voteButton.id = 'cast_vote';
    voteButton.textContent = 'Vote!';
    voteButton.onclick = function () {
        // Increment the vote counter when the button is clicked
        count++;
        voteCounter.textContent = count;
    };

    userSuggestion.appendChild(voteCounter);
    userSuggestion.appendChild(voteButton);

    return userSuggestion;
}

const suggestions = JSON.parse(localStorage.getItem('suggestions'));
const ulElement = document.querySelector('.votes'); // Select the <ul> element

if (ulElement) {
    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        const liElement = createLiElement(suggestion.user, suggestion.activity, 0); // Initialize count to 0
        ulElement.appendChild(liElement);
    }
}
