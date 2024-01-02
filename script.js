const locationForm = document.querySelector(".location-form");

async function getWeatherInfo(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4e6946106b3e4ff889b11233240201&q=${location}`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    throw error;
  }
}

async function currentLocation(e) {
  e.preventDefault();
  const location = document.querySelector(".location-input").value;
  try {
    const locationInfo = await getWeatherInfo(location);
    console.log(locationInfo);
  } catch (error) {
    console.log("Error getting weather info", error);
  }
}

locationForm.addEventListener("submit", currentLocation);
