document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for getting in touch! We will get back to you soon.');
  });
  
// Target the login form
const loginForm = document.getElementById('loginForm');

// Handle login submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      localStorage.setItem('loggedIn', true); // Store login status
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password.');
    }
  });
  
  // Check login status on page load
  if (localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html'; // Redirect if already logged in
  }
  