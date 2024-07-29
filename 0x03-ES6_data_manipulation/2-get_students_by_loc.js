/**
 * Retrives students from a given location.
 *
 * This function accepts an array of student objects and a city name,
 * and returns an array containing only the students who are located
 * in the specified city. If the input is not an array, it returns an
 * empty array.
 *
 * @function
 * @name getStudentByLocation
 * @param {Array<Object>} students - The list of student objects.
 * @param {Number} students[].id - The unique identifier of the student.
 * @param {String} students[].firstname - The first name of the student.
 * @param {String} students[].location - The location of the student.
 * @param {String} city - The name of the city to filter student by.
 * @returns {Array<Object>} An array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
