document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    let form = event.target;
    let formMessage = document.getElementById('formMessage');
    
    // Sending form data to Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            // Success feedback
            formMessage.textContent = "Thank you for your message! We will get back to you soon.";
            formMessage.style.display = "block";
            formMessage.style.color = "green";
            form.reset();  // Reset the form
        } else {
            // Error feedback
            formMessage.textContent = "There was an error sending your message. Please try again.";
            formMessage.style.display = "block";
            formMessage.style.color = "red";
        }
    }).catch(error => {
        // Network error handling
        formMessage.textContent = "There was a problem sending your message. Please check your internet connection and try again.";
        formMessage.style.display = "block";
        formMessage.style.color = "red";
    });
});
