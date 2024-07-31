/**
 * Interface representing major credits.
 * @interface
 */
export interface MajorCredits {
  /**
   * The number of major credits.
   * This is a branded type to differentiate major credits from other numeric values.
   */
  credits: number & { __brand: 'MajorCredits.credits' };
}

/**
 * Interface representing minor credits.
 * @interface
 */
export interface MinorCredits {
  /**
   * The number of minor credits.
   * This is a branded type to differentiate minor credits from other numeric values.
   */
  credits: number & { __brand: 'MinorCredits.credits' };
}

/**
 * Sums the major credits of two subjects.
 * @param subject1 - The first subject with major credits.
 * @param subject2 - The second subject with major credits.
 * @returns An object containing the total major credits, branded as MajorCredits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

/**
 * Sums the minor credits of two subjects.
 * @param subject1 - The first subject with minor credits.
 * @param subject2 - The second subject with minor credits.
 * @returns An object containing the total minor credits, branded as MinorCredits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
