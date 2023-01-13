// // Store the selected elements that we are going to use. 
// const myMain = document.querySelector('main')
// //console.log(myMain)

// const darkbutton = document.querySelector('#dark');
// //console.log(darkbutton)
// // Add a simple arrow function that listens for the <li> hamburger button click event.
// // When clicked, the <ul class="navigation">'s class list toggle'
// darkbutton.addEventListener('click', () => {myMain.classList.toggle('godark')}, false);

// // What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
// const myCards = document.querySelector(".card")
const myCards = document.getElementsByClassName("card")
//console.log(myCards.length)
const myActivities = document.getElementsByClassName("anchors")
console.log(myActivities)


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        for(let x=0; x<myCards.length ; x++){
            myCards[x].style.background = "#000";
		    myCards[x].style.color = "#fff";
        }
        for(let x=0; x<myActivities.length ; x++){
            myActivities[x].style.color = "#FFC0CB";
        }
		modeButton.textContent = "light mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        for(let x=0; x<myCards.length ; x++){
            myCards[x].style.background = "#eee";
		    myCards[x].style.color = "#000";
        }
        for(let x=0; x<myActivities.length ; x++){
            myActivities[x].style.color = "#0000FF";
        }
		modeButton.textContent = "dark mode";
	}
});



















