/**
 * Performs a mathematical operation (SUM, SUBTRACT, or DIVIDE) on two numbers after rounding them.
 *
 * @param {string} type - The operation type to perform. It can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number to operate on.
 * @param {number} b - The second number to operate on.
 * @returns {number|string} - The result of the operation. If the operation type is 'DIVIDE' and the second number (after rounding) is 0, returns 'Error'.
 *
 * @example
 * // Returns 5 (1.4 is rounded to 1 and 3.6 is rounded to 4)
 * calculateNumber('SUM', 1.4, 3.6);
 *
 * @example
 * // Returns -1 (2.4 is rounded to 2 and 3.6 is rounded to 4)
 * calculateNumber('SUBTRACT', 2.4, 3.6);
 *
 * @example
 * // Returns 'Error' (Division by zero)
 * calculateNumber('DIVIDE', 2.4, 0);
 *
 * @example
 * // Returns 2 (7.6 is rounded to 8 and 3.4 is rounded to 3)
 * calculateNumber('DIVIDE', 7.6, 3.4);
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
