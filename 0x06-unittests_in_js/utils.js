/**
 * Utility functions for basic arithmetic operations.
 *
 * This module provides a set of utility functions for performing basic
 * arithmetic operations such as summation, subtraction, and division.
 * Each operation rounds the input values to the nearest integer before
 * performing the operation.
 */

const Utils = {
  /**
   * Performs a basic arithmetic operation (SUM, SUBTRACT, DIVIDE) on two numbers.
   *
   * @param {string} type - The type of arithmetic operation to perform.
   *                        It should be one of the following strings: 'SUM', 'SUBTRACT', 'DIVIDE'.
   * @param {number} a - The first number. This value will be rounded to the nearest integer.
   * @param {number} b - The second number. This value will be rounded to the nearest integer.
   * @returns {number|string} - The result of the arithmetic operation. If the operation type is 'DIVIDE'
   *                            and the second number (after rounding) is 0, it returns the string 'Error'.
   */
  calculateNumber (type, a, b) {
    // Perform the operation based on the type argument

    if (type === 'SUM') {
      // Return the sum of the two rounded numbers
      return Math.round(a) + Math.round(b);
    }

    if (type === 'SUBTRACT') {
      // Return the difference between the two rounded numbers
      return Math.round(a) - Math.round(b);
    }

    if (type === 'DIVIDE') {
      // Check if the second number (after rounding) is zero to avoid division by zero
      if (Math.round(b) === 0) {
        return 'Error'; // Return 'Error' if division by zero is attempted
      } else {
        // Return the result of dividing the two rounded numbers
        return Math.round(a) / Math.round(b);
      }
    }

    // Return 0 if the operation type is not recognized
    return 0;
  }
};

// Export the Utils object to make it available for importing in other modules
module.exports = Utils;
