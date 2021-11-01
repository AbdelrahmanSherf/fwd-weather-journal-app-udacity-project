/* Global Variables */

// const { response } = require("express");

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();





// opneWeatherLink
const opneWeatherLink = 'https://api.openweathermap.org/data/2.5/weather?zip='
const degreesCelsius = '&units=metric';
// Personal API Key for OpenWeatherMap API
const API_KEY = '&appid=2550c62ec56892ef3bf11c0ba456d346';

const Sacramento_California = '94203';
const fullURLTEST = opneWeatherLink + Sacramento_California + API_KEY;

// async function to make a GET request to the OpenWeatherMap API.
const getWeatherData = async (baseURL, userZipCode, APIKey) => {
   const openWeatherResponse = await fetch(baseURL + userZipCode + degreesCelsius + APIKey);
   try {
      const data = await openWeatherResponse.json();
      console.log(data);
   } catch(error) {
      console.log('error fetching data from open weather', error);
   }
}
// Event listener for the generate botton, with a callback.
document.getElementById('generate').addEventListener('click', (event) => {
   // user's intered zip code
   const userZipCodeInput = document.getElementById('zip').value;
   console.log(`user intered: ${userZipCodeInput}`);

   console.log(getWeatherData(opneWeatherLink, userZipCodeInput, API_KEY));
});


// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */