/*
  Import the 'express' module.
  'express' is a lightweight web application framework used for building APIs and web applications in Node.js.
*/
const express = require('express');

/*
  Create an instance of an Express application.
  This 'app' object is used to define routes and middleware.
*/
const app = express();

/*
  Define the port number on which the server will listen.
  In this case, the server will run on port 7865.
*/
const PORT = 7865;

/*
  Define a route for HTTP GET requests to the root URL ('/').
  The callback function takes two parameters:
  - The first parameter (usually 'req') represents the incoming request object. Here, it is ignored using '_'.
  - The second parameter ('res') represents the response object used to send data back to the client.
  When a GET request is made to the root URL, the server responds with the string 'Welcome to the payment system'.
*/
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

/*
  Start the server and make it listen on the specified port (7865).
  The callback function runs when the server starts successfully.
  It logs a message to the console indicating that the API is available on the specified port.
*/
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

/*
  Export the 'app' object so it can be imported and used in other files.
  This is useful for testing and modularizing the code.
*/
module.exports = app;
