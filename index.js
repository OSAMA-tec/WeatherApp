
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ac4b2f3f0msh95e8dfffddb907fp17f92ajsn6dc028f9a477',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	}
};
// function searchCity(){
// 	const Usercity=document.getElementById('city-input').value;
// }
// fetch(`https://bestweather.p.rapidapi.com/weather/${Usercity},Pakistan/today?unitGroup=us`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
	/**
 * Weather App
 */

// // API_KEY for maps api
// let API_KEY = "2ac4b2f3f0msh95e8dfffddb907fp17f92ajsn6dc028f9a477";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const weatherPromise = fetch(`https://bestweather.p.rapidapi.com/weather/${city},Pakistan/today?unitGroup=us`, options)
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.address;
  document.getElementById("weather-type").innerText = weatherData.currentConditions.conditions;
  const calculate=weatherData.currentConditions.temp;
  const final=(calculate-32)*.5556;
  document.getElementById("temp").innerText = Math.floor(final);
  document.getElementById("cloudcover").innerText = weatherData.currentConditions.cloudcover;
  document.getElementById("humidity").innerText = weatherData.currentConditions.humidity;
}

