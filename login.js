// login.js

// Listen for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Predefined correct credentials (For demonstration purposes only)
    var correctUsername = "user"; // Correct username
    var correctPassword = "password"; // Correct password

    // Check if the username and password match the correct credentials
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the index.html page on successful login
        window.location.href = "index.html";
    } else {
        // If login fails, show an alert message
        alert("Invalid username or password. Please try again.");
    }
});
