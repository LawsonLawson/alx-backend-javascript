/**
 * Contains miscellaneous route handlers for the application.
 *
 * This controller is primarily responsible for managing non-student-related
 * requests, such as rendering the homepage.
 */
class AppController {
  /**
   * Handles the request to the homepage.
   *
   * This method is used to respond to HTTP `GET /` requests with a simple message.
   * It sends a status code of 200 to indicate success and responds with
   * a text message: "Hello Holberton School!".
   *
   * @param {Request} request - The HTTP request object.
   * @param {Response} response - The HTTP response object.
   *
   * @example
   * // Example usage in an Express app
   * app.get('/', AppController.getHomepage);
   */
  static getHomepage (request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
