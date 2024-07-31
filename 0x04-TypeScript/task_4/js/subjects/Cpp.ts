namespace Subjects {
  /**
   * Interface representing a Teacher.
   */
  export interface Teacher {
    /**
     * The number of years of experience teaching C++.
     * This property is optional.
     */
    experienceTeachingC?: number;
  }

  /**
   * Class representing a C++ subject, extending the Subject class.
   */
  export class Cpp extends Subject {
    /**
     * Retrieves the requirements for the C++ subject.
     * @returns A string listing the requirements for C++.
     */
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    /**
     * Retrieves the available teacher for the C++ subject.
     * @returns A string indicating the availability of a teacher.
     * If a teacher with experienceTeachingC is not set, it returns 'No available teacher'.
     * Otherwise, it returns the teacher's first name.
     */
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
