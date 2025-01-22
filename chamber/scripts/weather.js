
const apiKey = '74a3e6e40e13045218cb7ff493ae9cc8'


export async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.error(error)
    }
}

export async function get5dayWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?cnt=17&lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.error(error)
    }
}

