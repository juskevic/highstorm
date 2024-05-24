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
    document.getElementById('location-sunrise').textContent = unixToTime(data.sys.sunrise);
    document.getElementById('location-sunset'). textContent = unixToTime(data.sys.sunset)
}
fetchWeatherData().catch((error) => console.error('Error:', error));


/**
 * Converts a Unix timestamp to a formatted time string.
 *
 * @param {number} unix_timestamp - The Unix timestamp to convert.
 * @return {string} The formatted time string in 'HH:MM:SS' format.
 */
function unixToTime(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    // Will display time in 'HH:MM:SS' format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}