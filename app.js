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

// Function to fetch weather data from worker
async function fetchWeatherData(location) {
    const url = `https://highstorm.max-yushkevich.workers.dev/?location=${encodeURIComponent(location)}`;

    const response = await fetch(url);
    const data = await response.json();
    updateUI(data);
    console.log(data);
}

// Function to update the UI with the fetched data
function updateUI(data) {
    document.getElementById('location-name').textContent = `${data.name}`;
    document.getElementById('location-temperature').textContent = `${data.main.temp}° Celsius`;
    document.getElementById('location-wind').textContent = `${data.wind.speed} km/h`;
}
fetchWeatherData().catch((error) => console.error('Error:', error));
