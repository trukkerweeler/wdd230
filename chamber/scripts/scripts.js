// Store the selected elements that we are going to use. 
const mybtn = document.querySelector('header button')
const mynav = document.querySelector('nav');
const myjob = document.getElementById('job');
// var pattern = /^[a-zA-Z -]{5,12}$/;
var pattern = /^([a-zA-Z0-9]|[^a-zA-Z\d\s:]|[a-zA-Z0-9]){5,13}$/;

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
mybtn.addEventListener('click', () => {
    mybtn.classList.toggle('open');
    mynav.classList.toggle('open');
});