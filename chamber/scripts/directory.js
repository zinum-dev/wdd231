const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector('#members');


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});


const url = 'https://zinum-dev.github.io/wdd231/chamber/data/members.json';
getMembersData(url)

async function getMembersData(url) {

    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data)
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let link = document.createElement('a');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');

        fullName.textContent = `${member.name}`;
        portrait.setAttribute('src', `images/${member.imageFileName}`);
        portrait.setAttribute('alt', `Image of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');

        phoneNumber.textContent = `${member.phoneNumber}`;
        address.textContent = `${member.address}`;
        link.textContent = 'Details';
        link.setAttribute('href', `${member.websiteURL}`);
        link.setAttribute('target', "_blank");


        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        if (member.websiteURL != '') {
            card.appendChild(link);
        }

        display.appendChild(card);
    });

}