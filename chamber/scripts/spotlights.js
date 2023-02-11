const profile = document.getElementById('companies');

// should have done it this way
// while (spotlights.length > 3) {
//     spotlights.splice(Math.round(Math.random()*spotlights.length), 1)
//   };

async function getCompanyData() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    let filtereddata = data.filter((data) => {
        return data.membershiplevel == 'S' || data.membershiplevel == 'G';
    }    );

    let displayArray = getDisplayArray(filtereddata.length);

    randomarray = [];
    displayArray.forEach((profilecompanyno) => {
        randomarray.push(data[profilecompanyno])
    })
    displayProfiles(randomarray);
};

getCompanyData();

function getDisplayArray(spotlightEligible) {
    randarray = [];
     while (randarray.length < 3) {
        let myrando = Math.floor(Math.random() * spotlightEligible);
        if (!randarray.includes(myrando))
        {
            randarray.push(myrando);
        }   
        };
    return randarray
}

const displayProfiles = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h4');
        let website = document.createElement('a');
        let mobile = document.createElement('p');
        let image = document.createElement('img');



        card.setAttribute("class", "spotlight");
        name.textContent = `${company.companyname}`
        website.textContent = `${company.website}`
        // website.href = `${company.website}`
        website.href = `https://www.google.com`;
        mobile.textContent = `${company.mobile}`


        card.appendChild(name);
        card.appendChild(mobile);
        card.appendChild(website);

        
        profile.appendChild(card);        
    });
}