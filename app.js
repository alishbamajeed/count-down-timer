let countdownInterval;
let totalTimeInSeconds;

function startTimer() {
    // Clear any existing timer
    clearInterval(countdownInterval);

    // Get the user-defined time in minutes
    const minutesInput = document.getElementById("minutesInput").value;
    totalTimeInSeconds = minutesInput * 60;
    let timeInSeconds = totalTimeInSeconds;

    // Update the countdown every second
    countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        // Display minutes and seconds
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        // Calculate progress for the circle animation
        const progress = (timeInSeconds / totalTimeInSeconds) * 440;
        document.getElementById("progress-circle").style.strokeDashoffset = progress;

        // Countdown finished
        if (timeInSeconds <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }

        timeInSeconds--;
    }, 1000);
}
