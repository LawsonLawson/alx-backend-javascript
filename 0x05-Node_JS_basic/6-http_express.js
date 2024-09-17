const express = require('express'); // Import the Express framework

const app = express(); // Create an Express application
const PORT = 1245; // Define the port on which the server will run

/**
 * Route handler for the root endpoint ('/').
 *
 * Responds with a simple greeting message: "Hello Holberton School!".
 *
 * @param {express.Request} req - The incoming HTTP request object (unused).
 * @param {express.Response} res - The HTTP response object used to send the response.
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!'); // Sends a text response to the client
});

/**
 * Starts the Express server and listens on the specified port (1245).
 *
 * Once the server is successfully running, it logs a message indicating that it is listening on the defined port.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`); // Logs the server's listening status
});

module.exports = app; // Export the Express application instance for external use
