// Task 1: Teacher Interface
/**
 * Represents a Teacher with mandatory and optional properties.
 */
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2: Directors Interface
/**
 * Represents a Director who extends the Teacher interface with additional property.
 */
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3: Print Teacher Function Interface
/**
 * Function type that takes a first name and last name and returns a string.
 */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function to print a teacher's name in a specific format.
 *
 * @param firstName - The first name of the teacher
 * @param lastName - The last name of the teacher
 * @returns A string with the first letter of the first name followed by the full last name
 */
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

// Task 4: Writing a Class
/**
 * Constructor interface for creating a new StudentClass instance.
 */
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Interface representing a student class with required methods.
 */
export interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * StudentClass implementing StudentClassInterface with methods and properties.
 */
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Method indicating that the student is currently working on homework.
   *
   * @returns A string indicating the student is working
   */
  workOnHomework() {
    return 'Currently working';
  }

  /**
   * Method to display the student's first name.
   *
   * @returns The first name of the student
   */
  displayName() {
    return this.firstName;
  }
}
