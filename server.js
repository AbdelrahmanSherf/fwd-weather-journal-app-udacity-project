// Empty JS object to act as endpoint for all routes
allWeatherData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const cros = require('cors');
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cros());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const serverPort = 4000;
app.listen(serverPort, () => {
   console.log(`server is running on port: http://localhost:${serverPort}`);
});

/* Initialize all route with a callback function */
// GET Response with the GetAllData Object 
app.get('/GetAllData', (req, res) => {
   res.send(allWeatherData);  
   console.log('GET request for all data, successfully made');
});

// POST request to add incoming data to allWeatherData Object 
app.post('/addWeatherData', (req, res) => {
   allWeatherData['city']         = req.body.city;
   allWeatherData['temperature']  = req.body.temp;
   allWeatherData['userFeelings'] = req.body.userFeeling; 
   allWeatherData['date']         = req.body.date;
});

