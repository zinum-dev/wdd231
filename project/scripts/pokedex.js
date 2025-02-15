import { findPokemonByName, displayPokemon } from './pokedex-module.js';

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

displayPokemon(Array.from({ length: 150 }, (_, i) => i + 1), 'pokemon-list');


const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchInputValue = document.querySelector('#search-input').value;
    console.log(searchInputValue);
    if (searchInputValue === '') {
        displayPokemon(Array.from({ length: 150 }, (_, i) => i + 1), 'pokemon-list');
        return;
    }
    const pokemon = await findPokemonByName(searchInputValue);
    console.log(pokemon);
    if (pokemon === null || pokemon.id > 150) {
        alert('Pokemon not found');
        return;
    }
    displayPokemon([pokemon.id], 'pokemon-list');
});

const reset = document.querySelector('#reset-pokedex');
reset.addEventListener('click', () => {
    displayPokemon(Array.from({ length: 150 }, (_, i) => i + 1), 'pokemon-list');
});
