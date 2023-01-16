//get the copyright year
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear() + " Mona Area Chamber";

//get the last modified date
let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last modified: ${lastModified}`;