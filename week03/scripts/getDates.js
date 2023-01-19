//get the copyright year
//document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

//get the last modified date
let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last modified: ${lastModified}`;