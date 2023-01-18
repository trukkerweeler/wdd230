// Store the selected elements that we are going to use. 
const mybtn = document.querySelector('header button')
const mynav = document.querySelector('nav');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
mybtn.addEventListener('click', () => {
    mybtn.classList.toggle('open')
    mynav.classList.toggle('open')
});

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 







