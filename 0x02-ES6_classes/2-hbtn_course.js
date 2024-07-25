/**
 * Represents a course offered at Holberton School.
 * The course has a name, duration, and a list of enrolled students.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - The duration of the course in months.
   * @param {String[]} students - An array containing the names of students.
   * @throws {TypeError} Will throw error if 'name' is not a string etc.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Validates the name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Validates the name of the course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Validates the length of this course.
   */
  get length() {
    return this._length;
  }

  /**
   * Validates the length of this course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Validates the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Validates the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
