const fs = require('fs');

/**
 * Counts and groups students from a CSV data file asynchronously.
 *
 * This function reads a CSV file, counts the total number of students, and groups them by a specific field (e.g., department or course).
 * It outputs the total number of students and provides details on the number of students in each group, along with their names.
 *
 * The function operates asynchronously, returning a Promise that resolves when the operation is complete, or rejects if an error occurs.
 *
 * @param {string} dataPath - The file path to the CSV data file.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the operation completes successfully, or rejects with an error.
 * @throws Will throw an error if the file cannot be read or loaded.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      // If an error occurs, reject the promise with an error message
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Split the file content into lines
      const fileLines = data
        .toString('utf-8')
        .trim() // Remove extra spaces or newlines
        .split('\n'); // Split into lines by newline

      // Object to group students by their field (e.g., department or course)
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
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);

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

      // Resolve the promise when the operation is complete
      resolve(true);
    }
  });
});

module.exports = countStudents;
