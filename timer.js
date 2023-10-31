// Function to start the countdown timer
function startCountdown() {
    let seconds = 60; // Set the initial time in seconds

    // Display the initial time
    updateTimerDisplay(seconds);

    const countdownInterval = setInterval(function () {
        seconds--; // Decrement the time by 1 second

        if (seconds >= 0) {
            updateTimerDisplay(seconds); // Update the display
        } else {
            clearInterval(countdownInterval); // Clear the interval when the timer reaches 0
            navigateToNewPage();
        }
    }, 1000); // Update the timer every 1000 milliseconds (1 second)
}

// Function to update the timer display
function updateTimerDisplay(seconds) {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = seconds + " Seconds Left!";
}

function navigateToNewPage() {
    const currentURL = window.location.href;

    // Determine the new page based on the current page
    let newPage = 'index.html';

    if (currentURL.endsWith('Suggestion_phase.html')) {
        newPage = 'voting.html';
    } else if (currentURL.endsWith('voting.html')) {
        newPage = 'results.html';
    } // Add more conditions as needed for different pages

    // Load the determined new page
    window.location.href = newPage;
}

// Start the countdown when the page loads
window.addEventListener("load", startCountdown);// 