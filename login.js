// Get references to DOM elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginToggle = document.getElementById('loginToggle');
const registerToggle = document.getElementById('registerToggle');

// Function to toggle between login and register forms
function toggleForms(showLogin) {
    if (showLogin) {
        loginForm.style.display = 'block'; // Show login form
        registerForm.style.display = 'none'; // Hide register form
        loginToggle.classList.add('active'); // Highlight login toggle
        registerToggle.classList.remove('active'); // Remove highlight from register toggle
    } else {
        loginForm.style.display = 'none'; // Hide login form
        registerForm.style.display = 'block'; // Show register form
        registerToggle.classList.add('active'); // Highlight register toggle
        loginToggle.classList.remove('active'); // Remove highlight from login toggle
    }
}

// Add event listeners for the toggle buttons
loginToggle.addEventListener('click', () => toggleForms(true));
registerToggle.addEventListener('click', () => toggleForms(false));

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    let error = formGroup.querySelector('.error');
    if (!error) {
        error = document.createElement('div');
        error.className = 'error';
        formGroup.appendChild(error);
    }
    error.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    if (error) {
        error.textContent = '';
    }
}

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameEmail = document.getElementById('loginUsernameEmail');
    const password = document.getElementById('loginPassword');
    let isValid = true;

    clearError(usernameEmail);
    clearError(password);

    if (usernameEmail.value.trim() === '') {
        showError(usernameEmail, 'Username or Email is required');
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
    }

    if (isValid) {
        console.log('Login form submitted', {
            usernameEmail: usernameEmail.value,
            password: password.value
        });
        // Here you would typically send the data to your server
    }
});

// Handle register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phoneNumber = document.getElementById('phoneNumber');
    const otp = document.getElementById('otp');
    const terms = document.getElementById('terms');
    let isValid = true;

    clearError(fullName);
    clearError(email);
    clearError(password);
    clearError(confirmPassword);
    clearError(phoneNumber);
    clearError(otp);
    clearError(terms);

    if (fullName.value.trim() === '') {
        showError(fullName, 'Full name is required');
        isValid = false;
    }

    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Email is invalid');
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    if (phoneNumber.value.trim() === '') {
        showError(phoneNumber, 'Phone number is required');
        isValid = false;
    }

    if (otp.value.trim() === '') {
        showError(otp, 'OTP is required');
        isValid = false;
    }

    if (!terms.checked) {
        showError(terms, 'You must accept the terms and conditions');
        isValid = false;
    }

    if (isValid) {
        console.log('Registration form submitted', {
            fullName: fullName.value,
            email: email.value,
            password: password.value,
            phoneNumber: phoneNumber.value,
            otp: otp.value
        });
        // Here you would typically send the data to your server
    }
});
