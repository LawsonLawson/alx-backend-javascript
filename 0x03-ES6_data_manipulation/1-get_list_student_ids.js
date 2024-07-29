/**
 * Retrieves the IDs from a list of student objects.
 *
 * This function accepts an array of students objects and returns an array
 * containing the IDs of those students. If the input is not an array, it
 * returns and empty array.
 *
 * @function
 * @name getListStudentIds
 * @param {Array<Object>} students - The list of student objects.
 * @param {Number} students[].id - The unique identifier of the student.
 * @param {String} students[].firstname - The first name of the student.
 * @param {String} students[].location - The location of the student.
 * @returns {Array<Number>} An array of student IDs.
 * @throws {TypeError} If the input is not an array.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
