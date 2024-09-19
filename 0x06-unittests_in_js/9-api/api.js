/**
 * Payment System API.
 *
 * This module sets up a simple Express server that provides endpoints for a payment
 * system. It includes a welcome message and an endpoint to retrieve payment methods
 * based on a cart ID.
 */

const express = require('express'); // Import the Express framework

const app = express(); // Create an instance of an Express application
const PORT = 7865; // Define the port number for the server

/**
 * Root endpoint.
 *
 * This endpoint responds with a welcome message when accessed via a GET request to the root URL (/).
 */
app.get('/', (_, res) => {
  res.send('Welcome to the payment system'); // Send a welcome message as the response
});

/**
 * Cart endpoint.
 *
 * This endpoint retrieves payment methods for a specific cart based on its ID.
 * The ID must be a numeric value, validated using a regular expression in the route.
 *
 * @param {Object} req - The request object, which contains information about the incoming request.
 * @param {Object} res - The response object, which is used to send back the desired HTTP response.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extract the cart ID from the route parameters

  res.send(`Payment methods for cart ${id}`); // Send a response with the cart ID
});

/**
 * Start the server.
 *
 * This function makes the application listen for incoming requests on the specified port
 * and logs a message to the console indicating the server is running.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`); // Log the server URL to the console
});

// Export the Express app instance to make it available for importing in other modules
module.exports = app;
