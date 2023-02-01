let regexp = /([^\/]+$)/i
const activities = document.querySelector("#activities");
const ghbaseurl = "https://trukkerweeler.github.io/wdd230/";
const cpbaseurl = "https://codepen.io/trukkerweeler/pen/";

async function getActivitiesData () {
    const response = await fetch("activities.json")
    const data = await response.json();
    // console.log(data);
    createHTML(data);
}

getActivitiesData();

const createHTML = (data) => {
    let myWeeks = ["week01","week02","week03","week04","week05"];

    myWeeks.forEach((week) =>{
        //console.log(data[week]);
        let myList = document.createElement("li");

        myList.textContent = `Week ${week.charAt(week.length - 1)}:`;
        let activityList = data[week];
        console.log(activityList.length)
        let activityCount = 1;
        activityList.forEach((activity) => {
            console.log(activity);
            let myAnchor = document.createElement("a");
            myAnchor.href = activity;

            const matches = regexp.exec(activity)[0];
            if (activityCount == activityList.length) {
                myAnchor.textContent = matches;
            } else {
            myAnchor.textContent = matches + "";
            activityCount++;
            }

            myList.appendChild(myAnchor);
            activities.appendChild(myList)
        });
        
        // activities.appendChild(myList)
    });


}