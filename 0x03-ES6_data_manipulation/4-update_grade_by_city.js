/**
 * Updates the grades of a list students in a given city.
 *
 * This function accepts an array of student objects, a city name, and an array
 * of new grades. It returns an array of students from the specified city with
 * their grades updated. If a student does not have a new grade, their grade
 * will be set to `N/A`. If the input is not array, it returns an empty array.
 *
 * @function
 * @name updateStudentGradeByCity
 * @param {Array<Object>} students - The list of student objects.
 * @param {Number} student[].id - The unique identifier of the student.
 * @param {String} student[].firstname - The first name of the student.
 * @param {String} city - The city of students whose grades are to be updated.
 * @param {Array<Object>} newGrades - The new grades to be given to a student.
 * @param {Number} newGrades[].studentId - The unique identifier of the
 * student to whom the grade belongs.
 * @param {Number} newGrade[].grade - The new grade of the student.
 * returns {Array<Object>} An array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
