// Task 5

/**
 * Interface defining the structure for a Director.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface defining the structure for a Teacher.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class representing a Director implementing DirectorInterface.
 */
export class Director implements DirectorInterface {
  workFromHome(): string {
    console.log('Working from home');
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    console.log('Getting a coffee break');
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    console.log('Getting to director tasks');
    return 'Getting to director tasks';
  }
}

/**
 * Class representing a Teacher implementing TeacherInterface.
 */
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Function to create an employee instance based on the salary.
 * @param salary - The salary of the employee, can be a number or string
 * @returns An instance of Teacher or Director
 */
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

// Task 6

/**
 * Type guard to check if an employee is a Director.
 * @param employee - The employee to check
 * @returns True if the employee is a Director, otherwise false
 */
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Function to execute the work tasks of an employee based on their role.
 * @param employee - The employee whose tasks are to be executed
 * @returns The work task message
 */
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let msg: string;

  if (isDirector(employee)) {
    msg = employee.workDirectorTasks();
  } else {
    msg = employee.workTeacherTasks();
  }

  console.log(msg);
  return msg;
}

// Task 7

/**
 * Type representing the subjects that can be taught.
 */
type Subjects = 'Math' | 'History';

/**
 * Function to teach a class based on the subject.
 * @param todayClass - The subject of the class to be taught
 * @returns A message indicating the class being taught
 */
export function teachClass(todayClass: Subjects): string | undefined {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
