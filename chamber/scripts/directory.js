import { getMembersData, createMembersCard } from './member.js';

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
displayMembers(url);

async function displayMembers(url) {
    const data = await getMembersData(url);
    createMembersCard(data, display);
}
