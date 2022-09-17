const year1 = document.querySelector("#year1");
try {
    const options = {
        year: "numeric"
    };
    year1.textContent = new Date().toLocaleDateString("en-UK", options);
}
catch (e) {
    alert("Error with code or your browser does not support Locale (year)");
}

//get the last modified date
let datelastmodified = document.lastModified;
document.getElementById("portallastmodified").innerHTML = datelastmodified;