/* Global Variables */

// const { response } = require("express");

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// console.log("what is this!!!?", d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear());




// opneWeatherLink
const opneWeatherMapLink = 'https://api.openweathermap.org/data/2.5/weather?zip='
const degreesCelsius = '&units=metric';
// Personal API Key for OpenWeatherMap API
const API_KEY = '&appid=2550c62ec56892ef3bf11c0ba456d346';



const Sacramento_California = '94203';
// const fullURLTEST = opneWeatherLinkMap + Sacramento_California + API_KEY;




/**
 * async Functions - GET, POST Requests to the Server *
 */
// GET request to the OpenWeatherMap API.
const getWeatherData = async (baseURL, userZipCode, APIKey) => {
   const openWeatherResponse = await fetch(baseURL + userZipCode + degreesCelsius + APIKey);
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
   const userFeeling = document.getElementById('feelings').innerText ='lkjfa';
   const serverResponse = await fetch('/GetAllData');
   try {
      const fetchedData = await serverResponse.json();
      console.log('successfully retrieved all weather data for UI:', fetchedData);

      // update UI with retrieved weather data 
      document.getElementById('temp').innerText = fetchedData.temperature;
      document.getElementById('content').innerText = fetchedData.userFeeling;
      document.getElementById('date').innerText = fetchedData.date;
   } catch(error) {
      console.log('could not retrieve all weather data for UI:', error);
   }
}

   
// user's feelings input
// const userFeeling = document.getElementById('feelings').value;


postWeatherData('/addWeatherData', {
   temp: 'some degree',
   date: 'some date',
   userFeeling: 'some feelings'
}).then(postWeatherData('/addweatherdata', {
   temp: 'some degree 2',
   date: 'some date 2',
   userFeeling: 'some feelings 2'
}));
updateUI('/GetAllData');





// // Update the UI Dynamically
// const updateUI = async (newTemp, newDate, newContent) => {
//    const temperature = document.getElementById('temp').innerText = newTemp;
//    const data = document.getElementById('date').innerText = newDate;
//    const userInput = document.getElementById('content').innerText = newContent;
// }

// // debugging
// document.getElementById('generate').addEventListener('click', (event) => {
//    updateUI('thiss new temp', 'thiss new data', 'thiss new content');
// });







// TODO: final requsets and DONE!!
// getWeatherData()
// .then(postWeatherData())
// .then(updateUI());








// document.body.addEventListener('click', () => {
//    postWeatherData('/addUserData', postDataObject = {
//       temperature: 'some degree',
//       data: 'some data',
//       userResponse: userFeeling,
//    });
// });

// Event listener for the generate botton, with a callback.
// document.getElementById('generate').addEventListener('click', (event) => {
//    // user's intered zip code
//    const userZipCodeInput = document.getElementById('zip').value;
//    console.log(`user intered: ${userZipCodeInput}`);
//    console.log(getWeatherData(opneWeatherMapLink, userZipCodeInput, API_KEY));
// });






// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */