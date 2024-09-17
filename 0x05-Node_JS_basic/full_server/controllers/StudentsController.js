import readDatabase from '../utils';

/**
 * The list of supported majors.
 *
 * Only these majors are allowed to be queried in the `/students/:major` route.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 *
 * This controller manages requests related to student data, including retrieving
 * all students or students filtered by major.
 *
 * @author
 * Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class StudentsController {
  /**
   * Handles requests to retrieve a list of all students.
   *
   * This method reads student data from a CSV file (specified as a command-line argument)
   * and sends a response containing the total number of students and a breakdown by major.
   *
   * @param {Request} request - The HTTP request object.
   * @param {Response} response - The HTTP response object.
   *
   * @example
   * // Example usage in an Express app
   * app.get('/students', StudentsController.getAllStudents);
   */
  static getAllStudents (request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // Function to sort majors alphabetically, case-insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
          if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
          return 0;
        };

        // Add student counts and names to the response for each field (major)
        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Handles requests to retrieve students by a specific major.
   *
   * This method reads student data from a CSV file and filters the students based on the
   * provided `major` route parameter (only 'CS' and 'SWE' are valid majors). It returns
   * a list of student names within the requested major.
   *
   * @param {Request} request - The HTTP request object, which should include the `major` in its route parameters.
   * @param {Response} response - The HTTP response object.
   *
   * @example
   * // Example usage in an Express app
   * app.get('/students/:major', StudentsController.getAllStudentsByMajor);
   */
  static getAllStudentsByMajor (request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    // Check if the major parameter is valid (must be 'CS' or 'SWE')
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        // If students exist in the requested major, list them
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
