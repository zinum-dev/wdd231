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

function getRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
        const num = Math.floor(Math.random() * 150) + 1;
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}


//- Example Pokémon Info: [Bulbasaur](https://pokeapi.co/api/v2/pokemon/1/)
//- Example Pokémon Image: ![Bulbasaur Image](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png)
async function getPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    console.log(data);
    return {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types
    };
}

async function displayRandomPokemon() {
    const randomNumbers = getRandomNumbers();
    const pokemonPromises = randomNumbers.map(id => getPokemonData(id));
    const pokemonData = await Promise.all(pokemonPromises);

    const featuredElement = document.getElementById('featured');
    featuredElement.innerHTML = '';

    pokemonData.forEach(pokemon => {
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = pokemon.name;

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;
        pokemonImage.loading = 'lazy';

        const pokemonTypes = document.createElement('p');
        console.log(pokemon);
        pokemon.types.forEach(typeInfo => {
            const typeSpan = document.createElement('span');
            typeSpan.textContent = typeInfo.type.name;
            const typeColor = types_color.find(t => t.type.toLowerCase() === typeInfo.type.name.toLowerCase()).color;
            typeSpan.style.backgroundColor = typeColor;
            typeSpan.classList.add('pokemon-type');

            pokemonTypes.appendChild(typeSpan);
        });
        pokemonElement.appendChild(pokemonName);
        pokemonElement.appendChild(pokemonImage);
        pokemonElement.appendChild(pokemonTypes);

        featuredElement.appendChild(pokemonElement);
    });
}

displayRandomPokemon();
setInterval(displayRandomPokemon, 5000);



const types_color = [
    {
        "type": "Normal",
        "color": "#A8A77A"
    },
    {
        "type": "Fire",
        "color": "#EE8130"
    },
    {
        "type": "Water",
        "color": "#6390F0"
    },
    {
        "type": "Electric",
        "color": "#F7D02C"
    },
    {
        "type": "Grass",
        "color": "#7AC74C"
    },
    {
        "type": "Ice",
        "color": "#96D9D6"
    },
    {
        "type": "Fighting",
        "color": "#C22E28"
    },
    {
        "type": "Poison",
        "color": "#A33EA1"
    },
    {
        "type": "Ground",
        "color": "#E2BF65"
    },
    {
        "type": "Flying",
        "color": "#A98FF3"
    },
    {
        "type": "Psychic",
        "color": "#F95587"
    },
    {
        "type": "Bug",
        "color": "#A6B91A"
    },
    {
        "type": "Rock",
        "color": "#B6A136"
    },
    {
        "type": "Ghost",
        "color": "#735797"
    },
    {
        "type": "Dragon",
        "color": "#6A7BAF"
    },
    {
        "type": "Dark",
        "color": "#705746"
    },
    {
        "type": "Steel",
        "color": "#B7B7CE"
    },
    {
        "type": "Fairy",
        "color": "#D685AD"
    }
]
