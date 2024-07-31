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
