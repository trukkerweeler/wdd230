const directory = document.querySelector("#directory");

async function getCompanyData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    // console.table(data);
    displayProfiles(data);
};

getCompanyData();

const displayProfiles = (profiles) =>{
    profiles.forEach((profile) => {
        console.log(profile);
        let card = document.createElement('section');
        let image = document.createElement("img");
        let mobile = document.createElement("p");
        // let name = document.createElement("h3");
        let website = document.createElement("a");
        let fulladdress = document.createElement("p");

        
        // name.textContent = profile["companyname"];
        website.textContent = profile["website"];
        website.href = profile["website"];
        mobile.textContent = profile.mobile;
        fulladdress.textContent = profile.address[0]["street"];
        image.src = profile["imagefile"];
        

        card.appendChild(image);
        card.appendChild(fulladdress);
        card.appendChild(mobile);
        card.appendChild(website);

        directory.appendChild(card);
    });
};