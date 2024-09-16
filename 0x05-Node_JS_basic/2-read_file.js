const fs = require('fs');

/**
 * Counts and groups students from a CSV data file.
 *
 * This function reads a CSV file containing student information, counts the total number
 * of students, and groups them by a specific field (e.g., department or course).
 * It then outputs the total number of students and the number of students in each group,
 * along with their names.
 *
 * @param {string} dataPath - The file path to the CSV data file.
 * @throws Will throw an error if the file does not exist or is not a valid file.
 *
 * @example
 * // Assuming the CSV file contains:
 * // "firstname,lastname,age,field\nJohn,Doe,20,CS\nJane,Smith,22,Math"
 * countStudents('students.csv');
 *
 * // Output:
 * // Number of students: 2
 * // Number of students in CS: 1. List: John
 * // Number of students in Math: 1. List: Jane
 *
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  // Check if the file exists and is a valid file
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the CSV file and split it into lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim() // Remove extra spaces or newlines
    .split('\n'); // Split into lines by newlines

  // Object to group students by a specific field (e.g., department or course)
  const studentGroups = {};

  // Extract field names (columns) from the first line of the CSV file
  const dbFieldNames = fileLines[0].split(',');

  // Extract the property names for students (excluding the last field)
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Process each student's record from the CSV (starting from the second line)
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(','); // Split the line into individual data points
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1); // Student properties (e.g., name, age)
    const field = studentRecord[studentRecord.length - 1]; // The last field (e.g., department/course)

    // Initialize the group if it doesn't exist
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }

    // Create key-value pairs for the student's properties
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);

    // Add the student object to the corresponding group
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);

  console.log(`Number of students: ${totalStudents}`);

  // Display the number of students in each group along with their names
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
