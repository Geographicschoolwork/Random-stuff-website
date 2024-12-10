// Array of "discoveries" (could be random facts, quotes, images, etc.)
const discoveries = [
    "Did you know? Honey never spoils!",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A group of flamingos is called a 'flamboyance'.",
    "In Japan, there are more pets than children.",
    "Bananas are berries, but strawberries aren't!",
    "There's a species of jellyfish that is biologically immortal.",
    "The longest recorded flight of a chicken is 13 seconds."
];

// Countdown timer for 1 hour of exploration
let timeLeft = 3600;  // 60 minutes * 60 seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').innerHTML = "Time's up! Refresh to continue exploring.";
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('countdown').innerHTML = `Time remaining: ${minutes}m ${seconds}s`;
            timeLeft--;
        }
    }, 1000);
}

// Function to generate new content every time
function generateContent() {
    const randomIndex = Math.floor(Math.random() * discoveries.length);
    document.getElementById('discovery-box').innerHTML = discoveries[randomIndex];
}

// Start timer and provide initial discovery on page load
startTimer();
generateContent();