const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    form.reset(); // Clear all inputs
    alert('Form submitted successfully!');
});
