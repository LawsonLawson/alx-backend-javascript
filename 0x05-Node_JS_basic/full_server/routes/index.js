import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to their corresponding handler functions in the Express application.
 *
 * @function mapRoutes
 * @param {Express} app - The Express application instance.
 *
 * This function binds the following routes:
 *
 * - `GET /` - Calls `AppController.getHomepage` to handle the root route.
 * - `GET /students` - Calls `StudentsController.getAllStudents` to handle requests for fetching all students.
 * - `GET /students/:major` - Calls `StudentsController.getAllStudentsByMajor` to handle requests for fetching students by their major.
 *
 *
 * @example
 * // In your main application file
 * import express from 'express';
 * import mapRoutes from './routes';
 * const app = express();
 * mapRoutes(app);
 * app.listen(3000);
 */
const mapRoutes = (app) => {
  /**
   * Route to serve the homepage.
   *
   * GET /
   * Calls the `getHomepage` method from the `AppController`.
   * This route returns a welcome message or other content for the homepage.
   */
  app.get('/', AppController.getHomepage);

  /**
   * Route to fetch all students.
   *
   * GET /students
   * Calls the `getAllStudents` method from the `StudentsController`.
   * This route returns information about all students in the database.
   */
  app.get('/students', StudentsController.getAllStudents);

  /**
   * Route to fetch students by major.
   *
   * GET /students/:major
   * Calls the `getAllStudentsByMajor` method from the `StudentsController`.
   * This route takes a `major` as a URL parameter and returns students who belong to that major.
   *
   * @param {String} major - The major (field of study) of the students to fetch.
   *
   * Example:
   * - `/students/CS` would fetch all students with a Computer Science major.
   */
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
