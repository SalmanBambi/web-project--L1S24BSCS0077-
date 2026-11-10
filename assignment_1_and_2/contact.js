// DOM Element Selection
const form = document.getElementById('contactForm');
const messageBox = document.getElementById('form-msg');
const emailInput = document.getElementById('email');

// Live Form Check / DOM Script Requirement
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    const emailValue = emailInput.value;
    
    // Small validation check
    if(emailValue.includes('@') && emailValue.includes('.')) {
        messageBox.textContent = "Thank you! Your message has been sent.";
        messageBox.className = "success-msg"; // Uses CSS class
        form.reset(); // Clear the form
    } else {
        messageBox.textContent = "Please enter a valid email address.";
        messageBox.className = "error-msg";
    }
});