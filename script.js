// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const country = form.elements['country'].value;

        // Simple validation
        if (!name || !email || !phone || !country) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, you can submit the form or send data to the server
        alert('Form submitted successfully!');

        // Optionally, reset the form
        form.reset();
    });
});