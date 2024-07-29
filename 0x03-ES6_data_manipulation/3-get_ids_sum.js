/**
 * Calculates the sum of the IDs of a list of student objects.
 *
 * This function accepts an array of student objects and returns the sum of
 * their IDs. If the input is not an array, it returns 0.
 *
 * @function
 * @name getStudentIdsSum
 * @param {Array<Object>} students - The list of student objects.
 * @param {Number} students[].id - The unique identifier of the student.
 * @param {String} students[].firstname - The first name of the student.
 * @param {String} students[].location - The location of the student.
 * @returns {Number} The sum of the IDs of the students.
 * @throws {TypeError} If the student parameter is not an array.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
