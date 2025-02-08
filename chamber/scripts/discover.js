import { places } from "../data/discover.mjs";

const discoverSection = document.querySelector("#discover");

function renderPlaces(places) {

    places.forEach(place => {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");

        const placeImage = document.createElement("img");
        placeImage.src = `images/discover/${place.photo_url}`;
        placeImage.alt = place.name;
        placeImage.loading = "lazy";
        placeCard.appendChild(placeImage);

        const placeTitle = document.createElement("h2");
        placeTitle.textContent = place.name;
        placeCard.appendChild(placeTitle);

        const placeAddress = document.createElement("address");
        placeAddress.textContent = place.address;
        placeCard.appendChild(placeAddress);

        const placeDescription = document.createElement("p");
        placeDescription.textContent = place.description;
        placeCard.appendChild(placeDescription);

        const learnMoreButton = document.createElement("button");
        learnMoreButton.textContent = "Learn More";
        placeCard.appendChild(learnMoreButton);

        discoverSection.appendChild(placeCard);
    })

}


renderPlaces(places)

document.addEventListener("DOMContentLoaded", () => {
    const visit = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date();
    let message = "";

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentVisit - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        message = "Welcome! Let us know if you have any questions.";
    }
    localStorage.setItem("lastVisit", currentVisit);

    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    visit.appendChild(messageElement);
});
