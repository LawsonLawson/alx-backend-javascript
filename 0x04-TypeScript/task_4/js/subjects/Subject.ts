namespace Subjects {
  /**
   * Class representing a generic subject.
   */
  export class Subject {
    /**
     * The teacher assigned to this subject.
     */
    teacher: Teacher;

    /**
     * Sets the teacher for this subject.
     * @param teacher - The teacher to be assigned to the subject.
     */
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
