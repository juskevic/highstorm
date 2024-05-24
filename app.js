// Stop ppl from selecting text
const style = document.createElement('style');

style.innerHTML = `
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}`;

document.head.appendChild(style);

/**
 * Fetches weather data for a given location.
 *
 * @param {string} location - The location for which to fetch weather data.
 * @return {Promise<void>} - A promise that resolves with the fetched weather data.
 */
async function fetchWeatherData(location) {
    const url = `https://highstorm.max-yushkevich.workers.dev/?location=${encodeURIComponent(location)}`;

    const response = await fetch(url);
    const data = await response.json();
    updateUI(data);
    console.log(data);
}

function updateUI(data) {
    document.getElementById('location-name').textContent = `${data.name} (${data.sys.country})`;
    document.getElementById('location-temperature').textContent = `${data.main.temp}° C`;
    document.getElementById('location-wind').textContent = `${data.wind.speed} km/h`;
    document.getElementById('location-humidity').textContent = `${data.main.humidity} %`;
    document.getElementById('location-clouds').textContent = `${data.clouds.all} %`
}
fetchWeatherData().catch((error) => console.error('Error:', error));
