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
