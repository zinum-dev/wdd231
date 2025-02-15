import { getRandomNumbers, displayPokemon } from './pokedex-module.js';

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


let year = new Date().getFullYear();
document.getElementById(
    "currentyear"
).textContent = `${year}`;


document.getElementById('join-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('thanks-modal').showModal();

});



document.querySelector('.closeModal').addEventListener('click', function () {
    document.getElementById('thanks-modal').close();
});
