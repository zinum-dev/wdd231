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

