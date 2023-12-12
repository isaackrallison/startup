let userVotes = 0;
class Vote {
    Player;
    sugg = new Map();
    socket;

    constructor() {
        this.Player = localStorage.userName;

        const suggestions = JSON.parse(localStorage.getItem('suggestions'));

        suggestions.forEach((suggestion) => {
            if (suggestion.count > 0) {
                this.sugg.set(suggestion.activity, suggestion.count);
            }
        });

        configureWebSocket.call(this); // Call with 'this'
    }

    broadcastEvent(player, suggestions) {
        // Check if the WebSocket connection is open
        if (this.socket.readyState === WebSocket.OPEN) {
            const eventData = { player, suggestions };
            // this.socket.send(JSON.stringify(eventData));
            this.socket.send(JSON.stringify({ event: 'message', data: eventData }));
        } else {
            console.log(this.socket.readyState);
            console.error('WebSocket connection is not open');
        }
    }
}

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

    voteButton.onclick = () => {
        // Check if the user has reached the maximum number of votes (e.g., 3)
        if (userVotes < 3) {
            // Increment the vote counter when the button is clicked
            count++;
            userVotes++; // Increment the user's votes

            // Update the local storage with the new count
            suggestions[i].count = count; // Update the count in the suggestions array
            localStorage.setItem('suggestions', JSON.stringify(suggestions));

            // Use the correct value of 'this' by using an arrow function
            voteInstance.broadcastEvent('suggestions', JSON.stringify(suggestions));

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
        const liElement = createLiElement(
            suggestion.user,
            suggestion.activity,
            suggestion.count || 0,
            i
        ); // Pass i to the createLiElement function
        ulElement.appendChild(liElement);
    }
}

function updateMostVotedActivity() {
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
    this.socket.onclose = (event) => {
        console.log('Websocket connection closed');
    };
    this.socket.onmessage = async (event) => {
        console.log('message being sent');
        const data = JSON.parse(await event.data.text());
        handleIncomingData(data);
    };
}

function handleIncomingData(data) {
    // Assuming data is in the format { event: 'message', data: { player: 'suggestions', suggestions: [...] } }

    console.log('Received data:', data);

    // Check if data contains 'suggestions' property and it's a string
    if (data && data.data && typeof data.data.suggestions === 'string') {
        const suggestionsData = JSON.parse(data.data.suggestions);
        
        if (Array.isArray(suggestionsData)) {
            console.log('Received valid suggestions data:', suggestionsData);

            // Update the counts in the local storage based on the incoming data
            const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];

            suggestionsData.forEach((incomingSuggestion) => {
                const existingSuggestionIndex = suggestions.findIndex(
                    (suggestion) => suggestion.activity === incomingSuggestion.activity
                );

                if (existingSuggestionIndex !== -1) {
                    // Update the count for the existing suggestion
                    suggestions[existingSuggestionIndex].count = incomingSuggestion.count;
                } else {
                    // Add the new suggestion to the local storage if it doesn't exist
                    suggestions.push({
                        activity: incomingSuggestion.activity,
                        count: incomingSuggestion.count,
                    });
                }
            });

            // Save the updated suggestions array to local storage
            localStorage.setItem('suggestions', JSON.stringify(suggestions));

            // Update the UI with the new counts
            updateUIWithCounts();
        } else {
            console.error('Invalid format for data.data.suggestions. Type:', typeof suggestionsData);
        }
    } else {
        console.error('Invalid format for data.data.suggestions:', data.data && data.data.suggestions);
    }
}


function updateUIWithCounts() {
    // Update the counts displayed in the UI based on the current suggestions array
    if (ulElement) {
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        };
        for (let i = 0; i < suggestions.length; i++) {
            const suggestion = suggestions[i];
            const liElement = createLiElement(
                suggestion.user,
                suggestion.activity,
                suggestion.count || 0,
                i
            ); // Pass i to the createLiElement function
            ulElement.appendChild(liElement);
        }
    }
    suggestions.forEach((suggestion, i) => {
        const countSpan = document.querySelector(`.votes li:nth-child(${i + 1}) .vote-count`);
        if (countSpan) {
            countSpan.textContent = suggestion.count + '  ';
        } else {
            console.error(`Unable to find countSpan for suggestion at index ${i}`);
        }
    });
    
    // After updating the UI, refresh the most voted activity
    updateMostVotedActivity();
}
    
    const voteInstance = new Vote();
    updateMostVotedActivity();