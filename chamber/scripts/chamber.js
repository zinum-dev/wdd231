const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});


let year = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
oLastModif = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(oLastModif);


document.getElementById(
  "currentyear"
).textContent = `${year}`;
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${oLastModif}`;
