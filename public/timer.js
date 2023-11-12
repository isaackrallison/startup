// Function to start the countdown timer
function startCountdown() {
    let seconds; // Declare the variable outside the if-else block

    // Check if the timer is in local storage
    if (localStorage.getItem('timer')) {
        // Timer is present in local storage
    
        // Retrieve the timer value from local storage
        const storedTimerString = localStorage.getItem('timer');
    
        // Parse the stored string back to an object
        const storedTimerObject = JSON.parse(storedTimerString);
    
        // Access the timer value
        seconds = storedTimerObject.seconds; // Use the same variable name
        if (seconds <= 0) {
            seconds = 60
        }
        console.log("Timer found in local storage:", seconds);
        // Do something with the timer value, e.g., start the timer using storedTimerValue
    } else {
        // Timer is not present in local storage
        console.log("No timer found in local storage");
        seconds = 60;
        // You can handle the case where there's no timer in local storage
    }

    // Display the initial time
    updateTimerDisplay(seconds);

    const countdownInterval = setInterval(function () {
        seconds--; // Decrement the time by 1 second

        // Convert the timer value to a string before storing
        const timerString = JSON.stringify({ seconds });

        // Store the timer string in local storage
        localStorage.setItem('timer', timerString);

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
window.addEventListener("load", startCountdown);
