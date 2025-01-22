import { getMembersData, createMembersCard } from './member.js';
import { getWeatherData, get5dayWeatherData } from './weather.js';

const display = document.querySelector('#company-spotlights');
const currentWeather = document.querySelector('#current-weather');
const weatherForecast = document.querySelector('#weather-forecast');



const url = 'https://zinum-dev.github.io/wdd231/chamber/data/members.json';
displayMembers(url);
displayWeather();
display5dayWeather();

async function displayMembers(url) {
    const data = await getMembersData(url);
    createMembersCard(data, display, 3, true);
}

async function displayWeather() {
    const lat = '37.09758311794881'
    const lon = '-113.57079622220847'
    const data = await getWeatherData(lat, lon);
    const main = await data.main;
    const sys = await data.sys;

    let weatherIcon = document.createElement('img');
    let temp = document.createElement('p');
    let description = document.createElement('p');
    let high = document.createElement('p');
    let low = document.createElement('p');
    let humidity = document.createElement('p');
    let sunrise = document.createElement('p');
    let sunset = document.createElement('p');

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    temp.innerHTML = `<strong>${main.temp}° C</strong>`;
    description.textContent = desc;
    high.textContent = `High: ${main.temp_max}°`;
    low.textContent = `Low: ${main.temp_min}°`;
    humidity.textContent = `Humidity: ${main.humidity}%`;
    const sunriseTime = getDateInTimezone(sys.sunrise, data.timezone);
    const sunsetTime = getDateInTimezone(sys.sunset, data.timezone);
    sunrise.textContent = `Sunrise: ${sunriseTime.toString()}`;
    sunset.textContent = `Sunset: ${sunsetTime.toString()}`;

    currentWeather.appendChild(weatherIcon)
    currentWeather.appendChild(temp)
    currentWeather.appendChild(description)
    currentWeather.appendChild(high)
    currentWeather.appendChild(low)
    currentWeather.appendChild(humidity)
    currentWeather.appendChild(sunrise)
    currentWeather.appendChild(sunset)
}



function getDateInTimezone(timestamp, timezoneOffset) {
    // Convert timestamp from seconds to milliseconds
    const date = new Date(timestamp * 1000);

    // Get the UTC time by adding the local timezone offset
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

    // Apply the target timezone offset
    const targetTime = utcTime + timezoneOffset * 1000;

    const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    return formatter.format(new Date(targetTime));
}



async function display5dayWeather() {
    const lat = '37.09758311794881'
    const lon = '-113.57079622220847'

    const data = await get5dayWeatherData(lat, lon);
    const list = [
        data.list[0],
        data.list[8],
        data.list[16]
    ]
    console.table(list)
    list.forEach((forecast) => {
        const date = new Date(forecast.dt * 1000);
        const today = new Date();
        const title = today.getDay() == date.getDay() ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'long' });
        let temp = document.createElement('p');
        temp.innerHTML = `${title}: <strong>${forecast.main.temp_max}° C</strong>`;
        weatherForecast.appendChild(temp)

    })




}