// Task 1: Teacher Interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2: Directors Interface
export interface Directors extends Teacher {
  numberOfReports: number;
}
