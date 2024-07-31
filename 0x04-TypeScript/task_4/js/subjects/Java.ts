export interface Teacher {
  /**
   * The number of years of experience teaching Java.
   * This property is optional.
   */
  experienceTeachingJava?: number;
}

export class Java extends Subject {
  /**
   * Retrieves the requirements for the Java subject.
   * @returns A string listing the requirements for Java.
   */
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  /**
   * Retrieves the available teacher for the Java subject.
   * @returns A string indicating the availability of a teacher.
   * If a teacher with experienceTeachingJava is not set, it returns 'No available teacher'.
   * Otherwise, it returns the teacher's first name.
   */
  getAvailableTeacher(): string {
    if (!this.teacher.experienceTeachingJava) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
