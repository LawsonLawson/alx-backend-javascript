import express from 'express'; // Import the Express framework
import mapRoutes from './routes'; // Import the route mapping function

const app = express(); // Create an Express application instance
const PORT = 1245; // Define the port number the server will listen on

/**
 * Maps the routes of the application to the provided Express instance.
 *
 * @function mapRoutes
 * @param {express.Application} app - The Express application instance where routes will be registered.
 *
 * This function is expected to handle all the necessary route definitions and middleware
 * configurations for the app. It is imported from an external 'routes' module.
 */
mapRoutes(app); // Register routes using the mapRoutes function

/**
 * Starts the Express server and listens for incoming requests on the specified port.
 *
 * Once the server starts, it will output a message indicating the port on which it is listening.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`); // Log a message when the server starts
});

export default app; // Export the Express app for external use (e.g., for testing)
module.exports = app; // CommonJS export for backward compatibility
