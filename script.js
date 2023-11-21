function validateForm(event) {
    event.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !username || !password) {
        alert('All fields are required');
        return;
    }

    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return;
    }

    // Password strength validation (you can customize this based on your requirements)
    if (password.length < 8) {
        alert('Password should be at least 8 characters long');
        return;
    }

    // If all validations pass, you can submit the form or perform additional actions
    alert('Registration successful!');
    document.getElementById('registrationForm').reset(); // Reset the form
}
