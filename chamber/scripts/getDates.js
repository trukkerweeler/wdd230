//get the copyright year
document.querySelector('#©').textContent = new Date(Date.now()).getFullYear() + " Mona Area Chamber";

//get the last modified date
let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last modified: ${lastModified}`;







//get days since last
const lastvisited = document.querySelector('.lastvisited')
const lastdate = window.localStorage.getItem("last_visited");
if (lastdate == null || lastdate ==""){
    lastvisited.textContent = "0";
}
else {
    let rightnow = Date.now();
    let myDays = (rightnow - lastdate) /(1000 * 3600 * 24)
    lastvisited.textContent = Math.round(myDays);
}

localStorage.setItem("last_visited", Date.now())
