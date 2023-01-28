// Store the selected elements that we are going to use. 
const mybtn = document.querySelector('header button')
const mynav = document.querySelector('nav');
const myjob = document.getElementById('job');
var pattern = /^[a-zA-Z -]*$/;

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
mybtn.addEventListener('click', () => {
    mybtn.classList.toggle('open');
    mynav.classList.toggle('open');
});

myjob.addEventListener("focusout",validateJob);

function validateJob(){
    if (pattern.test(myjob.value) && (myjob.value.length > 6)) {
        myjob.style.backgroundColor = "gray";
    } else {
        myjob.style.borderLeftColor = "#ffff00";
        myjob.style.borderLeftWidth = "10px";
    }
}






