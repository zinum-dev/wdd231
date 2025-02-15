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


setInterval(() => displayPokemon(getRandomNumbers(5), 'featured'), 5000);




