export interface Teacher {
  /**
   * The number of years of experience teaching React.
   * This property is optional.
   */
  experienceTeachingReact?: number;
}

export class React extends Subject {
  /**
   * Retrieves the requirements for the React subject.
   * @returns A string listing the requirements for React.
   */
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  /**
   * Retrieves the available teacher for the React subject.
   * @returns A string indicating the availability of a teacher.
   * If a teacher with experienceTeachingReact is not set, it returns 'No available teacher'.
   * Otherwise, it returns the teacher's first name.
   */
  getAvailableTeacher(): string {
    if (!this.teacher.experienceTeachingReact) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
