const display = document.querySelector('#members');

export async function getMembersData(url) {

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const createMembersCard = (members, display, size = 100) => {
    for (let index = 0; index < members.length && index < size; index++) {
        const member = members[index];
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
        portrait.setAttribute('width', '150');
        portrait.setAttribute('heigth', '150');

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
    }

}