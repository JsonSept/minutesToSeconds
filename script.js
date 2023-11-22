function convertMinutesToSeconds() {
    // Get the input value
    let minutes = parseFloat(document.getElementById('minutesInput').value);

    // Check if the input is a valid number
    if (isNaN(minutes)) {
        alert("Please enter a valid number for minutes.");
        return;
    }

    // Convert minutes to seconds
    let seconds = minutes * 60;

    // Display the result in the output field
    document.getElementById('secondsOutput').value = seconds.toFixed(2);
}