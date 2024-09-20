/**
 * Payment System API.
 *
 * This module sets up an Express server that provides several endpoints for the payment
 * system, including a welcome message, payment methods retrieval, login functionality,
 * and available payment methods information.
 */

const express = require('express'); // Import the Express framework

const app = express(); // Create an instance of an Express application
const PORT = 7865; // Define the port number for the server

// Middleware to parse incoming JSON request bodies
app.use(express.json());

/**
 * Root endpoint.
 *
 * This endpoint responds with a welcome message when accessed via a GET request to the root URL (/).
 *
 * @param {Object} _req - The request object, representing the incoming HTTP request.
 * @param {Object} res - The response object, used to send the desired HTTP response.
 */
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system'); // Send a welcome message as the response
});

/**
 * Cart endpoint.
 *
 * This endpoint retrieves payment methods for a specific cart based on its ID.
 * The ID must be a numeric value, validated using a regular expression in the route.
 *
 * @param {Object} req - The request object, representing the incoming HTTP request.
 * @param {Object} res - The response object, used to send the desired HTTP response.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extract the cart ID from the route parameters

  // Send a response with the cart ID, indicating payment methods for the cart
  res.send(`Payment methods for cart ${id}`);
});

/**
 * Available Payments endpoint.
 *
 * This endpoint provides information about available payment methods.
 * It responds with a JSON object indicating whether credit cards and PayPal are accepted.
 *
 * @param {Object} _req - The request object, representing the incoming HTTP request.
 * @param {Object} res - The response object, used to send the desired HTTP response.
 */
app.get('/available_payments', (_req, res) => {
  // Send an object as a JSON response indicating available payment methods
  res.json({
    payment_methods: {
      credit_cards: true, // Credit cards are available
      paypal: false // PayPal is not available
    }
  });
});

/**
 * Login endpoint.
 *
 * This endpoint allows users to "log in" by providing their username in the request body.
 * It responds with a personalized welcome message.
 *
 * @param {Object} req - The request object, representing the incoming HTTP request.
 * @param {Object} res - The response object, used to send the desired HTTP response.
 */
app.post('/login', (req, res) => {
  let username = ''; // Initialize an empty username

  // Check if the request body exists and contains a username
  if (req.body) {
    username = req.body.userName; // Extract the username from the request body
  }

  // Send a personalized welcome message addressed to the user
  res.send(`Welcome ${username}`);
});

/**
 * Start the server.
 *
 * This function makes the application listen for incoming requests on the specified port
 * and logs a message to the console indicating that the server is running.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`); // Log the server URL to the console
});

module.exports = app; // Export the Express application instance for use in other modules
