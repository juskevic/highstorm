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

// Function to fetch weather data from your worker
async function fetchWeatherData() {
    const response = await fetch('https://highstorm.max-yushkevich.workers.dev/');
    const data = await response.json();
    // Update the UI with the fetched data
    updateUI(data);
}

// Function to update the UI with the fetched data
function updateUI(data) {
    document.getElementById('location-temperature').textContent = `${data.temperature}° Celsius`;
    document.getElementById('location-wind').textContent = `${data.windSpeed} km/h ${data.windDirection}`;
}
fetchWeatherData();
