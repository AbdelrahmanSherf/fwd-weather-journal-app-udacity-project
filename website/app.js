/* Global Variables */

// const { response } = require("express");

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();





// opneWeatherLink
const opneWeatherLink = 'https://api.openweathermap.org/data/2.5/weather?zip='
// Personal API Key for OpenWeatherMap API
const API_KEY = '&appid=2550c62ec56892ef3bf11c0ba456d346';
// user's intered zip code
const Sacramento_California = '94203';
const fullURLTEST = opneWeatherLink + Sacramento_California + API_KEY;

// async function to make a GET request to the OpenWeatherMap API.
const getWeatherData = async (url) => {
   const res = await fetch(url);

   try {
      const data = await res.json();
      console.log(data);
   } catch(error) {
      console.log('error fetching data from open weather', error);
   }
}
getWeatherData(fullURLTEST);


// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */