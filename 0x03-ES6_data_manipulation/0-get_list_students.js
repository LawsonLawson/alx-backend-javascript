/**
 * Retrieves a predefined list of student objects.
 *
 * This function returns an array of student objects, each containing an `id`,
 * and `location`. The list is static and currently includes three students.
 *
 * @function
 * @name getListStudents
 * @returns {Array<Object>} An array of student objects.
 * @property {Number} id - The unique identifier of the student.
 * @property {String} firstName - The first name of the student.
 * @property {String} location - The location of the student.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
