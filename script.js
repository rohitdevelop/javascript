const form = document.getElementById('contactForm');
const button = document.getElementById('btn');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('massage');

form.addEventListener('submit', function(e) {
     e.preventDefault();
    form.reset(); // Clear all inputs
    alert('Form submitted successfully!');
});

button.addEventListener('click', function(e){
    console.log(fullname.value,email.value,text.value);    
})