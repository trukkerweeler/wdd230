//Get todays date
let rightnow = Date.now();

//get days since last
const lastvisited = document.querySelector('.lastvisited')
const lastdate = window.localStorage.getItem("last_visited");
if (lastdate == null || lastdate ==""){
    lastvisited.textContent = "0";
}
else {
    let myDays = (rightnow - lastdate) /(1000 * 3600 * 24)
    lastvisited.textContent = Math.round(myDays);
}

localStorage.setItem("last_visited", Date.now())
