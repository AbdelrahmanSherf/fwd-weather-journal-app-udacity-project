// // Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Require Express to run server and routes

// // Start up an instance of app

// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance

// // Initialize the main project folder
// app.use(express.static('website'));


// // Setup Server





// Setup empty JS object to act as endpoint for all routes
const projectData = {
   temperature: 40,
   data: '',
   userResponse: '',
};

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
   // Callback to debug
   console.log(`server running on port: http://localhost:${serverPort}`);
});

/* Initialize all route with a callback function */
// Respond with JS object when a GET request is made to the alldata route
app.get('/GetAllData', (req, res) => {
   res.send(projectData);
   console.log('made a GET route requestfor all data');
});


/* test */ const addData = [];
// POST route adds incoming data to projectData 
   // The POST route should anticipate receiving three pieces of data from the request body
         // temperature
         // date
         // user response
   // Make sure your POST route is setup to add each of these values with a key to projectData.
app.post('/addUserData', (req, res) => {
   console.log(req.body);
   addData.push(req.body);
});

// Callback function to complete GET '/all'

// Post Route
  
