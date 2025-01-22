const currentTemp = document.querySelector("#current-temp")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector("figcaption")


const lat = '49.75193452100748'
const lon = '6.645939143453004'
const apiKey = '74a3e6e40e13045218cb7ff493ae9cc8'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        console.log(response)
        if (response.status == 200) {
            const data = await response.json();
            console.log(data)
            displayResults(data)
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url);
