/* Gloabal Variables */ 

// opneWeatherLink
const opneWeatherMapLink = 'https://api.openweathermap.org/data/2.5/weather?zip='
const degreesCelsius = '&units=metric';

// Personal API Key for OpenWeatherMap API
const API_KEY = '&appid=2550c62ec56892ef3bf11c0ba456d346';


/**
 * async Functions - GET, POST Requests to the Server *
 */

// GET request to the OpenWeatherMap API.
const getWeatherData = async (baseURL, zipCode, APIKey) => {
   const openWeatherResponse = await fetch(baseURL + zipCode + degreesCelsius + APIKey);
   try {
      const weatherData = await openWeatherResponse.json();
      return weatherData;
      console.log(weatherData);
   } catch(error) {
      console.log('error fetching data from open weather', error);
   }
}
 
// POST request to the server to add the openWeather data, as well as data entered by the user.
const postWeatherData = async (path = '' , postDataObject = {}) => {
   const serverResponse = await fetch(path, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postDataObject),
   });
   try {
      const fetchedData = await serverResponse.json();
      // console.log('this is the new data:', fetchedData);
      return fetchedData;
   } catch(error) {
      console.log('error posting new data to the server:',error);
   }
}

// Update the UI Dynamically
const updateUI = async () => {
   const serverResponse = await fetch('/GetAllData');
   try {
      const fetchedData = await serverResponse.json();
      console.log('successfully retrieved all weather data for UI:', fetchedData);

      // update UI with retrieved weather data 
      document.getElementById('temp').innerText = `Temperature: ${fetchedData.temperature}`;
      document.getElementById('content').innerText = fetchedData.userFeelings;
      document.getElementById('date').innerText = fetchedData.date;
   } catch(error) {
      console.log('could not retrieve all weather data for UI:', error);
   }
}


// Start the App. Yay!

// Event listener for the generate botton, to statr the whole application.
document.getElementById('generate').addEventListener('click', (event) => {

   /* HTML Elements Variables */

   // user intered zip code
   const userInteredZipCode = document.getElementById('zip').value;
   // user intered feeling
   const userFeeling = document.getElementById('feelings').value;

   /* Create a new date instance dynamically with JS */
   const date = new Date();
   let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();

   /* GET - POST Requests, Async Functions */

   // GET req openWeatherMapAIP
   getWeatherData(opneWeatherMapLink, userInteredZipCode, API_KEY)
   // POST req to the server's endpoint with new weather/user data
   .then( (weatherData) => {
      postWeatherData('/addWeatherData', {
         temp: weatherData.main.temp,
         userFeeling: userFeeling,
         date: newDate,
      });
   })
   // daynamically update UI with new data
   .then(updateUI)
   
});

