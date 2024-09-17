import fs from 'fs'; // Import the file system module

/**
 * Reads and processes a CSV database of students.
 *
 * @function readDatabase
 * @param {String} dataPath - The file path to the CSV file containing student data.
 *
 * @returns {Promise<Object>} A promise that resolves with an object where:
 * - Each key is a field of study (e.g., "CS", "Math").
 * - Each value is an array of student objects with `firstname`, `lastname`, and `age`.
 *
 * Example output:
 * {
 *   "CS": [
 *     { "firstname": "John", "lastname": "Doe", "age": 23 },
 *     { "firstname": "Jane", "lastname": "Smith", "age": 21 }
 *   ],
 *   "Math": [
 *     { "firstname": "Alice", "lastname": "Brown", "age": 22 }
 *   ]
 * }
 *
 * @throws Will reject with an error if the file cannot be read or if no data path is provided.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // If the data path is invalid or empty, reject with an error
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // Asynchronously read the CSV file
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      // Reject the promise if there is an error reading the file
      reject(new Error('Cannot load the database'));
      return;
    }

    // Process the file contents if data is successfully read
    const fileLines = data
      .toString('utf-8')
      .trim()
      .split('\n');

    const studentGroups = {}; // To store students grouped by field
    const dbFieldNames = fileLines[0].split(','); // Column headers (first line of CSV)
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1); // All fields except the last one (field of study)

    // Process each line (excluding the first header line)
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(','); // Split the line into individual fields
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1); // All properties except the last one
      const field = studentRecord[studentRecord.length - 1]; // The last value is the field of study

      // If the field of study is not already a key in the studentGroups object, add it
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Create an object representing the student with their properties
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]); // Create an array of [key, value] pairs
      studentGroups[field].push(Object.fromEntries(studentEntries)); // Convert the array to an object and add it to the field group
    }

    // Resolve the promise with the processed student groups
    resolve(studentGroups);
  });
});

export default readDatabase; // Export the function as the default module export
module.exports = readDatabase; // Support CommonJS module exports
